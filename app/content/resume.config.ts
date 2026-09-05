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
        "Deployed three Python AI/LLM agents for release email, reports, and Jira triage.",
        "Automated 1,000+ Jira stories and near-real-time reporting with Jenkins.",
        "Led triage across nine ADAS programs: 267 issues personally, 430+ directed; earned top-tier performance twice.",
      ],
    },
    {
      company: "University of Michigan College of Engineering",
      role: "Graduate Student Instructor — Systems Engineering (ISD 521)",
      period: "Aug 2022 — Dec 2022",
      location: "Ann Arbor, Michigan",
      highlights: [
        "Co-guided 51 students across 13 teams through an MBSE project from stakeholder needs to validation models.",
      ],
    },
    {
      company: "Varian Medical Systems, a Siemens Healthineers company",
      role: "Systems Engineering Intern",
      period: "Jun 2022 — Sep 2022",
      location: "Palo Alto, California",
      highlights: [
        "Built MATLAB test-plan and beam-data tooling for radiotherapy-system verification.",
      ],
    },
    {
      company: "Contemporary Intelligent Manufacturing Co. Ltd.",
      role: "Mechanical Engineering Co-op",
      period: "May 2021 — Aug 2021",
      location: "Ningde, China",
      highlights: [
        "Deployed a non-contact thickness measurement system meeting a $10,000 cost cap and 0.2-micrometer target.",
      ],
    },
    {
      company: "Shanghai MAXIEYE Technology Co. Ltd.",
      role: "Systems Engineering Intern",
      period: "Mar 2020 — Jun 2020",
      location: "Shanghai, China",
      highlights: [
        "Built L2 collision-warning requirements, verification plans, and MATLAB CAN-signal tooling.",
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
