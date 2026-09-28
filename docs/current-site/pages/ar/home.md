# Home — Arabic (AR) version

Source URL: <https://wewill.tech/> with the site's language toggle switched to Arabic. English version: [../home.md](../home.md)

| Field | Value |
|---|---|
| Language switch | clicked `<button type="button" class="lang-btn is-active" data-lang="ar">AR</button>` → `<html lang>`: en → ar, dir: ltr → rtl |
| `<title>` in AR mode | WE WILL - Home |
| Horizontal overflow in AR mode | desktop: 11040 px page width in a 1440 px viewport; mobile: 10367 px page width in a 390 px viewport (page auto-scrolled to x=-1169). **The page overflows sideways in Arabic/RTL mode (a live-site bug).** "As rendered" shots show what the first viewport looks like; the other AR shots were taken with `overflow-x: clip` applied to html/body so they show the content. |
| Screenshots | [desktop full page](../../screenshots/home/ar/full--desktop.jpg) · [desktop first viewport](../../screenshots/home/ar/first-viewport--desktop.jpg) · [desktop first viewport — as rendered](../../screenshots/home/ar/first-viewport--desktop--as-rendered.jpg) · [mobile full page](../../screenshots/home/ar/full--mobile.jpg) · [mobile first viewport](../../screenshots/home/ar/first-viewport--mobile.jpg) · [mobile first viewport — as rendered](../../screenshots/home/ar/first-viewport--mobile--as-rendered.jpg) |

> Only content displayed in Arabic mode is listed. Lines that stay in English are elements the site does not translate. Notation as in the English file.

## 1. Header — `header.site-shell-header`

- **LINK** — "WE WILL" → `/`
- **IMG** — alt: "WE WILL" — `/uploads/6fbc468cc7560cbfb13db5c0.jpg`
- **LINK** — "الرئيسية" → `#hero`
- **LINK** — "جودة عصر الذكاء" → `#ai-era-quality-services-promo`
- **LINK** — "لماذا WE WILL" → `#why-we-will`
- **LINK** — "لوحة الجودة" → `#quality-canvas`
- **LINK** — "كيف نعمل" → `#how-we-work`
- **LINK** — "تواصل معنا" → `#contact`
- **LINK** — "المدونة" → `/blog/`
- **BUTTON** — "EN"
- **BUTTON** — "AR"

## 2. Section `#hero` — `section#hero.hero.hero-dark` — “نحن لا نختبر البرمجيات فحسب. نحن نحمي قرارات المنتج.”

- **TEXT** `span` — جودة البرمجيات • رعاية الأعمال • وعي بالذكاء الاصطناعي
- **H1** — نحن لا نختبر البرمجيات فحسب. نحن نحمي قرارات المنتج.
- **P** — الجودة لم تعد قائمة فحص، بل طبقة استراتيجية تحمي فكرتك، وتقلل مخاطر الإطلاق، وتمنحك وضوحًا في اتخاذ القرار يتجاوز مفهوم الـ QA التقليدي.
- **LINK** — "احجز جلسة وضوح" → `#contact`
- **LINK** — "استكشف الخدمات" → `#services`
- **P** — كيف يستحق الإصدار قرار GO
- **TEXT** `span.hero-signal-text` — المخاطر مُحدَّدة
- **TEXT** `span.hero-signal-text` — الرحلات مُختبَرة
- **TEXT** `span.hero-signal-text` — الأدلة مُوقَّعة
- **TEXT** `span.hero-signal-text` — قرار GO مُدافَع عنه

## 3. Section `#vibe-test` — `section#vibe-test.section.section-sara` — “تعرّف على Vibe Test — اختبار جودة ذاتيّ يمنحك الإيصالات.”

