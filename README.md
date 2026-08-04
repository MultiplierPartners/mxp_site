# Multiplier Partners (MXP) site

Marketing site for [multiplierpartners.ai](https://multiplierpartners.ai) — Gatsby 5, deployed on Netlify.

## Stack

| | |
|---|---|
| Framework | Gatsby 5 (`^5.16.1`) |
| Node | `v20.15.0` (pinned in `.nvmrc`, `package.json` engines, and `netlify.toml`) |
| Styling | Sass (`.sass` indented syntax) — tokens in `src/style/variables.sass` |
| Content | Markdown + `gatsby-transformer-remark` for blog posts |
| CMS | Decap CMS at `/admin` (blog collection only) |
| Hosting | Netlify (`@netlify/plugin-gatsby`) |

## Local development

Node is not required on the host if you use Docker:

```bash
docker compose up
```

Otherwise, with Node 20.15.0 installed:

```bash
npm ci --legacy-peer-deps && npm run develop
```

The dev server runs on <http://localhost:8000>. The CMS proxy (`npx decap-server`) backs `/admin` when `local_backend: true`.

## Scripts

| Script | Purpose |
|---|---|
| `npm run develop` | Clean + start the dev server |
| `npm run develop:fast` | Start without cleaning `.cache` |
| `npm run build` | Clean + production build to `public/` |
| `npm run serve` | Serve the production build |
| `npm run cms` | Local Decap CMS backend proxy |
| `npm run format` | Prettier across js/json/md |

`node scripts/build-blog-data.js` generates `netlify/functions/blog-data.json`, which backs the MCP endpoint function. It runs as part of the Netlify build command.

## Design tokens

The palette mirrors the `--mxp-*` custom properties from the original site:

| Token | Value |
|---|---|
| `$mxp-black` | `#050505` |
| `$mxp-charcoal` | `#111111` |
| `$mxp-deep-gray` | `#1a1a1a` |
| `$mxp-off-white` | `#f5f5f2` |
| `$mxp-muted` | `#b7b7b7` |
| `$mxp-violet` | `#a100ff` |
| `$mxp-green` | `#19e68c` |
| `$mxp-cyan` | `#38d6ff` |

The site is dark-only and uses the native system sans stack — no webfont is loaded.

## Structure

```
src/
  components/   Layout, Navbar, Footer, Sections (shared page primitives), blog components
  data/         site.js (nav, footer, services, solutions), authors.js
  pages/        One .js per top-level route; blog/ holds markdown posts
  style/        variables.sass (tokens), _mxp.sass (everything else)
  templates/    blog-post.js, tags.js
```

Marketing pages are React components (content co-located in `src/data/site.js` and the page files). Blog posts are markdown and editable through Decap CMS.

## Dependency notes

Two pins exist purely to keep the Gatsby 5 build working. Don't remove them casually.

**1. htmlparser2 override**

```json
"overrides": { "sanitize-html": { "htmlparser2": "^9.1.0" } }
```

`gatsby-transformer-remark` `require()`s `sanitize-html`, which otherwise resolves htmlparser2 v10 — ESM-only, so the build fails with `ERR_REQUIRE_ESM`. v9 is the last dual CJS/ESM major.

**2. Direct `graphql` dependency**

```json
"graphql": "^16.14.2"
```

`decap-cms-app` depends on graphql 15 (via `decap-cms-backend-github` → Apollo Client 2). Without this pin npm hoists graphql 15 to the root and Gatsby ends up with a *second*, nested copy at v16. Two copies break `instanceof` checks inside `graphql-compose`, and the build dies with:

```
Cannot create as TypeComposer the following value: GraphQLScalarType({ name: "Date", ... })
```

Declaring graphql 16 directly claims the root slot for Gatsby and lets Decap nest its own 15.
