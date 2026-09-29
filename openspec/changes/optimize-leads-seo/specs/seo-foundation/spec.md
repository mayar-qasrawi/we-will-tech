# Spec Delta

## Purpose

The SEO foundation gives search engines and social previews accurate, structured, fast-loading information about WE WILL Technology and Vibe Test, using only approved names and facts.

## ADDED Requirements

### Requirement: Retained search terms in meta descriptions
**Action: EDIT.** Descriptions (all pending keyword research):
- Home: "Know what is safe to ship at the speed you build: agentic QA and release verification with Vibe Test, plus BCQ expert judgment where risk requires it."
- `/vibe-test/`: "Vibe Test by WE WILL Technology is an Agentic QA platform for autonomous testing, regression testing and release verification of critical journeys."
- `/contact/`: title "Contact WE WILL Technology | Run a Guided Vibe Test", description "Run a Guided Vibe Test or discuss a Business Care Quality requirement with WE WILL Technology. Tell us about your product and your next release."

OG and Twitter text SHALL match. Source: Strategic Alignment §III, "Retain buyer search terms such as AI software testing, autonomous testing, regression testing and release verification."; Website Brief §5 seed keywords.

#### Scenario: Lengths
- **WHEN** the three pages' heads are inspected
- **THEN** each title is ≤ 60 characters and each description ≤ 155

### Requirement: Structured data
**Action: NEW.** Home SHALL include JSON-LD `Organization` (name "WE WILL Technology", alternateName "WE WILL", url, logo, `sameAs` = the LinkedIn, Facebook and Instagram URLs already linked in the footer) and `WebSite` (name, url, inLanguage en and ar). `/vibe-test/` SHALL include JSON-LD `SoftwareApplication` (name "Vibe Test", alternateName "Vibe Test by WE WILL Technology", applicationCategory "DeveloperApplication", operatingSystem "Web", description = meta description, url, publisher = the Organization). No `offers`, price or rating SHALL be published. Source: Strategic Alignment §V, "Before publishing prices, validate…".

#### Scenario: Valid JSON-LD
- **WHEN** each script block is parsed as JSON
- **THEN** it parses without error and contains no `offers` or `aggregateRating`

### Requirement: Brand name in previews
**Action: EDIT.** `og:site_name` SHALL be "WE WILL Technology" on every page. Source: Website Brief Purpose, "WE WILL Technology remains the master brand."

#### Scenario: Site name
- **WHEN** any built page is inspected
- **THEN** `og:site_name` is "WE WILL Technology"

### Requirement: Stable, light images
**Action: EDIT.** Every Home `<img>` SHALL carry intrinsic `width` and `height`, and its rendered size SHALL be unchanged. Vibe Test's small logo uses SHALL load a 112 px copy; the original file stays unchanged. Source: project rule (performance / CLS).

#### Scenario: Dimensions
- **WHEN** built `/` is scanned
- **THEN** no `<img>` lacks `width` or `height`, and logo boxes render at the same size as before

### Requirement: Prototype sitemap
**Action: NEW.** `/sitemap.xml` SHALL list `/`, `/vibe-test/`, `/solutions/`, `/resources/`, `/about/`, `/contact/`, `/blog/` and the two posts, with absolute `https://wewill.tech` URLs. It SHALL exclude `noindex` pages and the legacy one-section pages, which are flagged for the team. Source: Website Brief §I architecture.

#### Scenario: Sitemap
- **WHEN** `/sitemap.xml` is fetched
- **THEN** it is valid XML with exactly those nine URLs
