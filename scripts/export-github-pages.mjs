import { cp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { fileURLToPath, pathToFileURL } from "node:url";
import path from "node:path";

const root = fileURLToPath(new URL("../", import.meta.url));
const target = path.join(root, "github-pages");

// Copy the supported static export, including its client-navigation payload.
// An HTML-only render cannot satisfy the router's language/history requests.
await readFile(path.join(root, "dist", "client", "index.html"), "utf8");
await readFile(path.join(root, "dist", "client", "index.rsc"), "utf8");
await rm(target, { recursive: true, force: true });
await mkdir(target, { recursive: true });
await cp(path.join(root, "dist", "client"), target, { recursive: true });
await cp(path.join(root, "public"), target, { recursive: true });
await writeFile(path.join(target, ".nojekyll"), "");

const html = await readFile(path.join(target, "index.html"), "utf8");
if (!html.includes("Jiajin (David) Wu") || html.includes("codex-preview")) throw new Error("Static export validation failed");
console.log(`GitHub Pages export ready at ${pathToFileURL(target).href}`);
