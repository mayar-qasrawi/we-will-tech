# Strategy documents — source of truth

Verbatim Markdown conversions of the two strategy documents supplied on 2026-09-28. They are the single source of truth for the website restructure. Do not edit these files; record interpretations, section verdicts and open questions elsewhere.

| File | Converted from | Pages | What it covers |
|---|---|---|---|
| [strategic-alignment-2.0.md](strategic-alignment-2.0.md) | `We_Will_Technology_Strategic_Alignment_2.0_RN.pdf` — copy in [source/strategic-alignment-2.0.pdf](source/strategic-alignment-2.0.pdf) | 7 | Positioning, messaging and buyer segmentation (GSG Elevate 2026, prepared by Digify). The upstream, approved direction. |
| [website-brief.md](website-brief.md) | `WE WILL TECHNOLOGY - Website Brief (1).pdf` — copy in [source/website-brief.pdf](source/website-brief.pdf) | 6 | Website Optimization & Information Architecture Brief: "Phase 2 implementation direction based on the approved Strategic Alignment". Contains the navigation, ICP journey, page-by-page block structure (Action column), CTA framework, SEO seed keywords and footer. |

## How the conversion was checked

- Wording, punctuation and section names are unchanged, including the source's own numbering (the brief's last section is "5. SEO Audit Seed Keywords"; the alignment's last section is "I. Phase 2 Implementation Priorities").
- A word-by-word count against `pdftotext -raw` output matches, except for: printed page numbers (omitted); text inside the two diagram images in the Strategic Alignment (pp. 4 and 6), which `pdftotext` cannot read and which is transcribed by hand inside `[Diagram]` blocks; and a line-break hyphen in the brief ("AI-⏎assisted", rendered as "AI-assisted").
- Special characters are kept as in the source: curly quotes, en dash ("2–3"), em dashes, middle dots (·) and bullets (•).
- Each file starts with an HTML comment describing its conventions; `<!-- p. N -->` comments mark PDF page starts for citation.

## Vocabulary used by the documents

The brief's "Action" column uses three values: **EDIT**, **NEW** and **REUSE**. The documents do not use the terms KEEP, GOOD, MODIFY, REPLACE or REMOVE. The brief is organised by the *target* structure (Home, Vibe Test, Solutions, Resources, About) rather than by the current site's sections.
