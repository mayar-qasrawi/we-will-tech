# Spec Delta

## Purpose

The global footer repeats the site architecture and both conversion paths on every page, and carries the legal links and the endorsed-brand line "Vibe Test by WE WILL Technology".

## ADDED Requirements

### Requirement: Six footer groups
**Action: EDIT.** The footer SHALL contain these groups and links, with the headings as written. Source: Website Brief p. 6, Footer Navigation.
- Product & Solutions: Vibe Test → `/vibe-test/` · Solutions → `/solutions/`
- Company: About → `/about/` · Contact / Talk to Us → `/contact/`
- Resources: Insights / Blog → `/blog/` · Methodology resources → `/resources/#methodology` ("only if retained"; retained under Q12)
- Get Started: Run a Guided Vibe Test → `/contact/?request=guided-vibe-test` · Discuss a Business Care Quality Requirement → `/contact/?request=bcq-requirement`
- Legal & Social: Privacy Policy → `/privacy/` · Terms of Use → `/terms/` · LinkedIn → `https://www.linkedin.com/company/wewilltech/`

#### Scenario: Footer links
- **WHEN** a visitor views the footer on any page
- **THEN** the five link groups appear with exactly the links above
- **AND** no Cookie Policy link appears
- **AND** LinkedIn opens in a new tab with `rel="noopener"`

#### Scenario: Removed legacy content
- **WHEN** a visitor views the footer
- **THEN** the tagline "Reduce Time, Reduce Cost & Be Confident" and the Facebook, WhatsApp and Instagram links are absent

### Requirement: Bottom bar
**Action: EDIT.** The bottom bar SHALL show "Vibe Test by WE WILL Technology", the copyright "© 2026 WE WILL Technology. All rights reserved." and a clearly marked placeholder for company/legal information. Source: Website Brief p. 6, Brand / Bottom Bar, "Vibe Test by WE WILL Technology · Copyright · company/legal information"; Strategic Alignment §V, "Vibe Test by We Will Technology".

#### Scenario: Bottom bar content
- **WHEN** a visitor views the bottom bar in English or Arabic
- **THEN** it shows "Vibe Test by WE WILL Technology" and "© 2026 WE WILL Technology"
- **AND** a placeholder reads "Company legal information — to be supplied by WE WILL"
- **AND** the text "© 2023" appears nowhere on the page

### Requirement: Responsive, accessible footer
**Action: EDIT.** The footer SHALL be a landmark with a labelled navigation, lay out as columns at 1440 px and stack at 390 px without horizontal overflow. Source: project rule WCAG 2.2 AA.

#### Scenario: Layout
- **WHEN** the footer is shown at 1440 px
- **THEN** the groups sit side by side in one row or a balanced grid
- **WHEN** it is shown at 390 px
- **THEN** the groups stack in one or two columns, every link is at least 24 px tall with spacing, and nothing overflows

#### Scenario: Screen reader
- **WHEN** assistive technology lists landmarks
- **THEN** the footer exposes a navigation named "Footer" and each group heading is announced before its links
