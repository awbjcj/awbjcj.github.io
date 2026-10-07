import type { Metadata } from "next";
import {
  ContactSection,
  ExperienceSection,
  HeroSection,
  LiveProductsSection,
  PrinciplesSection,
  ProjectsSection,
  ResumeSection,
  SiteFooter,
  SiteHeader,
  ToolkitSection,
} from "./components/portfolio";
import { profile } from "./content";
import { PortfolioProvider } from "./components/portfolio/preferences";
import { PortfolioEffects } from "./components/portfolio/enhancements";

export function generateMetadata(): Metadata {
  return {
    metadataBase: new URL(profile.website),
    alternates: { canonical: "/" },
    openGraph: {
      type: "website",
      url: "/",
      title: `${profile.name} — ${profile.title}`,
      description: profile.summary,
      images: [{ url: "/og.png", width: 1717, height: 916, alt: `${profile.name} portfolio` }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${profile.name} — ${profile.title}`,
      description: profile.summary,
      images: ["/og.png"],
    },
  };
}

export default function Home() {
  return (
    <PortfolioProvider>
      <SiteHeader />
      <main id="main-content" className="main-content" tabIndex={-1}>
        <PortfolioEffects>
          <HeroSection />
          <LiveProductsSection />
          <ProjectsSection />
          <ExperienceSection />
          <ResumeSection />
          <PrinciplesSection />
          <ToolkitSection />
          <ContactSection />
        </PortfolioEffects>
      </main>
      <SiteFooter />
    </PortfolioProvider>
  );
}
