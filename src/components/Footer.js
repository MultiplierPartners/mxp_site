import React from "react";
import { Link } from "gatsby";
import { contact, footerColumns, footerBlurb, tagline } from "../data/site";

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
