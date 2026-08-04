module.exports = {
  siteMetadata: {
    title:
      "Multiplier Partners | Identity for Agentic, Continuity, and Enterprise",
    description:
      "Multiplier Partners is an advisory and GTM consulting firm helping enterprises operationalize identity, governance, and machine-trust for autonomous AI agents at scale — credentials, least privilege, audit, and lifecycle continuity.",
    siteUrl: "https://multiplierpartners.ai",
    image: "/img/mxp-og.png",
    keywords: [
      "agent identity",
      "agentic AI",
      "AI governance",
      "machine trust",
      "identity continuity",
      "AI security advisory",
      "autonomous agents",
      "least privilege",
      "Multiplier Partners",
      "MXP",
    ],
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-sass",
      options: {
        sassOptions: {
          indentedSyntax: true,
        },
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/static/img`,
        name: "uploads",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/img`,
        name: "images",
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 2048,
              quality: 90,
              linkImagesToOriginal: false,
              backgroundColor: "transparent",
            },
          },
          {
            resolve: "gatsby-remark-copy-linked-files",
            options: {
              destinationDir: "static",
            },
          },
          "gatsby-remark-prismjs",
        ],
      },
    },
    },
    "gatsby-plugin-netlify",
  ],
};
