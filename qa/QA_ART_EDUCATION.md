# QA — Minh họa giáo dục / style-lock — Bé Gấu An Toàn

**Phạm vi:** `art/STYLE.md`, `art/STATUS.md`, spot-check **27** PNG trong `assets/art/` (đọc ảnh trực tiếp).  
**Không regen ảnh.** Ngày rà: 2026-09-24.

**Style lock (tóm tắt):** nền VN chân thực · **2 người** (1 trẻ + 1 người lớn) · áo trẻ có **in gấu** rõ · không gấu/mèo anthropomorphic · không chữ trên ảnh · hazard rõ, tone bình tĩnh.

**Phục vụ game:** `src/art.mjs` → `./assets/art/{situationId}.png` only. Trong repo **không** có thư mục `_stale_*`; `scripts/sync-all-art.mjs` chỉ copy ID curriculum, **không ghi đè** file đã có — tránh kéo bản cũ từ Cursor assets. Nếu sau này có `_stale_*` ở nguồn gen, **không** đồng bộ vào `assets/art`.

---

## Tổng quan spot-check (27 mẫu)

| Chỉ số | Kết quả |
|--------|---------|
| Style lock **PASS** (toàn mẫu) | **18 / 27** (~67%) |
| Style lock **PARTIAL** | **4 / 27** |
| Style lock **FAIL** | **5 / 27** |
| Hazard rõ cho trẻ **PASS** | **23 / 27** |
| Hazard **PARTIAL** | **4 / 27** |

**Nhận xét ngắn:** Bộ **nuoc**, **dien-g1**, **khac** l1 (trừ outlier), và **dao-pho g1–g2** + nhiều g3–g4 khớp lock khá ổn (2 người, in gấu, nền VN, calm). Lệch tập trung ở **dao-pho** (chữ biển báo trên ảnh, thêm nhân vật thứ 3, 1 frame anime lẫn photoreal) và **vài ảnh khac/dien/nuoc** (≥3 người, nhãn WARNING tiếng Anh, nền photoreal + nhân vật anime phẳng).

`art/STATUS.md` ghi 375/375 và spot-check dao-pho g2–g5 l1-s1 OK — **khớp** với mẫu l1-s1; **không** đại diện cho toàn bộ 125 dao-pho (text/sign/outlier vẫn có trong mẫu mở rộng).

---

## Bảng mẫu (PASS / PARTIAL / FAIL)

| ID | Style lock | Hazard rõ? | Ghi chú / vấn đề |
|----|------------|------------|-------------------|
| `nuoc-l1-s1` | PASS | PARTIAL | 2 người, in gấu xanh; phòng tắm VN photoreal. Bồn **trống** — ngữ cảnh “tắm một mình” phụ thuộc lời thoại hơn là hình. |
| `nuoc-l3-s1` | PASS | PASS | Hồ bơi / mép nước rõ; người lớn giám sát. |
| `nuoc-l5-s1` | PASS | PASS | Lũ / nước dâng rõ; bà + cháu (vẫn 1 trẻ + 1 người lớn); calm. |
| `dien-g1-l1-s1` | PASS | PASS | Ổ cắm thấp, trẻ với tay — điện rõ. |
| `dien-g3-l1-s1` | PARTIAL | PARTIAL | 2 người (cô + trẻ), in gấu OK. Cảnh **lớp học illustration** hơn photoreal; ổ điện trên bàn **không** là focal như g1. |
| `khac-chay-l1-s1` | PASS | PASS | Bếp gas, nồi sôi/hơi; người lớn giữ tay. |
| `khac-nga-l1-s1` | PASS | PASS | Ban công, ghế bước gần lan can — té ngã rõ. |
| `khac-thuoc-l1-s1` | PASS | PASS | Chai vàng trên bàn, trẻ chỉ — “nhầm thuốc/đồ uống” đủ đọc hình. |
| `khac-sac-l1-s1` | PASS | PASS | Dao bếp trên bàn; calm. |
| `dao-pho-g1-l1-s1` | PASS | PASS | Vỉa hè + xe; nắm tay người lớn; in gấu trắng. |
| `dao-pho-g2-l1-s1` | PASS | PASS | Biển cảnh báo giao thông (hình, không chữ đọc được); vỉa hè VN. |
| `dao-pho-g3-l1-s1` | **FAIL** | PASS | **Chữ overlay:** “TRƯỜNG TIỂU HỌC” trên cổng — vi phạm STYLE (cấm text trên ảnh). |
| `dao-pho-g4-l1-s1` | PASS | PASS | Xe đạp + đường; 2 người. |
| `dao-pho-g5-l1-s1` | **FAIL** | PASS | **Chữ overlay:** biển vàng “Rẽ đột ngột không quan sát”. |
| `dao-pho-g3-l3-s3` | PASS | PASS | Đường đông xe/mô tô; nắm tay. |
| `dao-pho-g3-l5-s2` | PASS | PARTIAL | Xe đạp + mép đường; hazard “chơi/xe gần lề” hơi mơ hồ so với prompt cụ thể. |
| `dao-pho-g4-l2-s4` | **FAIL** | PASS | **3 người** (cảnh sát); biển tròn **“DỪNG”** trên ảnh. Hazard vạch sang đường rõ nhưng lock 2 người + no text fail. |
| `dao-pho-g4-l4-s3` | PASS | PASS | Cây đổ chắn đường — rõ, calm. |
| `dao-pho-g5-l1-s4` | **FAIL** | PASS | **Style break:** bé anime 2D thò đầu cửa xe trong cảnh photoreal; đèn đỏ bộ hành rõ. |
| `dien-g3-l3-s5` | PASS | PASS | Tủ/transformer + tam giác sét; trẻ chỉ, người lớn cầm tay. |
| `khac-thuoc-l4-s5` | **FAIL** | PASS | **3 người** (2 trẻ); nhân vật **anime phẳng** trên nền photoreal; chai **WARNING + skull** (chữ EN) — cấm text + tone hơi “label shock”. |
| `nuoc-l4-s2` | PARTIAL | PASS | Biển cờ đỏ / cấm bơi rõ. Nhân vật **illustration/anime** + nền gần photoreal — lệch “cartoon trên nền thật” so với mẫu nuoc-l1/l3. |

