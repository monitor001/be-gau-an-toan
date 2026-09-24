/** Force copy listed PNG ids from Cursor assets → game assets/art (overwrite). */
import { copyFileSync, existsSync, mkdirSync, statSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const srcDir =
  'C:\\Users\\hoang\\.cursor\\projects\\d-AI-Kiem-Tien-ideas-Game-giao-duc-sinh-ton\\assets';
const dstDir = join(root, 'assets', 'art');
mkdirSync(dstDir, { recursive: true });

const ids = process.argv.slice(2);
let copied = 0;
let missing = 0;
for (const id of ids) {
  const from = join(srcDir, `${id}.png`);
  const to = join(dstDir, `${id}.png`);
  if (!existsSync(from) || statSync(from).size < 8_000) {
    missing += 1;
    console.warn(`skip missing/small: ${id}`);
    continue;
  }
  copyFileSync(from, to);
  copied += 1;
}
console.log(`force copied ${copied}; missing ${missing}`);
