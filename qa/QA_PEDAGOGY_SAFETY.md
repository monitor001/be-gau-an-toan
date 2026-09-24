# QA — Sư phạm & an toàn nội dung (Bé Gấu An Toàn)

**Reviewer:** pedagogy + child-safety (QA pass)  
**Ngày:** 2026-09-24  
**Phạm vi:** `content/approved/*.mjs` (375 tình huống / 75 bài / 7 module) + disclaimer UI (`index.html`, `src/ui.mjs`).  
**Không** thay thế chuyên gia, giáo viên, hay cơ quan quản lý; **không** coi là huấn luyện an toàn đã duyệt.

## Phương pháp lấy mẫu

| Module | Bài đã đọc kỹ (≥2) | Edge / hồi quy |
|---|---|---|
| `nuoc` | `nuoc-l1`, `nuoc-l4` | `nuoc-l5-s3` (cứu nạn trên bờ) |
| `dien` | `dien-g1-l1`, `dien-g5-l4` | `dien-g3-l3-s5`, `dien-g4-l3-s4` (chó + dây đứt), `dien-g5-l4-s5` (aptomat) |
| `khac-chay` | `khac-chay-l1`, `khac-chay-l4` | `khac-chay-l4-s4` (mèo trong nhà cháy) |
| `khac-nga` | `khac-nga-l2`, `khac-nga-l3` | `khac-nga-l3-s1`, `khac-nga-l5-s5` |
| `khac-thuoc` | `khac-thuoc-l1`, `khac-thuoc-l4` | 6 id đã sửa trong `REVIEW_SAFETY.md` (đối chiếu bản approved) |
| `khac-sac` | `khac-sac-l3`, `khac-sac-l4` | `khac-sac-l4-s2` |
| `dao-pho` | `dao-pho-g1-l1`, `dao-pho-g4-l3` | `dao-pho-g2-l5-s1`, `dao-pho-g4-l2-s4`, `dao-pho-g5-l3-s2` |

Bổ sung: quét toàn bộ approved — không còn `Bé Mít` / `Mít`; grep máu/chết/hù dọa; script đếm `safeText` thiếu tín hiệu người lớn; rà distractor dao-pho dễ nhầm “gần đúng”.

## Kết luận nhanh theo tiêu chí

1. **Đáp án an toàn (250 tình huống sinh hoạt gốc):** Bám nhận biết / tránh / gọi hoặc ở cùng người lớn. Các FAIL đã sửa (`khac-thuoc-l1-s4`, `l4-s1/s4/s5`, `khac-sac-l4-s2`, `khac-nga-l3-s1`) **có mặt đúng** trong `content/approved/`. Edge `nuoc-l5-s3`, `dien-g5-l4-s5`, cháy + mèo: không dạy DIY cứu / cắt điện / quay lại nhà.
2. **Đồ họa ngôn ngữ / hù dọa:** Không thấy máu, mô tả thương tích chi tiết, hay trách móc trẻ trong safe path. Unsafe choice mô tả hành vi cấm → feedback từ chối: **đúng mô hình**.
3. **Tiếng Việt lớp tiểu học:** Câu ngắn, phản hồi nhẹ. Một số bài ATGT lớp 4–5 (`dao-pho-g4-l3-*`) hơi trừu tượng (“tuân thủ an toàn”, “ảnh hưởng cộng đồng”) — vẫn đọc được với người lớn kèm.
4. **Nhân vật:** `Bé Gấu` + người lớn (hay `Mẹ Gấu`) nhất quán trong 6 module sinh hoạt; `index.html` nói rõ áo có hình gấu. **`dien-g12.mjs`** còn ~45 prompt dùng “Bé” rút gọn thay vì “Bé Gấu” (không nhầm với thú cưng). Chó/mèo chỉ là nhân vật phụ (điện/cháy), không gọi Bé Gấu là thú nuôi.
5. **Không bị hiểu là tài liệu chính thức:** Bìa + `finishSafetyNote` có disclaimer prototype. **Rủi ro:** tiêu đề bài `dao-pho` trùng tên chủ đề SGK ATGT (“Hậu quả của tai nạn giao thông”, …) — cần giữ disclaimer và tránh wording “đạt quy chuẩn” như thay thế hướng dẫn cơ quan.
6. **So với `REVIEW_SAFETY.md` / `REVIEW_PEDAGOGY.md`:** Ranh giới cứng và schema **vẫn đúng** cho **50 bài / 250 tình huống** gốc sau sync approved. **Đã lỗi thời:** (a) không đếm module `dao-pho` (+25 bài / +125 tình huống); (b) `REVIEW_PEDAGOGY.md` NOTE “chờ safety sibling” — safety đã OK từ 2026-09-24; (c) chưa có rà soát an toàn/sư phạm **đầy đủ** cho 125 tình huống ATGT port (chỉ lấy mẫu + quét lần này).

