import { experience, siteConfig } from "../../content";
import { ExternalLink, SectionHeading } from "./primitives";

export function ExperienceSection() {
  const { experience: section } = siteConfig.sections;

  return (
    <section className="section experience-section" id="experience">
      <div className="wrap">
        <SectionHeading
          label={section.label}
          title={section.title}
          description={section.description}
          count={`${experience.length} ${section.countNoun}`}
        />
        <div className="experience-list">
          {experience.map((item) => (
            <article className="experience-item" key={item.title}>
              <div className="experience-title"><p>{item.label}</p><h3>{item.title}</h3></div>
              <p className="experience-copy">{item.description}</p>
              {item.link ? (
                <ExternalLink href={item.link} destination={`evidence for ${item.title}`}>
                  {section.evidenceLabel}
                </ExternalLink>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
