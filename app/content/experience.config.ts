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
    title: "Reviewing enterprise writes before execution",
    description: "A supervisor routes enterprise tasks, retrieval, and isolated code analysis. Confluence and Polarion authoring combine human review, target revalidation, and durable mutation claims around external writes.",
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
    title: "Continuing agent runs from current state",
    description: "A LangGraph console streams tokens and state, resumes from the server's latest checkpoint, and shows pending subagent files while saving. Approvals stay bound to their original interrupts.",
    link: "https://github.com/awbjcj/deep-agents-ui",
  },
  {
    label: "Technical leadership",
    title: "430+ issues directed across nine ADAS programs",
    description: "Personally triaged 267 issues and directed more than 430 across nine ADAS programs, coordinating algorithm, integration, testing, and data-mining teams.",
  },
] satisfies readonly ExperienceConfig[];
