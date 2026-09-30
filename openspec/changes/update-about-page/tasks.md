# Tasks

Depends on: `update-global-nav-footer-cta` (nav, CTA map, `.content-placeholder`) and `update-home-page` (the team section leaves Home).

## 1. Route

- [ ] 1.1 **Files: `src/about/index.njk` (new).** Front matter (title, description, canonical, OG/Twitter, `activeNav: about`) and includes: story, `sections/home/team.html`, philosophy, credibility. Verify: the build writes `_site/about/index.html` with four IDs in order and one H1.

## 2. Company story (EDIT)

- [ ] 2.1 **Files: `src/_includes/sections/about/story.html` (new).** DRAFT H1, lead and line, the background placeholder, the founder interview link. Verify: text matches the spec; no invented facts; the placeholder is visible.

## 3. Team (REUSE)

- [ ] 3.1 **Files: `src/_includes/sections/home/team.html` (`alt` attributes only).** Add `alt="WE WILL team member"` to the 13 images. Verify: `git diff` shows only alt additions; `/team/` and `/about/` both render all 13 images with non-empty alt.

## 4. Quality philosophy (EDIT)

- [ ] 4.1 **Files: `src/_includes/sections/about/philosophy.html` (new).** Copy the `why-we-will.html` markup under `id="philosophy"`, with the new kicker key `about.philosophy.kicker` and the closing line key `about.philosophy.close`; keep the `whyWeWill.*` keys for the reused copy. Verify: `/why-we-will/` output is byte-identical to before; the reused copy shows Arabic in AR.

## 5. Credibility (REUSE)

- [ ] 5.1 **Files: `src/_includes/sections/about/credibility.html` (new).** Wrapper `#credibility` that includes `sections/home/clients.html` and adds "Talk to Us" → `/contact/`. Verify: 10 logos, no testimonial, and the button href is `/contact/`.

## 6. Styles and strings

- [ ] 6.1 **Files: `src/assets/site.css` (About rules only).** Story and credibility spacing, 1440/390 px. Verify: no overflow at 390 px in English.
- [ ] 6.2 **Files: `src/assets/site.js` (`about.*` keys only), `docs/strategy-implementation/translation-sheet.md` (append).** EN keys, `ar: ""`, listed in the sheet. Verify: no blank text in AR.

## 7. Integration check

- [ ] 7.1 **Files: none.** Build; check `/about/` at 1440 px and 390 px in EN and AR; heading order; CTA; the placeholders are clearly marked; `/why-we-will/` is unchanged. Stop for review.
