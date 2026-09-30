# Design

## Context

See proposal.md › Why. No Solutions page exists. The capability copy lives in `sections/home/services.html` (with `data-i18n` keys `services.*`) and in `pages/ai-era-quality-services.html` (bilingual `.i18n-en/.i18n-ar` pairs, inline styles and emoji icons). `sections/home/how-we-work.html` is a self-contained section. Testimonial markup and keys (`success.case*`) are in `success-stories.html`.

## Goals / Non-Goals

**Goals:** one page, five parallel use-case blocks with a consistent anatomy, capability copy reused verbatim with its existing Arabic, and CTAs from the shared map.

**Non-Goals:** no new service names or offers, no pricing, no AI Feature Evaluation method detail, and no restyling of `/ai-era-quality-services/`.

## Decisions

1. **One parameterised partial for the five use cases** (`use-case.njk`), with the data in the route's front matter (id, name, situation, help, outcome, CTAs, proof key). Five identical structures make one template the least error-prone; the PHP team can loop over the same data. *Alternative:* five hand-written partials. Rejected: that duplicates markup five times.
2. **Reuse translation keys** for the capability copy where they exist (`services.*` from Home). For the AI-Era items, copy the existing EN/AR text into new `sol.cap.*` keys, because that page uses `.i18n-*` pairs instead of keys. The copy stays verbatim; only its container changes to the site's card style (no emoji, no inline styles).
3. **Testimonials reuse the `.t-card` figure markup** introduced by `update-home-page` and the existing `success.case*` keys, so the quote text has one source.
4. **`how-we-work.html` is included unchanged** after `#methodology`, so its content is relocated rather than copied.
5. **Layout:** each use case is a two-column grid at ≥ 1024 px (content | proof card) that stacks below that width. Jump links are an ordered list of in-page anchors, with `scroll-margin-top` set to clear the sticky header.

## Risks / Trade-offs

- [The same three testimonials appear on Home and Solutions] → The Brief asks for proof "beside the most relevant buyer problem". Repetition across pages is accepted; each page shows each quote only once.
- [Use-case tags are an interpretation] → Marked DRAFT, for WE WILL to refine (Q25 default).
