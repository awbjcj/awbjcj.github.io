import { contact, profile, resume, siteConfig } from "../../content";
import { ExternalLinkHint, Field, SectionHeading, ArrowIcon } from "./primitives";

export function ResumeSection() {
  const { resume: section } = siteConfig.sections;

  return (
    <section className="section resume-section" id="resume">
      <div className="wrap">
        <SectionHeading {...section} />
        <div className="resume-layout">
          <aside className="resume-aside">
            <a className="button button-primary resume-download" href={contact.resumeFile} download>
              {section.downloadLabel}
            </a>
            <dl className="resume-facts">
              <div><dt>{section.locationLabel}</dt><dd>{profile.location}</dd></div>
              <div><dt>{section.focusLabel}</dt><dd>{profile.title}</dd></div>
              <div><dt>{section.statusLabel}</dt><dd>{profile.availability}</dd></div>
            </dl>
          </aside>

          <div className="resume-main">
            <h3 className="resume-group-label">{section.experienceLabel}</h3>
            <ol className="resume-timeline">
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

            <h3 className="resume-group-label">{section.educationLabel}</h3>
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

            <h3 className="resume-group-label">{section.publicationsLabel}</h3>
            <ol className="resume-timeline">
              {resume.publications.map((publication, index) => (
                <li className="resume-entry" key={index}>
                  <div className="resume-period"><Field value={publication.year} /></div>
                  <div className="resume-detail">
                    <h3>
                      <a className="resume-publication-link" href={publication.href} target="_blank" rel="noreferrer">
                        <Field value={publication.title} /> <ArrowIcon />
                        <ExternalLinkHint destination="publication" />
                      </a>
                    </h3>
                    <p className="resume-org"><Field value={publication.authors} /></p>
                    <p className="resume-note"><Field value={publication.venue} /></p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
