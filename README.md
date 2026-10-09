# David Wu — Portfolio

Personal portfolio for [David Wu](https://github.com/awbjcj), focused on AI agent systems, MCP servers, model gateways, and full-stack product engineering.

## Update the content

All editable website copy lives in the purpose-specific configuration files under `app/content/`. You do not need to edit `app/page.tsx` to change the portfolio.

| File | What it controls |
| --- | --- |
| `app/content/site.config.ts` | Name, title, hero, navigation, section headings, contact links, footer, and the live-product cards |
| `app/content/projects.config.ts` | Selected project cards and technology tags |
| `app/content/experience.config.ts` | Evidence-backed experience and case-study rows |
| `app/content/resume.config.ts` | Employment timeline and education |
| `app/content/skills.config.ts` | Product principles and skill groups |
| `app/content/enhancements.config.ts` | Optional effects and quick-navigation copy |

English lists are rendered automatically; update `zh-CN.config.ts` alongside them. Add, remove, or reorder its objects to change the number and order of items on the website. The catalog types check required fields; translation checks validate both languages during `check:content`.

For copy-ready recipes for projects, engineering stories, roles, and skill
groups, use the [portfolio content guide](app/content/README.md).

For example, add another project by copying an object in `projects.config.ts`:

```ts
{
  id: "project-id",
  name: "Project name",
  kind: "Original project",
  signal: "SHORT OUTCOME OR PROOF",
  description: "What the project does and why it matters.",
  skills: ["TypeScript", "Python"],
  repo: { href: "https://github.com/your-name/project", label: "Source" },
  live: { href: "https://your-project.example.com", label: "Open the app" },
},
```

Both `repo` and `live` are optional. A card with neither renders a "Private
repository" note instead of a link — private work is stated, never linked to a
URL that returns 404.

## Project evidence rule

Back project descriptions with repository code, documentation, and commits. Record the reviewed revision in `app/content/github-evidence.md`. Identify fork contributions and avoid carrying old test totals or scale claims forward without fresh measurements. Private work stays unlinked.

## Live products and the trial form

`liveProducts` in `app/content/site.config.ts` drives the "Applications"
section. The Resume Tailor Harness card carries a **plain GET form** — no
JavaScript, no backend, no API route. The browser serializes `name` and `email`
into the query string of the target's own registration page, which reads both
back to prefill itself:

```
https://resume-tailor-harness.up.railway.app/register?name=Ada+Lovelace&email=ada%40example.com
```

This site never handles a password; the visitor sets one on the real sign-up
page, against its own origin.

> **External dependency.** The trial CTA only works end to end while
> `resume-agent` runs with `REGISTRATION_MODE=open`. Its default is `invite`,
> which sends arrivals to a page demanding an invite code they do not have.
> Verify that setting on the deployment before announcing this site.

The page composition remains in `app/page.tsx`, and the visual system remains in `app/globals.css`. `app/portfolio-data.ts` is only a compatibility export; new content should be edited in `app/content/`.

## Content publishing gate

The employment timeline and education live in `app/content/resume.config.ts`; contact details live in `app/content/site.config.ts`. The downloadable PDF lives at `public/resume.pdf`.

Any future string that starts with `TODO:` is treated as unfinished content. Placeholders render in a visibly "unfilled" state while authoring, and the `TODO:` marker itself never reaches the HTML. To check for unfinished copy or missing public assets:

```bash
npm run check:content
```

This is the publish gate. `npm run build` and `npm test` stay green while placeholders exist, so you can keep working — but the GitHub Pages workflow runs `check:content` before deploying and **fails the deploy** while any blocking item remains. Unfinished copy cannot reach the live site.

To draft unfinished copy, prefix a string with `TODO:`. The publishing gate reports every placeholder across all `*.config.ts` files and prevents unfinished content from deploying.

## Local development

```bash
npm install
npm run dev
```

## Validation

```bash
npm test            # build + rendered-HTML tests
npm run lint
npm run typecheck   # checks the frontend and Cloudflare Worker bindings
npm run check:content   # publish gate — must pass before deploying
npm run export:github   # writes the static site to github-pages/
```

Pushing `main` deploys the static export to GitHub Pages through `.github/workflows/deploy-pages.yml`.

The build uses vinext's `output: "export"` mode and emits both HTML and the
`index.rsc` navigation payload. The export script copies both to GitHub Pages,
and the portfolio handles language and section history locally, so browser Back
and Forward do not request a server page. Social metadata uses
the public website URL from `site.config.ts`. Cloudflare runtime types and the
optional D1 binding are declared for the development Worker; static production
builds use the Node prerenderer. The build launcher lets successful builds exit
naturally on Windows / Node 24 to avoid its forced-exit libuv race.

## Template research

The information architecture was informed by [Ryan Fitzgerald's DevPortfolio](https://github.com/RyanFitzgerald/devportfolio), selected from a shortlist of popular portfolio templates for its concise tech-job focus, project and experience sections, and simple content model. This implementation is an original design and codebase.


## Language and theme preferences

English copy remains in the purpose-specific config files. `zh-CN.config.ts`
contains Simplified Chinese copy, checked against the `ContentCatalog` type.
Update both languages when adding or changing content. Project translations use
stable IDs; links and technology names are shared. Publication titles and author
names keep their original spelling. The downloadable résumé remains in English.

The header language selector uses `?lang=en` or `?lang=zh-CN`, so a language
choice can be shared and browser Back restores previous choices. Without a URL
selection, the saved preference takes priority over the browser language.
Language changes update `html[lang]`, the page title, and description. The static
HTML and social-preview metadata are English; Chinese is applied after hydration.

The theme button switches light/dark mode. On a first visit it follows the OS
color preference; an explicit selection is saved. A small head script applies the
theme before paint. Storage failures do not disable either control. No translation
service is required.

## Homepage plugins

Motion powers the hero signal map, scroll entrances, and reading progress bar.
The signal map is a decorative illustration of the engineering focus, rather
than a live activity feed. Effects respect the OS reduced-motion preference;
the page content remains visible when JavaScript is unavailable.

cmdk powers the searchable quick-navigation menu. Open it from the header or
with **⌘K / Ctrl+K**, search section titles, project names, or technology tags,
and press Enter to jump to a result. Escape closes the native modal dialog.
Project results stay on the portfolio, including projects with private source.

Disable any enhancement with `enhancementSettings` in
`app/content/enhancements.config.ts`. English interface copy lives in that file;
Chinese copy lives in `zh-CN.config.ts`.
