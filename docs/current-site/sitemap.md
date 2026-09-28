# Current site map — wewill.tech and the current Vibe Test page

Captured 2026-09-28. Observed facts only; nothing here decides what the restructure keeps or changes. The tables under "Page inventory" and below are generated from [raw/capture-data.json](raw/capture-data.json).

## Where the page list comes from

- `https://wewill.tech/sitemap.xml` — 16 URLs (Home, 11 one-section pages, AI-Era Quality Services, Blog index, 2 blog posts). `robots.txt` points to it.
- Links found while crawling — adds `https://wewill.tech/business-care-quality` (returns 404) and two "original article" URLs linked from the blog posts (both return 404).
- `https://vibe-test.oneapp.dev/` — the current Vibe Test product page (confirmed by the user on 2026-09-28). A single page; its `sitemap.xml` returns 404.
- The blog index lists exactly two posts and has no pagination, so both posts are captured.

## Platform (observed)

- **wewill.tech** is server-rendered PHP (`X-Powered-By: PHP/8.3`, LiteSpeed, Hostinger). Shared assets: `/assets/layout.css`, `/assets/site.css`, `/assets/site.js.php` (copies in [raw/assets/](raw/assets/)). Uploaded media live under `/uploads/`. `robots.txt` disallows `/admin/`, `/lib/`, `/partials/`, `/storage/`, `/node_modules/`, `/e2e/`, `/playwright-report/`, `/test-results/` — i.e. the source repository has an admin area, PHP partials and a Playwright test suite. That repository is **not** in this project folder.
- **Fonts:** Inter (body), Geist (display), Tajawal (Arabic), from Google Fonts.
- **Design tokens** already exist as CSS custom properties on `:root` in `site.css` (`--ww-ink #0B1220`, `--ww-indigo #1F3DDB`, `--ww-emerald #0FAE6E`, `--ww-orange #FF6716`, tints, radii, shadows, font stacks).
- **Bilingual EN/AR.** The header has an EN | AR switch. `site.js.php` holds a translations dictionary; choosing AR sets `<html lang="ar" dir="rtl">`, swaps copy (and the logo image) and remembers the choice in `localStorage`. Arabic exists for Home, the 11 one-section pages and AI-Era Quality Services; the blog is English only. See `pages/ar/`.
- **The Vibe Test page** is a single-file Vite bundle served from S3 behind Cloudflare, with its own EN/AR switch (inline `.en` / `.ar` text pairs). It has no `<title>`, no meta description and no `lang` attribute; its images are generated at runtime as `blob:` URLs, so they cannot be linked or downloaded from this snapshot.

## Navigation (as captured)

**wewill.tech header** (every page): logo → `/` · Home · AI-Era Quality · Why WE WILL · Quality Canvas · How We Work · Contact · Blog · EN | AR · "Menu" button on mobile. On Home the items are in-page anchors (`#hero`, `#ai-era-quality-services-promo`, `#why-we-will`, `#quality-canvas`, `#how-we-work`, `#contact`); on every other page they point to the same anchors on Home (`/#…`). Blog → `/blog/`. There is no header link to Vibe Test.

**wewill.tech footer** (identical on every page that has one): logo · "Reduce Time, Reduce Cost & Be Confident" · "© 2023 WE WILL" · "All rights reserved." · LinkedIn · Facebook · WhatsApp · Instagram. Full text: [pages/_global-chrome.md](pages/_global-chrome.md).

**Floating chat widget**: present only on Home and `/contact/` ("Chat with WE WILL" panel with a message box, WhatsApp and Email buttons).

**Vibe Test page header**: "Vibe-Test. BY WE WILL TECH" logo · Problem · How it works · Services · The Receipt · Who it's for (in-page anchors) · العربية / EN switch · "Book a Demo" (→ `#book`, the final call-to-action section, whose button is `mailto:hello@wewill.tech?subject=Vibe-Test%20Demo`).

**Entry points into Vibe Test from wewill.tech**: only the Home "Meet Vibe Test" section ("Start a Vibe Test" → `https://vibe-test.oneapp.dev`, and a YouTube video link).

## How the pages relate

