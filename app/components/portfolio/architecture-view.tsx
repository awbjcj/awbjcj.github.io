"use client";

import { useEffect, useId, useRef } from "react";
import type { ArchitectureCopy, CaseStudyId, PlaybackCopy } from "../../content/casebook.config";
import { projectDiagrams, type DiagramNode } from "../../content/project-diagrams";
import { mountDiagramPlayback } from "../../lib/diagram-playback.mjs";

// Use a conservative width budget, including full-width CJK characters.
// Text stays at reading size; the canvas scrolls locally instead of shrinking.
function textWidth(text: string, size: number) {
  return Array.from(text).reduce((width, char) => width + ((char.codePointAt(0) ?? 0) > 255 ? size : size * .54), 0);
}

function wrap(text: string, width: number, size: number) {
  const words = text.match(/[\u3400-\u9fff]|[^\s\u3400-\u9fff]+\s*|\s+/gu) ?? [];
  const lines: string[] = [];
  let line = "";
  for (const word of words) {
    if (!line && !word.trim()) continue;
    if (line && textWidth(line + word, size) > width) {
      lines.push(line.trim());
      line = word.trimStart();
    } else {
      line += word;
    }
  }
  if (line) lines.push(line.trim());
  return lines;
}

// Round the corners of an authored orthogonal route without changing its ports.
function route(points: readonly (readonly [number, number])[]) {
  let path = `M${points[0].join(",")}`;
  for (let index = 1; index < points.length - 1; index++) {
    const [before, corner, after] = [points[index - 1], points[index], points[index + 1]];
    const radius = Math.min(8, Math.hypot(corner[0] - before[0], corner[1] - before[1]) / 2, Math.hypot(after[0] - corner[0], after[1] - corner[1]) / 2);
    const entry = corner.map((coordinate, axis) => coordinate - Math.sign(coordinate - before[axis]) * radius);
    const leave = corner.map((coordinate, axis) => coordinate + Math.sign(after[axis] - coordinate) * radius);
    path += ` L${entry.join(",")} Q${corner.join(",")} ${leave.join(",")}`;
  }
  return path + ` L${points[points.length - 1].join(",")}`;
}

function Node({ node, copy }: { node: DiagramNode; copy: ArchitectureCopy["nodes"][string] }) {
  const { x, y, w, h, kind } = node;
  const titles = wrap(copy.title, w - 32, 16);
  const details = wrap(copy.detail, w - 32, 15);
  const textHeight = titles.length * 20 + 8 + details.length * 19;
  const start = y + (h - textHeight) / 2 + 16;
  return <g className={`diagram-node diagram-node--${kind ?? "step"}`} data-node={node.id}>
    {kind === "decision" ? <>
      <polygon points={`${x + w / 2},${y} ${x + w},${y + h / 2} ${x + w / 2},${y + h} ${x},${y + h / 2}`} />
      <text x={x + w / 2} y={y + h / 2 + 5} textAnchor="middle" className="diagram-node-title">{copy.title}</text>
    </> : <>
      <rect x={x} y={y} width={w} height={h} rx={kind === "terminal" ? 20 : 6} />
      {kind === "store" ? <path className="diagram-store-rule" d={`M${x},${y + 12} Q${x + w / 2},${y + 28} ${x + w},${y + 12}`} /> : null}
      <text x={x + 16} y={start} className="diagram-node-title">{titles.map((line, index) => <tspan x={x + 16} dy={index ? 20 : 0} key={index}>{line}</tspan>)}</text>
      <text x={x + 16} y={start + titles.length * 20 + 6} className="diagram-node-detail">{details.map((line, index) => <tspan x={x + 16} dy={index ? 19 : 0} key={index}>{line}</tspan>)}</text>
    </>}
  </g>;
}

