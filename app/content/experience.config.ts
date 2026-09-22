import type { ExperienceConfig } from "./types";

/**
 * Engineering tracks drawn from the reviewed projects and résumé source.
 * `link` is omitted where the underlying repository is private — a card with no
 * link is honest, a card with a dead link is not.
 * Copy-ready authoring recipe: app/content/README.md
 */
export const experience = [
  {
    label: "Agent platform engineering",
    title: "Routing enterprise work through a governed supervisor",
    description: "A supervisor routes tasks to specialist agents for enterprise integrations, OpenSearch retrieval, and repository analysis. Authentication, model policy, budgets, and approval controls sit around those workflows.",
  },
  {
    label: "Multi-provider LLM interoperability",
    title: "Model selection with capability-aware routing",
    description: "Food Manager supports Anthropic, OpenAI, Gemini, and DeepSeek. Receipt parsing falls back to a vision-capable provider when the selected text model cannot process images.",
    link: "https://github.com/awbjcj/food-manager",
  },
  {
    label: "Trustworthy AI output",
    title: "Fact locks that block unsupported claims",
    description: "Provenance, skill-naming, and numeric-evidence gates validate tailored résumé claims. A SHA-256-verified skill registry records the procedures used to generate artifacts.",
    link: "https://github.com/awbjcj/resume-tailor-harness",
  },
  {
    label: "Real-time streaming interfaces",
    title: "Real-time agent operations",
    description: "A LangGraph console streams tokens and state while exposing tool approvals, workspace files, code analysis, and usage controls.",
    link: "https://github.com/awbjcj/deep-agents-ui",
  },
  {
    label: "Technical leadership",
    title: "430+ issues directed across nine ADAS programs",
    description: "Personally triaged 267 issues and directed more than 430 across nine ADAS programs, coordinating algorithm, integration, testing, and data-mining teams.",
  },
] satisfies readonly ExperienceConfig[];
