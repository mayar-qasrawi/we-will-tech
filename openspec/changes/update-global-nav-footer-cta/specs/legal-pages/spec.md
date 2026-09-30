# Spec Delta

## Purpose

The legal pages give the footer's Privacy Policy and Terms of Use links a real destination, clearly marked as placeholders until WE WILL supplies the legal text.

## ADDED Requirements

### Requirement: Privacy and Terms stub pages
**Action: NEW.** The site SHALL provide `/privacy/` and `/terms/` in the site layout. Each has one H1 ("Privacy Policy" / "Terms of Use"), a visible notice "This page is a placeholder. The text will be supplied by WE WILL Technology.", a unique title and meta description, a canonical URL and `noindex`. No legal text SHALL be written. Source: Website Brief p. 6, Legal & Social, "Privacy Policy · Terms of Use · Cookie Policy if applicable"; Strategic Alignment §I (p. 7), "WE WILL must supply product evidence, approved claims…".

#### Scenario: Stub content
- **WHEN** a visitor opens `/privacy/`
- **THEN** the page shows the H1 "Privacy Policy" and the placeholder notice
- **AND** the title is "Privacy Policy | WE WILL Technology"
- **AND** the page has `<meta name="robots" content="noindex">` and canonical `https://wewill.tech/privacy/`

#### Scenario: Layout
- **WHEN** either stub is viewed at 1440 px and 390 px
- **THEN** it uses the global header and footer and has no horizontal overflow

### Requirement: No Cookie Policy page
**Action: NEW (decision).** The site SHALL NOT publish a Cookie Policy page or link while it sets no cookies and loads no analytics or tracking scripts. Source: Website Brief p. 6, "Cookie Policy if applicable"; Q15 default.

#### Scenario: No cookie link
- **WHEN** the footer is inspected
- **THEN** it contains no Cookie Policy link
