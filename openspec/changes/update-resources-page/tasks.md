# Tasks

Depends on: `update-global-nav-footer-cta` (nav and footer "Methodology resources" link). The BCQ card target resolves after `add-solutions-page`.

## 1. Route

- [ ] 1.1 **Files: `src/resources/index.njk` (new).** Front matter (title, description, canonical, OG/Twitter, `activeNav: resources`) and includes: insights, methodology, `sections/home/quality-canvas.html`. Verify: the build writes `_site/resources/index.html` with three IDs in order and one H1.

## 2. Blog / insights (REUSE)

- [ ] 2.1 **Files: `src/_includes/sections/resources/insights.html` (new).** Reused H1, three cards using the blog card markup (`.blog-card`) and the knowledge card attributes for EN/AR, "Read" links with accessible names, and a link to `/blog/`. Verify: card copy equals `pages/blog.html` and `sections/home/knowledge.html`; the interview has `target="_blank" rel="noopener"`.

## 3. Background methodology (EDIT)

- [ ] 3.1 **Files: `src/_includes/sections/resources/methodology.html` (new).** DRAFT H2 + SA lead, the Business-Care Quality card (relinked) and the Quality Canvas card. Verify: no `/business-care-quality` href in the build output; the card copy is unchanged.

## 4. Styles and strings

- [ ] 4.1 **Files: `src/assets/site.css` (Resources rules only).** Card grid at 1440 px and 390 px. Verify: no overflow at 390 px in English.
- [ ] 4.2 **Files: `src/assets/site.js` (`res.*` keys only), `docs/strategy-implementation/translation-sheet.md` (append).** EN keys for the two DRAFT strings, `ar: ""`, listed in the sheet. Verify: no blank text in AR.

## 5. Integration check

- [ ] 5.1 **Files: none.** Build; check `/resources/` at 1440 px and 390 px in EN and AR; all links resolve (the blog "original article" 404s stay, as recorded); the footer "Methodology resources" link lands on `#methodology`. Stop for review.
