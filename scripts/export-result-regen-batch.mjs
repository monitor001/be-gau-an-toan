/**
 * Next batch for RESULT-style regen (dien- / dao-pho-) from all-gau-result.json.
 * Skips IDs listed in art/_result-regen-state.json completed[].
 * Usage: node scripts/export-result-regen-batch.mjs [batchSize]
 */
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const briefs = JSON.parse(readFileSync(join(root, 'art/briefs/all-gau-result.json'), 'utf8'));
const statePath = join(root, 'art/_result-regen-state.json');
const refs = [
  join(root, 'assets/art/dien-g1-l1-s1.png'),
  join(root, 'assets/art/dao-pho-g1-l1-s1.png'),
  join(root, 'assets/art/nuoc-l1-s1.png'),
];

const state = existsSync(statePath)
  ? JSON.parse(readFileSync(statePath, 'utf8'))
  : { completed: [], prefixes: ['dien-', 'dao-pho-'] };

const done = new Set(state.completed || []);
const queue = briefs.filter(
  (x) => (x.id.startsWith('dien-') || x.id.startsWith('dao-pho-')) && !done.has(x.id),
);

const batchSize = Math.min(Number(process.argv[2] || 5), queue.length);
const batch = queue.slice(0, batchSize).map((x) => ({
  id: x.id,
  description: x.image_prompt_en,
  reference_image_paths: refs,
  aspect_ratio: '16:9',
  filename: `${x.id}.png`,
}));

const payload = {
  remaining: queue.length,
  batchSize: batch.length,
  batch,
};
writeFileSync(join(root, 'art/_current-result-batch.json'), JSON.stringify(batch, null, 2));
console.log(JSON.stringify(payload, null, 2));
