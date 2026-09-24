import { LESSONS as NUOC } from '../content/approved/nuoc.mjs';
import { LESSONS as DIEN12 } from '../content/approved/dien-g12.mjs';
import { LESSONS as DIEN35 } from '../content/approved/dien-g35.mjs';
import { LESSONS as KHAC_AB } from '../content/approved/khac-ab.mjs';
import { LESSONS as KHAC_CD } from '../content/approved/khac-cd.mjs';
import { LESSONS as DAO } from '../content/approved/atgt-dao-pho.mjs';

const ALL = [...NUOC, ...DIEN12, ...DIEN35, ...KHAC_AB, ...KHAC_CD, ...DAO];
const sits = ALL.flatMap((l) =>
  l.situations.map((s) => ({
    ...s,
    lessonId: l.id,
    moduleId: l.moduleId,
    gradeBand: l.gradeBand,
    title: l.title,
  })),
);

function blob(s) {
  return [
    s.hazard,
    s.prompt,
    s.safeText,
    s.safeFeedback,
    ...(s.unsafeChoices || []).flatMap((c) => [c.text, c.feedback]),
  ].join('\n');
}
function find(re) {
  return sits.filter((s) => re.test(blob(s)));
}
function show(label, arr, n = 15) {
  console.log(`\n== ${label} (${arr.length}) ==`);
  for (const s of arr.slice(0, n)) {
    console.log(`${s.id} | ${s.safeText}`);
  }
}

const checks = {
  Cuu_voi: /Cứu với|cứu với/,
  ho_to: /hô to|gọi to|hô lớn/i,
  phao: /áo phao|phao/i,
  ao_ho: /\bao\b|hồ|sông|suối|kênh|giếng|chum|xô|bồn tắm|bể /i,
  khong_cui: /không cúi|cúi vào|cúi sát/i,
  nam_tay: /nắm tay|cầm tay mẹ|giữ tay/i,
  den_colors: /đèn đỏ|đèn vàng|đèn xanh|màu đỏ|màu vàng|màu xanh/i,
  mu_xe: /mũ bảo hiểm|xe máy/i,
  ngoi_yen: /ngồi yên/i,
  bong_duong: /bóng.*(đường|lòng)|nhặt bóng|chạy theo bóng|lòng đường/i,
  ket_xe: /kẹt.*xe|trong ô tô|trong xe hơi|khóa.*xe|bấm còi|gõ kính|đập kính/i,
  nong: /nóng|nồi|phích|bếp|chảo/i,
  dien: /ổ cắm|dây điện|điện/i,
  sac: /\bdao\b|kéo|vật sắc/i,
  thuoc: /thuốc|hóa chất|nước rửa|tẩy|siro|viên/i,
  nga: /ban công|cửa sổ|cầu thang|sàn ướt|trèo|té ngã/i,
  nghen: /nghẹn|hóc|ngồi.*ăn|ăn.*ngồi|đồng xu|viên bi|cho vào mũi|cho vào tai|cho vào miệng|đồ chơi nhỏ/i,
  body: /áo tắm|vùng kín|bộ phận|xâm hại|No-Run-Tell|chạm chỗ kín|bí mật về chạm|swimsuit/i,
  la_lac: /người lạ|bị lạc|lạc khỏi|theo người|nhận quà|số điện thoại|tên bố|tên mẹ/i,
  diem: /diêm|bật lửa/i,
  chay_yell: /hô.*[Cc]háy|[Cc]háy!|la cháy|“Cháy/,
  n114: /114/,
  n111: /\b111\b/,
  cho_meo: /\bchó\b|\bmèo\b|thú cưng/,
  san_choi: /cầu trượt|xích đu/,
  blood: /máu|chết|thương tích nặng|kinh hoàng/,
};

for (const [k, re] of Object.entries(checks)) {
  const a = find(re);
  console.log(`${k}: ${a.length} -> ${a.slice(0, 12).map((s) => s.id).join(', ') || '(none)'}`);
}

// Framing
let pos = 0;
let ban = 0;
let mixed = 0;
let other = 0;
const good = [];
const weak = [];
const banLead = [];
for (const s of sits) {
  const t = s.safeText.trim();
  const hasAction =
    /(gọi|báo|nhờ|chờ|đi theo|nắm tay|đứng xa|ở lại|ở cạnh|ngồi|mặc|nhắc|hỏi|tìm người lớn|làm theo|đi cùng)/i.test(
      t,
    );
  const startsBan = /^(Không |Đừng )/i.test(t);
  if (startsBan) banLead.push(s);
  if (startsBan && hasAction) {
    mixed += 1;
    if (weak.length < 20) weak.push(s);
  } else if (startsBan) {
    ban += 1;
    if (weak.length < 20) weak.push(s);
  } else if (hasAction) {
    pos += 1;
    if (good.length < 20) good.push(s);
  } else {
    other += 1;
  }
}
console.log('\nFRAMING');
console.log({ pos, ban, mixed, other, banLead: banLead.length });
console.log('good samples:');
good.slice(0, 8).forEach((s) => console.log(s.id, '|', s.safeText));
console.log('weak samples:');
weak.slice(0, 8).forEach((s) => console.log(s.id, '|', s.safeText));

show('lost/stranger', find(/người lạ|bị lạc|lạc khỏi|nhận quà|số điện thoại/i));
show('dog/cat', find(/\bchó\b|\bmèo\b|thú cưng/));
show('playground', find(/cầu trượt|xích đu|xếp hàng.*(cầu|xích)|đẩy.*(cầu|xích)/i));
show('choking', find(/nghẹn|hóc|đồng xu|viên bi|cho vào mũi|cho vào tai|ngồi khi ăn|ăn ngồi/i));
show('body', find(/áo tắm|vùng kín|bộ phận|xâm hại|No-Run|chạm chỗ/i));
show('111/114', find(/114|\b111\b/));
show('Cuu voi / shout help', find(/Cứu với|hô to gọi/i));
show('locked car', find(/kẹt|ô tô|xe hơi|bấm còi|gõ kính/i));
show('yellow light', find(/đèn vàng/i));
show('sit still moto', find(/xe máy/i).filter((s) => /ngồi/i.test(blob(s))));

const adultSafe = sits.filter((s) =>
  /người lớn|Mẹ Gấu|bố|cô|thầy|bà|chú|bảo vệ/i.test(s.safeText),
);
console.log('\nadult in safeText', adultSafe.length, '/', sits.length);

const bands = {};
ALL.forEach((l) => {
  bands[l.gradeBand] = (bands[l.gradeBand] || 0) + 1;
});
console.log('gradeBands', bands);

// parentNote
console.log('parentNote field', ALL.some((l) => l.parentNote != null));
console.log('teacherPrompt', ALL.filter((l) => l.teacherPrompt).length);

// one rule estimate: objective length / semicolon or clause count
const multi = ALL.filter((l) => (l.objective.match(/;|—| - |\./g) || []).length >= 2);
console.log('objectives with 2+ clause markers', multi.length, '/', ALL.length);

// dao-pho g1-l3 lost situations
const lostLesson = ALL.find((l) => l.id === 'dao-pho-g1-l3');
console.log('\ndao-pho-g1-l3 teacherPrompt:', lostLesson?.teacherPrompt);
lostLesson?.situations.forEach((s) => console.log(s.id, s.hazard));

// push on pool
show('push water', find(/không đẩy|đẩy bạn.*(nước|bể|hồ)/i));
