/**
 * Next batch for gau regen (125 ids). Usage: node scripts/run-gau-regen-loop.mjs [batchIndex] [batchSize]
 */
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const prefixes = ['nuoc-', 'khac-chay-', 'khac-nga-', 'khac-thuoc-', 'khac-sac-'];
const all = JSON.parse(readFileSync(join(root, 'art/briefs/all-gau-result.json'), 'utf8'));
const items = all.filter((x) => prefixes.some((p) => x.id.startsWith(p)));
const batchSize = Number(process.argv[3] || 5);
const progressPath = join(root, 'art', 'briefs', '_regen-progress.json');
let nextBatch = Number(process.argv[2]);
if (!process.argv[2] && existsSync(progressPath)) {
  nextBatch = JSON.parse(readFileSync(progressPath, 'utf8')).nextBatch ?? 0;
}
const slice = items.slice(nextBatch * batchSize, nextBatch * batchSize + batchSize);
if (slice.length === 0) {
  console.log('DONE');
  process.exit(0);
}
writeFileSync(join(root, 'art', 'briefs', '_regen-batch.json'), JSON.stringify(slice, null, 2));
writeFileSync(
  progressPath,
  JSON.stringify({ nextBatch: nextBatch + 1, total: items.length, done: nextBatch * batchSize }, null, 2),
);
console.log(JSON.stringify(slice.map((x) => ({ id: x.id, description: x.image_prompt_en + ' Match reference style.' }))));
