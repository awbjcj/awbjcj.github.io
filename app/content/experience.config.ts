import type { ExperienceConfig } from "./types";

/**
 * Thematic tracks drawn from the same dossier-backed projects as the work grid.
 * `link` is omitted where the underlying repository is private — a card with no
 * link is honest, a card with a dead link is not.
 */
export const experience = [
  {
    label: "Agent platform engineering",
    title: "Supervisors, subagents, and the governance around them",
    description: "Built agent runtimes and the product layers that make them safe to hand to other people: supervisor routing across seven domain subagents, 69 tool definitions, 21 composable middlewares, three role tiers enforced across API and runtime, and human-in-the-loop approval on every write-capable tool.",
  },
  {
    label: "Multi-provider LLM interoperability",
    title: "Four providers, one selector, nine capability seams",
    description: "Unified Anthropic, OpenAI, Gemini, and DeepSeek behind a single capability-aware selector specialised into nine seams, with each provider switchable at runtime between its own metered key and a shared subscription gateway — so provider choice became a per-user setting rather than a deploy.",
    link: "https://github.com/awbjcj/food-manager",
  },
  {
    label: "Trustworthy AI output",
    title: "A fact-lock that agents cannot write around",
    description: "Designed a pipeline where a candidate's real experience is ingested once into a single fact file that becomes the only ground truth any downstream agent may draw from, with a hard fact-check gate that fails any generated bullet not traceable to a real fact. Shipped with a calibration record that documents the judge as not yet trusted.",
    link: "https://github.com/awbjcj/resume-agent",
  },
  {
    label: "Real-time streaming interfaces",
    title: "Token streams and state snapshots, consumed at once",
    description: "Built an operator console that subscribes to token-level and state-snapshot stream modes simultaneously, projecting a raw agent event stream into renderable conversation state — with sub-agent activity, tool calls, and workspace files rendered live as the graph executes.",
    link: "https://github.com/awbjcj/deep-agents-ui",
  },
] satisfies readonly ExperienceConfig[];
