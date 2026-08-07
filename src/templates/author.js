import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import { getAuthor } from "../data/authors";

const AuthorRoute = ({ data, pageContext }) => {
  const posts = data.allMarkdownRemark.edges;
  const totalCount = data.allMarkdownRemark.totalCount;
  const author = getAuthor(pageContext.author);

  return (
    <Layout>
      <div className="blog-listing">
        <div className="blog-listing-header">
          <p className="blog-tag-label">Author</p>

          <div className="author-header">
            {author.image ? (
              <img
                className="author-header__avatar"
                src={author.image}
                alt={author.name}
              />
            ) : (
              <div className="author-header__avatar author-header__avatar--initial">
                {author.name ? author.name.charAt(0) : "M"}
              </div>
            )}
            <div>
              <h1>{author.name}</h1>
              {author.title && (
                <p className="author-header__title">{author.title}</p>
              )}
            </div>
          </div>

          {author.bio && <p>{author.bio}</p>}

          <p className="author-header__count">
            {totalCount} post{totalCount === 1 ? "" : "s"}
          </p>

          {author.linkedin && (
            <a
              className="btn btn--ghost author-header__link"
              href={author.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/img/linkedin-icon.svg" alt="" width="18" height="18" />
              Connect on LinkedIn
            </a>
          )}

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

export const Head = ({ pageContext, location }) => {
  const author = getAuthor(pageContext.author);
  return (
    <SEO
      title={`${author.name} | Multiplier Partners`}
      description={author.bio || `Posts by ${author.name}.`}
      pathname={location.pathname}
    />
  );
};

export default AuthorRoute;

export const authorPageQuery = graphql`
  query AuthorPage($author: String) {
    allMarkdownRemark(
      limit: 1000
      sort: { frontmatter: { date: DESC } }
      filter: { frontmatter: { author: { eq: $author } } }
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
