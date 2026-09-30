# Design

## Context

See proposal.md › Why. The header (`partials/header.njk`) renders hash links built from `navHomeHref`/`navPrefix` and an `activeNav` front-matter key. `site.js` then overwrites every `[data-site-setting]` text from `siteSettings[key][lang]` on load, and keeps the HTML text when a key has no value. The footer (`partials/footer.html`) takes its tagline, copyright and rights line from the same `siteSettings`. An unused `header_nav_vibe_test` key already exists. The contact form lives in `sections/home/contact.html`, which both Home and `/contact/` include.

## Goals / Non-Goals

**Goals:** Brief-exact nav and footer; one CTA destination map; a request-type preset on the existing form; legal stubs. All markup stays portable to the PHP partials.

**Non-Goals:** No changes to the language-switch logic, the chat widget, the form endpoint, the Arabic overflow bug or the old one-section pages. No new Home or page content (owned by the page changes).

## Decisions

1. **Nav links are page URLs, not Home anchors.** The Brief's items are pages. `activeNav` takes `home | vibe-test | solutions | resources | about`; blog pages set `activeNav: resources`. The current item gets `is-active` plus `aria-current="page"`. *Alternative:* keep the anchors on Home. Rejected: Resources and About have no Home anchor.
2. **Labels go through `siteSettings`**, following the existing pattern. New keys: `header_nav_solutions`, `header_nav_resources`, `header_nav_about` and `header_nav_cta`, with `ar` left empty. The existing `header_nav_hero` and `header_nav_vibe_test` keys are reused. Empty Arabic values keep the English HTML text (existing behaviour in `applyLanguage`).
3. **Header CTA reuses `.btn.btn-primary`** with a compact size modifier in `layout.css`. In the mobile panel it is the last item, at full width.
4. **Footer markup** reuses the `.shell-footer-*` class family: a `<nav aria-label="Footer">` holding five `<div>` groups, each with a heading `<h2 class="shell-footer-heading">`, then a bottom bar. `footer_copyright` becomes "© 2026 WE WILL Technology" in both languages. `footer_tagline` is removed from the markup; the key stays unused so the PHP settings don't break.
5. **Request type** is a `<select name="request_type">` added to `contact.html` before the message field, with a visible label. A few lines added to the form's existing inline script read `URLSearchParams.get('request')` and select the matching option. *Alternative:* prefill the message text. Rejected: harder for sales to filter.
6. **Legal stubs** are `src/privacy/index.njk` and `src/terms/index.njk` with a `noindex: true` front matter (already supported in `head.njk`). The placeholder uses a shared `.content-placeholder` style that the page changes also use for missing proof.

## Risks / Trade-offs

- [The nav points to `/solutions/`, `/resources/` and `/about/` before those pages exist] → The links 404 until those changes land. This is acceptable inside the prototype branch. Verification for this change checks only the destinations that exist, and Phase 4 re-checks all links.
- [The server ignores the new `request_type` field] → Recorded as an open item for WE WILL's developers. The field is additive and harmless if ignored.
- [English labels in Arabic mode] → Accepted per Q18. A translation sheet lists the keys.
