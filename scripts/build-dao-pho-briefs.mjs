/**
 * Sinh brief ảnh cho module Dạo phố → art/briefs/dao-pho.json
 */
import { writeFileSync } from 'node:fs';
import { LESSONS } from '../content/approved/atgt-dao-pho.mjs';

const STYLE =
  'Highly realistic educational 3D cartoon illustration, 16:9, Vietnamese street safety for children. '
  + 'Cute brown bear cub child (Be Gau) and larger brown mother bear (Me Gau) always together. '
  + 'Clear recognizable real-world hazards: sidewalk, road, cars, traffic light, bus, motorcycle helmet. '
  + 'Warm daylight, no blood, no injury, no scary faces, no text labels, no watermarks.';

const briefs = [];
for (const lesson of LESSONS) {
  for (const s of lesson.situations) {
    briefs.push({
      id: s.id,
      lessonId: lesson.id,
      gradeBand: lesson.gradeBand,
      title: lesson.title,
      hazard: s.hazard,
      prompt_vi: s.prompt,
      image_prompt_en:
        `${STYLE} Scene: ${s.hazard}. Story beat: ${s.prompt} `
        + 'Show Be Gau and Me Gau choosing the safe behavior visually (holding hands / waiting / on sidewalk).',
      must_show: ['bear cub Be Gau', 'mother bear Me Gau', s.hazard],
      must_not: ['injury', 'blood', 'scary face', 'text labels', 'cat character', 'Mit cat'],
    });
  }
}

writeFileSync(new URL('../art/briefs/dao-pho.json', import.meta.url), JSON.stringify(briefs, null, 2));
console.log('briefs', briefs.length, 'first', briefs[0].id);
