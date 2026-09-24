/**
 * Next batch for RESULT-style regen (nuoc- / khac-*) from all-gau-result.json.
 * Skips IDs listed in art/_nuoc-khac-regen-state.json completed[].
 * Usage: node scripts/export-nuoc-khac-result-batch.mjs [batchSize]
 */
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const briefs = JSON.parse(readFileSync(join(root, 'art/briefs/all-gau-result.json'), 'utf8'));
const statePath = join(root, 'art/_nuoc-khac-regen-state.json');
const refs = [
  join(root, 'assets/art/nuoc-l1-s1.png'),
  join(root, 'assets/art/khac-sac-l1-s1.png'),
  join(root, 'assets/art/dien-g1-l1-s1.png'),
];

const defaultState = {
  completed: [],
  prefixes: ['nuoc-', 'khac-chay-', 'khac-nga-', 'khac-thuoc-', 'khac-sac-'],
};

const state = existsSync(statePath)
  ? JSON.parse(readFileSync(statePath, 'utf8'))
  : defaultState;

const prefixes = state.prefixes || defaultState.prefixes;
const matchesPrefix = (id) => prefixes.some((p) => id.startsWith(p));

const done = new Set(state.completed || []);
const queue = briefs.filter((x) => matchesPrefix(x.id) && !done.has(x.id));

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
writeFileSync(join(root, 'art/_current-nuoc-khac-batch.json'), JSON.stringify(batch, null, 2));
console.log(JSON.stringify(payload, null, 2));
