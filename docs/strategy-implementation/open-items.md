# Open items for WE WILL

Items from the Home and Vibe Test review against the two source PDFs (2026-09-29, openspec `optimize-leads-seo`) that need WE WILL's input or a platform decision. Nothing here is built into the prototype.

| # | Item | Why it matters | Owner | What is needed |
|---|---|---|---|---|
| L4 | Testimonial attribution | Quotes show a company only. A named person and role carries more weight with enterprise buyers. | WE WILL | Name and role for the iStoria, Darent and SellEnvo quotes, with permission to publish |
| S7 | Indexable Arabic | Arabic is switched in the browser on the same URL, so search engines index English only. There is no `hreflang`. | WE WILL (platform) | Decide on separate Arabic URLs (e.g. `/ar/…`) with `hreflang` pairs, and approved Arabic for the new copy (see `translation-sheet.md`) |
| S8 | Legacy one-section pages | The live sitemap still lists `/genai-based-systems/`, `/why-we-will/`, `/services/`, `/quality-canvas/`, `/impact/`, `/how-we-work/`, `/team/`, `/success-stories/`, `/clients/` and `/knowledge/`, which repeat old Home content. The new pages (`/vibe-test/`, `/solutions/`, `/resources/`, `/about/`) are not listed. | WE WILL (platform) | Add the new pages to the live sitemap (the prototype's `/sitemap.xml` shows the proposed list). Redirect each legacy page to its new home, or mark it `noindex`. |
| S9 | Blog post URLs | The live site uses `/blog/?slug=…`; the prototype uses `/blog/<slug>/` | WE WILL (platform) | Choose one form and redirect the other |
| C1 | Contact form field | The form now posts `request_type` | WE WILL (developers) | `/contact-submit.php` must store or forward `request_type` (see `cta-map.md`) |
| C2 | Claims to confirm | Reused Vibe Test wording goes beyond the Brief's verbs | WE WILL | Confirm "MVP · INVITE-ONLY", "Your autonomous QA team", "Autonomous fix → PR → merge → deploy → hand-off", "QA memory that compounds", "Adversarial verification" |
| C3 | Evidence | Placeholders are in place | WE WILL | Product screenshots, and real receipts to replace the samples (#VT-4821 98.7%, #VT-7F3A9C 94%) |
| C4 | Legal | Placeholders are in place | WE WILL | Privacy Policy and Terms of Use text; company/legal information for the footer bar |
| K1 | Keyword research | All keyword choices are pending (Website Brief §5 seed terms are "not final SEO targets") | WE WILL / SEO team | Validate the seed terms, including KSA and Arabic variants, before final titles and headings |
