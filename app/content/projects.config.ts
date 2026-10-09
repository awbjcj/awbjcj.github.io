import type { ProjectConfig } from "./types";

/** Dossier-backed projects refreshed on 2026-10-02. Source notes: github-evidence.md. */
export const projects = [
  {
    "id": "resume",
    "name": "Resume Tailor Harness",
    "kind": "Full-stack application",
    "signal": "FACT VALIDATION · WORKSPACE ISOLATION",
    "description": "Job discovery, résumé tailoring, cover letters, and application tracking with source-grounded claim checks. Recent work adds browser-free posting acquisition, verified recovery, source cooldowns, and model-transport checks.",
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
      "href": "https://resume-tailor-harness.up.railway.app",
      "label": "Open the app"
    }
  },
  {
    "id": "food",
    "name": "Food Manager",
    "kind": "Telegram bot & Mini App",
    "signal": "RECEIPT GROUPS · SHARED KITCHEN",
    "description": "Converts receipt photos into shared pantry records with expiry reminders and meal plans. Receipt grouping keeps purchases recognizable; the Mini App Kitchen reuses bot authorization, quota, and confirmation handlers across localized workflows.",
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
    "id": "console",
    "name": "Deep Agents UI",
    "kind": "Customized open-source frontend",
    "signal": "CHECKPOINT RECOVERY · TOOL APPROVALS",
    "description": "Extended LangChain's console with authentication, role controls, token/call/cost budgets, and tool approvals. Runs continue from the latest server checkpoint; pending subagent files appear while saving, alongside readable artifact previews.",
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
    "id": "requirements",
    "name": "Requirement Analyzer",
    "kind": "Requirements engineering workflow",
    "signal": "SOURCE CONTEXT · INDEPENDENT REVIEW",
    "description": "Coordinates Jira, Confluence, and Polarion research, requirements drafting, independent review, and verification proposals. A Python SDK runtime validates source packets, retains artifacts, streams progress, and supports cancellation and resume.",
    "skills": ["Python", "MCP", "GitHub Copilot SDK", "Jira", "Polarion", "Confluence"]
  },
  {
    "id": "vsda",
    "name": "VSDA Deep Agent",
    "kind": "Enterprise agent platform",
    "signal": "REVIEWED WRITES · HYBRID RETRIEVAL",
    "description": "A LangGraph supervisor routes enterprise tools, hybrid retrieval, and isolated code analysis. Reviewed Confluence and Polarion authoring use target checks and durable mutation claims; document exports adapt concurrency within configured bounds.",
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
    "signal": "RELEASE EXTRACTION · RUN SUMMARIES",
    "description": "Parses release emails into typed records and Jenkins build requests. A containerized reviewer serves release data and receives token updates; automatic run summaries capture processing, submissions, queue IDs, and failures.",
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
    "signal": "ALM AUTHORING · ADAPTIVE EXPORTS",
    "description": "Typed Python clients and workflows for Jira, Polarion, Confluence, Teams, and email. Recent work validates wiki page creation, aligns SOAP/REST test-result images, and adds adaptive bulk exports with deferred timeout retries.",
    "skills": [
      "Python",
      "asyncio",
      "LangGraph",
      "REST APIs",
      "Jenkins"
    ]
  }
] as const satisfies readonly ProjectConfig[];
