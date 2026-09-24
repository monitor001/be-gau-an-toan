// Minh họa theo TỪNG tình huống: backdrop + đạo cụ từ hazard/prompt/moduleId.
// Local canvas — không tải ảnh, không gọi mạng.

const normalize = (text) => (text ?? '')
  .normalize('NFD')
  .replace(/[\u0300-\u036f]/g, '')
  .replace(/đ/g, 'd')
  .replace(/Đ/g, 'd')
  .toLowerCase();

const BACKDROP_BY_MODULE = {
  nuoc: 'water',
  dien: 'home',
  'khac-chay': 'kitchen',
  'khac-nga': 'home',
  'khac-thuoc': 'home',
  'khac-sac': 'home',
};

const PROP_RULES = [
  { prop: 'bathtub', words: ['bon tam', 'nha tam', 'tam'] },
  { prop: 'jar', words: ['chum', 'vai', 'be chua', 'gieng', 'xo'] },
  { prop: 'pond', words: ['ao', 'ho', 'song', 'suoi', 'bo ao', 'bo ho'] },
  { prop: 'pool', words: ['be boi', 'ho boi'] },
  { prop: 'sea', words: ['bien', 'song bien', 'tam bien'] },
  { prop: 'boat', words: ['do', 'thuyen', 'pha', 'ao phao'] },
  { prop: 'flood', words: ['ngap', 'lu', 'mua bao', 'mua lu'] },
  { prop: 'outlet', words: ['o cam', 'o dien', 'phich', 'cong tac'] },
  { prop: 'wire', words: ['day dien', 'day dut', 'day ho', 'day dut'] },
  { prop: 'device', words: ['quat', 'den', 'may tinh', 'dien thoai', 'sac'] },
  { prop: 'wet', words: ['tay uot', 'nuoc', 'uot'] },
  { prop: 'storm', words: ['bao', 'mua bao', 'cot dien', 'tram dien'] },
  { prop: 'stove', words: ['bep', 'noi', 'phich nuoc', 'nuoc soi', 'nong'] },
  { prop: 'fire', words: ['lua', 'diem', 'bat lua', 'khoi', 'chay'] },
  { prop: 'balcony', words: ['ban cong', 'lan can', 'cua so', 'ghe'] },
  { prop: 'stairs', words: ['cau thang', 'bac thang', 'san uot'] },
  { prop: 'medicine', words: ['thuoc', 'tu thuoc', 'vien'] },
  { prop: 'chemical', words: ['tay rua', 'hoa chat', 'chai', 'nuoc rua'] },
  { prop: 'knife', words: ['dao', 'keo', 'vat sac'] },
  { prop: 'adult', words: ['nguoi lon', 'bo', 'me', 'co', 'thay'] },
];

function matches(haystack, words) {
  return words.some((word) => {
    const escaped = word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    return new RegExp(`(^|[^a-z0-9])${escaped}([^a-z0-9]|$)`).test(haystack);
  });
}

export function pickSceneArt(scene = {}, moduleId = '') {
  const hay = normalize(`${scene.hazard ?? ''} ${scene.prompt ?? ''} ${scene.title ?? ''}`);
  const props = [];
  for (const rule of PROP_RULES) {
    if (matches(hay, rule.words) && !props.includes(rule.prop)) props.push(rule.prop);
  }
  if (!props.includes('adult')) props.push('adult');
  const backdrop = BACKDROP_BY_MODULE[moduleId] || BACKDROP_BY_MODULE[scene.kind] || 'home';
  const variant = ((scene.id || '').length + props.length) % 3;
  return { backdrop, props: props.slice(0, 5), variant };
}

function roundRect(ctx, x, y, w, h, r) {
  const radius = Math.min(r, w / 2, h / 2);
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.arcTo(x + w, y, x + w, y + h, radius);
  ctx.arcTo(x + w, y + h, x, y + h, radius);
  ctx.arcTo(x, y + h, x, y, radius);
  ctx.arcTo(x, y, x + w, y, radius);
  ctx.closePath();
}

