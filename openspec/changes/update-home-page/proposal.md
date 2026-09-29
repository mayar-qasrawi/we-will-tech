# Proposal

## Why

Home is still the old long page: 14 sections, a Vibe Test block that sends visitors off-domain, no buyer-problem routing, a testimonial marquee repeating 7 quotes as 29 cards, and a contact form in place of a clear close. The Website Brief defines Home as 8 blocks in a fixed order. Blocks 1–2 (Hero, Social proof strip) are DONE; this change delivers blocks 3–8 and moves the unlisted sections off Home.

## What Changes

Action tags: Website Brief §III (config verdicts in brackets).

| # | Block | Action | Change |
|---|---|---|---|
| 3 | Vibe Test introduction (`#vibe-test`) | EDIT [MODIFY] | Kicker becomes "Vibe Test by WE WILL Technology". The subtitle describes Vibe Test as an "Agentic QA platform" (SA §III). The primary CTA becomes **Explore Vibe Test** → `/vibe-test/` (it no longer opens vibe-test.oneapp.dev in a new tab). "Talk to WE WILL" is removed. The receipt card gets a visible "Sample" label. The video and the 3 capability cards are reused unchanged. |
| 4 | Buyer problems / use cases (`#use-cases`) | NEW | Five cards for the SA §V priority use cases (name, trigger/solution, outcome), each linking to its Solutions anchor. CTA **Explore Solutions**. |
| 5 | WE WILL expert layer (`#expert-layer`) | EDIT [MODIFY] | Vibe Test + BCQ methodology + BCQ Expert Services (Quality Diagnostic, Release Decision, Managed Quality Care), built from SA §V/§VI sentences plus the existing "Business-Care Quality" card text. CTA **Discuss a Quality Requirement**. |
| 6 | Selected proof (`#success-stories`) | EDIT [MODIFY] | Three static testimonials (iStoria, Darent, SellEnvo, verbatim). The two marquee rows, the duplicates and the "Talk to WE WILL" CTA are removed. |
| 7 | Selected resources (`#knowledge`) | REUSE [KEEP, subset] | Three existing items: Triad Quality Framework post, "When software quality becomes a business decision" post, Interview with Our Founder. CTA **View Resources**. The Business-Care Quality and Quality Canvas cards move to Resources. |
| 8 | Final conversion (`#get-started`) | EDIT [MODIFY] | Reuses the contact kicker and title, with a new supporting line. Buttons: **Run a Guided Vibe Test** (primary) and **Discuss a Quality Requirement** (secondary). The form leaves Home (it stays on `/contact/`). |

**Leaves Home (REMOVE at Home; files kept, nothing deleted):**
- Relocated per the Brief: `#team` → About › Team; `#why-we-will` → About › Quality philosophy; `#services` and `#how-we-work` → Solutions › Methodology; `#quality-canvas` → Resources › Background methodology.
- Not shown anywhere (Q1 default): `#ai-era-quality-services-promo`; `#genai-based-systems` (AI Feature Evaluation claim rule); `#impact` (unsourced figures). Their partials stay in the repo.

**Home metadata (EDIT):** new title, description, OG and Twitter text from the approved messaging (see SEO).

All NEW or edited copy is marked `<!-- DRAFT: needs approval -->` in the templates.

## SEO (keyword choices pending keyword research)

| Item | Value |
|---|---|
| Title | Agentic Software Quality \| WE WILL Technology (45) |
| Meta description | Know what is safe to ship at the speed you build. Vibe Test verifies critical journeys; BCQ Expert Services add human judgment where risk requires it. (150) |
| Canonical | `https://wewill.tech/` |
| H1 | Hero headline (DONE) |
| H2s | Products That Trusted WE WILL Quality. · Meet Vibe Test — autonomous QA that hands you the receipts. · Which release situation are you facing? · Continuous verification and accountable quality judgment for release decisions. · Inspired by WE WILL Clients' Success. · Deep Dive into Our Knowledge. · Let's Talk About Your Product's Quality. |
| Seed terms mapped here | agentic QA / agentic software testing (title, Vibe Test intro) · continuous software quality / continuous QA (expert-layer H2) · software release verification (use-case card) · software testing / QA services Saudi Arabia: mapped to Home, **not used in copy** until validated (Q30) |
| Internal links | `/vibe-test/`, `/solutions/` + 5 anchors, `/resources/`, `/blog/…`, `/contact/?request=…` |

## Preserved (Do Not Touch)

- **Hero** (block 1, DONE) and **Social proof strip** (block 2, DONE).
- Inside `#vibe-test`: the title, receipt card content, video facade and the 3 capability cards.
- Testimonial quote text, logos and company names (verbatim).
- `#knowledge` header and the reused cards' copy and links.
- The chat widget on Home; the header and footer (owned by `update-global-nav-footer-cta`).
- The relocated and removed sections' partial files: not edited or deleted in this change.
- `sections/home/contact.html` (still used by `/contact/`).

## Open items

- Arabic: edited or new strings have no approved Arabic and fall back to English (Q18). The reused testimonials for iStoria, Darent and SellEnvo keep whatever Arabic exists today.
- Taking the form off Home also removes the element behind the Home Arabic overflow (`.contact-hp`). This is a side effect, not a fix. `/contact/` keeps the bug.
- The use-case cards link to Solutions anchors that exist only after `add-solutions-page`.

## Capabilities

### New Capabilities

- `home-page-structure`: Home block order, the sections that leave Home, and Home metadata.
- `home-vibe-test-intro`: content and routing of the Home Vibe Test introduction.
- `home-use-cases`: the five-use-case preview.
- `home-expert-layer`: the Vibe Test + BCQ expert-layer block.
- `home-selected-proof`: the three-testimonial proof block.
- `home-selected-resources`: the three-item resources preview.
- `home-final-conversion`: the closing primary and secondary CTA block.

### Modified Capabilities

None.

## Impact

- `src/index.njk`: include list and front matter.
- `src/_includes/sections/home/vibe-test.html`, `success-stories.html`, `knowledge.html`
- New: `src/_includes/sections/home/use-cases.html`, `expert-layer.html`, `final-cta.html`
- `src/assets/site.css`: styles for the new blocks and the static proof grid; the marquee CSS stays only for pages still using it (none after this change; kept, not deleted).
- `src/assets/site.js`: `translations` keys for the edited and new strings.
- New: `src/_includes/sections/legacy/knowledge.html`, `src/_includes/sections/legacy/success-stories.html` (unchanged copies from `main`), used by `src/knowledge/index.njk` and `src/success-stories/index.njk` so those pages stay as they were.
