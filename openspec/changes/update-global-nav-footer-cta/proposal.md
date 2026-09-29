# Proposal

## Why

The current header links to Home anchors (AI-Era Quality, Why WE WILL, Quality Canvas, How We Work, Contact) and the Blog. The footer shows a tagline, four social links and "© 2023 WE WILL". Neither matches the consolidated wewill.tech architecture in the Website Brief, where WE WILL Technology is the master brand, Vibe Test is the lead product, and one primary action ("Run a Guided Vibe Test") runs through the site. Every page change depends on this shared chrome and CTA system, so it goes first.

## What Changes

Action tags follow Website Brief §III/§IV (REUSE / EDIT / NEW). Config verdicts: EDIT → MODIFY, NEW → NEW.

- **EDIT (MODIFY) — Header navigation.** Replace the menu with `Home | Vibe Test | Solutions | Resources | About` plus a highlighted **Run a Guided Vibe Test** button (WB p. 5 "Navigation menu recommendation"). The logo, EN/AR switch and mobile menu toggle are reused as they are.
- **EDIT (MODIFY) — Footer.** Rebuild the footer as the Brief's six groups: Product & Solutions · Company · Resources · Get Started · Legal & Social · Bottom bar (WB p. 6). Keep all four social links from the old footer (LinkedIn, Facebook, WhatsApp, Instagram; user decision, 2026-09-29, overriding the Q14 default). Remove the tagline. Links use one word instead of the Brief's slash pairs: "Contact" and "Blog" (user decision). Copyright becomes "© 2026 WE WILL Technology". Company/legal info is a marked placeholder.
- **NEW — CTA framework.** One destination map for every CTA label in WB §IV:
  - "Run a Guided Vibe Test" → `/contact/?request=guided-vibe-test`
  - "Discuss a Quality Requirement" (buttons) and "Discuss a Business Care Quality Requirement" (footer) → `/contact/?request=bcq-requirement` (Q3, Q4 defaults)
  - "Talk to Us" / "Contact" → `/contact/`
  - "Explore Vibe Test" → `/vibe-test/`, "Explore Solutions" → `/solutions/`, "View Resources" → `/resources/`
- **EDIT (MODIFY) — `/contact/` form.** Add a request-type choice whose options are the two CTA labels, preset from `?request=`. The page stays the "Contact / Talk to Us" destination.
- **NEW — Legal stubs.** `/privacy/` and `/terms/` pages, clearly marked "to be supplied by WE WILL", `noindex`. No Cookie Policy page, because the site sets no cookies and loads no analytics (Q15 default). The Brief says "if applicable", so the link is omitted.
- **Hero CTA href only.** The completed hero's "Run a Guided Vibe Test" link gains `?request=guided-vibe-test`. The label, copy and design are unchanged.

## SEO (pending keyword research)

| Page | Title (≤60) | Meta description (≤155) | H1 |
|---|---|---|---|
| `/privacy/` | Privacy Policy \| WE WILL Technology (35) | Privacy Policy for wewill.tech. The policy text will be supplied by WE WILL Technology. (87) | Privacy Policy |
| `/terms/` | Terms of Use \| WE WILL Technology (33) | Terms of Use for wewill.tech. The terms will be supplied by WE WILL Technology. (79) | Terms of Use |

Each gets a canonical `https://wewill.tech/<path>/` and `noindex` until real text exists. No seed keyword maps to these pages.

## Preserved (Do Not Touch)

- **Home hero** (DONE): copy, layout, eyebrow, GO track and styles. Only the CTA `href` changes.
- **Home social-proof strip** (DONE): unchanged.
- The EN/AR switch and its behaviour. The Arabic overflow bug stays as recorded.
- The chat widget, its placement and behaviour.
- The contact form's existing fields, validation, honeypot, messages and `/contact-submit.php` endpoint.
- The 11 one-section pages and `/ai-era-quality-services/`: unchanged and still reachable by URL, but no longer linked from the nav or footer (Q2).
- Every Home section below the social-proof strip (owned by `update-home-page`).
- Brand logo files and the `siteSettings` brand keys.

## Open items (recorded, not decided here)

- `/contact-submit.php` must accept the new `request_type` field on the live server. The prototype cannot send.
- Arabic labels for "Solutions", "Resources", "About", "Run a Guided Vibe Test", the footer headings and the request-type field: none approved. They fall back to English (Q18).
- Company/legal details for the bottom bar: to be supplied by WE WILL.

## Capabilities

### New Capabilities

- `global-navigation`: the site-wide header menu, its primary CTA and active-page state.
- `global-footer`: the six-group footer, legal links and bottom bar.
- `cta-framework`: CTA labels, their roles and destinations, and the contact form's request-type preset.
- `legal-pages`: the Privacy Policy and Terms of Use stub pages.

### Modified Capabilities

None (no main specs exist yet).

## Impact

- `src/_includes/partials/header.njk`, `src/_includes/partials/footer.html`
- `src/assets/site.js`: `siteSettings` nav, footer and copyright keys, and the new request-type preset
- `src/assets/layout.css`: header CTA and footer grid
- `src/_includes/sections/home/contact.html`: request-type field. The file is shared by `/contact/`; Home stops including it in `update-home-page`.
- `src/_includes/sections/home/hero.html`: CTA `href` only
- New: `src/privacy/index.njk`, `src/terms/index.njk`
- No dependency changes.
