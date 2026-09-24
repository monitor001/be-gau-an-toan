# Khung chương trình tổng — Game giáo dục sinh tồn / an toàn

> **Vai trò:** thử nghiệm phụ (cùng họ với Bé Mít Qua Phố). Không thay hướng active `traffic-count-analyzer`.  
> **Phạm vi file này:** khung tổng + đối chiếu mẫu; **không** viết ma trận đầy đủ tình huống nước/điện/khác (xem báo cáo sibling).  
> **Trạng thái nội dung:** chưa được giáo viên / chuyên gia / phụ huynh duyệt; **không** tuyên bố là hướng dẫn an toàn đã phê duyệt.

---

## 1. Tên làm việc và định vị

### Phương án tên (đề xuất)

| # | Tên làm việc | Ghi chú |
|---|---|---|
| A | **Bé Mít An Toàn** | Cùng “họ” nhân vật/seri; dễ nhận là mở rộng chủ đề ngoài đường. |
| B | **Bé Mít Ở Nhà** | Nhấn môi trường nhà ở / sinh hoạt (nước, điện, nhà bếp…); phân biệt rõ với “Qua Phố”. |

Parent chọn một tên trước khi prototype; có thể giữ thư mục kỹ thuật `Game giao duc sinh ton` cho đến khi chốt thương hiệu.

### Định vị so với Bé Mít Qua Phố

| Tiêu chí | Bé Mít Qua Phố | Seri này (đề xuất) |
|---|---|---|
| Chủ đề | ATGT (đường bộ / một phần thủy–hàng không theo sách) | An toàn sinh hoạt: nước, điện, + module khác (nhà ở) |
| Họ sản phẩm | Prototype độc lập | **Cùng họ seri** (cùng pattern UX/engine ý tưởng, cùng nguyên tắc an toàn–PII) |
| Repo / thư mục | `ideas/be-mit-qua-pho` | `ideas/Game giao duc sinh ton` — tách thư mục; sau này mới quyết ghép app hay giữ app riêng |
| Nguồn khung bài | Bám mục lục bộ sách ATGT tiểu học (đã dẫn trong dự án Bé Mít) | Ưu tiên khuyến cáo / tài liệu giáo dục VN chính thức theo từng module (sibling ghi nguồn); **không** giả nhận phê duyệt cho game |
| Đối tượng | Lớp 1–5, luôn cùng người lớn | Cùng: tiểu học ~6–11 tuổi, luôn cùng người lớn |
| La bàn | Thử nghiệm phụ | Thử nghiệm phụ — **không** thay active |

**Khuyến nghị định vị:** cùng họ seri “Bé Mít”, **tách biệt sản phẩm** ở giai đoạn nghiên cứu/MVP (một module thử trước), tránh trộn nội dung ATGT với nước/điện trong cùng cây điều hướng cho đến khi parent chốt “hub đa module”.

---

## 2. Kiến trúc UX (đề xuất)

### Luồng mục tiêu

```text
Trang bìa khóa học / seri
    → Module chủ đề (Nước | Điện | …)
        → Lớp (1–5)  HOẶC  nhóm bài theo độ tuổi
            → Thẻ bài học
                → 5 tình huống / bài (3 lựa chọn, 1 đáp án an toàn)
                    → Phản hồi nhẹ + thử lại
                    → Câu gợi mở cho người lớn (teacherPrompt)
```

### So sánh với Bé Mít Qua Phố

| Bậc điều hướng | Bé Mít Qua Phố (đã có) | Seri an toàn sinh hoạt (đề xuất) |
|---|---|---|
| 0 | Trang bìa khóa học ATGT | Trang bìa seri an toàn (nêu rõ: bổ trợ, chưa duyệt, chơi cùng người lớn) |
| 1 | **Thẻ lớp** (1→5) | **Thẻ module chủ đề** (nước / điện / …) — *bậc mới* |
| 2 | **Thẻ bài** (5 bài / lớp) | **Thẻ lớp hoặc nhóm bài** trong module, rồi **thẻ bài** |
| 3 | 5 tình huống / bài | Giữ nguyên độ sâu: 5 tình huống / bài |
| Ngoài lộ trình | Không menu chơi tự do / trò ngoài danh sách bài | Cùng nguyên tắc: không “sandbox” nguy hiểm; chỉ bài trong lộ trình đã biên |