- **Home** is one long page of 14 sections (table below).
- **The 11 one-section pages** (`/genai-based-systems/`, `/why-we-will/`, `/services/`, `/quality-canvas/`, `/impact/`, `/how-we-work/`, `/team/`, `/success-stories/`, `/clients/`, `/knowledge/`, `/contact/`) each render exactly one Home section inside the shared header and footer. Their text is identical to the matching Home section in all 11 cases. Home's `#hero`, `#vibe-test` and `#ai-era-quality-services-promo` have no standalone page.
- **`/ai-era-quality-services/`** is a separate 8-section landing page, promoted from Home section 4 ("Explore the offer"). Its calls to action lead to `/contact/#contact` ("Book a 30-Min Discovery Call").
- **Blog**: index plus two posts, addressed as `/blog/?slug=…`.

## Problems found during capture

| # | Where | What was observed | Evidence |
|---|---|---|---|
| 1 | Home §14 "Deep Dive into Our Knowledge" and `/knowledge/` — card "Business-Care Quality" | Links to `https://wewill.tech/business-care-quality`, which returns **404** | [pages/business-care-quality-404.md](pages/business-care-quality-404.md) |
| 2 | Both blog posts — "Read the original WE WILL article" | Link to `/the-triad-quality-framework/` and `/when-software-quality-becomes-a-business-decision/`; both return **404** | blog post pages, "Outbound links" |
| 3 | Home §13 Clients and `/clients/` | Oyoun Media and In2World logos don't load (404 on old `/wp-content/uploads/2023/04/…` paths) | [pages/home.md](pages/home.md) capture notes |
| 4 | Home §13 Clients | Alt text doesn't match the logo: One Studio's logo has alt "iStoria logo"; SellEnvo's logo has alt "Inspire" | [pages/home.md](pages/home.md) §13 |
| 5 | Home §11 Team and `/team/` | 13 team photos have no `alt` attribute | [pages/home.md](pages/home.md) capture notes |
| 6 | Home §12 Success Stories | Testimonials repeat: two scrolling rows, each duplicated for the loop, and One Studio's quote appears twice within the first row | [pages/home.md](pages/home.md) §12 |
| 7 | Arabic mode — Home and `/contact/` only | The page becomes 11,040 px wide on desktop and 10,367 px on mobile (English: 1,440 / 390); on mobile the page auto-scrolls sideways and the first screen can render blank. Cause isolated: the contact form's spam-trap field `.contact-hp` is hidden with `left: -10000px` (`site.css` line 2134), which creates scrollable overflow in right-to-left layout | [pages/ar/home.md](pages/ar/home.md), `screenshots/home/ar/first-viewport--mobile--as-rendered.jpg` |
| 8 | Footer (all pages) | Copyright reads "© 2023 WE WILL" | [pages/_global-chrome.md](pages/_global-chrome.md) |
| 9 | WhatsApp links (all pages) | The phone parameter contains a space: `phone=002 01023833940` (not tested whether WhatsApp accepts it) | link table below |
| 10 | Vibe Test page | No `<title>`, meta description or `lang` attribute | [pages/vibe-test-external.md](pages/vibe-test-external.md) |
| 11 | English pages | No horizontal overflow: all 35 English full-page screenshots are exactly viewport-wide | — |

## Page inventory

