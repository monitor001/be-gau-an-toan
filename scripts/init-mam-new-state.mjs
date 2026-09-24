import { writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
writeFileSync(
  join(root, 'art/_mam-new-regen-state.json'),
  JSON.stringify({ completed: [], total: 125, remaining: 125, started: new Date().toISOString() }, null, 2),
);
console.log('reset mam-new state 0/125');
