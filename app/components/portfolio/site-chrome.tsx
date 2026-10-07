"use client";

import { useContent, PreferenceControls } from "./preferences";
import { ArrowIcon, ArrowUpIcon, ExternalLinkHint } from "./primitives";
import { CommandMenu } from "./enhancements";

export function SiteHeader() {
  const { profile, siteConfig } = useContent();
  const { accessibility, navigation } = siteConfig;

  return (
    <>
      <a className="skip-link" href="#main-content">{accessibility.skipToContent}</a>
      <header className="site-header">
        <div className="wrap header-inner">
          <a className="brand" href="#top" aria-label={`${profile.name}, ${accessibility.backToTop}`}>
            <span className="brand-mark">{profile.initials}</span>
            <span className="brand-copy">
              <strong>{profile.name}</strong>
              <small>{profile.brandSubtitle}</small>
            </span>
          </a>
          <nav aria-label={accessibility.primaryNavigation}>
            {navigation.map((item) => <a href={item.href} key={item.href}>{item.label}</a>)}
          </nav>
          <div className="header-actions">
            <CommandMenu />
            <PreferenceControls />
            <a className="header-cta" href={profile.github} target="_blank" rel="noreferrer">
              {accessibility.githubLabel} <ArrowIcon /><ExternalLinkHint destination="GitHub" />
            </a>
          </div>
        </div>
      </header>
    </>
  );
}

export function SiteFooter() {
  const { profile, siteConfig } = useContent();
  const { footer } = siteConfig;

  return (
    <footer className="site-footer">
      <div className="wrap footer-inner">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <p>{footer.note}</p>
        <a href="#top">{footer.backToTopLabel} <ArrowUpIcon /></a>
      </div>
    </footer>
  );
}
