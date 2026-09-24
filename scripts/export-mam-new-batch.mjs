/**
 * Next batch for mam-non NEW RESULT art (125 IDs from art/briefs/mam-new-result.json).
 * State: art/_mam-new-regen-state.json
 * Usage: node scripts/export-mam-new-batch.mjs [batchSize]
 */
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const briefs = JSON.parse(readFileSync(join(root, 'art/briefs/mam-new-result.json'), 'utf8'));
const statePath = join(root, 'art/_mam-new-regen-state.json');
const refs = [
  join(root, 'assets/art/nuoc-l1-s1.png'),
  join(root, 'assets/art/dien-g1-l1-s1.png'),
  join(root, 'assets/art/dao-pho-g1-l1-s1.png'),
];

const state = existsSync(statePath)
  ? JSON.parse(readFileSync(statePath, 'utf8'))
  : { completed: [], total: briefs.length };

const done = new Set(state.completed || []);
const queue = briefs.filter((x) => !done.has(x.id));
const batchSize = Math.min(Number(process.argv[2] || 5), queue.length);
const batch = queue.slice(0, batchSize).map((x) => ({
  id: x.id,
  description: x.image_prompt_en,
  reference_image_paths: refs,
  aspect_ratio: '16:9',
  filename: `${x.id}.png`,
}));

writeFileSync(join(root, 'art/_current-mam-new-batch.json'), JSON.stringify(batch, null, 2));
console.log(JSON.stringify({ remaining: queue.length, batchSize: batch.length, batch: batch.map((b) => b.id) }, null, 2));
