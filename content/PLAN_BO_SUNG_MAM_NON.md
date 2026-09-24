# Kế hoạch bổ sung module — ưu tiên mầm non 3–6

**Ngày:** 2026-09-24  
**Căn cứ:** checklist phụ huynh + `qa/QA_PRESCHOOL_PRIORITY_GAP.md`  
**Mẫu schema:** giống module hiện có (`nuoc` / `khac-*`)  
**Ranh giới:** draft nội bộ; **chưa** chuyên gia / Bộ duyệt; không thu PII; người lớn = lá chắn chính

---

## 1. Phân tích khoảng trống

| Có sẵn (giữ) | Thiếu / mỏng | Cách xử lý đề xuất |
|---|---|---|
| Nước nhà + ao/hồ + phao đò | Cue **“Cứu với!”**; float gần bờ nếu có | **Patch** `nuoc` (1–2 tình huống) |
| ATGT lớp 1–5 dày | Đèn **vàng**; kẹt ô tô; gói mầm non gọn | **Module mới** `dao-mam` (5 bài) + patch nhẹ |
| Nóng / điện / sắc / thuốc / té | — | Không tách module mới |
| Cháy + 114 qua NL | Cue **“Cháy!”**; **111**; thoát với cô | **Patch** `khac-chay` + 1 bài mới trong pack |
| — | Hóc sặc | **Module mới** `khac-hoc` |
| — | Thân thể / xâm hại | **Module mới** `khac-than` |
| — | Người lạ / lạc | **Module mới** `khac-lac` |
| — | Thú lạ + sân chơi | **Module mới** `khac-choi` |
| `teacherPrompt` | Mục phụ huynh | Schema + UI: `parentNote` |

**Quyết định phạm vi (parent chọn 1):**

| Phương án | Ý nghĩa |
|---|---|
| **A — Track mầm non** (khuyến nghị) | Thêm 4 module mới (20 bài / 100 tình huống) + 1 strip ATGT mầm non (5 bài) + patch; UI có lọc `mam-non` / `tieu-hoc` |
| **B — Chỉ vá** | Chỉ patch `nuoc` / `khac-chay` / `dao-pho` + 3 bài lẻ; không đủ checklist P0 |
| **C — Gộp hết vào tiểu học** | Nhồi vào module cũ → lệch độ tuổi, khó “một quy tắc / buổi” |

Kế hoạch chi tiết dưới đây theo **phương án A**.

---

## 2. Chuẩn module (bám mẫu hiện có)

Mỗi module mới:

- File draft: `content/drafts/<name>.mjs` → sau review → `content/approved/`
- Export `LESSONS` array
- Mỗi bài: `id`, `moduleId`, `gradeBand` (`mam-3-4` | `mam-5-6` | `1-2` nếu dùng chung), `title`, `objective` (1 ý chính), `teacherPrompt`, **`parentNote` (mới)**, `situations.length === 5`
- Mỗi tình huống: `id`, `hazard`, `prompt`, `safeText`, `safeFeedback`, `unsafeChoices` × 2 (`text` + `feedback`)
- **1 safe path**; nhận biết / tránh / gọi NL; **không** dạy kỹ thuật sơ cứu phức tạp, tự cứu đuối, tự chữa cháy
- Ngôn ngữ: **nên làm trước** (“Đứng xa…”, “Nắm tay…”, “Hô to… rồi chạy gọi…”); cấm chỉ là phụ
- Art: RESULT + X đỏ + NL xua (pipeline `all-gau-result` mở rộng)
- TTS: regen clip VI sau khi chốt copy

**Quota đề xuất (A):**

| Module | Bài | Tình huống | File draft |
|---|---:|---:|---|
| `khac-hoc` | 5 | 25 | `drafts/khac-hoc.mjs` |
| `khac-than` | 5 | 25 | `drafts/khac-than.mjs` |
| `khac-lac` | 5 | 25 | `drafts/khac-lac.mjs` |
| `khac-choi` | 5 | 25 | `drafts/khac-choi.mjs` |
| `dao-mam` | 5 | 25 | `drafts/dao-mam.mjs` |
| Patch `nuoc` / `khac-chay` | — | ~6–10 sit sửa/thêm trong bài sẵn | sửa approved + re-review |
| **Cộng mới** | **25** | **125** | + wire `curriculum.mjs` |

Sau A: tổng game ≈ **100 bài / 500 tình huống** (75 cũ + 25 mới), chưa kể patch.

---

## 3. Outline từng module mới

### 3.1 `khac-hoc` — Phòng hóc sặc

