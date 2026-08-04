import React, { useEffect, useRef, useState } from "react";

const MCP_URL = "https://multiplierpartners.ai/mcp";
const MCP_NAME = "mxp-blog";

const SITE = "https://multiplierpartners.ai";

// Deep links for editors that can install an MCP server from a URL.
const cursorLink = () => {
  const config =
    typeof window === "undefined"
      ? ""
      : window.btoa(JSON.stringify({ url: MCP_URL }));
  return `cursor://anysphere.cursor-deeplink/mcp/install?name=${MCP_NAME}&config=${config}`;
};

const vscodeLink = () =>
  `vscode:mcp/install?${encodeURIComponent(
    JSON.stringify({ name: MCP_NAME, url: MCP_URL }),
  )}`;

const Item = ({ icon, label, hint, onClick, href }) => {
  const content = (
    <>
      <span className="page-actions__icon" aria-hidden="true">
        {icon}
      </span>
      <span>
        <span className="page-actions__label">{label}</span>
        <span className="page-actions__hint">{hint}</span>
      </span>
    </>
  );

  return href ? (
    <a
      className="page-actions__item"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      role="menuitem"
    >
      {content}
    </a>
  ) : (
    <button
      className="page-actions__item"
      type="button"
      onClick={onClick}
      role="menuitem"
    >
      {content}
    </button>
  );
};

/**
 * "Copy page" split button with an actions menu, for handing this page to an
 * LLM — either as Markdown, or by connecting to the site's MCP server.
 *
 * `markdownPath` is optional: without it the page-specific actions are hidden
 * and only the MCP actions render (used on the blog index).
 */
const PageActions = ({ markdownPath, pagePath }) => {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(null);
  const ref = useRef(null);

  useEffect(() => {
    if (!open) return undefined;
    const onDown = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const flash = (msg) => {
    setCopied(msg);
    setTimeout(() => setCopied(null), 2000);
  };

  const copyMarkdown = async () => {
    try {
      const res = await fetch(markdownPath);
      await navigator.clipboard.writeText(await res.text());
      flash("Page copied");
    } catch {
      flash("Copy failed");
    }
    setOpen(false);
  };

  const copyMcp = async () => {
    try {
      await navigator.clipboard.writeText(MCP_URL);
      flash("MCP URL copied");
    } catch {
      flash("Copy failed");
    }
    setOpen(false);
  };

  const mdUrl = markdownPath ? SITE + markdownPath : null;
  const readUrl = mdUrl || SITE + (pagePath || "/blog/");
  const ask = encodeURIComponent(
    `Read ${readUrl} and help me understand it. Answer questions about its content.`,
  );

  return (
    <div className="page-actions" ref={ref}>
      <div className="page-actions__split">
        {markdownPath && (
          <button
            className="page-actions__primary"
            type="button"
            onClick={copyMarkdown}
          >
            {copied || "Copy page"}
          </button>
        )}
        <button
          className={`page-actions__toggle${
            markdownPath ? "" : " page-actions__toggle--solo"
          }`}
          type="button"
          aria-haspopup="true"
          aria-expanded={open}
          aria-label="Page and MCP actions"
          onClick={() => setOpen(!open)}
        >
          {!markdownPath && <span>{copied || "Use with AI"}</span>}
          <span aria-hidden="true">▾</span>
        </button>
      </div>

      {open && (
        <div className="page-actions__menu" role="menu">
          {markdownPath && (
            <>
              <Item
                icon="⧉"
                label="Copy page"
                hint="Copy as Markdown for LLMs"
                onClick={copyMarkdown}
              />
              <Item
                icon="M↓"
                label="View as Markdown"
                hint="Open the plain-text source"
                href={markdownPath}
              />
              <div className="page-actions__sep" role="separator" />
            </>
          )}

          <Item
            icon="✳"
            label="Open in Claude"
            hint="Ask questions about this"
            href={`https://claude.ai/new?q=${ask}`}
          />
          <Item
            icon="◎"
            label="Open in ChatGPT"
            hint="Ask questions about this"
            href={`https://chatgpt.com/?q=${ask}`}
          />
          <Item
            icon="⌕"
            label="Open in Perplexity"
            hint="Ask questions about this"
            href={`https://www.perplexity.ai/search?q=${ask}`}
          />

          <div className="page-actions__sep" role="separator" />

          <Item
            icon="⚡"
            label="Copy MCP server"
            hint={MCP_URL.replace("https://", "")}
            onClick={copyMcp}
          />
          <Item
            icon="▣"
            label="Connect to Cursor"
            hint="Install the MCP server in Cursor"
            href={cursorLink()}
          />
          <Item
            icon="⌘"
            label="Connect to VS Code"
            hint="Install the MCP server in VS Code"
            href={vscodeLink()}
          />
        </div>
      )}
    </div>
  );
};

export default PageActions;
