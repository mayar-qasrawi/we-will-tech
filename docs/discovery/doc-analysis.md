# Doc analysis — current site vs. approved strategy

Prepared 2026-09-28 by the Doc Analyst. Read-only analysis: no source file, strategy document or current-site record was changed. This file maps every current section of wewill.tech (and the current Vibe Test page) to the target structure in the approved documents, and every target block back to its current source. It decides nothing that the documents leave open; those points are listed as open questions (Section 6).

## 1. Method

### 1.1 Sources read

| Abbrev. | File | What was read |
|---|---|---|
| **WB** | `docs/strategy/website-brief.md` | Complete: guardrails, §I architecture, §II ICP journey, every row of the §III block table (30 rows), §IV CTA framework, §5 SEO seed keywords (10 rows), navigation recommendation, footer table (6 rows). |
| **SA** | `docs/strategy/strategic-alignment-2.0.md` | Complete: cover, Executive Summary, §I–§VI, both transcribed diagrams, every table row, §"I. Phase 2 Implementation Priorities". |
| — | `docs/strategy/README.md` | Conversion notes; confirms the documents use only EDIT / NEW / REUSE. |
| **CS** | `docs/current-site/sitemap.md`, `docs/current-site/README.md` | Page inventory, Home section order, navigation, relationships, link table, 11 capture problems. |
| **CS** | `pages/home.md`, `pages/_global-chrome.md` | Header, 14 Home sections, chat widget, footer. |
| **CS** | `pages/ai-era-quality-services.md`, `pages/blog.md`, `pages/blog--when-software-quality-becomes-a-business-decision.md`, `pages/blog--the-triad-quality-framework.md`, `pages/business-care-quality-404.md`, `pages/vibe-test-external.md` | Every region of each page. |
| **CS** | The 11 standalone pages (`pages/genai-based-systems.md` … `pages/contact.md`) | Checked each: all 11 carry the note that the section's "text content is **identical**" to the Home section with the same id. |
| **CS** | `pages/ar/home.md`, `pages/ar/ai-era-quality-services.md`, `pages/ar/vibe-test-external.md` | Structure and which strings stay untranslated in Arabic mode. |
| — | `docs/current-site/raw/html/*.html`, `raw/assets/site.js` (search only) | Checked for analytics/cookie scripts and for the contact-form and chat-widget destinations. |

### 1.2 Citation and quotation conventions

- Location format: `WB §III Home › Hero (p. 2)`, `SA §VI (p. 6)`, `CS home.md #hero`. "p. N" is the PDF page from the `<!-- p. N -->` markers. For WB §III rows: Home Hero → Buyer problems / WE WILL expert layer are on p. 2; Home Selected proof → Solutions 5. Lean-team quality are on p. 3; Solutions Methodology → About are on p. 4.
- Quotes are exact copies from the Markdown files. Only these marks are dropped: Markdown emphasis (`**`, `*`), `<br>` and `<mark>` tags (the one `<mark>` highlights "Run a Guided Vibe Test" in the WB navigation line; it is noted as "highlighted"). Pipe characters inside table cells are escaped as `\|` so the tables render; the rendered text is exact. Where a quote is shortened, the omission is shown as `[…]`.
- Curly vs straight apostrophes are kept as in the source (WB writes "WE WILL’s proposition"; SA writes "WE WILL's").

### 1.3 Vocabulary mapping