**Khác biệt chính:** Bé Mít đi thẳng `lớp → bài` vì đã khóa một miền (ATGT). Seri mới cần `module → (lớp|nhóm) → bài` để ghép nhiều miền an toàn mà không làm phình một danh sách bài phẳng.

**Biến thể MVP (gợi ý):** lần đầu chỉ ship **một module** → có thể tạm ẩn bậc module và dùng luồng gần Bé Mít (`bìa → lớp → bài`) để giảm công UX; khi thêm module thứ hai thì bật bậc module.

### Nguyên tắc tương tác (kế thừa mẫu Bé Mít)

- Mỗi tình huống: nhận diện nguy cơ → chọn hành vi an toàn (ưu tiên **gọi / đi cùng người lớn**, không khuyến khích trẻ tự xử lý nguy hiểm).
- Chọn chưa an toàn: nhắc nhẹ, cho thử lại; không phạt nặng, không đồ họa thương tích/va chạm gây sợ.
- Người lớn đồng hành trong ngữ cảnh tình huống (`adultPresent`).
- Tiến độ (nếu có sau này): chỉ trong phiên; không tài khoản trẻ.

---

## 3. Quy ước dữ liệu bài học (schema ý tưởng — mô tả, không code)

Mục tiêu: một **hợp đồng nội dung** đủ để sau này tái dùng engine kiểu Bé Mít và ghép báo cáo sibling (nước/điện/khác) mà không viết script đầy đủ ở file này.

### Thực thể cấp cao

| Thực thể | Ý nghĩa |
|---|---|
| **Series** | Seri (tên làm việc, disclaimer trang bìa) |
| **Module** | Chủ đề: `nuoc` / `dien` / `khac-…` |
| **GradeBand** (tuỳ chọn) | Lớp 1–5 hoặc nhóm tuổi tương đương trong module |
| **Lesson** | Một bài học tương tác |
| **Situation** | Một tình huống trong bài (đúng **5** / bài ở MVP) |

### Trường bài học (Lesson) — bắt buộc theo DESIGN

| Trường | Mô tả |
|---|---|
| `id` | Mã ổn định, ví dụ `nuoc-g2-l1` (module + lớp + số bài); không đổi sau khi đã thử nghiệm |
| `title` | Tên bài ngắn, tiếng Việt, phù hợp tiểu học |
| `objective` | Mục tiêu tương tác **một câu**: trẻ nhận biết gì / chọn hành vi nào cùng người lớn |
| `situations[5]` | Đúng năm tình huống; mỗi cái có nguy cơ / câu hỏi / lựa chọn riêng |
| `choices` | *(ở cấp tình huống)* thường **3** lựa chọn: 1 `safe`, 2 chưa an toàn; mỗi lựa chọn có `text` + `feedback` nhẹ |
| `adultPresent` | Cờ / quy ước: ngữ cảnh luôn có người lớn; **mặc định true** cho mọi tình huống MVP |
| `teacherPrompt` | Câu gợi mở sau bài để giáo viên/phụ huynh nối với tình huống địa phương; không giao trẻ tự thử nguy hiểm ngoài đời |

### Trường tình huống (Situation) — khuyến nghị bổ sung (đối chiếu mẫu Bé Mít)

| Trường | Mô tả |
|---|---|
| `id` | Ví dụ `nuoc-g2-l1-s3` |
| `prompt` | Câu hỏi tình huống ngắn |
| `hazard` | Nhãn nguy cơ ngắn (dùng UI “NGUY CƠ: …”) |
| `adultPresent` | true |
| `choices[]` | Như trên; vị trí đáp án an toàn **không cố định** (tránh học thuộc vị trí) |

### Trường tuỳ chọn (sau MVP)

- `moduleId`, `grade`, `sourceRefs[]` (tên/URL tài liệu đối chiếu — không giả phê duyệt game)
- `kind` / `icon` / gợi ý minh họa (backdrop/đạo cụ) — chỉ khi làm prototype
- `reflectionPrompt` cấp lớp/module

**Không thuộc schema học liệu:** tên trẻ, trường, ảnh, giọng ghi âm người dùng, vị trí GPS, analytics danh tính.

---

## 4. Nguyên tắc an toàn và quyền riêng tư