- **P** — Vibe Test
- **H2** — تعرّف على Vibe Test — اختبار جودة ذاتيّ يمنحك الإيصالات.
- **P** — فريق اختبار جودة ذاتيّ كخدمة: وكلاء يمسحون منتجك ويختبرونه ويصلحونه عبر الويب والموبايل والذكاء الاصطناعي التوليدي — ثم يُثبتون كل حكم بإيصال مُتحقَّق آليًا. مصمّم للفرق التي تُطلق أسرع مما تختبر.
- **LINK** — "ابدأ Vibe Test" → `https://vibe-test.oneapp.dev` target=_blank
- **LINK** — "تحدّث إلى WE WILL" → `/contact/`
- **TEXT** `span.sara-go` — ● PASS
- **TEXT** `span.sara-verdict-who` — Vibe Test · signed today
- **TEXT** `div.sara-verdict-title` — Release readiness
- **TEXT** `div.sara-verdict-sub` — 3 blockers cleared · 0 open
- **LI** — Auth & permissions flow
- **TEXT** `span.ck` — ✓
- **LI** — Payments & checkout
- **TEXT** `span.ck` — ✓
- **LI** — AI suggestions accuracy
- **TEXT** `span.ck` — ✓
- **LI** — Performance budget
- **TEXT** `span.ck` — ✓
- **TEXT** `div.sara-verdict-sub` — Receipt #VT-7F3A9C · machine-checked
- **TEXT** `span` — Confidence
- **TEXT** `b` — 94%
- **LINK** — "شاهد Vibe Test عمليًا" → `https://www.youtube.com/watch?v=yRBbqktuGEs` target=_blank
- **IMG** — alt: "" — `https://i.ytimg.com/vi/yRBbqktuGEs/maxresdefault.jpg`
- **TEXT** `span.sara-capability-index` — 01
- **H3** — المسح والإثبات
- **P** — عمليات مسح استكشافية ذاتية ورحلات ذات قيمة تجارية عبر الويب والموبايل والذكاء الاصطناعي التوليدي.
- **TEXT** `span.sara-capability-index` — 02
- **H3** — اختبار وإصلاح وتحقّق
- **P** — يكتشف Vibe Test الأخطاء ويصلحها ويعيد التحقق منها. لا يصل أي كود غير مُراجَع إلى الإنتاج.
- **TEXT** `span.sara-capability-index` — 03
- **H3** — إيصالات جديرة بالثقة
- **P** — كل حكم يُتحدّى قبل أن يصلك. لا إيصال، لا نتيجة — وكودك وبياناتك تبقى ملكك.

## 4. Section `#ai-era-quality-services-promo` — `section#ai-era-quality-services-promo.section.aeqs-promo` — “الذكاء الاصطناعي يساعد الفرق على البناء أسرع. WE WILL تساعدهم على الإطلاق بثقة.”

- **TEXT** `span.aeqs-promo-eyebrow` — خدمات الجودة في عصر الذكاء الاصطناعي
- **H2** — الذكاء الاصطناعي يساعد الفرق على البناء أسرع. WE WILL تساعدهم على الإطلاق بثقة.
- **P** — عرض مخصص لفرق المنتج سريعة الحركة: تحقق من رحلات المستخدم الحرجة وميزات الذكاء التوليدي ومخاطر الإطلاق ومشكلات الجودة المؤثرة على الأعمال قبل أن تصل إلى المستخدمين.
- **LINK** — "استكشف العرض" → `/ai-era-quality-services/`
- **TEXT** `span.i18n-ar` — استراتيجية جودة ونطاق مبني على المخاطر _(aria-hidden)_
- **TEXT** `span.i18n-ar` — اختبار رحلات المستخدم وقيمة الأعمال _(aria-hidden)_
- **TEXT** `span.i18n-ar` — تقييم ميزات الذكاء التوليدي _(aria-hidden)_
- **TEXT** `span.i18n-ar` — مراجعات جاهزية الإطلاق _(aria-hidden)_
- **TEXT** `span.i18n-ar` — اختبار أمان حسب الدور _(aria-hidden)_
- **TEXT** `span.i18n-ar` — تقارير مخاطر مفهومة لمديري المنتج _(aria-hidden)_

## 5. Section `#genai-based-systems` — `section#genai-based-systems.section.section-genai` — “منهجيتنا.”

- **P** — أنظمة GenAI
- **H2** — منهجيتنا.
- **H3** — جودة ميزات GenAI وحوكمة القرار
- **P** — منهجية مبنية على القرار لتقييم ميزات GenAI: العقود، مجموعات التغطية، والتقييم السلوكي.
- **TEXT** `span.genai-chip` — وضوح قرار Go / No-Go
- **TEXT** `span.genai-chip` — التركيز على السلوك لا المخرجات
- **LINK** — "استكشف (EN/AR)" → `/contact/`
- **H3** — ماذا ستحصل
- **TEXT** `strong` — العقود
- **TEXT** `span` — قواعد يجب/لا يجب
- **TEXT** `strong` — مجموعات التغطية
- **TEXT** `span` — حالات الضغط العالي
- **TEXT** `strong` — التقييم
- **TEXT** `span` — نجاح / ضعيف / مخالفة

