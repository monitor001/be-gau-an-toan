/**
 * Agent loop: batches 0..24 from art/briefs/gau-regen-batches/
 * 1) node scripts/gau-regen-gen-batch.mjs N
 * 2) GenerateImage each row in art/briefs/_gen-payload.json
 * 3) node scripts/gau-regen-batch-copy.mjs N
 * Progress: art/_gau-regen-state.json
 */
import { readFileSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const statePath = join(root, 'art/_gau-regen-state.json');
const state = existsSync(statePath) ? JSON.parse(readFileSync(statePath, 'utf8')) : {};
const done = new Set(state.completedBatches || []);
const totalBatches = 25;
let next = 0;
for (; next < totalBatches; next++) {
  if (!done.has(next)) break;
}
if (next >= totalBatches) {
  console.log('DONE');
  process.exit(0);
}
console.log(JSON.stringify({ nextBatch: next, completedBatches: [...done].sort() }, null, 2));
