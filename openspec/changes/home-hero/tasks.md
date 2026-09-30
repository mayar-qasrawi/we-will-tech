# Tasks

Owned files: `src/_includes/sections/home/hero.html`, `src/assets/site.js` (hero keys only).

## 1. Content

- [x] 1.1 Update `hero.html`: headline, subheadline and a single "Run a Guided Vibe Test" CTA linking to `/contact/`; eyebrow text aligned with what visitors saw on the old site
- [x] 1.2 Update `translations.en` hero keys to match the template; delete `hero.ctaSecondary`
- [x] 1.3 Empty `translations.ar` values for `hero.title`, `hero.subtitle`, `hero.ctaPrimary`; delete `hero.ctaSecondary`

## 2. Verification

- [x] 2.1 Build, then check EN and AR at 1440 px and 390 px: headline, subheadline, one CTA, eyebrow and GO track unchanged
- [x] 2.2 Check the CTA's keyboard focus, touch height (≥ 44 px) and text contrast (≥ 4.5:1)
- [x] 2.3 Confirm no other page changed (the hero is only on `/`)
