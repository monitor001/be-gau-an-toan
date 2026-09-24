/** Copy Cursor assets → game assets/art when dest missing or placeholder (≤10KB) or source much larger. */
import { copyFileSync, existsSync, readdirSync, statSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { MODULES } from '../src/curriculum.mjs';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const ids = new Set(MODULES.flatMap((m) => m.lessons.flatMap((l) => l.situations.map((s) => s.id))));
const srcDir =
  'C:\\Users\\hoang\\.cursor\\projects\\d-AI-Kiem-Tien-ideas-Game-giao-duc-sinh-ton\\assets';
const dstDir = join(root, 'assets', 'art');

let copied = 0;
for (const name of readdirSync(srcDir)) {
  const m = name.match(/^(.+)\.png$/i);
  if (!m || !ids.has(m[1])) continue;
  const from = join(srcDir, name);
  if (statSync(from).size < 8_000) continue;
  const to = join(dstDir, name);
  const toSize = existsSync(to) ? statSync(to).size : 0;
  if (toSize > 10_240 && statSync(from).size <= toSize + 5_000) continue;
  copyFileSync(from, to);
  copied += 1;
}
console.log(`force copied ${copied}`);
