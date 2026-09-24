import { chooseOption, advanceScene, VERDICT } from './game.mjs';
import { createAudioController } from './audio.mjs';
import { createSpeechController } from './speech.mjs';
import { showSituationArt } from './art.mjs';
import {
  MODULES,
  SERIES,
  createCurriculumState,
  selectLesson,
  completeLesson,
  returnToModuleHub,
  getCurriculumProgress,
  findModule,
  findLesson,
  modulesForTrack,
  setTrack,
} from './curriculum.mjs';

const $ = (selector) => document.querySelector(selector);
const coverPanel = $('#coverPanel');
const modulePanel = $('#modulePanel');
const lessonPanel = $('#lessonPanel');
const gamePanel = $('#gamePanel');
const finishPanel = $('#finishPanel');
const moduleGrid = $('#moduleGrid');
const lessonGrid = $('#lessonGrid');
const choiceGrid = $('#choiceGrid');

let curriculum = createCurriculumState();
let activeModule = null;
let activeLesson = null;
let game = null;
let lastScene = null;
let lastCueKey = null;
let queueNextCue = false;
/** Đáp án đang được chọn (chưa xác nhận) — chỉ đọc text, chưa chấm đúng/sai. */
let pendingChoice = null;

const audio = createAudioController();
const speech = createSpeechController({ muted: () => audio.isMuted() });

function playCue(kind) {
  try { audio.play(kind); } catch { /* bỏ qua */ }
}

function say(text, options) {
  try { return speech.speak(text, options); } catch { return false; }
}

function stopSpeaking() {
  try { speech.cancel(); } catch { /* bỏ qua */ }
}

function setScreen(screen) {
  coverPanel.hidden = screen !== 'cover';
  modulePanel.hidden = screen !== 'modules';
  lessonPanel.hidden = screen !== 'lessons';
  gamePanel.hidden = screen !== 'game';
  finishPanel.hidden = screen !== 'finish';
}

function renderProgress() {
  const progress = getCurriculumProgress(curriculum);
  $('#curriculumProgress').textContent = `${progress.completed} / ${progress.total}`;
  $('#curriculumProgressFill').style.width = `${(progress.completed / Math.max(progress.total, 1)) * 100}%`;
}

