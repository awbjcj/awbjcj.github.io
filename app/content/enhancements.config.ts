/** Optional visual plugins and their editable interface copy. */
export const enhancementSettings = {
  scrollEffects: true,
  signalMap: true,
  commandMenu: true,
} as const;

export const enhancements = {
  menu: {
    open: "Quick navigation",
    title: "Find your way around.",
    search: "Search sections, projects, or technologies…",
    empty: "No matches. Try a project or technology name.",
    sections: "Jump to a section",
    projects: "Explore a project",
    links: "Get in touch",
    close: "Close navigation",
    hint: "↑ ↓ to navigate · Enter to select · Esc to close",
  },
  signal: { label: "Connected by design", nodes: ["Model", "Agent", "Tools", "Data"] },
} as const;
