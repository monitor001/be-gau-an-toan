/**
 * Sinh brief ảnh toàn bộ tình huống — style: nền chân thực + 2 nhân vật cartoon,
 * trẻ mặc áo có hình gấu.
 */
import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { MODULES } from '../src/curriculum.mjs';

const STYLE =
  'Photorealistic Vietnamese everyday background for child safety education, 16:9 widescreen. '
  + 'Exactly two cute cartoon characters composited into the realistic scene: '
  + 'one child (Be Gau) and one adult caregiver standing close or holding hands. '
  + 'The child wears a shirt with a clear cute bear graphic or bear print on the chest. '
  + 'Adult is a caring parent or teacher, cartoon style. '
  + 'Hazard must be clearly recognizable. Educational, calm, daylight. '
  + 'No blood, no injury, no scary faces, no text labels, no watermarks, no anthropomorphic bear as the child.';

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
        image_prompt_en:
          `${STYLE} Scene hazard: ${s.hazard}. Story: ${s.prompt} `
          + 'Show the child choosing the safe behavior with the adult.',
        must_show: ['cartoon child with bear print shirt', 'cartoon adult', 'photorealistic background', s.hazard],
        must_not: ['injury', 'blood', 'scary face', 'text labels', 'cat character', 'anthropomorphic bear child'],
      });
    }
  }
}

const out = join(dirname(fileURLToPath(import.meta.url)), '..', 'art', 'briefs', 'all-gau.json');
mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, JSON.stringify(briefs, null, 2));
console.log('briefs', briefs.length, 'by module:',
  Object.fromEntries(MODULES.map((m) => [m.id, briefs.filter((b) => b.moduleId === m.id).length])));
