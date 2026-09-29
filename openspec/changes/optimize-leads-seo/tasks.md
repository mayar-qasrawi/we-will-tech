# Tasks

## 1. Lead conversion

- [x] 1.1 **Files: `sections/home/hero.html`, `site.js` (hero keys).** Eyebrow → "Agentic Software Quality"; add the DRAFT buyer line after the subheadline (key `hero.audience`). Verify: H1 and subheadline unchanged; in AR, no blank text.
- [x] 1.2 **Files: `sections/home/contact.html`, `site.css` (contact rules).** Offer panels (polite live region), panel switching on load and on change, the "within 1 business day" line. Verify: `?request=guided-vibe-test` shows the right panel; "General message" hides both; no pricing words.
- [x] 1.3 **Files: `sections/vibe-test/conversion.html`, `vibe-test.css`, `site.js` (vt.book keys).** Fit line + three funnel stages. Verify: one row at 1440 px, stacked at 390 px, no overflow.
- [x] 1.4 **Files: header, footer, Home and Vibe Test section partials (attributes only).** Add `data-cta` / `data-cta-location` to every CTA. Verify: a scan of built `/` and `/vibe-test/` finds no CTA link without both attributes.

## 2. SEO foundation

- [x] 2.1 **Files: `partials/head.njk`.** `og:site_name` → "WE WILL Technology"; render `jsonLd` front matter in a `<script type="application/ld+json">`. Verify: every page shows the new site name.
- [x] 2.2 **Files: `src/index.njk`, `src/vibe-test/index.njk`, `src/contact/index.njk`.** New descriptions/titles (OG/Twitter matched) and JSON-LD. Verify: JSON parses; lengths within limits; no `offers`.
- [x] 2.3 **Files: `sections/home/clients.html`, `sections/home/success-stories.html`, `site.css`.** Intrinsic width/height on logos, CSS `width: auto` so rendering is unchanged. Verify: screenshot of the strip and proof block unchanged.
- [x] 2.4 **Files: `src/uploads/vibe-test-logo-112.png` (new), `sections/vibe-test/*.html` (src only).** Resized copy used by the five small logo instances. Verify: the new file is ≤ 20 KB; the original is unchanged.
- [x] 2.5 **Files: `src/sitemap.njk` (new).** Prototype sitemap. Verify: valid XML, nine URLs.

## 3. Records and check

- [x] 3.1 **Files: `docs/strategy-implementation/open-items.md` (new), `cta-map.md`, `translation-sheet.md`.** Record L4, S7, S8, the tracking attribute scheme and the new Arabic keys. Verify: every deferred item has an owner ("WE WILL").
- [x] 3.2 **Files: none.** Build; check `/`, `/vibe-test/`, `/contact/` at 1440 px and 390 px in EN and AR. Stop for review.
