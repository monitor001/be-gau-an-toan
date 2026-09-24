# QA — 5 module mầm non mới (nội dung + tích hợp)

**Reviewer:** content quality + curriculum/UI wiring (không rà art)  
**Ngày:** 2026-09-24  
**Phạm vi:**  
- `content/approved/dao-mam.mjs`  
- `content/approved/khac-lac.mjs`  
- `content/approved/khac-hoc.mjs`  
- `content/approved/khac-choi.mjs`  
- `content/approved/khac-than.mjs`  
- `src/curriculum.mjs`, `src/ui.mjs`, `index.html` (track `mam-non`)  

**Không** thay chuyên gia / GV / cơ quan; prototype kèm người lớn.

---

## STATUS (cho parent)

```
STATUS: PARTIAL
INTEGRATION: yes (wired)
SCOPE: 5 module mới × 5 bài × 5 tình huống + curriculum/UI mam-non
DONE: schema đếm; ranh giới cứng; action-first vs hybrid; adult-in-prompt; distractor/pedagogy; verify mam-non hub
FILES: qa/QA_NEW_MODULES_INTEGRATION.md
DEVIATIONS: ~27 safeText hybrid “Không…; [hành động]” (không pure ban-only); vài distractor gần đúng; khac-than header còn DRAFT
BLOCKERS: không chặn prototype local; chuyên gia duyệt + thử trẻ vẫn ngoài phạm vi
NEXT_FOR_PARENT: (1) rewrite ban-lead → action-first cho cụm hoc-l3/l4 + lac hybrid; (2) sửa 3–4 distractor gần đúng; (3) parent/GV đọc khac-than trước pilot; (4) bỏ/đổi header DRAFT khi chốt approved
ERRORS: none (import/playable load OK; SERIES 100 bài / 500 tình huống)
```

---

## INTEGRATION

| Check | Result |
|---|---|
| Import 5 file trong `src/curriculum.mjs` | **Yes** — `DAO_MAM`, `KHAC_LAC`, `KHAC_HOC`, `KHAC_CHOI`, `KHAC_THAN` + spread vào `ALL_RAW` |
| `MODULE_META` + `tracks: ['mam-non']` | **Yes** — chỉ mầm non (không vào `tieu-hoc`) |
| `toPlayableLesson` (5 sits, arrangeChoices 1 safe + 2 unsafe) | **Yes** — load không throw |
| UI hub filter | **Yes** — `createCurriculumState().track = 'mam-non'`; `renderModuleList` → `modulesForTrack(track)`; `index.html` có `data-track-btn="mam-non"` |
| Hub mam-non hiển thị 5 module mới | **Yes** — cùng 5 module cũ (`nuoc`, cháy/nga/thuốc/sắc) → **10 module** trên track mầm non |

**Wired:** yes.

---

## Checklist tổng (125 tình huống)

| # | Tiêu chí | Kết quả |
|---|---|---|
| 1 | 5×5, schema đủ (`parentNote`, `teacherPrompt` **cấp bài**; sit: `id/hazard/prompt/safeText/safeFeedback` + đúng 2 `unsafeChoices`) | **Pass** cả 5 module |
| 2 | Action-first `safeText` vs ban-only | **Partial** — 0 pure ban-only; **~27 hybrid** dẫn bằng “Không…; [làm gì]” |
| 3 | Adult trong prompt | **Pass** — 125/125 có Mẹ/Bố/cô/chú/bà/ông/dì/bảo vệ/nhân viên… |
| 4 | Boundaries (Heimlich / body graphic / locked-car / PII) | **Pass** (chi tiết dưới) |
| 5 | Pedagogy / distractor / mismatch | **Partial** — vài distractor gần đúng + cặp unsafe trùng ý |

---

## Per-module verdict

### `dao-mam` — **OK**

- 5 bài / 25 sit: `dao-mam-l1`…`l5`. Schema + adult-in-prompt: đủ.  
- Đèn vàng đúng “chờ” (`dao-mam-l2-s2`, `l2-s4`); mũ/xe máy ngồi yên (`l3-*`); bóng không ra đường (`l4-*`).  
- **Locked-car:** `dao-mam-l5-s3`, `dao-mam-l5-s4` safe = **còi + đập cửa kính + chờ người lớn**; unsafe = im lặng / nút lạ / capô — **đúng ranh giới**.  
- Hybrid nhẹ: `dao-mam-l5-s5` (“Không mở cửa; ngồi yên…”).  
- PII: chỉ disclaimer parentNote — không thu thập.

### `khac-lac` — **OK (có note)**

- Schema đủ; không đi theo / không nhận quà / tên–không địa chỉ–không SĐT / đứng yên / người giúp an toàn — bám brief.  
- PII: dạy **không** đọc số/địa chỉ cho người lạ (`khac-lac-l3-s2`, `l3-s3`, `l3-s4`); app không form — **đúng**.  
- Hybrid ban+action: ~8 id (vd. `khac-lac-l1-s5`, `l2-s2`, `l2-s3`, `l3-s2`, `l3-s3`, `l4-s2`, `l4-s4`, `l5-s5`).  
- Distractor gần đúng / dễ nhiễu: xem Top issues.

### `khac-hoc` — **OK (có note)**

