"use client";
import { useRef, useState, type KeyboardEvent } from "react";
import { featuredProjectIds, type CaseStudyId } from "../../content/casebook.config";
import { useContent } from "./preferences";
import { ArrowIcon, ExternalLinkHint } from "./primitives";
import { TechnicalIcon } from "./technical-icon";
import { ArchitectureView } from "./architecture-view";

export function HeroSection() {
  const { casebook, projects, contact } = useContent();
  const [selectedId, setSelectedId] = useState<CaseStudyId>("resume");
  const tabs = useRef<HTMLDivElement>(null);
  const labels = casebook.labels;
  const featured = featuredProjectIds.flatMap(id => {
    const project = projects.find(item => item.id === id);
    return project ? [{ ...project, copy: casebook.projects[id] }] : [];
  });
  const selected = featured.find(project => project.id === selectedId) ?? featured[0];
  if (!selected) return null;
  const copy = selected.copy;

  function navigateTabs(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let next = index;
    if (event.key === "ArrowDown" || event.key === "ArrowRight") next = (index + 1) % featured.length;
    else if (event.key === "ArrowUp" || event.key === "ArrowLeft") next = (index - 1 + featured.length) % featured.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = featured.length - 1;
    else return;
    event.preventDefault();
    setSelectedId(featured[next].id as CaseStudyId);
    tabs.current?.querySelectorAll<HTMLButtonElement>('[role="tab"]')[next]?.focus();
  }

  return <section className="casebook-shell" aria-label={labels.projects}>
    <aside className="project-rail">
      <h2 className="rail-heading">{labels.projects}</h2>
      <label className="mobile-project-select"><span>{labels.selectProject}</span><select value={selected.id} onChange={event => { setSelectedId(event.target.value as CaseStudyId); }}>{featured.map(project => <option key={project.id} value={project.id}>{project.name}</option>)}</select></label>
      <div className="project-tabs" ref={tabs} role="tablist" aria-label={labels.selectProject} aria-orientation="vertical">
        {featured.map((project, index) => <button type="button" role="tab" id={"case-tab-" + project.id} aria-controls="project-case" aria-selected={selected.id === project.id} tabIndex={selected.id === project.id ? 0 : -1} onClick={() => { setSelectedId(project.id as CaseStudyId); }} onKeyDown={event => navigateTabs(event, index)} key={project.id}><span className="rail-square" aria-hidden="true" /><span><strong>{project.name}</strong><small>{project.copy.railDetail}</small></span></button>)}
      </div>
      <div className="rail-shortcuts">
        {selected.repo ? <a href={selected.repo.href} target="_blank" rel="noreferrer"><TechnicalIcon name="code" />{labels.source}<ExternalLinkHint /></a> : <span><TechnicalIcon name="code" />{labels.private}</span>}
        {selected.live ? <a href={selected.live.href} target="_blank" rel="noreferrer"><TechnicalIcon name="app" />{selected.live.label}<ExternalLinkHint /></a> : null}
        <a href={contact.resumeFile} download><TechnicalIcon name="file" />{labels.resume}</a>
        <a href={"mailto:" + contact.email}><TechnicalIcon name="mail" />{labels.contact}</a>
        <a href="#work" className="rail-all">{labels.allProjects}<ArrowIcon /></a>
      </div>
      <div className="drafting-guides" aria-hidden="true"><i /><i /><i /><i /></div>
    </aside>
    <div className="case-sheet" id="project-case" role="tabpanel" aria-labelledby="case-title" tabIndex={0}>
      <div className="case-title-row"><h2 id="case-title">{selected.name}</h2><p>{copy.subtitle}</p></div>
      <p className="case-purpose">{copy.purpose}</p>
      <div className="case-columns" key={selected.id}>
        <div className="case-narrative">
          <div className="case-actions">
            {selected.live ? <a className="button button-primary" href={selected.live.href} target="_blank" rel="noreferrer"><TechnicalIcon name="app" />{selected.live.label}<ExternalLinkHint /></a> : null}
            {selected.repo ? <a className="button button-outline" href={selected.repo.href} target="_blank" rel="noreferrer"><TechnicalIcon name="code" />{labels.source}<ExternalLinkHint /></a> : null}
            <a className="button button-outline" href={contact.resumeFile} download><TechnicalIcon name="file" />{labels.resume}</a>
            <a className="button button-outline" href={"mailto:" + contact.email}><TechnicalIcon name="mail" />{labels.contact}</a>
          </div>
          <div className="case-stack"><strong>{labels.technologies}</strong><ul>{selected.skills.map(skill => <li key={skill}>{skill}</li>)}</ul></div>
          <div className="case-summary"><h3>{labels.summary}</h3><p>{copy.summary}</p></div>
          <div className="case-workflow"><h3>{labels.workflow}</h3><ol>{copy.steps.map((step, index) => <li key={step.title}><span className="step-index" aria-hidden="true">{index + 1}</span><p><strong>{step.title}</strong><span>{step.detail}</span></p></li>)}</ol></div>
        </div>
        <div className="case-architecture"><h3>{copy.architecture.title}</h3><p>{copy.architecture.description}</p><ArchitectureView copy={copy.architecture} /></div>
      </div>
    </div>
  </section>;
}
