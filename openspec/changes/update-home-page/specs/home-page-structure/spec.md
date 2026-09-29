# Spec Delta

## Purpose

Home follows the Website Brief's eight-block order, carrying a visitor from proposition to proof to action, while the sections the Brief moves elsewhere leave Home without being deleted.

## ADDED Requirements

### Requirement: Eight blocks in Brief order
**Action: EDIT.** Home SHALL render exactly these sections in this order: `#hero`, `#clients`, `#vibe-test`, `#use-cases`, `#expert-layer`, `#success-stories`, `#knowledge`, `#get-started`. Source: Website Brief §III, Home rows Hero → Final conversion.

#### Scenario: Section order
- **WHEN** a visitor loads `/`
- **THEN** the page's top-level sections are those eight IDs in that order, each exactly once

### Requirement: Unlisted sections leave Home
**Action: REUSE (relocation).** Home SHALL NOT show `#ai-era-quality-services-promo`, `#genai-based-systems`, `#why-we-will`, `#services`, `#quality-canvas`, `#impact`, `#how-we-work`, `#team` or the contact form. Their partial files SHALL remain in the repository. Source: Website Brief §III About › Team, "Move the existing team content from the long homepage into a dedicated company context"; §III Resources › Background methodology; §III Solutions › Methodology; Q1 default.

#### Scenario: Removed from Home
- **WHEN** `/` is built
- **THEN** none of those IDs and no `#contact-form` appear in its HTML
- **AND** every one of their partial files still exists under `src/_includes/sections/home/`

### Requirement: Home metadata uses approved messaging
**Action: EDIT.** Home SHALL have the title "Agentic Software Quality | WE WILL Technology", the meta description "Know what is safe to ship at the speed you build. Vibe Test verifies critical journeys; BCQ Expert Services add human judgment where risk requires it.", matching OG and Twitter text, and canonical `https://wewill.tech/`. The OG image SHALL no longer carry "We don't just test software. We protect product decisions.". Source: Strategic Alignment §VI, "PRIMARY HEADLINE: Know what is safe to ship - at the speed you build."; §III, "position as an Agentic Software Quality company". Keywords are pending keyword research.

#### Scenario: Metadata
- **WHEN** the built `/` head is inspected
- **THEN** the title is at most 60 characters and the description at most 155
- **AND** no meta tag contains "We don't just test software"

### Requirement: Home layout and accessibility baseline
**Action: EDIT.** At 1440 px and 390 px, Home SHALL have one H1 and no skipped heading levels, and SHALL show no horizontal overflow in English. Every new image SHALL have descriptive alt text or be marked decorative. Source: project rule WCAG 2.2 AA.

#### Scenario: Headings and overflow
- **WHEN** Home is checked at 1440 px and 390 px in English
- **THEN** there is exactly one H1, section titles are H2, card titles are H3
- **AND** `document.documentElement.scrollWidth` equals the viewport width
