/** Copy one batch by index after generation. Usage: node scripts/gau-regen-batch-copy.mjs <batchIndex> */
import { readFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const b = Number(process.argv[2]);
const batch = JSON.parse(
  readFileSync(join(root, 'art/briefs/gau-regen-batches', `batch-${String(b).padStart(2, '0')}.json`), 'utf8'),
);
const ids = batch.map((x) => x.id);
spawnSync(process.execPath, ['scripts/force-copy-art-ids.mjs', ...ids], {
  cwd: root,
  stdio: 'inherit',
});
