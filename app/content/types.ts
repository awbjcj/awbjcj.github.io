/** A link rendered on a project card. `href` is absolute; `label` is the visible text. */
export type ProjectLink = { href: string; label: string };

export type ProjectConfig = {
  name: string;
  kind: string;
  signal: string;
  description: string;
  skills: readonly string[];
  /**
   * Source link. Optional on purpose: several projects are private repositories,
   * and a card with no link is honest where a dead link is not.
   */
  repo?: ProjectLink;
  /** Usable, deployed surface — the strongest evidence a card can carry. */
  live?: ProjectLink;
};

export type ExperienceConfig = {
  label: string;
  title: string;
  description: string;
  link?: string;
};

export type ResumeRoleConfig = {
  company: string;
  role: string;
  period: string;
  location: string;
  highlights: readonly string[];
};

export type EducationConfig = {
  school: string;
  credential: string;
  period: string;
  detail: string;
};

export type FocusAreaConfig = { title: string; description: string };
export type SkillGroupConfig = { label: string; skills: readonly string[] };

/** A product a visitor can actually open and use, featured above the project grid. */
export type LiveProductConfig = {
  name: string;
  tagline: string;
  description: string;
  facts: readonly string[];
  href: string;
  actionLabel: string;
  /**
   * Present on the product that accepts a prefilled sign-up. The form is a plain
   * GET form: the browser serializes the fields into the query string that the
   * target's registration page already reads.
   */
  trial?: {
    action: string;
    heading: string;
    note: string;
    nameField: string;
    emailField: string;
    submitLabel: string;
  };
};
