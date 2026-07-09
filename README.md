# gears-guides

The homepage and per-gear instruction sites for the [Gears](https://gears.run) system. Each site is plain static HTML in its own directory, deployed to its own domain via Cloudflare Pages.

Gears has **four** gears — Product, Research, Design, and Development. They are non-linear: engage whichever gear the work demands, in any order. Intake is **not** a gear; it's a process that happens inside each gear (e.g. Product's intake lives at `product.gears.run/intake`).

| Directory | Domain |
| --- | --- |
| `home` | https://gears.run |
| `guides/product` | https://product.gears.run |
| `guides/product/intake` | https://product.gears.run/intake |
| `guides/research` | https://research.gears.run |
| `guides/design` | https://design.gears.run |
| `guides/development` | https://development.gears.run |

## Structure

```
home/index.html               # homepage → gears.run
guides/
  product/index.html
  product/intake/index.html   # Product's intake process → product.gears.run/intake
  research/index.html
  design/index.html
  development/index.html
```

Plain static HTML. No build step. Cloudflare Pages serves each directory directly. Because each gear's Pages project serves its whole subtree, a gear's sub-pages (like `product/intake`) deploy automatically under that gear's domain — no separate project needed.

## Local preview

A [Vite](https://vite.dev) dev server previews every site at once, with live reload on save. From the repo root:

```
npm install   # first time only
npm run dev
```

| Site | Local URL |
| --- | --- |
| Homepage | http://localhost:5173/ |
| Product | http://localhost:5173/guides/product/ |
| Product · Intake | http://localhost:5173/guides/product/intake/ |
| Research | http://localhost:5173/guides/research/ |
| Design | http://localhost:5173/guides/design/ |
| Development | http://localhost:5173/guides/development/ |

Vite is used for **local preview only** — it has no effect on the production deploys, which serve the raw HTML directly. Cross-gear links point at the production `*.gears.run` domains, so clicking them in local preview jumps to production.

## Adding content

Edit the `index.html` for the site you want to update (`home/index.html` for the homepage, `guides/<gear>/index.html` for a gear). Commit to `main`. Cloudflare Pages auto-deploys to the corresponding domain.

## Adding a new gear

1. Create `guides/<gear>/index.html` (copy one of the existing files as a template).
2. Create a new Cloudflare Pages project pointed at this repo, root directory `guides/<gear>`.
3. Add `<gear>.gears.run` as a custom domain in the Pages project.
