# Spec Delta

## Purpose

The Home Vibe Test introduction presents Vibe Test as WE WILL Technology's lead product and routes visitors to its dedicated page on wewill.tech.

## ADDED Requirements

### Requirement: Endorsed-product framing
**Action: EDIT.** The section SHALL show the kicker "Vibe Test by WE WILL Technology" and keep the title "Meet Vibe Test — autonomous QA that hands you the receipts.". The subtitle SHALL read "Vibe Test is WE WILL's Agentic QA platform: agents sweep, test, and fix your product across web, mobile, and GenAI — then prove every verdict with a machine-checked receipt. Built for teams shipping faster than they can test." (DRAFT: needs approval). Source: Website Brief §III Home › Vibe Test introduction, "Introduce Vibe Test as the lead product under WE WILL Technology"; Strategic Alignment §III, "Describe Vibe Test as an Agentic QA platform"; §V, "Vibe Test by We Will Technology". The rest of the subtitle is the current site's copy.

#### Scenario: Copy
- **WHEN** Home is shown in English
- **THEN** the kicker, title and subtitle match the text above
- **AND** the subtitle no longer contains "An autonomous QA team as a service"

### Requirement: Route to the Vibe Test page
**Action: EDIT.** The section's only button SHALL be "Explore Vibe Test" → `/vibe-test/`, opening in the same tab. "Start a Vibe Test" and "Talk to WE WILL" SHALL be removed. Source: Website Brief §III, CTA "Explore Vibe Test"; §IV, "Navigation/routing CTAs … Home sections only".

#### Scenario: CTA
- **WHEN** a visitor activates "Explore Vibe Test"
- **THEN** `/vibe-test/` opens in the same tab
- **AND** the section contains no link to `vibe-test.oneapp.dev`

### Requirement: Reused evidence stays, labelled as a sample
**Action: REUSE.** The receipt card, the "Watch Vibe Test in action" video facade and the three capability cards (Sweep & prove, Test, fix & verify, Receipts you can trust) SHALL stay unchanged, except that the receipt card SHALL show a visible "Sample" label. Source: Website Brief Purpose, "Prioritize reuse"; Strategic Alignment §I (p. 7), "WE WILL must supply product evidence"; Q7 default.

#### Scenario: Sample label
- **WHEN** a visitor or screen reader reaches the receipt card
- **THEN** the word "Sample" is visible and announced with the card

#### Scenario: Layout
- **WHEN** the section is shown at 1440 px and 390 px
- **THEN** its layout matches the current section and the button is at least 44 px tall with a visible focus state
