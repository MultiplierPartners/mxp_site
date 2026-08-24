import React from "react";
import PropTypes from "prop-types";
import { kebabCase } from "lodash";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import { HTMLContentWithCodeCopy } from "../components/Content";
import TableOfContents from "../components/TableOfContents";
import PageActions from "../components/PageActions";
import { getAuthor } from "../data/authors";

const BlogPostTemplate = ({
  content,
  title,
  date,
  author: authorName,
  description,
  category,
  featuredimage,
  tags,
  pagePath,
  markdownPath,
}) => {
  const author = getAuthor(authorName);

  return (
    <>
      {/* Dark Hero Header */}
      <section className="blog-hero">
        <div className="blog-hero-content">
          <div className="blog-hero-text">
            <h1 className="blog-hero-title">{title}</h1>
            <div className="blog-hero-meta">
              {author.image ? (
                <img
                  className="author-avatar"
                  src={author.image}
                  alt={author.name}
                />
              ) : (
                <div
                  className="author-avatar"
                  style={{
                    background: "#a100ff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#ffffff",
                    fontWeight: "700",
                    fontSize: "1.2rem",
                  }}
                >
                  {author.name ? author.name.charAt(0) : "M"}
                </div>
              )}
              <div className="author-info">
                <span className="author-name">
                  Written by:{" "}
                  <Link
                    className="author-name__link"
                    to={`/authors/${kebabCase(author.name)}/`}
                  >
                    {author.name}
                  </Link>
                </span>
                <br />
                <span className="publish-date">Published: {date}</span>
              </div>
            </div>
            <div className="blog-hero-actions">
              <PageActions markdownPath={markdownPath} pagePath={pagePath} />
            </div>
            <div className="share-buttons">
              <span className="share-label">SHARE:</span>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Share on LinkedIn"
              >
                in
              </a>
              <a
                href={`https://twitter.com/intent/tweet`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Share on X"
              >
                𝕏
              </a>
            </div>
          </div>
          {featuredimage && (
            <div className="blog-hero-image">
              <img src={featuredimage} alt={title} />
            </div>
          )}
        </div>
      </section>

      {/* Content Area */}
      <div className="blog-content-area">
        <div className="blog-content-wrapper">
          <TableOfContents content={content} />
          <div className="blog-body">
            <HTMLContentWithCodeCopy content={content} />
          </div>
        </div>
      </div>

      {/* Tags */}
      {tags && tags.length > 0 && (
        <section className="blog-tags-band">
          <div className="blog-tags-inner">
            <h4>Tags</h4>
            <div className="blog-tags-list">
              {tags.map((tag) => (
                <Link
                  key={tag}
                  className="blog-tag-link"
                  to={`/tags/${kebabCase(tag)}/`}
                >
                  {tag}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA — blog-only styling; see .blog-cta-section */}
      <section className="blog-cta-section">
        <h2>Give autonomous AI an identity before you give it autonomy.</h2>
        <p>
          Most engagements start with an AI Identity &amp; Risk Assessment — a
          prioritized view of which agents are running, what they can touch, and
          the governance work required first.
        </p>
        <Link to="/contact/" className="btn btn--primary">
          AI Security Assessment Now
        </Link>
      </section>
    </>
  );
};

BlogPostTemplate.propTypes = {
  content: PropTypes.string.isRequired,
  title: PropTypes.string,
  date: PropTypes.string,
  author: PropTypes.string,
  description: PropTypes.string,
  category: PropTypes.string,
  featuredimage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  tags: PropTypes.array,
};

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <BlogPostTemplate
        content={post.html}
        title={post.frontmatter.title}
        date={post.frontmatter.date}
        author={post.frontmatter.author}
        description={post.frontmatter.description}
        category={post.frontmatter.category}
        featuredimage={post.frontmatter.featuredimage}
        tags={post.frontmatter.tags}
        pagePath={post.fields.slug}
        markdownPath={`${post.fields.slug.replace(/\/$/, "")}.md`}
      />
    </Layout>
  );
};

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export const Head = ({ data, location }) => {
  const post = data.markdownRemark;
  return (
    <SEO
      title={`${post.frontmatter.title} | Multiplier Partners`}
      description={post.frontmatter.description}
      image={post.frontmatter.featuredimage}
      pathname={location.pathname}
      canonical={post.frontmatter.canonical}
      author={getAuthor(post.frontmatter.author)}
      datePublished={post.frontmatter.isoDate}
      tags={post.frontmatter.tags}
      article
    />
  );
};

export default BlogPost;

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      fields {
        slug
      }
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        # Structured data and article:published_time need ISO 8601, not the
        # human form rendered in the byline.
        isoDate: date
        title
        author
        description
        category
        tags
        featuredimage
        # Set on a post that is republished here from elsewhere; names the
        # copy search engines should treat as the original.
        canonical
      }
    }
  }
`;
