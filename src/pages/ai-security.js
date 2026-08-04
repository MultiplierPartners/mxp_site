import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import { PageHero, Eyebrow, CtaBand } from "../components/Sections";
import SecurityArt from "../components/SecurityArt";

const pillars = [
  {
    num: "01",
    eyebrow: "Agents",
    title: "Agent Identity & Machine Trust",
    paras: [
      "Autonomous AI agents are not models. They are actors inside the enterprise. They authenticate, hold credentials, take actions, contact customers, and write back to systems of record. That makes them a distinct identity domain — not an extension of model security or app security.",
      "Multiplier Partners designs agent identity from the runtime up: unique credentials per agent, crypto-keys, scoped authorization, governed delegation, audit, and human oversight as part of the same architecture. The objective is autonomous agents that can act broadly across the enterprise without ever acting outside policy.",
      "Done right, agent identity is what makes wide autonomous deployment safe. Done late, it is what stops agents from leaving the proof-of-concept.",
    ],
  },
  {
    num: "02",
    eyebrow: "Threats",
    title: "Prompt Injection & Data Exfiltration",
    paras: [
      "Prompt injection is now a real, weaponized attack pattern against autonomous agents. Hostile content embedded in a document, a webpage, an email, or a customer message can quietly redirect what an agent does next — and exfiltrate sensitive data through what looks like a normal response, attributed to an over-permissioned agent identity.",
      "Defending against it is not a single control. It is a layered design: input handling, retrieval boundaries, identity-scoped tool authorization, output filtering, and continuous evaluation against known injection corpora.",
      "Multiplier Partners brings these defenses into the architecture from the first line of integration — not after the first incident.",
    ],
  },
  {
    num: "03",
    eyebrow: "Architecture",
    title: "Identity-First AI Architecture",
    paras: [
      "Most AI security failures are architecture failures wearing different costumes. A model gateway without identity. A retrieval layer without per-agent permissions. An autonomous agent runtime without audit. A pilot that became production without anyone noticing — or attributing actions to a specific agent identity.",
      "A secure AI architecture treats the model gateway, retrieval, agent runtime, identity, and audit as a single control plane — designed to be evaluated, observed, and updated as threats and agent populations change.",
      "It is also designed to be operated, not just diagrammed. Multiplier Partners delivers architecture you can hand to a platform team and run.",
    ],
  },
  {
    num: "04",
    eyebrow: "Identity",
    title: "AI Identity & Access Controls",
    paras: [
      "Identity is the new perimeter for autonomous AI. If you cannot answer who is acting, on whose behalf, with what scoped authority, against which data, and with which crypto-key — you cannot govern AI.",
      "Multiplier Partners designs identity and authorization explicitly for autonomous agents: unique agent identities, credential issuance, governed delegation, scoped tool access, sensitive data approvals, and audit aligned to security operations. We bridge AI runtimes with the existing IAM, IGA, and PAM stack — not in parallel to it.",
      "The result is least privilege that actually works for non-human actors.",
    ],
  },
  {
    num: "05",
    eyebrow: "Governance",
    title: "AI Governance, Audit & Compliance",
    paras: [
      "Boards and regulators are now asking, in writing, how autonomous AI is governed. Most enterprises do not have a clean answer because their agent activity is happening faster than their identity and governance work.",
      "Multiplier Partners stands up an AI governance operating model that is not a slideware exercise — agent and use-case registries, risk classification, review workflows, compliance mappings, and reporting that real executives, real auditors, and real regulators can read.",
      "Auditability is built into the architecture: prompts, retrievals, agent identities, and outcomes can all be reconstructed when needed.",
    ],
  },
  {
    num: "06",
    eyebrow: "Shadow AI",
    title: "Shadow AI Risk",
    paras: [
      "Shadow AI is now larger than the official AI program in most enterprises. Employees experiment, teams adopt vendor agent features, and integrations quietly send sensitive data to autonomous agents nobody approved — through identities nobody attributed.",
      "Blocking shadow AI rarely works — the demand is real and the productivity gain is real. Multiplier Partners focuses on visibility first, then identity attribution, then risk-based remediation: discover what autonomous AI is in use, attribute it to identities, classify the risk, and bring high-risk usage into a sanctioned environment without freezing the business.",
      "The objective is not zero shadow AI. The objective is shadow AI you can see, attribute, score, and respond to.",
    ],
  },
  {
    num: "07",
    eyebrow: "Continuity",
    title: "Lifecycle Continuity & Oversight",
    paras: [
      "Autonomy is not the goal. Useful, safe, governed action is the goal. Governance must persist across the agent lifecycle — issuance, rotation, delegation, escalation, revocation, and retirement — not just at the moment an agent is approved.",
      "For sensitive operations — touching customers, money, identities, or production systems — humans need real, designed-in checkpoints, not bolted-on confirmation dialogs. Multiplier Partners designs human-in-the-loop where it actually matters: approval gates for sensitive actions, escalation when an agent is uncertain, fallback when an agent is wrong, and transparent records of when humans intervened and why.",
      "This is what allows organizations to extend autonomous AI further without giving up oversight.",
    ],
  },
];

const AiSecurityPage = () => (
  <Layout>
    <SEO
      title="AI Security | Multiplier Partners"
      description="Identity-first AI security. Agent identity, machine trust, prompt injection defense, governance, shadow AI, and lifecycle continuity for autonomous agents."
      pathname="/ai-security/"
    />

    <PageHero
      eyebrow="AI Security"
      title="Identity-first AI security. Treat agents as first-class citizens."
      lede="Multiplier Partners brings agent identity, machine trust, governance, and lifecycle continuity into the architecture from day one — not after the first incident."
    />

    {/* Text and artwork trade sides down the page, as on the live site */}
    {pillars.map((p, i) => (
      <section className="section" key={p.num}>
        <div className="container">
          <div className={`pillar${i % 2 === 1 ? " pillar--flip" : ""}`}>
            <div className="pillar__text">
              <Eyebrow num={p.num}>{`— ${p.eyebrow}`}</Eyebrow>
              <h2 className="h-section">{p.title}</h2>
              <div className="prose" style={{ marginTop: "2rem" }}>
                {p.paras.map((text) => (
                  <p key={text.slice(0, 40)}>{text}</p>
                ))}
              </div>
            </div>
            <div className="pillar__art">
              <div className="art-panel">
                <SecurityArt num={p.num} />
              </div>
            </div>
          </div>
        </div>
      </section>
    ))}

    <CtaBand
      title="Get a credible read on agent identity inside your enterprise."
      lede="Most engagements start with a focused AI Identity & Risk Assessment. We give you a prioritized view of which autonomous agents are running, what they can touch, and the identity and governance work required first."
      secondary={{ label: "See our services", to: "/services/" }}
    />
  </Layout>
);

export default AiSecurityPage;
