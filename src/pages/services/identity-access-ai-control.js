import React from "react";
import DetailPage, { DetailHead } from "../../components/DetailPage";

const page = {
  path: "/services/identity-access-ai-control/",
  kind: "services",
  eyebrow: "Service · Identity",
  title: "Identity & Access AI Control",
  lede: "Treat autonomous agents as first-class citizens. Each gets its own identity, credentials, crypto-keys, scoped permissions, and audit — across applications, data, and APIs the enterprise actually runs on.",
  problem: {
    eyebrow: "The problem",
    title: "Why this work exists.",
    paras: [
      "Most identity programs were built for humans. Autonomous AI agents are not humans. Today they typically authenticate through shared service accounts, inherit far too much access, hold no cryptographic identity of their own, and rarely have meaningful audit attached to what they actually do on behalf of a user.",
      "Once an agent can read everything a user can read, every prompt becomes a potential exfiltration path — and every action becomes a compliance event no one can attribute.",
    ],
  },
  stakes: {
    eyebrow: "Why it matters",
    title: "What is at stake.",
    paras: [
      "Identity is the new perimeter for autonomous AI. If an enterprise cannot answer who is acting, on whose behalf, with what scoped authority, against which data, and with which crypto-key — then it cannot govern AI at all. It cannot reduce risk, and it cannot satisfy audit.",
      "Strong AI identity and access control is what makes the rest of the AI program possible: governance, lifecycle continuity, audit, regulatory response, and incident investigation all depend on it.",
    ],
  },
  approach: {
    eyebrow: "Engagement approach",
    title: "How it runs.",
    paras: [
      "Engagements run 6–12 weeks and pair with security, identity, and platform leadership. We deliver an identity and access reference architecture, an integration plan with the existing IAM stack, a per-agent credential and crypto-key model, and a phased rollout you can execute.",
      "We focus on what is operationally workable, not theoretical.",
    ],
  },
  work: {
    eyebrow: "How Multiplier Partners helps",
    title: "What we do in this engagement.",
    items: [
      "Define identity, credentials, and crypto-keys for every autonomous agent and copilot",
      "Establish least-privilege patterns for AI access to applications, data, and APIs",
      "Bridge AI runtimes with the existing IAM, IGA, and PAM stack — agents as first-class citizens",
      "Design governed delegation — acting on behalf of a user without over-permissioning",
      "Stand up audit trails that humans, security, and regulators can actually use",
      "Define lifecycle continuity — issuance, rotation, revocation, retirement of agent identity",
    ],
  },
  deliverables: {
    eyebrow: "Typical deliverables",
    title: "What you walk away with.",
    items: [
      "AI identity reference architecture covering autonomous agents, copilots, and humans",
      "Authorization model — scopes, delegation, sensitive data access, escalation",
      "Per-agent credential and crypto-key model with rotation and revocation",
      "Audit, logging, and evidence model aligned to security operations and compliance",
      "Integration plan with existing identity, IGA, and PAM platforms",
      "Operating playbook for ongoing AI access reviews, certifications, and lifecycle continuity",
    ],
  },
  related: [
    {
      title: "AI Security & Governance",
      text: "The policy layer above identity, scope, and audit.",
      to: "/services/ai-security-governance/",
    },
    {
      title: "Agentic AI Identity & Governance",
      text: "Identity-aware agent design from the start.",
      to: "/services/agentic-ai-automation/",
    },
    {
      title: "Cybersecurity for the AI Enterprise",
      text: "Integrating agent identity into security operations.",
      to: "/services/cybersecurity-ai-enterprise/",
    },
  ],
  cta: {
    title: "Ready to make this real?",
    lede: "Most enterprises start with a focused diagnostic engagement. We'll show you the gaps and the path.",
  },
};

const IdentityAccessAiControlPage = () => <DetailPage page={page} />;

export const Head = () => <DetailHead page={page} />;

export default IdentityAccessAiControlPage;
