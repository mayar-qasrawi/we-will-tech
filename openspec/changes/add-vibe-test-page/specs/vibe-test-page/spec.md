# Spec Delta

## Purpose

The Vibe Test page is the lead product's dedicated page inside wewill.tech. It explains the product's value, how it works, its evidence and who it is for, links it to WE WILL Technology, and leads into the guided proof of value.

## ADDED Requirements

### Requirement: Page in the global site
**Action: NEW (route).** `/vibe-test/` SHALL use the global header and footer, mark "Vibe Test" as the active nav item, and render its blocks in this order: `#top`, `#problem`, `#what-it-does`, `#how`, `#services`, `#receipt`, `#who`, `#we-will`, `#book`. It SHALL have the title "Vibe Test by WE WILL Technology | Agentic QA Platform", the meta description from the proposal, canonical `https://wewill.tech/vibe-test/`, `lang` set, and exactly one H1. Source: Website Brief §I, Vibe Test, "Dedicated product page within wewill.tech."

#### Scenario: Structure and metadata
- **WHEN** `/vibe-test/` is built
- **THEN** the nine IDs appear in order, once each
- **AND** the title is ≤ 60 characters, the description ≤ 155, and there is one H1

#### Scenario: Old anchors resolve
- **WHEN** a visitor opens `/vibe-test/#services`, `#receipt`, `#who`, `#how`, `#problem`, `#book` or `#top`
- **THEN** the page scrolls to the matching block

### Requirement: Product hero
**Action: REUSE.** The hero SHALL show the logo and lockup "Vibe Test by WE WILL Technology", the eyebrow "AGENTIC QA PLATFORM — MVP · INVITE-ONLY", the proposition "Tests. Fixes. Verifies. Hands you the receipts.", the subtitle "Your autonomous QA team. Connect your app or repo — expert agents run the QA a senior team would, and prove it with evidence, not claims.", the LIVE QA RUN terminal lines and the marquee band, all with their current VT Arabic. Buttons: "Run a Guided Vibe Test" → `/contact/?request=guided-vibe-test` (primary) and "See how it works" → `#how`. Source: Website Brief §III Vibe Test › Product hero, "Vibe Test by WE WILL Technology; retain the current strong product proposition and product-first presentation.", CTA "Run a Guided Vibe Test".

#### Scenario: Hero content
- **WHEN** the page loads in English
- **THEN** the H1's accessible name contains "Vibe Test by WE WILL Technology" and "Tests. Fixes. Verifies. Hands you the receipts."
- **AND** no "Book a Demo" label appears anywhere on the page

#### Scenario: Reduced motion
- **WHEN** a visitor prefers reduced motion
- **THEN** all five terminal lines are visible without animation and the marquee does not move

### Requirement: Problem / context
**Action: REUSE.** `#problem` SHALL show "Shipping is easy. Proving it works is not." and its three cards (Teams ship faster than they can QA; Real QA needs expert testers; Tools only find issues) verbatim in EN and AR. Source: Website Brief §III Vibe Test › Problem / context, "Why manual or conventional verification does not keep pace with modern product delivery."

#### Scenario: Problem content
- **WHEN** `#problem` is shown in English and in Arabic
- **THEN** its text equals the current VT section in that language

### Requirement: What it does
**Action: REUSE.** `#what-it-does` SHALL show the H2 "Verify critical journeys. Detect issues. Re-verify fixes." (DRAFT: needs approval, from the SA §V diagram "Verify critical journeys · Detect issues · Re-verify fixes") and the three existing wewill.tech capability cards "Sweep & prove", "Test, fix & verify", "Receipts you can trust" verbatim. Source: Website Brief §III Vibe Test › What it does, "Tests critical journeys, identifies issues, supports fixes and re-verifies changes."; Q8 default.

#### Scenario: Cards
- **WHEN** the block is shown
- **THEN** the three cards' titles and bodies equal the current Home `#vibe-test` cards

### Requirement: How it works
**Action: REUSE.** `#how` SHALL show "A closed loop. Not a checklist.", the closed-loop visual (Discover · Fix · Verify · Ship) and the four steps with their current EN and AR text. Source: Website Brief §III Vibe Test › How it works, "Retain the current product workflow / autonomous-agent explanation where accurate."

#### Scenario: Steps
- **WHEN** `#how` is shown
- **THEN** the steps 01 Discover, 02 Fix, 03 Verify, 04 Ship appear with their current descriptions

### Requirement: Capabilities and evidence
**Action: REUSE.** `#services` SHALL be labelled "Capabilities" and show "Five agents. One QA team." with the cards Sweep, Journeys, Bug Testing, Bug Fixing verbatim. The fifth card SHALL read "AI Feature Evaluation — A WE WILL-developed approach executed through Vibe Test." (DRAFT: needs approval). `#receipt` SHALL show "Evidence, not claims.", its three points and the receipt card with a visible "Sample receipt" label. The block SHALL include the existing video "Watch Vibe Test in action" and a visible placeholder "Product screenshots — to be supplied by WE WILL". Source: Website Brief §III Vibe Test › Capabilities + evidence, "Product capabilities, receipts/evidence, screenshots or existing proof."; Strategic Alignment §V, "AI Feature Evaluation — WE WILL-developed approach executed through Vibe Test; differentiation requires documented proof".

