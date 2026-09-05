import type { ExperienceConfig } from "./types";

/**
 * Thematic tracks drawn from the same dossier-backed projects as the work grid.
 * `link` is omitted where the underlying repository is private — a card with no
 * link is honest, a card with a dead link is not.
 * Copy-ready authoring recipe: app/content/README.md
 */
export const experience = [
  {
    label: "Agent platform engineering",
    title: "Eight graphs, sixty tools, governed end to end",
    description: "Supervisor plus seven subagents behind 46 API routes, hybrid RAG, budgets, role policy, and human approval; backed by 2,132 tests.",
  },
  {
    label: "Multi-provider LLM interoperability",
    title: "Four providers, one per-user routing layer",
    description: "A capability-aware selector across nine seams lets users switch providers and key sources without a redeploy.",
    link: "https://github.com/awbjcj/food-manager",
  },
  {
    label: "Trustworthy AI output",
    title: "Fact locks that block unsupported claims",
    description: "Three deterministic gates and 35 SHA-256-verified skills keep AI output auditable; writes require approval.",
    link: "https://github.com/awbjcj/resume-tailor-harness",
  },
  {
    label: "Real-time streaming interfaces",
    title: "Real-time agent operations",
    description: "A token and state-stream console surfaces subagents, tools, and files as a graph runs.",
    link: "https://github.com/awbjcj/deep-agents-ui",
  },
  {
    label: "Technical leadership",
    title: "430+ issues directed across nine ADAS programs",
    description: "Triaged 267 directly, authored 38 traced tests, and earned a 121% top-tier performance rating twice.",
  },
] satisfies readonly ExperienceConfig[];
