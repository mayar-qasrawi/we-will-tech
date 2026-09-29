# Translation sheet: strings waiting for approved Arabic

Every new or edited English string whose Arabic value is empty. In Arabic mode these show the English text until WE WILL supplies a translation. Add the Arabic value to the listed key in `src/assets/site.js`, or to the markup where the "Where" column says so.

## update-global-nav-footer-cta

| Key / location | English | Where |
|---|---|---|
| `header_nav_solutions` | Solutions | `siteSettings` |
| `header_nav_resources` | Resources | `siteSettings` |
| `header_nav_about` | About | `siteSettings` |
| `header_nav_cta` | Run a Guided Vibe Test | `siteSettings` |
| `contact.requestType` | Request type | `translations.ar` |
| `contact.requestGeneral` | General message | `translations.ar` |
| `contact.requestGuided` | Run a Guided Vibe Test | `translations.ar` |
| `contact.requestBcq` | Discuss a Business Care Quality Requirement | `translations.ar` |
| Footer headings | Product & Solutions · Company · Resources · Get Started · Legal & Social | `partials/footer.html` (no key yet) |
| Footer links | Vibe Test · Solutions · About · Methodology resources · Run a Guided Vibe Test · Discuss a Business Care Quality Requirement · Privacy Policy · Terms of Use | `partials/footer.html` (no key yet) |
| Social links, screen-reader hint | (opens in a new tab) | `partials/footer.html`, `.visually-hidden` span (no key yet) |
| Footer bottom bar | Vibe Test by WE WILL Technology · Company legal information — to be supplied by WE WILL | `partials/footer.html` (no key yet) |
| Legal pages | Privacy Policy · Terms of Use · This page is a placeholder. The text will be supplied by WE WILL Technology. | `src/privacy/`, `src/terms/` |

Existing Arabic kept: `header_nav_hero` (الرئيسية), `header_nav_vibe_test` (Vibe Test), footer Contact via `header_nav_contact` (تواصل معنا), footer Blog via `header_nav_blog` (المدونة), LinkedIn (لينكدإن), Facebook (فيسبوك), WhatsApp (واتساب), Instagram (إنستغرام), `footer_rights` (جميع الحقوق محفوظة.).

## update-home-page

All in `translations.ar` (value currently `""`).

| Key | English |
|---|---|
| `vibeTest.kicker` | Vibe Test by WE WILL Technology |
| `vibeTest.subtitle` | Vibe Test is WE WILL's Agentic QA platform: agents sweep, test, and fix your product across web, mobile, and GenAI — then prove every verdict with a machine-checked receipt. Built for teams shipping faster than they can test. |
| `vibeTest.ctaPrimary` | Explore Vibe Test |
| `vibeTest.sampleLabel` | Sample |
| `useCases.kicker` | Use cases |
| `useCases.title` | Which release situation are you facing? |
| `useCases.subtitle` | Software output is accelerating while manual or brittle verification struggles to keep pace. |
| `useCases.uc1.title` | Release verification |
| `useCases.uc1.body` | Frequent releases; Vibe Test on critical journeys |
| `useCases.uc1.outcome` | Faster evidence-based cycles |
| `useCases.uc2.title` | AI-assisted development |
| `useCases.uc2.body` | Output exceeds QA; Vibe Test on changes |
| `useCases.uc2.outcome` | Verification keeps pace |
| `useCases.uc3.title` | AI Feature Evaluation |
| `useCases.uc3.body` | AI-feature launch; WE WILL approach executed by Vibe Test |
| `useCases.uc3.outcome` | Evidence against risk criteria |
| `useCases.uc4.title` | Release decision |
| `useCases.uc4.body` | High-impact launch; BCQ Expert Services with test evidence |
| `useCases.uc4.outcome` | Accountable go / no-go advice |
| `useCases.uc5.title` | Lean-team quality |
| `useCases.uc5.body` | Limited QA leadership; Vibe Test plus Managed Quality Care |
| `useCases.uc5.outcome` | Scalable quality capacity |
| `useCases.cta` | Explore Solutions |
| `expertLayer.kicker` | Business Care Quality |
| `expertLayer.title` | Continuous verification and accountable quality judgment for release decisions. |
| `expertLayer.subtitle` | WE WILL Technology combines Vibe Test Agentic QA with BCQ methodology and expert judgment to help product teams release with confidence. |
| `expertLayer.product.label` | Lead product |
| `expertLayer.product.title` | Vibe Test |
| `expertLayer.product.role` | Agentic QA platform |
| `expertLayer.product.body` | Verify critical journeys · Detect issues · Re-verify fixes |
| `expertLayer.expert.label` | Expert offer |
| `expertLayer.expert.title` | BCQ Expert Services |
| `expertLayer.expert.role` | Human quality judgment |
| `expertLayer.expert.body` | Assess risk · Advise on release |
| `expertLayer.expert.s1.name` | Quality Diagnostic |
| `expertLayer.expert.s1.body` | review of product and release risks |
| `expertLayer.expert.s2.name` | Release Decision |
| `expertLayer.expert.s2.body` | review of evidence and go / no-go criteria |
| `expertLayer.expert.s3.name` | Managed Quality Care |
| `expertLayer.expert.s3.body` | expert oversight |
| `expertLayer.method.label` | Methodology |
| `expertLayer.method.title` | Business Care Quality methodology |
| `expertLayer.method.role` | Connects quality evidence with customer impact, business risk and release decisions |
| `expertLayer.cta` | Discuss a Quality Requirement |
| `knowledge.cta` | View Resources |
| `finalCta.subtitle` | Start with a guided Vibe Test proof of value, or discuss a BCQ Expert Services requirement when a release needs expert judgment. |
| `finalCta.primary` | Run a Guided Vibe Test |
| `finalCta.secondary` | Discuss a Quality Requirement |

Existing Arabic reused: `why.card1.body` (expert layer, methodology card), `success.case3/4/6.quote`, `contact.kicker`, `contact.title`, and the knowledge cards (`data-deep-dive-ar`).
