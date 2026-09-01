import { contact, isPlaceholder, profile, siteConfig } from "../../content";
import { ArrowIcon, ExternalLinkHint, Label } from "./primitives";

export function ContactSection() {
  const { contact: section } = siteConfig.sections;

  return (
    <section className="contact-section" id="contact">
      <div className="wrap">
        <Label>{section.label}</Label>
        <h2>{section.title}</h2>

        <div className="contact-actions">
          <a className="button button-light" href={`mailto:${contact.email}`}>{section.actionLabel} <ArrowIcon /></a>
          <p>{profile.availability}.</p>
        </div>

        <ul className="contact-channels">
          <li>
            <span>{section.emailLabel}</span>
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
          </li>
          <li>
            <span>{section.linkedinLabel}</span>
            {isPlaceholder(contact.linkedin)
              ? <span className="unfilled">{section.linkedinPlaceholder}<span className="sr-only"> (placeholder content, not yet written)</span></span>
              : <a href={contact.linkedin} target="_blank" rel="noreferrer">{contact.linkedin.replace(/^https?:\/\/(www\.)?/, "")} <ArrowIcon /><ExternalLinkHint destination="LinkedIn" /></a>}
          </li>
          <li>
            <span>{section.githubLabel}</span>
            <a href={contact.github} target="_blank" rel="noreferrer">{contact.github.replace(/^https?:\/\//, "")} <ArrowIcon /><ExternalLinkHint destination="GitHub" /></a>
          </li>
          <li>
            <span>{section.resumeLabel}</span>
            <a href={contact.resumeFile} download>{section.resumeActionLabel}</a>
          </li>
        </ul>

        <p className="contact-note">{contact.responseNote}</p>
      </div>
    </section>
  );
}
