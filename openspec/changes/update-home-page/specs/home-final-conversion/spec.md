# Spec Delta

## Purpose

The final conversion block closes Home with the primary proof-of-value action and the secondary expert-service path, instead of an inline form.

## ADDED Requirements

### Requirement: Primary and secondary close
**Action: EDIT.** `#get-started` SHALL reuse the kicker "Contact" and the title "Let's Talk About Your Product's Quality.". It SHALL show the supporting line "Start with a guided Vibe Test proof of value, or discuss a BCQ Expert Services requirement when a release needs expert judgment." (DRAFT: needs approval), then two buttons: "Run a Guided Vibe Test" (primary) → `/contact/?request=guided-vibe-test` and "Discuss a Quality Requirement" (secondary) → `/contact/?request=bcq-requirement`. Source: Website Brief §III Home › Final conversion, "Close with the primary commercial action and secondary expert-service path.", CTA "Run a Guided Vibe Test"; Strategic Alignment §VI, "Primary CTA: Run a guided Vibe Test proof of value." and "Secondary CTA: Discuss a BCQ Expert Services requirement."

#### Scenario: Content and CTAs
- **WHEN** Home is shown in English
- **THEN** the block shows the kicker, title, supporting line and two buttons as above
- **AND** the primary button uses the primary style and comes first
- **AND** the block contains no form fields and no price

### Requirement: Layout and accessibility
**Action: EDIT.** The buttons SHALL sit side by side at 1440 px and stack at full width at 390 px, each at least 44 px tall with a visible focus state and 4.5:1 text contrast. Source: project rule WCAG 2.2 AA.

#### Scenario: Responsive
- **WHEN** the block is viewed at 390 px
- **THEN** both buttons are full width, stacked, primary first, with no overflow
