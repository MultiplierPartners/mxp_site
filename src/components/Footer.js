import React from "react";
import { Link } from "gatsby";
import {
  contact,
  footerColumns,
  footerBlurb,
  tagline,
  u4a,
  partners,
} from "../data/site";

const isInternal = (to) => to && to.startsWith("/");

const Footer = () => (
  <footer className="mxp-footer">
    <div className="container">
      <div className="mxp-footer__top">
        <div>
          <div className="mxp-footer__mark">MXP</div>
          <p className="mxp-footer__blurb">{footerBlurb}</p>

          <p className="mxp-footer__label">For new engagements</p>
          <a className="mxp-footer__email" href={`mailto:${contact.email}`}>
            {contact.email}
          </a>
          {/* The project this practice builds in the open. In the footer as
              well as on the home page because it is reached from every page,
              not only the one somebody landed on. */}
          <p className="mxp-footer__label">Current work</p>
          <a
            className="mxp-footer__project"
            href={u4a.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="mxp-footer__project-name">{u4a.name}</span>
            <span className="mxp-footer__project-url">{u4a.label}</span>
          </a>

          {/* Names only — what each of them does is their own site's to say. */}
          <p className="mxp-footer__label">Partners</p>
          <div className="mxp-footer__partners">
            {partners.map((p) => (
              <a
                key={p.url}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {p.name}
              </a>
            ))}
          </div>

          <a
            className="btn btn--ghost mxp-footer__linkedin"
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/img/linkedin-icon.svg" alt="" width="18" height="18" />
            Connect with me on LinkedIn
          </a>
        </div>

        {footerColumns.map((col) => (
          <div className="mxp-footer__col" key={col.heading}>
            <h3>{col.heading}</h3>
            <ul>
              {col.links.map((link) => (
                <li key={link.label}>
                  {isInternal(link.to) ? (
                    <Link to={link.to}>{link.label}</Link>
                  ) : (
                    <span>{link.label}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mxp-footer__bottom">
        <span>&copy; {new Date().getFullYear()} MXP. All rights reserved.</span>
        <span>{tagline}</span>
        <Link className="link-arrow" to="/contact/">
          Talk to Multiplier Partners &rarr;
        </Link>
      </div>
    </div>
  </footer>
);

export default Footer;
