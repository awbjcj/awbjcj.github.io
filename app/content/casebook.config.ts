export const featuredProjectIds = ["vsda", "release", "resume", "requirements", "enterprise", "food"] as const;
export type CaseStudyId = typeof featuredProjectIds[number];
export type PlaybackCopy = Record<"play" | "pause" | "resume" | "replay" | "ready" | "running" | "paused" | "done" | "reduced" | "overview", string>;
export type ArchitectureCopy = {
  title: string; description: string;
  nodes: Record<string, { title: string; detail: string }>;
  labels: Record<string, string>;
  lanes?: readonly string[];
  note: string;
  legend: { flow: string; context: string };
};
export type CaseStudyCopy = {
  railDetail: string; subtitle: string; purpose: string; summary: string;
  focus: string; integration: string;
  steps: readonly { title: string; detail: string }[];
  architecture: ArchitectureCopy;
};
type CasebookConfig = {
  introduction: string;
  labels: Record<"projects" | "selectProject" | "allProjects" | "summary" | "workflow" | "technologies" | "source" | "open" | "resume" | "contact" | "private" | "architecture" | "approach" | "diagramHint", string> & { playback: PlaybackCopy };
  projects: Record<CaseStudyId, CaseStudyCopy>;
};

export const casebookConfig: CasebookConfig = {
  "introduction": "I build AI applications in Python and TypeScript for engineering teams and everyday tasks.",
  "labels": {
    "projects": "Projects",
    "selectProject": "Choose a project",
    "allProjects": "All engineering work",
    "summary": "What it does",
    "workflow": "Workflow",
    "technologies": "Technologies",
    "source": "Source",
    "open": "Open app",
    "resume": "Résumé",
    "contact": "Contact",
    "private": "Private repository",
    "architecture": "Project workflow",
    "approach": "Engineering approach",
    "diagramHint": "Swipe or scroll to see the full diagram. Keyboard users can focus it and use the arrow keys.",
    "playback": {
      "play": "Play flow",
      "pause": "Pause",
      "resume": "Resume flow",
      "replay": "Replay",
      "ready": "Play an example path through this diagram.",
      "running": "Following the example path.",
      "paused": "Playback paused.",
      "done": "Example complete. The full diagram remains visible.",
      "reduced": "Motion is off in your device preferences.",
      "overview": "View all diagrams"
    }
  },
  "projects": {
    "vsda": {
      "railDetail": "Specialist agents, retrieval, isolated analysis",
      "subtitle": "A governed agent platform for engineering work",
      "purpose": "Coordinates enterprise search, code analysis, and reviewed tool actions from interactive or scheduled tasks.",
      "summary": "A LangGraph supervisor delegates engineering tasks to specialists for document search, code analysis, and enterprise tools. Users can work in chat, schedule their own tasks, or enable a chat bridge. Permissions, execution budgets, and reviews tied to saved checkpoints apply across these routes.",
      "focus": "Task routing and permissions.",
      "integration": "Specialists use the caller’s access scope. Code analysis runs in an isolated worker, and reviewed changes to enterprise records recheck their targets before execution.",
      "steps": [
        {
          "title": "Start a task",
          "detail": "Accept a signed-in request or an owner-scoped scheduled run."
        },
        {
          "title": "Route to specialists",
          "detail": "Choose retrieval, code analysis, or enterprise service tools."
        },
        {
          "title": "Gather engineering context",
          "detail": "Search OpenSearch, LLM Wiki, and authorized enterprise sources."
        },
        {
          "title": "Apply budgets and review changes",
          "detail": "Apply shared budgets; isolate analysis and review mutations."
        },
        {
          "title": "Save context and results",
          "detail": "Preserve thread state, source references, and analysis files."
        }
      ],
      "architecture": {
        "title": "Supervisor and specialist routing",
        "description": "Chat and scheduled runs enter the same supervisor. It selects the specialists needed for the task, with shared identity and execution budgets.",
        "nodes": {
          "chat": {
            "title": "Interactive task",
            "detail": "Signed-in chat · opt-in bridges"
          },
          "schedule": {
            "title": "Scheduled task",
            "detail": "Owner scope · leased worker"
          },
          "supervisor": {
            "title": "LangGraph supervisor",
            "detail": "Route work within shared identity and budgets"
          },
          "retrieval": {
            "title": "Knowledge agent",
            "detail": "OpenSearch · LLM Wiki"
          },
          "analysis": {
            "title": "Code analysis",
            "detail": "Isolated worker · skill snapshots"
          },
          "tools": {
            "title": "Service agents",
            "detail": "Jira · Polarion · Confluence"
          },
          "citations": {
            "title": "Cited context",
            "detail": "Source references"
          },
          "artifacts": {
            "title": "Analysis artifacts",
            "detail": "Files and findings"
          },
          "mutations": {
            "title": "Reviewed writes",
            "detail": "Target rechecks"
          }
        },
        "labels": {},
        "note": "Threads retain checkpoints and source context. Schedules belong to a user, chat bridges are opt-in, and a task can use one or several specialists.",
        "legend": {
          "flow": "Task / tool route",
          "context": "Shared execution scope"
        }
      }
    },
    "release": {
      "railDetail": "Typed extraction, retry recovery, Jenkins",
      "subtitle": "Release emails become traceable build requests",
      "purpose": "Turns release messages into typed engineering records, a reviewable release database, and Jenkins requests.",
      "summary": "The LangGraph workflow cleans release emails, parses subjects, and extracts host-specific fields into typed records. It saves those records before marking an email as processed. A browser reviewer displays saved releases, while eligible records feed Jenkins. Run summaries distinguish queued requests from completed builds.",
      "focus": "From model output to build automation.",
      "integration": "Models interpret varied email formats. Typed records, release eligibility rules, and queue/build IDs carry the results into downstream software; persistence ordering keeps failed work retryable.",
      "steps": [
        {
          "title": "Read release messages",
          "detail": "Fetch Microsoft Graph email or convert local report files."
        },
        {
          "title": "Extract typed release data",
          "detail": "Clean content, parse the subject, and combine host-specific fields."
        },
        {
          "title": "Persist before acknowledging",
          "detail": "Keep failures retryable; block job submission on save failure."
        },
        {
          "title": "Review or submit",
          "detail": "Inspect saved records; submit eligible Jenkins jobs."
        },
        {
          "title": "Report actual outcomes",
          "detail": "Record release versions, queue/build IDs, failures, and completion."
        }
      ],
      "architecture": {
        "title": "Extraction, storage, and retry",
        "description": "Email interpretation feeds a persistence boundary before any job submission. Extraction and save failures remain retryable; the reviewer reads the saved records independently.",
        "nodes": {
          "email": {
            "title": "Release email",
            "detail": "Microsoft Graph · local files"
          },
          "extract": {
            "title": "Staged AI extraction",
            "detail": "Clean → subject → host fields"
          },
          "store": {
            "title": "Persist typed records",
            "detail": "Version · host · change sets; then acknowledge"
          },
          "retry": {
            "title": "Keep retryable",
            "detail": "Extraction or save failed"
          },
          "reviewer": {
            "title": "Release reviewer",
            "detail": "Browse stored release records"
          },
          "jenkins": {
            "title": "Eligible Jenkins jobs",
            "detail": "Queue ID → build ID"
          },
          "summary": {
            "title": "Run summary",
            "detail": "Queued ≠ completed; failures stay visible"
          }
        },
        "labels": {
          "retry": "RETRY",
          "failed": "FAILED",
          "read": "READ",
          "saveFailed": "SAVE FAILED"
        },
        "note": "A failed save blocks job submission. Run summaries report queued, running, and completed builds separately, so an accepted request is not mistaken for a finished build.",
        "legend": {
          "flow": "Processing / submission",
          "context": "Retry or read-only view"
        }
      }
    },
    "resume": {
      "railDetail": "Profile evidence, claim checks, PDF export",
      "subtitle": "Tailored résumés with evidence checks",
      "purpose": "Finds jobs and tailors résumés against profile facts, with claim checks and Typst PDF export.",
      "summary": "The application finds relevant jobs, selects facts from the applicant’s profile, and drafts a résumé for each role. Checks flag citation, skill, and numeric issues. Users review application updates, answers, and attachments; Typst exports the PDF for page-fit checks and visual review.",
      "steps": [
        {
          "title": "Find jobs",
          "detail": "Find relevant openings for target roles."
        },
        {
          "title": "Build job context",
          "detail": "Parse the role, requirements, and responsibilities."
        },
        {
          "title": "Check profile evidence",
          "detail": "Check citations, skills, and numeric support."
        },
        {
          "title": "Tailor Résumé",
          "detail": "Draft for the role using the applicant’s profile evidence."
        },
        {
          "title": "Export PDF",
          "detail": "Use Typst and review page fit and layout."
        }
      ],
      "architecture": {
        "title": "Evidence checks and PDF review",
        "description": "Draft claims and their source evidence meet at the claim checks. Passing claims continue to PDF export; flagged text returns to the applicant for revision or review.",
        "nodes": {
          "job": {
            "title": "Job description",
            "detail": "Role and requirements"
          },
          "facts": {
            "title": "Profile facts",
            "detail": "Experience · skills · projects"
          },
          "tailor": {
            "title": "AI tailoring",
            "detail": "Job context + profile evidence"
          },
          "evidence": {
            "title": "Source evidence",
            "detail": "Fact citations · skills · numbers"
          },
          "draft": {
            "title": "Draft claims",
            "detail": "Statements in the résumé"
          },
          "checks": {
            "title": "Claim checks",
            "detail": "Citations · skills · numbers"
          },
          "revise": {
            "title": "Revise / review",
            "detail": "Edit flagged claims and rerun checks"
          },
          "pdf": {
            "title": "Typst PDF",
            "detail": "Claims · page fit"
          },
          "visual": {
            "title": "Visual layout review",
            "detail": "Rendered pages"
          }
        },
        "labels": {
          "pass": "PASS",
          "flag": "FLAG"
        },
        "note": "A passing rule does not prove every statement true. Profile evidence, revision-checked application answers, and visual PDF review address separate parts of the application.",
        "legend": {
          "flow": "Draft / check / export",
          "context": "Supporting source evidence"
        }
      },
      "focus": "Generation backed by profile evidence.",
      "integration": "Rules check where claims came from, whether skill names match the profile, and whether numbers have support. PDF page fit and visual layout are reviewed separately."
    },
    "requirements": {
      "railDetail": "Research, independent review, publication",
      "subtitle": "From source research to reviewed engineering artifacts",
      "purpose": "An engineering workspace for source research, requirements drafting, independent review, verification, and reviewed publication.",
      "summary": "Requirement Buddy separates source research, requirements drafting, independent review, and verification. Saved runs can resume after interruption. Before reusing work, the host checks source revisions; before publishing, it validates the reviewed batch and reads back the changes made in the engineering tools.",
      "steps": [
        {
          "title": "Research sources",
          "detail": "Collect authorized evidence with citations and source revisions."
        },
        {
          "title": "Draft requirements",
          "detail": "Use assigned authoring workers and source packets."
        },
        {
          "title": "Review independently",
          "detail": "Review the content and locally rendered diagrams."
        },
        {
          "title": "Check freshness",
          "detail": "Recheck sources, feedback, and artifact hashes before reuse."
        },
        {
          "title": "Publish a reviewed batch",
          "detail": "Validate revisions and payloads, then read back writes."
        }
      ],
      "architecture": {
        "title": "Author, reviewer, and publication handoffs",
        "description": "Research supplies the evidence, an author drafts the requirements, and a separate worker reviews the text and rendered diagrams. The host then validates the publication batch.",
        "nodes": {
          "packet": {
            "title": "Source packet",
            "detail": "Citations · source revisions"
          },
          "author": {
            "title": "Draft requirements",
            "detail": "Artifacts and locally rendered diagrams"
          },
          "review": {
            "title": "Independent review",
            "detail": "Content and diagram feedback"
          },
          "feedback": {
            "title": "Revision work",
            "detail": "Feedback to author"
          },
          "host": {
            "title": "Validate the batch",
            "detail": "Freshness · hashes · target revisions"
          },
          "publish": {
            "title": "Write and verify",
            "detail": "ALM tool results"
          }
        },
        "labels": {
          "approve": "APPROVE",
          "revise": "REVISE",
          "publish": "PUBLISH"
        },
        "lanes": [
          "Research",
          "Author",
          "Reviewer",
          "App host"
        ],
        "note": "Saved runs support recovery after interruption. Independent review alone does not establish acceptance: the host also checks source freshness, batch authorization, and the result of each write.",
        "legend": {
          "flow": "Artifact handoff",
          "context": "Feedback to author"
        }
      },
      "focus": "Clear handoffs between author, reviewer, and host.",
      "integration": "Workers draft and review the content. The host saves run state, checks source freshness, authorizes the exact publication batch, and verifies writes by reading the results back."
    },
    "enterprise": {
      "railDetail": "Jira, Polarion, Confluence, Teams",
      "subtitle": "Engineering collaboration across enterprise tools",
      "purpose": "Python integrations and agent workflows connect Jira, Polarion, Confluence, Teams, email, and Jenkins.",
      "summary": "Typed Python clients connect engineering records, reports, and coordinated workflows. Bulk reads stay within operator-set concurrency limits and preserve input order. Incomplete Jira searches fail instead of returning partial results, while interrupted Polarion exports can be retried.",
      "steps": [
        {
          "title": "Collect engineering data",
          "detail": "Read Jira, Polarion, and Confluence through typed clients."
        },
        {
          "title": "Bound the work",
          "detail": "Adjust concurrency within operator limits and preserve order."
        },
        {
          "title": "Coordinate workflows",
          "detail": "Connect agents, Teams, email, and Jenkins requests."
        },
        {
          "title": "Produce artifacts",
          "detail": "Build engineering reports, exports, and proposed updates."
        },
        {
          "title": "Recover incomplete work",
          "detail": "Reject incomplete reads and retry interrupted exports."
        }
      ],
      "architecture": {
        "title": "Integration and execution layers",
        "description": "Jira, Polarion, and Confluence share a typed client layer. Bounded batch execution supports agent workflows alongside conventional reports and exports.",
        "nodes": {
          "jira": {
            "title": "Jira",
            "detail": "Issues and activity"
          },
          "polarion": {
            "title": "Polarion",
            "detail": "Work items · tests"
          },
          "confluence": {
            "title": "Confluence",
            "detail": "Pages and documents"
          },
          "clients": {
            "title": "Typed Python clients",
            "detail": "REST / SOAP · shared test-result image handling"
          },
          "execution": {
            "title": "Bounded batch execution",
            "detail": "Operator limits · ordered results · complete-read checks"
          },
          "agents": {
            "title": "Agent workflows",
            "detail": "Reports · Teams · email · Jenkins"
          },
          "exports": {
            "title": "Recoverable exports",
            "detail": "Polarion PDF · connection and timeout retries"
          }
        },
        "labels": {},
        "note": "Incomplete Jira searches stop the batch. Polarion exports retry dropped connections and deferred timeouts. This project provides integration libraries and workflows; no hosted application UI is claimed.",
        "legend": {
          "flow": "Data / execution path",
          "context": "Shared client boundary"
        }
      },
      "focus": "Reliable integrations for agent workflows.",
      "integration": "Agents work with records supplied by the same typed clients and bounded batch execution used by conventional reports, exports, and recovery tools."
    },
    "food": {
      "railDetail": "Receipts, shared pantry, meal planning",
      "subtitle": "A shared pantry and meal-planning assistant",
      "purpose": "A Telegram bot and Mini App for receipt imports, shared household inventories, expiry reminders, and meal planning.",
      "summary": "Pantry Manager reads receipts into a household’s shared pantry and supports meal plans and expiry reminders. Household permissions and quotas apply to the records; later batch changes need confirmation. If the selected text model cannot read images, a vision-capable provider handles the receipt.",
      "steps": [
        {
          "title": "Import a receipt",
          "detail": "Parse purchases and group them by store."
        },
        {
          "title": "Review changes",
          "detail": "Confirm batch updates before changing pantry records."
        },
        {
          "title": "Share the pantry",
          "detail": "Apply the household’s shared permissions and quotas."
        },
        {
          "title": "Plan meals",
          "detail": "Use inventory and learned food preferences."
        },
        {
          "title": "Follow reminders",
          "detail": "Receive expiry reminders through the household workflow."
        }
      ],
      "architecture": {
        "title": "Receipt import and batch updates",
        "description": "Receipt import and later batch updates are separate interactions. The assistant saves eligible receipt items, then asks for confirmation when the household requests a batch status change.",
        "nodes": {
          "member": {
            "title": "Household member",
            "detail": "Chat / Mini App"
          },
          "assistant": {
            "title": "Assistant",
            "detail": "Vision + commands"
          },
          "pantry": {
            "title": "Shared pantry",
            "detail": "SQLModel records"
          }
        },
        "labels": {
          "receipt": "RECEIPT",
          "save": "ADD ITEMS",
          "receiptResult": "RESULT + UNDO",
          "batch": "BATCH EDIT",
          "proposal": "REVIEW BATCH",
          "confirm": "CONFIRM",
          "write": "APPLY CHANGES",
          "response": "RESULT",
          "receiptSection": "Receipt import",
          "batchSection": "Later batch update",
          "controls": "Household permissions · quotas · batch confirmation"
        },
        "note": "Receipt imports can be undone; confirmation applies to batch changes. Household inventory and preferences also support meals and reminders. Telegram is hosted, while Slack and WhatsApp require a self-hosted deployment.",
        "legend": {
          "flow": "Request / action",
          "context": "Reply / persistent state"
        }
      },
      "focus": "Shared records with household controls.",
      "integration": "Receipt parsing adds eligible items to the pantry. Batch status changes follow a separate confirmation step; meal plans and reminders reuse the household’s inventory and preferences."
    }
  }
};

