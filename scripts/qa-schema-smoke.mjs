/**
 * Schema smoke for all playable lessons (100×5).
 * Usage: node scripts/qa-schema-smoke.mjs
 */
import { MODULES, SERIES } from '../src/curriculum.mjs';

const errs = [];
let lessons = 0;
let sits = 0;
for (const mod of MODULES) {
  for (const lesson of mod.lessons) {
    lessons += 1;
    if (!lesson.teacherPrompt) errs.push(`${lesson.id}: missing teacherPrompt`);
    if (!Array.isArray(lesson.situations) || lesson.situations.length !== 5) {
      errs.push(`${lesson.id}: situations ${lesson.situations?.length}`);
    }
    for (const s of lesson.situations) {
      sits += 1;
      const safe = s.choices?.filter((c) => c.safe) ?? [];
      const unsafe = s.choices?.filter((c) => !c.safe) ?? [];
      if (safe.length !== 1) errs.push(`${s.id}: safe count ${safe.length}`);
      if (unsafe.length !== 2) errs.push(`${s.id}: unsafe count ${unsafe.length}`);
      if (!s.prompt || !s.hazard) errs.push(`${s.id}: missing prompt/hazard`);
    }
    if (mod.tracks?.includes('mam-non') && ['dao-mam', 'khac-lac', 'khac-hoc', 'khac-choi', 'khac-than'].includes(mod.id)) {
      if (!lesson.parentNote) errs.push(`${lesson.id}: missing parentNote`);
    }
  }
}

const summary = {
  ok: errs.length === 0,
  modules: MODULES.length,
  lessons,
  situations: sits,
  series: SERIES,
  errs: errs.slice(0, 40),
  errCount: errs.length,
};
console.log(JSON.stringify(summary, null, 2));
if (errs.length) process.exit(1);
