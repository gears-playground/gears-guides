import { defineConfig } from 'vite'

// Local dev preview only. The Cloudflare Pages deploys are unaffected —
// each site is still served from its own directory in prod.
//
// One dev server previews every site at once:
//   Homepage:  http://localhost:5173/                        (served from home/)
//   Product:   http://localhost:5173/guides/product/
//   · Intake:  http://localhost:5173/guides/product/intake/
//   Research:  http://localhost:5173/guides/research/
//   Design:    http://localhost:5173/guides/design/
//   Devlpmt:   http://localhost:5173/guides/development/
//
// The homepage lives in home/, but this plugin serves it at the root path
// so local preview matches production (where home/ IS the site root).
function homepageAtRoot() {
  return {
    name: 'homepage-at-root',
    configureServer(server) {
      server.middlewares.use((req, _res, next) => {
        if (req.url === '/' || req.url === '/index.html') {
          req.url = '/home/index.html'
        }
        next()
      })
    },
  }
}

// DEV ONLY: cross-site links in the HTML point at the production *.gears.run
// domains (correct in prod, where each site is its own subdomain). During local
// preview those links would navigate away to the live site — confusing while
// editing. This rewrites them to the equivalent local paths so navigation stays
// on localhost. The source HTML on disk is untouched; production is unaffected.
function localizeLinks() {
  const map = [
    ['https://product.gears.run/intake', '/guides/product/intake/'],
    ['https://product.gears.run', '/guides/product/'],
    ['https://research.gears.run', '/guides/research/'],
    ['https://design.gears.run', '/guides/design/'],
    ['https://development.gears.run', '/guides/development/'],
    ['https://gears.run', '/'], // apex last so it can't clobber the subdomains above
  ]
  return {
    name: 'localize-gear-links',
    apply: 'serve',
    transformIndexHtml(html) {
      for (const [from, to] of map) html = html.split(from).join(to)
      return html
    },
  }
}

export default defineConfig({
  root: '.',
  plugins: [homepageAtRoot(), localizeLinks()],
  server: {
    open: '/',
  },
})
