/**
 * Prints next batch JSON for agent-driven GenerateImage loop.
 * Usage: node scripts/run-dao-pho-gen-loop.mjs [batchSize]
 */
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const batchSize = Number(process.argv[2] || 5);

const out = spawnSync(process.execPath, ['scripts/export-dao-pho-batch.mjs', String(batchSize)], {
  cwd: root,
  encoding: 'utf8',
});
const data = JSON.parse(out.stdout);
if (data.batch.length === 0) {
  console.log('DONE');
  process.exit(0);
}
console.log(JSON.stringify(data.batch));
