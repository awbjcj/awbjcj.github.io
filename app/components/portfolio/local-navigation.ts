/** This single-page site's query and fragment URLs belong to the browser. */
export const preferenceEvent = "portfolio-preferences";
type ScrollPosition = { x: number; y: number };

export function pushLocalUrl(url: URL) {
  // Use the native methods: vinext patches the history instance for server
  // navigation, but locale and section changes do not change the server page.
  const scroll: ScrollPosition = { x: window.scrollX, y: window.scrollY };
  const state = { ...window.history.state, portfolioScroll: scroll };
  window.History.prototype.replaceState.call(window.history, state, "");
  window.History.prototype.pushState.call(window.history, state, "", url);
}

export function focusAnchor(hash: string) {
  const target = document.getElementById(decodeURIComponent(hash.slice(1)));
  if (!target) return;
  target.setAttribute("tabindex", "-1");
  target.scrollIntoView();
  target.focus({ preventScroll: true });
}

export function jumpToAnchor(hash: string) {
  const url = new URL(window.location.href);
  url.hash = hash;
  if (url.href !== window.location.href) pushLocalUrl(url);
  focusAnchor(hash);
}

export function installLocalNavigation() {
  const pathname = window.location.pathname;
  function onClick(event: MouseEvent) {
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    const link = event.target instanceof Element ? event.target.closest<HTMLAnchorElement>("a[href]") : null;
    if (!link || link.hasAttribute("download") || (link.target && link.target !== "_self")) return;
    const url = new URL(link.href, window.location.href);
    if (url.origin !== window.location.origin || url.pathname !== pathname || url.search !== window.location.search || !url.hash) return;
    event.preventDefault();
    event.stopImmediatePropagation();
    jumpToAnchor(url.hash);
  }

  function onPopState(event: PopStateEvent) {
    if (window.location.pathname !== pathname) return;
    // Capture before the framework's server-navigation handler. Notify the
    // preference store explicitly because this traversal stays in the document.
    event.stopImmediatePropagation();
    window.dispatchEvent(new Event(preferenceEvent));
    if (window.location.hash) focusAnchor(window.location.hash);
    else {
      const scroll: ScrollPosition | undefined = event.state?.portfolioScroll;
      window.scrollTo({ left: scroll?.x ?? 0, top: scroll?.y ?? 0, behavior: "instant" });
    }
  }

  document.addEventListener("click", onClick, true);
  window.addEventListener("popstate", onPopState, true);
  return () => {
    document.removeEventListener("click", onClick, true);
    window.removeEventListener("popstate", onPopState, true);
  };
}
