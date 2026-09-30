# Proposal

## Why

wewill.tech presents its offer as an internal service catalogue: Home `#services` "Four service pillars", `/ai-era-quality-services/` "What WE WILL delivers", and `#how-we-work`. Nowhere does it organise the offer around what the buyer is facing. The Website Brief adds a Solutions page built on the five approved use cases, with Vibe Test and BCQ Expert Services shown where each fits and existing capability material kept only where it supports those problems.

## What Changes

New route `/solutions/`, blocks in Website Brief §III order:

| # | Block | Action | Content | CTA |
|---|---|---|---|---|
| 1 | Page introduction (`#intro`) | NEW | DRAFT H1 + SA §V sentence "WE WILL Technology helps digital-product teams verify critical software journeys, understand release risk and ship with greater confidence." + jump links to the five use cases | — |
| 2 | Release verification (`#release-verification`) | NEW | Situation / How WE WILL helps / Outcome from SA §V and the pillar "Verification at release speed" | Run a Guided Vibe Test |
| 3 | AI-assisted development (`#ai-assisted-development`) | NEW | from SA §V and differentiator "Vibe Test verifies rapidly changing software" | Run a Guided Vibe Test |
| 4 | AI Feature Evaluation (`#ai-feature-evaluation`) | NEW | Buyer problem + "WE WILL-developed approach executed through Vibe Test" + "Evidence against risk criteria". **No differentiation, method or IP claim.** | Discuss a Quality Requirement + Run a Guided Vibe Test |
| 5 | Release decision (`#release-decision`) | NEW | BCQ Expert Services (Release Decision) + test evidence | Discuss a Quality Requirement |
| 6 | Lean-team quality (`#lean-team-quality`) | NEW | Vibe Test + Managed Quality Care | Discuss a Quality Requirement |
| 7 | Methodology / supporting capabilities (`#methodology`) | EDIT | Relocated, verbatim capability copy from Home `#services` (QaaS, Risk Prevention for Releases, AI Quality & Behavioral Transparency as a name only) and `/ai-era-quality-services/` "What WE WILL delivers" (Quality Strategy, User Journey Testing, Release Readiness Reviews, Role-Aware Security Testing, Risk Reports for PMs). Each is tagged with the use case(s) it supports. Plus Home `#how-we-work` (4 steps). The Quality Canvas card and "GenAI Feature Evaluation" description are left out (the first goes to Resources; the second is a method claim). | — |
| 8 | Proof | EDIT | Existing testimonials beside the matching use case: Darent → Release verification; iStoria → Release decision; SellEnvo → Lean-team quality. Use cases 2 and 3 get a marked placeholder. | — |

All NEW copy and every tag line is marked `<!-- DRAFT: needs approval -->`.

## SEO (keyword choices pending keyword research)

| Item | Value |
|---|---|
| Title | Release Verification & QA Solutions \| WE WILL Technology (56) |
| Meta description | Release verification, AI-assisted development, AI feature evaluation, release decisions and lean-team quality with Vibe Test and BCQ Expert Services. (149) |
| Canonical | `https://wewill.tech/solutions/` |
| H1 | Solutions for the release situations product teams face. (DRAFT) |
| H2s | Release verification · AI-assisted development · AI Feature Evaluation · Release decision · Lean-team quality · We Deliver Confidence, Not Just Reports. (reused) · A Quality Process Built Around Decisions. (reused) |

| Seed term (Brief §5) | Placement here |
|---|---|
| software release verification / release readiness testing | H2 "Release verification"; capability "Release Readiness Reviews" |
| AI software testing / AI-assisted development testing | H2 "AI-assisted development" |
| AI feature testing / AI feature evaluation | H2 "AI Feature Evaluation" |
| continuous software quality / continuous QA | intro jump-link lead (DRAFT) |
| QA as a service / managed QA services | capability "Quality as a Service (QaaS)"; "Managed Quality Care" in lean-team. Not framed as generic outsourced QA (Brief note) |
| software quality consulting / release decision support | H2 "Release decision" copy |
| software testing / AI testing / QA services Saudi Arabia | mapped here; **not used in copy** until validated (Q30) |

## Preserved (Do Not Touch)

- The source sections themselves: `sections/home/services.html`, `sections/home/how-we-work.html` and `/ai-era-quality-services/` keep their files and copy. This page copies their text into its own partial. Only `how-we-work.html` is included as it is.
- Testimonial quote text and logos (verbatim).
- The global chrome, Home and the other pages.

## Open items

- The proof-to-use-case mapping (Darent, iStoria, SellEnvo) is my proposal for WE WILL to confirm.
- Use case 3 evidence ("Framework, thresholds, outputs and customer proof", SA §V) and use case 2 evidence: placeholders until WE WILL supplies them.
- "Automation" (named in the Brief) has no existing standalone material other than Vibe Test itself; it is covered by linking to `/vibe-test/` in use cases 1–2.

## Capabilities

### New Capabilities

- `solutions-page`: the `/solutions/` page: the introduction, five use cases, supporting capabilities, proof placement, CTAs and metadata.

### Modified Capabilities

None.

## Impact

- New: `src/solutions/index.njk`; `src/_includes/sections/solutions/intro.html`, `use-case.njk` (one parameterised partial, used 5×), `methodology.html`
- Reuses the `src/_includes/sections/home/how-we-work.html` include unchanged
- `src/assets/site.css`: Solutions layout rules; `src/assets/site.js`: `sol.*` translation keys

## Implementation notes (2026-09-29)

- Follows the `optimize-leads-seo` patterns: every CTA carries `data-cta` / `data-cta-location="sol-<use-case>"`; testimonial logos carry intrinsic width/height.
- JSON-LD `Service` entries for the three BCQ Expert Services (Quality Diagnostic, Release Decision, Managed Quality Care) with `provider` = WE WILL Technology. Their descriptions use SA §V wording; there are no `offers` or prices.
- The "Supports:" tags link to the matching use-case anchors, which gives internal links within the page. They are DRAFT.
- One closing line links the "automation" capability to `/vibe-test/` (DRAFT: "Automated verification runs through Vibe Test, WE WILL's Agentic QA platform.").

## Review fixes (2026-09-29, user-approved)

- **R1:** a visible "BCQ Expert Services" row in `#methodology` (id `#bcq-expert-services`) lists Quality Diagnostic, Release Decision and Managed Quality Care. It reuses the Home expert-layer keys and SA §V wording without fee terms, and has a "Discuss a Quality Requirement" button (`data-cta-location="sol-methodology"`). This makes the page's `Service` structured data match visible content.
- **R2:** the first "Vibe Test" mention in use cases 1, 2, 3 and 5 links to `/vibe-test/`. The `sol.<id>.help` translations are HTML (`data-i18n-html`).
- **R3:** use cases 1 and 2 add "See how it works" → `/vibe-test/#how` (existing Vibe Test label and Arabic, `vt.hero.how`). This is the existing evidence the SA asks for ("Demo and pilot", "Proof of value").
- Not done: R4, a closing CTA block at the end of the page. The Brief does not list one, so it awaits the user's decision.
