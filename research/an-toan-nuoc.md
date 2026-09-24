# Module An toàn nước — kế hoạch chi tiết (nghiên cứu)

> Thử nghiệm phụ cùng họ Bé Mít Qua Phố. **Không** thay hướng active `traffic-count-analyzer`.  
> File này chỉ là kế hoạch nội dung; **chưa code**, **chưa** được Bộ GD&ĐT / Bộ Y tế / giáo viên / chuyên gia phê duyệt cho game, **chưa** thử với trẻ.  
> Tài liệu chính thức nêu dưới đây phê duyệt **tài liệu của họ**, không phê duyệt sản phẩm này.

---

## 1. Phạm vi & đối tượng

### Đối tượng
- Trẻ tiểu học khoảng **lớp 1–5 / 6–11 tuổi**.
- Luôn học / chơi **cùng người lớn** (phụ huynh, giáo viên, người chăm sóc).
- Không thu dữ liệu cá nhân; tiến độ (nếu sau này làm prototype) chỉ trong phiên.

### Môi trường nước phù hợp Việt Nam (đưa vào module)

| Môi trường | Vì sao phù hợp VN | Ghi chú sư phạm |
|---|---|---|
| **Nhà ở / nhà tắm** | Chum, vại, xô, bể chứa nước, giếng, bồn tắm, bể cá — nguy cơ gần nhà, đặc biệt trẻ nhỏ | Nhận biết + không tự mở nắp / không tắm một mình |
| **Ao, hồ, sông, suối gần nhà** | Phổ biến nông thôn; nhiều vụ xảy ra khi chơi sát bờ không người lớn | Không chơi sát bờ; chỉ xuống nước khi có người lớn |
| **Bể bơi** (công cộng / trường / gia đình) | Ngày càng phổ biến thành thị; có nội quy và cứu hộ | Làm theo nội quy; luôn có người lớn; không đẩy/đùa nguy hiểm |
| **Biển / vùng nước mở lớn** | Du lịch, vùng ven biển; sóng, dòng chảy, biển cảnh báo | Chỉ nơi được phép, có người lớn / cứu hộ, áo phao khi cần |
| **Giao thông đường thủy** (đò, thuyền, phà) | Đồng bằng sông, đảo, chợ nổi; áo phao | Mặc áo phao, ngồi yên, làm theo người lớn (đối chiếu Bé Mít lớp 4 bài ATGT đường thủy) |
| **Mưa lũ / ngập** | Mùa mưa bão VN; đường ngập, hố nước che khuất | Không chơi vùng ngập; ở cùng người lớn; không “khám phá” nước đục |

### Ngoài phạm vi module (cố ý)
- Dạy kỹ thuật bơi / nổi nước / lặn (thuộc lớp dạy bơi có giám sát, không thuộc game chọn đáp án).
- Dạy cứu đuối **trực tiếp** (nhảy xuống nước cứu).
- Mô phỏng đuối nước, hình ảnh thương tích, phạt sợ hãi.
- Thu thập PII, xếp hạng cá nhân, tuyên bố “đã được duyệt” hoặc “hướng dẫn an toàn chính thức”.

### Hình thức mục tiêu (bám mẫu Bé Mít)
- Module **An toàn nước** → **5 bài chủ đề** (MVP) → mỗi bài **5 tình huống** (3 lựa chọn, 1 an toàn) → phản hồi nhẹ, thử lại.
- Ma trận dưới đây: **5 bài lõi** + ghi chú **điều chỉnh theo lớp 1–5**. Không mở rộng đủ 25 bài (5×5) ở bước nghiên cứu này — để parent chọn MVP hẹp.

---

## 2. Nguồn đối chiếu

### Nguồn chính thức / bán chính thức VN (đã tìm được)

