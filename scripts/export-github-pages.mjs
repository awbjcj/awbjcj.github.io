import { cp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { fileURLToPath, pathToFileURL } from "node:url";
import path from "node:path";

const root = fileURLToPath(new URL("../", import.meta.url));
const target = path.join(root, "github-pages");
const { default: worker } = await import(new URL("../dist/server/index.js", import.meta.url).href);

await rm(target, { recursive: true, force: true });
await mkdir(target, { recursive: true });

const response = await worker.fetch(
  new Request("https://awbjcj.github.io/", { headers: { accept: "text/html" } }),
  { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
  { waitUntil() {}, passThroughOnException() {} },
);
if (!response.ok) throw new Error(`Portfolio render failed: ${response.status}`);

await writeFile(path.join(target, "index.html"), await response.text());
await cp(path.join(root, "dist", "client"), target, { recursive: true });
await cp(path.join(root, "public"), target, { recursive: true });
await writeFile(path.join(target, ".nojekyll"), "");

const html = await readFile(path.join(target, "index.html"), "utf8");
if (!html.includes("Jiajin (David) Wu") || html.includes("codex-preview")) throw new Error("Static export validation failed");
console.log(`GitHub Pages export ready at ${pathToFileURL(target).href}`);
