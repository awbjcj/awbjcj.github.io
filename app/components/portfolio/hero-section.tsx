import { profile, siteConfig } from "../../content";
import { ArrowIcon, ExternalLinkHint } from "./primitives";

export function HeroSection() {
  const { accessibility, hero } = siteConfig;

  return (
    <>
      <section className="hero" id="top">
        <div className="wrap hero-inner">
          <div className="hero-copy">
            <p className="eyebrow"><span className="dot" aria-hidden="true" /> {profile.location}</p>
            <h1><span className="h1-lead">{hero.titleLead}</span>{hero.titleEmphasis}</h1>
            <p className="lede">{profile.summary}</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#live">{hero.primaryAction}</a>
              <a className="button button-ghost" href={profile.github} target="_blank" rel="noreferrer">
                {hero.githubAction} <ArrowIcon /><ExternalLinkHint destination="GitHub" />
              </a>
            </div>
            <p className="availability"><span className="dot" aria-hidden="true" /> {profile.availability}</p>
          </div>

          <div className="panel panel-scope" aria-label={accessibility.engineeringOverview}>
            <div className="panel-bar">
              <span>{hero.panel.title}</span>
              <span className="panel-status"><i aria-hidden="true" /> {hero.panel.status}</span>
            </div>
            <div className="panel-body">
              <dl className="panel-rows">
                {hero.panel.rows.map((row) => (
                  <div key={row.label}><dt>{row.label}</dt><dd>{row.description}</dd></div>
                ))}
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

      <section className="rail" aria-label={accessibility.coreSpecialties}>
        <div className="wrap">
          <ul>{hero.specialties.map((specialty) => <li key={specialty}>{specialty}</li>)}</ul>
        </div>
      </section>
    </>
  );
}
