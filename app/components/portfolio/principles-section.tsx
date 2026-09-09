import { focusAreas, siteConfig, skillGroups } from "../../content";
import { Label } from "./primitives";

export function PrinciplesSection() {
  const { approach } = siteConfig.sections;

  return (
    <section className="section approach-section">
      <div className="wrap approach-layout">
        <div className="approach-intro">
          <Label>{approach.label}</Label>
          <h2>{approach.title}</h2>
          <p>{approach.description}</p>
        </div>
        <ul className="focus-list">
          {focusAreas.map((area, areaIndex) => (
            <li key={area.title}>
              <span className="focus-index" aria-hidden="true">{String(areaIndex + 1).padStart(2, "0")}</span>
              <div><h3>{area.title}</h3><p>{area.description}</p></div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function ToolkitSection() {
  const { toolkit } = siteConfig.sections;

  return (
    <section className="section toolkit-section" id="toolkit">
      <div className="wrap toolkit-layout">
        <div className="toolkit-title">
          <Label>{toolkit.label}</Label>
          <h2>{toolkit.title}</h2>
        </div>
        <div className="skill-groups">
          {skillGroups.map((group) => (
            <div className="skill-group" key={group.label}>
              <h3>{group.label}</h3>
              <ul>{group.skills.map((skill) => <li key={skill}>{skill}</li>)}</ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
