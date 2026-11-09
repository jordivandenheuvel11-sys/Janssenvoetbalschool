#!/usr/bin/env bash
# Compare live pages against stored SEO drift baselines (Phase 4 monitoring).
set -euo pipefail

ROOT="$(CDPATH= cd -- "$(dirname -- "$0")/.." && pwd -P)"
export CLAUDE_PLUGIN_ROOT="${CLAUDE_PLUGIN_ROOT:-$ROOT/.agents/skills/seo}"
CLI="$CLAUDE_PLUGIN_ROOT/scripts/claude-seo"

if [[ ! -x "$CLI" && ! -f "$CLI" ]]; then
  echo "claude-seo CLI not found at $CLI" >&2
  exit 1
fi

if ! "$CLI" run google_auth.py --check --json >/dev/null 2>&1; then
  # auth check may fail without keys; still allow drift compare
  true
fi

URLS=(
  "https://www.janssenvoetbalschool.nl/"
  "https://www.janssenvoetbalschool.nl/proefles-aanvragen"
  "https://www.janssenvoetbalschool.nl/voetbaltraining-velden"
  "https://www.janssenvoetbalschool.nl/voetbaltraining-venlo"
  "https://www.janssenvoetbalschool.nl/pakketten"
  "https://www.janssenvoetbalschool.nl/contact"
  "https://www.janssenvoetbalschool.nl/locatie-sportpark-theo-lommen"
  "https://www.janssenvoetbalschool.nl/jeugd-voetbaltraining"
)

echo "SEO drift compare — $(date -u +%Y-%m-%dT%H:%M:%SZ)"
echo

fail=0
for url in "${URLS[@]}"; do
  echo "---- $url"
  if ! "$CLI" run drift_compare.py "$url"; then
    echo "WARN: compare failed for $url" >&2
    fail=1
  fi
  echo
done

exit "$fail"
