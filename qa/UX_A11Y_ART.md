# QA — UX / A11y / Minh họa — Bé Mít An Toàn

**Phạm vi:** chỉ đọc `index.html`, `src/ui.mjs` (`drawSimpleScene`), `styles.css`; tham chiếu `ideas/be-mit-qua-pho/src/scene-art.mjs`.  
**Không sửa code.** Ngày rà: 2026-09-24.

---

## STATUS: PARTIAL

| Trục | Kết luận ngắn |
|------|----------------|
| Nút loa ≥44px | **PASS** (`.speak-button` / `.choice-speak`) |
| `aria-label` | **Gần đủ** — thiếu trên `#soundToggle` khi ẩn nhãn mobile |
| Mobile choice layout | **PASS** (1 cột + hàng nút + loa) |
| Contrast | **PARTIAL** — chữ chính OK; footer / CTA cam / vài nhãn phụ dưới AA |
| Minh họa theo hazard | **FAIL so với chuẩn ATGT** — chỉ tint module + 2 khối màu; không đạo cụ theo tình huống |

---

## 1. Nút loa ≥ 44×44 px

| Phần tử | CSS / markup | Kết quả |
|---------|--------------|---------|
| `#speakSceneButton` | class `speak-button`; `min-width:44px; min-height:44px` | **PASS** |
| Nút loa từng đáp án | class `speak-button choice-speak`; cùng min 44×44 | **PASS** |
| `#soundToggle` (topbar) | `padding:8px 12px`; ≤520px chỉ còn icon (`sound-label{display:none}`) — không có min 44×44 | **FAIL** mục tiêu chạm (ước ~30–36px chiều cao) |
| `#exitActivityButton` | `.exit-button` padding 7×9 / mobile nhỏ hơn | **FAIL** mục tiêu chạm |

**Khuyến nghị (không làm trong gói này):** giữ `.speak-button` như hiện tại; thêm `min-width/min-height:44px` + `aria-label` cho `#soundToggle`; nâng `.exit-button` ≥44px chiều cao.

---

## 2. `aria-label` và nhãn trợ năng

| Phần tử | Hiện trạng | Kết quả |
|---------|------------|---------|
| Brand | `aria-label="Bé Mít An Toàn, trang bìa"` | OK |
| `#speakSceneButton` | `aria-label="Nghe lại tình huống"` | OK |
| Choice button | `aria-label={choice.text}` | OK |
| Choice speak | `aria-label="Nghe lại: {choice.text}"` | OK |
| Canvas | cập nhật runtime: title + prompt + “Cùng người lớn…” | OK |
| Module / lesson cards | `aria-label` có mô tả | OK |
| `#soundToggle` | chỉ `aria-pressed`; nhãn `#soundToggleLabel` bị `display:none` trên ≤520px | **GAP** — SR/icon-only có thể không nghe được “Âm thanh: bật/tắt” |
| Emoji trang trí | `aria-hidden="true"` trên icon loa / badge | OK |
| Live regions | `#verdict`, `#feedback` `role="status"` `aria-live="polite"` | OK |
| Focus | `focus-visible` outline trên button/a; heading `tabindex="-1"` khi đổi màn | OK |

---

## 3. Mobile choice layout (≤760px)

- Desktop: `.choice-grid` = 3 cột.
- Mobile: `grid-template-columns:1fr` — mỗi đáp án một hàng đầy đủ chiều rộng.
- Mỗi hàng `.choice-row` = `flex`: `.choice-button` (`flex:1`, `min-height:63px` mobile) + `.choice-speak` (44×44, `align-self:center`).
- Text 13px vẫn đọc được; icon choice 39×39 (không phải hit target chính — hit target là cả `.choice-button`).

**Kết luận: PASS** cho bố cục chọn đáp án trên điện thoại. Rủi ro nhỏ: trên màn rất hẹp, hàng “đáp án + loa” có thể hơi chật nếu `choice.text` dài — vẫn một cột nên chấp nhận được cho prototype.

---

## 4. Contrast (ước lượng WCAG 2.1, nền cream/paper)

