---
name: "David Wu — Engineering casebook"
description: "A cool, precise document system for engineering work."
colors:
  accent-ink: "#0759ca"
  accent-muted: "#4b70af"
  flow-line: "#3d6ba9"
  action-hover: "#0345a4"
  action-on-fill: "#fff"
  pass-bg: "#e2f2ee"
  pass-ink: "#205d54"
  review-bg: "#f5e9ef"
  review-ink: "#803957"
  canvas: "#f0f7f8"
  surface: "#f7fbfe"
  surface-sunk: "#e4edf8"
  ink: "#18263a"
  ink-70: "#2b3c56"
  muted: "#4c607a"
  line: "#b2c6df"
  line-strong: "#7593bc"
  accent-ink-dark: "#92bdff"
  flow-line-dark: "#82a9dc"
  pass-bg-dark: "#203e3a"
  pass-ink-dark: "#b0e0d3"
  review-bg-dark: "#432d3b"
  review-ink-dark: "#e6b4c7"
  canvas-dark: "#14202f"
  surface-dark: "#1a2b40"
  surface-sunk-dark: "#233b56"
  ink-dark: "#eaf3ff"
  ink-70-dark: "#cbdced"
  muted-dark: "#afc5df"
  line-dark: "#3c5674"
  line-strong-dark: "#6586ac"
typography:
  display:
    fontFamily: '"Kantumruy Pro", "Noto Sans SC", "PingFang SC", "Microsoft YaHei UI", "Microsoft YaHei", sans-serif'
    fontSize: "var(--text-display)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-.02em"
  headline:
    fontFamily: '"Kantumruy Pro", "Noto Sans SC", "PingFang SC", "Microsoft YaHei UI", "Microsoft YaHei", sans-serif'
    fontSize: "var(--text-section)"
    fontWeight: 700
    lineHeight: 1.12
    letterSpacing: "-.02em"
  title:
    fontFamily: '"Kantumruy Pro", "Noto Sans SC", "PingFang SC", "Microsoft YaHei UI", "Microsoft YaHei", sans-serif'
    fontSize: "var(--text-title)"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "-.02em"
  body:
    fontFamily: '"Kantumruy Pro", "Noto Sans SC", "PingFang SC", "Microsoft YaHei UI", "Microsoft YaHei", sans-serif'
    fontSize: "var(--text-body)"
    fontWeight: 400
    lineHeight: 1.75
  body-long:
    fontFamily: '"Kantumruy Pro", "Noto Sans SC", "PingFang SC", "Microsoft YaHei UI", "Microsoft YaHei", sans-serif'
    fontSize: "var(--text-body)"
    fontWeight: 400
    lineHeight: 1.75
  label:
    fontFamily: '"Kantumruy Pro", "Noto Sans SC", "PingFang SC", "Microsoft YaHei UI", "Microsoft YaHei", sans-serif'
    fontSize: "var(--text-caption)"
    fontWeight: 400
    lineHeight: 1.55
  button:
    fontFamily: '"Kantumruy Pro", "Noto Sans SC", "PingFang SC", "Microsoft YaHei UI", "Microsoft YaHei", sans-serif'
    fontSize: "var(--text-small)"
    fontWeight: 500
    lineHeight: 1.4
  navigation:
    fontFamily: '"Kantumruy Pro", "Noto Sans SC", "PingFang SC", "Microsoft YaHei UI", "Microsoft YaHei", sans-serif'
    fontSize: "var(--text-body)"
    fontWeight: 500
    lineHeight: 1.55
  technical:
    fontFamily: '"JetBrains Mono", ui-monospace, monospace'
    fontSize: "var(--text-lead)"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: ".01em"
rounded:
  step: "3px"
  tag: "4px"
  control: "5px"
  node: "6px"
  enclosure: "12px"
spacing:
  "8": "8px"
  "12": "12px"
  "16": "16px"
  "20": "20px"
  "24": "24px"
  "28": "28px"
  "32": "32px"
  "42": "42px"
  "76": "76px"
