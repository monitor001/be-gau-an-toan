import { readFileSync, statSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const briefs = JSON.parse(readFileSync(join(root, 'art/briefs/all-gau.json'), 'utf8'));
const art = join(root, 'assets/art');
const prefix = (id) => id.startsWith('dien-') || id.startsWith('dao-pho-');
const missing = briefs
  .filter((x) => prefix(x.id))
  .map((x) => x.id)
  .filter((id) => {
    try {
      return statSync(join(art, `${id}.png`)).size <= 10_240;
    } catch {
      return true;
    }
  });
const n = Number(process.argv[2] || 5);
const slice = missing.slice(0, n);
for (const id of slice) {
  const b = briefs.find((x) => x.id === id);
  console.log(JSON.stringify({ id, image_prompt_en: b.image_prompt_en }));
}
console.error(`missing_total ${missing.length}`);
