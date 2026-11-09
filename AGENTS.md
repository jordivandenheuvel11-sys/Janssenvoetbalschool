<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

<!-- BEGIN:claude-seo -->
# Claude SEO skills

This repo includes the [AgriciDaniel/claude-seo](https://github.com/AgriciDaniel/claude-seo) skill pack under `.agents/skills/` (also linked from `.cursor/skills/` and `.claude/skills/`).

When the user asks for SEO work (audit, technical SEO, schema, local SEO, GEO/AI search, sitemap, content E-E-A-T, etc.), read and follow the matching skill in `.agents/skills/` (hub: `seo`, or specific `seo-*` skills). Prefer explicit `/seo …` requests when the user names a command.

**Runtime launcher (required for Python tools):**

```bash
.agents/skills/seo/scripts/claude-seo run <script.py> [args...]
```

If doctor reports setup is needed:

```bash
.agents/skills/seo/scripts/claude-seo setup
.agents/skills/seo/scripts/claude-seo doctor
```

Do not call bundled SEO scripts with a bare `python` interpreter.
<!-- END:claude-seo -->
