# WE WILL Technology — website enhancement prototype

A working prototype of an improved wewill.tech. It starts from an exact rebuild of the live site and applies the restructure set out in the approved Strategic Alignment and Website Brief ([docs/strategy/](docs/strategy/README.md)).

It is meant to be read and adapted by WE WILL's own team: the markup, class names, CSS and JavaScript are the live site's own, so changes can be copied into the production PHP templates section by section.

## Run it

Requires Node.js 20 or later.

```bash
npm install
npm run dev      # local preview with live reload at http://localhost:8080
npm run build    # static site in _site/ — deployable to any static host
```

## How it is organised

| Path | What it is | Equivalent on the live PHP site |
|---|---|---|
| `src/_includes/layouts/base.njk` | Page shell: `<head>`, header, `<main>`, footer, scripts | Main PHP page template |
| `src/_includes/partials/` | Shared pieces: head meta, header/navigation, footer, chat widget, scripts | PHP partials |
| `src/_includes/sections/home/` | One file per Home page section (`hero.html`, `vibe-test.html`, …) | Home section partials |
| `src/_includes/pages/` | Main content of the AI-Era Quality Services page and the blog | Page templates |
| `src/**/index.njk` | One file per URL: page settings (title, meta) plus the list of sections it shows | Routes |
| `src/assets/` | `site.css`, `layout.css`, `site.js` (served live as `/assets/site.js.php`) | `/assets/` |
| `src/uploads/` | Images used by the pages | `/uploads/` |
| `docs/` | Strategy documents and a full snapshot of the live site before changes | — |
| `tools/` | The script that rebuilt the live site, and a check that the rebuild matches it | — |

Templates are [Eleventy](https://www.11ty.dev/) with Nunjucks includes; `{% include "x.html" %}` corresponds to a PHP `include`.

## Baseline (first commit)

The first commit on `main` is the live site as it was on 2026-09-28, rebuilt without design or content changes. `npm run build && npm run verify:baseline` compares every page against the live site; at the time of the rebuild all 16 pages matched (ignoring whitespace) and screenshots matched pixel-for-pixel at 1440 px and 390 px widths.

Differences from the live site that a static prototype requires:

- `/assets/site.js.php` is served as `/assets/site.js` (same content).
- Blog posts live at `/blog/<slug>/` instead of `/blog/?slug=<slug>`.
- A duplicate closing `</main>` tag after the chat widget is dropped (browsers ignore it; the page structure is unchanged).
- The contact form (`/contact-submit.php`) and blog search need the live server; on a static host they show their error or empty state.

The enhancement work happens on the `redesign/strategic-refinement` branch, one commit per section, so each change can be reviewed on its own.
