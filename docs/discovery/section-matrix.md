# Section Matrix — Checkpoint 1

Merged from the Phase 1 discovery reports:
- [doc-analysis.md](doc-analysis.md): verdicts, quotes, open questions (Doc Analyst)
- [codebase-map.md](codebase-map.md): files, CSS lines, JS, translation keys (Codebase Mapper)
- [design-audit.md](design-audit.md): Impeccable technical audit, measured checks (Design Auditor)
- [design-critique.md](design-critique.md): Impeccable critique of Home, design review + detector

The open questions and their recommended defaults are in [open-questions.md](open-questions.md).

## Baseline scores (current site, before any change)

| Measure | Score | Source |
|---|---|---|
| Impeccable **audit** (technical) | **8/20 — Poor**: accessibility 2, performance 2, responsive 1, theming 2, implementation integrity 1 (Fail). 29 issues: 1 P0, 7 P1, 12 P2, 9 P3 | design-audit.md |
| Impeccable **critique** (Home, heuristics) | **17/32 (53%) — Acceptable** (heuristics 7 and 10 n/a) | design-critique.md |

Corrections to the Phase 0 snapshot found by the audit: the blog **does** switch to Arabic (the snapshot said English only), and `screenshots/home/first-viewport--mobile.jpg` was captured mid-scroll, so it doesn't show the hero.

## How to read it

- **Verdict vocabulary.** The documents use EDIT / NEW / REUSE. They are mapped as REUSE → **KEEP**, EDIT → **MODIFY** (or **REPLACE** when the content is swapped out), NEW → **NEW**, and moved-away content → **REMOVE** at its old place. Anything neither document mentions is **UNMAPPED**; each UNMAPPED row shows the recommended default from open-questions.md.
- **Brief action.** The brief's own Action value is shown in brackets.
- **Doc quote.** One key quote per row: **WB** = [website-brief.md](../strategy/website-brief.md), **SA** = [strategic-alignment-2.0.md](../strategy/strategic-alignment-2.0.md). Every quote for every row is in doc-analysis.md (row ids in brackets, e.g. [B1]).
- **Files.** Paths are under `src/`; CSS line numbers refer to `assets/site.css` unless another file is named.
- **Audit issues.** Severity is in brackets (P0 blocking … P3 polish). A (critique review), B (detector) and CAP (capture) mark where each finding came from.
- **KEEP sections** (9 rows) get no spec in Phase 3; they are preserved and touched only to align them with shared design tokens.

## Global

