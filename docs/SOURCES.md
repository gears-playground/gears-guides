# Source register

Every known piece of raw material for gears.run, and what happens to it.

**Layer** — `Framework` portable, publishable · `Instance` khaos-studio specific, usable only as labeled example · `Visual` design system · `Superseded` reflects the retired five-gear linear model.

**Disposition** — `Extract` mine for framework content · `Link` cite in place, never copy · `Example` publish as labeled instance · `Exclude` not for publication · `Pending` needs a decision or access.

## Apple Notes

Notes interleave Gears content with unrelated personal material in the same note. No bulk import. Extract per fragment, reviewed by Andrew before it lands.

| Source | Idea it carries | Target | Layer | Disposition |
| --- | --- | --- | --- | --- |
| `Value of Mapping Gears Framework (7/10/26)` | Transportability as the goal; framework is the content for gears.run | Layer 1 thesis | Framework | Extract |
| `Separation of Concerns for Artifacts` | Artifacts have explicit non-competing roles; recreating causes drift | Layer 2 `#artifacts`, all gears | Framework | Extract |
| `Design Gear (7/10/26)` | Design gear detail | design `#procedure` | Unreviewed | Pending |
| `✏️ Design Gear` | Design gear, earlier pass | design `#contract` | Unreviewed | Pending |
| `🔬 Research Gear` | Research gear definition | research `#contract` | Unreviewed | Pending |
| `🚀 Manage II` | Unknown — possible retired gear | — | Unreviewed | Pending |
| `Atomic FB loops` | Atomic feedback loops; relates to `Research/Atoms` | research `#artifacts` | Unreviewed | Pending |
| `probes are like thumb drives` | Research probes | research `#procedure` | Unreviewed | Pending |
| `I think you can do a V2 of the flow chart…` | Diagram versioning | A4 diagram audit | Unreviewed | Pending |
| ~20 dated notes, 06/09–08/15 | Unknown | — | Unreviewed | Pending |

## Substack — `simplequality.co`

Publication: *Simple. Quality. UX & Product Design*. Canonical where they are. gears.run links; it does not restate. The essays argue the case and feed Layer 1. Layer 2 specifications get authored fresh — assembling a spec from essay excerpts reintroduces drift, because essays argue and specs define.

| Source | Idea it carries | Target | Layer | Disposition |
| --- | --- | --- | --- | --- |
| `Atomic Feedback Loops` (May 2026) | The basic unit powering iteration; why agents make it visible. Pairs with the `Atomic FB loops` note and `Research/Atoms` | Layer 1; research `#artifacts` | Framework | Link + Extract |
| `The Product Gear Train` (Dec 2025) | Product is a gear train of three sub-gears — Intake, Manage, Observe. Intake has phases Capture, Screen, Route | product `#gear-train`, `#intake`; manage and observe sub-pages | Framework | Extract |
| `Can teams work like gears?` (May 2025) | Origin essay introducing the framework | Layer 1 thesis | Framework | Link |
| `Has Figma become a problem?` (Apr 2025) | Tooling critique; adjacent to the framework | Layer 1 further reading | Adjacent | Link |

## Figma and FigJam

Authenticated as `drwzy`. Full seat on two relevant teams: **Simple. Quality.** (`team::795745642900527817`) and **Khaos** (`team::825062191465858252`). The Khaos key matches the FigJam project URL cited in `../Design/Design-Gear.md`.

Canonical source stays in Figma. Publication needs SVG exports committed to this repo, since there is no build step. FigJam boards are working artifacts and are presumed not publishable without redraw.

| Source | Idea it carries | Target | Layer | Disposition |
| --- | --- | --- | --- | --- |
| Khaos team, project `113128285` | Design sprint FigJam boards | Possibly none | Instance | Pending |
| Remaining Figma files — keys needed | Designed diagrams | Layers 1 and 2 | Pending | Pending |
| Remaining FigJam boards — keys needed | Discovery and workshop boards | Possibly none | Instance | Pending |

**Triage rule**, so disorganization is not a blocker. For each file, one pass, three buckets:
- **Publish** — a designed diagram explaining the framework, still accurate. Export SVG.
- **Redraw** — the idea is right, the artifact is a working board. Rebuild as inline SVG in the site's visual language.
- **Archive** — superseded, instance-specific, or duplicated. Record the decision, do not delete.

