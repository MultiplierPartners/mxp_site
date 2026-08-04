/**
 * Always land at the top of the page on navigation.
 *
 * Gatsby's default restores the previous scroll position for routes you have
 * already visited, which made returning to a page (the blog index especially)
 * drop you partway down. In-page anchors — e.g. the blog post table of
 * contents — are left to the browser so they still jump to their heading.
 */
export const shouldUpdateScroll = ({ routerProps: { location } }) => {
  if (location.hash) return true;

  // Jump instantly; `scroll-behavior: smooth` would otherwise animate the
  // whole way back up a long page on every navigation.
  window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  return false;
};
