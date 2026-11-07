import type { Metadata } from "next";
import "./globals.css";
import { localHistoryEvent } from "./components/portfolio/local-navigation";
export const metadata: Metadata = {
  icons: { icon: "/favicon.svg", shortcut: "/favicon.ico" },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preload" href="/fonts/kantumruy-pro-latin.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <script data-local-history-init="true" dangerouslySetInnerHTML={{ __html: `(function(){var path=location.pathname;window.addEventListener('popstate',function(e){if(location.pathname!==path)return;e.stopImmediatePropagation();window.dispatchEvent(new CustomEvent(${JSON.stringify(localHistoryEvent)},{detail:e.state}))},true)})()` }} />
        <script dangerouslySetInnerHTML={{ __html: "(function(){var t;try{t=localStorage.getItem('portfolio-theme')}catch(e){}document.documentElement.dataset.theme=t==='dark'||t==='light'?t:matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'})()" }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
