# Redirects to consider

Flagged for WE WILL's team. Nothing here is implemented in the prototype; the team decides whether and how to redirect.

## vibe-test.oneapp.dev → wewill.tech/vibe-test/

Source: `openspec/changes/add-vibe-test-page`. The old site is a single page. On 2026-09-29 it was byte-identical to `docs/current-site/raw/vibe-test-bundle.html`, and its `sitemap.xml` returns 404.

| From | To | Note |
|---|---|---|
| `https://vibe-test.oneapp.dev/` (and any path) | `https://wewill.tech/vibe-test/` | 301 suggested |
| `…/#top` | `/vibe-test/#top` | Resolves to the top of the page (`<body id="top">`) |
| `…/#problem` | `/vibe-test/#problem` | Same ID kept |
| `…/#how` | `/vibe-test/#how` | Same ID kept |
| `…/#services` | `/vibe-test/#services` | Same ID kept (block now labelled "Capabilities") |
| `…/#receipt` | `/vibe-test/#receipt` | Same ID kept |
| `…/#who` | `/vibe-test/#who` | Same ID kept |
| `…/#book` | `/vibe-test/#book` | Same ID kept (conversion block) |

Browsers never send the `#fragment` to the server. A server-side 301 from `/` to `/vibe-test/` keeps the fragment automatically when the `Location` header has none, so every old anchor lands on the matching block without a script.

The old page's only outbound CTA, `mailto:hello@wewill.tech?subject=Vibe-Test%20Demo` ("Book a Demo"), is replaced by "Run a Guided Vibe Test" → `/contact/?request=guided-vibe-test`.
