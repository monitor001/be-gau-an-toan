import { readFileSync, statSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const briefs = JSON.parse(readFileSync(join(root, 'art/briefs/all-gau.json'), 'utf8'));
const art = join(root, 'assets/art');
const scope = briefs.filter((x) => x.id.startsWith('dien-') || x.id.startsWith('dao-pho-'));
let dien = 0;
let dao = 0;
let missing = [];
for (const { id } of scope) {
  try {
    if (statSync(join(art, `${id}.png`)).size > 10_240) {
      if (id.startsWith('dien-')) dien += 1;
      else dao += 1;
    } else missing.push(id);
  } catch {
    missing.push(id);
  }
}
console.log(
  JSON.stringify(
    {
      scope: scope.length,
      dien_have: dien,
      dao_pho_have: dao,
      have: dien + dao,
      missing: missing.length,
      missing_ids: missing,
    },
    null,
    2,
  ),
);
