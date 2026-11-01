# Project content evidence

Refreshed 2026-10-31 against GitHub's default-branch heads using the connected
GitHub account and live remote ref checks. The revisions below pin the reviewed
implementation, rather than the older snapshots named inside some project
dossiers. English and Simplified Chinese project and engineering-experience copy
reflect the same evidence.

These are implementation descriptions. Hosted entry points do not establish
that every development-branch feature is deployed. Provider fixtures do not
establish live Slack, WhatsApp, Microsoft consent, or employer submission
acceptance. No production performance, test-total, or model-quality claims were
added. Employment, education, publications, and the downloadable résumé retain
their existing source basis.

## Public projects

| Project | Reviewed GitHub revision / branch | Implementation reflected in both languages |
| --- | --- | --- |
| Resume Tailor Harness | [`429106b88587059c97ecedf097fb1338fba07a31`](https://github.com/awbjcj/resume-tailor-harness/commit/429106b88587059c97ecedf097fb1338fba07a31) / `dev` | Deterministic claim checks; external-agent application preparation with revision-checked answers and verified attachments; Gmail, Outlook, and IMAP review-first tracking; evidence-backed optional sections and visual PDF layout review. |
| Pantry Manager | [`98a1e59580cfbd38b9159cab2ee740de8dae02aa`](https://github.com/awbjcj/pantry-manager/commit/98a1e59580cfbd38b9159cab2ee740de8dae02aa) / `dev` | Store grouping, confirmed batch pantry actions, learned food preferences, and owner-managed Telegram, Slack, and WhatsApp connections sharing household authorization. Slack and WhatsApp are self-hosted integration capabilities; Telegram remains the hosted entry point. |
| Deep Agents UI | [`6d52a17cb8a91db07137d6a24d228c34b235aa29`](https://github.com/awbjcj/deep-agents-ui/commit/6d52a17cb8a91db07137d6a24d228c34b235aa29) / `dev` | Customized LangChain console; checkpoint continuation, interrupt-bound approvals, budgets, scheduled-task controls, file mentions, queued messages, and LLM Wiki page metadata and source-image previews. Upstream authorship remains explicit. |
| Video Dedup | [`fec73ed71f24a4329addcbfb8bba3d7e47c992fb`](https://github.com/awbjcj/video-dedup/commit/fec73ed71f24a4329addcbfb8bba3d7e47c992fb) / `master` | Saved-plan recovery, shared-file decision synchronization across clip groups, scan/removal progress, retained-content coverage checks, and quarantine. |

Implementation paths at those pinned revisions:

- Resume Tailor Harness: `src/resume_tailor_harness/services/agent_applications.py`,
  `src/resume_tailor_harness/services/application_prompt.py`,
  `src/resume_tailor_harness/models/resume.py`,
  `src/resume_tailor_harness/render/layout_review.py`,
  `src/resume_tailor_harness/career_skills/registry.py`, and
  `docs/mailbox-connections.md`. Application preparation does not establish
  employer submission; visual layout evidence does not establish factual support.
- Pantry Manager: `app/messaging/`, `app/application/messaging_commands.py`,
  `app/batch_service.py`, `app/pantry_service.py`, `README.md`, and
  `docs/messaging-connections.md`. The connection console is currently English;
  household workflows and the Mini App support the documented four languages.
- Deep Agents UI: `src/app/components/ScheduledTaskEditor.tsx`,
  `src/app/components/ChatComposer.tsx`,
  `src/app/components/LlmWikiPagePreview.tsx`,
  `src/app/components/MarkdownContent.tsx`, `src/lib/llm-wiki-page.ts`,
  `src/app/utils/threadHeadSubmit.ts`, and `src/app/utils/interruptResume.ts`.
- Video Dedup: `README.md`, `video_dedup.py`, and `review-ui/`.
  Coverage checks govern approved removals; scanning itself does not remove files.

## Private projects

Private repositories remain unlinked in public cards and these notes. Revisions
and repository-relative paths record the review without publishing private URLs.

| Portfolio project | Reviewed GitHub revision / branch | Implementation evidence |
| --- | --- | --- |
| Requirement Buddy (`requirement-buddy` repository) | `d746fa4a1fe312aa8ab722bff9f71ab0a4ea7ed0` / `master` | `requirement-buddy-dossier.md`; `src/requirement-buddy-sdk/src/requirement_buddy_sdk/{freshness,batches,runtime,store}.py`; `tools/polarion-workitems/src/polarion_workitems/{publication,test_tools,test_management}.py`. Source-revision checks, reviewed batches, resumable execution, and read-back-verified test-management writes. |
| VSDA Deep Agent | `efd574469409e53a330243c7afea8ca49b87d76a` / `dev` | `vsda-deep-agent-dossier.md`; `src/backends/scheduled_tasks/{contracts,store,worker}.py`; `docs/agent/scheduled-tasks.md`; `src/backends/teams_chat/`; `src/deep_agent/mutations/`; `src/deep_agent/tools/sharepoint_tools.py`; `src/personal_skills/`. Governed schedules, opt-in Teams ingress, reviewed enterprise writes, retrieval, and revisioned private skills. The task-focused candidate is disabled by default and is not described as accepted production behavior. |
| Release-Email Intelligence Pipeline | `b76246107192bbc3c264026ff6e90fb5dfff96af` / `main` | `src/batch_process_email_releases.py`; `src/graph_token_receiver.py`; `tests/test_release_failure_recovery.py`; `tests/test_run_notifications.py`; `README.md`. Failed extractions remain retryable, reviewer dependencies are served locally, and remote token posts require HTTPS by default, with loopback and explicit operator-override exceptions. Queued jobs are not reported as completed builds. |
| Enterprise Engineering Automation | `a0c0c394a85ad4a2fe1435c35a9c249c34053fed` / `David_Dev` | `docs/bulk-concurrency.md`; `automation_concurrency.py`; `PolarionAPI/`; the component dossiers. Adaptive concurrency is bounded per batch, preserves input order, and supports live operator limits; incomplete Jira searches fail closed. Polarion PDF exports retry dropped connections and deferred timeouts. |
| Confluence Wiki Maintainer | `3287b1ff8a2d66b58360014a6eb3c0aae0471b15` / `master` | `README.md`; `docs/human-review.md`; `src/confluence_wiki_maintainer/{models,artifacts,preview,publish}.py`. Copilot/Codex workers exchange validated files; independent content/diagram review precedes digest-authorized publication. Human preview approval is optional per run, and receipts bind the exact content, target, images, and preview. The host owns storage XML and page-version checks. |

The selected-work list adds Confluence Wiki Maintainer while retaining the
existing project selection. Repository access alone is not evidence of original
authorship; unrelated forks and previously excluded projects were not added.
