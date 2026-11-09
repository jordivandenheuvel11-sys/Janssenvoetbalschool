# Agent Skills

Claude SEO skills from [AgriciDaniel/claude-seo](https://github.com/AgriciDaniel/claude-seo) live in `skills/`.

## First-time setup (per machine / Cloud Agent)

```bash
.agents/skills/seo/scripts/claude-seo setup
.agents/skills/seo/scripts/claude-seo doctor
```

## Use in Cursor

Type `/seo` or ask for an SEO audit. Example:

- `/seo audit https://www.janssenvoetbalschool.nl`
- `/seo local https://www.janssenvoetbalschool.nl`
- `/seo schema https://www.janssenvoetbalschool.nl`

Scripts must run via the launcher:

```bash
.agents/skills/seo/scripts/claude-seo run fetch_page.py https://www.janssenvoetbalschool.nl
```
