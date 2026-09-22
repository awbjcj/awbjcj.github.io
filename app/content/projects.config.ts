import type { ProjectConfig } from "./types";

/** Reviewed against GitHub on 2026-09-22. Source notes: github-evidence.md. */
export const projects = [
  {
    "id": "resume",
    "name": "Resume Tailor Harness",
    "kind": "Full-stack application",
    "signal": "FACT VALIDATION · WORKSPACE ISOLATION",
    "description": "Job discovery, résumé tailoring, cover letters, and application tracking. Deterministic gates check claims against source facts; recent work adds Gmail sync recovery and subscription-credit lifecycle handling.",
    "skills": [
      "Python",
      "FastAPI",
      "React",
      "TypeScript",
      "SQLite"
    ],
    "repo": {
      "href": "https://github.com/awbjcj/resume-tailor-harness",
      "label": "Source"
    },
    "live": {
      "href": "https://resume-agent.up.railway.app",
      "label": "Open the app"
    }
  },
  {
    "id": "food",
    "name": "Food Manager",
    "kind": "Telegram bot & Mini App",
    "signal": "RECEIPT PARSING · SHARED HOUSEHOLDS",
    "description": "Converts receipt photos into pantry records with expiry reminders and meal plans. The Mini App runs bot workflows through the existing authorization, quota, and confirmation handlers, with localized messages.",
    "skills": [
      "Python",
      "aiogram",
      "SQLModel",
      "LLM routing",
      "Telegram Mini Apps"
    ],
    "repo": {
      "href": "https://github.com/awbjcj/food-manager",
      "label": "Source"
    },
    "live": {
      "href": "https://t.me/foodie_manager_bot",
      "label": "Open in Telegram"
    }
  },
  {
    "id": "video",
    "name": "Video Dedup",
    "kind": "Local media tooling",
    "signal": "CLIP MATCHING · REVIEW BEFORE REMOVAL",
    "description": "Finds identical videos, re-encoded copies, and shared clips using FFmpeg and cached fingerprints. A browser review groups matches by clip, combines keeper coverage, and moves approved removals to quarantine.",
    "skills": [
      "Python",
      "FFmpeg",
      "SQLite",
      "React",
      "TypeScript"
    ],
    "repo": {
      "href": "https://github.com/awbjcj/video-dedup",
      "label": "Source"
    }
  },
  {
    "id": "h1b",
    "name": "H-1B Job Search MCP",
    "kind": "Open-source fork contributions",
    "signal": "DISK INDEX · BOUNDED QUERY CACHE",
    "description": "Extended an MCP server for searching U.S. Department of Labor disclosure records. Added disk-backed indexing and bounded caches, with idle cache release and documented memory/query tradeoffs.",
    "skills": [
      "Python",
      "FastMCP",
      "SQLite",
      "MCP"
    ],
    "repo": {
      "href": "https://github.com/awbjcj/h1b-job-search-mcp",
      "label": "Source"
    }
  },
  {
    "id": "console",
    "name": "Deep Agents UI",
    "kind": "Customized open-source frontend",
    "signal": "STREAMING · ACCESS & USAGE CONTROLS",
    "description": "Extended LangChain's agent console with authentication, role-based access, usage budgets, and tool approvals. Recent changes add code-analysis and source-image interfaces and preserve edits during settings saves.",
    "skills": [
      "Next.js",
      "React",
      "TypeScript",
      "LangGraph SDK",
      "Radix UI"
    ],
    "repo": {
      "href": "https://github.com/awbjcj/deep-agents-ui",
      "label": "Source"
    }
  },
  {
    "id": "diagram",
    "name": "Diagram Design",
    "kind": "Open-source fork contributions",
    "signal": "HTML / SVG · VALIDATION TOOLING",
    "description": "Contributed hardening fixes to the diagram skill's extraction and verification scripts, normalizing extractor handling and expanding validation coverage for generated diagrams and documentation.",
    "skills": [
      "Python",
      "HTML",
      "SVG",
      "Validation"
    ],
    "repo": {
      "href": "https://github.com/awbjcj/diagram-design",
      "label": "Source"
    }
  },
  {
    "id": "requirements",
    "name": "Requirement Analyzer",
    "kind": "Requirements engineering workflow",
    "signal": "MCP CONNECTORS · INDEPENDENT REVIEW",
    "description": "Coordinates source retrieval, requirements drafting, independent review, and verification proposals through Jira and Polarion MCP tools. A Python SDK runtime streams progress and retains artifacts; recent work expands document-layout and revision reads.",
    "skills": ["Python", "MCP", "GitHub Copilot SDK", "Jira", "Polarion"]
  },
  {
    "id": "vsda",
    "name": "VSDA Deep Agent",
    "kind": "Enterprise agent platform",
    "signal": "SUPERVISOR ROUTING · HYBRID RETRIEVAL",
    "description": "A LangGraph supervisor routes work across enterprise tools, retrieval, and isolated repository analysis. FastAPI provides authentication, model policy, usage controls, and administration.",
    "skills": [
      "LangGraph",
      "FastAPI",
      "OpenSearch",
      "Hybrid RAG",
      "SQLAlchemy"
    ]
  },
  {
    "id": "release",
    "name": "Release-Email Intelligence Pipeline",
    "kind": "Engineering automation",
    "signal": "STRUCTURED EXTRACTION · CI INTEGRATION",
    "description": "Parses software release emails into structured records, coordinates Jenkins builds, and generates summaries from test reports. Release data can be compared with MinIO exports for validation.",
    "skills": [
      "LangGraph",
      "OpenAI",
      "Microsoft Graph",
      "Pydantic",
      "Jenkins"
    ]
  },
  {
    "id": "enterprise",
    "name": "Enterprise Engineering Automation",
    "kind": "Integration libraries & agents",
    "signal": "TYPED CLIENTS · APPROVAL WORKFLOWS",
    "description": "Python clients and agent workflows for Jira, Polarion, Confluence, Teams, and email. Supports ticket reporting, test-run management, and human approval for sensitive operations.",
    "skills": [
      "Python",
      "asyncio",
      "LangGraph",
      "REST APIs",
      "Jenkins"
    ]
  }
] as const satisfies readonly ProjectConfig[];
