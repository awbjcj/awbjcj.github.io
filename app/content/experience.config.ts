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
    description: "The same permissions and budgets apply to chat, each user's scheduled tasks, and the optional Teams bridge. Writes to Jira, Confluence, and Polarion require administrator review, a fresh target check, and a persistent record of the claimed change.",
  },
  {
    label: "Multi-provider LLM interoperability",
    title: "Model selection with capability-aware routing",
    description: "Pantry Manager supports Anthropic, OpenAI, Gemini, and DeepSeek. Receipt parsing falls back to a vision-capable provider when the selected text model cannot process images.",
    link: "https://github.com/awbjcj/pantry-manager",
  },
  {
    label: "Trustworthy AI output",
    title: "Fact locks that block unsupported claims",
    description: "Résumé checks cover source citations, skill names, and numeric evidence, including optional sections. Typst checks page fit, while reviewers inspect rendered pages for layout. Each generated artifact records the verified skill procedure used to produce it.",
    link: "https://github.com/awbjcj/resume-tailor-harness",
  },
  {
    label: "Real-time streaming interfaces",
    title: "Continuing agent runs from current state",
    description: "The customized LangGraph console streams tokens and state and resumes from current checkpoints. Approvals stay tied to the interrupts that requested them. Users can manage scheduled tasks, mention files, and preview source images from chat to follow background work and inspect its evidence.",
    link: "https://github.com/awbjcj/deep-agents-ui",
  },
  {
    label: "Technical leadership",
    title: "430+ issues directed across nine ADAS programs",
    description: "Personally triaged 267 issues and directed more than 430 across nine ADAS programs, coordinating algorithm, integration, testing, and data-mining teams.",
  },
] satisfies readonly ExperienceConfig[];
