/** Copy Cursor assets → game assets/art, always overwrite listed IDs (or all PNGs in cursor dir if no args). */
import { copyFileSync, existsSync, readdirSync, statSync, readFileSync, writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const srcDir =
  'C:\\Users\\hoang\\.cursor\\projects\\d-AI-Kiem-Tien-ideas-Game-giao-duc-sinh-ton\\assets';
const dstDir = join(root, 'assets', 'art');
const statePath = join(root, 'art/_result-regen-state.json');

const idsArg = process.argv.slice(2);
const want = idsArg.length ? new Set(idsArg.map((id) => id.replace(/\.png$/i, ''))) : null;

let copied = 0;
const copiedIds = [];
for (const name of readdirSync(srcDir)) {
  const m = name.match(/^(.+)\.png$/i);
  if (!m) continue;
  const id = m[1];
  if (want && !want.has(id)) continue;
  const from = join(srcDir, name);
  if (statSync(from).size < 8_000) continue;
  copyFileSync(from, join(dstDir, name));
  copied += 1;
  copiedIds.push(id);
}

if (copiedIds.length) {
  const state = existsSync(statePath)
    ? JSON.parse(readFileSync(statePath, 'utf8'))
    : { completed: [], prefixes: ['dien-', 'dao-pho-'] };
  const done = new Set(state.completed || []);
  for (const id of copiedIds) {
    if (id.startsWith('dien-') || id.startsWith('dao-pho-')) done.add(id);
  }
  state.completed = [...done].sort();
  state.lastCopy = new Date().toISOString();
  writeFileSync(statePath, JSON.stringify(state, null, 2), 'utf8');
}

console.log(JSON.stringify({ copied, ids: copiedIds }, null, 2));
