import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import { PageHero, Card, CardGrid, CtaBand } from "../components/Sections";

const chapters = [
  {
    title: "Why most startups fail",
    text: "The recurring patterns behind early-stage failure — premature scale, unclear customer, fragile founding teams, and capital strategies that outpace the business. The early signals that a startup is drifting, and the disciplines that quietly separate the companies that endure.",
  },
  {
    title: "Founder-market fit and the first ten customers",
    text: "Before product-market fit there is founder-market fit. Why the founders' lived experience determines what they can credibly sell, who they can recruit, and how the first ten customers should be chosen.",
  },
  {
    title: "From idea to first funding",
    text: "Turning an idea into a fundable company — narrative, evidence, and the small set of milestones that actually unlock pre-seed and seed capital. What real investors look for at the earliest stage, and what is just noise.",
  },
  {
    title: "Building the founding team",
    text: "The founding team is the single largest predictor of outcome. How to assemble complementary co-founders and the first few hires, how to allocate equity honestly, and how to set the operating contract that holds the team together under pressure.",
  },
  {
    title: "Product-market fit, honestly measured",
    text: "Product-market fit is a lagging indicator, not a feeling. The signals worth trusting, the signals that mislead, and how leadership teams can measure fit without flattering themselves into a false positive.",
  },
  {
    title: "Designing a repeatable go-to-market",
    text: "Moving from founder-led sales to a repeatable motion — ideal customer profile, message-to-market fit, sales cycle architecture, and the first hires who can carry it without the founder in every room.",
  },
  {
    title: "Pricing, packaging, and the first dollar of revenue",
    text: "Pricing is strategy, not an afterthought. How early-stage companies set price, structure packaging, and protect margin — and why the first paying customer is a strategic event, not just a financial one.",
  },
  {
    title: "Selling into the enterprise for the first time",
    text: "The first enterprise deal is a different game from SMB or product-led growth. Procurement, security review, executive sponsorship, and the discipline required to close — and to deliver — without burning the company.",
  },
  {
    title: "From first enterprise deal to a real pipeline",
    text: "A single enterprise win is not a business. Building a credible pipeline, qualifying disciplined opportunities, and turning early customers into reference accounts that compound over the next twelve months.",
  },
  {
    title: "The Series A: what real investors actually buy",
    text: "A Series A is not a reward for traction; it is an underwrite of the next phase. The metrics, the narrative, the team, and the operating plan that serious institutional investors actually evaluate — and what derails otherwise promising rounds.",
  },
  {
    title: "Hiring leaders, not just operators",
    text: "Scale exposes every weak hire. When to bring in the first real leaders across product, engineering, sales, and finance — how to evaluate them, how to onboard them, and how founders should evolve as the team grows around them.",
  },
  {
    title: "Operating cadence: how startups stay honest as they scale",
    text: "A weekly, monthly, and quarterly operating rhythm that keeps the executive team aligned, the board informed, and the company honest about what is and is not working — without drowning in process.",
  },
  {
    title: "Building a finance and metrics layer the board will trust",
    text: "Forecasts, unit economics, cohorts, and the small set of metrics a credible board actually relies on. How to stand up a finance function early enough to inform decisions, not just report on them.",
  },
  {
    title: "Security, compliance, and infrastructure for enterprise buyers",
    text: "Enterprise buyers underwrite their vendors. SOC 2, basic security posture, infrastructure choices, and the operating practices that turn security and compliance from a deal blocker into a quiet advantage.",
  },
  {
    title: "Customer success as a growth engine",
    text: "In B2B, retention is the product of the work, not a separate function. How to design onboarding, expansion, and renewal as a coherent system — and how customer success becomes the most efficient growth channel a startup has.",
  },
  {
    title: "Expanding the platform without losing focus",
    text: "When to add the second product, the second segment, or the second motion — and how to do it without fragmenting the team, the roadmap, or the story. The discipline of sequenced expansion versus opportunistic sprawl.",
  },
  {
    title: "International, partnerships, and channel",
    text: "When international expansion, strategic partnerships, and channel motions actually create leverage — and when they quietly absorb the operating capacity of the company. A practical lens for evaluating each.",
  },
  {
    title: "Scaling the executive team",
    text: "The transition from a founding team to a true executive team — succession in key roles, leveling up or replacing early leaders honestly, and building a leadership group that can run a much larger company than the one you have today.",
  },
  {
    title: "Preparing the company for an exit",
    text: "Whether the path is acquisition, late-stage capital, or IPO, the work of being acquirable starts years earlier. Governance, financial hygiene, customer concentration, and the strategic narrative that determines optionality at the table.",
  },
  {
    title: "The next chapter — what enduring startups look like",
    text: "A forward look at the companies that go from venture-backed startup to durable enterprise — the operating habits, leadership choices, and customer relationships that compound, and what separates a successful exit from an enduring institution.",
  },
];

const pad = (n) => String(n).padStart(2, "0");

const PlaybookPage = () => (
  <Layout>
    <PageHero
      eyebrow="The Startup Playbook"
      crumb="The Startup Playbook"
      title="Twenty short consumable chapters on the keys to building startup success from first funding to delivering enterprise solutions at scale."
      lede="Written for boards, CIOs, CISOs, CTOs, COOs, and the operators who actually have to make this work. The thinking behind every Multiplier Partners engagement, written down."
    />

    <section className="section section--flush">
      <div className="container">
        <CardGrid cols={3}>
          {chapters.map((c, i) => (
            <Card
              key={c.title}
              num={`Chapter ${pad(i + 1)}`}
              title={c.title}
              text={c.text}
            />
          ))}
        </CardGrid>
      </div>
    </section>

    <CtaBand
      title="Bring the Playbook to your team."
      lede="Most engagements begin with a working session anchored in the Playbook's framework for building startup success at enterprise scale."
      secondary={{ label: "About Multiplier Partners", to: "/about/" }}
    />
  </Layout>
);

export const Head = () => (
  <SEO
    title="The Startup Playbook | Multiplier Partners"
    description="Twenty short consumable chapters on the keys to building startup success from first funding to delivering enterprise solutions at scale."
    pathname="/enterprise-ai-playbook/"
  />
);

export default PlaybookPage;
