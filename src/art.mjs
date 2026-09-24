/** Load ảnh hoạt hình theo situation.id — fallback canvas nếu thiếu file. */

const EXT = ['webp', 'png', 'jpg'];

export function artUrlForSituation(situationId) {
  if (!situationId) return null;
  // Thử png trước (đợt generate hiện tại), rồi webp/jpg
  return EXT.map((ext) => `./assets/art/${situationId}.${ext}`);
}

/**
 * @returns {Promise<boolean>} true nếu đã hiện ảnh
 */
export function showSituationArt(imgEl, canvasEl, situationId, ariaLabel) {
  if (!imgEl || !canvasEl) return Promise.resolve(false);
  const candidates = artUrlForSituation(situationId) || [];
  imgEl.hidden = true;
  canvasEl.hidden = false;
  imgEl.removeAttribute('src');
  imgEl.alt = ariaLabel || '';

  const tryNext = (index) => new Promise((resolve) => {
    if (index >= candidates.length) {
      resolve(false);
      return;
    }
    const probe = new Image();
    probe.onload = () => {
      imgEl.src = candidates[index];
      imgEl.hidden = false;
      imgEl.classList.remove('is-pending-art');
      canvasEl.hidden = true;
      resolve(true);
    };
    probe.onerror = () => {
      tryNext(index + 1).then(resolve);
    };
    probe.src = candidates[index];
  });

  return tryNext(0);
}
