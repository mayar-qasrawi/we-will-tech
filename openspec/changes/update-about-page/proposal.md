# Proposal

## Why

wewill.tech has no company page. The team, the quality philosophy ("Why WE WILL") and client credibility sit inside the long Home page, and the site never states the approved positioning, "Agentic Software Quality". The Website Brief adds a concise About page for company credibility. No `/about/` exists, so despite the change name this change creates the page (Q20).

## What Changes

New route `/about/`, blocks in Website Brief §III order:

| # | Block | Action | Content | CTA |
|---|---|---|---|---|
| 1 | Company story (`#story`) | EDIT | DRAFT H1 "About WE WILL Technology"; DRAFT lead from SA §III: "WE WILL Technology is an Agentic Software Quality company. Vibe Test applies Agentic QA to recurring verification; BCQ connects quality evidence to customer impact, business risk and release decisions."; DRAFT line from SA §II: "WE WILL brings testing, automation and release-support experience to product teams."; a **marked placeholder** for the short company background; the existing "Interview with Our Founder" link | — |
| 2 | Team (`#team`) | REUSE | Home `#team` included as it is ("The Team Behind WE WILL Quality.", 13 photos, carousel). Only change: the 13 images get alt text, which is missing today (SEO rule) | — |
| 3 | Quality philosophy (`#philosophy`) | EDIT | Home `#why-we-will` reused ("Quality That Thinks With You, Not After You." + Business-Care Quality, Risk-Driven Thinking, Strategic Partnership). The kicker "Why WE WILL" → "Quality philosophy", plus one closing SA line: "Internal QA retains product context and decision ownership." (DRAFT). No capability or use-case content, so nothing duplicates Solutions | — |
| 4 | Credibility (`#credibility`) | REUSE | The existing client-logo strip (`clients.html`, the same 10 logos), no testimonials, so the Home proof stack is not repeated | **Talk to Us** → `/contact/` |

## SEO (keyword choices pending keyword research)

| Item | Value |
|---|---|
| Title | About WE WILL Technology \| Agentic Software Quality (51) |
| Meta description | WE WILL Technology is an Agentic Software Quality company. Meet the team and see how we connect quality evidence to release decisions. (134) |
| Canonical | `https://wewill.tech/about/` |
| H1 | About WE WILL Technology (DRAFT) |
| H2s | The Team Behind WE WILL Quality. · Quality That Thinks With You, Not After You. · Products That Trusted WE WILL Quality. (all reused) |
| Seed terms | None of the Brief §5 seeds map to About. The category term "Agentic Software Quality" (SA §III) is used in the title and lead |
| Alt text | Team photos: "WE WILL team member" until names are supplied (placeholder, see Open items) |

## Preserved (Do Not Touch)

- Team section copy, photos, order and carousel behaviour (including the known reduced-motion and RTL issues; not mentioned by the Brief).
- "Why WE WILL" H2, intro and three cards' copy and Arabic.
- The client-logo strip exactly as the finished `home-social-proof-strip` built it.
- The global chrome, Home and the other pages. `/team/` and `/why-we-will/` stay unchanged (Q2).

## Open items

- Team member names and roles for meaningful alt text: to be supplied by WE WILL.
- Short company background (founding, location, history): to be supplied by WE WILL.

## Capabilities

### New Capabilities

- `about-page`: the `/about/` page: company story, team, quality philosophy, credibility, CTA and metadata.

### Modified Capabilities

None.

## Impact

- New: `src/about/index.njk`, `src/_includes/sections/about/story.html`, `src/_includes/sections/about/philosophy.html` (copy of `why-we-will.html` with the new kicker and closing line; it reuses the existing `whyWeWill.*` keys, so `/why-we-will/` stays unchanged), `src/_includes/sections/about/credibility.html`
- `src/_includes/sections/home/team.html`: `alt` attributes only. This also improves `/team/`, which includes the same file (a non-visual change)
- `src/assets/site.js`: `about.*` keys
