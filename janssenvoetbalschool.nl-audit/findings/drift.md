# SEO drift (homepage vs baseline)

**Drift status: REGRESSION**  
**Drift health: 42/100** (1 CRITICAL · 3 WARNING · 2 INFO of 17 rules; CWV not compared)

| Field | Value |
|-------|-------|
| URL | `https://www.janssenvoetbalschool.nl/` |
| Baseline ID | 1 @ `2026-11-09T17:18:48Z` |
| Comparison | `2026-11-09T19:44:35Z` |
| Prior compare | id 1 @ 17:19 — 0 findings (pre-change) |
| Raw | `raw/drift-compare.json` |

## Summary

| Severity | Count | Rules triggered |
|----------|-------|-----------------|
| CRITICAL | 1 | `h1_changed` |
| WARNING | 3 | `title_changed`, `meta_description_changed`, `schema_modified` |
| INFO | 2 | `h2_structure_changed`, `content_hash_changed` |
| Unchanged (key) | — | canonical, robots `index,follow`, status 200, OG presence, schema not removed |

## Triggered findings

### CRITICAL — H1 changed (similarity 24%)

| | |
|--|--|
| Baseline | `Train, ontwikkel en beheers elke vaardigheid.` |
| Current | `Individuele voetbaltraining in Velden` |
| Action | Immediate: confirm intentional keyword shift; avoid cannibalizing `/voetbaltraining-velden`. Follow with `/seo content` if reverting or refining. |

### WARNING — Title changed

| | |
|--|--|
| Baseline | `Janssen Voetbalschool \| Voetbaltraining in Velden & Gemeente Venlo` |
| Current | `Janssen Voetbalschool \| Extra voetbaltraining Limburg · Venlo` |
| Action | Monitor CTR in GSC ~2 weeks; Limburg pivot is coherent with pillar strategy but drops “Velden & Gemeente Venlo” phrasing. |

### WARNING — Meta description changed

| | |
|--|--|
| Baseline | Professionele voetbaltraining in Velden, gemeente Venlo… |
| Current | Extra voetbaltraining in Limburg naast je club… Velden (gemeente Venlo)… |
| Action | Verify keywords + CTA (proefles) still present — Limburg framing OK if intentional. |

### WARNING — Schema modified

| | |
|--|--|
| Baseline hash | `9c257f317592…` |
| Current hash | `30af84137a43…` |
| Current types | `SportsActivityLocation`, `Person`, `WebSite` (3 blocks; not removed) |
| Action | Run `/seo schema` — likely expanded `areaServed` / `knowsAbout` / Limburg copy; validate `@graph` still flattens cleanly. |

### INFO — H2 structure 5 → 7

New/expanded sections (current H2s): press mention, voor wie, sticky features, waarom, about, FAQ, first-training CTA. Review for single-job sections; not SEO-breaking alone.

### INFO — HTML content hash changed

Expected with copy/hero/schema updates. Re-baseline after accepting the new homepage as “known good.”

## Stable (good)

- Canonical still `https://www.janssenvoetbalschool.nl`
- Robots still `index, follow`
- HTTP 200
- Schema not removed; OG tags still present
- CWV / perf score: skipped (`--skip-cwv`); no regression signal

## Recommended next steps

1. **Decide** whether H1 “Individuele voetbaltraining in Velden” is the long-term home target (vs brand/Limburg title).
2. If intentional: **`/seo drift baseline`** again to reset known-good.
3. If accidental: restore prior H1 (or a non-cannibalizing brand H1) and re-compare.
4. Run **`/seo schema`** on homepage for the modified JSON-LD.
5. Extend drift compares to Limburg + Venlo baselines under `seo-monitoring/baselines/` after deploy.

## Score notes

42/100 = weighted penalty for 1 critical (H1 targeting) + 3 warnings on primary SERP snippets/schema, tempered by intact indexability (canonical/robots/status).
