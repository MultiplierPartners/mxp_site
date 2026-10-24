import React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import { Section, Card, CardGrid, CtaBand } from "../components/Sections";
import { contact, services } from "../data/site";

const shifts = [
  {
    title: "Autonomous Agents are Non-Deterministic",
    text: "Autonomous agents are non-deterministic — they take steps, write back, send messages, change records, and trigger transactions. Action requires identity, scope, and audit — not a confirmation dialog.",
  },
  {
    title: "Agents reach into everything",
    text: "Agents now hold credentials to databases, SaaS, internal APIs, and tools that contain sensitive data. The blast radius of a single mis-permissioned agent is the enterprise itself.",
  },
  {
    title: "Agents persist over a lifecycle",
    text: "Continuity matters. Agents are deployed, updated, granted new access, and eventually retired. Governance must persist across that lifecycle, not just at the moment of approval.",
  },
  {
    title: "Agent risk is enterprise risk",
    text: "Boards, regulators, and customers now ask which agents are running, what they can touch, and who is accountable. Identity is the only credible answer.",
  },
];

const layers = [
  {
    num: "Layer 01",
    title: "Identity-First Strategy",
    text: "Where autonomous agents create real economic value, where they do not, and the priority order for identity, governance, and risk reduction.",
  },
  {
    num: "Layer 02",
    title: "Architecture & Control Plane",
    text: "Reference patterns for agent identity, model gateways, retrieval, and the AI control plane that the rest of the enterprise can rely on.",
  },
  {
    num: "Layer 03",
    title: "Identity & Machine Trust",
    text: "Credentials, crypto-keys, scoped permissions, and least privilege for autonomous agents — and the audit that keeps them honest.",
  },
  {
    num: "Layer 04",
    title: "Data & Knowledge Foundations",
    text: "Curated, permissioned, observable knowledge that autonomous agents are allowed to use — and not.",
  },
  {
    num: "Layer 05",
    title: "Lifecycle Continuity",
    text: "Issuance, rotation, delegation, escalation, revocation, and retirement — governance that follows the agent across its full lifecycle.",
  },
  {
    num: "Layer 06",
    title: "Governance & Assurance",
    text: "Policy, audit, agent registries, board reporting, compliance, and continuous evaluation of autonomous behavior against intent.",
  },
];

const engagements = [
  {
    num: "01 — Diagnostic",
    title: "AI Identity & Risk Assessment",
    text: "A focused review of which autonomous agents are running, what they can touch, and where the identity, audit, and compliance gaps are. Designed to give boards a credible, prioritized view of agent risk.",
    meta: "Typical: 2–4 weeks",
  },
  {
    num: "02 — Architecture",
    title: "Agent Identity & Control Plane",
    text: "Reference architecture for agent identity in your environment — credential issuance, scoped permissions, cryptographic keys, governed delegation, lifecycle continuity, and audit. Built to be implemented, not admired.",
    meta: "Typical: 6–12 weeks",
  },
  {
    num: "03 — Embedded",
    title: "Embedded Identity & Governance Advisory",
    text: "Senior advisors embedded with the executive team and AI program leaders, driving identity, governance, and lifecycle continuity across multiple agent workstreams.",
    meta: "Typical: ongoing",
  },
];

const chapters = [
  {
    num: "Chapter 01",
    title: "Why most enterprise AI fails",
    text: "Pilots without identity, demos without governance, and tools without continuity. The recurring patterns we see, and how to avoid them.",
  },
  {
    num: "Chapter 02",
    title: "Agents are first-class citizens",
    text: "Why autonomous agents need their own identities, credentials, and audit logs — and what that demands from leadership and the security organization.",
  },
  {
    num: "Chapter 03",
    title: "The Multiplier Partners six-layer scaling framework",
    text: "A structured way to think about identity, governance, architecture, data, continuity, and assurance as a single system.",
  },
];

