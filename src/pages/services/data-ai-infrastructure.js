import React from "react";
import DetailPage, { DetailHead } from "../../components/DetailPage";

const page = {
  path: "/services/data-ai-infrastructure/",
  kind: "services",
  eyebrow: "Service · Data",
  title: "Data & AI Infrastructure",
  lede: "The data foundation autonomous agents can actually use — curated, permissioned, observable, and aligned to identity and least privilege from the start.",
  problem: {
    eyebrow: "The problem",
    title: "Why this work exists.",
    paras: [
      "Most AI initiatives stall at the data layer. Either the data is locked in disconnected systems, or it is connected but under-permissioned, or it is permissioned but unreviewed and wrong. Autonomous agents then either hallucinate, leak, or both — and nobody can tell which agent identity touched what.",
      "The fix is not another data lake. It is a curated, permissioned, observable knowledge layer designed for identity-aware agent access from the start.",
    ],
  },
  stakes: {
    eyebrow: "Why it matters",
    title: "What is at stake.",
    paras: [
      "Autonomous agents are only as governed as the knowledge they are allowed to read. And they are only as safe as the identity-scoped boundaries on what they are allowed to read. Data infrastructure is therefore both an enablement problem and a compliance problem at the same time.",
      "Without it, agent quality plateaus and agent risk compounds.",
    ],
  },
  approach: {
    eyebrow: "Engagement approach",
    title: "How it runs.",
    paras: [
      "Engagements typically run 8–14 weeks and pair with data, platform, and security leadership. We deliver an architecture and an actionable plan that puts autonomous agents on a defensible, identity-aware knowledge foundation — and keeps it there across the agent lifecycle.",
      "The knowledge layer is built to evolve as autonomous capability evolves.",
    ],
  },
  work: {
    eyebrow: "How Multiplier Partners helps",
    title: "What we do in this engagement.",
    items: [
      "Design the AI knowledge layer — sources, curation, identity-scoped permissions, freshness",
      "Establish patterns for retrieval, semantic search, and identity-aware structured access",
      "Define what each agent identity is allowed to use — and just as importantly, what it is not",
      "Build observability into prompts, retrievals, and per-agent data access",
      "Align data classification, sensitivity, and agent access policies for compliance",
      "Plan the AI data team and the operating cadence around it",
    ],
  },
  deliverables: {
    eyebrow: "Typical deliverables",
    title: "What you walk away with.",
    items: [
      "AI knowledge architecture covering retrieval, structured data, and tools",
      "Source-of-truth and curation policy for AI-accessible content",
      "Sensitivity and permissioning model integrated with agent identity and access",
      "AI data observability spec — what was retrieved, by which agent identity, for which user",
      "Operating model and team design for AI data engineering",
      "Phased delivery plan for the highest-value, lowest-risk knowledge surfaces",
    ],
  },
  related: [
    {
      title: "AI Architecture",
      text: "The platform that consumes the knowledge layer.",
      to: "/services/ai-architecture/",
    },
    {
      title: "AI Security & Governance",
      text: "Policy for what autonomous agents are allowed to know.",
      to: "/services/ai-security-governance/",
    },
    {
      title: "Identity & Access AI Control",
      text: "Per-agent permissions on top of the data foundation.",
      to: "/services/identity-access-ai-control/",
    },
  ],
  cta: {
    title: "Ready to make this real?",
    lede: "Most enterprises start with a focused diagnostic engagement. We'll show you the gaps and the path.",
  },
};

const DataAiInfrastructurePage = () => <DetailPage page={page} />;

export const Head = () => <DetailHead page={page} />;

export default DataAiInfrastructurePage;
