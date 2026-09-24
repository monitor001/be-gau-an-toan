import { readFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const briefs = JSON.parse(readFileSync(join(root, 'art/briefs/all-gau.json'), 'utf8'));
const byId = new Map(briefs.map((b) => [b.id, b]));
for (const id of process.argv.slice(2)) {
  const b = byId.get(id);
  if (!b) {
    console.error(`missing: ${id}`);
    continue;
  }
  process.stdout.write(JSON.stringify({ id, image_prompt_en: b.image_prompt_en }) + '\n');
}