## Sibling repositories

| Source | Idea it carries | Target | Layer | Disposition |
| --- | --- | --- | --- | --- |
| `../Design/Design-Gear.md` | Six-stage gated gear procedure; the Task / Expected Result / Prerequisites schema | design `#procedure` | Instance | Extracted |
| `../Design/Design-Tenets.md` | Six prioritized tenets, each with a validation question. The practice is framework; the six are khaos-studio's | design `#tenets` | Instance | Extracted |
| `../Design/design-sprint.md` | Six sprint phases, Lo-Fi through Remote Research | design `#procedure` | Framework | Extracted |
| `../Design/DESIGN.md` | Khaos product design system — brand, color, type. Not Design-gear content | — | Instance | Exclude |
| `../TEMPLATE_Design-Sprint-Plan.md` | Sprint plan shape; per-phase schema | design `#templates` | Framework | Extracted |
| `../Design/Design Sprint Summaries/` | Completed sprints | Layer 1 worked example | Instance | Example |
| `../Research/Core Documents/research-cycle.md`, `research-areas.md` | Research cycle and scope | research `#procedure` | Unreviewed | Pending |
| `../Research/Core Documents/Methodologies/` | Method definitions | research `#artifacts` | Unreviewed | Pending |
| `../Research/templates/TEMPLATE_Overall-Research-Plan.md` | Research plan shape | research `#templates` | Framework | Extract |
| `../Research/README.md` | Research Intake Request process | research `#intake` | Instance | Extract |
| `../Research/Atoms/`, `Research Reports/` | Research outputs | research `#artifacts` | Unreviewed | Pending |
| `../Product/product-artifacts-overview.md` | Product artifact roles | product `#artifacts` | Unreviewed | Extract |
| `../Product/templates/*.yaml,*.md` | ux-request, product-requirements, user-stories, product-brief, research-intake-request | product `#templates` | Framework | Extract |
| `../Product/citation-convention.md` | Evidence citation rules | cross-gear | Framework | Extract |
| `../Product/best-practices/`, `PRDs/` | PRD standards and examples | product `#artifacts` | Instance | Extract |
| `../Product/README.md` | GitHub Actions PRD automation | product `#operators` | Instance | Example |
| `../Development/README.md` | Empty — one heading | development, all sections | — | Gap |
| `../06_sprint_summary_v2.md` | Design Sprint Summary template | design `#templates` | Framework | Extract |
| `../gears_guide/index.md` | Five-gear linear model, holds the gears.run CNAME | — | Superseded | Exclude |
| `../blog/` | One welcome post | — | — | Exclude |

## Skills — the transport mechanism

Per `Value of Mapping Gears Framework`, skills are how the framework moves outside the playground. They belong in each gear's `#templates` section.

| Source | Gear | Layer | Disposition |
| --- | --- | --- | --- |
| `../Product/skills/prd-v1-generator`, `user-scenario-generator` | Product | Framework | Extract |
| `../Design/skills/design-brief` | Design | Framework | Extract |
| Installed: `design-plan`, `design-report`, `research-plan`, `research-reporter`, `desk-researcher`, `ux-case-study` | Design, Research | Framework | Extract |

## Visual

| Source | Idea it carries | Target | Layer | Disposition |
| --- | --- | --- | --- | --- |
| `style-guide/index.html` | Bauhaus design system, gear signature colors | Site-wide restyle | Visual | Extract |
| `colors.json` | Figma color variable export | Token source | Visual | Link |

## Blocked

- **Development gear** — no source material exists anywhere surveyed. Must be authored from nothing.
- **Figma and FigJam** — file or project URLs needed before diagrams can be inventoried. Access is confirmed; only the pointers are missing.
- **Intake procedures for Research, Design, and Development.** Each gear has one; the articles are unpublished. Product's is the only one with a written source. This blocks `#intake` on three of four gear pages.
- **Copy correction.** `home/index.html` and `guides/product/intake/index.html` assert "Intake isn't a gear," which D1 supersedes. See `SITE-MAP.md`.