## Điểm mạnh (giữ nguyên)

- Module nước / điện / khác: safe path **không** dạy nhảy cứu, sửa điện, chữa cháy, gây nôn; 114/115 qua người lớn (`khac-chay-l4-s3`, `khac-thuoc-l5-*`).
- Giáo viên/phụ huynh: `teacherPrompt` gợi thảo luận, không thay giám sát.
- ATGT lớp 1 mẫu (`dao-pho-g1-l1`): nắm tay Mẹ Gấu, vỉa hè, đèn đỏ — phù hợp kèm người lớn.

---

## IMPROVEMENTS (ưu tiên)

### Must-fix (trước pilot trẻ / in lại distractor)

| ID | Vấn đề | Gợi ý sửa |
|---|---|---|
| **`dao-pho-g2-l5-s1`** | Prompt hỏi **“Mẹ nên kiểm tra điều gì?”** nhưng trẻ chọn `safeText` kiểu checklist (“đạt quy chuẩn…”) — lệch POV (trẻ đóng vai mẹ) và nghe như **chuẩn cơ quan**. | Đổi prompt/safeText: *“Bé Gấu nhờ Mẹ Gấu kiểm tra mũ vừa đầu và cài quai chắc trước khi đi.”* Bỏ hoặc paraphrase “quy chuẩn” → “mũ đúng loại cho xe máy”. |
| **`dao-pho-g5-l3-s2`** | Distractor **“Ở lại cửa sau cùng Mẹ Gấu”** bị coi sai dù gần với hành vi an toàn (ở cạnh người lớn, không tự vào khu cấm). Dễ làm trẻ/n người lớn mất tin cậy luật chơi. | Thay distractor bằng hành vi thật sự rủi ro (vd. tự len qua hàng rào / chạy một mình ra sân đỗ); hoặc chấp nhận là đáp án phụ “gần đúng” + feedback khuyên *hỏi* trước khi đi gần hơn. |
| **`dao-pho-g4-l2-s4`** | Distractor **“Hỏi người lớn trước rồi mới dừng”** — thứ tự ngược (nên **dừng ngay** theo hiệu lệnh) nhưng vẫn có “hỏi người lớn”; feedback đúng nhưng **đánh dấu “sai” gây nhiễu**. | Viết lại distractor thành hành vi rõ sai (vd. “Rẽ luôn vì biển cho phép”) — giữ một lựa chọn sai không lẫn với quy trình an toàn. |
| **`dao-pho-g4-l3-s2`** | Gần trùng **`dao-pho-g4-l3-s1`** (cùng mồi “tai nạn chỉ làm muộn”, safe/unsafe gần như một). | Gộp hoặc viết lại `s2` với tình huống hành vi (vd. bạn bỏ qua dây đai) thay vì lặp lại câu hỏi kiến thức. |

### Nice-to-have

