"use client";

import { useContent } from "./preferences";
import { ExternalLink, SectionHeading } from "./primitives";

export function ExperienceSection() {
  const { experience, siteConfig } = useContent();
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
              <div className="experience-title">
                <h3>{item.title}</h3>
                <p>{item.label}</p>
              </div>
              <div className="experience-body">
                <p className="experience-copy">{item.description}</p>
                {item.link ? (
                  <ExternalLink href={item.link} destination={`evidence for ${item.title}`}>
                    {section.evidenceLabel}
                  </ExternalLink>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
