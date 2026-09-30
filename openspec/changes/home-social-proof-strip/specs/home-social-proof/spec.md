# Spec Delta

## Purpose

The Home social-proof strip gives visitors immediate credibility evidence after the hero without delaying evaluation of the lead product.

## ADDED Requirements

### Requirement: Social proof appears high on Home
The Home page SHALL place the client social-proof section immediately after the hero and before the Vibe Test introduction. Source: `docs/strategy/website-brief.md`, §III Home › Social proof strip, "Compact client-logo strip/carousel high on the page for immediate credibility."

#### Scenario: Section order
- **WHEN** a visitor loads `/`
- **THEN** `#clients` is the first Home section after `#hero`
- **AND** `#vibe-test` follows `#clients`

### Requirement: Compact approved client set
The strip SHALL show the ten current clients with locally available logo files: One Studio, ID8 Media, Darent, IStoria, Masterteam, MICEtribe, SellEnvo, Famcare, Rasel, and I Plan 2. It SHALL NOT show Oyoun Media or In2World until local logo files are supplied. Source: `docs/strategy/website-brief.md`, §III Home › Social proof strip, "Compact client-logo strip/carousel"; `docs/discovery/open-questions.md`, OQ-35, "The 10 logos whose files exist".

#### Scenario: Client content
- **WHEN** a visitor views the strip
- **THEN** all ten approved client names and logos are visible
- **AND** Oyoun Media and In2World are absent
- **AND** no client logo request depends on `wewill.tech/wp-content/`

#### Scenario: Existing outbound links
- **WHEN** a visitor activates MICEtribe, Rasel, or I Plan 2
- **THEN** the existing approved client website opens in a new tab with opener access disabled

### Requirement: Existing section copy remains bilingual
The strip SHALL preserve the current English and Arabic kicker, title, and subtitle because the strategy changes placement and presentation, not this approved existing copy. Source: `docs/strategy/website-brief.md`, Purpose and implementation guardrails, "Prioritize reuse, consolidation and relocation of existing approved material"; `docs/discovery/open-questions.md`, Checkpoint 1, "Anything the strategy documents do not mention stays exactly as on the old site."

#### Scenario: English copy
- **WHEN** Home is shown in English
- **THEN** the section displays "Our Clients", "Products That Trusted WE WILL Quality.", and the existing English subtitle

#### Scenario: Arabic copy
- **WHEN** a visitor switches Home to Arabic
- **THEN** the section displays the existing Arabic kicker, title, and subtitle
- **AND** the strip remains usable in right-to-left layout

### Requirement: Responsive compact layout
The client set SHALL use a compact, non-automated layout with no carousel controls and SHALL NOT introduce horizontal overflow within `#clients`. Source: `docs/strategy/website-brief.md`, §III Home › Social proof strip, "Compact client-logo strip/carousel"; `docs/discovery/open-questions.md`, D-1, "Calm, precise, evidence-first". The known Arabic page-wide overflow from the unchanged contact section remains out of scope under Checkpoint 1.

#### Scenario: Desktop layout
- **WHEN** Home is viewed at 1440 px
- **THEN** the ten logos form a compact wrapping strip
- **AND** the section is materially shorter than the current twelve-card trust wall

#### Scenario: Mobile layout
- **WHEN** Home is viewed at 390 px
- **THEN** all ten logos fit in a compact multi-column layout without horizontal overflow inside `#clients`
- **AND** client names remain readable without clipping

#### Scenario: Reduced motion
- **WHEN** a visitor prefers reduced motion
- **THEN** every logo is available without auto-advance, animation, or a timed reveal dependency

### Requirement: Logo accessibility
Every logo SHALL expose an accurate accessible name, and interactive client links SHALL be keyboard reachable with a visible focus state. Source: `docs/discovery/section-matrix.md`, H2 audit, "wrong alt text on One Studio ... and SellEnvo"; project rule requiring WCAG 2.2 AA.

#### Scenario: Accurate alternative text
- **WHEN** assistive technology reads the logo strip
- **THEN** One Studio has alternative text "One Studio logo"
- **AND** SellEnvo has alternative text "SellEnvo logo"
- **AND** every other logo alternative text matches its displayed client name

#### Scenario: Keyboard access
- **WHEN** a keyboard user tabs through linked client logos
- **THEN** each link receives a visible focus indicator
- **AND** non-linked logos do not add tab stops
