# Style guide

Conventions for writing and editing content on this site — voice, formatting, and where things live.

**You do not need to be a developer to change words on this site.** Everything is plain text you can edit on GitHub in your browser.

---

## Contents

- [Editing in your browser](#editing-in-your-browser)
- [Writing style](#writing-style)
- [Markdown standard](#markdown-standard)
- [Publishing a blog post](#publishing-a-blog-post)
- [Where each piece of copy lives](#where-each-piece-of-copy-lives)
- [Images](#images)
- [Rules that avoid broken builds](#rules-that-avoid-broken-builds)

---

## Editing in your browser

1. Open the file on GitHub.
2. Click the **pencil icon**.
3. Make the change.
4. Write a short note and click **Commit changes**.

Netlify rebuilds and publishes automatically, usually within two minutes. If a build fails, the previous version stays live — visitors never see a broken site, and GitHub keeps every earlier version.

---

## Writing style

The voice across the site is direct, senior, and specific. A few conventions keep it consistent.

**Write plainly.** Short sentences. Concrete nouns. If a sentence works without a word, remove it.

**Prefer specifics over adjectives.** "88% of agentic AI pilots never reach production at scale" earns more trust than "most pilots fail."

**Avoid marketing filler.** No "cutting-edge", "revolutionary", "seamless", "leverage" as a verb, or "solutions" used as a synonym for nothing in particular.

**Headings are sentence case and usually end in a full stop.** This is a deliberate house style — `Why this work exists.` not `Why This Work Exists`.

**Eyebrows are short and uppercase.** Two or three words: `The problem`, `Machine trust`, `Engagement approach`. The CSS applies the capitals; write them in sentence case.

**Use the em dash sparingly** — like this, with spaces around it, for a genuine aside.

**Numerals for figures**, including under ten, where the number is the point: `3 posts`, `12–24 months`. Use an en dash for ranges.

**Spell out the firm name in body copy** — "Multiplier Partners", not "MXP". `MXP` is for the logo and short labels only.

---

## Markdown standard

All Markdown in this repository — blog posts, README, these docs — is **[GitHub Flavored Markdown](https://github.github.com/gfm/)**. That is what GitHub renders and what the site's Markdown parser expects, so it's the single standard.

### Formatting conventions

| Element | Convention |
| --- | --- |
| Headings | `##` and `###` only in posts — the title comes from frontmatter |
| Emphasis | `**bold**` and `*italic*`; never underscores |
| Lists | `-` for bullets, `1.` for numbered |
| Code | Fenced with triple backticks, with a language tag |
| Tables | GFM pipe tables, with a `---` separator row |
| Links | `[text](url)` — never bare URLs in prose |
| Line length | Don't hard-wrap paragraphs; let them flow |

### Examples

```markdown
## A section heading

Normal paragraph text. Leave a blank line between paragraphs.

**Bold** and *italic*.

- A bullet
- Another bullet

> A pull quote, for emphasis.

[Link text](https://example.com) and `inline code`.

| Column | Another |
| --- | --- |
| Value | Value |
```

Fenced code blocks should name their language so syntax highlighting works:

````markdown
```bash
npm run develop
```
````

### What GFM gives you

Tables, fenced code blocks, strikethrough (`~~text~~`), task lists, and autolinked URLs. Raw HTML mostly works but avoid it — it bypasses the site's styling and breaks the plain-Markdown copies used by AI assistants.

---

## Publishing a blog post

Create a file in `src/pages/blog/` named with the date first:

```
2026-08-04-why-agent-identity-matters.md
```

The filename becomes the URL, so keep it lowercase with hyphens. That example publishes at `/blog/2026-08-04-why-agent-identity-matters/`.

### Frontmatter

Every post opens with a settings block between two `---` lines:

```markdown
---
templateKey: blog-post
title: "Why agent identity matters"
date: 2026-08-04T00:00:00.000Z
author: Matt Teeple
description: "A sentence or two summarising the post."
featuredpost: true
category: The AI Edge
tags:
  - The AI Edge
  - Agentic AI
---
```

| Field | Required | Notes |
| --- | --- | --- |
| `templateKey` | Yes | Always `blog-post` |
| `title` | Yes | Keep the quotes |
| `date` | Yes | `YYYY-MM-DDT00:00:00.000Z`. Controls ordering, newest first |
| `author` | Yes | Must match a name in `src/data/authors.js` |
| `description` | Yes | Used on the blog list and by Google and LinkedIn |
| `featuredpost` | No | `true` or `false` |
| `category` | No | One short label, shown on the card |
| `tags` | No | Indented, each starting `- `. Creates tag pages |

Write the post below the closing `---`.

### What happens automatically

A card on the blog index, a table of contents built from your `##` headings, a page per tag, a plain-Markdown copy at `/blog/<filename>.md`, and inclusion in the [MCP server](mcp-server.md). No extra steps.

### Adding an author

`src/data/authors.js`:

```js
"Jane Doe": {
  name: "Jane Doe",
  slug: "jane-doe",
  image: "/img/authors/jane-doe.jpg",
  title: "Advisor",
  bio: "One or two sentences.",
  linkedin: "https://www.linkedin.com/in/janedoe",
  twitter: "",
},
```

Set `image: null` if there's no photo — a coloured circle with their initial is shown instead.

---

## Where each piece of copy lives

### Menus, footer, contact details, service and solution cards

All in **`src/data/site.js`**:

| To change | Edit |
| --- | --- |
| Menu items | `navLinks` |
| Contact email and LinkedIn | `contact` |
| The purple button | `ctaLabel`, `ctaTo` |
| Service cards | `services` |
| Solution cards | `solutions` |
| Footer columns and blurb | `footerColumns`, `footerBlurb` |

Changing the email here updates it everywhere it appears.

### Page copy

Each page owns its own text:

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
| Blog index | `src/pages/blog/index.js` |
| Page not found | `src/pages/404.js` |
| A single service | `src/pages/services/<name>.js` |
| A single solution | `src/pages/solutions/<name>.js` |

These are code files, but the words are easy to find. Text sits inside quotes:

```js
title: "Identity, governance, and continuity for autonomous AI.",
```

or between angle brackets:

```jsx
<h2 className="h-section">Why this work exists.</h2>
```

**Change the words. Leave the punctuation and brackets alone.**

### Site title and social preview

`site-meta.js` in the project root holds the site title, description, canonical URL, and the preview image used when a link is shared. `siteUrl` must match the live address exactly, with no trailing slash.

---

## Images

Put files in `static/img/` and reference them from `/img/`:

```markdown
![Description of the image](/img/blog/my-diagram.png)
```

Always write a real description in the brackets — screen readers read it aloud, and it shows if the image fails to load.

Keep files under about 300 KB.

---

## Rules that avoid broken builds

1. **Keep the quotes.** `title: "My title"` works; `title: My title` may not.
2. **Keep the commas.** Each entry in a list ends with `,`.
3. **Don't delete brackets** — `{`, `}`, `[`, `]`, `<`, `>` are structure.
4. **Quotes inside text need care.** Write `\"` or use curly quotes.
5. **Frontmatter needs both `---` lines.**
6. **Dates need the full format**: `2026-08-04T00:00:00.000Z`.

If a build fails, Netlify emails you and the live site is untouched. Undo the change on GitHub, or fix and commit again.
