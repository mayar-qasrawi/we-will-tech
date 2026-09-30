# Design

## Context

See proposal.md › Why. `src/index.njk` lists one include per section. Section copy is duplicated: HTML text plus `translations.en/ar` keys in `site.js`, which overwrite the HTML on load. An empty value keeps the HTML text. Testimonials are 29 `.t-card` elements in two `.t-marquee` tracks. `#knowledge` cards use `data-deep-dive-*` attributes for EN/AR. The form partial `contact.html` is shared with `/contact/`.

## Goals / Non-Goals

**Goals:** blocks 3–8 exactly as in the specs; minimal edits to reused sections; the new blocks use existing section, card and button classes and `--ww-*` tokens.

**Non-Goals:** no change to the hero, the social-proof strip, the header/footer, the relocated sections' files or the chat widget. No new JS behaviour.

## Decisions

1. **Edit in place where the Brief says EDIT/REUSE** (`vibe-test.html`, `success-stories.html`, `knowledge.html`); **new partials for the NEW blocks** (`use-cases.html`, `expert-layer.html`) **and for the final close** (`final-cta.html`). The final close is a new file so `/contact/` keeps its form. *Alternative:* a `{% if %}` inside `contact.html`. Rejected: it mixes two blocks in one PHP partial.
2. **Copy source of truth.** Every edited or new English string is written both in the HTML and in `translations.en`. The `translations.ar` value is set to `""` for edited strings, so Arabic shows English instead of outdated Arabic (the same approach as `home-hero`). New keys get `""` in `ar`. Each DRAFT string's element or block carries `<!-- DRAFT: needs approval -->`.
3. **Testimonials become a static `<div class="t-grid">` of three `<figure class="t-card">`.** They reuse the `.t-card`, `.t-quote`, `.t-logo` and `.t-client` styles and drop the `.t-marquee` wrapper. The marquee CSS stays in `site.css`; it is not deleted, in case the production site uses it elsewhere.
4. **Use-case cards reuse the `.sara-capability-card` visual pattern** (index number + H3 + text) as whole-card links, with a new `.use-case-grid` layout (5 columns at ≥1200 px, 2–3 columns in between, 1 column at 390 px).
5. **Expert layer** is a CSS grid: two cards over one full-width card, mirroring the SA §V diagram. It uses the existing `.section`, `.section-header` and card surfaces.
6. **Relocation = removing the includes** from `index.njk` only. The target pages include the same partials in their own changes.
7. **Frozen copies for the old one-section pages.** `/knowledge/` and `/success-stories/` include the same partials as Home, so editing them would change those pages, which the Checkpoint 1 ruling keeps unchanged (Q2). They now include `sections/legacy/knowledge.html` and `sections/legacy/success-stories.html`, byte-for-byte copies from `main`. Verified: their `<main>` output is identical to `main`. *Alternative:* let them follow Home. Rejected: it breaks the ruling.
8. **Routing CTAs use the secondary button style** ("Explore Vibe Test", "Explore Solutions", "View Resources", "Discuss a Quality Requirement"). The primary style is kept for "Run a Guided Vibe Test" only (Website Brief §IV: routing CTAs are "not primary conversion actions").

## Risks / Trade-offs

- [Between this change and the About/Solutions/Resources changes, Team, Services and the other relocated content are not visible anywhere] → Accepted inside the prototype branch. The changes are applied in sequence before handover.
- [The use-case cards link to anchors that don't exist yet] → They resolve once `add-solutions-page` lands; Phase 4 checks them.
- [English text in Arabic mode] → Q18; covered by the translation sheet.
