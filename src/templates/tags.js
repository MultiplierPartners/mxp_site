import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/Layout";
import SEO from "../components/SEO";

const TagRoute = ({ data, pageContext }) => {
  const posts = data.allMarkdownRemark.edges;
  const tag = pageContext.tag;
  const totalCount = data.allMarkdownRemark.totalCount;

  return (
    <Layout>
      <div className="blog-listing">
        <div className="blog-listing-header blog-tag-header">
          <p className="blog-tag-label">Tag</p>
          <h1>{tag}</h1>
          <p>
            {totalCount} post{totalCount === 1 ? "" : "s"} tagged with &ldquo;
            {tag}&rdquo;
          </p>
          <Link to="/blog/" className="blog-tag-back">
            &larr; Browse all posts
          </Link>
        </div>
        <div className="blog-grid">
          {posts.map(({ node: post }) => (
            <Link key={post.id} className="blog-card" to={post.fields.slug}>
              <div className="blog-card-image">
                {post.frontmatter.featuredimage ? (
                  <img
                    src={post.frontmatter.featuredimage}
                    alt={post.frontmatter.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                ) : (
                  <div
                    style={{
                      background: "linear-gradient(135deg, #111827, #0A0A0A)",
                      width: "100%",
                      height: "100%",
                    }}
                  />
                )}
                <span className="blog-card-category">
                  {post.frontmatter.category || "Agentic Identity"}
                </span>
              </div>
              <div className="blog-card-content">
                <h3 className="blog-card-title">{post.frontmatter.title}</h3>
                <p className="blog-card-excerpt">{post.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export const Head = ({ pageContext, location }) => (
  <SEO
    title={`${pageContext.tag} | Multiplier Partners`}
    description={`Posts from Multiplier Partners tagged “${pageContext.tag}”.`}
    pathname={location.pathname}
  />
);

export default TagRoute;

export const tagPageQuery = graphql`
  query TagPage($tag: String) {
    allMarkdownRemark(
      limit: 1000
      sort: { frontmatter: { date: DESC } }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          excerpt(pruneLength: 150)
          id
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            category
            featuredimage
          }
        }
      }
    }
  }
`;