| # | Section | Verdict | Required changes | Doc quote | Affected files | Audit issues | Open questions → default |
|---|---|---|---|---|---|---|---|
| G1 | **Header & navigation** [A1, N1–N6] | **REPLACE** menu items; **MODIFY** shell | Menu becomes Home · Vibe Test · Solutions · Resources · About, with a highlighted **Run a Guided Vibe Test** button. It drops AI-Era Quality, Why WE WILL, Quality Canvas, How We Work, Contact and Blog; Resources replaces Blog. | WB (p. 5): "Home \| Vibe Test \| Solutions \| Resources \| About \| Run a Guided Vibe Test" | `_includes/partials/header.njk`; `assets/layout.css` 1–145, 249–324; `site.css` 66–94; `assets/site.js` 596–625 (`siteSettings` nav labels), 683–692 (menu toggle) | [P1] mobile header is 2 rows / 120 px; menu opens above its button, covers 58% of the screen and **stays open after a link is tapped** (A). Vibe Test is not in the navigation (A). No skip link; 10 tab stops before the hero CTA (A). EN/AR buttons 31 px tall (A). "Menu" untranslated in AR (A). | OQ-06, OQ-11 |
| G2 | **Footer** [A4, F1–F6] | **MODIFY** | Six columns: Product & Solutions · Company · Resources · Get Started · Legal & Social · Brand / Bottom Bar. LinkedIn stays; the tagline and Facebook, WhatsApp and Instagram are not in the target. | WB (p. 6): "Vibe Test by WE WILL Technology · Copyright · company/legal information" | `partials/footer.html`; `layout.css` 1–28, 147–247, 289–323; `site.js` 600–606, 627–632 | [P2] "© 2023" (CAP). WhatsApp link has a space in the number and differs from the chat's number (A). Footer (z-index 80) covers the chat button (A). No email, address or privacy link (A). | OQ-37 stub legal pages; OQ-38 LinkedIn only, no tagline, "© 2026 WE WILL Technology" |
| G3 | **CTA system** [K1–K3] | **NEW** | Primary "Run a Guided Vibe Test"; secondary "Discuss a Quality Requirement" (buttons) / "Discuss a Business Care Quality Requirement" (footer); routing "Explore Vibe Test" / "Explore Solutions" on Home only. Legacy labels retire. | WB §IV (p. 4): "Primary acquisition CTA; the agreed proof-of-value entry motion." | shared button styles `site.css` 344–378; new CTA partial and destination map; `sections/home/contact.html` (form gains request type) | [P1] today ~11 start/contact paths under 9 labels to 7 destinations; three different primary-button styles (A). | OQ-06 contact form with preset request type; OQ-07 short label, no payment mention; OQ-08 short / long label as placed; OQ-10 `/contact/` = "Talk to Us" |
| G4 | **EN/AR switch & Arabic** [A2] | **UNMAPPED** → keep | Not in the documents. Default: keep the switch and existing Arabic, fix the RTL bug; new strings fall back to English, and a translation sheet goes to WE WILL. | WB §5 (p. 5): "Validate KSA search volumes and Arabic/English variants." (only mention) | `partials/header.njk` 58–61; `partials/body-start.html`; `site.js` 553–681; `site.css` 96–135, **2134–2141** (`.contact-hp`) | **[P0]** Arabic makes Home and `/contact/` 11,040 px wide (desktop) / 10,367 px (mobile); **the first screen on a phone is blank**. Cause: `.contact-hp { left:-10000px }` (CAP, A, map). [P1] Team carousel broken in RTL (map). 4 testimonials have empty Arabic (map). Receipt card has no Arabic (map). Form status forced left-aligned (A). | OQ-36 (default above) |
| G5 | **Chat widget** [A3] | **UNMAPPED** → keep | Not in the documents. Default: keep it where it is (Home, `/contact/`), with accessibility fixes only. | — (no mention) | `partials/chat-widget.html`; `site.css` 2174–2304; `site.js` 806–844 | [P1] Esc doesn't close it; close button 10×21 px; 4 invisible controls in the tab order when closed; hidden behind the footer at the form; whole widget is a live region (A). | OQ-39 |
| G6 | **Legal pages** [F5] | **NEW** | Privacy Policy, Terms of Use, Cookie Policy "if applicable". No text has been supplied. | WB (p. 6): "Privacy Policy · Terms of Use · Cookie Policy if applicable · LinkedIn" | new routes `privacy/`, `terms/` (`cookies/` if applicable) | None exist today (CAP). No analytics or cookie scripts found (map). | OQ-37 stubs marked "to be supplied by WE WILL" |

## Home (`/`) — the 8 target blocks, in the brief's order

