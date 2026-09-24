/** Append copied IDs to art/_nuoc-khac-regen-state.json completed[]. */
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const statePath = join(root, 'art/_nuoc-khac-regen-state.json');
const ids = process.argv.slice(2).map((id) => id.replace(/\.png$/i, ''));
if (!ids.length) {
  console.error('Usage: node scripts/append-nuoc-khac-regen-state.mjs <id>...');
  process.exit(1);
}

const state = existsSync(statePath)
  ? JSON.parse(readFileSync(statePath, 'utf8'))
  : { completed: [], prefixes: ['nuoc-', 'khac-chay-', 'khac-nga-', 'khac-thuoc-', 'khac-sac-'] };

const done = new Set(state.completed || []);
for (const id of ids) done.add(id);
state.completed = [...done].sort();
state.lastCopy = new Date().toISOString();
writeFileSync(statePath, JSON.stringify(state, null, 2), 'utf8');
console.log(JSON.stringify({ added: ids.length, total: state.completed.length }, null, 2));
