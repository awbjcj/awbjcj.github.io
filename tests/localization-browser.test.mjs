import assert from "node:assert/strict";
import { createReadStream, existsSync } from "node:fs";
import { createServer } from "node:http";
import path from "node:path";
import { after, before, test } from "node:test";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright-core";

const root = fileURLToPath(new URL("../dist/client/", import.meta.url));
const browserCandidates = [
  process.env.PORTFOLIO_CHROMIUM_PATH,
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
  "/usr/bin/google-chrome",
  "/usr/bin/google-chrome-stable",
  "/usr/bin/chromium",
  "/usr/bin/chromium-browser",
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
].filter(Boolean);
const mimeTypes = {
  ".html": "text/html; charset=utf-8", ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8", ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml", ".png": "image/png", ".woff2": "font/woff2",
  ".pdf": "application/pdf", ".rsc": "text/x-component; charset=utf-8",
};
let server;
let browser;
let baseUrl;

before(async () => {
  assert.ok(existsSync(path.join(root, "index.html")), "Build the static site before running the browser checks.");
  const executablePath = browserCandidates.find((candidate) => existsSync(candidate));
  assert.ok(executablePath, "Install Chrome/Chromium or set PORTFOLIO_CHROMIUM_PATH to its executable.");
  server = createServer((request, response) => {
    const pathname = new URL(request.url, "http://localhost").pathname;
    const relative = pathname === "/" ? "index.html" : decodeURIComponent(pathname).replace(/^\/+/, "");
    const file = path.resolve(root, relative);
    if (!file.startsWith(path.resolve(root) + path.sep)) {
      response.writeHead(403).end();
      return;
    }
    const stream = createReadStream(file);
    stream.on("error", () => response.writeHead(404).end());
    response.setHeader("Content-Type", mimeTypes[path.extname(file)] ?? "application/octet-stream");
    stream.pipe(response);
  });
  await new Promise((resolve) => server.listen(0, "127.0.0.1", resolve));
  baseUrl = `http://127.0.0.1:${server.address().port}`;
  browser = await chromium.launch({ executablePath, headless: true, args: ["--no-sandbox"] });
});

after(async () => {
  await browser?.close();
  if (server) await new Promise((resolve, reject) => server.close((error) => error ? reject(error) : resolve()));
});

const copy = {
  en: {
    projects: ["A governed agent platform for engineering work", "Release emails become traceable build requests", "Tailored résumés with evidence checks", "From source research to reviewed engineering artifacts", "Engineering collaboration across enterprise tools", "A shared pantry and meal-planning assistant"],
    resumeHeading: "Professional background.",
    resumeFile: "/resume.pdf",
    menuTitle: "Find your way around.",
  },
  "zh-CN": {
    projects: ["面向工程任务的受控智能体平台", "从发布邮件到可追溯的构建请求", "根据职位定制简历，并核对陈述依据", "从来源调研到经过评审的工程成果", "连接企业工具的工程协作应用", "全家共享的食材与餐食助手"],
    resumeHeading: "工作与学习经历",
    resumeFile: "/resume-zh.pdf",
    menuTitle: "找到你感兴趣的内容",
  },
};
const projectIds = ["vsda", "release", "resume", "requirements", "enterprise", "food"];

