import { createGame } from './game.mjs';
import { LESSONS as NUOC } from '../content/approved/nuoc.mjs';
import { LESSONS as DIEN12 } from '../content/approved/dien-g12.mjs';
import { LESSONS as DIEN35 } from '../content/approved/dien-g35.mjs';
import { LESSONS as KHAC_AB } from '../content/approved/khac-ab.mjs';
import { LESSONS as KHAC_CD } from '../content/approved/khac-cd.mjs';
import { LESSONS as DAO_PHO } from '../content/approved/atgt-dao-pho.mjs';
import { LESSONS as DAO_MAM } from '../content/approved/dao-mam.mjs';
import { LESSONS as KHAC_LAC } from '../content/approved/khac-lac.mjs';
import { LESSONS as KHAC_HOC } from '../content/approved/khac-hoc.mjs';
import { LESSONS as KHAC_CHOI } from '../content/approved/khac-choi.mjs';
import { LESSONS as KHAC_THAN } from '../content/approved/khac-than.mjs';

/** tracks: mam-non = ưu tiên 3–6; tieu-hoc = lớp 1–5 / đầy đủ */
const MODULE_META = Object.freeze({
  nuoc: {
    id: 'nuoc',
    title: 'An toàn nước',
    icon: '💧',
    overview: 'Nhà, ao hồ, bể bơi, biển/đò và mưa lũ — nhận biết nguy cơ và gọi người lớn.',
    tracks: Object.freeze(['mam-non', 'tieu-hoc']),
  },
  dien: {
    id: 'dien',
    title: 'An toàn điện',
    icon: '⚡',
    overview: 'Ổ cắm, dây điện, trường học, mưa bão — không chạm, báo người lớn.',
    tracks: Object.freeze(['tieu-hoc']),
  },
  'khac-chay': {
    id: 'khac-chay',
    title: 'Cháy & nhiệt bếp',
    icon: '🔥',
    overview: 'Đồ nóng, diêm/bật lửa, khói — đứng xa và tìm người lớn tin cậy.',
    tracks: Object.freeze(['mam-non', 'tieu-hoc']),
  },
  'khac-nga': {
    id: 'khac-nga',
    title: 'Té ngã an toàn',
    icon: '🪜',
    overview: 'Ban công, cửa sổ, cầu thang, sàn ướt — không trèo, chơi đúng chỗ.',
    tracks: Object.freeze(['mam-non', 'tieu-hoc']),
  },
  'khac-thuoc': {
    id: 'khac-thuoc',
    title: 'Thuốc & hóa chất',
    icon: '🧴',
    overview: 'Không nếm, không mở tủ thuốc — báo người lớn khi nghi ngờ.',
    tracks: Object.freeze(['mam-non', 'tieu-hoc']),
  },
  'khac-sac': {
    id: 'khac-sac',
    title: 'Vật sắc',
    icon: '✂️',
    overview: 'Dao, kéo — chỉ dùng khi người lớn cho phép và đứng cạnh.',
    tracks: Object.freeze(['mam-non', 'tieu-hoc']),
  },
  'dao-pho': {
    id: 'dao-pho',
    title: 'Dạo phố an toàn',
    icon: '🚦',
    overview: 'ATGT lớp 1–5 cùng Bé Gấu và Mẹ Gấu — vỉa hè, đèn tín hiệu, xe buýt, mũ bảo hiểm.',
    tracks: Object.freeze(['tieu-hoc']),
  },
  'dao-mam': {
    id: 'dao-mam',
    title: 'Đường phố mầm non',
    icon: '🚸',
    overview: 'Nắm tay, ba màu đèn (cả vàng), mũ bảo hiểm, bóng, khi bị quên trong ô tô.',
    tracks: Object.freeze(['mam-non']),
  },
  'khac-lac': {
    id: 'khac-lac',
    title: 'Người lạ & bị lạc',
    icon: '🧭',
    overview: 'Không đi theo / nhận quà; đứng yên khi lạc; nhờ người giúp an toàn.',
    tracks: Object.freeze(['mam-non']),
  },
  'khac-hoc': {
    id: 'khac-hoc',
    title: 'Phòng hóc sặc',
    icon: '🍽️',
    overview: 'Ngồi ăn, nhai kỹ, không cho đồ nhỏ vào miệng–mũi–tai; gọi người lớn khi bạn sặc.',
    tracks: Object.freeze(['mam-non']),
  },
  'khac-choi': {
    id: 'khac-choi',
    title: 'Chơi & động vật',
    icon: '🛝',
    overview: 'Thú lạ, xếp hàng cầu trượt / xích đu, không xô đẩy.',
    tracks: Object.freeze(['mam-non']),
  },
  'khac-than': {
    id: 'khac-than',
    title: 'An toàn cơ thể',
    icon: '🛡️',
    overview: 'Vùng đồ bơi riêng tư; nói Không — chạy đi — kể ngay với người lớn tin cậy.',
    tracks: Object.freeze(['mam-non']),
  },
});