function drawAdultAndKid(ctx, w, h, offsetX = 0) {
  ctx.fillStyle = '#f4c49c';
  roundRect(ctx, w * 0.36 + offsetX, h * 0.42, 58, 95, 22);
  ctx.fill();
  ctx.fillStyle = '#8acbb2';
  roundRect(ctx, w * 0.5 + offsetX, h * 0.5, 48, 78, 20);
  ctx.fill();
  ctx.fillStyle = '#514237';
  ctx.font = '700 14px Nunito, Trebuchet MS, sans-serif';
  ctx.fillText('NGƯỜI LỚN', w * 0.34 + offsetX, h * 0.4);
  ctx.fillText('BÉ GẤU', w * 0.52 + offsetX, h * 0.48);
}

function drawProp(ctx, prop, w, h, index, variant) {
  const x = w * (0.08 + (index % 3) * 0.12) + variant * 8;
  const y = h * (0.55 + Math.floor(index / 3) * 0.12);
  ctx.save();
  if (prop === 'bathtub' || prop === 'jar' || prop === 'pool' || prop === 'pond') {
    ctx.fillStyle = '#6eb6d4';
    roundRect(ctx, x, y, 70, 36, 12);
    ctx.fill();
    ctx.fillStyle = '#fff';
    ctx.font = '700 12px Nunito, sans-serif';
    ctx.fillText(prop === 'jar' ? 'CHUM' : prop === 'pool' ? 'BỂ' : prop === 'pond' ? 'AO' : 'BỒN', x + 8, y + 22);
  } else if (prop === 'boat' || prop === 'sea') {
    ctx.fillStyle = '#4a90a8';
    ctx.fillRect(0, h * 0.72, w, h * 0.28);
    ctx.fillStyle = '#e8a05c';
    ctx.beginPath();
    ctx.moveTo(x, y + 20);
    ctx.lineTo(x + 80, y + 20);
    ctx.lineTo(x + 65, y + 40);
    ctx.lineTo(x + 15, y + 40);
    ctx.fill();
    if (prop === 'boat') {
      ctx.fillStyle = '#e74c3c';
      roundRect(ctx, x + 28, y + 5, 28, 22, 4);
      ctx.fill();
    }
  } else if (prop === 'flood') {
    ctx.fillStyle = '#5dade2aa';
    ctx.fillRect(0, h * 0.65, w, h * 0.35);
  } else if (prop === 'outlet' || prop === 'wire' || prop === 'device') {
    ctx.fillStyle = '#f5f5f5';
    roundRect(ctx, x, y, 44, 44, 8);
    ctx.fill();
    ctx.strokeStyle = '#888';
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.fillStyle = '#333';
    ctx.beginPath();
    ctx.arc(x + 15, y + 22, 5, 0, Math.PI * 2);
    ctx.arc(x + 29, y + 22, 5, 0, Math.PI * 2);
    ctx.fill();
    if (prop === 'wire') {
      ctx.strokeStyle = '#c0392b';
      ctx.beginPath();
      ctx.moveTo(x + 44, y + 30);
      ctx.quadraticCurveTo(x + 70, y + 10, x + 90, y + 35);
      ctx.stroke();
    }
  } else if (prop === 'stove' || prop === 'fire') {
    ctx.fillStyle = '#95a5a6';
    roundRect(ctx, x, y, 70, 40, 6);
    ctx.fill();
    ctx.fillStyle = '#e67e22';
    ctx.beginPath();
    ctx.moveTo(x + 20, y + 8);
    ctx.lineTo(x + 28, y - 10);
    ctx.lineTo(x + 36, y + 8);
    ctx.fill();
    ctx.fillStyle = '#e74c3c';
    ctx.beginPath();
    ctx.moveTo(x + 40, y + 10);
    ctx.lineTo(x + 48, y - 6);
    ctx.lineTo(x + 56, y + 10);
    ctx.fill();
  } else if (prop === 'balcony' || prop === 'stairs') {
    ctx.strokeStyle = '#7f8c8d';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(x, y + 40);
    ctx.lineTo(x, y);
    ctx.lineTo(x + 90, y);
    ctx.lineTo(x + 90, y + 40);
    ctx.stroke();
    for (let i = 0; i < 4; i += 1) {
      ctx.beginPath();
      ctx.moveTo(x + 18 + i * 18, y);
      ctx.lineTo(x + 18 + i * 18, y + 40);
      ctx.stroke();
    }
  } else if (prop === 'medicine' || prop === 'chemical') {
    ctx.fillStyle = prop === 'medicine' ? '#3498db' : '#f1c40f';
    roundRect(ctx, x, y, 28, 48, 6);
    ctx.fill();
    ctx.fillStyle = '#fff';
    ctx.font = '700 11px Nunito, sans-serif';
    ctx.fillText(prop === 'medicine' ? 'THUỐC' : 'HÓA CHẤT', x - 4, y + 64);
  } else if (prop === 'knife') {
    ctx.fillStyle = '#bdc3c7';
    ctx.fillRect(x + 10, y, 8, 40);
    ctx.fillStyle = '#8e5a2b';
    ctx.fillRect(x + 6, y + 40, 16, 18);
  } else if (prop === 'wet' || prop === 'storm') {
    ctx.strokeStyle = '#5dade2';
    ctx.lineWidth = 2;
    for (let i = 0; i < 5; i += 1) {
      ctx.beginPath();
      ctx.moveTo(x + i * 14, y);
      ctx.lineTo(x + 6 + i * 14, y + 28);
      ctx.stroke();
    }
  }
  ctx.restore();
}

