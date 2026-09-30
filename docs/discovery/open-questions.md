# Open questions — decisions needed at Checkpoint 1

Source: `doc-analysis.md` §6 (the quotes behind each question are there). Each question has a **recommended default** chosen by three rules: stay within the strategy documents, never invent copy, and keep the prototype deliverable. Where the documents are silent, the default is the conservative choice and is flagged for WE WILL to confirm later.

"Blocks" says which phase needs the answer: **P2** design direction, **P3** specs, **P4** build.

## A. Scope and structure

| # | Question | Recommended default | Blocks |
|---|---|---|---|
| OQ-01 | How many pages are in scope? The Strategic Alignment says "the homepage and one or two priority pages"; the brief details five pages. | **All five pages** (Home, Vibe Test, Solutions, Resources, About). Resources and About are built only by relocating existing content plus approved sentences. | P3 |
| OQ-02 | Is the brief's 8-block Home list the whole Home page, in that order? | **Yes: Home = the 8 blocks in the brief's order.** The 6 unlisted sections leave Home and go to the destinations the documents name (Solutions, Resources, About), otherwise they are parked (kept in the code, not shown). | P3 |
| OQ-03 | Vibe Test page URL, page shell, and the future of vibe-test.oneapp.dev | **`/vibe-test/`**, inside the global wewill.tech header and footer, no separate product sub-navigation. Redirecting or keeping vibe-test.oneapp.dev is WE WILL's decision after launch (outside the prototype). | P3 |
| OQ-04 | What happens to `/ai-era-quality-services/`? | **Reuse its "What We Deliver" items in Solutions › Methodology; leave the page itself unchanged and unlinked from the new navigation.** Retiring or redirecting it is WE WILL's call. | P3 |
| OQ-05 | What happens to the 11 one-section pages (`/team/`, `/services/`, …)? | **Redirect each to its new home** (e.g. `/team/` → About, `/knowledge/` → Resources, `/services/` → Solutions); **`/contact/` stays** as the contact page. | P4 |

## B. Conversion and CTAs

| # | Question | Recommended default | Blocks |
|---|---|---|---|
| OQ-06 | Where does "Run a Guided Vibe Test" lead? | **The existing contact form on `/contact/`, with the request type preset** (the form gets a request-type choice whose options are the two CTA labels). The form still needs WE WILL's server to send. | P3 |
| OQ-07 | Exact primary label; say that the proof of value is paid? | **"Run a Guided Vibe Test" on every button** (brief §IV). Where a block has a supporting line, use the Strategic Alignment's Guided Proof of Value scope wording. **No prices and no mention of payment** (left to sales). Solutions use case 3 gets **two buttons** ("Discuss a Quality Requirement" + "Run a Guided Vibe Test"). | P3 |
| OQ-08 | Exact secondary label and destination | **"Discuss a Quality Requirement" on buttons** (brief §III) and **"Discuss a Business Care Quality Requirement" in the footer** (brief §IV/footer), both to the contact form with that request type preset. | P3 |
| OQ-09 | Home "Final conversion": one CTA or two; does the form stay on Home? | **Primary button + secondary link; the form moves off Home** (one canonical form on `/contact/`). | P3 |
| OQ-10 | Contact destination and legacy labels ("Book a Clarity Session", "Talk to WE WILL", "Book a Demo", "Book a 30-Min Discovery Call", "Explore (EN/AR)", …) | **`/contact/` is the "Contact / Talk to Us" page.** Legacy labels are retired: the ones that start an engagement become "Run a Guided Vibe Test"; "Talk to WE WILL" becomes "Talk to Us". | P3 |

## C. Brand and naming

