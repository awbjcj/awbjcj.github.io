import type { ReactNode } from "react";
import { displayValue, isPlaceholder } from "../../content";

/** Inline SVG avoids platform-dependent emoji rendering for directional arrows. */
export function ArrowIcon() {
  return (
    <svg className="icon" viewBox="0 0 12 12" aria-hidden="true">
      <path d="M3.6 8.4 8.4 3.6M4.6 3.6h3.8v3.8" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ArrowUpIcon() {
  return (
    <svg className="icon" viewBox="0 0 12 12" aria-hidden="true">
      <path d="M6 9.4V2.6M3 5.6 6 2.6l3 3" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** Keeps new-window behavior explicit without adding visual noise to every link. */
export function ExternalLinkHint({ destination = "link" }: { destination?: string }) {
  return <span className="sr-only"> ({destination} opens in a new tab)</span>;
}

/** Section eyebrow. `count` is shown only where a total is genuinely informative. */
export function Label({ children, count }: { children: string; count?: string }) {
  return (
    <p className="label">
      {children}
      {count ? <span className="count">{count}</span> : null}
    </p>
  );
}

/**
 * Renders authored copy while keeping unfinished placeholders visible locally.
 * The content publishing gate prevents this authoring state from shipping.
 */
export function Field({ value, as: Tag = "span" }: { value: string; as?: "span" | "h3" | "p" }) {
  if (!isPlaceholder(value)) return <Tag>{value}</Tag>;
  return (
    <Tag className="unfilled" title="Placeholder — replace in app/content/*.config.ts">
      {displayValue(value)}
      <span className="sr-only"> (placeholder content, not yet written)</span>
    </Tag>
  );
}

export function SectionHeading({ label, title, description, count }: {
  label: string;
  title: string;
  description: string;
  count?: string;
}) {
  return (
    <div className="section-heading">
      <div>
        <Label count={count}>{label}</Label>
        <h2>{title}</h2>
      </div>
      <p>{description}</p>
    </div>
  );
}

export function ExternalLink({
  href,
  className,
  destination,
  children,
}: {
  href: string;
  className?: string;
  destination?: string;
  children: ReactNode;
}) {
  return (
    <a className={className} href={href} target="_blank" rel="noreferrer">
      {children} <ArrowIcon /><ExternalLinkHint destination={destination} />
    </a>
  );
}