| # | Section | Verdict | Required changes | Doc quote | Affected files | Audit issues | Open questions → default |
|---|---|---|---|---|---|---|---|
| H1 | **Hero** ← `#hero` [B1, T1] | **MODIFY** (EDIT) | Approved company-level proposition; make the safe-to-ship outcome and target buyer clear; primary CTA "Run a Guided Vibe Test" (replaces "Book a Clarity Session"; "Explore Services" goes). | SA (p. 6): "PRIMARY HEADLINE: Know what is safe to ship - at the speed you build." | `sections/home/hero.html`; `site.css` 395–719, 2350–2384, 2441–2444, 2524–2555; `site.js` dictionary `hero.*` (**overrides the HTML copy on load**, 100–104) | [P2] six nonstop animations; detector confirms gradient shimmer text, 5 coloured glows, 3 radial spotlights, pulsing dot, eyebrow chip, grid floor (B). [P1] abstract, negation-led headline; "Explore Services" is a dead end (A). Strength to keep: the "How a release earns its GO" track (A). | OQ-20 headline + subheadline verbatim, keep GO visual, buyer line needs approved wording |
| H2 | **Social proof strip** ← `#clients` [B12, T2] | **MODIFY** (EDIT), moves up | Compact client-logo strip or carousel high on the page. | WB (p. 2): "Compact client-logo strip/carousel high on the page for immediate credibility." | new `sections/home/social-proof.html` (from `clients.html`); `site.css` 1806–1818, 1911–1966, 2435–2437, 2450–2457 | [P1] two broken logos (Oyoun Media, In2World: 404 on `/wp-content/`); I Plan 2 renders blank; wrong alt text on One Studio ("iStoria logo") and SellEnvo ("Inspire") (CAP, A, B). [P3] cards nested in a card (B). One Studio logo is 3503 px, shown at 36 px (map). | OQ-35 the 10 logos with files; alts fixed |
| H3 | **Vibe Test introduction** ← `#vibe-test` [B2, T3] | **MODIFY** (EDIT) | Present Vibe Test as the lead product under WE WILL Technology; route to the new `/vibe-test/` page with "Explore Vibe Test" (replaces the external "Start a Vibe Test"). | WB (p. 2): "Introduce Vibe Test as the lead product under WE WILL Technology and route to the dedicated product page." | `sections/home/vibe-test.html`; `site.css` 753–1015; `site.js` 846–902 (video), keys `vibeTest.*` | [P1] lead CTA leaves the domain in a new tab (A). [P2] receipt card is English in AR mode, digits reorder (A, map). [P3] play button covers the poster's key words (A). Strength to keep: the release receipt card (A). | OQ-03 `/vibe-test/`; OQ-13; OQ-14 |
| H4 | **Buyer problems / use cases** [T4] | **NEW** | Preview the five approved use cases; route to Solutions with "Explore Solutions"; don't explain each in full. | WB (p. 2): "Preview the five approved use cases; route into Solutions rather than explaining each in full." | new `sections/home/buyer-problems.html` + CSS | — (new) | OQ-19 document phrases verbatim |
| H5 | **WE WILL expert layer** [T5] | **MODIFY** (EDIT), no single current source | Briefly explain Vibe Test + BCQ methodology / expert judgment; CTA "Discuss a Quality Requirement". | WB (p. 2): "Briefly explain the combination of Vibe Test + BCQ methodology / expert judgment." | new `sections/home/expert-layer.html` + CSS | — (new composition) | OQ-21 approved SA sentences + the "Business-Care Quality" card |
| H6 | **Selected proof** ← `#success-stories` [B11, T6] | **MODIFY** (EDIT) | 2–3 strongest testimonials / evidence points; remove the repetitive treatment (two duplicated marquee rows). | WB (p. 3): "2–3 strongest testimonials / evidence points; remove the current repetitive testimonial treatment." | `sections/home/success-stories.html`; `site.css` 1596–1804; `site.js` keys `success.*` (4 overridden on load) | [P1] each quote appears up to 3 times (29 instances in the markup); company-only attribution; 70 s endless marquee that can't be paused on touch (A, B, map). [P2] 4 quotes have no Arabic (map). MICEtribe and Rasel quotes are near-identical (Doc Analyst). | OQ-17 propose iStoria, Darent, SellEnvo; OQ-16 Impact figures held |
| H7 | **Selected resources** ← `#knowledge` [B13, T7] | **KEEP** (REUSE), subset | Surface "a small number" of existing items; CTA "View Resources". | WB (p. 3): "Surface a small number of existing blog / insight items." | `sections/home/knowledge.html`; `site.css` 1968–2075; `site.js` 669–674 | [P1] "Business-Care Quality" card → **404** (CAP). [P3] the internal blog card opens a new tab (A). | OQ-33 relink BCQ card; OQ-34 two posts + founder interview |
| H8 | **Final conversion** ← `#contact` [B14, T8] | **MODIFY** (EDIT) | Close with the primary action and the secondary expert-service path. | WB (p. 3): "Close with the primary commercial action and secondary expert-service path." | `sections/home/contact.html`; `site.css` 2077–2167; inline form script (`contact.html` 32–113) | [P1] form has `novalidate` and no validation of its own; placeholder-only visible labels; input borders ~1.7:1; Send 38 px tall; nothing reassures the visitor about next steps (A). | OQ-09 primary button + secondary link, form moves to `/contact/` |

