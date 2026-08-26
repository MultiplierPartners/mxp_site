/**
 * Applied before the page paints.
 *
 * Without this a reader who chose light sees the dark ground for one frame on
 * every navigation — the stylesheet's default is dark, and React only gets to
 * set the attribute after hydration. The script runs synchronously in <head>,
 * ahead of first paint, so the attribute is already right.
 *
 * It is deliberately tiny and dependency-free: it runs on every page load
 * before anything else, and it must not be able to throw. A reader with
 * storage disabled simply follows their system, which is the default anyway.
 */
const React = require("react");

const applyTheme = `
(function () {
  try {
    var t = localStorage.getItem("mxp-theme");
    if (t === "light" || t === "dark") {
      document.documentElement.setAttribute("data-theme", t);
    }
  } catch (e) {}
})();
`;

exports.onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents([
    React.createElement("script", {
      key: "mxp-theme",
      dangerouslySetInnerHTML: { __html: applyTheme },
    }),
  ]);
};
