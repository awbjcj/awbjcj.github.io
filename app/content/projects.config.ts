import type { ProjectConfig } from "./types";

/**
 * Selected project cards. Every entry is backed by a repository dossier, and
 * every number below is quoted from that dossier's evidence-checked
 * "Quantified outcomes" section rather than estimated.
 * Copy-ready authoring recipe: app/content/README.md
 */
export const projects = [
  {
    name: "Résumé Tailor Harness / Resume Agent",
    kind: "Shipped multi-tenant product",
    signal: "3,411 TESTS · 18 CONNECTORS",
    description: "A full job-application workflow built around deterministic authority: three in-process fact-lock gates run before paid reviewers, 35 SHA-256-verified career skills bind agents to approved procedures, and every write stays behind user approval. It spans discovery, fit scoring, tailored resumes and cover letters, cited research, H-1B evidence, tracking, and analytics across web, API, and CLI surfaces.",
    skills: ["Python", "FastAPI", "React", "Agno", "SQLModel"],
    repo: { href: "https://github.com/awbjcj/resume-tailor-harness", label: "Source" },
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
    name: "VSDA Deep Agent",
    kind: "Enterprise platform",
    signal: "8 GRAPHS · 60 TOOLS",
    description: "A governed enterprise engineering platform with one LangGraph supervisor and seven domain subagents for Jira, Teams, email, OpenSearch, Polarion, Confluence, and Jenkins. It exposes 60 tools through 46 authenticated FastAPI routes, combines BM25 and kNN retrieval across 68 managed source manifests, and enforces role policy, human approval, durable jobs, semantic memory, and independent usage caps.",
    skills: ["LangGraph", "FastAPI", "OpenSearch", "Hybrid RAG", "SQLAlchemy"],
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
    signal: "7 ENGINES · 4 PARSERS",
    description: "A four-stage LangGraph pipeline that turns free-form software-release email into schema-validated records and parameterized Jenkins builds. It ingests local documents or Outlook mail, routes across four release variants, constrains OpenAI output with closed Pydantic schemas, and normalizes content through seven pluggable conversion engines and five domain cleaners.",
    skills: ["LangGraph", "OpenAI", "Microsoft Graph", "Pydantic", "Jenkins"],
  },
  {
    name: "Enterprise Engineering Automation Suite",
    kind: "Five-system toolset",
    signal: "62 CLIENT METHODS · 5 SYSTEMS",
    description: "Five connected systems for engineering operations: a typed Polarion ALM client with 62 async methods and 19 domain models; a config-driven Confluence publishing pipeline; a supervisor with three Jira, Teams, and email subagents; six scheduled Jira report types; and a MATLAB vehicle-signal suite backed by 111 unit-test methods.",
    skills: ["Python", "asyncio", "LangGraph", "Polarion / Jira APIs", "MATLAB"],
  },
  {
    name: "Field-Trip Issue Analytics",
    kind: "Data pipeline",
    signal: "20 DATASETS · 42 CHARTS",
    description: "A Python pipeline that turns heterogeneous engineering field-trip workbooks into a closed 15-field issue schema, responsible-party attribution, assignee and liability charts, unified JSON counts, and semantic natural-language records prepared for LLM ingestion. It auto-discovers worksheets and ships both CLI and Tkinter entry points.",
    skills: ["Python", "pandas", "Pydantic", "matplotlib", "Excel"],
  },
  {
    name: "MCP CI/CD Orchestration Agent",
    kind: "Agentic integration",
    signal: "3 TOOLS · 1 AGENT",
    description: "A FastMCP server and reusable client that let an LLM generate schema-constrained build parameters, submit Jenkins jobs, and monitor queue and build state. Three single-purpose server concepts were consolidated into one multi-tool agent with bounded retries, typed tool boundaries, and stdio-based protocol isolation.",
    skills: ["Python", "MCP", "FastMCP", "Pydantic", "Jenkins"],
  },
  {
    name: "AutoGen MCP Orchestration Lab",
    kind: "Architecture prototype",
    signal: "3 TOPOLOGIES · 5 MODELS",
    description: "A focused prototype that evolved a CI/CD assistant from in-process function tools to an external MCP server, then compared round-robin, swarm, and model-selected multi-agent topologies. It uses typed outputs, bounded termination, and a head-and-tail context window to keep tool-driven conversations controlled.",
    skills: ["Python", "AutoGen", "MCP", "OpenAI", "Jenkins"],
  },
] satisfies readonly ProjectConfig[];