1. **Không PII:** không thu tên, ảnh, giọng nói người chơi, vị trí, tài khoản, hồ sơ lớp; không quảng cáo / analytics định danh.
2. **Chưa duyệt:** mọi bản research/prototype đều ghi rõ chưa được chuyên gia–giáo viên–phụ huynh duyệt; không tuyên bố “hướng dẫn an toàn chính thức” hay hiệu quả đã chứng minh.
3. **Người lớn đồng hành:** thiết kế cho dùng cùng giáo viên/phụ huynh; không khuyến khích chơi một mình với chủ đề nguy hiểm.
4. **Hành vi mục tiêu:** nhận biết + tránh + **báo người lớn**; không dạy trẻ tự chữa cháy, tự sửa điện, tự cứu đuối, tự xử lý hóa chất.
5. **Ngôn ngữ & hình:** không hù dọa; không mô phỏng thương tích nặng; tình huống nhạy cảm dùng lời nhẹ, hướng tìm người lớn.
6. **Nguồn:** ưu tiên tài liệu / khuyến cáo chính thức VN khi tìm được; ghi rõ tên–URL; **không bịa** số liệu hay trạng thái phê duyệt.
7. **Ranh giới pháp lý nội dung:** game là học liệu bổ trợ độc lập; việc dẫn nguồn sách/khuyến cáo **không** chuyển thành phê duyệt cho game.

---

## 5. Lộ trình MVP đề xuất

### Chọn module thử trước

**Đề xuất mặc định cho parent xác nhận:** thử **một** trong hai — **An toàn nước** *hoặc* **An toàn điện** — tùy sibling nào có nguồn đối chiếu rõ và ma trận lớp dễ rà soát hơn sau khi đọc `an-toan-nuoc.md` / `an-toan-dien.md`.

Gợi ý quyết định nhanh (khi đã có báo cáo sibling):

- Chọn module có **nguồn chính thức dễ dẫn** + ít rủi ro bị hiểu nhầm là “dạy kỹ năng cứu hộ”.
- Tránh mở 2–3 module song song trước cổng review.

### Các mốc

| Mốc | Việc | Dừng / pivot nếu… |
|---|---|---|
| **M0 — Research** *(hiện tại)* | 4 báo cáo: nước / điện / khác / khung tổng | Parent không thấy đủ nguồn hoặc rủi ro sư phạm quá cao → **dừng** hoặc thu hẹp chủ đề |
| **M1 — Chốt MVP** | Parent chọn 1 module + độ sâu (vd. lớp 1–2 trước, hoặc 5 bài mẫu) | Không chốt tên/module trong thời hạn ngắn → giữ research, **không code** |
| **M2 — Outline bài** | Viết outline `id/title/objective` + 5 hazard/bài (chưa full script nếu chưa cần) | Outline không qua được review nhanh người lớn am hiểu → **pivot** chủ đề hoặc độ tuổi |
| **M3 — Prototype mỏng** *(chỉ sau khi user/parent chốt sản phẩm)* | Tái dùng pattern UX Bé Mít; 1 module, ít bài đủ smoke | Smoke/PII/an toàn copy thất bại → sửa nội dung trước khi mở rộng |
| **M4 — Review cổng** | Giáo viên tiểu học + người am hiểu chủ đề (PCCC/y tế/điện lực tùy module) rà trước khi thử trẻ | Không có người review → **không pilot với trẻ** |
| **M5 — Mở rộng** | Thêm lớp còn lại trong module → module 2 → cân nhắc hub đa module / cùng app Bé Mít | Không có tín hiệu dùng thật / willingness → giữ prototype phụ, **không** đẩy thành hướng active |

### Giả thuyết kinh doanh (ngắn — chưa xác thực)

Có thể sau này đóng gói luyện tập tùy chỉnh cho trường/trung tâm nếu giáo viên chủ động cần; **chưa** có người mua, chưa đo WTP, **không** đặt giá hay doanh thu giả trong giai đoạn này.

---

## 6. Rủi ro sư phạm / pháp lý nội dung

