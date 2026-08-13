#!/usr/bin/env node
/**
 * Renders the PNG twins that link previews need.
 *
 * og:image has to be a raster. LinkedIn, Slack and X will not render an SVG,
 * and when the image fails they fall back to scraping the page — which is how
 * a stray logo or avatar ends up as the thumbnail for a post.
 *
 * This is a LOCAL step, not part of the build: it shells out to rsvg-convert,
 * which is not present on the deploy runner. The PNGs it writes are committed.
 * Re-run it after changing the card.
 *
 *   brew install librsvg && npm run social
 */
const { execFileSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const jobs = [{ svg: "static/img/mxp-og.svg", png: "static/img/mxp-og.png", width: 1200 }];

try {
  execFileSync("rsvg-convert", ["--version"], { stdio: "ignore" });
} catch {
  console.error("rsvg-convert not found — install it with `brew install librsvg`.");
  console.error("The committed PNGs are still in place; nothing was changed.");
  process.exit(1);
}

for (const j of jobs) {
  const src = path.join(root, j.svg);
  if (!fs.existsSync(src)) {
    console.warn(`  skipped ${j.svg} (no such file)`);
    continue;
  }
  execFileSync("rsvg-convert", ["-w", String(j.width), src, "-o", path.join(root, j.png)]);
  console.log(`  ${j.svg} -> ${j.png} @${j.width}px`);
}
