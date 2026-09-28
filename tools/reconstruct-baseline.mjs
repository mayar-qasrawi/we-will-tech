// Rebuilds the live wewill.tech site as an Eleventy (11ty) project whose output is the same HTML the live
// PHP site serves, split into a shared layout, partials and one file per section.
//
// It was run once, on 2026-09-28, to create the baseline commit. Re-running it OVERWRITES src/ with the
// current live site, so only run it into an empty directory:   node tools/reconstruct-baseline.mjs <outDir>
//
// Deliberate differences from the live site (all required for static hosting or DOM-neutral):
//   - /assets/site.js.php is saved and served as /assets/site.js
//   - blog URLs /blog/?slug=<slug> become /blog/<slug>/ (links, canonical and og:url)
//   - the duplicate closing </main> tag after the chat widget is dropped (browsers ignore it; DOM unchanged)
// Forms keep their live actions (/contact-submit.php, /blog/ search); they cannot submit on a static host.
import fs from 'node:fs/promises';
import path from 'node:path';

const OUT = process.argv[2];
if (!OUT) { console.error('usage: node tools/reconstruct-baseline.mjs <outDir>'); process.exit(1); }
const ORIGIN = 'https://wewill.tech';

// Home first: its header is the header template; its sections become the shared section partials.
const SECTION_PAGES = ['genai-based-systems', 'why-we-will', 'services', 'quality-canvas', 'impact', 'how-we-work', 'team', 'success-stories', 'clients', 'knowledge', 'contact'];
const BLOG_SLUGS = ['when-software-quality-becomes-a-business-decision', 'the-triad-quality-framework'];
const PAGES = [
  { key: 'home', url: '/', out: 'index.njk', kind: 'home' },
  ...SECTION_PAGES.map(s => ({ key: s, url: `/${s}/`, out: `${s}/index.njk`, kind: 'section-page' })),
  { key: 'ai-era-quality-services', url: '/ai-era-quality-services/', out: 'ai-era-quality-services/index.njk', kind: 'page' },
  { key: 'blog', url: '/blog/', out: 'blog/index.njk', kind: 'page' },
  ...BLOG_SLUGS.map(s => ({ key: `blog--${s}`, url: `/blog/?slug=${s}`, out: `blog/${s}/index.njk`, kind: 'page' })),
];

const write = async (rel, text) => { const p = path.join(OUT, rel); await fs.mkdir(path.dirname(p), { recursive: true }); await fs.writeFile(p, text); };
const get = async (url, binary = false) => {
  const r = await fetch(url.startsWith('http') ? url : ORIGIN + url);
  if (!r.ok) throw new Error(`${r.status} ${url}`);
  return binary ? Buffer.from(await r.arrayBuffer()) : (await r.text()).replace(/\r\n/g, '\n');
};
const rewriteUrls = s => s
  .replaceAll('/assets/site.js.php', '/assets/site.js')
  .replace(/(https:\/\/wewill\.tech)?\/blog\/\?slug=([a-z0-9-]+)/g, (_, host = '', slug) => `${host}/blog/${slug}/`);
const between = (s, start, end, from = 0) => {
  const a = s.indexOf(start, from); if (a < 0) throw new Error(`marker not found: ${start}`);
  const b = s.indexOf(end, a + start.length); if (b < 0) throw new Error(`marker not found: ${end}`);
  return { text: s.slice(a + start.length, b), start: a, end: b + end.length };
};
const lineStart = (s, i) => s.lastIndexOf('\n', i - 1) + 1;
const collapse = s => s.replace(/\s+/g, ' ').replace(/> </g, '><').trim();

// ---- Fetch pages ----
const html = {};
for (const p of PAGES) html[p.key] = rewriteUrls(await get(p.url));

