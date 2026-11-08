import type { CaseStudyId } from "./casebook.config";

export type DiagramNode = {
  id: string; x: number; y: number; w: number; h: number;
  kind?: "focal" | "store" | "context" | "decision" | "terminal";
};
type Point = readonly [number, number];
export type DiagramEdge = {
  from: string; to: string;
  points: readonly Point[];
  dashed?: boolean;
  label?: string;
  labelAt?: Point;
  labelSide?: "right";
};
type DiagramSpec = {
  type: "architecture" | "flowchart" | "swimlane" | "sequence";
  width: number; height: number;
  nodes: readonly DiagramNode[];
  edges: readonly DiagramEdge[];
  playback: readonly number[];
  boundary?: { x: number; y: number; w: number; h: number };
};

// Each drawing owns its topology. Only the visual primitives are shared.
// Coordinates use a 4px grid and a content-sized (fit) canvas.
export const projectDiagrams: Record<CaseStudyId, DiagramSpec> = {
  vsda: {
    type: "architecture", width: 560, height: 700,
    playback: [0, 2, 5],
    boundary: { x: 4, y: 144, w: 552, h: 484 },
    nodes: [
      { id: "chat", x: 16, y: 24, w: 240, h: 88 },
      { id: "schedule", x: 304, y: 24, w: 240, h: 88 },
      { id: "supervisor", x: 136, y: 176, w: 288, h: 96, kind: "focal" },
      { id: "retrieval", x: 16, y: 352, w: 160, h: 120 },
      { id: "analysis", x: 200, y: 352, w: 160, h: 120 },
      { id: "tools", x: 384, y: 352, w: 160, h: 120 },
      { id: "citations", x: 16, y: 528, w: 160, h: 96 },
      { id: "artifacts", x: 200, y: 528, w: 160, h: 96 },
      { id: "mutations", x: 384, y: 528, w: 160, h: 96 },
    ],
    edges: [
      { from: "chat", to: "supervisor", points: [[136,112],[136,136],[232,136],[232,176]] },
      { from: "schedule", to: "supervisor", points: [[424,112],[424,124],[328,124],[328,176]] },
      { from: "supervisor", to: "retrieval", points: [[208,272],[208,312],[96,312],[96,352]] },
      { from: "supervisor", to: "analysis", points: [[280,272],[280,352]] },
      { from: "supervisor", to: "tools", points: [[352,272],[352,300],[464,300],[464,352]] },
      { from: "retrieval", to: "citations", points: [[96,472],[96,528]] },
      { from: "analysis", to: "artifacts", points: [[280,472],[280,528]] },
      { from: "tools", to: "mutations", points: [[464,472],[464,528]] },
    ],
  },
  release: {
    type: "flowchart", width: 560, height: 632,
    playback: [0, 1, 6, 7],
    nodes: [
      { id: "email", x: 16, y: 24, w: 240, h: 80, kind: "terminal" },
      { id: "extract", x: 16, y: 160, w: 240, h: 96, kind: "focal" },
      { id: "store", x: 16, y: 312, w: 240, h: 104, kind: "store" },
      { id: "retry", x: 352, y: 160, w: 192, h: 96, kind: "context" },
      { id: "reviewer", x: 352, y: 312, w: 192, h: 104 },
      { id: "jenkins", x: 16, y: 480, w: 240, h: 88 },
      { id: "summary", x: 352, y: 480, w: 192, h: 88, kind: "terminal" },
    ],
    edges: [
      { from: "email", to: "extract", points: [[136,104],[136,160]] },
      { from: "extract", to: "store", points: [[136,256],[136,312]] },
      { from: "extract", to: "retry", points: [[256,192],[352,192]], dashed: true, label: "failed", labelAt: [304,168] },
      { from: "retry", to: "email", points: [[448,160],[448,64],[256,64]], dashed: true, label: "retry", labelAt: [352,40] },
      { from: "store", to: "retry", points: [[256,336],[288,336],[288,224],[352,224]], dashed: true, label: "saveFailed", labelAt: [288,288], labelSide: "right" },
      { from: "store", to: "reviewer", points: [[256,384],[352,384]], dashed: true, label: "read", labelAt: [304,360] },
      { from: "store", to: "jenkins", points: [[136,416],[136,480]] },
      { from: "jenkins", to: "summary", points: [[256,524],[352,524]] },
    ],
  },
  resume: {
    type: "flowchart", width: 560, height: 768,
    playback: [0, 3, 4, 7, 8],
    nodes: [
      { id: "job", x: 16, y: 24, w: 240, h: 80 },
      { id: "facts", x: 320, y: 24, w: 224, h: 80 },
      { id: "tailor", x: 16, y: 168, w: 240, h: 88 },
      { id: "evidence", x: 320, y: 168, w: 224, h: 104, kind: "context" },
      { id: "draft", x: 16, y: 312, w: 240, h: 80 },
      { id: "checks", x: 16, y: 448, w: 240, h: 112, kind: "decision" },
      { id: "revise", x: 352, y: 456, w: 192, h: 96 },
      { id: "pdf", x: 16, y: 616, w: 240, h: 88, kind: "terminal" },
      { id: "visual", x: 352, y: 616, w: 192, h: 88, kind: "terminal" },
    ],
    edges: [
      { from: "job", to: "tailor", points: [[136,104],[136,168]] },
      { from: "facts", to: "evidence", points: [[432,104],[432,168]], dashed: true },
      { from: "evidence", to: "tailor", points: [[320,208],[256,208]], dashed: true },
      { from: "tailor", to: "draft", points: [[136,256],[136,312]] },
      { from: "draft", to: "checks", points: [[136,392],[136,448]] },
      { from: "evidence", to: "checks", points: [[432,272],[432,312],[288,312],[288,476],[196,476]], dashed: true },
      { from: "checks", to: "revise", points: [[256,504],[352,504]], label: "flag", labelAt: [304,516] },
      { from: "checks", to: "pdf", points: [[136,560],[136,616]], label: "pass", labelAt: [136,588], labelSide: "right" },
      { from: "pdf", to: "visual", points: [[256,660],[352,660]] },
    ],
  },
  requirements: {
    type: "swimlane", width: 560, height: 664,
    playback: [0, 1, 2, 5],
    nodes: [
      { id: "packet", x: 112, y: 40, w: 208, h: 88 },
      { id: "author", x: 112, y: 184, w: 208, h: 96 },
      { id: "review", x: 112, y: 336, w: 208, h: 96, kind: "focal" },
      { id: "feedback", x: 416, y: 336, w: 128, h: 96 },
      { id: "host", x: 112, y: 496, w: 208, h: 104 },
      { id: "publish", x: 416, y: 496, w: 128, h: 104 },
    ],
    edges: [
      { from: "packet", to: "author", points: [[216,128],[216,184]] },
      { from: "author", to: "review", points: [[216,280],[216,336]] },
      { from: "review", to: "host", points: [[216,432],[216,496]], label: "approve", labelAt: [216,464], labelSide: "right" },
      { from: "review", to: "feedback", points: [[320,384],[416,384]], label: "revise", labelAt: [368,360] },
      { from: "feedback", to: "author", points: [[480,336],[480,232],[320,232]], dashed: true },
      { from: "host", to: "publish", points: [[320,548],[416,548]], label: "publish", labelAt: [368,524] },
    ],
  },
  enterprise: {
    type: "architecture", width: 560, height: 628,
    playback: [0, 3, 4],
    boundary: { x: 4, y: 144, w: 552, h: 268 },
    nodes: [
      { id: "jira", x: 16, y: 24, w: 160, h: 88 },
      { id: "polarion", x: 200, y: 24, w: 160, h: 88 },
      { id: "confluence", x: 384, y: 24, w: 160, h: 88 },
      { id: "clients", x: 16, y: 176, w: 528, h: 88, kind: "focal" },
      { id: "execution", x: 16, y: 320, w: 528, h: 80 },
      { id: "agents", x: 16, y: 464, w: 256, h: 104 },
      { id: "exports", x: 320, y: 464, w: 224, h: 104 },
    ],
    edges: [
      { from: "jira", to: "clients", points: [[96,112],[96,176]] },
      { from: "polarion", to: "clients", points: [[280,112],[280,176]] },
      { from: "confluence", to: "clients", points: [[464,112],[464,176]] },
      { from: "clients", to: "execution", points: [[280,264],[280,320]] },
      { from: "execution", to: "agents", points: [[192,400],[192,432],[144,432],[144,464]] },
      { from: "execution", to: "exports", points: [[368,400],[368,420],[432,420],[432,464]] },
    ],
  },
  food: {
    type: "sequence", width: 560, height: 768,
    playback: [0, 1, 2, 3, 4, 5, 6, 7],
    nodes: [
      { id: "member", x: 16, y: 24, w: 160, h: 88 },
      { id: "assistant", x: 200, y: 24, w: 160, h: 88, kind: "focal" },
      { id: "pantry", x: 384, y: 24, w: 160, h: 88, kind: "store" },
    ],
    edges: [
      { from: "member", to: "assistant", points: [[96,168],[280,168]], label: "receipt", labelAt: [188,144] },
      { from: "assistant", to: "pantry", points: [[280,232],[464,232]], label: "save", labelAt: [372,208] },
      { from: "assistant", to: "member", points: [[280,296],[96,296]], dashed: true, label: "receiptResult", labelAt: [188,272] },
      { from: "member", to: "assistant", points: [[96,400],[280,400]], label: "batch", labelAt: [188,376] },
      { from: "assistant", to: "member", points: [[280,464],[96,464]], dashed: true, label: "proposal", labelAt: [188,440] },
      { from: "member", to: "assistant", points: [[96,528],[280,528]], label: "confirm", labelAt: [188,504] },
      { from: "assistant", to: "pantry", points: [[280,592],[464,592]], label: "write", labelAt: [372,568] },
      { from: "assistant", to: "member", points: [[280,656],[96,656]], dashed: true, label: "response", labelAt: [188,632] },
    ],
  },
};
