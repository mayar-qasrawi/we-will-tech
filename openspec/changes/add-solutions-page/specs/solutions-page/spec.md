# Spec Delta

## Purpose

The Solutions page organises WE WILL's offer around the five approved buyer problems. For each it shows where Vibe Test and BCQ Expert Services apply, what outcome to expect, relevant proof, and the right next action.

## ADDED Requirements

### Requirement: Page structure and metadata
**Action: NEW (route).** `/solutions/` SHALL use the global chrome with "Solutions" active and render, in order: `#intro`, `#release-verification`, `#ai-assisted-development`, `#ai-feature-evaluation`, `#release-decision`, `#lean-team-quality`, `#methodology`. It SHALL have the title "Release Verification & QA Solutions | WE WILL Technology", the proposal's meta description, canonical `https://wewill.tech/solutions/` and exactly one H1. Source: Website Brief §I, Solutions, "Organize the approved five use cases around buyer problems; show Vibe Test and BCQ expert support where relevant."

#### Scenario: Structure
- **WHEN** `/solutions/` is built
- **THEN** the seven IDs appear once each in order, with one H1, title ≤ 60 and description ≤ 155

### Requirement: Introduction frames buyer problems
**Action: NEW.** `#intro` SHALL show the H1 "Solutions for the release situations product teams face." (DRAFT: needs approval), the lead "WE WILL Technology helps digital-product teams verify critical software journeys, understand release risk and ship with greater confidence." (SA §V), and five jump links, one per use case, in order. It SHALL NOT list services. Source: Website Brief §III Solutions › Page introduction, "Frame the page around buyer problems, not an internal services catalogue."

#### Scenario: Jump links
- **WHEN** a visitor activates the third jump link
- **THEN** the page scrolls to `#ai-feature-evaluation` and focus moves there

### Requirement: Five use cases with situation, response and outcome
**Action: NEW.** Each use-case block SHALL have an H2 with the use-case name and three labelled parts, "The situation", "How WE WILL helps" and "Outcome", plus its CTA(s). All text is DRAFT: needs approval, worded from the sources given:

| Block | The situation | How WE WILL helps | Outcome | CTA(s) |
|---|---|---|---|---|
| Release verification | Frequent releases, and QA capacity has to scale as repetitive work grows. | Vibe Test verifies and re-verifies critical journeys. | Faster evidence-based cycles. | Run a Guided Vibe Test |
| AI-assisted development | Development output exceeds QA capacity. | Vibe Test verifies rapidly changing software. | Verification keeps pace. | Run a Guided Vibe Test |
| AI Feature Evaluation | You are launching an AI feature and need to assess uncertain AI behaviour. | A WE WILL-developed approach executed through Vibe Test, with expert interpretation as needed. | Evidence against risk criteria. | Discuss a Quality Requirement; Run a Guided Vibe Test |
| Release decision | A high-impact launch where the go / no-go decision must be accountable. | BCQ Expert Services with test evidence: a Release Decision review of evidence and go / no-go criteria. | Accountable go / no-go advice. | Discuss a Quality Requirement |
| Lean-team quality | Limited QA leadership or capacity. | Vibe Test plus Managed Quality Care: recurring verification with expert oversight. | Scalable quality capacity. | Discuss a Quality Requirement |

Source: Website Brief §III Solutions rows 1–5 (e.g. "Frequent releases; Vibe Test on critical journeys; faster evidence-based cycles."); Strategic Alignment §V Priority use cases table, BCQ Expert Services; §VI pillars ("Scale QA capacity as repetitive work grows", "assess uncertain AI behaviour", "expert interpretation as needed"); §III, "Vibe Test verifies rapidly changing software".

#### Scenario: Use-case content
- **WHEN** the page is shown in English
- **THEN** each block shows its H2 and the three parts with the text above

#### Scenario: CTA destinations
- **WHEN** a visitor activates "Run a Guided Vibe Test" in any block
- **THEN** `/contact/?request=guided-vibe-test` opens
- **WHEN** a visitor activates "Discuss a Quality Requirement"
- **THEN** `/contact/?request=bcq-requirement` opens

#### Scenario: AI Feature Evaluation claims rule
- **WHEN** the AI Feature Evaluation block is inspected
- **THEN** it contains no words claiming differentiation, uniqueness, a proprietary framework or protected IP, and no thresholds or criteria detail
- **AND** it shows both CTAs, "Discuss a Quality Requirement" first

#### Scenario: No routing links
- **WHEN** the five use-case blocks are inspected
- **THEN** they contain no links other than their CTA buttons (Brief §IV: routing CTAs are for Home sections only)

#### Scenario: No pricing
- **WHEN** the page text is searched
- **THEN** no price, currency amount, "fixed-fee", "monthly" or "paid" appears

### Requirement: Proof beside the matching use case
**Action: EDIT.** Release verification SHALL show the Darent testimonial, Release decision the iStoria testimonial and Lean-team quality the SellEnvo testimonial, verbatim with logo and company name. AI-assisted development and AI Feature Evaluation SHALL show a visible placeholder "Evidence for this use case — to be supplied by WE WILL". Source: Website Brief §III Solutions › Proof, "Place relevant testimonials/evidence beside the most relevant buyer problem where possible."; Q18 default.

#### Scenario: Proof placement
- **WHEN** the five blocks are shown
- **THEN** three contain one verbatim testimonial each, as mapped, and two contain the placeholder
- **AND** no metric, person name or logo that is not on the current site appears

### Requirement: Supporting capabilities only where they support the five problems
**Action: EDIT.** `#methodology` SHALL show the kicker "Business Care Quality", the reused heading "We Deliver Confidence, Not Just Reports.", the reused lead "How we shift quality from a checklist to a decision-protection layer that aligns with your product and business realities.", the BCQ Expert Services row (SA §V), and these capabilities with their current text verbatim, with no tags and no closing line:
- Quality as a Service (QaaS)
- Quality Strategy
- User Journey Testing
- Release Readiness Reviews
- Risk Prevention for Releases
- Role-Aware Security Testing
- Risk Reports for PMs
- AI Quality & Behavioral Transparency, whose old description is replaced by the supportable claim "Vibe Test can evaluate your product’s own AI features against contracts you approve." (WE WILL brief "Quality as a Business Decision", 31 Aug 2026, §13; DRAFT: needs approval)

The reused "A Quality Process Built Around Decisions." section (How We Work) SHALL NOT appear, because it names Quality Canvas and Triad Quality Framework, which the Brief places in Resources. The "Quality Canvas" service card and the "GenAI Feature Evaluation" description SHALL NOT appear. Source: Website Brief §III Solutions › Methodology / supporting capabilities, "Use existing Business Care Quality, testing, automation, UX, security-aware testing and consulting material only where it supports the five buyer problems."; Q13 default.

#### Scenario: Capability content
- **WHEN** `#methodology` is shown
- **THEN** it lists exactly those eight capabilities, each description identical to its source
- **AND** "AI Quality & Behavioral Transparency" shows only the §13 supportable claim
- **AND** `#methodology` has no CTA button (Brief §III: "—")

### Requirement: Responsive and accessible
**Action: NEW.** At 1440 px each use case SHALL lay out its three parts beside its proof; at 390 px everything stacks without horizontal overflow. Buttons SHALL be ≥ 44 px with visible focus, headings SHALL not skip levels, and Arabic SHALL be RTL with English fallback and no blank text. Source: project rules WCAG 2.2 AA and RTL.

#### Scenario: Mobile
- **WHEN** the page is viewed at 390 px in English
- **THEN** `scrollWidth` equals the viewport width and each use case reads situation → help → outcome → proof → CTA
