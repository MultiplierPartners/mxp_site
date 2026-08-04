import React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import { PageHero, Card, CardGrid, CtaBand } from "../components/Sections";

const upcoming = [
  {
    category: "Governance",
    title: "How boards should be measuring autonomous AI risk",
    text: "A practical reporting model boards can use to govern autonomous agents without pretending to be technical.",
  },
  {
    category: "Security",
    title: "Why prompt injection is a real attack on agent identity",
    text: "Working through realistic enterprise threat scenarios for autonomous agents — and the design patterns that actually defend against them.",
  },
  {
    category: "Architecture",
    title: "The identity-first AI control plane every enterprise needs",
    text: "A deep look at the model gateway, retrieval, agent runtime, identity, and audit as a single control surface.",
  },
  {
    category: "Identity",
    title: "Autonomous agents are non-human actors. Govern them like it.",
    text: "Why traditional IAM falls short for autonomous AI agents, and what to put in place instead — credentials, crypto-keys, scoped delegation, and audit.",
  },
  {
    category: "Strategy",
    title: "Sequencing identity-first AI investment without burning the program",
    text: "A pragmatic 12–24 month investment sequence that boards and operators both believe in — anchored in identity, governance, and continuity.",
  },
  {
    category: "Operations",
    title: "When governed autonomy works in the enterprise — and when it does not",
    text: "The patterns that produce real value from autonomous agents, and the patterns that quietly produce identity and compliance risk.",
  },
];

const InsightsPage = () => (
  <Layout>
    <SEO
      title="Insights | Multiplier Partners"
      description="Editorial perspective on identity-first AI, agent governance, machine trust, lifecycle continuity, and the operating practices required to deploy autonomous AI safely."
      pathname="/insights/"
    />

    <PageHero
      eyebrow="Insights"
      title="The thinking behind Multiplier Partners."
      lede="Editorial perspective on identity-first AI, agent governance, machine trust, lifecycle continuity, and the operating practices required to deploy autonomous AI safely."
    />

    <section className="section section--flush">
      <div className="container">
        <div className="panel-card">
          <p className="eyebrow eyebrow--plain">Now publishing</p>
          <h2 className="h-section">Insights are coming online.</h2>
          <p className="lede">
            We are migrating selected Multiplier Partners analysis, frameworks,
            and field notes from internal advisory work to this hub. New
            insights will be published here in the cadence they deserve — not on
            a content calendar.
          </p>
          <div className="btn-row" style={{ justifyContent: "center" }}>
            <Link className="btn btn--outline" to="/blog/">
              Read the blog &rarr;
            </Link>
          </div>
        </div>
      </div>
    </section>

    <section className="section section--flush" style={{ paddingTop: 0 }}>
      <div className="container">
        <p className="eyebrow eyebrow--plain">Coming soon</p>
        <CardGrid cols={3}>
          {upcoming.map((u) => (
            <Card
              key={u.title}
              category={u.category}
              badge="Coming soon"
              title={u.title}
              text={u.text}
            />
          ))}
        </CardGrid>
      </div>
    </section>

    <CtaBand
      eyebrow="In the meantime"
      title="The Startup Playbook is live."
      lede="Twenty short consumable chapters on the keys to building startup success from first funding to delivering enterprise solutions at scale. Written for executive teams, not for marketers."
      secondary={{ label: "Read the Playbook", to: "/enterprise-ai-playbook/" }}
    />
  </Layout>
);

export default InsightsPage;
