import { siteConfig, liveProducts } from "./site.config";
import { projects } from "./projects.config";
import { experience } from "./experience.config";
import { resume } from "./resume.config";
import { focusAreas, skillGroups } from "./skills.config";
import { enhancements } from "./enhancements.config";
import type { ProjectConfig, LiveProductConfig } from "./types";

type Widen<T> = T extends string ? string : T extends readonly (infer U)[] ? readonly Widen<U>[] : T extends object ? { [K in keyof T]: Widen<T[K]> } : T;

export const english = { siteConfig, enhancements, liveProducts: liveProducts as readonly LiveProductConfig[], projects: projects as readonly ProjectConfig[], experience, resume, focusAreas, skillGroups };
export type ContentCatalog = Widen<typeof english>;
export type Locale = "en" | "zh-CN";
