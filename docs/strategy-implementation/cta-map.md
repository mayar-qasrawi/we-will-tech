# CTA map

Source: Website Brief §IV "CTA Framework" and the §III CTA column. Change: `openspec/changes/update-global-nav-footer-cta`.

| Label | Role | Destination | Where it may appear |
|---|---|---|---|
| Run a Guided Vibe Test | Primary acquisition CTA; the proof-of-value entry | `/contact/?request=guided-vibe-test` | Header, Home hero and final block, Vibe Test page, Solutions use cases 1–3, footer |
| Discuss a Quality Requirement (buttons) / Discuss a Business Care Quality Requirement (footer) | Secondary enterprise / higher-risk path | `/contact/?request=bcq-requirement` | Home expert layer and final block, Vibe Test "WE WILL connection", Solutions use cases 3–5, footer |
| Talk to Us (button) / Contact (footer link) | Contact | `/contact/` | About › Credibility (button), footer |
| Explore Vibe Test | Routing | `/vibe-test/` | Home only |
| Explore Solutions | Routing | `/solutions/` | Home only |
| View Resources | Routing | `/resources/` | Home › Selected resources |
| Read | Content | the resource itself | Resources |

Retired labels (must not appear on the new or changed pages): "Book a Clarity Session", "Book a Demo", "Start a Vibe Test", "Talk to WE WILL", "Explore Services".

## Contact form field

The `/contact/` form posts one new field, `request_type`, to `/contact-submit.php`:

| `?request=` / `request_type` value | Option label |
|---|---|
| *(empty)* | General message |
| `guided-vibe-test` | Run a Guided Vibe Test |
| `bcq-requirement` | Discuss a Business Care Quality Requirement |

The page preselects the option from the `request` query parameter; an unknown or missing value selects "General message".

**For WE WILL's developers:** `/contact-submit.php` must accept and store or forward `request_type`. The prototype is static and cannot send.
