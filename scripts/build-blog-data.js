/**
 * Pre-build script: scans blog markdown files and generates a JSON index
 * for the MCP server function. Run before gatsby build.
 *
 * Usage: node scripts/build-blog-data.js
 */

const fs = require("fs");
const path = require("path");
const siteMetadata = require("../site-meta");

const BLOG_DIR = path.resolve(__dirname, "../src/pages/blog");
const OUTPUT = path.resolve(__dirname, "../netlify/functions/blog-data.json");
const LLMS_OUT = path.resolve(__dirname, "../static/llms.txt");
const SEARCH_OUT = path.resolve(__dirname, "../static/search-index.json");
const PAGES_DIR = path.resolve(__dirname, "../src/pages");
const SITE = siteMetadata.siteUrl;

function parseFrontmatter(content) {
  const match = content.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) return { frontmatter: {}, body: content };

  const raw = match[1];
  const body = match[2].trim();
  const frontmatter = {};
  let currentKey = null;
  let listItems = [];

  for (const line of raw.split("\n")) {
    const listMatch = line.match(/^\s+-\s+(.+)/);
    if (listMatch && currentKey) {
      listItems.push(listMatch[1].replace(/^["']|["']$/g, ""));
      continue;
    }

    // Flush previous list
    if (currentKey && listItems.length > 0) {
      frontmatter[currentKey] = listItems;
      listItems = [];
      currentKey = null;
    }

    const kvMatch = line.match(/^(\w+):\s*(.*)/);
    if (kvMatch) {
      const key = kvMatch[1];
      let value = kvMatch[2].trim().replace(/^["']|["']$/g, "");

      if (value === "true") value = true;
      else if (value === "false") value = false;
      else if (value === "") {
        // Start of a list
        currentKey = key;
        listItems = [];
        continue;
      }

      frontmatter[key] = value;
      currentKey = null;
    }
  }

  // Flush final list
  if (currentKey && listItems.length > 0) {
    frontmatter[currentKey] = listItems;
  }

  return { frontmatter, body };
}

function buildBlogData() {
  const files = fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".md") && f !== "index.js");

  const blogs = files.map((filename) => {
    const filepath = path.join(BLOG_DIR, filename);
    const content = fs.readFileSync(filepath, "utf-8");
    const { frontmatter, body } = parseFrontmatter(content);

    // Derive slug from filename (matches Gatsby's createFilePath behavior)
    const slug = filename.replace(/\.md$/, "");

    return {
      slug,
      url: `/blog/${slug}/`,
      title: frontmatter.title || slug,
      date: frontmatter.date || null,
      author: frontmatter.author || null,
      description: frontmatter.description || null,
      category: frontmatter.category || null,
      tags: frontmatter.tags || [],
      featuredpost: frontmatter.featuredpost || false,
      featuredimage: frontmatter.featuredimage || null,
      body,
    };
  });

  // Sort by date descending
  blogs.sort((a, b) => {
    if (!a.date || !b.date) return 0;
    return new Date(b.date) - new Date(a.date);
  });

  fs.mkdirSync(path.dirname(OUTPUT), { recursive: true });
  fs.writeFileSync(OUTPUT, JSON.stringify(blogs, null, 2));

  writeLlmsTxt(blogs);
  writeSearchIndex(blogs);

  console.log(`Built blog data: ${blogs.length} posts → ${OUTPUT}`);
}

/**
 * A guided index for language models — see https://llmstxt.org
 *
 * Generated from the same parse as the MCP index, because a hand-maintained
 * list of posts is a list that quietly stops matching the site.
 */
function writeLlmsTxt(blogs) {
  const lines = [
    "# Multiplier Partners",
    "",
    `> ${siteMetadata.description}`,
    "",
    "An advisory and GTM consulting firm working on identity, governance and",
    "machine-trust for autonomous AI agents — credentials, least privilege,",
    "audit, and lifecycle continuity at enterprise scale.",
    "",
    "Every post below is available as plain Markdown by appending `.md` to its",
    `URL. The site also speaks MCP at ${SITE}/mcp with two tools,`,
    "`listBlogs` and `getBlog`, if you would rather read it that way.",
    "",
    "## Insights",
    "",
    ...blogs.map(
      (p) => `- [${p.title}](${SITE}/blog/${p.slug}.md): ${p.description || ""}`.trimEnd()
    ),
    "",
    "## Pages",
    "",
    `- [Home](${SITE}/): What the firm does and who it is for.`,
    `- [Services](${SITE}/services/): Advisory engagements.`,
    `- [Solutions](${SITE}/solutions/): Where those engagements are applied.`,
    `- [AI Security](${SITE}/ai-security/): Identity and trust for autonomous agents.`,
    `- [Enterprise AI Playbook](${SITE}/enterprise-ai-playbook/): The operating guide.`,
    `- [Insights](${SITE}/insights/): Longer-form analysis.`,
    `- [About](${SITE}/about/): Who we are.`,
    `- [Contact](${SITE}/contact/): How to reach us.`,
    "",
    "## Current work",
    "",
    "- [UMA for Agents](https://u4a.ai): A working reference implementation of",
    "  asynchronous authoritative authorization for AI agents — an owner sets",
    "  the terms for",
    "  their own data once, on infrastructure they control, and those terms hold",
    "  against somebody else's agent while they are offline. A reference",
    "  architecture for the Kantara UMA Work Group, built with Eve Maler.",
    "",
    "## Related properties",
    "",
    "Separate sites published by the same people. None is a mirror of this one.",
    "",
    "- [MindGarden](https://mindgardenai.com): Nick Gamb's identity security",
    "  research and consulting practice.",
    "- [Venn Factory](https://www.vennfactory.com): Eve Maler's practice.",
    "",
  ];
  fs.writeFileSync(LLMS_OUT, lines.join("\n"));
  console.log(`Built llms.txt → ${LLMS_OUT}`);
}

buildBlogData();

/**
 * What ⌘K filters, built at the same time as everything else.
 *
 * Covers the whole site rather than the posts, which means reading the two
 * kinds of page this site is made of. Markdown carries frontmatter and is
 * already parsed above. Every other page is a React component that declares
 * its own title, description and path to <SEO> — so that is where they are
 * read from, rather than kept in a second list here that would quietly stop
 * matching the pages.
 */
function collectPages(dir, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      collectPages(full, out);
    } else if (entry.name.endsWith(".js")) {
      out.push(full);
    }
  }
  return out;
}

