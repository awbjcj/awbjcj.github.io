import type { LiveProductConfig } from "./types";

/** Edit global identity, hero, headings, calls to action, and contact copy here. */
export const siteConfig = {
  profile: {
    name: "Jiajin (David) Wu",
    initials: "DW",
    brandSubtitle: "AI/LLM systems engineer",
    title: "AI/LLM Software & Application Engineer",
    location: "Ann Arbor, Michigan",
    github: "https://github.com/awbjcj",
    summary: "AI/LLM software and application engineer with 3+ years building production Python and TypeScript systems for enterprise workflows, from governed multi-agent platforms and hybrid RAG to full-stack operator consoles.",
    availability: "Open to AI/LLM software, application, and platform engineering roles",
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
    specialties: ["Multi-agent systems", "RAG & OpenSearch", "MCP & tool calling", "Full-stack AI applications", "Enterprise automation"],
    panel: {
      title: "system.profile",
      status: "live",
      rows: [
        { label: "Orchestrate", description: "LangGraph supervisors, subagents, tools & durable memory" },
        { label: "Retrieve", description: "Hybrid BM25/kNN search across enterprise data" },
        { label: "Govern", description: "Identity, quotas & human approval around every write" },
      ],
      pipeline: ["Model", "Agent", "Tools"],
      footer: "Ready to build useful AI",
    },
  },
  sections: {
    live: {
      label: "Running right now",
      statusLabel: "Live",
      title: "Two of these you can use in the next minute.",
      description: "Not screenshots and not a demo video — deployed products with real users, real billing, and a real support burden. Open either one and judge the engineering for yourself.",
    },
    projects: {
      label: "Selected work",
      countNoun: "projects",
      title: "Systems, not just screens.",
      description: "Agent platforms, enterprise automation, and shipped products. Every figure below is quoted from an evidence-checked repository dossier rather than estimated — and where a repository is private, the card says so instead of offering a link that goes nowhere.",
      linkLabel: "Source",
      privateNote: "Private repository",
    },
    experience: {
      label: "Experience in practice",
      countNoun: "tracks",
      title: "From architecture to operation.",
      description: "Evidence-backed engineering drawn from repository and experience dossiers. A full employment timeline is available below.",
      evidenceLabel: "View evidence",
    },
    resume: {
      label: "Résumé",
      title: "The formal record.",
      description: "Roles, outcomes, education, and publications — the formal record behind the work.",
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
      title: "Useful AI is a product discipline.",
      description: "I care about the unglamorous layers that make intelligent software trustworthy: explicit permissions, predictable interfaces, cost controls, observability, and a humane path for intervention.",
    },
    toolkit: { label: "Toolkit", title: "Technologies I use to turn models into products." },
    contact: {
      label: "Let's build something useful",
      title: "Looking for an engineer who can connect the model, the system, and the user?",
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
    description: "Pulls postings through 18 connector kinds, scores them against your real experience, and tailors a resume that cannot claim anything you did not do.",
    facts: ["18 connector kinds", "3 deterministic fact-lock gates", "Tailor, cover letter, PDF, tracking"],
    href: "https://resume-agent.up.railway.app",
    actionLabel: "Open the app",
    trial: {
      action: "https://resume-agent.up.railway.app/register",
      heading: "Start a trial account",
      note: "Takes you to the sign-up page with these details filled in. You choose your own password there — this site never sees it.",
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
    description: "Photograph a receipt and it becomes a tracked pantry with expiry dates, daily digests, AI recipes, and shared household plans.",
    facts: ["4 LLM providers, switchable per user", "735 offline tests", "English, Chinese, French, Spanish"],
    href: "https://t.me/foodie_manager_bot",
    actionLabel: "Open in Telegram",
  },
] satisfies readonly LiveProductConfig[];

export const { profile, contact } = siteConfig;
