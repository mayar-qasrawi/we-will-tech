# Tasks

Depends on: `update-global-nav-footer-cta` (CTA destinations, `.content-placeholder`).

## 1. Page structure and metadata

- [ ] 1.1 **Files: `src/index.njk`.** Set the includes to hero, clients, vibe-test, use-cases, expert-layer, success-stories, knowledge, final-cta. Update title, description, OG and Twitter text and the OG image query. Verify: built `/` has the 8 section IDs in order, none of the 8 removed IDs, and title ≤ 60 / description ≤ 155.

## 2. Block 3 — Vibe Test introduction (EDIT)

- [ ] 2.1 **Files: `src/_includes/sections/home/vibe-test.html`.** New kicker and subtitle (DRAFT-marked), a single "Explore Vibe Test" → `/vibe-test/` button, and a "Sample" label on the receipt card. Verify: no `vibe-test.oneapp.dev` link and no "Talk to WE WILL" in the section; the rest of the markup is unchanged (`git diff`).

## 3. Block 4 — Use cases (NEW)

- [ ] 3.1 **Files: `src/_includes/sections/home/use-cases.html` (new).** H2, lead and five linked cards with SA text, plus "Explore Solutions". Verify: card text matches specs/home-use-cases exactly and the links go to the five `/solutions/#…` anchors.

## 4. Block 5 — Expert layer (EDIT)

- [ ] 4.1 **Files: `src/_includes/sections/home/expert-layer.html` (new).** The three-part structure with SA sentences, the reused BCQ card text, and "Discuss a Quality Requirement". Verify: the text matches the spec and the section contains no "fixed-fee", "monthly", "paid" or price.

## 5. Block 6 — Selected proof (EDIT)

- [ ] 5.1 **Files: `src/_includes/sections/home/success-stories.html`.** Replace the marquee with three static figures (iStoria, Darent, SellEnvo, verbatim) and remove the CTA row. Verify: each quote appears once in built `/` and there is no `.t-marquee` in the section.

## 6. Block 7 — Selected resources (REUSE)

- [ ] 6.1 **Files: `src/_includes/sections/home/knowledge.html`.** Keep the TQF and Founder cards, add the "When software quality becomes a business decision" card (copy from `pages/blog.html`), drop the BCQ and Quality Canvas cards, add "View Resources". Verify: 3 cards, internal links in the same tab, the interview opens in a new tab with `noopener`.

## 7. Block 8 — Final conversion (EDIT)

- [ ] 7.1 **Files: `src/_includes/sections/home/final-cta.html` (new).** `#get-started` with the reused kicker and title, the DRAFT supporting line and two buttons. Verify: both hrefs match the CTA map and no form elements appear.

## 8. Shared styles and strings

- [ ] 8.1 **Files: `src/assets/site.css`.** Add `.use-case-grid`, `.expert-layer-grid`, `.t-grid` and `.final-cta-actions` using `--ww-*` tokens, with 1440 px and 390 px rules. Verify: no horizontal overflow at 390 px on `/` in English; focus rings visible on all new links.
- [ ] 8.2 **Files: `src/assets/site.js` (`translations` keys for blocks 3–8 only).** Add or update the `en` keys and set `ar` to `""` for edited and new strings. Verify: in EN, the JS-rendered text equals the HTML text; in AR, no element of blocks 3–8 is blank.
- [ ] 8.3 **Files: `docs/strategy-implementation/translation-sheet.md` (new or append).** List every new or edited key with its English text for Arabic translation. Verify: the key count matches task 8.2.

## 9. Integration check

- [ ] 9.1 **Files: none.** Run `npm run build`. Check `/` at 1440 px and 390 px in EN and AR: block order, CTA labels and targets against the CTA map, one H1, no prices, DRAFT markers present on every new or edited string, hero and social-proof strip unchanged (`git diff` shows no change to `hero.html` or `clients.html`). Stop for review.