| Cặp | Tỷ lệ ~ | AA normal (4.5) |
|-----|---------|-----------------|
| `--ink` `#3f3a35` / cream | 10.6 | PASS |
| Prompt `#4c423a` / paper | 9.6 | PASS |
| Choice text `#64584d` / `#fffefa` | 6.8 | PASS |
| Hazard pill `#73522f` / `#fff0d8` | 6.3 | PASS |
| Objective `#43594f` / `#eef8f4` | 7.0 | PASS |
| Verdict đúng/sai | ≥5.3 | PASS |
| Welcome/sub `#80756b` / cream | 4.3 | FAIL normal (OK nếu coi large/bold) |
| Feedback muted `#958774` / `#f5f1e7` | 3.1 | FAIL normal |
| Journey / gentle reminder | 3.3–3.7 | FAIL normal |
| Footer `#a29485` / cream | 2.8 | **FAIL** |
| Primary CTA trắng / `#ff9a56` | 2.1 | **FAIL** (cả text và non-text UI 3:1) |
| Sound toggle `#8b6849` / `#fff0d8` | 4.5 | Biên AA |

**Kết luận: PARTIAL.** Nội dung tình huống/đáp án đủ tương phản; phụ chú và nút cam chính cần đậm hơn trước pilot trẻ/phụ huynh.

---

## 5. Minh họa hiện tại vs hazard/module

### `drawSimpleScene` (An Toàn) — thực tế

1. Gradient trời theo **`moduleId`** chỉ 4 nhánh: `nuoc` / `dien` / `khac-chay` / else (gộp té ngã, thuốc, vật sắc).
2. Hai đám mây ellipse cố định.
3. Hai hình chữ nhật (`#f4c49c`, `#8acbb2`) — gợi “người lớn + Mít” trừu tượng, **không** phụ thuộc `scene.hazard` / `scene.prompt`.
4. `scene.icon` (emoji) góc trên trái + chữ “Cùng người lớn”.

**Không đủ cụ thể theo hazard:** cùng một module, “ổ điện”, “dây sờn”, “tay ướt” trông gần như nhau. Ba module `khac-*` (nga / thuoc / sac) dùng cùng backdrop “else”. Canvas `aria-label` bù bằng chữ, nhưng trẻ nhìn hình không nhận ra nguy cơ.

### Tham chiếu ATGT (`be-mit-qua-pho` `scene-art.mjs`)

- `pickSceneArt({ hazard, prompt, kind, id })` → `backdrop` + `props[]` + `variant`.
- Khớp từ khoá đã chuẩn hoá (bỏ dấu), có suppress phủ định, fallback `kind`.
- Chuẩn dự án: minh họa **từng tình huống**, không chỉ theo bài/module.

**Khoảng cách:** An Toàn đang ở mức “tint module”; ATGT đã ở mức “backdrop + đạo cụ theo hazard”. Nên port mô hình `scene-art.mjs` (từ khoá hazard tiếng Việt sinh hoạt) chứ không copy prop đường bộ.

---

## 6. Đề xuất map hazard → đạo cụ (MVP art)

Quy ước giống ATGT: `normalize` bỏ dấu → khớp cụm từ trong `hazard` + `prompt` → backdrop theo module + 1–3 props. Không vẽ cảnh thương tích / điện giật / lửa lan — chỉ đạo cụ nhận biết + người lớn.

### Nước (`nuoc`) — backdrop: `bath` | `pool` | `pond` | `flood`

| Nhóm từ khoá (gợi ý) | Đạo cụ |
|----------------------|--------|
| bon, nha tam, chum, xo, be chua | `bathtub`, `bucket`, `lid_open` |
| ao, gieng, kenh, muong, be ca, bo ao | `pond_edge`, `fence`, `warning_sign` |
| be boi, thanh be, coi | `pool`, `wet_deck` |
| ao phao, do, thuyen, song, bien, co cam | `lifejacket`, `boat`, `flag` |
| ngap, lu, ho sau mua | `flood_path`, `deep_hole_mark` |
| goi nguoi lon / cuu | `adult_call` (không vẽ “nhảy xuống cứu”) |

### Điện (`dien`) — backdrop: `indoor_wall`

