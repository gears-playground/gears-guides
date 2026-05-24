# gears-guides

Per-gear instruction sites for the [Gears](https://gears.run) system. Each subdirectory under `guides/` is its own static site, deployed to its own subdomain via Cloudflare Pages.

| Subdirectory | Subdomain |
| --- | --- |
| `guides/intake` | https://intake.gears.run |
| `guides/product` | https://product.gears.run |
| `guides/research` | https://research.gears.run |
| `guides/design` | https://design.gears.run |
| `guides/development` | https://development.gears.run |

## Structure

```
guides/
  intake/index.html
  product/index.html
  research/index.html
  design/index.html
  development/index.html
```

Plain static HTML. No build step. Cloudflare Pages serves each subdirectory directly.

## Adding content

Edit the `index.html` for the gear you want to update. Commit to `main`. Cloudflare Pages auto-deploys to the corresponding subdomain.

## Adding a new gear

1. Create `guides/<gear>/index.html` (copy one of the existing files as a template).
2. Create a new Cloudflare Pages project pointed at this repo, root directory `guides/<gear>`.
3. Add `<gear>.gears.run` as a custom domain in the Pages project.

## Local preview

Any static file server works. From the repo root:

```
npx serve guides/intake
```

Or just open the `index.html` in a browser.
