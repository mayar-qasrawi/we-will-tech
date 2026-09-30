## Context

`hero.html` carries `data-i18n` keys, and `applyLanguage()` in `site.js` replaces each element's text with `translations[lang][key]` whenever that value is non-empty. The English dictionary currently holds different copy from the template, so visitors see the dictionary text.

## Decisions

- **One source for English copy.** The template and `translations.en` get identical strings. The headline keeps its existing structure — an accent `<span>` on the second half, marked `data-i18n-html="true"` — so the existing gradient style applies: `Know what is safe to ship -<br/><span>at the speed you build</span>.`
- **Arabic fallback.** `translations.ar` values for `hero.title`, `hero.subtitle` and `hero.ctaPrimary` are set to empty strings; empty values leave the template's English text in place.
- **Removed secondary CTA.** The `.hero-actions` container keeps its styles; it now holds one button. `hero.ctaSecondary` entries are deleted.
- **No visual changes.** No CSS is edited.

## Risks

- The hyphen in the approved headline is kept exactly as written ("ship - at"), not typeset as a dash, because the copy is approved verbatim.
