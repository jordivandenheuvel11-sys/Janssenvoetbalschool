# Google SEO API setup (Janssen Voetbalschool)

Nodig voor Phase 4 monitoring: PageSpeed Insights, CrUX, Search Console.

## 1. Google Cloud project

1. [console.cloud.google.com](https://console.cloud.google.com) → nieuw project (bijv. `janssen-seo`)
2. Enable APIs:
   - PageSpeed Insights API
   - Chrome UX Report API
   - Google Search Console API
   - (optioneel) Indexing API, GA4 Data API

## 2. API-key (Tier 0 — PSI + CrUX)

1. **APIs & Services → Credentials → Create → API key**
2. Restrict tot PageSpeed Insights + Chrome UX Report
3. Zet lokaal (niet committen):

```bash
mkdir -p ~/.config/claude-seo
cat > ~/.config/claude-seo/google-api.json <<'EOF'
{
  "api_key": "JE_API_KEY",
  "default_property": "sc-domain:janssenvoetbalschool.nl"
}
EOF
```

Of env: `export GOOGLE_API_KEY=...`

## 3. Search Console (Tier 1)

1. Service account JSON key downloaden
2. In GSC: property `janssenvoetbalschool.nl` (of URL-prefix www) → Users → service account e-mail toevoegen (minimaal Full)
3. In config:

```json
{
  "api_key": "JE_API_KEY",
  "service_account_path": "/pad/naar/service_account.json",
  "default_property": "sc-domain:janssenvoetbalschool.nl"
}
```

## 4. Sitemap indienen (eenmalig / check)

In GSC: Sitemaps → `https://www.janssenvoetbalschool.nl/sitemap.xml`

## 5. Verifiëren

```bash
export CLAUDE_PLUGIN_ROOT="$(pwd)/.agents/skills/seo"
"$CLAUDE_PLUGIN_ROOT/scripts/claude-seo" run google_auth.py --check --json
```

Verwacht: `tier` ≥ 0 met `pagespeed` / `crux` available.