| # | Question | Recommended default | Blocks |
|---|---|---|---|
| OQ-11 | Brand spelling (WE WILL Technology / We Will Technology / WE WILL / WE WILL TECH) and the product lockup | **"WE WILL Technology" in lockups, page titles and legal lines; "WE WILL" as the short form in running copy; product lockup "Vibe Test by WE WILL Technology"** (all from the brief). The "Vibe-Test." wordmark is a brand-identity question for Digify's identity workstream; the prototype writes "Vibe Test". | P2 |
| OQ-12 | Names of the methodology, services and resource area | **The documents' names for offers and methodology** ("Business Care Quality (BCQ)", "BCQ Expert Services": Quality Diagnostic, Release Decision, Managed Quality Care; "Resources"). Current service names survive only as capability labels inside Solutions › Methodology. The Vibe Test page's "Services" label becomes "Capabilities" (the brief's block name). | P3 |

## D. Claims and evidence

| # | Question | Recommended default | Blocks |
|---|---|---|---|
| OQ-13 | Are the current Vibe Test claims accurate ("Tests. Fixes. Verifies.", "fix → PR → merge → deploy", "Your autonomous QA team", "MVP · INVITE-ONLY")? | **Reuse the current wording as-is** (the brief says REUSE and "retain the current strong product proposition"), and **list every claim that goes beyond the documents' verbs ("supports fixes") for WE WILL to confirm**. If WE WILL rejects a line, it is swapped for the documents' verbs. | P3 |
| OQ-14 | Do the sample receipts (94%, 98.7%, "18/18 pass") and the video count as proof? | **Keep them; label the receipts as samples**; WE WILL to supply real receipts or screenshots later. Keep the "Watch Vibe Test in action" video. | P3 |
| OQ-15 | AI Feature Evaluation: what can be published now? | **Describe use case 3 as a buyer problem only** (document phrases), with **no method, framework or differentiation claims** until WE WILL supplies the documented framework. | P3 |
| OQ-16 | The Impact figures (↓32%, ↑65%, 2×) | **Leave them out of the new pages until WE WILL confirms their source.** | P3 |
| OQ-17 | Which 2–3 testimonials are "strongest"? | **Proposal for WE WILL to confirm: iStoria, Darent and SellEnvo** (each specific and distinct). Hold MICEtribe and Rasel until their near-identical wording is checked. | P3 |
| OQ-18 | What evidence exists per use case? | **Show an existing testimonial beside a use case only where it clearly fits; show nothing where no evidence exists.** | P3 |

## E. Content sources and copy

| # | Question | Recommended default | Blocks |
|---|---|---|---|
| OQ-19 | Copy for the six NEW Solutions blocks and the Home buyer-problems preview | **Use the documents' phrases verbatim**: block name as heading, the brief's §III line as description, the Strategic Alignment's outcome as supporting line. No invented body copy; marked "provisional — from strategy documents" in the handoff notes. | P3 |
| OQ-20 | Home hero copy and composition | **Headline and subheadline verbatim** from the Strategic Alignment ("Know what is safe to ship - at the speed you build." + supporting subheadline). **Keep the "How a release earns its GO" visual** (reused, and rated the strongest product-true device). The target-buyer line needs approved wording from WE WILL; until then the buyer stays implicit. | P3 |
| OQ-21 | Source for Home "WE WILL expert layer" | **Approved Strategic Alignment sentences** (supporting subheadline, BCQ Expert Services definitions, "Lead with Vibe Test…" sentence), with the current "Business-Care Quality" card as supporting material. | P3 |
| OQ-22 | Source for Vibe Test "What it does" | **The three Home capability cards** ("Sweep & prove", "Test, fix & verify", "Receipts you can trust"); "How it works" keeps the closed-loop section. | P3 |
| OQ-23 | Vibe Test "Who it is for": which audiences? | **Replace the three cards with the approved segments** (growth-stage product and engineering teams; enterprise digital teams; funded MVP teams, selectively), in the Strategic Alignment's wording. | P3 |
| OQ-24 | Content for Vibe Test "WE WILL connection" (NEW) | **Approved Strategic Alignment sentences** (commercial hierarchy, "Lead with Vibe Test for recurring verification. Offer BCQ Expert Services when…"). | P3 |
| OQ-25 | Which existing capabilities go into Solutions › Methodology? | **One "supporting capabilities" block** listing the retained items under the BCQ names; mapping each to a use case is left for WE WILL to refine. | P3 |
| OQ-26 | Source for About "Company story" | **Approved positioning sentences** (the Agentic Software Quality category paragraph) plus a link to the existing founder interview. WE WILL to supply a short background for launch. | P3 |
| OQ-27 | Source for About "Quality philosophy" | **Adapt the current "Why WE WILL" section** (its three principles), trimmed so it does not repeat Solutions. | P3 |
| OQ-28 | Keep or omit Quality Canvas and the Triad Framework? | **Keep both in Resources › Background methodology for the prototype** (existing content, no rewording needed); WE WILL decides whether they are "still useful and coherent". | P3 |
| OQ-29 | Where do the positioning statement, elevator pitch and pillars appear? | **Only where a block's purpose calls for them** (hero, expert layer, WE WILL connection, About). | P3 |
| OQ-30 | Should page copy mention Saudi Arabia? | **No explicit mention for now**; Saudi focus handled through Arabic and later SEO, after the keyword validation the brief asks for. | P3 |
| OQ-31 | Packages and pricing on the site | **Describe the Guided Proof of Value scope** ("One environment; 2–3 journeys or one release workflow; agreed success criteria") **without prices**, in the Vibe Test Conversion block. | P3 |
| OQ-32 | International-buyer safeguards | **Leave to sales material** (no approved wording exists). | — |

## F. Legacy links and assets

| # | Question | Recommended default | Blocks |
|---|---|---|---|
| OQ-33 | Broken links (Business-Care Quality card → 404; blog "original article" links → 404) | **Point the Business-Care Quality card to where BCQ is now explained (Solutions › Methodology); remove the two "original article" links.** | P4 |
| OQ-34 | What counts as "existing blog / insight items"? | **Both blog posts plus the existing external knowledge links** (founder interview, LinkedIn Quality Canvas post). Home surfaces three: the two posts and the founder interview. | P3 |
| OQ-35 | Which client logos? | **The 10 logos whose files exist**, with the two wrong alt texts corrected; Oyoun Media and In2World return when WE WILL supplies the files. | P4 |

## G. Language, legal, SEO and chrome

| # | Question | Recommended default | Blocks |
|---|---|---|---|
| OQ-36 | Is Arabic in scope for the restructured pages? | **Keep the EN/AR switch and all existing Arabic. Fix the RTL overflow bug. New or changed English strings get translation keys with no Arabic yet (they fall back to English), and the handoff includes a translation sheet for WE WILL.** | P2 |
| OQ-37 | Legal pages (Privacy Policy, Terms of Use, Cookie Policy) and company details | **Footer links to clearly marked stub pages ("to be supplied by WE WILL")**; no legal text is written. | P4 |
| OQ-38 | Social links, tagline, copyright line | **LinkedIn only** (as the brief lists); **drop the tagline**; copyright "© 2026 WE WILL Technology". | P4 |
| OQ-39 | Floating chat widget | **Keep it where it is today** (Home and `/contact/`), unchanged apart from accessibility fixes from the audit. | P4 |
| OQ-40 | Page titles, meta descriptions, sitemap and redirects | **Provisional titles and descriptions built only from approved messaging, flagged for SEO validation**; keep current meta where a page persists; add a sitemap and the redirects from OQ-05. | P4 |

## Design questions from the Impeccable critique

| # | Question | Recommended default | Blocks |
|---|---|---|---|
| D-1 | Tone: the current hero reads as "AI startup hype" (six nonstop animations, glows, shimmer) while the promise is *confidence you can defend*. Which tone should the direction set? | **Calm, precise, evidence-first**: keep the brand colours, fonts and the product-true devices (GO track, release receipt), and cut decorative motion. | P2 |
| D-2 | Priority: which issue category first? | **1. Arabic/RTL and mobile navigation breakage, 2. conversion clarity (one primary action), 3. proof credibility, 4. visual hierarchy.** | P4 |
| D-3 | Which sections are off-limits (KEEP, preserved as they are)? | **The nine KEEP rows in the Section Matrix**, touched only to align them with shared design tokens (reported when done). | P4 |

## Decisions at Checkpoint 1 (2026-09-28)

The user's ruling:
1. **Anything the strategy documents do not mention stays exactly as on the old site.** No changes. This overrides every default above that proposed changing an unmentioned element, including:
   - The EN/AR switch and existing Arabic stay as they are. The RTL overflow bug is **not** fixed; it is recorded as a known bug.
   - The chat widget stays unchanged.
   - The 11 one-section pages and `/ai-era-quality-services/` stay unchanged.
   - The broken links (`/business-care-quality`, the blog "original article" links) stay.
   - The unmentioned Home sections stay on Home, unchanged: `#ai-era-quality-services-promo`, `#genai-based-systems`, `#impact`, `#how-we-work`. This overrides OQ-02's "Home = exactly 8 blocks"; they keep their current relative order.
2. **Where the documents do mention an element**, the recommended defaults above apply.
3. **Work proceeds one section at a time**, with a review stop after each section.