---

## IMPROVEMENTS (ưu tiên)

### P0 — Ship blocker cho style lock

1. **Quét & regen dao-pho có chữ tiếng Việt baked-in** (ít nhất `dao-pho-g3-l1-s1`, `dao-pho-g5-l1-s1`, `dao-pho-g4-l2-s4`; mở rộng grep/visual pass toàn module). Thay bằng biển **icon-only** hoặc bối cảnh không chữ; nội dung chữ giữ ở prompt/TTS.
2. **Sửa `dao-pho-g5-l1-s4`:** bỏ nhân vật anime trong xe; giữ đúng 2 người photoreal/cartoon-on-photo thống nhất.
3. **Sửa `khac-thuoc-l4-s5`:** về **1 trẻ + 1 người lớn**; chai nguy hiểm **không chữ WARNING/skull kiểu poster** — dùng chai thuốc/vitamin giống `khac-thuoc-l1-s1`.

### P1 — Nhất quán sản xuất

4. **Chuẩn hóa pipeline nhân vật:** cùng một look (cartoon 2D/3D trên nền photo) — tránh batch full-anime (`dien-g3-l1-s1`, `nuoc-l4-s2`, `khac-thuoc-l4-s5`).
5. **Dao-pho:** prompt cấm “cảnh sát / người thứ 3 / chữ biển báo”; nếu cần CSGT thì coi là ngoại lệ có **brief riêng** và vẫn **no text**.
6. **Điện / nước lớp cao:** mỗi ảnh checklist — hazard phải chiếm ≥30% attention (ổ cắm, tủ điện, cờ cấm bơi…) trước khi duyệt batch.

### P2 — QA liên tục

7. **Spot-check mở rộng:** thêm 20 ID ngẫu nhiên/dao-pho g4–g5 sau khi P0; ghi vào `art/STATUS.md` (đừng chỉ l1-s1).
8. **Giữ sync an toàn:** không bật ghi đè hàng loạt; mọi `_stale_*` ở nguồn gen loại khỏi copy list.
9. **Briefs:** `art/briefs/` vẫn có legacy “Mít” (schema QA đã ghi) — refresh prompt EN trong STYLE + briefs trước regen P0.

---

## Kết luận

Coverage file **375/375** và phần lớn mẫu **đạt** identity Bé Gấu (in gấu), 2 người, nền VN, tone giáo dục. **Chưa đạt lock đồng đều** trên toàn bộ dao-pho và một số outlier khac/dien/nuoc — đủ để prototype nội bộ, **chưa** đủ để coi art “đóng băng” cho pilot trẻ nếu không xử lý P0.

---

STATUS: PARTIAL

SCOPE: Style-lock minh họa + độ rõ hazard (spot-check 27 PNG, STYLE/STATUS, đường phục vụ `assets/art`).

DONE: Đọc `art/STYLE.md`, `art/STATUS.md`; visual review 27 ID (bắt buộc + 5 dao-pho g3–g5 + 3 module khác); ghi bảng verdict + improvements.

FILES: `qa/QA_ART_EDUCATION.md` (this report). Evidence: `assets/art/*.png` (sampled IDs above), `art/STYLE.md`, `art/STATUS.md`, `src/art.mjs`, `scripts/sync-all-art.mjs`.

DEVIATIONS: Không regen ảnh; không quét visual full 375 (chỉ 27 mẫu).

BLOCKERS: P0 items (text-on-image dao-pho, `dao-pho-g5-l1-s4`, `khac-thuoc-l4-s5`) cần regen/selective replace trước khi parent coi art QA “OK”.

ERRORS: None (tooling).

NEXT_FOR_PARENT: Chốt có chạy batch regen P0 dao-pho + 2 outlier; sau đó mở rộng spot-check hoặc chuyển sang thử nghiệm trẻ/chuyên gia (ngoài phạm vi art QA).

## Follow-up parent (2026-09-24)
Đã regen các ID FAIL P0 theo style **kết quả + X đỏ** (xem danh sách trên). Spot-check lại sau khi batch regen xong.
