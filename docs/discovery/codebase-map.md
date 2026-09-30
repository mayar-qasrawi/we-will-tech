# Codebase map — wewill.tech static rebuild

Mapped on 2026-09-28 from branch `redesign/strategic-refinement` at commit `1f4ff84`, which has the same `src/` as the baseline commit `ff65018`. The map is meant to guide how work is split between parallel agents.

**How it was checked.** I read every file in `src/`, `tools/`, `eleventy.config.js` and `package.json`. I built the site into a temporary folder (`eleventy --output=<tmp>`: 16 pages written, 30 files copied, 0.15 s). I also ran checks in headless Google Chrome 153 against that build, served from a local static server, at 1440×900 and 390×844 in both EN and AR. The browser was driven by `playwright-core` from the npm/npx cache; nothing was installed into the repo. All line numbers are 1-based and refer to the files as they are at this commit.

Section names and numbers follow `docs/current-site/pages/*.md`. For example, "home §2 `#hero`" means section 2 of `pages/home.md`.

---

## 0. Key findings (read first)

1. **The site.js English dictionary overrides the English text in the markup.** On load, `applyLanguage('en')` replaces the text of every `[data-i18n]` element with `translations.en[key]` (`src/assets/site.js` 576–586). In 7 places the markup and the dictionary disagree, and visitors see the **dictionary** text:
   - hero eyebrow, title and subtitle (`hero.html` 12, 14, 18);
   - success kicker, title, subtitle and CTA (`success-stories.html` 4, 5, 6, 245).

   Verified in Chrome: the H1 shows "We don't just test software. We protect product decisions." even though `hero.html` says "Ship with confidence. Not just clean test reports." **Editing copy in a partial that still carries `data-i18n` has no visible effect.** The same applies to blog bodies: `data-blog-html-en` is re-injected as `innerHTML` on every load (site.js 655–660).
2. **Everything visual is in one file.** `src/assets/site.css` (2,555 lines, 350 rules) holds the tokens, the global RTL rules, every section, and two **global responsive blocks at the end** (960 px at 2308–2438, 640 px at 2440–2489). Those blocks mix rules for 10 sections. Any parallel section work touches this file.
3. **Standalone pages reuse the Home partials.** Eleven one-section routes (`/why-we-will/`, `/contact/`, …) include `sections/home/<id>.html` directly, so editing a Home section also changes its standalone page.
4. **The Arabic overflow cause is confirmed.** `.contact-hp { position:absolute !important; left:-10000px }` (site.css 2134–2141) makes the document 11,040 px wide in AR on `/` and `/contact/` at 1440 px.
   - Replacing it with `left:auto; inset-inline-start:-10000px` brings the width back to 1,440 px (tested live in the page).
   - Hiding the element also works.
5. **The team carousel does not work in Arabic, and it ignores reduced motion.** It uses LTR `scrollLeft` maths (site.js 758–799).
   - In AR, "next" leaves `scrollLeft` at 0.
   - Its `setInterval` keeps scrolling under `prefers-reduced-motion: reduce` (moved 720 px after 3.5 s in the test).
6. **Arabic coverage has gaps.**
   - 4 testimonial quotes have an empty Arabic value (`success.case1/2/5/7.quote`), so the English stays in AR mode.
   - The Vibe Test verdict card on Home has no i18n at all.
   - The blog **does** have Arabic (`data-blog-*` attributes, verified in the browser). `sitemap.md`'s "blog is English only" is a gap in the capture, not in the code.
7. **There is a lot of dead code.**
   - site.js: 88 of 217 dictionary keys are unused (the entire `sara.*` namespace, 66 keys; `hero.chip1-4`; `knowledge.card*`/`knowledge.empty*`), and 8 of 20 `siteSettings` keys are unused. Three JS blocks target markup that doesn't exist (706–713, 715–756, 801–804).
   - CSS: about 20% of site.css (roughly 520 of 2,555 lines, about 70 of 350 rules) targets markup that doesn't exist:
     - legacy header, 147–294, plus its media rules at 2309–2348;
     - Sara page, 1017–1182;
     - admin client carousel, 1820–1909;
     - smaller leftovers (§5.1).
8. **There are 6 separate i18n mechanisms** (details in §6.3):
   - `data-i18n` plus the site.js dictionary;
   - `data-site-setting*` plus `siteSettings`;
   - `.i18n-en`/`.i18n-ar` spans toggled by CSS;
   - `data-deep-dive-en/ar`;
   - `data-blog-*-en/ar`;
   - `data-social-label-en/ar`.
