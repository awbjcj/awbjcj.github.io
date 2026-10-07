"use client";

import { createContext, useContext, useEffect, useSyncExternalStore, type ReactNode } from "react";
import { english, type ContentCatalog, type Locale } from "../../content/catalog";
import { chinese } from "../../content/zh-CN.config";
import { installLocalNavigation, preferenceEvent, pushLocalUrl } from "./local-navigation";

const ContentContext = createContext<ContentCatalog>(english);
const eventName = preferenceEvent;
let volatileTheme: string | null = null;

function readPreference(key: string) {
  try { return localStorage.getItem(key); } catch { return null; }
}

function savePreference(key: string, value: string) {
  try { localStorage.setItem(key, value); return true; } catch { return false; }
}

function subscribe(callback: () => void) {
  const media = window.matchMedia("(prefers-color-scheme: dark)");
  window.addEventListener(eventName, callback);
  window.addEventListener("storage", callback);
  window.addEventListener("popstate", callback);
  media.addEventListener("change", callback);
  return () => {
    window.removeEventListener(eventName, callback);
    window.removeEventListener("storage", callback);
    window.removeEventListener("popstate", callback);
    media.removeEventListener("change", callback);
  };
}

function getLocale(): Locale {
  const query = new URLSearchParams(window.location.search).get("lang");
  if (query === "en" || query === "zh-CN") return query;
  const saved = readPreference("portfolio-locale");
  if (saved === "en" || saved === "zh-CN") return saved;
  return navigator.language.toLowerCase().startsWith("zh") ? "zh-CN" : "en";
}

function getTheme() {
  const saved = volatileTheme ?? readPreference("portfolio-theme");
  if (saved === "dark" || saved === "light") return saved;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

const serverLocale = (): Locale => "en";
const serverTheme = () => "light";

export function PortfolioProvider({ children }: { children: ReactNode }) {
  const locale = useSyncExternalStore(subscribe, getLocale, serverLocale);
  const theme = useSyncExternalStore(subscribe, getTheme, serverTheme);
  const content = locale === "zh-CN" ? chinese : english;

  useEffect(() => installLocalNavigation(), []);

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dataset.theme = getTheme();
  }, [locale, theme]);

  return (
    <ContentContext value={content}>
      <title>{`${content.siteConfig.profile.name} — ${content.siteConfig.profile.title}`}</title>
      <meta name="description" content={content.siteConfig.profile.summary} />
      {children}
    </ContentContext>
  );
}

export function useContent() {
  const content = useContext(ContentContext);
  return { ...content, profile: content.siteConfig.profile, contact: content.siteConfig.contact };
}

export function PreferenceControls() {
  const { siteConfig: { preferences } } = useContent();
  const locale = useSyncExternalStore(subscribe, getLocale, serverLocale);
  const theme = useSyncExternalStore(subscribe, getTheme, serverTheme);

  function changeLocale(value: Locale) {
    const url = new URL(window.location.href);
    url.searchParams.set("lang", value);
    if (url.href !== window.location.href) pushLocalUrl(url);
    savePreference("portfolio-locale", value);
    window.dispatchEvent(new Event(eventName));
  }

  function toggleTheme() {
    const next = theme === "dark" ? "light" : "dark";
    volatileTheme = savePreference("portfolio-theme", next) ? null : next;
    document.documentElement.dataset.theme = next;
    window.dispatchEvent(new Event(eventName));
  }

  return (
    <div className="preference-controls" role="group" aria-label={preferences.label}>
      <label className="language-control">
        <span className="sr-only">{preferences.language}</span>
        <select value={locale} onChange={(event) => changeLocale(event.target.value as Locale)}>
          <option value="en" lang="en">EN</option>
          <option value="zh-CN" lang="zh-CN">中文</option>
        </select>
      </label>
      <button type="button" className="theme-toggle" onClick={toggleTheme} aria-label={preferences.theme} aria-pressed={theme === "dark"} title={theme === "dark" ? preferences.light : preferences.dark}>
        <svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          {theme === "dark" ? <><circle cx="12" cy="12" r="4" /><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5" /></> : <path d="M20.5 13a8.5 8.5 0 0 1-9.5-9.5A8.5 8.5 0 1 0 20.5 13Z" />}
        </svg>
      </button>
    </div>
  );
}