// ---- Head values (all pages share one head structure; verified in verify step) ----
const HEAD_FIELDS = [
  ['description', /<meta name="description" content="([^"]*)"/],
  ['canonical', /<link rel="canonical" href="([^"]*)"/],
  ['ogType', /<meta property="og:type" content="([^"]*)"/],
  ['ogTitle', /<meta property="og:title" content="([^"]*)"/],
  ['ogDescription', /<meta property="og:description" content="([^"]*)"/],
  ['ogUrl', /<meta property="og:url" content="([^"]*)"/],
  ['ogImage', /<meta property="og:image" content="([^"]*)"/],
  ['twitterTitle', /<meta name="twitter:title" content="([^"]*)"/],
  ['twitterDescription', /<meta name="twitter:description" content="([^"]*)"/],
  ['twitterImage', /<meta name="twitter:image" content="([^"]*)"/],
];
const headOf = key => between(html[key], '<head>', '</head>').text;
function headValues(key) {
  const h = headOf(key);
  const v = { title: h.match(/<title>([^<]*)<\/title>/)[1] };
  for (const [k, re] of HEAD_FIELDS) { const m = h.match(re); if (!m) throw new Error(`${key}: missing ${k}`); v[k] = m[1]; }
  return v;
}
let headTpl = headOf('home').replace(/<title>[^<]*<\/title>/, '<title>{{ title | safe }}</title>');
for (const [k, re] of HEAD_FIELDS) headTpl = headTpl.replace(re, m => m.replace(/(content|href)="[^"]*"/, `$1="{{ ${k} | safe }}"`));

// ---- Shared chrome from Home ----
const H = html.home;
const bodyOpen = H.indexOf('<body id="top">');
const headerStart = lineStart(H, H.indexOf('<header class="site-shell-header">'));
const headerEnd = H.indexOf('</header>') + '</header>'.length;
const bodyStart = H.slice(bodyOpen + '<body id="top">'.length, headerStart);
let header = H.slice(headerStart, headerEnd);
const NAV_IDS = ['ai-era-quality-services-promo', 'why-we-will', 'quality-canvas', 'how-we-work', 'contact'];
header = header.replace('href="#hero"', 'href="{{ navHomeHref }}"')
  .replace(new RegExp(`href="#(${NAV_IDS.join('|')})"(\\s*)class=""`, 'g'),
    `href="{{ navPrefix }}#$1"$2class="{% if activeNav == '$1' %}is-active{% endif %}"`);
if ((header.match(/activeNav/g) || []).length !== NAV_IDS.length) throw new Error('header nav template: active-state markers not all placed');
const footerStart = lineStart(H, H.indexOf('<footer class="site-shell-footer">'));
const footerEnd = H.indexOf('</footer>', H.indexOf('<footer class="site-shell-footer">')) + '</footer>'.length;
const footer = H.slice(footerStart, footerEnd);
const scripts = H.slice(footerEnd, H.indexOf('</body>'));

// Main content and whatever sits between the first </main> and the site footer (the chat widget on Home/Contact).
function mainParts(key) {
  const s = html[key];
  const mainOpen = s.indexOf('<main>') + '<main>'.length;
  const mainClose = s.indexOf('</main>', mainOpen);
  const fStart = lineStart(s, s.indexOf('<footer class="site-shell-footer">'));
  const after = s.slice(mainClose + '</main>'.length, fStart);
  return { main: s.slice(mainOpen, lineStart(s, mainClose)), after };
}
const chatAfter = mainParts('home').after;
const chatWidget = chatAfter.slice(chatAfter.indexOf('<!-- CHAT WIDGET -->'), chatAfter.lastIndexOf('</main>')).replace(/\s+$/, '\n');

// ---- Split Home into section partials ----
function splitSections(main) {
  const out = []; let i = 0;
  while (true) {
    const open = main.indexOf('<section', i);
    if (open < 0) break;
    let depth = 0, j = open;
    const re = /<section\b|<\/section>/g; re.lastIndex = open;
    let m;
    while ((m = re.exec(main))) { depth += m[0] === '</section>' ? -1 : 1; if (depth === 0) { j = m.index + m[0].length; break; } }
    const start = lineStart(main, open);
    const between = main.slice(i, start);
    if (between.trim()) throw new Error(`unexpected content between sections: ${between.trim().slice(0, 80)}`);
    const id = main.slice(open, main.indexOf('>', open)).match(/id="([^"]+)"/)?.[1];
    out.push({ id, text: main.slice(start, j) + '\n' });
    i = j;
  }
  if (main.slice(i).trim()) throw new Error('unexpected content after last section');
  return out;
}
const homeSections = splitSections(mainParts('home').main);

