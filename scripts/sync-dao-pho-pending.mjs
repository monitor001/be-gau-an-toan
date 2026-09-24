/** Copy dao-pho g2–g5 PNGs from Cursor assets → game assets/art (missing only). */
import { copyFileSync, existsSync, mkdirSync, readFileSync, statSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const srcDir =
  'C:\\Users\\hoang\\.cursor\\projects\\d-AI-Kiem-Tien-ideas-Game-giao-duc-sinh-ton\\assets';
const dstDir = join(root, 'assets', 'art');
mkdirSync(dstDir, { recursive: true });

const queue = JSON.parse(
  readFileSync(join(root, 'art', '_dao-pho-g2-g5-gen.json'), 'utf8'),
);

let copied = 0;
for (const { id } of queue) {
  const name = `${id}.png`;
  const from = join(srcDir, name);
  const to = join(dstDir, name);
  if (!existsSync(from) || statSync(from).size < 8_000) continue;
  if (existsSync(to) && statSync(to).size > 10_240) continue;
  copyFileSync(from, to);
  copied += 1;
}
console.log(`dao-pho sync copied ${copied}`);
