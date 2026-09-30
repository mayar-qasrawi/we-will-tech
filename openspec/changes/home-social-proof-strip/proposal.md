# Proposal

## Why

After the approved Home hero establishes the proposition, the next ICP-journey step must provide immediate credibility. The current `#clients` section appears near the bottom of Home as a large twelve-card trust wall, while the Website Brief requires a compact client-logo strip or carousel high on the page.

## What Changes

- **MODIFY — Home `#clients`:** turn the existing client grid into a compact social-proof strip and move it directly below the hero.
- Show only the ten clients whose logo files exist locally. Do not show Oyoun Media or In2World until WE WILL supplies their logo files.
- Correct the One Studio and SellEnvo logo alternative text.
- Preserve approved existing client names, logo files, outbound links, and EN/AR section copy.
- Keep every logo available without an auto-advancing carousel or controls; use a responsive wrapping strip at 1440 px and a compact grid at 390 px.
- Stop for review after this section. Do not modify the following Vibe Test introduction in this change.

## Preserved

- **KEEP — Home hero:** completed in `home-hero`; no further change.
- **KEEP — Home `#vibe-test` and every later section:** unchanged pending separate section plans.
- Header, footer, language switch, chat widget, and other elements not mentioned by the strategy documents remain unchanged.

## Capabilities

### New Capabilities

- `home-social-proof`: placement, content, responsive layout, and accessibility of the Home social-proof logo strip.

### Modified Capabilities

None.

## Impact

- `src/index.njk` — move the existing clients include directly after the hero include.
- `src/_includes/sections/home/clients.html` — reduce the trust wall to ten locally available logos and correct alternative text.
- `src/assets/site.css` — replace the large card-grid treatment with compact responsive strip styles.
- No dependency, API, or JavaScript change.
