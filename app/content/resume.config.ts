import type { EducationConfig, ResumeRoleConfig } from "./types";

/** Add, remove, or reorder formal roles and education entries freely. */
export const resume = {
  roles: [
    {
      company: "Aptiv Corporation",
      role: "Vehicle Issue Triage Engineer",
      period: "Feb 2023 — Present",
      location: "Troy, Michigan",
      highlights: [
        "Triaged issues from vehicle tests, clarified ownership, and aligned internal engineering teams with external customers on findings.",
        "Coordinated test-case design against customer requirements and refined the process for identifying potential issues.",
        "Identified recurring failure patterns, escalated potential product defects, and partnered with development teams through resolution.",
      ],
    },
    {
      company: "University of Michigan College of Engineering",
      role: "Graduate Student Instructor",
      period: "Sep 2022 — Dec 2022",
      location: "Ann Arbor, Michigan",
      highlights: [
        "Clarified assignment requirements and deliverables, held office hours, and gave students actionable feedback on projects.",
        "Prepared lecture and review materials with the professor and evaluated coursework throughout the term.",
      ],
    },
    {
      company: "Varian Medical Systems",
      role: "Systems Engineering Intern",
      period: "Jun 2022 — Sep 2022",
      location: "Palo Alto, California",
      highlights: [
        "Collaborated across engineering disciplines to build and evaluate a new-project prototype against system KPIs.",
        "Visualized and documented test results and created a GUI application for generating test plans.",
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
};
