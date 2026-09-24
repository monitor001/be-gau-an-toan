/** After GenerateImage: copy listed IDs and advance art/_mam-new-regen-state.json */
import { copyFileSync, existsSync, readFileSync, writeFileSync, statSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const srcDir = 'C:\\Users\\hoang\\.cursor\\projects\\d-AI-Kiem-Tien-ideas-Game-giao-duc-sinh-ton\\assets';
const dstDir = join(root, 'assets', 'art');
const statePath = join(root, 'art/_mam-new-regen-state.json');
const ids = process.argv.slice(2).map((id) => id.replace(/\.png$/i, ''));
if (!ids.length) {
  console.error('Usage: node scripts/mam-new-batch-copy.mjs <id>…');
  process.exit(1);
}

const copied = [];
for (const id of ids) {
  const from = join(srcDir, `${id}.png`);
  if (!existsSync(from) || statSync(from).size < 8000) continue;
  copyFileSync(from, join(dstDir, `${id}.png`));
  copied.push(id);
}

const state = existsSync(statePath)
  ? JSON.parse(readFileSync(statePath, 'utf8'))
  : { completed: [], total: 125 };
const done = new Set(state.completed || []);
for (const id of copied) done.add(id);
state.completed = [...done].sort();
state.lastCopy = new Date().toISOString();
state.remaining = Math.max(0, (state.total || 125) - state.completed.length);
writeFileSync(statePath, JSON.stringify(state, null, 2));
console.log(JSON.stringify({ copied: copied.length, ids: copied, remaining: state.remaining }, null, 2));