const autonomyRequirements = [
  "A unique identity and credential set for every autonomous agent",
  "Scoped permissions and least privilege for tools, data, and APIs",
  "Cryptographic keys and verifiable provenance for every action",
  "Auditable action logs that humans, security, and regulators can read",
  "Human-in-the-loop checkpoints for sensitive or irreversible operations",
  "Lifecycle continuity — issuance, rotation, revocation, retirement",
];

const IndexPage = () => (
  <Layout>
    <section className="hero">
      <div className="container hero__inner">
        <p className="eyebrow eyebrow--plain">
          Enterprise Identity &amp; Agentic Security Advisory
        </p>
        <h1 className="h-display hero__title">
          Identity for Agentic, Continuity, and Enterprise.
        </h1>
        <p className="lede hero__lede">
          Multiplier Partners has built a trusted ecosystem required to deliver
          runtime access control and observability to move Agent workloads into
          production with lifecycle continuity that Boards and Regulators
          approve.
        </p>

        <div className="btn-row">
          <a
            className="btn btn--white"
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/img/linkedin-icon.svg" alt="" width="18" height="18" />
            Connect with me on LinkedIn
          </a>
          <Link className="btn btn--outline" to="/services/">
            Explore our advisory services &rarr;
          </Link>
        </div>

        <div className="value-strip">
          <div className="value-strip__item">
            <p className="value-strip__label">Identity</p>
            <p className="value-strip__text">
              Runtime Access Management for Human and Agentic Workflows.
            </p>
          </div>
          <div className="value-strip__item">
            <p className="value-strip__label">Governance</p>
            <p className="value-strip__text">
              Scoped permissions, audit, and least privilege by design.
            </p>
          </div>
          <div className="value-strip__item">
            <p className="value-strip__label">Continuity</p>
            <p className="value-strip__text">
              Identity Resilience with Runtime IDP Failover for Human and
              Agentic workflows.
            </p>
          </div>
        </div>
      </div>
    </section>

    <Section
      num="01"
      eyebrow="The state of enterprise AI"
      title="Most enterprises are deploying autonomous agents. Very few have given them an identity."
      split
    >
      <div className="prose">
        <p>
          Across boards, executive teams, and operating leaders, AI has moved
          from curiosity to mandate. Agents are now reading data, taking
          actions, and reaching into production systems. But the identity,
          governance, and audit foundation required to manage them as
          first-class enterprise actors does not yet exist in most
          organizations.
        </p>
        <p>
          Multiplier Partners exists to close that gap. We are not building
          chatbots, not selling models, and not doing generic AI integrations.
          Our advisory practice helps enterprises design and stand up the
          identity, machine-trust, and access-control layer that makes
          autonomous AI safe to deploy — the kind boards, security teams, and
          regulators can stand behind.
        </p>
      </div>
    </Section>

    <Section
      num="02"
      eyebrow="The shift"
      title="Autonomous agents are now actors inside the enterprise."
      lede="An AI agent that holds credentials, accesses data, and writes back to systems of record is no longer a model — it is an actor. Governing that actor across its full lifecycle is now an enterprise-grade problem. Four shifts are forcing the question."
      wide
    >
      <CardGrid cols={2}>
        {shifts.map((s) => (
          <Card key={s.title} title={s.title} text={s.text} />
        ))}
      </CardGrid>
    </Section>

    <Section
      num="03"
      eyebrow="What we do"
      title="Identity, governance, and continuity for autonomous AI."
      lede="Multiplier Partners works at the intersection of agent identity, governance, architecture, cybersecurity, and data. Every engagement produces something the enterprise can run — not a slide deck, not a chatbot, not another model integration."
      wide
    >
      <CardGrid cols={3}>
        {services.slice(0, 6).map((s) => (
          <Card
            key={s.title}
            to={s.slug}
            title={s.title}
            text={s.text}
            cta="Explore service →"
          />
        ))}
      </CardGrid>
      <div className="btn-row">
        <Link className="link-arrow" to="/services/">
          See all services &rarr;
        </Link>
      </div>
    </Section>

    <Section
      num="04"
      eyebrow="The Multiplier Partners framework"
      title="The Multiplier Partners Identity-First AI Framework."
      lede="A six-layer model for taking autonomous agents from idea to governed enterprise operation — without bypassing identity, continuity, or audit. We use it on every engagement, and it is the structure behind the Enterprise AI Playbook."
      wide
    >
      {/* Alternating half-width cards on a centre timeline spine, as on the live site */}
      <div className="layer-timeline">
        <span className="layer-timeline__spine" aria-hidden="true" />
        <ol className="layer-list">
          {layers.map((l) => (
            <li className="layer-list__row" key={l.num}>
              <div className="layer-list__card">
                <div className="layer-list__label">
                  <span className="layer-list__dot" aria-hidden="true" />
                  <span className="layer-list__num">{l.num}</span>
                </div>
                <h3 className="layer-list__title">{l.title}</h3>
                <p className="layer-list__text">{l.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </Section>

    <Section
      num="05"
      eyebrow="Machine trust"
      title="Securing autonomous agents is an identity problem, not a model problem."
      split
    >
      <div className="prose">
        <p>
          Autonomous agents introduce a new class of risk. Credentials can be
          over-scoped. Delegation can be abused. Sensitive records can be
          retrieved and acted on by an agent that should never have had that
          authority. Traditional controls — built for human users — were never
          designed to identify, govern, or audit a non-human actor.
        </p>
        <p>
          Machine trust is not solved by another scanner or another firewall. It
          requires agent identity, scoped credentials, cryptographic keys,
          governed delegation, and audit that follows the agent across its full
          lifecycle.
        </p>
        <p>
          Multiplier Partners brings identity into the AI conversation from day
          one — not after the demo, not after the breach. That is the difference
          between autonomous AI that is trusted to act, and autonomous AI that
          gets revoked.
        </p>
      </div>
    </Section>

    <Section
      num="06"
      eyebrow="Governed autonomy"
      title="Autonomous agents need identity before autonomy."
      lede="An agent that can read your data, act in your systems, and speak to your customers is no longer a model — it is an employee without a contract. Before autonomy is granted, the enterprise needs the identity foundation in place."
      split
    >
      <ul className="check-list">
        {autonomyRequirements.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </Section>

    <Section
      num="07"
      eyebrow="How we work"
      title="Three ways enterprises engage Multiplier Partners."
      lede="Every engagement is scoped to the executive sponsor and the real decision they need to make next. We do not run perpetual retainers or generic transformations."
      wide
    >
      <CardGrid cols={3}>
        {engagements.map((e) => (
          <Card
            key={e.title}
            num={e.num}
            title={e.title}
            text={e.text}
            meta={e.meta}
          />
        ))}
      </CardGrid>
    </Section>

    <Section
      num="08"
      eyebrow="The Enterprise AI Playbook"
      title="The thinking behind Multiplier Partners — written down."
      lede="A 20-chapter executive playbook on identity, governance, and continuity for autonomous AI inside real enterprises. Written for boards, CIOs, CISOs, CTOs, COOs, and the operators who have to actually make this work."
      wide
    >
      <CardGrid cols={3}>
        {chapters.map((c) => (
          <Card key={c.num} num={c.num} title={c.title} text={c.text} />
        ))}
      </CardGrid>
      <div className="btn-row">
        <Link className="link-arrow" to="/enterprise-ai-playbook/">
          Read the Playbook &rarr;
        </Link>
      </div>
    </Section>

    <CtaBand
      title="Identity for Agentic, Continuity, and Enterprise."
      lede="Start with an AI Identity & Risk Assessment. We will give you a credible, prioritized view of which autonomous agents are running, what they can touch, and the identity and governance work required to put them under enterprise control."
      secondary={{ label: "See our services", to: "/services/" }}
    />
  </Layout>
);

export const Head = () => <SEO pathname="/" />;

export default IndexPage;