#### Scenario: Claims rule
- **WHEN** the page text is searched
- **THEN** "Grades AI features against quality contracts" is absent
- **AND** no text claims AI Feature Evaluation differentiation or protected IP

#### Scenario: Evidence labelling
- **WHEN** the receipt card and the screenshot area are shown
- **THEN** the receipt says "Sample receipt" and the screenshot area is a clearly marked placeholder, not an image

### Requirement: Who it is for
**Action: EDIT.** `#who` SHALL show the H2 "Built for product teams with live products and recurring releases." and three cards (all DRAFT: needs approval, worded from SA §III–IV):
- "Growth-stage product and engineering teams" — "Regression backlog, defects and release delay. More coverage and reliable proof across critical journeys."
- "Enterprise digital teams" — "A major launch or AI feature with release risk, where the decision must be accountable."
- "Funded MVP and pre-launch teams" — "An executable build and a pilot or launch to prepare, with limited QA capacity."

The current H2 and the solo developers / vibe coders / early-stage startups cards SHALL be removed. Source: Website Brief §III Vibe Test › Who it is for, "Growth-stage product and engineering teams; align to approved segmentation."; Strategic Alignment §IV segment table.

#### Scenario: Segments
- **WHEN** `#who` is shown
- **THEN** it shows the three approved-segment cards above
- **AND** "Built for teams without a QA team", "Vibe coders" and "solo developers" are absent

### Requirement: WE WILL connection
**Action: NEW.** `#we-will` SHALL show the H2 "Product plus judgment." and the lead "Vibe Test verifies; BCQ connects evidence to customer and release risk; expert services support consequential decisions." (SA §III differentiator). It SHALL present the relationship as three items: Vibe Test by WE WILL Technology (Agentic QA platform), Business Care Quality methodology ("Connects quality evidence with customer impact, business risk and release decisions"), BCQ Expert Services (Quality Diagnostic, Release Decision, Managed Quality Care). Then the line "Use Vibe Test for recurring verification. Add BCQ Expert Services when you need quality strategy, risk interpretation or accountable release support." and the button "Discuss a Quality Requirement" → `/contact/?request=bcq-requirement`. All DRAFT: needs approval. Source: Website Brief §III Vibe Test › WE WILL connection, "Make the endorsed-product relationship explicit and provide a path to broader quality support."; Strategic Alignment §V, "Lead with Vibe Test for recurring verification. Offer BCQ Expert Services when the buyer needs quality strategy, risk interpretation or accountable release support."

#### Scenario: Relationship and CTA
- **WHEN** `#we-will` is shown
- **THEN** it names WE WILL Technology, Business Care Quality and the three BCQ Expert Services
- **AND** its button opens `/contact/` with the BCQ request type preselected
- **AND** it shows no price

### Requirement: Conversion
**Action: EDIT.** `#book` SHALL keep "Ship with confidence." and show "Start with a Guided Proof of Value: one environment, 2–3 journeys or one release workflow, and agreed success criteria. Evidence, not claims." (DRAFT: needs approval), with the button "Run a Guided Vibe Test" → `/contact/?request=guided-vibe-test`. It SHALL NOT mention a demo, a price or payment. Source: Website Brief §III Vibe Test › Conversion, "Replace generic demo language with the agreed guided proof-of-value motion."; Strategic Alignment §V Guided Proof of Value, "One environment; 2–3 journeys or one release workflow; agreed success criteria"; Q6 default.

#### Scenario: Conversion content
- **WHEN** `#book` is shown
- **THEN** the text above and the primary button appear
- **AND** the section contains no `mailto:` link and none of "demo", "price", "paid"

### Requirement: Responsive, bilingual, accessible
**Action: NEW.** The page SHALL have no horizontal overflow at 1440 px or 390 px in English. Grids SHALL stack at 390 px, all buttons SHALL be ≥ 44 px tall with visible focus, text contrast SHALL be ≥ 4.5:1, and decorative images and marquee text SHALL be hidden from assistive technology. In Arabic the page SHALL be right-to-left and show the reused VT Arabic, with English for strings without approved Arabic and none blank. Source: project rules WCAG 2.2 AA and RTL.

#### Scenario: Mobile
- **WHEN** the page is viewed at 390 px
- **THEN** `scrollWidth` equals the viewport width and every block reads top to bottom

#### Scenario: Arabic
- **WHEN** the visitor switches to Arabic
- **THEN** `dir="rtl"`, the problem and how-it-works copy show their VT Arabic, and no text element is empty
