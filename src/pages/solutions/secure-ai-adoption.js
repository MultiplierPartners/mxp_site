import React from "react";
import DetailPage, { DetailHead } from "../../components/DetailPage";

const page = {
  path: "/solutions/secure-ai-adoption/",
  kind: "solutions",
  eyebrow: "Solution",
  title: "Secure AI Adoption",
  lede: "Adopt autonomous AI broadly across the enterprise — without creating identity, data, governance, or compliance exposure boards cannot defend.",
  problem: {
    eyebrow: "The problem",
    title: "Why this work exists.",
    paras: [
      "Most enterprises are facing the same uncomfortable picture: rapid internal autonomous agent adoption, expanding vendor agent features, growing shadow AI use, and an identity and governance program that is still catching up.",
      "The risk is no longer hypothetical — it is operational, and it is attributable to specific agent identities the enterprise has not yet defined.",
    ],
  },
  stakes: {
    eyebrow: "Why it matters",
    title: "What is at stake.",
    paras: [
      "Enterprises that get adoption right become measurably more capable and more competitive. Enterprises that get adoption wrong end up as case studies — for breaches, leaks, regulatory actions, or board-level reputational events tied to autonomous agents nobody could attribute.",
      "The quality of agent identity, governance, and compliance is now a strategic differentiator.",
    ],
  },
  approach: {
    eyebrow: "Engagement approach",
    title: "How it runs.",
    paras: [
      "Engagements run 8–14 weeks and pair with the CIO, CISO, and risk leadership. We work as senior advisors and program leaders — not as auditors — so the work actually lands.",
      "The objective is durable AI safety and machine trust, not a one-time posture report.",
    ],
  },
  work: {
    eyebrow: "How Multiplier Partners helps",
    title: "What we do in this engagement.",
    items: [
      "Diagnose the current AI exposure — pilots, vendors, autonomous agents, and shadow AI",
      "Stand up the identity, governance, and operating model required to scale safely",
      "Define guardrails for prompts, agents, sensitive data, and integrations",
      "Wire autonomous agents into identity, audit, and security operations",
      "Equip the executive team and board with credible AI assurance and compliance reporting",
      "Sequence remediation by risk so the business is not blocked",
    ],
  },
  deliverables: {
    eyebrow: "Typical deliverables",
    title: "What you walk away with.",
    items: [
      "AI exposure map across the enterprise — internal, vendor, and shadow autonomous AI",
      "Governance, policy, and operating model that scales with adoption",
      "Identity-first security control library tailored to enterprise agent usage patterns",
      "Identity, credential, and audit integration plan for autonomous agents and copilots",
      "Board and executive AI assurance and compliance reporting",
      "Risk-prioritized remediation plan that does not freeze the business",
    ],
  },
  related: [
    {
      title: "AI Security & Governance",
      text: "The policy and operating model layer.",
      to: "/services/ai-security-governance/",
    },
    {
      title: "Cybersecurity for the AI Enterprise",
      text: "Modern, identity-first security for autonomous agents.",
      to: "/services/cybersecurity-ai-enterprise/",
    },
    {
      title: "Govern AI Agents",
      text: "Specifically focused on agent identity and governance.",
      to: "/solutions/govern-ai-agents/",
    },
  ],
  cta: {
    title: "Ready to make this real?",
    lede: "Most enterprises start with a focused diagnostic engagement. We'll show you the gaps and the path.",
  },
};

const SecureAiAdoptionPage = () => <DetailPage page={page} />;

export const Head = () => <DetailHead page={page} />;

export default SecureAiAdoptionPage;