| # | Page | URL | HTTP | `<title>` | Regions (header/sections/footer/other) | Text | Screenshots (EN) | Arabic |
|---|---|---|---|---|---|---|---|---|
| 1 | Home | <https://wewill.tech/> | 200 | WE WILL - Home | 1 header, 14 section, 1 footer, 1 other | [home.md](pages/home.md) | [desktop](screenshots/home/full--desktop.jpg) · [mobile](screenshots/home/full--mobile.jpg) | [text](pages/ar/home.md) · [desktop](screenshots/home/ar/full--desktop.jpg) · [mobile](screenshots/home/ar/full--mobile.jpg) |
| 2 | GenAI-based Systems (standalone section page) | <https://wewill.tech/genai-based-systems/> | 200 | WE WILL - GenAI-based Systems | 1 header, 1 section, 1 footer | [genai-based-systems.md](pages/genai-based-systems.md) | [desktop](screenshots/genai-based-systems/full--desktop.jpg) · [mobile](screenshots/genai-based-systems/full--mobile.jpg) | [text](pages/ar/genai-based-systems.md) · [desktop](screenshots/genai-based-systems/ar/full--desktop.jpg) · [mobile](screenshots/genai-based-systems/ar/full--mobile.jpg) |
| 3 | Why WE WILL (standalone section page) | <https://wewill.tech/why-we-will/> | 200 | WE WILL - Why WE WILL | 1 header, 1 section, 1 footer | [why-we-will.md](pages/why-we-will.md) | [desktop](screenshots/why-we-will/full--desktop.jpg) · [mobile](screenshots/why-we-will/full--mobile.jpg) | [text](pages/ar/why-we-will.md) · [desktop](screenshots/why-we-will/ar/full--desktop.jpg) · [mobile](screenshots/why-we-will/ar/full--mobile.jpg) |
| 4 | Services (standalone section page) | <https://wewill.tech/services/> | 200 | WE WILL - Services | 1 header, 1 section, 1 footer | [services.md](pages/services.md) | [desktop](screenshots/services/full--desktop.jpg) · [mobile](screenshots/services/full--mobile.jpg) | [text](pages/ar/services.md) · [desktop](screenshots/services/ar/full--desktop.jpg) · [mobile](screenshots/services/ar/full--mobile.jpg) |
| 5 | Quality Canvas (standalone section page) | <https://wewill.tech/quality-canvas/> | 200 | WE WILL - Quality Canvas | 1 header, 1 section, 1 footer | [quality-canvas.md](pages/quality-canvas.md) | [desktop](screenshots/quality-canvas/full--desktop.jpg) · [mobile](screenshots/quality-canvas/full--mobile.jpg) | [text](pages/ar/quality-canvas.md) · [desktop](screenshots/quality-canvas/ar/full--desktop.jpg) · [mobile](screenshots/quality-canvas/ar/full--mobile.jpg) |
| 6 | Impact (standalone section page) | <https://wewill.tech/impact/> | 200 | WE WILL - Impact | 1 header, 1 section, 1 footer | [impact.md](pages/impact.md) | [desktop](screenshots/impact/full--desktop.jpg) · [mobile](screenshots/impact/full--mobile.jpg) | [text](pages/ar/impact.md) · [desktop](screenshots/impact/ar/full--desktop.jpg) · [mobile](screenshots/impact/ar/full--mobile.jpg) |
| 7 | How We Work (standalone section page) | <https://wewill.tech/how-we-work/> | 200 | WE WILL - How We Work | 1 header, 1 section, 1 footer | [how-we-work.md](pages/how-we-work.md) | [desktop](screenshots/how-we-work/full--desktop.jpg) · [mobile](screenshots/how-we-work/full--mobile.jpg) | [text](pages/ar/how-we-work.md) · [desktop](screenshots/how-we-work/ar/full--desktop.jpg) · [mobile](screenshots/how-we-work/ar/full--mobile.jpg) |
| 8 | Team (standalone section page) | <https://wewill.tech/team/> | 200 | WE WILL - Team | 1 header, 1 section, 1 footer | [team.md](pages/team.md) | [desktop](screenshots/team/full--desktop.jpg) · [mobile](screenshots/team/full--mobile.jpg) | [text](pages/ar/team.md) · [desktop](screenshots/team/ar/full--desktop.jpg) · [mobile](screenshots/team/ar/full--mobile.jpg) |
| 9 | Success Stories / Testimonials (standalone section page) | <https://wewill.tech/success-stories/> | 200 | WE WILL - Testimonials | 1 header, 1 section, 1 footer | [success-stories.md](pages/success-stories.md) | [desktop](screenshots/success-stories/full--desktop.jpg) · [mobile](screenshots/success-stories/full--mobile.jpg) | [text](pages/ar/success-stories.md) · [desktop](screenshots/success-stories/ar/full--desktop.jpg) · [mobile](screenshots/success-stories/ar/full--mobile.jpg) |
| 10 | Clients (standalone section page) | <https://wewill.tech/clients/> | 200 | WE WILL - Clients | 1 header, 1 section, 1 footer | [clients.md](pages/clients.md) | [desktop](screenshots/clients/full--desktop.jpg) · [mobile](screenshots/clients/full--mobile.jpg) | [text](pages/ar/clients.md) · [desktop](screenshots/clients/ar/full--desktop.jpg) · [mobile](screenshots/clients/ar/full--mobile.jpg) |
| 11 | Knowledge (standalone section page) | <https://wewill.tech/knowledge/> | 200 | WE WILL - Knowledge | 1 header, 1 section, 1 footer | [knowledge.md](pages/knowledge.md) | [desktop](screenshots/knowledge/full--desktop.jpg) · [mobile](screenshots/knowledge/full--mobile.jpg) | [text](pages/ar/knowledge.md) · [desktop](screenshots/knowledge/ar/full--desktop.jpg) · [mobile](screenshots/knowledge/ar/full--mobile.jpg) |
| 12 | Contact (standalone section page) | <https://wewill.tech/contact/> | 200 | WE WILL - Contact | 1 header, 1 section, 1 footer, 1 other | [contact.md](pages/contact.md) | [desktop](screenshots/contact/full--desktop.jpg) · [mobile](screenshots/contact/full--mobile.jpg) | [text](pages/ar/contact.md) · [desktop](screenshots/contact/ar/full--desktop.jpg) · [mobile](screenshots/contact/ar/full--mobile.jpg) |
| 13 | AI-Era Quality Services (landing page) | <https://wewill.tech/ai-era-quality-services/> | 200 | WE WILL — AI-Era Quality Services | 1 header, 8 section, 1 footer, 1 other | [ai-era-quality-services.md](pages/ai-era-quality-services.md) | [desktop](screenshots/ai-era-quality-services/full--desktop.jpg) · [mobile](screenshots/ai-era-quality-services/full--mobile.jpg) | [text](pages/ar/ai-era-quality-services.md) · [desktop](screenshots/ai-era-quality-services/ar/full--desktop.jpg) · [mobile](screenshots/ai-era-quality-services/ar/full--mobile.jpg) |
| 14 | Blog index | <https://wewill.tech/blog/> | 200 | WE WILL - Blog | 1 header, 2 section, 1 footer | [blog.md](pages/blog.md) | [desktop](screenshots/blog/full--desktop.jpg) · [mobile](screenshots/blog/full--mobile.jpg) | — |
| 15 | Blog post: When software quality becomes a business decision | <https://wewill.tech/blog/?slug=when-software-quality-becomes-a-business-decision> | 200 | WE WILL - When software quality becomes a business decision | 1 header, 1 main, 1 footer | [blog--when-software-quality-becomes-a-business-decision.md](pages/blog--when-software-quality-becomes-a-business-decision.md) | [desktop](screenshots/blog--when-software-quality-becomes-a-business-decision/full--desktop.jpg) · [mobile](screenshots/blog--when-software-quality-becomes-a-business-decision/full--mobile.jpg) | — |
| 16 | Blog post: The Triad Quality Framework | <https://wewill.tech/blog/?slug=the-triad-quality-framework> | 200 | WE WILL - The Triad Quality Framework | 1 header, 1 main, 1 footer | [blog--the-triad-quality-framework.md](pages/blog--the-triad-quality-framework.md) | [desktop](screenshots/blog--the-triad-quality-framework/full--desktop.jpg) · [mobile](screenshots/blog--the-triad-quality-framework/full--mobile.jpg) | — |
| 17 | Vibe Test — current product page (external: vibe-test.oneapp.dev) | <https://vibe-test.oneapp.dev/> | 200 |  | 1 header, 7 section, 1 footer, 1 other | [vibe-test-external.md](pages/vibe-test-external.md) | [desktop](screenshots/vibe-test-external/full--desktop.jpg) · [mobile](screenshots/vibe-test-external/full--mobile.jpg) | [text](pages/ar/vibe-test-external.md) · [desktop](screenshots/vibe-test-external/ar/full--desktop.jpg) · [mobile](screenshots/vibe-test-external/ar/full--mobile.jpg) |
| 18 | Business-Care Quality link target (returns 404) | <https://wewill.tech/business-care-quality> | 404 | This Page Does Not Exist | 1 main | [business-care-quality-404.md](pages/business-care-quality-404.md) | [desktop](screenshots/business-care-quality-404/full--desktop.jpg) | — |

