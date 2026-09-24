/**
 * After agent GenerateImage for all rows in art/_current-result-batch.json:
 * node scripts/result-regen-process-batch.mjs
 * Copies batch IDs to assets/art and exports the next batch (size 5).
 */
import { readFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { execSync } from 'node:child_process';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const batch = JSON.parse(readFileSync(join(root, 'art/_current-result-batch.json'), 'utf8'));
const ids = batch.map((x) => x.id);
execSync(`node scripts/result-regen-copy-and-export.mjs ${ids.join(' ')}`, {
  cwd: root,
  stdio: 'inherit',
});
