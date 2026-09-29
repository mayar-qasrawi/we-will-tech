# Design

## Context

See `proposal.md` for motivation. Home currently includes `clients.html` after Success Stories near the page bottom. Its twelve-card grid includes two broken remote images and uses large cards, spacing, shadows, captions, and section copy. `index.njk` controls section order. No client-specific JavaScript is active.

## Goals / Non-Goals

**Goals:**

- Reuse the current `#clients` section as a compact credibility strip directly below the hero.
- Keep all approved logos visible without automated motion or extra controls.
- Preserve current bilingual section copy and working client links.
- Keep markup portable to the production PHP section template.

**Non-Goals:**

- Do not redesign or edit the completed hero.
- Do not modify the Vibe Test introduction or any later Home section.
- Do not source, recreate, or download missing Oyoun Media and In2World logos.
- Do not change global navigation, translations, or JavaScript.

## Decisions

### Move the existing include instead of duplicating content

Move `{% include "sections/home/clients.html" %}` from its current location to the line after the hero include in `src/index.njk`. One section and one `#clients` ID remain. Duplicating a second strip would create repeated content and invalid duplicate IDs.

### Use a wrapping CSS grid, not a carousel

Keep all ten logos in document order. Use a compact grid that presents the set as one strip at 1440 px and fewer columns at 390 px. This satisfies the brief's "strip/carousel" choice without controls, auto-advance, JavaScript, hidden overflow, or motion. A horizontal scroller was rejected because it can hide credibility evidence and adds touch/keyboard interaction.

### Remove only entries without local assets

Remove Oyoun Media and In2World because their two remote WordPress image URLs return 404. Keep the ten entries backed by `src/uploads/`. Preserve external links already attached to MICEtribe, Rasel, and I Plan 2. Do not add links to non-linked brands because no approved destinations are present in the current section.

### Reduce visual weight within section-owned CSS

Update only client selectors in `site.css`: tighter vertical section spacing, smaller shell padding, lower-emphasis borders/shadows, consistent logo box heights, and responsive column rules. Keep existing global tokens and shared section typography. Remove obsolete client carousel rules only when no current template uses their selectors.

### Correct accessible names and focus treatment

Set each logo's `alt` to `<displayed client name> logo`, including the known One Studio and SellEnvo errors. Add `:focus-visible` treatment matching the existing brand focus language to linked logo tiles. Non-linked `<figure>` elements remain outside keyboard order.

## Risks / Trade-offs

- **Ten logos can still consume vertical space on narrow screens.** Use small cells and a compact multi-column grid; verify at 390 px.
- **Logo source images have different aspect ratios and intrinsic sizes.** Normalize the image container and use `object-fit: contain` without distorting assets.
- **Moving `#clients` changes legacy anchor scroll position.** Keep the same ID so existing links continue to work.
- **English client names remain visible in Arabic mode.** These are brand names already used by the old site; preserve them unchanged.

## Migration Plan

Implement as one section commit after review. Roll back by restoring the prior include position, client markup, and client CSS block. No data or dependency migration is required.