The documents use only **EDIT**, **NEW** and **REUSE** (WB §III "Action" column), organised by the target pages. Mapping used here (the brief's own Action is always shown next to the verdict):

| Brief Action / situation | Verdict | Rule applied in this file |
|---|---|---|
| REUSE | **KEEP** | Content retained; relocation to another page/position is noted. |
| EDIT | **MODIFY** | Block keeps its purpose and at least part of its current content or structure carries over (copy, CTA, order, length or position changes). |
| EDIT | **REPLACE** | Slot/purpose kept, but the current content is swapped out for different content. Used only where explained in the row. |
| NEW | **NEW** | No current source exists. |
| Documents direct content away from its current place | **REMOVE** (old location) + KEEP/MODIFY (destination) | Only where the text says so (e.g. team content "from the long homepage"). |
| Not mentioned by either document | **UNMAPPED** | Never guessed as REMOVE; an open question is raised. |

"Mapping basis" wording used in the tables:

- **Direct** — a document names or describes the current content (e.g. "existing team content", "current repetitive testimonial treatment", "existing Business Care Quality, testing, automation, UX, security-aware testing and consulting material").
- **Inferred** — an EDIT/REUSE block implies an existing source and there is exactly one obvious candidate (e.g. Home Hero ← current `#hero`).
- **Candidate** — several current sections could be the source; recorded as an open question, not resolved.

"Required changes" list only what the documents require. Defects observed on the current site (404 links, missing `alt`, broken logos, RTL overflow) are recorded as notes or open questions, because the documents do not mention them.

### 1.4 Verdict counts

**Table A — current elements (44 rows; one primary verdict per row):**

| Verdict | Count | Rows |
|---|---|---|
| KEEP | 9 | B13 `#knowledge`, C12 blog index, C13–C14 two blog posts, D2 VT hero, D4 problem, D5 how it works, D6 services, D7 receipt |
| MODIFY | 11 | A4 footer, B1 `#hero`, B2 `#vibe-test`, B5 `#why-we-will`, B6 `#services`, B11 `#success-stories`, B12 `#clients`, B14 `#contact`, C5 AI-Era "What We Deliver", D8 VT who it's for, D9 VT final CTA |
| REPLACE | 3 | A1 header navigation menu, D1 VT header (inferred), D10 VT footer (inferred) |
| REMOVE (at Home) | 2 | B7 `#quality-canvas` (→ MODIFY at Resources, conditional), B10 `#team` (→ KEEP at About) |
| NEW | 0 | (NEW items exist only in the target — see Table B) |
| UNMAPPED | 19 | A2 EN/AR switch, A3 chat widget, B3 `#ai-era-quality-services-promo`, B4 `#genai-based-systems`, B8 `#impact`, B9 `#how-we-work`, B15 contact form, C1 11 standalone pages, C2 AI-Era page as a whole and C3–C4, C6–C11 (8 of its regions), C15 `/business-care-quality` 404, D3 VT marquee band |

**Table B — target rows (45):**

| Group | KEEP | MODIFY | NEW | REPLACE |
|---|---|---|---|---|
| WB §III blocks (30: REUSE 9, EDIT 13, NEW 8) | 9 | 13 | 8 | 0 |
| Navigation menu items (6) | 1 | 1 | 4 | 0 |
| Footer columns (6) | 0 | 1 | 5 | 0 |
| §IV CTAs (3) | 0 | 0 | 3 | 0 |
| **Total** | **10** | **15** | **20** | **0** |

Four blocks have no confirmed current source: three EDIT → MODIFY blocks — Home "WE WILL expert layer" (OQ-21), About "Company story" (OQ-26; no current source at all), About "Quality philosophy" (OQ-27) — and one REUSE → KEEP block, Vibe Test "What it does" (OQ-22). Home "Final conversion" becomes REPLACE if the contact form leaves Home (OQ-09).

## 2. Table A — Current site → target

One row per current element. "Verdict" shows the mapped verdict, the brief's Action in brackets and the mapping basis. OQ-nn = Section 6. Current copy is quoted from the CS files named in each row.

### 2.1 Global chrome (wewill.tech)

| # | Current element | Verdict (brief Action) | Destination (target page › block) | Required changes (from the documents) | Supporting quote(s) | Open questions |
|---|---|---|---|---|---|---|
| A1 | **Global header / navigation** (every wewill.tech page; CS `_global-chrome.md` "Header"): logo "WE WILL" → `/` · Home · AI-Era Quality · Why WE WILL · Quality Canvas · How We Work · Contact · Blog · EN \| AR · "Menu" (mobile). Items are Home anchors (`#hero` … `#contact`) or `/#…` on other pages; no link to Vibe Test (CS `sitemap.md` "Navigation"). | **REPLACE** the menu items; header shell (logo, language switch, mobile menu) **MODIFY**. (No §III Action — WB "Navigation menu recommendation", p. 5.) Basis: Direct. | Global header, all pages. | Menu becomes, in this order: Home, Vibe Test, Solutions, Resources, About, and "Run a Guided Vibe Test" (highlighted in the source, i.e. a CTA). "Run a Guided Vibe Test" sits in the top navigation. Current items AI-Era Quality, Why WE WILL, Quality Canvas, How We Work and Contact are not in the recommended menu; "Blog" is superseded by "Resources". | WB nav (p. 5): "Home \| Vibe Test \| Solutions \| Resources \| About \| Run a Guided Vibe Test" (last item highlighted).<br>WB §IV Run a Guided Vibe Test › Recommended placement (p. 4): "Top navigation, Home hero/final section, Vibe Test page, relevant Solutions use cases."<br>WB guardrails (p. 1): "WE WILL Technology remains the master brand. Vibe Test is the lead product under the same website and domain." | OQ-06, OQ-10, OQ-11, OQ-36 |
| A2 | **EN/AR language switch** (header buttons "EN" / "AR"; Arabic exists for Home, the 11 standalone pages and AI-Era Quality Services; blog is English only; the Vibe Test page has its own switch — CS `sitemap.md` "Platform"). | **UNMAPPED** (not mentioned). | — | None stated. | The only mention of Arabic in either document concerns keywords, not the site language — WB §5 row "software testing Saudi Arabia / QA services Saudi Arabia" › Audit note (p. 5): "Validate KSA search volumes and Arabic/English variants."<br>Observed: AR mode overflows sideways on Home and `/contact/` (CS `sitemap.md` problem 7); in AR the One Studio, MICEtribe and Rasel testimonials and the Vibe Test verdict card stay English (CS `ar/home.md` `#success-stories`, `#vibe-test`). | OQ-36 |
| A3 | **Floating chat widget** (Home and `/contact/` only; CS `_global-chrome.md`, region "Other content (outside header/sections/footer)", `div.chat-widget`): "Chat with WE WILL", "Send us a quick message.", message box, "💬 WhatsApp", "✉ Email". Sends via `wa.me` or `mailto:` (CS `raw/assets/site.js`). | **UNMAPPED** (not mentioned). | — | None stated. | No mention. Context — the CTA framework lists three CTA types only, WB §IV (p. 4): "Run a Guided Vibe Test", "Discuss a Business Care Quality Requirement", "Explore Vibe Test / Explore Solutions".<br>Observed: the WhatsApp phone parameter contains a space (CS `sitemap.md` problem 9). | OQ-39 |
| A4 | **Global footer** (CS `_global-chrome.md` "Footer"): logo "WE WILL"; "Reduce Time, Reduce Cost & Be Confident"; "© 2023 WE WILL"; "All rights reserved."; LinkedIn · Facebook · WhatsApp · Instagram. | **MODIFY** (no §III Action — WB "Footer Navigation", pp. 5–6). Basis: Direct. LinkedIn and the copyright line carry over; the rest is added. | Global footer, all pages. | Six columns: Product & Solutions; Company; Resources; Get Started; Legal & Social; Brand / Bottom Bar (exact links in Table B rows F1–F6). Not listed in the target: the tagline, Facebook, WhatsApp, Instagram. | WB footer (p. 6): Product & Solutions "Vibe Test · Solutions"; Company "About · Contact / Talk to Us"; Resources "Insights / Blog · Methodology resources only if retained"; Get Started "Run a Guided Vibe Test · Discuss a Business Care Quality Requirement"; Legal & Social "Privacy Policy · Terms of Use · Cookie Policy if applicable · LinkedIn"; Brand / Bottom Bar "Vibe Test by WE WILL Technology · Copyright · company/legal information". | OQ-11, OQ-28, OQ-37, OQ-38 |

### 2.2 Home sections (CS `home.md`, in page order)

| # | Current element | Verdict (brief Action) | Destination (target page › block) | Required changes (from the documents) | Supporting quote(s) | Open questions |
|---|---|---|---|---|---|---|
| B1 | **`#hero`** — eyebrow "Software Quality • Business-Care • AI-Aware"; H1 "We don’t just test software. We protect product decisions."; P "Quality is no longer a checklist. It’s a strategic layer that protects your idea, reduces release risks, and gives you decision clarity beyond traditional QA."; CTAs "Book a Clarity Session" → `#contact`, "Explore Services" → `#services`; visual "How a release earns its GO" (Risks mapped / Journeys tested / Evidence signed / GO defended). | **MODIFY** (EDIT). Basis: Inferred. MODIFY, not REPLACE: slot and purpose (company proposition + primary action) are unchanged and the hero structure can carry over; the headline, subheadline and CTAs change. It becomes REPLACE if the whole composition, including the "GO" visual, is discarded (OQ-20). | Home › Hero | Replace the headline/sub with the approved company-level proposition; make the "release-confidence / safe-to-ship outcome and target buyer" clear; primary CTA "Run a Guided Vibe Test" (replaces "Book a Clarity Session"). "Explore Services" is not a CTA in the framework. | WB §III Home › Hero (p. 2): "Approved company-level proposition; clarify the release-confidence / safe-to-ship outcome and target buyer." CTA: "Run a Guided Vibe Test".<br>SA §VI (p. 6): "PRIMARY HEADLINE: Know what is safe to ship - at the speed you build." · "Supporting subheadline: Vibe Test verifies critical journeys using WE WILL's quality methodology; BCQ Expert Services add human judgment where risk requires it."<br>WB §II 1. Land (p. 2): "Understand quickly that WE WILL helps product teams determine what is safe to ship." | OQ-06, OQ-07, OQ-12, OQ-20, OQ-30 |
| B2 | **`#vibe-test`** — H2 "Meet Vibe Test — autonomous QA that hands you the receipts."; P "An autonomous QA team as a service: agents sweep, test, and fix your product across web, mobile, and GenAI — then prove every verdict with a machine-checked receipt. Built for teams shipping faster than they can test."; CTAs "Start a Vibe Test" → `https://vibe-test.oneapp.dev`, "Talk to WE WILL" → `/contact/`; verdict card ("● PASS", "Release readiness", "3 blockers cleared · 0 open", "Receipt #VT-7F3A9C · machine-checked", "Confidence" "94%"); "Watch Vibe Test in action" (YouTube); cards "Sweep & prove", "Test, fix & verify", "Receipts you can trust". | **MODIFY** (EDIT). Basis: Inferred (the only Vibe Test section on Home). | Home › Vibe Test introduction | Present Vibe Test as the lead product under WE WILL Technology; route to the dedicated product page inside wewill.tech with "Explore Vibe Test" (replaces the external "Start a Vibe Test"); describe Vibe Test as an Agentic QA platform. | WB §III Home › Vibe Test introduction (p. 2): "Introduce Vibe Test as the lead product under WE WILL Technology and route to the dedicated product page." CTA: "Explore Vibe Test".<br>WB §I Vibe Test (p. 1): "Dedicated product page within wewill.tech."<br>SA §III Recommended market category (p. 2): "Describe Vibe Test as an Agentic QA platform."<br>WB §IV (p. 4): "Explore Vibe Test / Explore Solutions" — "Navigation/routing CTAs, not primary conversion actions." — "Home sections only." | OQ-03, OQ-11, OQ-13, OQ-14 |
| B3 | **`#ai-era-quality-services-promo`** — eyebrow "AI-Era Quality Services"; H2 "AI helps teams build faster. WE WILL helps them release with confidence."; P "A dedicated offer for fast-moving product teams: verify critical user journeys, GenAI features, release risks, and business-impacting quality issues before they reach users."; link "Explore the offer" → `/ai-era-quality-services/`; six chips (e.g. "GenAI feature evaluation", "Role-aware security testing"). Target of header item "AI-Era Quality". | **UNMAPPED** (not mentioned; not in the §III Home list). Candidate source for Home › WE WILL expert layer. | — (candidate: Home › WE WILL expert layer) | None stated. | No mention of "AI-Era Quality Services". Context — WB §III Home › WE WILL expert layer (p. 2): "Briefly explain the combination of Vibe Test + BCQ methodology / expert judgment." | OQ-02, OQ-04, OQ-21 |
| B4 | **`#genai-based-systems`** — eyebrow "GenAI-based Systems"; H2 "Our Methodology."; H3 "GenAI Feature Quality & Decision Governance"; P "A decision-driven approach to evaluate GenAI features: Contracts, Coverage Sets, and Behavioral Evaluation."; "Explore (EN/AR)" → `/contact/`; "What you get": Contracts "Must/never rules", Coverage Sets "High-pressure cases", Evaluation "Pass / Weak / Violation". | **UNMAPPED** (not mentioned). Candidate content for Solutions › 3. AI Feature Evaluation or Resources › Background methodology — gated by the AI Feature Evaluation rule. | — (candidates above) | None stated. If reused, the AI Feature Evaluation claim rules apply (Section 4.9). | SA §III Meaningful differentiators (p. 3): "Potential AI Feature Evaluation differentiation. Publish this claim only after WE WILL documents its framework, criteria, thresholds, outputs and customer evidence; do not claim protected IP without substantiation."<br>WB §I (p. 1): "Business Care Quality (BCQ) remains the methodology/expert-service layer." (the current H2 "Our Methodology." labels a GenAI evaluation approach instead). | OQ-02, OQ-12, OQ-15 |
| B5 | **`#why-we-will`** — eyebrow "Why WE WILL"; H2 "Quality That Thinks With You, Not After You."; P "We don’t just execute test cases. We lead quality as a strategic layer that protects your roadmap, your users, and your future releases."; H3 cards "Business-Care Quality", "Risk-Driven Thinking", "Strategic Partnership". Target of header item "Why WE WILL". | **MODIFY** (EDIT) for the Business-Care Quality material — Basis: Direct ("existing Business Care Quality […] material"). The rest of the section is a Candidate source for Home › WE WILL expert layer or About › Quality philosophy. Not in the §III Home list. | Solutions › Methodology / supporting capabilities (BCQ material); candidates: Home › WE WILL expert layer, About › Quality philosophy | Use only where it supports the five buyer problems. The documents name the methodology "Business Care Quality (BCQ)" (current: "Business-Care Quality"). | WB §III Solutions › Methodology / supporting capabilities (p. 4): "Use existing Business Care Quality, testing, automation, UX, security-aware testing and consulting material only where it supports the five buyer problems."<br>WB §III About › Quality philosophy (p. 4): "Concise explanation of how WE WILL approach quality; avoid duplicating Solutions." | OQ-02, OQ-12, OQ-21, OQ-25, OQ-27 |
| B6 | **`#services`** — eyebrow "What We Do"; H2 "We Deliver Confidence, Not Just Reports."; P "Four service pillars designed to align quality with business outcomes across your product lifecycle."; "Quality as a Service (QaaS)", "Quality Canvas", "AI Quality & Behavioral Transparency", "Risk Prevention for Releases". Target of the hero link "Explore Services". | **MODIFY** (EDIT). Basis: Direct (testing / consulting material). Relocated; not in the §III Home list. | Solutions › Methodology / supporting capabilities | Solutions is framed around buyer problems, not a services catalogue; keep only items that support the five buyer problems; the "Quality Canvas" item is subject to the Resources condition; the QaaS label is subject to the SEO caution. The approved expert-service names differ from the current pillars (OQ-12). | WB §III Solutions › Page introduction (p. 3): "Frame the page around buyer problems, not an internal services catalogue."<br>WB §III Solutions › Methodology / supporting capabilities (p. 4): "Use existing Business Care Quality, testing, automation, UX, security-aware testing and consulting material only where it supports the five buyer problems."<br>WB §5 "QA as a service / managed QA services" › Audit note (p. 5): "Audit relevance against BCQ Expert Services; avoid reverting to a generic outsourced-QA position."<br>SA §V BCQ Expert Services (p. 5): "Quality Diagnostic: fixed-fee review of product and release risks. Release Decision: fixed-fee review of evidence and go / no-go criteria. Managed Quality Care: monthly expert oversight, with platform usage separately scoped." | OQ-02, OQ-12, OQ-21, OQ-25, OQ-28 |
| B7 | **`#quality-canvas`** — H2 "Your Product’s Quality on One Clear Canvas."; four bullets; "Generate Your Quality Canvas" → ChatGPT GPT; "Know More" → LinkedIn article; "Canvas Snapshot" (Key Features / Risks / Quality Scenarios / Future Improvements). Target of header item "Quality Canvas". | **REMOVE** at Home + **MODIFY** (EDIT) at Resources — conditional ("otherwise omit"). Basis: Direct. | Resources › Background methodology (only if retained) | Include only if "still useful and coherent"; otherwise omit. The footer Resources column lists "Methodology resources only if retained". | WB §III Resources › Background methodology (p. 4): "Quality Canvas and Triad Framework may sit here only if still useful and coherent; otherwise omit."<br>WB §I Resources (p. 1): "House the existing blog/insights and, only where useful, background methodology such as Quality Canvas / Triad Framework."<br>WB footer › Resources (p. 6): "Insights / Blog · Methodology resources only if retained" | OQ-28, OQ-34 |
| B8 | **`#impact`** — H2 "Impact That Speaks for Itself."; P "Quality is not how many tests are executed, but how much risk is reduced and how clearly decisions can be made."; "↓ 32%" "Launch Risks" — "Reduced critical issues before release through proactive risk reviews and Quality Canvas planning."; "↑ 65%" "Decision Clarity" — "Increased alignment between product, engineering, and leadership on what “ready to ship” truly means."; "2×" "Speed to MVP Validation" — "Faster market experiments with quality calibrated to the MVP stage rather than perfection." | **UNMAPPED** (not mentioned). Candidate "evidence points" for Home › Selected proof — gated by the approved-claims requirement. | — (candidate: Home › Selected proof) | None stated. | WB §III Home › Selected proof (p. 3): "2–3 strongest testimonials / evidence points; remove the current repetitive testimonial treatment."<br>SA "I. Phase 2 Implementation Priorities" (p. 7): "WE WILL must supply product evidence, approved claims and the AI Feature Evaluation framework before related differentiation is used externally." | OQ-02, OQ-16, OQ-28 |
| B9 | **`#how-we-work`** — H2 "A Quality Process Built Around Decisions."; P "We integrate into your team, map risks, design quality strategy, and guide you continuously — from idea to stable growth."; steps "Discover & Align", "Map Quality" ("Using the Quality Canvas and Triad Quality Framework, we map key features, realistic risks, and quality scenarios."), "Execute & Monitor", "Improve Continuously". Target of header item "How We Work". | **UNMAPPED** (not mentioned). Candidate source for About › Quality philosophy. | — (candidate: About › Quality philosophy) | None stated. Step 02 depends on the Quality Canvas / Triad decision. | WB §III About › Quality philosophy (p. 4): "Concise explanation of how WE WILL approach quality; avoid duplicating Solutions."<br>WB §III Resources › Background methodology (p. 4): "Quality Canvas and Triad Framework may sit here only if still useful and coherent; otherwise omit." | OQ-02, OQ-27, OQ-28 |
| B10 | **`#team`** — H2 "The Team Behind WE WILL Quality."; P "A multidisciplinary team of quality leaders, testers, strategists, and AI-aware practitioners working as one unit to protect your product."; carousel of 13 people (Ibrahim Alsharif … Omar Alsharif). | **REMOVE** at Home + **KEEP** (REUSE) at About. Basis: Direct. | About › Team | Move the existing team content off Home into About. | WB §III About › Team (p. 4): "Move the existing team content from the long homepage into a dedicated company context."<br>WB §I About (p. 1): "Concise company story, team, quality philosophy and selected credibility elements."<br>Observed (not addressed by the documents): the 13 photos have no `alt` (CS `sitemap.md` problem 5). | OQ-05 |
| B11 | **`#success-stories`** — H2 "Inspired by WE WILL Clients’ Success."; P "Real products, real challenges, and measurable stability gained by treating quality as a strategic partner — not a late testing phase."; two auto-scrolling rows, each duplicated for the loop; 7 distinct quotes from 6 clients (One Studio, MICEtribe ×2, iStoria, SellEnvo, Rasel, Darent); One Studio's quote appears twice in row 1 (CS `sitemap.md` problem 6); "Ready for your own success story?" + "Talk to WE WILL" → `#contact`. | **MODIFY** (EDIT). Basis: Direct ("the current repetitive testimonial treatment"). | Home › Selected proof; also Solutions › Proof (EDIT) and About › Credibility (REUSE) | Home: 2–3 strongest testimonials / evidence points only; remove the repetitive (duplicated marquee) treatment. Solutions: place relevant testimonials beside the most relevant buyer problem where possible. About: selected proof without repeating the full Home proof stack. | WB §III Home › Selected proof (p. 3): "2–3 strongest testimonials / evidence points; remove the current repetitive testimonial treatment."<br>WB §III Solutions › Proof (p. 4): "Place relevant testimonials/evidence beside the most relevant buyer problem where possible."<br>WB §III About › Credibility (p. 4): "Selected clients / proof where useful, without repeating the full homepage proof stack."<br>WB §II 4. Trust (p. 2): "See client logos, selected testimonials, evidence and the WE WILL expert layer."<br>Observed: MICEtribe's first quote ("improved our technical team's performance, reduced system errors, and significantly enhanced the user experience") and Rasel's ("improved the performance of the technical team, reduced errors in the system, and significantly enhanced the user experience") are near-identical; no testimonial mentions Vibe Test. | OQ-17, OQ-18 |
| B12 | **`#clients`** — H2 "Products That Trusted WE WILL Quality."; P "From startups to growing products, these teams trusted WE WILL to protect their releases and product decisions."; 12 logos (One Studio, ID8 Media, Darent, IStoria, Masterteam, MICEtribe, SellEnvo, Famcare, Rasel, Oyoun Media, I Plan 2, In2World); 13th of 14 sections, near the bottom of Home. | **MODIFY** (EDIT). Basis: Direct (client logos). Moves up the page; also feeds About. | Home › Social proof strip (high on the page); also About › Credibility (REUSE) | Compact logo strip or carousel placed high on Home; About shows selected clients where useful. | WB §III Home › Social proof strip (p. 2): "Compact client-logo strip/carousel high on the page for immediate credibility."<br>WB §III About › Credibility (p. 4): "Selected clients / proof where useful, without repeating the full homepage proof stack."<br>Observed: Oyoun Media and In2World logos return 404; One Studio's logo has alt "iStoria logo" and SellEnvo's has alt "Inspire" (CS `sitemap.md` problems 3–4). | OQ-35 |
| B13 | **`#knowledge`** — H2 "Deep Dive into Our Knowledge."; P "Explore the thinking behind WE WILL’s quality philosophy — from Business-Care Quality to our Triad Quality Framework and beyond."; cards "Business-Care Quality" → `https://wewill.tech/business-care-quality` (404), "Triad Quality Framework (TQF)" → blog post, "Interview with Our Founder" → tradeflockasia.com, "Quality Canvas" → LinkedIn post. | **KEEP** (REUSE). Basis: Direct ("existing blog / knowledge content"). Split: a subset stays on Home, the full set moves to Resources. | Home › Selected resources (a small number; CTA "View Resources") and Resources › Blog / insights (CTA "Read") | Home surfaces only "a small number" of items; the rest is retained in the dedicated resource area. The TQF and Quality Canvas cards fall under the Background-methodology condition. | WB §III Home › Selected resources (p. 3): "Surface a small number of existing blog / insight items." CTA: "View Resources".<br>WB §III Resources › Blog / insights (p. 4): "Retain the existing blog / knowledge content in a dedicated resource area." CTA: "Read".<br>Observed: the Business-Care Quality card links to a 404 (CS `sitemap.md` problem 1). | OQ-28, OQ-33, OQ-34 |
| B14 | **`#contact`** (section) — H2 "Let’s Talk About Your Product’s Quality."; P "Share a few details about your product, and we’ll get back with a tailored quality perspective — not a generic sales pitch."; contact form (B15). Last section of Home; target of header "Contact", hero "Book a Clarity Session" and "Talk to WE WILL". | **MODIFY** (EDIT). Basis: Inferred (the current closing conversion section). MODIFY because the slot keeps its purpose; its primary action changes. Becomes REPLACE if the form leaves Home (OQ-09). | Home › Final conversion | Close with the primary commercial action "Run a Guided Vibe Test" and a secondary expert-service path. | WB §III Home › Final conversion (p. 3): "Close with the primary commercial action and secondary expert-service path." CTA: "Run a Guided Vibe Test".<br>WB §IV Run a Guided Vibe Test › Recommended placement (p. 4): "Top navigation, Home hero/final section, Vibe Test page, relevant Solutions use cases."<br>WB §II 5. Convert (p. 2): "Run a Guided Vibe Test proof of value; enterprise/high-risk buyers can discuss a BCQ requirement." | OQ-06, OQ-08, OQ-09, OQ-10 |
| B15 | **Contact form** (Home `#contact` and `/contact/`): Name (required), Email (required), Company / Product, "Tell us briefly about your product and current challenges", hidden spam trap "Website (leave blank)", button "Send Message"; posts to `/contact-submit.php`. | **UNMAPPED**. The documents name a contact destination ("Contact / Talk to Us", "Talk to Us") but never a form, its fields or its submission flow. | — (candidate destination for "Contact / Talk to Us" and possibly the two conversion CTAs) | None stated. | WB footer › Company (p. 6): "About · Contact / Talk to Us".<br>WB §III About › Credibility, CTA (p. 4): "Talk to Us".<br>Context — SA §V Recommended Vibe Test packages › Guided Proof of Value › Intended customer (p. 5): "Live product or executable MVP; technical owner and payer" (qualification data; not specified as form fields).<br>Observed: the spam-trap field's `left: -10000px` causes the Arabic overflow (CS `sitemap.md` problem 7). | OQ-06, OQ-08, OQ-10, OQ-36 |

### 2.3 Other wewill.tech pages

| # | Current element | Verdict (brief Action) | Destination (target page › block) | Required changes (from the documents) | Supporting quote(s) | Open questions |
|---|---|---|---|---|---|---|
| C1 | **The 11 standalone one-section pages** — `https://wewill.tech/genai-based-systems/`, `/why-we-will/`, `/services/`, `/quality-canvas/`, `/impact/`, `/how-we-work/`, `/team/`, `/success-stories/`, `/clients/`, `/knowledge/`, `/contact/`. Each renders exactly one Home section inside the shared header/footer; text identical to Home in all 11 cases (CS `sitemap.md` "How the pages relate"); all are in `sitemap.xml`. | **UNMAPPED** (pages not mentioned). Their *content* follows the verdicts of the matching Home sections (B4–B14). | — (content: see B4–B14; `/contact/` is a candidate for the footer's "Contact / Talk to Us") | None stated. | No mention. Context — WB guardrails (p. 1): "Prioritize reuse, consolidation and relocation of existing approved material before creating net-new content."<br>WB footer › Company (p. 6): "About · Contact / Talk to Us" | OQ-05, OQ-10, OQ-40 |
| C2 | **`/ai-era-quality-services/` — page as a whole** (8 sections + mobile sticky bar; title "WE WILL — AI-Era Quality Services"; reached from Home "Explore the offer" and header item "AI-Era Quality"). | **UNMAPPED** (page not mentioned). Part of its content is covered by Solutions › Methodology (C5). | — | None stated. | No mention. Context — WB §III Solutions › Page introduction (p. 3): "Frame the page around buyer problems, not an internal services catalogue." | OQ-04 |
| C3 | AI-Era §1 **hero** — H1 "AI helps teams build faster. WE WILL helps them release with confidence."; P "For teams using AI coding tools, fast delivery cycles, or modern product workflows, WE WILL verifies critical user journeys, GenAI features, release risks, and business-impacting quality issues before they reach users."; CTAs "Book a 30-Min Discovery Call" → `/contact/#contact`, "See what we deliver"; "No commitment. We review your product, release context, and quality risks." | **UNMAPPED**. Candidate context for Solutions › 2. AI-assisted development. Its CTA is not in the CTA framework. | — (candidate: Solutions › 2) | None stated. | WB §III Solutions › 2. AI-assisted development (p. 3): "Development output exceeds QA capacity; verification must keep pace." CTA: "Run a Guided Vibe Test". | OQ-04, OQ-10, OQ-19 |
| C4 | AI-Era §2 **The Shift** — H2 "The bottleneck has moved from building to verifying."; P "AI tools, automation, and modern development workflows make it possible to build features faster than before. But faster delivery creates a new quality gap: teams can produce more changes than they can confidently review."; PM question list; "WE WILL helps product teams turn fast development into controlled, evidence-based release decisions." | **UNMAPPED**. Candidate for Solutions › 2. AI-assisted development or Vibe Test › Problem / context. Addresses PMs ("For PMs, the question is no longer only: Did the team finish the feature?"). | — (candidates above) | None stated. | SA §III High-value buyer problem (p. 3): "Software output is accelerating while manual or brittle verification struggles to keep pace. Engineering leaders need reliable evidence across critical journeys and emerging AI behaviour before deciding whether to release."<br>WB §III Vibe Test › Problem / context (p. 3): "Why manual or conventional verification does not keep pace with modern product delivery." | OQ-04, OQ-19 |
| C5 | AI-Era §3 **What We Deliver** (`#aeqs-what-we-deliver`) — H2 "What WE WILL delivers"; six cards: "Quality Strategy" (Quality Canvas + Value-Quality Map), "User Journey Testing", "GenAI Feature Evaluation", "Release Readiness Reviews" ("Clear go / no-go / release-with-risk recommendations"), "Role-Aware Security Testing", "Risk Reports for PMs", each with an "Output: …" line. | **MODIFY** (EDIT). Basis: Direct (the brief names these content types: "testing, automation, UX, security-aware testing and consulting material"). | Solutions › Methodology / supporting capabilities | Keep only items that support the five buyer problems; the GenAI Feature Evaluation card is gated by the AI Feature Evaluation rule; Quality Canvas references follow the Resources condition; naming vs BCQ Expert Services (OQ-12). | WB §III Solutions › Methodology / supporting capabilities (p. 4): "Use existing Business Care Quality, testing, automation, UX, security-aware testing and consulting material only where it supports the five buyer problems."<br>SA §V Recommended commercial hierarchy › Specialized use case (p. 4): "WE WILL-developed approach executed through Vibe Test; differentiation requires documented proof"<br>WB §III Solutions › 4. Release decision (p. 3): "High-impact launch; BCQ Expert Services + test evidence for accountable go/no-go advice." | OQ-04, OQ-12, OQ-15, OQ-25, OQ-28 |
| C6 | AI-Era §4 **The Engagement** — H2 "How we work together"; steps "Discovery Call", "Quality Scope", "Verification Sprint", "Findings & Priorities", "Release Decision Support". | **UNMAPPED** (engagement process not mentioned). | — | None stated. | Related wording only — SA §V BCQ Expert Services (p. 5): "Release Decision: fixed-fee review of evidence and go / no-go criteria." | OQ-04, OQ-12 |
| C7 | AI-Era §5 **Who We Serve** — H2 "Built for teams that move fast but cannot afford quality surprises"; "Product Managers", "Founders & Startups", "Software Studios", "SaaS & Web Platforms", "AI-Enabled Products"; "Not for you if…" (5 items, e.g. "You do not have a testable product, prototype, staging environment, or clear release scope."). | **UNMAPPED**. Its audiences differ from the approved ICP and segments. | — | None stated. | WB §II Primary ICP (p. 2): "CTOs, engineering leaders and founders in growth-stage SaaS / digital-product companies, with Saudi Arabia as the priority beachhead."<br>SA §IV SEGMENTATION RULE (p. 4): "Growth-stage companies lead direct acquisition. MVP-stage teams qualify with an executable build, defined validation need and confirmed payer. Agree payment before delivery." | OQ-04, OQ-23 |
| C8 | AI-Era §6 **Proof** — H2 "Quality work connected to real product decisions"; P "Examples of products we support across SaaS, mobile, AI-enabled platforms, and workflow systems."; eight product-type chips; "Case studies available upon request during the discovery call." | **UNMAPPED** (it lists product types, not testimonials or evidence). | — | None stated. | WB §III Solutions › Proof (p. 4): "Place relevant testimonials/evidence beside the most relevant buyer problem where possible." | OQ-04, OQ-18 |
| C9 | AI-Era §7 **FAQ** — seven questions, incl. "Do you replace our internal QA team?" → "No. WE WILL can support your QA team, add independent verification, or provide quality leadership when your internal capacity is limited." and "Can you work with staging environments?". | **UNMAPPED** (no FAQ block in the documents). | — | None stated. | Consistent message — SA Executive Summary (p. 2): "Internal QA retains product context and decision ownership."<br>Related need without a block — SA §II (p. 2): "Address international-buyer concerns with specific access and delivery-continuity safeguards." | OQ-04, OQ-32 |
| C10 | AI-Era §8 **Final CTA** — H2 "Build fast. Verify deeply. Release with confidence."; P "Share your product, release scope, or current quality concern. In a 30-minute discovery call, we will help you identify the right verification approach and the risks worth checking first."; "Book a 30-Min Discovery Call" → `/contact/#contact`; "For PMs, founders, and teams preparing for launch, release, or rapid product iteration." | **UNMAPPED**. Its CTA differs from both framework CTAs. | — | None stated. | WB §IV Discuss a Business Care Quality Requirement › Role (p. 4): "Secondary enterprise / higher-risk quality path."<br>SA §VI (p. 6): "Secondary CTA: Discuss a BCQ Expert Services requirement." | OQ-04, OQ-08, OQ-10 |
| C11 | AI-Era **mobile sticky bar** (`div.aeqs-sticky`, mobile only) — "Need release confidence?" + "Book Call" → `/contact/#contact`. | **UNMAPPED**. | — | None stated. | No mention. | OQ-04, OQ-10 |
| C12 | **Blog index** `/blog/` — H1 "Insights, quality thinking, and product lessons."; P "A curated blog from WE WILL covering software quality, release confidence, and GenAI-aware product work."; search field, date sort, two article cards ("Read article"). English only. | **KEEP** (REUSE). Basis: Direct. Header "Blog" becomes the "Resources" area. | Resources › Blog / insights | Retain in a dedicated resource area; CTA "Read". | WB §III Resources › Blog / insights (p. 4): "Retain the existing blog / knowledge content in a dedicated resource area." CTA: "Read".<br>WB §I Resources (p. 1): "House the existing blog/insights and, only where useful, background methodology such as Quality Canvas / Triad Framework." | OQ-34, OQ-36 |
| C13 | **Blog post** "When software quality becomes a business decision" (Jun 22, 2024) — H2s "Quality changes the cost curve", "Confidence is the real output", "Put quality where decisions happen"; "Read the original WE WILL article" → 404. | **KEEP** (REUSE). Basis: Direct. | Resources › Blog / insights; candidate item for Home › Selected resources | Retain; may be surfaced on Home as one of "a small number" of items. | WB §III Resources › Blog / insights (p. 4): "Retain the existing blog / knowledge content in a dedicated resource area."<br>WB §III Home › Selected resources (p. 3): "Surface a small number of existing blog / insight items."<br>Observed: the "original article" link returns 404 (CS `sitemap.md` problem 2). | OQ-33, OQ-34 |
| C14 | **Blog post** "The Triad Quality Framework" (Apr 3, 2024) — H2s "User value", "System integrity", "Business alignment", "Use the framework to shape testing"; "Read the original WE WILL article" → 404. | **KEEP** (REUSE) as a blog post. Basis: Direct. Its subject is also covered by the Background-methodology condition. | Resources › Blog / insights (and Resources › Background methodology if the Triad Framework is retained) | Retain as blog content; methodology placement "only if still useful and coherent". The documents call it "Triad Framework"; the site "Triad Quality Framework (TQF)". | WB §III Resources › Blog / insights (p. 4): "Retain the existing blog / knowledge content in a dedicated resource area."<br>WB §III Resources › Background methodology (p. 4): "Quality Canvas and Triad Framework may sit here only if still useful and coherent; otherwise omit." | OQ-12, OQ-28, OQ-33 |
| C15 | **`https://wewill.tech/business-care-quality`** — link target of the "Business-Care Quality" card on Home `#knowledge` and `/knowledge/`; returns the host's 404 page "This Page Does Not Exist". | **UNMAPPED** (the page does not exist; the documents specify no BCQ page). | — (BCQ is to be explained in Home › WE WILL expert layer and Solutions › Methodology) | None stated. | SA §II (p. 2): "BCQ links technical evidence to customer and business risk. It informs Vibe Test and is also delivered through separately scoped expert services. The website and sales narrative need to clarify this architecture." | OQ-33 |

### 2.4 Current Vibe Test page — `https://vibe-test.oneapp.dev/` (CS `vibe-test-external.md`)

Page-level direction: WB §I Vibe Test (p. 1): "Dedicated product page within wewill.tech. Explain product value, operation, evidence and the guided proof-of-value motion." The current page is a separate single-file build on another domain, with no `<title>`, meta description or `lang` attribute (CS `sitemap.md` problem 10). The brief's Vibe Test "REUSE" blocks refer to this page.

| # | Current element | Verdict (brief Action) | Destination (target page › block) | Required changes (from the documents) | Supporting quote(s) | Open questions |
|---|---|---|---|---|---|---|
| D1 | **Header** — logo "Vibe-Test. BY WE WILL TECH" → `#top`; in-page links Problem · How it works · Services · The Receipt · Who it's for; language switch ("العربية" / "EN"); "Book a Demo" → `#book`. | **REPLACE** (inferred; not a §III block). Basis: Inferred — once the page sits "within wewill.tech", the site's global header (A1) applies; the documents also cover the product lockup and the demo CTA. | Global header (A1) on the Vibe Test page; product lockup "Vibe Test by WE WILL Technology" | "Book a Demo" gives way to "Run a Guided Vibe Test" (top navigation). Product lockup per the documents: "Vibe Test by WE WILL Technology". Whether an in-page product sub-navigation stays is not stated. | WB §I Vibe Test (p. 1): "Dedicated product page within wewill.tech."<br>WB guardrails (p. 1): "Vibe Test is the lead product under the same website and domain."<br>WB §III Vibe Test › Conversion (p. 3): "Replace generic demo language with the agreed guided proof-of-value motion."<br>WB §III Vibe Test › Product hero (p. 3): "Vibe Test by WE WILL Technology; retain the current strong product proposition and product-first presentation." | OQ-03, OQ-11, OQ-36 |
| D2 | **Hero** — eyebrow "AGENTIC QA PLATFORM — MVP · INVITE-ONLY"; H1 "Tests. Fixes. Verifies. Hands you the receipts."; P "Your autonomous QA team. Connect your app or repo — expert agents run the QA a senior team would, and prove it with evidence, not claims."; CTAs "Book a Demo" → `#book`, "See how it works" → `#how`; animated "LIVE QA RUN" terminal (e.g. "▸ receipt #VT-4821 · confidence 98.7% ✓"). | **KEEP** (REUSE). Basis: Direct ("retain the current strong product proposition and product-first presentation"). Relocated into wewill.tech. | Vibe Test › Product hero | Present as "Vibe Test by WE WILL Technology"; CTA "Run a Guided Vibe Test" (replaces "Book a Demo"). | WB §III Vibe Test › Product hero (p. 3): "Vibe Test by WE WILL Technology; retain the current strong product proposition and product-first presentation." CTA: "Run a Guided Vibe Test".<br>SA §II (p. 2): "It is approaching commercial readiness, so initial adoption should be guided through bounded proofs of value."<br>Tension (see OQ-13): "Fixes" vs WB "supports fixes"; "Your autonomous QA team." vs SA "Internal QA retains product context and decision ownership."; "MVP · INVITE-ONLY" vs a public primary CTA. | OQ-03, OQ-07, OQ-11, OQ-13, OQ-14 |
| D3 | **Marquee band** (region "Other content", `aria-hidden`) — repeated "Evidence, not claims ✓", "الأدلة، لا الادعاءات ✓", "Find → Fix → Verify → Ship ↺", "Backed by receipts ✓". | **UNMAPPED** (not mentioned; could be read as part of the "product-first presentation"). | — (candidate: Vibe Test › Product hero) | None stated. | Context only — WB §III Vibe Test › Product hero (p. 3): "retain the current strong product proposition and product-first presentation" [partial quote]. | OQ-13, OQ-36 |
| D4 | **`#problem`** — "01 — THE PROBLEM"; H2 "Shipping is easy. Proving it works is not."; cards "Teams ship faster than they can QA" ("Bugs and unverified AI features reach real users before anyone catches them."), "Real QA needs expert testers" ("Functional, UX, performance, security — small teams can't staff it."), "Tools only find issues" ("Nothing closes the loop from find → fix → verify → ship."). | **KEEP** (REUSE). Basis: Inferred (one-to-one match). | Vibe Test › Problem / context | None beyond relocation. | WB §III Vibe Test › Problem / context (p. 3): "Why manual or conventional verification does not keep pace with modern product delivery." Action: REUSE. | OQ-03, OQ-23 |
| D5 | **`#how`** — "02 — HOW IT WORKS"; H2 "A closed loop. Not a checklist."; loop Discover → Fix → Verify → Ship: "Agents map your app and surface what's broken." / "They author the fix and open a reviewable PR." / "Re-tested and machine-checked into a receipt." / "Merged, deployed, and looped back for the next." | **KEEP** (REUSE) — "where accurate". Basis: Direct ("current product workflow / autonomous-agent explanation"). | Vibe Test › How it works (also a candidate source for Vibe Test › What it does) | Retain only where accurate. | WB §III Vibe Test › How it works (p. 3): "Retain the current product workflow / autonomous-agent explanation where accurate."<br>WB §III Vibe Test › What it does (p. 3): "Tests critical journeys, identifies issues, supports fixes and re-verifies changes."<br>SA §V diagram, LEAD PRODUCT (p. 4): "Verify critical journeys · Detect issues · Re-verify fixes" | OQ-13, OQ-22 |
| D6 | **`#services`** — "03 — SERVICES"; H2 "Five agents. One QA team."; "Sweep" ("A smart audit of your site from a single link."), "Journeys" ("Value · UX · performance · security, in one pass."), "Bug Testing" ("Evidence-backed re-testing with confidence scores."), "Bug Fixing" ("Autonomous fix → PR → merge → deploy → hand-off."), "GenAI Evaluation" ("Grades AI features against quality contracts."). | **KEEP** (REUSE). Basis: Inferred (product capabilities). | Vibe Test › Capabilities + evidence (capabilities part); candidate source for Vibe Test › What it does | None beyond relocation; "Bug Fixing" is subject to the accuracy check and "GenAI Evaluation" to the AI Feature Evaluation rule. The section label "Services" sits beside "BCQ Expert Services" in the new architecture (OQ-12). | WB §III Vibe Test › Capabilities + evidence (p. 3): "Product capabilities, receipts/evidence, screenshots or existing proof."<br>SA §III Meaningful differentiators (p. 3): "Potential AI Feature Evaluation differentiation. Publish this claim only after WE WILL documents its framework, criteria, thresholds, outputs and customer evidence; do not claim protected IP without substantiation." | OQ-12, OQ-13, OQ-15, OQ-22 |
| D7 | **`#receipt`** — "04 — THE RECEIPT"; H2 "Evidence, not claims."; P "Every verdict ships with a machine-checked receipt: what was tested, the result, the confidence, the timestamp. Proof you can hand to anyone."; points "QA memory that compounds", "Closes the full loop", "Adversarial verification"; sample receipt "#VT-4821", "CHECKOUT FLOW — PAYMENT", "✓ functional ......... 18/18 pass", "CONFIDENCE" "98.7%", "AGENT: BUG FIXING", "2026-07-03 14:22Z". | **KEEP** (REUSE). Basis: Direct ("receipts/evidence"). | Vibe Test › Capabilities + evidence (receipts/evidence part) | None beyond relocation. | WB §III Vibe Test › Capabilities + evidence (p. 3): "Product capabilities, receipts/evidence, screenshots or existing proof."<br>SA "I. Phase 2 Implementation Priorities" (p. 7): "WE WILL must supply product evidence, approved claims and the AI Feature Evaluation framework before related differentiation is used externally." | OQ-14 |
| D8 | **`#who`** — "05 — WHO IT'S FOR"; H2 "Built for teams without a QA team."; "Small dev teams & solo developers" ("Ship with senior-level QA you don't have to hire."), "Vibe coders & indie hackers" ("Move fast without shipping broken to users."), "Early-stage startups" ("Get real QA coverage before you can afford a team."). | **MODIFY** (EDIT). Basis: Inferred. MODIFY: the block (heading + audience cards) keeps its purpose and the brief asks to "align" it; it is REPLACE in effect if none of the three current audiences survives, since none is the approved primary segment (OQ-23). | Vibe Test › Who it is for | Target "Growth-stage product and engineering teams"; align to the approved segmentation (MVP teams only selectively, with an executable build, defined validation need and confirmed payer). | WB §III Vibe Test › Who it is for (p. 3): "Growth-stage product and engineering teams; align to approved segmentation."<br>SA §IV segments (p. 3): "Growth-stage Saudi product teams — PRIMARY; live product, releases, budget" · "Funded MVP / pre-launch — SELECTIVE; build and confirmed payer"<br>SA §IV SEGMENTATION RULE (p. 4): "Growth-stage companies lead direct acquisition. MVP-stage teams qualify with an executable build, defined validation need and confirmed payer. Agree payment before delivery."<br>SA Executive Summary (p. 2): "Internal QA retains product context and decision ownership." | OQ-13, OQ-23, OQ-30 |
| D9 | **Final CTA** — H2 "Ship with confidence."; P "See your first receipt in the demo. Evidence, not claims."; "Book a Demo" → `mailto:hello@wewill.tech?subject=Vibe-Test%20Demo` (section `#book`). | **MODIFY** (EDIT). Basis: Direct ("generic demo language"). MODIFY: the conversion slot stays; the demo wording and mailto demo request are replaced by the guided proof-of-value motion; the heading can carry over. | Vibe Test › Conversion | Replace demo language with the guided proof-of-value motion; CTA "Run a Guided Vibe Test". | WB §III Vibe Test › Conversion (p. 3): "Replace generic demo language with the agreed guided proof-of-value motion." CTA: "Run a Guided Vibe Test".<br>SA §V Recommended Vibe Test packages › Guided Proof of Value (p. 5): scope "One environment; 2–3 journeys or one release workflow; agreed success criteria"; mechanism "Fixed-scope paid engagement; confirmed sponsor may pay" | OQ-06, OQ-07, OQ-31 |
| D10 | **Footer** — "VIBE-TEST." wordmark; logo alt "WE WILL TECH logo"; "WE WILL TECH · VIBE-TEST"; "© 2026 WE WILL TECH · Evidence, not claims." | **REPLACE** (inferred; not a §III block) by the wewill.tech global footer (A4), whose bottom bar carries the product lockup. | Global footer › Brand / Bottom Bar | Bottom bar: "Vibe Test by WE WILL Technology · Copyright · company/legal information". | WB footer › Brand / Bottom Bar (p. 6): "Vibe Test by WE WILL Technology · Copyright · company/legal information"<br>WB §I Vibe Test (p. 1): "Dedicated product page within wewill.tech."<br>Observed: copyright lines differ — wewill.tech "© 2023 WE WILL"; Vibe Test page "© 2026 WE WILL TECH". | OQ-03, OQ-11, OQ-38 |

## 3. Table B — Target → source

One row per block of WB §III (30 rows, same order), then the navigation menu items, the footer columns and the three §IV CTAs. "Current source" cites Table A row ids. The "Purpose / content direction" text of each §III row is quoted in full.

### 3.1 WB §III blocks — Home and Vibe Test

| # | Target page | Block | Brief Action | Mapped verdict | Current source content to reuse | Required changes | Quote(s) | Open questions |
|---|---|---|---|---|---|---|---|---|
| T1 | Home | Hero | EDIT | **MODIFY** | `#hero` (B1) | Approved company-level proposition; make the safe-to-ship outcome and target buyer clear; CTA "Run a Guided Vibe Test". | WB §III Home › Hero (p. 2): "Approved company-level proposition; clarify the release-confidence / safe-to-ship outcome and target buyer." CTA: "Run a Guided Vibe Test".<br>SA §VI (p. 6): "PRIMARY HEADLINE: Know what is safe to ship - at the speed you build." · "Supporting subheadline: Vibe Test verifies critical journeys using WE WILL's quality methodology; BCQ Expert Services add human judgment where risk requires it." | OQ-06, OQ-07, OQ-20, OQ-30 |
| T2 | Home | Social proof strip | EDIT | **MODIFY** (relocated upward) | `#clients` logos (B12) | Compact logo strip/carousel placed high on the page. | WB §III Home › Social proof strip (p. 2): "Compact client-logo strip/carousel high on the page for immediate credibility." CTA: "—". | OQ-35 |
| T3 | Home | Vibe Test introduction | EDIT | **MODIFY** | `#vibe-test` (B2) | Vibe Test as the lead product under WE WILL Technology; route to the dedicated product page; CTA "Explore Vibe Test". | WB §III Home › Vibe Test introduction (p. 2): "Introduce Vibe Test as the lead product under WE WILL Technology and route to the dedicated product page." CTA: "Explore Vibe Test". | OQ-03, OQ-11, OQ-13, OQ-14 |
| T4 | Home | Buyer problems / use cases | NEW | **NEW** | None. (Related but unreferenced current material: AI-Era hero and "The Shift", C3–C4.) | Preview the five approved use cases and route to Solutions, without explaining each in full; CTA "Explore Solutions". | WB §III Home › Buyer problems / use cases (p. 2): "Preview the five approved use cases; route into Solutions rather than explaining each in full." CTA: "Explore Solutions".<br>WB §II 2. Recognize (p. 2): "Identify with one of the five approved buyer problems / release situations." | OQ-19 |
| T5 | Home | WE WILL expert layer | EDIT | **MODIFY** (source to be confirmed) | Candidates: `#ai-era-quality-services-promo` (B3), `#why-we-will` (B5), `#services` (B6). No single obvious source. | Brief explanation of Vibe Test + BCQ methodology / expert judgment; CTA "Discuss a Quality Requirement". | WB §III Home › WE WILL expert layer (p. 2): "Briefly explain the combination of Vibe Test + BCQ methodology / expert judgment." CTA: "Discuss a Quality Requirement".<br>WB §IV Discuss a Business Care Quality Requirement › Recommended placement (p. 4): "Solutions use cases requiring expert judgment; Vibe Test expert-layer section; selected Home support block." | OQ-08, OQ-21 |
| T6 | Home | Selected proof | EDIT | **MODIFY** | `#success-stories` (B11); candidate evidence points: `#impact` (B8) | 2–3 strongest testimonials / evidence points; remove the repetitive testimonial treatment. | WB §III Home › Selected proof (p. 3): "2–3 strongest testimonials / evidence points; remove the current repetitive testimonial treatment." CTA: "—". | OQ-16, OQ-17 |
| T7 | Home | Selected resources | REUSE | **KEEP** | `#knowledge` cards (B13); blog posts (C13, C14) | A small number of items; CTA "View Resources". | WB §III Home › Selected resources (p. 3): "Surface a small number of existing blog / insight items." CTA: "View Resources". | OQ-33, OQ-34 |
| T8 | Home | Final conversion | EDIT | **MODIFY** (REPLACE if the form leaves Home) | `#contact` section (B14) and contact form (B15) | Close with the primary commercial action and the secondary expert-service path; CTA "Run a Guided Vibe Test". | WB §III Home › Final conversion (p. 3): "Close with the primary commercial action and secondary expert-service path." CTA: "Run a Guided Vibe Test".<br>WB §IV Run a Guided Vibe Test › Recommended placement (p. 4): "Top navigation, Home hero/final section, Vibe Test page, relevant Solutions use cases." | OQ-06, OQ-08, OQ-09 |
| T9 | Vibe Test | Product hero | REUSE | **KEEP** (relocated into wewill.tech) | Vibe Test page hero (D2) | Show "Vibe Test by WE WILL Technology"; CTA "Run a Guided Vibe Test". | WB §III Vibe Test › Product hero (p. 3): "Vibe Test by WE WILL Technology; retain the current strong product proposition and product-first presentation." CTA: "Run a Guided Vibe Test". | OQ-03, OQ-07, OQ-11, OQ-13 |
| T10 | Vibe Test | Problem / context | REUSE | **KEEP** | `#problem` (D4) | None beyond relocation. | WB §III Vibe Test › Problem / context (p. 3): "Why manual or conventional verification does not keep pace with modern product delivery." CTA: "—". | OQ-03 |
| T11 | Vibe Test | What it does | REUSE | **KEEP** (source to be confirmed) | Candidates: `#how` loop (D5), `#services` agents (D6), Home `#vibe-test` capability cards (B2). The current page has no section of this name. | Content must match "supports fixes" and "re-verifies changes". | WB §III Vibe Test › What it does (p. 3): "Tests critical journeys, identifies issues, supports fixes and re-verifies changes." CTA: "—".<br>SA §II (p. 2): "Vibe Test is the emerging recurring-revenue asset: an Agentic QA platform for testing applications, finding issues and re-verifying changes." | OQ-13, OQ-22 |
| T12 | Vibe Test | How it works | REUSE | **KEEP** | `#how` (D5) | Keep "where accurate". | WB §III Vibe Test › How it works (p. 3): "Retain the current product workflow / autonomous-agent explanation where accurate." CTA: "—". | OQ-13 |
| T13 | Vibe Test | Capabilities + evidence | REUSE | **KEEP** | `#services` (D6), `#receipt` (D7); possibly the Home verdict card and "Watch Vibe Test in action" video (B2) | None beyond relocation; claims gating applies. | WB §III Vibe Test › Capabilities + evidence (p. 3): "Product capabilities, receipts/evidence, screenshots or existing proof." CTA: "—". | OQ-14, OQ-15 |
| T14 | Vibe Test | Who it is for | EDIT | **MODIFY** | `#who` (D8) | Growth-stage product and engineering teams; approved segmentation. | WB §III Vibe Test › Who it is for (p. 3): "Growth-stage product and engineering teams; align to approved segmentation." CTA: "—". | OQ-23 |
| T15 | Vibe Test | WE WILL connection | NEW | **NEW** | None. (The only current links are the lockup "BY WE WILL TECH" and the footer "WE WILL TECH · VIBE-TEST".) | Make the endorsed-product relationship explicit; give a path to broader quality support; CTA "Discuss a Quality Requirement". | WB §III Vibe Test › WE WILL connection (p. 3): "Make the endorsed-product relationship explicit and provide a path to broader quality support." CTA: "Discuss a Quality Requirement".<br>SA §V Recommended commercial hierarchy (p. 4) — Lead product: "Vibe Test by We Will Technology"; Expert services: "Separately scoped Diagnostic, Release Decision and Managed Quality Care". | OQ-08, OQ-11, OQ-24 |
| T16 | Vibe Test | Conversion | EDIT | **MODIFY** | Final CTA "Ship with confidence." (D9) | Replace demo language with the guided proof-of-value motion; CTA "Run a Guided Vibe Test". | WB §III Vibe Test › Conversion (p. 3): "Replace generic demo language with the agreed guided proof-of-value motion." CTA: "Run a Guided Vibe Test". | OQ-06, OQ-07, OQ-31 |

### 3.2 WB §III blocks — Solutions, Resources, About

For the five use cases, SA §V "Priority use cases" (p. 5) gives a parallel wording; its "Trigger and solution", "Outcome" and "Evidence needed" cells are quoted too.

| # | Target page | Block | Brief Action | Mapped verdict | Current source content to reuse | Required changes | Quote(s) | Open questions |
|---|---|---|---|---|---|---|---|---|
| T17 | Solutions | Page introduction | NEW | **NEW** | None. | Frame the page around buyer problems, not a services catalogue. | WB §III Solutions › Page introduction (p. 3): "Frame the page around buyer problems, not an internal services catalogue." CTA: "—".<br>WB §I Solutions (p. 1): "Organize the approved five use cases around buyer problems; show Vibe Test and BCQ expert support where relevant." | OQ-19 |
| T18 | Solutions | 1. Release verification | NEW | **NEW** | None. | CTA "Run a Guided Vibe Test". | WB §III (p. 3): "Frequent releases; Vibe Test on critical journeys; faster evidence-based cycles." CTA: "Run a Guided Vibe Test".<br>SA §V use case "1 Release verification" (p. 5): "Frequent releases; Vibe Test on critical journeys" · "Faster evidence-based cycles" · evidence needed "Demo and pilot" | OQ-18, OQ-19 |
| T19 | Solutions | 2. AI-assisted development | NEW | **NEW** | None. (Related but unreferenced: AI-Era hero and "The Shift", C3–C4.) | CTA "Run a Guided Vibe Test". | WB §III (p. 3): "Development output exceeds QA capacity; verification must keep pace." CTA: "Run a Guided Vibe Test".<br>SA §V use case "2 AI-assisted development" (p. 5): "Output exceeds QA; Vibe Test on changes" · "Verification keeps pace" · evidence needed "Proof of value" | OQ-18, OQ-19 |
| T20 | Solutions | 3. AI Feature Evaluation | NEW | **NEW** | None. (Related but gated: `#genai-based-systems` B4; AI-Era "GenAI Feature Evaluation" C5; Vibe Test "GenAI Evaluation" D6.) | CTA "Discuss / Run Guided Vibe Test"; no differentiation or IP claim until the framework is documented. | WB §III (p. 3): "AI-feature launch; WE WILL approach executed through Vibe Test; evidence against risk criteria." CTA: "Discuss / Run Guided Vibe Test".<br>SA §V use case "3 AI Feature Evaluation" (p. 5): "AI-feature launch; WE WILL approach executed by Vibe Test" · "Evidence against risk criteria" · evidence needed "Framework, thresholds, outputs and customer proof"<br>SA §III (p. 3): "Publish this claim only after WE WILL documents its framework, criteria, thresholds, outputs and customer evidence; do not claim protected IP without substantiation." | OQ-07, OQ-15, OQ-18, OQ-19 |
| T21 | Solutions | 4. Release decision | NEW | **NEW** | None. (Related but unreferenced: AI-Era "Release Readiness Reviews" C5, "Release Decision Support" C6.) | CTA "Discuss a Quality Requirement". | WB §III (p. 3): "High-impact launch; BCQ Expert Services + test evidence for accountable go/no-go advice." CTA: "Discuss a Quality Requirement".<br>SA §V use case "4 Release decision" (p. 5): "High-impact launch; BCQ Expert Services with test evidence" · "Accountable go / no-go advice" · evidence needed "Approved engagement" | OQ-08, OQ-18, OQ-19 |
| T22 | Solutions | 5. Lean-team quality | NEW | **NEW** | None. | CTA "Discuss a Quality Requirement". | WB §III (p. 3): "Limited QA leadership/capacity; Vibe Test + Managed Quality Care." CTA: "Discuss a Quality Requirement".<br>SA §V use case "5 Lean-team quality" (p. 5): "Limited QA leadership; Vibe Test plus Managed Quality Care" · "Scalable quality capacity" · evidence needed "Customer workflow and service proof" | OQ-08, OQ-18, OQ-19 |
| T23 | Solutions | Methodology / supporting capabilities | EDIT | **MODIFY** (relocated) | `#services` (B6); BCQ material in `#why-we-will` (B5); AI-Era "What We Deliver" (C5) | Use only material that supports the five buyer problems. | WB §III Solutions › Methodology / supporting capabilities (p. 4): "Use existing Business Care Quality, testing, automation, UX, security-aware testing and consulting material only where it supports the five buyer problems." CTA: "—". | OQ-12, OQ-25, OQ-28 |
| T24 | Solutions | Proof | EDIT | **MODIFY** (relocated) | Testimonials from `#success-stories` (B11) | Place beside the most relevant buyer problem where possible. | WB §III Solutions › Proof (p. 4): "Place relevant testimonials/evidence beside the most relevant buyer problem where possible." CTA: "—". | OQ-17, OQ-18 |
| T25 | Resources | Blog / insights | REUSE | **KEEP** (relocated) | `/blog/` (C12); both posts (C13, C14); `#knowledge` and `/knowledge/` (B13, C1) | Dedicated resource area; CTA "Read". | WB §III Resources › Blog / insights (p. 4): "Retain the existing blog / knowledge content in a dedicated resource area." CTA: "Read".<br>WB §I Resources (p. 1): "Authority + retained content" · "House the existing blog/insights and, only where useful, background methodology such as Quality Canvas / Triad Framework." | OQ-33, OQ-34, OQ-36 |
| T26 | Resources | Background methodology | EDIT | **MODIFY** (conditional — may be omitted) | `#quality-canvas` (B7) and `/quality-canvas/` (C1); Triad post (C14); Quality Canvas and TQF cards in `#knowledge` (B13) | Only if still useful and coherent; otherwise omit. | WB §III Resources › Background methodology (p. 4): "Quality Canvas and Triad Framework may sit here only if still useful and coherent; otherwise omit." CTA: "—". | OQ-28 |
| T27 | About | Company story | EDIT | **MODIFY** (source to be confirmed) | No current company-story section. Loose candidates: hero statement (B1); "Interview with Our Founder" card, an external link (B13). | Short background plus the current Agentic Software Quality positioning. | WB §III About › Company story (p. 4): "Short company background and current Agentic Software Quality positioning." CTA: "—".<br>SA §III Recommended market category (p. 2): "We Will Technology should position as an Agentic Software Quality company. Vibe Test applies Agentic QA to recurring verification; BCQ connects quality evidence to customer impact, business risk and release decisions." | OQ-26 |
| T28 | About | Team | REUSE | **KEEP** (relocated from Home) | `#team` (B10); `/team/` (C1) | Move off the homepage into About. | WB §III About › Team (p. 4): "Move the existing team content from the long homepage into a dedicated company context." CTA: "—". | OQ-05 |
| T29 | About | Quality philosophy | EDIT | **MODIFY** (source to be confirmed) | Candidates: `#why-we-will` (B5), `#how-we-work` (B9). (`#knowledge` intro uses the phrase "WE WILL’s quality philosophy".) | Concise; must not duplicate Solutions. | WB §III About › Quality philosophy (p. 4): "Concise explanation of how WE WILL approach quality; avoid duplicating Solutions." CTA: "—". | OQ-27 |
| T30 | About | Credibility | REUSE | **KEEP** (selection) | `#clients` (B12); selected testimonials from `#success-stories` (B11) | Selected items only, not the full Home proof stack; CTA "Talk to Us". | WB §III About › Credibility (p. 4): "Selected clients / proof where useful, without repeating the full homepage proof stack." CTA: "Talk to Us". | OQ-10, OQ-17, OQ-35 |

### 3.3 Navigation menu (WB "Navigation menu recommendation", p. 5)

Source line, quoted once for all rows: "Home \| Vibe Test \| Solutions \| Resources \| About \| Run a Guided Vibe Test" (the last item is highlighted in the source). Page roles from WB §I (p. 1).

| # | Menu item (position) | Brief Action | Mapped verdict | Current source | Required changes | Quote(s) | Open questions |
|---|---|---|---|---|---|---|---|
| N1 | Home (1) | — (not in §III) | **KEEP** | Header item "Home" (A1) | Links to the Home page (not the `#hero` anchor on other pages). | WB §I Home (p. 1): "Positioning + routing" · "Establish WE WILL’s proposition, introduce Vibe Test, surface approved buyer problems, build trust and drive the next action." | — |
| N2 | Vibe Test (2) | — | **NEW** | None: no header link to Vibe Test today; the only entry is Home "Start a Vibe Test" → external site (CS `sitemap.md`). | Links to the dedicated Vibe Test page inside wewill.tech. | WB §I Vibe Test (p. 1): "Product evaluation" · "Dedicated product page within wewill.tech. Explain product value, operation, evidence and the guided proof-of-value motion." | OQ-03 |
| N3 | Solutions (3) | — | **NEW** | None. | Links to the new Solutions page. | WB §I Solutions (p. 1): "Buyer-problem evaluation" · "Organize the approved five use cases around buyer problems; show Vibe Test and BCQ expert support where relevant." | OQ-19 |
| N4 | Resources (4) | — | **MODIFY** | Header item "Blog" → `/blog/` (A1) | Label and scope widen from the blog to the resource area. | WB §I Resources (p. 1): "Authority + retained content" · "House the existing blog/insights and, only where useful, background methodology such as Quality Canvas / Triad Framework." | OQ-12, OQ-28 |
| N5 | About (5) | — | **NEW** | None. | Links to the new About page. | WB §I About (p. 1): "Company credibility" · "Concise company story, team, quality philosophy and selected credibility elements." | OQ-26, OQ-27 |
| N6 | Run a Guided Vibe Test (6, highlighted) | — | **NEW** | None in the wewill.tech header. (The Vibe Test page header has "Book a Demo", D1.) | Header CTA. | WB §I Primary CTA (p. 1): "Conversion" · "Run a Guided Vibe Test."<br>WB §IV (p. 4): placement "Top navigation, […]". | OQ-06, OQ-07 |

### 3.4 Footer columns (WB "Footer Navigation", pp. 5–6)

| # | Footer column | Brief Action | Mapped verdict | Current source | Required changes | Quote(s) | Open questions |
|---|---|---|---|---|---|---|---|
| F1 | Product & Solutions | — | **NEW** | None (the current footer has no page links). | Links: Vibe Test, Solutions. | WB footer (p. 6): "Vibe Test · Solutions" | OQ-03 |
| F2 | Company | — | **NEW** | "Contact": `/contact/` page and Home `#contact` (B14, B15, C1). | Links: About, Contact / Talk to Us. | WB footer (p. 6): "About · Contact / Talk to Us" | OQ-10 |
| F3 | Resources | — | **NEW** | `/blog/` (C12); methodology material (B7, C14) only if retained. | Links: Insights / Blog; methodology resources only if retained. | WB footer (p. 6): "Insights / Blog · Methodology resources only if retained" | OQ-28 |
| F4 | Get Started | — | **NEW** | None. | Both conversion CTAs. | WB footer (p. 6): "Run a Guided Vibe Test · Discuss a Business Care Quality Requirement" | OQ-06, OQ-08 |
| F5 | Legal & Social | — | **NEW** (legal links) + **KEEP** (LinkedIn) | LinkedIn link in the current footer (A4). No legal pages exist on the current site; no analytics or cookie scripts were found in the captured wewill.tech HTML (`site.js` uses `localStorage` for the language choice). | Privacy Policy, Terms of Use, Cookie Policy "if applicable", LinkedIn. | WB footer (p. 6): "Privacy Policy · Terms of Use · Cookie Policy if applicable · LinkedIn" | OQ-37, OQ-38 |
| F6 | Brand / Bottom Bar | — | **MODIFY** | "© 2023 WE WILL" and "All rights reserved." (A4); Vibe Test page "© 2026 WE WILL TECH · Evidence, not claims." (D10) | Product lockup, copyright, company/legal information. | WB footer (p. 6): "Vibe Test by WE WILL Technology · Copyright · company/legal information" | OQ-11, OQ-37, OQ-38 |

### 3.5 CTA framework (WB §IV, p. 4)

| # | CTA | Role (quoted) | Recommended placement (quoted) | Mapped verdict | Current equivalents (to be superseded) | Where §III assigns it | Quote(s) from SA | Open questions |
|---|---|---|---|---|---|---|---|---|
| K1 | Run a Guided Vibe Test | "Primary acquisition CTA; the agreed proof-of-value entry motion." | "Top navigation, Home hero/final section, Vibe Test page, relevant Solutions use cases." | **NEW** | "Book a Clarity Session" (B1), "Start a Vibe Test" (B2), "Book a Demo" (D1, D2, D9) | Home Hero; Home Final conversion; Vibe Test Product hero; Vibe Test Conversion; Solutions 1 and 2; Solutions 3 as "Discuss / Run Guided Vibe Test"; nav (N6); footer Get Started (F4) | SA §VI (p. 6): "Primary CTA: Run a guided Vibe Test proof of value." | OQ-06, OQ-07 |
| K2 | Discuss a Business Care Quality Requirement | "Secondary enterprise / higher-risk quality path." | "Solutions use cases requiring expert judgment; Vibe Test expert-layer section; selected Home support block." | **NEW** | "Talk to WE WILL" (B2, B11), "Book a 30-Min Discovery Call" (C3, C10), "Book Call" (C11) | As "Discuss a Quality Requirement": Home WE WILL expert layer, Vibe Test WE WILL connection, Solutions 4 and 5; as "Discuss / Run Guided Vibe Test": Solutions 3; long label: footer Get Started (F4) | SA §VI (p. 6): "Secondary CTA: Discuss a BCQ Expert Services requirement." | OQ-08 |
| K3 | Explore Vibe Test / Explore Solutions | "Navigation/routing CTAs, not primary conversion actions." | "Home sections only." | **NEW** | "Explore Services" (B1), "Explore the offer" (B3) | "Explore Vibe Test": Home Vibe Test introduction; "Explore Solutions": Home Buyer problems / use cases | — | OQ-19 |

§III also uses three CTA labels that §IV does not list: "View Resources" (Home › Selected resources, p. 3), "Read" (Resources › Blog / insights, p. 4) and "Talk to Us" (About › Credibility, p. 4; also footer "Contact / Talk to Us", p. 6).

## 4. Global requirements extracted

Every requirement below is quoted from WB or SA. Emphasis markers are dropped (see 1.2).

### 4.1 Navigation menu — exact items and order

WB "Navigation menu recommendation" (p. 5), set in green in the source, last item highlighted:

> Home | Vibe Test | Solutions | Resources | About | Run a Guided Vibe Test

1. Home · 2. Vibe Test · 3. Solutions · 4. Resources · 5. About · 6. **Run a Guided Vibe Test** (highlighted; the primary CTA — WB §IV places it in "Top navigation").

Page roles, WB §I "Recommended Website Architecture" (p. 1):

| Navigation | Commercial role | Primary purpose (quoted) |
|---|---|---|
| Home | "Positioning + routing" | "Establish WE WILL’s proposition, introduce Vibe Test, surface approved buyer problems, build trust and drive the next action." |
| Vibe Test | "Product evaluation" | "Dedicated product page within wewill.tech. Explain product value, operation, evidence and the guided proof-of-value motion." |
| Solutions | "Buyer-problem evaluation" | "Organize the approved five use cases around buyer problems; show Vibe Test and BCQ expert support where relevant." |
| Resources | "Authority + retained content" | "House the existing blog/insights and, only where useful, background methodology such as Quality Canvas / Triad Framework." |
| About | "Company credibility" | "Concise company story, team, quality philosophy and selected credibility elements." |
| Primary CTA | "Conversion" | "Run a Guided Vibe Test." |

### 4.2 Footer — columns and links (WB "Footer Navigation", table on p. 6)

| Footer Column | Links / Content (quoted) |
|---|---|
| Product & Solutions | "Vibe Test · Solutions" |
| Company | "About · Contact / Talk to Us" |
| Resources | "Insights / Blog · Methodology resources only if retained" |
| Get Started | "Run a Guided Vibe Test · Discuss a Business Care Quality Requirement" |
| Legal & Social | "Privacy Policy · Terms of Use · Cookie Policy if applicable · LinkedIn" |
| Brand / Bottom Bar | "Vibe Test by WE WILL Technology · Copyright · company/legal information" (the lockup is bold in the source) |

### 4.3 CTA framework — labels, roles, placements

WB §IV "CTA Framework" (p. 4):

| CTA | Role | Recommended placement |
|---|---|---|
| Run a Guided Vibe Test | "Primary acquisition CTA; the agreed proof-of-value entry motion." | "Top navigation, Home hero/final section, Vibe Test page, relevant Solutions use cases." |
| Discuss a Business Care Quality Requirement | "Secondary enterprise / higher-risk quality path." | "Solutions use cases requiring expert judgment; Vibe Test expert-layer section; selected Home support block." |
| Explore Vibe Test / Explore Solutions | "Navigation/routing CTAs, not primary conversion actions." | "Home sections only." |

CTA labels as assigned per block in WB §III (pp. 2–4), exact:

| Label in §III | Blocks |
|---|---|
| "Run a Guided Vibe Test" | Home › Hero; Home › Final conversion; Vibe Test › Product hero; Vibe Test › Conversion; Solutions › 1. Release verification; Solutions › 2. AI-assisted development |
| "Discuss / Run Guided Vibe Test" | Solutions › 3. AI Feature Evaluation |
| "Discuss a Quality Requirement" | Home › WE WILL expert layer; Vibe Test › WE WILL connection; Solutions › 4. Release decision; Solutions › 5. Lean-team quality |
| "Explore Vibe Test" | Home › Vibe Test introduction |
| "Explore Solutions" | Home › Buyer problems / use cases |
| "View Resources" | Home › Selected resources |
| "Read" | Resources › Blog / insights |
| "Talk to Us" | About › Credibility |
| "—" (no CTA) | the other 14 blocks |

CTA wording elsewhere:

- WB §I (p. 1): "Primary CTA" — "Run a Guided Vibe Test."
- WB §II 5. Convert (p. 2): "Run a Guided Vibe Test proof of value; enterprise/high-risk buyers can discuss a BCQ requirement."
- SA §VI (p. 6): "Primary CTA: Run a guided Vibe Test proof of value." · "Secondary CTA: Discuss a BCQ Expert Services requirement."
- SA Executive Summary (p. 2): "Lead with a paid Vibe Test proof of value, then convert documented results into subscriptions."

The label variants are listed as contradiction X1–X2 (Section 5).

### 4.4 Messaging (SA §VI and related)

| Element | Exact text | Location |
|---|---|---|
| Primary headline | "PRIMARY HEADLINE: Know what is safe to ship - at the speed you build." (a spaced hyphen, also in the source PDF) | SA §VI, p. 6 |
| Supporting subheadline | "Supporting subheadline: Vibe Test verifies critical journeys using WE WILL's quality methodology; BCQ Expert Services add human judgment where risk requires it." | SA §VI, p. 6 |
| Core value proposition | "Core value proposition: Continuous verification and accountable quality judgment for release decisions." | SA §VI, p. 6 |
| One-sentence description | "One-sentence description. We Will Technology combines Vibe Test Agentic QA with BCQ methodology and expert judgment to help product teams release with confidence." | SA §VI, p. 5 |
| Elevator pitch | "Elevator pitch. Software teams build faster than manual verification can scale. Vibe Test verifies critical journeys, finds issues and re-checks fixes. BCQ connects the evidence to customer and release risk, while BCQ Expert Services provide human judgment when needed. Together they increase quality capacity and release confidence." | SA §VI, p. 5 |
| Positioning statement | "For Saudi product teams seeking faster, safer releases, We Will Technology combines recurring verification through Vibe Test with BCQ-informed quality judgment. It shows what has been verified, what risk remains and when expert review is needed." | SA §III, p. 3 |
| Market category | "Agentic Software Quality" | SA §III, p. 2 |
| Cover line | "Agentic Software Quality for faster, safer release decisions" | SA cover, p. 1 |
| Section V opening | "We Will Technology helps digital-product teams verify critical software journeys, understand release risk and ship with greater confidence." | SA §V, p. 4 |
| Recommended direction | "Compete in Agentic Software Quality in Saudi Arabia. Lead with Vibe Test, apply BCQ methodology, and scope BCQ Expert Services for complex or consequential decisions." | SA §II box, p. 2 |

The four messaging pillars (SA §VI, p. 6; the third pillar name is not bold in the source):

| Pillar | Buyer message and problem | Capability and outcome | Proof / audience |
|---|---|---|---|
| Verification at release speed | "Scale QA capacity as repetitive work grows" | "Vibe Test verifies and re-verifies critical journeys" | "Demonstration; growth-stage CTO / QA" |
| Customer and business risk | "Prioritize customer consequences over test counts" | "BCQ connects evidence to release decisions" | "Diagnostic; product / enterprise" |
| AI-assisted and AI-enabled quality | "Verify faster builds and assess uncertain AI behaviour" | "WE WILL criteria executed by Vibe Test; expert interpretation as needed" | "Framework and output; CTO / AI owner" |
| Accountable automation | "Automate checks while humans own consequential decisions" | "Product evidence with expert escalation" | "Workflow and controls; enterprise" |

Meaningful differentiators (SA §III, p. 3), exact:

- "Product plus judgment. Vibe Test verifies; BCQ connects evidence to customer and release risk; expert services support consequential decisions."
- "AI-assisted development and AI-enabled features. Vibe Test verifies rapidly changing software; WE WILL's AI Feature Evaluation approach addresses AI-feature behaviour."
- "Potential AI Feature Evaluation differentiation. Publish this claim only after WE WILL documents its framework, criteria, thresholds, outputs and customer evidence; do not claim protected IP without substantiation."
- "Regional delivery and controlled adoption. Saudi market access and a paid proof of value support credible entry."
- Closing paragraph: "Competitors demonstrate demand for autonomous testing, usage-based packaging and expert support. WE WILL should prove a focused Saudi use case, costed execution and business-level release judgment. Internal QA retains product context and decision ownership."

No document assigns the one-sentence description, elevator pitch, positioning statement or pillars to a specific page block (OQ-29).

### 4.5 Brand architecture (master brand / endorsed product / methodology)

- WB §I (p. 1): "Master brand architecture: WE WILL Technology is the company/master brand; Vibe Test is an endorsed product under WE WILL Technology; Business Care Quality (BCQ) remains the methodology/expert-service layer."
- WB guardrails (p. 1): "WE WILL Technology remains the master brand. Vibe Test is the lead product under the same website and domain."
- SA Executive Summary (p. 2): "We Will Technology should position as an Agentic Software Quality company in Saudi Arabia. Vibe Test is its lead Agentic QA product. Business Care Quality (BCQ) informs the product; BCQ Expert Services add human judgment for consequential decisions."
- SA §II (p. 2): "BCQ links technical evidence to customer and business risk. It informs Vibe Test and is also delivered through separately scoped expert services. The website and sales narrative need to clarify this architecture."
- SA §III (p. 2): "Describe Vibe Test as an Agentic QA platform. Retain buyer search terms such as AI software testing, autonomous testing, regression testing and release verification."
- SA §V diagram (p. 4), transcribed text: "WE WILL TECHNOLOGY" / "Agentic Software Quality"; "LEAD PRODUCT" / "Vibe Test by We Will Technology" / "Agentic QA platform" / "Verify critical journeys · Detect issues · Re-verify fixes"; "EXPERT OFFER" / "BCQ Expert Services" / "Human quality judgment" / "Assess risk · Advise on release"; "BUSINESS CARE QUALITY METHODOLOGY" / "Connects quality evidence with customer impact, business risk and release decisions".
- SA §V "Recommended commercial hierarchy" (p. 4):

| Level | Offer | Role in the commercial system | Primary audience |
|---|---|---|---|
| Master brand | We Will Technology | "Company identity, contracting and Agentic Software Quality proposition" | All buyers |
| Lead product | Vibe Test by We Will Technology | "Agentic QA; principal acquisition and subscription offer" | Product and engineering teams |
| Methodology | Business Care Quality | "Connects evidence with customer impact, business risk and release decisions" | Across relevant offers |
| Expert services | BCQ Expert Services | "Separately scoped Diagnostic, Release Decision and Managed Quality Care" | Higher-risk teams |
| Specialized use case | AI Feature Evaluation | "WE WILL-developed approach executed through Vibe Test; differentiation requires documented proof" | AI product teams |

- SA §V (p. 4): "Lead with Vibe Test for recurring verification. Offer BCQ Expert Services when the buyer needs quality strategy, risk interpretation or accountable release support."
- SA "I. Phase 2 Implementation Priorities" (p. 7), workstream (1): "refine the We Will Technology identity and endorsed Vibe Test treatment"
- Lockup wording: WB uses "Vibe Test by WE WILL Technology" (§III p. 3; footer p. 6); SA uses "Vibe Test by We Will Technology" (p. 4). See X3.

### 4.6 ICP and journey stages

- WB §II (p. 2): "Primary ICP: CTOs, engineering leaders and founders in growth-stage SaaS / digital-product companies, with Saudi Arabia as the priority beachhead."
- SA §III Priority customer (p. 3): "Saudi growth-stage SaaS and digital-product companies with live products, recurring releases, lean quality capacity, a technical owner and an identifiable budget."
- SA §III High-value buyer problem and intended outcome (p. 3): "Software output is accelerating while manual or brittle verification struggles to keep pace. Engineering leaders need reliable evidence across critical journeys and emerging AI behaviour before deciding whether to release."
- SA Executive Summary (p. 2): "The primary buyers are growth-stage product companies with active releases and budget. Funded MVP teams qualify selectively with an executable build and confirmed payer. Lead with a paid Vibe Test proof of value, then convert documented results into subscriptions. Internal QA retains product context and decision ownership."

Journey stages, WB §II (p. 2):

| Journey stage | What the website must achieve (quoted) |
|---|---|
| 1. Land | "Understand quickly that WE WILL helps product teams determine what is safe to ship." |
| 2. Recognize | "Identify with one of the five approved buyer problems / release situations." |
| 3. Evaluate | "Explore Vibe Test as the lead product or the relevant Solutions use case." |
| 4. Trust | "See client logos, selected testimonials, evidence and the WE WILL expert layer." |
| 5. Convert | "Run a Guided Vibe Test proof of value; enterprise/high-risk buyers can discuss a BCQ requirement." |

Buyer segments, SA §IV (p. 3):

| Segment and profile | Buyer trigger and pain | Buyer outcome / concern | Lead offer |
|---|---|---|---|
| "Growth-stage Saudi product teams — PRIMARY; live product, releases, budget" | "CTO: regression backlog, defects and release delay" | "More coverage; reliable proof, integration and cost" | "Paid Vibe Test proof; Team subscription" |
| "Enterprise digital teams — SECONDARY; consequential Saudi platforms" | "Digital leader: major launch or AI feature with release risk" | "Accountable decision; security and continuity" | "BCQ Expert Services; Vibe Test as relevant" |
| "Funded MVP / pre-launch — SELECTIVE; build and confirmed payer" | "Founder or CTO: pilot or launch; limited QA capacity" | "Bounded evidence and certain payment" | "Prepaid or sponsor-funded proof" |
| "Venture portfolios — SELECTIVE; multiple products" | "Portfolio CTO: simultaneous launches, uneven verification" | "Repeatable approach and controlled setup" | "Portfolio proof; Enterprise / BCQ expansion" |

- SA §IV SEGMENTATION RULE (p. 4): "Growth-stage companies lead direct acquisition. MVP-stage teams qualify with an executable build, defined validation need and confirmed payer. Agree payment before delivery."
- SA §VI funnel diagram (p. 6), top to bottom: "Qualified Saudi Account — FIT", "Guided Proof of Value — TEST", "Evidence Review — PROVE", "Team Subscription — ADOPT", "Enterprise Expansion — EXPAND". (A sales funnel; no document turns it into a website block.)

### 4.7 Offers, packages and priority use cases (SA §V)

Recommended Vibe Test packages (p. 5):

| Package | Intended customer | Scope and qualification | Commercial mechanism |
|---|---|---|---|
| Guided Proof of Value | "Live product or executable MVP; technical owner and payer" | "One environment; 2–3 journeys or one release workflow; agreed success criteria" | "Fixed-scope paid engagement; confirmed sponsor may pay" |
| Vibe Test Team | "Growth-stage team with recurring releases" | "Defined workspaces, execution allowance, environments and support" | "Monthly or annual subscription" |
| Vibe Test Enterprise | "Large or multi-product buyer" | "Higher usage; agreed integration, access, reporting and support" | "Annual custom agreement; expert work separately scoped" |

- BCQ Expert Services (p. 5): "Quality Diagnostic: fixed-fee review of product and release risks. Release Decision: fixed-fee review of evidence and go / no-go criteria. Managed Quality Care: monthly expert oversight, with platform usage separately scoped."
- The brief has no packages or pricing block (OQ-31).

Priority use cases (p. 5) — the five use cases the Solutions page and the Home preview are built on:

| Priority use case | Trigger and solution | Outcome | Evidence needed |
|---|---|---|---|
| 1 Release verification | "Frequent releases; Vibe Test on critical journeys" | "Faster evidence-based cycles" | "Demo and pilot" |
| 2 AI-assisted development | "Output exceeds QA; Vibe Test on changes" | "Verification keeps pace" | "Proof of value" |
| 3 AI Feature Evaluation | "AI-feature launch; WE WILL approach executed by Vibe Test" | "Evidence against risk criteria" | "Framework, thresholds, outputs and customer proof" |
| 4 Release decision | "High-impact launch; BCQ Expert Services with test evidence" | "Accountable go / no-go advice" | "Approved engagement" |
| 5 Lean-team quality | "Limited QA leadership; Vibe Test plus Managed Quality Care" | "Scalable quality capacity" | "Customer workflow and service proof" |

### 4.8 SEO seed keywords (WB §5, p. 5)

Purpose, quoted: "These are strategic seed terms for the website team to validate through keyword research, search-volume analysis, competition review and Saudi/GCC localization. They are not final SEO targets."

| Seed keyword / theme | Search intent | Likely page | Audit note (quoted) |
|---|---|---|---|
| agentic QA / agentic software testing | Category / emerging solution | Home, Vibe Test | "Validate terminology adoption and search demand before making it the sole keyword anchor." |
| autonomous QA testing / autonomous software testing | Product/category | Vibe Test | "Strong fit with Vibe Test proposition; compare variants." |
| software release verification / release readiness testing | Problem / solution | Solutions, Vibe Test | "High alignment with approved release-verification use case." |
| AI software testing / AI-assisted development testing | Problem / solution | Solutions | "Audit both testing-with-AI and testing-AI ambiguity." |
| AI feature testing / AI feature evaluation | Use case | Solutions | "Specific approved use case; validate buyer terminology." |
| continuous software quality / continuous QA | Solution category | Home, Solutions | "Useful bridge between recurring verification and expert quality support." |
| QA as a service / managed QA services | Service / commercial | Solutions | "Audit relevance against BCQ Expert Services; avoid reverting to a generic outsourced-QA position." |
| software quality consulting / release decision support | Expert service | Solutions | "Supports BCQ diagnostic / release-decision path." |
| software testing Saudi Arabia / QA services Saudi Arabia | Local commercial | Home, Solutions | "Validate KSA search volumes and Arabic/English variants." |
| AI testing Saudi Arabia / software quality Saudi Arabia | Local + emerging category | Solutions, Vibe Test | "Use only if data supports demand." |

Implication stated by the documents themselves: the seeds are inputs to research, not approved page titles or copy (OQ-40).

### 4.9 Constraints on claims

| Constraint | Exact text | Location | Current-site content it touches |
|---|---|---|---|
| AI Feature Evaluation differentiation is gated | "Potential AI Feature Evaluation differentiation. Publish this claim only after WE WILL documents its framework, criteria, thresholds, outputs and customer evidence; do not claim protected IP without substantiation." | SA §III, p. 3 | `#genai-based-systems` (B4); AI-Era "GenAI Feature Evaluation" (C5); Vibe Test "GenAI Evaluation" (D6); Home chip "GenAI feature evaluation" (B3) |
| — hierarchy restates it | "WE WILL-developed approach executed through Vibe Test; differentiation requires documented proof" | SA §V hierarchy, p. 4 | same |
| — evidence needed for use case 3 | "Framework, thresholds, outputs and customer proof" | SA §V use cases, p. 5 | Solutions › 3 (T20) |
| Evidence and approved claims first | "WE WILL must supply product evidence, approved claims and the AI Feature Evaluation framework before related differentiation is used externally." | SA "I. Phase 2 Implementation Priorities", p. 7 | Impact figures (B8); sample receipts and confidence values (B2, D2, D7); testimonials (B11) |
| Vibe Test workflow only "where accurate" | "Retain the current product workflow / autonomous-agent explanation where accurate." | WB §III Vibe Test › How it works, p. 3 | `#how` (D5), "Bug Fixing" (D6), "Tests. Fixes. Verifies." (D2) |
| What Vibe Test does (documents' wording) | "Tests critical journeys, identifies issues, supports fixes and re-verifies changes." | WB §III Vibe Test › What it does, p. 3 | "Autonomous fix → PR → merge → deploy → hand-off." (D6); "finds bugs, fixes them, and re-verifies" (B2) |
| No prices before validation | "Packaging principle: use a subscription with an included execution allowance reflecting platform cost and buyer value. Confirm pricing after validating usage economics." · "Before publishing prices, validate execution costs, typical usage, onboarding, support, environments, concurrency, margins and overage rules." | SA §V, p. 5 | none today (no prices on the site) |
| Internal QA keeps ownership | "Internal QA retains product context and decision ownership." | SA Executive Summary, p. 2; SA §III, p. 3 | "Your autonomous QA team." (D2); "Built for teams without a QA team." (D8); "Ship with senior-level QA you don't have to hire." (D8) |
| Humans own consequential decisions | "Automate checks while humans own consequential decisions" | SA §VI pillar "Accountable automation", p. 6 | "Merged, deployed, and looped back for the next." (D5) |
| Not a generic outsourced-QA position | "Audit relevance against BCQ Expert Services; avoid reverting to a generic outsourced-QA position." | WB §5, p. 5 | "Quality as a Service (QaaS)" (B6); "An autonomous QA team as a service" (B2) |
| Regional keywords only with data | "Use only if data supports demand." | WB §5, p. 5 | — |
| Payment agreed before delivery | "Agree payment before delivery." | SA §IV SEGMENTATION RULE, p. 4 | "Book a Demo" / "See your first receipt in the demo." (D9) |

### 4.10 Implementation guardrails and Phase 2 scope

- WB guardrails (p. 1): "Translate the approved commercial alignment into a clearer B2B website structure and ICP journey." · "Prioritize reuse, consolidation and relocation of existing approved material before creating net-new content." · "The objective is “make the existing website commercially clearer and more effective within a controlled optimization scope.”" · "WE WILL Technology remains the master brand. Vibe Test is the lead product under the same website and domain."
- SA "I. Phase 2 Implementation Priorities" (p. 7): "Phase 2 will apply this direction across four contracted workstreams: (1) refine the We Will Technology identity and endorsed Vibe Test treatment; (2) optimize the homepage and one or two priority pages with proof and conversion paths; (3) produce the sales deck, two one-pagers, proposal template, two use-case sheets and follow-up set; and (4) develop the LinkedIn strategy and 12-week content plan."
- SA §II (p. 2): "Address international-buyer concerns with specific access and delivery-continuity safeguards." (no website block is assigned — OQ-32)

## 5. Contradictions and ambiguities

Each item was checked against the text. "Type": **Within WB** / **WB vs SA** / **Docs vs site** / **Gap** (a need the documents do not settle). None is resolved here.

| # | Topic | Statement A | Statement B | Type | OQ |
|---|---|---|---|---|---|
| X1 | **Secondary CTA label — four variants** | WB §III (pp. 2–3, four blocks): "Discuss a Quality Requirement" | WB §IV (p. 4) and footer Get Started (p. 6): "Discuss a Business Care Quality Requirement" · WB §II 5. Convert (p. 2): "enterprise/high-risk buyers can discuss a BCQ requirement" · SA §VI (p. 6): "Secondary CTA: Discuss a BCQ Expert Services requirement." | Within WB; WB vs SA | OQ-08 |
| X2 | **Primary CTA label** | WB §I (p. 1), §III, §IV (p. 4), nav (p. 5), footer (p. 6): "Run a Guided Vibe Test" | WB §II 5. Convert (p. 2): "Run a Guided Vibe Test proof of value" · SA §VI (p. 6): "Primary CTA: Run a guided Vibe Test proof of value." (lower-case "guided") · WB §III Solutions › 3 (p. 3): "Discuss / Run Guided Vibe Test" (no "a"; one button or two?) | Within WB; WB vs SA | OQ-07 |
| X3 | **Master-brand name casing and lockup** | WB: "WE WILL TECHNOLOGY" (title, p. 1), "WE WILL Technology" (p. 1 ff.), "WE WILL" ("WE WILL’s proposition", p. 1); lockup "Vibe Test by WE WILL Technology" (pp. 3, 6) | SA: "We Will Technology" (p. 2 ff.), "WE WILL TECHNOLOGY" (cover p. 1; diagram p. 4), "WE WILL" ("WE WILL must supply", p. 7); lockup "Vibe Test by We Will Technology" (p. 4). Site: "WE WILL" (logo alt, every `<title>`, `og:site_name`, "© 2023 WE WILL"); "WE WILL TECH" (Darent testimonial "WE WILL TECH has been part of the Darent team since day one."; Vibe Test page "Vibe-Test. BY WE WILL TECH", "© 2026 WE WILL TECH") | WB vs SA; Docs vs site | OQ-11 |
| X4 | **Product name styling** | WB and SA: "Vibe Test" | Vibe Test page: "Vibe-Test." (logo text), "VIBE-TEST" (footer), alt "Vibe-Test logo", mail link `mailto:hello@wewill.tech?subject=Vibe-Test%20Demo` (D1, D9, D10); Home uses "Vibe Test" (B2) | Docs vs site | OQ-11 |
| X5 | **What "the methodology" is** | WB §I (p. 1): "Business Care Quality (BCQ) remains the methodology/expert-service layer." | Site: "Business-Care Quality" (hyphenated; B5, B13), eyebrow "Business-Care" (B1); a different section, on GenAI evaluation, is headed "Our Methodology." (B4); the "Business-Care Quality" knowledge card links to a 404 (C15) | Docs vs site | OQ-12, OQ-33 |
| X6 | **Expert-service names** | SA §V (p. 4): "Separately scoped Diagnostic, Release Decision and Managed Quality Care"; definitions p. 5 ("Quality Diagnostic: fixed-fee review of product and release risks. […]"); WB §III uses "BCQ Expert Services" and "Managed Quality Care" (p. 3) | Site: "Quality as a Service (QaaS)", "Quality Canvas", "AI Quality & Behavioral Transparency", "Risk Prevention for Releases" (B6); AI-Era's six services (C5); AI-Era FAQ: "an audit, verification sprint, or continuous quality partnership" (C9) | Docs vs site | OQ-12 |
| X7 | **Block names inside WB** | WB §IV (p. 4) places the BCQ CTA in the "Vibe Test expert-layer section" and a "selected Home support block" | WB §III names those blocks "WE WILL connection" (Vibe Test, p. 3) and "WE WILL expert layer" (Home, p. 2). Probably the same blocks; not stated | Within WB | OQ-08, OQ-24 |
| X8 | **Home final section: one CTA or two?** | WB §III Home › Final conversion (p. 3): "Close with the primary commercial action and secondary expert-service path." — CTA cell: "Run a Guided Vibe Test" only | WB §IV (p. 4) lists the BCQ CTA's Home placement only as "selected Home support block" | Within WB | OQ-09 |
| X9 | **Scope of the restructure** | SA p. 7: "(2) optimize the homepage and one or two priority pages with proof and conversion paths" | WB §I and §III (pp. 1–4): five pages — Home, Vibe Test, Solutions, Resources, About — with 30 blocks | WB vs SA | OQ-01 |
| X10 | **Which testimonials are "strongest"** | WB §III Home › Selected proof (p. 3): "2–3 strongest testimonials / evidence points" — no names or criteria | Site (B11): 7 distinct quotes from 6 clients; One Studio shown twice; MICEtribe's first quote and Rasel's share near-identical wording; none mentions Vibe Test | Gap; Docs vs site | OQ-17 |
| X11 | **Use-case wording differs, and both versions are terse** | WB §III (p. 3): "Development output exceeds QA capacity; verification must keep pace." · "AI-feature launch; WE WILL approach executed through Vibe Test; evidence against risk criteria." · "High-impact launch; BCQ Expert Services + test evidence for accountable go/no-go advice." · "Limited QA leadership/capacity; Vibe Test + Managed Quality Care." | SA §V (p. 5): "Output exceeds QA; Vibe Test on changes" / "Verification keeps pace" · "AI-feature launch; WE WILL approach executed by Vibe Test" · "High-impact launch; BCQ Expert Services with test evidence" / "Accountable go / no-go advice" · "Limited QA leadership; Vibe Test plus Managed Quality Care" / "Scalable quality capacity". Neither is written as page copy; the five Solutions blocks are NEW, so no current copy exists | WB vs SA; Gap | OQ-19 |
| X12 | **Impact statistics vs evidence rule** | Site (B8): "32%" "Launch Risks", "65%" "Decision Clarity", "2×" "Speed to MVP Validation" — no source stated | SA p. 7: "WE WILL must supply product evidence, approved claims and the AI Feature Evaluation framework before related differentiation is used externally." WB (p. 3) allows "evidence points" but does not define them; neither document mentions the Impact section | Docs vs site | OQ-16 |
| X13 | **Footer legal pages** | WB footer (p. 6): "Privacy Policy · Terms of Use · Cookie Policy if applicable · LinkedIn"; bottom bar "company/legal information" | Site: no legal page or legal link exists on any captured page; the documents supply no legal text or company details | Docs vs site; Gap | OQ-37 |
| X14 | **Arabic** | WB §5 (p. 5), only mention: "Validate KSA search volumes and Arabic/English variants." (keyword research) | Site: bilingual EN/AR switch on every wewill.tech page and on the Vibe Test page; Arabic is partial (some testimonials and the Vibe Test verdict card stay English; blog English only) and overflows sideways on Home and `/contact/` (A2). The approved messaging exists only in English | Gap; Docs vs site | OQ-36 |
| X15 | **Where "Run a Guided Vibe Test" leads** | WB §IV (p. 4) defines role and placement only: "Primary acquisition CTA; the agreed proof-of-value entry motion." | Current nearest CTAs go to four different places: external site (B2 "Start a Vibe Test"), `mailto:hello@wewill.tech` (D9 "Book a Demo"), Home `#contact` form (B1 "Book a Clarity Session"), `/contact/#contact` (C3, C10) | Gap | OQ-06 |
| X16 | **Vibe Test page address** | WB §I (p. 1): "Dedicated product page within wewill.tech." · guardrails (p. 1): "under the same website and domain" | Current page: `https://vibe-test.oneapp.dev/` (separate build, own header/footer/language switch). No target URL is given, and nothing is said about the oneapp.dev address | Docs vs site; Gap | OQ-03 |
| X17 | **Vibe Test "Who it's for"** | WB §III (p. 3): "Growth-stage product and engineering teams; align to approved segmentation." · SA Executive Summary (p. 2): "Internal QA retains product context and decision ownership." | Site (D8): H2 "Built for teams without a QA team."; "Small dev teams & solo developers", "Vibe coders & indie hackers", "Early-stage startups" ("Get real QA coverage before you can afford a team.") | Docs vs site | OQ-23 |
| X18 | **AI-Era page audience and CTA** | WB §II (p. 2): "Primary ICP: CTOs, engineering leaders and founders in growth-stage SaaS / digital-product companies, with Saudi Arabia as the priority beachhead." · WB §IV CTAs (p. 4) | Site (C7, C3, C10): "Product Managers", "Founders & Startups", "Software Studios", "SaaS & Web Platforms", "AI-Enabled Products"; CTA "Book a 30-Min Discovery Call" | Docs vs site | OQ-04 |
| X19 | **Quality Canvas / Triad: conditional, but referenced across the site** | WB §III Resources › Background methodology (p. 4): "Quality Canvas and Triad Framework may sit here only if still useful and coherent; otherwise omit." — no criterion and no decision owner | Site references outside the Quality Canvas section: `#services` pillar "Quality Canvas" (B6); `#how-we-work` step 02 "Using the Quality Canvas and Triad Quality Framework, […]" (B9); `#impact` "[…] proactive risk reviews and Quality Canvas planning." (B8); AI-Era "Quality Canvas + Value-Quality Map" (C5); `#knowledge` cards (B13); Triad blog post (C14); external ChatGPT tool "Generate Your Quality Canvas" (B7) | Within WB; Docs vs site | OQ-28 |
| X20 | **Current content the documents never mention** | WB §III lists target blocks only | Not mentioned: AI-Era Quality Services page (C2–C11); the 11 standalone pages (C1); Home `#ai-era-quality-services-promo` (B3), `#genai-based-systems` (B4), `#impact` (B8), `#how-we-work` (B9); contact form (B15); chat widget (A3); EN/AR switch (A2); Vibe Test marquee (D3) | Gap | OQ-02, OQ-04, OQ-05 |
| X21 | **Does Vibe Test fix code?** | WB §III Vibe Test › What it does (p. 3): "supports fixes" · SA §II (p. 2): "re-verifying changes" · SA diagram (p. 4): "Re-verify fixes" · SA elevator pitch (p. 5): "re-checks fixes" · WB §III How it works (p. 3): "where accurate" | Site: "Tests. Fixes. Verifies." (D2); "They author the fix and open a reviewable PR." / "Merged, deployed, and looped back for the next." (D5); "Autonomous fix → PR → merge → deploy → hand-off." (D6); "Vibe Test finds bugs, fixes them, and re-verifies." and "agents sweep, test, and fix your product" (B2) | Docs vs site | OQ-13 |
| X22 | **Product descriptor** | SA §III (p. 2): "Describe Vibe Test as an Agentic QA platform. Retain buyer search terms such as AI software testing, autonomous testing, regression testing and release verification." | Site: "autonomous QA that hands you the receipts" and "An autonomous QA team as a service" (B2); "Your autonomous QA team." (D2). The Vibe Test eyebrow already reads "AGENTIC QA PLATFORM" (D2) | Docs vs site | OQ-13 |
| X23 | **Availability status** | WB §IV (p. 4): primary CTA "Run a Guided Vibe Test" site-wide · SA §II (p. 2): "It is approaching commercial readiness, so initial adoption should be guided through bounded proofs of value." | Site (D2): eyebrow "AGENTIC QA PLATFORM — MVP · INVITE-ONLY" | Docs vs site | OQ-13 |
| X24 | **Paid proof of value vs free-demo framing** | SA Executive Summary (p. 2): "Lead with a paid Vibe Test proof of value" · SA §V (p. 5): "Fixed-scope paid engagement; confirmed sponsor may pay" · SA §IV (p. 4): "Agree payment before delivery." | Site: "Book a Demo", "See your first receipt in the demo." (D9); AI-Era "No commitment. We review your product, release context, and quality risks." (C3). WB's CTA "Run a Guided Vibe Test" does not say whether the site states that it is paid | Docs vs site; Gap | OQ-07 |
| X25 | **Illustrative figures presented as results** | SA p. 7: "approved claims" · WB §III Vibe Test › Capabilities + evidence (p. 3): "receipts/evidence, screenshots or existing proof" | Site: "Confidence" "94%", "3 blockers cleared · 0 open" (B2); "confidence 98.7%", "42 checks" (D2); "18/18 pass", "98.7%" (D7) — sample data, not labelled as samples | Docs vs site | OQ-14 |
| X26 | **Contact route** | WB nav (p. 5): no Contact item · footer (p. 6): "About · Contact / Talk to Us" · WB §III About › Credibility CTA (p. 4): "Talk to Us" (not listed in §IV) | Site: header "Contact"; CTAs "Talk to WE WILL", "Book a Clarity Session", "Send Message", "Book a 30-Min Discovery Call" | Within WB; Docs vs site | OQ-10 |
| X27 | **Social links** | WB footer (p. 6): "LinkedIn" is the only social link listed | Site footer: LinkedIn, Facebook, WhatsApp, Instagram (A4); WhatsApp also in the chat widget (A3) | Docs vs site | OQ-38 |
| X28 | **Names of the resource area and of the Triad** | WB: "Resources" (nav, p. 5), "Insights / Blog" (footer, p. 6), block name "Blog / insights" and "blog / knowledge content" (§III, p. 4), "blog / insight items" (§III, p. 3), "blog/insights" (§I, p. 1); "Triad Framework" (pp. 1, 4) | Site: "Blog" (nav), "Knowledge" (`/knowledge/`), "Deep Dive" (eyebrow); "Triad Quality Framework (TQF)" | Within WB; Docs vs site | OQ-12 |
| X29 | **Saudi focus** | SA (p. 2): "Compete in Agentic Software Quality in Saudi Arabia." · SA (p. 3): "For Saudi product teams seeking faster, safer releases, […]" · WB §II (p. 2): "with Saudi Arabia as the priority beachhead" | Site: Saudi Arabia / KSA is not mentioned on any captured page (EN or AR) | Docs vs site | OQ-30 |
| X30 | **Headline punctuation** | SA §VI (p. 6): "Know what is safe to ship - at the speed you build." — a spaced hyphen, also in the source PDF | Site copy style uses em dashes (e.g. "Meet Vibe Test — autonomous QA that hands you the receipts.") | Docs vs site (minor) | OQ-20 |
| X31 | **Current Home hero** | SA §VI (p. 6) approved headline and subheadline; WB §IV (p. 4) CTAs | Site (B1): "We don’t just test software. We protect product decisions."; CTAs "Book a Clarity Session", "Explore Services" (neither is a framework CTA) | Docs vs site (expected change) | OQ-20 |
| X32 | **International-buyer safeguards have no block** | SA §II (p. 2): "Address international-buyer concerns with specific access and delivery-continuity safeguards." · SA §IV (p. 3) enterprise concern: "Accountable decision; security and continuity" | WB assigns no block to this; the only related current content is the AI-Era FAQ on staging environments (C9) | Gap | OQ-32 |
| X33 | **Is the Home block list complete?** | WB §III (pp. 2–3) lists 8 Home blocks; About › Team (p. 4) refers to "the long homepage" | Six current Home sections (B3, B4, B5, B6, B8, B9) are not assigned a Home block, and no document says they leave Home | Gap | OQ-02 |
| X34 | **Messaging elements without a placement** | SA pp. 3, 5, 6: positioning statement, one-sentence description, elevator pitch, four pillars | WB §III only asks for an "Approved company-level proposition" (Home › Hero, p. 2) and "current Agentic Software Quality positioning" (About › Company story, p. 4) | Gap | OQ-29 |
| X35 | **AI Feature Evaluation: publish a use case, but gate the claim** | WB §III (p. 3): Solutions › "3. AI Feature Evaluation" is a NEW block with CTA "Discuss / Run Guided Vibe Test" | SA §III (p. 3): "Publish this claim only after WE WILL documents its framework, criteria, thresholds, outputs and customer evidence; do not claim protected IP without substantiation." · SA p. 7: framework to be supplied "before related differentiation is used externally". Whether naming the use case already counts as the claim is not stated | WB vs SA | OQ-15 |

## 6. Open questions

Numbered for reference from Tables A–B and Section 5. Each lists the quote(s) that raise it, why it blocks or affects implementation, and realistic options. No option is chosen here. Groups: A scope and structure (01–05) · B conversion and CTAs (06–10) · C brand and naming (11–12) · D claims and evidence (13–18) · E content sources and copy (19–32) · F legacy links and assets (33–35) · G language, legal, SEO, chrome (36–40).

### A. Scope and structure

**OQ-01 — How many pages are in scope?**
- Raised by: SA p. 7: "(2) optimize the homepage and one or two priority pages with proof and conversion paths" · WB guardrails (p. 1): "within a controlled optimization scope" · WB §I/§III (pp. 1–4): five pages, 30 blocks.
- Why it matters: Solutions, Resources and About hold 14 of the 30 blocks; Solutions alone has 6 NEW blocks with no approved copy (OQ-19). The answer sets the size of the build and which OQs are blocking now.
- Options: (a) build all five pages; (b) Home + Vibe Test (+ one more, e.g. Solutions) fully, the rest later; (c) all five pages, with Resources and About built only by relocating existing content.

**OQ-02 — Is the WB §III Home block list the whole Home page, in that order?**
- Raised by: WB §III heading "Page-by-Page Block Structure" and its 8 Home rows (pp. 2–3) · WB §III About › Team (p. 4): "from the long homepage" · WB guardrails (p. 1): "Prioritize reuse, consolidation and relocation of existing approved material before creating net-new content."
- Why it matters: decides whether `#ai-era-quality-services-promo` (B3), `#genai-based-systems` (B4), `#why-we-will` (B5), `#services` (B6), `#impact` (B8) and `#how-we-work` (B9) leave Home, and whether the §III row order is the page order.
- Options: (a) Home = exactly the 8 blocks in §III order, other sections leave Home (moved where the documents give a destination, otherwise parked); (b) keep some unlisted sections on Home after the listed blocks; (c) use some unlisted sections as the sources of the EDIT blocks (e.g. B3/B5 for the expert layer, B8 as evidence points) and drop the rest from Home.

**OQ-03 — Vibe Test page: URL, page shell, and the future of vibe-test.oneapp.dev**
- Raised by: WB §I (p. 1): "Dedicated product page within wewill.tech." · WB guardrails (p. 1): "Vibe Test is the lead product under the same website and domain." · current Home link "Start a Vibe Test" → `https://vibe-test.oneapp.dev` (B2).
- Why it matters: nav item N2, footer F1, Home CTA "Explore Vibe Test" and the canonical URL all need a target; the current page has its own header, footer, fonts, language switch and no `<title>`/meta; D1 and D10 verdicts are inferred from this point.
- Options: (a) new page on wewill.tech in the global shell (slug to be decided), oneapp.dev redirected to it; (b) wewill.tech page, with oneapp.dev kept as the product/app entry point; (c) either of the above, keeping a product sub-navigation (Problem · How it works · …) inside the global shell, or dropping it.

**OQ-04 — What happens to `/ai-era-quality-services/`?**
- Raised by: neither document mentions the page · WB §III Solutions › Page introduction (p. 3): "not an internal services catalogue" · WB §III Solutions › Methodology (p. 4): "Use existing […] material only where it supports the five buyer problems."
- Why it matters: it is an indexed landing page whose CTA ("Book a 30-Min Discovery Call") and audience (PMs, software studios) differ from the approved framework and ICP; its "What We Deliver" section is a source for Solutions (C5).
- Options: (a) retire it and redirect to Solutions; (b) keep it unchanged but unlinked from the new navigation; (c) keep it and align its CTA and audience with the framework; (d) move its reusable parts into Solutions and retire the rest.

**OQ-05 — What happens to the 11 standalone one-section pages?**
- Raised by: neither document mentions them (C1); they are listed in `sitemap.xml` and duplicate Home sections word for word.
- Why it matters: once Home changes they will drift out of sync; some have natural new homes (`/team/` → About, `/knowledge/` → Resources, `/contact/` → the footer's "Contact / Talk to Us").
- Options: (a) redirect each to its new home; (b) keep them, updated to match the new sections; (c) keep them unchanged but remove them from `sitemap.xml` or mark them `noindex`; (d) retire them.

### B. Conversion and CTAs

**OQ-06 — Where does "Run a Guided Vibe Test" lead?**
- Raised by: WB §IV (p. 4): "Primary acquisition CTA; the agreed proof-of-value entry motion." (no destination) · SA §V Guided Proof of Value (p. 5): intended customer "Live product or executable MVP; technical owner and payer" · current equivalents go to four different places (X15).
- Why it matters: it is the primary conversion, placed in the top navigation, Home hero and final section, the Vibe Test page and Solutions use cases.
- Options: (a) the existing contact form with the request type preset; (b) a dedicated request form (fields to be approved by WE WILL; the SA qualification criteria are not form fields); (c) `mailto:hello@wewill.tech` as today's "Book a Demo"; (d) an anchor to the Vibe Test page's conversion block, which holds the form; (e) an external booking tool supplied by WE WILL.

**OQ-07 — Exact primary CTA wording, and whether the site says the proof of value is paid**
- Raised by: X2 — WB "Run a Guided Vibe Test" vs WB §II "Run a Guided Vibe Test proof of value" vs SA "Run a guided Vibe Test proof of value." vs WB Solutions › 3 "Discuss / Run Guided Vibe Test" · X24 — SA "Lead with a paid Vibe Test proof of value" and "Fixed-scope paid engagement; confirmed sponsor may pay".
- Why it matters: the label appears in about ten places; the current site speaks of a free "demo" and "No commitment", which the paid motion contradicts.
- Options: (a) "Run a Guided Vibe Test" everywhere; (b) the SA wording in conversion sections; (c) the short label on buttons with "proof of value" in the supporting line. For Solutions › 3: one combined button, or two buttons ("Discuss…" and "Run…"). On payment: say on the site that the proof of value is paid and fixed-scope (without prices), or leave that to the sales conversation.

**OQ-08 — Exact secondary CTA wording and destination**
- Raised by: X1 — "Discuss a Quality Requirement" (WB §III) · "Discuss a Business Care Quality Requirement" (WB §IV, footer) · "discuss a BCQ requirement" (WB §II) · "Discuss a BCQ Expert Services requirement." (SA §VI).
- Why it matters: used in Home expert layer, Vibe Test WE WILL connection, Solutions 3–5 and the footer.
- Options: (a) the WB §IV label everywhere; (b) the short §III label on buttons, the long label in the footer; (c) the SA label. Destination: contact form with a preset topic, a separate form, or `mailto:`.

**OQ-09 — Home "Final conversion": one CTA or two, and does the contact form stay on Home?**
- Raised by: X8 — WB §III (p. 3): "Close with the primary commercial action and secondary expert-service path." with only "Run a Guided Vibe Test" in the CTA cell · current `#contact` section with the form (B14, B15).
- Why it matters: decides MODIFY vs REPLACE for B14/T8 and whether Home keeps a form.
- Options: (a) primary button + secondary link, form removed from Home; (b) keep the form under a new heading, with both CTAs; (c) primary CTA only.

**OQ-10 — Contact destination and the legacy CTA labels**
- Raised by: WB nav (p. 5) has no Contact item · WB footer (p. 6): "About · Contact / Talk to Us" · WB §III About › Credibility CTA (p. 4): "Talk to Us".
- Why it matters: "Contact / Talk to Us" needs a URL; today the form lives on Home and `/contact/`; legacy labels "Talk to WE WILL", "Book a Clarity Session", "Book a 30-Min Discovery Call", "Book Call", "Send Message", "Explore (EN/AR)" have no place in the framework.
- Options: (a) keep `/contact/` as the contact page (footer and "Talk to Us" target); (b) put the form on About; (c) route all contact through the CTA form(s). For each legacy label: retire it, or map it to one of the framework CTAs.

### C. Brand and naming

**OQ-11 — Master-brand spelling, product lockup and "Vibe-Test." styling**
- Raised by: X3, X4 — "WE WILL Technology" (WB), "We Will Technology" (SA), "WE WILL" (both documents and the site), "WE WILL TECH" (site); "Vibe Test by WE WILL Technology" (WB) vs "Vibe Test by We Will Technology" (SA); "Vibe-Test." (current Vibe Test page).
- Why it matters: logo alt text, every `<title>` ("WE WILL - …"), `og:site_name`, hero and footer lockups, copyright line, legal information.
- Options: (a) "WE WILL Technology" (WB) and "Vibe Test by WE WILL Technology"; (b) "We Will Technology" (SA); (c) full name in lockups and legal lines, "WE WILL" as the short form in running copy. Separately: whether the Vibe Test logo keeps the "Vibe-Test." wordmark or follows "Vibe Test".

**OQ-12 — Naming of the methodology, services and resource area**
- Raised by: X5, X6, X28 — documents: "Business Care Quality (BCQ)", "BCQ Expert Services" ("Diagnostic, Release Decision and Managed Quality Care"), "Triad Framework", "Resources" / "Insights / Blog"; site: "Business-Care Quality", "Our Methodology." (GenAI section), "Quality as a Service (QaaS)" and other service names, "Triad Quality Framework (TQF)", "Blog" / "Knowledge" / "Deep Dive", Vibe Test section "Services" (five agents). SA §II (p. 2): "The website and sales narrative need to clarify this architecture."
- Why it matters: reused material (T23, T25, T26) must fit the approved architecture without renaming beyond what the documents approve.
- Options: (a) use the documents' names everywhere and place current service items under them; (b) keep current service names as capability labels inside Solutions › Methodology, with BCQ names for the offers; (c) keep current names where the documents are silent (e.g. "TQF", "Knowledge"). Also decide the Vibe Test "Services" label and the "Our Methodology." heading.

### D. Claims and evidence

**OQ-13 — Are the current Vibe Test capability claims accurate and approved?**
- Raised by: X21 — WB "supports fixes" and "where accurate" vs site "Tests. Fixes. Verifies.", "Autonomous fix → PR → merge → deploy → hand-off.", "Merged, deployed, and looped back for the next." · X22 — SA "Describe Vibe Test as an Agentic QA platform." vs "An autonomous QA team as a service" / "Your autonomous QA team." · X23 — "MVP · INVITE-ONLY" · SA (p. 2): "Internal QA retains product context and decision ownership." vs "Built for teams without a QA team."
- Why it matters: five Vibe Test blocks are REUSE, so this copy would carry over as-is; SA p. 7 requires "approved claims".
- Options: (a) WE WILL confirms the current wording → keep it; (b) keep the structure but use the documents' verbs ("verifies", "identifies issues", "supports fixes", "re-verifies") where claims are not confirmed; (c) remove unconfirmed lines (e.g. merge/deploy, "INVITE-ONLY").

**OQ-14 — Do the sample receipts, figures and video count as "existing proof"?**
- Raised by: X25 — "Confidence" "94%", "3 blockers cleared · 0 open" (B2); "confidence 98.7%", "42 checks", "18/18 pass" (D2, D7) · WB §III Vibe Test › Capabilities + evidence (p. 3): "Product capabilities, receipts/evidence, screenshots or existing proof." · SA p. 7: "approved claims".
- Why it matters: the Capabilities + evidence block is REUSE; illustrative data may read as real results. Also: the Vibe Test page's images are generated at runtime (`blob:` URLs), so logo and screenshot files must be supplied or re-exported.
- Options: (a) keep as-is; (b) keep, labelled as a sample; (c) replace with real receipts or screenshots from WE WILL. Separately: is the YouTube "Watch Vibe Test in action" video approved for the Vibe Test page?

**OQ-15 — AI Feature Evaluation: what may be published now?**
- Raised by: SA §III (p. 3): "Publish this claim only after WE WILL documents its framework, criteria, thresholds, outputs and customer evidence; do not claim protected IP without substantiation." · SA p. 4: "differentiation requires documented proof" · SA p. 5 evidence needed: "Framework, thresholds, outputs and customer proof" · SA p. 7 · WB §III Solutions › 3 is a NEW block (p. 3) · X35.
- Why it matters: T20 cannot be written without this; current GenAI content ("Contracts, Coverage Sets, and Behavioral Evaluation" B4; "GenAI Feature Evaluation" C5; "Grades AI features against quality contracts." D6) may already amount to a differentiation claim.
- Options: (a) publish use case 3 describing the buyer problem only, without method or differentiation claims, until the framework is supplied; (b) hold the block until WE WILL supplies the framework; (c) WE WILL confirms that the current GenAI evaluation content is the documented framework and approves it.

**OQ-16 — Impact statistics (32%, 65%, 2×)**
- Raised by: X12 — site `#impact` (B8) vs SA p. 7 "product evidence, approved claims"; WB (p. 3) "evidence points" undefined.
- Why it matters: the only numeric outcome claims on the site; a candidate for Home › Selected proof.
- Options: (a) keep as evidence points on Home once WE WILL confirms source and approval; (b) move them (e.g. to About › Credibility) with sources; (c) drop them until substantiated.

**OQ-17 — Which 2–3 testimonials, and where do the others go?**
- Raised by: X10 — WB (p. 3): "2–3 strongest testimonials / evidence points" · WB (p. 4): "Place relevant testimonials/evidence beside the most relevant buyer problem where possible." · WB (p. 4): "without repeating the full homepage proof stack".
- Why it matters: T6, T24 and T30 each need a specific selection; MICEtribe's first quote and Rasel's are near-identical, so attribution should be confirmed before either is featured.
- Options: (a) WE WILL names the 2–3 and confirms each attribution and wording; (b) select by agreed criteria (e.g. relevance to the primary ICP or to a use case); (c) combine one or two testimonials with other evidence points. Also: which testimonials sit beside which use case, and which appear on About.

**OQ-18 — What evidence exists for each use case?**
- Raised by: SA §V "Evidence needed" (p. 5): "Demo and pilot" · "Proof of value" · "Framework, thresholds, outputs and customer proof" · "Approved engagement" · "Customer workflow and service proof" · WB §III Solutions › Proof (p. 4).
- Why it matters: no current testimonial mentions Vibe Test; the AI-Era page offers only "Case studies available upon request during the discovery call."
- Options: (a) WE WILL supplies evidence per use case; (b) show existing testimonials only where relevant, nothing elsewhere; (c) omit proof beside use cases that lack evidence.

### E. Content sources and copy

**OQ-19 — Copy for the six NEW Solutions blocks and the Home buyer-problems preview**
- Raised by: WB §III Solutions rows (p. 3) and SA §V use cases (p. 5) — terse planning phrases in two slightly different versions (X11) · the project rule not to invent copy.
- Why it matters: T4 and T17–T22 have no current source and no approved page copy.
- Options: (a) use the documents' phrases verbatim as headings / one-line descriptions (choosing the WB or SA version); (b) WE WILL / Digify supply approved copy; (c) the prototype uses verbatim phrases plus clearly marked placeholders; (d) adapt related existing copy (AI-Era hero and "The Shift", services) where it matches — needs approval, since the brief marks these blocks NEW.

**OQ-20 — Home hero copy and composition**
- Raised by: WB §III Home › Hero (p. 2): "clarify the release-confidence / safe-to-ship outcome and target buyer" · SA §VI (p. 6) headline and subheadline, which name no buyer · SA §III (p. 3) positioning statement ("For Saudi product teams seeking faster, safer releases, […]") · X30, X31.
- Why it matters: the hero is the "Land" stage; the eyebrow "Software Quality • Business-Care • AI-Aware" and the "How a release earns its GO" visual are not mentioned.
- Options: (a) PRIMARY HEADLINE + Supporting subheadline verbatim, buyer left implicit; (b) add a buyer line taken from approved text (e.g. the positioning statement) — approval needed; (c) keep or drop the eyebrow and the GO visual; keep the spaced hyphen or typeset a dash.

**OQ-21 — Source for Home "WE WILL expert layer" (EDIT)**
- Raised by: WB §III (p. 2): "Briefly explain the combination of Vibe Test + BCQ methodology / expert judgment." · SA §VI (p. 6) supporting subheadline · candidates B3, B5, B6.
- Why it matters: EDIT implies existing content, but no single current section matches.
- Options: (a) adapt `#ai-era-quality-services-promo` (B3); (b) adapt `#why-we-will` (B5); (c) compose from approved SA sentences (subheadline, elevator pitch, BCQ Expert Services definitions); (d) a combination.

**OQ-22 — Source for Vibe Test "What it does" (REUSE)**
- Raised by: WB §III (p. 3): "Tests critical journeys, identifies issues, supports fixes and re-verifies changes." — the current page has no section of that name.
- Why it matters: a REUSE block with three candidate sources.
- Options: (a) the closed-loop summary from `#how` (D5); (b) the five agents from `#services` (D6); (c) the Home capability cards "Sweep & prove" / "Test, fix & verify" / "Receipts you can trust" (B2). Any choice must be reconciled with OQ-13.

**OQ-23 — Vibe Test "Who it is for": which audiences?**
- Raised by: X17 · SA §IV segments (p. 3) and SEGMENTATION RULE (p. 4).
- Why it matters: decides MODIFY vs REPLACE in effect for D8; the current three audiences are not the approved primary segment.
- Options: (a) replace the three cards with the approved segments (growth-stage product and engineering teams primary; enterprise digital teams secondary; funded MVP teams selectively); (b) keep "Early-stage startups" / "Small dev teams" with qualification wording (executable build, confirmed payer) — approved copy needed; (c) keep the heading, change the cards — or change the heading "Built for teams without a QA team." too, given "Internal QA retains product context and decision ownership."

**OQ-24 — Content for Vibe Test "WE WILL connection" (NEW)**
- Raised by: WB §III (p. 3): "Make the endorsed-product relationship explicit and provide a path to broader quality support." · WB §IV (p. 4): "Vibe Test expert-layer section" · SA §V hierarchy (p. 4).
- Why it matters: NEW block with no current copy.
- Options: (a) compose from approved SA sentences (hierarchy rows; "Lead with Vibe Test for recurring verification. Offer BCQ Expert Services when the buyer needs quality strategy, risk interpretation or accountable release support."; BCQ Expert Services definitions); (b) WE WILL / Digify supply copy; (c) reuse the Home expert-layer block on both pages.

**OQ-25 — Which existing capabilities go into Solutions › Methodology, and beside which use case?**
- Raised by: WB §III (p. 4): "only where it supports the five buyer problems".
- Why it matters: B6, B5 and C5 together hold about a dozen service/capability items (e.g. "Role-Aware Security Testing", "Risk Reports for PMs", "Quality Canvas", "Release Readiness Reviews").
- Options: (a) WE WILL / Digify map items to use cases; (b) one supporting-capabilities block listing all retained items; (c) attach each item to its use case (e.g. "Release Readiness Reviews" with 4. Release decision).

**OQ-26 — Source for About "Company story" (EDIT)**
- Raised by: WB §III (p. 4): "Short company background and current Agentic Software Quality positioning." — no current company-story section; SA §II describes internal commercial facts (e.g. "We Will Technology has testing, automation and release-support experience, but sales still depend heavily on referrals.") that are not written for publication.
- Why it matters: T27 has no source text.
- Options: (a) WE WILL supplies a short background; (b) use approved positioning sentences only (SA §III category paragraph, SA §V opening); (c) link the existing founder interview (B13) as the story.

**OQ-27 — Source for About "Quality philosophy" (EDIT)**
- Raised by: WB §III (p. 4): "Concise explanation of how WE WILL approach quality; avoid duplicating Solutions." · candidates B5, B9 (and the `#knowledge` intro phrase "WE WILL’s quality philosophy").
- Why it matters: must not repeat Solutions › Methodology, which may draw on the same sections.
- Options: (a) adapt `#why-we-will`; (b) adapt `#how-we-work`; (c) combine both, trimmed so it does not duplicate Solutions.

**OQ-28 — Keep or omit Quality Canvas and the Triad Framework, and who decides?**
- Raised by: WB §III Resources › Background methodology (p. 4): "Quality Canvas and Triad Framework may sit here only if still useful and coherent; otherwise omit." · WB footer (p. 6): "Methodology resources only if retained" · X19.
- Why it matters: T26 and footer F3 depend on it, and both terms are referenced in `#services` (B6), `#how-we-work` (B9), `#impact` (B8), AI-Era "Quality Strategy" (C5), `#knowledge` (B13), the Triad blog post (C14) and the external ChatGPT tool (B7).
- Options: (a) retain both in Resources and keep the cross-references; (b) retain one (e.g. the Triad as blog content) and omit the other; (c) omit both and remove or reword the cross-references (approved wording needed). Decision owner: WE WILL, Digify, or the implementation team against stated criteria.

**OQ-29 — Where do the positioning statement, one-sentence description, elevator pitch and pillars appear?**
- Raised by: SA §III (p. 3) and §VI (pp. 5–6) define them; WB §III assigns only an "Approved company-level proposition" (Home › Hero) and "current Agentic Software Quality positioning" (About › Company story) · X34.
- Why it matters: they are the only long-form approved copy, so they are the main material for blocks without a source (T5, T15, T27).
- Options: (a) use them only where a block's purpose calls for them (Hero, expert layer, WE WILL connection, About); (b) use the four pillars as the structure of a Home or Vibe Test block (this would add content not in §III); (c) keep them for sales material only.

**OQ-30 — Should page copy mention Saudi Arabia?**
- Raised by: X29 — SA "Compete in Agentic Software Quality in Saudi Arabia." (p. 2), "For Saudi product teams seeking faster, safer releases, […]" (p. 3); WB "with Saudi Arabia as the priority beachhead" (p. 2); WB §5 (p. 5): "Use only if data supports demand." (for the KSA keywords); the current site never mentions Saudi Arabia.
- Why it matters: affects the hero's "target buyer", Vibe Test audiences and About.
- Options: (a) state the Saudi focus in page copy using approved sentences; (b) keep copy region-neutral and target KSA through SEO only after validation; (c) mention it on About only.

**OQ-31 — Packages and pricing on the site**
- Raised by: SA §V packages table (p. 5) · "Before publishing prices, validate execution costs, typical usage, onboarding, support, environments, concurrency, margins and overage rules." (p. 5) · WB has no packages block; WB §III Vibe Test › Conversion (p. 3): "the agreed guided proof-of-value motion".
- Why it matters: the Conversion block has to explain the guided proof of value without prices.
- Options: (a) describe the Guided Proof of Value scope ("One environment; 2–3 journeys or one release workflow; agreed success criteria") without prices; (b) list the three package names without prices; (c) no package information on the site.

**OQ-32 — International-buyer safeguards**
- Raised by: SA §II (p. 2): "Address international-buyer concerns with specific access and delivery-continuity safeguards." · SA §IV enterprise concern (p. 3): "Accountable decision; security and continuity" · X32.
- Why it matters: an SA requirement with no website block; no safeguard wording has been supplied.
- Options: (a) cover it in Vibe Test › WE WILL connection or About › Credibility (approved copy needed); (b) an FAQ-style block (not in §III); (c) leave it to sales material.

### F. Legacy links and assets

**OQ-33 — Broken links: the Business-Care Quality card and the blog "original article" links**
- Raised by: C15 and CS `sitemap.md` problems 1–2 · SA §II (p. 2): "The website and sales narrative need to clarify this architecture."
- Why it matters: the Home/knowledge card "Business-Care Quality" points to a 404, and both blog posts end with a 404 link, yet the knowledge content is REUSE (T7, T25).
- Options: (a) point the card to the new place where BCQ is explained (Solutions › Methodology or Home expert layer); (b) create a BCQ explainer page (new content, not in §III); (c) remove the card and the "original article" links; (d) restore the original articles if WE WILL still has them.

**OQ-34 — What counts as "existing blog / insight items"?**
- Raised by: WB §III Home › Selected resources (p. 3): "Surface a small number of existing blog / insight items." · WB §III Resources › Blog / insights (p. 4): "Retain the existing blog / knowledge content in a dedicated resource area."
- Why it matters: the blog has two posts; three of the four knowledge cards link off-site (founder interview on tradeflockasia.com, LinkedIn Quality Canvas post) or to a 404; the Quality Canvas section also links to a LinkedIn article and a ChatGPT tool.
- Options: (a) on-site blog posts only; (b) blog posts plus the external knowledge links; (c) blog posts plus the founder interview only. Also: which items surface on Home.

**OQ-35 — Which client logos, and replacement files**
- Raised by: WB §III Home › Social proof strip (p. 2) and About › Credibility (p. 4) · CS `sitemap.md` problems 3–4 (Oyoun Media and In2World logos missing; One Studio logo alt "iStoria logo"; SellEnvo logo alt "Inspire").
- Why it matters: the strip must be "compact"; two logo files cannot be served.
- Options: (a) all 12 logos, with the missing files supplied by WE WILL; (b) a subset chosen by WE WILL (e.g. clients with testimonials, or those matching the ICP); (c) drop logos whose files are missing.

### G. Language, legal, SEO and chrome

**OQ-36 — Is Arabic in scope for the restructured pages?**
- Raised by: X14 — WB §5 (p. 5): "Validate KSA search volumes and Arabic/English variants." is the documents' only reference to Arabic; the site has an EN/AR switch on every page (A2); all approved messaging exists only in English.
- Why it matters: new and changed blocks have no Arabic text; leaving the switch on produces mixed-language pages; Arabic mode currently overflows sideways on Home and `/contact/` (cause: the contact form's spam-trap field); the project rules require RTL not to break.
- Options: (a) English only for new/changed content in the prototype, switch kept for untouched strings; (b) full Arabic, with translations supplied or approved by WE WILL; (c) hide the switch on new pages until translations exist. Also: is fixing the RTL overflow in scope?

**OQ-37 — Legal pages and "company/legal information"**
- Raised by: WB footer (p. 6): "Privacy Policy · Terms of Use · Cookie Policy if applicable · LinkedIn" and "Vibe Test by WE WILL Technology · Copyright · company/legal information" · X13.
- Why it matters: none of these pages exists and no text was supplied. On "if applicable": no analytics or cookie scripts were found in the captured wewill.tech HTML (the language choice uses `localStorage`); Google Fonts are loaded from Google.
- Options: (a) WE WILL supplies the legal texts and company details (legal entity, registration); (b) clearly marked placeholder links in the prototype; (c) omit the links until texts exist.

**OQ-38 — Social links, tagline and copyright line**
- Raised by: X27 — WB lists only LinkedIn (p. 6); site has LinkedIn, Facebook, WhatsApp, Instagram; tagline "Reduce Time, Reduce Cost & Be Confident"; "© 2023 WE WILL" vs Vibe Test page "© 2026 WE WILL TECH".
- Why it matters: footer content (A4, F5, F6).
- Options: (a) LinkedIn only, as listed; (b) keep all four; (c) LinkedIn plus WhatsApp as a contact channel. Tagline: keep or drop. Copyright year and entity follow OQ-11 and OQ-37.

**OQ-39 — Floating chat widget**
- Raised by: not mentioned in either document (A3).
- Why it matters: it is a third conversion path next to the two framework CTAs, currently on Home and `/contact/` only.
- Options: (a) keep on all pages; (b) keep where it is today; (c) remove; and whether its buttons should lead to the framework CTAs.

**OQ-40 — Page titles, meta descriptions, sitemap and redirects**
- Raised by: WB §5 (p. 5): "They are not final SEO targets." · SA §III (p. 2): "Retain buyer search terms such as AI software testing, autonomous testing, regression testing and release verification."
- Why it matters: new pages need `<title>` and meta text; current meta uses unapproved terms (e.g. "agentic regression", "AI-aware product care"); the Vibe Test page has no `<title>` or meta at all; URL changes (OQ-03 to OQ-05) need a sitemap and redirects.
- Options: (a) provisional titles and meta built only from approved messaging, flagged for later validation; (b) keep current meta where pages persist; (c) wait for the website team's keyword validation.