components:
  button-primary:
    backgroundColor: "{colors.accent-ink}"
    textColor: "{colors.action-on-fill}"
    typography: "{typography.button}"
    rounded: "{rounded.control}"
    padding: "8px 12px"
  button-primary-hover:
    backgroundColor: "{colors.action-hover}"
    textColor: "{colors.action-on-fill}"
  button-outline:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.control}"
    padding: "8px 12px"
  button-outline-hover:
    backgroundColor: "{colors.surface-sunk}"
  trial-input:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "9px 12px"
    width: "100%"
  navigation-link:
    textColor: "{colors.ink}"
    typography: "{typography.navigation}"
  navigation-link-selected:
    textColor: "{colors.accent-ink}"
  technology-tag:
    backgroundColor: "{colors.surface-sunk}"
    textColor: "{colors.ink}"
    rounded: "{rounded.tag}"
    padding: "1px 6px"
  project-row:
    textColor: "{colors.ink}"
    padding: "32px 0"
  architecture-node:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.node}"
    padding: "16px"
  architecture-processor:
    backgroundColor: "{colors.surface-sunk}"
  route-pass:
    backgroundColor: "{colors.pass-bg}"
    textColor: "{colors.pass-ink}"
    rounded: "{rounded.tag}"
    padding: "16px"
  route-review:
    backgroundColor: "{colors.review-bg}"
    textColor: "{colors.review-ink}"
    rounded: "{rounded.tag}"
    padding: "16px"
  project-tab-selected:
    textColor: "{colors.accent-ink}"
  command-dialog:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    rounded: "{rounded.enclosure}"
    padding: "24px"
    width: "min(620px, calc(100vw - 32px))"
---

# Design System: David Wu

## Overview

**Creative North Star: "Engineering casebook"**

A precise technical document, built from cool paper, graphite type, engineering blue, and measured line work. Strong sans headings establish hierarchy; readable prose supplies detail. Open sheets, aligned columns, and rules carry dense information without adding simulated application chrome.

The system makes structure visible: a workflow has numbered steps, an architecture has connected nodes, and a source or destination has a clear link. Authored line geometry and an approved architectural drawing give it a recognizable material character. English and Simplified Chinese share the hierarchy, and light and dark themes preserve the same roles.

**Key Characteristics:**

- Cool document fields with restrained engineering-blue emphasis.
- Bold sans hierarchy and monospace for meaningful technical notation.
- Open ruled rows and aligned reading tracks.
- Compact, lightly rounded controls and explicit diagram connections.
- Visible keyboard focus and motion that respects reduced-motion preferences.

This is a scan of the implemented system. `app/globals.css` owns the values; component structure lives in `app/components/portfolio/`. Surface composition and page-specific decisions remain in `.impeccable/surfaces/app-page-tsx.md`.

## Colors

Blue is the identifying accent; cool neutral fields and functional green/rose states support it. The frontmatter is normative. Unsuffixed names are the light defaults; a `-dark` entry records the same CSS property's dark-theme value. Runtime components continue to use the original unsuffixed custom property.

### Primary

- **Engineering blue** (`accent-ink` / `accent-ink-dark`): links, selected navigation, focus outlines, diagram icons, and selected markers.
- **Drafting blue** (`accent-muted`): supporting subtitles in light mode. Those subtitles use `muted` in dark mode; `accent-muted` itself has no dark override.
- **Connection blue** (`flow-line` / `flow-line-dark`): node boundaries, connectors, arrowheads, and dashed process enclosures.
- **Action blue**: primary controls use the light `accent-ink` fill and `action-on-fill` text in both themes; hover uses `action-hover`. This is an intentional literal-color treatment in the source, distinct from themed link text.

### Secondary

- **Pass green** (`pass-bg`, `pass-ink`, and their dark counterparts): a confirmed or passing diagram route, always accompanied by a text label and an authored check icon. These are functional state colors, not a second brand accent.

### Tertiary