## 6. Section `#why-we-will` — `section#why-we-will.section.section-why` — “جودة تفكر معك، لا بعدك.”

- **P** — لماذا WE WILL
- **H2** — جودة تفكر معك، لا بعدك.
- **P** — نحن لا ننفذ حالات اختبار فحسب، بل نقود الجودة كطبقة استراتيجية تحمي خارطة الطريق والمستخدمين والإصدارات القادمة.
- **H3** — جودة تراعي العمل
- **P** — ننطلق من أهداف العمل لا من أدوات الاختبار. كل نشاط جودة مرتبط بقرار يجب أن تتخذه بثقة.
- **H3** — تفكير قائم على المخاطر
- **P** — نكشف المخاطر مبكرًا، نقلل ديون الجودة من المصدر، ونمنع المفاجآت قرب الإطلاق.
- **H3** — شراكة استراتيجية
- **P** — ننضم إلى فريقك كشريك جودة يعمل مع المنتج والهندسة والقيادة كوحدة قرار واحدة.

## 7. Section `#services` — `section#services.section.section-services` — “نقدم الثقة، لا مجرد تقارير.”

- **P** — ماذا نفعل
- **H2** — نقدم الثقة، لا مجرد تقارير.
- **P** — أربعة أعمدة خدمية تربط الجودة بنتائج العمل عبر دورة حياة المنتج.
- **H3** — الجودة كخدمة (QaaS)
- **P** — قيادة جودة شاملة: جاهزية الإطلاق، دعم قرارات Go/No-Go، رسم المخاطر، وتصميم Definition of Done بما يناسب مرحلة منتجك.
- **H3** — لوحة الجودة
- **P** — خريطة بصرية تجمع الميزات الرئيسية والمخاطر وسيناريوهات الجودة والتحسينات المستقبلية في لوحة استراتيجية واحدة.
- **H3** — جودة الذكاء الاصطناعي وشفافية السلوك
- **P** — قابلية التفسير، والملاءمة السياقية، والوعي بالتحيز، واختبارات السلوك للتجارب المعتمدة على الذكاء الاصطناعي والتوليد.
- **H3** — منع مخاطر الإصدارات
- **P** — مراجعات مخاطر ما قبل الإطلاق، إرشاد الرصد، وخطط الطوارئ لتجنب الأعطال عالية التأثير في اللحظات الحرجة.

## 8. Section `#quality-canvas` — `section#quality-canvas.section.section-canvas` — “جودة منتجك على لوحة واضحة واحدة.”

- **P** — لوحة الجودة
- **H2** — جودة منتجك على لوحة واضحة واحدة.
- **P** — انقل النقاش من “جودة عالية” مبهمة إلى رؤية مشتركة وملموسة لما يهم الآن: الميزات الرئيسية، المخاطر الواقعية، سيناريوهات الجودة القابلة للقياس، وخطط التحسين.
- **LI** — مواءمة أصحاب المصلحة حول معنى “كافٍ” لكل مرحلة.
- **LI** — رسم المخاطر الحقيقية قبل أن تتحول إلى حوادث في الإنتاج.
- **LI** — تحويل المخاطر إلى سيناريوهات جودة واضحة وقابلة للاختبار.
- **LI** — تخطيط ركائز الجودة المستقبلية دون إبطاء التسليم.
- **LINK** — "أنشئ لوحة الجودة الخاصة بك" → `https://chatgpt.com/g/g-67fd5789f9048191b0bf796e6ef3abb3-quality-planning-canvas` target=_blank
- **LINK** — "اعرف المزيد" → `https://www.linkedin.com/pulse/quality-canvas-from-abstract-concept-concrete-reality-alsharif-yw4nf/?trackingId=RvOyDsrUzfmNlfgPWsFrow%3D%3D` target=_blank
- **P** — ملخص اللوحة
- **P** — الميزات الرئيسية
- **P** — التجارب التي تدعم عملك الآن.
- **P** — المخاطر
- **P** — تهديدات حقيقية للنجاح.
- **P** — سيناريوهات الجودة
- **P** — قواعد قبول قابلة للقياس.
- **P** — التحسينات المستقبلية
- **P** — أسس مخطط لها للتوسع.
- **P** — اللوحة تتطور مع خارطة طريقك، لتصبح وثيقة حية للجودة وليست ملفًا ثابتًا.

