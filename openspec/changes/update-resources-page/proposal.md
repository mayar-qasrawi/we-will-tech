# Proposal

## Why

wewill.tech's insight content is split between `/blog/` (two posts), the Home "Deep Dive" cards (Business-Care Quality, Triad Quality Framework, Founder interview, Quality Canvas) and the Home `#quality-canvas` section. None of it has a home in the new navigation. The Website Brief adds "Resources" as the authority area that houses this existing content. Note: no `/resources/` page exists yet, so despite the change name this change creates the page (Q20).

## What Changes

New route `/resources/`, blocks in Website Brief §III order:

| # | Block | Action | Content | CTA |
|---|---|---|---|---|
| 1 | Blog / insights (`#insights`) | REUSE | H1 reused from `/blog/`: "Insights, quality thinking, and product lessons." Cards reused verbatim: "The Triad Quality Framework" and "When software quality becomes a business decision" (from `/blog/`), "Interview with Our Founder" (Home knowledge card), plus a link to the full `/blog/` listing. | Read (each card) |
| 2 | Background methodology (`#methodology`) | EDIT | DRAFT H2 "Background methodology" + SA §II lead "BCQ links technical evidence to customer and business risk. It informs Vibe Test and is also delivered through separately scoped expert services." Reused Home knowledge cards "Business-Care Quality" (relinked from the 404 to `/solutions/#methodology`) and "Quality Canvas" (LinkedIn post), then the Home `#quality-canvas` section included unchanged. Triad stays in block 1 as a post. | — |

- **Quality Canvas and Triad kept** (Q12 default: "still useful and coherent" as background for the BCQ methodology). WE WILL can remove the block later without affecting other pages.
- `/blog/` and both post pages are unchanged, apart from Resources being the active nav item (owned by `update-global-nav-footer-cta`).

## SEO (keyword choices pending keyword research)

| Item | Value |
|---|---|
| Title | Software Quality Resources \| WE WILL Technology (47) |
| Meta description | Insights on software quality, release confidence and the Business Care Quality methodology from WE WILL Technology. (115) |
| Canonical | `https://wewill.tech/resources/` |
| H1 | Insights, quality thinking, and product lessons. (reused) |
| H2s | Background methodology (DRAFT) · Your Product's Quality on One Clear Canvas. (reused) |
| Seed terms | None of the Brief §5 seed terms map to Resources. It links into Solutions and Vibe Test (internal links) |
| Alt text | Blog card images reuse the blog's EN/AR alt attributes |

## Preserved (Do Not Touch)

- `/blog/`, `/blog/the-triad-quality-framework/`, `/blog/when-software-quality-becomes-a-business-decision/`: content, URLs and the broken "original article" links (Checkpoint 1 ruling).
- `sections/home/quality-canvas.html`: included as it is, including "Generate Your Quality Canvas" (ChatGPT) and "Know More" (LinkedIn).
- The knowledge cards' copy and EN/AR attributes.
- The global chrome, Home and the other pages.

## Capabilities

### New Capabilities

- `resources-page`: the `/resources/` page: insights, background methodology, CTAs and metadata.

### Modified Capabilities

None.

## Impact

- New: `src/resources/index.njk`, `src/_includes/sections/resources/insights.html`, `src/_includes/sections/resources/methodology.html`
- Reuses `src/_includes/sections/home/quality-canvas.html` unchanged
- `src/assets/site.css`: small Resources layout rules; `src/assets/site.js`: `res.*` keys for the DRAFT strings only
