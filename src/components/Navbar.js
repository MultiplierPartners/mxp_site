import React, { useState } from "react";
import { Link } from "gatsby";
import { navLinks, ctaLabel, ctaTo } from "../data/site";
import SiteSearch from "./SiteSearch";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="mxp-nav">
      <nav
        className="mxp-nav__inner"
        role="navigation"
        aria-label="Main navigation"
      >
        <Link
          to="/"
          className="mxp-nav__brand"
          aria-label="Multiplier Partners home"
        >
          {/* The mark as artwork rather than as bold text. The link already
              names itself for a screen reader, so both images are decorative.

              Two files rather than one: it is a gradient, so it cannot follow
              `currentColor`, and the silver cut that reads on near-black is
              nearly invisible on paper. CSS shows whichever matches. */}
          <img
            className="mxp-nav__mark mxp-nav__mark--dark"
            src="/img/mxp-nav.svg"
            alt=""
            width="61"
            height="20"
          />
          <img
            className="mxp-nav__mark mxp-nav__mark--light"
            src="/img/mxp-nav-light.svg"
            alt=""
            width="61"
            height="20"
          />
          <span className="mxp-nav__tagline">
            Delivering Enterprise Identity Continuity and Agentic Security
          </span>
        </Link>

        <ul className="mxp-nav__links">
          {navLinks.map((item) => (
            <li key={item.to}>
              <Link
                className="mxp-nav__link"
                activeClassName="mxp-nav__link--active"
                partiallyActive={item.to !== "/"}
                to={item.to}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="mxp-nav__tools">
          <SiteSearch />
          <ThemeToggle />
        </div>

        <Link className="btn btn--primary mxp-nav__cta" to={ctaTo}>
          {ctaLabel}
        </Link>

        <button
          className={`mxp-nav__burger${mobileOpen ? " is-open" : ""}`}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {mobileOpen && (
        <div className="mxp-nav__mobile">
          <Link to="/" onClick={() => setMobileOpen(false)}>
            Home
          </Link>
          {navLinks.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            className="btn btn--primary"
            to={ctaTo}
            onClick={() => setMobileOpen(false)}
          >
            {ctaLabel}
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