function seoProps(source) {
  // Three shapes, because this site is built of three kinds of page and a
  // search that only understood one of them would silently cover half the
  // site.
  //
  //   1. a top-level page — <SEO title pathname description />
  //   2. a detail page    — `const page = { path, title, lede }`, which
  //                          DetailPage turns into the same tags
  //   3. the home page    — <SEO pathname="/" /> and nothing else, taking
  //                          its title and description from site metadata

  const block = source.match(/<SEO\b([\s\S]{0,900}?)\/>/);
  if (block) {
    const grab = (name) => {
      const m = block[1].match(new RegExp(`${name}=\\{?"([^"]*)"`));
      return m ? m[1] : null;
    };
    const pathname = grab("pathname");
    if (pathname) {
      const title = grab("title");
      if (title) {
        return { pathname, title, description: grab("description") || "" };
      }
      if (pathname === "/") {
        return {
          pathname,
          title: siteMetadata.title,
          description: siteMetadata.description || "",
        };
      }
    }
  }

  // The detail pages. Matched at the object's own indent so the `title:` of a
  // nested block — every one of them has several — cannot be picked up
  // instead of the page's.
  const field = (name) => {
    const m = source.match(new RegExp(`^  ${name}: "((?:[^"\\\\]|\\\\.)*)"`, "m"));
    return m ? m[1].replace(/\\"/g, '"') : null;
  };
  const detailPath = field("path");
  const detailTitle = field("title");
  if (detailPath && detailTitle) {
    return {
      pathname: detailPath,
      title: detailTitle,
      description: field("lede") || "",
    };
  }
  return null;
}

function sectionFor(url) {
  if (url.startsWith("/services")) return { section: "Services", group: "Advisory" };
  if (url.startsWith("/solutions")) return { section: "Solutions", group: "Where it applies" };
  if (url.startsWith("/blog")) return { section: "Insights", group: "Writing" };
  return { section: "Multiplier Partners", group: "Site" };
}

function writeSearchIndex(blogs) {
  const rows = [];

  for (const file of collectPages(PAGES_DIR)) {
    if (path.basename(file) === "404.js") continue;
    const props = seoProps(fs.readFileSync(file, "utf8"));
    if (!props) continue;
    rows.push({
      // The suffix on a title like "About | Multiplier Partners" is the same
      // on every page, so it matches everything and ranks nothing.
      title: props.title.split("|")[0].trim(),
      url: props.pathname,
      ...sectionFor(props.pathname),
      description: props.description,
      headings: [],
    });
  }

  for (const post of blogs) {
    rows.push({
      title: post.title,
      url: `/blog/${post.slug}/`,
      section: "Insights",
      group: "Writing",
      description: post.description || "",
      headings: [],
    });
  }

  rows.sort((a, b) => a.url.localeCompare(b.url));
  fs.writeFileSync(SEARCH_OUT, JSON.stringify(rows, null, 2));
  console.log(`Built search index: ${rows.length} entries → ${SEARCH_OUT}`);
}
