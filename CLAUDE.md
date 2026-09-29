# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A single-page, framework-free dashboard that visualizes the SP8–SP14 development roadmap of a search product ("신통합검색") as an RPG quest board. Three files do everything: [index.html](index.html) (static skeleton + modals), [styles.css](styles.css) (design system), [app.js](app.js) (all data + all logic). No build step, no package manager, no tests, no linter.

All user-facing copy is Korean. [README.md](README.md) is a Korean handover document that duplicates the data-model reference below — update it when the data shapes or sprint contents change.

## Running

```bash
python3 -m http.server 8000   # from repo root
open http://localhost:8000
```

`.claude/launch.json` defines the same server as a `quest-dashboard` preview config, so it can also be started through Claude Code's preview tooling. Setup on a fresh machine is `git clone` + python3 — there is nothing else to install.

Both asset links in [index.html](index.html) are cache-busted (`styles.css?v=12`, `app.js?v=12`). **Bump both `v=` values when you change CSS or JS**, or reloads may serve stale files.

## Working rule: edit → verify → record

Every change to this project follows the same loop, in order:

1. **Edit** the relevant file(s).
2. **Verify the code before considering it done** — bump the `v=` cache-busting versions, serve locally (`python3 -m http.server 8000`), load the page, and confirm there are **zero console errors** while exercising the code paths you touched (switch across sprints SP8↔SP14, redraw the board, open/close a quest modal, play a storyboard). Never report a change as complete on a read-through alone.
3. **Record** what changed: update this CLAUDE.md and [README.md](README.md) whenever data shapes, invariants, or architecture shift, and note the version bump.

## Architecture

Two module-level data structures in [app.js](app.js) drive the entire UI; everything else is rendering.