test("renders every featured project and the résumé in both languages at desktop and mobile widths", async () => {
  for (const width of [1440, 768, 375, 320]) {
    for (const locale of ["en", "zh-CN"]) {
      for (const theme of ["light", "dark"]) {
        const context = await browser.newContext({ viewport: { width, height: 900 }, colorScheme: theme, reducedMotion: "reduce" });
        try {
          const page = await context.newPage();
          const errors = [];
          page.on("pageerror", (error) => errors.push(error.message));
          page.on("console", (message) => { if (message.type() === "error") errors.push(message.text()); });
          await page.goto(`${baseUrl}/?lang=${locale}`, { waitUntil: "networkidle" });
          await page.waitForFunction((value) => document.documentElement.lang === value, locale);
          assert.equal(await page.locator("html").getAttribute("data-theme"), theme);
          assert.equal(await page.locator(".resume-download").getAttribute("href"), copy[locale].resumeFile);
          assert.equal(await page.getByRole("heading", { name: copy[locale].resumeHeading }).count(), 1);
          if (locale === "zh-CN") {
            assert.equal(await page.locator(".resume-original-title[lang=en]").count(), 2);
            assert.equal(await page.getByRole("link", { name: /融合无监督聚类方法/ }).count(), 1);
          }
          for (let index = 0; index < projectIds.length; index++) {
            if (await page.locator(".mobile-project-select select").isVisible()) {
              await page.locator(".mobile-project-select select").selectOption(projectIds[index]);
            } else {
              await page.locator("[role=tab]").nth(index).click();
            }
            assert.equal(await page.locator(".case-title-row > p").textContent(), copy[locale].projects[index]);
            const diagram = page.locator(`[data-project-diagram="${projectIds[index]}"] svg`);
            assert.equal(await diagram.count(), 1, "the selected project owns its diagram");
            assert.equal(await diagram.getAttribute("role"), "img");
            const accessible = await diagram.evaluate(svg => svg.getAttribute("aria-labelledby").split(" ").every(id => document.getElementById(id)?.textContent.trim()));
            assert.ok(accessible, "the diagram has a resolving title and description");
            if (width < 560) {
              const frame = page.locator(".diagram-scroll");
              const before = await frame.evaluate(el => ({ width: el.clientWidth, content: el.scrollWidth }));
              assert.ok(before.content > before.width, "a narrow screen keeps readable diagram text in a local scroll region");
              await frame.focus();
              await page.keyboard.press("ArrowRight");
              await page.waitForFunction(() => document.querySelector(".diagram-scroll").scrollLeft > 0);
            }
            const dimensions = await page.evaluate(() => ({ viewport: window.innerWidth, page: document.documentElement.scrollWidth }));
            assert.ok(dimensions.page <= dimensions.viewport + 1, `${locale}, ${theme}, ${width}px, ${projectIds[index]}: page overflows`);
          }
          await page.locator(".command-trigger").click();
          assert.equal(await page.getByRole("heading", { name: copy[locale].menuTitle }).count(), 1);
          assert.equal(await page.getByRole("listbox", { name: locale === "en" ? "Search results" : "搜索结果" }).count(), 1);
          await page.keyboard.press("Escape");
          assert.equal(await page.locator("dialog").getAttribute("open"), null);
          assert.deepEqual(errors, []);
        } finally {
          await context.close();
        }
      }
    }
  }
});

test("switches language and searches translated project and contact copy", async () => {
  const context = await browser.newContext({ viewport: { width: 1280, height: 800 } });
  try {
    const page = await context.newPage();
    const rscRequests = [];
    let pageLoads = 0;
    page.on("request", (request) => { if (new URL(request.url()).searchParams.has("_rsc")) rscRequests.push(request.url()); });
    page.on("load", () => pageLoads++);
    await page.goto(`${baseUrl}/?lang=en`, { waitUntil: "networkidle" });
    await page.locator("[role=tab]").nth(2).click();
    await page.locator(".language-control select").selectOption("zh-CN");
    await page.waitForFunction(() => document.documentElement.lang === "zh-CN");
    assert.equal(await page.locator(".case-title-row > p").textContent(), copy["zh-CN"].projects[2]);
    assert.match(await page.title(), /AI 全栈工程师/);
    assert.match(await page.locator('meta[name="description"]').first().getAttribute("content"), /智能体/);
    await page.goBack();
    await page.waitForFunction(() => document.documentElement.lang === "en");
    assert.equal(await page.locator(".case-title-row > p").textContent(), copy.en.projects[2]);
    await page.goForward();
    await page.waitForFunction(() => document.documentElement.lang === "zh-CN");
    await page.locator("[role=tab][aria-selected=true]").focus();
    await page.keyboard.press("ArrowDown");
    assert.equal(await page.locator(".case-title-row > p").textContent(), copy["zh-CN"].projects[3]);

    await page.locator(".command-trigger").click();
    await page.locator("dialog input").fill("视频");
    await page.getByRole("option", { name: "Video Dedup", exact: true }).waitFor({ state: "visible" });
    await page.locator("dialog input").fill("邮箱");
    await page.getByRole("option", { name: "邮箱", exact: true }).waitFor({ state: "visible" });
    await page.keyboard.press("Escape");

    await page.locator(".language-control select").selectOption("en");
    await page.locator(".command-trigger").click();
    await page.locator("dialog input").fill("duplicate videos");
    await page.getByRole("option", { name: "Video Dedup", exact: true }).waitFor({ state: "visible" });
    assert.equal(pageLoads, 1, "language history should stay on the current page");
    assert.deepEqual(rscRequests, [], "language history should not request a server-rendered page");
  } finally {
    await context.close();
  }
});

