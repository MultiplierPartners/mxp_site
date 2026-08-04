import React from "react";
import DetailPage, { DetailHead } from "../../components/DetailPage";

const page = {
  path: "/services/agentic-ai-automation/",
  kind: "services",
  eyebrow: "Service · Agents",
  title: "Agentic AI Identity & Governance",
  lede: "Treat autonomous AI agents as first-class citizens with their own identities, credentials, scoped permissions, and audit trails — governed from issuance to retirement.",
  problem: {
    eyebrow: "The problem",
    title: "Why this work exists.",
    paras: [
      "Agentic AI has moved from research demo to enterprise reality. The problem is that most enterprises are about to deploy autonomous agents that can read sensitive data, act in production systems, and contact customers — without unique identities, credentials, scoped authorization, audit, or a defined lifecycle.",
      "That is not autonomy. That is risk wearing a service account.",
    ],
  },
  stakes: {
    eyebrow: "Why it matters",
    title: "What is at stake.",
    paras: [
      "An autonomous agent that takes action inside the enterprise is not a model anymore. It is an actor. Actors require their own identities, credentials, accountability, and oversight. Anything less is a governance failure waiting to happen — and a compliance event the next time anyone audits it.",
      "Done right, identity-first agentic AI changes the cost and capacity of every operating function. Done wrong, it produces incidents you cannot explain to a board.",
    ],
  },
  approach: {
    eyebrow: "Engagement approach",
    title: "How it runs.",
    paras: [
      "Engagements typically run 8–14 weeks and pair architecture work with a real autonomous agent pilot. We bring identity, governance, and continuity constraints into the design from the very first iteration — not as an afterthought.",
      "The deliverable is an agentic capability the enterprise can keep building on.",
    ],
  },
  work: {
    eyebrow: "How Multiplier Partners helps",
    title: "What we do in this engagement.",
    items: [
      "Design and prioritize agentic use cases with real economic value and clear identity boundaries",
      "Stand up an agent runtime aligned to identity, governance, and audit",
      "Issue unique credentials and crypto-keys per agent, with rotation and revocation",
      "Define a tool and data registry that controls what each agent can do, scoped by identity",
      "Build human-in-the-loop checkpoints for sensitive or irreversible actions",
      "Establish lifecycle continuity — issuance, delegation, escalation, retirement, red-teaming",
    ],
  },
  deliverables: {
    eyebrow: "Typical deliverables",
    title: "What you walk away with.",
    items: [
      "Agentic use case portfolio with risk classification and identity-first rollout sequence",
      "Agent identity and runtime design integrated with the existing IAM, IGA, and PAM stack",
      "Per-agent credential and crypto-key model, with rotation, scoping, and revocation patterns",
      "Operational guardrails — rate limits, scopes, time windows, kill switches, escalation",
      "Audit and observability spec covering every agent action and decision",
      "Pilot delivery of one or more autonomous agents in production-grade governed conditions",
    ],
  },
  related: [
    {
      title: "Identity & Access AI Control",
      text: "Identity and least privilege for autonomous AI agents.",
      to: "/services/identity-access-ai-control/",
    },
    {
      title: "AI Architecture",
      text: "The runtime that identified agents actually run on.",
      to: "/services/ai-architecture/",
    },
    {
      title: "Govern AI Agents",
      text: "A solution focused on agent identity and governance.",
      to: "/solutions/govern-ai-agents/",
    },
  ],
  cta: {
    title: "Ready to make this real?",
    lede: "Most enterprises start with a focused diagnostic engagement. We'll show you the gaps and the path.",
  },
};

const AgenticAiAutomationPage = () => <DetailPage page={page} />;

export const Head = () => <DetailHead page={page} />;

export default AgenticAiAutomationPage;
