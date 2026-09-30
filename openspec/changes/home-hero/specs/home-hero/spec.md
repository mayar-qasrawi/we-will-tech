## Purpose

The Home hero states WE WILL Technology's approved company-level proposition and offers the primary conversion action, so a visitor understands within seconds that WE WILL helps product teams determine what is safe to ship.

## ADDED Requirements

### Requirement: Approved headline and subheadline
The hero SHALL show the approved primary headline and supporting subheadline verbatim. Source: SA §VI (p. 6) "PRIMARY HEADLINE: Know what is safe to ship - at the speed you build." and "Supporting subheadline: Vibe Test verifies critical journeys using WE WILL's quality methodology; BCQ Expert Services add human judgment where risk requires it."; WB §III Home › Hero (p. 2) "Approved company-level proposition".

#### Scenario: Headline text in English
- **WHEN** a visitor loads `/` in English
- **THEN** the page's only `h1` reads "Know what is safe to ship - at the speed you build."

#### Scenario: Subheadline text in English
- **WHEN** a visitor loads `/` in English
- **THEN** the paragraph under the headline reads "Vibe Test verifies critical journeys using WE WILL's quality methodology; BCQ Expert Services add human judgment where risk requires it."

#### Scenario: Copy is not overwritten by script
- **WHEN** `site.js` applies the English language on load
- **THEN** the headline and subheadline visitors see are identical to the text in `src/_includes/sections/home/hero.html`

#### Scenario: Arabic mode without approved translation
- **WHEN** a visitor switches to Arabic
- **THEN** the headline and subheadline show the English approved text, and the previous Arabic proposition ("نحن لا نختبر البرمجيات فحسب") no longer appears

### Requirement: Primary CTA
The hero SHALL offer exactly one call to action, "Run a Guided Vibe Test", linking to the contact page. Source: WB §III Home › Hero (p. 2) CTA "Run a Guided Vibe Test"; WB §IV (p. 4) "Primary acquisition CTA; the agreed proof-of-value entry motion." placed in "Home hero/final section".

#### Scenario: CTA label and target
- **WHEN** a visitor views the hero
- **THEN** it contains one link, labelled "Run a Guided Vibe Test", with `href="/contact/"`, styled as the existing primary button

#### Scenario: Legacy CTAs removed
- **WHEN** a visitor views the hero in English or Arabic
- **THEN** neither "Book a Clarity Session" nor "Explore Services" (nor their Arabic labels) appears in the hero

### Requirement: Unmentioned hero elements unchanged
Elements the strategy documents do not mention SHALL remain exactly as on the old site: the eyebrow, the "How a release earns its GO" track, the backdrop visuals, animations and all hero styles.

#### Scenario: Eyebrow and GO track preserved
- **WHEN** a visitor loads `/` in English or Arabic
- **THEN** the eyebrow and the four GO-track labels show the same text as the old site in that language

#### Scenario: Layout preserved at desktop width
- **WHEN** the hero is viewed at 1440 px
- **THEN** its layout, colours, typography and animation match the old hero, apart from the changed text and the single CTA

#### Scenario: Layout at mobile width
- **WHEN** the hero is viewed at 390 px
- **THEN** the headline, subheadline and CTA are fully visible without horizontal scrolling, and the CTA is at least 44 px tall

### Requirement: Hero accessibility
The hero SHALL keep one `h1`, a keyboard-reachable CTA with a visible focus state, and text contrast of at least 4.5:1 against the dark hero background (WCAG 2.2 AA).

#### Scenario: Keyboard access
- **WHEN** a keyboard user tabs from the header into the hero
- **THEN** the "Run a Guided Vibe Test" link receives focus with a visible focus indicator

#### Scenario: Contrast
- **WHEN** the subheadline and CTA text are measured against their backgrounds
- **THEN** each contrast ratio is at least 4.5:1
