# Site map — gears.run

## Audience

| | Who | Needs |
| --- | --- | --- |
| **P1** | Evaluator (primary) | Decide whether to adopt. Wants the thesis, the cost, and one credible example. |
| **P2** | Reference user | Already adopted. Needs to look one thing up and cite it. |
| **P3** | Agent | Executes gear work against the published spec. |

P1 and P2 want opposite things from the same words. P1 wants argument and a short path to yes or no. P2 wants terse, complete, addressable definitions with stable anchors. A single page serving both serves neither. The site splits into layers instead.

## Layer 1 — the case · `gears.run`

Serves P1. One scroll. Argues; does not specify.

1. Thesis — what Gears claims
2. The problem it solves
3. The four gears at a glance — contract table, one row per gear
4. What adoption requires — cost, prerequisites, what you must already have
5. One worked example, explicitly labeled as an instance
6. Index into Layer 2

## Layer 2 — the specification · `<gear>.gears.run`

Serves P2 and P3. Terse, complete, stable. Specifies; does not argue.

Every gear page carries the same sections in the same order with the same anchor IDs:

| Anchor | Contents |
| --- | --- |
| `#contract` | Purpose, input, output |
| `#artifacts` | Named outputs and the role each plays |
| `#procedure` | Gated steps — Task, Expected Result, Prerequisites to Advance |
| `#intake` | This gear's front door |
| `#handoffs` | Which upstream outputs are legal inputs, and the readiness bar |
| `#operators` | Human, agent, or both |
| `#templates` | Templates and skills that execute the gear |

Fixed order is the point. It makes the four gears comparable to a human and parseable by one routine for an agent. Anchor IDs are permanent once published — P2 will cite them.

## Layer 3 — the machine contract

Constraint: `docs/VISION.md` rules out a Markdown-to-HTML pipeline, and A2 rules out duplicating prose. So there is no `.md` mirror of each page — that would be the exact drift the separation-of-concerns principle warns about.

Instead:

- **Stable heading IDs**, never renamed after publish.
- **Semantic markup** — contracts as `<dl>`, procedures as `<ol>`, so structure survives without styling.
- **`/gears.json`** — the contracts in machine form: gear id, input types, output types, artifact names, handoff edges. This is not a copy of the prose. It is the routing contract, a different artifact with a different role, which is why it is allowed to exist alongside the HTML.
- **`/llms.txt`** at the apex, pointing at the above.

## Framework vs instance

Every block that is specific to khaos-studio carries a visible marker. Test: if it names a tool, org, project board, or URL that a stranger does not have, it is instance, not framework. Layer 1 may show instance material as an example. Layer 2 keeps it out of the contract sections entirely.

## D1 — resolved: Intake vs. intake

Two things share a name. Separating them dissolves the conflict.

| Term | Meaning | Scope |
| --- | --- | --- |
| **Intake** (proper noun) | A named sub-gear of Product, first of three in the Product gear train — Intake → Manage → Observe. Has its own phases: Capture, Screen, Route. | Product only |
| **intake procedure** (common noun) | The front door by which work enters a gear. | Every gear |

Product's intake procedure *is* the Intake sub-gear — Product is the one gear whose front door is formalized into a full sub-gear. Research, Design, and Development each have an intake procedure that is not a sub-gear. Their articles are unpublished as of this writing.

**Consequences for the schema.** The seven sections hold for all four gears. `#intake` appears on every gear page. Product adds one section the others do not have:

| Anchor | Contents | Applies to |
| --- | --- | --- |
| `#gear-train` | The three sub-gears — Intake, Manage, Observe — and the order they turn in | Product only |

On the Product page, `#intake` points into the gear train rather than duplicating it.

**Schema rule established while drafting.** A gear may add at most one gear-specific section, placed after `#contract`. Product adds `#gear-train`. Design adds `#tenets`. Everything else stays uniform. Where a gear's procedure has nested levels — Design's six-phase sprint sits inside gear stage 4 — the nesting lives inside `#procedure` rather than claiming a new anchor.

**Copy correction required.** `home/index.html` and `guides/product/intake/index.html` both assert "Intake isn't a gear." Under this resolution that is wrong: Intake is a sub-gear of Product. The accurate statement is that *intake procedures* are not gears and recur in every gear, while *Intake* is Product's, formalized as a sub-gear. Both files need rewording before publication.

**D2 — sub-pages, not sections.** Manage and Observe get their own pages under `product.gears.run`, matching the existing `guides/product/intake/`. The precedent is already in the repo and sub-pages deploy automatically under the Product Pages project.

## Known gap

The Development gear has no source content in any location surveyed. It is the only gear that must be authored from nothing.
