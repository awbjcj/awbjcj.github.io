import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  // Assert against the prerendered artifact that will actually be deployed.
  return readFile(new URL("../dist/client/index.html", import.meta.url), "utf8");
}

test("exports the finished portfolio", async () => {
  const html = await render();
  assert.match(html, /Jiajin \(David\) Wu/);
  assert.match(html, /Engineered end to end/);
  assert.match(html, /Resume Tailor Harness/);
  assert.match(html, /Engineering experience/);
  assert.match(html, /og\.png/);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton|Your site is taking shape/i);
});

test("exports the router payload and canonical public metadata", async () => {
  const html = await render();
  const payload = await readFile(new URL("../dist/client/index.rsc", import.meta.url), "utf8");
  assert.match(html, /rel="canonical" href="https:\/\/awbjcj\.github\.io\/?"/);
  assert.match(html, /https:\/\/awbjcj\.github\.io\/og\.png/);
  assert.match(payload, /Jiajin \(David\) Wu/);
  assert.match(payload, /PortfolioProvider/);
  assert.doesNotMatch(payload, /TODO:/);
});

test("includes accessible navigation and public project links", async () => {
  const html = await render();
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

test("keeps repeated portfolio text on shared alignment rails", async () => {
  const html = await render();
  const css = await readFile(new URL("../app/globals.css", import.meta.url), "utf8");
  assert.match(html, /class="experience-body"/);
  assert.match(css, /--content-grid: minmax\(0, 4fr\) minmax\(0, 8fr\)/);
  assert.match(css, /--detail-label-width: 160px/);
  assert.match(css, /\.project-content h3 \{[\s\S]*?min-block-size: 2\.4em/);
  assert.match(css, /\.experience-body \{[\s\S]*?grid-template-columns: minmax\(0, 1fr\) auto/);
});

test("renders the résumé section with a timeline, education, publications, and a download", async () => {
  const html = await render();
  assert.match(html, /id="resume"/);
  assert.match(html, /Experience</);
  assert.match(html, /Education</);
  assert.match(html, /Publications</);
  assert.match(html, /Hybrid Aerial-Aquatic Vehicle/);
  assert.match(html, /href="\/resume\.pdf" download/);
  assert.match(html, /resume-timeline/);
});

test("exposes reachable contact channels", async () => {
  const html = await render();
  assert.match(html, /id="contact"/);
  assert.match(html, /href="mailto:wujiajin0303@gmail\.com"/);
  assert.match(html, /wujiajin0303@gmail\.com/);
  assert.match(html, /LinkedIn/);
  assert.match(html, /linkedin\.com\/in\/david-jiajin-wu/);
  assert.match(html, /href="https:\/\/github\.com\/awbjcj"/);
});

test("renders verified employment and education instead of placeholders", async () => {
  const html = await render();
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
  const html = await render();
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
  const html = await render();
  assert.match(html, /id="live"/);
  assert.match(html, /href="https:\/\/resume-tailor-harness\.up\.railway\.app"/);
  assert.doesNotMatch(html, /resume-agent\.up\.railway\.app/);
  assert.match(html, /href="https:\/\/t\.me\/foodie_manager_bot"/);
});

test("the trial form is a plain GET form that prefills the real sign-up", async () => {
  // No JavaScript is involved: the browser serialises these two fields into the
  // query string, and the target's registration page reads `name` and `email`
  // back to prefill itself. No password field exists here on purpose.
  const html = await render();
  assert.match(html, /action="https:\/\/resume-tailor-harness\.up\.railway\.app\/register"/);
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

test("includes reviewed GitHub additions and keeps private repositories unlinked", async () => {
  const html = await render();
  const projectsConfig = await readFile(new URL("../app/content/projects.config.ts", import.meta.url), "utf8");

  for (const repository of ["video-dedup"]) {
    assert.ok(html.includes(`github.com/awbjcj/${repository}`));
    assert.ok(projectsConfig.includes(repository));
  }
  assert.doesNotMatch(html, /H-1B Job Search MCP|h1b-job-search-mcp/);
  assert.match(html, /Requirement Analyzer/);
  assert.doesNotMatch(html, /Diagram Design|diagram-design/);
  assert.doesNotMatch(html, /3,411 TESTS|735 TESTS|8 GRAPHS|60 TOOLS/);

  // Cards without a public repository say so rather than offering a dead link.
  assert.match(html, /Private repository/);
  assert.doesNotMatch(html, /github\.com\/awbjcj\/(vsda-deep-agent|LangGraph-test|Jira-Polarion-automation|requirement-analyzer)/);
});

test("renders accessible preference controls and a theme initializer before the body", async () => {
  const html = await render();
  assert.match(html, /aria-label="Display preferences"/);
  assert.match(html, /<option value="zh-CN" lang="zh-CN">中文<\/option>/);
  assert.match(html, /aria-label="Dark mode" aria-pressed="false"/);
  assert.ok(html.indexOf("portfolio-theme") < html.indexOf("<body"));
});