## 9. Section `#impact` — `section#impact.section.section-impact` — “أثر يتحدث عن نفسه.”

- **P** — الأثر
- **H2** — أثر يتحدث عن نفسه.
- **P** — الجودة ليست بعدد الاختبارات بل بمدى تقليل المخاطر ووضوح القرارات.
- **TEXT** `span.impact-symbol` — ↓
- **TEXT** `span.impact-number` — 32%
- **P** — مخاطر الإطلاق
- **P** — تقليل المشكلات الحرجة قبل الإصدار عبر مراجعات المخاطر ولوحة الجودة.
- **TEXT** `span.impact-symbol.up` — ↑
- **TEXT** `span.impact-number` — 65%
- **P** — وضوح القرار
- **P** — مواءمة أعلى بين المنتج والهندسة والقيادة حول معنى “جاهز للشحن”.
- **TEXT** `span.impact-number` — 2×
- **P** — سرعة التحقق من الـ MVP
- **P** — تجارب سوق أسرع مع جودة مضبوطة على مرحلة الـ MVP بدل السعي للكمال.

## 10. Section `#how-we-work` — `section#how-we-work.section.section-process` — “عملية جودة مبنية حول القرارات.”

- **P** — كيف نعمل
- **H2** — عملية جودة مبنية حول القرارات.
- **P** — نندمج مع فريقك، نرسم المخاطر، نصمم استراتيجية الجودة، ونرافقك من الفكرة إلى النمو المستقر.
- **TEXT** `div.step-badge` — 01
- **H3** — اكتشاف ومواءمة
- **P** — نبدأ بأهداف المنتج والقيود والمخاطر الحالية لمواءمة التوقعات مع جميع الأطراف.
- **TEXT** `div.step-badge` — 02
- **H3** — رسم الجودة
- **P** — باستخدام لوحة الجودة وإطار الجودة الثلاثي، نحدد الميزات والمخاطر الواقعية وسيناريوهات الجودة.
- **TEXT** `div.step-badge` — 03
- **H3** — تنفيذ ومتابعة
- **P** — نقود تنفيذ الجودة ونراقب جاهزية الإصدار ونمنع المشكلات بدل التعامل معها بعد الإطلاق.
- **TEXT** `div.step-badge` — 04
- **H3** — تحسين مستمر
- **P** — نراجع الأثر، ونحسن استراتيجية الجودة، ونطور عملياتك بعقلية كايزن.

## 11. Section `#team` — `section#team.section.section-team` — “الفريق خلف جودة WE WILL.”

- **P** — الفريق
- **H2** — الفريق خلف جودة WE WILL.
- **P** — فريق متعدد التخصصات من قادة الجودة والمختبرين والاستراتيجيين المهتمين بالذكاء الاصطناعي يعمل كوحدة واحدة لحماية منتجك.
- **BUTTON** — "‹" (aria-label: "Previous team members")
- **BUTTON** — "›" (aria-label: "Next team members")
- **IMG** — alt: (missing) — `/uploads/1bd4cda42248525210e1e8a6.png`
- **TEXT** `div.team-name` — Ibrahim Alsharif
- **IMG** — alt: (missing) — `/uploads/c2c34df4ff8b91a3515a27bc.jpg`
- **TEXT** `div.team-name` — Haneen Ibrahim
- **IMG** — alt: (missing) — `/uploads/e4e3c0eb0f623047b7e5a97d.jpg`
- **TEXT** `div.team-name` — Osama Assoloy
- **IMG** — alt: (missing) — `/uploads/b496789933824df1da16945d.jpg`
- **TEXT** `div.team-name` — Hamza Al-Mobayed
- **IMG** — alt: (missing) — `/uploads/7deaa3d6f7c6e6af6ebc3c68.jpg`
- **TEXT** `div.team-name` — Haifa Sameer
- **IMG** — alt: (missing) — `/uploads/4b56c105793bf60505341be8.jpg`
- **TEXT** `div.team-name` — Mai Ziada
- **IMG** — alt: (missing) — `/uploads/23eb841589a59fa75621e56c.jpg`
- **TEXT** `div.team-name` — Mervat Samsoum
- **IMG** — alt: (missing) — `/uploads/20df78ae674bd9f12be9d934.jpg`
- **TEXT** `div.team-name` — Mohammed Sameer
- **IMG** — alt: (missing) — `/uploads/e1f841e0f5c3c33b0432dec1.jpg`
- **TEXT** `div.team-name` — Mohammed Albaba
- **IMG** — alt: (missing) — `/uploads/051477fc13d9a2d94091467b.png`
- **TEXT** `div.team-name` — Riham Tameem
- **IMG** — alt: (missing) — `/uploads/7595ab96563302b83a0e2753.jpg`
- **TEXT** `div.team-name` — Noor Khaled
- **IMG** — alt: (missing) — `/uploads/df2c0c5c6a35f0591ae659d2.jpg`
- **TEXT** `div.team-name` — Yousef Taweel
- **IMG** — alt: (missing) — `/uploads/f46740518bb1fa53a9bf75a7.png`
- **TEXT** `div.team-name` — Omar Alsharif

