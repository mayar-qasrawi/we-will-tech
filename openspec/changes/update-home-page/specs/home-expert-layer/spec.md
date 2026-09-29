# Spec Delta

## Purpose

The expert-layer block explains briefly how Vibe Test, the BCQ methodology and BCQ Expert Services work together, and offers the secondary expert path.

## ADDED Requirements

### Requirement: Product plus judgment explained
**Action: EDIT.** The `#expert-layer` section SHALL show:
- kicker "Business Care Quality"
- H2 "Continuous verification and accountable quality judgment for release decisions." (SA core value proposition)
- lead "WE WILL Technology combines Vibe Test Agentic QA with BCQ methodology and expert judgment to help product teams release with confidence." (SA one-sentence description)
- three parts, each with an H3:
  - **Vibe Test** — "Agentic QA platform" · "Verify critical journeys · Detect issues · Re-verify fixes"
  - **BCQ Expert Services** — "Human quality judgment" · "Assess risk · Advise on release", listing Quality Diagnostic ("review of product and release risks"), Release Decision ("review of evidence and go / no-go criteria"), Managed Quality Care ("expert oversight")
  - **Business Care Quality methodology** — "Connects quality evidence with customer impact, business risk and release decisions", followed by the existing card text "We start from the product's business goals, not from test tools. Every quality activity is mapped to a decision you need to make with confidence."

The composition is DRAFT: needs approval. Source: Website Brief §III Home › WE WILL expert layer, "Briefly explain the combination of Vibe Test + BCQ methodology / expert judgment."; Strategic Alignment §V diagram and "BCQ Expert Services"; §VI, "Core value proposition" and "One-sentence description"; current site `#why-we-will`, card "Business-Care Quality".

#### Scenario: Content and claims
- **WHEN** the section is shown in English
- **THEN** the text matches the items above
- **AND** it contains no price and none of the words "fixed-fee", "monthly" or "paid"

### Requirement: Secondary expert CTA
**Action: EDIT.** The section SHALL end with the button "Discuss a Quality Requirement" → `/contact/?request=bcq-requirement`. Source: Website Brief §III, CTA "Discuss a Quality Requirement"; §IV, "selected Home support block".

#### Scenario: CTA
- **WHEN** a visitor activates the button
- **THEN** `/contact/` opens with "Discuss a Business Care Quality Requirement" preselected

### Requirement: Layout
**Action: EDIT.** At 1440 px the three parts SHALL read as one connected structure (product and expert service side by side, methodology spanning beneath). At 390 px they SHALL stack without overflow. Source: Strategic Alignment §V diagram layout.

#### Scenario: Responsive
- **WHEN** the section is viewed at 1440 px and 390 px
- **THEN** the desktop view shows the two-over-one structure, and the mobile view stacks the three parts in reading order