export function drawSafetyScene(ctx, canvas, scene, moduleId) {
  const w = canvas.width;
  const h = canvas.height;
  const { backdrop, props, variant } = pickSceneArt(scene, moduleId);
  ctx.clearRect(0, 0, w, h);

  const sky = ctx.createLinearGradient(0, 0, 0, h);
  if (backdrop === 'water') {
    sky.addColorStop(0, '#9ad7ea');
    sky.addColorStop(0.5, '#d5f0ef');
    sky.addColorStop(1, '#ffe7c2');
  } else if (backdrop === 'kitchen') {
    sky.addColorStop(0, '#ffe0c4');
    sky.addColorStop(0.55, '#fff3e4');
    sky.addColorStop(1, '#f3e0c4');
  } else {
    sky.addColorStop(0, '#d9e8f7');
    sky.addColorStop(0.55, '#f2f6fb');
    sky.addColorStop(1, '#ffe9cb');
  }
  ctx.fillStyle = sky;
  ctx.fillRect(0, 0, w, h);

  // sàn / mặt nước
  if (backdrop === 'water') {
    ctx.fillStyle = '#5dade2';
    ctx.fillRect(0, h * 0.7, w, h * 0.3);
    ctx.fillStyle = '#ffffff55';
    for (let i = 0; i < 6; i += 1) {
      ctx.fillRect(40 + i * 150, h * 0.78 + (i % 2) * 8, 60, 6);
    }
  } else {
    ctx.fillStyle = '#e8d5b5';
    ctx.fillRect(0, h * 0.78, w, h * 0.22);
  }

  // cửa sổ / tường gợi ý nhà
  if (backdrop === 'home' || backdrop === 'kitchen') {
    ctx.fillStyle = '#ffffffaa';
    roundRect(ctx, w * 0.72, h * 0.18, 120, 90, 10);
    ctx.fill();
    ctx.strokeStyle = '#c9b8a0';
    ctx.stroke();
  }

  const drawProps = props.filter((p) => p !== 'adult');
  drawProps.forEach((prop, index) => drawProp(ctx, prop, w, h, index, variant));
  drawAdultAndKid(ctx, w, h, variant * 6);

  // nhãn nguy cơ ngắn
  if (scene.hazard) {
    ctx.fillStyle = '#ffffffee';
    roundRect(ctx, 16, 16, Math.min(420, 24 + scene.hazard.length * 9), 36, 18);
    ctx.fill();
    ctx.fillStyle = '#73522f';
    ctx.font = '800 14px Nunito, Trebuchet MS, sans-serif';
    ctx.fillText(`NGUY CƠ: ${scene.hazard}`.slice(0, 48), 28, 40);
  }
}
