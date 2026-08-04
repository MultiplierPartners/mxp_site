import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import {
  PageHero,
  Section,
  Card,
  CardGrid,
  CtaBand,
} from "../components/Sections";

const operatingPrinciples = [
  {
    num: "01",
    title: "Boutique by design",
    text: "Senior advisors only. No layered staffing. Each engagement is led by the people who will actually deliver it.",
  },
  {
    num: "02",
    title: "Outcomes, not retainers",
    text: "Engagements are scoped to a real decision — assessment, identity architecture, or embedded program leadership — and end when that decision is in motion.",
  },
  {
    num: "03",
    title: "Vendor- and model-pragmatic",
    text: "We are not a reseller and not a model partisan. The objective is your enterprise's outcome — identity, governance, and risk reduction — not anyone's tech bet.",
  },
];

const AboutPage = () => (
  <Layout>
    <PageHero
      eyebrow="About"
      title="A boutique advisory firm built for the autonomous AI era."
      lede="Multiplier Partners exists to give autonomous AI an identity, a scope, an audit trail, and a lifecycle — across strategy, architecture, governance, data, and machine trust."
    />

    <Section
      eyebrow="What we are"
      title="Senior operators, not generalists."
      split
    >
      <div className="prose">
        <p>
          Multiplier Partners is built by professionals who have helped build
          and scaled technology companies in the Identity Security and
          Infrastructure space for 30+ years. The practice is deliberately
          small, deliberately senior, and deliberately focused.
        </p>
        <p>
          Our roots are in deep technology and Silicon Valley operating
          experience. That background is now turned toward the most important
          shift in enterprise technology: giving autonomous AI agents identity,
          governance, and continuity inside real business operations.
        </p>
        <p>
          We are not building chatbots, not selling models, and not doing
          generic AI integrations. We work directly with executive sponsors.
          There is no substitution layer of junior staff between the people you
          talk to and the people doing the work.
        </p>
      </div>
    </Section>

    <Section eyebrow="How we operate" title="Direct, senior, accountable.">
      <CardGrid cols={3}>
        {operatingPrinciples.map((p) => (
          <Card key={p.num} num={p.num} title={p.title} text={p.text} />
        ))}
      </CardGrid>
    </Section>

    <Section
      eyebrow="Who we work with"
      title="Boards. Executive teams. Operating leaders."
      split
    >
      <div className="prose">
        <p>
          Multiplier Partners works with CEOs, CIOs, CISOs, CTOs, COOs, boards,
          private equity operators, enterprise architects, security leaders, and
          digital transformation teams. Industries include financial services,
          healthcare, technology, manufacturing, and regulated enterprise
          environments.
        </p>
        <p>
          The common thread is responsibility. Our clients are accountable for
          what autonomous AI does inside their enterprise — to customers,
          regulators, employees, and the board. We help them be in a position to
          identify it, govern it, and answer for it.
        </p>
      </div>
    </Section>

    <Section
      eyebrow="Where we came from"
      title="Deep technology. Real operating experience."
      split
    >
      <div className="prose">
        <p>
          Multiplier Partners began as a technology and Silicon Valley advisory
          practice, working with founders and operators on scaling,
          go-to-market, and technology strategy. That credibility — and that
          operating instinct — has been preserved.
        </p>
        <p>
          What has changed is the category. The most important problem for
          serious enterprises right now is not how to start with AI. It is how
          to give autonomous AI an identity, a scope, a lifecycle, and an audit
          trail inside the way the business actually runs. That is the firm we
          have become.
        </p>
      </div>
    </Section>

    <CtaBand
      title="Bring senior advisory into your autonomous AI program."
      lede="If you are responsible for autonomous AI inside your enterprise — or for the identity and security of an enterprise that is adopting it — there is a conversation worth having."
      secondary={{ label: "See our services", to: "/services/" }}
    />
  </Layout>
);

export const Head = () => (
  <SEO
    title="About | Multiplier Partners"
    description="A boutique advisory firm built for the autonomous AI era — senior operators giving autonomous AI an identity, a scope, an audit trail, and a lifecycle."
    pathname="/about/"
  />
);

export default AboutPage;
