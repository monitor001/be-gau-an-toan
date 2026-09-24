/**
 * Đổi nhân vật toàn dự án: Mít → Bé Gấu trong content approved/drafts.
 */
import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const dirs = [join(root, 'content', 'approved'), join(root, 'content', 'drafts')];

function renameCharacters(text) {
  let out = String(text);
  const pairs = [
    [/hai mẹ con/gi, 'Bé Gấu và Mẹ Gấu'],
    [/Mèo Mít/g, 'Bé Gấu'],
    [/bé Mít/gi, 'Bé Gấu'],
    [/Bé Mít/g, 'Bé Gấu'],
    [/\bMít\b/g, 'Bé Gấu'],
    [/cùng mẹ/g, 'cùng Mẹ Gấu'],
    [/Cùng mẹ/g, 'Cùng Mẹ Gấu'],
    [/cạnh mẹ/g, 'cạnh Mẹ Gấu'],
    [/nắm tay mẹ/g, 'nắm tay Mẹ Gấu'],
    [/hỏi mẹ/g, 'hỏi Mẹ Gấu'],
    [/chờ mẹ/g, 'chờ Mẹ Gấu'],
    [/theo mẹ/g, 'theo Mẹ Gấu'],
    [/gọi mẹ/g, 'gọi Mẹ Gấu'],
    [/báo mẹ/g, 'báo Mẹ Gấu'],
    [/nhờ mẹ/g, 'nhờ Mẹ Gấu'],
    [/tách khỏi mẹ/g, 'tách khỏi Mẹ Gấu'],
    [/rời mẹ/g, 'rời Mẹ Gấu'],
    [/đi với mẹ/g, 'đi với Mẹ Gấu'],
    [/mẹ và Bé Gấu/gi, 'Mẹ Gấu và Bé Gấu'],
    [/Mẹ và Bé Gấu/g, 'Mẹ Gấu và Bé Gấu'],
    [/mẹ chuẩn bị/gi, 'Mẹ Gấu chuẩn bị'],
    [/mẹ kiểm tra/gi, 'Mẹ Gấu kiểm tra'],
    [/mẹ hướng dẫn/gi, 'Mẹ Gấu hướng dẫn'],
    [/mẹ chọn/g, 'Mẹ Gấu chọn'],
    [/mẹ sẽ/g, 'Mẹ Gấu sẽ'],
    [/Mẹ sẽ/g, 'Mẹ Gấu sẽ'],
    [/mẹ đang/g, 'Mẹ Gấu đang'],
    [/Mẹ đang/g, 'Mẹ Gấu đang'],
    [/mẹ dẫn/g, 'Mẹ Gấu dẫn'],
    [/khỏi mẹ/g, 'khỏi Mẹ Gấu'],
  ];
  for (const [re, rep] of pairs) out = out.replace(re, rep);
  out = out.replace(/Mẹ Gấu Gấu/g, 'Mẹ Gấu');
  out = out.replace(/Bé Gấu Gấu/g, 'Bé Gấu');
  return out;
}

let files = 0;
for (const dir of dirs) {
  for (const name of readdirSync(dir)) {
    if (!name.endsWith('.mjs')) continue;
    const filePath = join(dir, name);
    const before = readFileSync(filePath, 'utf8');
    const after = renameCharacters(before);
    if (after !== before) {
      writeFileSync(filePath, after, 'utf8');
      files += 1;
      console.log('ok', name);
    }
  }
}
console.log('updated files:', files);