- **Review rose** (`review-bg`, `review-ink`, and their dark counterparts): a flagged or review route. The same foreground color marks user-invalid registration fields. Meaning remains explicit in text and icon shape.

### Neutral

- **Cool paper** (`canvas` / `canvas-dark`): the continuous document ground.
- **Raised paper** (`surface` / `surface-dark`): control and diagram-node interiors, separated by a stroke rather than a shadow.
- **Inset blue-gray** (`surface-sunk` / `surface-sunk-dark`): technology tags, process/check nodes, and selected or hovered utility surfaces.
- **Graphite** (`ink` / `ink-dark`): primary text. **Reading ink** (`ink-70` / `ink-70-dark`) supports longer explanations. **Annotation ink** (`muted` / `muted-dark`) serves dates, field hints, and secondary metadata.
- **Measured rules** (`line` / `line-dark`): section and row divisions. **Structural rules** (`line-strong` / `line-strong-dark`) define controls, stronger separators, and diagram-route boundaries.

**The Role-Preserving Theme Rule.** Switch the semantic field, ink, rule, and state pairs together. Keep primary action fills blue with white text; do not substitute the dark link color as their fill.

The sidecar's eight-step tonal ramps are synthesized panel previews in OKLCH. They are not additional implementation tokens or permission to replace the canonical source colors.

## Typography

**Display and Body Font:** Kantumruy Pro, with Noto Sans SC, PingFang SC, Microsoft YaHei UI, Microsoft YaHei, and sans-serif fallbacks. The local font file covers Latin; Chinese uses the available fallback stack.

**Label/Mono Font:** JetBrains Mono, with ui-monospace and monospace fallbacks. Its local face is weight (500).

The character is direct and technical without becoming a terminal imitation. Headings use weight (700) and close tracking; body text remains regular. There is no mathematical type-scale ratio in the implementation.

### Hierarchy

- **Display:** the large work title uses the frontmatter's proportional desktop formula, with a narrow-layout size (38px) at (1100px) and below, then (32px) at (700px) and below. The formula uses `--u: calc(100vw / 1672)`.
- **Headline:** fluid section headings use the recorded clamp and become (30px) on mobile. Their line height stays compact.
- **Title:** project and experience row headings use the recorded fluid role, becoming (23px) on mobile. Supporting subheads commonly sit at (18–24px), according to their level.
- **Body:** the base role is the default reading style; long project descriptions use `body-long`, with a maximum line length (72ch). The reading size stays (17px) on mobile. Section descriptions use a shorter measure (65ch).
- **Label:** regular sentence-case labels support fields and metadata. Technology tags are a separate compact treatment, not a replacement for prose.
- **Technical:** meaningful technical wording and keyboard shortcuts use mono. The technical masthead line switches to the sans stack on mobile; ordinary descriptions and headings do not become monospace.

**The Meaningful Mono Rule.** Use mono for technical notation and key commands, while preserving the sans reading hierarchy for titles, explanation, and navigation.

## Layout

The reusable spatial grammar is an open document: align related content in reading tracks, separate groups with thin rules, and let whitespace distinguish sections. Long rows use asymmetric heading/detail columns; paired groups use equal tracks. These are content structures, not a grid of raised cards.

The CSS mixes proportional desktop measurements (`--u`) with fixed reading and control dimensions. The common gutter is `clamp(20px, 2.8vw, 64px)`, changing to (28px) at (1100px) and (20px) at (700px). Common gaps are the frontmatter's recorded spacing steps; row gaps use (42px), and ordinary section padding uses (76px) before narrower overrides.

At the compact desktop band (1101–1450px), detail typography and selected column gaps tighten. At (1100px) and below, the document relaxes into fewer tracks, controls gain minimum height (44px), and explanatory text gains more leading. Project diagrams retain their authored geometry in a local horizontal scroll region when the available column is narrower than their font-relative canvas. At (700px) and below, content rows, contact channels, and paired product groups become a single reading column; long titles wrap naturally, and controls remain visibly labeled. Page-specific rail proportions and first-viewport assembly belong in the surface brief.

