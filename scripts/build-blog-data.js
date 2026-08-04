/**
 * Pre-build script: scans blog markdown files and generates a JSON index
 * for the MCP server function. Run before gatsby build.
 *
 * Usage: node scripts/build-blog-data.js
 */

const fs = require("fs");
const path = require("path");

const BLOG_DIR = path.resolve(__dirname, "../src/pages/blog");
const OUTPUT = path.resolve(__dirname, "../netlify/functions/blog-data.json");

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
  console.log(`Built blog data: ${blogs.length} posts → ${OUTPUT}`);
}

buildBlogData();
