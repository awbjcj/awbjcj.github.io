# David Wu — Portfolio

Personal portfolio for [David Wu](https://github.com/awbjcj), focused on AI agent systems, MCP servers, model gateways, and full-stack product engineering.

## Update the content

All copy — profile, projects, experience, résumé, skills, and contact details — lives in `app/portfolio-data.ts`. The page composition is in `app/page.tsx`, and the visual system is in `app/globals.css`.

## Before this site can go live

Two things are deliberately unfinished:

1. **Résumé content.** Every string in `app/portfolio-data.ts` that starts with `TODO:` is a placeholder — the employment timeline, education, and the LinkedIn URL. Replace them with your real history.
2. **`public/resume.pdf`.** The download button links here. Drop your PDF in at that exact path.

Placeholders render on the page in a visibly "unfilled" state (italic, dashed underline) so you can see the layout while writing, and the `TODO:` marker itself never reaches the HTML. To see what is still outstanding:

```bash
npm run check:content
```

This is the publish gate. `npm run build` and `npm test` stay green while placeholders exist, so you can keep working — but the GitHub Pages workflow runs `check:content` before deploying and **fails the deploy** while any blocking item remains. Unfinished copy cannot reach the live site.

Fields documented as optional (for example an education `detail`) report as advisory notes and never block a release.

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

The information architecture was informed by [Ryan Fitzgerald's DevPortfolio](https://github.com/RyanFitzgerald/devportfolio), selected for its concise tech-job focus, project and experience sections, and simple content model. This implementation is an original design and codebase.
