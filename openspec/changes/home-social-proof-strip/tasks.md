# Tasks

## 1. Shared presentation

- [x] 1.1 **Files: `src/assets/site.css`.** Replace the large client-card treatment with compact responsive strip styles, add linked-card `:focus-visible` styling, and remove unused carousel selectors only after confirming no source template references them; verify the client CSS uses existing `--ww-*` tokens and defines layouts for 1440 px and 390 px without horizontal overflow.

## 2. Section content

- [x] 2.1 **Files: `src/_includes/sections/home/clients.html`.** Keep the ten locally backed clients, remove Oyoun Media and In2World, correct every logo alternative text, preserve current copy and approved outbound links, and verify no `/wp-content/` logo URL or carousel control remains in the section.

## 3. Home placement

- [x] 3.1 **Files: `src/index.njk`.** Move the single clients include directly after the hero include, keep Vibe Test next, and verify generated Home contains exactly one each of `#hero`, `#clients`, and `#vibe-test` in that order.

## 4. Section review gate

- [x] 4.1 **Files: none (verification only).** Run `npm run build`; inspect Home in English and Arabic at 1440 px and 390 px; verify all ten logos load, copy remains unchanged, linked logos have keyboard focus, non-linked logos add no tab stops, reduced-motion mode exposes every logo, and `#clients` introduces no horizontal overflow. The known Arabic overflow from the unchanged contact section remains out of scope.
- [x] 4.2 **Files: none (verification only).** Confirm hero, Vibe Test introduction, every later section, global navigation, footer, language behavior, chat widget, and JavaScript remain unchanged; then stop for user review before planning or applying the next section.
