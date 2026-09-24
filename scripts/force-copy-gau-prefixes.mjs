/** Force overwrite all gau-regen prefix PNGs present in Cursor assets. */
import { copyFileSync, existsSync, readdirSync, statSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const prefixes = ['nuoc-', 'khac-chay-', 'khac-nga-', 'khac-thuoc-', 'khac-sac-'];
const srcDir =
  'C:\\Users\\hoang\\.cursor\\projects\\d-AI-Kiem-Tien-ideas-Game-giao-duc-sinh-ton\\assets';
const dstDir = join(root, 'assets', 'art');

let copied = 0;
for (const name of readdirSync(srcDir)) {
  if (!name.endsWith('.png')) continue;
  const id = name.replace(/\.png$/i, '');
  if (!prefixes.some((p) => id.startsWith(p))) continue;
  const from = join(srcDir, name);
  if (statSync(from).size < 8_000) continue;
  copyFileSync(from, join(dstDir, name));
  copied += 1;
}
console.log(`force copied ${copied} prefix PNGs`);
