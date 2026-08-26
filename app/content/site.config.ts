import type { LiveProductConfig } from "./types";

/** Edit global identity, hero, headings, calls to action, and contact copy here. */
export const siteConfig = {
  profile: {
    name: "David Wu",
    initials: "DW",
    brandSubtitle: "AI systems engineer",
    title: "AI Agent & MCP Server Developer",
    location: "Ann Arbor, Michigan",
    github: "https://github.com/awbjcj",
    summary: "I design and ship agentic software—from MCP servers and multi-provider gateways to secure, production-ready chat experiences.",
    availability: "Open to AI engineering, platform, and full-stack roles",
  },
  contact: {
    email: "wujiajin0303@gmail.com",
    linkedin: "https://www.linkedin.com/in/david-jiajin-wu",
    github: "https://github.com/awbjcj",
    /** Served from `public/resume.pdf`; the content check verifies it exists. */
    resumeFile: "/resume.pdf",
    responseNote: "I read every message and reply to genuine opportunities within a couple of days.",
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
    specialties: ["Agent architecture", "MCP", "LLM interoperability", "Full-stack delivery", "Developer tools"],
    panel: {
      title: "system.profile",
      status: "live",
      rows: [
        { label: "Orchestrate", description: "LangGraph agents with tools, memory & human approvals" },
        { label: "Connect", description: "MCP servers and multi-provider model gateways" },
        { label: "Ship", description: "Secure full-stack products with measurable constraints" },
      ],
      pipeline: ["Model", "Agent", "Tools"],
      footer: "Ready to build useful AI",
    },
  },
  sections: {
    live: {
      label: "Running right now",
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
      description: "Evidence-backed engineering drawn from the same projects. A full employment timeline is available below.",
    },
    resume: {
      label: "Résumé",
      title: "The formal record.",
      description: "Roles, dates, and education — the details a hiring team needs alongside the work itself.",
      downloadLabel: "Download résumé (PDF)",
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
    },
  },
  footer: { note: "Designed for clarity. Built for the open web.", backToTopLabel: "Back to top" },
} as const;

/**
 * Products a visitor can open and use. The Resume Agent card carries a plain GET
 * form: the browser serialises `name` and `email` into the query string, and the
 * target's registration page reads both back to prefill itself. No JavaScript,
 * no backend on this site, and no password ever handled here — the visitor sets
 * that on the real sign-up page, over its own TLS, against its own origin.
 */
export const liveProducts = [
  {
    name: "Resume Agent",
    tagline: "Fact-locked job-hunt pipeline",
    description: "Pulls postings from 16 connectors, scores them against your real experience, and tailors a resume that cannot claim anything you did not do.",
    facts: ["16 job-board connectors", "Fact-check gate on every bullet", "Tailor, cover letter, PDF, tracking"],
    href: "https://resume-agent.up.railway.app",
    actionLabel: "Open the app",
    trial: {
      action: "https://resume-agent.up.railway.app/register",
      heading: "Start a trial account",
      note: "Takes you to the sign-up page with these details filled in. You choose your own password there — this site never sees it.",
      nameField: "Your name",
      emailField: "Email address",
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
