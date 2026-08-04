import React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";
import SEO from "../components/SEO";

const NotFoundPage = () => (
  <Layout>
    <SEO title="Page not found | Multiplier Partners" />
    <section className="notfound">
      <div className="container">
        <p className="eyebrow eyebrow--plain">404</p>
        <h1 className="h-section" style={{ margin: "0 auto" }}>
          The page you&apos;re looking for doesn&apos;t exist.
        </h1>
        <div className="btn-row" style={{ justifyContent: "center" }}>
          <Link className="btn btn--primary" to="/">
            &larr; Back to home
          </Link>
        </div>
      </div>
    </section>
  </Layout>
);

export default NotFoundPage;
