import React from "react";
import DetailPage, { DetailHead } from "../../components/DetailPage";

const page = {
  path: "/solutions/scale-ai-beyond-pilots/",
  kind: "solutions",
  eyebrow: "Solution",
  title: "Scale AI Beyond Pilots",
  lede: "Move from disconnected experiments to enterprise-grade autonomous AI — with the identity, architecture, governance, and continuity to make it durable across business units.",
  problem: {
    eyebrow: "The problem",
    title: "Why this work exists.",
    paras: [
      "Your enterprise has more AI activity than it has AI governance. Multiple pilots, multiple vendors, multiple shadow tools, multiple agents authenticating with shared service accounts. None of it adds up to a platform, a program, or a defensible identity posture.",
      "Boards are now asking the obvious next question: which of these agents is actually under enterprise control?",
    ],
  },
  stakes: {
    eyebrow: "Why it matters",
    title: "What is at stake.",
    paras: [
      "Pilots succeed by avoiding the hard problems. Enterprise-scale autonomous AI cannot. Identity, governance, architecture, continuity, and data — all the things pilots gloss over — are exactly what determine whether autonomous AI scales or stalls.",
      "Companies that figure this out compound their AI advantage. Companies that do not stay stuck explaining unattributed agent activity to the audit committee.",
    ],
  },
  approach: {
    eyebrow: "Engagement approach",
    title: "How it runs.",
    paras: [
      "Solution engagements run 8–14 weeks. We work directly with the executive sponsor and the AI program leadership, embedding with architecture, security, and operations to keep the plan grounded in reality.",
      "The output is a plan that gets funded — and gets done.",
    ],
  },
  work: {
    eyebrow: "How Multiplier Partners helps",
    title: "What we do in this engagement.",
    items: [
      "Triage the existing portfolio — what to scale, kill, consolidate, or replatform",
      "Stand up the identity-aware AI platform and operating capability the business will reuse",
      "Bring identity, governance, audit, and continuity along — not behind",
      "Define a 12–24 month enterprise AI roadmap the executive team can fund",
      "Set up the metrics and reporting that prove autonomous AI is paying for itself, safely",
      "Coach the leadership team through the operating changes governed autonomy requires",
    ],
  },
  deliverables: {
    eyebrow: "Typical deliverables",
    title: "What you walk away with.",
    items: [
      "Portfolio decision framework for autonomous AI initiatives across the enterprise",
      "Enterprise AI platform and operating model design with identity built in",
      "Cross-functional roadmap aligning identity, governance, architecture, data, and compliance",
      "Executive sponsor and board narrative for governed AI scaling",
      "Investment plan, capability plan, and team design",
      "Operating cadences and metrics that keep the program honest",
    ],
  },
  related: [
    {
      title: "Enterprise AI Strategy",
      text: "The strategic foundation for governed scaling.",
      to: "/services/enterprise-ai-strategy/",
    },
    {
      title: "AI Architecture",
      text: "The identity-aware platform that makes scaling possible.",
      to: "/services/ai-architecture/",
    },
    {
      title: "Secure AI Adoption",
      text: "How to scale without creating identity exposure.",
      to: "/solutions/secure-ai-adoption/",
    },
  ],
  cta: {
    title: "Ready to make this real?",
    lede: "Most enterprises start with a focused diagnostic engagement. We'll show you the gaps and the path.",
  },
};

const ScaleAiBeyondPilotsPage = () => <DetailPage page={page} />;

export const Head = () => <DetailHead page={page} />;

export default ScaleAiBeyondPilotsPage;
