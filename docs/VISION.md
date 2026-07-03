# VISION — gears-guides

## Purpose
Document the Gears system's 5-gear workflow for operators and agents.

## Principles
- **Shared design system** — Same CSS variables, layout, and navigation pattern across all five gear sites for brand consistency.
- **Static-first, vanilla stack** — Plain HTML, CSS, and vanilla JavaScript only. No frameworks, no build pipelines, no server-side logic. Cloudflare Pages serves static files directly.
- **Content as instruction** — Each gear's `index.html` is the executable spec. What you see is what runs; no hidden compilation step.
- **Gear isolation with optional sharing** — Each gear site is independently deployable to its own subdomain. Components may be shared for brand consistency, but coupling is opt-in, not mandatory.

## Non-Goals
- **No dynamic server logic** — No SSR, edge functions, or backend. Static hosting only.
- **No content management abstraction** — No CMS, no Markdown-to-HTML pipeline. Content is edited directly in each gear's `index.html`.
- **No JavaScript frameworks** — No React, Vue, Svelte, or similar. Vanilla JS only when interactivity is needed.
- **No mandatory DRY abstractions** — Duplication across gear sites is preferred over premature shared component libraries. Sharing is deliberate, not default.

## Success Criteria
- ✅ All 5 gear sites deployed and accessible at their `*.gears.run` subdomains.
- ✅ All gear instruction content authored and published (no "Coming soon" stubs).
- ✅ Cross-gear navigation works; shared visual identity is consistent across all sites.
- ✅ Zero-touch deploy pipeline: pushes to `main` auto-deploy via Cloudflare Pages for all gears.