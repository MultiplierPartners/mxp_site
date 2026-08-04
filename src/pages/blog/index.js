import React from "react";
import Layout from "../../components/Layout";
import SEO from "../../components/SEO";
import BlogRoll from "../../components/BlogRoll";

const BlogIndexPage = () => (
  <Layout>
    <SEO
      title="Blog | Multiplier Partners"
      description="Field notes and executive briefings on identity-first AI, agent governance, machine trust, and the economics of the enterprise AI buildout."
      pathname="/blog/"
    />
    <div className="blog-listing">
      <div className="blog-listing-header">
        <p className="blog-tag-label">Blog</p>
        <h1>Field notes on identity-first AI.</h1>
        <p>
          Executive briefings and analysis from Multiplier Partners on agent
          identity, governance, machine trust, and the economics underneath the
          enterprise AI buildout.
        </p>
      </div>
      <BlogRoll />
    </div>
  </Layout>
);

export default BlogIndexPage;
