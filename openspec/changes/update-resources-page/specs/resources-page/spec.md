# Spec Delta

## Purpose

The Resources page gathers WE WILL's existing blog posts and insights, and the methodology background worth keeping, into the authority area named in the navigation.

## ADDED Requirements

### Requirement: Page structure and metadata
**Action: NEW (route).** `/resources/` SHALL use the global chrome with "Resources" active and render `#insights`, `#methodology` and the reused `#quality-canvas`, in that order. It SHALL have the title "Software Quality Resources | WE WILL Technology", the proposal's meta description, canonical `https://wewill.tech/resources/` and one H1. Source: Website Brief §I, Resources, "House the existing blog/insights and, only where useful, background methodology such as Quality Canvas / Triad Framework."

#### Scenario: Structure
- **WHEN** `/resources/` is built
- **THEN** the three IDs appear in order, with one H1, title ≤ 60 and description ≤ 155

### Requirement: Blog and insights, reused
**Action: REUSE.** `#insights` SHALL show the H1 "Insights, quality thinking, and product lessons." and three cards with their current titles, excerpts or descriptions and images: "The Triad Quality Framework" → `/blog/the-triad-quality-framework/`, "When software quality becomes a business decision" → `/blog/when-software-quality-becomes-a-business-decision/`, "Interview with Our Founder" → its current external URL (new tab, `rel="noopener"`). Each card SHALL have a "Read" link. A link to `/blog/` SHALL list all posts. Source: Website Brief §III Resources › Blog / insights, "Retain the existing blog / knowledge content in a dedicated resource area.", CTA "Read".

#### Scenario: Cards
- **WHEN** `#insights` is shown in English and Arabic
- **THEN** the three cards show their current copy in that language, each with a "Read" link to the right destination

### Requirement: Background methodology, kept
**Action: EDIT.** `#methodology` SHALL show the H2 "Background methodology" and the lead "BCQ links technical evidence to customer and business risk. It informs Vibe Test and is also delivered through separately scoped expert services." (both DRAFT: needs approval; the lead is SA §II verbatim). It SHALL show the existing "Business-Care Quality" card linking to `/solutions/#methodology` instead of `https://wewill.tech/business-care-quality`, and the existing "Quality Canvas" card with its current LinkedIn link. The existing `#quality-canvas` section follows unchanged. Source: Website Brief §III Resources › Background methodology, "Quality Canvas and Triad Framework may sit here only if still useful and coherent; otherwise omit."; Strategic Alignment §II; Q12 default.

#### Scenario: Relinked BCQ card
- **WHEN** a visitor activates the Business-Care Quality card
- **THEN** `/solutions/#methodology` opens in the same tab
- **AND** no link on the page points to `/business-care-quality`

#### Scenario: Quality Canvas section
- **WHEN** `#quality-canvas` is shown
- **THEN** its content equals the current Home section, including both of its buttons

### Requirement: Responsive and accessible
**Action: NEW.** Cards SHALL show three per row at 1440 px and one per row at 390 px, without horizontal overflow. "Read" links SHALL have accessible names that include the item title, and external links SHALL say they open in a new tab. Source: project rule WCAG 2.2 AA.

#### Scenario: Link names
- **WHEN** assistive technology lists the page's links
- **THEN** each "Read" link is announced with its item title (e.g. "Read: The Triad Quality Framework")
