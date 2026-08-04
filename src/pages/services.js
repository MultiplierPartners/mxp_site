import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import { PageHero, Card, CardGrid, CtaBand } from "../components/Sections";
import { services } from "../data/site";

const ServicesPage = () => (
  <Layout>
    <SEO
      title="Services | Multiplier Partners"
      description="Identity, governance, and continuity for autonomous AI. Advisory services spanning agent identity, governance, architecture, cybersecurity, and data."
      pathname="/services/"
    />

    <PageHero
      eyebrow="Services"
      title="Identity, governance, and continuity for autonomous AI."
      lede="Multiplier Partners works at the intersection of agent identity, governance, architecture, cybersecurity, and data. Every engagement produces something the enterprise can run — not a slide deck, not a chatbot, not a model integration."
    />

    <section className="section section--flush">
      <div className="container">
        <CardGrid cols={3}>
          {services.map((s) => (
            <Card
              key={s.title}
              to={s.slug}
              title={s.title}
              text={s.text}
              cta="Explore service →"
            />
          ))}
        </CardGrid>
      </div>
    </section>

    <CtaBand
      eyebrow="Engage Multiplier Partners"
      title="Not sure where to start?"
      lede="Most engagements begin with an AI Identity & Risk Assessment. It gives executive teams a clear, prioritized view of which autonomous agents are running, what they can touch, and the identity and governance gaps that matter most."
      secondary={{ label: "About Multiplier Partners", to: "/about/" }}
    />
  </Layout>
);

export default ServicesPage;
