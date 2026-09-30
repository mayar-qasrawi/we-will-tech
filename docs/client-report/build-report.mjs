// Builds the client report PDF. The per-page SEO tables are read from the built site (_site/), so every
// title, description, heading count and link count in the report matches what ships.
// Usage: npx eleventy && node docs/client-report/build-report.mjs
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath, pathToFileURL } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const site = path.resolve(here, '../../_site');
const OUT_PDF = path.join(here, 'WE-WILL-Technology_Website-Report_Digify.pdf');

const PAGES = [
  ['/', 'Home'],
  ['/vibe-test/', 'Vibe Test'],
  ['/solutions/', 'Solutions'],
  ['/resources/', 'Resources'],
  ['/about/', 'About'],
  ['/contact/', 'Contact'],
  ['/blog/', 'Blog'],
  ['/blog/the-triad-quality-framework/', 'Article: The Triad Quality Framework'],
  ['/blog/when-software-quality-becomes-a-business-decision/', 'Article: When software quality becomes a business decision'],
  ['/privacy/', 'Privacy Policy'],
  ['/terms/', 'Terms of Use'],
];
const FOOTER_H2 = 5; // footer group headings on every page

const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const dec = s => s?.replace(/&amp;/g, '&').replace(/&#39;/g, "'").replace(/&#039;/g, "'").replace(/&quot;/g, '"').replace(/&nbsp;/g, ' ');
const strip = s => s.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
const m = (h, re) => { const x = h.match(re); return x ? dec(x[1].trim()) : null; };
const count = (h, tag) => (h.match(new RegExp('<' + tag + '[\\s>]', 'g')) || []).length;

const html = Object.fromEntries(PAGES.map(([u]) => [u, fs.readFileSync(path.join(site, u, 'index.html'), 'utf8')]));

// Links pointing to each page, counted across the 11 public pages only
const inlinks = {};
for (const h of Object.values(html)) {
  for (const x of h.matchAll(/href="([^"#?]*)(?:[?#][^"]*)?"/g)) {
    let l = x[1];
    if (l.startsWith('https://wewill.tech')) l = l.slice(19) || '/';
    if (!l.startsWith('/') || l.startsWith('//') || /^\/(assets|uploads)\//.test(l)) continue;
    if (!l.endsWith('/')) l += '/';
    inlinks[l] = (inlinks[l] || 0) + 1;
  }
}

const sitemapXml = fs.readFileSync(path.join(site, 'sitemap.xml'), 'utf8');
const inSitemap = new Set([...sitemapXml.matchAll(/<loc>https:\/\/wewill\.tech([^<]*)<\/loc>/g)].map(x => x[1]));

function schemaTypes(h) {
  const types = [];
  for (const x of h.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    (function walk(o) { if (o && typeof o === 'object') { if (o['@type']) types.push(o['@type']); Object.values(o).forEach(walk); } })(JSON.parse(x[1]));
  }
  const c = {}; types.forEach(t => { c[t] = (c[t] || 0) + 1; });
  return Object.keys(c).length ? Object.entries(c).map(([t, k]) => (k > 1 && t !== 'Organization' ? `${t} (×${k})` : t)).join(', ') : 'None yet';
}

const data = PAGES.map(([u, name]) => {
  const h = html[u];
  const title = m(h, /<title>([\s\S]*?)<\/title>/);
  const desc = m(h, /<meta name="description" content="([^"]*)"/);
  const h1s = [...h.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/g)].map(x => dec(strip(x[1].replace(/<br\s*\/?>|<\/span>\s*<span/gi, ' · $&'))));
  const og = m(h, /og:image" content="([^"]*)"/) || '';
  return {
    u, name, title, desc,
    canonical: m(h, /<link rel="canonical" href="([^"]*)"/),
    noindex: /<meta name="robots" content="noindex"/.test(h),
    h1: h1s, H: { h1: count(h, 'h1'), h2: count(h, 'h2') - FOOTER_H2, h3: count(h, 'h3'), h4: count(h, 'h4') },
    schema: schemaTypes(h),
    ogImage: og.includes('og-image.php') ? 'Branded image generated for this page' : 'The article\'s cover image',
    links: inlinks[u] || 0,
    sitemap: inSitemap.has(u),
  };
});

// Special-case H1 display for pages whose H1 holds two visual lines
const h1Text = d => {
  if (d.u === '/vibe-test/') return 'Vibe Test by WE WILL Technology · Tests. Fixes. Verifies. Hands you the receipts. (two lines)';
  if (!d.h1.length) return null;
  return d.h1[0].replace(/\s·\s/g, ' ').replace(/\s+/g, ' ').trim();
};

const glance = `<table>
  <thead><tr><th style="width:30%">Page</th><th>Meta title</th><th class="num">Title<br>chars</th><th class="num">Desc.<br>chars</th><th class="num">One<br>H1</th><th class="num">Google</th></tr></thead>
  <tbody>
${data.map(d => `    <tr><td><strong>${esc(d.name)}</strong><br><span class="mono" style="color:#717383">${esc(d.u)}</span></td><td>${esc(d.title)}</td><td class="num">${d.title.length}</td><td class="num">${d.desc.length}${d.desc.length > 155 ? ' <span class="tag warn">long</span>' : ''}</td><td class="num">${d.H.h1 === 1 ? '✓' : '<span class="tag warn">none</span>'}</td><td class="num">${d.noindex ? 'noindex' : 'Open'}</td></tr>`).join('\n')}
  </tbody>
</table>`;

const perPage = data.map((d, i) => {
  const h1 = h1Text(d);
  const heads = `${d.H.h1} H1, ${d.H.h2} H2, ${d.H.h3} H3${d.H.h4 ? `, ${d.H.h4} H4` : ''}`;
  return `<h4 class="keep" id="seo-${i}">5.${i + 1} ${esc(d.name)}</h4>
<table class="kv"><tbody>
  <tr><td>Main heading (H1)</td><td>${h1 ? esc(h1) : '<span class="tag warn">No H1 yet</span> The biggest heading is an H2: "Let’s Talk About Your Product’s Quality." We recommend making it the H1 at launch'}</td></tr>
  <tr><td>Meta title</td><td>${esc(d.title)} <span class="chars">(${d.title.length} characters)</span></td></tr>
  <tr><td>Meta description</td><td>${esc(d.desc)} <span class="chars">(${d.desc.length} characters${d.desc.length > 155 ? ', Google may trim the end' : ''})</span></td></tr>
  <tr><td>Official address</td><td class="mono">${esc(d.canonical)}</td></tr>
  <tr><td>Social image</td><td>${d.ogImage}</td></tr>
  <tr><td>Labels for Google</td><td>${esc(d.schema)}</td></tr>
  <tr><td>Headings</td><td>${heads}</td></tr>
  <tr><td>On Google</td><td>${d.noindex ? 'Kept out of search results (noindex) until the legal text is ready; not in the sitemap' : (d.sitemap ? 'Open to Google and listed in the sitemap' : 'Open to Google')}</td></tr>
  <tr><td>Links pointing here</td><td>${d.links} links across the site</td></tr>
</tbody></table>`;
}).join('\n');

const xmlBody = sitemapXml.replace(/<!--[\s\S]*?-->\s*/g, '').trim();
const sitemapBlock = `<pre class="xml">${esc(xmlBody)
  .replace(/(&lt;\/?(?:urlset|url|loc)(?:\s[^&]*?)?&gt;)/g, '<span class="t">$1</span>')
  .replace(/(&lt;\?xml[^?]*\?&gt;)/, '<span class="c">$1</span>')}</pre>`;

let out = fs.readFileSync(path.join(here, 'report.template.html'), 'utf8')
  .replace('<!--SEO_GLANCE-->', glance)
  .replace('<!--SEO_PAGES-->', perPage)
  .replace('<!--SITEMAP_XML-->', sitemapBlock);
const outHtml = path.join(here, 'report.html');
fs.writeFileSync(outHtml, out);

const chrome = ['C:/Program Files/Google/Chrome/Application/chrome.exe', 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe'].find(p => fs.existsSync(p));
execFileSync(chrome, ['--headless=new', '--disable-gpu', '--no-pdf-header-footer', '--run-all-compositor-stages-before-draw', '--virtual-time-budget=5000', `--print-to-pdf=${OUT_PDF}`, pathToFileURL(outHtml).href], { stdio: 'inherit' });
fs.unlinkSync(outHtml); // the HTML is only an intermediate step
console.log('Wrote', OUT_PDF);
