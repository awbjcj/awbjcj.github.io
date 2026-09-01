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
    title: "Eight graphs, sixty tools, and the governance around them",
    description: "Architected one supervisor and seven domain subagents behind 46 authenticated FastAPI routes, with hybrid OpenSearch retrieval, durable library jobs, semantic memory, independent token/call/cost caps, role-based tool policy, and human approval for mutating actions. The platform is backed by 2,132 declared test functions across 266 files.",
  },
  {
    label: "Multi-provider LLM interoperability",
    title: "Four providers, one selector, nine capability seams",
    description: "Unified Anthropic, OpenAI, Gemini, and DeepSeek behind a single capability-aware selector specialised into nine seams, with each provider switchable at runtime between its own metered key and a shared subscription gateway — so provider choice became a per-user setting rather than a deploy.",
    link: "https://github.com/awbjcj/food-manager",
  },
  {
    label: "Trustworthy AI output",
    title: "Deterministic gates that agents cannot write around",
    description: "Built three in-process fact-lock gates for provenance, skill naming, and numeric evidence; they run before paid reviewers and share one verdict boundary. Bound 35 career skills to reviewed SHA-256 digests, limited in-loop tools to reads, and moved every durable write behind deterministic services and user approval.",
    link: "https://github.com/awbjcj/resume-tailor-harness",
  },
  {
    label: "Real-time streaming interfaces",
    title: "Token streams and state snapshots, consumed at once",
    description: "Built an operator console that subscribes to token-level and state-snapshot stream modes simultaneously, projecting a raw agent event stream into renderable conversation state — with sub-agent activity, tool calls, and workspace files rendered live as the graph executes.",
    link: "https://github.com/awbjcj/deep-agents-ui",
  },
  {
    label: "Enterprise workflow automation",
    title: "From engineering records to governed, repeatable operations",
    description: "Built a 62-method async Polarion client with 19 typed domain models, a 13-endpoint Jira automation layer, config-driven Confluence publishing, scheduled report pipelines, and approval-gated agents for Jira, Teams, and email. CI stages preserve state through explicit checkpoints and domain-specific error codes.",
  },
  {
    label: "Technical leadership",
    title: "Directed issue triage across nine L1–L3 ADAS programs",
    description: "Personally triaged 267 issues and directed more than 430 system-, vehicle-, and bench-level tickets across Algorithm, Integration, Testing, and Data-Mining teams; authored 38 traced integration and radar-signal test cases and earned a 121% top-tier performance rating for two consecutive years.",
  },
  {
    label: "Systems engineering instruction",
    title: "Co-guided 51 students through a four-deliverable MBSE project",
    description: "Supported 13 teams translating stakeholder needs into SysML context, behavior, traceability, architecture, and validation models in MagicDraw and MagicGrid. Authored a technology-readiness recitation and an 83-formula Excel decision-tree model comparing three investment strategies.",
  },
  {
    label: "Medical systems engineering",
    title: "Prototype verification from beam data to executable test plans",
    description: "Built MATLAB pipelines to acquire, process, and visualize radiotherapy beam data, designed a GUI that generated parameterized XML test plans, and collaborated across mechanical, electrical, and software disciplines to evaluate a next-generation treatment-system prototype.",
  },
] satisfies readonly ExperienceConfig[];