**`quests` — [app.js:2](app.js#L2)** — 12 scenario definitions (`id` 1–12), static across sprints. Holds `badge`, `title`, `zone`, `context`, `goals`, `conditions`, `backlogs`, `rewards {xp, stat, statVal}`, and a `persona` with a `storyboard` array of `{type: "narrator"|"user"|"system", text}` steps. `isExpanded: true` marks the Expanded-MVP quests (ids 9–12); `isOps: true` marks the operator-facing ones (ids 7 and 11, both with 박관리 as persona).

**`sprintRoadmap` — [app.js:489](app.js#L489)** — keyed `SP8`…`SP14`. Each sprint carries `period`, `progress`, `concept`, `value`, `review`, its own `storyboard`, and `scenarioStatus` — a map from quest id to `{role, rank, desc}`. This is where per-sprint progress lives.

- `rank` 0–7 maps positionally into the module-level `RANK_TITLES` constant ([app.js](app.js), defined once below the `state` global): 미착수 🔒 / 정책정의 📜 / 일부구현 🛠️ / 경로연결 🔗 / 결과확장 ✨ / 운영가능 🛡️ / QA검증완료 🏆 / 오픈준비완료 🚀. Rank 6 is where SP13's integration QA lands; rank 7 is SP14 fixing what QA found, re-verifying it and rolling it to production. Rank 0 → locked node, `MAX_RANK` → completed (green), else active (cyan). `MAX_RANK` is derived as `RANK_TITLES.length - 1` and is the only thing the render logic and the progress denominator compare against — adding a rung means adding a title plus a matching `.rank-N` rule in [styles.css](styles.css), nothing else.
- **Rank titles are read through `rankTitle(quest, rank)`, never by indexing `RANK_TITLES` directly.** Three rungs are phrased around the customer's search-result journey and do not describe the operator-facing quests, so `isOps` quests read them from the `OPS_RANK_TITLES` override map instead: rank 3 경로연결 🔗 → 운영연동 🔗 (a batch/ingest pipeline being wired up, not screens being linked), rank 4 결과확장 ✨ → 기능확장 ✨ (management capability added, not results widened), rank 6 QA검증완료 🏆 → 운영검증완료 🏆 (an operations check, not customer E2E QA). Ranks 0–2, 5 and 7 are shared, and the ladder stays 8 rungs deep, so progress, node colours and path colours are untouched by the override. Keep each override's emoji identical to `RANK_TITLES` at the same index so the two tracks still read as one ladder. Quest 8 is deliberately *not* `isOps` despite its internal QA-engineer persona — its deliverable is the customer E2E acceptance test, so 'QA검증완료' is exactly right for it.
- `role` is `primary` | `supporting` | `validation` | `none`, and is rendered as a CSS class (`.role-badge.<role>`).

**Convention: every sprint's `scenarioStatus` should define all 12 quest ids.** Both `renderQuestBoard()` and `drawConnections()` now skip any quest missing a status (rather than throwing), so a gap degrades gracefully — but a missing id still means that node and its connecting path silently disappear, so keep all 12 defined.

### Render pipeline

`updateUI()` is the single entry point — it repaints the header/sprint card, then `renderQuestBoard()` → `drawConnections()`. It runs once at load and after every sprint-tab click and modal close. Mutable app state is the one `state` global: `currentSprint`, `selectedQuestId`. The sidebar's SQUAD CAPABILITY stats are static markup in [index.html](index.html), not driven by state.

- `renderQuestBoard()` rebuilds `#quest-nodes-container` from scratch and attaches click handlers per node. Node position on the winding path comes from the `alignments` array, indexed by **array position, not quest id** — keep it the same length and order as `quests`.
- `drawConnections()` measures nodes with `getBoundingClientRect()` inside a `setTimeout`, so it must run after the board is in the DOM. It links consecutive entries of `quests` in array order and colors the path by the two ranks. Because it clears `#path-svg` synchronously but appends 100ms later, it holds its pending timeout in the `connectionTimeoutId` module global and clears it on entry — otherwise a redraw inside that window (rapid sprint-tab clicks) lets the previous sprint's paths land after the clear and pile up.
- The headline % (SQUAD PROGRESS) and the XP bar (SQUAD VELOCITY) both read the sprint's own `progress` field — 30 / 50 / 60 / 65 / 75 / 85 / 100 across SP8–SP14. **These are the figures reported internally, scoped by development effort, and they intentionally do not track the rank sum**: SP9 was reported at 50% while only 18 of its 84 rank points are earned, because five scenarios have not started there. Changing a rank does not move the headline — edit `progress` as well.
- A sprint with no `progress` falls back to `totalRankPoints / (quests.length * MAX_RANK)`, whose denominator counts all 12 quests including Expanded MVP ones locked in early sprints. Every sprint currently sets `progress`, so the fallback only matters for a newly added one.

### Expanded MVP dual track

Quests with `isExpanded` render as `E1`–`E4` (label is `id - 8`) in the purple palette, preceded by an `.expanded-section-divider` banner. They are **not rendered at all** while every expanded quest is still rank 0 — so they appear from SP11 onward purely as a consequence of the data, not a hardcoded sprint check.

### Storyboards, audio, confetti

Two animators replay chat bubbles on timers: `playPersonaSimulation(quest)` in the quest modal and `playSprintReviewStoryboard()` in the review overlay. Each tracks its pending timeouts in a module global (`simTimeoutIds`, `reviewTimeoutIds`) — any new close/reset path must clear them or bubbles keep arriving after the modal is gone. `openQuestModal()` re-binds the play button by cloning and replacing the node, which is what keeps handlers from stacking across opens.

`playSound()` synthesizes tones with Web Audio; the `AudioContext` is constructed at load ([app.js:704](app.js#L704)) and stays suspended until the first user gesture, so early sounds are silently dropped. `launchConfetti()` pushes particles into a permanently running `requestAnimationFrame` loop over `#confetti-canvas`.

## Conventions and gotchas

- Rank titles live in the `RANK_TITLES` / `OPS_RANK_TITLES` module constants, reached only through `rankTitle(quest, rank)` — both `renderQuestBoard()` and `openQuestModal()` call it. Edit in one place, and do not reintroduce a direct `RANK_TITLES[rank]` lookup at a call site or the ops track silently reverts to the customer wording.
- Dynamic markup is built with template strings and `innerHTML`; data text is authored in this repo, not user input. **If this data ever becomes user-supplied, this is an XSS vector — switch to `textContent`/escaping first.**
- Colors come from CSS variables in `:root` ([styles.css:3](styles.css#L3)): `--color-cyan` (base MVP), `--color-purple` (expanded MVP), `--color-green` (complete), `--color-locked`. Use these rather than literals.
- **`.sprint-header-top` is `display: block` with a floated `.badge-sprint` on purpose** — a long `concept` (SP11, SP12, SP14 all wrap to two lines) then flows under the badge across the card's full width. As flex the title was a sibling column and got clipped with an ellipsis. The h3 also sets `word-break: keep-all`, without which Korean wraps mid-word (점진 → 점 / 진). Switching that row back to flex reintroduces the truncation.
- The XP bar and progress text are painted only by `updateUI()` from the sprint's ranks — the sprint-tab handler just sets `state.currentSprint` and calls `updateUI()`.
- Adding a quest means touching four places: `quests`, every sprint's `scenarioStatus`, the `alignments` array, and the `zoneClass` conditionals in `renderQuestBoard()`.
