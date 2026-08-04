import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import { PageHero, Card, CardGrid, CtaBand } from "../components/Sections";
import { solutions } from "../data/site";

const SolutionsPage = () => (
  <Layout>
    <SEO
      title="Solutions | Multiplier Partners"
      description="Outcomes for executive sponsors deploying autonomous AI — governing agents, scaling identity-first AI, reducing risk, and reporting credibly to the board."
      pathname="/solutions/"
    />

    <PageHero
      eyebrow="Solutions"
      title="Outcomes for executive sponsors deploying autonomous AI."
      lede="Solutions are framed around the decisions executives are actually making: how to govern autonomous agents, how to scale identity-first AI, how to reduce risk, and how to talk about it credibly to the board."
    />

    <section className="section section--flush">
      <div className="container">
        <CardGrid cols={3}>
          {solutions.map((s) => (
            <Card
              key={s.title}
              to={s.slug}
              title={s.title}
              text={s.text}
              cta={s.slug ? "Read more →" : null}
            />
          ))}
        </CardGrid>
      </div>
    </section>

    <CtaBand
      title="Pick a sponsor outcome and start there."
      lede="If your priority is on this page, we can move quickly. If it is not, tell us what you are actually trying to accomplish — and which autonomous agents you are trying to govern."
      secondary={{ label: "See our services", to: "/services/" }}
    />
  </Layout>
);

export default SolutionsPage;
