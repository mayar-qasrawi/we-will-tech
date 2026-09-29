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

## add-vibe-test-page

All in `translations.ar` (value currently `""`). Every other `vt.*` key reuses the Arabic from vibe-test.oneapp.dev; the capability cards and video label reuse the existing `vibeTest.*` keys.

| Key | English |
|---|---|
| `vt.hero.lockup` | Vibe Test by WE WILL Technology |
| `vt.hero.cta` | Run a Guided Vibe Test |
| `vt.what.title` | Verify critical journeys. Detect issues. Re-verify fixes. |
| `vt.cap.c5.title` | AI Feature Evaluation |
| `vt.cap.c5.body` | A WE WILL-developed approach executed through Vibe Test. |
| `vt.receipt.sample` | Sample receipt |
| `vt.who.title` | Built for product teams with live products and recurring releases. |
| `vt.who.c1.title` | Growth-stage product and engineering teams |
| `vt.who.c1.body` | Regression backlog, defects and release delay. More coverage and reliable proof across critical journeys. |
| `vt.who.c2.title` | Enterprise digital teams |
| `vt.who.c2.body` | A major launch or AI feature with release risk, where the decision must be accountable. |
| `vt.who.c3.title` | Funded MVP and pre-launch teams |
| `vt.who.c3.body` | An executable build and a pilot or launch to prepare, with limited QA capacity. |
| `vt.wewill.title` | Product plus judgment. |
| `vt.wewill.lead` | Vibe Test verifies; BCQ connects evidence to customer and release risk; expert services support consequential decisions. |
| `vt.wewill.i1.label` | Lead product |
| `vt.wewill.i1.title` | Vibe Test by WE WILL Technology |
| `vt.wewill.i1.body` | Agentic QA platform. Verify critical journeys · Detect issues · Re-verify fixes |
| `vt.wewill.i2.label` | Methodology |
| `vt.wewill.i2.title` | Business Care Quality |
| `vt.wewill.i2.body` | Connects quality evidence with customer impact, business risk and release decisions. |
| `vt.wewill.i3.label` | Expert offer |
| `vt.wewill.i3.title` | BCQ Expert Services |
| `vt.wewill.i3.body` | Quality Diagnostic · Release Decision · Managed Quality Care |
| `vt.wewill.line` | Use Vibe Test for recurring verification. Add BCQ Expert Services when you need quality strategy, risk interpretation or accountable release support. |
| `vt.wewill.cta` | Discuss a Quality Requirement |
| `vt.book.lead` | Start with a Guided Proof of Value: one environment, 2–3 journeys or one release workflow, and agreed success criteria. Evidence, not claims. |
| `vt.book.cta` | Run a Guided Vibe Test |

Not translated by design (English in both languages on the original page too): the section kickers ("01 — The problem" …), the eyebrow "AGENTIC QA PLATFORM — MVP · INVITE-ONLY", the terminal and receipt lines, and the agent names (Sweep, Journeys, Bug Testing, Bug Fixing).

## optimize-leads-seo

All in `translations.ar` (value currently `""`).

| Key | English |
|---|---|
| `hero.eyebrow` | Agentic Software Quality (replaces the old eyebrow; its Arabic no longer matches) |
| `hero.audience` | Built for CTOs, engineering leaders and founders in growth-stage SaaS and digital-product companies. |
| `contact.offer.guided.title` | Run a Guided Vibe Test |
| `contact.offer.guided.scope` | Guided Proof of Value: one environment, 2–3 journeys or one release workflow, and agreed success criteria. |
| `contact.offer.guided.fit` | For teams with a live product or executable MVP and a technical owner. |
| `contact.offer.bcq.title` | Discuss a Business Care Quality Requirement |
| `contact.offer.bcq.scope` | BCQ Expert Services add human judgment where risk requires it: Quality Diagnostic, Release Decision or Managed Quality Care. |
| `vt.book.fit` | For teams with a live product or executable MVP and a technical owner. |
| `vt.book.step1` | Guided Proof of Value |
| `vt.book.step2` | Evidence Review |
| `vt.book.step3` | Team Subscription |

Existing Arabic reused: `contact.reassure` (سنعاود التواصل خلال يوم عمل واحد., from the form's success message).
