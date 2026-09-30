# Spec Delta

## Purpose

The selected-proof block shows a small number of the strongest existing testimonials once each, replacing the repetitive marquee.

## ADDED Requirements

### Requirement: Three testimonials, each shown once
**Action: EDIT.** `#success-stories` SHALL keep its kicker "Success Stories", title "Inspired by WE WILL Clients' Success." and subtitle. It SHALL show exactly three testimonials, iStoria, Darent and SellEnvo, with their current quote text verbatim, logo and company name. No other quote SHALL appear, and no person name, role or metric SHALL be added. Source: Website Brief §III Home › Selected proof, "2–3 strongest testimonials / evidence points; remove the current repetitive testimonial treatment."; Q11 default.

#### Scenario: Content
- **WHEN** Home is shown in English
- **THEN** the section contains three testimonial cards: iStoria, Darent, SellEnvo
- **AND** each quote string appears exactly once in the page HTML

#### Scenario: Repetition removed
- **WHEN** the section is inspected
- **THEN** it has no marquee track, no duplicated cards, no auto-scrolling motion and no "Talk to WE WILL" button

### Requirement: Static, readable layout
**Action: EDIT.** The testimonials SHALL be a static grid: three columns at 1440 px, one column at 390 px, with no horizontal overflow. Each card SHALL be a `<figure>` with the quote in a `<blockquote>` and the company in a `<figcaption>`, and the logo alt text SHALL be "<Company> logo". Source: project rule WCAG 2.2 AA; design audit H6 "70 s endless marquee that can't be paused on touch".

#### Scenario: Responsive and reduced motion
- **WHEN** the section is viewed at 1440 px, at 390 px, and with reduced motion
- **THEN** all three quotes are fully visible without motion in every case
