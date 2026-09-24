/**
 * Flatten Bé Mít Qua Phố → module "Dạo phố" trong app An Toàn.
 * Nhân vật: Bé Gấu + Mẹ Gấu (thay Mít / mẹ).
 */
import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const root = join(here, '..');
const quaPhoCurriculum = join(root, '..', 'be-mit-qua-pho', 'src', 'curriculum.mjs');

function renameCharacters(text) {
  if (!text) return text;
  let out = String(text);
  // Order matters: longer / specific phrases first
  const pairs = [
    [/hai mẹ con/gi, 'Bé Gấu và Mẹ Gấu'],
    [/Hai mẹ con/g, 'Bé Gấu và Mẹ Gấu'],
    [/cả hai mẹ con/gi, 'Bé Gấu và Mẹ Gấu'],
    [/Mèo Mít/g, 'Bé Gấu'],
    [/bé Mít/gi, 'Bé Gấu'],
    [/Bé Mít/g, 'Bé Gấu'],
    [/\bMít\b/g, 'Bé Gấu'],
    [/cùng mẹ/g, 'cùng Mẹ Gấu'],
    [/Cùng mẹ/g, 'Cùng Mẹ Gấu'],
    [/cạnh mẹ/g, 'cạnh Mẹ Gấu'],
    [/Cạnh mẹ/g, 'Cạnh Mẹ Gấu'],
    [/nắm tay mẹ/g, 'nắm tay Mẹ Gấu'],
    [/hỏi mẹ/g, 'hỏi Mẹ Gấu'],
    [/chờ mẹ/g, 'chờ Mẹ Gấu'],
    [/theo mẹ/g, 'theo Mẹ Gấu'],
    [/gọi mẹ/g, 'gọi Mẹ Gấu'],
    [/báo mẹ/g, 'báo Mẹ Gấu'],
    [/nhờ mẹ/g, 'nhờ Mẹ Gấu'],
    [/tách khỏi mẹ/g, 'tách khỏi Mẹ Gấu'],
    [/rời mẹ/g, 'rời Mẹ Gấu'],
    [/đến chỗ mẹ/g, 'đến chỗ Mẹ Gấu'],
    [/ở cạnh mẹ/g, 'ở cạnh Mẹ Gấu'],
    [/đi với mẹ/g, 'đi với Mẹ Gấu'],
    [/Đi với mẹ/g, 'Đi với Mẹ Gấu'],
    [/mẹ và Bé Gấu/gi, 'Mẹ Gấu và Bé Gấu'],
    [/Mẹ và Bé Gấu/g, 'Mẹ Gấu và Bé Gấu'],
    [/mẹ chuẩn bị/gi, 'Mẹ Gấu chuẩn bị'],
    [/Mẹ chuẩn bị/g, 'Mẹ Gấu chuẩn bị'],
    [/mẹ kiểm tra/gi, 'Mẹ Gấu kiểm tra'],
    [/Mẹ kiểm tra/g, 'Mẹ Gấu kiểm tra'],
    [/mẹ hướng dẫn/gi, 'Mẹ Gấu hướng dẫn'],
    [/Mẹ hướng dẫn/g, 'Mẹ Gấu hướng dẫn'],
    [/mẹ chọn/g, 'Mẹ Gấu chọn'],
    [/mẹ sẽ/g, 'Mẹ Gấu sẽ'],
    [/Mẹ sẽ/g, 'Mẹ Gấu sẽ'],
    [/mẹ đang/g, 'Mẹ Gấu đang'],
    [/Mẹ đang/g, 'Mẹ Gấu đang'],
    [/mẹ dẫn/g, 'Mẹ Gấu dẫn'],
    [/Mẹ dẫn/g, 'Mẹ Gấu dẫn'],
    [/khỏi mẹ/g, 'khỏi Mẹ Gấu'],
    [/theo mẹ/g, 'theo Mẹ Gấu'],
    [/\bmẹ\b/g, 'Mẹ Gấu'],
    [/\bMẹ\b/g, 'Mẹ Gấu'],
  ];
  for (const [re, rep] of pairs) out = out.replace(re, rep);
  // Collapse accidental doubles
  out = out.replace(/Mẹ Gấu Gấu/g, 'Mẹ Gấu');
  out = out.replace(/Bé Gấu Gấu/g, 'Bé Gấu');
  out = out.replace(/Mẹ Gấu Gấu/g, 'Mẹ Gấu');
  return out;
}

function sceneId(lessonId, index) {
  // g1-l1 → dao-pho-g1-l1-s1 ; extras already g1-l1-s2 → dao-pho-g1-l1-s2
  if (index === 0) return `dao-pho-${lessonId}-s1`;
  const m = lessonId.match(/^(g\d-l\d)(?:-s(\d))?$/);
  if (m && !lessonId.includes('-s')) return `dao-pho-${lessonId}-s${index + 1}`;
  return `dao-pho-${lessonId}`;
}

const { GRADES } = await import(pathToFileURL(quaPhoCurriculum).href);

const lessons = [];
for (const grade of GRADES) {
  for (const lesson of grade.lessons) {
    const situations = lesson.situations.map((scene, index) => {
      const safe = scene.choices.find((c) => c.safe);
      const unsafe = scene.choices.filter((c) => !c.safe);
      return {
        id: index === 0
          ? `dao-pho-${lesson.id}-s1`
          : `dao-pho-${scene.id}`,
        hazard: renameCharacters(scene.hazard),
        prompt: renameCharacters(scene.prompt),
        safeText: renameCharacters(safe.text),
        safeFeedback: renameCharacters(safe.feedback),
        unsafeChoices: unsafe.map((c) => ({
          text: renameCharacters(c.text),
          feedback: renameCharacters(c.feedback),
        })),
      };
    });

    lessons.push({
      id: `dao-pho-${lesson.id}`,
      moduleId: 'dao-pho',
      gradeBand: String(grade.grade),
      title: lesson.title,
      objective: renameCharacters(lesson.objective),
      teacherPrompt: renameCharacters(lesson.teacherPrompt),
      situations,
    });
  }
}

const outPath = join(root, 'content', 'approved', 'atgt-dao-pho.mjs');
mkdirSync(dirname(outPath), { recursive: true });

const header = `// Module Dạo phố (ATGT) — port từ ideas/be-mit-qua-pho
// Nhân vật minh họa: Bé Gấu + Mẹ Gấu. App brand vẫn là Bé Mít An Toàn.
// Học liệu bổ trợ — chưa chuyên gia/giáo viên duyệt; không thu PII.
// Tự sinh bằng scripts/build-atgt-module.mjs — chỉnh nguồn Qua Phố rồi chạy lại script.

`;

function jsString(value) {
  return JSON.stringify(value);
}

const body = `export const LESSONS = ${JSON.stringify(lessons, null, 2)};\n`;
writeFileSync(outPath, header + body, 'utf8');

const situationCount = lessons.reduce((n, l) => n + l.situations.length, 0);
console.log(`Wrote ${lessons.length} lessons / ${situationCount} situations → ${outPath}`);
console.log('Sample prompt:', lessons[0].situations[0].prompt);