### Current Home sections that leave Home

| # | Section | Verdict | Required changes | Doc quote | Affected files | Audit issues | Open questions → default |
|---|---|---|---|---|---|---|---|
| H9 | `#ai-era-quality-services-promo` [B3] | **UNMAPPED** → leaves Home | Not in the brief's Home list. | — (no mention of "AI-Era Quality Services") | `index.njk` (include list); `sections/home/ai-era-quality-services-promo.html` (inline style) | [P2] own palette (#0f1f6b→#1b3bbf, #ffd76b) and Inter heading, unlike the rest of the site; capability list hidden from screen readers (A, B, map). | OQ-02 leaves Home; OQ-04 |
| H10 | `#genai-based-systems` [B4] | **UNMAPPED** → leaves Home (parked) | Its content is gated by the AI Feature Evaluation rule. | SA (p. 3): "Publish this claim only after WE WILL documents its framework, criteria, thresholds, outputs and customer evidence" | `index.njk`; `sections/home/genai-based-systems.html`; `site.css` 1184–1280 | [P2] unexplained jargon; "Explore (EN/AR)" opens `/contact/`; card heading outranks the section heading; 28 px radius (A, map). | OQ-02; OQ-15 |
| H11 | `#why-we-will` [B5] | **REMOVE** at Home → About › Quality philosophy; its BCQ card → Solutions | Relocated. | WB (p. 4): "Concise explanation of how WE WILL approach quality; avoid duplicating Solutions." | `index.njk`; `sections/home/why-we-will.html`; `site.css` 721–745 | [P3] cards lift on hover but can't be clicked (A). | OQ-02; OQ-27 |
| H12 | `#services` [B6] | **REMOVE** at Home → Solutions › Methodology | Relocated; only items that support the five buyer problems. | WB (p. 4): "Use existing Business Care Quality, testing, automation, UX, security-aware testing and consulting material only where it supports the five buyer problems." | `index.njk`; `sections/home/services.html`; `site.css` 747–751, 1282–1296 | [P3] cards lift on hover but can't be clicked (A). | OQ-12; OQ-25 |
| H13 | `#quality-canvas` [B7] | **REMOVE** at Home → Resources (conditional) | Kept in Resources only if "still useful and coherent". | WB (p. 4): "Quality Canvas and Triad Framework may sit here only if still useful and coherent; otherwise omit." | `index.njk`; `sections/home/quality-canvas.html`; `site.css` 1298–1372 | [P3] "Generate Your Quality Canvas" opens ChatGPT in a new tab (A). Two inline styles (map). | OQ-28 keep for now |
| H14 | `#impact` [B8] | **UNMAPPED** → leaves Home | Figures held until sourced. | SA (p. 7): "WE WILL must supply product evidence, approved claims…" | `index.njk`; `sections/home/impact.html`; `site.css` 1374–1426 | [P1] unsourced 32% / 65% / 2×; red ↓ marks a good result; figures smaller than headings (A). | OQ-16 |
| H15 | `#how-we-work` [B9] | **UNMAPPED** → leaves Home (parked) | — | — (no mention) | `index.njk`; `sections/home/how-we-work.html`; `site.css` 1428–1473 | [P3] hover lift on cards that can't be clicked (A). | OQ-02; OQ-27 |
| H16 | `#team` [B10] | **REMOVE** at Home → **KEEP** at About | Move the team content to About. | WB (p. 4): "Move the existing team content from the long homepage into a dedicated company context." | `index.njk`; `sections/home/team.html`; `site.css` 1475–1594; `site.js` 758–799 (carousel) | [P1] 13 photos without alt text; carousel auto-advances every 3 s, ignores reduced motion, can't be paused and is broken in RTL; about 2.9 MB of photos shown at 96 px (CAP, A, map). | OQ-02 |

