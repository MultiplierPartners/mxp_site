import * as React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../style/custom-style.sass";

// The MXP brand uses the native system sans stack, so no webfont is loaded.
const Layout = ({ children }) => (
  <>
    <a className="skip-link" href="#main">
      Skip to content
    </a>
    <Navbar />
    <main id="main">{children}</main>
    <Footer />
  </>
);

export default Layout;
