"use client";

import { useId, type ReactNode } from "react";
import type { ArchitectureCopy } from "../../content/casebook.config";
import { TechnicalIcon, type TechnicalIconName } from "./technical-icon";

function Node({ title, detail, icon, className = "", children }: {
  title: string;
  detail?: string;
  icon: TechnicalIconName;
  className?: string;
  children?: ReactNode;
}) {
  return <div className={"flow-node " + className}>
    <div className="flow-node-heading"><TechnicalIcon name={icon} /><strong>{title}</strong></div>
    {detail ? <small>{detail}</small> : null}
    {children}
  </div>;
}

function Arrow({ context = false }: { context?: boolean }) {
  return <span className={"flow-arrow" + (context ? " flow-arrow-context" : "")} aria-hidden="true" />;
}

export function ArchitectureView({ copy }: { copy: ArchitectureCopy }) {
  const captionId = useId();

  return <figure className="architecture-flow" aria-labelledby={captionId}>
    <figcaption className="sr-only" id={captionId}>{copy.title}. {copy.description}</figcaption>
    <div className="flow-inputs">
      {copy.inputs.map((input, index) => <Node key={input.title} {...input} icon={index ? "user" : "file"} />)}
    </div>
    <div className="flow-links" aria-hidden="true">{copy.inputs.map(input => <Arrow key={input.title} />)}</div>
    <Node {...copy.processor} icon="branch" className="flow-processor" />
    {/* Only the draft continues from processing. The adjacent context supports review. */}
    <div className="flow-links" aria-hidden="true"><Arrow /></div>
    <div className="flow-context">
      <Node {...copy.candidate} icon="file" className="flow-candidate" />
      <Node title={copy.evidence.title} icon="layers" className="flow-evidence">
        <ul>{copy.evidence.items.map(item => <li key={item}>{item}</li>)}</ul>
      </Node>
    </div>
    <div className="flow-links" aria-hidden="true"><Arrow /><Arrow context /></div>
    <Node title={copy.checks.title} icon="shield" className="flow-checks">
      <ul>{copy.checks.items.map(item => <li key={item}>{item}</li>)}</ul>
    </Node>
    <div className="flow-branches">
      <div className="flow-branch">
        <Arrow />
        <div className="flow-outcome flow-pass">
          <div className="flow-outcome-label"><TechnicalIcon name="check" /><span>{copy.pass}</span></div>
          <p>{copy.accept}</p>
        </div>
        <Arrow />
        <Node {...copy.output} icon="file" className="flow-output" />
      </div>
      <div className="flow-branch">
        <Arrow />
        <div className="flow-outcome flow-review">
          <div className="flow-outcome-label"><TechnicalIcon name="cross" /><span>{copy.fail}</span></div>
          <p>{copy.revise}</p>
        </div>
      </div>
    </div>
  </figure>;
}