9. **Nothing checks quality.** There is no lint, no tests and no CI. `verify:baseline` compares against the live site, so it will fail by design as soon as the redesign changes any page. It cannot serve as a regression gate.
10. **The Vibe Test page cannot be reused as-is.** It is not source code but a runtime bundle (`dc-runtime` that loads React 18.3.1, ReactDOM and Babel from unpkg). The markup inside is plain HTML with about 200 inline `style=""` attributes and 18 `style-hover` attributes, and it contains `{{ rootRef }}` / `{{ toggleLang }}`, which Nunjucks would try to evaluate. It uses no web fonts: the "TESTS. FIXES. VERIFIES." display type is a system stack (`"Helvetica Neue","Segoe UI",system-ui`) at weight 800, uppercase. Under `prefers-reduced-motion` the "LIVE QA RUN" terminal rows and the receipt rows stay **invisible** (their inline `opacity:0` only lifts while the animation runs).
11. **The 11 standalone section pages have no `<h1>`** (their only heading is the section's h2). `/success-stories/`'s "Talk to WE WILL" points to `#contact`, which doesn't exist on that page.
12. **Duplicate and oversized assets.**
    - The two blog "covers" are the same file (`967fea…png` = `f069d4…png`, the WE WILL logo lockup, despite "blue"/"purple" alt text).
    - The AR logo `6fbc46…jpg` is byte-identical to the EN logo `7f2b7b…jpg`.
    - About 2.9 MB of team photos are shown at 96 px; the One Studio logo is 3503×3503 px and shown at 36 px high.

---

## 1. Stack and commands

| Item | Value |
|---|---|
| Generator | **Eleventy 3.1.6** (`@11ty/eleventy ^3.1.6`, the only devDependency; `package-lock.json` present). `"type": "module"`, `engines.node >= 20` (local: Node 24.20.0, npm 11.19.0). |
| Config | `eleventy.config.js` (15 lines). Passthrough copies `src/assets → /assets` and `src/uploads → /uploads`. Folders: input `src`, includes `src/_includes`, output `_site`. `templateFormats: ['njk']`, so **only `.njk` files become pages**; `.html`, `.md` or `.txt` placed in `src/` are ignored unless passthrough is added. `htmlTemplateEngine: 'njk'`. |
| Templating | Nunjucks. `{% include "x.html" %}` renders the included file **through Nunjucks**, so any `{{`, `{%` or `{#` in a partial, pasted script or CSS is interpreted. None of the current assets or partials contain these sequences; the Vibe Test template does. Nunjucks autoescape is on (Eleventy passes `environmentOptions: { dev: true }`, so the Nunjucks default `autoescape: true` applies), which is why `head.njk` prints every front-matter value with the `safe` filter and the layout prints `content` with `safe` (`base.njk` 8). |
| Page assembly | Each URL has one route file, `src/<path>/index.njk` (front matter plus include lines) → layout `src/_includes/layouts/base.njk`. |
| URLs | Default Eleventy permalinks: `src/why-we-will/index.njk` → `/why-we-will/`. Blog posts are `/blog/<slug>/` (the live site uses `/blog/?slug=<slug>`). |
| Front end | Plain HTML, CSS and vanilla JS. No framework, no bundler, no preprocessor. Two stylesheets in `<head>` (`/assets/site.css`, then `/assets/layout.css`). One script, `/assets/site.js` (served live as `/assets/site.js.php`), plus 4 inline scripts. |
| External runtime dependencies | Google Fonts (`head.njk` 19–21); YouTube thumbnails and iframe (site.js 868–889); `https://wewill.tech/og-image.php` (og:image and twitter:image of 14 routes); live-only endpoints `/contact-submit.php` and `/blog/?q=` search. |

**How `base.njk` builds a page** (12 lines):

```
<!DOCTYPE html><html lang="en"><head> {% include "partials/head.njk" %} </head>          ← line 2–4
<body id="top"> {% include "partials/body-start.html" %}{% include "partials/header.njk" %} ← line 5–6
  <main>{{ content | safe }}</main>                                                        ← line 7–8 (route's includes)
{% if chatWidget %}{% include "partials/chat-widget.html" %}{% endif %}                    ← line 9–10
{% include "partials/footer.html" %}{% include "partials/scripts.html" %}</body></html>    ← line 11–12
```

### npm scripts (`package.json`)

| Script | Command | Notes |
|---|---|---|
| `dev` | `eleventy --serve` | Dev server with live reload on port 8080 by default. The dev server was already running on 8080 during mapping; I did not use it. |
| `build` | `eleventy` | Writes `_site/` (16 HTML files and 30 copied files). |
| `verify:baseline` | `node tools/verify-baseline.mjs` | Downloads each live page listed in `tools/baseline-sources.json`, applies the same URL rewrites, collapses whitespace and compares it with `_site/**/index.html`. It needs network access and a prior build, and it reports MISMATCH for every page the redesign changes. |

`tools/reconstruct-baseline.mjs` is the one-off script that produced `src/` from the live site. **Never re-run it into the repo**: it overwrites `src/`.

### What is missing

- No linter (HTML, CSS or JS).
- No formatter configuration and no `.editorconfig`.
- No tests, no accessibility checks, no link checker, no CI.
- No `robots.txt`, `sitemap.xml`, 404 page or favicon in `src/`.

### Proposed minimal lint and test commands (not installed)

Chrome 153 is installed at `C:\Program Files\Google\Chrome\Application\chrome.exe`. With `channel: 'chrome'` Playwright needs no browser download; set `PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD=1` when installing.

```jsonc
// package.json → "devDependencies" to add: html-validate, stylelint, stylelint-config-standard,
//   postcss-html, @playwright/test, @axe-core/playwright   (+ optional: stylelint-use-logical)
"scripts": {
  "lint:html": "html-validate \"_site/**/*.html\"",
  "lint:css":  "stylelint \"src/assets/**/*.css\" \"src/_includes/**/*.html\" --custom-syntax postcss-html",
  "test":      "playwright test",
  "test:a11y": "playwright test --grep @a11y",
  "check":     "npm run build && npm run lint:html && npm run lint:css && npm test"
}
```

**`.htmlvalidate.json`.** Start from `{"extends":["html-validate:recommended"]}` and relax these rules for the baseline:
- `no-inline-style`;
- `no-trailing-whitespace`;
- `prefer-native-element`;
- `attribute-boolean-style`;
- `element-permitted-content`, because of `<style>` inside `<section>`/`<main>` in the AEQS partials.

Then tighten the rules section by section. Rules that will flag real issues:
- `wcag/h37` (13 team images without `alt`);
- `no-dup-id`;
- `valid-id`;
- `heading-level`.

**`.stylelintrc.json`.**
- Extend `stylelint-config-standard`.
- Turn off `selector-class-pattern` and `no-descending-specificity` for the baseline.
- Add `declaration-property-value-disallowed-list` or `stylelint-use-logical` so new code uses logical properties (RTL).
- Add `color-no-hex` for **new** section files only, to push token usage.

**`playwright.config.ts`.**
- `webServer`: `{ command: 'npx eleventy --serve --port=8181', url: 'http://localhost:8181', reuseExistingServer: true }`.
- Two projects:
  - desktop `{ viewport: 1440×900, channel: 'chrome' }`;
  - mobile `{ viewport: 390×844, isMobile: true, channel: 'chrome' }`.

**Smoke tests worth having on day one** (every one of these currently fails or is fragile somewhere):
1. All 16 routes return 200 and have exactly one `<h1>`.
2. There are no console errors, allowing the two known `/wp-content/` 404s until fixed.
3. **No horizontal overflow in EN and AR**: `scrollWidth <= clientWidth` after clicking `[data-lang="ar"]`. This catches `.contact-hp`.
4. The language toggle sets `html[lang][dir]` and `body.lang-ar` and persists across navigation (`ww_language`).
5. Every header anchor (`/#…`) resolves to an existing id.
6. `emulateMedia({ reducedMotion: 'reduce' })` → every `[data-reveal]` is visible and nothing moves.
7. `@a11y`: `new AxeBuilder({ page }).withTags(['wcag2a','wcag2aa','wcag21a','wcag21aa','wcag22aa'])` on each route in EN and AR.
8. Internal links resolve. This catches `/business-care-quality` and the 404 "original article" links.

---

## 2. Routes

Every route file sets these front-matter fields:

`layout: "layouts/base.njk"`, `title`, `description`, `canonical`, `ogType`, `ogTitle`, `ogDescription`, `ogUrl`, `ogImage`, `twitterTitle`, `twitterDescription`, `twitterImage`, `navHomeHref`, `navPrefix`, `chatWidget` and, on four routes, `activeNav`.

Values are JSON-quoted strings. `og:image` values are already HTML-escaped (`&amp;`) and point to the live `https://wewill.tech/og-image.php?...`, except the blog posts, which use `https://wewill.tech/uploads/…png`. `canonical` and `og:url` are absolute `https://wewill.tech/...` URLs.

Every page also gets the layout partials: `partials/head.njk`, `partials/body-start.html`, `partials/header.njk`, `partials/footer.html` and `partials/scripts.html`, plus `partials/chat-widget.html` when `chatWidget` is true.

| URL | Route file | `navHomeHref` / `navPrefix` | `activeNav` | `chatWidget` | Content include(s) | `<title>` |
|---|---|---|---|---|---|---|
| `/` | `src/index.njk` | `#hero` / `""` | — | **true** | lines 18–31, in order: `sections/home/hero.html`, `vibe-test.html`, `ai-era-quality-services-promo.html`, `genai-based-systems.html`, `why-we-will.html`, `services.html`, `quality-canvas.html`, `impact.html`, `how-we-work.html`, `team.html`, `success-stories.html`, `clients.html`, `knowledge.html`, `contact.html` | WE WILL - Home |
| `/genai-based-systems/` | `src/genai-based-systems/index.njk` | `/` / `/` | — | false | `sections/home/genai-based-systems.html` | WE WILL - GenAI-based Systems |
| `/why-we-will/` | `src/why-we-will/index.njk` | `/` / `/` | `why-we-will` | false | `sections/home/why-we-will.html` | WE WILL - Why WE WILL |
| `/services/` | `src/services/index.njk` | `/` / `/` | — | false | `sections/home/services.html` | WE WILL - Services |
| `/quality-canvas/` | `src/quality-canvas/index.njk` | `/` / `/` | `quality-canvas` | false | `sections/home/quality-canvas.html` | WE WILL - Quality Canvas |
| `/impact/` | `src/impact/index.njk` | `/` / `/` | — | false | `sections/home/impact.html` | WE WILL - Impact |
| `/how-we-work/` | `src/how-we-work/index.njk` | `/` / `/` | `how-we-work` | false | `sections/home/how-we-work.html` | WE WILL - How We Work |
| `/team/` | `src/team/index.njk` | `/` / `/` | — | false | `sections/home/team.html` | WE WILL - Team |
| `/success-stories/` | `src/success-stories/index.njk` | `/` / `/` | — | false | `sections/home/success-stories.html` | WE WILL - Testimonials |
| `/clients/` | `src/clients/index.njk` | `/` / `/` | — | false | `sections/home/clients.html` | WE WILL - Clients |
| `/knowledge/` | `src/knowledge/index.njk` | `/` / `/` | — | false | `sections/home/knowledge.html` | WE WILL - Knowledge |
| `/contact/` | `src/contact/index.njk` | `/` / `/` | `contact` | **true** | `sections/home/contact.html` | WE WILL - Contact |
| `/ai-era-quality-services/` | `src/ai-era-quality-services/index.njk` | `/` / `/` | — (see note) | false | `pages/ai-era-quality-services.html` | WE WILL — AI-Era Quality Services |
| `/blog/` | `src/blog/index.njk` | `/` / `/` | — | false | `pages/blog.html` | WE WILL - Blog |
| `/blog/the-triad-quality-framework/` | `src/blog/the-triad-quality-framework/index.njk` | `/` / `/` | — | false | `pages/blog--the-triad-quality-framework.html` (`ogType: article`) | WE WILL - The Triad Quality Framework |
| `/blog/when-software-quality-becomes-a-business-decision/` | `src/blog/when-software-quality-becomes-a-business-decision/index.njk` | `/` / `/` | — | false | `pages/blog--when-software-quality-becomes-a-business-decision.html` (`ogType: article`) | WE WILL - When software quality becomes a business decision |

Notes:
- **Header nav targets.** The nav links point at Home section ids `#ai-era-quality-services-promo`, `#why-we-will`, `#quality-canvas`, `#how-we-work` and `#contact` (`header.njk` 21, 27, 33, 39, 45).
  - Active state: `class="{% if activeNav == '<id>' %}is-active{% endif %}"`. The "Home" and "Blog" items have no active mechanism.
  - The "AI-Era Quality" item points at the **Home promo** (`/#ai-era-quality-services-promo`), not the AEQS page, so the AEQS page never shows an active item.
- **Scroll offset.** `section[id] { scroll-margin-top: 118px }` (`layout.css` 18–20) is the anchor offset for every route. The header is 65 px tall on desktop and 120 px on mobile when closed.
- **Snapshot structure (verified in Chrome).** Home has 14 `main > section` in the order above, with no duplicate ids. The 11 standalone pages have one `<section>` each and **0 `<h1>`**. AEQS has 8 `<section>` and 1 h1. The blog index has 2 sections and 1 h1. The posts have one `article` and 1 h1.

---

## 3. Section → code map

Legend:
- **hard/var** = hard-coded colour literals / `var(--…)` references in that CSS range (the method is in §4.10).
- "Shared" CSS means the utilities in site.css 296–393 (§5.4).
- All Home sections use the reveal system (`data-reveal` / `data-reveal-children`, site.css 2502–2522 and `scripts.html` 16–41) and `applyLanguage` (site.js 564–675).

### 3.1 Home sections (`src/_includes/sections/home/`)

| Section | Partial (lines) | CSS | JS | i18n | Assets |
|---|---|---|---|---|---|
| **home §2 `#hero`** `section#hero.hero.hero-dark` | `hero.html` 1–49. Backdrop spans 2–7; `.hero-inner` 9–48; eyebrow 10–13; h1 14–17; subtitle 18–21; CTAs 22–25 (`#contact`, `#services`); `.hero-signal` 27–47. | site.css 395–719:<br>`.hero` 397–404<br>backdrop/aurora/gridfloor/beam and keyframes 406–480<br>`.hero-inner` 483–493<br>`.hero-eyebrow(-pulse)` 495–526<br>`.hero-title` + gradient `span` (`@supports`) 528–555<br>`.hero-subtitle` 557–563<br>`.hero-actions` 565–575<br>`.hero-dark .btn-*` 577–598<br>`.hero-signal*` 600–698<br>reduced motion 700–719<br>RTL 101–125, 573–575, 637–642, 680–682<br>@960 2350–2384; @640 2441–2444<br>entrance 2524–2540 and 2543–2555<br>Shared `.btn*` 344–378.<br>**43 hard / 8 var** | `scripts.html` 7–14 adds `html.is-loaded` (entrance, with a double `requestAnimationFrame`). `head.njk` 3 adds `html.js-anim`. site.js 580–584: `data-i18n-html="true"` → `innerHTML` for `hero.title`. | 10 keys: `hero.eyebrow`, `hero.title` (HTML), `hero.subtitle`, `hero.ctaPrimary`, `hero.ctaSecondary`, `hero.signalLabel`, `hero.signal1`–`4`. AR ✓ for all. ⚠ The EN dictionary overrides the markup for eyebrow, title and subtitle. `hero.chip1-4` are unused. | None: the backdrop is CSS gradients only. |
| **home §3 `#vibe-test`** `section#vibe-test.section.section-sara` | `vibe-test.html` 1–64. Copy and CTAs 3–15; verdict card 17–34; video facade 36–44; capability grid 46–62. | site.css 753–1015:<br>`.section-sara` 755–759<br>`.sara-section-inner` 761–766<br>`.sara-actions` 772–777<br>`.sara-visual-card` 779–793<br>`.sara-verdict*` 813–873<br>`.sara-capability-*` 875–909, 999–1015<br>`.sara-video*` 911–997<br>(`.sara-image-frame` 795–811 is unused)<br>RTL 117–125; @960 2350–2358, 2394–2408; @640 2468–2470<br>**21 hard / 23 var** | site.js 846–902, YouTube facade:<br>• `[data-youtube-facade]` inside `.sara-video`<br>• `[data-video-media]`<br>• adds `.sara-video.is-ready` (the block is `display:none` until then) and `.is-playing`<br>• swaps in a `youtube-nocookie` iframe on click. | 12 keys `vibeTest.*` (kicker, title, subtitle, ctaPrimary, ctaSecondary, videoLabel, card1–3 title/body). AR ✓. ⚠ The verdict card text (18–33) and the "01/02/03" indexes have no i18n, so they stay English in AR. | YouTube thumbnail `i.ytimg.com/vi/yRBbqktuGEs/maxresdefault.jpg`, falling back to `hqdefault.jpg`. Links: `https://vibe-test.oneapp.dev`, `/contact/`. |
| **home §4 `#ai-era-quality-services-promo`** `section.section.aeqs-promo` | `ai-era-quality-services-promo.html` 1–158. Inline `<style>` 2–109; markup 110–157 (`.section-inner[data-reveal-children]`; the list `.aeqs-promo-stack` 129–156 is `aria-hidden`). | **Inline** `<style>`:<br>`.aeqs-promo` 3–10 (overrides `.section` padding to `64px 6%`)<br>`.aeqs-promo .section-inner` 11–18 (grid)<br>eyebrow 19–30; h2 31–39; sub 40–45; CTA 46–70; stack 71–100<br>i18n toggle 101–104; RTL 70, 104; `@media (max-width:860px)` 105–108<br>Also affected by the global `body.lang-ar .section` (site.css 107–110).<br>**18 hard / 0 var** (its own palette: `#0f1f6b`, `#1b3bbf`, `#ffd76b`, …) | Reveal only. | 10 `.i18n-en`/`.i18n-ar` pairs toggled by CSS on `body.lang-ar`; the dictionary is not used. AR ✓ complete. | None. CTA → `/ai-era-quality-services/`. |
| **home §5 `#genai-based-systems`** `section.section.section-genai` | `genai-based-systems.html` 1–40. Header 3–6; `.genai-layout` 8–38 (feature card 9–19, summary card 21–37). | site.css 1184–1280:<br>`.section-genai` 1184–1188<br>`.genai-layout` 1190–1195<br>cards 1197–1222, overriding `.card` 380–393 by source order<br>chips 1224–1250; summary 1252–1280<br>RTL 127–130; @960 2350–2358, 2414–2417<br>**17 hard / 1 var** (Tailwind slate literals such as `#1f2937` and `#64748b`; radius 28px) | — | 14 keys `genai.*`. AR ✓. | None. CTA → `/contact/`. |
| **home §6 `#why-we-will`** `section.section.section-why` | `why-we-will.html` 1–35. Header 3–10; `.why-grid` 11–33 (3 × `.card.why-card`). | site.css 721–745<br>Shared `.card` 380–393<br>RTL 117–125; @960 2386–2388<br>**2 hard / 2 var** | — | 9 keys `why.*`. AR ✓. | — |
| **home §7 `#services`** `section.section.section-services` | `services.html` 1–42. Header 3–10; `.services-grid` 11–40 (4 × `.card.service-card`). | site.css 747–751 (background) and 1282–1296 (grid, cards)<br>Shared `.card`<br>@960 2390–2392<br>**1 hard / 1 var** | — | 11 keys `services.*`. AR ✓. | — |
| **home §8 `#quality-canvas`** `section.section.section-canvas` | `quality-canvas.html` 1–53. Copy, list and CTAs 3–24; `.canvas-card` 26–50. **Two inline `style=""`** on lines 27 and 46. | site.css 1298–1372:<br>`.canvas-inner` 1304–1309<br>list 1311–1330<br>actions 1332–1337<br>card, grid, cell, label, note 1339–1372<br>RTL 117–130; @960 2350–2358<br>**4 hard / 7 var** | — | 19 keys `canvas.*`. AR ✓. (The AR `canvas.featuresNote` means something different from the EN.) | External links: ChatGPT GPT, LinkedIn article. |
| **home §9 `#impact`** `section.section.section-impact` | `impact.html` 1–46. `.impact-grid` 11–44 (3 cards). | site.css 1374–1426 (arrow colours `#e11d48` / `#15803D`)<br>RTL 117–125; @960 2419–2421<br>**4 hard / 4 var** | — | 9 keys `impact.*`. AR ✓. The numbers and arrows are not translated. | — |
| **home §10 `#how-we-work`** `section.section.section-process` | `how-we-work.html` 1–46. `.process-grid` 11–44 (4 steps). | site.css 1428–1473<br>RTL 117–125; @960 2423–2425 (2 columns); @640 2446–2448 (1 column)<br>**3 hard / 6 var** | — | 11 keys **`process.*`** (the namespace name ≠ the id). AR ✓. | — |
| **home §11 `#team`** `section.section.section-team` | `team.html` 1–75. `.team-shell` 12–73 (buttons 13–14, `.team-scroller > .team-row` 16–72, 13 × `.team-card`). | site.css 1475–1594:<br>shell 1481–1488<br>scroller/row 1490–1498<br>card 1500–1534<br>avatar 1541–1555<br>name 1556–1559<br>nav buttons 1568–1594<br>(`.team-tagline` 1536–1540 and `.team-role` 1561–1565 are unused)<br>**12 hard / 7 var** | site.js 758–799 carousel:<br>• uses `document.querySelector` for `.team-scroller`, `.team-row`, `.team-nav-next`, `.team-nav-prev`, so only the first instance on a page is wired<br>• `scrollStep` = 70% width; auto-advances every 3000 ms, pauses on `mouseenter`<br>• ⚠ broken in RTL; ignores reduced motion | 3 keys `team.*`. AR ✓. Names are not translated. | 13 photos, **no `alt`**: `1bd4cda4…png`, `c2c34df4…jpg`, `e4e3c0eb…jpg`, `b4967899…jpg`, `7deaa3d6…jpg`, `4b56c105…jpg`, `23eb8415…jpg`, `20df78ae…jpg`, `e1f841e0…jpg`, `051477fc…png`, `7595ab96…jpg`, `df2c0c5c…jpg`, `f4674051…png` |
| **home §12 `#success-stories`** `section.section.section-success` | `success-stories.html` 1–249:<br>• header 3–10<br>• `.testimonial-wall` 12–242: featured card 13–20; marquee 22–131 (`.t-track` with inline `style="--t-count: 7;"` on 23, 2 × `.t-group` of 7 cards, the second `data-clone="true" aria-hidden="true"`); reverse marquee 133–242 (inline `--t-count` on 134)<br>• CTA 244–247 (`href="#contact"`, dead on `/success-stories/`) | site.css 1596–1804:<br>`.t-card` 1609–1614<br>featured 1617–1652<br>client/logo 1654–1678<br>marquee and `@keyframes ww-marquee` 1694–1731<br>track cards 1733–1760<br>RTL 1645–1647, 1762–1770 (the marquee is forced `direction:ltr` at 1700)<br>reduced motion 1772–1786<br>`.success-cta` 1793–1804<br>(`.t-logo-initials` 1680–1692 and `.text-brand` 1788–1791 are unused)<br>@960 2427–2433; @640 2459–2466 (reverse row hidden)<br>**8 hard / 18 var** | No JS (pure CSS marquee). The duration is `calc(var(--t-count,5)*10s)` = 70 s; hover or focus pauses. | 12 keys `success.*` (kicker, title, subtitle, cta, ctaButton, case1–7.quote).<br>⚠ The EN dictionary overrides kicker, title, subtitle and cta.<br>⚠ AR is **empty** for case1, 2, 5 and 7.<br>The quote markup appears 29 times (1 featured + 7 × 4). | Logos: `8636daa1…png` (One Studio, 3503 px), `40f07261…jpg` (MICEtribe), `49e1e631…png` (iStoria), `51aa9f07…jpg` (SellEnvo), `rasel.png`, `3b5edf33…jpg` (Darent) |
| **home §13 `#clients`** `section.section.section-clients` | `clients.html` 1–71. `.clients-shell > .clients-grid[data-reveal-children]` 18–69: 7 `figure.client-card` and 5 `a.client-card.client-card-link` (12 logos). | site.css 1806–1818 (shell) and 1911–1966 (grid, cards)<br>(legacy carousel 1820–1909 is unused)<br>@960 2435–2437; @640 2450–2457<br>**6 hard / 8 var** | site.js 715–756 targets `.clients-scroller`/`.clients-row`/`.clients-nav-*`, which don't exist, so it returns early (dead). | 3 keys `clients.*`. AR ✓. Figcaptions and `alt` are EN only. Alt errors: `iStoria logo` on One Studio (21), `Inspire` on SellEnvo (45). | `8636daa1…png`, `041a6689…jpg`, `3b5edf33…jpg`, `49e1e631…png`, `2d998f92…jpg`, `40f07261…jpg`, `51aa9f07…jpg`, `7319f2b2…jpg`, `rasel.png`, `27124395…png`, plus **2 broken** `https://wewill.tech/wp-content/uploads/2023/04/…` (57, 65) |
| **home §14 `#knowledge`** `section.section.section-knowledge` | `knowledge.html` 1–39. `.knowledge-grid` 12–37: 4 × `a.knowledge-card` (13–18 → `https://wewill.tech/business-care-quality`, a **404**; 19–24 → `/blog/the-triad-quality-framework/` with `target=_blank`; 25–30; 31–36). | site.css 1968–2075:<br>card 2003–2024<br>pill 2026–2036<br>link 2049–2061<br>its **own** `@media` 960 and 640 at 2063–2075<br>(`.knowledge-empty*` 1982–2001 is unused)<br>**8 hard / 12 var** | site.js 669–674 swaps `[data-deep-dive-copy]` text from `data-deep-dive-en`/`-ar`. | 3 keys `knowledge.kicker/title/subtitle` plus 16 elements with inline `data-deep-dive-en/ar`. AR ✓. The dictionary keys `knowledge.card1–4.*` and `knowledge.empty.*` (18) are unused. | — (external links only) |
| **home §15 `#contact`** `section.section.section-contact` | `contact.html` 1–115. Header 3–10; `form#contact-form` 11–31 (honeypot `.contact-hp` 24–27, `#contact-status` 30); **inline script 32–113**. | site.css 2077–2167:<br>`.contact-inner` 2084–2120<br>`.visually-hidden` 2122–2132 (global utility)<br>**`.contact-hp` 2134–2141** (RTL overflow)<br>`.contact-status*` 2143–2167<br>**11 hard / 0 var** | Inline script (see §6.8): binds `#contact-form`, then `fetch(form.action)` POST → `/contact-submit.php`. | 8 keys `contact.*` (+4 placeholders via `data-i18n-placeholder`). AR ✓. Status messages EN/AR inline at 41–54. The honeypot label is EN only. | — |

**Other page chrome, mapped to `_global-chrome.md`**

| Element | Partial (lines) | CSS | JS | i18n | Assets |
|---|---|---|---|---|---|
| **Header / navigation** (home §1) | `partials/header.njk` 1–66:<br>brand 3–12<br>`nav#shell-nav.shell-nav` 13–56 (7 links)<br>`.shell-header-actions` 57–63 (lang switcher 58–61, `.shell-nav-toggle` 62 with `aria-controls="shell-nav"`)<br>`.shell-nav-backdrop` 64 (no CSS or JS uses it) | layout.css:<br>1–12 (sticky, `z-index:80`, blur)<br>30–36, 38–145<br>≤900 249–301 (hamburger; nav `display:none` until `.is-open`)<br>≤640 303–324<br>site.css 66–94 `.lang-switcher`/`.lang-btn`; the fixed positioning is neutralised by `.shell-lang-switcher` (layout.css 118–130, which must stay **after** site.css).<br>**Colours**: layout 38–145 = 6 hard / 3 var; site 66–94 = 4 / 3; shell base layout 1–28 (shared with footer) = 5 / 0 | site.js 683–692: toggle `.shell-nav.is-open` and `aria-expanded`. ⚠ The nav never closes on link click, and when open on mobile the sticky header grows to 490 px. site.js 596–625 sets `.lang-btn.is-active`, `[data-site-setting]` text, logo `src`/`alt`. | `siteSettings`:<br>`brand_name`<br>`brand_logo` (AR file is identical)<br>`header_nav_hero`, `header_nav_ai_era_quality_services_promo`, `header_nav_why_we_will`, `header_nav_quality_canvas`, `header_nav_how_we_work`, `header_nav_contact`, `header_nav_blog`<br>AR ✓ | `/uploads/7f2b7b2a…jpg` (EN logo); `/uploads/6fbc468c…jpg` (AR, same bytes) |
| **Footer** (home §17) | `partials/footer.html` 1–72:<br>brand and tagline 4–16<br>meta 17–20 (`© 2023 WE WILL`)<br>`nav.shell-footer-socials` 24–69 (4 links, inline SVG icons) | layout.css 1–7 (shared with header; the footer is re-set to `position:relative`), 22–28 (`#0f172a` background), 147–247, ≤900 289–291 and 297–300, ≤640 321–323. site.css 2169–2172 is an empty "FOOTER" comment.<br>**6 hard / 0 var** | site.js 600–606 and 627–632 | `footer_tagline`, `footer_copyright`, `footer_rights`, `brand_name`, plus `data-social-label-en/ar` on 4 labels. AR ✓. `siteSettings.footer_socials` (514–547) is unused; the markup is hard-coded. WhatsApp `phone=002 01023833940` contains a space. | Logo `7f2b7b2a…jpg`, inline SVG |
| **Chat widget** (home §16) | `partials/chat-widget.html` 1–21, included by `base.njk` 9–10 only when `chatWidget: true` (`/` and `/contact/`); it sits between `</main>` and the footer. | site.css 2174–2304:<br>widget 2176–2183 (`position:fixed`, `z-index:60`)<br>toggle 2185–2198<br>panel 2200–2226<br>(2285–2295 is unused)<br>RTL 132–135, 2217–2220; @640 2481–2488<br>**8 hard / 8 var** | site.js 806–844. Needs ids `#chat-panel`, `#chat-message`, `#chat-send-wa`, `#chat-send-email` and classes `.chat-toggle`, `.chat-close`; toggles `.open`. WhatsApp → `https://wa.me/970567720720` (a **different number** from the footer); email → `mailto:info@wewill.tech`. | `chat.title`, `chat.subtitle`, `chat.whatsapp`, `chat.email`, `chat.placeholder`. AR ✓. | Emoji glyphs only |
| **EN/AR switch** | Markup `header.njk` 58–61 (`.lang-btn[data-lang="en" \| "ar"]`). Pre-paint `partials/body-start.html` 1–16 reads `localStorage.ww_language` and sets `html[lang][dir]` and `body.lang-ar` before first paint. | site.css 66–94 (buttons), 96–135 (global RTL); layout.css 118–130, 293–295, 313–315 | site.js 553–681: `LANGUAGE_STORAGE_KEY='ww_language'`, `getStoredLanguage()` 555–562, `applyLanguage(lang)` 564–675, click binding on **every** `.lang-btn` 677–679, initial run 681. `applyLanguage` also **writes** `ww_language='en'` on every load. | All mechanisms (§6.3) | — |
| **Contact form** | `sections/home/contact.html` 11–31 and 32–113 | site.css 2084–2167 | Inline (§6.8) | `contact.*` | — |

### 3.2 AI-Era Quality Services page

Route file: `src/ai-era-quality-services/index.njk`. Partial: `src/_includes/pages/ai-era-quality-services.html` (1,236 lines).

- A single inline `<style>` (2–602) holds all the page's CSS.
- The markup is wrapped in `div.aeqs` (604–1235).
- No `data-reveal`, no `data-i18n`, no JS.
- Bilingual copy uses 119 `.i18n-en`/`.i18n-ar` pairs, toggled in CSS at 22–32. AR ✓ complete.
- `.aeqs` defines scoped tokens at 3–20 (§4.2).
- Colours: **35 hard / 77 var**, all `--aeqs-*`.
- It shares nothing with site.css except the page chrome and `body.lang-ar`.
- Headings use Inter (inherited from `.aeqs`), not Geist.

| Section (aeqs md §) | Markup lines | Inline CSS lines | Notes |
|---|---|---|---|
| §2 hero `section.aeqs-hero` | 606–664 | 34–194 (eyebrow 51–62, h1 64–72, buttons 88–118, visual stack 125–194) | CTAs → `/contact/#contact` and `#aeqs-what-we-deliver`. The visual is `aria-hidden`. |
| §3 The Shift `section.aeqs-section.aeqs-shift` | 666–721 | 196–230 (generic section), 232–294 | RTL 258, 285–288 (physical margins) |
| §4 `#aeqs-what-we-deliver` | 723–877 (6 × `.aeqs-service-card`) | 296–348 | Emoji icons |
| §5 How we work together `.aeqs-process` | 879–951 (5 steps, `h4`) | 350–389 | Uses h4 directly under h2 (skips h3) |
| §6 Who we serve `.aeqs-audience` | 953–1050 (5 cards; `.aeqs-filter` 1020–1048) | 391–449 | `.aeqs-filter` RTL 427–430, 443–446 (physical borders and padding); `#f59e0b`/`#b45309` literals |
| §7 Proof `.aeqs-proof` | 1052–1102 | 451–476 | 8 chips |
| §8 FAQ `.aeqs-faq` | 1104–1199 (7 × `<details class="aeqs-faq-item">`) | 478–523 | Native disclosure, no JS |
| §9 Final CTA `.aeqs-final` | 1201–1221 | 525–549 | → `/contact/#contact` |
| §10 Sticky mobile CTA `div.aeqs-sticky` | 1223–1233 | 551–575; shown at ≤960 (591) | `position:fixed; z-index:55` |
| Responsive | — | `@media (max-width:960px)` 578–593; `(max-width:540px)` 594–601 | — |

### 3.3 Blog

| Page / section | Partial (lines) | CSS | JS | i18n | Assets |
|---|---|---|---|---|---|
| **Blog index** (blog.md §2 `.blog-hero`, §3 `.blog-listing`) | `pages/blog.html` 1–77:<br>hero 2–8 (uses `.section-kicker` and `.section-inner` from site.css)<br>listing 9–77: `form.blog-search` 11–33 (GET `/blog/`, `q`, `sort`; does not filter on a static host); `.blog-grid` 34–75 (2 × `article.blog-card`) | layout.css 326–561:<br>backgrounds 326–343<br>`.blog-title` 345–350<br>search 359–435 (`.blog-search-reset` 423–435 unused)<br>grid and cards 437–496 (`.blog-empty` 488–491 unused)<br>RTL 552–556<br>@980 563–567; @680 569–598<br>**27 hard / 4 var** | site.js 694–704: `.blog-sort-select` change → `form.requestSubmit()`. site.js 634–667 handles the `data-blog-*` swaps. | `data-blog-copy` + `data-blog-en/ar` (12), `data-blog-placeholder-en/ar` (1), `data-blog-option-en/ar` (2), `data-blog-alt-en/ar` (2). AR ✓ (verified in the browser). The dates (`Jun 22, 2024`, `Apr 3, 2024`) are not translated. | `967fea0f…png`, `f069d4b8…png` (identical files) |
| **Blog posts** (post md §2 `main`) | `pages/blog--the-triad-quality-framework.html` 1–49 and `pages/blog--when-software-quality-becomes-a-business-decision.html` 1–43:<br>`article.blog-article` → header 4–10, media 11–18, `.blog-article-body[data-blog-html]` from 19 (the whole body is duplicated in the `data-blog-html-en` and `-ar` attributes) | layout.css 498–561 (article, body typography, blockquote, RTL body 558–561)<br>@680 582–592 | site.js 655–660 **replaces the article `innerHTML` on every load**, in EN too. | `data-blog-copy` (2), `data-blog-html` (1), `data-blog-alt` (1). AR ✓. | Covers as above. "Read the original WE WILL article" → 404 URLs. |

---

## 4. Design tokens and styling system

### 4.1 Global custom properties (`src/assets/site.css` `:root`, lines 1–47)

Use counts cover site.css, layout.css and inline `style` attributes.

| Token | Value | Line | Uses |
|---|---|---|---|
| `--ww-ink` | `#0B1220` | 3 | 9 (site, layout) |
| `--ww-indigo` | `#1F3DDB` | 4 | 6 |
| `--ww-indigo-dark` | `#1530A6` | 5 | 3 |
| `--ww-indigo-tint` | `#E7ECFF` | 6 | 2 |
| `--ww-emerald` | `#0FAE6E` | 7 | 1 |
| `--ww-emerald-dark` | `#066B41` | 8 | 3 |
| `--ww-orange` | `#FF6716` | 9 | 7 |
| `--ww-orange-dark` | `#B23B00` | 10 | 4 |
| `--ww-orange-tint` | `#FFE7DA` | 11 | **0** |
| `--ww-emerald-tint-10` / `-16` | `#E7F7F1` / `#D9F2E8` | 14–15 | **0 / 0** |
| `--ww-orange-tint-10` | `#FFF0E8` | 16 | 2 |
| `--ww-indigo-tint-06` / `-08` | `#F2F3FD` / `#EDEFFC` | 17–18 | 1 / 1 |
| `--ww-blue` / `-blue-dark` / `-blue-light` (legacy aliases) | `var(--ww-indigo…)` | 21–23 | 7 / **19** / 0 |
| `--ww-bg` | `#ffffff` | 26 | 1 (`#ffffff`/`#fff` are hard-coded **77** times instead) |
| `--ww-soft-gray` / `--ww-surface` | `#F7F8FB` (both) | 27–28 | 12 / 1 |
| `--ww-text-main` | `var(--ww-ink)` | 29 | 3 |
| `--ww-text-muted` | `#5B6473` | 30 | 24 (including 1 inline `style` in `quality-canvas.html` 46) |
| `--ww-border` / `-border-strong` | `1px solid rgba(11,18,32,.08/.14)` | 31–32 | 2 / 1. Borders are usually hard-coded as `rgba(148,163,184,x)`, **47 times**. |
| `--ww-radius` / `-radius-sm` / `-radius-pill` | `12px` / `6px` / `999px` | 35–37 | 17 / **0** / 5 (`999px` is hard-coded **34** times) |
| `--ww-shadow-soft` / `-strong` / `-ring` | layered rgba(11,18,32) | 40–42 | 14 / 6 / 1 |
| `--ww-font-body` | `"Inter","Tajawal",system-ui,…` | 45 | 1. `body` hard-codes the same stack at 60. |
| `--ww-font-display` | `"Geist","Inter","Tajawal",…` | 46 | 6 |

Runtime custom properties:
- `--t-count` is set inline on `.t-track` (`success-stories.html` 23, 134) and read at site.css 1710.
- `--reveal-i` is set by JS (`scripts.html` 20) and read at site.css 2515.

### 4.2 Scoped tokens

`.aeqs { … }` in `ai-era-quality-services.html` 3–20:

| Token | Value | Uses |
|---|---|---|
| `--aeqs-blue` | `#1F3DDB` (= `--ww-indigo`) | 2 |
| `--aeqs-blue-dark` | `#1530A6` (= `--ww-indigo-dark`) | 15 |
| `--aeqs-blue-light` | `#E7ECFF` (= `--ww-indigo-tint`) | 4 |
| `--aeqs-orange` | `#FF6716` (= `--ww-orange`) | 1 |
| `--aeqs-orange-dark` | `#D54D08` (**differs** from `--ww-orange-dark #B23B00`) | 0 |
| `--aeqs-soft` | `#F7F8FB` | 6 |
| `--aeqs-text` | `#0B1220` | 7 |
| `--aeqs-muted` | `#5B6473` | 11 |
| `--aeqs-border` | `rgba(11,18,32,0.08)` | 15 |
| `--aeqs-radius` | `12px` | 8 |
| `--aeqs-shadow-soft` / `-strong` | same as the `--ww-*` shadows | 7 / 1 |

These duplicate the `--ww-*` tokens by value. When the tokens are consolidated, alias them (`--aeqs-blue: var(--ww-indigo)`).

The AEQS promo (`ai-era-quality-services-promo.html`) has **no** tokens and uses 18 hard-coded colours.

### 4.3 Fonts

- **Loaded** (`head.njk` 21): `https://fonts.googleapis.com/css2?family=Geist:wght@500;600;700;800&family=Inter:wght@400;500;600;700;800&family=Tajawal:wght@400;500;700&display=swap`, with preconnects at 19–20.
- **Body**: Inter (`body` site.css 59–64; line-height 1.6).
- **Display**: Geist (`--ww-font-display`), used by `.section-title`, `.hero-title`, `.hero-signal-text`, `.sara-verdict-conf b`, `.t-card-featured .t-quote(-mark)`.
- **Arabic**: Tajawal. Geist is Latin-only, so these rules force Tajawal in AR:
  - `body.lang-ar .hero-title, body.lang-ar .section-title` (101–105), which also resets `letter-spacing`;
  - `.hero-signal-text` (680–682);
  - `.t-card-featured .t-quote` (1645–1647).
  - `.section-kicker` asks for weight 600, which Tajawal doesn't have (400/500/700 are loaded).
- **Pages that don't use Geist**: the AEQS page, the promo and the blog titles all use Inter.
- **Weights declared**: 400 ×2, 500 ×9, 600 ×30, 700 ×35, 800 ×2 (plus default bold on h1–h3).

### 4.4 Type scale actually used

The root font size is 16 px (browser default). There are **42 distinct `font-size` values** across site.css, layout.css and the two inline blocks. 6 use `clamp()`, of which 4 are live: the hero title, genai h3, featured quote and blog title. Thirteen distinct values fall between 0.72rem and 0.98rem.

| Role | Selector (file:line) | Size | Line-height | Weight | Tracking | Font |
|---|---|---|---|---|---|---|
| Hero H1 | `.hero-title` (site 528) | `clamp(2.5rem,5.6vw,4.35rem)`: 40 → 69.6 px (measured 69.6 px at 1440, 40 px at 390) | 1.06 | 700 | -0.035em | Geist |
| AEQS H1 | `.aeqs-hero h1` (aeqs 64; 586) | 2.9rem → 2.2rem at ≤960 | 1.1 | 800 | -0.03em | Inter |
| Blog H1 | `.blog-title` (layout 345) | `clamp(2.5rem,5vw,4.6rem)` | 0.98 | (bold) | -0.04em | Inter |
| Section H2 | `.section-title` (site 324) | **2.1rem (33.6 px) at every width**; there is no mobile step | 1.15 | 700 | -0.025em | Geist / Tajawal |
| AEQS H2 / promo H2 | `.aeqs-section h2` (aeqs 216; 599) / `.aeqs-promo h2` (promo 31; 107) | 2.1rem → 1.7rem ≤540 / 2rem → 1.65rem ≤860 | – / 1.15 | 700 | -0.02em | Inter |
| Kicker / eyebrow | `.section-kicker` (site 315) | **1.2rem (19.2 px)**, uppercase | – | 600 | 0.2em | Inter |
| | `.hero-eyebrow` 495 · `.hero-signal-label` 606 · `.aeqs-kicker` 208 · `.aeqs-eyebrow` 51 · `.aeqs-promo-eyebrow` 19 · `.knowledge-pill` 2026 | 0.74 · 0.72 · 0.78 · 0.78 · 0.75 · 0.76rem | – | 600–700 | 0.08–0.24em | — |
| Lead / subtitle | `.hero-subtitle` 557 · `.section-subtitle` 333 · `.aeqs-hero-sub` 74 · `.blog-subtitle` (layout 352) | 1.08 · 0.94 · 1.05 · 1.05rem | 1.7 · 1.6 | 400 | — | — |
| Card H3 | `.why-card h3` 737 (1.06) · `.service-card/.process-step/.knowledge-card/.sara-capability-card h3` (0.94) · `.aeqs-service-card h3` (1rem) · `.genai-feature-card h3` 1205 (`clamp(1.5rem,2.8vw,2.15rem)`) · `.genai-summary-card h3` (1.35) · `.blog-card-title` (1.3, lh 1.2) | — | — | 600–700 | — | — |
| Card text | Most cards 0.9rem; `.impact-note`/`.process-step p` 0.86; `.t-track .t-quote` 0.92 (lh 1.7, clamped to 6 lines); `.genai-feature-card p` 1rem; blog body 1.05rem (lh 1.9) | — | — | — | — | — |
| Featured quote | `.t-card-featured .t-quote` 1636 | `clamp(1.25rem,2.4vw,1.7rem)` | 1.5 | 600 | — | Geist |
| Stat | `.impact-number` 1402 · `.sara-verdict-conf b` 873 | 1.8rem · 1.3rem | — | 700 | — | — |
| Small / meta | 0.78rem (captions, team, chat sub) · 0.8 · 0.82 · 0.85rem | — | — | — | — | — |
| Buttons | `.btn` 344 (0.9rem, 600) · `.aeqs-btn` (0.95rem) · `.lang-btn` (0.85rem) · `.chat-btn` (0.8rem) · `.shell-nav a` (layout 99; 0.9rem, 600) | — | — | — | — | — |

### 4.5 Breakpoints

There are 7 different width breakpoints: **540, 640, 680, 860, 900, 960 and 980 px**.

⚠ Between 900 and 960 px the header is still in desktop mode while most section grids have already collapsed.

| Query | Where | What it changes |
|---|---|---|
| `(max-width: 980px)` | layout.css 563–567 | Blog grid → 2 columns |
| `(max-width: 960px)` | site.css **2308–2438** (25 rules) | Legacy header (dead) 2309–2348.<br>`.hero-inner, .canvas-inner, .sara-section-inner, .sara-page-hero-inner, .sara-identity-grid, .sara-process-inner, .genai-layout` → 1 column (2350–2358).<br>Hero padding 72/56, `min-height:0`, CTA margin, signal wraps (2360–2384).<br>why, services and impact → 1 column; process → 2 columns; sara grids → 1 column; sara card max 360 px; genai card padding 24 px; featured testimonial padding and quote mark 3.4rem; clients shell padding. |
| `(max-width: 960px)` | site.css 2065–2069 | Knowledge → 2 columns |
| `(max-width: 960px)` | aeqs 578–593 | AEQS hero → 1 column, h1 2.2rem, grids → 2 columns, **sticky CTA shown**, final padding-bottom 120 px |
| `(max-width: 900px)` | layout.css 249–301 | Header → grid, `.shell-nav-toggle` shown, `.shell-nav` hidden until `.is-open`; footer → 1 column |
| `(max-width: 860px)` | promo 105–108 | Promo → 1 column, h2 1.65rem |
| `(max-width: 680px)` | layout.css 569–598 | Blog → 1 column, search stacked, smaller paddings |
| `(max-width: 640px)` | site.css **2440–2489** (11 rules) | `.section, .hero { padding-inline:6% }`; process → 1 column; clients grid `minmax(120px,1fr)`; marquee cards `min(320px,84vw)`; **`.t-marquee-reverse` hidden**; sara image frames and CTA box (both unused selectors); chat widget 14 px offsets and 250 px panel |
| `(max-width: 640px)` | site.css 2071–2075; layout.css 303–324 | Knowledge → 1 column; header actions full width; footer socials → 1 column |
| `(max-width: 540px)` | aeqs 594–601 | AEQS grids → 1 column; h2 1.7rem |
| `(prefers-reduced-motion: reduce)` | site.css 701–719, 1772–1786, 2543–2555 | Hero decoration off; marquee stopped, becomes a scroll container, clone hidden; reveal and entrance neutralised |
| `@supports (background-clip:text)` | site.css 541–550 | Gradient text on the hero `span` |

### 4.6 Containers and section padding

**Containers**
- `.section-inner` 1120 px (site 302–305, reused by the blog via layout 332–338 and by the promo).
- `.shell-inner` **1180 px** (layout 30–36, header and footer), so the header, footer and content edges don't line up.
- `.hero-inner` 980 px.
- `.aeqs-hero-inner`/`.aeqs-section-inner` 1120 px.
- `.contact-inner` 640 px.
- `.t-card-featured` 860 px; `.hero-signal` 860 px; `.aeqs-faq-list` 760 px; `.blog-article-body` 760 px.
- The Vibe Test page uses **1240 px** with 24 px gutters.

**Horizontal gutters** are always `6%` (`.section`, `.hero`, `.shell-inner`, blog, AEQS).

**Vertical padding**
- `.section` 80 px.
- `.hero` 96/72 px (72/56 at ≤960).
- `.aeqs-promo` 64 px.
- `.aeqs-hero` 110/70 px (90 top at ≤960).
- `.aeqs-section` 80 px.
- Blog inner 56 px (hero 28 px); 40/20 px at ≤680.
- The footer has `margin-top:32px`.

### 4.7 Radii, shadows and gaps

**Radii**
- Token uses: `var(--ww-radius)` ×17, `var(--aeqs-radius)` ×8, `var(--ww-radius-pill)` ×5.
- Hard-coded: `999px` ×34; `16px` ×4 (blog inputs and buttons); `10px` ×3 (form fields, chat textarea, status); `28px` ×2 (genai cards, blog card); `24px` ×2; `18px` ×2 (`.success-cta`, promo stack); `14px`, `30px`, `8px`, `50%` ×1 each.

**Shadows**
- Tokens: `--ww-shadow-soft` ×14, `--ww-shadow-strong` ×6, `--ww-shadow-ring` ×1, `--aeqs-shadow-*` ×8.
- **About 30 distinct ad-hoc shadows** (not counting keyframe shadows), including indigo glows `rgba(31,61,219,.45–.75)` on buttons and the chat toggle, orange glows on the hero CTA, and `rgba(15,23,42,x)` slate shadows.

**Gaps** mostly fall on a 2 px grid: 8, 10, 12, 14, 16, 18, 20, 22, 28, 32 px.

### 4.8 Stacking (z-index)

| Value | Selector (file:line) | Note |
|---|---|---|
| 80 | `.site-shell-header, .site-shell-footer` (layout 3–4) | The header is sticky. The footer is re-set to `position:relative` at 23 but keeps z 80. |
| 60 | `.chat-widget` (site 2177–2180) | Fixed, bottom-right; bottom-left in AR (132–135) |
| 60 → auto | `.lang-switcher` (site 67–70), neutralised by `.shell-lang-switcher` (layout 119–122) | — |
| 55 | `.aeqs-sticky` (aeqs 552–557) | Fixed bottom bar at ≤960 |
| 40 | `.site-header` (site 150–152) | Unused legacy |
| -1 | `.hero-backdrop` (site 410), `.team-card::after` (1528) | Local stacking: `.hero` has `isolation:isolate` |

The Vibe Test page's own header uses `z-index:50`.

### 4.9 Motion

**Transitions** (counts are occurrences of the duration inside `transition` values)
- `0.15s ease` (23: buttons, lang, nav controls).
- `0.18s ease` (29: cards, logos).
- `0.2s` (5: chat panel, footer socials, FAQ sign).

**Scroll reveal**
- 720 ms (`[data-reveal]`) and 620 ms (`[data-reveal-children] > *`), both `cubic-bezier(.2,.6,.2,1)`.
- Children stagger by `--reveal-i × 80ms`.
- Hidden state is `translateY(20px/16px)` + `opacity:0`, applied only under `html.js-anim` (site 2502–2522).
- IntersectionObserver options: `threshold .08`, `rootMargin 0 0 -40px 0` (`scripts.html` 32–41).

**Hero entrance**: 760 ms with delays of 80, 180, 320, 460 and 620 ms, triggered by `html.is-loaded` (2524–2540).

**Decorative loops (hero)**
- Aurora drift 26 s / 32 s (439–442).
- Beam sweep 9 s after a 1.6 s delay (476–480).
- Eyebrow pulse 2.4 s.
- Title shimmer 7 s.
- Signal nodes fade in over 0.6 s with delays 1.15–2.2 s.
- GO pulse 2.6 s.

**Marquee**: `ww-marquee`, 70 s (1728–1731).

**Reduced motion is handled by**
- CSS: 701–719, 1772–1786 and 2543–2555, using `!important`.
- The JS bypass in `scripts.html` 5, 8–10 and 27–30, which reveals everything immediately.

**Reduced motion is not handled by**
- The team auto-scroll (site.js 782).
- `html{scroll-behavior:smooth}` (site 55–57, layout 14–16).
- Card hover lifts.
- The AEQS and promo transitions (minor).

There are 7 `!important` declarations, all in `.visually-hidden`, `.contact-hp` or reduced-motion blocks.

### 4.10 Hard-coded colour literals vs `var()` references

Literals counted: hex, `rgb[a]()`, `hsl[a]()`, `white`/`black`. `:root` and custom-property definitions are excluded.

Totals:
- site.css: **197 hard / 149 var**.
- layout.css: **45 / 7**.
- AEQS inline: **35 / 77**.
- Promo inline: **18 / 0**.

Across the whole code base there are 304 literal occurrences of **132 distinct colours** (including keyframes). Of those, 77 are `#fff`/`#ffffff`, which equals `--ww-bg`, and 47 are `rgba(148,163,184,x)` borders that have no token.

| site.css range | Region | Rules | Hard | Var |
|---|---|---|---|---|
| 49–64 | Reset / body | 3 | 0 | 2 |
| 66–94 | EN/AR switch | 3 | 4 | 3 |
| 96–135 | Global RTL | 7 | 0 | 0 |
| 147–294 | Legacy header (**unused**) | 19 | 10 | 10 |
| 296–393 | Shared utilities | 15 | 8 | 11 |
| 395–719 | `#hero` | 38 | **43** | 8 |
| 721–745 | `#why-we-will` | 4 | 2 | 2 |
| 747–751 and 1282–1296 | `#services` | 4 | 1 | 1 |
| 753–1015 | `#vibe-test` | 36 | 21 | 23 |
| 1017–1182 | Sara page (**unused**) | 23 | 15 | 12 |
| 1184–1280 | `#genai-based-systems` | 14 | **17** | 1 |
| 1298–1372 | `#quality-canvas` | 11 | 4 | 7 |
| 1374–1426 | `#impact` | 9 | 4 | 4 |
| 1428–1473 | `#how-we-work` | 6 | 3 | 6 |
| 1475–1594 | `#team` | 15 | 12 | 7 |
| 1596–1804 | `#success-stories` | 29 | 8 | 18 |
| 1806–1818 and 1911–1966 | `#clients` | 10 | 6 | 8 |
| 1820–1909 | Clients legacy carousel (**unused**) | 12 | 10 | 5 |
| 1968–2075 | `#knowledge` | 14 | 8 | 12 |
| 2077–2167 | `#contact` (+ utilities) | 13 | **11** | 0 |
| 2174–2304 | Chat widget | 16 | 8 | 8 |
| 2306–2489 | Global responsive blocks | 36 | 2 | 0 |
| 2491–2555 | Reveal / entrance | 10 | 0 | 1 |

| layout.css range | Region | Rules | Hard | Var |
|---|---|---|---|---|
| 1–28 | Header and footer shell base | 5 | 5 | 0 |
| 38–145 | Header internals | 14 | 6 | 3 |
| 147–247 | Footer | 16 | 6 | 0 |
| 249–324 | Header/footer media queries | 15 | 1 | 0 |
| 326–598 | Blog | 41 | 27 | 4 |

---

## 5. CSS organisation

### 5.1 How `src/assets/site.css` is ordered

The file is ordered **by page section, top to bottom in rough Home order**, then global responsive blocks, then motion. Several sections are split across two places, and responsive rules for most sections live at the end rather than next to their section.

| Lines | Block | Status |
|---|---|---|
| 1–47 | `:root` tokens | Shared |
| 49–64 | `*` reset (margin and padding 0), `html` smooth scroll, `body` | Shared |
| 66–94 | `.lang-switcher`, `.lang-btn`, `.is-active` | Header |
| 96–135 | **Global RTL block**: `body.lang-ar` direction; Tajawal headings; `.hero`/`.section` right-align; `.section-header.center`; justify rules for 7 section containers; `direction:rtl` for `.canvas-inner` and `.genai-summary-item`; chat widget mirrored | **Cross-section** |
| 137–145 | `a`, `img` base | Shared |
| 147–294 | "HEADER": `.site-header`, `.header-*`, `.nav-toggle` | **Dead**. The live header uses `.site-shell-header` from layout.css. |
| 296–393 | "UTILITIES": `.section`, `.section-inner`, `.section-header(.center)`, `.section-kicker`, `.section-title`, `.section-subtitle`, `.btn`, `.btn-primary`, `.btn-secondary`, `.card` | Shared components |
| 395–719 | HERO, including its own reduced-motion block | `#hero` |
| 721–745 | WHY WE WILL | `#why-we-will` |
| 747–751 | SERVICES (background only) | `#services`, part 1 |
| 753–1015 | "SARA" = the Home **Vibe Test** section (`.section-sara`, `.sara-*`) | `#vibe-test` |
| 1017–1182 | Sara stand-alone page (`.sara-page-*`, identity, modes, process, principles, integration strip, CTA box) | **Dead** |
| 1184–1280 | GenAI (no header comment) | `#genai-based-systems` |
| 1282–1296 | `.services-grid`, `.service-card` | `#services`, part 2 |
| 1298–1372 | QUALITY CANVAS | `#quality-canvas` |
| 1374–1426 | IMPACT | `#impact` |
| 1428–1473 | HOW WE WORK | `#how-we-work` |
| 1475–1594 | TEAM | `#team` (with 2 unused rules) |
| 1596–1804 | TESTIMONIALS, including its own reduced-motion block | `#success-stories` (with 2 unused rules) |
| 1806–1818 | CLIENTS shell | `#clients` |
| 1820–1909 | Admin carousel: `.clients-row`, `.client-logo`, `.clients-nav` | **Dead** in this prototype. The comment says the live PHP admin still renders it, so confirm before deleting. |
| 1911–1966 | Clients grid and cards | `#clients` |
| 1968–2075 | KNOWLEDGE, including **its own** 960/640 media | `#knowledge` (`.knowledge-empty*` unused) |
| 2077–2167 | CONTACT: `.contact-inner`, form, **`.visually-hidden` (global utility)**, `.contact-hp`, `.contact-status` | `#contact` |
| 2169–2172 | "FOOTER": empty | — |
| 2174–2304 | CHAT WIDGET | Chat (`.chat-btn-primary/secondary` unused) |
| 2306–2438 | **`@media (max-width:960px)`**: rules for legacy header, hero, canvas, vibe-test/sara, genai, why, services, impact, process, success, clients | **Cross-section** |
| 2440–2489 | **`@media (max-width:640px)`**: `.section`/`.hero`, process, clients, success, sara, chat | **Cross-section** |
| 2491–2555 | ANIMATIONS: reveal, hero entrance, reduced motion | Shared |

Indentation is inconsistent: blocks at 1500–1566 and 1968–2075 are unindented, the rest is indented four spaces. The code contains Arabic comments at 1518 and 1554.

### 5.2 `src/assets/layout.css` (598 lines, loaded after site.css)

| Lines | Block |
|---|---|
| 1–12 | Header and footer shell (`position:sticky; z-index:80`) |
| 14–20 | `html` smooth scroll (duplicate) and `section[id]{scroll-margin-top:118px}` |
| 22–28 | Footer (`position:relative`, `#0f172a`) |
| 30–36 | `.shell-inner` |
| 38–145 | Header internals. `.shell-lang-switcher` at 118–130 **overrides** site.css `.lang-switcher` at the same specificity, which only works because layout.css comes later. |
| 147–247 | Footer internals |
| 249–301 | Header and footer `@media (max-width:900px)` |
| 303–324 | Header and footer `@media (max-width:640px)` |
| 326–561 | Blog index and article, including RTL at 552–561 |
| 563–598 | Blog `@media` 980 and 680 |

### 5.3 Inline style

- `<style>` blocks:
  - `pages/ai-era-quality-services.html` 2–602;
  - `sections/home/ai-era-quality-services-promo.html` 2–109.

  Both sit inside `<main>`/`<section>`. They are namespaced by class prefix (`.aeqs-*`, `.aeqs-promo …`) and self-contained, which is effectively the live site's existing "section carries its own CSS" pattern. They are not valid HTML per the W3C validator.
- `style=""` attributes:
  - `quality-canvas.html` 27 and 46 (the second uses `var(--ww-text-muted)`);
  - `success-stories.html` 23 and 134 (`--t-count: 7;`).

### 5.4 Shared and reusable components

| Component | Lines | Used by |
|---|---|---|
| `.section` | 298–300 | All 13 non-hero Home sections. The promo overrides the padding. |
| `.section-inner` (1120 px) | 302–305 | All Home sections and the blog (overridden by layout 332–338); promo override |
| `.section-header`, `.center` | 307–313 | Left-aligned: vibe-test, genai, why, services, canvas. Centred: impact, process, team, success, clients, knowledge, contact. |
| `.section-kicker` | 315–322 | Every Home section header and the blog hero |
| `.section-title` | 324–331 | Every Home h2 |
| `.section-subtitle` | 333–342 | 11 sections |
| `.btn`, `.btn-primary`, `.btn-secondary` | 344–378 | Hero (dark variant 577–598), vibe-test, genai, canvas, success CTA, contact submit |
| `.card` (+ hover lift) | 380–393 | Only why (3), services (4) and genai (2, heavily overridden) |
| `.visually-hidden` | 2122–2132 | Contact labels |
| Reveal | 2502–2522 | All Home sections |

**Not shared, but near-duplicates:**
- **Eight card look-alikes** re-implement the same white card + border + `--ww-shadow-soft` + 12 px radius: `.impact-card`, `.process-step`, `.knowledge-card`, `.sara-capability-card`, `.canvas-card`, `.client-card`, `.t-card`, `.aeqs-*-card`.
- **Seven eyebrow styles**: `.section-kicker` 1.2rem vs six others at 0.72–0.78rem.
- **Five button systems**: `.btn*`, `.aeqs-btn*`, `.aeqs-promo-cta`, `.blog-search-button`, `.chat-btn*`.

Rules shared **across** sections in one declaration:
- Global RTL, 117–130: `.hero-actions`, `.canvas-actions`, `.sara-actions`, `.why-grid`, `.services-grid`, `.impact-grid`, `.process-grid`, `.canvas-inner`, `.genai-summary-item`.
- @960 at 2350–2358: `.hero-inner`, `.canvas-inner`, `.sara-*`, `.genai-layout`.
- @640 at 2441–2444: `.section`, `.hero`.
- `.sara-capability-card h3/p` grouped with dead Sara-page selectors (999–1015).

### 5.5 RTL handling

- **Hooks.**
  - `body-start.html` and `applyLanguage` set `html[lang="ar"][dir="rtl"]` **and** `body.lang-ar`.
  - The CSS keys everything on **`body.lang-ar`**; there are no `[dir=rtl]` or `:dir()` selectors.
  - The body also gets `direction: rtl` (site 96–98).
  - The AEQS page and promo toggle `.i18n-en`/`.i18n-ar` spans under `body.lang-ar`.
- **Physical vs logical properties.** There are 57 physical declarations (`left`/`right`/`margin-left`/`padding-left`/`border-left`/`text-align:left|right`) versus 8 logical ones: `inset-inline` at 629, `margin-inline:auto` at 1620, `padding-inline-end` at 1725, `inset-inline-start` at 986, and `padding-inline` at 2310, 2436, 2443 and 2451. RTL is handled mainly by per-component `body.lang-ar` overrides:
  - site 101–135, 573, 637, 680, 1645, 1762–1770, 2217;
  - layout 552–561;
  - aeqs 24–32, 258, 285–288, 427–430, 443–446, 531;
  - promo 70, 101–104.
- **Intentional LTR islands.**
  - `.t-marquee{direction:ltr}` (1700), with the cards flipped back at 1762–1766.
  - `.sara-video-play::before` uses physical margins on purpose (comment at 970).
  - `.sara-verdict{text-align:left}` (817) stays left-aligned in AR; its content is English anyway.
- **Known overflow (confirmed).**
  - **Cause**: `.contact-hp { position:absolute !important; left:-10000px; … }` (site.css **2134–2141**) on the honeypot `div` (`contact.html` 24–27). In RTL, an element pushed 10,000 px to the physical left extends the scrollable area.
  - **Measured**: `scrollWidth` 11,040 px vs `clientWidth` 1,440 px on `/` and `/contact/` in AR, the only two routes that include the contact section. `/blog/` and `/ai-era-quality-services/` measured 1,440 px in AR, which matches the snapshot's list of affected pages.
  - **Fix, tested in the page**:
    ```css
    .contact-hp { left: auto; inset-inline-start: -10000px; }
    ```
    → 1,440 px. Alternatively, reuse the `.visually-hidden` clip pattern without `display:none`.
- **Other RTL defects.**
  - The team carousel doesn't move (§6.6).
  - The AEQS filter and shift questions use physical borders and margins with manual AR overrides.
  - The `.aeqs-promo-cta::after` arrow is swapped by `content` (promo 70).

---

## 6. JavaScript organisation

### 6.1 Load order

| Order | Where | What |
|---|---|---|
| 1 | `head.njk` 3 (inline) | `document.documentElement.classList.add('js-anim')`. This turns on the hidden state for reveal and entrance. |
| 2 | `body-start.html` 1–16 (inline, first thing in `<body>`) | Pre-paint language: reads `ww_language`, sets `html.lang`/`dir`, adds `body.lang-ar` |
| 3 | Content | `contact.html` 32–113, an inline IIFE that runs during parsing (on `/` and `/contact/`) |
| 4 | `scripts.html` 1 | `<script src="/assets/site.js">`: synchronous, end of body |
| 5 | `scripts.html` 2–43 (inline) | Hero `is-loaded` via a double rAF (or immediately under reduced motion); sets `--reveal-i` on the children of `[data-reveal-children]`; one IntersectionObserver adds `.is-visible` (unobserves after the first hit); falls back to revealing everything under reduced motion or without IO support |

### 6.2 `src/assets/site.js` line map (902 lines; no modules, globals `translations`, `siteSettings`, `LANGUAGE_STORAGE_KEY`, `getStoredLanguage`, `applyLanguage`)

| Lines | Block | Live? |
|---|---|---|
| 1–440 | `const translations = { en: {…} /*2–220*/, ar: {…} /*221–439*/ }` | Yes (88 of 217 keys unused) |
| 441–552 | `const siteSettings` (brand, logo per language, nav labels, footer strings, `footer_socials`) | Yes (8 of 20 keys unused) |
| 553–562 | `LANGUAGE_STORAGE_KEY`, `getStoredLanguage()` | Yes |
| 564–675 | `applyLanguage(lang)` (breakdown below) | Yes |
| 677–681 | Click → `applyLanguage(btn.dataset.lang)` for each `.lang-btn`; initial `applyLanguage(stored \|\| 'en')` | Yes |
| 683–692 | Mobile nav: `.shell-nav-toggle` toggles `.shell-nav.is-open` and `aria-expanded` | Yes |
| 694–704 | Blog: `.blog-sort-select` change → `form.requestSubmit()` | `/blog/` only |
| 706–713 | Legacy `.nav-toggle` / `.header-nav` | **Dead** |
| 715–756 | Legacy clients carousel (2500 ms auto-scroll) | **Dead** (no `.clients-scroller`) |
| 758–799 | Team carousel | Yes, with defects |
| 801–804 | `#year-span` → current year | **Dead** |
| 806–844 | Chat widget | `/`, `/contact/` |
| 846–902 | YouTube click-to-load facade | `/` |

What `applyLanguage` (564–675) does, in order:

| Lines | Effect |
|---|---|
| 566–568 | Sets `html[lang][dir]`, `body.lang-ar` |
| 570–574 | Saves `localStorage` |
| 576–586 | `[data-i18n]` → `textContent`, or `innerHTML` when `data-i18n-html="true"` |
| 588–594 | `[data-i18n-placeholder]` |
| 596–598 | `.lang-btn.is-active` |
| 600–606 | `[data-site-setting]` |
| 608–617 | `[data-site-setting-src]` (logo `src`, `.is-hidden`) |
| 619–625 | `[data-site-setting-alt]` |
| 627–632 | `[data-social-label-*]` |
| 634–639 | `[data-blog-copy]` |
| 641–646 | `[data-blog-placeholder-*]` |
| 648–653 | `[data-blog-option-*]` |
| 655–660 | `[data-blog-html]` → `innerHTML` |
| 662–667 | `[data-blog-alt-*]` |
| 669–674 | `[data-deep-dive-copy]` |

### 6.3 Translations dictionary and the six i18n mechanisms

**The dictionary** has **217 keys per language**, all present in both languages. Empty AR values: `success.case1.quote`, `case2`, `case5`, `case7`.

| Namespace | Keys | EN lines | AR lines | Used by | Unused |
|---|---|---|---|---|---|
| `hero` | 14 | 3–7, 100–108 | 222–226, 319–327 | `#hero` | `hero.chip1-4` |
| `vibeTest` | 12 | 8–19 | 227–238 | `#vibe-test` | — |
| `genai` | 14 | 20–33 | 239–252 | `#genai-based-systems` | — |
| `sara` | 66 | 34–99 | 253–318 | — | **All** |
| `why` | 9 | 109–117 | 328–336 | `#why-we-will` | — |
| `services` | 11 | 118–128 | 337–347 | `#services` | — |
| `canvas` | 19 | 129–147 | 348–366 | `#quality-canvas` | — |
| `impact` | 9 | 148–156 | 367–375 | `#impact` | — |
| `process` | 11 | 157–167 | 376–386 | `#how-we-work` | — |
| `team` | 3 | 168–170 | 387–389 | `#team` | — |
| `success` | 12 | 171–175, 213–219 | 390–394, 432–438 | `#success-stories` | — |
| `clients` | 3 | 176–178 | 395–397 | `#clients` | — |
| `knowledge` | 21 | 179–199 | 398–418 | `#knowledge` (3 keys) | 18 |
| `contact` | 8 | 200–207 | 419–426 | `#contact` | — |
| `chat` | 5 | 208–212 | 427–431 | Chat widget | — |

`siteSettings` (441–552), unused keys: `header_nav_sara`, `header_nav_genai_based_systems`, `header_nav_services`, `header_nav_success_stories`, `home_label`, `footer_scroll_label`, `footer_socials`, `header_nav_vibe_test`.

**The six mechanisms**

| # | Mechanism | Where | Arabic lives in |
|---|---|---|---|
| 1 | `data-i18n` (+ `-html`, `-placeholder`) | Home sections, chat | site.js dictionary (**shared file**) |
| 2 | `data-site-setting` / `-src` / `-alt` | Header, footer | site.js `siteSettings` (**shared file**) |
| 3 | `.i18n-en` / `.i18n-ar` spans | AEQS page, promo | The partial itself (CSS toggle, scoped to `.aeqs` / `.aeqs-promo`) |
| 4 | `data-deep-dive-copy` + `data-deep-dive-en/ar` | Knowledge cards | The partial (attributes) |
| 5 | `data-blog-*-en/ar` | Blog | The partial (attributes) |
| 6 | `data-social-label-en/ar` | Footer | The partial (attributes) |

**Trap 1: the EN dictionary wins.** For mechanism 1, the text in the markup is only a pre-JS fallback: `applyLanguage('en')` overwrites it with `translations.en` on load. The 7 current conflicts are listed in §0, item 1. Because `textContent` is used, any child markup added inside a `data-i18n` element is flattened unless the element also has `data-i18n-html="true"`.

**Trap 2: empty values skip.** `if (value)` skips empty strings, so an empty AR value leaves the previous (English) text in place.

### 6.4 Language switching flow

1. `body-start.html` applies the stored language before paint: direction and class only; the text is still English.
2. At the end of the body, site.js runs `applyLanguage(getStoredLanguage() || 'en')`, which swaps all copy. Expect a brief flash of English text in AR mode.
3. Clicking `.lang-btn[data-lang]` calls `applyLanguage`, which persists the choice to `localStorage['ww_language']`. Every page load also writes `'en'` when nothing is stored.
4. The contact form reads `document.documentElement.lang` at submit time. The AEQS page and promo react purely through CSS.

Verified in AR: the H1 is Arabic, the nav reads "الرئيسية", the logo `src` becomes `/uploads/6fbc…jpg`, headings use Tajawal, and the blog title, cards, placeholder and article body are Arabic.

### 6.5 Reveal and entrance animations

- **Markup contract**: `data-reveal` (element) and `data-reveal-children` (direct children, stagger).
  - 24 `[data-reveal]` and 11 `[data-reveal-children]` elements on Home. None on the AEQS page or blog.
- **The hero** has no `data-reveal`. It uses the `.hero .hero-eyebrow/-title/-subtitle/-actions/-signal` entrance keyed on `html.is-loaded`.
- **Children added after load** don't get `--reveal-i`, and nothing observes elements inserted after load.

### 6.6 Carousels and marquees

- **Team (JS)**: site.js 758–799.
  - `scrollStep(dir)` moves by `0.7 × scroller.offsetWidth` and wraps to the start or end.
  - Buttons `.team-nav-next` / `.team-nav-prev`.
  - `setInterval(…, 3000)`, paused on `mouseenter` and resumed on `mouseleave`. There is no pause on focus and no pause on hidden tab.
  - Verified: in EN, "next" goes 0 → 720 px (max 1,638). **In AR it stays at 0** because the scroller has `direction: rtl` and Chrome's `scrollLeft` is ≤ 0 there.
  - It keeps auto-scrolling under reduced motion.
- **Testimonials (CSS only)**: two `.t-marquee > .t-track` rows, each holding two identical `.t-group` halves animated `translateX(0 → -50%)`.
  - Speed comes from the inline `--t-count`.
  - The reverse row is hidden at ≤640.
  - Under reduced motion: animation none, the row becomes an `overflow-x:auto` scroller, and the clone is hidden.
  - **Contract**: exactly two equal halves; the second has `data-clone` and `aria-hidden="true"`.

### 6.7 Chat widget (site.js 806–844)

- Requires all six hooks (`#chat-panel`, `.chat-toggle`, `.chat-close`, `#chat-message`, `#chat-send-wa`, `#chat-send-email`), otherwise it silently does nothing.
- `togglePanel()` toggles `.chat-panel.open` and focuses the textarea after 50 ms. There is no Escape handling and no focus trap. The panel is hidden with `opacity:0`/`pointer-events:none`, so it stays in the accessibility tree.
- WhatsApp opens `https://wa.me/970567720720?text=…`. Email uses `mailto:info@wewill.tech` with the subject "WE WILL – Website chat message".

### 6.8 Contact form (inline, `sections/home/contact.html` 32–113)

1. Guard: `form.dataset.bound === '1'`.
2. On submit it calls `preventDefault()`.
3. Honeypot: if `name="website"` is non-empty, it fakes success and resets.
4. It sets `data-submitting`, disables `button[type="submit"]`, and shows the loading status in `#contact-status` (`role="status" aria-live="polite"`).
5. It calls `fetch(form.action /* /contact-submit.php */, { method:'POST', body:FormData, headers:{Accept:'application/json'}, credentials:'same-origin' })` and expects JSON:
   - `{ok:true}` → success;
   - `{error:'validation'}` → validation message;
   - anything else, or a non-JSON reply → error message.
6. On a static host this is always the error branch.
7. Messages are inline EN/AR (41–54), chosen by `document.documentElement.lang`.

### 6.9 YouTube facade (site.js 846–902)

- For each `[data-youtube-facade]` anchor it parses the video id from `href` and requires the enclosing `.sara-video` and a `[data-video-media]` child.
- It injects the `maxresdefault` thumbnail, falling back to `hqdefault` when the image is under 200 px or errors, then adds `.sara-video.is-ready`. The block is `display:none` until then.
- On click it injects a `youtube-nocookie` iframe (title taken from `.sara-video-label`), adds `.is-playing`, and removes `href`/`target`.

### 6.10 Coupling a restructure can break

| Dependency | Defined in | Breaks if… |
|---|---|---|
| `[data-i18n]` keys ↔ `translations` | Partials ↔ site.js 1–440 | Copy is edited in the partial but not in site.js (the EN dictionary wins). Keys are removed while elements remain (the markup text then stays in AR). Child markup is added inside a text-mode element (flattened). |
| `data-blog-html-en/ar` | Blog post partials | The visible body is edited but not the attribute: it gets overwritten on load. |
| `.lang-btn[data-lang]` | header.njk 59–60 | Any other `.lang-btn` on the page is also bound (fine, but new switchers must keep the class and attribute). |
| `body.lang-ar` class | body-start.html, site.js 568 | New CSS keyed on `[dir=rtl]` or `:lang(ar)` works too, but all existing RTL CSS needs `body.lang-ar`. |
| `#shell-nav` / `.shell-nav` / `.shell-nav-toggle` | header.njk 13, 62; site.js 684–685 | The nav or toggle is renamed (`querySelector` takes the first match only); `aria-controls` must match the id. |
| Home section ids used as nav targets | header.njk 15–45; front-matter `activeNav`; AEQS CTAs `/contact/#contact`; hero CTAs `#contact`/`#services`; success CTA `#contact` | A section id changes or a section moves off Home: anchors go dead and active states disappear. `section[id]{scroll-margin-top:118px}` assumes `<section>` elements. |
| Home partials shared by standalone routes | `src/<id>/index.njk` include `sections/home/<id>.html` | A Home-only change leaks into `/why-we-will/` and the others. Give the standalone page its own partial (the rebuild script's fallback was `sections/pages/<id>.html`) or retire the route. |
| Team carousel selectors | site.js 759–762 | Team is included twice on one page (only the first is wired), or the class names change. |
| `.sara-video` + `[data-youtube-facade]` + `[data-video-media]` | vibe-test.html 36–44; site.js 859–863 | The wrapper class changes: the video stays `display:none` forever. |
| `[data-reveal]` / `[data-reveal-children]` / `html.js-anim` | scripts.html; site.css 2502–2522 | scripts.html is removed or throws: content stays at `opacity:0`. Children added later don't get the stagger. |
| `.hero .hero-*` entrance | site.css 2524–2540 | A new hero without the `.hero` class loses the entrance; one that keeps `.hero` but changes children keeps the hidden-until-loaded state only for matching children. |
| Chat ids and classes | chat-widget.html; site.js 807–812 | Any one of the 6 hooks is missing (silent failure). The widget is included via `chatWidget` front matter only. |
| Contact form ids and fields | contact.html 11–31 and 32–113 | The contact section is included twice on one page (duplicate ids). `name="website"` honeypot or `#contact-status` is renamed. `action` changes. |
| Marquee structure | success-stories.html 22–242; site.css 1698–1786 | Groups are unequal or the clone attributes are dropped: a jump at the loop, or duplicate content read by AT. |
| `.lang-switcher` base CSS | site.css 66–78 | A new switcher without `.shell-lang-switcher` becomes `position:fixed` at top-right. |
| `.hero-dark .btn-*` | site.css 577–598 | Buttons are moved out of `.hero-dark` (they turn indigo). |
| `.card:hover` lift, `.section` RTL alignment | site.css 389–393, 107–115 | New components reuse `.card` or `.section` and inherit the hover transform or right-alignment in AR. |

---

## 7. Current Vibe Test page (`https://vibe-test.oneapp.dev/`)

### 7.1 What the snapshot contains

`docs/current-site/raw/vibe-test-bundle.html` (261 KB, 181 lines) is a self-unpacking bundle.

- Its loader script (33–168) reads three blocks:
  - `<script type="__bundler/manifest">` (line 171): base64 assets;
  - `__bundler/ext_resources` (175): empty;
  - `__bundler/template` (line 179): a JSON-encoded HTML string.
- It turns the assets into `blob:` URLs, swaps the whole document and re-executes the scripts.

**The two assets**

| Asset | Size | Notes |
|---|---|---|
| `b5d470a9-…` (image/png) | 848×848 RGBA, 136 KB | The WE WILL "QA" monogram, the **same mark** as `/uploads/7f2b7b2a3047ff5ea3ec0fcf.jpg` (320×320 JPEG). Used 5 times. |
| `e13683f3-…` (JS, gzipped) | 60 KB | `// GENERATED from dc-runtime/src/*.ts`. It loads `https://unpkg.com/react@18.3.1`, `react-dom@18.3.1` and `@babel/standalone@7.29.0` at runtime. It renders `<x-dc>` templates, compiles `style-hover="…"` attributes into pseudo-class CSS, and runs the `DCLogic` class. |

**The decoded template** is 453 lines; the line numbers below refer to it. To reproduce:

```js
// node -e (run from the repo root; writes to the OS temp dir)
const fs=require('fs'),os=require('os'),h=fs.readFileSync('docs/current-site/raw/vibe-test-bundle.html','utf8');
const g=t=>{const o=`<script type="__bundler/${t}">`,i=h.indexOf(o);return h.slice(i+o.length,h.indexOf('</script>',i)).trim()};
fs.writeFileSync(os.tmpdir()+'/vibe-test-template.html',JSON.parse(g('template')));
```

The rendered DOM, after the runtime has run, is `docs/current-site/raw/html/vibe-test-external.html`. The root is `div[data-dc-tpl="2"][data-lang][dir]` at line 83.

**Template contents**
- It has no `<title>`, no meta and no `lang`.
- Styling comes from one `<style>` in `<helmet>` (11–41: globals, `.en`/`.ar`, `.disp`, `.mono`, `.reveal`, 10 keyframes, reduced motion) plus **about 200 inline `style=""` attributes** and **18 `style-hover` attributes**.
- **There are no width media queries.** The layout is fluid through `clamp()` and `repeat(auto-fit, minmax(250–320px, 1fr))` grids.
- 43 `.reveal` elements.

### 7.2 Sections (numbering from `vibe-test-external.md`)

| § | Region | Template lines | Structure | Notable styling and motion |
|---|---|---|---|---|
| 1 | Header | 45–72 | Sticky (`z-index:50`, `rgba(247,248,250,.88)` + blur). Logo (img, 38 px round) and wordmark `Vibe-Test.` (`.disp` 16 px) + `BY WE WILL TECH` (`.mono` 9 px, 0.24em). In-page nav pills (`#problem`, `#how`, `#services`, `#receipt`, `#who`). Language button (🌐 + "العربية"/"EN", `onclick="{{ toggleLang }}"`). Dark pill "Book a Demo" → `#book`. | Container 1240 px, padding 12/24; nav pills 13 px/600, hover `#EEF3FD` |
| 2 | Hero (no id; `<a id="top">` at 74) | 75–126 | Status line with a pulsing green dot, then `AGENTIC QA PLATFORM — MVP · INVITE-ONLY`. The **H1** is 4 stacked `.disp.reveal` lines: "TESTS." (solid), "FIXES." (outline `-webkit-text-stroke:2px`), "VERIFIES.", "HANDS YOU THE RECEIPTS." (blue). Subcopy and 2 CTAs; **"LIVE QA RUN" terminal card** (110–123). | Grid-paper background `linear-gradient(#EDF1F7 1px,transparent 1px),linear-gradient(90deg,…)` at 64 px. H1 sizes `clamp(44px,9vw,118px)` ×3 and `clamp(34px,6.4vw,84px)`. Terminal: `#0B1526`, radius 14, mono 12.5 px, 5 rows with `runRow` 10 s staggered 0.2/1.5/2.8/4.1/5.4 s, a blinking caret (`runCaret` 1.1 s), and `pulseDot` 2 s. |
| 3 | Marquee strip | 128–137 | `aria-hidden`, `dir="ltr"`, two identical halves | `marquee` 26 s linear; mono 12 px, uppercase, 0.22em; dark band |
| 4 | `#problem` | 139–164 | Kicker `01 — THE PROBLEM`; H2 with an outline word; 3 numbered rows in a 3-column grid (`minmax(56px,90px) 1fr 1.2fr`) | H2 `clamp(30px,4.6vw,54px)`; rows separated by 1 px `#E1E7F0`; top rule 1.5 px ink |
| 5 | `#how` | 166–210 | Kicker, H2, then **orbit diagram** (dashed circle, spinning dot, logo in centre, 4 pill labels at N/E/S/W) beside 4 step cards | White with a `#F0F3F8` grid-paper background. `spinOrbit` 8.8 s is synchronised with `stageOn`/`stageNumOn` 8.8 s (delays 0/2.2/4.4/6.6 s) that highlight each step in turn. |
| 6 | `#services` | 212–245 | "Five agents. One QA team." Five cards `/01`–`/05` (Sweep, Journeys, Bug Testing, Bug Fixing, GenAI Evaluation); the fifth is solid blue. | Cards radius 14, padding 26, hover lift 5 px + blue glow (`style-hover`). **Card titles are EN-only.** |
| 7 | `#receipt` | 247–308 | Dark section (`#0B1526` + faint white grid); 3 benefit rows with a blue left rule; **receipt card** (paper `#FDFDFB`, rotated -1.6°, radius 6, `dir="ltr"`): header with logo and `#VT-4821`, 4 check rows, confidence bar 98.7%, meta, barcode (repeating-linear-gradient), bilingual footer | `rcRow` 9 s (0.2/0.9/1.6/2.3 s), `rcBar` 9 s, `rcStamp` 9 s ("VERIFIED ✓" stamp, `opacity:0` baseline). H2 `clamp(34px,5.4vw,68px)`. The benefit rows use physical `border-left` / `padding-left` (not RTL-aware). |
| 8 | `#who` | 310–330 | "Built for teams without a QA team." Three audience cards | Same card language |
| 9 | Final CTA (`<a id="book">` at 332) | 333–349 | Blue `#2E6BE6` band with a radial highlight; logo 64 px; H2 "Ship with confidence." (`clamp(34px,6vw,72px)`); CTA **`mailto:hello@wewill.tech?subject=Vibe-Test%20Demo`** | — |
| 10 | Footer | 351–365 | Giant outline wordmark "VIBE-TEST." (`clamp(52px,11vw,150px)`, `aria-hidden`); logo + `WE WILL TECH · VIBE-TEST`; "© 2026 WE WILL TECH · Evidence, not claims." | Dark `#0B1526`, text `#9FB0CF` |
| — | Logic | 369–450 | `class Component extends DCLogic`: `applyProps` (`data-lang`, `dir`, `data-paused`), `toggleLang` (flips the root `data-lang`/`dir`, **no persistence**), a smooth-scroll click handler for `a[href^="#"]` with a header offset, and an IntersectionObserver `.reveal` → `.in` (threshold 0.1, `rootMargin 0 0 -8% 0`) | — |

### 7.3 Styling system

**Fonts: no web fonts.**
- Body: `"Helvetica Neue","Segoe UI",system-ui,sans-serif`.
- `.mono`: `ui-monospace,"SF Mono",Menlo,Consolas,monospace`.
- Arabic (`[data-lang="ar"]`): `"SF Arabic","Geeza Pro","Noto Naskh Arabic",system-ui,serif`.
- **Display "TESTS. FIXES. VERIFIES."** is `.disp`: weight 800, `text-transform:uppercase`, `letter-spacing:-.03em`, `line-height:.94` on the body stack. It rendered as Segoe UI on the Windows capture and would be Helvetica Neue on macOS, so its look depends on the OS.
- In AR, `.disp` becomes weight 700, no uppercase, normal tracking, line-height 1.45; `.mono` loses tracking and uppercase.

**Palette** (literal counts in the template)

| Role | Colour | Uses |
|---|---|---|
| Product blue | `#2E6BE6` | 57 |
| Ink | `#0B1526` | 25 |
| Line | `#E1E7F0` | 19 |
| Muted | `#5A6A85` | 19 |
| White | — | 29 |
| Green | `#2EC478` | 8 |
| Stamp green | `#1F9D5B` | 6 |
| Slate text | `#3D4C66` | 6 |
| Page background | `#F7F8FA` | 3 |
| Dark-surface text | `#9FB0CF`, `#7F92B8`, `#4C6394`, `#D7E1F5`, `#6E9BF0`, `#DCE7FB` | — |
| Tints | `#EEF3FD`, `#D9E0EC`, `#B9C6DD`, `#EDF1F7`, `#F0F3F8`, `#EEF2F9` | — |
| Amber | `#F2B03D` | — |
| Receipt paper | `#FDFDFB`, `#C9CFC9`, `#EDEFEA`, `#E3E6E3`, `#374151`, `#4B5563` | — |

About 50 distinct values in total. Against wewill: `#0B1526` ≈ `--ww-ink #0B1220`, `#F7F8FA` ≈ `--ww-soft-gray #F7F8FB`, and `#5A6A85` ≈ `--ww-text-muted #5B6473`. However, **`#2E6BE6` ≠ `--ww-indigo #1F3DDB`** and **`#2EC478` ≠ `--ww-emerald #0FAE6E`**.

**Spacing and shape**
- Container 1240 px with 24 px gutters.
- Section padding 64–88 px vertically.
- Pill radius 100 px; cards 14 px; step cards 12 px; receipt 6 px.
- Shadows are tinted `rgba(46,107,230,…)` / `rgba(11,21,38,…)`.

**Type sizes (all `clamp()`)**
- Hero lines: 44–118 px.
- H2: 30–54 px.
- Receipt H2: 34–68 px.
- Final H2: 34–72 px.
- Footer wordmark: 52–150 px.
- Lead: 16–19 px.
- Body: 14–17 px.
- Mono (`.mono`): 9–15 px. Kicker labels are 11 px, uppercase, at 0.22em; terminal and receipt rows are 12–12.5 px; numerals go up to 15 px.

**Motion**
- Keyframes at 29–38: `marquee`, `spinOrbit`, `stageOn`, `stageNumOn`, `runRow`, `runCaret`, `rcRow`, `rcBar`, `rcStamp`, `pulseDot`.
- Reveal: 0.75 s `cubic-bezier(.2,.7,.2,1)`, `translateY(24px)`.
- `[data-paused="1"] *` pauses everything (a `playDemos` prop).
- ⚠ Reduced motion sets `*{animation:none!important}`, but the terminal rows (116–120), receipt rows (287–290) and stamp (277) have inline **`opacity:0`**, so **they stay invisible**.

### 7.4 EN/AR mechanism

- Each string has sibling `<span class="en">` / `<span class="ar">` elements.
- CSS: `.ar{display:none}`, `[data-lang="ar"] .en{display:none}`, `[data-lang="ar"] .ar{display:inline}`.
- The root div's `data-lang` and `dir` are flipped by `toggleLang()`.
- The choice is not saved and the URL doesn't change. The `<html>` element never gets `lang`.
- Islands forced LTR: terminal, marquee, receipt.
- Some strings exist only in English (service titles, mono kickers, the header wordmark).

This is the same idea as wewill's `.i18n-en` / `.i18n-ar` (AEQS page). The port is a class rename plus `[data-lang="ar"]` → `body.lang-ar`.

### 7.5 Reuse in the wewill.tech stack

| Can reuse as-is (copy) | Needs re-implementation or conversion |
|---|---|
| All copy, EN and AR, and the section order (hero → problem → how → services → receipt → who → CTA) | The `dc-runtime`, React, ReactDOM and Babel from unpkg, `<x-dc>`, `<helmet>`, and the `DCLogic` class. **Drop them; render static HTML.** |
| Markup structure of each section (plain `div`/`section`/`h1–h3`/`p`) | About 200 inline `style=""` → namespaced classes in a page stylesheet (e.g. `.vt-*`) with scoped tokens (`.vt { --vt-blue:#2E6BE6; … }` or mapped to `--ww-*`). 18 `style-hover` → real `:hover` / `:focus-visible` rules. |
| The 10 CSS keyframes, the grid-paper backgrounds, the outline-text effect, the receipt, terminal and orbit compositions (pure CSS) | `{{ rootRef }}` and `{{ toggleLang }}` (template 43, 62). **Nunjucks would try to evaluate them.** Remove them or wrap in `{% raw %}`. |
| The logo: already on the site as `/uploads/7f2b7b2a…jpg`. The 848 px transparent PNG can be exported from the bundle if needed. | Language toggle → the wewill header switch (`.lang-btn`, `ww_language`, `body.lang-ar`); `.en`/`.ar` → `.i18n-en`/`.i18n-ar` (make that toggle global). |
| `.reveal` timing idea | `.reveal`/`.in` + its own IntersectionObserver → wewill `data-reveal` / `is-visible` (`scripts.html`). |
| — | The smooth-scroll click handler is not needed: native anchors plus `scroll-margin-top`. |
| — | **Duplicate id**: `<a id="top">` collides with wewill's `<body id="top">`. Section ids `#services`/`#how` must stay unique on the new page. |
| — | The page's own header and footer → wewill global header and footer; the section nav becomes an optional in-page sub-nav under the 65 px sticky header, `z-index` below 80. |
| — | Fonts: choose between the system stack as-is (OS-dependent), or Geist 800 / Tajawal 700 for `.disp`. There is no monospace web font on wewill, so keep a system mono stack. |
| — | Reduced motion: give terminal and receipt rows a visible end state when animations are off. |
| — | CTA `mailto:hello@wewill.tech` → "Run a Guided Vibe Test" (brief). The Home `#vibe-test` CTA currently points to `https://vibe-test.oneapp.dev`. |
| — | Add a `<title>`, meta, canonical and og tags through route front matter; add `lang` handling through the layout. |

---

## 8. Assets inventory

`src/uploads/`: 27 files. The `tools/baseline-sources.json` `uploads` list matches them 1:1. All are referenced; none are orphaned.

| File | Size | Pixels | Used at |
|---|---|---|---|
| `7f2b7b2a3047ff5ea3ec0fcf.jpg` | 8.5 KB | 320×320 | EN logo: `header.njk` 6, `footer.html` 8, site.js 447 |
| `6fbc468cc7560cbfb13db5c0.jpg` | 8.5 KB | 320×320 | AR logo: site.js 448 only (**byte-identical** to `7f2b…`) |
| `967fea0f3204146e087af68e.png` | 108 KB | 870×1336 | Blog cover "when-software…": `blog.html` 38; post partial 13; route og/twitter image 10, 13 |
| `f069d4b8556d006dd972fadc.png` | 108 KB | 870×1336 | Blog cover "triad…": `blog.html` 58; post partial 13; route 10, 13 (**byte-identical** to `967f…`; it is the WE WILL logo lockup, not an abstract cover) |
| `8636daa1a2e2fc75c1605a60.png` | **396 KB** | **3503×3503** | One Studio logo: `clients.html` 21 (alt "iStoria logo" ✗); `success-stories.html` 17, 28, 81, 167, 220 |
| `40f072614cf25b1658294d28.jpg` | 4.7 KB | 212×42 | MICEtribe: `clients.html` 41; `success-stories.html` 37, 72, 90, 125, 160, 176, 213, 229 |
| `49e1e631f4129b8178ecb383.png` | 2.1 KB | 225×225 | iStoria: `clients.html` 33; `success-stories.html` 44, 97, 183, 236 |
| `51aa9f0769b37fc6fead0457.jpg` | 9.3 KB | 400×400 | SellEnvo: `clients.html` 45 (alt "Inspire" ✗); `success-stories.html` 51, 104, 139, 192 |
| `3b5edf333dd612526b1ab0c7.jpg` | 4.2 KB | 225×225 | Darent: `clients.html` 29; `success-stories.html` 65, 118, 153, 206 |
| `rasel.png` | 12.6 KB | 500×500 | Rasel: `clients.html` 53; `success-stories.html` 58, 111, 146, 199 |
| `041a66893761d3f31b788260.jpg` | 2.7 KB | 200×200 | ID8 Media: `clients.html` 25 |
| `2d998f928cf87a909420d04a.jpg` | 5.7 KB | 300×95 | Masterteam: `clients.html` 37 |
| `7319f2b29bd043ba2f763153.jpg` | 2.5 KB | 225×225 | Famcare: `clients.html` 49 |
| `2712439551bd9f9352828622.png` | 2.2 KB | 69×50 | I Plan 2: `clients.html` 61 |
| `1bd4cda42248525210e1e8a6.png` | **1,101 KB** | 1024×1145 | Team, Ibrahim Alsharif: `team.html` 19 |
| `c2c34df4ff8b91a3515a27bc.jpg` | 37 KB | 768×1058 | Team, Haneen Ibrahim: 23 |
| `e4e3c0eb0f623047b7e5a97d.jpg` | 41 KB | 623×728 | Team, Osama Assoloy: 27 |
| `b496789933824df1da16945d.jpg` | 135 KB | 960×1088 | Team, Hamza Al-Mobayed: 31 |
| `7deaa3d6f7c6e6af6ebc3c68.jpg` | 172 KB | 1066×1600 | Team, Haifa Sameer: 35 |
| `4b56c105793bf60505341be8.jpg` | 83 KB | 1056×992 | Team, Mai Ziada: 39 |
| `23eb841589a59fa75621e56c.jpg` | 80 KB | 1280×1028 | Team, Mervat Samsoum: 43 |
| `20df78ae674bd9f12be9d934.jpg` | 30 KB | 845×892 | Team, Mohammed Sameer: 47 |
| `e1f841e0f5c3c33b0432dec1.jpg` | 42 KB | 640×640 | Team, Mohammed Albaba: 51 |
| `051477fc13d9a2d94091467b.png` | **366 KB** | 422×484 | Team, Riham Tameem: 55 |
| `7595ab96563302b83a0e2753.jpg` | 69 KB | 485×750 | Team, Noor Khaled: 59 |
| `df2c0c5c6a35f0591ae659d2.jpg` | 58 KB | 1024×1024 | Team, Yousef Taweel: 63 |
| `f46740518bb1fa53a9bf75a7.png` | **800 KB** | 749×717 | Team, Omar Alsharif: 67 |

Team photos add up to about 2.9 MB for 96 px avatars. Only the testimonial logos (and the YouTube thumbnail that JS creates) have `loading="lazy"`. Team photos have no `alt`, no `width`/`height` and no lazy loading.

**External assets and endpoints**
- **Google Fonts** CSS and font files (`head.njk` 19–21).
- **YouTube**: `https://i.ytimg.com/vi/yRBbqktuGEs/maxresdefault.jpg` / `hqdefault.jpg` and the `https://www.youtube-nocookie.com/embed/yRBbqktuGEs` iframe (site.js 868–889).
- **`https://wewill.tech/og-image.php?title=…&kicker=…&description=…`**: a dynamic OG image from the live PHP site, used by 14 routes (28 front-matter values; everything except the 2 blog posts). New pages need either this endpoint or static OG images.
- **`https://wewill.tech/uploads/<cover>.png`**: absolute og:image on the 2 blog posts.
- **Broken**: `https://wewill.tech/wp-content/uploads/2023/04/logo-eye-1-300x104.png` (Oyoun Media, `clients.html` 57) and `…/Group-1-300x79.png` (In2World, `clients.html` 65). Both 404.
- **Inline SVG** social icons in `footer.html` 33, 44, 55, 66; emoji icons in AEQS cards and the chat.
- **Vibe Test page**: the logo PNG is embedded as a `blob:`; React, ReactDOM and Babel come from `unpkg.com`.

---

## 9. File-ownership plan for parallel work (proposal)

### 9.1 Hotspots today

Almost every section change touches at least one of these:

| Hotspot | Why it is shared |
|---|---|
| **`src/assets/site.css`** | Tokens, global RTL (96–135), every section, and cross-section responsive blocks (2306–2489) |
| **`src/assets/site.js`** | The translations dictionary (1–440) that overrides markup text, plus `siteSettings` (441–552) for nav and footer labels |
| **`src/index.njk`** | Home section order |
| **`partials/header.njk`** | Navigation, which depends on Home ids |
| **`layout.css`** | Header, footer and blog |

### 9.2 Files owned only by the main agent (shared)

- **Build and tooling**: `eleventy.config.js`, `package.json`, `package-lock.json`, `tools/*`, lint and test configs, CI.
- **Layout and chrome**: `src/_includes/layouts/base.njk` and all of `src/_includes/partials/*` (`head.njk`, `body-start.html`, `header.njk`, `footer.html`, `chat-widget.html`, `scripts.html`).
- **Global CSS**:
  - tokens (site.css 1–47) and the AEQS token aliases;
  - reset and base (49–64, 137–145);
  - shared components (296–393, `.visually-hidden`);
  - motion (2491–2555);
  - header, footer and lang-switcher CSS (layout.css 1–324, site.css 66–94);
  - **the CSS order manifest** (see 9.4).
- **Global JS**:
  - i18n core (`applyLanguage` and friends, 553–681);
  - nav toggle (683–692);
  - reveal (`scripts.html`);
  - pre-paint language (`body-start.html`);
  - the JS order manifest;
  - `siteSettings`.
- **Route files**: `src/**/index.njk`, meaning front matter (title, meta, `activeNav`, `chatWidget`) and include order. Section agents deliver partials; the main agent wires them in.
- **Shared data** (if introduced): `src/_data/nav.json`, `src/_data/site.json`.
- **`src/uploads/`**: deletions and renames. Adding new files is fine, using unique `<page>-<section>-<name>.<ext>` names.

### 9.3 Files that can be owned per section after the refactors

| Per section / page | Owned files |
|---|---|
| A Home section `<id>` | `src/_includes/sections/home/<id>.html`; `src/_includes/css/sections/home-<id>.css`; `src/_includes/js/i18n/<namespace>.js` (or the section-local bilingual markup, see 9.4 #3); optional `src/_includes/js/sections/<id>.js`; new images `src/uploads/home-<id>-*.{webp,jpg,png}` |
| A new page `<page>` (Vibe Test, Solutions, About, Resources …) | `src/_includes/sections/<page>/<section>.html` (one owner per section); `src/_includes/css/pages/<page>.css` or `css/sections/<page>-<section>.css` |
| AEQS page | `src/_includes/pages/ai-era-quality-services.html` (self-contained; one owner) |
| Blog | `src/_includes/pages/blog*.html` + `src/_includes/css/pages/blog.css` (extracted from layout.css 326–598) |

The route file `src/<page>/index.njk` stays with the main agent: it scaffolds it once with stub includes.

### 9.4 Refactors to do first, in order, by the main agent

Each refactor should be output-neutral and verified before parallel work starts. `verify:baseline` cannot do this after the first change, so verify with:
- (a) the `_site/**/*.html` diff before and after (ignoring `<link>`/`<script>` tags);
- (b) the concatenated CSS/JS diff against the originals;
- (c) Playwright screenshots of all 16 routes at 1440 and 390 px in EN and AR, compared with the pre-refactor build.

1. **Add tooling first** (§1): Playwright smoke tests (overflow, h1, nav anchors, AR toggle), axe, html-validate, stylelint. They become the regression net for everything below.

2. **Split `site.css` into ordered parts without changing the output.**
   - Move the file's content into `src/_includes/css/` part files.
   - Emit a **single `/assets/site.css`** from an ordered manifest. Keep one file so the PHP-portable deliverable stays one stylesheet. Two ways to do it:
     - a JS template (add `11ty.js` to `templateFormats`) that `fs.readFile`s the parts listed in `src/_includes/css/order.json` and joins them. This avoids Nunjucks parsing CSS.
     - a `site.css.njk` with `permalink: /assets/site.css` and `{% include %}` lines. This works today because no CSS contains `{{`, `{%` or `{#`; enforce that with stylelint.
   - Delete `src/assets/site.css` from passthrough, otherwise it collides with the generated file.
   - **Pre-create empty part files** for every planned section, so agents never edit the manifest.

   Proposed first cut, which reproduces the current order exactly:

   ```
   00-tokens.css             1–47
   01-base.css               49–64
   02-lang-switch.css        66–94
   03-rtl-global.css         96–135
   04-elements.css           137–145
   05-legacy.css             147–294
   10-components.css         296–393
   sections/home-hero.css    395–719
   sections/home-why.css     721–745
   sections/home-services-a.css   747–751
   sections/home-vibe-test.css    753–1015
   legacy-sara-page.css      1017–1182
   sections/home-genai.css   1184–1280
   sections/home-services-b.css   1282–1296
   sections/home-canvas.css  1298–1372
   sections/home-impact.css  1374–1426
   sections/home-how-we-work.css  1428–1473
   sections/home-team.css    1475–1594
   sections/home-success.css 1596–1804
   sections/home-clients-a.css    1806–1818
   legacy-clients-carousel.css    1820–1909
   sections/home-clients-b.css    1911–1966
   sections/home-knowledge.css    1968–2075
   sections/home-contact.css      2077–2167
   components/chat.css       2174–2304
   responsive-960.css        2306–2438
   responsive-640.css        2440–2489
   90-motion.css             2491–2555
   ```

   Lines 2169–2172 are only an empty "FOOTER" comment and can be dropped.

   **Second commit** (still the main agent; order-safe changes only):
   - Move each section's `@960`/`@640` rules and its global-RTL rules **into that section's file, after its base rules**. They override by source order at the same specificity (0,1,0), or have higher specificity (the RTL rules are 0,2,1).
   - Merge the `-a`/`-b` halves.
   - Move `.visually-hidden` (2122–2132) into components.
   - Fix `.contact-hp` with logical properties.
   - Promote the `.i18n-en`/`.i18n-ar` toggle to a global utility.
   - Delete legacy blocks once confirmed.

   **Cascade dependencies to preserve:**
   - `.card` (380) before `.genai-*` (1197). Genai overrides radius, border, shadow and padding by order.
   - site.css before layout.css. `.shell-lang-switcher` overrides `.lang-switcher` at the same specificity.
   - `@640 .section, .hero{padding-inline:6%}` must stay after `.section` (298) and `.hero` (401). The value is identical today, so this is only a latent risk.
   - Keep `90-motion.css` last. `html.js-anim [data-reveal]` (0,2,1) already beats section rules by specificity, but keep the order anyway.
   - **The in-body `<style>` blocks come last today.** They sit after both `<link>` stylesheets in document order, so they win every equal-specificity tie. For example, `.aeqs-promo{padding:64px 6%}` beats `.section{padding:80px 6%}`. If the AEQS page or promo CSS is moved into the bundle, place it after the responsive blocks, not next to the Home section parts.

3. **Fix the i18n trap, then split the dictionary.**
   - (a) Make the markup the single source of English copy:
     - first sync the 7 conflicting markup strings to what visitors see today (the `translations.en` values), so the change is visually neutral;
     - then change `applyLanguage` so EN restores the markup cached at load, instead of overwriting it with `translations.en`.
   - (b) Split `translations.ar` (and, temporarily, `.en`) into one file per namespace: `src/_includes/js/i18n/<ns>.js` as `Object.assign(translations.ar, {...})`, concatenated into `/assets/site.js` by the same manifest technique. Owners:
     - hero → `#hero`;
     - vibeTest, genai, why, services, canvas, impact → their sections;
     - process → `#how-we-work`;
     - team, success, clients, knowledge, contact → their sections;
     - chat → main agent.
   - (c) Delete dead keys: the whole `sara` namespace, `hero.chip*`, `knowledge.card*`, `knowledge.empty*`, and unused `siteSettings`.
   - (d) Pick **one** bilingual pattern for new and rewritten sections, so no agent needs a shared file. Recommended: section-local `.i18n-en`/`.i18n-ar` pairs, which the AEQS page and the Vibe Test page already use, with a global CSS toggle. Keep `data-i18n` only for untouched legacy sections.

4. **Split `site.js` into parts** behind the same bundle, output-identical at first:

   | Part | Current lines |
   |---|---|
   | `core/i18n.js` | 553–681 |
   | `core/nav.js` | 683–692 |
   | `pages/blog.js` | 694–704 |
   | `sections/team.js` | 758–799 (fix RTL and reduced motion here) |
   | `components/chat.js` | 806–844 |
   | `sections/vibe-test-video.js` | 846–902 |

   Delete 706–756 and 801–804. The inline contact script stays in `contact.html`, owned by the contact agent.

5. **Rebuild the chrome for the new information architecture** before section work, because every section links through it. The brief's navigation is:
   - Home, Vibe Test, Solutions, Resources, About;
   - primary CTA "Run a Guided Vibe Test".

   Do this in `header.njk` with a data-driven nav (`src/_data/nav.json`: label EN/AR, href, key), active state via `activeNav`/`page.url`, and a nav that closes on link click and has a backdrop. Also:
   - footer: © year, a single WhatsApp number, email;
   - update or remove the `siteSettings` nav keys.

6. **Scaffold routes and folders** for the new pages: `src/vibe-test/index.njk`, `src/solutions/index.njk`, `src/about/index.njk`, and Resources (reusing `/blog/` or a new `src/resources/index.njk`).
   - Each gets front matter (canonical `https://wewill.tech/<page>/`, og image) and stub includes of empty `sections/<page>/<section>.html`.
   - Decide the fate of the 11 standalone section routes (keep them with their own partials, redirect them, or drop them), so Home partial edits stop leaking into them.

### 9.5 Target layout (proposal)

```
src/
  _data/nav.json                         main    (new: IA, EN/AR labels)
  _includes/
    layouts/base.njk                     main
    partials/*.{njk,html}                main
    sections/home/<id>.html              section owner (one file each)
    sections/vibe-test/<id>.html         section owner   (new page)
    sections/solutions/<id>.html         section owner   (new page)
    sections/about/<id>.html             section owner   (new page)
    pages/ai-era-quality-services.html   page owner
    pages/blog*.html                     page owner
    css/order.json                       main   (order manifest; stubs pre-created)
    css/00-tokens.css … 10-components.css, components/*.css, 90-motion.css   main
    css/sections/<page>-<id>.css         section owner
    css/pages/<page>.css                 page owner
    js/order.json                        main
    js/core/*.js                         main
    js/i18n/<namespace>.js               section owner (AR strings for data-i18n legacy sections)
    js/sections/<id>.js                  section owner
  assets/layout.css (until merged)       main      → /assets/layout.css (passthrough)
  bundles/site.css.11ty.js               main      → /assets/site.css
  bundles/site.js.11ty.js                main      → /assets/site.js
  uploads/<page>-<section>-*.*           section owner (add-only)
  <route>/index.njk                      main
```

### 9.6 Risks to watch

- **Cascade order.** Splitting site.css must keep the dependencies listed in 9.4 #2. The global `@media` 960/640 blocks currently sit after every section: moving a rule earlier than a same-specificity base rule of **another** file makes it lose. Diff the concatenated output and the computed-style screenshots.
- **Specificity traps.**
  - `body.lang-ar .section`/`.hero {text-align:right}` (0,2,1) beats section rules (0,1,0) on the section element.
  - `html.js-anim [data-reveal]` (0,2,1) and `html.js-anim .hero .hero-*` (0,3,1) override `opacity`, `transform` and `transition` on revealed elements.
  - `.hero-dark .btn-*` recolours buttons inside the hero.
  - `!important` in the reduced-motion blocks.
  - `.aeqs-promo .section-inner` (0,2,0) replaces the grid of `.section-inner`.
- **JS selectors.** First-match `querySelector` (team, nav, chat); ids used by the chat and contact form (no duplicates allowed); `.sara-video.is-ready` visibility; `data-i18n` overwrite; `data-blog-html` overwrite. See §6.10.
- **Ids and anchors.** Header links to Home ids; `/contact/#contact` in AEQS CTAs; `scroll-margin-top:118px` on `section[id]`; `#top` already used by `<body>`; `#services` reused on the Vibe Test page.
- **Shared Home partials.** 11 standalone routes include them (§6.10).
- **Nunjucks parsing** of included `.html`, CSS or JS: `{{`, `{%`, `{#` (the Vibe Test template's `{{ rootRef }}`/`{{ toggleLang }}`).
- **PHP portability.** The README promises section-by-section copy into the live PHP templates. Keep class names and plain CSS/JS output. The bundles only concatenate, so `/assets/site.css` and `/assets/site.js` remain single files.
- **`verify:baseline`** fails after the first intentional change. Replace it with screenshot and computed-style regression tests for "no-change" refactors.
- **Parallel collision hotspots.** Even after the split, these stay single-owner: route files, `header.njk`, the manifests, `translations`/`siteSettings` (until migrated), and `scripts.html`. Route every change to them through the main agent.
