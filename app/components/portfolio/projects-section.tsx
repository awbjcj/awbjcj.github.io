import { projects, siteConfig } from "../../content";
import { ExternalLink, SectionHeading } from "./primitives";

export function ProjectsSection() {
  const { projects: section } = siteConfig.sections;

  return (
    <section className="section work-section" id="work">
      <div className="wrap">
        <SectionHeading
          label={section.label}
          title={section.title}
          description={section.description}
          count={`${projects.length} ${section.countNoun}`}
        />
        <div className="project-grid">
          {projects.map((project, projectIndex) => (
            <article className="project-card" key={project.name}>
              <div className="project-head">
                <div className="project-meta">
                  <span>{project.kind}</span>
                  <span className="project-index" aria-hidden="true">{String(projectIndex + 1).padStart(2, "0")}</span>
                </div>
                <p className="project-signal">{project.signal}</p>
              </div>
              <div className="project-content">
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <ul className="tags" aria-label={`${project.name} technologies`}>
                  {project.skills.map((skill) => <li key={skill}>{skill}</li>)}
                </ul>
                <div className="project-links">
                  {project.live ? (
                    <ExternalLink className="project-link project-link-live" href={project.live.href}>
                      {project.live.label}
                    </ExternalLink>
                  ) : null}
                  {project.repo ? (
                    <ExternalLink className="project-link" href={project.repo.href} destination="source">
                      {project.repo.label}
                    </ExternalLink>
                  ) : null}
                  {!project.live && !project.repo ? (
                    <span className="project-private">{section.privateNote}</span>
                  ) : null}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
