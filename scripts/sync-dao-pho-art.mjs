/**
 * Đồng bộ ảnh dao-pho từ Cursor assets → game assets/art
 */
import { copyFileSync, existsSync, mkdirSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const srcDir = 'C:\\Users\\hoang\\.cursor\\projects\\d-AI-Kiem-Tien-ideas-Game-giao-duc-sinh-ton\\assets';
const dstDir = new URL('../assets/art/', import.meta.url);
mkdirSync(dstDir, { recursive: true });

let copied = 0;
for (const name of readdirSync(srcDir)) {
  if (!/^dao-pho-.+\.png$/i.test(name)) continue;
  const from = join(srcDir, name);
  if (statSync(from).size < 10_000) continue;
  const to = new URL(name, dstDir);
  if (existsSync(to) && statSync(to).size === statSync(from).size) continue;
  copyFileSync(from, to);
  copied += 1;
}
const total = readdirSync(dstDir).filter((n) => /^dao-pho-.+\.png$/i.test(n)).length;
console.log(`copied ${copied}; total dao-pho in assets/art: ${total}`);
