# MCP server

The blog is exposed to AI assistants over the [Model Context Protocol](https://modelcontextprotocol.io/), so a model can read posts as structured data instead of scraping rendered HTML.

**Endpoint:** `https://multiplierpartners.ai/mcp`

---

## Contents

- [What MCP is](#what-mcp-is)
- [Tools](#tools)
- [Connecting an assistant](#connecting-an-assistant)
- [The Copy page menu](#the-copy-page-menu)
- [Markdown copies](#markdown-copies)
- [Testing the endpoint](#testing-the-endpoint)
- [How it is built](#how-it-is-built)
- [Adding a tool](#adding-a-tool)
- [Security notes](#security-notes)

---

## What MCP is

MCP is an open standard for connecting AI assistants to external data. A model that supports it can call listed "tools" to fetch information on demand.

This site runs a small read-only MCP server exposing the blog. An assistant connected to it can answer questions about the posts, quote them accurately, and cite real URLs — without guessing.

---

## Tools

### `listBlogs`

No arguments. Returns every post as JSON:

```json
[
  {
    "title": "The ROI Reckoning",
    "date": "2026-06-15",
    "author": "Matt Teeple",
    "category": "The AI Edge",
    "description": "Why Agentic AI Ambitions Are Hitting a Wall…",
    "slug": "2026-06-15-the-roi-reckoning",
    "url": "https://multiplierpartners.ai/blog/2026-06-15-the-roi-reckoning/",
    "tags": ["The AI Edge", "Agentic AI"],
    "featuredpost": true
  }
]
```

### `getBlog`

| Argument | Type | Required |
| --- | --- | --- |
| `slug` | string | Yes |

Returns the full Markdown body of one post, preceded by its title, author, date, category, tags, and canonical URL. Call `listBlogs` first to discover valid slugs.

An unknown slug returns an error result naming the problem rather than throwing.

---

## Connecting an assistant

### Claude Code

```bash
claude mcp add --transport http mxp-blog https://multiplierpartners.ai/mcp
```

### Claude Desktop, Cursor, VS Code, and other clients

Add to your MCP configuration file:

```json
{
  "mcpServers": {
    "mxp-blog": {
      "url": "https://multiplierpartners.ai/mcp"
    }
  }
}
```

The server is stateless HTTP. There is no authentication, no API key, and no session to manage.

### One-click install

Every blog post has a **Copy page** button with **Connect to Cursor** and **Connect to VS Code** entries that hand the endpoint to your editor directly.

---

## The Copy page menu

`src/components/PageActions.js` renders a split button on blog posts and the blog index:

| Action | What it does |
| --- | --- |
| **Copy page** | Fetches the post's Markdown and copies it to your clipboard |
| **View as Markdown** | Opens the plain-text source |
| **Open in Claude / ChatGPT / Perplexity** | Opens that assistant pre-filled with a prompt pointing at this page |
| **Copy MCP server** | Copies `https://multiplierpartners.ai/mcp` |
| **Connect to Cursor / VS Code** | Editor deep links that install the server |

On the blog index the page-specific actions are hidden and only the AI and MCP actions render.

> Editor deep-link formats are set by Cursor and Microsoft and do change. If one stops working, the **Copy MCP server** action and the JSON config above always work.

---

## Markdown copies

Every post is published as plain Markdown beside its HTML page:

```
https://multiplierpartners.ai/blog/2026-06-15-the-roi-reckoning.md
```

Each file starts with a short header — title, author, date, canonical source URL — then the body.

These are written by `onPostBuild` in `gatsby-node.js`, which reads `src/pages/blog/*.md` and writes into `public/blog/`. They are what **Copy page** copies, and a convenient target for any tool that just wants clean text.

---

## Testing the endpoint

A `GET` returns server info:

```bash
curl https://multiplierpartners.ai/mcp
```

```json
{
  "name": "mxp-blog",
  "version": "1.0.0",
  "description": "MCP server for multiplierpartners.ai blog content. Tools: listBlogs, getBlog"
}
```

List the tools:

```bash
curl -X POST https://multiplierpartners.ai/mcp \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json, text/event-stream' \
  -d '{"jsonrpc":"2.0","id":1,"method":"tools/list","params":{}}'
```

Call one:

```bash
curl -X POST https://multiplierpartners.ai/mcp \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json, text/event-stream' \
  -d '{"jsonrpc":"2.0","id":2,"method":"tools/call","params":{"name":"listBlogs","arguments":{}}}'
```

Responses come back as Server-Sent Events (`event: message` followed by `data:`). That is normal for the streamable HTTP transport — the `Accept` header must include `text/event-stream`.

---

## How it is built

```
src/pages/blog/*.md
        ↓  scripts/build-blog-data.js   (runs before gatsby build)
netlify/functions/blog-data.json
        ↓  bundled via netlify.toml included_files
netlify/functions/mcp.mjs               served at /mcp
```

**`scripts/build-blog-data.js`** parses each post's frontmatter and body into a JSON index.

**`netlify/functions/mcp.mjs`** is a Netlify Functions v2 handler using `@modelcontextprotocol/sdk`. It declares its own route:

```js
export const config = { path: "/mcp" };
```

so no redirect is needed in `netlify.toml`. It creates a fresh stateless server per request — Netlify functions do not hold state between invocations.

`netlify.toml` bundles the JSON alongside the function:

```toml
[functions]
  node_bundler = "nft"
  included_files = ["netlify/functions/blog-data.json"]
```

`blog-data.json` is generated and git-ignored. If you run the function locally, run `node scripts/build-blog-data.js` first.

---

## Adding a tool

In `createServer()` inside `mcp.mjs`:

```js
server.tool(
  "searchBlogs",
  "Search blog posts by keyword across titles and bodies",
  { query: z.string().describe("Search term") },
  async ({ query }) => {
    const hits = blogData.filter((p) =>
      (p.title + p.body).toLowerCase().includes(query.toLowerCase()),
    );
    return {
      content: [{ type: "text", text: JSON.stringify(hits, null, 2) }],
    };
  },
);
```

Arguments are validated with [Zod](https://zod.dev/). Descriptions matter — they are how a model decides when to call your tool, so be specific.

---

## Security notes

- **Read-only.** The tools only read a JSON file baked in at build time. There is no write path, no database, and no user input reaching a query.
- **Public data only.** Everything the server exposes is already published on the website.
- **No authentication,** because there is nothing to protect. Do not add tools that expose anything not already public without adding auth first.
- **Zod validates arguments** before use.
- **Errors are generic.** Unexpected failures return a JSON-RPC error without internal detail; specifics go to Netlify's function logs.