When tracks stack, preserve their source order and all labels and connectors. A narrow screen changes the geometry, not the information hierarchy.

## Elevation & Depth

The implementation uses no box shadows. Depth comes from the three themed fields, precise borders, dashed process enclosures, and spacing. The quick-navigation dialog uses a translucent backdrop (`rgb(7 20 40 / .5)`) with a stroked paper surface; it does not introduce a floating-card shadow vocabulary.

**The Flat Document Rule.** Keep content surfaces flat. Express grouping through field tone, line weight, alignment, and space rather than adding ambient lift.

## Shapes

Controls have gently softened corners; document rows stay open. The small radius family distinguishes workflow indices, tags, controls, and diagram nodes. The larger enclosure radius belongs to diagram groups and the command dialog. Keep the source's one-pixel strokes and compact authored SVG icons; typical technical icons are (20px), with action icons (18px) and route-state icons (13px).

The illustration and drafting geometry are material accents. The geometry includes rules, arcs, connector arrowheads, and a dashed review boundary. These have distinct structural roles; they are not interchangeable decorations for every container.

## Components

### Buttons

Compact, legible document actions. Primary and outline variants share the control radius, an inline icon gap (8px), and padding (5px 12px). Default minimum height is (44px); it becomes (44px) in narrow layouts, and contact/résumé actions already use (44px). Primary fills remain blue in both themes. Outline actions use the themed surface and strong rule. Hover changes field/border colors over (160ms) with `cubic-bezier(.22, 1, .36, 1)`. Keyboard focus uses the global accent outline (2px), offset (4px). On fine pointers, pressing a button scales it to 98%; disabled controls are muted.

### Inputs / Fields

Trial fields use a visible label, themed surface and ink, strong stroke, control radius, padding (9px 12px), and minimum height (44px). Their input text inherits the supporting role (16px). Placeholder text uses annotation ink at full opacity. User-invalid fields use the review foreground on border and a second outline (1px), offset (1px). Search fields use the body role, minimum height (48px), and padding (12px). Keep focus visible; the source does not add an input hover decoration or a custom disabled state.

### Navigation

Section navigation is plain text with generous hit areas. Hover turns the link engineering blue and underlines it. The selected treatment adds an underline (2px), offset (9px), without a filled tab shell. Project tabs use a small square marker (9px), blue selected text, and a filled selected square; the selected tab hides its supporting detail. Their keyboard behavior supports arrows, Home, and End. On mobile, the project tabs become a labeled native select with minimum height (48px).

### Chips

Technology tags are static, compact field-tinted labels: tag radius, padding (1px 6px), and no border. They wrap as a group, and become slightly roomier on mobile (3px 7px). Pass/review route labels are separate functional chips with strokes, text, and icons. Neither tag family is styled as an interactive filter.

### Cards / Containers

The project catalog's “cards” are open ruled rows: no enclosing rectangle, radius, fill, or shadow. A title/metadata track sits beside a longer description with tags and links; row padding is (32px) vertically, becoming (28px) on mobile. Hosted-product groups are similarly open, divided by a rule between groups. Preserve these flat container distinctions when adding content.

### Architecture and Workflow

Each project owns its authored topology, while the SVG renderer shares node, connector, label, and legend primitives. Ordinary nodes use the node radius, a structural-rule stroke, a strong short title, and smaller detail text. Focal nodes and decision diamonds use engineering-blue outlines and the inset field. Stores add an internal curved rule; context nodes use a dashed outline. Numbered narrative workflow indices remain outside the diagram and use tabular numerals. Arrowed connectors use connection blue; solid and dashed relationships have meanings stated in each project's legend. Node and connector strokes are (1.2px), with focal outlines (1.6px).

Project selection is instant, including keyboard navigation. Readers can explicitly play an example path, pause, resume, or replay it. A decorative token follows authored relationships once, at (760ms) per relationship, using transform and opacity. Complete nodes and base routes remain visible. Page hiding pauses playback; reduced motion cancels it and disables the controls. Initial rendering and printing are static. The React view and standalone atlas share one scoped playback controller.

