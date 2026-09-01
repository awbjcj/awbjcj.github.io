import type { Metadata } from "next";
import { Inter, Instrument_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

/**
 * Three roles, three faces: a narrow engineered grotesk for display, a neutral
 * reading face for body copy, and a mono for the labels and status readouts
 * that carry the "instrument" language.
 */
const display = Instrument_Sans({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-display",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jiajin (David) Wu — AI/LLM Software & Application Engineer",
  description: "Portfolio of Jiajin (David) Wu, an AI/LLM engineer building governed multi-agent platforms, hybrid retrieval systems, and full-stack AI applications.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.ico" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