test("plays a bounded example only on request, with pause, replay and reduced-motion support", async () => {
  const context = await browser.newContext({ viewport: { width: 1600, height: 1000 }, reducedMotion: "no-preference" });
  try {
    const page = await context.newPage();
    await page.goto(`${baseUrl}/?lang=en`, { waitUntil: "networkidle" });
    const figure = page.locator("[data-project-diagram]");
    const baseIsVisible = () => page.locator(".project-diagram > .diagram-edge").evaluateAll(paths => paths.length > 0 && paths.every(path => getComputedStyle(path).opacity === "1" && getComputedStyle(path).display !== "none"));
    assert.equal(await figure.getAttribute("data-playback-state"), "ready");
    await page.locator("#case-tab-vsda").focus();
    await page.keyboard.press("ArrowDown");
    assert.equal(await figure.getAttribute("data-project-diagram"), "release");
    assert.equal(await figure.getAttribute("data-playback-state"), "ready", "keyboard navigation does not start animation");
    await page.locator("[data-diagram-play]").click();
    assert.equal(await figure.getAttribute("data-playback-state"), "running");
    const token = page.locator("[data-diagram-token]");
    assert.deepEqual(await token.evaluate(el => el.getAnimations().map(a => ({ state: a.playState, iterations: a.effect.getTiming().iterations }))), [{state:"running",iterations:1}]);
    assert.ok(await baseIsVisible(), "meaningful connectors remain visible during playback");
    await page.locator("[data-diagram-play]").click();
    assert.equal(await figure.getAttribute("data-playback-state"), "paused");
    assert.equal(await token.evaluate(el => el.getAnimations()[0].playState), "paused");
    await page.locator("[data-diagram-replay]").click();
    assert.equal(await figure.getAttribute("data-playback-state"), "running");
    await token.evaluate(el => el.getAnimations().forEach(a => a.finish()));
    await page.waitForFunction(() => document.querySelector("[data-project-diagram]").dataset.playbackState === "done");
    assert.equal(await token.evaluate(el => getComputedStyle(el).opacity), "0");
    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.waitForFunction(() => document.querySelector("[data-diagram-play]").disabled);
    assert.equal(await page.locator("[data-diagram-play]").isDisabled(), true);
    assert.ok(await baseIsVisible());
    await page.locator("#case-tab-food").click();
    const messages = await page.locator(".project-diagram > .diagram-edge[data-from]").evaluateAll(edges => edges.map(edge => ({from:edge.dataset.from,to:edge.dataset.to})));
    assert.deepEqual(messages.slice(0,3), [{from:"member",to:"assistant"},{from:"assistant",to:"pantry"},{from:"assistant",to:"member"}], "receipt items save before the separate batch confirmation flow");
    assert.equal(await page.locator("[data-diagram-play]").isDisabled(), true);
  } finally {
    await context.close();
  }
});

test("the standalone bilingual atlas has isolated playback and a complete no-JavaScript view", async () => {
  const context = await browser.newContext({ viewport: { width: 1280, height: 900 }, reducedMotion: "no-preference" });
  try {
    const page = await context.newPage();
    await page.route("https://fonts.googleapis.com/**", route => route.abort());
    await page.goto(`${baseUrl}/project-architectures.html`, { waitUntil: "domcontentloaded" });
    assert.equal(await page.locator("[data-project-diagram]").count(), 12);
    const english = page.locator("#vsda-en [data-project-diagram]");
    const chinese = page.locator("#vsda-zh-CN [data-project-diagram]");
    await english.locator("[data-diagram-play]").click();
    assert.equal(await english.getAttribute("data-playback-state"), "running");
    assert.equal(await chinese.getAttribute("data-playback-state"), "ready");
    await english.locator("[data-diagram-play]").click();
    assert.equal(await english.getAttribute("data-playback-state"), "paused");
    await chinese.locator("[data-diagram-play]").click();
    assert.equal(await chinese.getAttribute("data-playback-state"), "running");
    assert.equal(await english.getAttribute("data-playback-state"), "paused");
  } finally { await context.close(); }
  const staticContext = await browser.newContext({ javaScriptEnabled: false });
  try {
    const page = await staticContext.newPage();
    await page.route("https://fonts.googleapis.com/**", route => route.abort());
    await page.goto(`${baseUrl}/project-architectures.html`, { waitUntil: "domcontentloaded" });
    assert.equal(await page.locator("svg.project-diagram").count(), 12);
    assert.equal(await page.locator("#food-en .diagram-edge[data-from]").count(), 8);
    assert.equal(await page.locator("#vsda-en [data-diagram-play]").isDisabled(), true);
  } finally { await staticContext.close(); }
});
