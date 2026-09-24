/** Copy batch N then advance state. Usage: node scripts/gau-regen-copy-advance.mjs <N> */
import { spawnSync } from 'node:child_process';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const b = process.argv[2];
spawnSync(process.execPath, ['scripts/gau-regen-batch-copy.mjs', b], { cwd: root, stdio: 'inherit' });
spawnSync(process.execPath, ['scripts/advance-gau-regen-batch.mjs', b], { cwd: root, stdio: 'inherit' });
