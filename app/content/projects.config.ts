import type { ProjectConfig } from "./types";

/** Implementation-backed projects refreshed on 2026-10-31. Source notes: github-evidence.md. */
export const projects = [
  {
    "id": "vsda",
    "name": "VSDA Deep Agent",
    "kind": "Enterprise agent platform",
    "signal": "SCHEDULED TASKS · ENTERPRISE RETRIEVAL",
    "description": "A LangGraph supervisor runs enterprise tools, hybrid retrieval, and isolated code analysis under shared permissions and budgets. Users can schedule their own tasks or enable a Teams bridge. Reviewed writes recheck their targets; SharePoint downloads and versioned private skills preserve source context.",
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
    "signal": "RETRYABLE EXTRACTION · BUILD TRACEABILITY",
    "description": "Parses release emails into typed records and Jenkins build requests. Failed extractions are kept for retry. The containerized reviewer serves its browser dependencies locally and requires HTTPS for remote Graph token updates by default. Run summaries report failures and distinguish queued requests from completed builds.",
    "skills": [
      "LangGraph",
      "OpenAI",
      "Microsoft Graph",
      "Pydantic",
      "Jenkins"
    ]
  },
  {
    "id": "resume",
    "name": "Resume Tailor Harness",
    "kind": "Full-stack application",
    "signal": "EVIDENCE CHECKS · VISUAL PDF REVIEW",
    "description": "Finds jobs and tailors résumés against profile evidence. Gmail, Outlook, and IMAP connections propose tracking updates for review. External agents prepare applications with revision checks on answers and verified attachments. Typst exports include evidence-backed sections, page-fit checks, and visual layout review.",
    "skills": [
      "Python",
      "FastAPI",
      "React",
      "TypeScript",
      "Typst",
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
    "id": "requirements",
    "name": "Requirement Buddy",
    "kind": "Requirements engineering workflow",
    "signal": "REVISION CHECKS · VERIFIED ALM WRITES",
    "description": "Requirement Buddy is an engineering dashboard for source research, requirements drafting, independent review, and verification. Its SDK workflows can resume after interruption and check source revisions before reuse. Separate Jira, Confluence, and Polarion MCP servers handle reviewed publication batches and verify test-execution writes by reading the results back.",
    "skills": [
      "Python",
      "MCP",
      "GitHub Copilot SDK",
      "Jira",
      "Polarion",
      "Confluence"
    ]
  },
  {
    "id": "enterprise",
    "name": "Enterprise Automation Workflow",
    "kind": "Integration libraries & agents",
    "signal": "BOUNDED CONCURRENCY · RECOVERABLE EXPORTS",
    "description": "Python clients and workflows connect Jira, Polarion, Confluence, Teams, and email through typed interfaces. Bulk retrieval adjusts concurrency within operator limits, keeps input order, and rejects incomplete Jira searches. Polarion exports retry dropped connections and deferred timeouts. SOAP and REST clients share test-result image handling.",
    "skills": [
      "Python",
      "asyncio",
      "LangGraph",
      "REST APIs",
      "Jenkins"
    ]
  },
  {
    "id": "food",
    "name": "Pantry Manager",
    "kind": "Household assistant & Mini App",
    "signal": "SHARED PANTRY · TELEGRAM, SLACK & WHATSAPP",
    "description": "A Telegram bot and multilingual Mini App for receipt scanning, shared pantry records, expiry reminders, and meal plans. Purchases can be grouped by store, batch changes need confirmation, and past choices inform food preferences. Self-hosted deployments also connect Slack and WhatsApp with the same household permissions.",
    "skills": [
      "Python",
      "aiogram",
      "SQLModel",
      "LLM routing",
      "Telegram Mini Apps"
    ],
    "repo": {
      "href": "https://github.com/awbjcj/pantry-manager",
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
    "signal": "SAVED REVIEW PLANS · QUARANTINE",
    "description": "Uses FFmpeg and cached fingerprints to find duplicate videos and shared clips. Review matches in a browser, reopen saved plans, and track scan and removal progress. Decisions about a file carry across clip groups. Approved removals move to quarantine after the tool checks coverage by retained videos.",
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
    "id": "wiki",
    "name": "Confluence Wiki Maintainer",
    "kind": "Confluence authoring workflow",
    "signal": "INDEPENDENT REVIEW · APPROVAL RECEIPTS",
    "description": "Copilot or Codex workers research sources, draft pages, and independently review the text and locally rendered diagrams. A Python host validates files passed between workers, generates Confluence XML, and checks page versions. Publication requires an approved content digest. Optional human review adds previews and approval receipts.",
    "skills": [
      "Python",
      "GitHub Copilot SDK",
      "Codex CLI",
      "MCP",
      "Confluence",
      "Mermaid"
    ]
  }
] as const satisfies readonly ProjectConfig[];
