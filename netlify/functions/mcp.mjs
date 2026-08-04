import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { WebStandardStreamableHTTPServerTransport } from "@modelcontextprotocol/sdk/server/webStandardStreamableHttp.js";
import { z } from "zod";
import { createRequire } from "module";

const require = createRequire(import.meta.url);
const blogData = require("./blog-data.json");

function createServer() {
  const server = new McpServer({
    name: "mxp-blog",
    version: "1.0.0",
  });

  // Tool: listBlogs — returns summaries of all blog posts
  server.tool(
    "listBlogs",
    "List all blog posts on multiplierpartners.ai with title, date, author, category, description, and URL",
    {},
    async () => {
      const summaries = blogData.map((post) => ({
        title: post.title,
        date: post.date,
        author: post.author,
        category: post.category,
        description: post.description,
        slug: post.slug,
        url: `https://multiplierpartners.ai${post.url}`,
        tags: post.tags,
        featuredpost: post.featuredpost,
      }));

      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(summaries, null, 2),
          },
        ],
      };
    }
  );

  // Tool: getBlog — returns full content of a specific blog post
  server.tool(
    "getBlog",
    "Get the full content of a specific blog post by slug. Use listBlogs first to find available slugs.",
    {
      slug: z
        .string()
        .describe(
          "The blog post slug (e.g. '2026-04-08-mcp-server-resource-server')"
        ),
    },
    async ({ slug }) => {
      const post = blogData.find((p) => p.slug === slug);

      if (!post) {
        return {
          content: [
            {
              type: "text",
              text: `Blog post not found: "${slug}". Use listBlogs to see available posts.`,
            },
          ],
          isError: true,
        };
      }

      const header = [
        `# ${post.title}`,
        "",
        `**Author:** ${post.author}`,
        `**Date:** ${post.date}`,
        `**Category:** ${post.category}`,
        `**Tags:** ${post.tags.join(", ")}`,
        `**URL:** https://multiplierpartners.ai${post.url}`,
        "",
        `> ${post.description}`,
        "",
        "---",
        "",
      ].join("\n");

      return {
        content: [
          {
            type: "text",
            text: header + post.body,
          },
        ],
      };
    }
  );

  return server;
}

export default async (req) => {
  // GET returns server info
  if (req.method === "GET") {
    return new Response(
      JSON.stringify({
        name: "mxp-blog",
        version: "1.0.0",
        description:
          "MCP server for multiplierpartners.ai blog content. Tools: listBlogs, getBlog",
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  }

  if (req.method === "DELETE") {
    return new Response(null, { status: 405 });
  }

  try {
    const server = createServer();
    const transport = new WebStandardStreamableHTTPServerTransport({
      sessionIdGenerator: undefined, // stateless
    });

    await server.connect(transport);
    return await transport.handleRequest(req);
  } catch (error) {
    console.error("MCP error:", error);
    return new Response(
      JSON.stringify({
        jsonrpc: "2.0",
        error: { code: -32603, message: "Internal server error" },
        id: null,
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
};

export const config = {
  path: "/mcp",
};
