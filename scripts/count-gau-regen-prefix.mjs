import { existsSync, readdirSync, statSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { readFileSync } from 'node:fs';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const prefixes = ['nuoc-', 'khac-chay-', 'khac-nga-', 'khac-thuoc-', 'khac-sac-'];
const all = JSON.parse(readFileSync(join(root, 'art/briefs/all-gau-result.json'), 'utf8'));
const ids = all.filter((x) => prefixes.some((p) => x.id.startsWith(p))).map((x) => x.id);
const art = join(root, 'assets/art');
let ok = 0;
const byMod = {};
for (const id of ids) {
  const mod = id.split('-')[0] === 'khac' ? id.split('-').slice(0, 2).join('-') : id.split('-')[0];
  byMod[mod] ??= { want: 0, have: 0 };
  byMod[mod].want += 1;
  const p = join(art, `${id}.png`);
  if (existsSync(p) && statSync(p).size >= 8_000) {
    ok += 1;
    byMod[mod].have += 1;
  }
}
console.log(JSON.stringify({ total: ids.length, have: ok, byMod }, null, 2));
