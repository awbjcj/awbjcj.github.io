import type { Metadata } from "next";
import { headers } from "next/headers";
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

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "awbjcj.github.io";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.includes("localhost") ? "http" : "https");
  const baseUrl = new URL(`${protocol}://${host}`);

  return {
    metadataBase: baseUrl,
    title: `${profile.name} — ${profile.title}`,
    description: profile.summary,
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
    <>
      <SiteHeader />
      <main id="main-content" className="main-content" tabIndex={-1}>
        <HeroSection />
        <LiveProductsSection />
        <ProjectsSection />
        <ExperienceSection />
        <ResumeSection />
        <PrinciplesSection />
        <ToolkitSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
