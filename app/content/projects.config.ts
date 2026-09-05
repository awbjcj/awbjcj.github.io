import type { ProjectConfig } from "./types";

/**
 * Selected project cards. Every entry is backed by a repository dossier, and
 * every number below is quoted from that dossier's evidence-checked
 * "Quantified outcomes" section rather than estimated.
 * Copy-ready authoring recipe: app/content/README.md
 */
export const projects = [
  {
    name: "Resume Tailor Harness",
    kind: "Shipped multi-tenant product",
    signal: "3,411 TESTS · 18 CONNECTORS",
    description: "Fact-locked job search with three deterministic gates, 35 verified skills, and approval before every write.",
    skills: ["Python", "FastAPI", "React", "TypeScript", "SQLModel"],
    repo: { href: "https://github.com/awbjcj/resume-tailor-harness", label: "Source" },
    live: { href: "https://resume-agent.up.railway.app", label: "Open the app" },
  },
  {
    name: "Food Manager",
    kind: "Shipped product",
    signal: "4 LLM PROVIDERS · 735 TESTS",
    description: "Production Telegram pantry app with four LLM providers, per-user switching, and 735 offline tests.",
    skills: ["Python", "LLM routing", "aiogram", "SQLModel", "Alembic"],
    repo: { href: "https://github.com/awbjcj/food-manager", label: "Source" },
    live: { href: "https://t.me/foodie_manager_bot", label: "Open in Telegram" },
  },
  {
    name: "VSDA Deep Agent",
    kind: "Enterprise platform",
    signal: "8 GRAPHS · 60 TOOLS",
    description: "Governed multi-agent platform with eight LangGraph entry points, 60 tools, 46 API routes, hybrid RAG, and human approval.",
    skills: ["LangGraph", "FastAPI", "OpenSearch", "Hybrid RAG", "SQLAlchemy"],
  },
  {
    name: "Deep Agents UI",
    kind: "Governance layer on open source",
    signal: "HITL APPROVALS · 3 ROLE TIERS",
    description: "Real-time LangGraph operator console with token and state streams, three role tiers, model governance, and tool approvals.",
    skills: ["Next.js", "React 19", "TypeScript", "LangGraph SDK", "Radix UI"],
    repo: { href: "https://github.com/awbjcj/deep-agents-ui", label: "Source" },
  },
  {
    name: "Release-Email Intelligence Pipeline",
    kind: "Automation system",
    signal: "7 ENGINES · 4 PARSERS",
    description: "Turns release email into validated records and Jenkins builds through four stages, four parsers, and seven conversion engines.",
    skills: ["LangGraph", "OpenAI", "Microsoft Graph", "Pydantic", "Jenkins"],
  },
  {
    name: "Enterprise Engineering Automation Suite",
    kind: "Five-system toolset",
    signal: "62 CLIENT METHODS · 5 SYSTEMS",
    description: "Typed async automation for Polarion, Jira, Confluence, Teams, and email—62 client methods and approval-gated agents.",
    skills: ["Python", "asyncio", "LangGraph", "REST APIs", "Jenkins"],
  },
] satisfies readonly ProjectConfig[];