| # | Tài liệu | Cơ quan | URL / nơi tra | Ghi chú dùng cho game |
|---|---|---|---|---|
| 1 | Quyết định **1717/QĐ-TTg** (31/12/2024) — Chương trình tăng cường giáo dục kiến thức, kỹ năng phòng, chống đuối nước cho học sinh giai đoạn **2025–2035** | Thủ tướng Chính phủ | https://vanban.chinhphu.vn/?docid=212267&pageid=27160 | Khung chính sách quốc gia; **không** phê duyệt game |
| 2 | Quyết định **2993/QĐ-BGDĐT** (29/10/2025) — Chương trình và Tài liệu hướng dẫn **dạy bơi an toàn** cho học sinh | Bộ GD&ĐT | https://thuvienphapluat.vn/van-ban/Giao-duc/Quyet-dinh-2993-QD-BGDDT-2025-phe-duyet-Chuong-trinh-huong-dan-day-boi-an-toan-cho-hoc-sinh-681753.aspx · tin chính phủ: https://baochinhphu.vn/bo-gddt-phe-duyet-chuong-trinh-huong-dan-day-boi-an-toan-cho-hoc-sinh-102251101134413584.htm | Mục tiêu cấp tiểu học: kiến thức PC đuối nước, **cứu đuối gián tiếp**, kỹ năng an toàn môi trường nước; chương trình bơi là ngoại khóa. Game chỉ mượn **ý nhận biết / gọi người lớn**, không dạy bơi |
| 3 | Quyết định **306/QĐ-BYT** (29/01/2026) — Tài liệu *Hướng dẫn chuyên môn về Kỹ năng an toàn trong môi trường nước và dạy bơi an toàn phòng, chống đuối nước trẻ em* | Bộ Y tế (Cục Bà mẹ và Trẻ em) | https://thuvienphapluat.vn/van-ban/The-thao-Y-te/Quyet-dinh-306-QD-BYT-2026-Huong-dan-chuyen-mon-Ky-nang-an-toan-trong-moi-truong-nuoc-693719.aspx · bản tóm tắt/triển khai địa phương: https://luatvietnam.vn/linh-vuc-khac/quyet-dinh-306-qd-byt-2026-huong-dan-ky-nang-an-toan-trong-moi-truong-nuoc-va-day-boi-an-toan-425643-d1.html | **Nguồn nội dung lõi** cho ma trận bài: nhà, cộng đồng, biển, lũ, đường thủy; nguyên tắc “không nhảy xuống cứu trực tiếp” |
| 4 | Trang truyền thông PC đuối nước trẻ em (được Sở GD địa phương dẫn kèm QĐ 306) | Bộ Y tế / liên quan | http://phongchongduoinuoc.com.vn · Fanpage “Phòng, chống đuối nước cho trẻ em Việt Nam” | Kênh tuyên truyền; kiểm tra lại nội dung trước khi trích dẫn cụ thể vào script |
| 5 | WHO Việt Nam — thông cáo Ngày Thế giới PC đuối nước (25/07/2025) | WHO / Bộ Y tế | https://www.who.int/vietnam/vi/news/detail/25-07-2025-drowning-rates-not-reducing-fast-enough--says-the-moh--who-and-partners-on-world-drowning-prevention-day | Bối cảnh: đuối nước vẫn là nguyên nhân hàng đầu tử vong trẻ em VN (đặc biệt 5–14 tuổi). **Không** dùng số liệu để bịa hiệu quả game |

### Nguồn tham chiếu cấu trúc sản phẩm (không phải nguồn an toàn nước)
| Tài liệu | Vai trò |
|---|---|
| `ideas/be-mit-qua-pho/PLAN.md`, `CURRICULUM_MAP.md` | Mẫu UI/luồng: bìa → lớp/module → bài → 5 tình huống; ranh giới không hù dọa, gọi người lớn |
| Bé Mít lớp 4 bài 5 *An toàn giao thông đường thủy* | Đối chiếu chủ đề áo phao / ngồi yên trên phương tiện thủy (ATGT), không sao chép câu hỏi sách |

### Ghi chú thiếu / hạn chế nguồn
- **Chưa** tìm được một bộ sách GD ATGT-kiểu “5 bài/lớp × lớp 1–5” riêng cho **an toàn nước** đã được Bộ GD&ĐT đóng gói như bộ ATGT tiểu học; module này **đề xuất mới**, bám QĐ 306/BYT + mục tiêu tiểu học trong QĐ 2993/BGDĐT.
- PDF đầy đủ đính kèm QĐ 306 và bộ bài giảng 16 bài của QĐ 2993 nên được parent/giáo viên **đối chiếu lại bản chính** trước khi viết full script (một số bản trên web là mirror/tóm tắt).
- Chưa có tài liệu địa phương (tỉnh/huyện) được chọn cho pilot — cần bổ sung khi chốt vùng thử.
- UNICEF/WHO có báo cáo/can thiệp lịch sử về PC đuối nước trẻ em VN; dùng làm **bối cảnh**, không thay tài liệu chuyên môn BYT/BGDĐT khi viết đáp án.

---

## 3. Ma trận 5 bài đề xuất (MVP module nước)

