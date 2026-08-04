import React from "react";
import DetailPage, { DetailHead } from "../../components/DetailPage";

const page = {
  path: "/services/ai-architecture/",
  kind: "services",
  eyebrow: "Service · Architecture",
  title: "AI Architecture",
  lede: "Reference architecture and an AI control plane that the rest of the enterprise can rely on — agent identity, model gateways, retrieval, audit, and governed delegation as a single system.",
  problem: {
    eyebrow: "The problem",
    title: "Why this work exists.",
    paras: [
      "Many enterprises have stood up AI tools without standing up an AI architecture. Each team picks its own model, its own connectors, its own data path, and its own pattern. The result is a sprawl of shadow AI — autonomous agents authenticating with shared credentials, no shared control plane, no shared identity, and no shared way to evaluate what is actually happening.",
      "That is fine for a pilot. It is unsustainable for the enterprise.",
    ],
  },
  stakes: {
    eyebrow: "Why it matters",
    title: "What is at stake.",
    paras: [
      "AI is now a platform decision, not just a vendor decision. Architecture determines what can be identified, what can be governed, what can be audited, and what can be revoked. Without it, every new agent re-introduces the same identity and compliance risks.",
      "A real AI architecture treats models, agents, data access, and identity as a single control plane — not as a collection of point tools.",
    ],
  },
  approach: {
    eyebrow: "Engagement approach",
    title: "How it runs.",
    paras: [
      "Architecture engagements are typically 6–12 weeks, partnered with the platform, security, and AI program leadership. We deliver architecture, decision frameworks, and a sequenced build plan — not vendor pitches.",
      "We are deliberately model- and vendor-pragmatic; the architecture survives changes in models and vendors.",
    ],
  },
  work: {
    eyebrow: "How Multiplier Partners helps",
    title: "What we do in this engagement.",
    items: [
      "Design the enterprise AI reference architecture and control plane",
      "Define the model gateway, evaluation, observability, and routing layer",
      "Establish patterns for retrieval, knowledge, and permissioned data access",
      "Design the agent runtime, tool registry, and identity-aware delegation pattern",
      "Align the architecture to identity, governance, and compliance from day one",
      "Plan the platform build and the operating team that will run it",
    ],
  },
  deliverables: {
    eyebrow: "Typical deliverables",
    title: "What you walk away with.",
    items: [
      "Enterprise AI reference architecture with identity and governance baked in",
      "AI control plane design — gateway, agent registry, evaluation, audit",
      "Retrieval and knowledge architecture, with permissioning and auditability",
      "Agent runtime and tool architecture aligned to identity and access policy",
      "Implementation roadmap for the AI platform team and partners",
      "Decision framework for build vs. buy across the AI stack",
    ],
  },
  related: [
    {
      title: "Data & AI Infrastructure",
      text: "The data foundation autonomous agents can actually use.",
      to: "/services/data-ai-infrastructure/",
    },
    {
      title: "Agentic AI Identity & Governance",
      text: "Designing the agent runtime around identity and audit.",
      to: "/services/agentic-ai-automation/",
    },
    {
      title: "AI Security & Governance",
      text: "The policy and operating model around the platform.",
      to: "/services/ai-security-governance/",
    },
  ],
  cta: {
    title: "Ready to make this real?",
    lede: "Most enterprises start with a focused diagnostic engagement. We'll show you the gaps and the path.",
  },
};

const AiArchitecturePage = () => <DetailPage page={page} />;

export const Head = () => <DetailHead page={page} />;

export default AiArchitecturePage;