## Vibe Test (`/vibe-test/`, new route — content from vibe-test.oneapp.dev)

The current page is a React runtime bundle, so it is rebuilt in the site's stack, reusing its copy and presentation (map §7).

| # | Section | Verdict | Required changes | Doc quote | Affected files | Audit issues | Open questions → default |
|---|---|---|---|---|---|---|---|
| V1 | **Product hero** ← VT hero [D2, T9] | **KEEP** (REUSE), relocated | "Vibe Test by WE WILL Technology"; CTA "Run a Guided Vibe Test" (replaces "Book a Demo"). | WB (p. 3): "retain the current strong product proposition and product-first presentation." | new `vibe-test/index.njk`, `sections/vibe-test/hero.html` + CSS; source `docs/current-site/raw/vibe-test-bundle.html` | [P2] the "LIVE QA RUN" terminal and receipt rows stay invisible under reduced motion (map). The page has no title, meta or lang (CAP). | OQ-13 claims confirmed by WE WILL; OQ-07 |
| V2 | **Problem / context** ← `#problem` [D4, T10] | **KEEP** (REUSE) | Relocation only. | WB (p. 3): "Why manual or conventional verification does not keep pace with modern product delivery." | `sections/vibe-test/problem.html` | — | OQ-03 |
| V3 | **What it does** [T11] | **KEEP** (REUSE), source to confirm | Must match "supports fixes and re-verifies changes". | WB (p. 3): "Tests critical journeys, identifies issues, supports fixes and re-verifies changes." | `sections/vibe-test/what-it-does.html` | — | OQ-22 Home capability cards; OQ-13 |
| V4 | **How it works** ← `#how` [D5, T12] | **KEEP** (REUSE), "where accurate" | Keep where accurate. | WB (p. 3): "Retain the current product workflow / autonomous-agent explanation where accurate." | `sections/vibe-test/how-it-works.html` | — | OQ-13 |
| V5 | **Capabilities + evidence** ← `#services` + `#receipt` [D6, D7, T13] | **KEEP** (REUSE) | Relocation; claim rules apply ("GenAI Evaluation" is gated). | WB (p. 3): "Product capabilities, receipts/evidence, screenshots or existing proof." | `sections/vibe-test/capabilities.html` | [P2] images are generated at runtime (`blob:` URLs), so files must be re-exported (CAP, map). | OQ-12 label "Capabilities"; OQ-14 samples labelled; OQ-15 |
| V6 | **Who it is for** ← `#who` [D8, T14] | **MODIFY** (EDIT) | Growth-stage product and engineering teams; approved segmentation. | WB (p. 3): "Growth-stage product and engineering teams; align to approved segmentation." | `sections/vibe-test/who-it-is-for.html` | Current audiences (solo developers, vibe coders, early startups) conflict with the ICP (Doc Analyst). | OQ-23 the approved segments |
| V7 | **WE WILL connection** [T15] | **NEW** | Make the endorsed-product relationship explicit; path to broader quality support; CTA "Discuss a Quality Requirement". | WB (p. 3): "Make the endorsed-product relationship explicit and provide a path to broader quality support." | `sections/vibe-test/we-will-connection.html` | — | OQ-24 approved SA sentences |
| V8 | **Conversion** ← final CTA [D9, T16] | **MODIFY** (EDIT) | Replace the demo language with the guided proof-of-value motion; CTA "Run a Guided Vibe Test". | WB (p. 3): "Replace generic demo language with the agreed guided proof-of-value motion." | `sections/vibe-test/conversion.html` | Today it's a `mailto:` "Book a Demo" (CAP). | OQ-31 scope without prices |
| V9 | VT header, footer, marquee band [D1, D10, D3] | **REPLACE** by the global chrome; marquee **UNMAPPED** → kept with the hero | The page sits inside the wewill.tech shell. | WB (p. 1): "Dedicated product page within wewill.tech." | global partials (G1, G2) | — | OQ-03 |

