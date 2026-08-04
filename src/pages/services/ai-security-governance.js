import React from "react";
import DetailPage, { DetailHead } from "../../components/DetailPage";

const page = {
  path: "/services/ai-security-governance/",
  kind: "services",
  eyebrow: "Service · Governance",
  title: "AI Security & Governance",
  lede: "Practical identity-first governance for organizations where autonomous AI agents are now acting inside the enterprise — built for boards, regulators, and the security teams who have to defend it.",
  problem: {
    eyebrow: "The problem",
    title: "Why this work exists.",
    paras: [
      "Most enterprise AI activity is happening faster than the identity, governance, and audit work needed to support it. Autonomous agents are being adopted, wired into production data, and granted credentials that nobody is auditing — often without a policy, a scoped permission, or a signoff that a regulator would accept.",
      "When the question comes — from a board member, an auditor, or a regulator — most enterprises cannot answer it.",
    ],
  },
  stakes: {
    eyebrow: "Why it matters",
    title: "What is at stake.",
    paras: [
      "AI governance is not a checkbox on a vendor questionnaire. It is the difference between autonomous AI that is trusted to act across the enterprise and autonomous AI that gets revoked after the first incident, the first leak, or the first regulatory inquiry.",
      "Boards now ask, in writing, how autonomous agents are being identified, scoped, and audited. The organizations that can answer credibly are the ones that get to keep moving.",
    ],
  },
  approach: {
    eyebrow: "Engagement approach",
    title: "How it runs.",
    paras: [
      "Most engagements run 8–12 weeks and pair with security, legal, risk, and the AI program leadership. We deliver a governance operating model, the supporting policy and control set, and a phased implementation plan that the organization can run.",
      "We write for executives and regulators, not for compliance shelves.",
    ],
  },
  work: {
    eyebrow: "How Multiplier Partners helps",
    title: "What we do in this engagement.",
    items: [
      "Build an autonomous AI governance operating model fit for the enterprise",
      "Translate AI policy into actual identity, technical, and operational controls",
      "Establish an agent risk taxonomy aligned to the business and regulators",
      "Stand up an AI Council, agent registry, and review process that actually works",
      "Define identity and access guardrails for prompts, models, agents, data, and integrations",
      "Prepare boards and executive committees with credible AI assurance and compliance reporting",
    ],
  },
  deliverables: {
    eyebrow: "Typical deliverables",
    title: "What you walk away with.",
    items: [
      "Autonomous AI governance operating model with roles, decision rights, and review cadences",
      "AI policy library covering acceptable use, sensitive data, agent identity, and vendors",
      "Agent and use-case registry with risk classification and review workflow",
      "Control library mapping policy to architecture, identity, and lifecycle continuity",
      "Board and executive AI assurance and compliance reporting templates",
      "Implementation roadmap to operationalize governance over 6–12 months",
    ],
  },
  related: [
    {
      title: "Identity & Access AI Control",
      text: "Least privilege and machine trust for agents and copilots.",
      to: "/services/identity-access-ai-control/",
    },
    {
      title: "Cybersecurity for the AI Enterprise",
      text: "Modern, identity-first security for autonomous agents.",
      to: "/services/cybersecurity-ai-enterprise/",
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

const AiSecurityGovernancePage = () => <DetailPage page={page} />;

export const Head = () => <DetailHead page={page} />;

export default AiSecurityGovernancePage;
