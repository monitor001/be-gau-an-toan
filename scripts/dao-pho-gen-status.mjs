import { readdirSync, existsSync, statSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const art = join(root, 'assets', 'art');
const grades = ['g2', 'g3', 'g4', 'g5'];
for (const g of grades) {
  const ids = readdirSync(art).filter((n) => n.startsWith(`dao-pho-${g}-`) && n.endsWith('.png'));
  const ok = ids.filter((n) => statSync(join(art, n)).size > 10_240);
  console.log(`${g}: ${ok.length}/25`);
}
const total = readdirSync(art).filter((n) => /^dao-pho-g[2-5]-/.test(n) && statSync(join(art, n)).size > 10_240);
console.log(`total g2-g5: ${total.length}/100`);
