import React from "react";
import siteMetadata from "../../site-meta";

/**
 * Meta tags for Gatsby's Head API.
 *
 * Must be rendered from a page or template's `Head` export, not from the page
 * body — Gatsby hoists whatever `Head` returns into <head>. Replaces the old
 * react-helmet setup, which is unmaintained and incompatible with React 19.
 */
const SEO = ({ title, description, pathname, image, article, children }) => {
  const seo = {
    title: title || siteMetadata.title,
    description: description || siteMetadata.description,
    url: `${siteMetadata.siteUrl}${pathname || ""}`,
    image: `${siteMetadata.siteUrl}${image || siteMetadata.image}`,
  };

  return (
    <>
      <html lang="en" />
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta
        name="keywords"
        content={(siteMetadata.keywords || []).join(", ")}
      />
      <meta name="theme-color" content="#050505" />
      <link rel="canonical" href={seo.url} />

      {/* Open Graph */}
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:type" content={article ? "article" : "website"} />
      <meta property="og:site_name" content="Multiplier Partners" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />

      <link rel="icon" type="image/svg+xml" href="/img/mxp-icon.svg" />
      {children}
    </>
  );
};

export default SEO;
