import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import { PageHero } from "../components/Sections";
import { contact } from "../data/site";

const expectations = [
  "A direct response from a senior Multiplier Partners advisor — not a sequence.",
  "An initial conversation about which autonomous agents you are trying to govern, and what you are accountable for.",
  "A proposed engagement scoped to a real, near-term decision — not an open-ended retainer.",
];

const topics = [
  "Enterprise AI strategy",
  "AI security and governance",
  "Agentic AI",
  "AI architecture",
  "Identity and access for AI",
  "Data readiness",
  "Board/executive advisory",
  "Other",
];

const ContactPage = () => (
  <Layout>
    <PageHero
      eyebrow="Contact"
      title="Talk to Multiplier Partners."
      lede="Most engagements start with an AI Identity & Risk Assessment. Tell us a little about which autonomous agents you are running, what you are trying to govern, and we will respond directly."
    />

    <section className="section section--flush">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-grid__aside">
            <p className="eyebrow eyebrow--plain">Direct</p>
            <a className="contact-email" href={`mailto:${contact.email}`}>
              {contact.email}
            </a>
            <p className="body-copy">
              For executive sponsors, board members, security leaders, and
              operating leaders who want a direct conversation about autonomous
              AI inside their enterprise.
            </p>

            <div className="expect-card">
              <h2 className="expect-card__title">What to expect</h2>
              <ul className="check-list">
                {expectations.map((e) => (
                  <li key={e}>{e}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="form-panel">
            {/* Netlify Forms: the hidden form-name field is what wires this up */}
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="website"
              action="/contact/?submitted=true"
            >
              <input type="hidden" name="form-name" value="contact" />

              {/* Honeypot — hidden from users, catches bots */}
              <div className="visually-hidden" aria-hidden="true">
                <label htmlFor="website">Website</label>
                <input
                  id="website"
                  name="website"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              <div className="field-grid">
                <div className="field">
                  <label htmlFor="name">
                    Name <span className="field__req">*</span>
                  </label>
                  <input id="name" name="name" type="text" required />
                </div>

                <div className="field">
                  <label htmlFor="company">Company</label>
                  <input id="company" name="company" type="text" />
                </div>

                <div className="field">
                  <label htmlFor="email">
                    Email <span className="field__req">*</span>
                  </label>
                  <input id="email" name="email" type="email" required />
                </div>

                <div className="field">
                  <label htmlFor="role">Role</label>
                  <input id="role" name="role" type="text" />
                </div>
              </div>

              <div className="field">
                <label htmlFor="topic">Topic</label>
                <select id="topic" name="topic" defaultValue={topics[0]}>
                  {topics.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </div>

              <div className="field">
                <label htmlFor="message">
                  What are you trying to solve?{" "}
                  <span className="field__req">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  placeholder="Tell us about the AI initiative, the security context, the timeline, and who is involved."
                />
              </div>

              <button className="btn btn--primary btn--pill" type="submit">
                Send to Multiplier Partners
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export const Head = () => (
  <SEO
    title="Contact | Multiplier Partners"
    description="Talk to Multiplier Partners. Most engagements start with an AI Identity & Risk Assessment."
    pathname="/contact/"
  />
);

export default ContactPage;
