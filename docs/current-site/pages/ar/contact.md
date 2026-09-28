# Contact (standalone section page) — Arabic (AR) version

Source URL: <https://wewill.tech/contact/> with the site's language toggle switched to Arabic. English version: [../contact.md](../contact.md)

| Field | Value |
|---|---|
| Language switch | clicked `<button type="button" class="lang-btn is-active" data-lang="ar">AR</button>` → `<html lang>`: en → ar, dir: ltr → rtl |
| `<title>` in AR mode | WE WILL - Contact |
| Horizontal overflow in AR mode | desktop: 11040 px page width in a 1440 px viewport; mobile: 10367 px page width in a 390 px viewport (page auto-scrolled to x=-1169). **The page overflows sideways in Arabic/RTL mode (a live-site bug).** "As rendered" shots show what the first viewport looks like; the other AR shots were taken with `overflow-x: clip` applied to html/body so they show the content. |
| Screenshots | [desktop full page](../../screenshots/contact/ar/full--desktop.jpg) · [desktop first viewport](../../screenshots/contact/ar/first-viewport--desktop.jpg) · [desktop first viewport — as rendered](../../screenshots/contact/ar/first-viewport--desktop--as-rendered.jpg) · [mobile full page](../../screenshots/contact/ar/full--mobile.jpg) · [mobile first viewport](../../screenshots/contact/ar/first-viewport--mobile.jpg) · [mobile first viewport — as rendered](../../screenshots/contact/ar/first-viewport--mobile--as-rendered.jpg) |

> Only content displayed in Arabic mode is listed. Lines that stay in English are elements the site does not translate. Notation as in the English file.

## 1. Header — `header.site-shell-header`

- **LINK** — "WE WILL" → `/`
- **IMG** — alt: "WE WILL" — `/uploads/6fbc468cc7560cbfb13db5c0.jpg`
- **LINK** — "الرئيسية" → `/`
- **LINK** — "جودة عصر الذكاء" → `/#ai-era-quality-services-promo`
- **LINK** — "لماذا WE WILL" → `/#why-we-will`
- **LINK** — "لوحة الجودة" → `/#quality-canvas`
- **LINK** — "كيف نعمل" → `/#how-we-work`
- **LINK** — "تواصل معنا" → `/#contact`
- **LINK** — "المدونة" → `/blog/`
- **BUTTON** — "EN"
- **BUTTON** — "AR"

## 2. Section `#contact` — `section#contact.section.section-contact` — “دعنا نتحدث عن جودة منتجك.”

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

## 3. Other content (outside header/sections/footer) — `div.chat-widget`

- **TEXT** `div.chat-panel-title` — تواصل مع WE WILL
- **TEXT** `div.chat-panel-sub` — أرسل لنا رسالة سريعة.
- **BUTTON** — "×" (aria-label: "Close chat")
- **FIELD** — textarea[type=textarea] name="" placeholder="اكتب رسالتك هنا..."
- **BUTTON** — "💬 واتساب"
- **BUTTON** — "✉ بريد إلكتروني"
- **BUTTON** — "💬" (aria-label: "Open chat")

## 4. Footer — `footer.site-shell-footer`

- **LINK** — "WE WILL" → `/`
- **IMG** — alt: "WE WILL" — `/uploads/6fbc468cc7560cbfb13db5c0.jpg`
- **P** — قلل الوقت، قلل التكلفة، وكن واثقاً
- **P** — © 2023 WE WILL
- **P** — جميع الحقوق محفوظة.
- **LINK** — "لينكدإن" → `https://www.linkedin.com/company/wewilltech/` target=_blank
- **LINK** — "فيسبوك" → `https://www.facebook.com/wewillquality` target=_blank
- **LINK** — "واتساب" → `https://api.whatsapp.com/send/?phone=002 01023833940` target=_blank
- **LINK** — "إنستغرام" → `https://www.instagram.com/wewill.tech/` target=_blank
