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

Both asset links in [index.html](index.html) are cache-busted (`styles.css?v=8`, `app.js?v=8`). **Bump both `v=` values when you change CSS or JS**, or reloads may serve stale files.

## Working rule: edit → verify → record

Every change to this project follows the same loop, in order:

1. **Edit** the relevant file(s).
2. **Verify the code before considering it done** — bump the `v=` cache-busting versions, serve locally (`python3 -m http.server 8000`), load the page, and confirm there are **zero console errors** while exercising the code paths you touched (switch across sprints SP8↔SP14, redraw the board, open/close a quest modal, play a storyboard). Never report a change as complete on a read-through alone.
3. **Record** what changed: update this CLAUDE.md and [README.md](README.md) whenever data shapes, invariants, or architecture shift, and note the version bump.

## Architecture

Two module-level data structures in [app.js](app.js) drive the entire UI; everything else is rendering.

**`quests` — [app.js:2](app.js#L2)** — 12 scenario definitions (`id` 1–12), static across sprints. Holds `badge`, `title`, `zone`, `context`, `goals`, `conditions`, `backlogs`, `rewards {xp, stat, statVal}`, and a `persona` with a `storyboard` array of `{type: "narrator"|"user"|"system", text}` steps. `isExpanded: true` marks the Expanded-MVP quests (ids 9–12).

**`sprintRoadmap` — [app.js:489](app.js#L489)** — keyed `SP8`…`SP14`. Each sprint carries `period`, `concept`, `value`, `review`, its own `storyboard`, and `scenarioStatus` — a map from quest id to `{role, rank, desc}`. This is where per-sprint progress lives.

- `rank` 0–7 maps positionally into the module-level `RANK_TITLES` constant ([app.js](app.js), defined once below the `state` global): 미착수 🔒 / 정책정의 📜 / 일부구현 🛠️ / 경로연결 🔗 / 결과확장 ✨ / 운영가능 🛡️ / QA검증완료 🏆 / 오픈준비완료 🚀. Rank 6 is where SP13's integration QA lands; rank 7 is SP14 fixing what QA found, re-verifying it and rolling it to production. Rank 0 → locked node, `MAX_RANK` → completed (green), else active (cyan). `MAX_RANK` is derived as `RANK_TITLES.length - 1` and is the only thing the render logic and the progress denominator compare against — adding a rung means adding a title plus a matching `.rank-N` rule in [styles.css](styles.css), nothing else.
- `role` is `primary` | `supporting` | `validation` | `none`, and is rendered as a CSS class (`.role-badge.<role>`).

**Convention: every sprint's `scenarioStatus` should define all 12 quest ids.** Both `renderQuestBoard()` and `drawConnections()` now skip any quest missing a status (rather than throwing), so a gap degrades gracefully — but a missing id still means that node and its connecting path silently disappear, so keep all 12 defined.

### Render pipeline

`updateUI()` is the single entry point — it repaints the header/sprint card, then `renderQuestBoard()` → `drawConnections()`. It runs once at load and after every sprint-tab click and modal close. Mutable app state is the one `state` global: `currentSprint`, `selectedQuestId`. The sidebar's SQUAD CAPABILITY stats are static markup in [index.html](index.html), not driven by state.

- `renderQuestBoard()` rebuilds `#quest-nodes-container` from scratch and attaches click handlers per node. Node position on the winding path comes from the `alignments` array, indexed by **array position, not quest id** — keep it the same length and order as `quests`.
- `drawConnections()` measures nodes with `getBoundingClientRect()` inside a `setTimeout`, so it must run after the board is in the DOM. It links consecutive entries of `quests` in array order and colors the path by the two ranks. Because it clears `#path-svg` synchronously but appends 100ms later, it holds its pending timeout in the `connectionTimeoutId` module global and clears it on entry — otherwise a redraw inside that window (rapid sprint-tab clicks) lets the previous sprint's paths land after the clear and pile up.
- Progress % and the XP bar use `totalRankPoints / (quests.length * MAX_RANK)` — the denominator counts all 12 quests, including Expanded MVP ones that are locked in early sprints.

### Expanded MVP dual track

Quests with `isExpanded` render as `E1`–`E4` (label is `id - 8`) in the purple palette, preceded by an `.expanded-section-divider` banner. They are **not rendered at all** while every expanded quest is still rank 0 — so they appear from SP11 onward purely as a consequence of the data, not a hardcoded sprint check.

### Storyboards, audio, confetti

Two animators replay chat bubbles on timers: `playPersonaSimulation(quest)` in the quest modal and `playSprintReviewStoryboard()` in the review overlay. Each tracks its pending timeouts in a module global (`simTimeoutIds`, `reviewTimeoutIds`) — any new close/reset path must clear them or bubbles keep arriving after the modal is gone. `openQuestModal()` re-binds the play button by cloning and replacing the node, which is what keeps handlers from stacking across opens.

`playSound()` synthesizes tones with Web Audio; the `AudioContext` is constructed at load ([app.js:704](app.js#L704)) and stays suspended until the first user gesture, so early sounds are silently dropped. `launchConfetti()` pushes particles into a permanently running `requestAnimationFrame` loop over `#confetti-canvas`.

## Conventions and gotchas

- Rank titles live in the single `RANK_TITLES` module constant — both `renderQuestBoard()` and `openQuestModal()` read it. Edit in one place.
- Dynamic markup is built with template strings and `innerHTML`; data text is authored in this repo, not user input. **If this data ever becomes user-supplied, this is an XSS vector — switch to `textContent`/escaping first.**
- Colors come from CSS variables in `:root` ([styles.css:3](styles.css#L3)): `--color-cyan` (base MVP), `--color-purple` (expanded MVP), `--color-green` (complete), `--color-locked`. Use these rather than literals.
- The XP bar and progress text are painted only by `updateUI()` from the sprint's ranks — the sprint-tab handler just sets `state.currentSprint` and calls `updateUI()`.
- Adding a quest means touching four places: `quests`, every sprint's `scenarioStatus`, the `alignments` array, and the `zoneClass` conditionals in `renderQuestBoard()`.
