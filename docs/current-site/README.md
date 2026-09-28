# Current live site — reference snapshot

Read-only record of the site **before** the restructure, captured on 2026-09-28 from <https://wewill.tech/> and the current Vibe Test page <https://vibe-test.oneapp.dev/>. Nothing in this folder is a design decision; it is the baseline for the Section Matrix, the design audit and later before/after comparisons.

## Contents

| Path | What it holds |
|---|---|
| [sitemap.md](sitemap.md) | Page inventory, navigation and footer, Home section order, how pages relate, every link destination, and problems found during capture |
| `pages/<slug>.md` | Text content of each page, region by region (header, each section, footer, floating widgets), in DOM order, with page metadata |
| [pages/_global-chrome.md](pages/_global-chrome.md) | The shared header, footer and chat widget (captured once, from Home) |
| `pages/ar/<slug>.md` | Arabic version of every page that has one (the site's own EN/AR toggle switched to AR) |
| `screenshots/<slug>/` | `full--desktop.jpg` (1440 px wide) and `full--mobile.jpg` (390 px wide) full pages; `first-viewport--*.jpg`; for multi-section pages, one shot per region: `NN-<region>--desktop.jpg` / `--mobile.jpg`; `mobile-nav-open--mobile.jpg` where a menu exists |
| `screenshots/<slug>/ar/` | Arabic full-page and first-viewport screenshots. Where the Arabic page overflows sideways (Home, Contact), `first-viewport--*--as-rendered.jpg` shows the bug as a visitor gets it; the other Arabic shots are taken with the overflow clipped so the content is visible |
| `raw/html/<slug>.html` | Rendered DOM (after JavaScript) at desktop width, English |
| `raw/assets/` | The site's shared `layout.css`, `site.css` and `site.js` (served as `/assets/site.js.php`) |
| `raw/vibe-test-bundle.html` | The Vibe Test page exactly as served (a single-file build with inline styles and scripts); open it in a browser to see the current page offline |
| `raw/capture-data.json` | Everything collected: metadata, headings, images, links, per-region text, console errors, failed requests |

## How it was captured

- Google Chrome (headless) driven by playwright-core 1.63.
- Desktop: 1440×900 CSS px at 1× pixel density. Mobile: 390×844 CSS px at 2×, iPhone user agent, touch enabled. Full-page shots are saved at 1 image pixel per CSS pixel; region shots on mobile at 2×.
- Every page was scrolled top to bottom before capture so scroll-triggered reveal animations and lazy images fire. wewill.tech screenshots use Playwright's `animations: "disabled"`: finite animations jump to their end state; looping ones (e.g. the testimonial marquee) are frozen at their start. The Vibe Test page is shot with animations running (after a 9-second wait), because its "Live QA run" terminal only shows text while its animation plays.
- Region screenshots hide the sticky header and the floating chat button so they don't cover the section being shot.
- Text is read from the DOM, not from images, and keeps the source casing (CSS `text-transform`, e.g. uppercase eyebrows, is not applied). Where an element holds both languages, the hidden one is listed as a "hidden variant".
- Arabic was captured by clicking the site's own language toggle (`[data-lang="ar"]` on wewill.tech; the "Switch language / تبديل اللغة" button on the Vibe Test page).
- Nothing was submitted or triggered: the contact form, chat widget and WhatsApp/email buttons were recorded but not used. The `/admin/` area was not visited.
