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
    projects: ["Tailored résumés with evidence checks", "A shared pantry and meal-planning assistant", "Engineering collaboration across enterprise tools", "From source research to reviewed engineering artifacts"],
    resumeHeading: "Professional background.",
    resumeFile: "/resume.pdf",
    menuTitle: "Find your way around.",
  },
  "zh-CN": {
    projects: ["根据职位定制简历，并核对陈述依据", "全家共享的食材与餐食助手", "连接企业工具的工程协作应用", "从来源调研到经过评审的工程成果"],
    resumeHeading: "工作与学习经历",
    resumeFile: "/resume-zh.pdf",
    menuTitle: "找到你感兴趣的内容",
  },
};
const projectIds = ["resume", "food", "enterprise", "requirements"];

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
