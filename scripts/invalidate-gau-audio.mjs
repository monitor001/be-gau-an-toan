/**
 * Xóa MP3 cũ còn lời “Mít” (đã đổi sang Bé Gấu) để Piper gen lại.
 * Chỉ xóa khi text hiện tại chứa Bé Gấu / Mẹ Gấu (đoạn thoại nhân vật).
 */
import { existsSync, unlinkSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import texts from './tts-texts.json' with { type: 'json' };

const audioDir = join(dirname(fileURLToPath(import.meta.url)), '..', 'assets', 'audio');
const charRe = /Bé Gấu|Mẹ Gấu/;
let removed = 0;
for (const item of texts) {
  if (!charRe.test(item.text)) continue;
  const path = join(audioDir, `${item.key}.mp3`);
  if (existsSync(path)) {
    unlinkSync(path);
    removed += 1;
  }
}
console.log(`invalidated ${removed} clips for Bé Gấu / Mẹ Gấu lines; texts ${texts.length}`);
