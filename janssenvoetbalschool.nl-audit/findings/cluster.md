# Content cluster architecture

**Cluster architecture score: 48/100**  
Scope: live production (guides + homepage) + repo blog (not deployed). SERP overlap via WebSearch (not DataForSEO).

## Live IA snapshot

| Layer | URLs (live 200) | Role |
|-------|-----------------|------|
| Pillar candidates | `/` · `/voetbaltraining-limburg` (sitemap priority 0.9) | Brand + regional commercial |
| Geo spokes | `/voetbaltraining-venlo` · `/voetbaltraining-velden` · `/locatie-sportpark-theo-lommen` | Local |
| Offer spokes | `/jeugd-voetbaltraining` · `/individuele-techniektraining` · `/prive-voetbaltraining` · `/individuele-voetbaltrainer-venlo` | Intent |
| Conversion | `/proefles-aanvragen` · `/trainingen` · `/pakketten` · `/inschrijven` | Transactional |
| Blog (code only) | `/blog` + 4 posts | **HTTP 404 on production**; absent from live sitemap |

Live sitemap: **17 URLs**, no blog. Code `sitemap.ts` already lists blog — deploy lag.

## Hub-and-spoke vs flat mesh

Internal linking on live guides uses `relatedExcept()` over all 8 `LOCAL_GUIDE_LINKS` → near-complete mesh (every guide → every other guide). Homepage also deep-links into the mesh.

| Metric (skill scorecard adapted) | Target | Observed (live) | Status |
|----------------------------------|--------|-----------------|--------|
| Coverage (planned spokes live) | 100% | Guides live; **blog spokes 0%** | fail |
| Link density | 3+ internal / page | Guides: related rail + body links | pass |
| Orphan pages | 0 | No orphans among live guides | pass |
| Pillar ↔ spoke | bidirectional | Limburg ↔ geo/offer yes; **blog missing** | warn |
| Spoke depth | 1200–1800 words | **117–264 words** | fail |
| Pillar depth | 2500–4000 words | Limburg ~264; homepage thin | fail |
| Cannibalization | 0 conflicts | Overlap risk (see below) | warn |
| Cross-links to blog | spokes ↔ posts | Code links exist; **prod 404** | fail |

## Intended clusters (from live + repo keywords)

### Cluster A — Limburg / naast de club (commercial)
- **Pillar:** `/voetbaltraining-limburg` → “extra voetbaltraining Limburg”
- **Spokes (live):** Venlo, Velden, jeugd, privé, trainer-Venlo
- **Spokes (repo, 404):** `blog/voetbaltraining-limburg-naast-club-kiezen`, `blog/extra-voetbaltraining-venlo-naast-club`

### Cluster B — Venlo trainer / techniek (commercial + informational)
- **Hub pages:** `/individuele-voetbaltrainer-venlo`, `/individuele-techniektraining`
- **Spokes (repo, 404):** `blog/individuele-voetbaltrainer-venlo-kiezen`, `blog/techniektraining-jeugd-venlo`

### Cluster C — Conversion
- Proefles / trainingen / pakketten — linked from guides; not a content pillar.

## SERP overlap (planning signal)

| Seed | Top organic (examples) | Janssen in top results? | Implication |
|------|------------------------|-------------------------|-------------|
| extra voetbaltraining Venlo | VVV-Venlo Voetbalschool, FCV Venlo | No | Same commercial SERP as academies; need differentiation + depth |
| voetbaltraining Limburg | Pro Football Limburg, Me and Soccer, eXtra | No | Regional pillar must out-depth South-Limburg competitors |
| individuele voetbaltrainer Venlo | FCV privé, Pro Football privé, national 1:1 sites | No | Trainer spoke under-ranked; thin page (~175 words) |
| voetbaltraining Velden | SV Velden / IVO club pages | No | Local geo page competes with club NAP, not trainers |
| `site:janssenvoetbalschool.nl` | No results returned | — | Indexation / discovery gap |

**Overlap heuristic:** Venlo “extra training” vs “privé/trainer” share academy competitors → keep as **same cluster, separate URLs** (overlap likely 4–6, not 7–10). Do **not** merge Limburg pillar into Venlo geo page.

## Cannibalization flags

1. Homepage H1 **“Individuele voetbaltraining in Velden”** vs `/voetbaltraining-velden` and `/prive-voetbaltraining` — same head terms on three URLs.
2. `/individuele-voetbaltrainer-venlo` vs `/prive-voetbaltraining` — close commercial intent; differentiate (person/entity vs format) in H1 + first 100 words.
3. Repo blog titles restate live guide primaries (e.g. Venlo naast club) — OK as informational spokes **only if** guides stay transactional hubs and posts link both ways after deploy.

## Priority gaps

1. **Deploy blog + refresh sitemap** so spokes stop 404’ing and enter the index.
2. **Expand guide copy** to spoke targets (1200+); Limburg pillar toward 2500+.
3. **Clarify homepage H1** vs Velden geo page (brand/Limburg vs city).
4. **Promote true hub hierarchy** (Limburg + homepage → spokes) instead of only flat related mesh; add 2–3 contextual body links with keyword anchors to underlinked conversion URLs.
5. **Fill SERP gaps** competitors own: pricing clarity, group size, schedule, age bands, proefles proof — on pillar + Venlo/trainer spokes.

## Recommended link matrix (post-deploy)

```json
{
  "links": [
    {"from": "voetbaltraining-limburg", "to": "voetbaltraining-venlo", "type": "mandatory", "anchor": "voetbaltraining in Venlo"},
    {"from": "voetbaltraining-venlo", "to": "voetbaltraining-limburg", "type": "mandatory", "anchor": "extra voetbaltraining in Limburg"},
    {"from": "blog/extra-voetbaltraining-venlo-naast-club", "to": "voetbaltraining-venlo", "type": "mandatory", "anchor": "voetbaltraining in Venlo"},
    {"from": "voetbaltraining-venlo", "to": "blog/extra-voetbaltraining-venlo-naast-club", "type": "mandatory", "anchor": "extra voetbaltraining in Venlo naast je club"},
    {"from": "blog/individuele-voetbaltrainer-venlo-kiezen", "to": "individuele-voetbaltrainer-venlo", "type": "mandatory", "anchor": "individuele voetbaltrainer in Venlo"},
    {"from": "blog/techniektraining-jeugd-venlo", "to": "individuele-techniektraining", "type": "mandatory", "anchor": "individuele techniektraining"},
    {"from": "blog/voetbaltraining-limburg-naast-club-kiezen", "to": "voetbaltraining-limburg", "type": "mandatory", "anchor": "extra voetbaltraining in Limburg"}
  ]
}
```

## Score breakdown (48/100)

| Factor | Weight | Score |
|--------|--------|-------|
| Hub clarity (Limburg + home) | 20 | 12 |
| Spoke coverage live | 15 | 10 |
| Blog / content depth | 25 | 4 |
| Internal links (no orphans) | 15 | 13 |
| Cannibalization control | 15 | 6 |
| SERP competitiveness of cluster | 10 | 3 |
