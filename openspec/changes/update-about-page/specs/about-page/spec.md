# Spec Delta

## Purpose

The About page gives buyers concise company credibility: who WE WILL Technology is and how it is positioned, the team, how it approaches quality, and the clients who trusted it.

## ADDED Requirements

### Requirement: Page structure and metadata
**Action: NEW (route).** `/about/` SHALL use the global chrome with "About" active and render `#story`, `#team`, `#philosophy`, `#credibility` in order. It SHALL have the title "About WE WILL Technology | Agentic Software Quality", the proposal's meta description, canonical `https://wewill.tech/about/` and one H1. Source: Website Brief §I, About, "Concise company story, team, quality philosophy and selected credibility elements."

#### Scenario: Structure
- **WHEN** `/about/` is built
- **THEN** the four IDs appear in order, with one H1, title ≤ 60 and description ≤ 155

### Requirement: Company story with approved positioning
**Action: EDIT.** `#story` SHALL show the H1 "About WE WILL Technology", the lead "WE WILL Technology is an Agentic Software Quality company. Vibe Test applies Agentic QA to recurring verification; BCQ connects quality evidence to customer impact, business risk and release decisions.", the line "WE WILL brings testing, automation and release-support experience to product teams." (all DRAFT: needs approval), a visible placeholder "Company background — to be supplied by WE WILL", and the existing "Interview with Our Founder" link (new tab, `rel="noopener"`). Source: Website Brief §III About › Company story, "Short company background and current Agentic Software Quality positioning."; Strategic Alignment §III, "position as an Agentic Software Quality company. Vibe Test applies Agentic QA to recurring verification; BCQ connects quality evidence to customer impact, business risk and release decisions."; §II, "testing, automation and release-support experience".

#### Scenario: Story content
- **WHEN** `#story` is shown in English
- **THEN** the H1, lead, line, placeholder and interview link appear as above
- **AND** no founding year, headcount, location or metric is stated

### Requirement: Team moved from Home
**Action: REUSE.** `#team` SHALL be the current team section (heading, subtitle, 13 photos, carousel), unchanged apart from alt text "WE WILL team member" on each photo until names are supplied. Source: Website Brief §III About › Team, "Move the existing team content from the long homepage into a dedicated company context."

#### Scenario: Team content
- **WHEN** `#team` is shown
- **THEN** it shows "The Team Behind WE WILL Quality." and all 13 photos
- **AND** every team image has a non-empty `alt`

### Requirement: Concise quality philosophy
**Action: EDIT.** `#philosophy` SHALL show the kicker "Quality philosophy" (DRAFT), then the existing H2 "Quality That Thinks With You, Not After You.", intro and the three cards Business-Care Quality, Risk-Driven Thinking and Strategic Partnership verbatim in EN and AR, then the closing line "Internal QA retains product context and decision ownership." (SA, DRAFT: needs approval). It SHALL NOT list use cases, services or capabilities. Source: Website Brief §III About › Quality philosophy, "Concise explanation of how WE WILL approach quality; avoid duplicating Solutions."; Strategic Alignment Executive Summary, "Internal QA retains product context and decision ownership."

#### Scenario: No duplication of Solutions
- **WHEN** `#philosophy` is compared with `/solutions/`
- **THEN** it contains none of the five use-case names and none of the Solutions capability names

#### Scenario: Source page unchanged
- **WHEN** `/why-we-will/` is built
- **THEN** its HTML is identical to before this change

### Requirement: Selected credibility
**Action: REUSE.** `#credibility` SHALL show the existing client-logo strip (the same 10 logos and copy as Home), no testimonials, and the button "Talk to Us" → `/contact/`. Source: Website Brief §III About › Credibility, "Selected clients / proof where useful, without repeating the full homepage proof stack.", CTA "Talk to Us".

#### Scenario: Credibility and CTA
- **WHEN** `#credibility` is shown
- **THEN** the 10 logos appear, no testimonial quote appears, and "Talk to Us" opens `/contact/`

### Requirement: Responsive and accessible
**Action: NEW.** The page SHALL have no horizontal overflow at 1440 px or 390 px in English. Buttons and links SHALL be ≥ 44 px targets with visible focus. Arabic SHALL be RTL with the reused Arabic and English fallback for DRAFT strings, with no blank text. Source: project rules WCAG 2.2 AA and RTL.

#### Scenario: Mobile
- **WHEN** `/about/` is viewed at 390 px in English
- **THEN** `scrollWidth` equals the viewport width and the four blocks stack in order
