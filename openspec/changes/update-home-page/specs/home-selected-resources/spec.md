# Spec Delta

## Purpose

The selected-resources block surfaces a few existing insights on Home and routes visitors to the full Resources area.

## ADDED Requirements

### Requirement: Three existing items
**Action: REUSE.** `#knowledge` SHALL keep its kicker, title "Deep Dive into Our Knowledge." and subtitle, and show three existing items with their current titles and descriptions: "Triad Quality Framework (TQF)" → `/blog/the-triad-quality-framework/`; the blog post "When software quality becomes a business decision" → `/blog/when-software-quality-becomes-a-business-decision/` (title and excerpt reused from `/blog/`); "Interview with Our Founder" → its current external URL. The "Business-Care Quality" and "Quality Canvas" cards SHALL leave Home. Source: Website Brief §III Home › Selected resources, "Surface a small number of existing blog / insight items."; Q12 default.

#### Scenario: Content
- **WHEN** Home is shown in English
- **THEN** exactly these three cards appear, with copy identical to their current source
- **AND** no card links to `https://wewill.tech/business-care-quality`

### Requirement: View Resources CTA
**Action: REUSE.** The section SHALL end with the button "View Resources" → `/resources/`. Source: Website Brief §III, CTA "View Resources".

#### Scenario: CTA
- **WHEN** a visitor activates "View Resources"
- **THEN** `/resources/` opens in the same tab

### Requirement: Layout and links
**Action: REUSE.** The cards SHALL keep the current card style, with three columns at 1440 px and a stack at 390 px without overflow. Internal links SHALL open in the same tab; the external interview SHALL open in a new tab with `rel="noopener"`. Source: project rule WCAG 2.2 AA.

#### Scenario: Link targets
- **WHEN** the cards are inspected
- **THEN** both blog links have no `target="_blank"` and the interview link has `target="_blank" rel="noopener"`
