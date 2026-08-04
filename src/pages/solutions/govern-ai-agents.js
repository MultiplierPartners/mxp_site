import React from "react";
import DetailPage, { DetailHead } from "../../components/DetailPage";

const page = {
  path: "/solutions/govern-ai-agents/",
  kind: "solutions",
  eyebrow: "Solution",
  title: "Govern AI Agents",
  lede: "A practical operating model for letting autonomous agents act inside the enterprise — with identity, credentials, scoped permissions, audit, and lifecycle continuity that boards and regulators accept.",
  problem: {
    eyebrow: "The problem",
    title: "Why this work exists.",
    paras: [
      "Autonomous agents are about to be everywhere — in customer support, in sales, in IT operations, in finance, in security operations. Most enterprises are not prepared to govern actors that hold credentials, take action in production, and contact customers without a clear identity, scope, or policy.",
      "Without identity-first governance, every new agent is a new latent incident — and a new compliance event.",
    ],
  },
  stakes: {
    eyebrow: "Why it matters",
    title: "What is at stake.",
    paras: [
      "Governance is not the brake on agentic AI. It is what makes governed autonomy possible at scale. With identity, scoped credentials, audit, and continuity, autonomous agents can be deployed broadly. Without it, agents stay limited to low-risk corners and never reach the value the business needs.",
      "The earliest companies to give agents identities, scope, and audit are the ones that actually get to deploy them broadly.",
    ],
  },
  approach: {
    eyebrow: "Engagement approach",
    title: "How it runs.",
    paras: [
      "Engagements run 6–12 weeks. We pair with security, risk, engineering, and the AI program leadership — and we work against real, in-flight autonomous agent use cases, not hypothetical ones.",
      "The deliverable is a governance system the enterprise can run as autonomous agents proliferate.",
    ],
  },
  work: {
    eyebrow: "How Multiplier Partners helps",
    title: "What we do in this engagement.",
    items: [
      "Stand up an agent governance operating model — identity, review, approval, retirement",
      "Issue unique credentials, crypto-keys, and least-privilege scopes for every agent class",
      "Establish action-level audit and oversight that humans actually use",
      "Build escalation, fallback, and revocation patterns for misbehaving autonomous agents",
      "Set continuous evaluation and red-teaming for agent behavior across the lifecycle",
      "Equip the executive team with credible agent risk and compliance reporting",
    ],
  },
  deliverables: {
    eyebrow: "Typical deliverables",
    title: "What you walk away with.",
    items: [
      "Agent governance operating model with clear roles and decision rights",
      "Agent classification framework — what risk class, what controls, what oversight",
      "Identity, credential, authorization, and audit standard for autonomous agents",
      "Escalation, fallback, and kill-switch patterns and runbooks",
      "Continuous evaluation, red-teaming, and incident response model",
      "Executive and board reporting templates for agent risk, compliance, and assurance",
    ],
  },
  related: [
    {
      title: "Agentic AI Identity & Governance",
      text: "Building autonomous agents with identity from day one.",
      to: "/services/agentic-ai-automation/",
    },
    {
      title: "Identity & Access AI Control",
      text: "Identity is the foundation of agent governance.",
      to: "/services/identity-access-ai-control/",
    },
    {
      title: "AI Security & Governance",
      text: "The broader governance layer above autonomous agents.",
      to: "/services/ai-security-governance/",
    },
  ],
  cta: {
    title: "Ready to make this real?",
    lede: "Most enterprises start with a focused diagnostic engagement. We'll show you the gaps and the path.",
  },
};

const GovernAiAgentsPage = () => <DetailPage page={page} />;

export const Head = () => <DetailHead page={page} />;

export default GovernAiAgentsPage;
