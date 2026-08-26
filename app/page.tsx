import type { Metadata } from "next";
import { headers } from "next/headers";
import {
  contact,
  displayValue,
  experience,
  focusAreas,
  isPlaceholder,
  liveProducts,
  profile,
  projects,
  resume,
  siteConfig,
  skillGroups,
} from "./content";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "awbjcj.github.io";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.includes("localhost") ? "http" : "https");
  const baseUrl = new URL(`${protocol}://${host}`);

  return {
    metadataBase: baseUrl,
    title: `${profile.name} — ${profile.title}`,
    description: profile.summary,
    alternates: { canonical: "/" },
    openGraph: {
      type: "website",
      url: "/",
      title: `${profile.name} — ${profile.title}`,
      description: profile.summary,
      images: [{ url: "/og.png", width: 1728, height: 909, alt: `${profile.name} portfolio` }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${profile.name} — ${profile.title}`,
      description: profile.summary,
      images: ["/og.png"],
    },
  };
}

/**
 * Icons are inline SVG rather than characters on purpose: "↗" (U+2197) carries
 * emoji presentation in several system fonts, so a text arrow renders as a
 * coloured emoji box on Windows. SVG inherits `currentColor` and stays text.
 */
function ArrowIcon() {
  return (
    <svg className="icon" viewBox="0 0 12 12" aria-hidden="true">
      <path d="M3.6 8.4 8.4 3.6M4.6 3.6h3.8v3.8" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ArrowUpIcon() {
  return (
    <svg className="icon" viewBox="0 0 12 12" aria-hidden="true">
      <path d="M6 9.4V2.6M3 5.6 6 2.6l3 3" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** Section eyebrow. `count` is shown only where a total is genuinely informative. */
function Label({ children, count }: { children: string; count?: string }) {
  return (
    <p className="label">
      {children}
      {count ? <span className="count">{count}</span> : null}
    </p>
  );
}

/**
 * Renders authored copy, flagging anything still unfilled.
 *
 * Placeholders stay visible while authoring so the page shows its real shape,
 * but they are marked for both sighted readers and assistive tech. The content
 * check gates deployment, so this state never ships.
 */
function Field({ value, as: Tag = "span" }: { value: string; as?: "span" | "h3" | "p" }) {
  if (!isPlaceholder(value)) return <Tag>{value}</Tag>;
  return (
    <Tag className="unfilled" title="Placeholder — replace in app/content/*.config.ts">
      {displayValue(value)}
      <span className="sr-only"> (placeholder content, not yet written)</span>
    </Tag>
  );
}

export default function Home() {
  const { footer, hero, navigation, sections } = siteConfig;

  return (
    <>
      <a className="skip-link" href="#top">Skip to content</a>

      <header className="site-header">
        <div className="wrap header-inner">
          <a className="brand" href="#top" aria-label={`${profile.name}, back to top`}>
            <span className="brand-mark">{profile.initials}</span>
            <span className="brand-copy"><strong>{profile.name}</strong><small>{profile.brandSubtitle}</small></span>
          </a>
          <nav aria-label="Primary navigation">
            {navigation.map((item) => <a href={item.href} key={item.href}>{item.label}</a>)}
          </nav>
          <a className="header-cta" href={profile.github} target="_blank" rel="noreferrer">GitHub <ArrowIcon /></a>
        </div>
      </header>

      <main>
        <section className="hero" id="top">
          <div className="wrap hero-inner">
            <div className="hero-copy">
              <p className="eyebrow"><span className="dot" aria-hidden="true" /> {profile.location}</p>
              <h1><span className="h1-lead">{hero.titleLead}</span>{hero.titleEmphasis}</h1>
              <p className="lede">{profile.summary}</p>
              <div className="hero-actions">
                <a className="button button-primary" href="#live">{hero.primaryAction}</a>
                <a className="button button-ghost" href={profile.github} target="_blank" rel="noreferrer">{hero.githubAction} <ArrowIcon /></a>
              </div>
              <p className="availability"><span className="dot" aria-hidden="true" /> {profile.availability}</p>
            </div>

            <div className="panel panel-scope" aria-label="Engineering focus overview">
              <div className="panel-bar">
                <span>{hero.panel.title}</span>
                <span className="panel-status"><i aria-hidden="true" /> {hero.panel.status}</span>
              </div>
              <div className="panel-body">
                <dl className="panel-rows">
                  {hero.panel.rows.map((row) => <div key={row.label}><dt>{row.label}</dt><dd>{row.description}</dd></div>)}
                </dl>
                <div className="pipeline" aria-hidden="true">
                  <div className="pipeline-track"><span className="pipeline-pulse" /></div>
                  <ol>{hero.panel.pipeline.map((step) => <li key={step}>{step}</li>)}</ol>
                </div>
              </div>
              <p className="panel-foot">{hero.panel.footer}</p>
            </div>
          </div>
        </section>

        <section className="rail" aria-label="Core specialties">
          <div className="wrap">
            <ul>
              {hero.specialties.map((specialty) => <li key={specialty}>{specialty}</li>)}
            </ul>
          </div>
        </section>

        {/*
          Live products. The trial form is a plain GET form with no JavaScript:
          the browser serialises `name` and `email` into the query string, and the
          target's registration page reads both back to prefill itself. This site
          stays a static export, and no credential is ever handled here — the
          visitor sets their password on the real sign-up page.
        */}
        <section className="section live-section" id="live">
          <div className="wrap">
            <div className="section-heading">
              <div>
                <Label>{sections.live.label}</Label>
                <h2>{sections.live.title}</h2>
              </div>
              <p>{sections.live.description}</p>
            </div>

            <div className="live-grid">
              {liveProducts.map((product) => (
                <article className="live-card" key={product.name}>
                  <div className="live-head">
                    <span className="live-status"><i aria-hidden="true" /> live</span>
                    <p className="live-tagline">{product.tagline}</p>
                  </div>
                  <h3>{product.name}</h3>
                  <p className="live-copy">{product.description}</p>
                  <ul className="live-facts">
                    {product.facts.map((fact) => <li key={fact}>{fact}</li>)}
                  </ul>

                  {product.trial ? (
                    <form className="trial-form" action={product.trial.action} method="get" target="_blank" rel="noreferrer">
                      <p className="trial-heading">{product.trial.heading}</p>
                      <div className="trial-fields">
                        <label htmlFor="trial-name">
                          <span>{product.trial.nameField}</span>
                          <input id="trial-name" name="name" type="text" autoComplete="name" required placeholder="Ada Lovelace" />
                        </label>
                        <label htmlFor="trial-email">
                          <span>{product.trial.emailField}</span>
                          <input id="trial-email" name="email" type="email" autoComplete="email" required placeholder="ada@example.com" />
                        </label>
                      </div>
                      <button className="button button-signal" type="submit">{product.trial.submitLabel} <ArrowIcon /></button>
                      <p className="trial-note">{product.trial.note}</p>
                    </form>
                  ) : null}

                  <a className="live-action" href={product.href} target="_blank" rel="noreferrer">
                    {product.actionLabel} <ArrowIcon />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section work-section" id="work">
          <div className="wrap">
            <div className="section-heading">
              <div>
                <Label count={`${projects.length} ${sections.projects.countNoun}`}>{sections.projects.label}</Label>
                <h2>{sections.projects.title}</h2>
              </div>
              <p>{sections.projects.description}</p>
            </div>
            <div className="project-grid">
              {projects.map((project) => (
                <article className="project-card" key={project.name}>
                  <div className="project-head">
                    <div className="project-meta"><span>{project.kind}</span></div>
                    <p className="project-signal">{project.signal}</p>
                  </div>
                  <div className="project-content">
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                    <ul className="tags" aria-label={`${project.name} technologies`}>
                      {project.skills.map((skill) => <li key={skill}>{skill}</li>)}
                    </ul>
                    {/*
                      Several of these repositories are private. A card that says
                      so is honest; a card offering a link that 404s is not.
                    */}
                    <div className="project-links">
                      {project.live ? (
                        <a className="project-link project-link-live" href={project.live.href} target="_blank" rel="noreferrer">
                          {project.live.label} <ArrowIcon />
                        </a>
                      ) : null}
                      {project.repo ? (
                        <a className="project-link" href={project.repo.href} target="_blank" rel="noreferrer">
                          {project.repo.label} <ArrowIcon />
                        </a>
                      ) : null}
                      {!project.live && !project.repo ? (
                        <span className="project-private">{sections.projects.privateNote}</span>
                      ) : null}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section experience-section" id="experience">
          <div className="wrap">
            <div className="section-heading">
              <div>
                <Label count={`${experience.length} ${sections.experience.countNoun}`}>{sections.experience.label}</Label>
                <h2>{sections.experience.title}</h2>
              </div>
              <p>{sections.experience.description}</p>
            </div>
            <div className="experience-list">
              {experience.map((item) => (
                <article className="experience-item" key={item.title}>
                  <div className="experience-title"><p>{item.label}</p><h3>{item.title}</h3></div>
                  <p className="experience-copy">{item.description}</p>
                  {item.link ? (
                    <a href={item.link} target="_blank" rel="noreferrer" aria-label={`See evidence for ${item.title}`}><ArrowIcon /></a>
                  ) : null}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section resume-section" id="resume">
          <div className="wrap">
            <div className="section-heading">
              <div>
                <Label>{sections.resume.label}</Label>
                <h2>{sections.resume.title}</h2>
              </div>
              <p>{sections.resume.description}</p>
            </div>

            <div className="resume-layout">
              <aside className="resume-aside">
                <a className="button button-primary resume-download" href={contact.resumeFile} download>
                  {sections.resume.downloadLabel}
                </a>
                <dl className="resume-facts">
                  <div><dt>Based in</dt><dd>{profile.location}</dd></div>
                  <div><dt>Focus</dt><dd>{profile.title}</dd></div>
                  <div><dt>Status</dt><dd>{profile.availability}</dd></div>
                </dl>
              </aside>

              <div className="resume-main">
                <h3 className="resume-group-label">Experience</h3>
                <ol className="resume-timeline">
                  {/* Static, never-reordered lists: index keys keep authored copy out of the RSC payload. */}
                  {resume.roles.map((role, index) => (
                    <li className="resume-entry" key={index}>
                      <div className="resume-period"><Field value={role.period} /></div>
                      <div className="resume-detail">
                        <Field as="h3" value={role.role} />
                        <p className="resume-org">
                          <Field value={role.company} /> <span aria-hidden="true">·</span> <Field value={role.location} />
                        </p>
                        <ul>
                          {role.highlights.map((highlight, highlightIndex) => (
                            <li key={highlightIndex}><Field value={highlight} /></li>
                          ))}
                        </ul>
                      </div>
                    </li>
                  ))}
                </ol>

                <h3 className="resume-group-label">Education</h3>
                <ol className="resume-timeline">
                  {resume.education.map((entry, index) => (
                    <li className="resume-entry" key={index}>
                      <div className="resume-period"><Field value={entry.period} /></div>
                      <div className="resume-detail">
                        <Field as="h3" value={entry.credential} />
                        <p className="resume-org"><Field value={entry.school} /></p>
                        <p className="resume-note"><Field value={entry.detail} /></p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </section>

        <section className="section approach-section">
          <div className="wrap approach-layout">
            <div className="approach-intro">
              <Label>{sections.approach.label}</Label>
              <h2>{sections.approach.title}</h2>
              <p>{sections.approach.description}</p>
            </div>
            <ul className="focus-list">
              {focusAreas.map((area) => (
                <li key={area.title}><h3>{area.title}</h3><p>{area.description}</p></li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section toolkit-section" id="toolkit">
          <div className="wrap toolkit-layout">
            <div className="toolkit-title">
              <Label>{sections.toolkit.label}</Label>
              <h2>{sections.toolkit.title}</h2>
            </div>
            <div className="skill-groups">
              {skillGroups.map((group) => (
                <div className="skill-group" key={group.label}>
                  <h3>{group.label}</h3>
                  <ul>{group.skills.map((skill) => <li key={skill}>{skill}</li>)}</ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="wrap">
            <Label>{sections.contact.label}</Label>
            <h2>{sections.contact.title}</h2>

            <div className="contact-actions">
              <a className="button button-light" href={`mailto:${contact.email}`}>{sections.contact.actionLabel} <ArrowIcon /></a>
              <p>{profile.availability}.</p>
            </div>

            <ul className="contact-channels">
              <li>
                <span>Email</span>
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
              </li>
              <li>
                <span>LinkedIn</span>
                {isPlaceholder(contact.linkedin)
                  ? <span className="unfilled">Add your LinkedIn URL<span className="sr-only"> (placeholder content, not yet written)</span></span>
                  : <a href={contact.linkedin} target="_blank" rel="noreferrer">{contact.linkedin.replace(/^https?:\/\/(www\.)?/, "")} <ArrowIcon /></a>}
              </li>
              <li>
                <span>GitHub</span>
                <a href={contact.github} target="_blank" rel="noreferrer">{contact.github.replace(/^https?:\/\//, "")} <ArrowIcon /></a>
              </li>
              <li>
                <span>Résumé</span>
                <a href={contact.resumeFile} download>Download PDF</a>
              </li>
            </ul>

            <p className="contact-note">{contact.responseNote}</p>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="wrap footer-inner">
          <p>© {new Date().getFullYear()} {profile.name}</p>
          <p>{footer.note}</p>
          <a href="#top">{footer.backToTopLabel} <ArrowUpIcon /></a>
        </div>
      </footer>
    </>
  );
}
