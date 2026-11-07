export const featuredProjectIds = ["resume", "food", "enterprise", "requirements"] as const;
export type CaseStudyId = typeof featuredProjectIds[number];
export type ArchitectureCopy = {
  title: string; description: string;
  inputs: readonly { title: string; detail: string }[];
  processor: { title: string; detail: string };
  evidence: { title: string; items: readonly string[] };
  candidate: { title: string; detail: string };
  checks: { title: string; items: readonly string[] };
  pass: string; accept: string; fail: string; revise: string;
  output: { title: string; detail: string };
};
export type CaseStudyCopy = {
  railDetail: string; subtitle: string; purpose: string; summary: string;
  steps: readonly { title: string; detail: string }[];
  architecture: ArchitectureCopy;
};
type CasebookConfig = {
  introduction: string;
  labels: Record<"projects" | "selectProject" | "allProjects" | "summary" | "workflow" | "technologies" | "source" | "open" | "resume" | "contact" | "private" | "architecture" | "approach", string>;
  projects: Record<CaseStudyId, CaseStudyCopy>;
};

export const casebookConfig: CasebookConfig = {
  "introduction": "I build Python and TypeScript applications for agent workflows, hybrid retrieval, and engineering automation.",
  "labels": {
    "projects": "Projects",
    "selectProject": "Choose a project",
    "allProjects": "All engineering work",
    "summary": "What It Does",
    "workflow": "Workflow",
    "technologies": "Technologies",
    "source": "Source",
    "open": "Open App",
    "resume": "Résumé",
    "contact": "Contact",
    "private": "Private repository",
    "architecture": "Project workflow",
    "approach": "Engineering Approach"
  },
  "projects": {
    "resume": {
      "railDetail": "Profile evidence, claim checks, PDF export",
      "subtitle": "Job-to-Résumé Tailoring with Claim Checks",
      "purpose": "Finds jobs and tailors résumés against profile facts, with claim checks and Typst PDF export.",
      "summary": "An end-to-end system that (1) finds relevant job opportunities, (2) selects profile facts, (3) tailors a résumé to each job, and (4) exports a PDF via Typst. Built-in claim checks flag citation, skill, and numeric issues for review.",
      "steps": [
        {
          "title": "Find Jobs",
          "detail": "Find relevant openings for target roles."
        },
        {
          "title": "Build Job Context",
          "detail": "Parse the role, requirements, and responsibilities."
        },
        {
          "title": "Check Profile Evidence",
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
        "title": "Claim-Check Architecture",
        "description": "A logical view of how profile evidence, tailored claims, and review connect. Checks flag unsupported claims; factual support and visual layout are reviewed separately.",
        "inputs": [
          {
            "title": "Job Description",
            "detail": "role, requirements"
          },
          {
            "title": "Profile Facts",
            "detail": "experience, skills, projects"
          }
        ],
        "processor": {
          "title": "Tailoring",
          "detail": "job context + profile evidence"
        },
        "evidence": {
          "title": "Source Evidence",
          "items": [
            "Fact citations",
            "Skills and numbers",
            "Answer revisions"
          ]
        },
        "candidate": {
          "title": "Draft Claims",
          "detail": "statements in the résumé"
        },
        "checks": {
          "title": "Evidence Checks",
          "items": [
            "Citation provenance",
            "Canonical skills",
            "Numeric support"
          ]
        },
        "pass": "Pass",
        "accept": "Keep the claim",
        "fail": "Flag",
        "revise": "Revise / review",
        "output": {
          "title": "Reviewed Résumé",
          "detail": "Typst PDF · page-fit and visual review"
        }
      }
    },
    "food": {
      "railDetail": "Receipts, shared pantry, meal planning",
      "subtitle": "A Shared Pantry and Meal-Planning Assistant",
      "purpose": "A Telegram bot and Mini App for receipt imports, shared household inventories, expiry reminders, and meal planning.",
      "summary": "Pantry Manager connects receipt parsing to a household’s shared food inventory. Confirmed batch actions, quotas, and household permissions govern changes. A vision-capable provider handles receipts when the selected text model cannot process images.",
      "steps": [
        {
          "title": "Import a Receipt",
          "detail": "Parse purchases and group them by store."
        },
        {
          "title": "Review Changes",
          "detail": "Confirm batch updates before changing pantry records."
        },
        {
          "title": "Share the Pantry",
          "detail": "Apply the household’s shared permissions and quotas."
        },
        {
          "title": "Plan Meals",
          "detail": "Use inventory and learned food preferences."
        },
        {
          "title": "Follow Reminders",
          "detail": "Receive expiry reminders through the household workflow."
        }
      ],
      "architecture": {
        "title": "Household Workflow",
        "description": "Receipt parsing and proposed changes feed shared pantry records through household controls.",
        "inputs": [
          {
            "title": "Receipt Images",
            "detail": "purchases and store"
          },
          {
            "title": "Household Context",
            "detail": "inventory and preferences"
          }
        ],
        "processor": {
          "title": "Receipt Parsing",
          "detail": "vision-capable model routing"
        },
        "evidence": {
          "title": "Pantry Records",
          "items": [
            "Shared household inventory",
            "Food preferences",
            "Expiry dates"
          ]
        },
        "candidate": {
          "title": "Proposed Changes",
          "detail": "receipt and batch updates"
        },
        "checks": {
          "title": "Household Controls",
          "items": [
            "Shared permissions",
            "Usage quotas",
            "Batch confirmation"
          ]
        },
        "pass": "Confirm",
        "accept": "Update pantry",
        "fail": "Review",
        "revise": "Revise / cancel",
        "output": {
          "title": "Meals & Reminders",
          "detail": "Telegram bot and Mini App"
        }
      }
    },
    "enterprise": {
      "railDetail": "Jira, Polarion, Confluence, Teams",
      "subtitle": "Engineering Cooperation Across Enterprise Tools",
      "purpose": "Python integrations and agent workflows connect Jira, Polarion, Confluence, Teams, email, and Jenkins.",
      "summary": "The Jira–Polarion Automation application brings engineering records, reporting, and coordinated workflows together through typed Python clients. Bulk reads use bounded concurrency and preserve input order. Incomplete Jira searches are rejected; interrupted Polarion exports can be retried.",
      "steps": [
        {
          "title": "Collect Engineering Data",
          "detail": "Read Jira, Polarion, and Confluence through typed clients."
        },
        {
          "title": "Bound the Work",
          "detail": "Adjust concurrency within operator limits and preserve order."
        },
        {
          "title": "Coordinate Workflows",
          "detail": "Connect agents, Teams, email, and Jenkins requests."
        },
        {
          "title": "Produce Artifacts",
          "detail": "Build engineering reports, exports, and proposed updates."
        },
        {
          "title": "Recover Incomplete Work",
          "detail": "Reject incomplete reads and retry interrupted exports."
        }
      ],
      "architecture": {
        "title": "Engineering Integration Architecture",
        "description": "A logical view of the shared clients and execution controls around coordinated engineering work.",
        "inputs": [
          {
            "title": "Jira Records",
            "detail": "issues and activity"
          },
          {
            "title": "Polarion & Confluence",
            "detail": "work items and documents"
          }
        ],
        "processor": {
          "title": "Typed Python Clients",
          "detail": "shared integration interfaces"
        },
        "evidence": {
          "title": "Connected Workflows",
          "items": [
            "Teams and email",
            "Jenkins requests",
            "Engineering reports"
          ]
        },
        "candidate": {
          "title": "Batch Operations",
          "detail": "retrieval, reporting, exports"
        },
        "checks": {
          "title": "Execution Controls",
          "items": [
            "Bounded concurrency",
            "Preserved input order",
            "Incomplete-read checks"
          ]
        },
        "pass": "Complete",
        "accept": "Use results",
        "fail": "Partial",
        "revise": "Retry / reconcile",
        "output": {
          "title": "Engineering Artifacts",
          "detail": "reports, exports, coordinated workflows"
        }
      }
    },
    "requirements": {
      "railDetail": "Research, independent review, publication",
      "subtitle": "From Source Research to Reviewed Engineering Artifacts",
      "purpose": "An engineering workspace for source research, requirements drafting, independent review, verification, and reviewed publication.",
      "summary": "Requirement Buddy separates research, authoring, review, and verification into explicit stages. Persisted runs resume after interruption. Source freshness checks protect reuse, while reviewed publication batches validate revisions and payloads and read back engineering-tool writes.",
      "steps": [
        {
          "title": "Research Sources",
          "detail": "Collect authorized evidence with citations and source revisions."
        },
        {
          "title": "Draft Requirements",
          "detail": "Use assigned authoring workers and source packets."
        },
        {
          "title": "Review Independently",
          "detail": "Review the content and locally rendered diagrams."
        },
        {
          "title": "Check Freshness",
          "detail": "Recheck sources, feedback, and artifact hashes before reuse."
        },
        {
          "title": "Publish a Reviewed Batch",
          "detail": "Validate revisions and payloads, then read back writes."
        }
      ],
      "architecture": {
        "title": "Reviewed Publication Workflow",
        "description": "Source packets move through authoring and independent review before a revision-checked publication batch.",
        "inputs": [
          {
            "title": "Source Documents",
            "detail": "authorized evidence"
          },
          {
            "title": "Engineering Brief",
            "detail": "scope and requirements"
          }
        ],
        "processor": {
          "title": "Authoring Workers",
          "detail": "research and requirements"
        },
        "evidence": {
          "title": "Evidence Packet",
          "items": [
            "Citations and source versions",
            "Feedback and artifact hashes",
            "Authorized source scope"
          ]
        },
        "candidate": {
          "title": "Draft Artifacts",
          "detail": "requirements and diagrams"
        },
        "checks": {
          "title": "Independent Review",
          "items": [
            "Content and diagram checks",
            "Source freshness",
            "Publication batch validation"
          ]
        },
        "pass": "Approve",
        "accept": "Publish batch",
        "fail": "Revise",
        "revise": "Review again",
        "output": {
          "title": "Verified Publication",
          "detail": "Jira · Polarion · Confluence"
        }
      }
    }
  }
};

export const casebookChinese: CasebookConfig = {
  "introduction": "我使用 Python 和 TypeScript 开发智能体工作流、混合检索和工程自动化应用。",
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
    "approach": "工程方法"
  },
  "projects": {
    "resume": {
      "railDetail": "资料证据、内容核验、PDF 导出",
      "subtitle": "根据职位定制简历，并核对陈述依据",
      "purpose": "查找职位，根据个人资料中的事实定制简历，核对内容依据，再通过 Typst 导出 PDF。",
      "summary": "一个以真实经历为依据的求职工作区。定制简历中的陈述来自个人资料；固定规则检查来源、技能和数值。申请状态更新、答案和附件由用户审阅，Typst 负责 PDF 导出和页面超限检查。",
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
        "description": "这张逻辑图展示资料证据、定制陈述与审阅的关系。事实依据与排版效果分别核对。",
        "inputs": [
          {
            "title": "职位描述",
            "detail": "岗位与要求"
          },
          {
            "title": "个人事实",
            "detail": "经历、技能与项目"
          }
        ],
        "processor": {
          "title": "简历定制流程",
          "detail": "职位背景与个人依据"
        },
        "evidence": {
          "title": "来源证据",
          "items": [
            "事实引用",
            "技能与数值依据",
            "经过版本核对的答案"
          ]
        },
        "candidate": {
          "title": "简历草稿",
          "detail": "待核对的陈述"
        },
        "checks": {
          "title": "按证据核验",
          "items": [
            "引用来源",
            "规范技能名称",
            "数值依据"
          ]
        },
        "pass": "通过",
        "accept": "保留陈述",
        "fail": "标记",
        "revise": "修改或审阅",
        "output": {
          "title": "审阅后的简历",
          "detail": "Typst PDF · 页面检查与排版审阅"
        }
      }
    },
    "food": {
      "railDetail": "购物小票、共享食材、餐食安排",
      "subtitle": "全家共享的食材与餐食助手",
      "purpose": "通过 Telegram 机器人和 Mini App 导入购物小票，共享食材清单、接收到期提醒并安排餐食。",
      "summary": "Pantry Manager 将小票解析与家庭食材清单连接起来。批量修改需确认，并受家庭权限和用量限制约束；当前文本模型不能处理图片时，小票会交给支持图像识别的模型服务。",
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
        "title": "家庭食材工作流",
        "description": "小票解析与修改建议经过家庭权限、用量限制和操作确认，再更新共享食材记录。",
        "inputs": [
          {
            "title": "购物小票",
            "detail": "采购内容与商店"
          },
          {
            "title": "家庭背景",
            "detail": "库存与饮食偏好"
          }
        ],
        "processor": {
          "title": "小票解析",
          "detail": "按图像处理能力选择模型"
        },
        "evidence": {
          "title": "食材记录",
          "items": [
            "家庭共享库存",
            "饮食偏好",
            "到期日期"
          ]
        },
        "candidate": {
          "title": "待确认的修改",
          "detail": "小票与批量更新"
        },
        "checks": {
          "title": "家庭操作控制",
          "items": [
            "共享权限",
            "用量限制",
            "批量操作确认"
          ]
        },
        "pass": "确认",
        "accept": "更新清单",
        "fail": "核对",
        "revise": "修改或取消",
        "output": {
          "title": "餐食与提醒",
          "detail": "Telegram 机器人与 Mini App"
        }
      }
    },
    "enterprise": {
      "railDetail": "Jira、Polarion、Confluence 与 Teams",
      "subtitle": "连接企业工具的工程协作应用",
      "purpose": "通过 Python 集成和智能体工作流，连接 Jira、Polarion、Confluence、Teams、邮件与 Jenkins。",
      "summary": "Jira–Polarion 自动化应用通过带类型约束的 Python 客户端，将工程记录、报告和协作流程连接起来。批量读取在操作员设定范围内调整并发量，保持输入顺序；不完整的 Jira 查询会被拒绝，中断的 Polarion 导出可重试。",
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
        "title": "工程集成架构",
        "description": "这张逻辑图展示共享客户端，以及工程协作流程中的执行控制。",
        "inputs": [
          {
            "title": "Jira 记录",
            "detail": "问题与活动"
          },
          {
            "title": "Polarion 与 Confluence",
            "detail": "工作项与文档"
          }
        ],
        "processor": {
          "title": "Python 类型化客户端",
          "detail": "共享集成接口"
        },
        "evidence": {
          "title": "关联工作流",
          "items": [
            "Teams 与邮件",
            "Jenkins 请求",
            "工程报告"
          ]
        },
        "candidate": {
          "title": "批量操作",
          "detail": "检索、报告与导出"
        },
        "checks": {
          "title": "执行控制",
          "items": [
            "并发量有边界",
            "保持输入顺序",
            "检查读取是否完整"
          ]
        },
        "pass": "完成",
        "accept": "使用结果",
        "fail": "未完成",
        "revise": "重试或核对",
        "output": {
          "title": "工程成果",
          "detail": "报告、导出与协作流程"
        }
      }
    },
    "requirements": {
      "railDetail": "资料调研、独立评审与发布",
      "subtitle": "从来源调研到经过评审的工程成果",
      "purpose": "用于资料调研、需求起草、独立评审、验证及审核后发布的工程工作区。",
      "summary": "Requirement Buddy 将调研、起草、评审和验证分成明确阶段。运行状态持久保存，中断后可以继续；复用资料前检查新鲜度。审核后的发布批次会校验版本和内容，并回读工程工具中的写入结果。",
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
          "title": "检查资料新鲜度",
          "detail": "复用前核对来源、反馈和文件哈希。"
        },
        {
          "title": "发布审核后的批次",
          "detail": "校验版本与内容，再写入并回读结果。"
        }
      ],
      "architecture": {
        "title": "审核后的发布流程",
        "description": "来源资料经过起草和独立评审，再进入带版本核对的发布批次。",
        "inputs": [
          {
            "title": "来源文档",
            "detail": "授权范围内的证据"
          },
          {
            "title": "工程任务",
            "detail": "范围与需求"
          }
        ],
        "processor": {
          "title": "编写者",
          "detail": "调研与需求起草"
        },
        "evidence": {
          "title": "证据资料包",
          "items": [
            "引用与来源版本",
            "反馈与文件哈希",
            "授权来源范围"
          ]
        },
        "candidate": {
          "title": "成果草稿",
          "detail": "需求与图表"
        },
        "checks": {
          "title": "独立评审",
          "items": [
            "正文与图表检查",
            "来源新鲜度",
            "发布批次校验"
          ]
        },
        "pass": "批准",
        "accept": "发布批次",
        "fail": "修改",
        "revise": "重新评审",
        "output": {
          "title": "已核对的发布结果",
          "detail": "Jira · Polarion · Confluence"
        }
      }
    }
  }
};
