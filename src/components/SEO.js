import React from "react";
import siteMetadata from "../../site-meta";

/**
 * Meta tags for Gatsby's Head API.
 *
 * Must be rendered from a page or template's `Head` export, not from the page
 * body — Gatsby hoists whatever `Head` returns into <head>. Replaces the old
 * react-helmet setup, which is unmaintained and incompatible with React 19.
 */

/**
 * Link previews need a raster.
 *
 * LinkedIn, Slack and X will not render an SVG `og:image`. When the image
 * fails they fall back to scraping whatever else is on the page — an author
 * avatar, a logo, whatever loads first. Any SVG used as a social image needs
 * a PNG twin beside it; see `npm run social`.
 */
const raster = (p) => (p && p.endsWith(".svg") ? p.replace(/\.svg$/, ".png") : p);

const mimeFor = (p) =>
  p.endsWith(".jpg") || p.endsWith(".jpeg") ? "image/jpeg" : "image/png";

const ORG = {
  "@type": "Organization",
  name: "Multiplier Partners",
  url: siteMetadata.siteUrl,
  description: siteMetadata.description,
  logo: {
    "@type": "ImageObject",
    url: `${siteMetadata.siteUrl}/img/mxp-icon.svg`,
  },
};

const SEO = ({
  title,
  description,
  pathname,
  // An absolute URL on another domain that holds the master copy of this
  // page. Set it and the canonical link, og:url and the structured data's
  // mainEntityOfPage all point there instead of here — a canonical that
  // disagrees with the other two is a mixed signal, and a crawler resolving
  // the conflict may simply keep this copy.
  canonical,
  image,
  article,
  author,
  datePublished,
  dateModified,
  tags,
  children,
}) => {
  const imagePath = raster(image) || siteMetadata.image;
  const here = `${siteMetadata.siteUrl}${pathname || ""}`;
  const master = canonical || here;
  const seo = {
    title: title || siteMetadata.title,
    description: description || siteMetadata.description,
    url: here,
    image: `${siteMetadata.siteUrl}${imagePath}`,
  };

  // Structured data. This is what a search engine — and increasingly a
  // language model reading on someone's behalf — uses to know what the page
  // *is*, rather than inferring it from the prose.
  const ld = article
    ? {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: title
          ? title.replace(/ \| Multiplier Partners$/, "")
          : seo.title,
        description: seo.description,
        image: [seo.image],
        datePublished: datePublished || undefined,
        dateModified: dateModified || datePublished || undefined,
        author: author
          ? {
              "@type": "Person",
              name: author.name,
              ...(author.linkedin ? { sameAs: [author.linkedin] } : {}),
              ...(author.title ? { jobTitle: author.title } : {}),
            }
          : { "@type": "Organization", name: "Multiplier Partners" },
        publisher: ORG,
        mainEntityOfPage: { "@type": "WebPage", "@id": master },
        keywords: (tags && tags.length ? tags : siteMetadata.keywords).join(", "),
      }
    : {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "WebSite",
            name: "Multiplier Partners",
            alternateName: "MXP",
            url: siteMetadata.siteUrl,
            description: siteMetadata.description,
            publisher: ORG,
          },
          {
            ...ORG,
            "@type": "ProfessionalService",
            serviceType: [
              "Identity and access advisory",
              "Agentic AI governance",
              "Go-to-market consulting",
            ],
            areaServed: "Worldwide",
          },
        ],
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
      {/* The plain author tag, separate from `article:author` below. This is
          the one LinkedIn's Post Inspector reads — without it, it reports the
          author as not found even though the Open Graph property is present.
          Confirmed against the live sister site: adding this fixed it. */}
      <meta
        name="author"
        content={author ? author.name : "Multiplier Partners"}
      />
      <meta name="theme-color" content="#050505" />
      <link rel="canonical" href={master} />
      {/* Let search results carry a full image and an untruncated snippet.
          Without this, previews are capped at a thumbnail. */}
      <meta
        name="robots"
        content="index, follow, max-image-preview:large, max-snippet:-1"
      />

      {/* Open Graph */}
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:url" content={master} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:image:type" content={mimeFor(imagePath)} />
      <meta property="og:image:alt" content={seo.title} />
      <meta property="og:type" content={article ? "article" : "website"} />
      <meta property="og:site_name" content="Multiplier Partners" />
      <meta property="og:locale" content="en_US" />

      {article && datePublished && (
        <meta property="article:published_time" content={datePublished} />
      )}
      {/* ogp.me defines article:author as a profile reference, not a name —
          the human-readable form is the `author` tag above. */}
      {article && author && (
        <meta
          property="article:author"
          content={author.linkedin || author.name}
        />
      )}
      {article &&
        (tags || []).map((t) => (
          <meta property="article:tag" content={t} key={t} />
        ))}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      <meta name="twitter:image:alt" content={seo.title} />

      <link rel="icon" type="image/svg+xml" href="/img/mxp-icon.svg" />
      <script type="application/ld+json">
        {JSON.stringify(ld, (_k, v) => (v === undefined ? undefined : v))}
      </script>
      {children}
    </>
  );
};

export default SEO;
