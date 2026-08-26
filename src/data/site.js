// Shared site chrome data for Multiplier Partners (MXP)

export const contact = {
  email: "matt@multiplierpartners.ai",
  linkedin: "https://www.linkedin.com/in/matt-teeple-059ab8174",
};

// UMA for Agents — the open reference implementation of the control layer
// this practice advises on. Kept here rather than written into a page,
// because it is now linked from the home page, the footer and llms.txt.
export const people = {
  nick: { name: "Nick Gamb", linkedin: "https://www.linkedin.com/in/nickgamb/" },
  eve: { name: "Eve Maler", linkedin: "https://www.linkedin.com/in/evemaler/" },
};

export const u4a = {
  url: "https://u4a.ai",
  label: "u4a.ai",
  name: "UMA for Agents",
  repo: "https://github.com/nickgamb/uma4agents",
  // The same one-click launch the "try it now" button on u4a.ai uses.
  codespace:
    "https://codespaces.new/nickgamb/uma4agents?devcontainer_path=.devcontainer%2Fdevcontainer.json",
  post: "/blog/2026-08-06-let-them-a-developers-guide-to-u4a/",
};

// The other practices this work is done with. u4a.ai is not here — it has
// its own line above as the current work, and listing it twice would be the
// same link twice.
export const partners = [
  { name: "Venn Factory", url: "https://www.vennfactory.com" },
  { name: "MindGarden", url: "https://mindgardenai.com" },
];

export const ctaLabel = "AI Security Assessment Now";
export const ctaTo = "/contact/";

// Primary navigation — mirrors multiplierpartners.ai, plus the new Blog entry
export const navLinks = [
  { label: "Services", to: "/services/" },
  { label: "Solutions", to: "/solutions/" },
  { label: "Security", to: "/ai-security/" },
  { label: "Insights", to: "/insights/" },
  { label: "Playbook", to: "/enterprise-ai-playbook/" },
  { label: "Blog", to: "/blog/" },
  { label: "About", to: "/about/" },
  { label: "Contact", to: "/contact/" },
];

export const services = [
  {
    title: "Enterprise AI Strategy",
    slug: "/services/enterprise-ai-strategy/",
    text: "Where autonomous agents create real value across the enterprise, what to govern first, and how to sequence identity, capability, and risk.",
  },
  {
    title: "AI Security & Governance",
    slug: "/services/ai-security-governance/",
    text: "Policy, controls, and operating models for autonomous agents — built for boards, regulators, and modern security and risk teams.",
  },
  {
    title: "AI Architecture",
    slug: "/services/ai-architecture/",
    text: "Reference architectures for agent identity, model gateways, retrieval, and the AI control plane the rest of the enterprise can rely on.",
  },
  {
    title: "Agentic AI Identity & Governance",
    slug: "/services/agentic-ai-automation/",
    text: "Autonomous AI agents with their own credentials, scoped permissions, audit trails, and lifecycle continuity — governed from day one.",
  },
  {
    title: "Identity & Access AI Control",
    slug: "/services/identity-access-ai-control/",
    text: "Identity, least privilege, and machine trust for autonomous agents — across applications, data, and APIs the enterprise actually runs on.",
  },
  {
    title: "Data & AI Infrastructure",
    slug: "/services/data-ai-infrastructure/",
    text: "Curated, permissioned, observable knowledge that agents are explicitly allowed to use — and not. Data foundations for agent identity, not for dashboards.",
  },
  {
    title: "Cybersecurity for the AI Enterprise",
    slug: "/services/cybersecurity-ai-enterprise/",
    text: "A modern, identity-first security operating model for organizations where autonomous agents are now part of the workforce.",
  },
];

export const solutions = [
  {
    title: "Scale AI Beyond Pilots",
    slug: "/solutions/scale-ai-beyond-pilots/",
    text: "Move from disconnected experiments to enterprise-grade autonomous AI — identity, governance, and continuity built in across business units.",
  },
  {
    title: "Secure AI Adoption",
    slug: "/solutions/secure-ai-adoption/",
    text: "Adopt autonomous AI broadly without creating identity, governance, or compliance exposure that boards cannot defend.",
  },
  {
    title: "Govern AI Agents",
    slug: "/solutions/govern-ai-agents/",
    text: "A practical operating model for treating autonomous agents as first-class citizens — identity, scope, audit, and lifecycle continuity.",
  },
  {
    title: "AI Risk Assurance for the Board",
    slug: "/contact/",
    text: "Give the board a credible, repeatable view of agent identity, governance, controls, and risk reduction across the enterprise.",
  },
  {
    title: "Shadow AI Discovery & Remediation",
    slug: "/contact/",
    text: "Find autonomous AI use you did not authorize, attribute it to identities, classify the risk, and remediate without freezing the business.",
  },
  {
    title: "Agent Identity for Customer & Revenue Operations",
    slug: "/contact/",
    text: "Apply autonomous agents safely inside revenue, support, and customer-facing operations — with the identity, audit, and compliance controls boards expect.",
  },
  {
    title: "Agentic AI for Security Operations",
    slug: "/contact/",
    text: "Augment security operations with governed autonomous agents — detection, triage, and response — with identity and oversight by design.",
  },
  {
    title: "AI Identity & Access Modernization",
    slug: "/contact/",
    text: "Bring identity, authorization, audit, and machine trust up to the standard autonomous agents require.",
  },
  {
    title: "AI Data Readiness",
    slug: "/contact/",
    text: "Build the curated, permissioned, observable knowledge layer autonomous agents actually need — scoped to identity, not to dashboards.",
  },
];

export const footerColumns = [
  {
    heading: "Services",
    links: services.map((s) => ({
      label: s.title,
      to: s.slug || "/services/",
    })),
  },
  {
    heading: "Solutions",
    links: [
      {
        label: "Scale AI Beyond Pilots",
        to: "/solutions/scale-ai-beyond-pilots/",
      },
      { label: "Secure AI Adoption", to: "/solutions/secure-ai-adoption/" },
      { label: "Govern AI Agents", to: "/solutions/govern-ai-agents/" },
      { label: "AI Security Hub", to: "/ai-security/" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", to: "/about/" },
      { label: "Insights", to: "/insights/" },
      { label: "Enterprise AI Playbook", to: "/enterprise-ai-playbook/" },
      { label: "Blog", to: "/blog/" },
      { label: "Contact", to: "/contact/" },
    ],
  },
];

export const footerBlurb =
  "Enterprise AI & Security Advisory. Identity, governance, and machine trust for autonomous AI agents at enterprise scale.";

export const tagline = "Identity for Agentic, Continuity, and Enterprise.";
