# QA — Curriculum schema coverage (Bé Gấu An Toàn)

**Date:** 2026-09-24  
**Reviewer:** QA subagent (schema completeness only)  
**Project root:** `D:\AI Kiem Tien\ideas\Game giao duc sinh ton`

## Method

- Imported live curriculum via `src/curriculum.mjs` (approved content → playable lessons).
- Ran automated tests: `node --test tests/curriculum.test.mjs`, `tests/brand-gau.test.mjs`, `tests/smoke-content.mjs` (all pass).
- One-off Node checks: raw `content/approved/*.mjs` counts, ID uniqueness, `\bMít\b` in approved + playable text fields, `assets/art/<situation.id>.png` size ≥ 10 KB, `AUDIO_CLIPS` vs expected keys from `scripts/dump-tts-texts.mjs` convention.

## Checklist results

| # | Criterion | Result | Evidence |
|---|-----------|--------|----------|
| 1 | **7 modules, 75 lessons, 375 situations** | **PASS** | `SERIES`: `moduleCount` 7, `totalLessons` 75, `totalSituations` 375. Per module: nuoc 5/25, dien 25/125, khac-chay 5/25, khac-nga 5/25, khac-thuoc 5/25, khac-sac 5/25, dao-pho 25/125. |
| 2 | **5 situations/lesson; 3 choices, exactly 1 safe** | **PASS** | Raw approved: 75 lessons, 375 situations; each lesson `situations.length === 5`; each situation `unsafeChoices.length === 2` (+ `safeText` → 3 playable choices). Playable: `curriculum.test.mjs` asserts 3 choices and 1 safe per scene. |
| 3 | **`adultPresent` true everywhere** | **PASS** | Not stored in raw approved files; `toPlayableLesson()` sets `adultPresent: true` on every situation. All 375 playable scenes verified in `curriculum.test.mjs`. |
| 4 | **Unique IDs; `moduleId` ∈ MODULE_META** | **PASS** | Duplicate lesson IDs: 0. Duplicate situation IDs: 0. All 75 raw lessons have `moduleId` in `{nuoc, dien, khac-chay, khac-nga, khac-thuoc, khac-sac, dao-pho}`. |
| 5 | **`dao-pho` module 25 / 125** | **PASS** | Module `dao-pho`: `lessonCount` 25, `situationCount` 125. Source: `content/approved/atgt-dao-pho.mjs`. |
| 6 | **No `\bMít\b` in approved or live prompt/choice/feedback** | **PASS** | `rg` on `content/approved`: 0 matches. Node scan of raw situation text fields: 0 matches. `tests/brand-gau.test.mjs`: 0 `\bMít\b` in playable `prompt`/`hazard`/choice `text`/`feedback`; `scripts/tts-texts.json` (2628 rows): 0 `\bMít\b`. *Out of scope:* legacy strings in `art/briefs/*.json`, `art/STYLE.md`, migration scripts (not curriculum prompts/choices/feedback). |
| 7 | **`assets/art` PNG per `situation.id`, > 10 KB** | **PASS** | Expected 375 PNGs; found 375 files named `{situation.id}.png`. Missing: 0. ≤ 10 KB: 0. Size range: min **191.4 KB**, max **450.5 KB** (196 006–461 355 bytes). |
| 8 | **`AUDIO_CLIPS` covers prompts + ans/fb** | **PASS** | Expected keys: **2628** (375 situation prompts + 375×3×2 ans/fb + `verdict-correct`, `verdict-retry`, `complete`). Manifest keys: **2628**. Missing: **0 (0.00%)**. Extra keys: 0. All `assets/audio/*.mp3` paths referenced in manifest exist on disk. |

## Series snapshot (live)

```text
title: Bé Gấu An Toàn
modules: 7
lessons: 75
situations: 375
audio clip keys: 2628 / 2628 (100%)
situation PNGs: 375 / 375 (100%, all > 10 KB)
```

## Notes (non-blocking, out of schema scope)

- `adultPresent` is a compile-time default in `src/curriculum.mjs`, not an author field in approved JSON-like sources.
- Art generation briefs under `art/briefs/` still mention “Mít”; shipped player copy and TTS corpus use Bé Gấu.

---

STATUS: OK

SCOPE: Curriculum schema completeness only (counts, situation/choice shape, IDs, `adultPresent`, brand token in approved/live text, art PNG presence/size, audio manifest coverage). Excluded: pedagogy depth, pixel/art quality, UX/a11y.

DONE: All eight checklist items executed with Node imports, filesystem stats, grep, and existing tests; metrics recorded above.

FILES: `qa/QA_SCHEMA_COVERAGE.md` (this report). Evidence read-only: `src/curriculum.mjs`, `content/approved/*.mjs`, `src/audio-clips.mjs`, `assets/art/*.png`, `assets/audio/*.mp3`, `scripts/tts-texts.json`, `tests/curriculum.test.mjs`, `tests/brand-gau.test.mjs`, `tests/smoke-content.mjs`.

DEVIATIONS: None for in-scope criteria.

BLOCKERS: None.

ERRORS: None.

NEXT_FOR_PARENT: Optional housekeeping only—refresh `art/briefs/*.json` to Bé Gấu for future regen consistency (not required for current schema OK). Proceed to pedagogy/expert review or child testing when parent is ready.
