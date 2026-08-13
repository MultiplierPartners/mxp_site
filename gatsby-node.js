const _ = require("lodash");
const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  createTypes(`
    type MarkdownRemarkFrontmatter {
      templateKey: String
      title: String
      date: Date @dateformat
      author: String
      authorImage: String  # Deprecated - use authors.js module instead
      description: String
      featuredpost: Boolean
      featuredimage: String
      category: String
      tags: [String]
      heading: String
      ctaText: String
      ctaLink: String
      heroText: String
      features: [MarkdownRemarkFrontmatterFeatures]
      solutions: [MarkdownRemarkFrontmatterSolutions]
      newsItems: [MarkdownRemarkFrontmatterNewsItems]
      learnItems: [String]
    }
    type MarkdownRemarkFrontmatterFeatures {
      title: String
      description: String
    }
    type MarkdownRemarkFrontmatterSolutions {
      title: String
      description: String
      link: String
    }
    type MarkdownRemarkFrontmatterNewsItems {
      title: String
      excerpt: String
      category: String
      image: String
    }
    type MarkdownRemark implements Node {
      frontmatter: MarkdownRemarkFrontmatter
    }
  `);
};

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              tags
              templateKey
              author
            }
          }
        }
      }
    }
  `);
  if (result.errors) throw result.errors;

  const posts = result.data.allMarkdownRemark.edges;

  posts.forEach(({ node }) => {
    const { id } = node;
    const { templateKey, tags } = node.frontmatter;
    if (templateKey) {
      createPage({
        path: node.fields.slug,
        component: path.resolve(`src/templates/${templateKey}.js`),
        context: { id, tags },
      });
    }
  });

  // Create tag pages
  const tags = _.uniq(posts.flatMap(({ node }) => node.frontmatter.tags || []));
  tags.forEach((tag) => {
    createPage({
      path: `/tags/${_.kebabCase(tag)}/`,
      component: path.resolve("src/templates/tags.js"),
      context: { tag },
    });
  });

  // Create author archive pages
  const authors = _.uniq(
    posts.map(({ node }) => node.frontmatter.author).filter(Boolean),
  );
  authors.forEach((author) => {
    createPage({
      path: `/authors/${_.kebabCase(author)}/`,
      component: path.resolve("src/templates/author.js"),
      context: { author },
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  if (node.internal.type === "MarkdownRemark") {
    actions.createNodeField({
      name: "slug",
      node,
      value: createFilePath({ node, getNode }),
    });
  }
};

/**
 * Write public/sitemap.xml from the pages that were actually emitted.
 *
 * The routes are read off the built output — every public/**\/index.html is a
 * page — rather than from `allSitePage`. That is deliberate: the obvious
 * alternative, gatsby-plugin-sitemap, queries for `site.siteMetadata.siteUrl`
 * and, when that lookup comes back empty, writes a zero-byte sitemap *without
 * failing the build*. A silently empty sitemap is worse than none.
 *
 * Reading the filesystem also has the virtue of describing what shipped
 * rather than what the build intended to ship.
 */
function writeSitemap({ fs, siteMeta }) {
  const publicDir = path.resolve("public");

  const walk = (dir) =>
    fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) return walk(full);
      return entry.name === "index.html" ? [path.dirname(full)] : [];
    });

  const paths = walk(publicDir)
    .map((d) => {
      const rel = path.relative(publicDir, d);
      return rel === "" ? "/" : `/${rel.split(path.sep).join("/")}/`;
    })
    .filter((p) => !p.startsWith("/404"))
    .sort();

  if (paths.length === 0) {
    throw new Error("sitemap: no pages found — refusing to write an empty one");
  }

  const urls = paths
    .map((p) => {
      const priority = p === "/" ? "1.0" : p.startsWith("/blog/") ? "0.8" : "0.7";
      return [
        "  <url>",
        `    <loc>${siteMeta.siteUrl}${p}</loc>`,
        "    <changefreq>weekly</changefreq>",
        `    <priority>${priority}</priority>`,
        "  </url>",
      ].join("\n");
    })
    .join("\n");

  fs.writeFileSync(
    path.resolve("public/sitemap.xml"),
    '<?xml version="1.0" encoding="UTF-8"?>\n' +
      `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`
  );
  console.info(`Wrote sitemap.xml with ${paths.length} URLs`);
}

/**
 * Publish a plain-Markdown copy of every blog post alongside its HTML page,
 * e.g. /blog/2026-06-15-the-roi-reckoning.md
 *
 * This is what the "Copy page" / "View as Markdown" actions read, and it gives
 * language models a clean source to ingest without stripping page chrome.
 */
exports.onPostBuild = async () => {
  const fs = require("fs");
  const siteMeta = require("./site-meta");
  const srcDir = path.resolve("src/pages/blog");
  const outDir = path.resolve("public/blog");

  // Independent of the Markdown twins below, and written first so that the
  // early return when there are no posts cannot silently skip it.
  writeSitemap({ fs, siteMeta });

  if (!fs.existsSync(srcDir)) return;
  fs.mkdirSync(outDir, { recursive: true });

  const files = fs.readdirSync(srcDir).filter((f) => f.endsWith(".md"));

  for (const file of files) {
    const raw = fs.readFileSync(path.join(srcDir, file), "utf8");
    const match = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
    const body = match ? match[2].trim() : raw.trim();

    const field = (key) => {
      const m = match && match[1].match(new RegExp(`^${key}:\\s*(.+)$`, "m"));
      return m ? m[1].trim().replace(/^["']|["']$/g, "") : "";
    };

    const slug = file.replace(/\.md$/, "");
    const header = [
      `# ${field("title")}`,
      "",
      `Author: ${field("author")}`,
      `Date: ${field("date").slice(0, 10)}`,
      `Source: https://multiplierpartners.ai/blog/${slug}/`,
      "",
      "---",
      "",
    ].join("\n");

    fs.writeFileSync(path.join(outDir, `${slug}.md`), header + body + "\n");
  }

  console.info(`Published ${files.length} Markdown copies to /blog/*.md`);
};
