/** Mark batch N complete in art/_gau-regen-state.json. Usage: node scripts/advance-gau-regen-batch.mjs <N> */
import { readFileSync, writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const statePath = join(root, 'art/_gau-regen-state.json');
const b = Number(process.argv[2]);
const state = JSON.parse(readFileSync(statePath, 'utf8'));
const done = new Set(state.completedBatches || []);
done.add(b);
state.completedBatches = [...done].sort((a, b) => a - b);
state.regeneratedCount = state.completedBatches.length * 5;
state.nextBatch = b + 1;
if (state.nextBatch >= (state.totalBatches ?? 25)) {
  state.status = 'DONE';
  state.nextBatch = state.totalBatches ?? 25;
}
state.lastUpdate = new Date().toISOString().slice(0, 10);
writeFileSync(statePath, JSON.stringify(state, null, 2), 'utf8');
console.log(JSON.stringify({ batch: b, regeneratedCount: state.regeneratedCount, nextBatch: state.nextBatch }, null, 2));
