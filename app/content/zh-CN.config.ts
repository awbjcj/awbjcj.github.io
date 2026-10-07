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
    contact: { ...english.siteConfig.contact, responseNote: "如果你正在招聘 AI 应用、智能体平台或全栈开发工程师，欢迎联系我。也欢迎交流相关项目。" },
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
      resume: { label: "履历", title: "工作与学习经历", description: "工作经历、教育背景与发表的论文。", downloadLabel: "下载简历（英文 PDF）", experienceLabel: "工作经历", educationLabel: "教育背景", publicationsLabel: "论文", locationLabel: "所在地", focusLabel: "专业方向", statusLabel: "求职状态" },
      approach: { label: "工程方法", title: "让系统的行为清楚可控", description: "设计模型调用时，我会先明确几件事：哪些数据可以传入，系统有权执行哪些操作，以及用户如何审核结果。" },
      toolkit: { label: "技术栈", title: "我常用的工具与技术" },
      contact: { label: "联系", title: "聊聊岗位或项目", actionLabel: "给我发邮件", emailLabel: "邮箱", linkedinLabel: "LinkedIn", linkedinPlaceholder: "填写 LinkedIn 链接", githubLabel: "GitHub", resumeLabel: "简历", resumeActionLabel: "英文 PDF" },
    },
    footer: { note: "Python、TypeScript 与 AI 应用工程。", backToTopLabel: "返回顶部" },
  },
  liveProducts: [
    {
      name: "Resume Tailor Harness", tagline: "基于真实经历，准备求职申请",
      description: "查找职位，根据你的个人资料核对定制简历中的内容，并在各自独立的工作区中跟进申请。",
      facts: ["按固定规则核对资料来源、技能名称和数值", "导出简历与求职信 PDF", "通过 Gmail 跟进申请，支持同步故障恢复"],
      href: english.liveProducts[0].href, actionLabel: "打开应用",
      trial: { action: "https://resume-agent.up.railway.app/register", heading: "注册试用账号", note: "点击后会在新标签页打开注册页面，自动填入姓名和邮箱。密码在注册页面设置。", nameField: "姓名", namePlaceholder: "你的姓名", emailField: "邮箱地址", emailPlaceholder: "you@example.com", submitLabel: "创建试用账号" },
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
      resume: { kind: "全栈应用", signal: "事实核验 · 工作区隔离", description: "支持职位查找、简历定制、求职信生成和申请跟进，并根据原始资料核对简历内容。最近加入了无需浏览器的职位采集与经过校验的故障恢复；对暂时不可用的数据来源延后重试，并检查模型接口的传输兼容性。" },
      food: { kind: "Telegram 机器人与 Mini App", signal: "小票分组 · 家庭共享", description: "把购物小票照片转成全家共享的食材清单，提供到期提醒和餐食计划。食材按小票分组，方便查看是哪次采购的；Mini App 的厨房页面沿用机器人的权限、用量限制和操作确认逻辑，并支持多语言。" },
      video: { kind: "本地视频工具", signal: "片段匹配 · 移除前审核", description: "用 FFmpeg 和缓存的视频指纹找出重复视频、重新编码的副本，以及不同视频中的相同片段。你可以在浏览器中按片段查看匹配结果，核对保留文件合计覆盖了哪些内容；确认移除的文件会先移入隔离目录。" },
      console: { kind: "开源前端定制", signal: "检查点恢复 · 工具审批", description: "为 LangChain 控制台加入身份认证、角色权限、Token 用量、调用次数和费用预算，以及工具操作审批。智能体可从服务端最新检查点继续运行；界面会显示正在保存的子智能体文件，并支持查看生成文件的内容。" },
      vsda: { kind: "企业智能体平台", signal: "写入前审核 · 混合检索", description: "由 LangGraph 主智能体协调企业工具调用、混合检索和隔离环境中的代码分析。在 Confluence 和 Polarion 中编写或更新内容时，先审核、复核操作对象，并将变更登记持久保存；文档导出会在设定范围内自动调整并发量。" },
      requirements: { kind: "需求工程工作流", signal: "来源资料 · 独立评审", description: "结合 Jira、Confluence 和 Polarion 的资料，完成需求调研、起草、独立评审和验证方案拟定。基于 Python SDK 的运行层会校验来源资料包、保存生成文件、实时显示进度，并支持取消任务和恢复运行。" },
      release: { kind: "工程自动化", signal: "发布信息提取 · 运行摘要", description: "从发布邮件中提取结构化记录，生成 Jenkins 构建请求。部署在容器中的审核界面可查看发布数据、更新访问令牌；每次运行后自动汇总处理过程、提交结果、队列编号和故障信息。" },
      enterprise: { kind: "集成库与智能体", signal: "ALM 内容编写 · 自适应导出", description: "为 Jira、Polarion、Confluence、Teams 和邮件开发带类型约束的 Python 客户端与自动化流程。最近验证了 wiki 页面创建功能，统一了 SOAP 与 REST 接口对测试结果图片的处理，并让批量导出自动调整并发量、延后重试超时任务。" },
    };
    return { ...project, ...copy[entry.id], repo: project.repo && { ...project.repo, label: "源码" }, live: project.live && { ...project.live, label: project.id === "food" ? "在 Telegram 中打开" : "打开应用" }, skills: project.skills.map((skill) => ({ "LLM routing": "LLM 路由", "Validation": "校验", "Hybrid RAG": "混合检索 RAG" }[skill] ?? skill)) };
  }),
  experience: [
    { label: "智能体平台开发", title: "修改企业系统内容前，先让人审核", description: "主智能体协调企业任务、资料检索和隔离环境中的代码分析。向 Confluence 或 Polarion 写入内容前，需要人工审核、复核操作对象，并持久保存变更登记。" },
    { label: "多家模型服务集成", title: "按任务需要，选择合适的模型", description: "Food Manager 接入了 Anthropic、OpenAI、Gemini 和 DeepSeek。如果当前文本模型无法处理图片，小票解析会改用支持图像识别的模型服务。", link: "https://github.com/awbjcj/food-manager" },
    { label: "AI 输出核验", title: "简历里的每项陈述，都要有依据", description: "定制简历时，程序会核对资料来源、技能名称和数值证据，拦截没有依据的内容。技能注册表经过 SHA-256 校验，可追溯生成文件时使用的流程。", link: "https://github.com/awbjcj/resume-tailor-harness" },
    { label: "实时交互界面", title: "从最新检查点接着运行", description: "LangGraph 控制台实时显示模型输出和运行状态，可从服务端最新检查点继续任务，也会显示正在保存的子智能体文件。每项审批都对应最初触发它的暂停请求。", link: "https://github.com/awbjcj/deep-agents-ui" },
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
