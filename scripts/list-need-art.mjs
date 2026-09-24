import { readFileSync, existsSync, statSync, readdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const briefs = JSON.parse(readFileSync(join(root, 'art/briefs/all-gau.json'), 'utf8'));
const prefixes = process.argv.slice(2).length
  ? process.argv.slice(2)
  : ['nuoc-', 'khac-chay-', 'khac-nga-', 'khac-thuoc-', 'khac-sac-'];
const cursorAssets =
  'C:\\Users\\hoang\\.cursor\\projects\\d-AI-Kiem-Tien-ideas-Game-giao-duc-sinh-ton\\assets';
const gameArt = join(root, 'assets', 'art');

function ok(id) {
  for (const dir of [gameArt, cursorAssets]) {
    const f = join(dir, `${id}.png`);
    if (existsSync(f) && statSync(f).size > 10_000) return true;
  }
  return false;
}

const scoped = briefs.filter((b) => prefixes.some((p) => b.id.startsWith(p)));
const need = scoped.filter((b) => !ok(b.id));
if (process.argv.includes('--json')) {
  console.log(JSON.stringify(need.map((b) => ({ id: b.id, image_prompt_en: b.image_prompt_en })), null, 0));
} else {
  for (const b of need) console.log(b.id);
  const by = {};
  for (const p of prefixes) {
    const ids = scoped.filter((x) => x.id.startsWith(p));
    by[p] = { total: ids.length, have: ids.filter((x) => ok(x.id)).length };
  }
  console.error(JSON.stringify({ need: need.length, by }, null, 2));
}