## 12. Section `#success-stories` — `section#success-stories.section.section-success` — “إلهام من نجاح عملاء WE WILL.”

- **P** — قصص نجاح
- **H2** — إلهام من نجاح عملاء WE WILL.
- **P** — منتجات حقيقية وتحديات حقيقية واستقرار يمكن قياسه عندما تصبح الجودة شريكًا استراتيجيًا وليس مرحلة اختبار متأخرة.
- **TEXT** `span.t-quote-mark` — “ _(aria-hidden)_
- **P** — Partnering with WE WILL for quality services helped us resolve key challenges and brought renewed energy to our team. Their focus on maintaining a clear MVP definition and preparing the product for marketing campaigns was amazing. Empowering the process of delivering and handling issues took both the product and the partnership to a new level of stability.
- **IMG** — alt: "One Studio logo" — `/uploads/8636daa1a2e2fc75c1605a60.png`
- **TEXT** `span.t-name` — One Studio
- **P** — Partnering with WE WILL for quality services helped us resolve key challenges and brought renewed energy to our team. Their focus on maintaining a clear MVP definition and preparing the product for marketing campaigns was amazing. Empowering the process of delivering and handling issues took both the product and the partnership to a new level of stability.
- **IMG** — alt: "One Studio logo" — `/uploads/8636daa1a2e2fc75c1605a60.png`
- **TEXT** `span.t-name` — One Studio
- **P** — WE WILL improved our technical team's performance, reduced system errors, and significantly enhanced the user experience. Within just 8 months, WE WILL’s expertise transformed our development process, leading to more reliable releases and fewer production issues.
- **IMG** — alt: "MICEtribe logo" — `/uploads/40f072614cf25b1658294d28.jpg`
- **TEXT** `span.t-name` — MICEtribe
- **P** — تعاونا مع فريق WE WILL في iStoria Coach، وكان دورهم يتجاوز الاختبار التقني التقليدي. ساعدونا في مراجعة وتنظيم خارطة طريق المنتج، وتدقيق تفاصيل النظام من منظور عملي، مما ساعدنا على ترتيب الأولويات، توضيح المتطلبات، وتقليل المخاطر قبل التنفيذ. فريق محترف، مرن، ويفهم احتياجات الشركات والمنتجات سريعة التطور.
- **IMG** — alt: "iStoria logo" — `/uploads/49e1e631f4129b8178ecb383.png`
- **TEXT** `span.t-name` — iStoria
- **P** — لقد كانت تجربة العمل مع فريق ضمان الجودة لدى WE WILL رائعة. فاهتمامهم بالتفاصيل، ومنهجيتهم المنظمة في الاختبار، والتزامهم بتقديم برمجيات عالية الجودة، فاق توقعاتنا باستمرار. لقد حددوا المشكلات الحرجة مبكرًا، وتواصلوا معنا بوضوح طوال العملية، وساهموا في تحسين الموثوقية العامة لمنتجنا. نوصي بشدة بخدمات ضمان الجودة التي يقدمونها لأي شركة تبحث عن شريك اختبار موثوق ومحترف.
- **IMG** — alt: "SellEnvo logo" — `/uploads/51aa9f0769b37fc6fead0457.jpg`
- **TEXT** `span.t-name` — SellEnvo
- **P** — Our experience with WE WILL is one of the exceptional experiences that helped achieve stability in our work environment at Rasel. By utilizing their QA services, we improved the performance of the technical team, reduced errors in the system, and significantly enhanced the user experience.
- **IMG** — alt: "Rasel logo" — `/uploads/rasel.png`
- **TEXT** `span.t-name` — Rasel
- **P** — كانت شركة WE WILL TECH جزءًا لا يتجزأ من فريق Darent منذ البداية. وقد ساهمت خبرتهم في ضمان الجودة، ومهارات التواصل الفعّالة، وسرعة استيعابهم لسياق منتجنا في الحفاظ على سير دورات التطوير بسلاسة. نحن لا نعتبرهم مجرد مورد، بل جزءًا من فريقنا.
- **IMG** — alt: "Darent logo" — `/uploads/3b5edf333dd612526b1ab0c7.jpg`
- **TEXT** `span.t-name` — Darent
- **P** — WE WILL’s professionalism and results-driven approach exceeded our expectations. We wholeheartedly recommend their services to any company striving for excellence in software quality assurance.
- **IMG** — alt: "MICEtribe logo" — `/uploads/40f072614cf25b1658294d28.jpg`
- **TEXT** `span.t-name` — MICEtribe
- _(aria-hidden repeat of the block above omitted — div.t-group, 2085 chars)_
- **P** — لقد كانت تجربة العمل مع فريق ضمان الجودة لدى WE WILL رائعة. فاهتمامهم بالتفاصيل، ومنهجيتهم المنظمة في الاختبار، والتزامهم بتقديم برمجيات عالية الجودة، فاق توقعاتنا باستمرار. لقد حددوا المشكلات الحرجة مبكرًا، وتواصلوا معنا بوضوح طوال العملية، وساهموا في تحسين الموثوقية العامة لمنتجنا. نوصي بشدة بخدمات ضمان الجودة التي يقدمونها لأي شركة تبحث عن شريك اختبار موثوق ومحترف.
- **IMG** — alt: "SellEnvo logo" — `/uploads/51aa9f0769b37fc6fead0457.jpg`
- **TEXT** `span.t-name` — SellEnvo
- **P** — Our experience with WE WILL is one of the exceptional experiences that helped achieve stability in our work environment at Rasel. By utilizing their QA services, we improved the performance of the technical team, reduced errors in the system, and significantly enhanced the user experience.
- **IMG** — alt: "Rasel logo" — `/uploads/rasel.png`
- **TEXT** `span.t-name` — Rasel
- **P** — كانت شركة WE WILL TECH جزءًا لا يتجزأ من فريق Darent منذ البداية. وقد ساهمت خبرتهم في ضمان الجودة، ومهارات التواصل الفعّالة، وسرعة استيعابهم لسياق منتجنا في الحفاظ على سير دورات التطوير بسلاسة. نحن لا نعتبرهم مجرد مورد، بل جزءًا من فريقنا.
- **IMG** — alt: "Darent logo" — `/uploads/3b5edf333dd612526b1ab0c7.jpg`
- **TEXT** `span.t-name` — Darent
- **P** — WE WILL’s professionalism and results-driven approach exceeded our expectations. We wholeheartedly recommend their services to any company striving for excellence in software quality assurance.
- **IMG** — alt: "MICEtribe logo" — `/uploads/40f072614cf25b1658294d28.jpg`
- **TEXT** `span.t-name` — MICEtribe
- **P** — Partnering with WE WILL for quality services helped us resolve key challenges and brought renewed energy to our team. Their focus on maintaining a clear MVP definition and preparing the product for marketing campaigns was amazing. Empowering the process of delivering and handling issues took both the product and the partnership to a new level of stability.
- **IMG** — alt: "One Studio logo" — `/uploads/8636daa1a2e2fc75c1605a60.png`
- **TEXT** `span.t-name` — One Studio
- **P** — WE WILL improved our technical team's performance, reduced system errors, and significantly enhanced the user experience. Within just 8 months, WE WILL’s expertise transformed our development process, leading to more reliable releases and fewer production issues.
- **IMG** — alt: "MICEtribe logo" — `/uploads/40f072614cf25b1658294d28.jpg`
- **TEXT** `span.t-name` — MICEtribe
- **P** — تعاونا مع فريق WE WILL في iStoria Coach، وكان دورهم يتجاوز الاختبار التقني التقليدي. ساعدونا في مراجعة وتنظيم خارطة طريق المنتج، وتدقيق تفاصيل النظام من منظور عملي، مما ساعدنا على ترتيب الأولويات، توضيح المتطلبات، وتقليل المخاطر قبل التنفيذ. فريق محترف، مرن، ويفهم احتياجات الشركات والمنتجات سريعة التطور.
- **IMG** — alt: "iStoria logo" — `/uploads/49e1e631f4129b8178ecb383.png`
- **TEXT** `span.t-name` — iStoria
- _(aria-hidden repeat of the block above omitted — div.t-group, 2085 chars)_
- **TEXT** `span` — جاهز لقصتك الخاصة؟
- **LINK** — "تحدث مع WE WILL" → `#contact`

