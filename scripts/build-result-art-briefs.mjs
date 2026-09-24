/**
 * Brief ảnh — kết quả giáo dục + X đỏ trên nguy hiểm + người lớn xua tay.
 */
import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { MODULES } from '../src/curriculum.mjs';

const STYLE =
  'Photorealistic Vietnamese everyday background, 16:9 widescreen, educational SAFETY RESULT illustration for children. '
  + 'Exactly two HUMAN characters: one child wearing a shirt with a CLEAR cute brown bear face print on the chest, '
  + 'and one adult caregiver standing close. '
  + 'CRITICAL: This is the teaching OUTCOME, not a glamorized hazard. '
  + 'The adult waves a hand to say NO and gently keeps or pulls the child away from danger. '
  + 'A LARGE bold red X mark is clearly overlaid on the dangerous object or unsafe zone. '
  + 'The child is NOT successfully performing the dangerous action. '
  + 'Calm faces, no blood, no injury, no scary expressions, no text labels except the red X, no anthropomorphic animals.';

const briefs = [];
for (const mod of MODULES) {
  for (const lesson of mod.lessons) {
    for (const s of lesson.situations) {
      briefs.push({
        id: s.id,
        moduleId: mod.id,
        lessonId: lesson.id,
        title: lesson.title,
        hazard: s.hazard,
        prompt_vi: s.prompt,
        safeText: s.choices?.find((c) => c.safe)?.text ?? '',
        image_prompt_en:
          `${STYLE} Hazard to mark with big red X: ${s.hazard}. `
          + `Story context: ${s.prompt} `
          + `Safe outcome idea: ${s.choices?.find((c) => c.safe)?.text ?? 'stay with adult, do not touch hazard'}. `
          + 'Show the final teaching result: red X on danger + adult saying no + child safe beside adult.',
        must_show: [
          'human child with bear-print shirt',
          'human adult waving no / pulling child away',
          'large red X on hazard',
          'clear educational outcome',
        ],
        must_not: [
          'child successfully doing the dangerous act',
          'hazard without red X',
          'anthropomorphic bear or cat protagonist',
          'injury',
          'blood',
          'scary face',
        ],
      });
    }
  }
}

const out = join(dirname(fileURLToPath(import.meta.url)), '..', 'art', 'briefs', 'all-gau-result.json');
mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, JSON.stringify(briefs, null, 2));
console.log('briefs', briefs.length, '→', out);
