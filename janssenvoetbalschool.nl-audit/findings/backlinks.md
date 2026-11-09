# Backlinks (Common Crawl tier)

**Backlink Health Score: INSUFFICIENT DATA (0/7 factors scored)**  
**Numeric scores: Not Assessed** (CC-only; validator PASS)

| Section | Status | Score | Data Source |
|---------|--------|-------|-------------|
| Profile Overview | info | Not Assessed | CC (0.50) |
| Anchor Distribution | info | Not Assessed | — |
| Referring Domain Quality | info | Not Assessed | CC presence only |
| Toxic Links | info | Not Assessed | — |
| Top Pages | info | Not Assessed | — |
| Competitor Gap | info | Not Assessed | — |
| Link Velocity | info | Not Assessed | DataForSEO only |

## Sources detected

| Source | Available | Notes |
|--------|-----------|-------|
| Common Crawl | yes | `cc-main-2026-jan-feb-mar` (cached) |
| Moz | no | configure free API |
| Bing Webmaster | no | property + API key needed |
| Keywords Everywhere | no | optional rank fallback |
| DataForSEO | no | premium |
| Verify crawler | yes | no known-link list supplied |

Raw: `raw/backlinks-cc.json` · validated: `raw/backlinks-report.json` (`status: PASS`)

## 1. Profile Overview (CC)

| Field | Value | Confidence |
|-------|-------|------------|
| Domain | `janssenvoetbalschool.nl` | — |
| In CC crawl | **false** | 0.50 |
| In CC rankings | **false** | 0.50 |
| PageRank | null | — |
| Harmonic centrality | null | — |
| Note | Domain not found in Common Crawl graph — may be too new, too small, or not yet crawled | — |

**Do not interpret absence as “low authority.”** It means CC has no graph row for this host.

## 2–7. Not measurable on this tier

- **Anchors / follow ratio / RD count / toxic / top linked pages / velocity:** require Moz, Bing, or DataForSEO.
- **Competitor gap (SERP context only, not backlinks):** for core queries (`extra voetbaltraining Venlo`, `voetbaltraining Limburg`, `individuele voetbaltrainer Venlo`) organic results are dominated by VVV-Venlo Voetbalschool, FCV Venlo Voetbalschool, Pro Football Limburg, Me and Soccer — Janssen does not appear. That is a visibility gap, not a verified referring-domain gap.

## Critical / High / Medium

### Critical
- None assessable from CC.

### High
- **Add Moz (free) + Bing Webmaster** so referring domains, spam, and anchors become scoreable. Run `/seo backlinks setup`.
- **Earn first editorial/local citations** (club sites, Omroep Venlo follow-ups, gemeente/sport directories) — needed before any RD metric can leave “not found.”

### Medium
- Keep a verified outbound-mention list (press, partners) and run `verify_backlinks.py` periodically.
- Re-check Common Crawl after the next graph release; current release still misses the host.

## Link building opportunities (hypothesis — unverified RD lists)

1. Local club / partner pages in Noord-Limburg (Velden, Venlo, Tegelen).
2. Regional press that already mentioned the school (Omroep Venlo — reinforce with lasting URL citation).
3. Youth-sport directories and gemeente Venlo sport listings.
4. Guest explainers on “extra training naast de club” vs club academies (differentiate from VVV/FCV).
5. Parent Facebook/community groups → owned landing URLs (nofollow likely; brand discovery).

*These are opportunity themes only; no Moz/Bing domain lists were available to rank by DA.*

## Setup

Run `/seo backlinks setup` to add free Moz and Bing API keys for richer data.