| Rủi ro | Mô tả | Hướng giảm |
|---|---|---|
| Hiểu nhầm “đã duyệt” | Người dùng tưởng game = chương trình chính thức | Disclaimer trang bìa + README; không dùng logo/cơ quan khi chưa có phép |
| Dạy hành vi nguy hiểm | Trẻ bắt chước “tự xử lý” điện/nước/lửa | Đáp án an toàn = tránh + gọi người lớn; cấm script kiểu cứu hộ đơn độc |
| Hù dọa / sang chấn | Hình hoặc lời về đuối nước, giật điện, cháy | Ngôn ngữ nhẹ; không đồ họa thương tích; review người lớn trước pilot |
| Sai kiến thức kỹ thuật | Đáp án lệch khuyến cáo hiện hành | Bám nguồn sibling; chuyên gia rà trước thử trẻ |
| Sao chép tài liệu có bản quyền | Lấy nguyên câu hỏi/hình từ sách/tài liệu | Biên soạn tình huống mới; chỉ đối chiếu chủ đề/mục tiêu |
| Trách nhiệm khi sự cố đời thực | Phụ huynh dựa vào game thay giám sát | Nêu rõ: không thay giám sát; luôn có người lớn |
| PII / COPPA-like kỳ vọng | Thu thập dữ liệu trẻ dù “chỉ demo” | Không tài khoản, không analytics định danh, tiến độ session-only |
| Phạm vi quá rộng | Nhiều module cùng lúc → nội dung nông, khó review | MVP 1 module; mốc dừng rõ ở §5 |

---

## 7. Câu hỏi cần parent / user chốt

1. **Tên:** chọn A (*Bé Mít An Toàn*), B (*Bé Mít Ở Nhà*), hay tên khác?
2. **Định vị app:** giữ **app/thư mục tách** lâu dài, hay hướng tới **hub chung** với Bé Mít Qua Phố sau MVP?
3. **Module MVP đầu tiên:** nước, điện, hay một chủ đề trong “khác” (sau khi đọc 3 báo cáo sibling)?
4. **Độ sâu lớp lần 1:** đủ lớp 1–5 trong một module, hay chỉ **lớp 1–2** (hoặc 5 bài mẫu) để review nhanh?
5. **Bậc UX MVP:** ẩn module (giống `bìa → lớp → bài`) hay hiện ngay `bìa → module → lớp → bài`?
6. **Ai review nội dung** trước khi thử trẻ (vai trò + thời điểm)? Có yêu cầu chuyên gia theo module (PCCC / y tế / điện lực…) không?
7. **Khi nào được code prototype?** (la bàn hiện: chưa code đến khi user/parent chốt sản phẩm)
8. **Có tái dùng nhân vật “Mít” và giọng/điệu Bé Mít** cho seri nhà ở không, hay tách nhận diện nhẹ?

---

## 8. Đối chiếu mẫu (tóm tắt vận hành Bé Mít — để ghép sau)

Chỉ để parent căn chỉnh kỳ vọng kỹ thuật/sư phạm; **không** copy code sang thư mục này.

- Điều hướng: trang bìa → 5 thẻ lớp → 5 thẻ bài/lớp → 5 tình huống/bài (125 tình huống ở bản ATGT đầy đủ).
- Mỗi tình huống: 3 lựa chọn, phản hồi nhẹ, thử lại; `objective` + `teacherPrompt` trên bài; `adultPresent` trên tình huống.
- Không thu PII; tiến độ trong phiên; prototype local; nội dung ATGT **chưa** được duyệt/thử với trẻ theo la bàn dự án.
- Seri mới giữ **cùng hợp đồng bài học** (§3), thêm tầng **module**, thay miền nội dung theo sibling.

---

## 9. BLOCKERS / phụ thuộc sibling

File này **không** chứa ma trận đầy đủ tình huống nước/điện/khác. Parent cần ghép sau khi có:

| File sibling | Cần lấy gì để chốt MVP |
|---|---|
| `research/an-toan-nuoc.md` | Nguồn chính thức, đề xuất bài/lớp, ranh giới “không dạy cứu đuối đơn độc” |
| `research/an-toan-dien.md` | Nguồn chính thức, đề xuất bài/lớp, ranh giới “không dạy tự sửa điện” |
| `research/an-toan-khac.md` | Ưu tiên chủ đề nhà ở còn lại (bếp/lửa/hóa chất…), tránh trùng nước–điện |

Nếu sibling thiếu nguồn URL/tên rõ hoặc chưa đề xuất độ sâu lớp → **chưa chọn module MVP** (mốc M1).

---

## Changelog

- 2026-09-24 — Subagent D: khung chương trình tổng + đối chiếu Bé Mít; không ma trận tình huống module; không code.
