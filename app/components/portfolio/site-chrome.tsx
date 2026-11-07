"use client";
import { useContent, PreferenceControls } from "./preferences";
import { ArrowUpIcon } from "./primitives";
import { TechnicalIcon } from "./technical-icon";
import { CommandMenu } from "./enhancements";

export function SiteHeader() {
  const { profile, siteConfig, casebook } = useContent();
  const { accessibility, navigation, hero } = siteConfig;
  return <>
    <a className="skip-link" href="#main-content">{accessibility.skipToContent}</a>
    <header className="site-header" id="top">
      {/* eslint-disable-next-line @next/next/no-img-element -- decorative production plate */}
      <img className="campus-art" src="/images/campus.png" alt="" width={2170} height={725} decoding="async" />
      <div className="header-inner">
        <a className="brand" href="#top" aria-label={profile.name + ", " + accessibility.backToTop}><span className="brand-name">{profile.name}</span><span className="brand-title">{profile.title}</span></a>
        <nav aria-label={accessibility.primaryNavigation}>{navigation.filter(item => ["#work", "#experience", "#resume", "#contact"].includes(item.href)).map(item => <a href={item.href} key={item.href}>{item.label}</a>)}</nav>
        <div className="header-actions"><PreferenceControls /></div>
      </div>
      <div className="masthead-intro"><p className="masthead-location"><TechnicalIcon name="pin" />{profile.location}</p><h1>{hero.titleLead}{hero.titleEmphasis}</h1></div>
      <p className="masthead-summary">{casebook.introduction}</p>
    </header>
  </>;
}
export function SiteFooter() {
  const { profile, siteConfig } = useContent();
  return <footer className="site-footer"><div className="wrap footer-inner"><p>© {new Date().getFullYear()} {profile.name}</p><p>{siteConfig.footer.note}</p><CommandMenu /><a href="#top">{siteConfig.footer.backToTopLabel}<ArrowUpIcon /></a></div></footer>;
}
