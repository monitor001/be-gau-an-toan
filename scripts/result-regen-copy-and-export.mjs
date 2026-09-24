/** Copy last batch IDs from argv, then export next batch. Usage: node scripts/result-regen-copy-and-export.mjs id1 id2 ... */
import { execSync } from 'node:child_process';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const ids = process.argv.slice(2);
if (ids.length) {
  execSync(`node scripts/force-copy-art-overwrite.mjs ${ids.join(' ')}`, {
    cwd: root,
    stdio: 'inherit',
  });
}
execSync('node scripts/export-result-regen-batch.mjs 5', { cwd: root, stdio: 'inherit' });
