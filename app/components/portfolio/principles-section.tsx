"use client";
import { useContent } from "./preferences";
import { TechnicalIcon, type TechnicalIconName } from "./technical-icon";
const principleIcons: TechnicalIconName[] = ["shield", "user", "layers"];
export function PrinciplesSection() {
  const { focusAreas, siteConfig, casebook } = useContent();
  return <section className="approach-section" aria-labelledby="engineering-approach"><div className="approach-heading"><h2 id="engineering-approach">{casebook.labels.approach}</h2><p>{siteConfig.sections.approach.description}</p></div><ul className="focus-list">{focusAreas.map((area, index) => <li key={area.title}><TechnicalIcon name={principleIcons[index % principleIcons.length]} /><div><h3>{area.title}</h3><p>{area.description}</p></div></li>)}</ul></section>;
}
export function ToolkitSection() {
  const { siteConfig, skillGroups } = useContent();
  const { toolkit } = siteConfig.sections;
  return <section className="section toolkit-section" id="toolkit"><div className="wrap toolkit-layout"><div className="toolkit-title"><h2>{toolkit.title}</h2></div><div className="skill-groups">{skillGroups.map(group => <div className="skill-group" key={group.label}><h3>{group.label}</h3><ul>{group.skills.map(skill => <li key={skill}>{skill}</li>)}</ul></div>)}</div></div></section>;
}