## 13. Section `#clients` — `section#clients.section.section-clients` — “منتجات وثقت في جودة WE WILL.”

- **P** — عملاؤنا
- **H2** — منتجات وثقت في جودة WE WILL.
- **P** — من الشركات الناشئة إلى المنتجات المتنامية، هذه الفرق اعتمدت علينا لحماية إصداراتها وقراراتها.
- **IMG** — alt: "iStoria logo" — `/uploads/8636daa1a2e2fc75c1605a60.png`
- **FIGCAPTION** — One Studio
- **IMG** — alt: "ID8 Media logo" — `/uploads/041a66893761d3f31b788260.jpg`
- **FIGCAPTION** — ID8 Media
- **IMG** — alt: "Darent logo" — `/uploads/3b5edf333dd612526b1ab0c7.jpg`
- **FIGCAPTION** — Darent
- **IMG** — alt: "IStoria" — `/uploads/49e1e631f4129b8178ecb383.png`
- **FIGCAPTION** — IStoria
- **IMG** — alt: "Masterteam logo" — `/uploads/2d998f928cf87a909420d04a.jpg`
- **FIGCAPTION** — Masterteam
- **LINK** — "MICEtribe" → `https://micetribe.com/` target=_blank
- **IMG** — alt: "MICEtribe logo" — `/uploads/40f072614cf25b1658294d28.jpg`
- **IMG** — alt: "Inspire" — `/uploads/51aa9f0769b37fc6fead0457.jpg`
- **FIGCAPTION** — SellEnvo
- **IMG** — alt: "Famcare logo" — `/uploads/7319f2b29bd043ba2f763153.jpg`
- **FIGCAPTION** — Famcare
- **LINK** — "Rasel" → `https://rasel.ps/` target=_blank
- **IMG** — alt: "Rasel logo" — `/uploads/rasel.png`
- **LINK** — "Oyoun Media" → `https://oyounmedia.com/` target=_blank
- **IMG** — alt: "Oyoun Media logo" — `https://wewill.tech/wp-content/uploads/2023/04/logo-eye-1-300x104.png`
- **LINK** — "I Plan 2" → `https://iplan2.com/` target=_blank
- **IMG** — alt: "I Plan 2 logo" — `/uploads/2712439551bd9f9352828622.png`
- **LINK** — "In2World" → `https://in2world.net/` target=_blank
- **IMG** — alt: "In2World logo" — `https://wewill.tech/wp-content/uploads/2023/04/Group-1-300x79.png`