The diagrams use content-fit canvases sized in `em` from the body reading token. At the default browser setting their minimum width is (595px). Rendered node titles match body text (17px), details use approximately (16px), and edge labels and legends use approximately (15px). The complete canvas grows with browser font preferences; authored wrapping keeps English and Simplified Chinese inside the nodes. Narrow columns keep the topology intact inside a labeled, focusable region that supports local keyboard panning. A visible hint explains scrolling when the diagram column is narrow. SVG title, description, and caption supply context; print fits the complete diagram to the available width. Topology ownership and the current project stories belong in the surface brief and content files.

### Quick Navigation

A stroked paper dialog contains a heading, close control, search field, grouped result rows, and keyboard hint. It uses the enclosure radius and the themed canvas. The selected result has the inset field and accent text. Its width is the recorded container token; its maximum height is `min(680px, calc(100dvh - 48px))`. At mobile widths, padding becomes (18px). This component owns the backdrop treatment, rather than changing the depth language of document content.

## Do's and Don'ts

### Do:

- **Do** use the recorded semantic theme pairs for fields, text, rules, and functional states.
- **Do** keep headings bold, explanations readable, and monospace tied to meaningful technical notation.
- **Do** use open ruled rows for document content and stroked, lightly rounded nodes for diagrams.
- **Do** preserve labels, focus outlines, and reading order when content stacks or the locale changes.
- **Do** pair route-state color with text and an authored icon, and retain the reduced-motion treatment.

### Don't:

- **Don't** add simulated application chrome or terminal styling to make ordinary content appear technical.
- **Don't** add shadows to the flat document surfaces or turn every content group into an enclosed card.
- **Don't** replace exact source colors with the sidecar's synthesized preview ramps.
- **Don't** turn static technology tags or architecture nodes into apparent controls without a real interaction.
- **Don't** apply page-specific rail proportions, project rosters, or first-viewport composition as universal design rules.

## Readable type scale

Text uses shared `rem` tokens in `app/globals.css` and respects browser font preferences. Body copy uses 1.0625rem across screen sizes, with 1.75 line height; Chinese prose uses 1.85. Supporting text never falls below .9375rem. Headings alone scale fluidly, within rem-based limits.

| Role | Token | Size at the default browser setting |
| --- | --- | --- |
| Caption, technology tag | `--text-caption` | 15px |
| Button, sidebar link, metadata | `--text-small` | 16px |
| Body, navigation, diagram node title | `--text-body` | 17px on all screens |
| Diagram detail / relationship label | canvas scaled from `--text-body` | approximately 16px / 15px |
| Introduction | `--text-lead` | 18px |
| Subsection | `--text-subheading` | 20px |
| Project or card heading | `--text-title` | 20–24px |
| Section heading | `--text-section` | 28–36px |
| Featured project | `--text-display` | 32–44px |

Workflow figures use the site's existing palette and font family. Their labels remain SVG text, with wrapped node titles and details. Each project's authored topology determines branches, review paths, persistence, or sequence relationships; the shared renderer does not impose a single pipeline. A local scroll region preserves the diagram's reading size on narrow screens.


## Reading and diagram refinement — 2026-11-07

Desktop prose uses `--text-body: 1.0625rem` (17px at the default root size), with
line height (1.75). The same size applies on phones; Chinese prose uses
(1.85) line height and no negative heading tracking. Project subtitles now sit
below their titles, with (10px) separation and (1.5) line height. The approved
font families and blue/cool-paper/graphite palette remain the source of truth.

Each diagram has visible Play, Pause/Resume, and Replay behavior and a wider
atlas link. Playback explains an authored example, never a live backend run.
The Pantry sequence distinguishes receipt ingestion with undo from later,
confirmed batch status changes. Semantic endpoints and playback continuity are
checked while generating the atlas. `Project_Architecture_Blueprint.md` records
these component and source-review boundaries.
