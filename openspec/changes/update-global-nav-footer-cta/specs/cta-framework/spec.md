# Spec Delta

## Purpose

The CTA framework fixes the label, role and destination of every conversion and routing button, so the primary proof-of-value path and the secondary expert path are consistent across all pages.

## ADDED Requirements

### Requirement: CTA labels and destinations
**Action: NEW.** CTAs SHALL use only these labels and destinations. Source: Website Brief §IV CTA Framework, "Run a Guided Vibe Test — Primary acquisition CTA; the agreed proof-of-value entry motion", "Discuss a Business Care Quality Requirement — Secondary enterprise / higher-risk quality path", "Explore Vibe Test / Explore Solutions — Navigation/routing CTAs … Home sections only"; §III CTA column ("Discuss a Quality Requirement", "View Resources", "Read", "Talk to Us").

| Label | Role | Destination |
|---|---|---|
| Run a Guided Vibe Test | Primary | `/contact/?request=guided-vibe-test` |
| Discuss a Quality Requirement (buttons) / Discuss a Business Care Quality Requirement (footer) | Secondary | `/contact/?request=bcq-requirement` |
| Talk to Us | Contact | `/contact/` |
| Explore Vibe Test | Routing (Home only) | `/vibe-test/` |
| Explore Solutions | Routing (Home only) | `/solutions/` |
| View Resources | Routing | `/resources/` |
| Read | Content | the resource itself |

#### Scenario: Primary CTA destination
- **WHEN** a visitor activates any "Run a Guided Vibe Test" button, including the Home hero's
- **THEN** `/contact/` opens with the request type "Run a Guided Vibe Test" selected

#### Scenario: Secondary CTA destination
- **WHEN** a visitor activates "Discuss a Quality Requirement" or "Discuss a Business Care Quality Requirement"
- **THEN** `/contact/` opens with the request type "Discuss a Business Care Quality Requirement" selected

#### Scenario: Routing CTAs stay on Home
- **WHEN** the built site is searched for "Explore Vibe Test" and "Explore Solutions"
- **THEN** they appear only on `/`

#### Scenario: Legacy labels retired
- **WHEN** the new and changed pages (Home, Vibe Test, Solutions, Resources, About, header, footer) are searched
- **THEN** none contains "Book a Clarity Session", "Book a Demo", "Start a Vibe Test", "Talk to WE WILL" or "Explore Services"

### Requirement: Request type on the contact form
**Action: EDIT.** The `/contact/` form SHALL offer a labelled request-type choice with the options "Run a Guided Vibe Test" and "Discuss a Business Care Quality Requirement", plus an unselected default for general messages. It SHALL preselect from `?request=guided-vibe-test` or `?request=bcq-requirement` and submit as `request_type`. Existing fields, validation, honeypot and messages SHALL be unchanged. Source: Website Brief §II, 5. Convert, "Run a Guided Vibe Test proof of value; enterprise/high-risk buyers can discuss a BCQ requirement"; Q4 default.

#### Scenario: Preset from URL
- **WHEN** `/contact/?request=bcq-requirement` loads
- **THEN** the request type shows "Discuss a Business Care Quality Requirement"

#### Scenario: Unknown or missing parameter
- **WHEN** `/contact/` loads without a parameter or with an unknown value
- **THEN** no request type is preselected and the form still submits

#### Scenario: Accessible field
- **WHEN** assistive technology reaches the field
- **THEN** it announces a visible label, and the control is at least 44 px tall at 390 px
