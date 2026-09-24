import { readFileSync, existsSync, statSync, writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const cursorAssets =
  'C:\\Users\\hoang\\.cursor\\projects\\d-AI-Kiem-Tien-ideas-Game-giao-duc-sinh-ton\\assets';
const gameArt = join(root, 'assets', 'art');
const refs = [
  join(root, 'assets', 'art', 'dao-pho-g1-l1-s1.png'),
  join(root, 'assets', 'art', 'dao-pho-g1-l2-s1.png'),
  join(root, 'assets', 'art', 'dao-pho-g1-l3-s1.png'),
];

const queue = readFileSync(join(root, 'art', '_dao-pho-g2-g5-gen.json'), 'utf8');
const items = JSON.parse(queue);

/** Skip only when game assets/art already has the file (>10KB). */
function have(id) {
  const p = join(gameArt, `${id}.png`);
  return existsSync(p) && statSync(p).size > 10_240;
}

const pending = items.filter((x) => !have(x.id));
const n = Math.min(Number(process.argv[2] || 5), pending.length);
const batch = pending.slice(0, n).map((x) => ({
  id: x.id,
  description: x.description,
  reference_image_paths: refs,
  aspect_ratio: '16:9',
  filename: `${x.id}.png`,
}));

const payload = { remaining: pending.length, batch };
const outPath = process.argv[3];
if (outPath) {
  writeFileSync(outPath, JSON.stringify(payload, null, 2), 'utf8');
}
console.log(JSON.stringify(payload, null, 2));
