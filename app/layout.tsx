import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "David Wu — AI Agent & MCP Server Developer",
  description: "Portfolio of David Wu, an AI agent and MCP server developer building production-ready agentic systems.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