## 14. Section `#knowledge` — `section#knowledge.section.section-knowledge` — “غوص عميق في معرفتنا.”

- **P** — تعمق معرفي
- **H2** — غوص عميق في معرفتنا.
- **P** — استكشف الفكر خلف فلسفة جودة WE WILL — من جودة رعاية الأعمال إلى إطار الجودة الثلاثي والمزيد.
- **LINK (wraps card)** → `https://wewill.tech/business-care-quality`
- **TEXT** `div.knowledge-pill` — Business-Care • القرارات
- **H3** — جودة تراعي العمل والقرار
- **P** — كيف نحول الجودة من قائمة فحص إلى طبقة تحمي القرار وتنسجم مع واقع المنتج والعمل.
- **TEXT** `span` — اقرأ المقال
- **TEXT** `span` — ↗
- **LINK (wraps card)** → `/blog/?slug=the-triad-quality-framework`
- **TEXT** `div.knowledge-pill` — TQF • الهيكل
- **H3** — إطار الجودة الثلاثي (TQF)
- **P** — إطار ثلاثي يربط جودة المنتج والجودة التقنية وجودة السياق، ويساعد الفرق على تجنب النقاط العمياء قبل الإطلاق.
- **TEXT** `span` — استكشف الإطار
- **TEXT** `span` — ↗
- **LINK (wraps card)** → `https://www.tradeflockasia.com/ibrahim-alsharif-most-visionary-global-ceos-in-2025/`
- **TEXT** `div.knowledge-pill` — المؤسس • العقلية
- **H3** — مقابلة مع مؤسسنا
- **P** — ادخل إلى العقلية التي تقف خلف WE WILL ولماذا نقول إننا نحمي القرارات، لا مجرد اختبارات البرمجيات.
- **TEXT** `span` — شاهد / اقرأ المقابلة
- **TEXT** `span` — ↗
- **LINK (wraps card)** → `https://www.linkedin.com/posts/ibrahimalsharif_quality-canvas-board-template-miroverse-activity-7310667721107533824-61nM/`
- **TEXT** `div.knowledge-pill` — Canvas • الاستراتيجية
- **H3** — لوحة الجودة
- **P** — خريطة بصرية تربط الميزات الأساسية والمخاطر وسيناريوهات الجودة والتحسينات المستقبلية في أصل حي واحد.
- **TEXT** `span` — شاهد لوحة الجودة
- **TEXT** `span` — ↗

