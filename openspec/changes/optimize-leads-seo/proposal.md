# Proposal

## Why

A review of Home and `/vibe-test/` against the two source PDFs (2026-09-29) found both pages compliant with the Website Brief's blocks, CTAs and claims rules. It also found gaps in B2B lead capture and SEO. The user approved every recommended fix ("approve all").

- **Hero misses part of its brief.** The Home hero does not yet "clarify … target buyer" (WB §III Home › Hero), and its eyebrow never states the approved category.
- **Primary CTAs land on a generic form.** Both lead to a form with no offer context, no qualification and no next step. WB §II, 5. Convert: "Run a Guided Vibe Test proof of value; enterprise/high-risk buyers can discuss a BCQ requirement."
- **Retained buyer search terms are missing.** SA §III asks to "Retain buyer search terms such as AI software testing, autonomous testing, regression testing and release verification."
- **Technical SEO is incomplete:** no structured data, the site name reads "WE WILL", images have no dimensions, a logo file is oversized, the contact page has old metadata, and there is no sitemap for the new structure.

## What Changes

**B2B lead optimisation**
- **EDIT — Home hero (DONE block, re-opened with approval):**
  - The eyebrow "Software Quality • Business-Care • AI-Aware" becomes "Agentic Software Quality" (SA §III category).
  - Add a buyer line: "Built for CTOs, engineering leaders and founders in growth-stage SaaS and digital-product companies." (WB §II Primary ICP, DRAFT).
  - The headline, subheadline, CTA and GO track are unchanged.
- **EDIT — `/contact/`, offer-matched panel (L1):** when `?request=` is set, or the request type changes, a panel shows the selected offer's name, scope and fit line (SA §V, DRAFT).
- **EDIT — qualification line (L2):** "For teams with a live product or executable MVP and a technical owner." (SA §V Guided Proof of Value, "Intended customer"; payer wording omitted by rule). It appears on the Vibe Test conversion block and in the contact panel.
- **EDIT — next steps (L3):**
  - The Vibe Test conversion block shows the SA §VI funnel stages "Guided Proof of Value → Evidence Review → Team Subscription".
  - The contact form shows "We'll be in touch within 1 business day." next to the button. This is taken from the form's existing success message.
- **NEW — CTA tracking hooks (L5):** every CTA carries `data-cta` (offer) and `data-cta-location` (block). No visible change.

**SEO**
- **EDIT — meta descriptions (S1):**
  - `/vibe-test/` and Home carry the SA retained search terms (pending keyword research).
  - `/contact/` gets a title and description from approved messaging (S6).
- **NEW — JSON-LD (S2):**
  - `Organization` + `WebSite` on Home: name, logo, social profiles already on the site.
  - `SoftwareApplication` on `/vibe-test/`, with no price or rating.
- **EDIT — `og:site_name` (S3):** "WE WILL" → "WE WILL Technology" site-wide.
- **EDIT — image dimensions (S4):** intrinsic `width`/`height` on the Home logo images, with CSS keeping the rendered size.
- **NEW — display-size Vibe Test logo (S5):** a 112 px copy for the five small uses. The original file is untouched.
- **NEW — prototype sitemap (S8, partial):** `/sitemap.xml` lists the new structure. Legacy pages are excluded and flagged for the team.

**Recorded for WE WILL, not built:**
- L4: named testimonial attribution.
- S7: indexable Arabic URLs / `hreflang`.
- S8: redirecting or noindexing the 11 legacy one-section pages.

All in `docs/strategy-implementation/open-items.md`.

## Preserved (Do Not Touch)

- Hero headline, subheadline, CTA label, GO track, visuals and styles.
- The social-proof strip, and every Home and Vibe Test block's content except the lines named above.
- The contact form's fields, validation, honeypot, endpoint and messages.
- The header, footer, legacy one-section pages and `/ai-era-quality-services/`.
- `src/uploads/vibe-test-logo.png` (original kept byte-for-byte).

## Capabilities

### New Capabilities

- `lead-conversion`: offer context, qualification, next steps and CTA tracking hooks on the conversion paths.
- `seo-foundation`: structured data, site name, meta descriptions, image dimensions, asset sizing and sitemap.

### Modified Capabilities

None (no main specs archived yet).

## Impact

- `src/_includes/sections/home/hero.html`, `src/_includes/sections/home/contact.html`, `src/_includes/sections/vibe-test/conversion.html`
- CTA `data-cta*` attributes in `partials/header.njk`, `partials/footer.html`, and the Home and Vibe Test section partials
- `src/_includes/partials/head.njk` (`og:site_name`, JSON-LD hook), `src/index.njk`, `src/vibe-test/index.njk`, `src/contact/index.njk`
- `src/_includes/sections/home/clients.html`, `success-stories.html` (image dimensions); `src/assets/site.css`, `src/assets/vibe-test.css`, `src/assets/site.js`
- New: `src/uploads/vibe-test-logo-112.png`, `src/sitemap.njk`, `docs/strategy-implementation/open-items.md`
