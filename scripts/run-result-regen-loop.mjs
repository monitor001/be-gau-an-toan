/**
 * Agent loop helper for dien-/dao-pho- RESULT regen.
 * Usage: node scripts/export-result-regen-batch.mjs 5
 *        → GenerateImage each row in art/_current-result-batch.json
 *        → node scripts/force-copy-art-overwrite.mjs <ids>
 *        (or after gen: node scripts/result-regen-process-batch.mjs)
 * Repeat until export shows remaining: 0.
 * Progress: art/_result-regen-state.json
 */
import { readFileSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const statePath = join(root, 'art/_result-regen-state.json');
const state = existsSync(statePath) ? JSON.parse(readFileSync(statePath, 'utf8')) : { completed: [] };
const total = 250;
console.log(
  JSON.stringify(
    { total, completed: state.completed?.length ?? 0, remaining: total - (state.completed?.length ?? 0) },
    null,
    2,
  ),
);
