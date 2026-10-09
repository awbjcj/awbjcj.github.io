import type { LiveProductConfig } from "./types";

/** Edit global identity, hero, headings, calls to action, and contact copy here. */
export const siteConfig = {
  profile: {
    name: "Jiajin (David) Wu",
    initials: "DW",
    brandSubtitle: "AI full-stack engineer",
    title: "AI Full-Stack Engineer",
    location: "Ann Arbor, Michigan",
    github: "https://github.com/awbjcj",
    website: "https://awbjcj.github.io",
    summary: "I build Python and TypeScript applications for agent workflows, hybrid retrieval, and engineering automation. My work connects model behavior to typed APIs, review controls, and usable interfaces.",
    availability: "Open to AI full-stack, platform, and product engineering roles",
  },
  contact: {
    email: "wujiajin0303@gmail.com",
    linkedin: "https://www.linkedin.com/in/david-jiajin-wu",
    github: "https://github.com/awbjcj",
    /** Served from `public/resume.pdf`; the content check verifies it exists. */
    resumeFile: "/resume.pdf",
    responseNote: "Contact me about AI application engineering, agent platforms, or full-stack product development.",
  },
  accessibility: {
    skipToContent: "Skip to main content",
    primaryNavigation: "Primary navigation",
    backToTop: "back to top",
    githubLabel: "GitHub",
    engineeringOverview: "Engineering focus overview",
    newTab: "opens in a new tab",
    link: "Link",
    technologies: "technologies",
    placeholder: "Content not yet written",
    placeholderTitle: "Replace this content in the configuration files",
    coreSpecialties: "Core specialties",
  },
  preferences: {
    label: "Display preferences",
    language: "Language",
    light: "Switch to light mode",
    dark: "Switch to dark mode",
    theme: "Dark mode",
  },
  navigation: [
    { label: "Apps", href: "#live" },
    { label: "Work", href: "#work" },
    { label: "Experience", href: "#experience" },
    { label: "Résumé", href: "#resume" },
    { label: "Toolkit", href: "#toolkit" },
    { label: "Contact", href: "#contact" },
  ],
  hero: {
    titleLead: "AI applications. ",
    titleEmphasis: "Engineered end to end.",
    primaryAction: "Explore the applications",
    githubAction: "GitHub profile",
    specialties: ["Agent systems", "Hybrid RAG", "MCP & tools", "Full-stack AI", "Enterprise automation"],
    panel: {
      title: "system.profile",
      status: "Engineering focus",
      rows: [
        { label: "Orchestrate", description: "Supervisors, subagents, tools, durable memory" },
        { label: "Retrieve", description: "Hybrid search over enterprise data" },
        { label: "Govern", description: "Identity, budgets, and approvals" },
      ],
      pipeline: ["Model", "Agent", "Tools"],
      footer: "Python / TypeScript / Applied AI",
    },
  },
  sections: {
    live: {
      label: "Applications",
      statusLabel: "Hosted app",
      title: "Explore the products.",
      description: "A résumé application and a household pantry assistant, with hosted entry points below.",
    },
    projects: {
      label: "Selected work",
      countNoun: "projects",
      title: "Selected engineering work.",
      description: "Applications, developer tools, and enterprise systems. Open-source contributions are identified separately from original projects.",
      linkLabel: "Source",
      privateNote: "Private repository",
    },
    experience: {
      label: "Engineering experience",
      countNoun: "tracks",
      title: "Systems and responsibilities.",
      description: "Agent orchestration, model integration, and the controls around software that acts on a user's behalf.",
      evidenceLabel: "View related project",
    },
    resume: {
      label: "Résumé",
      title: "Professional background.",
      description: "Experience, education, and publications.",
      downloadLabel: "Download résumé (English PDF)",
      experienceLabel: "Experience",
      educationLabel: "Education",
      publicationsLabel: "Publications",
      locationLabel: "Based in",
      focusLabel: "Focus",
      statusLabel: "Status",
    },
    approach: {
      label: "Engineering approach",
      title: "Make behavior explicit.",
      description: "I design the boundaries around model calls: what data enters, what actions are allowed, and how people review the result.",
    },
    toolkit: { label: "Toolkit", title: "Tools I work with." },
    contact: {
      label: "Contact",
      title: "Discuss a role or project.",
      actionLabel: "Email me",
      emailLabel: "Email",
      linkedinLabel: "LinkedIn",
      linkedinPlaceholder: "Add your LinkedIn URL",
      githubLabel: "GitHub",
      resumeLabel: "Résumé",
      resumeActionLabel: "English PDF",
    },
  },
  footer: { note: "Python, TypeScript, and applied AI.", backToTopLabel: "Back to top" },
} as const;

/**
 * Products a visitor can open and use. The Resume Tailor Harness card carries a plain GET
 * form: the browser serialises `name` and `email` into the query string, and the
 * target's registration page reads both back to prefill itself. No JavaScript,
 * no backend on this site, and no password ever handled here — the visitor sets
 * that on the real sign-up page, over its own TLS, against its own origin.
 */
export const liveProducts = [
  {
    name: "Resume Tailor Harness",
    tagline: "Evidence-based application workflow",
    description: "Finds jobs, checks tailored claims against profile facts, and tracks applications in separate user workspaces.",
    facts: ["Deterministic provenance, skill, and numeric checks", "Résumé and cover-letter PDF export", "Gmail tracking with sync recovery"],
    href: "https://resume-tailor-harness.up.railway.app",
    actionLabel: "Open the app",
    trial: {
      action: "https://resume-tailor-harness.up.railway.app/register",
      heading: "Start a trial account",
      note: "Opens sign-up with these details prefilled. You choose a password there.",
      nameField: "Your name",
      namePlaceholder: "Ada Lovelace",
      emailField: "Email address",
      emailPlaceholder: "ada@example.com",
      submitLabel: "Create trial account",
    },
  },
  {
    name: "Food Manager",
    tagline: "Shared pantry and meal planning",
    description: "A Telegram bot and Mini App for receipt imports, shared household inventories, expiry reminders, and meal planning.",
    facts: ["Receipt-to-pantry workflow", "Mini App with quotas and confirmation controls", "English, Chinese, French, and Spanish"],
    href: "https://t.me/foodie_manager_bot",
    actionLabel: "Open in Telegram",
  },
] satisfies readonly LiveProductConfig[];

export const { profile, contact } = siteConfig;
