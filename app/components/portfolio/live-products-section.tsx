import { liveProducts, siteConfig } from "../../content";
import { ArrowIcon, ExternalLinkHint, SectionHeading } from "./primitives";

export function LiveProductsSection() {
  const { sections } = siteConfig;

  return (
    <section className="section live-section" id="live">
      <div className="wrap">
        <SectionHeading {...sections.live} />
        <div className="live-grid">
          {liveProducts.map((product, productIndex) => {
            const fieldIdPrefix = `trial-${productIndex + 1}`;

            return (
              <article className="live-card" key={product.name}>
                <div className="live-head">
                  <span className="live-status"><i aria-hidden="true" /> {sections.live.statusLabel}</span>
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
                      <label htmlFor={`${fieldIdPrefix}-name`}>
                        <span>{product.trial.nameField}</span>
                        <input id={`${fieldIdPrefix}-name`} name="name" type="text" autoComplete="name" required placeholder={product.trial.namePlaceholder} />
                      </label>
                      <label htmlFor={`${fieldIdPrefix}-email`}>
                        <span>{product.trial.emailField}</span>
                        <input id={`${fieldIdPrefix}-email`} name="email" type="email" autoComplete="email" required placeholder={product.trial.emailPlaceholder} />
                      </label>
                    </div>
                    <button className="button button-signal" type="submit">
                      {product.trial.submitLabel} <ArrowIcon /><ExternalLinkHint destination="registration" />
                    </button>
                    <p className="trial-note">{product.trial.note}</p>
                  </form>
                ) : null}

                <a className="live-action" href={product.href} target="_blank" rel="noreferrer">
                  {product.actionLabel} <ArrowIcon /><ExternalLinkHint />
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