## Home page — section order

| # | Region | id | Heading (visible, EN) | Desktop height (px) | Standalone page with same content |
|---|---|---|---|---|---|
| 1 | header | — | — | 65 |  |
| 2 | section | `#hero` | We don’t just test software. We protect product decisions. | 852 |  |
| 3 | section | `#vibe-test` | Meet Vibe Test — autonomous QA that hands you the receipts. | 1263 |  |
| 4 | section | `#ai-era-quality-services-promo` | AI helps teams build faster. WE WILL helps them release with confidence. | 408 |  |
| 5 | section | `#genai-based-systems` | Our Methodology. | 695 | [/genai-based-systems/](pages/genai-based-systems.md) — text identical |
| 6 | section | `#why-we-will` | Quality That Thinks With You, Not After You. | 493 | [/why-we-will/](pages/why-we-will.md) — text identical |
| 7 | section | `#services` | We Deliver Confidence, Not Just Reports. | 578 | [/services/](pages/services.md) — text identical |
| 8 | section | `#quality-canvas` | Your Product’s Quality on One Clear Canvas. | 567 | [/quality-canvas/](pages/quality-canvas.md) — text identical |
| 9 | section | `#impact` | Impact That Speaks for Itself. | 505 | [/impact/](pages/impact.md) — text identical |
| 10 | section | `#how-we-work` | A Quality Process Built Around Decisions. | 511 | [/how-we-work/](pages/how-we-work.md) — text identical |
| 11 | section | `#team` | The Team Behind WE WILL Quality. | 541 | [/team/](pages/team.md) — text identical |
| 12 | section | `#success-stories` | Inspired by WE WILL Clients’ Success. | 1455 | [/success-stories/](pages/success-stories.md) — text identical |
| 13 | section | `#clients` | Products That Trusted WE WILL Quality. | 635 | [/clients/](pages/clients.md) — text identical |
| 14 | section | `#knowledge` | Deep Dive into Our Knowledge. | 557 | [/knowledge/](pages/knowledge.md) — text identical |
| 15 | section | `#contact` | Let’s Talk About Your Product’s Quality. | 651 | [/contact/](pages/contact.md) — text identical |
| 16 | other | — | — | 56 |  |
| 17 | footer | — | — | 180 |  |