| Bài | Title (nháp) | 1 quy tắc / buổi | 5 hazard gợi ý |
|---|---|---|---|
| l1 | Ngồi ăn | Ngồi ngay ngắn khi ăn | đứng ăn; vừa chạy vừa nhai; nằm ăn; cười đùa miệng đầy; lấy đồ ăn của em bé khi đang chạy |
| l2 | Nhai kỹ | Nhai xong mới nuốt / nói | nuốt vội; miếng quá to; nhét nhiều; vừa ăn vừa nói to; bỏ kẹo cứng chạy |
| l3 | Đồ nhỏ không vào miệng | Để đồ nhỏ vào hộp / đưa cô | hạt; đồng xu; viên bi; nắp chai; nút áo |
| l4 | Mũi và tai | Đưa đồ cho cô nếu muốn “thử” | nhét hạt mũi; tăm bông sâu; viên pin; hạt tai; tự soi bằng que |
| l5 | Khi bạn ho sặc | Hô gọi người lớn; không tự đập lưng kiểu “chữa” | tự xử; đổ nước ùng; lấy tay móc sâu; bỏ chạy cười; giữ bí mật |

`parentNote`: cắt đồ nhỏ; ngồi cùng khi ăn; game không dạy Heimlich.

---

### 3.2 `khac-than` — An toàn cơ thể (nhạy cảm — soạn thận trọng)

| Bài | Title | 1 quy tắc | Gợi ý tình huống (không mô tả xâm hại) |
|---|---|---|---|
| l1 | Tên bộ phận | Gọi đúng tên trung tính (đầu, tay, bụng…) | bạn đặt biệt danh xấu; xấu hổ không nói với cô; … |
| l2 | Vùng đồ bơi | Vùng đồ bơi là riêng tư | ai đó muốn nhìn/chạm vùng đồ bơi → nói Không, tìm NL tin cậy |
| l3 | Nói Không | Nói to “Không!” | bị kéo tay vào chỗ khuất; bị đòi giữ bí mật về chạm |
| l4 | Chạy đi | Chạy tới chỗ có nhiều người / cô / bố mẹ | không theo vào phòng riêng; không “đi xem gì bí mật” |
| l5 | Kể ngay | Kể bố mẹ/cô; kể ra không có lỗi | bí mật “chỉ mình biết”; người lớn lạ dặn im |

**Ranh giới copy:** không máu, không chi tiết hành vi xâm hại, không hình vùng nhạy cảm; art = cử chỉ từ chối + NL tin cậy, **không** minh họa chạm.  
**Review bắt buộc:** parent + ideally chuyên gia/GV trước khi coi là “dạy trẻ”.

---

### 3.3 `khac-lac` — Người lạ & khi bị lạc

| Bài | Title | 1 quy tắc | Hazard gợi ý |
|---|---|---|---|
| l1 | Không đi theo | Ở lại với bố mẹ/cô | người lạ rủ đi; “mẹ nhờ đón”; xe lạ mở cửa |
| l2 | Không nhận quà | Cảm ơn + tìm NL tin cậy | bánh kẹo; đồ chơi; tiền; “bí mật quà” |
| l3 | Thuộc tên mình | Nói tên mình + tên bố/mẹ với NL tin cậy | quên tên khi hỏi; nói SĐT cho người lạ (sai) — SĐT chỉ luyện **offline với bố mẹ**, app **không** nhập số |
| l4 | Đứng yên khi lạc | Đứng yên chỗ vừa mất NL | chạy lung tung; theo đám đông lạ; khóc chạy ra đường |
| l5 | Người giúp an toàn | Nhờ cô bán hàng / chú bảo vệ / mẹ đang bế em | theo người lạ “chỉ đường”; vào xe lạ |

Sửa luôn mismatch: `dao-pho-g1-l3` teacherPrompt “bị lạc” → đổi prompt hoặc chuyển tình huống sang module này.

---

### 3.4 `khac-choi` — Động vật & vui chơi

| Bài | Title | 1 quy tắc | Hazard |
|---|---|---|---|
| l1 | Thú lạ | Đứng xa, hỏi NL trước | trêu chó; vuốt mèo lạ; cho ăn tay |
| l2 | Thú nhà người khác | Xin phép chủ / NL | mở chuồng; kéo đuôi; đùa đuổi |
| l3 | Xếp hàng cầu trượt | Xếp hàng, chờ tới lượt | xô bạn; leo ngược; đẩy từ trên |
| l4 | Xích đu / cầu | Đứng ngoài vùng đu đưa | chạy sát phía trước; đẩy mạnh; đứng trên ghế xích đu |
| l5 | Không xô đẩy | Chơi nhẹ, báo cô nếu bị đẩy | xô xuống cầu thang sân chơi; tranh đồ đẩy bạn |

---

### 3.5 `dao-mam` — ATGT mầm non (5 bài, không port g3–g5)

| Bài | Title | 1 quy tắc |
|---|---|---|
| l1 | Nắm tay & vỉa hè | Nắm tay NL, đi trên vỉa hè |
| l2 | Ba màu đèn | Đỏ dừng · Vàng chờ · Xanh đi **cùng NL** |
| l3 | Xe máy | Đội mũ BH, ngồi yên, không đứng trên xe |
| l4 | Bóng & đồ chơi | Giữ bóng trong khu vui chơi; nhờ NL lấy nếu ra đường |
| l5 | Trong ô tô | Thắt / ngồi đúng chỗ; nếu bị quên: **bấm còi liên tục + đập cửa kính** gọi người |

