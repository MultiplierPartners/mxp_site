import React from "react";
import DetailPage, { DetailHead } from "../../components/DetailPage";

const page = {
  path: "/services/enterprise-ai-strategy/",
  kind: "services",
  eyebrow: "Service · Strategy",
  title: "Enterprise AI Strategy",
  lede: "A clear-eyed plan for where autonomous agents create real economic value across your enterprise — and how to sequence the work without creating identity, governance, or compliance debt.",
  problem: {
    eyebrow: "The problem",
    title: "Why this work exists.",
    paras: [
      "Most enterprise AI strategies are a portfolio of disconnected pilots: a copilot here, an autonomous agent there, a vendor evaluation, another proof of concept. Boards see activity. Operators see sprawl. Security sees identity exposure. Almost no one sees a coherent plan — and almost no one can name the agents that are already acting inside their own systems.",
      "The result is a company that is busy with AI but not actually governing AI. Investment goes up. Risk compounds. Outcomes do not.",
    ],
  },
  stakes: {
    eyebrow: "Why it matters",
    title: "What is at stake.",
    paras: [
      "Autonomous agents are becoming first-class actors inside the enterprise — connecting to data, applications, employees, customers, APIs, and decisions. A strategy that ignores agent identity and governance will produce demos, not durable advantage.",
      "A real enterprise AI strategy has to align value, capability, architecture, identity, governance, and risk reduction. Multiplier Partners is built to do exactly that.",
    ],
  },
  approach: {
    eyebrow: "Engagement approach",
    title: "How it runs.",
    paras: [
      "Strategy engagements are typically 6–10 weeks. We work directly with the executive sponsor — usually the CEO, CIO, CTO, COO, or board AI committee — and embed alongside the operating teams who will deliver the plan.",
      "Outputs are designed to drive decisions, funding, and execution — not to live in a slide deck.",
    ],
  },
  work: {
    eyebrow: "How Multiplier Partners helps",
    title: "What we do in this engagement.",
    items: [
      "Map the highest-value agentic use cases against business reality, not vendor demos",
      "Pressure-test the current portfolio of pilots, copilots, and proofs-of-concept",
      "Sequence investment across identity, governance, architecture, and data",
      "Define a 12–24 month enterprise AI roadmap that boards can stand behind",
      "Identify capability gaps in identity, governance, security, and risk reduction",
      "Translate AI ambition into an operating plan with continuity built in",
    ],
  },
  deliverables: {
    eyebrow: "Typical deliverables",
    title: "What you walk away with.",
    items: [
      "Enterprise AI value map across business units, functions, and decisions",
      "Portfolio assessment of current agents, pilots, and vendor commitments",
      "12–24 month enterprise AI roadmap with clearly sequenced workstreams",
      "Investment and capability plan covering people, identity platform, and governance",
      "Board-ready narrative and metrics to govern the autonomous AI program",
      "Risk and compliance posture statement aligned to how the business actually operates",
    ],
  },
  related: [
    {
      title: "AI Architecture",
      text: "Translate strategy into a real, identity-aware platform.",
      to: "/services/ai-architecture/",
    },
    {
      title: "AI Security & Governance",
      text: "Operating model and policy for the autonomous AI program.",
      to: "/services/ai-security-governance/",
    },
    {
      title: "Scale AI Beyond Pilots",
      text: "Move from experiments to governed enterprise operation.",
      to: "/solutions/scale-ai-beyond-pilots/",
    },
  ],
  cta: {
    title: "Ready to make this real?",
    lede: "Most enterprises start with a focused diagnostic engagement. We'll show you the gaps and the path.",
  },
};

const EnterpriseAiStrategyPage = () => <DetailPage page={page} />;

export const Head = () => <DetailHead page={page} />;

export default EnterpriseAiStrategyPage;
