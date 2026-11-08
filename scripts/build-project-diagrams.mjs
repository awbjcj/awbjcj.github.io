import { readFile, writeFile } from "node:fs/promises";
import { createServer } from "vite";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { mountDiagramPlayback } from "../app/lib/diagram-playback.mjs";

// The standalone atlas uses the exact copy, topology, and renderer shipped in
// the casebook. Regenerate it whenever those sources change.
const server = await createServer({
  configFile: false, logLevel: "silent", appType: "custom",
  server: { middlewareMode: true }, optimizeDeps: { noDiscovery: true },
});
try {
  const { ArchitectureView } = await server.ssrLoadModule("/app/components/portfolio/architecture-view.tsx");
  const { casebookConfig, casebookChinese, featuredProjectIds } = await server.ssrLoadModule("/app/content/casebook.config.ts");
  const { projects } = await server.ssrLoadModule("/app/content/projects.config.ts");
  const { projectDiagrams } = await server.ssrLoadModule("/app/content/project-diagrams.ts");
  for (const id of featuredProjectIds) {
    const spec = projectDiagrams[id];
    if (!spec.playback.length) throw new Error(`${id}: empty example path`);
    const ids = new Set(spec.nodes.map(node => node.id));
    if (ids.size !== spec.nodes.length) throw new Error(`${id}: duplicate diagram node`);
    for (const edge of spec.edges) {
      if (!ids.has(edge.from) || !ids.has(edge.to)) throw new Error(`${id}: unknown relationship endpoint`);
      for (let index = 1; index < edge.points.length; index++) {
        const a = edge.points[index - 1], b = edge.points[index];
        if (a[0] !== b[0] && a[1] !== b[1]) throw new Error(`${id}: non-orthogonal connector`);
      }
    }
    for (const index of spec.playback) if (!spec.edges[index]) throw new Error(`${id}: unknown playback edge`);
    // A sequence follows ordered messages; the other views trace a directed path.
    if (spec.type !== "sequence") for (let index = 1; index < spec.playback.length; index++) {
      if (spec.edges[spec.playback[index - 1]].to !== spec.edges[spec.playback[index]].from) throw new Error(`${id}: disconnected example path`);
    }
    for (const config of [casebookConfig, casebookChinese]) {
      const copy = config.projects[id].architecture;
      for (const node of ids) if (!copy.nodes[node]) throw new Error(`${id}: missing translated node ${node}`);
      for (const edge of spec.edges) if (edge.label && !copy.labels[edge.label]) throw new Error(`${id}: missing translated relationship ${edge.label}`);
    }
  }
  const css = await readFile(new URL("../app/globals.css", import.meta.url), "utf8");
  const tokens = css.slice(css.indexOf(":root {"), css.indexOf("* { box-sizing"));
  const primitives = css.slice(css.indexOf("/* Project diagrams share"), css.indexOf("/* End project diagram primitives. */"));
  const escape = text => text.replace(/[&<>"']/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]);
  const sections = [["en", casebookConfig], ["zh-CN", casebookChinese]].map(([lang, config]) => {
    const figures = featuredProjectIds.map(id => {
      const copy = config.projects[id];
      const title = projects.find(project => project.id === id).name;
      const diagram = renderToStaticMarkup(createElement(ArchitectureView, { projectId: id, copy: copy.architecture, hint: config.labels.diagramHint, playback: config.labels.playback }));
      // Each separately rendered React root starts the useId counter anew.
      const uniqueDiagram = diagram.replaceAll(`${id}-R`, `${id}-${lang}-R`).replaceAll('href="/project-architectures.html#', 'href="#')
        .replace(/(<a class="diagram-overview-link" href="[^"]+") target="_blank" rel="noreferrer"/g, '$1');
      return `<article id="${id}-${lang}"><h2>${escape(title)}</h2><p class="focus"><strong>${escape(copy.focus)}</strong> ${escape(copy.integration)}</p><h3>${escape(copy.architecture.title)}</h3><p>${escape(copy.architecture.description)}</p>${uniqueDiagram}</article>`;
    }).join("\n");
    return `<section lang="${lang}"><h2 class="language-title">${lang === "en" ? "Engineering architectures" : "工程架构"}</h2><div class="atlas-grid">${figures}</div></section>`;
  }).join("\n");
  const html = `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>David Wu — Project architectures</title>
<link href="https://fonts.googleapis.com/css2?family=Kantumruy+Pro:wght@400;500;600;700&amp;family=Noto+Sans+SC:wght@400;500;600&amp;display=swap" rel="stylesheet">
<style>
${tokens}
*{box-sizing:border-box}body{margin:0;background:var(--canvas);color:var(--ink);font:16px/1.65 var(--font-sans)}main{max-width:1440px;margin:auto;padding:40px 24px}h1{font-size:40px;line-height:1.15;margin:0 0 16px}h2{font-size:26px;line-height:1.25;margin:0 0 16px}h3{font-size:20px;margin:24px 0 8px}p{margin:0 0 16px;max-width:72ch}a{color:var(--accent-ink)}.language-title{margin-top:56px;padding-top:24px;border-top:1px solid var(--line)}.atlas-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:48px}article{min-width:0;container:workflow / inline-size}.focus{color:var(--ink-70)}.focus strong{color:var(--accent-ink)}:focus-visible{outline:2px solid var(--accent-ink);outline-offset:4px}
${primitives}
@media(max-width:800px){main{padding:24px 20px}.atlas-grid{grid-template-columns:minmax(0,1fr)}h1{font-size:32px}}
@media(prefers-color-scheme:dark){:root{color-scheme:dark;--canvas:#14202f;--surface:#1a2b40;--surface-sunk:#233b56;--ink:#eaf3ff;--ink-70:#cbdced;--muted:#afc5df;--accent-ink:#92bdff;--line:#3c5674;--line-strong:#6586ac;--flow-line:#82a9dc}}
</style></head><body><main><h1>AI in engineering workflows and software</h1><p>Explore how each project connects models to data, tools, and the people using them. Play an example path or read the complete diagram at your own pace. The diagrams describe implemented capabilities; deployment and production acceptance are separate.</p>${sections}</main><script>document.querySelectorAll('[data-project-diagram]').forEach(figure => (${mountDiagramPlayback.toString()})(figure));</script></body></html>`;
  await writeFile(new URL("../public/project-architectures.html", import.meta.url), html);
  console.log("Generated standalone bilingual architecture atlas from the casebook sources.");
} finally {
  await server.close();
}
