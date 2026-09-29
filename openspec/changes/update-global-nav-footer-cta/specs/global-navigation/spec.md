# Spec Delta

## Purpose

The global navigation gives every wewill.tech page the same five destinations and one highlighted primary action, so visitors can move between the master brand, the lead product and the buyer-problem pages.

## ADDED Requirements

### Requirement: Brief navigation items in order
**Action: EDIT.** Every page using the site layout SHALL show exactly these header items, in this order: Home, Vibe Test, Solutions, Resources, About, then a highlighted "Run a Guided Vibe Test" button. Source: Website Brief p. 5, Navigation menu recommendation, "Home | Vibe Test | Solutions | Resources | About | Run a Guided Vibe Test".

#### Scenario: Menu content
- **WHEN** a visitor loads any page
- **THEN** the header shows Home → `/`, Vibe Test → `/vibe-test/`, Solutions → `/solutions/`, Resources → `/resources/`, About → `/about/`
- **AND** a button "Run a Guided Vibe Test" → `/contact/?request=guided-vibe-test` follows them
- **AND** the links "AI-Era Quality", "Why WE WILL", "Quality Canvas", "How We Work", "Contact" and "Blog" are no longer in the header

#### Scenario: Primary CTA stands out
- **WHEN** the header is displayed at 1440 px
- **THEN** "Run a Guided Vibe Test" uses the site's primary button style and is visually distinct from the text links

### Requirement: Active page state
**Action: EDIT.** The header SHALL mark the current section with an active style and `aria-current="page"`. Blog and blog-post pages SHALL mark Resources. Source: Website Brief §I, Resources, "House the existing blog/insights".

#### Scenario: Active item
- **WHEN** a visitor is on `/solutions/`
- **THEN** only the Solutions link has the active style and `aria-current="page"`

#### Scenario: Blog belongs to Resources
- **WHEN** a visitor is on `/blog/` or a blog post
- **THEN** Resources is the active item

### Requirement: Responsive and accessible header
**Action: EDIT.** The header SHALL keep the existing logo, EN/AR switch and mobile menu toggle, and SHALL work at 390 px without horizontal overflow. Source: Website Brief Purpose, "Prioritize reuse … of existing approved material"; project rule WCAG 2.2 AA.

#### Scenario: Mobile menu
- **WHEN** a visitor at 390 px opens the menu
- **THEN** all five links and the "Run a Guided Vibe Test" button are reachable
- **AND** each target is at least 44 px tall
- **AND** the page has no horizontal overflow in English

#### Scenario: Keyboard
- **WHEN** a keyboard user tabs through the header
- **THEN** every link and the CTA receive a visible focus indicator in reading order

#### Scenario: Arabic fallback
- **WHEN** a visitor switches to Arabic
- **THEN** Home and Vibe Test show their existing Arabic labels
- **AND** the items without approved Arabic show their English label rather than an empty string
