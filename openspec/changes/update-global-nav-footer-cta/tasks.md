# Tasks

## 1. Header navigation

- [x] 1.1 **Files: `src/_includes/partials/header.njk`.** Replace the menu with Home, Vibe Test, Solutions, Resources, About and a "Run a Guided Vibe Test" button (`/contact/?request=guided-vibe-test`). Use `activeNav` for `is-active` + `aria-current="page"`. Verify: the built `/` header lists exactly these six items in order.
- [x] 1.2 **Files: `src/assets/site.js` (`siteSettings` nav keys only).** Add `header_nav_solutions`, `header_nav_resources`, `header_nav_about`, `header_nav_cta` (empty `ar`). Verify: in Arabic, Home/Vibe Test show their Arabic labels and the others show English, with none blank.
- [x] 1.3 **Files: `src/assets/layout.css` (header rules).** Style the compact header CTA and its mobile full-width state. Verify: at 1440 px it fits on one row; at 390 px the menu shows all items with 44 px targets and there is no horizontal overflow in English.
- [x] 1.4 **Files: `src/blog/index.njk`, `src/blog/*/index.njk` (front matter only).** Set `activeNav: resources`. Verify: Resources is active on `/blog/` and on both posts.

## 2. Footer

- [x] 2.1 **Files: `src/_includes/partials/footer.html`.** Build the five link groups and bottom bar from specs/global-footer. Remove the tagline and the Facebook/WhatsApp/Instagram links; keep LinkedIn. Verify: the built footer's link list matches the spec table exactly.
- [x] 2.2 **Files: `src/assets/site.js` (`footer_*` keys only).** Set `footer_copyright` to "© 2026 WE WILL Technology" (en and ar). Verify: "© 2023" is absent from the built site after JS runs, in EN and AR.
- [x] 2.3 **Files: `src/assets/layout.css` (footer rules).** Add the footer grid (1440 px row, 390 px stack) and `.content-placeholder`. Verify: no overflow at 390 px; headings are announced before links (landmark check).

## 3. CTA framework and contact form

- [x] 3.1 **Files: `src/_includes/sections/home/contact.html`.** Add the labelled `request_type` select (unselected default, "Run a Guided Vibe Test", "Discuss a Business Care Quality Requirement") and the `?request=` preset in the existing inline script. Verify: `/contact/?request=bcq-requirement` preselects the BCQ option, an unknown value selects nothing, and the form's other behaviour is unchanged.
- [x] 3.2 **Files: `src/_includes/sections/home/hero.html` (CTA `href` only).** Change the href to `/contact/?request=guided-vibe-test`. Verify: `git diff` shows only the href attribute changed.
- [x] 3.3 **Files: `docs/strategy-implementation/cta-map.md` (new).** Document the CTA label → destination table and the request_type values for WE WILL's developers. Verify: the file matches specs/cta-framework.

## 4. Legal stubs

- [x] 4.1 **Files: `src/privacy/index.njk`, `src/terms/index.njk` (new).** Create the stub pages with title, meta, canonical, `noindex`, H1 and placeholder notice. Verify: both build, have one H1 and carry `noindex`.

## 5. Integration check

- [x] 5.1 **Files: none.** Run `npm run build`. At 1440 px and 390 px, EN and AR, check the header and footer on `/`, `/contact/`, `/blog/`, `/privacy/`; check keyboard focus order; confirm the hero and social-proof strip are unchanged apart from the hero href; list which nav/footer targets still 404 (pages not built yet).
