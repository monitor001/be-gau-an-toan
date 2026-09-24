import { readdirSync, statSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const art = join(dirname(fileURLToPath(import.meta.url)), '..', 'assets', 'art');
const min = 10_240;
const grades = ['g2', 'g3', 'g4', 'g5'];
const out = {};
for (const g of grades) {
  let n = 0;
  for (const name of readdirSync(art)) {
    if (!name.startsWith(`dao-pho-${g}-`) || !name.endsWith('.png')) continue;
    if (statSync(join(art, name)).size >= min) n += 1;
  }
  out[g] = n;
}
out.total = grades.reduce((s, g) => s + out[g], 0);
console.log(JSON.stringify(out, null, 2));
