# Spec Delta

## Purpose

The use-case preview lets a visitor recognise their release situation among the five approved buyer problems and routes them into Solutions without explaining each in full.

## ADDED Requirements

### Requirement: Five approved use cases, previewed
**Action: NEW.** The `#use-cases` section SHALL show the H2 "Which release situation are you facing?" and the lead "Software output is accelerating while manual or brittle verification struggles to keep pace." (both DRAFT: needs approval). It SHALL then show five cards in this order, each with its number, name, trigger/solution line and outcome, quoted from the Strategic Alignment:

| # | Name | Trigger and solution | Outcome |
|---|---|---|---|
| 1 | Release verification | Frequent releases; Vibe Test on critical journeys | Faster evidence-based cycles |
| 2 | AI-assisted development | Output exceeds QA; Vibe Test on changes | Verification keeps pace |
| 3 | AI Feature Evaluation | AI-feature launch; WE WILL approach executed by Vibe Test | Evidence against risk criteria |
| 4 | Release decision | High-impact launch; BCQ Expert Services with test evidence | Accountable go / no-go advice |
| 5 | Lean-team quality | Limited QA leadership; Vibe Test plus Managed Quality Care | Scalable quality capacity |

Source: Website Brief §III Home › Buyer problems / use cases, "Preview the five approved use cases; route into Solutions rather than explaining each in full."; Strategic Alignment §V, Priority use cases table; §III, "Software output is accelerating while manual or brittle verification struggles to keep pace."

#### Scenario: Content
- **WHEN** Home is shown in English
- **THEN** the five cards show exactly the text above, in order
- **AND** no card claims AI Feature Evaluation differentiation or protected IP

#### Scenario: Card links
- **WHEN** a visitor activates a card
- **THEN** it opens `/solutions/#release-verification`, `#ai-assisted-development`, `#ai-feature-evaluation`, `#release-decision` or `#lean-team-quality` respectively

### Requirement: Route to Solutions
**Action: NEW.** The section SHALL end with the button "Explore Solutions" → `/solutions/`. Source: Website Brief §III, CTA "Explore Solutions".

#### Scenario: CTA
- **WHEN** a visitor activates "Explore Solutions"
- **THEN** `/solutions/` opens in the same tab

### Requirement: Responsive, accessible cards
**Action: NEW.** At 1440 px the cards SHALL sit in one row or a balanced grid; at 390 px they SHALL stack in one column without overflow. Each card SHALL be one link with an H3 name and a visible focus state. Source: project rule WCAG 2.2 AA.

#### Scenario: Mobile and keyboard
- **WHEN** the section is viewed at 390 px and navigated by keyboard
- **THEN** the cards stack, each card is a single tab stop with a visible focus ring, and text contrast is at least 4.5:1
