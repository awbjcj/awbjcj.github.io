import { english, type ContentCatalog } from "./catalog";
import { projects } from "./projects.config";
import type { ProjectConfig } from "./types";

// Proper names, publication titles, URLs, and technology names retain their source spelling.
export const chinese: ContentCatalog = {
  siteConfig: {
    profile: {
      ...english.siteConfig.profile,
      brandSubtitle: "AI 全栈工程师",
      title: "AI 全栈工程师",
      location: "美国密歇根州安娜堡",
      summary: "我使用 Python 和 TypeScript 开发智能体工作流、混合检索和工程自动化应用，将模型能力与类型明确的 API、人工审核机制及用户界面结合起来。",
      availability: "寻求 AI 全栈、平台及产品工程岗位",
    },
    contact: { ...english.siteConfig.contact, responseNote: "欢迎联系我，交流 AI 应用开发、智能体平台或全栈产品工程方面的机会。" },
    accessibility: {
      skipToContent: "跳至主要内容", primaryNavigation: "主导航", backToTop: "返回顶部",
      githubLabel: "GitHub", engineeringOverview: "工程方向概览", coreSpecialties: "核心技术方向",
      newTab: "在新标签页中打开", link: "链接", technologies: "技术栈",
      placeholder: "内容尚未填写", placeholderTitle: "请在配置文件中填写此内容",
    },
    preferences: { label: "显示偏好", language: "语言", light: "切换至日间模式", dark: "切换至夜间模式", theme: "夜间模式" },
    navigation: [
      { label: "应用", href: "#live" }, { label: "项目", href: "#work" },
      { label: "工程经验", href: "#experience" }, { label: "履历", href: "#resume" },
      { label: "技术栈", href: "#toolkit" }, { label: "联系", href: "#contact" },
    ],
    hero: {
      titleLead: "AI 应用开发，", titleEmphasis: "从系统到产品。", primaryAction: "探索应用", githubAction: "GitHub 主页",
      specialties: ["智能体系统", "混合检索 RAG", "MCP 与工具集成", "AI 全栈开发", "企业自动化"],
      panel: {
        title: "system.profile", status: "工程方向",
        rows: [
          { label: "编排", description: "监督智能体、子智能体、工具与持久化记忆" },
          { label: "检索", description: "面向企业数据的混合检索" },
          { label: "治理", description: "身份认证、用量预算与审批" },
        ],
        pipeline: ["模型", "智能体", "工具"], footer: "Python / TypeScript / AI 应用工程",
      },
    },
    sections: {
      live: { label: "应用", statusLabel: "托管应用", title: "体验产品。", description: "简历申请工具与家庭食材助手，可通过下方入口访问。" },
      projects: { label: "精选项目", countNoun: "个项目", title: "工程项目与开源贡献。", description: "涵盖应用、开发工具和企业系统，并注明开源贡献与原创项目的区别。", linkLabel: "源码", privateNote: "私有仓库" },
      experience: { label: "工程经验", countNoun: "个方向", title: "系统设计与工程职责。", description: "围绕智能体编排、模型集成，以及代表用户执行操作的软件控制机制展开。", evidenceLabel: "查看相关项目" },
      resume: { label: "履历", title: "职业经历。", description: "工作经历、教育背景与论文。", downloadLabel: "下载简历（英文 PDF）", experienceLabel: "工作经历", educationLabel: "教育背景", publicationsLabel: "论文", locationLabel: "所在地", focusLabel: "方向", statusLabel: "求职状态" },
      approach: { label: "工程方法", title: "让系统行为明确可控。", description: "我关注模型调用的边界：哪些数据可以进入，哪些操作可以执行，以及用户如何审核结果。" },
      toolkit: { label: "技术栈", title: "常用工具与技术。" },
      contact: { label: "联系", title: "交流岗位或项目机会。", actionLabel: "发送邮件", emailLabel: "邮箱", linkedinLabel: "LinkedIn", linkedinPlaceholder: "填写 LinkedIn 链接", githubLabel: "GitHub", resumeLabel: "简历", resumeActionLabel: "英文 PDF" },
    },
    footer: { note: "Python、TypeScript 与 AI 应用工程。", backToTopLabel: "返回顶部" },
  },
  liveProducts: [
    {
      name: "Resume Tailor Harness", tagline: "以事实为依据的求职流程",
      description: "查找职位、依据个人资料核验定制简历中的陈述，并在独立的用户工作区中跟踪申请。",
      facts: ["确定性的来源、技能与数值核验", "简历和求职信 PDF 导出", "支持同步故障恢复的 Gmail 跟踪"],
      href: english.liveProducts[0].href, actionLabel: "打开应用",
      trial: { action: "https://resume-agent.up.railway.app/register", heading: "注册试用账号", note: "将在新标签页打开注册页面并预填信息，密码需在该页面设置。", nameField: "姓名", namePlaceholder: "您的姓名", emailField: "邮箱地址", emailPlaceholder: "you@example.com", submitLabel: "创建试用账号" },
    },
    {
      name: "Food Manager", tagline: "共享食材管理与膳食计划",
      description: "通过 Telegram 机器人和 Mini App 导入购物小票、管理家庭食材、接收到期提醒并制定膳食计划。",
      facts: ["从小票照片到食材记录", "含配额与确认机制的 Mini App", "支持英语、中文、法语和西班牙语"],
      href: english.liveProducts[1].href, actionLabel: "在 Telegram 中打开",
    },
  ],
  projects: projects.map((entry) => {
    const project: ProjectConfig = entry;
    const copy: Record<(typeof projects)[number]["id"], { kind: string; signal: string; description: string }> = {
      resume: { kind: "全栈应用", signal: "事实核验 · 工作区隔离", description: "集职位发现、简历定制、求职信生成与申请跟踪于一体。确定性校验依据来源事实核验陈述；近期新增 Gmail 同步恢复与订阅额度生命周期处理。" },
      food: { kind: "Telegram 机器人与 Mini App", signal: "小票解析 · 家庭共享", description: "将小票照片转为食材记录，提供到期提醒与膳食计划。Mini App 复用既有权限、配额和确认机制来执行机器人工作流，并提供本地化消息。" },
      video: { kind: "本地媒体工具", signal: "片段匹配 · 删除前审核", description: "借助 FFmpeg 与指纹缓存识别相同视频、转码副本和共享片段。浏览器界面按片段分组，汇总保留文件的覆盖范围，并将审核通过的待移除文件转入隔离目录。" },
      h1b: { kind: "开源分支贡献", signal: "磁盘索引 · 有界查询缓存", description: "扩展用于检索美国劳工部公开申报记录的 MCP 服务，加入磁盘索引和有界缓存，支持空闲时释放缓存，并记录内存占用与查询性能的取舍。" },
      console: { kind: "开源前端定制", signal: "流式交互 · 权限与用量控制", description: "在 LangChain 智能体控制台上增加身份认证、角色权限、用量预算和工具审批。近期加入代码分析与源图片界面，并保留设置保存期间的编辑内容。" },
      diagram: { kind: "开源分支贡献", signal: "HTML / SVG · 校验工具", description: "为图表技能的提取与校验脚本贡献加固修复，统一提取器处理方式，并扩展对生成图表和文档的校验覆盖。" },
      vsda: { kind: "企业智能体平台", signal: "监督路由 · 混合检索", description: "LangGraph 监督智能体在企业工具、检索和隔离式代码仓库分析之间分配任务。FastAPI 提供身份认证、模型策略、用量控制与管理功能。" },
      requirements: { kind: "需求工程工作流", signal: "MCP 连接器 · 独立评审", description: "通过 Jira 和 Polarion MCP 工具协调资料检索、需求起草、独立评审与验证方案。Python SDK 运行时流式输出进度并保留产物；近期扩展了文档布局和修订版本读取能力。" },
      release: { kind: "工程自动化", signal: "结构化提取 · CI 集成", description: "将软件发布邮件解析为结构化记录，协调 Jenkins 构建，并依据测试报告生成摘要。支持与 MinIO 导出数据比对，以核验发布记录。" },
      enterprise: { kind: "集成库与智能体", signal: "类型化客户端 · 审批流程", description: "面向 Jira、Polarion、Confluence、Teams 和邮件的 Python 客户端及智能体工作流，支持工单报告、测试运行管理和敏感操作的人工审批。" },
    };
    return { ...project, ...copy[entry.id], repo: project.repo && { ...project.repo, label: "源码" }, live: project.live && { ...project.live, label: project.id === "food" ? "在 Telegram 中打开" : "打开应用" }, skills: project.skills.map((skill) => ({ "LLM routing": "LLM 路由", "Validation": "校验", "Hybrid RAG": "混合检索 RAG" }[skill] ?? skill)) };
  }),
  experience: [
    { label: "智能体平台工程", title: "通过受控的监督智能体分配企业任务", description: "监督智能体将任务路由到企业集成、OpenSearch 检索和代码仓库分析等专业智能体，并在工作流周围设置身份认证、模型策略、预算及审批控制。" },
    { label: "多模型供应商集成", title: "根据模型能力选择调用路径", description: "Food Manager 支持 Anthropic、OpenAI、Gemini 和 DeepSeek。当所选文本模型无法处理图像时，小票解析会回退到具备视觉能力的供应商。", link: "https://github.com/awbjcj/food-manager" },
    { label: "AI 输出核验", title: "用事实约束阻止无依据的陈述", description: "来源、技能名称与数值证据校验约束定制简历的内容。经 SHA-256 核验的技能注册表记录生成每份产物时使用的流程。", link: "https://github.com/awbjcj/resume-tailor-harness" },
    { label: "实时流式界面", title: "可查看、可干预的智能体运行界面", description: "LangGraph 控制台流式展示模型输出和状态，并提供工具审批、工作区文件、代码分析与用量控制。", link: "https://github.com/awbjcj/deep-agents-ui" },
    { label: "技术领导", title: "协调九个 ADAS 项目的 430 余项问题", description: "亲自分诊 267 项问题，并统筹九个 ADAS 项目中超过 430 项问题的处理，协调算法、集成、测试和数据挖掘团队。" },
  ],
  resume: {
    roles: [
      { company: "Aptiv Corporation（安波福）", role: "整车系统问题分诊工程师 / VSDA 分诊团队技术负责人", period: "2023 年 2 月至今", location: "美国密歇根州特洛伊", highlights: ["部署三个 Python AI/LLM 智能体，用于发布邮件、报告和 Jira 问题分诊。", "自动化生成 1,000 余项 Jira 故事，并通过 Jenkins 实现近实时报告。", "负责九个 ADAS 项目的问题分诊：亲自处理 267 项、统筹 430 余项；两次获得最高等级绩效评价。"] },
      { company: "密歇根大学工程学院", role: "研究生助教 / 系统工程（ISD 521）", period: "2022 年 8 月至 12 月", location: "美国密歇根州安娜堡", highlights: ["共同指导 13 个团队的 51 名学生完成 MBSE 项目，覆盖利益相关方需求到验证模型。"] },
      { company: "Varian Medical Systems（西门子医疗旗下）", role: "系统工程实习生", period: "2022 年 6 月至 9 月", location: "美国加利福尼亚州帕洛阿尔托", highlights: ["开发用于放疗系统验证的 MATLAB 测试计划和束流数据工具。"] },
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
    { title: "让 AI 输出有据可查", description: "通过类型契约与事实约束核验生成内容。" },
    { title: "保留人工控制", description: "使用角色权限、审批、预算与审计记录。" },
    { title: "负责完整的技术链路", description: "从检索、智能体和 API 到界面与交付。" },
  ],
  skillGroups: [
    { label: "智能体系统", skills: ["LangGraph", "LangChain", "Deep Agents", "Agno", "MCP", "工具调用", "LLM 评估", "人工介入"] },
    { label: "AI 全栈", skills: english.skillGroups[1].skills },
    { label: "检索与数据", skills: ["RAG", "OpenSearch", "混合检索", "BM25", "嵌入模型", "向量检索", "SQLite", "MinIO / S3"] },
    { label: "模型与路由", skills: ["OpenAI", "Anthropic Claude", "Google Gemini", "DeepSeek", "多供应商路由"] },
    { label: "平台与交付", skills: english.skillGroups[4].skills },
  ],
};
