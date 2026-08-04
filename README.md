# Multiplier Partners

The website for [Multiplier Partners](https://multiplierpartners.ai) — an advisory practice focused on identity, governance, and machine trust for autonomous AI agents.

This repository is open source. You are welcome to read it, learn from it, run it locally, or borrow patterns from it.

[![Site](https://img.shields.io/badge/site-multiplierpartners.ai-a100ff)](https://multiplierpartners.ai)
[![Built with Gatsby](https://img.shields.io/badge/built%20with-Gatsby%205-663399)](https://www.gatsbyjs.com/)
[![Deploys on Netlify](https://img.shields.io/badge/deploys%20on-Netlify-00c7b7)](https://www.netlify.com/)

---

## Contents

- [What this is](#what-this-is)
- [Quick start](#quick-start)
- [Editing content](#editing-content) — start here if you are not a developer
- [Project structure](#project-structure)
- [The blog MCP server](#the-blog-mcp-server)
- [Design system](#design-system)
- [Deployment](#deployment)
- [Documentation](#documentation)
- [Contributing](#contributing)
- [License](#license)

---

## What this is

A statically generated marketing site. Every page is built ahead of time into plain HTML, so there is no server to run, no database, and nothing to patch at 2am.

| | |
| --- | --- |
| **Framework** | [Gatsby 5](https://www.gatsbyjs.com/) (React 19) |
| **Language** | JavaScript — no TypeScript, no build-time type checking |
| **Styling** | [Sass](https://sass-lang.com/) using the indented `.sass` syntax |
| **Content** | React components for marketing pages, Markdown for blog posts |
| **Hosting** | [Netlify](https://www.netlify.com/), deployed automatically from `main` |
| **DNS** | Cloudflare (registrar: Porkbun) |
| **Node** | `20.15.0`, pinned in `.nvmrc` and `netlify.toml` |

There is one serverless function: an [MCP server](#the-blog-mcp-server) that exposes the blog to AI assistants.

---

## Quick start

You need [Node.js 20.15.0](https://nodejs.org/) and [Git](https://git-scm.com/). If you would rather not install Node, see [Using Docker](#using-docker) below.

```bash
git clone https://github.com/MultiplierPartners/mxp_site.git
cd mxp_site
npm ci --legacy-peer-deps
npm run develop
```

Open <http://localhost:8000>. The site rebuilds as you save files.

> **Why `--legacy-peer-deps`?** A few Gatsby plugins have not updated their declared React version yet. The flag tells npm to install anyway. It is expected, not a workaround for a broken tree.

### Using Docker

No Node installation required — only [Docker](https://www.docker.com/):

```bash
docker compose up
```

This runs the exact Node version Netlify uses, then serves on <http://localhost:8000>.

### Commands

| Command | What it does |
| --- | --- |
| `npm run develop` | Start the dev server with live reload |
| `npm run develop:fast` | Same, but skips clearing the cache — quicker, occasionally stale |
| `npm run build` | Produce the production site in `public/` |
| `npm run serve` | Serve an already-built site, to check it before deploying |
| `npm run clean` | Delete Gatsby's cache — the first thing to try when something is odd |
| `npm run format` | Format all code with Prettier |

---

## Editing content

**You do not need to be a developer to change words on this site.** Every piece of copy lives in a plain text file you can edit on GitHub in your browser.

### Publishing a blog post

1. Create a file in `src/pages/blog/` named `YYYY-MM-DD-short-title.md`.
2. Paste this at the top, between the `---` lines, and edit the values:

```markdown
---
templateKey: blog-post
title: "Your title here"
date: 2026-08-04T00:00:00.000Z
author: Matt Teeple
description: "One or two sentences. Shows on the blog list and in Google results."
featuredpost: true
category: The AI Edge
tags:
  - The AI Edge
  - Agentic AI
---

Write the post here in Markdown. Use ## for section headings.
```

3. Commit the file. Netlify builds and publishes it automatically — usually within two minutes.

The `##` headings become the table of contents on the left of the post. Nothing else is required.

### Changing navigation, footer, services, or solutions

All of it is in **`src/data/site.js`**:

| To change… | Edit this |
| --- | --- |
| Menu items across the top | `navLinks` |
| Contact email and LinkedIn URL | `contact` |
| The purple button label and link | `ctaLabel`, `ctaTo` |
| The seven service cards | `services` |
| The nine solution cards | `solutions` |
| Footer columns and blurb | `footerColumns`, `footerBlurb` |

### Changing page copy

Each page owns its own text. Open the file, find the sentence, edit it:

| Page | File |
| --- | --- |
| Home | `src/pages/index.js` |
| Services | `src/pages/services.js` |
| Solutions | `src/pages/solutions.js` |
| AI Security | `src/pages/ai-security.js` |
| Insights | `src/pages/insights.js` |
| The Startup Playbook | `src/pages/enterprise-ai-playbook.js` |
| About | `src/pages/about.js` |
| Contact | `src/pages/contact.js` |
| Individual service pages | `src/pages/services/<name>.js` |
| Individual solution pages | `src/pages/solutions/<name>.js` |

Text sits inside quotes or between `>` and `<`. Change the words, leave the punctuation and brackets alone, and commit.

### Site title, description, and social preview

`site-meta.js` in the project root. One file, used for both the page metadata and the preview card that appears when someone shares a link.

---

## Project structure

```
mxp_site/
├── site-meta.js            Site title, description, canonical URL, keywords
├── gatsby-config.js        Which Gatsby plugins are enabled
├── gatsby-node.js          Builds blog/tag pages; exports Markdown copies of posts
├── gatsby-browser.js       Scroll-to-top behaviour on navigation
├── netlify.toml            Build command, headers, redirects
├── netlify/functions/
│   └── mcp.mjs             MCP server for the blog
├── scripts/
│   └── build-blog-data.js  Generates the blog index the MCP server reads
├── src/
│   ├── components/         Shared UI (Layout, Navbar, Footer, Sections, …)
│   ├── data/
│   │   ├── site.js         Navigation, footer, services, solutions, contact
│   │   └── authors.js      Blog author profiles
│   ├── pages/              One file per URL; blog/ holds Markdown posts
│   ├── style/
│   │   ├── variables.sass  Colours, spacing, breakpoints
│   │   └── _mxp.sass       Everything else
│   └── templates/          Layouts for blog posts and tag pages
└── static/                 Files copied verbatim to the site root
```

Marketing pages are React components with their copy alongside them. Blog posts are Markdown. Adding a file to `src/pages/` creates a page at the matching URL.

---

## The blog MCP server

The blog is available to AI assistants through the [Model Context Protocol](https://modelcontextprotocol.io/), so a model can read the posts directly instead of scraping the rendered page.

**Endpoint:** `https://multiplierpartners.ai/mcp`

### Tools

| Tool | Arguments | Returns |
| --- | --- | --- |
| `listBlogs` | none | Every post with title, date, author, category, description, tags, and URL |
| `getBlog` | `slug` | The full Markdown body of one post |

### Connecting

**Claude Code**

```bash
claude mcp add --transport http mxp-blog https://multiplierpartners.ai/mcp
```

**Claude Desktop, Cursor, VS Code** — add to your MCP configuration:

```json
{
  "mcpServers": {
    "mxp-blog": {
      "url": "https://multiplierpartners.ai/mcp"
    }
  }
}
```

Or use the **Copy page** menu on any blog post, which offers one-click install links for Cursor and VS Code.

### Checking it works

```bash
curl https://multiplierpartners.ai/mcp
```

```bash
curl -X POST https://multiplierpartners.ai/mcp \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json, text/event-stream' \
  -d '{"jsonrpc":"2.0","id":1,"method":"tools/list","params":{}}'
```

### Markdown copies

Every post is also published as plain Markdown next to its HTML page:

```
https://multiplierpartners.ai/blog/2026-06-15-the-roi-reckoning.md
```

These are generated at build time by `gatsby-node.js` and are what the **Copy page** button copies to your clipboard.

---

## Design system

The palette and type scale were measured from the original site so the rebuild matches it exactly. Tokens live in `src/style/variables.sass`.

| Token | Value | Used for |
| --- | --- | --- |
| `$mxp-black` | `#050505` | Page background |
| `$mxp-charcoal` | `#111111` | Cards |
| `$mxp-deep-gray` | `#1a1a1a` | Form inputs |
| `$mxp-off-white` | `#f5f5f2` | Body text |
| `$mxp-muted` | `#b7b7b7` | Secondary text, eyebrows |
| `$mxp-violet` | `#a100ff` | Primary accent |
| `$mxp-green` | `#19e68c` | Secondary accent |
| `$mxp-cyan` | `#38d6ff` | Tertiary accent |

The site is dark-only and uses the operating system's native sans-serif — no webfont is downloaded, which keeps it fast.

**Type scale at desktop:** hero `72px`, page titles `60px`, section headings `48px` — all at weight 600 with `-0.025em` letter-spacing. Body copy is `18px` capped at `672px` wide; headings cap at `896px`.

---

## Deployment

Every push to `main` triggers a Netlify build. There is no manual deploy step.

```
npm ci --legacy-peer-deps && node scripts/build-blog-data.js && npm run build
```

`netlify.toml` also sets security headers (HSTS, `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`) and 301 redirects that preserve the pre-migration URLs.

### The contact form

Handled by [Netlify Forms](https://docs.netlify.com/forms/setup/). Netlify detects the form in the built HTML at deploy time — no API keys, no backend.

Submissions appear under **Forms** in the Netlify dashboard. Email alerts are configured separately under **Forms → Form notifications**. A hidden honeypot field catches most bots.

### DNS

The domain is registered at Porkbun with DNS served by Cloudflare, whose records point at Netlify. Cloudflare's proxy (the orange cloud) stays **off** for the site records — with it on, Netlify cannot validate the domain to issue its TLS certificate.

> **Note on HSTS.** The site sends `Strict-Transport-Security: max-age=63072000`. Browsers will refuse plain HTTP to this domain for two years after their last visit. This is intentional and correct, but it means HTTPS must stay working — there is no fallback.

---

## Documentation

| Guide | Read it when |
| --- | --- |
| [Style guide](docs/style-guide.md) | Writing or editing any content — voice, Markdown conventions, where copy lives |
| [MCP server](docs/mcp-server.md) | Connecting an AI assistant, or changing the tools it exposes |

---

## Contributing

Issues and pull requests are welcome.

1. Fork the repository and create a branch.
2. Make your change, following the [style guide](docs/style-guide.md).
3. Run `npm run format`, then `npm run build` to confirm it still builds.
4. Open a pull request describing what changed and why.

Netlify builds a preview for every pull request, so you get a working URL to review before anything merges.

All Markdown in this repository is [GitHub Flavored Markdown](https://github.github.com/gfm/).

### Two dependency pins

Both exist to keep the build working. Don't remove them casually.

**`graphql` is a direct dependency.** Gatsby's schema build fails if more than one copy of `graphql` ends up in the tree — `graphql-compose` uses `instanceof` checks, so a second nested copy produces `Cannot create as TypeComposer … GraphQLScalarType("Date")`. Declaring it directly keeps Gatsby's copy at the root.

**`htmlparser2` is pinned to `^9` under `sanitize-html`.** `gatsby-transformer-remark` uses `require()` on `sanitize-html`, which otherwise resolves htmlparser2 v10 — ESM-only, so the build fails with `ERR_REQUIRE_ESM`. v9 is the last dual CJS/ESM major.

### If a build fails

Netlify emails whoever pushed, and **the previous version stays live** — visitors never see a broken site. Check the deploy log in Netlify, fix and push again, or roll back under **Deploys → Publish deploy** on the last good build.

The most common cause is a `package-lock.json` that no longer matches `package.json`. `npm ci` requires them to agree, so commit the lockfile whenever you change dependencies.

---

## License

Copyright © Multiplier Partners.

The **source code** in this repository is open source and free to read, run, and learn from.

The **written content** — blog posts, page copy, the Multiplier Partners name, and the MXP logo — is not covered by that and remains the property of Multiplier Partners. Please don't republish the articles or present the branding as your own.

> **No `LICENSE` file has been added yet.** Until one is, "open source" here is a statement of intent rather than a grant of rights. MIT is the usual choice for a project like this — adding a `LICENSE` file makes the terms explicit and enforceable.
