import type { FocusAreaConfig, SkillGroupConfig } from "./types";

export const focusAreas = [
  { title: "Ground AI in evidence", description: "Typed contracts and fact locks." },
  { title: "Keep people in control", description: "Roles, approvals, budgets, and audit trails." },
  { title: "Own the full stack", description: "Retrieval, agents, APIs, interface, and delivery." },
] satisfies readonly FocusAreaConfig[];

/** Add or remove both groups and individual skills freely. See app/content/README.md. */
export const skillGroups = [
  { label: "Agent systems", skills: ["LangGraph", "LangChain", "Deep Agents", "Agno", "MCP", "Tool calling", "LLM evaluation", "Human-in-the-loop"] },
  { label: "AI full stack", skills: ["Python", "TypeScript", "FastAPI", "React", "Next.js", "Pydantic", "SQLAlchemy"] },
  { label: "Retrieval & data", skills: ["RAG", "OpenSearch", "Hybrid search", "BM25", "Embeddings", "Vector search", "SQLite", "MinIO / S3"] },
  { label: "Models & routing", skills: ["OpenAI", "Anthropic Claude", "Google Gemini", "DeepSeek", "Multi-provider routing"] },
  { label: "Platform & delivery", skills: ["REST APIs", "asyncio / aiohttp", "JWT / RBAC / OAuth", "Docker", "Jenkins CI/CD", "pytest"] },
] satisfies readonly SkillGroupConfig[];
