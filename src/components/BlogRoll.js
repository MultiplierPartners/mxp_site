import React from "react";
import PropTypes from "prop-types";
import { Link, graphql, useStaticQuery } from "gatsby";
import PreviewCompatibleImage from "./PreviewCompatibleImage";

const BlogRoll = () => {
  const data = useStaticQuery(graphql`
    query BlogRollQuery {
      allMarkdownRemark(
        sort: { frontmatter: { date: DESC } }
        filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
      ) {
        edges {
          node {
            excerpt(pruneLength: 150)
            id
            fields {
              slug
            }
            frontmatter {
              title
              templateKey
              date(formatString: "MMMM DD, YYYY")
              featuredpost
              category
              featuredimage
            }
          }
        }
      }
    }
  `);

  const { edges: posts } = data.allMarkdownRemark;

  return (
    <div className="blog-grid">
      {posts &&
        posts.map(({ node: post }) => (
          <Link
            key={post.id}
            className="blog-card"
            to={post.fields.slug}
          >
            <div className="blog-card-image">
              {post.frontmatter.featuredimage ? (
                <img
                  src={post.frontmatter.featuredimage}
                  alt={post.frontmatter.title}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
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
  );
};

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default BlogRoll;
