import type { EducationConfig, PublicationConfig, ResumeRoleConfig } from "./types";

/** Add, remove, or reorder formal roles, education, and publications freely. See app/content/README.md. */
export const resume = {
  roles: [
    {
      company: "Aptiv Corporation",
      role: "Vehicle System Triage Engineer — Technical Lead, VSDA Triage Team",
      period: "Feb 2023 — Present",
      location: "Troy, Michigan",
      highlights: [
        "Built and deployed three Python AI/LLM agents for release-email extraction, release-report generation, and Jira-to-triage-database automation.",
        "Engineered Jira automation that generated more than 1,000 standardized stories team-wide and paired Jira APIs with Jenkins for near-real-time work-history reporting.",
        "Led cross-functional issue triage across nine L1–L3 ADAS programs, personally triaging 267 and directing more than 430 system-, vehicle-, and bench-level tickets.",
        "Automated Polarion test-plan generation, test-case import, and result updates; authored 38 integration and radar-signal test cases with end-to-end requirements traceability.",
        "Earned a 121% top-tier performance rating with Exceeds Expectations across all goals for two consecutive years.",
      ],
    },
    {
      company: "University of Michigan College of Engineering",
      role: "Graduate Student Instructor — Systems Engineering (ISD 521)",
      period: "Aug 2022 — Dec 2022",
      location: "Ann Arbor, Michigan",
      highlights: [
        "Co-guided 51 students across 13 teams through a four-deliverable MBSE project worth 40% of the course grade, translating stakeholder needs into SysML context, behavior, traceability, architecture, and validation models in MagicDraw and MagicGrid.",
        "Authored a five-slide technology-readiness recitation and an 83-formula Excel decision-tree model comparing three investment strategies through expected-payoff and value-of-information analysis.",
      ],
    },
    {
      company: "Varian Medical Systems, a Siemens Healthineers company",
      role: "Systems Engineering Intern",
      period: "Jun 2022 — Sep 2022",
      location: "Palo Alto, California",
      highlights: [
        "Designed a MATLAB GUI application that generated parameterized XML test plans, streamlining execution of radiotherapy-system verification workflows.",
        "Built MATLAB pipelines to acquire, process, and visualize beam data for control-system diagnosis and Beam Generation Monitor subsystem verification.",
        "Collaborated with mechanical, electrical, and software engineers to test a next-generation radiotherapy treatment-system prototype and document results.",
      ],
    },
    {
      company: "Contemporary Intelligent Manufacturing Co. Ltd.",
      role: "Mechanical Engineering Co-op",
      period: "May 2021 — Aug 2021",
      location: "Ningde, China",
      highlights: [
        "Led development and production-line deployment of a portable, non-contact electrode-thickness measurement system meeting a $10,000 maximum-cost requirement and a 0.2-micrometer resolution target.",
      ],
    },
    {
      company: "Shanghai MAXIEYE Technology Co. Ltd.",
      role: "Systems Engineering Intern",
      period: "Mar 2020 — Jun 2020",
      location: "Shanghai, China",
      highlights: [
        "Developed L2 collision-warning requirements and verification plans, then wrote MATLAB tooling to clean and visualize CAN signals for system validation.",
        "Analyzed NHTSA human-factors guidance for L2+/L3 ADAS development and translated findings into system-level engineering inputs.",
      ],
    },
  ] satisfies readonly ResumeRoleConfig[],
  education: [
    {
      school: "University of Michigan — Ann Arbor",
      credential: "Master of Engineering, Systems Engineering & Design",
      period: "Dec 2022",
      detail: "Automotive Engineering concentration · GPA 3.9",
    },
    {
      school: "Shanghai Jiao Tong University",
      credential: "Bachelor of Science, Mechanical Engineering",
      period: "Aug 2021",
      detail: "GPA 3.6",
    },
  ] satisfies readonly EducationConfig[],
  publications: [
    {
      title: "Hybridizing Unsupervised Clustering Methods for In-cylinder Vortex Motion Analysis Under Different Swirl Ratio Conditions",
      authors: "M. Liu, F. Zhao, J. Wu, W. Fan, J. Zhang, and D. Hung",
      venue: "SAE WCX",
      year: "2021",
      href: "https://www.sae.org/publications/technical-papers/content/2021-01-0425/",
    },
    {
      title: "Hybrid Aerial-Aquatic Vehicle for Large Scale High Spatial Resolution Marine Observation",
      authors: "J. Wu, J. Wang, Y. Yang, Z. Zeng, D. Lu, and L. Lian",
      venue: "OCEANS",
      year: "2019",
      href: "https://ieeexplore.ieee.org/document/8867402",
    },
  ] satisfies readonly PublicationConfig[],
};