| Nhóm từ khoá | Đạo cụ |
|--------------|--------|
| o dien, lo o, o tuong, o thap | `outlet`, `cover_plate` |
| day, day keo dai, day ron, day nhay | `extension_cord`, `tangled_cord` |
| tay uot, kem, uong nuoc gan | `wet_hand_cue`, `water_glass` (cách xa thiết bị) |
| sac, ti vi, quat, may xay | `plug`, `appliance` |
| day son, o nong, mui la, tieng la | `frayed_cord`, `heat_warn` |
| rut/cam khi chua duoc phep | `adult_hand` |

### Cháy & nhiệt bếp (`khac-chay`) — backdrop: `kitchen` | `hallway_smoke`

| Nhóm từ khoá | Đạo cụ |
|--------------|--------|
| bep, noi soi, chien, lo, nuoc soi, phich | `stove`, `pot`, `kettle` |
| diem, bat lua, nen, nhang, tro | `matchbox`, `lighter`, `candle` (xa tầm trẻ) |
| khoi, bao chay, hanh lang | `smoke_haze`, `exit_door` |
| 114, diem hen, thu cung | `phone_114`, `meeting_spot` |

### Té ngã (`khac-nga`) — backdrop: `home_floor` | `balcony` | `stairs`

| Nhóm từ khoá | Đạo cụ |
|--------------|--------|
| ban cong, lan can, lo gia, san thuong, mai | `railing`, `closed_door` |
| cua so, be cua so, luoi | `window_sill`, `window_guard` |
| cau thang, tay vin, day xuong | `stairs`, `handrail` |
| san uot, lau, tham nhan, do choi chan loi | `wet_floor`, `toy_clutter`, `rug_wrinkle` |

### Thuốc & hóa chất (`khac-thuoc`) — backdrop: `cabinet_shelf`

| Nhóm từ khoá | Đạo cụ |
|--------------|--------|
| tu thuoc, chia khoa tu | `locked_cabinet`, `key` |
| thuoc, vien, vi, keo vitamin | `pill_blister`, `medicine_bottle` (nhãn “THUỐC”, không “kẹo”) |
| chai rua, tay, chai khong nhan, hoa chat | `cleaner_bottle`, `skull_label` / nhãn cảnh báo đơn giản |
| 115, uong nham | `phone_115`, `adult_call` |

### Vật sắc (`khac-sac`) — backdrop: `kitchen_counter` | `desk`

| Nhóm từ khoá | Đạo cụ |
|--------------|--------|
| dao, thot | `knife_block`, `cutting_board` (dao nằm cao / có người lớn) |
| keo, keo thu cong | `scissors` (điểm nhọn xuống / đóng) |
| bao, dung cu sac | `grater` / `tool` + `adult_hand` |
| chay cam keo, tranh gianh | `no_run` cue |

**Ưu tiên triển khai:** (1) backdrop theo 6 `moduleId`, (2) 2–4 props/module phủ ~80% hazard phổ biến, (3) luôn vẽ cặp Mít + người lớn, (4) variant bố cục 0–2 như ATGT để tránh lặp.

---

## DONE / FILES

- **DONE:** Rà UX/a11y/art theo checklist giao; đối chiếu `scene-art.mjs` ATGT; đề xuất map hazard→đạo cụ 6 nhóm.
- **FILES:** `qa/UX_A11Y_ART.md` (duy nhất; không đụng code).
- **DEVIATIONS:** Không chạy browser/device thật; contrast tính từ mã màu CSS, không đo screenshot.
- **BLOCKERS:** Không.
- **ERRORS:** Không.

---

## NEXT_FOR_PARENT

1. Chốt có port mô hình `scene-art.mjs` (hazard→props) sang An Toàn trước pilot mắt trẻ — hiện art **chưa** đủ cụ thể theo tình huống.
2. Nếu sửa a11y nhỏ trước: `aria-label` + hit area `#soundToggle`; đậm footer / chữ trên nút cam; `.exit-button` ≥44px.
3. Giữ nguyên `.speak-button` 44px và mobile 1-cột choice — đạt; không cần đụng layout choice trừ khi text đáp án quá dài trên máy thật.
4. Không đổi hướng active; game vẫn prototype chưa chuyên gia duyệt / chưa thử trẻ.
