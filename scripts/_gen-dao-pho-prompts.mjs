import { readFileSync, writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const briefs = JSON.parse(readFileSync(join(root, 'art/briefs/all-gau.json'), 'utf8'));

function buildPrompt(item) {
  const hazard = item.hazard;
  const story = item.prompt_vi;
  return (
    `Photorealistic Vietnamese traffic and street background for child road safety education, 16:9 widescreen. ` +
    `Exactly two HUMAN characters only: one Vietnamese child and one Vietnamese adult caregiver (parent or teacher), ` +
    `both with normal human faces and bodies. The child wears a shirt with a CLEAR cute bear graphic print on the chest. ` +
    `Adult stands close or holds the child's hand. same HUMAN child with bear-print shirt and HUMAN adult as reference. ` +
    `Hazard clearly visible: ${hazard}. Scene story: ${story}. Show safe behavior with the adult. ` +
    `Educational, calm daylight. NO anthropomorphic bears, NO animal-headed people, NO furry bear children. ` +
    `No blood, no injury, no scary faces, no text, no watermarks.`
  );
}

const ids = briefs
  .filter((x) => /^dao-pho-g[2-5]/.test(x.id))
  .map((x) => ({ id: x.id, description: buildPrompt(x) }));

writeFileSync(join(root, 'art/_dao-pho-g2-g5-gen.json'), JSON.stringify(ids, null, 0));
console.log(ids.length);