**Cấu trúc chọn:** 5 bài theo **môi trường / hành vi**, mỗi bài 5 tình huống sau này; điều chỉnh độ khó theo lớp thay vì làm đủ 25 bài ngay.

| Bài | Tên bài đề xuất | Mục tiêu tương tác (game) | Ví dụ tình huống (1–2; chưa đủ 5) | Điều chỉnh theo lớp |
|---|---|---|---|---|
| **1** | Nước trong nhà của em | Nhận ra nguồn nước gần nhà (bồn tắm, chum/vại/xô, giếng, bể); không tắm/một mình mở nắp; gọi người lớn | (a) Bé muốn tự tắm trong bồn khi bố mẹ đang bận phòng bên → chọn chờ người lớn. (b) Thấy nắp chum nước mở, bạn rủ “nhìn xuống” → chọn gọi người lớn đậy lại, không cúi vào | L1–2: nhận biết + chờ người lớn. L3–5: thêm “báo người lớn khi thấy nắp hở / cửa nhà tắm không an toàn” |
| **2** | Ao, hồ, sông gần nhà | Không chơi sát bờ dễ sạt; không xuống nước khi không có người lớn; chọn chỗ chơi khô/rào chắn | (a) Bạn rủ ra bờ ao “câu cá chơi” không có người lớn → từ chối, ở lại chỗ an toàn / gọi người lớn. (b) Thấy biển cảnh báo “nguy hiểm – nước sâu” → không đi gần, báo người lớn | L1–2: “đi cùng người lớn / không lại gần”. L3–5: nhận biển cảnh báo, kênh/mương bẩn cũng không đùa |
| **3** | Ở bể bơi cùng người lớn | Chỉ xuống bể khi có người lớn (và cứu hộ nếu nơi công cộng); làm theo nội quy; không đẩy bạn xuống nước | (a) Bạn rủ chạy quanh thành bể ướt → chọn đi bộ, nhắc nhẹ / gọi người lớn. (b) Muốn xuống bể khi người lớn chưa tới chỗ giám sát → chờ | L1–3: chờ người lớn, nội quy đơn giản. L4–5: nhận vai trò cứu hộ trên bờ ≠ “tự bơi một mình cũng an toàn” |
| **4** | Biển, đò và áo phao | Chỉ tắm/đi đò nơi được phép, có người lớn; mặc áo phao phù hợp; ngồi yên trên thuyền | (a) Trên đò, bạn tháo áo phao vì “nóng” → giữ áo phao, nhờ người lớn chỉnh. (b) Biển có cờ/biển cấm, bạn rủ ra xa → ở lại khu được phép với người lớn | L1–2: mặc áo phao + ngồi cạnh người lớn. L3–5: thêm thời tiết xấu / sóng lớn → không xuống nước; đối chiếu ATGT đường thủy |
| **5** | Khi mưa lũ và khi cần gọi người lớn | Không chơi vùng ngập; không “cứu” bằng cách nhảy xuống; hô gọi / tìm người lớn | (a) Đường ngập sau mưa, bạn rủ lội chơi → ở nhà/chỗ cao với người lớn. (b) Thấy ai đó gặp nạn dưới nước → **hô to gọi người lớn**, ở trên bờ, **không nhảy xuống** | L1–3: chỉ “gọi người lớn + ở xa nước”. L4–5: có thể thêm ý “ở trên bờ, chỉ cho người lớn thấy vật nổi gần đó” — **không** để trẻ tự quăng dây/cứu một mình như kỹ năng đã thành thạo |

### Nguyên tắc viết 5 tình huống/bài (khi parent chốt viết script)
- Mỗi tình huống: bối cảnh quen thuộc VN + **người lớn trong khung cảnh** (có mặt hoặc gọi được ngay).
- 3 lựa chọn: 1 an toàn (nhận biết / tránh / gọi người lớn); 2 chưa an toàn nhưng **không** miêu tả thương tích.
- Phản hồi nhẹ, cho thử lại; không điểm cá nhân, không hình đuối nước.

### Giả thuyết kinh doanh (ngắn, chưa xác thực)
Có thể sau này gói module nước như luyện tập bổ trợ cho lớp dạy bơi an toàn / tuyên truyền PC đuối nước của trường — **chưa** có trường dùng, **chưa** willingness-to-pay, **không** đặt giá.

---

## 4. Ranh giới sư phạm

