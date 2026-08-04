import React from "react";
import { Helmet } from "react-helmet";
import useSiteMetadata from "./SiteMetadata";

const SEO = ({ title, description, pathname, image, article }) => {
  const siteMetadata = useSiteMetadata();

  const seo = {
    title: title || siteMetadata.title,
    description: description || siteMetadata.description,
    url: `${siteMetadata.siteUrl}${pathname || ""}`,
    image: image
      ? `${siteMetadata.siteUrl}${image}`
      : `${siteMetadata.siteUrl}${siteMetadata.image}`,
  };

  return (
    <Helmet>
      <html lang="en" />
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta
        name="keywords"
        content={(siteMetadata.keywords || []).join(", ")}
      />
      <meta name="theme-color" content="#050505" />

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

      {/* Favicon */}
      <link rel="icon" type="image/svg+xml" href="/img/mxp-icon.svg" />
    </Helmet>
  );
};

export default SEO;
