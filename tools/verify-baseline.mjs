// Checks that the built site (_site/) serves the same markup as the live wewill.tech pages it was rebuilt from.
// Usage: npm run build && node tools/verify-baseline.mjs
// Comparison ignores whitespace-only differences and applies the same deliberate changes the rebuild makes
// (site.js.php → site.js, /blog/?slug=x → /blog/x/, duplicate </main> dropped). Exit code 1 on any mismatch.
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const manifest = JSON.parse(await fs.readFile(path.join(root, 'tools', 'baseline-sources.json'), 'utf8'));
const rewriteUrls = s => s
  .replaceAll('/assets/site.js.php', '/assets/site.js')
  .replace(/(https:\/\/wewill\.tech)?\/blog\/\?slug=([a-z0-9-]+)/g, (_, host = '', slug) => `${host}/blog/${slug}/`);
const dropDuplicateMainClose = s => {
  const first = s.indexOf('</main>'), last = s.lastIndexOf('</main>');
  return first !== last ? s.slice(0, last) + s.slice(last + '</main>'.length) : s;
};
const collapse = s => s.replace(/\r\n/g, '\n').replace(/\s+/g, ' ').replace(/> </g, '><').trim();

let failures = 0;
for (const p of manifest.pages) {
  const builtPath = path.join(root, '_site', p.source.replace(/^src\//, '').replace(/\.njk$/, '.html'));
  const built = collapse(await fs.readFile(builtPath, 'utf8'));
  const live = collapse(dropDuplicateMainClose(rewriteUrls(await (await fetch(p.live)).text())));
  if (built === live) { console.log(`MATCH     ${p.key}`); continue; }
  failures++;
  let i = 0; while (i < built.length && built[i] === live[i]) i++;
  console.log(`MISMATCH  ${p.key} at char ${i}\n  live:  …${live.slice(Math.max(0, i - 80), i + 120)}\n  built: …${built.slice(Math.max(0, i - 80), i + 120)}`);
}
console.log(failures ? `\n${failures} page(s) differ from the live site.` : `\nAll ${manifest.pages.length} pages match the live site.`);
process.exit(failures ? 1 : 0);
