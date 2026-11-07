"use client";
import { useEffect, useRef, useState } from "react";
import { Command } from "cmdk";
import { enhancementSettings } from "../../content/enhancements.config";
import { useContent } from "./preferences";
import { jumpToAnchor } from "./local-navigation";
import { ArrowIcon } from "./primitives";
import { TechnicalIcon } from "./technical-icon";

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
        <span>{copy.open}</span><kbd>Ctrl / ⌘ K</kbd>
      </button>
      <dialog ref={dialog} id="portfolio-command-menu" className="command-dialog" aria-labelledby="command-title" aria-describedby="command-hint">
        <div className="command-heading"><h2 id="command-title">{copy.title}</h2><button type="button" onClick={() => dialog.current?.close()} aria-label={copy.close}><TechnicalIcon name="cross" /></button></div>
        <Command label={copy.open} loop>
          <Command.Input ref={input} value={search} onValueChange={setSearch} placeholder={copy.search} />
          <Command.List>
            <Command.Empty>{copy.empty}</Command.Empty>
            <Command.Group heading={copy.sections}>
              {siteConfig.navigation.map((item) => <Command.Item key={item.href} value={`section ${item.href}`} keywords={[item.label]} onSelect={() => jump(item.href)}><span>{item.label}</span><ArrowIcon /></Command.Item>)}
            </Command.Group>
            <Command.Group heading={copy.projects}>
              {projects.map((project) => <Command.Item key={project.id} value={`project ${project.id}`} keywords={[project.name, ...project.skills]} onSelect={() => jump(`#project-${project.id}`)}><span>{project.name}</span><ArrowIcon /></Command.Item>)}
            </Command.Group>
            <Command.Group heading={copy.links}>
              <Command.Item value="email" keywords={[siteConfig.sections.contact.emailLabel]} onSelect={() => { dialog.current?.close(); window.location.assign(`mailto:${contact.email}`); }}><span>{siteConfig.sections.contact.emailLabel}</span><ArrowIcon /></Command.Item>
            </Command.Group>
          </Command.List>
        </Command>
        <p className="command-hint" id="command-hint">{copy.hint}</p>
      </dialog>
    </>
  );
}
