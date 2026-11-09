# SEO Phase 4 — Monitoring

Vastgelegd op **9 nov 2026 (Europe/Amsterdam)** voor `https://www.janssenvoetbalschool.nl`.

## Wat is gedaan

1. **Drift baselines** voor kern-URL’s (zie `baselines/`)
2. **Google API-status**: nog geen credentials in deze omgeving (tier −1)
3. **Maandelijks playbook** hieronder

## Drift baselines (huidige “known good”)

| Pagina | H1 | Canonical |
|--------|----|-----------|
| `/` | Train, ontwikkel en beheers elke vaardigheid. | `https://www.janssenvoetbalschool.nl` |
| `/proefles-aanvragen` | Proefles aanvragen | …/proefles-aanvragen |
| `/voetbaltraining-velden` | Voetbaltraining in Velden | …/voetbaltraining-velden |
| `/voetbaltraining-venlo` | Voetbaltraining in Venlo | …/voetbaltraining-venlo |
| `/pakketten` | Pakketten & tarieven | …/pakketten |
| `/contact` | Contact | …/contact |
| `/locatie-sportpark-theo-lommen` | Sportpark Theo Lommen, Velden | …/locatie… |
| `/jeugd-voetbaltraining` | Jeugd voetbaltraining met persoonlijke aandacht | …/jeugd… |

Lokaal SQLite (tooling): `~/.cache/claude-seo/drift/baselines.db`  
Repo-kopieën: `seo-monitoring/baselines/*.json`

### Opnieuw vergelijken (na deploy)

```bash
export CLAUDE_PLUGIN_ROOT="$(pwd)/.agents/skills/seo"
./.agents/skills/seo/scripts/claude-seo" setup   # eenmalig / indien nodig
./scripts/seo-drift-check.sh
```

Of handmatig:

```bash
"$CLAUDE_PLUGIN_ROOT/scripts/claude-seo" run drift_compare.py https://www.janssenvoetbalschool.nl/
"$CLAUDE_PLUGIN_ROOT/scripts/claude-seo" run drift_history.py https://www.janssenvoetbalschool.nl/
```

## Google APIs (PSI / CrUX / GSC)

Nog **niet** gekoppeld in deze Cloud Agent. Volg `GOOGLE-SETUP.md`.

Zodra er een API-key is:

```bash
"$CLAUDE_PLUGIN_ROOT/scripts/claude-seo" run google_auth.py --check --json
"$CLAUDE_PLUGIN_ROOT/scripts/claude-seo" run pagespeed_check.py https://www.janssenvoetbalschool.nl/ --json
```

## Maandelijks checklist

- [ ] `./scripts/seo-drift-check.sh` — CRITICAL/WARNING diffs bekijken
- [ ] Google Search Console: coverage, sitemap, queries Velden/Venlo
- [ ] PageSpeed / CrUX (mobile) op homepage
- [ ] Google Business Profile: foto’s, posts, reviews, NAP-check
- [ ] Citations NAP gelijk houden (Apple / Bing / Facebook) — zie `/locatie-sportpark-theo-lommen`
- [ ] Optioneel: nieuwe drift baseline als content expres is gewijzigd
