# Design

## Context

See proposal.md › Why. The source page is a bundler build. Its markup template sits in `<script type="__bundler/template">` and its assets in `<script type="__bundler/manifest">`: one gzip-compressed, base64 `image/png` (the logo) and one JS module. EN and AR copy are both in the template (`span.en` / `span.ar` pairs). The text of every section is also recorded in `docs/current-site/pages/vibe-test-external.md` and `pages/ar/vibe-test-external.md`. The site layout supports a per-page stylesheet through `extraCss`.

## Goals / Non-Goals

**Goals:** a static, portable rebuild of the VT page that keeps its product-first look (dark hero, mono labels, terminal, receipt card); copy EN/AR through the site's `data-i18n` system; anchors compatible with the old URLs.

**Non-Goals:** no React runtime, no changes to vibe-test.oneapp.dev, no new product claims, no redesign beyond fitting the page into the site's chrome and tokens.

## Decisions

1. **One partial per block** in `src/_includes/sections/vibe-test/` (`hero`, `problem`, `what-it-does`, `how-it-works`, `capabilities`, `receipt`, `who`, `we-will`, `conversion`), matching the Home convention so each maps to a PHP partial.
2. **Styles in `src/assets/vibe-test.css`** loaded via `extraCss`, scoped under `.page-vibe-test`. It uses `--ww-*` tokens for colour and type, plus a mono font stack for terminal and receipt labels (the VT page's own device). *Alternative:* add everything to `site.css`. Rejected: the styles are page-only and would grow the shared file for every page.
3. **Copy through `translations`** with a `vt.` key prefix. Reused Arabic is copied from the VT template. The EDIT/NEW keys get `ar: ""`. The marquee band is `aria-hidden` and only animates when `prefers-reduced-motion: no-preference`.
4. **One H1** wraps the lockup and the reused proposition (the lockup as a small first line). This keeps the product proposition as the dominant visual while making the page's heading carry the product name.
5. **Logo export:** a one-off Node script in the scratchpad decodes the manifest PNG and writes `src/uploads/vibe-test-logo.png` byte-for-byte. The script is not committed; the proposal records the process.
6. **Terminal:** static `<div>` lines. The typing reveal is CSS-only and skipped under reduced motion, so the text is always in the DOM (it fixes the VT capture note "elements still at opacity 0").
7. **Evidence placeholders** use `.content-placeholder` from `update-global-nav-footer-cta`, with an HTML comment `<!-- PLACEHOLDER: product screenshots to be supplied by WE WILL -->`.

## Risks / Trade-offs

- [Kept claims may be inaccurate (Q7)] → Listed in the proposal's Open items for WE WILL. Each is a single string to swap.
- [Visual drift from the VT original] → Compare side by side with `docs/current-site/screenshots/vibe-test-external/` at 1440 px and 390 px during verification.
- [Duplicate BCQ explanation with Home's expert layer] → The wording differs by purpose (Home: combination; VT: endorsed relationship). Both come from the SA.