## Solutions (`/solutions/`, new)

| # | Section | Verdict | Required changes | Doc quote | Affected files | Audit issues | Open questions → default |
|---|---|---|---|---|---|---|---|
| S1 | **Page introduction** [T17] | **NEW** | Frame the page around buyer problems, not a services catalogue. | WB (p. 3): "Frame the page around buyer problems, not an internal services catalogue." | new `solutions/index.njk`, `sections/solutions/intro.html` | — | OQ-19 |
| S2 | **1. Release verification** [T18] | **NEW** | CTA "Run a Guided Vibe Test". | WB (p. 3): "Frequent releases; Vibe Test on critical journeys; faster evidence-based cycles." | `sections/solutions/release-verification.html` | — | OQ-19; OQ-18 |
| S3 | **2. AI-assisted development** [T19] | **NEW** | CTA "Run a Guided Vibe Test". | WB (p. 3): "Development output exceeds QA capacity; verification must keep pace." | `sections/solutions/ai-assisted-development.html` | — | OQ-19; OQ-18 |
| S4 | **3. AI Feature Evaluation** [T20] | **NEW**, claims gated | CTAs "Discuss / Run Guided Vibe Test"; no differentiation or IP claim until the framework is documented. | WB (p. 3): "AI-feature launch; WE WILL approach executed through Vibe Test; evidence against risk criteria." | `sections/solutions/ai-feature-evaluation.html` | — | OQ-15 buyer problem only; OQ-07 two buttons |
| S5 | **4. Release decision** [T21] | **NEW** | CTA "Discuss a Quality Requirement". | WB (p. 3): "High-impact launch; BCQ Expert Services + test evidence for accountable go/no-go advice." | `sections/solutions/release-decision.html` | — | OQ-19 |
| S6 | **5. Lean-team quality** [T22] | **NEW** | CTA "Discuss a Quality Requirement". | WB (p. 3): "Limited QA leadership/capacity; Vibe Test + Managed Quality Care." | `sections/solutions/lean-team-quality.html` | — | OQ-19 |
| S7 | **Methodology / supporting capabilities** ← `#services`, BCQ card, AI-Era "What We Deliver" [T23] | **MODIFY** (EDIT), relocated | Only material that supports the five buyer problems. | WB (p. 4): "…only where it supports the five buyer problems." | `sections/solutions/methodology.html` (from `sections/home/services.html`, `pages/ai-era-quality-services.html` 723–877) | AI-Era source uses emoji icons and its own palette (map). | OQ-25 one block; OQ-12 BCQ names |
| S8 | **Proof** ← testimonials [T24] | **MODIFY** (EDIT), relocated | Testimonials beside the most relevant buyer problem, where possible. | WB (p. 4): "Place relevant testimonials/evidence beside the most relevant buyer problem where possible." | inside the S2–S6 partials | — | OQ-18 only where it fits |

## Resources (`/resources/`, new — blog stays at `/blog/`)

| # | Section | Verdict | Required changes | Doc quote | Affected files | Audit issues | Open questions → default |
|---|---|---|---|---|---|---|---|
| R1 | **Blog / insights** ← `/blog/`, 2 posts, knowledge cards [C12–C14, T25] | **KEEP** (REUSE), relocated | Dedicated resource area; CTA "Read". | WB (p. 4): "Retain the existing blog / knowledge content in a dedicated resource area." | new `resources/index.njk`; `pages/blog*.html`; `layout.css` 326–598 | [P2] both "original article" links → 404 (CAP). Search and sort need the server (map). The two cover images are the same file (map). | OQ-33 remove 404 links; OQ-34 |
| R2 | **Background methodology** ← `#quality-canvas`, Triad post [T26] | **MODIFY** (EDIT), conditional | Only if still useful and coherent; otherwise omit. | WB (p. 4): "Quality Canvas and Triad Framework may sit here only if still useful and coherent; otherwise omit." | `sections/resources/methodology.html` (from `sections/home/quality-canvas.html`) | see H13 | OQ-28 keep for now |

