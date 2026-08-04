import React from "react";
import PropTypes from "prop-types";

const BlogPostPreview = ({ entry }) => {
  const data = entry.getIn(["data"]).toJS();
  return (
    <div style={{ padding: "2rem", fontFamily: "Inter, sans-serif" }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>{data.title}</h1>
      <p style={{ color: "#666" }}>
        By {data.author} | {data.category}
      </p>
      <hr />
      <div
        style={{ lineHeight: "1.8" }}
        dangerouslySetInnerHTML={{ __html: entry.getIn(["data", "body"]) }}
      />
    </div>
  );
};

BlogPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
};

export default BlogPostPreview;
