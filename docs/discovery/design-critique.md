Method: dual-agent (A: design-review agent · B: detector and browser-evidence agent), run in isolation from each other

# Design critique — Home page, current site

- **Target:** `src/index.njk` (the baseline rebuild, identical to <https://wewill.tech/>), served at http://localhost:8080/
- **Command:** Impeccable 4.4.0 `critique`. Surface mode: Persuade (company marketing homepage).
- **Date:** 2026-09-28. This is the **before** score; Phase 5 re-runs the same critique on the restructured Home page.
- **Evidence:** A inspected the page in fresh Chrome tabs at 1440×900 and 390×844, in reduced-motion mode, in Arabic (via the toggle and on a fresh load), with the chat widget, keyboard tabbing and contact-form states. B ran the Impeccable detector CLI (59 findings) and injected the in-browser detector at desktop and mobile widths.

## Design Health Score

| # | Heuristic | Score | Key issue |
|---|---|---|---|
| 1 | Visibility of system status | 2 | Form states are good. But nothing shows where you are on a page 11 screens long on desktop and 18 on mobile, the mobile menu stays open after a jump, and Arabic on a phone shows a blank screen. |
| 2 | Match between system and real world | 2 | Coined terms are never explained ("Business-Care", "Quality Debt", "Contracts / Coverage Sets", TQF, QaaS, Kaizen). "Explore (EN/AR)" opens the contact page. A red ↓ marks a good result. |
| 3 | User control and freedom | 2 | The chat can't be closed with Esc or by clicking outside, and its × is 10×21 px. The mobile menu doesn't close after a link is tapped. The team carousel and testimonial rows can't be paused on touch. 13 in-content links open new tabs. |
| 4 | Consistency and standards | 2 | Three primary-button styles. The AI-Era band has its own palette, font and inline CSS. GenAI cards use a 28 px radius against 12 px elsewhere. Two WhatsApp numbers. Three names for the first call. Arabic is half translated. |
| 5 | Error prevention | 2 | The contact form turns off browser validation (`novalidate`) and has none of its own. Required fields are unmarked, visible labels are placeholder-only, and input borders are about 1.7:1. |
| 6 | Recognition rather than recall | 2 | The lead product, Vibe Test, is not in the navigation. Eight offers are never compared side by side. The form forgets which button brought the visitor. |
| 7 | Flexibility and efficiency | n/a | Marketing page with no repeat-use workflow. |
| 8 | Aesthetic and minimalist design | 2 | Polished but overloaded: 14 sections, six nonstop hero animations, two scrolling testimonial rows and an auto-advancing carousel. Quality Canvas appears three times and each testimonial up to three times. |
| 9 | Error recovery | 3 | Plain bilingual messages that keep what was typed and offer an email fallback. But the validation message is generic, no field is highlighted, and in Arabic it is left-aligned. |
| 10 | Help and documentation | n/a | Marketing page; help is the contact form and chat, assessed above. |
| **Total** | | **17/32 (53%)** | **Acceptable** — n/a: heuristics 7 and 10 |

## Design specificity verdict

**Design review:** mostly interchangeable with any AI startup's homepage.
- **The hero** uses the standard dark "AI startup" kit: two drifting glow blobs, a perspective grid floor, a sweeping light beam, a pill label with a pulsing dot, and a headline gradient that shimmers forever. That is six nonstop animations (`site.css` 395–719).
- **The rest of the page:** 12 of the other 13 sections share one template, an uppercase label, a Geist heading, a grey subtitle and a grid of 3–4 white cards that lift on hover.
- **The proof blocks** are stock too: a scrolling testimonial strip, logos boxed in cards, and "Impact That Speaks for Itself" stat cards.
- **What is specific:** three elements express the company's real idea, *release decisions backed by evidence*:
  1. the hero's "How a release earns its GO" track;
  2. the Vibe Test release receipt card;
  3. the four-cell Quality Canvas snapshot.

  Each appears once and never returns.

**Detector scan:**
- **Totals:** the CLI reported 59 findings (26 primary, 33 advisory). The browser pass reported 53 on desktop and 66 on mobile.
- **After checking each in context:** 45 hold up, 1 is partly right and 13 are false positives.
- **What the confirmed findings are:** almost all are fingerprints of that same generic kit, concentrated in the hero and the card system:
  - the shimmering gradient headline text (`site.css` 541–550);
  - coloured glows on the dark hero: the orange CTA and four signal dots;
  - three radial "spotlight" glows;
  - the pulsing dot and the pill label above the headline;
  - the grid-floor background;
  - **one card style (1 px border + wide soft shadow) on 32 elements**;
  - client-logo cards nested inside a card;
  - Inter as the primary font (89% of text);
  - the endless testimonial marquee.
- **Agreement:** both assessments independently call the hero and the card system generic.

**What the detector caught that the review didn't dwell on:**
- the uniform 32-card shadow style;
- dead CSS (`.header-logo`, `site.css` 174–186, matches nothing).

**False positives set aside:**

| Finding | Why it doesn't hold |
|---|---|
| Cramped padding ×4 | The padding is a percentage the static scan can't resolve; the real inset is 77 px at 1280 and 23 px at 390. |
| Tight leading ×4 | All four are one display heading, not body text. |
| All-caps on Arabic ×2 | Arabic has no letter case, and the text is hidden in English. |
| A blue glow | It comes from the dead `.header-logo` rule. |
| The hero "beam" called a marquee | It's a decorative sweep; no content scrolls. |
| Duplicate gradient-text hit | The same element counted twice. |
| Text at the viewport edge ×14 (mobile) | The marquee cards are clipped and masked; no text reaches the edge. |

**What the detector cannot see:** the page's biggest problems, which came from the design review:
- the Arabic overflow
- mobile navigation
- the credibility of the proof
- the number of conversion paths

**Visual overlays:** the browser pass ran headless. The overlays rendered inside the page, but none is open in a browser you can see.

**One more fact both assessments confirmed:**
- **The swap:** on page load, `site.js` replaces seven English strings with different copy from its translations dictionary (`site.js` 100–104 and the success-stories keys).
- **Affected strings:** the hero eyebrow, headline and subtitle, and four Success Stories strings.
- **Consequence:** the HTML partials don't show what visitors read, and editing `hero.html` alone changes nothing visible.

## Overall impression

The page is well built and polished on the surface, but it reads as a stack of 14 topics rather than an argument.

- **The good moment comes early and is never used again.** The Vibe Test receipt is concrete and true to the product.
- **The page ends weakly:** a plain four-field form, a chat button hidden behind the footer, "© 2023".
- **The biggest opportunity** is to make the evidence language (receipt, verdict, GO) the spine of the page and cut everything that doesn't serve one primary action.
- **The most urgent fix is Arabic on mobile:** for Saudi visitors on phones the page is currently blank.

## What's working

1. **The Vibe Test release receipt** (`sections/home/vibe-test.html`, `.sara-verdict`).
   - It shows the product's actual output (PASS, "3 blockers cleared · 0 open", ticked journeys, receipt number, confidence) instead of describing it.
   - It is the most credible element on the page.
   - It is built well: screen-reader labelled, dark green text on a tint rather than white on green.
2. **The "How a release earns its GO" track.**
   - It builds the business idea, go/no-go decisions, into the layout.
   - It lights up in sequence (motion with meaning), switches off under reduced motion, and mirrors correctly in Arabic.
3. **Solid foundations.**
   - Colour tokens on `:root`, with accessible dark variants for green and orange.
   - Body grey at 5.97:1 contrast.
   - Scroll animations only apply when JavaScript runs, with reduced-motion fallbacks for the hero and testimonials.
   - A contact form with sending, success and error states in both languages that announces them to screen readers, keeps input on error and offers an email fallback.
   - A YouTube player that only loads on click.

## Priority issues

### [P0] Arabic on a phone shows a blank screen; Arabic on desktop scrolls sideways into ~9,600 px of empty space

- **What:** after switching to Arabic on a phone, or loading with Arabic remembered, the visible area sits on empty space.
  - On desktop the page becomes 11,040 px wide, and a sideways trackpad swipe drifts into blank space.
  - Confirmed on Home and `/contact/` in Chrome's mobile emulation. It matches the live-site capture `docs/current-site/screenshots/home/ar/first-viewport--mobile--as-rendered.jpg`.
- **Cause:** the contact form's hidden spam-trap field, `.contact-hp { position:absolute; left:-10000px }` (`site.css` ~2134). In right-to-left layout, space off to the left becomes scrollable. Hiding that one element restores a 390 px page.
- **Other Arabic gaps:**
  - The Vibe Test receipt is all English, and its text order scrambles ("blockers cleared · 0 open 3").
  - 4 of 7 testimonials, including the featured quote, are still English (empty Arabic strings, `site.js` 432–438), with punctuation on the wrong side.
  - "Menu" is untranslated.
  - The form's status message is forced left-aligned.
- **Why it matters:** Saudi Arabia is the priority market, and the language choice is remembered, so these visitors get a blank page on every visit.
- **Fix:**
  - Hide the spam-trap field with a clip-based visually-hidden technique, with no negative offset.
  - Add `overflow-x: clip` on `html, body` as a safety net.
  - Add an Arabic check that the page is never wider than the screen.
  - Fill the missing Arabic strings.
  - Use `text-align: start`, and isolate numbers inside Latin runs.
- **Suggested command:** `/impeccable harden`

### [P1] The first screen doesn't say what WE WILL sells or to whom, and the page offers ~11 ways to "start"

- **What:**
  - The headline is abstract and defined by negation.
  - Vibe Test, the lead product, is in neither the hero nor the navigation.
  - "Book a Clarity Session" lands on a generic form that never mentions a session.
  - "Explore Services" jumps to four cards with no button, a dead end.
  - The nav item "AI-Era Quality" jumps to a 408 px banner, not the offer page.
  - **Start/contact paths:** 11 in total, under 9 labels, going to 7 destinations, including two WhatsApp numbers and an external domain for the lead product.
- **Why it matters:** the brief's "Land" and "Convert" stages aren't served. A CTO facing a ten-way choice leaves.
- **Fix:**
  - One primary action and one secondary path everywhere. The brief names them: "Run a Guided Vibe Test" and "Discuss a Business Care Quality Requirement".
  - Consolidate the scattered offer sections.
  - Let the form carry the visitor's intent.
  - Make one source (the translations dictionary or the partials) authoritative for copy.
- **Suggested command:** `/impeccable distill`, then `/impeccable clarify`

### [P1] Proof is weak or broken exactly where trust is decided

- **What:**
  - **`#impact` figures** (↓32%, ↑65%, 2×) have no source, baseline, client or timeframe.
  - **Testimonials** name only a company, with no person or role. Each repeats up to three times and scrolls past at about 40 px/s.
  - **`#clients`** has two broken logos (404 on old `/wp-content/` paths), one blank card, and two wrong image descriptions: One Studio's says "iStoria logo", SellEnvo's says "Inspire".
  - **`#team`** shows 13 names with no roles and no image descriptions.
  - **The first `#knowledge` card** returns 404.
- **Why it matters:** CTOs discount anonymous praise and unsourced numbers, and broken logos on a quality company's homepage undermine the pitch.
- **Fix:**
  - 2–3 attributed evidence points. The brief asks for "2–3 strongest testimonials / evidence points" and "remove the current repetitive testimonial treatment".
  - Repair or remove the broken logos and the 404 link.
  - Add image descriptions.
- **Suggested command:** `/impeccable clarify`, then `/impeccable harden`

### [P1] Mobile navigation and the floating chat button get in the way

- **What:**
  - **Header:** the sticky header is two rows, 120 px, 14% of the screen.
  - **Menu:** it opens above its own button, which then jumps ~370 px. It covers 58% of the screen and **stays open after a link is tapped** (`site.js` 683–692 never closes it).
  - **Chat button:** it covers content and **sits behind the footer at the contact form** (footer z-index 80 vs chat 60).
  - **Closed chat panel:** it leaves four invisible controls in the keyboard tab order, and Esc does nothing.
  - **Team carousel:** it auto-advances every 3 s even under reduced motion.
- **Why it matters:** a one-handed visitor loses their place, and the main contact route is hidden at the moment of intent.
- **Fix:**
  - A single-row header, 64 px at most.
  - A menu that closes on link tap and on Esc.
  - A chat button above the footer.
  - Remove the closed panel from the tab order.
  - Touch targets of at least 44 px.
  - No autoplay under reduced motion, plus a pause control.
- **Suggested command:** `/impeccable adapt`

### [P2] Flat hierarchy and generic styling hide the three product-true devices

- **What:**
  - The hero runs six nonstop animations.
  - The section label is larger than the subtitle under it.
  - The GenAI card heading outranks its section heading.
  - The impact figures are smaller than headings.
  - There are three primary-button styles.
  - The AI-Era band brings its own inline palette (blue #0f1f6b→#1b3bbf, yellow #ffd76b) and an Inter heading, where other sections use Geist.
  - Eight cards that can't be clicked still lift on hover.
- **Why it matters:** nothing tells the eye what matters most.
- **Fix:**
  - Reduce hero motion to the one meaningful animation.
  - One button system and one palette.
  - Figures at display size.
  - No hover-lift on cards that can't be clicked.
  - Let the GO track and the receipt shape the visual language.
- **Suggested command:** `/impeccable shape`, then `/impeccable typeset` and `/impeccable quieter`

## Persona red flags

**Jordan (first-timer)**
- The headline names no deliverable, and "Business-Care" is never defined.
- The GenAI section's "Contracts, Coverage Sets, Behavioral Evaluation" and "Pass / Weak / Violation" appear without explanation.
- "Explore (EN/AR)" looks like a language choice but opens `/contact/`.
- "Book a Clarity Session" leads to a form that never mentions a session, a length or a price.
- "Generate Your Quality Canvas" opens ChatGPT in a new tab.
- The red ↓32% reads as bad news.
- Nothing helps Jordan choose between Clarity Session, Vibe Test, AI-Era Quality Services and QaaS.

**Riley (stress tester)**
- **Arabic on a phone:** a blank screen that persists after refresh.
- **Arabic text defects:** an English featured quote with flipped punctuation, the receipt reading "0 open 3", "Menu" untranslated, and a left-aligned error message.
- **Contact details:** two WhatsApp numbers (970567720720 in the chat; "002 01023833940", with a space, in the footer).
- **Copy and links:** the source copy differs from what renders, and the "Business-Care Quality" card returns 404.
- **Logos:** wrong image descriptions, broken logos and a blank I Plan 2 card.
- **Form:** submitting it empty gives a generic message with no field highlighted.
- **Keyboard and motion:** Esc doesn't close the chat, four invisible chat controls sit in the tab order, and the carousel ignores reduced motion.
- **Footer:** "© 2023".

**Casey (mobile, one-handed)**
- **Header and menu:** a 120 px two-row sticky header, and a menu that covers 58% of the screen and stays open after "Contact".
- **Page length:** 18.4 screens; the contact section starts at 14,353 px.
- **Chat button:** covers card text, then hides behind the footer at the form.
- **Motion:** the testimonial strip can't be paused by touch, and the GO track drops its connecting line on mobile.
- **Touch targets:** Send is 38 px tall, the inputs 41 px, EN/AR 31 px, the chat close button 10×21 px.
- **Links:** "Start a Vibe Test" opens a new tab on another domain.
- **Page weight:** about 3.6 MB, including 1.1 MB and 800 KB team photos shown at 96 px.

**Growth-stage SaaS CTO in Saudi Arabia** (from the brief's audience)
- **Land:** the Arabic mobile page is blank.
- **Evaluate:** no entry point by use case (for example, shipping a GenAI feature or a release next week).
- **Trust:** unsourced statistics, anonymous testimonials, and no visible expert layer (roles, credentials).
- **Security:** the lead product lives on an unbranded domain, and nothing about security or confidentiality appears near the form.
- **Regional relevance:** none shown.
- **Convert:** no "Run a Guided Vibe Test" action anywhere.

## Minor observations

- **Labels repeat headings:** "Impact / Impact That Speaks for Itself", "Deep Dive / Deep Dive into Our Knowledge". "Our Methodology." under "GenAI-based Systems" says nothing on its own.
- **Hidden from screen readers:** the six AI-Era capability tags (`aria-hidden="true"`).
- **Video poster:** the play button covers the key words of the poster.
- **Keyboard:** there's no skip link, and 10 tab stops come before the hero button.
- **Motion:** smooth scrolling stays on under reduced motion.
- **Small text:** much of it is under 15 px at 1440 wide (cards 13.1–14.4 px, client captions 12.5 px).
- **New tabs:** the internal blog card opens in one.
- **Client links:** 5 of 12 logos link away to client sites, 7 don't.
- **Footer:** it has no email, address or privacy link. Its tagline is a third positioning after the hero and the AI-Era band.
- **Chat widget:** the whole widget is a live region, and it grabs focus when opened.
- **Dead CSS:** `.header-logo`, `site.css` 174–186.

## Questions to consider

1. What if the page were a release's journey to GO, each section one stage of the hero's track, instead of 14 stacked topics?
2. If Vibe Test is the lead product, why does its button leave wewill.tech for an unbranded domain? (The brief already moves it to a page on wewill.tech.)
3. Could every claim come with a receipt (client, date, evidence) the way Vibe Test's verdicts do?
4. What would be lost if the homepage stopped explaining method (Contracts, Coverage Sets, TQF, Canvas) and only proved outcomes?
5. For a Saudi-first launch, should the Arabic homepage be designed first rather than translated?
