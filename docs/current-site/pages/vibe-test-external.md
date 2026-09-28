# Vibe Test — current product page (external: vibe-test.oneapp.dev)

Source URL: <https://vibe-test.oneapp.dev/>

Arabic version (site language toggle → AR): [ar/vibe-test-external.md](ar/vibe-test-external.md)

| Field | Value |
|---|---|
| HTTP status | 200 |
| `<title>` |  |
| Meta description | _(none)_ |
| Canonical | _(none)_ |
| Robots meta | _(none)_ |
| `<html lang>` / dir | _(none)_ / _(none)_ |
| Social meta | _(none)_ |
| Document height (desktop, CSS px) | 4896 |
| Screenshots | [desktop full page](../screenshots/vibe-test-external/full--desktop.jpg) · [desktop first viewport](../screenshots/vibe-test-external/first-viewport--desktop.jpg) · [mobile full page](../screenshots/vibe-test-external/full--mobile.jpg) · [mobile first viewport](../screenshots/vibe-test-external/first-viewport--mobile.jpg) |

> Notation: each line is one element in DOM order. **H1–H6** = heading level, **P** = paragraph, **LI** = list item, **TEXT** = text inside a generic element (its tag/classes shown), **LINK**/**BUTTON** = label → href, **IMG** = alt text → src, **FIELD** = form control. _(hidden)_ = not displayed at 1440px width in English mode (e.g. mobile-only, collapsed, or the inactive language); "↳ hidden variant" = hidden text inside that element (on this site usually the Arabic copy of a bilingual EN/AR pair); _(aria-hidden)_ = hidden from assistive tech. Copy is taken from the DOM text (source casing, not CSS text-transform).

## 1. Header — `header`

Screenshots: [desktop](../screenshots/vibe-test-external/01-header--desktop.jpg) · [mobile](../screenshots/vibe-test-external/01-header--mobile.jpg)

- **LINK** — "Vibe-Test. BY WE WILL TECH" → `#top`
- **IMG** — alt: "Vibe-Test logo" — `blob:https://vibe-test.oneapp.dev/75f6b4b1-1d9f-4e35-8c91-b5ed39dd0659`
- **LINK** — "Problem" → `#problem`
  - ↳ hidden variant: المشكلة _(hidden)_
- **LINK** — "How it works" → `#how`
  - ↳ hidden variant: كيف يعمل _(hidden)_
- **LINK** — "Services" → `#services`
  - ↳ hidden variant: الخدمات _(hidden)_
- **LINK** — "The Receipt" → `#receipt`
  - ↳ hidden variant: الإيصال _(hidden)_
- **LINK** — "Who it's for" → `#who`
  - ↳ hidden variant: لمن _(hidden)_
- **BUTTON (wraps card)** (aria-label: "Switch language / تبديل اللغة")
- **TEXT** `span` — 🌐 _(aria-hidden)_
- **TEXT** `span.en.mono` — العربية
- **TEXT** `span.ar` — EN _(hidden)_
- **LINK** — "Book a Demo" → `#book`
  - ↳ hidden variant: احجز عرضاً _(hidden)_

## 2. Section — `section` — “Tests. Fixes. Verifies. Hands you the receipts.”

Screenshots: [desktop](../screenshots/vibe-test-external/02-section--desktop.jpg) · [mobile](../screenshots/vibe-test-external/02-section--mobile.jpg)

- **TEXT** `span.mono` — AGENTIC QA PLATFORM — MVP · INVITE-ONLY
- **H1** — Tests. Fixes. Verifies. Hands you the receipts.
  - ↳ hidden variant: يختبر. ويُصلح. ويتحقّق. ثم يسلّمك الأدلة. _(hidden)_
- **P** — Your autonomous QA team. Connect your app or repo — expert agents run the QA a senior team would, and prove it with evidence, not claims.
  - ↳ hidden variant: فريق ضمان جودتك ذاتيّ التشغيل. اربط تطبيقك أو مستودعك — فيُجري وكلاء خبراء اختبارات الجودة التي يجريها فريقٌ متمرّس، ويُثبتونها بالأدلة لا بالادعاءات. _(hidden)_
- **LINK** — "Book a Demo" → `#book`
  - ↳ hidden variant: احجز عرضاً _(hidden)_
- **LINK** — "See how it works" → `#how`
  - ↳ hidden variant: شاهد كيف يعمل _(hidden)_
- **TEXT** `span.mono` — LIVE QA RUN
- **TEXT** `span.mono` — RUNNING
- **TEXT** `div` — ▸ sweep · mapping app.yoursite.com … done
- **TEXT** `div` — ▸ journeys · checkout / auth / search … 42 checks
- **TEXT** `div` — ▸ issue #241 → fix written · PR opened
- **TEXT** `div` — ▸ re-test ×3 · adversarial verify … pass
- **TEXT** `div` — ▸ receipt #VT-4821 · confidence 98.7% ✓
- **TEXT** `span` — ▸

## 3. Other content (outside header/sections/footer) — `div`

Screenshots: [desktop](../screenshots/vibe-test-external/03-other--desktop.jpg) · [mobile](../screenshots/vibe-test-external/03-other--mobile.jpg)

- **TEXT** `span` — Evidence, not claims ✓ _(aria-hidden)_
- **TEXT** `span` — الأدلة، لا الادعاءات ✓ _(aria-hidden)_
- **TEXT** `span` — Find → Fix → Verify → Ship ↺ _(aria-hidden)_
- **TEXT** `span` — Backed by receipts ✓ _(aria-hidden)_
- **TEXT** `span` — Evidence, not claims ✓ _(aria-hidden)_
- **TEXT** `span` — الأدلة، لا الادعاءات ✓ _(aria-hidden)_
- **TEXT** `span` — Find → Fix → Verify → Ship ↺ _(aria-hidden)_
- **TEXT** `span` — Backed by receipts ✓ _(aria-hidden)_
- **TEXT** `span` — Evidence, not claims ✓ _(aria-hidden)_
- **TEXT** `span` — الأدلة، لا الادعاءات ✓ _(aria-hidden)_
- **TEXT** `span` — Find → Fix → Verify → Ship ↺ _(aria-hidden)_
- **TEXT** `span` — Backed by receipts ✓ _(aria-hidden)_
- **TEXT** `span` — Evidence, not claims ✓ _(aria-hidden)_
- **TEXT** `span` — الأدلة، لا الادعاءات ✓ _(aria-hidden)_
- **TEXT** `span` — Find → Fix → Verify → Ship ↺ _(aria-hidden)_
- **TEXT** `span` — Backed by receipts ✓ _(aria-hidden)_

## 4. Section `#problem` — `section#problem` — “Shipping is easy. Proving it works is not.”

Screenshots: [desktop](../screenshots/vibe-test-external/04-section-problem--desktop.jpg) · [mobile](../screenshots/vibe-test-external/04-section-problem--mobile.jpg)

- **TEXT** `span.mono` — 01 — THE PROBLEM
- **H2** — Shipping is easy. Proving it works is not.
  - ↳ hidden variant: الإطلاق سهل. أمّا إثبات أنه يعمل فليس كذلك. _(hidden)_
- **TEXT** `span.mono` — 01
- **H3** — Teams ship faster than they can QA
  - ↳ hidden variant: الفرق تُطلق أسرع مما تستطيع اختباره _(hidden)_
- **P** — Bugs and unverified AI features reach real users before anyone catches them.
  - ↳ hidden variant: تصل العيوب وميزات الذكاء الاصطناعي غير المُتحقَّقة إلى المستخدمين قبل اكتشافها. _(hidden)_
- **TEXT** `span.mono` — 02
- **H3** — Real QA needs expert testers
  - ↳ hidden variant: الجودة الحقيقية تحتاج خبراء اختبار _(hidden)_
- **P** — Functional, UX, performance, security — small teams can't staff it.
  - ↳ hidden variant: الوظائف والتجربة والأداء والأمان — يصعب على الفرق الصغيرة توفيرها. _(hidden)_
- **TEXT** `span.mono` — 03
- **H3** — Tools only find issues
  - ↳ hidden variant: الأدوات تجد المشكلات فقط _(hidden)_
- **P** — Nothing closes the loop from find → fix → verify → ship.
  - ↳ hidden variant: لا شيء يُغلق الحلقة من الاكتشاف إلى الإصلاح إلى التحقّق إلى الإطلاق. _(hidden)_

## 5. Section `#how` — `section#how` — “A closed loop. Not a checklist.”

Screenshots: [desktop](../screenshots/vibe-test-external/05-section-how--desktop.jpg) · [mobile](../screenshots/vibe-test-external/05-section-how--mobile.jpg)

- **TEXT** `div.reveal.in` — 02 — HOW IT WORKS
- **H2** — A closed loop. Not a checklist.
  - ↳ hidden variant: حلقة مُغلقة. لا قائمة تحقّق. _(hidden)_
- **IMG** — alt: "" — `blob:https://vibe-test.oneapp.dev/75f6b4b1-1d9f-4e35-8c91-b5ed39dd0659`
- **TEXT** `div.mono` — CLOSED LOOP
  - ↳ hidden variant: حلقة مغلقة _(hidden)_
- **TEXT** `div` — 01 Discover
  - ↳ hidden variant: اكتشاف _(hidden)_
- **TEXT** `div` — 02 Fix
  - ↳ hidden variant: إصلاح _(hidden)_
- **TEXT** `div` — 03 Verify
  - ↳ hidden variant: تحقّق _(hidden)_
- **TEXT** `div` — 04 Ship
  - ↳ hidden variant: إطلاق _(hidden)_
- **TEXT** `span.mono` — 01
- **TEXT** `strong` — Discover
  - ↳ hidden variant: اكتشاف _(hidden)_
- **P** — Agents map your app and surface what's broken.
  - ↳ hidden variant: يرسم الوكلاء تطبيقك ويكشفون ما هو معطّل. _(hidden)_
- **TEXT** `span.mono` — 02
- **TEXT** `strong` — Fix
  - ↳ hidden variant: إصلاح _(hidden)_
- **P** — They author the fix and open a reviewable PR.
  - ↳ hidden variant: يكتبون الإصلاح ويفتحون طلب دمج قابلاً للمراجعة. _(hidden)_
- **TEXT** `span.mono` — 03
- **TEXT** `strong` — Verify
  - ↳ hidden variant: تحقّق _(hidden)_
- **P** — Re-tested and machine-checked into a receipt.
  - ↳ hidden variant: يُعاد الاختبار ويُتحقَّق آلياً في إيصال. _(hidden)_
- **TEXT** `span.mono` — 04
- **TEXT** `strong` — Ship
  - ↳ hidden variant: إطلاق _(hidden)_
- **P** — Merged, deployed, and looped back for the next.
  - ↳ hidden variant: يُدمج ويُنشر وتعود الحلقة للتالية. _(hidden)_

## 6. Section `#services` — `section#services` — “Five agents. One QA team.”

Screenshots: [desktop](../screenshots/vibe-test-external/06-section-services--desktop.jpg) · [mobile](../screenshots/vibe-test-external/06-section-services--mobile.jpg)

_Home page has a section with the same id (`#services`): text content is **different** (compare with [home.md](home.md))._

- **TEXT** `div.reveal.in` — 03 — SERVICES
- **H2** — Five agents. One QA team.
  - ↳ hidden variant: خمسة وكلاء. فريق جودة واحد. _(hidden)_
- **TEXT** `div.mono` — /01
- **H3** — Sweep
- **P** — A smart audit of your site from a single link.
  - ↳ hidden variant: تدقيق ذكي لموقعك انطلاقاً من رابط واحد. _(hidden)_
- **TEXT** `div.mono` — /02
- **H3** — Journeys
- **P** — Value · UX · performance · security, in one pass.
  - ↳ hidden variant: القيمة · تجربة المستخدم · الأداء · الأمان في جولة واحدة. _(hidden)_
- **TEXT** `div.mono` — /03
- **H3** — Bug Testing
- **P** — Evidence-backed re-testing with confidence scores.
  - ↳ hidden variant: إعادة اختبار مدعومة بالأدلة مع مقاييس ثقة. _(hidden)_
- **TEXT** `div.mono` — /04
- **H3** — Bug Fixing
- **P** — Autonomous fix → PR → merge → deploy → hand-off.
  - ↳ hidden variant: إصلاح ذاتي: fix → PR → merge → deploy → تسليم. _(hidden)_
- **TEXT** `div.mono` — /05
- **H3** — GenAI Evaluation
- **P** — Grades AI features against quality contracts.
  - ↳ hidden variant: تقييم ميزات الذكاء الاصطناعي وفق عقود جودة. _(hidden)_

## 7. Section `#receipt` — `section#receipt` — “Evidence, not claims.”

Screenshots: [desktop](../screenshots/vibe-test-external/07-section-receipt--desktop.jpg) · [mobile](../screenshots/vibe-test-external/07-section-receipt--mobile.jpg)

- **TEXT** `div.reveal.in` — 04 — THE RECEIPT
- **H2** — Evidence, not claims.
  - ↳ hidden variant: الأدلة، لا الادعاءات. _(hidden)_
- **P** — Every verdict ships with a machine-checked receipt: what was tested, the result, the confidence, the timestamp. Proof you can hand to anyone.
  - ↳ hidden variant: كل حكم يأتي بإيصال مُتحقَّق آلياً: ما جرى اختباره، والنتيجة، ودرجة الثقة، والطابع الزمني. دليل يمكنك تسليمه لأي شخص. _(hidden)_
- **TEXT** `strong` — QA memory that compounds
  - ↳ hidden variant: ذاكرة جودة تتراكم مع كل مشروع _(hidden)_
- **P** — Dependency maps and re-tests grow smarter with every project.
  - ↳ hidden variant: خرائط ترابط وإعادة اختبار تزداد ذكاءً مع كل مشروع. _(hidden)_
- **TEXT** `strong` — Closes the full loop
  - ↳ hidden variant: تُغلق الحلقة كاملة _(hidden)_
- **P** — Find → fix → verify, end to end — not a single step.
  - ↳ hidden variant: اكتشاف → إصلاح → تحقّق، من البداية للنهاية — لا خطوة واحدة. _(hidden)_
- **TEXT** `strong` — Adversarial verification
  - ↳ hidden variant: تحقّق خصومي من الأحكام _(hidden)_
- **P** — Machine-checked receipts, challenged before they reach you.
  - ↳ hidden variant: إيصالات مُتحقَّقة آلياً تُختبر بصرامة قبل أن تصلك. _(hidden)_
- **TEXT** `div.mono` — VERIFIED ✓ _(aria-hidden)_
- **IMG** — alt: "" — `blob:https://vibe-test.oneapp.dev/75f6b4b1-1d9f-4e35-8c91-b5ed39dd0659`
- **TEXT** `div.mono` — VIBE-TEST · RECEIPT
- **TEXT** `div.mono` — #VT-4821
- **TEXT** `div.mono` — CHECKOUT FLOW — PAYMENT
- **TEXT** `div.mono` — ✓ functional ......... 18/18 pass
- **TEXT** `div.mono` — ✓ performance ... p95 under budget
- **TEXT** `div.mono` — ✓ security ....... role paths hold
- **TEXT** `div.mono` — ✓ re-test ×3 . adversarial verify
- **TEXT** `span.mono` — CONFIDENCE
- **TEXT** `span.mono` — 98.7%
- **TEXT** `span` — AGENT: BUG FIXING
- **TEXT** `span` — 2026-07-03 14:22Z
- **TEXT** `div.mono` — BACKED BY RECEIPTS · مدعوم بالأدلة

## 8. Section `#who` — `section#who` — “Built for teams without a QA team.”

Screenshots: [desktop](../screenshots/vibe-test-external/08-section-who--desktop.jpg) · [mobile](../screenshots/vibe-test-external/08-section-who--mobile.jpg)

- **TEXT** `div.reveal.in` — 05 — WHO IT'S FOR
- **H2** — Built for teams without a QA team.
  - ↳ hidden variant: مصمَّم للفرق التي بلا فريق جودة. _(hidden)_
- **H3** — Small dev teams & solo developers
  - ↳ hidden variant: فرق البرمجة الصغيرة والمطوّرون الأفراد _(hidden)_
- **P** — Ship with senior-level QA you don't have to hire.
  - ↳ hidden variant: أطلق بجودة بمستوى خبير دون توظيفه. _(hidden)_
- **H3** — Vibe coders & indie hackers
  - ↳ hidden variant: مبرمجو الـ vibe و الـ indie hackers _(hidden)_
- **P** — Move fast without shipping broken to users.
  - ↳ hidden variant: تحرّك بسرعة دون إطلاق ما هو معطّل للمستخدمين. _(hidden)_
- **H3** — Early-stage startups
  - ↳ hidden variant: الشركات الناشئة المبكرة _(hidden)_
- **P** — Get real QA coverage before you can afford a team.
  - ↳ hidden variant: تغطية جودة حقيقية قبل أن تقدر على تكوين فريق. _(hidden)_

## 9. Section — `section` — “Ship with confidence.”

Screenshots: [desktop](../screenshots/vibe-test-external/09-section--desktop.jpg) · [mobile](../screenshots/vibe-test-external/09-section--mobile.jpg)

- **IMG** — alt: "" — `blob:https://vibe-test.oneapp.dev/75f6b4b1-1d9f-4e35-8c91-b5ed39dd0659`
- **H2** — Ship with confidence.
  - ↳ hidden variant: أطلق بثقة. _(hidden)_
- **P** — See your first receipt in the demo. Evidence, not claims.
  - ↳ hidden variant: شاهد أول إيصال لك في العرض التجريبي. الأدلة، لا الادعاءات. _(hidden)_
- **LINK** — "Book a Demo" → `mailto:hello@wewill.tech?subject=Vibe-Test%20Demo`
  - ↳ hidden variant: احجز عرضك التجريبي _(hidden)_

## 10. Footer — `footer`

Screenshots: [desktop](../screenshots/vibe-test-external/10-footer--desktop.jpg) · [mobile](../screenshots/vibe-test-external/10-footer--mobile.jpg)

- **TEXT** `div.disp` — VIBE-TEST. _(aria-hidden)_
- **IMG** — alt: "WE WILL TECH logo" — `blob:https://vibe-test.oneapp.dev/75f6b4b1-1d9f-4e35-8c91-b5ed39dd0659`
- **TEXT** `span.mono` — WE WILL TECH · VIBE-TEST
- **P** — © 2026 WE WILL TECH · Evidence, not claims.
  - ↳ hidden variant: © 2026 WE WILL TECH · الأدلة، لا الادعاءات. _(hidden)_

## Outbound links on this page

- "Book a Demo" → <mailto:hello@wewill.tech?subject=Vibe-Test%20Demo>

## Capture notes

- Desktop load: 1092 ms; mobile load: 910 ms.
- Elements still at opacity 0 after scroll-through — desktop: 2 (`div`, `div.mono`); mobile: 3 (`div`, `span`, `div.mono`).
- Images: 5 total; 0 without an `alt` attribute.
- Console errors: `Failed to load resource: the server responded with a status of 404 ()`
