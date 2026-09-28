# Design audit: current wewill.tech and the Vibe Test page

Technical baseline audit before the restructure. Nothing in `src/` was changed; this file is the only output.

| | |
|---|---|
| Date | 2026-09-28 |
| Branch | `redesign/strategic-refinement` (no commits made) |
| Scope | Home (`src/index.njk` and its partials) first; then AI-Era Quality Services, Blog index, both blog posts, `/contact/` and the other 10 one-section pages; the external Vibe Test page (https://vibe-test.oneapp.dev/, secondary) |
| Playbook | Impeccable 4.4.0 `audit` (Setup via `impeccable context`, then `reference/audit.md`), bundled detector `impeccable detect --json` |
| Measurement | Google Chrome 153 (headless) driven by playwright-core 1.63 at 390, 768 and 1440 px (plus a 320 px reflow check), English and Arabic |
| Authority | No PRODUCT.md or DESIGN.md exists. `impeccable context` returned `NO_PRODUCT_MD` and `EXISTING_VISUAL_SYSTEM`, so the incumbent implementation is the reference |
| Not included | `/impeccable critique` (the main agent runs it separately); no fixes |

**Severity rule.** P0 blocks a task. P1 is major difficulty, or a WCAG A/AA failure on a core path. P2 is a WCAG AA failure with limited scope, or a notable defect with a workaround. P3 is polish.

**Evidence notation.** `file:line` refers to `src/`. "Snapshot" paths are under `docs/current-site/`. "(temp capture)" is a screenshot in the session scratchpad listed in section 5; these are not committed. All numbers were measured in Chrome unless marked otherwise.

---

## 1. Impeccable audit report

### Audit Health Score

| # | Dimension | Score | Key finding |
|---|---|---|---|
| 1 | Accessibility | **2** | Level A failures on Home: 13 team photos have no `alt` (1.1.1); the testimonial marquee and team carousel move with no pause control (2.2.2); the closed chat panel leaves 4 invisible controls in the tab order |
| 2 | Performance | **2** | Home transfers 3.66 MB, of which 3.53 MB is images: a 3503×3503 PNG logo shown at 60 px, and 13 eager team photos (3.09 MB, up to 1.1 MB each) shown at 96 px. The hero entrance animation holds throttled-mobile LCP at 3.8–4.0 s (1.3–1.5 s without it). TBT ≈19 ms and CLS ≤0.003 are good |
| 3 | Responsive Design | **1** | In Arabic, Home and `/contact/` become 10,367–11,040 px wide. On phones the layout viewport is forced to 1,560 px and the first screen is blank. English passes at 320–1440 px. The team carousel is frozen in RTL, and nav labels are clipped at 901–1,090 px |
| 4 | Theming | **2** | `--ww-*` tokens exist and are tuned for AA, but three colour systems run in parallel (site.css has 235 colour literals vs 151 token uses), with 42 font-size values and 9 off-token radii |
| 5 | Implementation Integrity | **1** | Copy has two sources of truth: `site.js` rewrites 7 Home strings after load. 20.6 % of `site.css` styles components that no longer exist. The same section formula and decorative effects repeat on every section |
| **Total** | | **8/20** | **Poor (major overhaul)** |

On its own, the English desktop experience would score about 12–13 (Acceptable). Two things pull the total into the Poor band: the Arabic mobile failure on the two conversion pages (the site targets Saudi Arabia first), and the systemic drift. Fixing F1 alone lifts Responsive to 2–3.

### Implementation Integrity verdict: FAIL

The implementation does not yet express one coherent, product-specific system:

- **Two sources of truth for copy.** Visible text is whatever `site.js` puts there after load. The HTML says something else in 7 of 150 translatable strings on Home: the H1 is "Ship with confidence. Not just clean test reports." in `sections/home/hero.html:14-17`, but "We don't just test software. We protect product decisions." after `site.js:101`. 88 of the 217 English dictionary keys are unused (66 `sara.*`).
- **Three colour systems.** These are `--ww-*` in `site.css:1-47`; a duplicate `--aeqs-*` set plus 48 literals in the AI-Era `<style>` block (`pages/ai-era-quality-services.html:3-601`); and an ad-hoc palette in the promo band's own `<style>` block (`sections/home/ai-era-quality-services-promo.html:2-109`). On top of those come Tailwind-slate hex values in the GenAI section, the blog and `layout.css`.
- **Dead code.** 75 rules (12.7 KB, 20.6 %) of `site.css` target components that no page renders: the legacy `.site-header`/`.header-*` header, the Sara page, and the logo carousel. `site.js` still ships the logo-carousel and legacy-nav modules.
- **Interchangeable composition.** 12 of 14 Home sections follow the same kicker → h2 → subtitle → card-grid formula. The detector confirms repeated signatures of generated UIs: gradient headline text, a pulsing dot, an infinite beam sweep and marquee, coloured glows, radial spotlights, a perspective grid floor, a tracked-caps eyebrow chip, a hairline border plus 24 px-blur shadow on 32 cards, a side-tab accent, and emoji icons.
- **The Vibe Test page is a separate system.** It uses system fonts, all-caps display type, 9–10.5 px mono labels and its own blue (#2E6BE6). All of this must be reconciled when the page moves into wewill.tech.

Product-specific and worth keeping: the release "receipt" verdict card (`sections/home/vibe-test.html:17-34`), the "How a release earns its GO" signal track (`sections/home/hero.html:27-47`), and the tint tokens with their documented contrast intent (`site.css:7-18`).

### Executive summary

- **Audit Health Score: 8/20 (Poor).**
- **29 issues:** P0 1, P1 7, P2 12, P3 9.
- **Top issues:**
  1. **P0.** Arabic Home and `/contact/` are unusable on phones and tablets: document 10,367 px wide, layout viewport 1,560 px, blank first screen. The cause is one CSS rule: the spam-trap field's `left:-10000px` in an RTL page.
  2. **P1.** The hero entrance animation keeps the H1 and subtitle invisible, costing about 2.5 s of LCP on a mid-range mobile profile.
  3. **P1.** 3.5 MB of oversized, eagerly loaded images on Home. The mobile load event arrives at 18.6 s on a throttled connection.
  4. **P1.** Keyboard and assistive-tech blockers: invisible focusable chat controls; auto-moving testimonials and team carousel with no pause control; team photos without `alt`.
  5. **P1.** The team carousel is frozen in Arabic. On a phone only 2 of 13 people can ever be seen.
- **Recommended next steps:** `/impeccable adapt` (Arabic/RTL and breakpoints), `/impeccable optimize` (images, LCP, dead code), `/impeccable harden` (chat, alt text, forms, semantics, copy source), `/impeccable animate` (pause/stop, reduced motion). Then `/impeccable extract` and `/impeccable document` to consolidate one token system, and finish with `/impeccable polish`.

### Detailed findings by severity

#### P0: Blocking

**[P0] F1. Arabic Home and /contact/ break on phones and tablets (about 10,000 px of sideways overflow)**
- **Location:** `.contact-hp { position:absolute; left:-10000px }` in `src/assets/site.css:2134-2141`, used by the contact form's honeypot in `src/_includes/sections/home/contact.html:24-27`. It is rendered on `/` and `/contact/`.
- **Category:** Responsive / Accessibility
- **Evidence** (Arabic via a stored preference or via the site's own toggle):

  | Width | Document width | Layout viewport (`innerWidth`) | What the visitor gets |
  |---|---|---|---|
  | 390 (phone) | 10,367 px | 1,560 px, so Chrome lays out the desktop design on a phone | Blank first screen; scrolled to x = −1,169 on load, or x = −9,976 after pressing AR |
  | 768 (tablet) | 10,704 px | 3,072 px | Scrolled to x = −2,304 |
  | 1440 (desktop) | 11,040 px | 1,440 px | Page renders, but with a 9,600 px horizontal scroll range |

  In English the document equals the viewport at every width, and all other pages are clean in both languages. Screenshots: snapshot `screenshots/home/ar/first-viewport--mobile--as-rendered.jpg` and `screenshots/contact/ar/first-viewport--mobile--as-rendered.jpg`; temp captures `ar-onload-home-390-viewport.png` and `ar-toggle-home-390-viewport.png` (both blank white).
- **Impact:** A Saudi visitor who has chosen Arabic lands on a blank Home or Contact page on mobile. They have to find the content by scrolling sideways through a desktop layout rendered inside a phone. This is the primary market's language on the two main conversion pages.
- **Standard:** WCAG 2.2 1.4.10 Reflow (AA).
- **Recommendation:** Hide the honeypot without a physical offset. For example, reuse the existing `.visually-hidden` clip pattern, or use `clip-path: inset(50%)` inside the form, or `display:none` (the field is already `tabindex="-1"` and `aria-hidden`). Then add an Arabic overflow assertion (`scrollWidth === innerWidth` at 390/768/1440 on `/` and `/contact/`) to `tools/verify-baseline.mjs`.
- **Suggested command:** `/impeccable adapt`

#### P1: Major

**[P1] F2. Team carousel is frozen in Arabic (RTL)**
- **Location:** `src/assets/site.js:758-799`; buttons at `sections/home/team.html:13-14`; styles at `site.css:1481-1594`.
- **Category:** Responsive / Accessibility
- **Evidence:** In Arabic, `.team-scroller` has `direction: rtl`, where Chrome's `scrollLeft` runs from 0 towards negative values. The script clamps its targets to the LTR range 0…max, so Next, Previous and autoplay all leave `scrollLeft` at 0 (max 1,638 at 1440 px; 2,415 at 390 px). At 1440 px, 5 of 13 people are visible; at 390 px, only 2 (Ibrahim Alsharif and Haneen Ibrahim). The `‹`/`›` glyphs are bidi-mirrored characters on buttons placed with physical `left`/`right` (temp capture `ar-home-390-10-team.png`). In English, Next works (0 → 720 → 1440).
- **Impact:** 11 of the 13 team members cannot be reached by Arabic mobile visitors, and the controls appear broken.
- **Standard:** Functional RTL defect; 1.3.2 Meaningful Sequence (A) is affected, because the content order cannot be traversed.
- **Recommendation:** Scroll by card with `scrollIntoView({inline:'nearest'})`, or use `scrollBy` with a direction sign taken from `getComputedStyle(scroller).direction`. Use logical `inset-inline-start`/`-end` for the buttons and direction-aware icons. Better still, drop the hidden-overflow carousel for a wrapping grid or native scroll-snap.
- **Suggested command:** `/impeccable adapt`

**[P1] F3. Auto-moving content with no way to pause it**
- **Location:** Testimonial marquee, `site.css:1698-1731` (animation), `1717-1720` (pause only on `:hover` / `:focus-within`), markup at `sections/home/success-stories.html:22-242`. Team autoplay, `site.js:782` (`setInterval` every 3 s), paused only on `mouseenter` (`site.js:797-798`). Hero loops, `site.css:425-437, 460-474, 511-526, 541-555, 684-698`.
- **Category:** Accessibility (motion)
- **Evidence:** Home runs 8 infinite animations of 6 types: two aurora drifts (26 s and 32 s), a beam sweep (9 s), an eyebrow pulse (2.4 s), headline shimmer (7 s), a GO-dot pulse (2.6 s) and two marquee tracks (70 s). There are no pause, stop or play controls on the page. The marquee contains no focusable elements, so `:focus-within` can never fire, and keyboard and touch users cannot pause it. With `prefers-reduced-motion: reduce` emulated, the CSS animations do stop (good), but the JavaScript team autoplay keeps moving: `scrollLeft` goes 0 → 720 → 1440 over 6.7 s. Smooth scrolling (`site.css:55-57`, again in `layout.css:14-16`) is also never disabled.
- **Impact:** Testimonial text scrolls past at about 40 px/s and cannot be held still to read. People with vestibular or attention conditions get continuous motion. Keyboard and touch users cannot stop either carousel.
- **Standard:** WCAG 2.2.2 Pause, Stop, Hide (A); 2.3.3 Animation from Interactions (AAA, advisory).
- **Recommendation:** Add a visible pause/play button for each moving region. Stop the JS autoplay when `matchMedia('(prefers-reduced-motion: reduce)')` matches or when the carousel has focus. Wrap `scroll-behavior: smooth` in `@media (prefers-reduced-motion: no-preference)`. Reconsider whether decorative infinite loops are needed at all.
- **Suggested command:** `/impeccable animate` (then `/impeccable quieter` for the decorative loops)

**[P1] F4. The chat widget keeps 4 invisible controls in the tab order, and its state is not exposed**
- **Location:** Panel hidden with `opacity:0; pointer-events:none` only (`site.css:2200-2226`); markup in `partials/chat-widget.html:2-20`; behaviour in `site.js:806-844`.
- **Category:** Accessibility (keyboard / ARIA)
- **Evidence:** In a desktop tab walk of Home, stops 39–42 are the close button, the message textarea, WhatsApp and Email. All four are at opacity 0 while the panel is closed, so focus becomes invisible and a keyboard user can type into a textarea they cannot see. The toggle has no `aria-expanded` or `aria-controls`. Escape does not close the panel. After Close, focus stays on the now-invisible close button instead of returning to the toggle. The textarea's only name is its placeholder, and the button labels start with emoji (U+1F4AC, U+2709), which screen readers read aloud. The whole widget is an `aria-live="polite"` region. The same happens on `/contact/`.
- **Impact:** Keyboard and screen-reader users hit four phantom stops before the footer on every visit to Home and Contact, and cannot tell whether the panel is open.
- **Standard:** WCAG 2.4.7 Focus Visible (AA), 2.4.3 Focus Order (A), 4.1.2 Name, Role, Value (A).
- **Recommendation:** When closed, use `hidden` or `inert` (or `visibility:hidden` alongside the opacity transition). Set `aria-expanded` and `aria-controls` on the toggle. Close on Escape and return focus to the toggle. Give the textarea a real label. Remove `aria-live` from the container. Hide the emoji with `aria-hidden` spans.
- **Suggested command:** `/impeccable harden`

**[P1] F5. 13 team photos have no `alt` attribute**
- **Location:** `sections/home/team.html:19-67` (Home `#team` and `/team/`).
- **Category:** Accessibility
- **Evidence:** 13 `<img>` elements have no `alt`. Chrome's accessibility tree exposes 13 unnamed images on Home, and screen readers may announce the file names (e.g. `1bd4cda42248525210e1e8a6.png`). Confirmed on the live site, matching capture problem #5.
- **Impact:** Screen-reader users hear meaningless file names 13 times.
- **Standard:** WCAG 1.1.1 Non-text Content (A).
- **Recommendation:** The name is printed directly below each photo, so use `alt=""`. Alternatively, give the photo `alt` equal to the name and hide the duplicated name from the accessibility tree.
- **Suggested command:** `/impeccable harden`

**[P1] F6. The hero entrance animation delays LCP by about 2.5 s on mobile**
- **Location:** Hero copy starts at `opacity:0; transform:translateY(18px)` (`site.css:2524-2535`) and appears only when `is-loaded` is added after two `requestAnimationFrame`s (`partials/scripts.html:7-14`), with 80–620 ms delays and 760 ms transitions (`site.css:2536-2540`).
- **Category:** Performance
- **Evidence:** Live wewill.tech at 390 px, throttled (150 ms RTT, 1.6 Mbps, 4× CPU), 3 runs per variant:

  | Variant | FCP | LCP |
  |---|---|---|
  | Default | 1.26–1.67 s | **3.82–3.98 s** (hero subtitle) |
  | Entrance disabled (reduced motion) | 1.29–1.47 s | **1.29–1.47 s** (H1) |
  | `site.js` blocked | 1.28–1.38 s | 3.98–4.10 s |

  The delay comes from the animation itself, not from loading `site.js`. On desktop the live LCP is 1.21 s (H1) against an FCP of 0.80 s.
- **Impact:** The first impression, the proposition, arrives about 2.5 s late on a typical phone, and LCP sits just under the 4 s "poor" threshold.
- **Standard:** Core Web Vitals (LCP ≤ 2.5 s "good").
- **Recommendation:** Render the hero text visible at first paint. If an entrance is kept, animate only transform or a secondary element, never the headline's opacity.
- **Suggested command:** `/impeccable optimize`

**[P1] F7. 3.5 MB of oversized, eagerly loaded images on Home**
- **Location:** `sections/home/team.html:19-67`, `clients.html:20-66`, `success-stories.html` (logos); files in `src/uploads/`.
- **Category:** Performance
- **Evidence:** Live Home has 35 requests totalling 3,661 KB: images 27 requests / 3,527 KB, fonts 76 KB, CSS 14.7 KB, JS 20.4 KB, HTML 21.8 KB.
  - The 13 team photos total 3,087,224 bytes, are rendered at 96 px wide, and none is lazy-loaded. Examples: `1bd4cda4…png` 1,101 KB (1024×1145 → 96×107); `f4674051…png` 800 KB; `051477fc…png` 366 KB.
  - The One Studio logo `8636daa1…png` is 3503×3503 (405 KB) and rendered at 60×60, 58× oversize.
  - None of the 57 `<img>` elements has `width`/`height`. 30 are lazy: the 29 testimonial logos and the YouTube thumbnail. The team photos and client logos load eagerly.
  - On throttled mobile the `load` event fires at 18.6 s.
  - Two logos are fetched from dead `/wp-content/` URLs (404).
- **Impact:** Slow first load and heavy mobile data use. Images compete with the hero for bandwidth.
- **Standard:** Web performance best practice (Lighthouse "properly size images", "defer offscreen images").
- **Recommendation:** Export avatars at 192×192 (2×) as WebP or AVIF (each under 15 KB), logos at 2× their rendered size, add `width`/`height` everywhere, and `loading="lazy"` below the fold. Expected saving is more than 3.3 MB.
- **Suggested command:** `/impeccable optimize`

**[P1] F8. The Vibe Test page has no title, no language and no main landmark**
- **Location:** https://vibe-test.oneapp.dev/ (snapshot `raw/vibe-test-bundle.html`, rendered `raw/html/vibe-test-external.html`).
- **Category:** Accessibility / Implementation Integrity
- **Evidence:** `document.title` is `""` (the bundle ships `<title>Bundled Page</title>`, which the unpacked page drops). `<html>` has no `lang` or `dir` in either language; the Arabic mode sets `dir` on an inner container only. There is no `<main>` and no meta description. The page renders nothing without JavaScript ("This page requires JavaScript to display").
- **Impact:** Screen readers use the wrong pronunciation rules, especially in Arabic. The tab and bookmark have no name, and the page is invisible to non-JS crawlers.
- **Standard:** WCAG 2.4.2 Page Titled (A), 3.1.1 Language of Page (A), 1.3.1 (landmarks).
- **Recommendation:** When the page is rebuilt inside wewill.tech, use the shared shell (`base.njk` sets `lang`/`dir`), a page title and description, and `<main>`.
- **Suggested command:** `/impeccable harden`

#### P2: Minor

**[P2] F9. Focus hidden under sticky elements on mobile**
- **Location:** Sticky header, `layout.css:1-12` (120 px tall at 390 px because it wraps into two rows); AI-Era sticky CTA bar, `pages/ai-era-quality-services.html:551-575, 1224-1233` (at ≤960 px).
- **Category:** Accessibility (keyboard)
- **Evidence** (scroll allowed to settle for 900 ms after each Tab):
  - Home at 390 px, tabbing backwards: the Name and Email fields and the MICEtribe logo link end up 100 % under the header; "Company / Product" 60 %; the TQF card 58 %.
  - AI-Era at 390 px, tabbing forwards: the last FAQ summary is 99 % under the sticky CTA and the footer Instagram link 76 %.
  - Two FAQ summaries are 100 % under the header when tabbing backwards.
  - Desktop 1440 px: no obscured stops.
- **Impact:** A keyboard user loses sight of what is focused.
- **Standard:** WCAG 2.4.11 Focus Not Obscured (Minimum) (AA).
- **Recommendation:** Add `html { scroll-padding-top: <header height>; scroll-padding-bottom: <sticky bar height> }` and reduce the mobile header to one row.
- **Suggested command:** `/impeccable adapt`

**[P2] F10. Contact form: placeholder labels, no required markers, generic errors, lost focus, faint borders**
- **Location:** `sections/home/contact.html:11-31` (form), `41-110` (script); `site.css:2090-2167`.
- **Category:** Accessibility (forms)
- **Evidence:**
  - Labels are programmatic but visually hidden (`.visually-hidden`), so the placeholder is the only visible label and it disappears on typing.
  - Name and Email are `required`, but nothing marks them visually.
  - `novalidate` is set and there is no client-side validation: an empty form still POSTs (observed on the static build).
  - Errors are one generic sentence ("Please check your name and email and try again." or the network error), with no `aria-invalid` or `aria-describedby` on the failing fields.
  - The submit button is disabled while it has focus, so after submitting focus drops to `<body>`.
  - Input borders are rgba(148,163,184,.6) = **1.69:1** against white (chat textarea 1.87:1, blog search 1.34:1).
  - The placeholder colour is Chrome's default #757575 (4.61:1).
  - The status message is `role="status"`, which is good.
- **Impact:** A higher error rate, and screen-reader users don't know which field to fix. Low-vision users struggle to find the field edges.
- **Standard:** WCAG 3.3.1 Error Identification (A), 3.3.2 Labels or Instructions (A), 1.4.11 Non-text Contrast (AA), 2.4.3 Focus Order (A).
- **Recommendation:** Use visible labels above the fields and mark required ones. Validate on submit, with inline messages linked by `aria-describedby`, `aria-invalid`, and focus moved to the first error. Keep focus on the button while it is busy (`aria-disabled` instead of `disabled`). Use borders of at least 3:1.
- **Suggested command:** `/impeccable harden` (then `/impeccable clarify` for the messages)

**[P2] F11. Text contrast failures (a few on wewill.tech, several on Vibe Test)**
- **Location and evidence:**
  - Home video label "Watch Vibe Test in action", white 15.2 px/600 over the YouTube thumbnail: median **3.09:1** at 390 px, **3.96:1** at 1440 px (`site.css:984-992`; the 55 % gradient at `955` is too weak; temp capture `video-facade-390.png`).
  - AI-Era hero "WE WILL" in #FF6716 at 46 px/800: **2.73:1** (large-text threshold 3:1) (`pages/ai-era-quality-services.html:72, 615`). This is the brand name, so WCAG's logotype exception may apply.
  - Vibe Test service indices "/01"–"/04" #B9C6DD on white: **1.72:1**. "/05" white at 55 % on #2E6BE6: **2.53:1**. GenAI card body #D9E5FB on #2E6BE6 at 14.5 px: **3.79:1**. Final CTA subtitle #DCE7FB on #2E6BE6 at 17 px: **3.87:1**.
  - Marginal but passing: the hero label "How a release earns its GO" at **4.57:1** (11.5 px, 55 % alpha); slate #64748B text at 4.55–4.76:1 on the blog and in the GenAI section.
  - Across 478 text elements measured on Home, AI-Era, Blog, the post and Contact at 1440 px, everything else passes AA.
- **Category:** Accessibility
- **Standard:** WCAG 1.4.3 Contrast (Minimum) (AA).
- **Recommendation:** Put a solid scrim behind the video label (around 70 % ink) or place it below the thumbnail. On blue panels, use white text at 100 % (white on #2E6BE6 is 4.81:1). Darken the index labels. Raise the hero label's alpha to at least 0.7.
- **Suggested command:** `/impeccable polish`

**[P2] F12. Page-structure semantics: missing H1s, skipped levels, a meaningful list hidden from screen readers**
- **Location:**
  - The 11 one-section pages (`/why-we-will/`, `/services/`, `/team/`, `/clients/`, `/knowledge/`, `/success-stories/`, `/genai-based-systems/`, `/quality-canvas/`, `/impact/`, `/how-we-work/`, `/contact/`) render only the Home section's `<h2>`.
  - AI-Era jumps from h2 to h4 at `pages/ai-era-quality-services.html:896` (process steps), `969` (audience cards) and `1022` ("Not for you if…").
  - The promo band's six-item service list sits in `aria-hidden="true"` (`sections/home/ai-era-quality-services-promo.html:129`).
- **Category:** Accessibility
- **Evidence:** H1 count is 0 on all 11 pages; the detector's `skipped-heading` fires twice on AI-Era; the promo list is absent from the accessibility tree.
- **Impact:** Screen-reader heading navigation and document outlines break, and the promo's substance is invisible to screen-reader users. There is also an SEO cost.
- **Standard:** WCAG 1.3.1 Info and Relationships (A), 2.4.6 Headings and Labels (AA).
- **Recommendation:** Give each page its own H1, use h3 under h2, and remove `aria-hidden` from the promo list (hide only the decorative bullets).
- **Suggested command:** `/impeccable harden`

**[P2] F13. Copy has two sources of truth (markup vs `site.js` dictionary)**
- **Location:** `site.js:1-440` (dictionary), `564-681` (`applyLanguage` runs on every load and rewrites every `[data-i18n]` element, in English too). Example: `sections/home/hero.html:12-20` vs `site.js:100-102`.
- **Category:** Implementation Integrity
- **Evidence:** Comparing the server HTML with the rendered English DOM:
  - Home: 7 of 150 strings differ. `hero.eyebrow` "Quality Strategy…" → "Software Quality…"; `hero.title` "Ship with confidence…" → "We don't just test software…"; `hero.subtitle`; `success.kicker` "Testimonials" → "Success Stories"; `success.title`; `success.subtitle`; `success.cta`.
  - `/success-stories/`: 4 of 34 differ.
  - 88 of the 217 English dictionary keys are unused (66 `sara.*`, 18 `knowledge.*`, 4 `hero.chip*`), and the Arabic dictionary mirrors them.
- **Impact:** Editing a template does not change what visitors see. Crawlers and previews that don't run JS read different copy. It is a trap for the restructure team.
- **Standard:** Maintainability / content integrity.
- **Recommendation:** Keep one source per string. Either render both languages server-side (as the AI-Era page and promo already do with `.i18n-en`/`.i18n-ar`), or make the dictionary the only source and leave template text empty. Delete unused keys.
- **Suggested command:** `/impeccable harden`

**[P2] F14. Design-token drift: three colour systems, no type scale**
- **Location:** `site.css` (235 colour literals vs 151 `var(--ww-*)` uses); `layout.css` (46 literals vs 7 token uses); AI-Era `<style>` (12 `--aeqs-*` tokens duplicating `--ww-*` values, plus 48 literals, `pages/ai-era-quality-services.html:3-20`); promo `<style>` (18 literals, `promo.html:2-109`); inline `style=""` in `quality-canvas.html:27, 46`.
- **Category:** Theming
- **Evidence:**
  - Hard-coded surfaces and accents: hero #060A14, footer #0f172a, promo #0f1f6b→#1b3bbf with #ffd76b, GenAI slate #1f2937/#64748b/#0f172a and a #16a34a→#2563eb dot, impact arrows #e11d48/#15803D, filter amber #f59e0b/#b45309.
  - 42 distinct `font-size` values.
  - Radii: token 12 px (17 uses) plus 8, 10, 14, 16, 18, 24, 28, 30 px and 50 %. Blog and GenAI cards use 28 px; article media 30 px.
  - 40 of 70 `box-shadow` declarations are untokenised.
- **Impact:** Every new section drifts further, and a restyle (the restructure) has to hunt literals across four files.
- **Standard:** Design-system consistency.
- **Recommendation:** One token file (colour, type scale, radius, shadow, spacing), with the AI-Era and promo styles moved into it. Then generate DESIGN.md.
- **Suggested command:** `/impeccable extract`, then `/impeccable document`

**[P2] F15. Dead CSS and JavaScript**
- **Location:**
  - `site.css:147-294` (legacy `.site-header`, `.header-*`, `.nav-toggle`) plus its responsive rules at `2308-2348`.
  - `site.css:795-811, 1017-1182` (Sara page: `.sara-page-*`, `.sara-identity-*`, `.sara-mode-*`, `.sara-process-*`, `.sara-principle-*`, `.sara-cta-box`, `.sara-image-frame`).
  - `site.css:1820-1909` (logo carousel `.clients-row`, `.client-logo`, `.clients-nav`).
  - `site.js:706-713` (legacy nav), `715-756` (logo carousel with a 2.5 s autoplay), `801-804` (`#year-span`), and the unused dictionary keys (F13).
- **Category:** Performance / Implementation Integrity
- **Evidence:** 75 rules / 12,750 B (20.6 %) of `site.css` target selectors present on none of the 16 pages. Chrome coverage across 16 pages × 2 widths × EN/AR shows 36.1 % of `site.css` never matched; this also counts untriggered hover, error and reduced-motion states. `layout.css` is 10.8 % unused.
- **Impact:** Bytes on every page, and confusion about which components are live. For example, the CSS comment at `site.css:1820-1825` says the carousel "is still live in production"; in this markup it is not.
- **Recommendation:** Delete the dead groups before the restructure starts, so the baseline is honest.
- **Suggested command:** `/impeccable optimize`

**[P2] F16. Header nav labels clipped between 901 and about 1,090 px, and under text-spacing overrides**
- **Location:** `.shell-nav a { white-space:nowrap; overflow:hidden; text-overflow:ellipsis; max-width:14rem }` in `layout.css:99-110`; the desktop nav shows above 900 px (`layout.css:249-301`).
- **Category:** Responsive / Accessibility
- **Evidence:**
  - At 901 and 960 px, all 7 labels are clipped in both English and Arabic (e.g. "AI-Era Qualit", "How We Wo", "Contac"; temp capture `header-960.png`).
  - At 1,024 px (iPad landscape), 4 English labels are clipped. They are fine from 1,100 px up.
  - With WCAG text-spacing overrides (letter-spacing 0.12em, word-spacing 0.16em, line-height 1.5), 6 labels truncate even at 1440 px.
- **Impact:** Tablet and small-laptop visitors see unreadable navigation.
- **Standard:** WCAG 1.4.12 Text Spacing (AA); responsive breakpoint gap.
- **Recommendation:** Switch to the menu button below about 1,100 px, or let the nav wrap or shrink its gaps. Never truncate navigation labels.
- **Suggested command:** `/impeccable adapt`

**[P2] F17. RTL defects beyond the overflow**
- **Location:** `site.css:1318-1330` (bullets), `sections/home/vibe-test.html:17-34` (untranslated card), `partials/header.njk:62` ("Menu"), `sections/home/knowledge.html` (↗ arrows).
- **Category:** Responsive (RTL) / Implementation Integrity
- **Evidence:**
  - Quality Canvas bullets are positioned with physical `left:4px` and `padding-left`, so in Arabic they sit about 580 px away from their right-aligned text (temp capture `ar-home-1440-07-quality-canvas.png`).
  - 10 strings in the verdict card, the mobile "Menu" button and the blog dates ("Jun 22, 2024") stay English in Arabic mode.
  - Letter-spacing is applied to Arabic script in 23 elements on Home and 15 on AI-Era: +0.2–0.24em on kickers and eyebrows, −0.02 to −0.04em on headings, −2.88 px on the Arabic blog title. Chrome keeps the letters joined (verified visually), but WebKit/Safari is known to break cursive joining under letter-spacing. Not tested; a risk for iPhone users.
  - "WE WILL." splits across lines in Arabic headings, with the full stop jumping to the start of the line (".WILL" in `#team` at 390 px).
  - The ↗ arrows are not mirrored.
- **Impact:** The Arabic experience looks unfinished and partly untranslated.
- **Standard:** i18n/RTL practice; 3.1.2 Language of Parts (AA) for mixed-language strings.
- **Recommendation:** Use logical properties (`inset-inline-start`, `padding-inline-start`); set `letter-spacing:0` for `:lang(ar)`; keep "WE WILL" together with `&nbsp;` inside `<bdi>`; translate the remaining strings.
- **Suggested command:** `/impeccable adapt`

**[P2] F18. Testimonials: truncated quotes and triple readings**
- **Location:** `sections/home/success-stories.html:13-242`; `site.css:1748-1756` (`-webkit-line-clamp: 6`).
- **Category:** Accessibility / Implementation Integrity
- **Evidence:** Marquee quotes are clipped at 6 lines with no way to expand them (the SellEnvo and iStoria quotes are cut). Row 1 and row 2 each hold all 7 quotes, and only their loop clones are `aria-hidden`, so a screen reader reads 15 quotes, 7 of them unique. One Studio's quote is read 3 times (featured card plus both rows). This matches capture problem #6.
- **Impact:** Sighted users cannot read full quotes; screen-reader users hear repetition. It dilutes the proof.
- **Standard:** 1.3.1 (A); content quality.
- **Recommendation:** Show a fixed set of 2–3 complete quotes (the brief's "selected proof"). If a scroller is kept, `aria-hide` the duplicate row and add a pause control (F3).
- **Suggested command:** `/impeccable distill`

**[P2] F19. Broken or inconsistent content and trust signals (verified live)**
- **Location and evidence:**
  - The "Business-Care Quality" card links to `https://wewill.tech/business-care-quality`, which returns 404 (`knowledge.html:13`).
  - Both blog "Read the original WE WILL article" links return 404 (`pages/blog--*.html:28/47`, `:26/41`).
  - The Oyoun Media and In2World logos return 404 and render as empty cards (`clients.html:57, 65`).
  - Alt texts don't match the logos: One Studio is "iStoria logo" (`clients.html:21`); SellEnvo is "Inspire" (`:45`).
  - The footer reads "© 2023 WE WILL" (`footer.html:18`); the Vibe Test page says © 2026.
  - Two different WhatsApp numbers: the footer uses `phone=002 01023833940`, with a space (`footer.html:49`); the chat widget uses `970567720720` (`site.js:832`).
  - Two contact emails: `info@wewill.tech` in the form and chat (`contact.html:46`, `site.js:839`) vs `hello@wewill.tech` on Vibe Test.
  - There is no favicon (`/favicon.ico` returns 404).
  - Both blog covers are byte-identical files described as "Abstract blue" and "Abstract purple" (`blog.html:39, 59`).
- **Category:** Implementation Integrity
- **Impact:** A B2B buyer checking credibility meets dead links, missing logos and conflicting contact details.
- **Recommendation:** Fix or remove each item, and pick one phone number and one email.
- **Suggested command:** `/impeccable harden` (content) and `/impeccable clarify`

**[P2] F20. Vibe Test page: perpetual motion, intermittent content, micro-type, runtime cost**
- **Location:** https://vibe-test.oneapp.dev/ (snapshot `raw/vibe-test-bundle.html`).
- **Category:** Accessibility / Performance / Responsive
- **Evidence:**
  - Motion: 10 infinite animation types (24 instances). The "Live QA run" terminal rows and the receipt rows fade in and out forever, and there is no pause control. With reduced motion the animations stop, but the terminal rows stay at opacity 0, leaving an empty terminal (temp capture `vibe-first-viewport-390-reduce.png`).
  - Type: 11 labels at 9–10.5 px ("BY WE WILL TECH" 9 px, "CLOSED LOOP" 9.5 px, "#VT-4821" 10 px), tracked 0.14–0.24em.
  - Mobile header: 198 px tall at 390 px (three rows).
  - Runtime: TBT about 493 ms on the throttled profile (3 long tasks of 192–229 ms). The 165 KB document is downloaded twice (page and self-fetch to unpack). React 18 UMD comes from unpkg.com. LCP is 1.8 s on desktop and 3.4 s throttled.
  - The detector's contrast hit on outline text ("#000000 on #0b1526") is a false positive: the visible stroke measures 6.6–17:1.
- **Impact:** The key proof ("receipts") is only readable intermittently, or not at all under reduced motion. Micro-labels are hard to read on phones.
- **Standard:** 2.2.2 (A), 1.4.4 legibility practice; Core Web Vitals (TBT).
- **Recommendation:** When the page is rebuilt inside wewill.tech, render the terminal and receipt in their end state, animate once, and add a pause control. Use a 12 px minimum for labels. Serve static HTML instead of a runtime bundle.
- **Suggested command:** `/impeccable animate`, `/impeccable optimize`

#### P3: Polish

**[P3] F21. Content edges don't line up.** At 1440 px, the header and footer logos start at x = 216 px (`.shell-inner` max-width 1180, `layout.css:30-36`), Home sections at x = 160 px (`.section-inner` max-width 1120, `site.css:302-305`), and blog content at x = 246 px (extra 6 % padding inside, `layout.css:332-338`). The result is a visible stagger of about 56 px between the header and the content. *Command:* `/impeccable layout`

**[P3] F22. Type scale and hierarchy.** There are 42 font-size values and no scale tokens. `.section-kicker` is 19.2 px uppercase with +0.2em tracking (`site.css:315-322`), which is louder than the lead subtitle (15.04 px) and the card headings (15–17 px). Section H2s are a fixed 33.6 px at every width, so at 390 px the H1 (40 px) and H2 barely differ. Card body copy is 13.8–14.4 px on desktop. Kicker sizes differ by page (19.2 px on Home, 12.5 px on AI-Era). Tracked-caps eyebrows of 36–43 characters wrap to two lines on phones. *Command:* `/impeccable typeset`

**[P3] F23. Mobile rhythm and chrome.** Section padding stays at 80 px top and bottom at 390 px, so Home is 15,513 px tall on a phone (18 screens) against 9,989 px on desktop. The sticky header uses 120 px (14 % of an 844 px screen). The floating chat button (56 px plus glow) sits over content, for example the hero signal track (temp capture `home-first-viewport-390.png`). *Command:* `/impeccable adapt`

**[P3] F24. Small tap targets.** Chat close is **10×21 px** (it passes WCAG 2.5.8 only through the spacing exception; `site.css:2245-2251`). The EN/AR buttons are 43×31 and 44×31. The WhatsApp/Email buttons are 106×31. The blog "Read article" and title links are 25–26 px tall. Everything else measured at 390 px is at least 44 px (47 interactive elements on Home, 10 under 44 px, 1 under 24 px). *Command:* `/impeccable adapt`

**[P3] F25. Minor semantics and labelling.**
- The language switcher is a `div` with `aria-label` (ignored on generic elements); its buttons lack `aria-pressed`, and the Arabic option is labelled "AR" rather than "العربية" (`header.njk:58-61`).
- There is no skip link.
- 17 links on Home open new tabs without warning, including the internal blog post from the Knowledge card (`knowledge.html:19`).
- "Explore (EN/AR)" leads to `/contact/` (`genai-based-systems.html:18`, 2.4.4).
- Emoji are used as icons on AI-Era (map, pedestrian, robot, traffic light, lock, chart) and read aloud (`pages/ai-era-quality-services.html:745-855`).
- CSS `::before` "?" and `::after` "+"/"−" markers are read with the text.
- Blog cards have three links to the same URL, with the image link named by its alt text.
- Dates are not `<time>`.
- After play, the YouTube facade removes its `href`, so focus falls to `<body>` (`site.js:896-899`).

*Command:* `/impeccable harden` (labels via `/impeccable clarify`)

**[P3] F26. Cards that look clickable but aren't.** `.card:hover` (`site.css:389-393`), `.aeqs-service-card:hover` (`ai-era…html:313-317`), `.team-card:hover` and `.t-track .t-card:hover` lift and gain shadow or a blue border, but they are not links. *Command:* `/impeccable polish`

**[P3] F27. Team avatar rendering.** The images have no `object-fit` and the sources are not square, so landscape photos leave blue bands inside the circle (e.g. Mervat Samsoum at 96×77). The blurred `::after` "ground shadow" (`site.css:1517-1529`) sits under the name and reads as an empty placeholder line. Photo backgrounds and framing are inconsistent (temp capture `team-all-avatars.png`). *Command:* `/impeccable polish`

**[P3] F28. Blog reading measure.** Lines run about 90–100 characters at 1440 px (760 px column at 16.8 px, `layout.css:522-526`; detector `line-length` ×5); aim for 60–75. The post's LCP is the 111 KB PNG cover, shared by both posts. *Command:* `/impeccable typeset`

**[P3] F29. Rendering hygiene.** `will-change: opacity, transform` stays on 76 elements after they are revealed (`site.css:2508, 2516`). `backdrop-filter: blur(12px)` applies to the non-sticky footer (`layout.css:1-7`); this is also the cause of the detector's false-positive footer contrast hit. The Arabic logo swap downloads a byte-identical image (`site.js:446-449`). Google Fonts requests 12 weights across 3 families (61 `@font-face` rules) and is render-blocking for 210–320 ms, while Home uses 7 faces from 2 files. *Command:* `/impeccable optimize`

### Detector results, verified in context

`impeccable detect --json` was run statically on `src/` and in URL mode on Home, AI-Era, Blog, a post, Contact and Vibe Test at 1280×800 and 390×844.

| Rule (count) | Where | Verdict | Note |
|---|---|---|---|
| `low-contrast` ×4 | Home verdict card | **False positive** | Measured mid-reveal (the card fades in on scroll). Revealed values are 5.2–18.7:1 |
| `low-contrast` ×3 per page | Footer on AI-Era, Blog, Contact | **False positive** | Pixel minimum from anti-aliasing over `backdrop-filter`; computed 10.65–17:1 |
| `low-contrast` ×2 | Vibe Test | **False positive** (static) | Outline words (transparent fill, visible stroke 6.6–17:1). The receipt rows were sampled mid-animation; the real issue is intermittent content (F20) |
| `tight-leading` | Promo h2 1.15, AI-Era h1 1.10, single glyphs 0.94 | **False positive** | Display headings and one-line pseudo-elements |
| `cramped-padding` (static) | AI-Era sections | **False positive** | Static analysis can't resolve the `6%` side padding (23 px at 390) |
| `side-tab` | `layout.css:542` blog blockquote | **False positive** | A conventional blockquote rule, and no blockquote exists |
| `side-tab` | AI-Era "Not for you if…" (`ai-era…html:419-430`) | True | 4 px amber left border on a 12 px-radius card |
| `layout-transition` | `site.css:237` | True in code, no runtime effect | Belongs to the dead legacy header (F15) |
| `body-text-viewport-edge` ×13 (390) | Home marquee | **False positive** as overflow | Off-screen marquee cards, clipped by `overflow:hidden`; supports F3 |
| `pulsing-dot` (error), `marquee` ×2, `dark-glow` ×6, `radial-spotlight-glow` ×3, `gradient-text` ×2, `hero-eyebrow-chip`, `codex-grid-background` | Home hero, promo, verdict card, chat | True | Decorative signatures of generated UIs; all stop under reduced motion except the glows |
| `kicker-above-heading` ×6 | AI-Era | True, and systemic | The same pattern is on 12 Home sections |
| `gpt-thin-border-wide-shadow` ×32 (advisory) | Card system (`--ww-shadow-soft` plus 1 px border) | True | Systemic |
| `nested-cards` ×2 | Home | True | `.canvas-card › .canvas-cell` and `.clients-shell › .client-card` |
| `all-caps-body` ×2 | Hero eyebrow (43 chars), promo eyebrow | Partly true | These are labels, but long enough to wrap to 2 lines on phones |
| `overused-font` | Inter 72–99 % of text, Geist display | True | A brand choice, not a defect; it gives no distinct type voice |
| `skipped-heading` ×2 | AI-Era | True | F12 |
| `line-length` ×5 | Blog post | True | F28 |
| `undersized-ui-text` ×11, `tiny-text`, `wide-tracking`, `blinking-cursor`, `buried-raster` | Vibe Test | True | F20 |
| `em-dash-overuse` (advisory) | Vibe Test | Not assessed | Copy, out of scope |

### Patterns and systemic issues

1. **Motion is the default, not the exception.** There are 8 infinite animations on Home and 24 animation instances on Vibe Test, JS autoplay on the team carousel, reveal-on-scroll on every section, and no pause controls anywhere (F3, F6, F20).
2. **Arabic is maintained as an overlay, not a first-class layout.** Physical `left`/`right` offsets, JS scroll maths written for LTR, letter-spacing applied to Arabic script, and untranslated fragments (F1, F2, F17).
3. **Hard-coded values outnumber tokens.** 281 colour literals across `site.css` and `layout.css` against 158 token uses, plus two inline `<style>` blocks with their own palettes; 42 font sizes; 9 off-token radii (F14).
4. **Images are published at source size.** Photos and logos go out as camera or export originals (up to 3503 px and 1.1 MB), without dimensions or lazy loading (F7).
5. **Leftovers from earlier iterations** (Sara page, legacy header, logo carousel, unused dictionary keys) sit alongside live code with comments that no longer match (F13, F15).
6. **The same section formula is repeated** (kicker → h2 → subtitle → cards with hover-lift) on 12 of 14 Home sections and all 8 AI-Era sections, which flattens hierarchy and makes non-interactive cards look clickable (F22, F26).

### Positive findings

- **Focus rings are never removed.** There is no `outline:none` anywhere, and every one of the 48 desktop tab stops on Home gets Chrome's default ring (`:focus-visible` matched every time). The ring is invisible only where the element itself is invisible, i.e. the closed chat panel (F4). Tab order follows reading order, and there are no keyboard traps: the tab walk exits to `<body>` after the footer.
- **Solid colour tokens.** The `--ww-*` palette includes AA-computed dark and tint variants with comments (`site.css:7-18`). Of 478 measured text elements on wewill.tech, only 2 fail contrast (F11). Body and muted text reach 5.6–6.0:1, hero text 9.8–19.8:1, the footer 10.7–17:1.
- **Reduced motion is partly honoured in CSS.** Hero loops, reveals and the marquee stop, and the marquee falls back to a scrollable row with clones hidden (`site.css:700-719, 1772-1786, 2543-2555`). The reveal system keeps content visible if JS fails (`html.js-anim` gating).
- **Landmarks and labels.** There are `header`, two labelled `nav`s, `main`, `footer` and a `form`. Every form control has a programmatic name. Status messages use `role="status"`. The mobile menu exposes `aria-expanded` and is `display:none` when closed. The FAQ uses native `<details>`/`<summary>`.
- **English responsive behaviour is sound.** There is no horizontal overflow at 320, 390, 768 or 1440 px on any audited page in English, and every audited Arabic page other than Home and Contact is also clean.
- **Main-thread health.** Home TBT is about 19 ms, and CLS is 0.0002 on desktop and 0.0024 on throttled mobile. Fonts are lean (two variable woff2 files, about 76 KB). CSS and JS are compressed and cached (7 days; fonts 1 year). The YouTube video uses a click-to-load facade.
- **Arabic typography choices.** Tajawal renders all Arabic text, headings switch from Geist to Tajawal with tracking reset (`site.css:100-105`), and the hero, CTAs, chat position and signal track are mirrored correctly.

### Recommended actions (priority order)

1. **[P0] `/impeccable adapt`:** Remove the honeypot's physical offset (F1). Make the team carousel direction-aware (F2). Use logical properties for RTL bullets and icons and `letter-spacing:0` for Arabic (F17). Fill the 901–1,090 px nav gap (F16). Add scroll-padding for sticky chrome (F9), a one-row mobile header, and lighter mobile section spacing (F23, F24).
2. **[P1] `/impeccable optimize`:** Resize and convert images, add `width`/`height` and lazy loading (F7). Show the hero text at first paint (F6). Delete dead CSS and JS (F15). Trim the Google Fonts request and remove the duplicate logo fetch (F29).
3. **[P1] `/impeccable harden`:** Chat widget state, focus and Escape (F4). Team `alt=""` (F5). Form labels, errors and focus (F10). One H1 per page, correct heading levels, un-hide the promo list (F12). One source for copy (F13). Content and trust fixes (F19). Title, `lang` and `main` for the rebuilt Vibe Test page (F8).
4. **[P1] `/impeccable animate`:** Pause and stop controls, JS autoplay off under reduced motion, smooth scroll limited to `no-preference` (F3). End-state rendering of the Vibe Test terminal and receipt (F20).
5. **[P2] `/impeccable extract`, then `/impeccable document`:** One token set for colour, type, radius, shadow and spacing, absorbing `--aeqs-*` and the promo palette (F14). Then write DESIGN.md.
6. **[P2] `/impeccable distill`:** Replace the double marquee with 2–3 complete testimonials (F18).
7. **[P2] `/impeccable clarify`:** Error messages, "Explore (EN/AR)", one phone number and one email, the Arabic language label (F10, F19, F25).
8. **[P3] `/impeccable typeset`:** A type scale with fluid H2, a quieter kicker, a larger body size, and a 60–75 character measure for articles (F22, F28).
9. **[P3] `/impeccable layout`:** One content edge for header, sections and blog (F21), and no hover-lift on non-interactive cards (F26).
10. **`/impeccable polish`:** The remaining contrast fixes (F11), avatar rendering (F27), and a final pass.

**Next steps for the main agent.** This project has no PRODUCT.md; Impeccable recommends running `/impeccable init` before any new-surface or redesign work, and `/impeccable document` once the tokens are consolidated. `/impeccable critique` is being run separately, so the hierarchy remarks in section 2 are measurements, not a critique. Re-run `/impeccable audit` after the P0 and P1 fixes to track the score.

---

## 2. Summary by topic

### Typography

**What the site does today**

- **Families.** Inter for body text (72–99 % of rendered text per page); Geist for display (H1, section H2s, the featured testimonial, signal labels); Tajawal for Arabic, rendering every Arabic glyph (verified via CDP platform fonts). Arabic headings switch to Tajawal (`site.css:100-105`). The Google Fonts request asks for Geist 500–800, Inter 400–800 and Tajawal 400/500/700 (`partials/head.njk:21`): 61 `@font-face` rules, of which Home uses 7 faces from 2 woff2 files (~76 KB), with `display=swap`.
- **Rendered roles at 1440 px (390 px where different):**

  | Role | Size, weight, line-height, letter-spacing |
  |---|---|
  | Home H1 | 69.6 px / 700 / lh 1.06 / −0.035em (40 px at 390) |
  | Section H2 | 33.6 px / 700 / 1.15, same at 390 |
  | Kicker | 19.2 px / 600, uppercase, +0.2em |
  | Lead subtitle | 15.04 px |
  | Card H3 | 15.0–17.0 px / 700 |
  | Card body | 14.4 px |
  | Process body | 13.8 px |
  | Micro labels | 11.5–12.8 px |
  | Hero subtitle | 17.3 px / lh 1.7 |
  | Blog title | 72 px / lh 0.98 / −0.04em (40 px at 390) |
  | Blog body | 16.8 px / lh 1.9 |
  | AI-Era H1 | 46.4 px / 800 |
  | AI-Era kicker | 12.5 px |

- **Vibe Test** uses no web fonts: "Helvetica Neue", "Segoe UI" or system-ui for text (Segoe UI Black for H2 on Windows), ui-monospace/Consolas for labels, and "SF Arabic" / "Geeza Pro" / "Noto Naskh Arabic" / system-ui for Arabic. Headlines are CSS uppercase with outline-only words.

**Issues**

- No type scale: 42 declared sizes (F14).
- The kicker outranks the lead and card headings (F22).
- The H2 doesn't scale on mobile (F22).
- Body copy is 13.8–14.4 px on desktop (F22).
- Tracked caps wrap on phones (detector `all-caps-body`).
- The blog measure is about 90–100 characters (F28).
- Vibe Test has 9–10.5 px labels (F20).
- Letter-spacing is applied to Arabic (F17).
- Two different type systems will meet when Vibe Test is merged.

### Colour

**What the site does today**

- **Tokens** (`site.css:1-47`): `--ww-ink` #0B1220, `--ww-indigo` #1F3DDB / dark #1530A6 / tint #E7ECFF, `--ww-emerald` #0FAE6E / dark #066B41, `--ww-orange` #FF6716 / dark #B23B00 / tint #FFE7DA, solid tint surfaces (#E7F7F1, #D9F2E8, #FFF0E8, #F2F3FD, #EDEFFC), `--ww-text-muted` #5B6473, `--ww-soft-gray` #F7F8FB, three shadow tokens and three radius tokens.
- **Off-token surfaces:** dark hero #060A14 with indigo and orange aurora; promo gradient #0f1f6b→#1b3bbf with #ffd76b accent; footer #0f172a; blog #f8fafc→#eef2ff; the AI-Era final CTA #1530A6→#0f1f6b.
- **Measured contrast:**
  - Muted text 5.6–6.0:1; slate #64748B 4.55–4.76:1 (blog meta and subtitles, GenAI).
  - Hero 9.8–19.8:1, signal label 4.57:1.
  - Orange primary button (#1A0E05 on the orange gradient) 5.1–6.5:1; blue buttons (white) 7.6–8.9:1.
  - Promo 6.2–11.9:1; footer 10.7–17:1; verdict card 5.2–18.7:1.
  - Placeholders 4.61:1.

**Issues**

- Three parallel palettes and 281 literals (F14).
- Video label 3.1–4.0:1 and AI-Era brand word 2.73:1 (F11).
- Input borders 1.34–1.87:1 (F10).
- Vibe Test blue panels at 3.8:1 and indices at 1.7:1 (F11).
- Coloured glows and gradient text are decorative signatures (detector).

### Spacing and layout

**What the site does today**

- Sections use `padding: 80px 6%` (hero 96/72, promo 64/64) inside a 1,120 px container. The header and footer shell uses 1,180 px; the blog has an extra 6 % inner padding.
- Card padding is 18–22 px, and grid gaps are an ad-hoc 10–28 px.
- Radii: 12 px token, plus 28–30 px on blog and GenAI cards and pills.
- Home height is 9,989 px at 1440 and 15,513 px at 390; AI-Era 5,679 / 10,223 px.

**Issues**

- Three content left edges: 160, 216 and 246 px (F21).
- Mobile keeps the desktop section padding (F23).
- Nested card panels (`.canvas-card › .canvas-cell`, `.clients-shell › .client-card`).
- The hairline-plus-wide-shadow card treatment on 32 cards (detector).

### Hierarchy

**What the site does today**

- Home is 14 sections with one H1. 12 of them repeat kicker → H2 → subtitle → card grid.
- There are 9 section-level CTAs plus the floating chat. The first two sections offer three different primary actions: "Book a Clarity Session", "Start a Vibe Test" and "Explore the offer".
- Vibe Test (the lead product in the brief) is section 2 and has no header nav entry.
- The strongest visual weight in the lower half is the featured testimonial (27.2 px quote) plus two marquee rows.
- AI-Era is 8 sections with the same kicker/H2 pattern and h4 under h2.
- Vibe Test has an all-caps product-first hierarchy with numbered section labels ("01 — THE PROBLEM").

**Issues**

- The kicker (19.2 px, uppercase) is louder than the lead, and card H3s (15 px) sit barely above the body (14.4 px), so hierarchy relies on weight alone (F22).
- The repeated formula flattens emphasis and hover-lift implies interactivity (F26).
- Testimonial repetition (F18).
- The brief's primary CTA ("Run a Guided Vibe Test") does not exist yet; this is a note for the restructure. Judging whether this hierarchy suits the audience belongs to the separate critique.

### Responsiveness

**What the site does today**

- Breakpoints: 960/900/640 px (`site.css`, `layout.css`), 980/680 (blog), 960/540 (AI-Era), 860 (promo).
- A Menu button appears at ≤900 px.
- The team carousel has buttons and autoplay; the marquee has one row at ≤640 px.
- An AI-Era sticky CTA appears at ≤960 px.

**Measured**

- English: no horizontal overflow at 320, 390, 768 or 1440 px on Home, AI-Era, Blog, post or Contact.
- Arabic: Home and Contact overflow by about 10,000 px (F1); every other audited page is clean.
- Nav labels are clipped at 901–1,090 px (F16).
- The mobile header is 120 px (Vibe Test 198 px).
- Touch targets: 47 interactive elements on Home at 390 px; 10 are under 44 px and 1 is under 24 px (F24).
- Carousels use buttons or CSS animation, not drag or swipe, so there is no custom gesture to break. Touch gestures were therefore not synthesised.

### Accessibility

**What the site does today**

- Landmarks as listed under positive findings.
- One H1 on Home, AI-Era, the Blog and the posts; none on 11 pages (F12).
- Home has 57 images: 13 without `alt` (F5), 2 broken (F19), 2 with mismatched alt text (F19).
- Form labels are programmatic but hidden (F10).
- Default focus rings are kept, and the tab order is logical.
- `html lang`/`dir` switch correctly (en/ltr ↔ ar/rtl) on wewill.tech. Vibe Test has none (F8).

**Issues**

- Level A: 1.1.1 (F5), 2.2.2 (F3), 4.1.2 and 2.4.3 on the chat (F4), 1.3.1 (F12), 3.3.1/3.3.2 (F10), and 2.4.2/3.1.1 on Vibe Test (F8).
- Level AA: 1.4.10 (F1), 2.4.7 (F4), 2.4.11 (F9), 1.4.11 (F10), 1.4.3 (F11), 1.4.12 (F16).
- No skip link (F25).

### Performance

**What the site does today** (cold loads, cache disabled)

| Page | Requests | Transfer | FCP | LCP (element) | CLS | Notes |
|---|---|---|---|---|---|---|
| Home, live, desktop | 35 | 3,661 KB (images 3,527) | 0.80 s | 1.21 s (H1) | 0.0002 | Load event 1.3 s |
| Home, live, 390 throttled | 34 | 3,659 KB | 1.3–1.9 s | 3.8–4.0 s (hero text) | 0.0024 | Load event 18.6 s; TBT about 19 ms |
| AI-Era (local) | 8 | 258 KB | 0.38 s | 0.38 s (H1) | 0.012 | |
| Blog (local) | 10 | 430 KB | 0.42 s | 0.42 s (H1) | 0.033 | |
| Post (local) | 9 | 322 KB | 0.31 s | 0.31 s (cover PNG) | 0.028 | |
| Vibe Test, live, desktop | 9 | 390 KB | 0.45 s ("Unpacking…" loader) | 1.81 s (hero text) | 0 | Document fetched twice |
| Vibe Test, live, 390 throttled | 8 | 388 KB | 0.48 s | 3.44 s | 0 | TBT about 493 ms |

- **Render-blocking:** Google Fonts CSS (210–320 ms), `site.css` (62 KB raw, compressed in transit), `layout.css`.
- **Caching:** uploads, CSS and JS 7 days; Google fonts 1 year. No favicon.

**Issues:** image weight (F7), LCP gated by animation (F6), dead code (F15), font request breadth and `will-change` left on (F29), Vibe Test runtime (F20).

---

## 3. Issues per section

### Home (`/`), keyed by the section ids in `docs/current-site/pages/home.md`

| Section | Issues (severity, finding) | Evidence |
|---|---|---|
| **Header** (`header.site-shell-header`, all pages) | P2 nav labels clipped at 901–1,090 px and under text-spacing overrides (F16) · P2 sticky 120 px mobile header hides focused elements when tabbing backwards (F9) · P3 two-row mobile header (F23) · P3 language switcher semantics and "AR" label; EN/AR targets 43×31 (F24, F25) · P2 "Menu" untranslated in Arabic (F17) · Positive: `aria-expanded`; closed menu is `display:none` | `layout.css:1-12, 99-110, 249-324`; `header.njk:58-62`; temp `header-960.png`; snapshot `screenshots/home/01-header--mobile.jpg` |
| **`#hero`** | P1 entrance animation delays LCP by about 2.5 s (F6) · P1 five infinite decorative loops, no pause (F3) · P2 markup copy ≠ rendered copy for eyebrow, H1 and subtitle (F13) · P3 signal label 4.57:1, marginal (F11) · P3 chat button overlaps the signal track on phones (F23) · Detector (true): gradient text, pulsing dot, glows, eyebrow chip, grid floor | `site.css:397-719, 2524-2540`; `scripts.html:7-14`; `hero.html:10-47`; LCP A/B table in F6 |
| **`#vibe-test`** | P2 video label 3.1:1 at 390 / 4.0:1 at 1440 over the thumbnail (F11) · P2 verdict card (10 strings) English-only in Arabic (F17) · P3 facade drops focus after play (F25) · Detector contrast hit on the card is a false positive (5.2–18.7:1) · Positive: click-to-load YouTube facade; AA-tuned receipt card | `vibe-test.html:17-44`; `site.css:813-992`; `site.js:850-902`; temp `video-facade-390.png` |
| **`#ai-era-quality-services-promo`** | P2 six-item service list is `aria-hidden` (F12) · P2 inline `<style>` with 18 hard-coded colours (F14) · P2 Arabic eyebrow tracked +0.22em (F17) · Detector: radial spotlight (true), `tight-leading` on h2 (false positive) · Contrast OK (6.2–11.9:1) | `ai-era-quality-services-promo.html:2-109, 129`; temp `ar-home-1440-03-ai-era-quality-services-promo.png` |
| **`#genai-based-systems`** | P3 "Explore (EN/AR)" goes to `/contact/` (F25) · P2 off-token slate colours and 28 px radius (F14) · P3 hover-lift on non-interactive cards (F26) · Slate text 4.76:1 passes narrowly | `genai-based-systems.html:18`; `site.css:1184-1280` |
| **`#why-we-will`** | P3 hover-lift on non-interactive cards (F26) · P3 card body 14.4 px vs H3 17 px (F22) · Contrast 5.6:1 OK | `why-we-will.html`; `site.css:380-393, 721-745` |
| **`#services`** | P3 hover-lift (F26) · P3 card H3 15 px vs body 14.4 px (F22) | `services.html`; `site.css:1282-1296` |
| **`#quality-canvas`** | P2 Arabic bullets detached from their text (F17) · P2 inline `style=""` for snapshot title and footer (F14) · Detector nested cards (true) · P3 both CTAs open external sites in new tabs (F25) | `site.css:1311-1372`; `quality-canvas.html:13-49`; temp `ar-home-1440-07-quality-canvas.png` |
| **`#impact`** | P2 hard-coded arrow colours #e11d48 / #15803D (F14) · Metrics have no source or context (content note for the critique) | `impact.html:11-44`; `site.css:1407-1415` |
| **`#how-we-work`** | P3 process body 13.8 px (F22) · No other defects measured | `how-we-work.html`; `site.css:1428-1473` |
| **`#team`** | P1 13 photos without `alt` (F5) · P1 carousel frozen in Arabic: 2 of 13 people visible at 390 (F2) · P1 3 s autoplay ignores reduced motion, hover-only pause (F3) · P1 13 eager photos, 3.09 MB, up to 1.1 MB each, shown at 96 px (F7) · P3 blue bands in circles; ground shadow looks like a placeholder line (F27) · Buttons 44×44 OK | `team.html:13-67`; `site.js:758-799`; `site.css:1481-1594`; temp `team-all-avatars.png`, `ar-home-390-10-team.png` |
| **`#success-stories`** | P1 marquee moves with no keyboard or touch pause (F3) · P2 quotes clamped at 6 lines; 15 screen-reader readings of 7 quotes (F18) · P2 kicker, title, subtitle and CTA overwritten by the dictionary (F13) · P1 One Studio logo is a 3503² PNG (F7) · Positive: logos lazy-loaded; clones `aria-hidden` | `success-stories.html:4-246`; `site.css:1596-1804` |
| **`#clients`** | P2 two broken logos (Oyoun Media, In2World) and two wrong alt texts (F19) · P1 logos eager, up to 58× oversize (F7) · P3 mix of linked and unlinked cards (5 of 12 link out); 50 % grayscale filter lowers recognition · Detector nested cards (true) | `clients.html:20-66`; snapshot `screenshots/home/13-section-clients--desktop.jpg` |
| **`#knowledge`** | P2 "Business-Care Quality" card returns 404 (F19) · P3 internal blog link opens a new tab (F25) · P2 ↗ not mirrored in Arabic (F17) | `knowledge.html:13-36`; live check 404 |
| **`#contact`** | **P0 source of the Arabic overflow (F1)** · P2 placeholder-only visible labels, no required markers, generic errors, focus lost after submit, borders 1.69:1 (F10) · P2 focus hidden under header at 390 (F9) | `contact.html:11-113`; `site.css:2077-2167`; snapshot `screenshots/home/ar/first-viewport--mobile--as-rendered.jpg` |
| **Chat widget** (`div.chat-widget`, Home and `/contact/`) | P1 four invisible tab stops, no `aria-expanded`, no Escape, focus stranded (F4) · P3 close button 10×21 px (F24) · P2 WhatsApp number and email differ from the footer and Vibe Test (F19) · P3 emoji in button names (F4) · P3 covers content on phones (F23) | `chat-widget.html:2-20`; `site.css:2174-2304`; `site.js:806-844` |
| **Footer** (`footer.site-shell-footer`, all pages) | P2 "© 2023", WhatsApp link with a space in the number, no favicon (F19) · P3 `backdrop-filter` on a non-sticky footer (F29) · P3 social links open new tabs without warning · Detector contrast hit is a false positive (10.65–17:1) · No footer navigation or legal links (note for the brief's footer spec) | `footer.html:18, 49`; `layout.css:1-7, 22-28` |

### Other wewill.tech pages

| Page / section | Issues (severity, finding) | Evidence |
|---|---|---|
| **AI-Era: hero** | P2/P3 "WE WILL" orange 2.73:1 at 46 px (brand exception may apply) (F11) · P2 Arabic H1 letter-spacing −0.03em (F17) · CLS 0.012 from font swap | `ai-era…html:64-72, 607-664` |
| **AI-Era: The Shift** | P3 CSS "?" markers read aloud (F25) | `ai-era…html:248-288, 667-721` |
| **AI-Era: What we deliver** (`#aeqs-what-we-deliver`) | P3 emoji icons read aloud (F25) · P3 hover-lift on non-interactive cards (F26) · Six cards as `div`s rather than a list | `ai-era…html:296-348, 724-877` |
| **AI-Era: How we work together** | P2 h2 → h4 (F12) · P3 5-column grid with 13.6 px text at 1440 (F22) | `ai-era…html:350-389, 880-951` |
| **AI-Era: Who we serve** | P2 h2 → h4 for audience cards and "Not for you if…" (F12) · Detector side-tab (true) | `ai-era…html:391-449, 954-1050` |
| **AI-Era: Proof** | P3 the "Proof" section contains 8 generic category chips and no evidence ("Case studies available upon request") — content note for the critique | `ai-era…html:1053-1102` |
| **AI-Era: FAQ** | P3 "+"/"−" pseudo-content read aloud (F25) · Positive: native `<details>`; keyboard operable | `ai-era…html:478-523, 1105-1199` |
| **AI-Era: Final CTA** | Contrast OK (7–9:1) | `ai-era…html:525-549, 1202-1221` |
| **AI-Era: Sticky mobile CTA** | P2 covers focused elements (last FAQ 99 %, footer link 76 %) (F9) | `ai-era…html:551-575, 1224-1233` |
| **AI-Era: page level** | P2 separate `--aeqs-*` token set and 48 literals in a 600-line inline `<style>` (F14) · Arabic clean for overflow at all widths | `ai-era…html:2-602` |
| **Blog index** (`/blog/`) | P3 three links per card to one URL; image link named by its alt; dates not `<time>` (F25) · P3 3-column grid holds 2 posts, leaving an empty column · P2 identical cover images described as "blue" and "purple" (F19) · P2 dates stay English in Arabic (F17) · Search and sort need the live server (prototype limit) · CLS 0.033 | `pages/blog.html:2-77`; `layout.css:326-497` |
| **Blog posts** (both) | P3 about 90–100 characters per line (F28) · P2 "Read the original WE WILL article" returns 404 (F19) · P2 Arabic title tracked −2.88 px (F17) · P3 LCP is the shared 111 KB PNG cover | `pages/blog--*.html`; `layout.css:498-561` |
| **`/contact/`** | P0 Arabic overflow (F1) · P2 no H1 (F12) · P2 form issues (F10) · Form and chat widget duplicate the same channel | `contact/index.njk`; overflow table in F1 |
| **The other 10 one-section pages** | P2 no H1 (F12) · They inherit their Home section's issues: `/team/` F2, F3, F5, F7; `/success-stories/` F3, F13, F18; `/clients/` F19; `/knowledge/` F19; `/quality-canvas/` F17 | semantics run: H1 count 0 on each |

### Vibe Test page (https://vibe-test.oneapp.dev/, keyed by the regions in `docs/current-site/pages/vibe-test-external.md`)

| Section | Issues (severity, finding) | Evidence |
|---|---|---|
| **Header** | P2 198 px tall at 390 px (three rows); "Book a Demo" twice in the first viewport (F20) · P3 "BY WE WILL TECH" 9 px · P3 nav links 31 px tall targets · No skip link · Positive: the language switch is labelled in Arabic ("العربية") with an `aria-label` | temp `vibe-first-viewport-390-no-preference.png`; snapshot `screenshots/vibe-test-external/01-header--mobile.jpg` |
| **Hero** (section 1) | P2 terminal rows cycle forever and are empty under reduced motion (F20) · P2 outline-only headline word "FIXES." with a 2 px stroke (legible at 118 px, fragile smaller) · P3 10–11 px mono labels · Detector `blinking-cursor` (true) | `raw/html/vibe-test-external.html`; motion run |
| **Marquee strip** (other) | P2 infinite 26 s marquee, `aria-hidden`, no pause (F20) | motion run |
| **`#problem`** | P3 outline words on light background (stroke passes) · Mono index 4.53:1 OK | contrast run |
| **`#how`** | P2 loop diagram animates forever (`spinOrbit`, `stageOn`) (F20) · P3 "CLOSED LOOP" 9.5 px | motion run |
| **`#services`** | P2 indices "/01"–"/04" 1.72:1 and "/05" 2.53:1; GenAI card body 3.79:1 (F11) | contrast run |
| **`#receipt`** | P2 receipt rows, stamp and bar animate in and out forever; the "VERIFIED ✓" stamp is often at opacity 0 (F20) · P3 10–10.5 px mono | motion run; detector `buried-raster` |
| **`#who`** | No defects measured beyond the page-level ones | — |
| **Final CTA** (`#book`) | P2 subtitle 3.87:1 on #2E6BE6 (F11) · The CTA is a `mailto:` link with no form (conversion note) | contrast run |
| **Footer** | Decorative outlined "VIBE-TEST." (`aria-hidden`) · "© 2026" vs wewill.tech "© 2023" (F19) | — |
| **Page level** | P1 no title, `lang`, `dir` on `<html>`, `<main>` or meta description (F8) · P2 TBT about 493 ms; document fetched twice; React from unpkg; nothing renders without JS (F20) · Type system and colour (#2E6BE6, system fonts) differ from wewill.tech | perf and long-task runs |

---

## 4. Arabic / RTL findings

1. **Blocking overflow on Home and `/contact/` (F1, P0).** The honeypot's `left:-10000px` is scrollable overflow in RTL. Documents are 10,367 px (390), 10,704 px (768) and 11,040 px (1440) wide. On phones and tablets Chrome widens the layout viewport to 1,560 px or 3,072 px, so the desktop layout renders inside the phone and the first screen is blank (scrolled to x = −1,169 when Arabic is the stored preference, x = −9,976 right after pressing AR). This reproduces the snapshot's problem #7 exactly on the prototype. No other audited page overflows in Arabic (AI-Era, Blog, the post and Vibe Test are clean at 390, 768 and 1440).
2. **Team carousel frozen (F2, P1).** The scroll maths assume LTR `scrollLeft`. In Arabic, Next, Previous and autoplay never move it: 5 of 13 people are visible at 1440 and 2 of 13 at 390.
3. **Physical-direction CSS left behind (F17).**
   - Quality Canvas bullets (`site.css:1318-1330`) sit on the far left of right-aligned text.
   - `.contact-inner form { text-align:left }` and `.contact-status { text-align:left }` stay left-aligned. The inputs resolve to `start`, so typing is fine, but status messages are left-aligned.
   - `.team-nav-prev/next` use physical `left`/`right`.
   - `.sara-verdict { text-align:left }` keeps the receipt card left-aligned. It is English in Arabic mode anyway.
   - Correctly handled: the promo CTA arrow flips to ←, the chat widget moves to the left, the hero signal gradient is mirrored, and the marquee is forced LTR while its cards flip back to RTL.
4. **Untranslated fragments in Arabic mode (F17).** On Home, 10 verdict-card strings; the mobile "Menu" button (no `data-i18n`; header.njk:62); `<title>` and `og:locale` stay English; blog dates. On Vibe Test, 27 visible Latin strings, mostly mono labels ("LIVE QA RUN", "01 — THE PROBLEM", terminal lines). Team member names stay in Latin script (acceptable; transliteration is a content decision).
5. **Letter-spacing on Arabic script (F17).**
   - Home: 23 elements; tracked +2.6–3.8 px on eyebrows and kickers ("جودة البرمجيات • رعاية الأعمال", "كيف يستحق الإصدار قرار GO"); promo H2 −0.53 to −0.64 px.
   - AI-Era: 15 elements (H1 −1.39 px, kickers +2.5 px).
   - Blog: title −2.88 px.
   - Chrome shows the letters joined (temp `ar-home-1440-01-hero.png`). WebKit/Safari was not tested and is known to disconnect Arabic letters under non-zero letter-spacing; given the Saudi iPhone share, this needs a device check.
6. **Fonts.** On wewill.tech, Tajawal renders all Arabic, and display headings switch from Geist to Tajawal with tracking reset (`site.css:100-105`). Body stacks start with Inter, which has no Arabic glyphs, so the browser falls back to Tajawal; fine in practice. Vibe Test uses "SF Arabic" / "Geeza Pro" / "Noto Naskh Arabic" / system-ui, which is Segoe UI on Windows, so its Arabic type differs from wewill.tech's.
7. **Bidi and line breaking.** "WE WILL." inside Arabic headings breaks across lines and the full stop jumps to the start of the next line (`#team` title at 390: "الفريق خلف جودة WE" / ".WILL"). Keep the brand together with `&nbsp;` and isolate it with `<bdi>`.
8. **Language attributes.** On wewill.tech, `html lang`/`dir` switch correctly to `ar`/`rtl`, both on load (`partials/body-start.html`, from `localStorage`) and on toggle (`site.js:564-568`). Hidden-language spans on AI-Era and the promo have no `lang`, but they are `display:none` in the other language, so nothing is mispronounced. Vibe Test sets `dir` on an inner container only and never sets `lang` (F8).
9. **The blog is not English-only.** The snapshot's sitemap says "the blog is English only", but the blog index and both posts do switch to Arabic through `data-blog-*` attributes (`site.js:634-667`): headings, excerpts and full article bodies. Only the dates stay English.
10. **Arabic touch and keyboard.** Same targets as English. The Arabic overflow also displaces the page on phones, so every other RTL check on Home and Contact was done with the honeypot neutralised for inspection only (see section 5).

---

## 5. Method and limits

### What was run

- **Impeccable 4.4.0.**
  - `impeccable context --target src/index.njk` returned `NO_PRODUCT_MD`, `EXISTING_VISUAL_SYSTEM`, `SCOPED_EXISTING_ALLOWED` and `MANUAL_DETECTOR_REQUIRED`, so the incumbent implementation is the authority.
  - Playbook `reference/audit.md` followed for the five dimensions and the report shape.
  - Detector: `impeccable detect --json src/` (static), and URL mode on Home, AI-Era, Blog, the Triad post, Contact and Vibe Test at the default 1280×800 and at `--viewport 390x844`. Every finding was checked in context (table in section 1).
- **Browser.** Google Chrome 153.0.8010.54 headless (`channel:'chrome'`) via playwright-core 1.63.0, installed in the session scratchpad and not in the repo. Node 24.20.0.
- **Server.** The existing Eleventy dev server at http://localhost:8080 (verified to serve this `src/`). Live https://wewill.tech and https://vibe-test.oneapp.dev were used for network and performance numbers and the 404 checks.
- **Viewports.** 390×844 at DPR 2 with mobile emulation (`isMobile`, touch, iPhone UA); 768×1024 at DPR 2 (`isMobile`); 1440×900 at DPR 1; plus 320×640 (reflow) and 901/960/1,024/1,100/1,280 (nav) spot checks.
- **Arabic.** Tested both by clicking the site's `[data-lang="ar"]` toggle (the Vibe Test "Switch language" button) and as a stored preference (`localStorage.ww_language = 'ar'` before load).
- **Overflow.** Document `scrollWidth` vs `innerWidth`, `visualViewport` and `scrollX` at first paint and after a scroll-through; offending elements were found by walking the DOM for boxes outside the viewport without a clipping ancestor.
- **Contrast.**
  - Solid backgrounds: computed text and background colours with alpha compositing through ancestors and opacity chains.
  - Gradients and images: pixel sampling, with the text made transparent, the element box captured, and the text colour compared against every sampled background pixel (median, P10 and minimum reported).
  - Run in a reduced-motion context so reveal fades don't distort the values; targeted re-checks for the hero (animations running) and the video label.
  - WCAG 2.2 thresholds: 4.5:1, or 3:1 for text ≥24 px or ≥18.66 px bold; 3:1 for non-text.
- **Keyboard.** Full Tab and Shift+Tab walks on Home (1440 and 390) and AI-Era (390), recording focused element, opacity, pointer events, `:focus-visible`, outline, and overlap with the sticky header, chat button and sticky CTA. Settle times of 120 ms and 900 ms (smooth scrolling); chat, mobile menu and carousel interactions scripted.
- **Semantics.** DOM inspection plus Chrome's full accessibility tree via CDP (`Accessibility.getFullAXTree`) on all 16 wewill.tech routes and Vibe Test: headings, landmarks, names, images, fields.
- **Touch.** Bounding boxes of every visible interactive element at 390 px (menu and chat opened), measured against 44 px (Impeccable) and 24 px (WCAG 2.5.8).
- **Motion.** `document.getAnimations()` with and without `reducedMotion: 'reduce'`; JS autoplay sampled over 6.7 s; `scroll-behavior` and `will-change` counts.
- **Performance.**
  - Cold loads with the cache disabled; CDP network events for transfer bytes by type.
  - `PerformanceObserver` for LCP, CLS (session windows) and long tasks (TBT ≈ Σ(duration − 50 ms) after FCP); `renderBlockingStatus`; `document.fonts`; natural vs rendered image sizes.
  - Throttled profile: 150 ms RTT, 1.6 Mbps down, 750 kbps up, 4× CPU (close to Lighthouse's mobile preset). Three runs per variant for the LCP A/B.
  - CSS coverage via Playwright (Chromium) unioned across 16 pages × 2 widths × EN/AR.
  - Copy drift: server HTML vs rendered DOM for every `[data-i18n]`.
- **RTL visual review.** Section screenshots of Arabic Home and Vibe Test at 1440 and 390 px, taken with `.contact-hp{display:none}` injected only for that pass, so the rest of the RTL rendering could be seen past the F1 overflow. The overflow itself was measured without any injection.

### Verification of the snapshot's "Problems found during capture"

| # | Snapshot problem | Status in this audit |
|---|---|---|
| 1 | Business-Care Quality card returns 404 | Confirmed live (404) — F19 |
| 2 | Blog "original article" links return 404 | Confirmed live (both 404) — F19 |
| 3 | Oyoun Media and In2World logos fail to load | Confirmed (404; the static build is also blocked by ORB) — F19 |
| 4 | Logo alt mismatches (One Studio → "iStoria logo", SellEnvo → "Inspire") | Confirmed in source (`clients.html:21, 45`) — F19 |
| 5 | 13 team photos without `alt` | Confirmed (DOM and accessibility tree) — F5 |
| 6 | Testimonials repeat | Confirmed and quantified (15 screen-reader readings of 7 quotes) — F18 |
| 7 | Arabic Home and Contact about 10,000 px wide; mobile auto-scrolls and first screen blank | Confirmed and extended: the layout viewport is forced to 1,560 / 3,072 px on phones and tablets — F1 |
| 8 | Footer "© 2023 WE WILL" | Confirmed (`footer.html:18`) — F19 |
| 9 | WhatsApp phone parameter contains a space | Confirmed (`footer.html:49`); the chat widget uses a different number. WhatsApp's handling of the space was not tested — F19 |
| 10 | Vibe Test has no title, meta description or `lang` | Confirmed; also no `<main>` and no `dir` on `<html>` — F8 |
| 11 | English pages have no horizontal overflow | Confirmed at 320, 390, 768 and 1440 px |

### What could not be checked, and caveats

- **No real screen reader** (NVDA, JAWS or VoiceOver) session. Names and roles come from Chrome's accessibility tree; announcements such as emoji names and file names are inferred from standard screen-reader behaviour.
- **Chrome only.** Safari/WebKit and Firefox were not tested. In particular, Arabic letter-spacing joining in WebKit and the iOS Safari handling of the Arabic overflow are inferred from Chrome's mobile emulation. No physical devices.
- **Touch gestures were not synthesised.** The site has no custom drag or swipe surfaces (carousels are button- or animation-driven). Layout at mobile widths is proven by emulation only.
- **The live contact form was not submitted** (to avoid creating a lead). Error behaviour was observed on the static build, where `/contact-submit.php` does not exist, plus code review of the live messages. Blog search and sort need the live server.
- **Lighthouse was not run.** Equivalent throttling was applied manually. Timings vary by about 10–20 % between runs; localhost timings are faster than production (the dev server also injects a reload script and does not compress), so transfer sizes and production timings come from the live site.
- **CSS coverage limits.** "Unused" counts hover, error and reduced-motion states that were never triggered; the 20.6 % figure is the strictly dead subset (selectors absent from all pages).
- **Critique out of scope.** Hierarchy and content remarks are measurements, not a design critique (`/impeccable critique` runs separately). `em-dash-overuse` and other copy-level advisories were not assessed.
- **Snapshot artefact.** `docs/current-site/screenshots/home/first-viewport--mobile.jpg` shows mid-page content (the Vibe Test cards and promo band), apparently captured during a smooth scroll back to the top. A clean capture at `scrollY = 0` shows the hero correctly (temp `home-first-viewport-390.png`).
- **Temporary evidence files.** Scripts, JSON results and screenshots are in the session scratchpad, not the repo: `C:\Users\mayar\AppData\Local\Temp\claude\c--Users-mayar-OneDrive-Desktop-we-will-tech\6203ed7e-c04b-47bc-9766-8e03b5faf941\scratchpad\audit\` (detector output in `detect-src.json`, `detect-urls-1280.json` and `detect-urls-390.json`; measurement results in `out/`: `overflow.json`, `semantics.json`, `contrast-1440-en.json`, `contrast-extra.json`, `keyboard.json`, `keyboard2.json`, `touch.json`, `motion.json`, `perf.json`, `rtl.json`, `fonts.json`, `integrity.json`, `layout.json`, `spacing-form.json`, plus the PNG captures named above). They will not persist beyond the session.