| Được | Không được |
|---|---|
| Nhận biết nguy cơ theo môi trường VN | Hù dọa, hình ảnh chết đuối, âm thanh sợ hãi |
| Chờ / đi cùng người lớn; làm theo nội quy | Khuyến khích trẻ xuống nước một mình “vì đã biết quy tắc” |
| Hô gọi, tìm người lớn khi thấy nguy hiểm | Dạy cứu đuối **trực tiếp** (nhảy xuống, bơi tới nạn nhân) |
| Lớp lớn: ý “ở trên bờ, báo người lớn” (cứu gián tiếp mức nhận biết) | Coi game là đủ để trẻ thực hành cứu hộ / sơ cứu |
| Áo phao, ngồi yên trên đò | Tự ý tháo áo phao, chạy nhảy trên thuyền như hành vi “dũng cảm” |
| Ngôn ngữ tích cực, thử lại được | Phạt, so sánh bạn bè, thu thập dữ liệu cá nhân |
| Nêu rõ prototype chưa được duyệt | Tuyên bố “theo Bộ Y tế/Bộ GD&ĐT đã phê duyệt game” |

**Cứu đuối gián tiếp:** Tài liệu BGDĐT/BYT có nội dung cứu gián tiếp (hô hoán, vật nổi, không nhảy xuống). Trong **game tiểu học**, ưu tiên hành vi: **gọi người lớn + không vào nước**. Không biến tình huống thành bài tập “em tự cứu bạn bằng sào” nếu chưa có giáo viên/chuyên gia duyệt cách diễn đạt và độ tuổi.

---

## 5. Cổng rà soát trước khi thử với trẻ

1. **Parent** chọn phạm vi MVP (đủ 5 bài nước hay cắt 2–3 bài đầu) và xác nhận không code trước khi user chốt sản phẩm.
2. **Giáo viên tiểu học** (hoặc người dạy kỹ năng sống / thể dục có kinh nghiệm) rà độ tuổi, từ ngữ, tình huống địa phương (nông thôn có ao vs thành phố có bể).
3. **Chuyên gia / cán bộ PC đuối nước hoặc y tế trường học** đối chiếu đáp án với QĐ 306/BYT và mục tiêu tiểu học QĐ 2993/BGDĐT — đặc biệt bài 5 (gọi người lớn / không cứu trực tiếp).
4. **Phụ huynh / người giám hộ** đồng ý; có người lớn giám sát khi trẻ thử; không ghi tên, ảnh, giọng, vị trí.
5. Sửa ngôn ngữ theo phản hồi; **không** tuyên bố hiệu quả học tập, giảm đuối nước, hay tích hợp chính thức khi chưa có đánh giá / văn bản tương ứng.
6. Nếu sau này làm prototype: giữ mô hình Bé Mít (không analytics, không quảng cáo, không PII).

---

## 6. NEXT đề xuất cho parent (MVP phạm vi nước)

1. **Chốt MVP hẹp:** ưu tiên **3 bài đầu** (nhà → ao/hồ → bể bơi) nếu chỉ làm một module thử; giữ bài 4–5 cho vòng 2 (biển/đò, mưa lũ + gọi người lớn).
2. Đọc cùng `research/an-toan-dien.md`, `an-toan-khac.md`, `khung-chuong-trinh.md` → chọn **1–2 module** đưa vào lộ trình thử nghiệm phụ.
3. Trước mọi code: lấy **1 giáo viên + 1 người có chuyên môn PC đuối nước** rà tên bài và 2 ví dụ tình huống/bài (cổng mục 5).
4. Khi viết full script: đối chiếu lại **bản PDF chính** kèm QĐ 306/BYT và phần yêu cầu cấp tiểu học trong tài liệu QĐ 2993/BGDĐT; ghi nguồn từng bài trong metadata kiểu Bé Mít.
5. **Không** cập nhật `AGENTS.md` / `PROJECT_STATE.md` từ file này — chỉ parent quyết định sau khi gom 4 báo cáo.
6. Giữ tuyên bố cố định trên sản phẩm (nếu có): bổ trợ luyện tập, luôn có người lớn, chưa được phê duyệt như hướng dẫn an toàn chính thức.

---

## Changelog nghiên cứu
- 2026-09-24 — Tạo file kế hoạch module An toàn nước: phạm vi VN, nguồn QĐ 1717/TTg · 2993/BGDĐT · 306/BYT, ma trận 5 bài, ranh giới sư phạm, cổng rà soát, NEXT MVP.
