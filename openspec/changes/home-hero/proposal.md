## Why

The Home hero is the "Land" stage of the approved ICP journey. Today it leads with "We don't just test software. We protect product decisions." and the CTA "Book a Clarity Session", neither of which is the approved proposition or conversion action. The Website Brief marks the block **EDIT**:

> WB §III Home › Hero (p. 2): "Approved company-level proposition; clarify the release-confidence / safe-to-ship outcome and target buyer." CTA: "Run a Guided Vibe Test".

## What Changes

- **Headline** becomes the approved primary headline, verbatim: SA §VI (p. 6) "Know what is safe to ship - at the speed you build."
- **Subheadline** becomes the approved supporting subheadline, verbatim: SA §VI (p. 6) "Vibe Test verifies critical journeys using WE WILL's quality methodology; BCQ Expert Services add human judgment where risk requires it."
- **Primary CTA** becomes "Run a Guided Vibe Test" (WB §IV, placement "Home hero/final section"). It links to the contact page `/contact/`; the request-type preset follows with the contact-page section (OQ-06).
- **"Explore Services" is removed.** It is not part of the CTA framework: WB §IV lists only "Run a Guided Vibe Test", "Discuss a Business Care Quality Requirement" and "Explore Vibe Test / Explore Solutions". Its target `#services` leaves Home under the brief.
- The English copy moves to one source. Today `site.js` overwrites the HTML text on load, so the template and the `translations.en` entries are updated together.
- Arabic: no approved Arabic exists for the new copy. The Arabic entries for the changed strings are emptied, so Arabic mode shows the new English text instead of the old Arabic proposition (OQ-36 default).

## Preserved (not mentioned by the documents — kept exactly as the old site)

- The eyebrow "Software Quality • Business-Care • AI-Aware".
- The "How a release earns its GO" track and its Arabic.
- All hero visuals, animation, layout and styles (`site.css` 395–719).

## Not done (needs approved wording)

- A line naming the target buyer. The brief asks the hero to clarify the "target buyer", but the approved headline and subheadline name none, and no approved buyer line exists (OQ-20).

## Capabilities

### New Capabilities
- `home-hero`: content and behaviour of the Home page hero section.

## Impact

- `src/_includes/sections/home/hero.html`
- `src/assets/site.js` (`translations.en` and `translations.ar` keys `hero.title`, `hero.subtitle`, `hero.ctaPrimary`, `hero.ctaSecondary`)
