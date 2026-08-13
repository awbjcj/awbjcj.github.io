/**
 * Single source of truth for every word on the site.
 *
 * ── UNFINISHED CONTENT ──────────────────────────────────────────────
 * Any string beginning with "TODO:" is a placeholder awaiting real content.
 * Placeholders render on the page in a visibly "unfilled" state so you can see
 * the shape while authoring, and `npm run check:content` refuses to pass while
 * any remain. The GitHub Pages workflow runs that check before publishing, so
 * placeholder copy can never reach the live site.
 * ────────────────────────────────────────────────────────────────────
 */
export const PLACEHOLDER_PREFIX = "TODO:";

/** True when `value` is unfinished placeholder content. */
export function isPlaceholder(value: string): boolean {
  return value.trimStart().startsWith(PLACEHOLDER_PREFIX);
}

/** The human-readable text of `value`, with any placeholder marker stripped. */
export function displayValue(value: string): string {
  return isPlaceholder(value)
    ? value.trimStart().slice(PLACEHOLDER_PREFIX.length).trim()
    : value;
}

export const profile = {
  name: "David Wu",
  title: "AI Agent & MCP Server Developer",
  location: "Ann Arbor, Michigan",
  github: "https://github.com/awbjcj",
  summary: "I design and ship agentic software—from MCP servers and multi-provider gateways to secure, production-ready chat experiences.",
  availability: "Open to AI engineering, platform, and full-stack roles",
};

export const contact = {
  email: "awbjcj@gmail.com",
  linkedin: "TODO: https://www.linkedin.com/in/your-handle",
  github: "https://github.com/awbjcj",
  /** Served from `public/resume.pdf`. The content check verifies the file exists. */
  resumeFile: "/resume.pdf",
  responseNote: "I read every message and reply to genuine opportunities within a couple of days.",
};

export const projects = [
  {
    name: "Copilot Proxy", kind: "Original project", signal: "3 API DIALECTS / 1 GATEWAY",
    description: "A VS Code extension that exposes GitHub Copilot models through OpenAI-, Anthropic-, and Gemini-compatible local APIs, with streaming, tool calling, logs, and usage visibility.",
    skills: ["TypeScript", "VS Code API", "SSE", "LLM APIs"], link: "https://github.com/awbjcj/vscode-copilot-proxy",
  },
  {
    name: "Deep Agents UI — VSDA", kind: "Customized platform", signal: "AUTH / APPROVALS / BUDGETS",
    description: "An enterprise agent workspace adding JWT auth, role-based access, model and connectivity controls, weekly token budgets, human-in-the-loop approvals, and admin tooling.",
    skills: ["Next.js", "React", "LangGraph", "FastAPI"], link: "https://github.com/awbjcj/deep-agents-ui",
  },
  {
    name: "H-1B Job Search MCP", kind: "Extended open source", signal: "PUBLIC DATA → MCP TOOLS",
    description: "A data-backed MCP server for searching real Department of Labor LCA disclosures by role, location, wage, and company sponsorship history.",
    skills: ["Python", "FastMCP", "Data pipelines", "Render"], link: "https://github.com/awbjcj/h1b-job-search-mcp",
  },
];

export const experience = [
  {
    label: "Agent platform engineering", title: "Enterprise AI workspace",
    description: "Built the product layers around an agent runtime: identity, role gates, model selection, token budgets, workspaces, and approval flows for write-capable tools.",
    link: "https://github.com/awbjcj/deep-agents-ui",
  },
  {
    label: "Protocol & developer tooling", title: "Multi-provider model gateway",
    description: "Unified distinct provider conventions behind familiar client interfaces while preserving streaming and tool-use behavior for local developer workflows.",
    link: "https://github.com/awbjcj/vscode-copilot-proxy",
  },
  {
    label: "MCP & applied data", title: "Job intelligence service",
    description: "Connected public labor datasets to natural-language MCP tools with filtering, analytics, caching, exports, and multi-client integration guidance.",
    link: "https://github.com/awbjcj/h1b-job-search-mcp",
  },
];

export const focusAreas = [
  { title: "Design the boundary", description: "Clear tool contracts, typed data, and compatibility layers keep model behavior understandable." },
  { title: "Keep humans in control", description: "Identity, permissions, approvals, and budget limits are first-class product features." },
  { title: "Ship the whole loop", description: "I work across interface, runtime, data, deployment, and the feedback needed to improve them." },
];

export const skillGroups = [
  { label: "AI systems", skills: ["LangGraph", "Deep Agents", "MCP", "Tool calling", "Human-in-the-loop"] },
  { label: "Product engineering", skills: ["Next.js", "React", "TypeScript", "Python", "FastAPI"] },
  { label: "Platform", skills: ["JWT & RBAC", "Streaming / SSE", "Docker", "GitHub Actions", "API compatibility"] },
];

/**
 * The formal record: employment timeline and education.
 *
 * Replace every "TODO:" string below with your real history, then drop your PDF
 * at `public/resume.pdf`. Write highlights as outcomes, not duties — lead with a
 * strong verb and include a number wherever you honestly can.
 */
export const resume = {
  roles: [
    {
      company: "TODO: Most recent employer",
      role: "TODO: Your job title",
      period: "TODO: Mon YYYY — Present",
      location: "TODO: City, State (or Remote)",
      highlights: [
        "TODO: Shipped <what> that <measurable outcome — latency, revenue, adoption, cost>.",
        "TODO: Led or owned <scope>, coordinating with <who> to <result>.",
        "TODO: Introduced <practice or system> that <quantified improvement>.",
      ],
    },
    {
      company: "TODO: Previous employer",
      role: "TODO: Your job title",
      period: "TODO: Mon YYYY — Mon YYYY",
      location: "TODO: City, State (or Remote)",
      highlights: [
        "TODO: Built <what> serving <how many users / how much traffic>.",
        "TODO: Reduced <problem> by <number> through <approach>.",
      ],
    },
  ],
  education: [
    {
      school: "TODO: University name",
      credential: "TODO: Degree, Field of study",
      period: "TODO: YYYY — YYYY",
      detail: "TODO: Optional — honors, GPA, thesis, or relevant coursework.",
    },
  ],
};
