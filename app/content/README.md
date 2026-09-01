# Portfolio content guide

This folder is the editing surface for the portfolio. The page layout reads
these files automatically, so adding or reordering content never requires a
change to `app/page.tsx`.

## Where to make a change

| I want to change… | Edit… |
| --- | --- |
| Name, intro, contact links, navigation, or section headings | `site.config.ts` |
| A selected project | `projects.config.ts` |
| An evidence-backed engineering story | `experience.config.ts` |
| A job, internship, education entry, or publication | `resume.config.ts` |
| A skill, skill group, or working principle | `skills.config.ts` |

Items appear in the same order as their objects in each list. Copy an existing
object, paste it where the new item should appear, and replace its values.

## Add a project

Paste this inside the `projects` list in `projects.config.ts`:

```ts
{
  name: "Project name",
  kind: "Shipped product",
  signal: "ONE SHORT PROOF POINT",
  description: "What it does, who it helps, and what you personally built.",
  skills: ["TypeScript", "Python"],
  repo: { href: "https://github.com/your-name/project", label: "Source" },
  live: { href: "https://project.example.com", label: "Open the app" },
},
```

`repo` and `live` are optional. Remove either line when it does not apply. If
both are absent, the card automatically shows the configured private-project
note. Keep `name` unique so React can track the card reliably.

## Add an engineering experience story

These entries explain capability through evidence rather than repeating the
employment timeline. Paste this inside `experience` in
`experience.config.ts`:

```ts
{
  label: "Area of practice",
  title: "A specific outcome or engineering decision",
  description: "What you designed, how it worked, and why it mattered.",
  link: "https://github.com/your-name/relevant-project",
},
```

`link` is optional. When present, the page supplies the visible “View evidence”
label and the new-tab accessibility hint automatically.

## Add a role or internship

Paste this inside `resume.roles` in `resume.config.ts`:

```ts
{
  company: "Company name",
  role: "Role title",
  period: "Jan 2026 — Present",
  location: "City, State",
  highlights: [
    "Start with a strong action and describe the outcome.",
    "Add another concise, evidence-backed contribution.",
  ],
},
```

Education entries use the shorter object already shown in `resume.education`.

## Add a publication

Paste this inside `resume.publications` in `resume.config.ts`:

```ts
{
  title: "Publication title",
  authors: "A. Author, B. Author, and Your Name",
  venue: "Conference or journal",
  year: "2026",
  href: "https://publisher.example.com/publication",
},
```

Use the publisher or DOI landing page for `href`, and keep the author order the
same as the published record.

## Add skills

To add one skill, add a string to the right group in `skills.config.ts`:

```ts
{ label: "Product engineering", skills: ["React", "TypeScript", "New skill"] },
```

To add a new group, paste a complete object inside `skillGroups`:

```ts
{ label: "Data", skills: ["PostgreSQL", "OpenSearch", "Redis"] },
```

The layout wraps skills automatically on small screens. Keep group labels short
and use the technology’s commonly recognized name.

## Draft safely and validate

Prefix unfinished visible copy with `TODO:` while drafting. It will render as
an authoring placeholder locally, and the publishing gate will prevent it from
reaching GitHub Pages.

Run these checks before publishing:

```bash
npm run check:content
npm run lint
npm test
npm run export:github
```

TypeScript reports missing or misspelled required fields during lint/build. The
content check catches unfinished copy and required public assets.
