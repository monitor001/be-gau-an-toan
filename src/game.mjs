/** Engine chọn đáp án — cùng hợp đồng với game ATGT Bé Gấu. */
export const VERDICT = {
  correct: 'Đúng rồi!',
  wrong: 'Bé chọn chưa đúng rồi.',
};

export function createGame(scenes) {
  return {
    scenes,
    sceneIndex: 0,
    stars: 0,
    attempts: 0,
    completed: false,
    verdict: null,
    awaitingNext: false,
    feedback: 'Chọn cách giúp Bé Gấu nhé!',
    feedbackKind: 'hint',
  };
}

export function chooseOption(state, optionId) {
  if (state.completed) throw new Error('Hành trình đã hoàn thành.');
  if (state.awaitingNext) throw new Error('Đang chờ bấm “Tình huống kế tiếp”.');
  const scene = state.scenes[state.sceneIndex];
  const choice = scene?.choices.find((item) => item.id === optionId);
  if (!choice) throw new Error('Không tìm thấy lựa chọn trong cảnh này.');

  if (!choice.safe) {
    return {
      ...state,
      attempts: state.attempts + 1,
      verdict: 'wrong',
      awaitingNext: false,
      feedback: choice.feedback,
      feedbackKind: 'gentle',
    };
  }

  return {
    ...state,
    stars: state.stars + 1,
    verdict: 'correct',
    awaitingNext: true,
    feedback: choice.feedback,
    feedbackKind: 'success',
  };
}

export function advanceScene(state) {
  if (!state.awaitingNext) return state;
  const sceneIndex = state.sceneIndex + 1;
  const completed = sceneIndex >= state.scenes.length;
  return {
    ...state,
    sceneIndex,
    completed,
    verdict: null,
    awaitingNext: false,
    feedback: completed ? state.feedback : 'Chọn cách giúp Bé Gấu nhé!',
    feedbackKind: completed ? state.feedbackKind : 'hint',
  };
}