function openModuleCatalogue() {
  renderModuleList();
  setScreen('modules');
  $('#hubTitle').focus();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function returnToCover() {
  curriculum = returnToModuleHub(curriculum);
  activeModule = null;
  activeLesson = null;
  game = null;
  lastCueKey = null;
  stopSpeaking();
  setScreen('cover');
  $('#coverTitle').focus();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderModuleList() {
  renderProgress();
  const track = curriculum.track ?? 'mam-non';
  document.querySelectorAll('[data-track-btn]').forEach((btn) => {
    const active = btn.getAttribute('data-track-btn') === track;
    btn.setAttribute('aria-pressed', active ? 'true' : 'false');
    btn.classList.toggle('is-active', active);
  });
  const eyebrow = $('#hubEyebrow');
  if (eyebrow) {
    eyebrow.textContent =
      track === 'mam-non'
        ? 'LỘ TRÌNH MẦM NON · ƯU TIÊN 3–6 TUỔI'
        : track === 'tieu-hoc'
          ? 'LỘ TRÌNH TIỂU HỌC · LỚP 1–5'
          : 'LỘ TRÌNH ĐẦY ĐỦ · MỌI MODULE';
  }
  const list = modulesForTrack(track);
  moduleGrid.replaceChildren(...list.map((mod) => {
    const done = mod.lessons.filter((lesson) => curriculum.completedLessonIds.includes(lesson.id)).length;
    const card = document.createElement('article');
    card.className = `grade-card${done === mod.lessons.length ? ' completed' : ''}`;
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'grade-card-button';
    button.setAttribute('aria-label', `Xem ${mod.lessonCount} bài của ${mod.title}`);

    const icon = document.createElement('span');
    icon.className = 'grade-icon';
    icon.setAttribute('aria-hidden', 'true');
    icon.textContent = mod.icon;
    const label = document.createElement('span');
    label.className = 'grade-label';
    label.textContent = 'BƯỚC 1 · MODULE';
    const title = document.createElement('strong');
    title.className = 'grade-title';
    title.textContent = mod.title;
    const overview = document.createElement('span');
    overview.className = 'grade-overview';
    overview.textContent = mod.overview;
    const meta = document.createElement('span');
    meta.className = 'grade-meta';
    meta.textContent = `${done} / ${mod.lessonCount} bài · ${mod.situationCount} tình huống`;
    const action = document.createElement('span');
    action.className = 'grade-card-action';
    action.textContent = 'Chọn module này →';

    button.append(icon, label, title, overview, meta, action);
    button.addEventListener('click', () => openModule(mod.id));
    card.append(button);
    return card;
  }));
}

function onSelectTrack(track) {
  curriculum = setTrack(curriculum, track);
  renderModuleList();
}

function openModule(moduleId) {
  activeModule = findModule(moduleId);
  if (!activeModule) return;
  renderLessonList();
  setScreen('lessons');
  $('#lessonPageTitle').focus();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderLessonList() {
  const lessons = activeModule.lessons;
  const done = lessons.filter((lesson) => curriculum.completedLessonIds.includes(lesson.id)).length;
  $('#lessonPageEyebrow').textContent = `BƯỚC 2 · ${activeModule.title.toLocaleUpperCase('vi-VN')}`;
  $('#lessonPageTitle').textContent = `Chọn bài · ${activeModule.title}`;
  $('#lessonPageDescription').textContent = `${activeModule.overview} Mỗi bài có 5 tình huống. Bấm loa 🔊 để nghe lại câu hỏi hoặc đáp án.`;
  $('#gradeLessonProgress').textContent = `${done} / ${lessons.length}`;
  lessonGrid.replaceChildren(...lessons.map((lesson, index) => {
    const completed = curriculum.completedLessonIds.includes(lesson.id);
    const card = document.createElement('article');
    card.className = `lesson-card${completed ? ' is-complete' : ''}`;
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'lesson-card-button';
    button.setAttribute('aria-label', `Bắt đầu bài ${index + 1}: ${lesson.title}`);
    const heading = document.createElement('span');
    heading.className = 'lesson-card-heading';
    const number = document.createElement('span');
    number.className = 'lesson-number';
    number.textContent = `BÀI ${index + 1}`;
    const status = document.createElement('span');
    status.className = 'lesson-status';
    status.textContent = completed ? 'ĐÃ HỌC ✓' : '5 TÌNH HUỐNG';
    heading.append(number, status);
    const title = document.createElement('strong');
    title.className = 'lesson-title';
    title.textContent = lesson.title;
    const objective = document.createElement('span');
    objective.className = 'lesson-card-objective';
    objective.textContent = lesson.objective;
    const band = document.createElement('span');
    band.className = 'lesson-card-action';
    band.textContent = completed ? 'Học lại bài →' : `Lớp gợi ý: ${lesson.gradeBand} · Bắt đầu →`;
    button.append(heading, title, objective, band);
    button.addEventListener('click', () => startLesson(lesson.id));
    card.append(button);
    return card;
  }));
}

function startLesson(lessonId) {
  curriculum = selectLesson(curriculum, lessonId);
  activeLesson = findLesson(lessonId);
  activeModule = findModule(activeLesson.moduleId);
  game = curriculum.currentGame;
  lastCueKey = null;
  stopSpeaking();
  renderGame();
  $('#sceneTitle').focus();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function returnToLessons() {
  curriculum = returnToModuleHub(curriculum);
  game = null;
  lastCueKey = null;
  stopSpeaking();
  if (!activeModule) {
    returnToModules();
    return;
  }
  renderLessonList();
  setScreen('lessons');
  $('#lessonPageTitle').focus();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function returnToModules() {
  curriculum = returnToModuleHub(curriculum);
  activeModule = null;
  activeLesson = null;
  game = null;
  lastCueKey = null;
  stopSpeaking();
  renderModuleList();
  setScreen('modules');
  $('#hubTitle').focus();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function completeLessonFlow() {
  curriculum = completeLesson({ ...curriculum, currentGame: game });
  renderProgress();
  const progress = getCurriculumProgress(curriculum);
  const lessonNumber = activeModule.lessons.findIndex((lesson) => lesson.id === activeLesson.id) + 1;
  $('#finishEyebrow').textContent = `${progress.completed} / ${progress.total} BÀI ĐÃ HỌC`;
  $('#finishTitle').textContent = `Bài ${lessonNumber}: ${activeLesson.title} · Hoàn thành!`;
  $('#finishCopy').textContent = `Bé đã xử lý ${game.scenes.length} tình huống. Tiến độ: ${progress.completed}/${progress.total} bài.`;
  $('#classPrompt').textContent = activeLesson.teacherPrompt;
  const parentBlock = $('#parentNoteBlock');
  const parentText = $('#parentNote');
  if (parentBlock && parentText) {
    if (activeLesson.parentNote) {
      parentBlock.hidden = false;
      parentText.textContent = activeLesson.parentNote;
    } else {
      parentBlock.hidden = true;
      parentText.textContent = '';
    }
  }
  $('#returnHubButton').textContent = `Về danh sách bài · ${activeModule.title}`;
  $('#restartButton').textContent = 'Học lại bài này ↻';
  $('#finishSafetyNote').textContent = 'Ngoài đời, luôn cùng người lớn. Game chưa thay giám sát thật và chưa được chuyên gia duyệt.';
  $('#finishStars').textContent = Array(game.scenes.length).fill('★').join(' ');
  $('#finishStars').setAttribute('aria-label', `${game.scenes.length} tình huống đã hoàn thành`);
  lastCueKey = null;
  playCue('finish');
  say('Bé đã hoàn thành bài này. Hãy cùng người lớn trò chuyện nhé.', { clipKey: 'complete' });
  setScreen('finish');
}

function speakSituation(scene) {
  if (!scene) return;
  const hazard = scene.hazard ? `Nguy cơ: ${scene.hazard}. ` : '';
  const prompt = (scene.prompt ?? '').replace(/[.\s]+$/, '');
  say(`${hazard}${prompt}`, { clipKey: scene.id });
}

function speakChoiceText(choice, scene = lastScene) {
  if (!choice || !scene) return;
  const answerText = choice.text.replace(/[.\s]+$/, '');
  playCue('start');
  say(answerText, { clipKey: `${scene.id}__ans-${choice.id}` });
}

/** Bước 1: chạm đáp án → chỉ đánh dấu + đọc nội dung (KHÔNG chấm đúng/sai). */
function onPickChoice(choice) {
  if (!game || game.awaitingNext || game.completed) return;
  // Sau lần chọn sai: cho chọn lại — xóa verdict/khuyến nghị cũ
  if (game.verdict) {
    game = {
      ...game,
      verdict: null,
      feedback: 'Chạm một đáp án để nghe nội dung.',
      feedbackKind: 'hint',
    };
  }
  pendingChoice = choice;
  // Chỉ đọc đáp án — không đọc đúng/sai, không đọc khuyến nghị
  speakChoiceText(choice);
  highlightPendingChoice();
  renderConfirmAndFeedback();
}

/** Bước 2: bấm “Chọn đáp án” → mới thông báo đúng/sai → rồi khuyến nghị. */
function onConfirmChoice() {
  if (!game || !pendingChoice || game.awaitingNext || game.completed) return;
  const choice = pendingChoice;
  // Giữ highlight đáp án đã xác nhận; xóa pending sau khi chấm
  const confirmedId = choice.id;
  pendingChoice = null;
  const wasSafe = choice.safe;
  game = chooseOption(game, choice.id);
  playCue(wasSafe ? 'correct' : 'wrong');
  say(VERDICT[game.verdict], {
    clipKey: game.verdict === 'correct' ? 'verdict-correct' : 'verdict-retry',
  });
  say(choice.feedback, {
    clipKey: `${lastScene?.id ?? ''}__fb-${choice.id}`,
    queue: true,
  });
  queueNextCue = false;
  // Đánh dấu đáp án vừa xác nhận
  choiceGrid.querySelectorAll('.choice-button').forEach((button) => {
    const selected = button.id === `choice-${confirmedId}`;
    button.classList.toggle('is-selected', selected);
    button.setAttribute('aria-pressed', selected ? 'true' : 'false');
  });
  renderConfirmAndFeedback();
}

function highlightPendingChoice() {
  choiceGrid.querySelectorAll('.choice-button').forEach((button) => {
    const selected = pendingChoice && button.id === `choice-${pendingChoice.id}`;
    button.classList.toggle('is-selected', Boolean(selected));
    button.setAttribute('aria-pressed', selected ? 'true' : 'false');
  });
}

function renderConfirmAndFeedback() {
  const confirm = $('#confirmChoiceButton');
  const verdict = $('#verdict');
  const next = $('#nextSceneButton');
  const feedback = $('#feedback');
  if (!confirm || !verdict || !next || !feedback) return;

  const waitingNext = Boolean(game?.awaitingNext);
  const canConfirm = Boolean(
    pendingChoice && game && !waitingNext && !game.completed,
  );

  // Nút “Chọn đáp án” luôn hiện khi chưa sang bước kế tiếp; chỉ bật khi đã chạm 1 đáp án
  confirm.hidden = waitingNext;
  confirm.disabled = !canConfirm;
  confirm.setAttribute('aria-disabled', canConfirm ? 'false' : 'true');

  if (game?.verdict) {
    verdict.hidden = false;
    verdict.textContent = VERDICT[game.verdict];
    verdict.className = `verdict verdict-${game.verdict}`;
  } else {
    verdict.hidden = true;
    verdict.textContent = '';
    verdict.className = 'verdict';
  }

  next.hidden = !waitingNext;
  next.textContent = game && game.sceneIndex + 1 >= game.scenes.length
    ? 'Xem kết quả bài học →'
    : 'Tình huống kế tiếp →';

  // Chỉ hiện khuyến nghị SAU khi đã bấm “Chọn đáp án” (có verdict)
  if (game?.verdict) {
    feedback.textContent = game.feedback;
    feedback.className = `feedback ${game.feedbackKind}`;
  } else if (pendingChoice) {
    feedback.textContent = 'Đã nghe đáp án. Bấm “Chọn đáp án” để xem đúng hay sai.';
    feedback.className = 'feedback hint';
  } else {
    feedback.textContent = 'Chạm một đáp án để nghe nội dung. Chưa chấm điểm.';
    feedback.className = 'feedback hint';
  }
}

function renderGame() {
  if (game.completed) {
    completeLessonFlow();
    return;
  }
  pendingChoice = null;
  setScreen('game');
  const scene = game.scenes[game.sceneIndex];
  lastScene = scene;
  const lessonNumber = activeModule.lessons.findIndex((lesson) => lesson.id === activeLesson.id) + 1;
  $('#activityLabel').textContent = `BƯỚC 3 · ${activeModule.title} · BÀI ${lessonNumber}`.toLocaleUpperCase('vi-VN');
  $('#sceneProgress').textContent = `${game.sceneIndex + 1} / ${game.scenes.length}`;
  $('#sceneKicker').textContent = `TÌNH HUỐNG ${game.sceneIndex + 1} / ${game.scenes.length} · ${activeModule.title} · BÀI ${lessonNumber}`;
  $('#sceneTitle').textContent = scene.title;
  $('#scenePrompt').textContent = scene.prompt;
  $('#lessonObjective').textContent = activeLesson.objective;
  $('#sceneStamp').textContent = `${scene.icon} · ${activeModule.title}`;
  $('#hazardLabel').textContent = `NGUY CƠ: ${scene.hazard || 'Tình huống cần chú ý'}`;
  $('#stars').textContent = `${'★ '.repeat(game.stars)}${'☆ '.repeat(game.scenes.length - game.stars)}`.trim();
  $('#stars').setAttribute('aria-label', `${game.stars} trên ${game.scenes.length} tình huống đã hoàn thành`);
  $('#progressFill').style.width = `${(game.stars / game.scenes.length) * 100}%`;
  $('#exitActivityButton').textContent = '← Danh sách bài';

  const canvas = $('#sceneArt');
  const artImage = $('#sceneArtImage');
  const artLabel = `${scene.title}. ${scene.prompt}. Minh họa tình huống. Cùng người lớn lựa chọn.`;
  canvas.setAttribute('aria-label', artLabel);
  showSituationArt(artImage, canvas, scene.id, artLabel).then((hasImage) => {
    if (hasImage) return;
    // Toàn dự án: bắt buộc ảnh minh họa chân thực — không canvas khối chữ.
    canvas.hidden = true;
    artImage.hidden = false;
    artImage.removeAttribute('src');
    artImage.alt = artLabel;
    artImage.classList.add('is-pending-art');
  });

  const locked = Boolean(game.awaitingNext);
  choiceGrid.replaceChildren(...scene.choices.map((choice) => {
    const button = document.createElement('button');
    button.className = 'choice-button';
    button.id = `choice-${choice.id}`;
    button.type = 'button';
    button.disabled = locked;
    button.setAttribute('aria-pressed', 'false');
    button.setAttribute('aria-label', `Nghe đáp án: ${choice.text}`);
    button.title = 'Chạm để nghe đáp án';

    const icon = document.createElement('span');
    icon.className = 'choice-icon';
    icon.setAttribute('aria-hidden', 'true');
    icon.textContent = choice.icon;

    const text = document.createElement('span');
    text.className = 'choice-text';
    text.textContent = choice.text;

    const audioHint = document.createElement('span');
    audioHint.className = 'choice-audio-hint';
    audioHint.setAttribute('aria-hidden', 'true');
    audioHint.textContent = '🔊';

    button.append(icon, text, audioHint);
    button.addEventListener('click', () => onPickChoice(choice));
    return button;
  }));
  renderConfirmAndFeedback();
  cueCurrentSituation();
}

function cueCurrentSituation() {
  if (!activeLesson || !game) return;
  const scene = game.scenes[game.sceneIndex];
  const cueKey = `${activeLesson.id}:${game.sceneIndex}`;
  if (cueKey === lastCueKey) return;
  lastCueKey = cueKey;
  playCue('start');
  const hazard = scene?.hazard ? `Nguy cơ: ${scene.hazard}. ` : '';
  const prompt = (scene?.prompt ?? '').replace(/[.\s]+$/, '');
  say(`${hazard}${prompt}`, { clipKey: scene?.id ?? null, queue: queueNextCue });
  queueNextCue = false;
}

function updateSoundLabel() {
  const muted = audio.isMuted();
  $('#soundToggle').setAttribute('aria-pressed', muted ? 'false' : 'true');
  $('#soundToggleLabel').textContent = muted ? 'Âm thanh: tắt' : 'Âm thanh: bật';
  $('.sound-icon').textContent = muted ? '🔇' : '🔊';
}

$('#coverFactsLessons').textContent = String(SERIES.totalLessons);
$('#coverFactsSituations').textContent = String(SERIES.totalSituations);
$('#coverFactsModules').textContent = String(SERIES.moduleCount);

document.querySelectorAll('[data-track-btn]').forEach((btn) => {
  btn.addEventListener('click', () => onSelectTrack(btn.getAttribute('data-track-btn')));
});

$('#startCourseButton').addEventListener('click', openModuleCatalogue);
$('#backToCoverButton').addEventListener('click', returnToCover);
$('#backToModules').addEventListener('click', returnToModules);
$('#exitActivityButton').addEventListener('click', returnToLessons);
$('#confirmChoiceButton').addEventListener('click', onConfirmChoice);
$('#nextSceneButton').addEventListener('click', () => {
  if (!game?.awaitingNext) return;
  stopSpeaking();
  pendingChoice = null;
  const finishing = game.sceneIndex + 1 >= game.scenes.length;
  game = advanceScene(game);
  queueNextCue = true;
  if (finishing || game.completed) {
    completeLessonFlow();
    return;
  }
  renderGame();
});
$('#returnHubButton').addEventListener('click', returnToLessons);
$('#restartButton').addEventListener('click', () => {
  if (!activeLesson) return;
  startLesson(activeLesson.id);
});
$('#speakSceneButton').addEventListener('click', () => {
  playCue('start');
  speakSituation(lastScene);
});
$('#soundToggle').addEventListener('click', () => {
  audio.toggle();
  if (audio.isMuted()) stopSpeaking();
  updateSoundLabel();
});

document.querySelector('.brand')?.addEventListener('click', (event) => {
  event.preventDefault();
  returnToCover();
});

updateSoundLabel();
setScreen('cover');