let choiceSeq = 0;

function arrangeChoices(safeText, safeFeedback, unsafeChoices, safePosition) {
  const safe = { id: 'safe', text: safeText, safe: true, feedback: safeFeedback };
  const distractors = unsafeChoices.map((item, index) => ({
    id: `try-${index + 1}`,
    text: item.text,
    safe: false,
    feedback: item.feedback,
  }));
  const ordered = [];
  for (let i = 0; i < 3; i += 1) {
    ordered.push(i === safePosition ? safe : distractors.shift());
  }
  return ordered.map((item, index) => ({ ...item, icon: String(index + 1) }));
}

function toPlayableLesson(raw, order) {
  if (!raw?.situations || raw.situations.length !== 5) {
    throw new Error(`Bài ${raw?.id ?? '?'} phải có đúng 5 tình huống.`);
  }
  const meta = MODULE_META[raw.moduleId];
  if (!meta) throw new Error(`Thiếu module meta cho ${raw.moduleId}`);
  const situations = raw.situations.map((situation, index) => ({
    id: situation.id,
    kind: raw.moduleId,
    icon: meta.icon,
    title: raw.title,
    prompt: situation.prompt,
    hazard: situation.hazard,
    adultPresent: true,
    choices: arrangeChoices(
      situation.safeText,
      situation.safeFeedback,
      situation.unsafeChoices,
      (order + index) % 3,
    ),
  }));
  return {
    id: raw.id,
    moduleId: raw.moduleId,
    gradeBand: raw.gradeBand,
    title: raw.title,
    objective: raw.objective,
    teacherPrompt: raw.teacherPrompt,
    parentNote: raw.parentNote ?? null,
    tracks: meta.tracks,
    situations,
    scene: situations[0],
  };
}

const ALL_RAW = [
  ...NUOC,
  ...DIEN12,
  ...DIEN35,
  ...KHAC_AB,
  ...KHAC_CD,
  ...DAO_PHO,
  ...DAO_MAM,
  ...KHAC_LAC,
  ...KHAC_HOC,
  ...KHAC_CHOI,
  ...KHAC_THAN,
];
const PLAYABLE = ALL_RAW.map((lesson, index) => toPlayableLesson(lesson, choiceSeq + index));

export const MODULES = Object.freeze(
  Object.values(MODULE_META).map((meta) => {
    const lessons = PLAYABLE.filter((lesson) => lesson.moduleId === meta.id);
    return Object.freeze({
      ...meta,
      lessons: Object.freeze(lessons),
      lessonCount: lessons.length,
      situationCount: lessons.reduce((sum, lesson) => sum + lesson.situations.length, 0),
    });
  }),
);

export const SERIES = Object.freeze({
  title: 'Bé Gấu An Toàn',
  totalLessons: PLAYABLE.length,
  totalSituations: PLAYABLE.reduce((sum, lesson) => sum + lesson.situations.length, 0),
  moduleCount: MODULES.length,
});

export function modulesForTrack(track) {
  if (!track || track === 'all') return MODULES;
  return MODULES.filter((mod) => mod.tracks.includes(track));
}

export function createCurriculumState() {
  return {
    completedLessonIds: [],
    currentModuleId: null,
    currentLessonId: null,
    currentGame: null,
    track: 'mam-non',
  };
}

export function getCurriculumProgress(state) {
  const visible = modulesForTrack(state.track ?? 'all');
  const visibleLessonIds = new Set(visible.flatMap((mod) => mod.lessons.map((lesson) => lesson.id)));
  const completed = state.completedLessonIds.filter((id) => visibleLessonIds.has(id)).length;
  return {
    completed,
    total: visibleLessonIds.size,
  };
}

export function selectLesson(state, lessonId) {
  const lesson = PLAYABLE.find((item) => item.id === lessonId);
  if (!lesson) throw new Error(`Không tìm thấy bài ${lessonId}`);
  return {
    ...state,
    currentModuleId: lesson.moduleId,
    currentLessonId: lesson.id,
    currentGame: createGame(lesson.situations),
  };
}

export function completeLesson(state) {
  const id = state.currentLessonId;
  if (!id) return state;
  const completedLessonIds = state.completedLessonIds.includes(id)
    ? state.completedLessonIds
    : [...state.completedLessonIds, id];
  return {
    ...state,
    completedLessonIds,
    currentGame: null,
    currentLessonId: null,
  };
}

export function returnToModuleHub(state) {
  return {
    ...state,
    currentLessonId: null,
    currentGame: null,
  };
}

export function setTrack(state, track) {
  return { ...state, track };
}

export function findLesson(lessonId) {
  return PLAYABLE.find((item) => item.id === lessonId) ?? null;
}

export function findModule(moduleId) {
  return MODULES.find((item) => item.id === moduleId) ?? null;
}
