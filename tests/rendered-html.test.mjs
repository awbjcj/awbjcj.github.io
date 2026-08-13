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
  assert.match(html, /David Wu/);
  assert.match(html, /beyond the demo/);
  assert.match(html, /Copilot Proxy/);
  assert.match(html, /Experience in practice/);
  assert.match(html, /og\.png/);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton|Your site is taking shape/i);
});

test("includes accessible navigation and public project links", async () => {
  const html = await (await render()).text();
  const css = await readFile(new URL("../app/globals.css", import.meta.url), "utf8");
  assert.match(html, /aria-label="Primary navigation"/);
  assert.match(html, /href="#work"/);
  assert.match(html, /github\.com\/awbjcj\/vscode-copilot-proxy/);
  assert.match(css, /prefers-reduced-motion/);
});

test("renders the résumé section with a timeline, education, and a download", async () => {
  const html = await (await render()).text();
  assert.match(html, /id="resume"/);
  assert.match(html, /Experience</);
  assert.match(html, /Education</);
  assert.match(html, /href="\/resume\.pdf" download/);
  assert.match(html, /resume-timeline/);
});

test("exposes reachable contact channels", async () => {
  const html = await (await render()).text();
  assert.match(html, /id="contact"/);
  assert.match(html, /href="mailto:awbjcj@gmail\.com"/);
  assert.match(html, /awbjcj@gmail\.com/);
  assert.match(html, /LinkedIn/);
  assert.match(html, /href="https:\/\/github\.com\/awbjcj"/);
});

test("never ships the raw placeholder marker, even in the RSC payload", async () => {
  // Placeholders render in a visibly "unfilled" state, but the "TODO:" marker
  // itself must not reach the page — including via React keys, which are
  // serialized into the flight payload embedded in the HTML.
  const html = await (await render()).text();
  assert.doesNotMatch(html, /TODO:/);
});
