import type { FocusAreaConfig, SkillGroupConfig } from "./types";

export const focusAreas = [
  { title: "Design the boundary", description: "Clear tool contracts, typed data, and compatibility layers keep model behavior understandable." },
  { title: "Keep humans in control", description: "Identity, permissions, approvals, and budget limits are first-class product features." },
  { title: "Ship the whole loop", description: "I work across interface, runtime, data, deployment, and the feedback needed to improve them." },
] satisfies readonly FocusAreaConfig[];

/** Add or remove both groups and individual skills freely. */
export const skillGroups = [
  { label: "AI systems", skills: ["LangGraph", "Deep Agents", "MCP", "Tool calling", "Human-in-the-loop"] },
  { label: "Product engineering", skills: ["Next.js", "React", "TypeScript", "Python", "FastAPI"] },
  { label: "Platform", skills: ["JWT & RBAC", "Streaming / SSE", "Docker", "GitHub Actions", "API compatibility"] },
] satisfies readonly SkillGroupConfig[];
