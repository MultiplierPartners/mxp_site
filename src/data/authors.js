const authors = {
  "Matt Teeple": {
    name: "Matt Teeple",
    slug: "matt-teeple",
    image: "/img/authors/matt-teeple.jpg",
    title: "Managing Partner & Founder, Multiplier Partners",
    bio: "Matt Teeple is Managing Partner and Founder of Multiplier Partners, an advisory firm guiding technology companies and global enterprises on best practices for building and supporting emerging technology solutions. He has worked closely with the founders of companies including Versa Networks and Strata Identity, and is the author of The Startup Playbook.",
    linkedin: "https://www.linkedin.com/in/matt-teeple-059ab8174",
    twitter: "",
  },
  "Nick Gamb": {
    name: "Nick Gamb",
    slug: "nick-gamb",
    image: "/img/authors/nick-gamb.jpg",
    title: "Field Engineering, Strata Identity · Founder, MindGarden",
    bio: "Nick Gamb works on identity and agentic security, and is a co-author of UMA for Agents (U4A) with Eve Maler — a working proof of concept carrying User-Managed Access into the agent era.",
    linkedin: "https://www.linkedin.com/in/nickgamb/",
    twitter: "",
  },
};

/**
 * Get author data by name.
 * Falls back to a default if the author name isn't found.
 */
export const getAuthor = (name) => {
  if (!name) return authors["Matt Teeple"];
  return (
    authors[name] ||
    Object.values(authors).find(
      (a) => a.slug === name.toLowerCase().replace(/\s+/g, "-"),
    ) || {
      name,
      slug: name.toLowerCase().replace(/\s+/g, "-"),
      image: null,
      title: "",
      bio: "",
      linkedin: "",
      twitter: "",
    }
  );
};

export default authors;