export function ArchitectureView({ projectId, copy, hint, playback }: { projectId: CaseStudyId; copy: ArchitectureCopy; hint: string; playback: PlaybackCopy }) {
  const instance = useId().replace(/[^a-zA-Z0-9]/g, "");
  const prefix = `${projectId}-${instance}`;
  const spec = projectDiagrams[projectId];
  const figure = useRef<HTMLElement>(null);
  useEffect(() => {
    if (figure.current) return mountDiagramPlayback(figure.current);
  }, [projectId, playback]);

  return <figure ref={figure} className="architecture-figure" data-project-diagram={projectId} data-diagram-type={spec.type} data-playback-copy={JSON.stringify(playback)} data-playback-state="ready">
    <div className="diagram-toolbar">
      <div className="diagram-playback-actions"><button className="button button-outline" type="button" data-diagram-play disabled>{playback.play}</button><button className="button button-outline" type="button" data-diagram-replay disabled>{playback.replay}</button></div>
      <a className="diagram-overview-link" href={`/project-architectures.html#${projectId}-${/\p{Script=Han}/u.test(copy.title) ? "zh-CN" : "en"}`} target="_blank" rel="noreferrer">{playback.overview}</a>
    </div>
    <p className="diagram-playback-status" data-diagram-status role="status" aria-live="polite">{playback.ready}</p>
    <p className="diagram-hint">{hint}</p>
    {/* eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex -- A scrollable region needs keyboard focus so arrow keys can pan it. */}
    <div className="diagram-scroll" role="region" aria-label={copy.title} tabIndex={0}>
      <svg className="project-diagram" viewBox={`0 0 ${spec.width} ${spec.height}`} style={{ width: `${spec.width / 16}em`, minWidth: `${spec.width / 16}em` }} role="img" aria-labelledby={`${prefix}-title ${prefix}-desc`}>
        <title id={`${prefix}-title`}>{copy.title}</title>
        <desc id={`${prefix}-desc`}>{copy.description}</desc>
        <defs>
          <marker id={`${prefix}-arrow`} markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6 Z" className="diagram-arrowhead" /></marker>
        </defs>
        {spec.boundary ? <rect className="diagram-boundary" x={spec.boundary.x} y={spec.boundary.y} width={spec.boundary.w} height={spec.boundary.h} rx="8" /> : null}
        {spec.type === "swimlane" ? [16,160,312,464,616].map((y, index) => <g key={y}>
          <line className="diagram-lane-rule" x1="4" x2="556" y1={y} y2={y} />
          {copy.lanes?.[index] ? <text x="12" y={y + 48} className="diagram-lane-label">{copy.lanes[index]}</text> : null}
        </g>) : null}
        {spec.type === "sequence" ? <>
          {[96,280,464].map(x => <line key={x} className="diagram-lifeline" x1={x} x2={x} y1="112" y2="680" />)}
          <text x="16" y="136" className="diagram-lane-label">{copy.labels.receiptSection}</text>
          <line className="diagram-lane-rule" x1="16" x2="544" y1="336" y2="336" />
          <text x="16" y="360" className="diagram-lane-label">{copy.labels.batchSection}</text>
        </> : null}
        {spec.edges.map((edge, index) => <path key={index} className={`diagram-edge${edge.dashed ? " diagram-edge--context" : ""}`} data-from={edge.from} data-to={edge.to} data-playback-order={spec.playback.includes(index) ? spec.playback.indexOf(index) : undefined} d={route(edge.points)} markerEnd={`url(#${prefix}-arrow)`} />)}
        {spec.edges.map((edge, index) => {
          if (!edge.label || !edge.labelAt) return null;
          const label = copy.labels[edge.label];
          const [anchorX, y] = edge.labelAt;
          const width = Math.ceil((textWidth(label, 14) + 16) / 4) * 4;
          const x = edge.labelSide === "right" ? anchorX + 8 + width / 2 : anchorX;
          const offsetY = edge.labelSide === "right" ? 0 : 8;
          return <g className="diagram-edge-label" key={index}>
            <rect x={x - width / 2} y={y - 12 + offsetY} width={width} height="20" />
            <text x={x} y={y + 2 + offsetY} textAnchor="middle">{label}</text>
          </g>;
        })}
        {spec.nodes.map(node => <Node key={node.id} node={node} copy={copy.nodes[node.id]} />)}
        {spec.type === "sequence" ? <text x="16" y="700" className="diagram-control-note">{copy.labels.controls}</text> : null}
        <circle r="4" cx="0" cy="0" className="diagram-motion-token" data-diagram-token aria-hidden="true" />
        <g className="diagram-legend">
          <line className="diagram-lane-rule" x1="16" x2="544" y1={spec.height - 44} y2={spec.height - 44} />
          <line className="diagram-edge" x1="16" x2="44" y1={spec.height - 20} y2={spec.height - 20} />
          <text x="56" y={spec.height - 16}>{copy.legend.flow}</text>
          <line className="diagram-edge diagram-edge--context" x1="280" x2="308" y1={spec.height - 20} y2={spec.height - 20} />
          <text x="320" y={spec.height - 16}>{copy.legend.context}</text>
        </g>
      </svg>
    </div>
    <figcaption className="diagram-note">{copy.note}</figcaption>
  </figure>;
}
