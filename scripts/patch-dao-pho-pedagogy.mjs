/** Patch 4 dao-pho pedagogy must-fix IDs from QA_PEDAGOGY_SAFETY.md */
import { writeFileSync } from 'node:fs';
import { LESSONS } from '../content/approved/atgt-dao-pho.mjs';

const patches = {
  'dao-pho-g2-l5-s1': {
    hazard: 'Mũ không vừa đầu hoặc quai chưa chắc',
    prompt: 'Bé Gấu thử mũ trước chuyến xe máy cùng Mẹ Gấu. Bé Gấu làm gì?',
    safeText: 'Nhờ Mẹ Gấu kiểm tra mũ vừa đầu và cài quai chắc trước khi đi.',
    safeFeedback: 'Tốt lắm! Bé Gấu nhờ Mẹ Gáu kiểm tra mũ vừa đầu và quai chắc.',
    unsafeChoices: [
      { text: 'Chọn mũ rộng vì trông đẹp.', feedback: 'Mũ cần vừa đầu; nhờ Mẹ Gấu chọn giúp, không chỉ vì đẹp.' },
      { text: 'Cài quai lỏng để dễ tháo.', feedback: 'Quai cần cài chắc; nhờ Mẹ Gấu chỉnh giúp.' },
    ],
  },
  'dao-pho-g4-l2-s4': {
    unsafeChoices: [
      { text: 'Chỉ nghe biển báo rồi rẽ.', feedback: 'Bé Gấu không rẽ theo biển khi có hiệu lệnh khác; dừng lại.' },
      { text: 'Rẽ luôn vì biển cho phép, không cần dừng.', feedback: 'Bé Gấu dừng theo hiệu lệnh người điều khiển trước.' },
    ],
  },
  'dao-pho-g4-l3-s2': {
    hazard: 'bạn quên cài dây an toàn trên xe',
    prompt: 'Trên xe cùng người lớn, bạn muốn không cài dây an toàn vì đi gần. Bé Gấu làm gì?',
    safeText: 'Nhắc bạn cài dây cùng người lớn và chỉ đi khi đã được kiểm tra an toàn.',
    safeFeedback: 'Đúng! Bé Gáu nhắc bạn và làm theo người lớn về dây an toàn.',
    unsafeChoices: [
      { text: 'Cười và cũng không cài dây.', feedback: 'Bé Gấu không bắt chước; hãy nhắc bạn và nhờ người lớn.' },
      { text: 'Kể chuyện đáng sợ về tai nạn.', feedback: 'Không dùng hình ảnh gây sợ; hãy nói cách giữ an toàn.' },
    ],
  },
  'dao-pho-g5-l3-s2': {
    unsafeChoices: [
      { text: 'Tự đi vào khu vực cất cánh.', feedback: 'Bé Gấu không tự đi vào khu vực hạn chế; hỏi người lớn trước.' },
      { text: 'Len qua hàng rào một mình để xem máy bay.', feedback: 'Bé Gáu ở cạnh người lớn; không tự len qua hàng rào.' },
    ],
  },
};

// Fix typos Gáu -> Gấu in my patches
function fixTypos(obj) {
  const s = JSON.stringify(obj).replace(/Gáu/g, 'Gấu');
  return JSON.parse(s);
}

for (const lesson of LESSONS) {
  for (const sit of lesson.situations) {
    if (patches[sit.id]) Object.assign(sit, fixTypos(patches[sit.id]));
  }
}

const header = `// Module Dạo phố (ATGT) — Bé Gấu An Toàn
// Học liệu bổ trợ — chưa chuyên gia duyệt; không thu PII.

`;
writeFileSync(
  new URL('../content/approved/atgt-dao-pho.mjs', import.meta.url),
  `${header}export const LESSONS = ${JSON.stringify(LESSONS, null, 2)};\n`,
);
console.log('patched', Object.keys(patches).join(', '));
