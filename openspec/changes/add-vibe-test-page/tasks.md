# Tasks

Depends on: `update-global-nav-footer-cta` (nav item, CTA map, `.content-placeholder`). Independent of `update-home-page`.

## 1. Route and assets

- [ ] 1.1 **Files: `src/uploads/vibe-test-logo.png` (new).** Export the manifest PNG from `docs/current-site/raw/vibe-test-bundle.html` unchanged. Verify: the file opens and its size matches the decoded manifest entry.
- [ ] 1.2 **Files: `src/vibe-test/index.njk` (new).** Front matter (title, description, canonical, OG/Twitter, `activeNav: vibe-test`, `extraCss: /assets/vibe-test.css`) and the 9 includes in order. Verify: the build writes `_site/vibe-test/index.html` with title ≤ 60 and description ≤ 155.

## 2. REUSE blocks (1–5)

- [ ] 2.1 **Files: `sections/vibe-test/hero.html`.** Lockup + H1, eyebrow, subtitle, two buttons, terminal and marquee. Verify: text equals the VT source, apart from the lockup and "Run a Guided Vibe Test"; no "Book a Demo".
- [ ] 2.2 **Files: `sections/vibe-test/problem.html`.** Verify: EN and AR text equals the VT `#problem` section.
- [ ] 2.3 **Files: `sections/vibe-test/what-it-does.html`.** DRAFT H2 + the three Home capability cards. Verify: card copy equals `sections/home/vibe-test.html`.
- [ ] 2.4 **Files: `sections/vibe-test/how-it-works.html`.** Verify: four steps and the loop visual match VT `#how`, EN and AR.
- [ ] 2.5 **Files: `sections/vibe-test/capabilities.html`, `sections/vibe-test/receipt.html`.** Capabilities (card 5 reworded, DRAFT), receipt with "Sample receipt", video facade, screenshot placeholder. Verify: "Grades AI features against quality contracts" is absent from the build output; the placeholder is visible.

## 3. EDIT and NEW blocks (6–8)

- [ ] 3.1 **Files: `sections/vibe-test/who.html`.** Three approved-segment cards (DRAFT). Verify: the old H2 and audiences are absent.
- [ ] 3.2 **Files: `sections/vibe-test/we-will.html`.** "Product plus judgment." block with the relationship and "Discuss a Quality Requirement". Verify: the href is `/contact/?request=bcq-requirement` and there is no price.
- [ ] 3.3 **Files: `sections/vibe-test/conversion.html`.** "Ship with confidence." + Guided Proof of Value line + primary CTA. Verify: no `mailto:`, "demo", "price" or "paid" in the section.

## 4. Styles and strings

- [ ] 4.1 **Files: `src/assets/vibe-test.css` (new).** Page styles scoped to `.page-vibe-test`, 1440/390 px rules, reduced-motion rules. Verify: no horizontal overflow at 390 px in English; a visual comparison with `docs/current-site/screenshots/vibe-test-external/full--desktop.jpg` shows the same section order and product-first hero.
- [ ] 4.2 **Files: `src/assets/site.js` (`vt.*` translation keys only).** EN keys for all copy; AR from the VT source for REUSE strings, `""` for EDIT/NEW. Verify: in AR, `dir="rtl"` and no element under `main` is empty.
- [ ] 4.3 **Files: `docs/strategy-implementation/translation-sheet.md` (append).** List the `vt.*` keys without Arabic. Verify: the count matches the empty `ar` values.
- [ ] 4.4 **Files: `docs/strategy-implementation/redirects.md` (new).** The vibe-test.oneapp.dev redirect list from the proposal. Verify: every VT anchor listed exists on `/vibe-test/`.

## 5. Integration check

- [ ] 5.1 **Files: none.** Build; check `/vibe-test/` at 1440 px and 390 px in EN and AR: one H1, block order, every CTA against the CTA map, old anchors (`#services`, `#receipt`, `#who`, `#book`) scroll correctly, keyboard focus visible, reduced motion shows the terminal text. Stop for review.
