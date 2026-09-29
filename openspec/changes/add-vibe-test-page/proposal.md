# Proposal

## Why

Vibe Test lives on a separate domain (vibe-test.oneapp.dev) as a single React bundle with no title, meta description, `lang` or canonical, and its only CTA is a `mailto:` "Book a Demo". The Website Brief makes Vibe Test the lead product with a dedicated page inside wewill.tech, reusing its current product-first content and adding the WE WILL relationship and the guided proof-of-value motion.

## What Changes

New route `/vibe-test/` in the global layout (header, footer, EN/AR switch). Its content is rebuilt in the site's own stack from `docs/current-site/raw/vibe-test-bundle.html`, which is byte-identical to the live page as of 2026-09-29. Blocks in Website Brief §III order:

| # | Block | Action | Source → change |
|---|---|---|---|
| 1 | Product hero (`#top`) | REUSE | VT hero: eyebrow "AGENTIC QA PLATFORM — MVP · INVITE-ONLY", "Tests. Fixes. Verifies. Hands you the receipts.", subtitle, LIVE QA RUN terminal, marquee band. Adds the lockup "Vibe Test by WE WILL Technology". CTA "Book a Demo" → **Run a Guided Vibe Test**; "See how it works" kept. |
| 2 | Problem / context (`#problem`) | REUSE | VT `#problem`, verbatim. |
| 3 | What it does (`#what-it-does`) | REUSE | WW Home `#vibe-test` capability cards (Sweep & prove, Test, fix & verify, Receipts you can trust) under a DRAFT H2 taken from the SA diagram. |
| 4 | How it works (`#how`) | REUSE | VT `#how` "A closed loop. Not a checklist.": Discover, Fix, Verify, Ship. |
| 5 | Capabilities + evidence (`#services`, `#receipt`) | REUSE | VT `#services` "Five agents. One QA team." (label "Capabilities"), VT `#receipt` "Evidence, not claims." with a "Sample" label, WW video "Watch Vibe Test in action", and a **marked placeholder** for product screenshots. The "GenAI Evaluation" card is reworded to the SA's allowed description. |
| 6 | Who it is for (`#who`) | EDIT | "Built for teams without a QA team." (solo devs, vibe coders, early startups) → the approved segments: growth-stage product and engineering teams, enterprise digital teams, funded MVP / pre-launch teams. DRAFT. |
| 7 | WE WILL connection (`#we-will`) | NEW | "Product plus judgment.": the Vibe Test / BCQ methodology / BCQ Expert Services relationship. CTA **Discuss a Quality Requirement**. DRAFT. |
| 8 | Conversion (`#book`) | EDIT | Keeps "Ship with confidence."; "See your first receipt in the demo." → Guided Proof of Value scope, no price. CTA **Run a Guided Vibe Test**. DRAFT. |

- **REPLACE:** the VT header, footer and its own language button give way to the global chrome.
- **Assets:** the one image in the bundle (the Vibe Test logo, PNG, used 5 times) is exported unchanged to `src/uploads/vibe-test-logo.png`.
- **Arabic:** VT's own Arabic copy is reused for every REUSE string. EDIT/NEW strings fall back to English (Q18).

## SEO (keyword choices pending keyword research)

| Item | Value |
|---|---|
| Title | Vibe Test by WE WILL Technology \| Agentic QA Platform (53) |
| Meta description | Vibe Test is an Agentic QA platform by WE WILL Technology. It tests critical journeys, finds issues, supports fixes and re-verifies changes. (140) |
| Canonical | `https://wewill.tech/vibe-test/` |
| H1 | "Vibe Test by WE WILL Technology — Tests. Fixes. Verifies. Hands you the receipts." (lockup + reused proposition in one H1) |
| H2s | Shipping is easy. Proving it works is not. · Verify critical journeys. Detect issues. Re-verify fixes. · A closed loop. Not a checklist. · Five agents. One QA team. · Evidence, not claims. · Built for product teams with live products and recurring releases. · Product plus judgment. · Ship with confidence. |
| Seed terms mapped here | agentic QA / agentic software testing (title, eyebrow) · autonomous QA testing (subtitle "Your autonomous QA team") · software release verification / release readiness (conversion copy) · AI testing Saudi Arabia: mapped, **not used** until validated |
| Alt text | Logo in the lockup: "Vibe Test logo"; decorative repeats `alt=""` |

## Redirects to flag (the team decides)

| From | To | Note |
|---|---|---|
| `https://vibe-test.oneapp.dev/` (and any path) | `https://wewill.tech/vibe-test/` | 301 suggested |
| `…/#top`, `#problem`, `#how`, `#services`, `#receipt`, `#who`, `#book` | the same fragment on `/vibe-test/` | The page keeps these IDs, and browsers carry the fragment across a redirect, so no script is needed |
| `https://vibe-test.oneapp.dev/sitemap.xml` | none | Returns 404 today |
| `mailto:hello@wewill.tech?subject=Vibe-Test%20Demo` | none | Replaced by the CTA framework |

## Preserved (Do Not Touch)

- The REUSE copy of blocks 1–5, EN and AR, verbatim. Exceptions: the CTA label, the "GenAI Evaluation" card, the "Sample" labels and the kicker numbering.
- The live vibe-test.oneapp.dev site itself: this change adds a page and does not alter or redirect the external site.
- The global header and footer, Home (the Home "Explore Vibe Test" link is owned by `update-home-page`) and every other page.

## Open items

- The claims kept under Q7 need WE WILL's confirmation: "MVP · INVITE-ONLY", "Your autonomous QA team", "Autonomous fix → PR → merge → deploy → hand-off", "They author the fix and open a reviewable PR", "QA memory that compounds", "Adversarial verification".
- Product screenshots, and real receipts in place of the samples (#VT-4821 98.7%, #VT-7F3A9C 94%): to be supplied by WE WILL.

## Capabilities

### New Capabilities

- `vibe-test-page`: the `/vibe-test/` product page: its blocks, CTAs, metadata, anchors and responsive/accessible behaviour.

### Modified Capabilities

None.

## Impact

- New: `src/vibe-test/index.njk`, `src/_includes/sections/vibe-test/*.html` (8 partials), `src/assets/vibe-test.css` (loaded through the existing `extraCss` front-matter hook), `src/uploads/vibe-test-logo.png`
- `src/assets/site.js`: new `translations` keys `vt.*` (EN and the reused AR)
- No dependency changes.
