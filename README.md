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

Each list is rendered automatically. Add, remove, or reorder its objects to change the number and order of items on the website. TypeScript checks the required fields during lint and build.

For copy-ready recipes for projects, engineering stories, roles, and skill
groups, use the [portfolio content guide](app/content/README.md).

For example, add another project by copying an object in `projects.config.ts`:

```ts
{
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

Every entry in `projects.config.ts` is backed by a repository dossier, and every
figure quoted on a card comes from that dossier's evidence-checked "Quantified
outcomes" section. Numbers are never estimated. A project without a dossier does
not go on the site.

## Live products and the trial form

`liveProducts` in `app/content/site.config.ts` drives the dark "Running right
now" section. The Resume Agent card carries a **plain GET form** — no
JavaScript, no backend, no API route. The browser serializes `name` and `email`
into the query string of the target's own registration page, which reads both
back to prefill itself:

```
https://resume-agent.up.railway.app/register?name=Ada+Lovelace&email=ada%40example.com
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
npm run check:content   # publish gate — must pass before deploying
npm run export:github   # writes the static site to github-pages/
```

Pushing `main` deploys the static export to GitHub Pages through `.github/workflows/deploy-pages.yml`.

## Template research

The information architecture was informed by [Ryan Fitzgerald's DevPortfolio](https://github.com/RyanFitzgerald/devportfolio), selected from a shortlist of popular portfolio templates for its concise tech-job focus, project and experience sections, and simple content model. This implementation is an original design and codebase.