Không thay `dao-pho` tiểu học; UI track mầm non trỏ `dao-mam`.

---

## 4. Patch module sẵn (không tạo module mới)

### 4.1 `nuoc` (P1)

| ID hiện có / mới | Việc |
|---|---|
| `nuoc-l5-s3` (hoặc sit mới l5) | Safe: **Hô to “Cứu với!”** + ở trên bờ + chạy gọi NL; **không** kéo bạn |
| Optional sit | Thấy phao/áo gần bờ → đưa NL / đứng xa, không nhảy xuống “cứu” |

### 4.2 `khac-chay` (P1)

| Việc |
|---|
| Sit khói/lửa: hô **“Cháy!”** rồi nắm tay cô/mẹ chạy ra điểm hẹn |
| Sit ~5–6 tuổi: nhắc NL **114** (cứu hỏa) và **111** (bảo vệ trẻ) — **không** tự gọi một mình |
| Thoát nạn **ở trường** với cô (bổ sung 1 sit trong l3 hoặc l5) |

### 4.3 Framing pass (P2, có thể song song)

~95 `safeText` mở bằng Không/Đừng → đảo: hành động trước, cấm sau. Ưu tiên module mầm non + `nuoc` l1–l2.

---

## 5. Schema + UI + phụ huynh

| Thay đổi | Chi tiết |
|---|---|
| `parentNote` string trên mỗi lesson | 2–4 câu: NL giám sát; môi trường an toàn (rào ao, che ổ điện…); game chỉ ôn |
| Hub phụ huynh (màn hình mới hoặc accordion) | “Người lớn là lá chắn chính”; không thay giám sát; chưa chuyên gia duyệt; không thu PII |
| `gradeBand` / filter | Track `mam-non` vs `tieu-hoc` trong `curriculum.mjs` + cover |
| `MODULE_META` | Thêm 5 meta (icon/title/overview) |
| Art briefs | Mở rộng `all-gau-result.json` +100 (+patch) ID |
| TTS | Regen theo situation / choice text mới |

---

## 6. Quy trình triển khai (theo phase)

```text
Phase 0 — Parent chốt
  [ ] Chọn A / B / C
  [ ] Duyệt outline 3.1–3.5 + ranh giới khac-than
  [ ] Duyệt thêm parentNote schema

Phase 1 — Draft nội dung (subagent writer, không merge approved)
  [ ] drafts/khac-hoc.mjs
  [ ] drafts/khac-lac.mjs
  [ ] drafts/khac-choi.mjs
  [ ] drafts/dao-mam.mjs
  [ ] drafts/khac-than.mjs  (sau cùng; parent đọc từng câu)
  [ ] Patch drafts cho nuoc + khac-chay

Phase 2 — Review nội bộ (như REVIEW_PEDAGOGY + REVIEW_SAFETY)
  [ ] Schema 5×5; 1 safe; không sơ cứu nguy hiểm
  [ ] Soft language; nên-làm-trước
  [ ] khac-than: checklist riêng (no graphic / no blame child)

Phase 3 — Wire prototype
  [ ] approved/ + curriculum.mjs + UI filter + parent hub
  [ ] Art RESULT + TTS

Phase 4 — Pilot
  [ ] Chỉ kèm NL; ghi chú chưa chuyên gia duyệt
```

**Thứ tự viết (theo mức nguy hiểm checklist):**  
`khac-lac` + patch `nuoc` → `dao-mam` → `khac-hoc` → patch `khac-chay` → `khac-choi` → `khac-than` (cuối, kiểm soát chặt).

---

## 7. Ước lượng công sức (thô)

| Hạng mục | Effort |
|---|---|
| 25 bài copy + review | ~3–5 ngày writer+reviewer |
| Wire UI/curriculum | ~0.5–1 ngày |
| Art 125 ID RESULT | throughput gen hiện tại (hàng loạt) |
| TTS | pipeline sẵn, chạy sau chốt text |
| `khac-than` | + buffer review phụ huynh/GV |

---

## 8. Không làm trong kế hoạch này

- Tuyên bố phê duyệt chuyên gia / Bộ
- Thu tên/SĐT trẻ trong app
- Dạy Heimlich / CPR / cứu đuối / chữa cháy cho trẻ
- Thay hướng active `traffic-count-analyzer` (`AGENTS.md`)

---

## NEXT_FOR_PARENT

1. ~~Phương án A + draft + wire~~ **xong** (12/100/500, track UI)
2. Đợi art 125 + TTS nền xong → spot-check
3. Đọc `khac-than` trước khi pilot
4. Không tuyên bố chuyên gia duyệt

