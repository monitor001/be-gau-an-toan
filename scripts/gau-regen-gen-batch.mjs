/**
 * Print GenerateImage payloads for one batch (agent consumes stdout).
 * Usage: node scripts/gau-regen-gen-batch.mjs <batchIndex>
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const b = Number(process.argv[2]);
const batch = JSON.parse(
  readFileSync(join(root, 'art/briefs/gau-regen-batches', `batch-${String(b).padStart(2, '0')}.json`), 'utf8'),
);
const refs = [
  'D:\\AI Kiem Tien\\ideas\\Game giao duc sinh ton\\assets\\art\\nuoc-l1-s1.png',
  'D:\\AI Kiem Tien\\ideas\\Game giao duc sinh ton\\assets\\art\\khac-sac-l1-s1.png',
  'D:\\AI Kiem Tien\\ideas\\Game giao duc sinh ton\\assets\\art\\dien-g1-l1-s1.png',
];
const outPath = join(root, 'art/briefs/gau-regen-batches', `_payload-${String(b).padStart(2, '0')}.json`);
const payload = batch.map((x) => ({
      id: x.id,
      filename: `${x.id}.png`,
      description: `${x.image_prompt_en} Match reference style. MANDATORY: huge bright red X overlay on hazard.`,
      aspect_ratio: '16:9',
      reference_image_paths: refs,
    }));
writeFileSync(outPath, JSON.stringify(payload, null, 2));
writeFileSync(join(root, 'art/briefs/_gen-payload.json'), JSON.stringify(payload, null, 2));
console.log(`batch ${b}: ${payload.map((x) => x.id).join(', ')}`);
