"use client";
import type { ArchitectureCopy } from "../../content/casebook.config";
import { TechnicalIcon, type TechnicalIconName } from "./technical-icon";
function Node({ title, detail, icon, className = "", children }: { title: string; detail?: string; icon: TechnicalIconName; className?: string; children?: React.ReactNode }) {
  return <div className={"flow-node " + className}><TechnicalIcon name={icon} /><div><strong>{title}</strong>{detail ? <small>{detail}</small> : null}{children}</div></div>;
}
export function ArchitectureView({ copy }: { copy: ArchitectureCopy }) {
  return <figure className="architecture-flow" aria-label={copy.title}>
    <div className="architecture-sources">
      <div className="flow-inputs">{copy.inputs.map((input, index) => <Node key={input.title} {...input} icon={index ? "user" : "file"} />)}</div>
      <span className="flow-arrow flow-arrow-input" aria-hidden="true" />
      <Node {...copy.processor} icon="branch" className="flow-processor" />
      <span className="flow-arrow" aria-hidden="true" />
      <Node title={copy.evidence.title} icon="layers" className="flow-evidence"><ul>{copy.evidence.items.map(item => <li key={item}>{item}</li>)}</ul></Node>
    </div>
    <div className="verification-loop">
      <h4>{copy.checks.title}</h4>
      <div className="verification-path">
        <Node {...copy.candidate} icon="file" className="flow-candidate" />
        <span className="flow-arrow" aria-hidden="true" />
        <Node title={copy.checks.title} icon="shield" className="flow-checks"><ul>{copy.checks.items.map(item => <li key={item}>{item}</li>)}</ul></Node>
        <span className="flow-arrow" aria-hidden="true" />
        <div className="flow-routes">
          <div><span className="flow-pass"><TechnicalIcon name="check" />{copy.pass}</span><span className="flow-route-result">{copy.accept}</span></div>
          <div><span className="flow-review"><TechnicalIcon name="cross" />{copy.fail}</span><span className="flow-route-result">{copy.revise}</span></div>
        </div>
      </div>
    </div>
    <div className="flow-output-connector" aria-hidden="true" />
    <Node {...copy.output} icon="file" className="flow-output" />
  </figure>;
}
