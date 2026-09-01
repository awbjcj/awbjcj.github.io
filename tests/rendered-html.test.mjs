import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  return worker.fetch(
    new Request("https://awbjcj.github.io/", { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("server-renders the finished portfolio", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
  const html = await response.text();
  assert.match(html, /Jiajin \(David\) Wu/);
  assert.match(html, /beyond the demo/);
  assert.match(html, /Resume Agent/);
  assert.match(html, /Experience in practice/);
  assert.match(html, /og\.png/);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton|Your site is taking shape/i);
});

test("includes accessible navigation and public project links", async () => {
  const html = await (await render()).text();
  const css = await readFile(new URL("../app/globals.css", import.meta.url), "utf8");
  assert.match(html, /aria-label="Primary navigation"/);
  assert.match(html, /href="#main-content">Skip to main content/);
  assert.match(html, /<main id="main-content" class="main-content" tabindex="-1">/);
  assert.match(html, /href="#work"/);
  assert.match(html, /github\.com\/awbjcj\/resume-tailor-harness/);
  assert.match(css, /prefers-reduced-motion/);
  assert.match(css, /prefers-contrast: more/);
  assert.match(css, /forced-colors: active/);
  assert.match(css, /--accent-ink: #087a50/);
});

test("renders the résumé section with a timeline, education, publications, and a download", async () => {
  const html = await (await render()).text();
  assert.match(html, /id="resume"/);
  assert.match(html, /Experience</);
  assert.match(html, /Education</);
  assert.match(html, /Publications</);
  assert.match(html, /Hybrid Aerial-Aquatic Vehicle/);
  assert.match(html, /href="\/resume\.pdf" download/);
  assert.match(html, /resume-timeline/);
});

test("exposes reachable contact channels", async () => {
  const html = await (await render()).text();
  assert.match(html, /id="contact"/);
  assert.match(html, /href="mailto:wujiajin0303@gmail\.com"/);
  assert.match(html, /wujiajin0303@gmail\.com/);
  assert.match(html, /LinkedIn/);
  assert.match(html, /linkedin\.com\/in\/david-jiajin-wu/);
  assert.match(html, /href="https:\/\/github\.com\/awbjcj"/);
});

test("renders verified employment and education instead of placeholders", async () => {
  const html = await (await render()).text();
  assert.match(html, /Aptiv Corporation/);
  assert.match(html, /Vehicle System Triage Engineer/);
  assert.match(html, /Varian Medical Systems/);
  assert.match(html, /Master of Engineering, Systems Engineering &amp; Design/);
  assert.doesNotMatch(html, /class="unfilled"/);
});

test("never ships the raw placeholder marker, even in the RSC payload", async () => {
  // Placeholders render in a visibly "unfilled" state, but the "TODO:" marker
  // itself must not reach the page — including via React keys, which are
  // serialized into the flight payload embedded in the HTML.
  const html = await (await render()).text();
  assert.doesNotMatch(html, /TODO:/);
});

test("keeps editable content in purpose-specific config files", async () => {
  const page = await readFile(new URL("../app/page.tsx", import.meta.url), "utf8");
  const contactSection = await readFile(new URL("../app/components/portfolio/contact-section.tsx", import.meta.url), "utf8");
  const siteChrome = await readFile(new URL("../app/components/portfolio/site-chrome.tsx", import.meta.url), "utf8");
  const projectsConfig = await readFile(new URL("../app/content/projects.config.ts", import.meta.url), "utf8");
  const experienceConfig = await readFile(new URL("../app/content/experience.config.ts", import.meta.url), "utf8");
  const resumeConfig = await readFile(new URL("../app/content/resume.config.ts", import.meta.url), "utf8");

  assert.match(page, /from "\.\/components\/portfolio"/);
  assert.match(page, /from "\.\/content"/);
  assert.doesNotMatch(page, /Food Manager|Aptiv Corporation|Vehicle Issue Triage Engineer/);
  assert.doesNotMatch(contactSection, />Email<|>LinkedIn<|>GitHub<|>Résumé</);
  assert.doesNotMatch(siteChrome, />GitHub</);
  assert.match(projectsConfig, /export const projects = \[/);
  assert.match(experienceConfig, /export const experience = \[/);
  assert.match(resumeConfig, /export const resume = \{/);
});

test("features the live products with working entry points", async () => {
  const html = await (await render()).text();
  assert.match(html, /id="live"/);
  assert.match(html, /href="https:\/\/resume-agent\.up\.railway\.app"/);
  assert.match(html, /href="https:\/\/t\.me\/foodie_manager_bot"/);
});

test("the trial form is a plain GET form that prefills the real sign-up", async () => {
  // No JavaScript is involved: the browser serialises these two fields into the
  // query string, and the target's registration page reads `name` and `email`
  // back to prefill itself. No password field exists here on purpose.
  const html = await (await render()).text();
  assert.match(html, /action="https:\/\/resume-agent\.up\.railway\.app\/register"/);
  assert.match(html, /method="get"/);
  assert.match(html, /name="name"/);
  assert.match(html, /name="email"/);
  assert.match(html, /id="trial-1-name"/);
  assert.match(html, /for="trial-1-name"/);
  assert.doesNotMatch(html, /type="password"/);
});

test("documents copy-ready recipes for every frequently edited content type", async () => {
  const guide = await readFile(new URL("../app/content/README.md", import.meta.url), "utf8");
  assert.match(guide, /## Add a project/);
  assert.match(guide, /## Add an engineering experience story/);
  assert.match(guide, /## Add a role or internship/);
  assert.match(guide, /## Add a publication/);
  assert.match(guide, /## Add skills/);
  assert.match(guide, /npm run check:content/);
});

test("every project is dossier-backed, and private repos are stated not linked", async () => {
  const html = await (await render()).text();
  const projectsConfig = await readFile(new URL("../app/content/projects.config.ts", import.meta.url), "utf8");

  // Dropped for having no dossier — they must not reappear anywhere.
  assert.doesNotMatch(html, /Copilot Proxy|H-1B Job Search/);
  assert.doesNotMatch(projectsConfig, /vscode-copilot-proxy|h1b-job-search-mcp/);

  // Cards without a public repository say so rather than offering a dead link.
  assert.match(html, /Private repository/);
  assert.doesNotMatch(html, /github\.com\/awbjcj\/(vsda-deep-agent|LangGraph-test|Jira-Polarion-automation)/);
});
