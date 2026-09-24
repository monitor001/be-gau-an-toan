// Xuất câu đọc tiếng Việt → scripts/tts-texts.json (Piper local).
import { writeFileSync } from 'node:fs';
import { MODULES } from '../src/curriculum.mjs';

const texts = [];
const push = (key, text) => {
  if (!text || !key) return;
  texts.push({ key, text: String(text).replace(/[.\s]+$/, '') });
};

for (const mod of MODULES) {
  for (const lesson of mod.lessons) {
    for (const situation of lesson.situations) {
      push(situation.id, `Nguy cơ: ${situation.hazard}. ${situation.prompt}`);
      for (const choice of situation.choices) {
        push(`${situation.id}__ans-${choice.id}`, choice.text);
        push(`${situation.id}__fb-${choice.id}`, choice.feedback);
      }
    }
  }
}
push('verdict-correct', 'Đúng rồi!');
push('verdict-retry', 'Bé chọn chưa đúng rồi.');
push('complete', 'Bé đã hoàn thành bài này. Hãy cùng người lớn trò chuyện nhé.');

writeFileSync(new URL('./tts-texts.json', import.meta.url), JSON.stringify(texts, null, 2));
console.log('TEXTS', texts.length);