## All link destinations found

| Destination | Link text(s) | Found on |
|---|---|---|
| <https://api.whatsapp.com/send/?phone=002%2001023833940> | WhatsApp | home, genai-based-systems, why-we-will, services, quality-canvas, impact, how-we-work, team, success-stories, clients, knowledge, contact, ai-era-quality-services, blog, blog--when-software-quality-becomes-a-business-decision, blog--the-triad-quality-framework |
| <https://chatgpt.com/g/g-67fd5789f9048191b0bf796e6ef3abb3-quality-planning-canvas> | Generate Your Quality Canvas | home, quality-canvas |
| <https://in2world.net/> | In2World | home, clients |
| <https://iplan2.com/> | I Plan 2 | home, clients |
| <https://micetribe.com/> | MICEtribe | home, clients |
| <https://oyounmedia.com/> | Oyoun Media | home, clients |
| <https://rasel.ps/> | Rasel | home, clients |
| <https://vibe-test.oneapp.dev/> | Start a Vibe Test | home |
| <https://vibe-test.oneapp.dev/#book> | Book a Demo | vibe-test-external |
| <https://vibe-test.oneapp.dev/#how> | How it works / See how it works | vibe-test-external |
| <https://vibe-test.oneapp.dev/#problem> | Problem | vibe-test-external |
| <https://vibe-test.oneapp.dev/#receipt> | The Receipt | vibe-test-external |
| <https://vibe-test.oneapp.dev/#services> | Services | vibe-test-external |
| <https://vibe-test.oneapp.dev/#top> | Vibe-Test. BY WE WILL TECH | vibe-test-external |
| <https://vibe-test.oneapp.dev/#who> | Who it's for | vibe-test-external |
| <https://wewill.tech/> | WE WILL / Home | home, genai-based-systems, why-we-will, services, quality-canvas, impact, how-we-work, team, success-stories, clients, knowledge, contact, ai-era-quality-services, blog, blog--when-software-quality-becomes-a-business-decision, blog--the-triad-quality-framework |
| <https://wewill.tech/#ai-era-quality-services-promo> | AI-Era Quality | home, genai-based-systems, why-we-will, services, quality-canvas, impact, how-we-work, team, success-stories, clients, knowledge, contact, ai-era-quality-services, blog, blog--when-software-quality-becomes-a-business-decision, blog--the-triad-quality-framework |
| <https://wewill.tech/#contact> | Contact / Book a Clarity Session / Talk to WE WILL | home, genai-based-systems, why-we-will, services, quality-canvas, impact, how-we-work, team, success-stories, clients, knowledge, contact, ai-era-quality-services, blog, blog--when-software-quality-becomes-a-business-decision, blog--the-triad-quality-framework |
| <https://wewill.tech/#hero> | Home | home |
| <https://wewill.tech/#how-we-work> | How We Work | home, genai-based-systems, why-we-will, services, quality-canvas, impact, how-we-work, team, success-stories, clients, knowledge, contact, ai-era-quality-services, blog, blog--when-software-quality-becomes-a-business-decision, blog--the-triad-quality-framework |
| <https://wewill.tech/#quality-canvas> | Quality Canvas | home, genai-based-systems, why-we-will, services, quality-canvas, impact, how-we-work, team, success-stories, clients, knowledge, contact, ai-era-quality-services, blog, blog--when-software-quality-becomes-a-business-decision, blog--the-triad-quality-framework |
| <https://wewill.tech/#services> | Explore Services | home |
| <https://wewill.tech/#why-we-will> | Why WE WILL | home, genai-based-systems, why-we-will, services, quality-canvas, impact, how-we-work, team, success-stories, clients, knowledge, contact, ai-era-quality-services, blog, blog--when-software-quality-becomes-a-business-decision, blog--the-triad-quality-framework |
| <https://wewill.tech/ai-era-quality-services/> | Explore the offer | home |
| <https://wewill.tech/ai-era-quality-services/#aeqs-what-we-deliver> | See what we deliver | ai-era-quality-services |
| <https://wewill.tech/blog/> | Blog | home, genai-based-systems, why-we-will, services, quality-canvas, impact, how-we-work, team, success-stories, clients, knowledge, contact, ai-era-quality-services, blog, blog--when-software-quality-becomes-a-business-decision, blog--the-triad-quality-framework |
| <https://wewill.tech/blog/?slug=the-triad-quality-framework> | TQF • Structure Triad Quality Framework (TQF) A triad that c /  / The Triad Quality Framework / Read article | home, knowledge, blog |
| <https://wewill.tech/blog/?slug=when-software-quality-becomes-a-business-decision> |  / When software quality becomes a business decision / Read article | blog |
| <https://wewill.tech/business-care-quality> | Business-Care • Decisions Business-Care Quality How we shift | home, knowledge |
| <https://wewill.tech/contact/> | Talk to WE WILL / Explore (EN/AR) | home, genai-based-systems |
| <https://wewill.tech/contact/#contact> | Book a 30-Min Discovery Call / Book Call | ai-era-quality-services |
| <https://wewill.tech/success-stories/#contact> | Talk to WE WILL | success-stories |
| <https://wewill.tech/the-triad-quality-framework/> | Read the original WE WILL article | blog--the-triad-quality-framework |
| <https://wewill.tech/when-software-quality-becomes-a-business-decision/> | Read the original WE WILL article | blog--when-software-quality-becomes-a-business-decision |
| <https://www.facebook.com/wewillquality> | Facebook | home, genai-based-systems, why-we-will, services, quality-canvas, impact, how-we-work, team, success-stories, clients, knowledge, contact, ai-era-quality-services, blog, blog--when-software-quality-becomes-a-business-decision, blog--the-triad-quality-framework |
| <https://www.instagram.com/wewill.tech/> | Instagram | home, genai-based-systems, why-we-will, services, quality-canvas, impact, how-we-work, team, success-stories, clients, knowledge, contact, ai-era-quality-services, blog, blog--when-software-quality-becomes-a-business-decision, blog--the-triad-quality-framework |
| <https://www.linkedin.com/company/wewilltech/> | LinkedIn | home, genai-based-systems, why-we-will, services, quality-canvas, impact, how-we-work, team, success-stories, clients, knowledge, contact, ai-era-quality-services, blog, blog--when-software-quality-becomes-a-business-decision, blog--the-triad-quality-framework |
| <https://www.linkedin.com/posts/ibrahimalsharif_quality-canvas-board-template-miroverse-activity-7310667721107533824-61nM/> | Canvas • Strategy Quality Canvas A visual map that connects  | home, knowledge |
| <https://www.linkedin.com/pulse/quality-canvas-from-abstract-concept-concrete-reality-alsharif-yw4nf/?trackingId=RvOyDsrUzfmNlfgPWsFrow%3D%3D> | Know More | home, quality-canvas |
| <https://www.tradeflockasia.com/ibrahim-alsharif-most-visionary-global-ceos-in-2025/> | Founder • Mindset Interview with Our Founder Go inside the m | home, knowledge |
| <https://www.youtube.com/watch?v=yRBbqktuGEs> | Watch Vibe Test in action | home |
| <mailto:hello@wewill.tech?subject=Vibe-Test%20Demo> | Book a Demo | vibe-test-external |
