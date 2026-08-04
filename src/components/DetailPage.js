import React from "react";
import { Link } from "gatsby";
import Layout from "./Layout";
import SEO from "./SEO";
import { Eyebrow, Section, Card, CardGrid, CtaBand } from "./Sections";

const kindLabel = { services: "Services", solutions: "Solutions" };

const DetailPage = ({ page }) => (
  <Layout>
    <section className="page-hero">
      <div className="container page-hero__inner">
        <ul className="breadcrumb">
          <li>
            <Link to="/">Multiplier Partners</Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <Link to={`/${page.kind}/`}>{kindLabel[page.kind]}</Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>{page.title}</li>
        </ul>
        <p className="page-hero__eyebrow">{page.eyebrow}</p>
        <h1 className="page-hero__title">{page.title}</h1>
        <p className="lede">{page.lede}</p>
      </div>
    </section>

    <Section eyebrow={page.problem.eyebrow} title={page.problem.title} split>
      <div className="prose">
        {page.problem.paras.map((t) => (
          <p key={t.slice(0, 40)}>{t}</p>
        ))}
      </div>
    </Section>

    <Section eyebrow={page.stakes.eyebrow} title={page.stakes.title} split>
      <div className="prose">
        {page.stakes.paras.map((t) => (
          <p key={t.slice(0, 40)}>{t}</p>
        ))}
      </div>
    </Section>

    <section className="section">
      <div className="container">
        <div className="section-head">
          <Eyebrow>{page.work.eyebrow}</Eyebrow>
          <h2 className="h-section">{page.work.title}</h2>
        </div>
        <ul className="bullet-grid">
          {page.work.items.map((t) => (
            <li className="bullet-card" key={t.slice(0, 40)}>
              <span className="bullet-card__dot" aria-hidden="true" />
              <span>{t}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>

    <section className="section">
      <div className="container">
        <div className="section-head">
          <Eyebrow>{page.deliverables.eyebrow}</Eyebrow>
          <h2 className="h-section">{page.deliverables.title}</h2>
        </div>
        <ul className="deliverable-grid">
          {page.deliverables.items.map((t) => (
            <li className="deliverable-card" key={t.slice(0, 40)}>
              {t}
            </li>
          ))}
        </ul>
      </div>
    </section>

    <Section eyebrow={page.approach.eyebrow} title={page.approach.title} split>
      <div className="prose">
        {page.approach.paras.map((t) => (
          <p key={t.slice(0, 40)}>{t}</p>
        ))}
      </div>
    </Section>

    {page.related.length > 0 && (
      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2 className="h-section">Related advisory work</h2>
          </div>
          <CardGrid cols={3}>
            {page.related.map((r) => (
              <Card
                key={r.to}
                to={r.to}
                title={r.title}
                text={r.text}
                cta="Read →"
              />
            ))}
          </CardGrid>
        </div>
      </section>
    )}

    <CtaBand
      title={page.cta.title}
      lede={page.cta.lede}
      secondary={{
        label:
          page.kind === "services" ? "See all services" : "See all solutions",
        to: `/${page.kind}/`,
      }}
    />
  </Layout>
);

export const DetailHead = ({ page }) => (
  <SEO
    title={`${page.title} | Multiplier Partners`}
    description={page.lede}
    pathname={page.path}
  />
);

export default DetailPage;
