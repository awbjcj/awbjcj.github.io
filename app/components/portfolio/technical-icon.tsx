"use client";
export type TechnicalIconName = "file" | "user" | "shield" | "layers" | "branch" | "mail" | "code" | "pin" | "check" | "cross" | "app" | "globe";
const paths: Record<TechnicalIconName, readonly string[]> = {
  file: ["M6 3h8l4 4v14H6z", "M14 3v5h5M9 12h6M9 16h6"],
  user: ["M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0", "M4 21v-3a6 6 0 0 1 6-6h4a6 6 0 0 1 6 6v3"],
  shield: ["M12 3 3 7v6c0 5 9 9 9 9s9-4 9-9V7z", "m8 12 3 3 5-6"],
  layers: ["m12 3 10 5-10 5L2 8z", "m2 12 10 5 10-5M2 16l10 5 10-5"],
  branch: ["M12 5v7M4 19v-7h16v7", "M10 2h4v4h-4zM2 18h4v4H2zM10 18h4v4h-4zM18 18h4v4h-4z"],
  mail: ["M3 5h18v14H3z", "m3 5 9 8 9-8"],
  code: ["m8 6-6 6 6 6M16 6l6 6-6 6M14 3l-4 18"],
  pin: ["M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0", "M15 10a3 3 0 1 1-6 0 3 3 0 0 1 6 0"],
  check: ["m5 12 4 4 10-10"],
  cross: ["m6 6 12 12M18 6 6 18"],
  globe: ["M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0", "M3 12h18M12 3a18 18 0 0 1 0 18 18 18 0 0 1 0-18"],
  app: ["M3 3h18v18H3zM3 8h18", "M7 5h.01M10 5h.01"],
};
export function TechnicalIcon({ name, className = "" }: { name: TechnicalIconName; className?: string }) {
  return <svg className={"technical-icon " + className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name].map((d, index) => <path key={index} d={d} />)}</svg>;
}
