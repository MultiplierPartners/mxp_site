import React, { useEffect, useState } from "react";

const TableOfContents = ({ content }) => {
  const [headings, setHeadings] = useState([]);

  useEffect(() => {
    if (!content) return;
    // Parse h2 and h3 headings from HTML content
    const parser = new DOMParser();
    const doc = parser.parseFromString(content, "text/html");
    const h2s = doc.querySelectorAll("h2, h3");
    const items = Array.from(h2s).map((h, i) => ({
      id: h.id || `heading-${i}`,
      text: h.textContent,
      level: h.tagName.toLowerCase(),
    }));
    setHeadings(items);
  }, [content]);

  if (headings.length === 0) return null;

  return (
    <nav className="blog-toc">
      <h4>TABLE OF CONTENTS</h4>
      <ul>
        {headings.map((heading, index) => (
          <li
            key={index}
            style={{ paddingLeft: heading.level === "h3" ? "1rem" : "0" }}
          >
            <a href={`#${heading.id}`}>{heading.text}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default TableOfContents;
