import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { navigate } from "gatsby";

/**
 * Search over the documentation and the blog.
 *
 * The index is a single generated JSON file — title, section, headings and the
 * first paragraph of every page — fetched once when the dialog is first opened
 * and filtered in the browser. At this size that is the whole implementation:
 * a few dozen entries is roughly 40 kB, which is less than the JavaScript any
 * hosted search widget would load before it indexed anything.
 *
 * Fetched on open rather than on mount so a reader who never searches never
 * pays for it.
 */

const SCORES = { title: 6, heading: 3, section: 2, body: 1 };

const score = (entry, terms) =>
  terms.reduce((total, term) => {
    const title = entry.title.toLowerCase();
    let best = 0;
    if (title.includes(term)) best = SCORES.title + (title.startsWith(term) ? 2 : 0);
    else if ((entry.headings || []).some((h) => h.toLowerCase().includes(term)))
      best = SCORES.heading;
    else if (`${entry.section} ${entry.group}`.toLowerCase().includes(term))
      best = SCORES.section;
    else if ((entry.description || "").toLowerCase().includes(term))
      best = SCORES.body;
    // Every term has to land somewhere, so an unmatched term zeroes the row.
    return best === 0 ? -Infinity : total + best;
  }, 0);

const SiteSearch = () => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(null);
  const [query, setQuery] = useState("");
  const [cursor, setCursor] = useState(0);
  const inputRef = useRef(null);

  const load = useCallback(() => {
    if (index) return;
    fetch("/search-index.json")
      .then((r) => (r.ok ? r.json() : []))
      .then(setIndex)
      .catch(() => setIndex([]));
  }, [index]);

  const show = useCallback(() => {
    load();
    setOpen(true);
  }, [load]);

  useEffect(() => {
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        show();
      }
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [show]);

  useEffect(() => {
    if (open && inputRef.current) inputRef.current.focus();
  }, [open]);

  const results = useMemo(() => {
    const terms = query.toLowerCase().split(/\s+/).filter(Boolean);
    if (!index || terms.length === 0) return [];
    return index
      .map((entry) => ({ entry, points: score(entry, terms) }))
      .filter((r) => r.points > 0)
      .sort((a, b) => b.points - a.points)
      .slice(0, 8)
      .map((r) => r.entry);
  }, [index, query]);

  useEffect(() => setCursor(0), [query]);

  const go = (entry) => {
    setOpen(false);
    setQuery("");
    navigate(entry.url);
  };

  const onInputKey = (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setCursor((c) => Math.min(c + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setCursor((c) => Math.max(c - 1, 0));
    } else if (e.key === "Enter" && results[cursor]) {
      e.preventDefault();
      go(results[cursor]);
    }
  };

  // Portalled to the body, not rendered in place. The tab bar it lives in
  // carries a backdrop-filter, and that makes the element a containing block
  // for fixed-position descendants — a modal rendered inside it would be
  // positioned against the bar rather than against the viewport.
  const dialog = (
    <div
      className="docs-search__scrim"
      role="presentation"
      onClick={(e) => {
        if (e.target === e.currentTarget) setOpen(false);
      }}
    >
      <div
        className="docs-search__dialog"
        role="dialog"
        aria-modal="true"
        aria-label="Search"
      >
        <input
          ref={inputRef}
          className="docs-search__input"
          type="search"
          value={query}
          placeholder="Search Multiplier Partners…"
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={onInputKey}
          aria-label="Search the site"
        />

        {query && results.length === 0 && (
          <p className="docs-search__empty">
            {index ? "Nothing matches that." : "Loading the index…"}
          </p>
        )}

        {results.length > 0 && (
          <ul className="docs-search__results">
            {results.map((entry, i) => (
              <li key={entry.url}>
                <button
                  type="button"
                  className={`docs-search__result${
                    i === cursor ? " docs-search__result--active" : ""
                  }`}
                  onMouseEnter={() => setCursor(i)}
                  onClick={() => go(entry)}
                >
                  <span className="docs-search__crumb">
                    {entry.section} · {entry.group}
                  </span>
                  <span className="docs-search__title">{entry.title}</span>
                  {entry.description && (
                    <span className="docs-search__blurb">{entry.description}</span>
                  )}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );

  return (
    <>
      <button
        type="button"
        className="docs-search__trigger"
        onClick={show}
        aria-label="Search"
      >
        {/* Two labels rather than one: the short one is what a phone has
            room for. */}
        <span className="docs-search__label">Search</span>
        <span className="docs-search__label--short" aria-hidden="true">
          Search
        </span>
        <kbd>⌘K</kbd>
      </button>
      {open && createPortal(dialog, document.body)}
    </>
  );
};

export default SiteSearch;
