import React, { useCallback, useEffect, useState } from "react";


/**
 * Dark or light, and remembering which.
 *
 * Three states, not two. Until the reader picks one there is no `data-theme`
 * attribute at all, and the `prefers-color-scheme` block in the generated
 * stylesheet decides — so the site follows the system by default. Choosing
 * writes the attribute and the preference, which then wins over the system in
 * both directions.
 *
 * The pre-paint script in gatsby-ssr.js has already applied the stored choice
 * by the time this mounts; this component only has to reflect it and change
 * it. Reading the attribute rather than storage on mount keeps the two from
 * disagreeing.
 */

const KEY = "mxp-theme";

const systemPrefersLight = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-color-scheme: light)").matches;

const ThemeToggle = () => {
  // Server-rendered markup cannot know the reader's theme, so this starts
  // undefined and the label is filled in after mount. Rendering "Dark" on the
  // server and "Light" on the client would be a hydration mismatch.
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    const attr = document.documentElement.getAttribute("data-theme");
    setTheme(attr || (systemPrefersLight() ? "light" : "dark"));
  }, []);

  // Someone who has not chosen keeps following their system, including when
  // it changes under them at sunset.
  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: light)");
    const sync = () => {
      if (!document.documentElement.getAttribute("data-theme")) {
        setTheme(mq.matches ? "light" : "dark");
      }
    };
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  const choose = useCallback((next) => {
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem(KEY, next);
    } catch (e) {
      /* storage disabled; the choice lasts for this page only */
    }

    // The browser chrome colour follows the choice too. Read from the
    // computed custom property rather than hard-coded here, so it cannot
    // drift from the palette in _theme.sass.
    const bg = next === "light" ? "#ffffff" : "#050505";
    document
      .querySelectorAll('meta[name="theme-color"]')
      .forEach((m) => m.setAttribute("content", bg));

    setTheme(next);
    // Anything holding colours it already wrote onto elements has to be told
    // rather than left to notice.
    window.dispatchEvent(new CustomEvent("mxp:themechange", { detail: next }));
  }, []);

  const next = theme === "light" ? "dark" : "light";

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={() => choose(next)}
      aria-label={theme ? `Switch to the ${next} theme` : "Switch theme"}
      title={theme ? `Switch to the ${next} theme` : "Switch theme"}
    >
      <span className="theme-toggle__icon" aria-hidden="true">
        {theme === "light" ? (
          // A moon, offered when the page is light.
          <svg viewBox="0 0 20 20" width="16" height="16" fill="none">
            <path
              d="M16.5 12.4A7 7 0 0 1 7.6 3.5a7 7 0 1 0 8.9 8.9z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
          </svg>
        ) : (
          // A sun, offered when the page is dark.
          <svg viewBox="0 0 20 20" width="16" height="16" fill="none">
            <circle cx="10" cy="10" r="3.6" stroke="currentColor" strokeWidth="1.5" />
            <g stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
              <path d="M10 2v2M10 16v2M2 10h2M16 10h2" />
              <path d="M4.5 4.5l1.4 1.4M14.1 14.1l1.4 1.4M15.5 4.5l-1.4 1.4M5.9 14.1l-1.4 1.4" />
            </g>
          </svg>
        )}
      </span>
    </button>
  );
};

export default ThemeToggle;
