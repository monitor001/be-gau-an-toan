/**
 * Đồng bộ mọi PNG tình huống từ Cursor assets → game assets/art
 */
import { copyFileSync, existsSync, mkdirSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { MODULES } from '../src/curriculum.mjs';

const ids = new Set(MODULES.flatMap((m) => m.lessons.flatMap((l) => l.situations.map((s) => s.id))));
const srcDir = 'C:\\Users\\hoang\\.cursor\\projects\\d-AI-Kiem-Tien-ideas-Game-giao-duc-sinh-ton\\assets';
const dstDir = join(fileURLToPath(new URL('..', import.meta.url)), 'assets', 'art');
mkdirSync(dstDir, { recursive: true });

let copied = 0;
for (const name of readdirSync(srcDir)) {
  const m = name.match(/^(.+)\.png$/i);
  if (!m || !ids.has(m[1])) continue;
  const from = join(srcDir, name);
  if (statSync(from).size < 8_000) continue;
  const to = join(dstDir, name);
  // Không ghi đè ảnh đã có (tránh kéo lại bản anthropomorphic cũ từ Cursor assets).
  if (existsSync(to)) continue;
  copyFileSync(from, to);
  copied += 1;
}
const have = readdirSync(dstDir).filter((n) => ids.has(n.replace(/\.png$/i, ''))).length;
console.log(`copied ${copied}; have ${have} / ${ids.size}`);
