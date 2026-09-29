# Tasks

Depends on: `update-global-nav-footer-cta` (nav, CTA map, `.content-placeholder`) and `update-home-page` (static `.t-card` figure markup).

## 1. Route

- [ ] 1.1 **Files: `src/solutions/index.njk` (new).** Front matter (title, description, canonical, OG/Twitter, `activeNav: solutions`, the use-case data) and includes: intro, 5 × use-case, methodology, how-we-work. Verify: the build writes `_site/solutions/index.html` with the eight IDs in order and one H1.

## 2. Introduction (NEW)

- [ ] 2.1 **Files: `src/_includes/sections/solutions/intro.html` (new).** DRAFT H1, SA lead, five jump links. Verify: each link targets an existing ID and no service names appear in the block.

## 3. Use cases + proof (NEW / EDIT)

- [ ] 3.1 **Files: `src/_includes/sections/solutions/use-case.njk` (new).** H2, the three labelled parts, CTAs and a proof slot (testimonial or placeholder), with DRAFT comments. Verify: rendered text for all five blocks matches the spec table; UC3 has two CTAs in the specified order; UC2 and UC3 show the placeholder.

## 4. Methodology (EDIT)

- [ ] 4.1 **Files: `src/_includes/sections/solutions/methodology.html` (new).** Reused heading and lead, the eight capabilities with verbatim copy and "Supports:" tags. Verify: a diff of each description against its source shows no change; no Quality Canvas card; the AI Quality card has no description.

## 5. Styles and strings

- [ ] 5.1 **Files: `src/assets/site.css` (Solutions rules only).** Use-case grid, jump links, capability grid, 1440/390 px. Verify: no overflow at 390 px in English; anchors clear the sticky header.
- [ ] 5.2 **Files: `src/assets/site.js` (`sol.*` keys only).** EN keys; AR for reused AI-Era copy, `""` for NEW. Verify: in AR, reused capability text shows Arabic and no element is blank.
- [ ] 5.3 **Files: `docs/strategy-implementation/translation-sheet.md` (append).** List the `sol.*` keys without Arabic. Verify: the count matches task 5.2.

## 6. Integration check

- [ ] 6.1 **Files: none.** Build; check `/solutions/` at 1440 px and 390 px in EN and AR: block order, all CTA hrefs against the CTA map, no pricing words, no AI Feature Evaluation differentiation wording, Home use-case cards now resolve to these anchors. Stop for review.
