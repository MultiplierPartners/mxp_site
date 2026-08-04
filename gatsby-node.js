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
  const tags = _.uniq(
    posts.flatMap(({ node }) => node.frontmatter.tags || [])
  );
  tags.forEach((tag) => {
    createPage({
      path: `/tags/${_.kebabCase(tag)}/`,
      component: path.resolve("src/templates/tags.js"),
      context: { tag },
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
