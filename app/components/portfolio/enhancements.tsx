"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { Command } from "cmdk";
import { inView, motion, useInView, useReducedMotion, useScroll } from "motion/react";
import { useAnimate } from "motion/react-mini";
import { enhancementSettings } from "../../content/enhancements.config";
import { useContent } from "./preferences";
import { jumpToAnchor } from "./local-navigation";

/** Content starts visible; entrances are an enhancement after hydration. */
export function PortfolioEffects({ children }: { children: ReactNode }) {
  const [scope, animate] = useAnimate();
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    if (reduced || !enhancementSettings.scrollEffects || !scope.current) return;
    const animations: ReturnType<typeof animate>[] = [];
    const elements = scope.current.querySelectorAll(".section-heading, .project-card, .live-card, .skill-group");
    const stop = inView(elements, (element) => {
      animations.push(animate(element, {
        opacity: [0.55, 1], translate: ["0 18px", "0 0px"],
      }, { duration: 0.55, ease: [0.23, 1, 0.32, 1] }));
    }, { amount: 0.15 });
    return () => {
      stop();
      animations.forEach((animation) => animation.stop());
      elements.forEach((element: HTMLElement) => {
        element.style.removeProperty("opacity");
        element.style.removeProperty("translate");
      });
    };
  }, [animate, reduced, scope]);

  return (
    <div ref={scope}>
      {enhancementSettings.scrollEffects && <motion.div className="reading-progress" style={{ scaleX: scrollYProgress }} aria-hidden="true" />}
      {children}
    </div>
  );
}

/** A decorative map, not a claim about live activity or system health. */
export function SignalMap() {
  const { enhancements } = useContent();
  const ref = useRef<HTMLDivElement>(null);
  const visible = useInView(ref);
  const reduced = useReducedMotion();
  if (!enhancementSettings.signalMap) return null;
  const running = visible && !reduced;
  const nodes = [{ x: 60, y: 78 }, { x: 240, y: 78 }, { x: 420, y: 78 }, { x: 240, y: 170 }];
  return (
    <div className="signal-map" ref={ref} aria-hidden="true">
      <div className="signal-map-caption"><span>{enhancements.signal.label}</span><span className="signal-map-glyph">✳</span></div>
      <svg viewBox="0 0 480 220" fill="none">
        <defs><pattern id="signal-grid" width="20" height="20" patternUnits="userSpaceOnUse"><circle cx="1" cy="1" r="1" fill="currentColor" /></pattern></defs>
        <rect width="480" height="220" fill="url(#signal-grid)" opacity="0.12" />
        <g className="signal-map-wires"><path d="M60 78H420M240 78V170M60 78V170H240M420 78V170H240" /></g>
        <motion.path className="signal-map-stream" d="M60 78H420M240 78V170" strokeDasharray="14 346" animate={{ strokeDashoffset: running ? [360, 0] : 0 }} transition={{ duration: running ? 5 : 0, repeat: running ? Infinity : 0, ease: "linear" }} />
        {nodes.map((node, index) => (
          <g key={index}>
            <circle cx={node.x} cy={node.y} r={index === 1 ? 23 : 17} className="signal-map-node" />
            <circle cx={node.x} cy={node.y} r={index === 1 ? 7 : 4} fill="currentColor" />
            <text x={node.x} y={node.y + 39} textAnchor="middle" fill="currentColor">{enhancements.signal.nodes[index]}</text>
          </g>
        ))}
      </svg>
    </div>
  );
}

export function CommandMenu() {
  const { enhancements, siteConfig, projects, contact } = useContent();
  const copy = enhancements.menu;
  const dialog = useRef<HTMLDialogElement>(null);
  const input = useRef<HTMLInputElement>(null);
  const [search, setSearch] = useState("");

  function openMenu() {
    setSearch("");
    dialog.current?.showModal();
    input.current?.focus();
  }

  useEffect(() => {
    if (!enhancementSettings.commandMenu) return;
    function onKeyDown(event: KeyboardEvent) {
      if (event.key.toLowerCase() === "k" && (event.metaKey || event.ctrlKey) && !event.altKey && !event.isComposing) {
        event.preventDefault();
        if (dialog.current?.open) dialog.current.close();
        else {
          setSearch("");
          dialog.current?.showModal();
          input.current?.focus();
        }
      }
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  function jump(href: string) {
    dialog.current?.close();
    jumpToAnchor(href);
  }

  if (!enhancementSettings.commandMenu) return null;
  return (
    <>
      <button className="command-trigger" type="button" onClick={openMenu} aria-label={copy.open} aria-haspopup="dialog" aria-controls="portfolio-command-menu" title={`${copy.open} (⌘K / Ctrl+K)`}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><circle cx="10.5" cy="10.5" r="6.5" /><path d="m16 16 5 5" /></svg>
        <kbd>⌘K</kbd>
      </button>
      <dialog ref={dialog} id="portfolio-command-menu" className="command-dialog" aria-labelledby="command-title" aria-describedby="command-hint">
        <div className="command-heading"><h2 id="command-title">{copy.title}</h2><button type="button" onClick={() => dialog.current?.close()} aria-label={copy.close}>×</button></div>
        <Command label={copy.open} loop>
          <Command.Input ref={input} value={search} onValueChange={setSearch} placeholder={copy.search} />
          <Command.List>
            <Command.Empty>{copy.empty}</Command.Empty>
            <Command.Group heading={copy.sections}>
              {siteConfig.navigation.map((item) => <Command.Item key={item.href} value={`section ${item.href}`} keywords={[item.label]} onSelect={() => jump(item.href)}><span>{item.label}</span><span aria-hidden="true">↗</span></Command.Item>)}
            </Command.Group>
            <Command.Group heading={copy.projects}>
              {projects.map((project) => <Command.Item key={project.id} value={`project ${project.id}`} keywords={[project.name, ...project.skills]} onSelect={() => jump(`#project-${project.id}`)}><span>{project.name}</span><span aria-hidden="true">↗</span></Command.Item>)}
            </Command.Group>
            <Command.Group heading={copy.links}>
              <Command.Item value="email" keywords={[siteConfig.sections.contact.emailLabel]} onSelect={() => { dialog.current?.close(); window.location.assign(`mailto:${contact.email}`); }}><span>{siteConfig.sections.contact.emailLabel}</span><span aria-hidden="true">↗</span></Command.Item>
            </Command.Group>
          </Command.List>
        </Command>
        <p className="command-hint" id="command-hint">{copy.hint}</p>
      </dialog>
    </>
  );
}
