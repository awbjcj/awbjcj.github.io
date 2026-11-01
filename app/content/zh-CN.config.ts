import { english, type ContentCatalog } from "./catalog";
import { projects } from "./projects.config";
import type { ProjectConfig } from "./types";

// Proper names, publication titles, URLs, and technology names retain their source spelling.
export const chinese: ContentCatalog = {
  enhancements: {
    menu: {
      open: "快速导航", title: "找到你感兴趣的内容", search: "搜索栏目、项目或技术名称…",
      empty: "没有找到匹配内容，试试项目或技术名称。", sections: "跳转到栏目",
      projects: "浏览项目", links: "联系我", close: "关闭导航",
      hint: "↑ ↓ 选择 · Enter 确认 · Esc 关闭",
    },
    signal: { label: "从模型到系统", nodes: ["模型", "智能体", "工具", "数据"] },
  },
  siteConfig: {
    profile: {
      ...english.siteConfig.profile,
      brandSubtitle: "AI 全栈工程师",
      title: "AI 全栈工程师",
      location: "美国密歇根州安娜堡",
      summary: "我用 Python 和 TypeScript 开发 AI 应用，主要做智能体工作流、混合检索和工程自动化。从带类型约束的 API、模型调用到人工审核和用户界面，我关注的是如何让这些环节协同工作。",
      availability: "正在寻找 AI 全栈、平台开发或产品工程岗位",
    },
    contact: { ...english.siteConfig.contact, resumeFile: "/resume-zh.pdf", responseNote: "如果你正在招聘 AI 应用、智能体平台或全栈开发工程师，欢迎联系我。也欢迎交流相关项目。" },
    accessibility: {
      skipToContent: "跳转到正文", primaryNavigation: "主导航", backToTop: "返回顶部",
      githubLabel: "GitHub", engineeringOverview: "工程方向概览", coreSpecialties: "核心技术方向",
      newTab: "在新标签页中打开", link: "链接", technologies: "技术栈",
      placeholder: "内容尚未填写", placeholderTitle: "请在配置文件中填写此内容",
    },
    preferences: { label: "显示设置", language: "语言", light: "切换到浅色模式", dark: "切换到深色模式", theme: "深色模式" },
    navigation: [
      { label: "应用", href: "#live" }, { label: "项目", href: "#work" },
      { label: "工程经验", href: "#experience" }, { label: "履历", href: "#resume" },
      { label: "技术栈", href: "#toolkit" }, { label: "联系", href: "#contact" },
    ],
    hero: {
      titleLead: "AI 应用开发，", titleEmphasis: "从系统到产品。", primaryAction: "体验应用", githubAction: "GitHub 主页",
      specialties: ["智能体系统", "混合检索 RAG", "MCP 与工具集成", "AI 全栈开发", "企业自动化"],
      panel: {
        title: "system.profile", status: "工程方向",
        rows: [
          { label: "编排", description: "主智能体、子智能体、工具与持久化记忆" },
          { label: "检索", description: "面向企业数据的混合检索" },
          { label: "权限与控制", description: "身份认证、用量预算与操作审批" },
        ],
        pipeline: ["模型", "智能体", "工具"], footer: "Python / TypeScript / AI 应用工程",
      },
    },
    sections: {
      live: { label: "应用", statusLabel: "在线应用", title: "试试我做的应用", description: "一个帮你准备简历、跟进求职申请，一个帮家里管理食材、安排饮食。点击下方入口即可访问。" },
      projects: { label: "精选项目", countNoun: "个项目", title: "项目与开源贡献", description: "这里有我开发的应用、开发者工具和企业系统。每个项目都注明了是原创开发，还是基于开源项目的扩展。", linkLabel: "源码", privateNote: "私有仓库" },
      experience: { label: "工程经验", countNoun: "个方向", title: "我负责的系统与工作", description: "我的工作包括智能体编排和模型集成，也包括权限与审核机制：软件代用户执行操作时，哪些步骤需要确认，哪些行为需要约束。", evidenceLabel: "查看相关项目" },
      resume: { label: "履历", title: "工作与学习经历", description: "工作经历、教育背景与发表的论文。", downloadLabel: "下载简历（中文 PDF）", experienceLabel: "工作经历", educationLabel: "教育背景", publicationsLabel: "论文", locationLabel: "所在地", focusLabel: "专业方向", statusLabel: "求职状态" },
      approach: { label: "工程方法", title: "让系统的行为清楚可控", description: "设计模型调用时，我会先明确几件事：哪些数据可以传入，系统有权执行哪些操作，以及用户如何审核结果。" },
      toolkit: { label: "技术栈", title: "我常用的工具与技术" },
      contact: { label: "联系", title: "聊聊岗位或项目", actionLabel: "给我发邮件", emailLabel: "邮箱", linkedinLabel: "LinkedIn", linkedinPlaceholder: "填写 LinkedIn 链接", githubLabel: "GitHub", resumeLabel: "简历", resumeActionLabel: "中文 PDF" },
    },
    footer: { note: "Python、TypeScript 与 AI 应用工程。", backToTopLabel: "返回顶部" },
  },
  liveProducts: [
    {
      name: "Resume Tailor Harness", tagline: "基于真实经历，准备求职申请",
      description: "查找职位，根据你的个人资料核对定制简历中的内容，并在各自独立的工作区中跟进申请。",
      facts: ["按固定规则核对资料来源、技能名称和数值", "导出简历与求职信 PDF", "通过 Gmail 跟进申请，支持同步故障恢复"],
      href: english.liveProducts[0].href, actionLabel: "打开应用",
      trial: { action: english.liveProducts[0].trial!.action, heading: "注册试用账号", note: "点击后会在新标签页打开注册页面，自动填入姓名和邮箱。密码在注册页面设置。", nameField: "姓名", namePlaceholder: "你的姓名", emailField: "邮箱地址", emailPlaceholder: "you@example.com", submitLabel: "创建试用账号" },
    },
    {
      name: "Food Manager", tagline: "一起管食材，安排每天吃什么",
      description: "用 Telegram 机器人和 Mini App 导入购物小票，全家共享食材清单，还能接收到期提醒、安排餐食。",
      facts: ["拍下购物小票，生成食材记录", "Mini App 支持用量限制与操作确认", "支持英语、中文、法语和西班牙语"],
      href: english.liveProducts[1].href, actionLabel: "在 Telegram 中打开",
    },
  ],
  projects: projects.map((entry) => {
    const project: ProjectConfig = entry;
    const copy: Record<(typeof projects)[number]["id"], { kind: string; signal: string; description: string }> = {
      resume: { kind: "全栈应用", signal: "证据核验 · PDF 排版审阅", description: "查找职位，并根据个人资料中的证据定制简历。Gmail、Outlook 和 IMAP 邮件分析会提出申请状态更新，供用户审核。外部智能体可检查答案版本、校验附件后准备申请。Typst 导出支持有来源依据的扩展栏目，也会检查页面是否超限，并提供排版预览供审阅。" },
      food: { kind: "家庭助手与 Mini App", signal: "共享食材 · Telegram、Slack 与 WhatsApp", description: "通过 Telegram 机器人和多语言 Mini App 扫描小票、共享食材清单、接收到期提醒并安排餐食。采购记录可按商店分组，批量修改需先确认，饮食偏好会根据使用记录更新。自托管部署还可连接 Slack 和 WhatsApp，沿用同一套家庭权限。" },
      video: { kind: "本地视频工具", signal: "保存审核计划 · 文件隔离", description: "用 FFmpeg 和缓存指纹找出重复视频及相同片段。在浏览器中查看匹配结果，重新打开已保存的审核计划，并跟进扫描和移除进度。同一文件在不同片段组中的选择会同步更新。确认移除后，程序先检查保留视频能否覆盖其内容，再把文件移入隔离目录。" },
      console: { kind: "开源前端定制", signal: "任务调度 · 来源预览", description: "基于 LangChain 控制台定制，加入身份认证、用量预算和定时任务。聊天可从当前检查点继续，每项审批都对应最初触发它的暂停请求。支持文件引用、消息排队，以及生成文件、LLM Wiki 搜索结果、页面元数据和来源图片的预览。" },
      vsda: { kind: "企业智能体平台", signal: "定时任务 · 企业资料检索", description: "LangGraph 主智能体在统一权限和预算约束下调用企业工具、混合检索，并在隔离环境中分析代码。用户可以设置自己的定时任务，也可以启用 Teams 入口。写入经审核后还需复核目标；SharePoint 文件下载和带版本记录的私有技能保留来源上下文。" },
      requirements: { kind: "需求工程工作流", signal: "版本核对 · ALM 写入验证", description: "Requirement Buddy 是一个工程工作台，用于资料调研、需求起草、独立评审和验证。SDK 工作流可在中断后恢复，复用资料前会检查来源版本。Jira、Confluence 和 Polarion 分别通过独立的 MCP 服务处理审核后的批量发布，并回读测试执行的写入结果，确认是否成功。" },
      release: { kind: "工程自动化", signal: "提取失败可重试 · 构建状态可追溯", description: "从发布邮件中提取带类型约束的记录，生成 Jenkins 构建请求；提取失败的邮件会保留，供后续重试。容器化审核界面在本地提供浏览器依赖，默认要求远程 Graph 令牌更新使用 HTTPS。运行摘要会列出故障，并区分已入队的请求与已完成的构建。" },
      enterprise: { kind: "集成库与智能体", signal: "并发量可控 · 导出失败可重试", description: "Python 客户端和工作流通过带类型约束的接口连接 Jira、Polarion、Confluence、Teams 与邮件。批量检索会在操作员设定范围内调整并发量，保持输入顺序，并拒绝不完整的 Jira 搜索结果。Polarion 导出会重试断开的连接和延后处理的超时任务；SOAP 与 REST 客户端共用测试结果图片处理逻辑。" },
      wiki: { kind: "Confluence 内容编写流程", signal: "独立评审 · 审批回执", description: "Copilot 或 Codex 负责资料调研、页面起草，以及正文和本地渲染图表的独立评审。Python 运行层校验各阶段交接的文件，生成 Confluence XML，并检查页面版本。发布必须对应已批准的内容摘要；还可启用人工审核，预览页面并保存审批回执。" },
    };
    return { ...project, ...copy[entry.id], repo: project.repo && { ...project.repo, label: "源码" }, live: project.live && { ...project.live, label: project.id === "food" ? "在 Telegram 中打开" : "打开应用" }, skills: project.skills.map((skill) => ({ "LLM routing": "LLM 路由", "Validation": "校验", "Hybrid RAG": "混合检索 RAG" }[skill] ?? skill)) };
  }),
  experience: [
    { label: "智能体平台开发", title: "修改企业系统内容前，先让人审核", description: "聊天、用户自己的定时任务和可选的 Teams 入口都使用同一套权限与预算。向 Jira、Confluence 和 Polarion 写入内容前，需经管理员审核、重新核对目标，并持久保存变更登记。" },
    { label: "多家模型服务集成", title: "按任务需要，选择合适的模型", description: "Food Manager 接入了 Anthropic、OpenAI、Gemini 和 DeepSeek。如果当前文本模型无法处理图片，小票解析会改用支持图像识别的模型服务。", link: "https://github.com/awbjcj/food-manager" },
    { label: "AI 输出核验", title: "简历里的每项陈述，都要有依据", description: "简历核验会检查资料引用、技能名称和数值证据，也覆盖扩展栏目。排版单独审阅：Typst 检查页面是否超限，评审者查看实际渲染的页面。每份生成文件都会记录所用流程经过校验的技能标识。", link: "https://github.com/awbjcj/resume-tailor-harness" },
    { label: "实时交互界面", title: "从最新检查点接着运行", description: "定制的 LangGraph 控制台实时显示模型输出和状态，可从当前检查点继续。每项审批都对应最初触发它的暂停请求。用户可以在聊天中管理定时任务、引用文件和预览来源图片，跟进后台工作并查看依据。", link: "https://github.com/awbjcj/deep-agents-ui" },
    { label: "技术团队协调", title: "统筹九个 ADAS 项目、430 余项问题的分析与分派", description: "亲自分析并分派了 267 项问题，统筹九个 ADAS 项目中超过 430 项问题的处理，并协调算法、集成、测试和数据挖掘团队。" },
  ],
  resume: {
    roles: [
      { company: "Aptiv Corporation（安波福）", role: "整车系统问题分析工程师 / VSDA 团队技术负责人", period: "2023 年 2 月至今", location: "美国密歇根州特洛伊", highlights: ["部署三个基于 Python 的 AI/LLM 智能体，处理发布邮件、生成报告，并辅助 Jira 问题分析与分派。", "自动化生成 1,000 余项 Jira 用户故事，并通过 Jenkins 生成接近实时更新的报告。", "负责九个 ADAS 项目的问题分析与分派，亲自处理 267 项、统筹 430 余项；两次获得最高等级绩效评价。"] },
      { company: "密歇根大学工程学院", role: "系统工程课程研究生助教（ISD 521）", period: "2022 年 8 月至 12 月", location: "美国密歇根州安娜堡", highlights: ["共同指导 13 个团队、51 名学生完成基于模型的系统工程（MBSE）项目，从梳理利益相关方需求到建立验证模型。"] },
      { company: "Varian Medical Systems（西门子医疗旗下）", role: "系统工程实习生", period: "2022 年 6 月至 9 月", location: "美国加利福尼亚州帕洛阿尔托", highlights: ["用 MATLAB 开发测试计划和束流数据处理工具，用于放疗系统验证。"] },
      { company: "Contemporary Intelligent Manufacturing Co. Ltd.", role: "机械工程实习生", period: "2021 年 5 月至 8 月", location: "中国宁德", highlights: ["部署非接触式测厚系统，满足 10,000 美元成本上限和 0.2 微米测量目标。"] },
      { company: "上海智驾汽车科技有限公司（MAXIEYE）", role: "系统工程实习生", period: "2020 年 3 月至 6 月", location: "中国上海", highlights: ["编写 L2 碰撞预警需求与验证计划，并开发 MATLAB CAN 信号工具。"] },
    ],
    education: [
      { school: "密歇根大学安娜堡分校", credential: "工程硕士 / 系统工程与设计", period: "2022 年 12 月", detail: "汽车工程方向 · GPA 3.9" },
      { school: "上海交通大学", credential: "理学学士 / 机械工程", period: "2021 年 8 月", detail: "GPA 3.6" },
    ],
    publications: english.resume.publications,
  },
  focusAreas: [
    { title: "AI 生成的内容要有依据", description: "用类型约束和事实校验核对生成结果。" },
    { title: "关键操作由人把关", description: "设置角色权限、操作审批和用量预算，并保留审计记录。" },
    { title: "从后端到前端，都参与实现", description: "涵盖检索、智能体和 API，也包括用户界面与交付。" },
  ],
  skillGroups: [
    { label: "智能体系统", skills: ["LangGraph", "LangChain", "Deep Agents", "Agno", "MCP", "GitHub Copilot SDK", "工具调用", "LLM 评估", "人工审核"] },
    { label: "AI 全栈", skills: english.skillGroups[1].skills },
    { label: "检索与数据", skills: ["RAG", "OpenSearch", "混合检索", "BM25", "嵌入模型", "向量检索", "SQLite", "MinIO / S3"] },
    { label: "模型与路由", skills: ["OpenAI", "Anthropic Claude", "Google Gemini", "DeepSeek", "多模型服务路由"] },
    { label: "平台与交付", skills: english.skillGroups[4].skills },
  ],
};
