import React from "react";
import { Link } from "gatsby";
import { ctaLabel, ctaTo } from "../data/site";

// Numbered section eyebrow: "01  The state of enterprise AI"
export const Eyebrow = ({ num, children }) => (
  <p className="eyebrow">
    {num && <span className="eyebrow__num">{num}</span>}
    <span>{children}</span>
  </p>
);

// `split` renders the heading in a 5-column well with the body in the
// remaining 7, matching the two-column prose sections on the live site.
export const Section = ({
  num,
  eyebrow,
  title,
  lede,
  wide,
  split,
  children,
  id,
}) => {
  const head = (
    <>
      {eyebrow && <Eyebrow num={num}>{eyebrow}</Eyebrow>}
      {title && (
        <h2 className={`h-section${wide ? " h-section--wide" : ""}`}>
          {title}
        </h2>
      )}
      {lede && <p className="lede">{lede}</p>}
    </>
  );

  return (
    <section className="section" id={id}>
      <div className="container">
        {split ? (
          <div className="section-split">
            <div className="section-split__head">{head}</div>
            <div className="section-split__body">{children}</div>
          </div>
        ) : (
          <>
            {(eyebrow || title || lede) && (
              <div className="section-head">{head}</div>
            )}
            {children}
          </>
        )}
      </div>
    </section>
  );
};

// Inner-page hero with breadcrumb
export const PageHero = ({ eyebrow, title, lede, crumb }) => (
  <section className="page-hero">
    <div className="container page-hero__inner">
      <ul className="breadcrumb">
        <li>
          <Link to="/">Multiplier Partners</Link>
        </li>
        <li aria-hidden="true">/</li>
        <li>{crumb || eyebrow}</li>
      </ul>
      {eyebrow && <p className="page-hero__eyebrow">{eyebrow}</p>}
      <h1 className="page-hero__title">{title}</h1>
      {lede && <p className="lede">{lede}</p>}
    </div>
  </section>
);

// Card that links out when `to` is provided, otherwise renders as a plain card
export const Card = ({
  to,
  num,
  category,
  badge,
  title,
  text,
  cta,
  ctaTone,
  meta,
}) => {
  const inner = (
    <>
      {(category || badge) && (
        <div className="card__meta-row">
          {category && <span className="card__category">{category}</span>}
          {badge && <span className="card__badge">{badge}</span>}
        </div>
      )}
      {num && <p className="card__num">{num}</p>}
      <h3 className="card__title">{title}</h3>
      <p className="card__text">{text}</p>
      {meta && <p className="card__meta">{meta}</p>}
      {cta && (
        <span className={`card__cta${ctaTone ? ` card__cta--${ctaTone}` : ""}`}>
          {cta}
        </span>
      )}
    </>
  );

  return to ? (
    <Link className="card" to={to}>
      {inner}
    </Link>
  ) : (
    <div className="card">{inner}</div>
  );
};

export const CardGrid = ({ cols = 3, children }) => (
  <div className={`card-grid card-grid--${cols}`}>{children}</div>
);

export const CtaBand = ({
  eyebrow = "Talk to Multiplier Partners",
  title,
  lede,
  secondary,
}) => (
  <section className="cta-band">
    <div className="container cta-band__inner">
      <p className="eyebrow eyebrow--plain">{eyebrow}</p>
      <h2 className="h-section">{title}</h2>
      {lede && <p className="lede">{lede}</p>}
      <div className="btn-row">
        <Link className="btn btn--primary" to={ctaTo}>
          {ctaLabel}
        </Link>
        {secondary && (
          <Link className="btn btn--outline" to={secondary.to}>
            {secondary.label}
          </Link>
        )}
      </div>
    </div>
  </section>
);