## About (`/about/`, new)

| # | Section | Verdict | Required changes | Doc quote | Affected files | Audit issues | Open questions → default |
|---|---|---|---|---|---|---|---|
| AB1 | **Company story** [T27] | **MODIFY** (EDIT), no current source | Short background + current Agentic Software Quality positioning. | WB (p. 4): "Short company background and current Agentic Software Quality positioning." | new `about/index.njk`, `sections/about/story.html` | — | OQ-26 approved positioning sentences + founder interview link |
| AB2 | **Team** ← `#team` [B10, T28] | **KEEP** (REUSE), relocated | Move from Home. | WB (p. 4): "Move the existing team content from the long homepage into a dedicated company context." | `sections/about/team.html` (from `sections/home/team.html`) | see H16 | — |
| AB3 | **Quality philosophy** ← `#why-we-will` [T29] | **MODIFY** (EDIT) | Concise; no duplication of Solutions. | WB (p. 4): "Concise explanation of how WE WILL approach quality; avoid duplicating Solutions." | `sections/about/philosophy.html` | see H11 | OQ-27 |
| AB4 | **Credibility** ← `#clients`, testimonials [T30] | **KEEP** (REUSE), selection | Selected clients/proof; not the full Home stack; CTA "Talk to Us". | WB (p. 4): "Selected clients / proof where useful, without repeating the full homepage proof stack." | `sections/about/credibility.html` | see H2, H6 | OQ-17; OQ-35 |

## Other current pages

| # | Section | Verdict | Required changes | Doc quote | Affected files | Audit issues | Open questions → default |
|---|---|---|---|---|---|---|---|
| P1 | **11 one-section pages** (`/genai-based-systems/` … `/knowledge/`) [C1] | **UNMAPPED** → redirect | Default: redirect each to its new home; `/contact/` stays. | — (no mention) | `src/<id>/index.njk` ×11 | [P2] no `<h1>` on any of them; `/success-stories/` CTA → `#contact`, which is missing on that page (map). They duplicate Home content (CAP). | OQ-05 |
| P2 | **`/contact/`** [C1, B15] | **MODIFY** (becomes the contact page) | "Contact / Talk to Us" target; form gains the request type for the two CTAs. | WB (p. 6): "About · Contact / Talk to Us" | `contact/index.njk`; `sections/home/contact.html` | see H8, G4 (Arabic overflow is on this page too) | OQ-06; OQ-10 |
| P3 | **`/ai-era-quality-services/`** (8 sections) [C2–C11] | **UNMAPPED** → unchanged, unlinked | Its "What We Deliver" feeds S7. | — (no mention) | `ai-era-quality-services/index.njk`; `pages/ai-era-quality-services.html` | [P3] its own inline palette and Inter headings; h4 directly under h2 (map). | OQ-04 |
| P4 | **`/business-care-quality`** (404 link target) [C15] | **UNMAPPED** → fix the link | Point the card to where BCQ is explained. | SA (p. 2): "The website and sales narrative need to clarify this architecture." | `sections/home/knowledge.html` | [P1] 404 (CAP) | OQ-33 |

## Totals

| Verdict | Rows |
|---|---|
| KEEP | 9 — H7, V1–V5, R1, AB2, AB4 |
| MODIFY | 15 — G2, H1–H3, H5, H6, H8, V6, V8, S7, S8, R2, AB1, AB3, P2 (G1's header shell is also modified; G1 is counted under REPLACE) |
| REPLACE | 2 — G1 (menu items), V9 (Vibe Test chrome) |
| NEW | 10 — G3, G6, H4, V7, S1–S6 |
| REMOVE (from Home) | 4 — H11, H12, H13, H16 (content relocated) |
| UNMAPPED → default | 9 — G4, G5, H9, H10, H14, H15, P1, P3, P4 |
| **Total** | **49 rows** |
