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
    label: "Multiple model providers",
    title: "Choosing models by capability",
    description: "Pantry Manager supports Anthropic, OpenAI, Gemini, and DeepSeek. Receipt parsing falls back to a vision-capable provider when the selected text model cannot process images.",
    link: "https://github.com/awbjcj/pantry-manager",
  },
  {
    label: "Trustworthy AI output",
    title: "Checking résumé claims against profile facts",
    description: "Résumé checks cover source citations, skill names, and numeric evidence, including optional sections. Typst checks page fit, while reviewers inspect rendered pages for layout. Each generated artifact records the verified skill procedure used to produce it.",
    link: "https://github.com/awbjcj/resume-tailor-harness",
  },
  {
    label: "Resumable engineering workflows",
    title: "Reviewing artifacts and verifying publication",
    description: "Requirement Buddy separates source research, requirements drafting, independent review, and verification. Persisted runs resume after interruption. Source-revision checks protect reuse, and reviewed publication batches recheck their payloads and targets before writing to engineering tools and reading the results back.",
  },
  {
    label: "Technical leadership",
    title: "430+ issues directed across nine ADAS programs",
    description: "Personally triaged 267 issues and directed more than 430 across nine ADAS programs, coordinating algorithm, integration, testing, and data-mining teams.",
  },
] satisfies readonly ExperienceConfig[];
