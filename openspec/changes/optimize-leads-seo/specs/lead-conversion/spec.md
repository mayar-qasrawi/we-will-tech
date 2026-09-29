# Spec Delta

## Purpose

Lead conversion makes the two approved conversion paths specific, qualified and measurable. A visitor sees which offer they chose, whether they fit, and what happens next; the team can see which block produced the lead.

## ADDED Requirements

### Requirement: Hero names the category and the target buyer
**Action: EDIT.** The Home hero eyebrow SHALL read "Agentic Software Quality". Below the subheadline the hero SHALL show "Built for CTOs, engineering leaders and founders in growth-stage SaaS and digital-product companies." (DRAFT: needs approval). The headline, subheadline, CTA and GO track SHALL be unchanged. Source: Website Brief §III Home › Hero, "clarify the release-confidence / safe-to-ship outcome and target buyer"; §II, "Primary ICP: CTOs, engineering leaders and founders in growth-stage SaaS / digital-product companies"; Strategic Alignment §III, "Recommended market category — Agentic Software Quality".

#### Scenario: Hero copy
- **WHEN** Home loads in English
- **THEN** the eyebrow reads "Agentic Software Quality" and the buyer line appears after the subheadline
- **AND** the H1 and subheadline text are identical to before

### Requirement: Offer-matched contact panel
**Action: EDIT.** `/contact/` SHALL show an offer panel matching the selected request type. It SHALL update when `?request=` is present on load and whenever the request-type field changes, and stay hidden for "General message". All panel text is DRAFT: needs approval.
- **guided-vibe-test** — title "Run a Guided Vibe Test"; scope "Guided Proof of Value: one environment, 2–3 journeys or one release workflow, and agreed success criteria."; fit "For teams with a live product or executable MVP and a technical owner."
- **bcq-requirement** — title "Discuss a Business Care Quality Requirement"; scope "BCQ Expert Services add human judgment where risk requires it: Quality Diagnostic, Release Decision or Managed Quality Care."

Source: Website Brief §II, 5. Convert; Strategic Alignment §V, Guided Proof of Value ("One environment; 2–3 journeys or one release workflow; agreed success criteria"; "Live product or executable MVP; technical owner…") and BCQ Expert Services; §VI supporting subheadline.

#### Scenario: Panel from URL
- **WHEN** `/contact/?request=guided-vibe-test` loads
- **THEN** the Guided Vibe Test panel is visible above the form and the BCQ panel is hidden

#### Scenario: Panel follows the field
- **WHEN** the visitor changes the request type to "General message"
- **THEN** no panel is visible
- **AND** the panel region is announced politely to assistive technology when it changes

#### Scenario: No pricing
- **WHEN** either panel is shown
- **THEN** it contains no price, "paid", "fee" or "payer" wording

### Requirement: Next steps are visible
**Action: EDIT.** The Vibe Test conversion block SHALL show the fit line and the three stages "Guided Proof of Value", "Evidence Review", "Team Subscription" (SA §VI funnel, DRAFT). The contact form SHALL show "We'll be in touch within 1 business day." next to the submit button, with the existing Arabic "سنعاود التواصل خلال يوم عمل واحد.". Source: Strategic Alignment §VI funnel ("Guided Proof of Value — TEST", "Evidence Review — PROVE", "Team Subscription — ADOPT"); existing contact success message.

#### Scenario: Vibe Test next steps
- **WHEN** `/vibe-test/#book` is shown at 1440 px and 390 px
- **THEN** the fit line and the three stages appear before the button, in one row on desktop and stacked on mobile

### Requirement: CTA tracking hooks
**Action: NEW.** Every CTA link in the header, footer, Home and Vibe Test SHALL carry `data-cta` (one of `guided-vibe-test`, `bcq-requirement`, `explore-vibe-test`, `explore-solutions`, `view-resources`, `talk-to-us`) and `data-cta-location` (the block, e.g. `home-hero`, `vt-conversion`). Visible output SHALL NOT change. Source: Website Brief Purpose, "make the existing website commercially clearer and more effective".

#### Scenario: Attributes present
- **WHEN** built `/` and `/vibe-test/` are scanned
- **THEN** every link whose href starts with `/contact/`, `/vibe-test/`, `/solutions/` or `/resources/` and whose label is a CTA framework label carries both attributes