export const casebookChinese: CasebookConfig = {
  "introduction": "我用 Python 和 TypeScript 开发 AI 应用，处理工程团队的工作，也解决日常任务。",
  "labels": {
    "projects": "项目",
    "selectProject": "选择项目",
    "allProjects": "查看全部工程项目",
    "summary": "项目做什么",
    "workflow": "工作流程",
    "technologies": "技术栈",
    "source": "源码",
    "open": "打开应用",
    "resume": "简历",
    "contact": "联系",
    "private": "私有仓库",
    "architecture": "项目工作流",
    "approach": "工程方法",
    "diagramHint": "左右滑动或滚动可查看完整图表；使用键盘时，聚焦图表后按方向键。",
    "playback": {
      "play": "播放流程",
      "pause": "暂停",
      "resume": "继续播放",
      "replay": "重新播放",
      "ready": "播放图中的一条示例路径。",
      "running": "正在演示示例路径。",
      "paused": "播放已暂停。",
      "done": "演示结束，完整图表仍可查看。",
      "reduced": "设备已启用减少动态效果。",
      "overview": "查看全部图表"
    }
  },
  "projects": {
    "vsda": {
      "railDetail": "专职智能体、检索与隔离分析",
      "subtitle": "面向工程任务的受控智能体平台",
      "purpose": "通过交互式或定时任务，协调企业检索、代码分析以及经过审核的工具操作。",
      "summary": "LangGraph 主智能体将工程任务分给负责资料检索、代码分析和企业工具的专职智能体。用户可以直接聊天、安排自己的定时任务，也可以启用聊天平台入口。各条路径共用权限和执行预算，操作审核与保存的检查点绑定。",
      "focus": "任务分派与权限控制。",
      "integration": "专职智能体沿用调用者的访问范围。代码分析在隔离工作进程中运行；修改企业记录时，程序会在审核后、执行前再次核对目标。",
      "steps": [
        {
          "title": "接收任务",
          "detail": "接收已登录用户的请求，或在任务所有者范围内定时运行。"
        },
        {
          "title": "分派专职智能体",
          "detail": "选择检索、代码分析或企业服务工具。"
        },
        {
          "title": "收集工程背景",
          "detail": "搜索 OpenSearch、LLM Wiki 及授权范围内的企业资料。"
        },
        {
          "title": "在边界内执行",
          "detail": "共享执行预算，隔离代码分析，并审核修改操作。"
        },
        {
          "title": "保留上下文与成果",
          "detail": "保存会话状态、来源引用以及分析文件。"
        }
      ],
      "architecture": {
        "title": "主智能体与专职智能体架构",
        "description": "聊天请求和定时任务进入同一个主智能体，再按任务需要分派给不同的专职智能体。各条路径共用身份信息与执行预算。",
        "nodes": {
          "chat": {
            "title": "交互任务",
            "detail": "登录会话 · 可选聊天入口"
          },
          "schedule": {
            "title": "定时任务",
            "detail": "所有者范围 · 租约工作进程"
          },
          "supervisor": {
            "title": "LangGraph 主智能体",
            "detail": "在共享身份与预算内分派工作"
          },
          "retrieval": {
            "title": "知识检索",
            "detail": "检索 OpenSearch 与 LLM Wiki"
          },
          "analysis": {
            "title": "代码分析",
            "detail": "隔离工作进程 · 技能快照"
          },
          "tools": {
            "title": "企业服务智能体",
            "detail": "连接 Jira、Polarion 与 Confluence"
          },
          "citations": {
            "title": "有引用的背景",
            "detail": "保留来源引用"
          },
          "artifacts": {
            "title": "分析成果",
            "detail": "文件与发现"
          },
          "mutations": {
            "title": "审核后的修改",
            "detail": "重新核对目标"
          }
        },
        "labels": {},
        "note": "会话保留检查点和来源背景。定时任务属于各自用户，聊天平台入口需主动启用；一次任务可以调用一个或多个专职智能体。",
        "legend": {
          "flow": "任务与工具路径",
          "context": "共享执行范围"
        }
      }
    },
    "release": {
      "railDetail": "类型化提取、失败恢复与 Jenkins",
      "subtitle": "从发布邮件到可追溯的构建请求",
      "purpose": "将发布消息转成类型化工程记录、可审阅的发布数据库以及 Jenkins 构建请求。",
      "summary": "LangGraph 工作流先清理发布邮件、解析主题，再把主机相关字段整理成类型化记录。保存成功后，邮件才会被标记为已处理。浏览器审阅器展示已存记录，符合条件的发布进入 Jenkins；运行报告分别列出排队请求和已完成构建。",
      "focus": "把模型输出接入构建流程。",
      "integration": "模型负责理解不同格式的邮件，类型化记录、发布适用规则和队列／构建标识负责衔接后续软件。先保存再确认处理，让失败的工作仍可重试。",
      "steps": [
        {
          "title": "读取发布消息",
          "detail": "获取 Microsoft Graph 邮件，或转换本地报告文件。"
        },
        {
          "title": "提取类型化信息",
          "detail": "清理正文、解析主题，再组合主机相关字段。"
        },
        {
          "title": "先保存，再确认处理",
          "detail": "保留失败的重试机会，保存失败时停止提交任务。"
        },
        {
          "title": "审阅或提交",
          "detail": "检查已存记录，将符合条件的任务提交给 Jenkins。"
        },
        {
          "title": "报告实际结果",
          "detail": "记录版本、队列与构建标识、失败和实际完成状态。"
        }
      ],
      "architecture": {
        "title": "信息提取、持久化与失败恢复",
        "description": "邮件提取结果保存后才能提交任务。提取或保存失败仍可重试，审阅器则独立读取已存记录。",
        "nodes": {
          "email": {
            "title": "发布邮件",
            "detail": "Microsoft Graph 或本地文件"
          },
          "extract": {
            "title": "分阶段 AI 提取",
            "detail": "清理正文 → 主题 → 主机字段"
          },
          "store": {
            "title": "保存类型化记录",
            "detail": "版本、主机、变更集；保存后确认邮件"
          },
          "retry": {
            "title": "保留重试机会",
            "detail": "提取或保存失败"
          },
          "reviewer": {
            "title": "发布审阅器",
            "detail": "浏览已保存的发布记录"
          },
          "jenkins": {
            "title": "符合条件的构建",
            "detail": "Jenkins 队列标识 → 构建标识"
          },
          "summary": {
            "title": "运行报告",
            "detail": "排队不等于完成；保留失败状态"
          }
        },
        "labels": {
          "retry": "重试",
          "failed": "失败",
          "read": "读取",
          "saveFailed": "保存失败"
        },
        "note": "保存失败会阻止任务提交。运行报告区分排队中、运行中和已完成的构建，避免把请求已接收误当成构建已完成。",
        "legend": {
          "flow": "处理与提交",
          "context": "重试或只读界面"
        }
      }
    },
    "resume": {
      "railDetail": "资料证据、内容核验、PDF 导出",
      "subtitle": "根据职位定制简历，并核对陈述依据",
      "purpose": "查找职位，根据个人资料中的事实定制简历，核对内容依据，再通过 Typst 导出 PDF。",
      "summary": "应用查找相关职位，从个人资料中挑选事实，再为每个岗位起草简历。规则会标记引用、技能和数值问题。申请状态更新、答案和附件由用户审核；Typst 导出 PDF 后，还会检查页面容量并审阅排版。",
      "steps": [
        {
          "title": "查找职位",
          "detail": "查找符合目标方向的相关岗位。"
        },
        {
          "title": "整理职位背景",
          "detail": "解析岗位、要求和职责。"
        },
        {
          "title": "核对资料证据",
          "detail": "检查引用、技能名称和数值依据。"
        },
        {
          "title": "定制简历",
          "detail": "根据职位和申请人的真实资料起草内容。"
        },
        {
          "title": "导出 PDF",
          "detail": "通过 Typst 排版，检查页面和实际布局。"
        }
      ],
      "architecture": {
        "title": "简历内容核验架构",
        "description": "简历陈述与来源证据在核验环节汇合。通过的内容进入 PDF 导出，被标记的内容交回申请人修改或审核。",
        "nodes": {
          "job": {
            "title": "职位描述",
            "detail": "岗位与要求"
          },
          "facts": {
            "title": "个人事实",
            "detail": "经历、技能与项目"
          },
          "tailor": {
            "title": "AI 简历定制",
            "detail": "职位背景与个人依据"
          },
          "evidence": {
            "title": "来源证据",
            "detail": "事实引用、技能与数值"
          },
          "draft": {
            "title": "简历草稿",
            "detail": "待核对的陈述"
          },
          "checks": {
            "title": "陈述核验",
            "detail": "引用、技能与数值"
          },
          "revise": {
            "title": "修改或审阅",
            "detail": "修改标记内容后再次核验"
          },
          "pdf": {
            "title": "Typst 简历",
            "detail": "陈述与页面容量"
          },
          "visual": {
            "title": "视觉排版审阅",
            "detail": "查看实际页面"
          }
        },
        "labels": {
          "pass": "通过",
          "flag": "标记"
        },
        "note": "规则通过不等于每句话都已证明真实。个人资料中的依据、核对过版本的申请答案和 PDF 排版审阅，分别处理申请中的不同问题。",
        "legend": {
          "flow": "起草、核验与导出",
          "context": "支持陈述的来源证据"
        }
      },
      "focus": "生成内容要能对应个人资料。",
      "integration": "规则核对陈述的来源、技能名称与数值依据。PDF 是否超页、实际排版是否清楚，则分别检查。"
    },
    "requirements": {
      "railDetail": "资料调研、独立评审与发布",
      "subtitle": "从来源调研到经过评审的工程成果",
      "purpose": "用于资料调研、需求起草、独立评审、验证及审核后发布的工程工作区。",
      "summary": "Requirement Buddy 将资料调研、需求起草、独立评审和验证分开处理。运行状态会保存，中断后可以继续。复用工作成果前，主程序检查来源版本；发布前，先校验审核后的批次，写入后再回读工程工具中的结果。",
      "steps": [
        {
          "title": "调研来源",
          "detail": "在授权范围内收集证据，保留引用和来源版本。"
        },
        {
          "title": "起草需求",
          "detail": "由分工明确的编写者使用来源资料包起草。"
        },
        {
          "title": "独立评审",
          "detail": "评审正文与本地渲染的图表。"
        },
        {
          "title": "检查资料是否有更新",
          "detail": "复用前核对来源、反馈和文件哈希。"
        },
        {
          "title": "发布审核后的批次",
          "detail": "校验版本与内容，再写入并核对结果。"
        }
      ],
      "architecture": {
        "title": "编写、评审与主程序的交接",
        "description": "调研者提供证据，编写者起草需求，另一位工作者评审正文与渲染后的图表，最后由主程序核验发布批次。",
        "nodes": {
          "packet": {
            "title": "来源资料包",
            "detail": "引用与来源版本"
          },
          "author": {
            "title": "起草需求",
            "detail": "工程文件与本地渲染图表"
          },
          "review": {
            "title": "独立评审",
            "detail": "正文与图表反馈"
          },
          "feedback": {
            "title": "修改任务",
            "detail": "反馈交还编写者"
          },
          "host": {
            "title": "核验发布批次",
            "detail": "资料新鲜度、哈希与目标版本"
          },
          "publish": {
            "title": "写入并核对",
            "detail": "工程工具结果"
          }
        },
        "labels": {
          "approve": "批准",
          "revise": "修改",
          "publish": "发布"
        },
        "lanes": [
          "调研",
          "编写",
          "评审",
          "主程序"
        ],
        "note": "保存的运行状态支持中断恢复。独立评审本身不代表验收通过；主程序还要核对资料新鲜度、批次授权和每次写入的结果。",
        "legend": {
          "flow": "工程文件交接",
          "context": "反馈返回编写者"
        }
      },
      "focus": "编写、评审和发布各有责任。",
      "integration": "工作者负责起草与评审内容。主程序保存运行状态、检查资料是否更新、授权实际发布批次，并通过回读结果核验写入。"
    },
    "enterprise": {
      "railDetail": "Jira、Polarion、Confluence 与 Teams",
      "subtitle": "连接企业工具的工程协作应用",
      "purpose": "通过 Python 集成和智能体工作流，连接 Jira、Polarion、Confluence、Teams、邮件与 Jenkins。",
      "summary": "带类型约束的 Python 客户端连接工程记录、报告与协作流程。批量读取在操作员设定的并发范围内运行，并保持输入顺序。Jira 搜索不完整时直接报错，中断的 Polarion 导出则可以重试。",
      "steps": [
        {
          "title": "收集工程数据",
          "detail": "通过带类型约束的客户端读取工程工具。"
        },
        {
          "title": "控制执行范围",
          "detail": "在操作员设定范围内调整并发，保持输入顺序。"
        },
        {
          "title": "协调工作流",
          "detail": "连接智能体、Teams、邮件和 Jenkins 请求。"
        },
        {
          "title": "生成工程成果",
          "detail": "形成报告、导出文件和拟执行的更新。"
        },
        {
          "title": "恢复未完成的工作",
          "detail": "拒绝不完整读取，重试中断的导出。"
        }
      ],
      "architecture": {
        "title": "集成层与执行层",
        "description": "Jira、Polarion 和 Confluence 共用类型化客户端层。有界批量执行同时支撑智能体工作流以及常规报告、导出任务。",
        "nodes": {
          "jira": {
            "title": "Jira 系统",
            "detail": "问题与活动"
          },
          "polarion": {
            "title": "Polarion 系统",
            "detail": "工作项与测试"
          },
          "confluence": {
            "title": "Confluence 系统",
            "detail": "页面与文档"
          },
          "clients": {
            "title": "Python 类型化客户端",
            "detail": "REST 与 SOAP 接口，共享测试结果图片处理"
          },
          "execution": {
            "title": "有界批量执行",
            "detail": "操作员限制、顺序保持与完整读取检查"
          },
          "agents": {
            "title": "智能体工作流",
            "detail": "报告、Teams、邮件与 Jenkins 请求"
          },
          "exports": {
            "title": "可恢复的导出",
            "detail": "Polarion PDF，连接中断与超时重试"
          }
        },
        "labels": {},
        "note": "Jira 搜索不完整时会停止批次。Polarion 导出会重试断开的连接和延后处理的超时任务。项目提供集成库与工作流，未声称具备已托管的应用界面。",
        "legend": {
          "flow": "数据与执行路径",
          "context": "共享客户端边界"
        }
      },
      "focus": "先把系统连接可靠，再接入智能体。",
      "integration": "智能体与常规报告、导出和恢复工具共用类型化客户端及有界批量执行，使用同一套工程记录。"
    },
    "food": {
      "railDetail": "购物小票、共享食材、餐食安排",
      "subtitle": "全家共享的食材与餐食助手",
      "purpose": "通过 Telegram 机器人和 Mini App 导入购物小票，共享食材清单、接收到期提醒并安排餐食。",
      "summary": "Pantry Manager 识别小票，将食材记入家庭共享库存，并提供餐食计划和到期提醒。记录受家庭权限和用量限制约束，后续批量修改需先确认。当前文本模型不能识别图片时，小票会交给支持图像处理的模型服务。",
      "steps": [
        {
          "title": "导入购物小票",
          "detail": "解析采购内容，按商店整理记录。"
        },
        {
          "title": "核对修改",
          "detail": "确认批量更新后，再修改食材记录。"
        },
        {
          "title": "共享食材清单",
          "detail": "沿用家庭权限和用量限制。"
        },
        {
          "title": "安排餐食",
          "detail": "结合库存和使用中积累的饮食偏好。"
        },
        {
          "title": "接收到期提醒",
          "detail": "通过家庭工作流跟进食材到期情况。"
        }
      ],
      "architecture": {
        "title": "小票导入与批量修改",
        "description": "小票导入与后续批量修改是两次独立交互。助手先保存符合条件的小票食材；用户之后请求批量修改状态时，再询问确认。",
        "nodes": {
          "member": {
            "title": "家庭成员",
            "detail": "聊天与 Mini App"
          },
          "assistant": {
            "title": "智能助手",
            "detail": "图像识别与指令处理"
          },
          "pantry": {
            "title": "共享食材",
            "detail": "SQLModel 数据记录"
          }
        },
        "labels": {
          "receipt": "提交小票",
          "save": "食材入库",
          "receiptResult": "返回结果，可撤销",
          "batch": "请求批量修改",
          "proposal": "核对批量修改",
          "confirm": "确认",
          "write": "应用修改",
          "response": "返回结果",
          "receiptSection": "导入小票",
          "batchSection": "后续批量修改",
          "controls": "家庭权限、用量限制与批量确认"
        },
        "note": "小票导入后可撤销，批量修改则需确认。家庭库存和偏好也用于安排餐食与提醒。Telegram 提供在线入口；Slack 和 WhatsApp 需要自托管部署。",
        "legend": {
          "flow": "请求与操作",
          "context": "返回与持久化状态"
        }
      },
      "focus": "共享库存，按家庭范围管理。",
      "integration": "小票识别后，符合条件的食材直接入库。批量修改食材状态另行确认；餐食计划和提醒继续使用同一份家庭库存与偏好。"
    }
  }
};
