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
    summary: "AI full-stack engineer building governed agent systems, hybrid retrieval, and production web applications in Python and TypeScript.",
    availability: "Open to AI full-stack, platform, and product engineering roles",
  },
  contact: {
    email: "wujiajin0303@gmail.com",
    linkedin: "https://www.linkedin.com/in/david-jiajin-wu",
    github: "https://github.com/awbjcj",
    /** Served from `public/resume.pdf`; the content check verifies it exists. */
    resumeFile: "/resume.pdf",
    responseNote: "I read every message and reply to genuine opportunities within a couple of days.",
  },
  accessibility: {
    skipToContent: "Skip to main content",
    primaryNavigation: "Primary navigation",
    backToTop: "back to top",
    githubLabel: "GitHub",
    engineeringOverview: "Engineering focus overview",
    coreSpecialties: "Core specialties",
  },
  navigation: [
    { label: "Live", href: "#live" },
    { label: "Work", href: "#work" },
    { label: "Experience", href: "#experience" },
    { label: "Résumé", href: "#resume" },
    { label: "Toolkit", href: "#toolkit" },
    { label: "Contact", href: "#contact" },
  ],
  hero: {
    titleLead: "I build AI systems that work ",
    titleEmphasis: "beyond the demo.",
    primaryAction: "Try one right now",
    githubAction: "GitHub profile",
    specialties: ["Agent systems", "Hybrid RAG", "MCP & tools", "Full-stack AI", "Enterprise automation"],
    panel: {
      title: "system.profile",
      status: "live",
      rows: [
        { label: "Orchestrate", description: "Supervisors, subagents, tools, durable memory" },
        { label: "Retrieve", description: "Hybrid search over enterprise data" },
        { label: "Govern", description: "Identity, budgets, and approvals" },
      ],
      pipeline: ["Model", "Agent", "Tools"],
      footer: "Ready to ship useful AI",
    },
  },
  sections: {
    live: {
      label: "Running right now",
      statusLabel: "Live",
      title: "Use these today.",
      description: "Deployed products, not demos. Open one and evaluate the experience.",
    },
    projects: {
      label: "Selected work",
      countNoun: "projects",
      title: "AI products with proof.",
      description: "Selected systems with dossier-backed metrics. Private work is labeled, never linked.",
      linkLabel: "Source",
      privateNote: "Private repository",
    },
    experience: {
      label: "Experience in practice",
      countNoun: "tracks",
      title: "What I build at scale.",
      description: "Evidence-backed stories from product and systems work.",
      evidenceLabel: "View evidence",
    },
    resume: {
      label: "Résumé",
      title: "The formal record.",
      description: "Experience, education, and publications.",
      downloadLabel: "Download résumé (PDF)",
      experienceLabel: "Experience",
      educationLabel: "Education",
      publicationsLabel: "Publications",
      locationLabel: "Based in",
      focusLabel: "Focus",
      statusLabel: "Status",
    },
    approach: {
      label: "How I think",
      title: "Trustworthy AI ships as a system.",
      description: "Clear permissions, reliable interfaces, cost controls, observability, and human intervention.",
    },
    toolkit: { label: "Toolkit", title: "AI full-stack toolkit." },
    contact: {
      label: "Let's build something useful",
      title: "Build AI products people can trust.",
      actionLabel: "Email me",
      emailLabel: "Email",
      linkedinLabel: "LinkedIn",
      linkedinPlaceholder: "Add your LinkedIn URL",
      githubLabel: "GitHub",
      resumeLabel: "Résumé",
      resumeActionLabel: "Download PDF",
    },
  },
  footer: { note: "Designed for clarity. Built for the open web.", backToTopLabel: "Back to top" },
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
    tagline: "Fact-locked job-hunt pipeline",
    description: "Matches jobs across 18 connectors and tailors fact-locked applications.",
    facts: ["18 connector kinds", "3 deterministic fact-lock gates", "Tailor, cover letter, PDF, tracking"],
    href: "https://resume-agent.up.railway.app",
    actionLabel: "Open the app",
    trial: {
      action: "https://resume-agent.up.railway.app/register",
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
    tagline: "Telegram pantry bot",
    description: "Turns receipt photos into a shared pantry with expiry alerts and AI recipes.",
    facts: ["4 LLM providers, switchable per user", "735 offline tests", "English, Chinese, French, Spanish"],
    href: "https://t.me/foodie_manager_bot",
    actionLabel: "Open in Telegram",
  },
] satisfies readonly LiveProductConfig[];

export const { profile, contact } = siteConfig;
