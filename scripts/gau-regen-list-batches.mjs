/** List payload items for batch range. Usage: node scripts/gau-regen-list-batches.mjs <from> <to> */
import { readFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const from = Number(process.argv[2]);
const to = Number(process.argv[3]);
const out = [];
for (let b = from; b <= to; b++) {
  const path = join(root, 'art/briefs/gau-regen-batches', `_payload-${String(b).padStart(2, '0')}.json`);
  const payload = JSON.parse(readFileSync(path, 'utf8'));
  for (const x of payload) {
    out.push({ batch: b, id: x.id, filename: x.filename, description: x.description, aspect_ratio: x.aspect_ratio, reference_image_paths: x.reference_image_paths });
  }
}
console.log(JSON.stringify(out));
