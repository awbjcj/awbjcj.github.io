import type { Metadata } from "next";
import { headers } from "next/headers";
import {
  contact,
  displayValue,
  experience,
  focusAreas,
  isPlaceholder,
  profile,
  projects,
  resume,
  skillGroups,
} from "./portfolio-data";

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

function ArrowIcon() {
  return <span aria-hidden="true">↗</span>;
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
    <Tag className="unfilled" title="Placeholder — replace in app/portfolio-data.ts">
      {displayValue(value)}
      <span className="sr-only"> (placeholder content, not yet written)</span>
    </Tag>
  );
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="David Wu, back to top">
          <span className="brand-mark">DW</span>
          <span className="brand-copy"><strong>David Wu</strong><small>AI systems engineer</small></span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#work">Work</a><a href="#experience">Experience</a><a href="#resume">Résumé</a><a href="#contact">Contact</a>
        </nav>
        <a className="header-cta" href={profile.github} target="_blank" rel="noreferrer">GitHub <ArrowIcon /></a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span /> Based in {profile.location}</p>
          <h1>I build AI systems that work <em>beyond the demo.</em></h1>
          <p className="hero-lede">{profile.summary}</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">Explore selected work <span aria-hidden="true">↓</span></a>
            <a className="text-link" href={profile.github} target="_blank" rel="noreferrer">View GitHub profile <ArrowIcon /></a>
          </div>
          <div className="availability"><span aria-hidden="true" /> {profile.availability}</div>
        </div>

        <div className="hero-console" aria-label="Engineering focus overview">
          <div className="console-topbar"><span>system.profile</span><div aria-hidden="true"><i /><i /><i /></div></div>
          <div className="console-body">
            {/* The leading slashes are deliberate visible copy, not a stray JSX comment. */}
            <p className="console-comment">{"// CURRENT ENGINEERING FOCUS"}</p>
            <dl>
              <div><dt>01 / ORCHESTRATE</dt><dd>LangGraph agents with tools, memory &amp; human approvals</dd></div>
              <div><dt>02 / CONNECT</dt><dd>MCP servers and multi-provider model gateways</dd></div>
              <div><dt>03 / SHIP</dt><dd>Secure full-stack products with measurable constraints</dd></div>
            </dl>
            <div className="console-flow" aria-hidden="true"><span>MODEL</span><b>→</b><span>AGENT</span><b>→</b><span>TOOLS</span></div>
          </div>
          <div className="console-footer"><span className="pulse" /> Ready to build useful AI</div>
        </div>
      </section>

      <section className="signal-strip" aria-label="Core specialties">
        <span>Agent architecture</span><i>✦</i><span>MCP</span><i>✦</i><span>LLM interoperability</span><i>✦</i><span>Full-stack delivery</span><i>✦</i><span>Developer tools</span>
      </section>

      <section className="section work-section" id="work">
        <div className="section-heading">
          <div><p className="kicker">01 / Selected work</p><h2>Systems, not just screens.</h2></div>
          <p>Public work spanning agent platforms, protocol adapters, developer tooling, and data-backed MCP services.</p>
        </div>
        <div className="project-grid">
          {projects.map((project, index) => (
            <article className={`project-card project-${index + 1}`} key={project.name}>
              <div className="project-meta"><span>{String(index + 1).padStart(2, "0")}</span><span>{project.kind}</span></div>
              <div className="project-visual" aria-hidden="true">
                <div className="visual-grid" /><span className="visual-label">{project.signal}</span><div className="visual-orbit"><i /><i /><i /></div>
              </div>
              <div className="project-content">
                <h3>{project.name}</h3><p>{project.description}</p>
                <ul aria-label={`${project.name} technologies`}>{project.skills.map((skill) => <li key={skill}>{skill}</li>)}</ul>
                <a href={project.link} target="_blank" rel="noreferrer">View repository <ArrowIcon /></a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section experience-section" id="experience">
        <div className="section-heading">
          <div><p className="kicker">02 / Experience in practice</p><h2>From architecture to operation.</h2></div>
          <p>Evidence-backed experience drawn from public engineering work. A full employment timeline is available on request.</p>
        </div>
        <div className="experience-list">
          {experience.map((item, index) => (
            <article className="experience-item" key={item.title}>
              <div className="experience-index">0{index + 1}</div>
              <div className="experience-title"><p>{item.label}</p><h3>{item.title}</h3></div>
              <p className="experience-copy">{item.description}</p>
              <a href={item.link} target="_blank" rel="noreferrer" aria-label={`See evidence for ${item.title}`}><ArrowIcon /></a>
            </article>
          ))}
        </div>
      </section>

      <section className="section resume-section" id="resume">
        <div className="section-heading">
          <div><p className="kicker">03 / Résumé</p><h2>The formal record.</h2></div>
          <p>Roles, dates, and education — the details a hiring team needs alongside the work itself.</p>
        </div>

        <div className="resume-layout">
          <aside className="resume-aside">
            <a className="button button-primary resume-download" href={contact.resumeFile} download>
              Download résumé (PDF) <span aria-hidden="true">↓</span>
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
      </section>

      <section className="section approach-section">
        <div className="approach-intro">
          <p className="kicker">04 / How I think</p><h2>Useful AI is a product discipline.</h2>
          <p>I care about the unglamorous layers that make intelligent software trustworthy: explicit permissions, predictable interfaces, cost controls, observability, and a humane path for intervention.</p>
        </div>
        <div className="focus-grid">
          {focusAreas.map((area, index) => <article key={area.title}><span>0{index + 1}</span><h3>{area.title}</h3><p>{area.description}</p></article>)}
        </div>
      </section>

      <section className="section toolkit-section" id="toolkit">
        <div className="toolkit-title"><p className="kicker">05 / Toolkit</p><h2>Technologies I use to turn models into products.</h2></div>
        <div className="skill-groups">
          {skillGroups.map((group) => <div className="skill-group" key={group.label}><h3>{group.label}</h3><ul>{group.skills.map((skill) => <li key={skill}>{skill}</li>)}</ul></div>)}
        </div>
      </section>

      <section className="contact-section" id="contact">
        <p className="kicker">06 / Let&apos;s build something useful</p>
        <h2>Looking for an engineer who can connect the model, the system, and the user?</h2>

        <div className="contact-actions">
          <a className="button button-light" href={`mailto:${contact.email}`}>Email me <ArrowIcon /></a>
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
            <a href={contact.resumeFile} download>Download PDF <span aria-hidden="true">↓</span></a>
          </li>
        </ul>

        <p className="contact-note">{contact.responseNote}</p>
      </section>

      <footer><p>© {new Date().getFullYear()} David Wu</p><p>Designed for clarity. Built for the open web.</p><a href="#top">Back to top ↑</a></footer>
    </main>
  );
}
