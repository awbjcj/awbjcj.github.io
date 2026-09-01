import type { FocusAreaConfig, SkillGroupConfig } from "./types";

export const focusAreas = [
  { title: "Make authority explicit", description: "Typed tool contracts, deterministic gates, and closed evidence boundaries keep model behavior understandable." },
  { title: "Keep humans in control", description: "Identity, permissions, approvals, quotas, and audit trails are first-class product features." },
  { title: "Ship the whole loop", description: "I work across retrieval, agent runtime, API, interface, deployment, and the evaluation needed to improve them." },
] satisfies readonly FocusAreaConfig[];

/** Add or remove both groups and individual skills freely. See app/content/README.md. */
export const skillGroups = [
  { label: "AI / LLM engineering", skills: ["LangGraph", "LangChain", "Deep Agents", "Agno", "RAG", "MCP", "Tool calling", "LLM evaluation", "Prompt engineering", "Human-in-the-loop"] },
  { label: "Languages & frameworks", skills: ["Python", "TypeScript", "React", "Next.js", "FastAPI", "Pydantic", "SQLAlchemy", "SQL", "MATLAB"] },
  { label: "Models & providers", skills: ["OpenAI", "Anthropic Claude", "Google Gemini", "DeepSeek", "Multi-provider routing"] },
  { label: "Data & retrieval", skills: ["OpenSearch", "BM25", "Embeddings", "kNN / vector search", "Hybrid search", "SQLite", "MinIO / S3", "Semantic memory"] },
  { label: "Platform & integration", skills: ["REST APIs", "asyncio / aiohttp", "JWT / RBAC / OAuth", "Jenkins CI/CD", "Docker", "Microsoft Graph", "Jira", "Polarion", "Confluence", "pytest", "Ruff"] },
  { label: "Systems engineering", skills: ["ADAS L1–L3", "CAN / CANoe", "MBSE", "SysML", "MagicDraw / MagicGrid", "Requirements", "Verification", "Root-cause analysis"] },
] satisfies readonly SkillGroupConfig[];