// ---- Write templates ----
await write('src/_includes/partials/head.njk', headTpl.replace(/^\n/, ''));
await write('src/_includes/partials/body-start.html', bodyStart.replace(/^\n/, ''));
await write('src/_includes/partials/header.njk', header + '\n');
await write('src/_includes/partials/chat-widget.html', chatWidget);
await write('src/_includes/partials/footer.html', footer + '\n');
await write('src/_includes/partials/scripts.html', scripts.replace(/^\n/, ''));
await write('src/_includes/layouts/base.njk', [
  '<!DOCTYPE html>',
  '<html lang="en">',
  '<head>',
  '{% include "partials/head.njk" %}</head>',
  '<body id="top">',
  '{% include "partials/body-start.html" %}{% include "partials/header.njk" %}',
  '  <main>',
  '{{ content | safe }}  </main>',
  '{% if chatWidget %}',
  '{% include "partials/chat-widget.html" %}{% endif %}',
  '{% include "partials/footer.html" %}{% include "partials/scripts.html" %}</body>',
  '</html>',
  ''].join('\n'));
for (const s of homeSections) await write(`src/_includes/sections/home/${s.id}.html`, s.text);

const fm = (key, extra) => {
  const v = { layout: 'layouts/base.njk', ...headValues(key), ...extra };
  return '---\n' + Object.entries(v).map(([k, val]) => `${k}: ${JSON.stringify(val)}`).join('\n') + '\n---\n';
};
const notes = [];
for (const p of PAGES) {
  const { main, after } = mainParts(p.key);
  const chat = after.includes('chat-widget');
  const nav = p.kind === 'home' ? { navHomeHref: '#hero', navPrefix: '' } : { navHomeHref: '/', navPrefix: '/' };
  // Standalone section pages mark their own header item as current (live site: class="is-active").
  if (p.kind === 'section-page' && NAV_IDS.includes(p.key)) nav.activeNav = p.key;
  let body;
  if (p.kind === 'home') body = homeSections.map(s => `{% include "sections/home/${s.id}.html" %}`).join('\n') + '\n';
  else if (p.kind === 'section-page') {
    const [sec] = splitSections(main);
    const shared = homeSections.find(h => h.id === sec.id);
    if (shared && collapse(shared.text) === collapse(sec.text)) body = `{% include "sections/home/${sec.id}.html" %}\n`;
    else { await write(`src/_includes/sections/pages/${sec.id}.html`, sec.text); body = `{% include "sections/pages/${sec.id}.html" %}\n`; notes.push(`${p.key}: section differs from Home's #${sec.id}; kept its own partial`); }
  } else { await write(`src/_includes/pages/${p.key}.html`, main); body = `{% include "pages/${p.key}.html" %}\n`; }
  await write(`src/${p.out}`, fm(p.key, { ...nav, chatWidget: chat }) + body);
}

// ---- Assets ----
await write('src/assets/site.css', await get('/assets/site.css'));
await write('src/assets/layout.css', await get('/assets/layout.css'));
const siteJs = await get('/assets/site.js.php');
await write('src/assets/site.js', siteJs);
const uploadRefs = new Set();
for (const t of [...Object.values(html), siteJs]) for (const m of t.matchAll(/(?<![\w.])\/uploads\/[A-Za-z0-9._\/-]+/g)) uploadRefs.add(m[0]);
for (const u of uploadRefs) await write(`src${u}`, await get(u, true));

// ---- Manifest for tools/verify-baseline.mjs, which compares the built _site/ output with the live pages ----
await write('tools/baseline-sources.json', JSON.stringify({ capturedFrom: ORIGIN, date: new Date().toISOString(), pages: PAGES.map(p => ({ key: p.key, live: ORIGIN + p.url, source: 'src/' + p.out })), uploads: [...uploadRefs].sort() }, null, 2));
console.log(`pages: ${PAGES.length}, home sections: ${homeSections.map(s => s.id).join(', ')}`);
console.log(`uploads downloaded: ${uploadRefs.size}`);
console.log(notes.length ? notes.join('\n') : 'all 11 section pages reuse the Home section partials');
