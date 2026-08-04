import React from "react";
import DetailPage, { DetailHead } from "../../components/DetailPage";

const page = {
  path: "/services/cybersecurity-ai-enterprise/",
  kind: "services",
  eyebrow: "Service · Cybersecurity",
  title: "Cybersecurity for the AI Enterprise",
  lede: "A modern, identity-first security operating model for organizations where autonomous agents are now part of the workforce — credentials, machine trust, audit, and lifecycle continuity included.",
  problem: {
    eyebrow: "The problem",
    title: "Why this work exists.",
    paras: [
      "Traditional cybersecurity programs were not built for an enterprise where any employee can spin up an autonomous agent, any vendor can ship an agent feature, and any integration can take action through a credential nobody attributed to a specific agent identity.",
      "The threat surface has changed. The control set, and especially the identity model, has not always kept up.",
    ],
  },
  stakes: {
    eyebrow: "Why it matters",
    title: "What is at stake.",
    paras: [
      "Autonomous AI is now a security domain in its own right — not an extension of email security or endpoint security. It needs its own threat model, its own identity model, its own controls, its own monitoring, and its own response playbook.",
      "Without that, security teams are reacting to actors they cannot actually identify, scope, or attribute.",
    ],
  },
  approach: {
    eyebrow: "Engagement approach",
    title: "How it runs.",
    paras: [
      "Engagements run 8–14 weeks and pair with the CISO, security architecture, SOC, and risk leadership. We deliver a program, a control library, and a sequenced rollout — not just a posture assessment.",
      "The objective is durable security capability, not a single audit cycle.",
    ],
  },
  work: {
    eyebrow: "How Multiplier Partners helps",
    title: "What we do in this engagement.",
    items: [
      "Stand up an identity-first AI security program inside the existing security organization",
      "Build a threat model for autonomous AI — credential abuse, scope drift, agent impersonation, supply chain",
      "Establish detection, response, and red-team capability for autonomous agents",
      "Integrate agent identity, credentials, and audit with the SOC and incident response process",
      "Address shadow AI without freezing the business — visibility first, then identity, then control",
      "Equip the CISO and board with AI-specific assurance and compliance reporting",
    ],
  },
  deliverables: {
    eyebrow: "Typical deliverables",
    title: "What you walk away with.",
    items: [
      "Identity-first AI security program design integrated with the broader security operating model",
      "Threat and control library specifically for autonomous AI inside the enterprise",
      "AI-aware detection, response, and red-team playbooks",
      "Shadow AI discovery, identity attribution, and risk-prioritized remediation plan",
      "Vendor and supply chain security model for autonomous AI capabilities",
      "CISO and board reporting templates for AI risk, compliance, and assurance",
    ],
  },
  related: [
    {
      title: "AI Security & Governance",
      text: "The policy and operating model layer.",
      to: "/services/ai-security-governance/",
    },
    {
      title: "Identity & Access AI Control",
      text: "Identity is the perimeter for autonomous AI.",
      to: "/services/identity-access-ai-control/",
    },
    {
      title: "AI Security Hub",
      text: "How Multiplier Partners thinks about identity-first AI security.",
      to: "/ai-security/",
    },
  ],
  cta: {
    title: "Ready to make this real?",
    lede: "Most enterprises start with a focused diagnostic engagement. We'll show you the gaps and the path.",
  },
};

const CybersecurityAiEnterprisePage = () => <DetailPage page={page} />;

export const Head = () => <DetailHead page={page} />;

export default CybersecurityAiEnterprisePage;