- **No Heimlich DIY trên safe path.** `khac-hoc-l5-s1` unsafe = “đập lưng” / “ôm bụng ấn”; `l5-s3` unsafe = móc miệng — đều **sai**; safe = gọi cô/người lớn. parentNote nêu rõ.  
- Cụm `khac-hoc-l3-*` / `l4-*` nhiều hybrid “Không…; đưa/báo…” — nên rewrite action-first cho mầm non.  
- `khac-hoc-l5-s2`: hai unsafe gần trùng (đổ nước / cho uống nước).

### `khac-choi` — **OK**

- Thú lạ / thú nhà người / cầu trượt / xích đu / không xô đẩy — adult trong mọi prompt.  
- `khac-choi-l1-s4` “ôm ngực” = tư thế đứng yên khi chó lại gần (không graphic body safety).  
- False-positive quét: “mở khóa chuồng” chỉ trong **unsafe** (`khac-choi-l2-s1`).

### `khac-than` — **OK / nhạy cảm (PARTIAL soft)**

- Dùng “vùng đồ bơi”; không tên bộ phận sinh dục / không mô tả xâm hại chi tiết — **đúng boundary**.  
- Chuỗi Không → chạy → kể: `l2`–`l5` nhất quán.  
- File header vẫn **“DRAFT NHẠY CẢM — cần parent/GV đọc trước khi approved”** dù nằm `content/approved/` — cần parent chốt wording.  
- Một số prompt cố ý mơ hồ (`khac-than-l3-s2` “làm … không vui”, `l3-s4` “nói chuyện không vui”) — an toàn ngôn ngữ nhưng **cần người lớn scaffold** khi chơi.

---

## Top issues (ưu tiên sửa)

1. **Action-first (framing mầm non)** — rewrite dẫn bằng hành động, cấm để sau hoặc bỏ đầu câu:  
   - `khac-hoc-l3-s1`, `l3-s2`, `l3-s4`, `l3-s5`  
   - `khac-hoc-l4-s2`, `l4-s3`, `l4-s4`, `l4-s5`  
   - `khac-lac-l2-s2`, `l2-s3`, `l3-s2`, `l3-s3`, `l4-s2`, `l4-s4`, `l5-s5`  
   - `khac-choi-l2-s1`, `l2-s3`, `l2-s4`, `l2-s5`  
   - Ví dụ: `khac-hoc-l3-s1` “Không bỏ hạt vào miệng; đặt hạt…” → “Đặt hạt vào hộp và đưa cô; không bỏ vào miệng.”

2. **Distractor gần đúng / dễ mất tin luật chơi**  
   | ID | Vấn đề | Gợi ý |
   |---|---|---|
   | `khac-lac-l4-s3` | Unsafe “Chạy ra vỉa hè gọi bố vì sợ” vẫn có “gọi bố” | Đổi thành chạy ra lòng đường / theo xe mà không nhờ cô bán hàng |
   | `khac-lac-l5-s5` | “Đứng cạnh xe chờ mẹ tới” nghe gần an toàn | Làm rõ: đứng cạnh **xe người lạ** / nắm tay người lạ chờ |
   | `khac-lac-l2-s4` | “Lắc đầu nhưng đứng im, không gọi mẹ” gần nửa đúng | OK giữ nếu feedback mạnh; hoặc thêm hành vi rủi ro rõ (nhận quà rồi đứng im) |
   | `khac-hoc-l5-s2` | Hai unsafe trùng ý (nước) | Một giữ đổ nước; một đổi sang tự đập lưng / bỏ chạy |

3. **`khac-than` trước pilot** — parent/GV đọc full `l2`–`l5`; cân nhắc thêm 1 dòng teacherPrompt: đóng vai nhẹ, dừng nếu trẻ khó chịu; đổi header DRAFT khi chính thức coi là approved nội bộ.

4. **Overlap cố ý** `khac-lac` (quà/lạ) ↔ `khac-than-l2-s3` (kẹo + xem vùng đồ bơi) — giữ được nếu hub ghi rõ chủ đề; không cần gộp trừ khi parent muốn rút số bài.

5. **Không phải lỗi nội dung nhưng nhớ disclaimer** — mọi parentNote đã nhắc chưa chuyên gia duyệt / không thu PII; giữ trên UI finish như các module cũ.

---

## Boundaries (xác nhận nhanh)

| Ranh giới | Pass? | Evidence |
|---|---|---|
| Không Heimlich DIY (hoc) | **Yes** | Safe = gọi người lớn; DIY chỉ unsafe `khac-hoc-l5-s1`/`s3` |
| Không graphic body (than) | **Yes** | “vùng đồ bơi”; không chi tiết xâm hại |
| Locked-car chỉ còi + kính (dao-mam) | **Yes** | `dao-mam-l5-s3`, `l5-s4` |
| Không thu PII | **Yes** | Disclaimer + `khac-lac-l3` dạy *không* khoe SĐT/địa chỉ |

---

## NEXT_FOR_PARENT

1. Quyết định có bắt buộc rewrite ~27 hybrid `safeText` trước pilot trẻ không (khuyến nghị: ít nhất cụm `khac-hoc-l3/l4`).  
2. Sửa 2–3 distractor gần đúng (`khac-lac-l4-s3`, `khac-lac-l5-s5`, `khac-hoc-l5-s2`).  
3. Review đọc to `khac-than` (nhạy cảm) + cập nhật header file khỏi DRAFT nếu chấp nhận nội bộ.  
4. Integration đã xong — không cần wire thêm để hiện trên track **Mầm non 3–6**.  
5. Chuyên gia / thử trẻ: vẫn ngoài scope; không claim “đã duyệt an toàn chính thức”.