| ID / phạm vi | Gợi ý |
|---|---|
| **`dao-pho-g4-l3-s1`, `s3–s5`** | Rút gọn safeText cho lớp 4: nêu **một** hành vi cụ thể (đội mũ, nắm tay, đợi đèn) thay vì khẩu hiệu “tuân thủ an toàn”. |
| **`dao-pho-g1-l5-s1`, `g4-l2-s1`–`s3`, `g5-l3-s3/s5`, …** (15 id) | `safeText` không có từ “người lớn/Mẹ Gấu/…”; prompt thường đã có người lớn — có thể thêm “cùng Mẹ Gấu” vào safeText cho đồng bộ với `teacherPrompt`. |
| **`dien-g4-l1-s2`, `khac-nga-l1-s5`, `khac-sac-l3-s3`** | Hành vi an toàn rõ; có thể thêm “báo bố/mẹ” khi prompt có người lớn gần — tăng nhất quán ranh giới “gọi người lớn”. |
| **`dien-g12.mjs`** (~45 prompt) | Thống nhất “Bé Gấu” thay “Bé” trong prompt (TTS/brand). |
| **`atgt-dao-pho.mjs`** | Một số prompt dùng “Em”, một số “Bé Gấu” — harmonize; file header đã disclaimer — cân nhắc một dòng nhắc trên hub module `dao-pho` (UI, không bắt buộc nội dung). |
| **`content/REVIEW_SAFETY.md`, `REVIEW_PEDAGOGY.md`** | Cập nhật số liệu 75/375, ghi nhận port `dao-pho` + rename Bé Gấu; đóng NOTE “chờ safety”. *(Parent — ngoài phạm vi QA file này.)* |

### Không cần sửa (đã kiểm)

- `nuoc-l4-s1` — nhờ bố chỉnh áo phao (người lớn trong prompt).
- `khac-sac-l3-s3` — dừng cắt khi người lớn rời: **đúng** (không tự dùng dao).
- `dien-g5-l4-s5` — safeText nói “không tự cắt điện” (phủ định DIY, không khuyến khích).
- Unsafe “Kể chi tiết tai nạn nặng” (`dien-g5-l5-s4`) — bị từ chối, không vào safe path.

---

## Rủi ro còn lại (không chặn prototype kèm người lớn)

- **125 tình huống ATGT** chưa được reviewer an toàn duyệt **từng dòng** như 250 tình huống gốc; lần QA này không phát hiện safe path dạy DIY nguy hiểm, nhưng **chất lượng distractor / POV** kém hơn module sinh hoạt.
- Tiêu đề bài ATGT giống chương trình trường học — phụ huynh/giáo viên cần nhắc đây là **bổ trợ**, không thay giờ ATGT chính thức.
- Chưa thử nghiệm đọc to với trẻ 6–8 tuổi (ngoài phạm vi).

---

## STATUS (cho parent)

```
STATUS: PARTIAL
SCOPE: QA sư phạm + an toàn nội dung approved (375 tình huống): ≥2 bài/module + edge; đối chiếu REVIEW_SAFETY/PEDAGOGY + rename Bé Gấu + merge dao-pho; ghi qa/QA_PEDAGOGY_SAFETY.md
DONE: Lấy mẫu 7 module; xác nhận 6 id sửa an toàn trong approved; quét Mít/máu/DIY; phát hiện 4 must-fix dao-pho + lệch tài liệu review cũ; không sửa content/AGENTS/PROJECT_STATE
FILES:
  - qa/QA_PEDAGOGY_SAFETY.md (mới)
DEVIATIONS: Không đọc thủ công 100% 375 prompt; dùng lấy mẫu có hệ + script heuristic distractor
BLOCKERS: Không (prototype kèm người lớn vẫn chạy được); có must-fix trước pilot trẻ không kèm hoặc trước coi là “đủ chuẩn nội dung”
ERRORS: Không
NEXT_FOR_PARENT: Sửa 4 id dao-pho must-fix (và drafts/build pipeline nếu regen ATGT); cập nhật REVIEW_* counts + dao-pho sign-off; tùy chọn đồng bộ “Bé Gấu” trong dien-g12
```

## Follow-up parent (2026-09-24)
- 4 must-fix dao-pho **đã sửa** trong `content/approved/atgt-dao-pho.mjs` + TTS clip liên quan đã regen.
- Ẩn P0 art FAIL đã **gen lại style kết quả** (X đỏ + người lớn xua): `dao-pho-g3-l1-s1`, `dao-pho-g5-l1-s1`, `dao-pho-g4-l2-s4`, `dao-pho-g5-l1-s4`, `khac-thuoc-l4-s5`.
- Toàn bộ 375 ảnh đang tiếp tục regen theo `art/briefs/all-gau-result.json`.
