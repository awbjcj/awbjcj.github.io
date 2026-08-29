import type { ProjectConfig } from "./types";

/**
 * Selected project cards. Every entry is backed by a repository dossier, and
 * every number below is quoted from that dossier's evidence-checked
 * "Quantified outcomes" section rather than estimated.
 * Copy-ready authoring recipe: app/content/README.md
 */
export const projects = [
  {
    name: "Resume Agent",
    kind: "Shipped product",
    signal: "FACT-LOCKED · 16 CONNECTORS",
    description: "A multi-tenant job-hunt pipeline that pulls postings from 16 ATS and job-board connectors, scores them against a fact-locked profile, and tailors resumes through a panel of reviewer agents. A hard fact-check gate fails any bullet that cannot be traced to a real fact — the agents reframe, they never invent.",
    skills: ["Python", "FastAPI", "React", "LangGraph", "SQLite"],
    repo: { href: "https://github.com/awbjcj/resume-agent", label: "Source" },
    live: { href: "https://resume-agent.up.railway.app", label: "Open the app" },
  },
  {
    name: "Food Manager",
    kind: "Shipped product",
    signal: "4 LLM PROVIDERS · 735 TESTS",
    description: "A production Telegram bot that turns grocery receipt photos into a tracked household pantry with expiry reminders, AI recipes, and meal planning. Four LLM providers sit behind one capability-aware selector across nine seams, each switchable at runtime between a metered API key and a shared gateway.",
    skills: ["Python", "aiogram", "SQLModel", "Alembic", "Telegram Stars"],
    repo: { href: "https://github.com/awbjcj/food-manager", label: "Source" },
    live: { href: "https://t.me/foodie_manager_bot", label: "Open in Telegram" },
  },
  {
    name: "Deep Agent",
    kind: "Enterprise platform",
    signal: "1 SUPERVISOR · 7 SUBAGENTS",
    description: "An agentic backend where an LLM supervisor routes engineering-data requests to seven domain subagents spanning issue tracking, requirements management, CI, wikis, and chat, over an OpenSearch retrieval layer — served behind a role-governed FastAPI API with 69 tool definitions and 21 composable agent middlewares.",
    skills: ["LangGraph", "FastAPI", "OpenSearch", "RAG", "LangSmith"],
  },
  {
    name: "Deep Agents UI",
    kind: "Governance layer on open source",
    signal: "HITL APPROVALS · 3 ROLE TIERS",
    description: "An operator console that token-streams a LangGraph backend while consuming full state snapshots concurrently. On top of the upstream chat surface I built the enterprise layer: JWT auth, three role tiers, per-user model and connectivity governance, weekly token budgets, and human-in-the-loop tool approvals.",
    skills: ["Next.js", "React 19", "TypeScript", "LangGraph SDK", "Radix UI"],
    repo: { href: "https://github.com/awbjcj/deep-agents-ui", label: "Source" },
  },
  {
    name: "Release-Email Intelligence Pipeline",
    kind: "Automation system",
    signal: "PROSE → SCHEMA → CI/CD",
    description: "Software-release announcements arrive as free-form email with version strings, change-set IDs, and bus-database files buried in prose. This ingests them from disk or a live Outlook mailbox, runs a multi-stage LangGraph workflow with structured output to emit a validated record, and triggers the downstream build job from it.",
    skills: ["LangGraph", "OpenAI", "Microsoft Graph", "Pydantic", "Jenkins"],
  },
  {
    name: "Enterprise Engineering Automation Suite",
    kind: "Five-system toolset",
    signal: "5 SYSTEMS · 1,477 COMMITS",
    description: "A suite automating the recurring work of an engineering triage team: a typed Polarion ALM client with 62 async methods, an async Confluence client and report pipeline, a LangGraph multi-agent assistant over Jira and Teams with approval gates on writes, a scheduled Jira reporting service, and a MATLAB toolset for vehicle-signal plotting.",
    skills: ["Python", "asyncio", "LangGraph", "Polarion / Jira APIs", "MATLAB"],
  },
] satisfies readonly ProjectConfig[];