## 15. Section `#contact` — `section#contact.section.section-contact` — “دعنا نتحدث عن جودة منتجك.”

- **P** — تواصل
- **H2** — دعنا نتحدث عن جودة منتجك.
- **P** — شارك بعض التفاصيل حول منتجك وسنعاود التواصل برؤية جودة مخصصة وليست رسالة مبيعات عامة.
- **LABEL** — الاسم
- **FIELD** — input[type=text] name="name" label="الاسم" placeholder="الاسم" required
- **LABEL** — البريد الإلكتروني
- **FIELD** — input[type=email] name="email" label="البريد الإلكتروني" placeholder="البريد الإلكتروني" required
- **LABEL** — الشركة / المنتج
- **FIELD** — input[type=text] name="company" label="الشركة / المنتج" placeholder="الشركة / المنتج"
- **LABEL** — أخبرنا بإيجاز عن منتجك والتحديات الحالية
- **FIELD** — textarea[type=textarea] name="message" label="أخبرنا بإيجاز عن منتجك والتحديات الحالية" placeholder="أخبرنا بإيجاز عن منتجك والتحديات الحالية"
- **LABEL** — Website (leave blank) _(aria-hidden)_
- **FIELD** — input[type=text] name="website" label="Website (leave blank)" _(aria-hidden)_
- **BUTTON** — "إرسال الرسالة"

## 16. Other content (outside header/sections/footer) — `div.chat-widget`

- **TEXT** `div.chat-panel-title` — تواصل مع WE WILL
- **TEXT** `div.chat-panel-sub` — أرسل لنا رسالة سريعة.
- **BUTTON** — "×" (aria-label: "Close chat")
- **FIELD** — textarea[type=textarea] name="" placeholder="اكتب رسالتك هنا..."
- **BUTTON** — "💬 واتساب"
- **BUTTON** — "✉ بريد إلكتروني"
- **BUTTON** — "💬" (aria-label: "Open chat")

## 17. Footer — `footer.site-shell-footer`

- **LINK** — "WE WILL" → `/`
- **IMG** — alt: "WE WILL" — `/uploads/6fbc468cc7560cbfb13db5c0.jpg`
- **P** — قلل الوقت، قلل التكلفة، وكن واثقاً
- **P** — © 2023 WE WILL
- **P** — جميع الحقوق محفوظة.
- **LINK** — "لينكدإن" → `https://www.linkedin.com/company/wewilltech/` target=_blank
- **LINK** — "فيسبوك" → `https://www.facebook.com/wewillquality` target=_blank
- **LINK** — "واتساب" → `https://api.whatsapp.com/send/?phone=002 01023833940` target=_blank
- **LINK** — "إنستغرام" → `https://www.instagram.com/wewill.tech/` target=_blank
