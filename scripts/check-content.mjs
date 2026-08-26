/**
 * Publish gate: refuses to let unfinished content reach the live site.
 *
 * Placeholder copy is useful while authoring — it shows the page's real shape
 * before the words exist. It is not useful to a recruiter reading the deployed
 * site. This script is the boundary between those two states: `npm run build`
 * and `npm test` stay green with placeholders present, but the GitHub Pages
 * workflow runs this check before publishing and fails the deploy if any
 * blocking finding remains.
 *
 * Run locally at any time:  npm run check:content
 */
import { access, readFile, readdir } from "node:fs/promises";
import { constants } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("../", import.meta.url));
const CONTENT_DIRECTORY = path.join("app", "content");

/**
 * Which findings block a deploy, and which are advisory.
 *
 * Blocking is the default: anything a visitor can read must be real. Fields
 * documented as optional are advisory, so a genuinely blank optional field
 * never holds up a release.
 */
const ADVISORY_PATTERNS = [/^Optional\b/i];

function isAdvisory(detail) {
  return ADVISORY_PATTERNS.some((pattern) => pattern.test(detail));
}

const findings = [];

/* ── 1. Unfinished copy in editable config files ─────────────────────── */
const configFiles = (await readdir(path.join(root, CONTENT_DIRECTORY)))
  .filter((name) => name.endsWith(".config.ts"))
  .sort();

for (const configFile of configFiles) {
  const relativeFile = path.join(CONTENT_DIRECTORY, configFile);
  const source = await readFile(path.join(root, relativeFile), "utf8");

  source.split(/\r?\n/).forEach((line, index) => {
    if (/^\s*(\*|\/\/|\/\*)/.test(line)) return;

    const match = line.match(/["'`]\s*TODO:\s*([^"'`]*)/);
    if (!match) return;

    const detail = match[1].trim();
    findings.push({
      blocking: !isAdvisory(detail),
      where: `${relativeFile}:${index + 1}`,
      message: `unfinished copy — "${detail.slice(0, 68)}${detail.length > 68 ? "…" : ""}"`,
    });
  });
}

/* ── 2. Assets the site links to must actually exist ─────────────────── */
const REQUIRED_ASSETS = [
  { file: path.join("public", "resume.pdf"), why: "the résumé download link would 404" },
  { file: path.join("public", "og.png"), why: "social previews would break" },
];

for (const asset of REQUIRED_ASSETS) {
  try {
    await access(path.join(root, asset.file), constants.R_OK);
  } catch {
    findings.push({ blocking: true, where: asset.file, message: `missing file — ${asset.why}` });
  }
}

/* ── 3. Report ───────────────────────────────────────────────────────── */
const blocking = findings.filter((f) => f.blocking);
const advisory = findings.filter((f) => !f.blocking);

for (const finding of advisory) {
  console.warn(`  note     ${finding.where}  ${finding.message}`);
}
for (const finding of blocking) {
  console.error(`  BLOCKING ${finding.where}  ${finding.message}`);
}

if (blocking.length > 0) {
  console.error(
    `\nContent check failed: ${blocking.length} item${blocking.length === 1 ? "" : "s"} must be resolved before publishing.` +
      `\nEdit the files in ${CONTENT_DIRECTORY} to replace placeholder text, and add any missing files listed above.\n`,
  );
  process.exit(1);
}

console.log(
  `Content check passed${advisory.length > 0 ? ` (${advisory.length} advisory note${advisory.length === 1 ? "" : "s"})` : ""} — safe to publish.`,
);
