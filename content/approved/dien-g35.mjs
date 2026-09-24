/**
 * Draft — An toàn điện lớp 3–5 (module dien)
 * Nguồn ý: research/an-toan-dien.md §3.3–3.5 (EVN / EVNNPC / mưa bão — paraphrase)
 * Chưa được EVN / Bộ GD&ĐT / giáo viên / chuyên gia duyệt.
 * Ranh giới: không tự sửa/cắt cầu dao/cứu nạn bằng tay; tránh xa + báo người lớn; không hù dọa.
 */

export const LESSONS = [
  // ─── Lớp 3 — trường học & không gian chung ───
  {
    id: 'dien-g3-l1',
    moduleId: 'dien',
    gradeBand: '3',
    title: 'Ổ và công tắc trong lớp',
    objective: 'Không nghịch ổ/công tắc bằng bút, thước; nhắc bạn dừng và báo cô/thầy.',
    teacherPrompt:
      'Nhắc lớp: ổ và công tắc trong phòng học không phải đồ chơi. Đáp án đúng luôn là dừng lại và báo người lớn.',
    situations: [
      {
        id: 'dien-g3-l1-s1',
        hazard: 'thước chọc ổ tường',
        prompt:
          'Giờ học, bạn ngồi cạnh lấy thước định chọc vào lỗ ổ cắm tường. Cô đang gần bảng. Em làm gì?',
        safeText: 'Nhắc bạn dừng lại ngay, không chọc ổ, rồi báo cô.',
        safeFeedback: 'Giỏi! Em nhắc bạn và nhờ cô — ổ điện không phải chỗ nghịch.',
        unsafeChoices: [
          {
            text: 'Cũng lấy bút chọc thử xem có gì.',
            feedback: 'Không chọc ổ bằng gì cả. Nhắc bạn dừng và báo cô nhé.',
          },
          {
            text: 'Cười và xem bạn làm đến đâu.',
            feedback: 'Đừng đứng nhìn. Nhắc bạn dừng và gọi cô giúp.',
          },
        ],
      },
      {
        id: 'dien-g3-l1-s2',
        hazard: 'bút chì gần lỗ ổ',
        prompt:
          'Giờ ra chơi trong lớp, bạn đưa bút chì vào gần lỗ ổ để “thử”. Thầy đang ở cửa lớp. Em chọn cách nào?',
        safeText: 'Nhắc bạn không chọc ổ, đứng xa ổ, gọi thầy vào ngay.',
        safeFeedback: 'Đúng rồi! Báo thầy và giữ khoảng cách với ổ.',
        unsafeChoices: [
          {
            text: 'Giữ ổ giúp bạn để bút khỏi lệch.',
            feedback: 'Không cầm gần ổ. Nhắc dừng và gọi thầy.',
          },
          {
            text: 'Đợi bạn xong rồi mới nói với thầy.',
            feedback: 'Cần dừng ngay và báo thầy, không đợi.',
          },
        ],
      },
      {
        id: 'dien-g3-l1-s3',
        hazard: 'bật tắt công tắc liên tục',
        prompt:
          'Bạn bật–tắt công tắc đèn lớp liên tục cho vui. Cô đang sửa bài ở bàn giáo viên. Em làm gì?',
        safeText: 'Nhắc bạn dừng nghịch công tắc, báo cô biết.',
        safeFeedback: 'Tốt! Công tắc chỉ dùng khi cô hướng dẫn, không nghịch chơi.',
        unsafeChoices: [
          {
            text: 'Cùng bật tắt cho vui hơn.',
            feedback: 'Không nghịch công tắc. Nhắc dừng và báo cô.',
          },
          {
            text: 'Tự kéo ghế chắn công tắc thay cô.',
            feedback: 'Không tự xử lý thiết bị. Hãy báo cô.',
          },
        ],
      },
      {
        id: 'dien-g3-l1-s4',
        hazard: 'kẹp tóc chọc ổ',
        prompt:
          'Bạn lấy kẹp tóc kim loại định chọc vào ổ dưới bàn. Em và vài bạn đang gần đó, cô ở hành lang. Em chọn gì?',
        safeText: 'Nhắc nhẹ bạn dừng, đứng xa ổ, chạy gọi cô vào lớp.',
        safeFeedback: 'Hay lắm! Kim loại gần ổ rất nguy hiểm — báo cô ngay.',
        unsafeChoices: [
          {
            text: 'Giật kẹp tóc khỏi tay bạn sát ổ.',
            feedback: 'Không giật sát ổ. Nhắc dừng từ xa và gọi cô.',
          },
          {
            text: 'Bảo bạn chọc nhẹ thôi cho “an toàn”.',
            feedback: 'Không chọc dù nhẹ. Dừng và báo cô.',
          },
        ],
      },
      {
        id: 'dien-g3-l1-s5',
        hazard: 'tháo nắp ổ bằng tay',
        prompt:
          'Ổ tường lớp hơi lỏng nắp. Bạn muốn tự tháo nắp “cho chắc”. Cô đang ở phòng bên. Em làm gì?',
        safeText: 'Nhắc bạn không tháo ổ, đứng xa, đi gọi cô.',
        safeFeedback: 'Đúng! Trẻ không tự tháo ổ — nhờ cô xử lý.',
        unsafeChoices: [
          {
            text: 'Giúp bạn vặn nắp cho nhanh.',
            feedback: 'Không tự sửa ổ. Gọi cô giúp.',
          },
          {
            text: 'Dùng thước đẩy nắp khít lại.',
            feedback: 'Không chạm hay đẩy ổ. Báo cô nhé.',
          },
        ],
      },
    ],
  },

  {
    id: 'dien-g3-l2',
    moduleId: 'dien',
    gradeBand: '3',
    title: 'Không tự ý bật–tắt thiết bị lớp',
    objective: 'Chỉ thao tác thiết bị lớp khi giáo viên hướng dẫn; không tự rút phích hay bật máy.',
    teacherPrompt:
      'Gợi ý thảo luận: máy chiếu, quạt, loa… chỉ dùng khi cô/thầy cho phép và hướng dẫn.',
    situations: [
      {
        id: 'dien-g3-l2-s1',
        hazard: 'tự rút phích máy chiếu',
        prompt:
          'Hết giờ chiếu bài, bạn định tự rút phích máy chiếu vì “xong rồi”. Cô đang thu bài tập. Em làm gì?',
        safeText: 'Nhắc bạn chờ cô; không tự rút phích, báo cô nếu cần tắt máy.',
        safeFeedback: 'Giỏi! Thiết bị lớp do cô hướng dẫn, không tự rút.',
        unsafeChoices: [
          {
            text: 'Rút giúp bạn cho nhanh về nhà.',
            feedback: 'Không tự rút phích. Chờ và báo cô.',
          },
          {
            text: 'Giật dây máy chiếu cho phích bật ra.',
            feedback: 'Không giật dây. Để cô xử lý thiết bị.',
          },
        ],
      },
      {
        id: 'dien-g3-l2-s2',
        hazard: 'tự bật quạt trần lớp',
        prompt:
          'Trưa nóng, bạn muốn tự bật quạt trần lớp dù cô chưa về. Em đang đứng gần công tắc. Em chọn gì?',
        safeText: 'Không tự bật; chờ cô về hoặc đi tìm cô/thầy trực.',
        safeFeedback: 'Đúng rồi! Chỉ bật thiết bị khi người lớn hướng dẫn.',
        unsafeChoices: [
          {
            text: 'Bật quạt giúp cả lớp trước.',
            feedback: 'Không tự bật. Tìm cô hoặc thầy trực.',
          },
          {
            text: 'Bảo bạn bật, mình canh cửa hộ.',
            feedback: 'Không nhờ bạn tự bật. Cùng chờ người lớn.',
          },
        ],
      },
      {
        id: 'dien-g3-l2-s3',
        hazard: 'tự tắt loa đang dùng',
        prompt:
          'Cô đang dùng loa phát nhạc. Bạn thấy to quá muốn tự vặn nút tắt. Em làm gì?',
        safeText: 'Nhắc bạn đừng tự vặn; nhẹ nhàng báo cô loa đang to.',
        safeFeedback: 'Tốt! Báo cô, không tự chỉnh thiết bị của lớp.',
        unsafeChoices: [
          {
            text: 'Tự vặn nhỏ hộ cô.',
            feedback: 'Không tự chỉnh. Nói với cô giúp.',
          },
          {
            text: 'Rút phích loa cho hết tiếng.',
            feedback: 'Không rút phích. Báo cô điều chỉnh.',
          },
        ],
      },
      {
        id: 'dien-g3-l2-s4',
        hazard: 'cắm thêm phích chưa được phép',
        prompt:
          'Bạn mang quạt mini từ nhà, muốn tự cắm vào ổ lớp. Thầy đang ở bàn giáo viên. Em chọn cách nào?',
        safeText: 'Nhắc bạn hỏi thầy trước; không tự cắm thêm thiết bị.',
        safeFeedback: 'Hay! Mọi thứ cắm điện ở lớp cần người lớn cho phép.',
        unsafeChoices: [
          {
            text: 'Giữ ổ giúp bạn cắm cho thẳng.',
            feedback: 'Không tự cắm. Hỏi thầy trước.',
          },
          {
            text: 'Cắm thử xem quạt có chạy không.',
            feedback: 'Không thử một mình. Nhờ thầy quyết định.',
          },
        ],
      },
      {
        id: 'dien-g3-l2-s5',
        hazard: 'di chuyển thiết bị đang cắm',
        prompt:
          'Máy tính lớp đang cắm điện. Bạn muốn tự kéo máy sang bàn khác cho “gọn”. Cô ở hành lang. Em làm gì?',
        safeText: 'Nhắc bạn không kéo máy đang cắm; đi gọi cô giúp.',
        safeFeedback: 'Đúng! Không tự di chuyển thiết bị đang cắm điện.',
        unsafeChoices: [
          {
            text: 'Rút phích rồi kéo máy giúp bạn.',
            feedback: 'Không tự rút hay kéo. Gọi cô.',
          },
          {
            text: 'Kéo cả dây và máy cùng lúc.',
            feedback: 'Nguy hiểm. Để cô hướng dẫn nếu cần dời máy.',
          },
        ],
      },
    ],
  },

  {
    id: 'dien-g3-l3',
    moduleId: 'dien',
    gradeBand: '3',
    title: 'Tủ điện và biển cảnh báo',
    objective: 'Nhận biển cảnh báo / tủ điện; tránh xa khi ra chơi; báo người lớn nếu thấy bất thường.',
    teacherPrompt:
      'Có thể cho học sinh chỉ vị trí tủ điện/biển cảnh báo trong trường (từ xa), nhấn mạnh không lại gần chơi.',
    situations: [
      {
        id: 'dien-g3-l3-s1',
        hazard: 'chạy đuổi gần tủ điện',
        prompt:
          'Giờ ra chơi, bạn rủ chạy đuổi sát tủ điện ở hành lang. Cô trực sân gần đó. Em làm gì?',
        safeText: 'Đổi hướng chơi xa tủ điện, nhắc bạn không lại gần, báo cô nếu cần.',
        safeFeedback: 'Giỏi! Tủ điện không phải chỗ chạy chơi.',
        unsafeChoices: [
          {
            text: 'Chạy tiếp sát tủ cho “khó bắt”.',
            feedback: 'Không chơi sát tủ điện. Đổi chỗ và tránh xa.',
          },
          {
            text: 'Tựa lưng vào tủ nghỉ một chút.',
            feedback: 'Không chạm tủ điện. Đứng xa và chơi chỗ khác.',
          },
        ],
      },
      {
        id: 'dien-g3-l3-s2',
        hazard: 'biển cảnh báo bị bỏ qua',
        prompt:
          'Gần cầu thang có biển cảnh báo điện. Bạn bảo “chỉ là biển, vào xem cho biết”. Em chọn gì?',
        safeText: 'Nhắc bạn biển cảnh báo nghĩa là tránh xa; đứng xa và báo cô nếu bạn vẫn lại gần.',
        safeFeedback: 'Đúng! Thấy biển cảnh báo thì không lại gần.',
        unsafeChoices: [
          {
            text: 'Cùng vào xem cho biết biển nói gì gần hơn.',
            feedback: 'Không lại gần khu vực có biển cảnh báo điện.',
          },
          {
            text: 'Gỡ biển xuống đọc cho rõ chữ.',
            feedback: 'Không đụng biển hay khu vực đó. Báo cô.',
          },
        ],
      },
      {
        id: 'dien-g3-l3-s3',
        hazard: 'cửa tủ điện hơi mở',
        prompt:
          'Em thấy cửa tủ điện hành lang hơi hé. Không có cô gần đó ngay. Em làm gì?',
        safeText: 'Không lại gần hay đẩy cửa; đi tìm cô/thầy bảo vệ báo ngay.',
        safeFeedback: 'Tốt! Báo người lớn, không tự đóng hay mở tủ điện.',
        unsafeChoices: [
          {
            text: 'Đẩy cửa tủ khép lại cho chắc.',
            feedback: 'Không tự động vào tủ điện. Đi báo người lớn.',
          },
          {
            text: 'Nhìn vào trong tủ xem có gì.',
            feedback: 'Không nhìn sát hay chạm tủ. Báo cô/thầy ngay.',
          },
        ],
      },
      {
        id: 'dien-g3-l3-s4',
        hazard: 'ném bóng gần tủ điện',
        prompt:
          'Các bạn đá bóng gần tường có tủ điện. Bóng bay sát tủ. Thầy thể dục ở sân bên. Em làm gì?',
        safeText: 'Nhắc bạn dừng đá gần tủ; đổi chỗ chơi xa hơn; báo thầy.',
        safeFeedback: 'Hay! Chơi xa tủ điện và nhờ thầy chọn chỗ an toàn.',
        unsafeChoices: [
          {
            text: 'Chạy lấy bóng sát tủ cho nhanh.',
            feedback: 'Không chạy sát tủ. Báo thầy lấy bóng giúp nếu cần.',
          },
          {
            text: 'Đứng sát tủ “canh bóng” khỏi đụng.',
            feedback: 'Không đứng sát tủ. Đổi chỗ chơi.',
          },
        ],
      },
      {
        id: 'dien-g3-l3-s5',
        hazard: 'trốn tìm sau tủ điện',
        prompt:
          'Chơi trốn tìm, bạn rủ trốn sau tủ điện ở góc sân trường. Cô trực sân đang gần cổng. Em chọn cách nào?',
        safeText: 'Từ chối, chọn chỗ trốn khác xa tủ điện, nhắc bạn tránh và báo cô nếu bạn vẫn lại gần.',
        safeFeedback: 'Đúng rồi! Không dùng tủ điện làm chỗ trốn — chọn chỗ khác và nhờ cô nếu cần.',
        unsafeChoices: [
          {
            text: 'Trốn sát tủ vì ít người để ý.',
            feedback: 'Không trốn gần tủ điện. Chọn chỗ khác.',
          },
          {
            text: 'Leo lên bệ tủ cho cao, khó tìm.',
            feedback: 'Không leo hay chạm tủ. Tránh xa hoàn toàn.',
          },
        ],
      },
    ],
  },

  {
    id: 'dien-g3-l4',
    moduleId: 'dien',
    gradeBand: '3',
    title: 'Phòng máy / góc sạc',
    objective: 'Không đùa giỡn dây; không chen chúc gần ổ nhiều thiết bị; đi vòng và báo cô khi dây rối.',
    teacherPrompt:
      'Khi học tin học hoặc góc sạc: nhắc đi lại chậm, không giật dây, báo cô nếu dây rối dưới chân.',
    situations: [
      {
        id: 'dien-g3-l4-s1',
        hazard: 'dây sạc rối dưới chân',
        prompt:
          'Trong phòng máy, dây sạc rối dưới chân ghế. Em cần đi ngang chỗ đó, cô đang hướng dẫn nhóm khác. Em làm gì?',
        safeText: 'Đi vòng tránh dây, không đá hay giật dây, báo cô có dây rối.',
        safeFeedback: 'Giỏi! Đi vòng và nhờ cô dọn dây.',
        unsafeChoices: [
          {
            text: 'Đá dây sang một bên cho thông lối.',
            feedback: 'Không đá dây điện. Đi vòng và báo cô.',
          },
          {
            text: 'Nhấc cả bó dây lên xếp lại một mình.',
            feedback: 'Không tự xếp dây đang cắm. Báo cô giúp.',
          },
        ],
      },
      {
        id: 'dien-g3-l4-s2',
        hazard: 'chen chúc gần ổ nhiều thiết bị',
        prompt:
          'Góc sạc lớp đông bạn, mọi người chen sát ổ nhiều máy. Em muốn sạc máy tính bảng. Em chọn gì?',
        safeText: 'Không chen sát ổ; xếp hàng hoặc nhờ cô sắp chỗ sạc an toàn.',
        safeFeedback: 'Tốt! Không chen chúc gần ổ nhiều thiết bị.',
        unsafeChoices: [
          {
            text: 'Len vào sát ổ để cắm trước.',
            feedback: 'Không chen sát ổ. Chờ cô sắp xếp.',
          },
          {
            text: 'Rút phích bạn khác để mình cắm.',
            feedback: 'Không tự rút phích người khác. Nhờ cô.',
          },
        ],
      },
      {
        id: 'dien-g3-l4-s3',
        hazard: 'đùa kéo dây chuột máy tính',
        prompt:
          'Bạn kéo dây chuột máy tính cho vui khi đang học. Cô đứng cuối phòng. Em làm gì?',
        safeText: 'Nhắc bạn dừng kéo dây, không đùa với dây điện/dây thiết bị, báo cô.',
        safeFeedback: 'Đúng! Không đùa giỡn dây trong phòng máy.',
        unsafeChoices: [
          {
            text: 'Kéo dây bàn phím đáp lại cho vui.',
            feedback: 'Không kéo dây chơi. Nhắc dừng và báo cô.',
          },
          {
            text: 'Giật mạnh dây chuột khỏi máy giúp “xong chuyện”.',
            feedback: 'Không giật dây. Báo cô xử lý nếu cần.',
          },
        ],
      },
      {
        id: 'dien-g3-l4-s4',
        hazard: 'nước uống gần ổ sạc',
        prompt:
          'Bạn đặt bình nước sát ổ sạc máy chiếu. Em thấy vậy, cô đang viết bảng. Em chọn cách nào?',
        safeText: 'Nhắc bạn dời bình nước xa ổ; nếu khó, báo cô ngay.',
        safeFeedback: 'Hay! Nước và ổ điện cần cách xa — báo cô nếu cần.',
        unsafeChoices: [
          {
            text: 'Tự nhấc ổ ra xa bình nước.',
            feedback: 'Không tự động vào ổ. Nhắc bạn dời nước hoặc báo cô.',
          },
          {
            text: 'Đổ bớt nước cho bình nhẹ rồi để nguyên.',
            feedback: 'Vẫn cần đưa nước xa ổ. Báo cô giúp.',
          },
        ],
      },
      {
        id: 'dien-g3-l4-s5',
        hazard: 'ngồi lên dây nối dài',
        prompt:
          'Dây nối dài nằm trên sàn phòng máy. Bạn định ngồi lên dây cho “êm”. Em làm gì?',
        safeText: 'Nhắc bạn không ngồi lên dây; đứng dậy tránh dây; báo cô dọn dây.',
        safeFeedback: 'Đúng rồi! Không ngồi, giẫm hay kéo chơi dây điện.',
        unsafeChoices: [
          {
            text: 'Cũng ngồi lên dây cho có chỗ.',
            feedback: 'Không ngồi lên dây. Tránh và báo cô.',
          },
          {
            text: 'Cuộn dây lại rồi ngồi lên đống dây.',
            feedback: 'Không tự cuộn dây đang dùng. Nhờ cô.',
          },
        ],
      },
    ],
  },

  {
    id: 'dien-g3-l5',
    moduleId: 'dien',
    gradeBand: '3',
    title: 'Phát hiện bất thường ở trường',
    objective: 'Nghe tiếng lạ / thấy tia lửa / mùi khét từ thiết bị → tránh xa, báo người lớn ngay.',
    teacherPrompt:
      'Nhấn: không lại gần để “xem”, không tự tắt thiết bị khi thấy bất thường — tránh xa và gọi người lớn.',
    situations: [
      {
        id: 'dien-g3-l5-s1',
        hazard: 'tiếng lép bép gần ổ',
        prompt:
          'Em nghe tiếng “lép bép” lạ gần ổ cắm lớp. Cô đang ở bàn giáo viên. Em làm gì?',
        safeText: 'Không lại gần ổ; đứng xa; gọi cô ngay.',
        safeFeedback: 'Giỏi! Thấy/nghe lạ thì tránh xa và báo cô.',
        unsafeChoices: [
          {
            text: 'Lại gần xem ổ có nháy không.',
            feedback: 'Không lại gần. Gọi cô từ chỗ an toàn.',
          },
          {
            text: 'Tự rút phích để hết tiếng.',
            feedback: 'Không tự rút. Tránh xa và báo cô.',
          },
        ],
      },
      {
        id: 'dien-g3-l5-s2',
        hazard: 'mùi khét từ góc thiết bị',
        prompt:
          'Trong lớp, em ngửi thấy mùi khét nhẹ từ góc có nhiều dây cắm. Thầy đang ngoài cửa. Em chọn gì?',
        safeText: 'Đứng xa góc đó, không chạm dây; gọi thầy vào ngay.',
        safeFeedback: 'Đúng! Mùi lạ từ thiết bị → tránh và báo người lớn.',
        unsafeChoices: [
          {
            text: 'Sờ dây xem có nóng không.',
            feedback: 'Không chạm. Gọi thầy ngay.',
          },
          {
            text: 'Mở cửa sổ rồi tự tắt hết công tắc.',
            feedback: 'Không tự tắt hệ thống. Báo thầy xử lý.',
          },
        ],
      },
      {
        id: 'dien-g3-l5-s3',
        hazard: 'tia lửa nhỏ ở phích cắm',
        prompt:
          'Em thấy phích quạt lớp có tia lửa nhỏ khi rung. Cô đang phát vở. Em làm gì?',
        safeText: 'Không lại gần quạt; báo cô ngay từ chỗ xa.',
        safeFeedback: 'Tốt! Không xem sát — báo cô liền.',
        unsafeChoices: [
          {
            text: 'Hét to “cháy rồi” và chạy lung tung.',
            feedback: 'Bình tĩnh: đứng xa và gọi cô, không hù bạn.',
          },
          {
            text: 'Tự rút phích quạt cho tắt.',
            feedback: 'Không tự rút. Báo cô từ chỗ an toàn.',
          },
        ],
      },
      {
        id: 'dien-g3-l5-s4',
        hazard: 'đèn lớp nhấp nháy bất thường',
        prompt:
          'Đèn lớp nhấp nháy liên tục khác ngày thường. Bạn định trèo ghế xem bóng đèn. Em chọn cách nào?',
        safeText: 'Nhắc bạn không trèo; báo cô về đèn nhấp nháy.',
        safeFeedback: 'Hay! Không tự kiểm tra đèn — nhờ cô.',
        unsafeChoices: [
          {
            text: 'Trèo ghế thay bóng giúp cô.',
            feedback: 'Không trèo sửa đèn. Báo cô.',
          },
          {
            text: 'Tự tắt aptomat trong tủ để hết nháy.',
            feedback: 'Không mở tủ hay cắt điện. Báo người lớn.',
          },
        ],
      },
      {
        id: 'dien-g3-l5-s5',
        hazard: 'ổ tường nóng bất thường',
        prompt:
          'Bạn bảo ổ tường “nóng lạ” và muốn sờ thử. Em đứng gần, cô ở phòng bên. Em làm gì?',
        safeText: 'Nhắc bạn không sờ; cả hai đứng xa; đi gọi cô.',
        safeFeedback: 'Đúng rồi! Không chạm ổ lạ — báo cô.',
        unsafeChoices: [
          {
            text: 'Sờ nhẹ xem có nóng thật không.',
            feedback: 'Không sờ. Đứng xa và gọi cô.',
          },
          {
            text: 'Dội ít nước cho ổ nguội.',
            feedback: 'Không đổ nước vào ổ. Báo cô ngay.',
          },
        ],
      },
    ],
  },

  // ─── Lớp 4 — ngoài trời, mưa bão, khoảng cách ───
  {
    id: 'dien-g4-l1',
    moduleId: 'dien',
    gradeBand: '4',
    title: 'Ngoài sân: cột điện, dây treo',
    objective: 'Không nô đùa sát cột/dây; không ném vật lên dây; tìm người lớn khi có vật vướng.',
    teacherPrompt:
      'Ôn ngoài sân: cột điện và dây treo không phải chỗ chơi. Có bóng/bay vướng → báo người lớn, không với.',
    situations: [
      {
        id: 'dien-g4-l1-s1',
        hazard: 'bóng bay vướng gần dây',
        prompt:
          'Bóng bay của em vướng gần dây điện trên hè. Người lớn đang ở nhà bên cạnh. Em làm gì?',
        safeText: 'Không với tay hay ném gì lên dây; đứng xa; gọi người lớn giúp.',
        safeFeedback: 'Giỏi! Không tự lấy đồ gần dây — nhờ người lớn.',
        unsafeChoices: [
          {
            text: 'Dùng cây dài khều bóng xuống.',
            feedback: 'Không khều gần dây điện. Gọi người lớn.',
          },
          {
            text: 'Ném đá làm bóng rơi.',
            feedback: 'Không ném vật lên gần dây. Báo người lớn.',
          },
        ],
      },
      {
        id: 'dien-g4-l1-s2',
        hazard: 'chạy vòng quanh cột điện',
        prompt:
          'Các bạn rủ chạy vòng quanh cột điện ở sân chơi khu phố. Em đang chơi cùng bố/mẹ gần đó. Em chọn gì?',
        safeText: 'Từ chối chạy sát cột; chọn chỗ chơi khác; nhắc bạn tránh cột.',
        safeFeedback: 'Đúng! Không nô đùa sát cột điện.',
        unsafeChoices: [
          {
            text: 'Chạy sát cột vì chỗ đó trống.',
            feedback: 'Không chơi sát cột. Đổi chỗ an toàn hơn.',
          },
          {
            text: 'Bám cột làm “cứu” khi đuổi bắt.',
            feedback: 'Không bám cột điện. Chơi xa cột.',
          },
        ],
      },
      {
        id: 'dien-g4-l1-s3',
        hazard: 'ném bóng lên gần dây treo',
        prompt:
          'Bạn muốn ném bóng cao thử xem có chạm dây treo không. Em và người lớn đứng gần sân. Em làm gì?',
        safeText: 'Nhắc bạn không ném lên gần dây; đổi trò chơi; báo người lớn nếu bạn vẫn ném.',
        safeFeedback: 'Tốt! Không ném đồ lên gần đường dây.',
        unsafeChoices: [
          {
            text: 'Cùng ném xem ai chạm dây trước.',
            feedback: 'Không ném gần dây. Dừng và báo người lớn.',
          },
          {
            text: 'Đứng dưới dây đỡ bóng cho bạn.',
            feedback: 'Không đứng dưới dây. Tránh xa và nhắc bạn dừng.',
          },
        ],
      },
      {
        id: 'dien-g4-l1-s4',
        hazard: 'diều giấy mắc gần cột',
        prompt:
          'Diều giấy nhỏ mắc gần cột điện thấp. Bạn bảo trèo lấy. Có chú bảo vệ gần cổng. Em chọn cách nào?',
        safeText: 'Không trèo; đứng xa; nhờ chú bảo vệ hoặc người lớn xử lý.',
        safeFeedback: 'Hay! Không tự lấy đồ gần cột/dây.',
        unsafeChoices: [
          {
            text: 'Trèo cột lấy diều cho nhanh.',
            feedback: 'Không trèo cột điện. Báo người lớn.',
          },
          {
            text: 'Tung dây khác lên kéo diều xuống.',
            feedback: 'Không thêm dây gần lưới. Nhờ người lớn.',
          },
        ],
      },
      {
        id: 'dien-g4-l1-s5',
        hazard: 'dây treo võng vào cột điện',
        prompt:
          'Bạn muốn buộc võng vào cột điện để nằm chơi. Người lớn đang ngồi gần đó. Em làm gì?',
        safeText: 'Nhắc bạn không buộc gì vào cột điện; nhờ người lớn chọn chỗ treo khác.',
        safeFeedback: 'Đúng rồi! Cột điện không phải chỗ buộc đồ chơi.',
        unsafeChoices: [
          {
            text: 'Giúp buộc dây võng cho chắc.',
            feedback: 'Không buộc đồ vào cột điện. Nhờ người lớn chọn chỗ khác.',
          },
          {
            text: 'Trèo cao buộc cho võng êm hơn.',
            feedback: 'Không trèo cột. Tránh xa và báo người lớn.',
          },
        ],
      },
    ],
  },

  {
    id: 'dien-g4-l2',
    moduleId: 'dien',
    gradeBand: '4',
    title: 'Mưa to / gió lớn — tránh khu vực điện',
    objective: 'Khi bão/ngập: tránh đường dây, cột đèn, trạm điện; đi cùng người lớn theo hướng khác.',
    teacherPrompt:
      'Nhắc: mưa bão không đứng gần cột/dây/trạm; luôn đi cùng người lớn, chọn đường tránh khu vực điện.',
    situations: [
      {
        id: 'dien-g4-l2-s1',
        hazard: 'ngập gần cột đèn',
        prompt:
          'Đường ngập, em thấy cột đèn nằm gần vũng nước. Người lớn đang dẫn em về nhà. Em làm gì?',
        safeText: 'Đi cùng người lớn theo hướng khác, tránh cột đèn và vũng nước gần đó.',
        safeFeedback: 'Giỏi! Tránh xa cột/đèn khi đường ngập.',
        unsafeChoices: [
          {
            text: 'Lội sát cột cho đường ngắn hơn.',
            feedback: 'Không lại gần cột khi ngập. Đi hướng khác với người lớn.',
          },
          {
            text: 'Chạm cột xem có điện không.',
            feedback: 'Không chạm. Tránh xa và đi cùng người lớn.',
          },
        ],
      },
      {
        id: 'dien-g4-l2-s2',
        hazard: 'gió lớn gần đường dây',
        prompt:
          'Gió lớn, dây điện phía trên đường đu đưa. Em và Mẹ Gấu đang trên đường về. Em chọn gì?',
        safeText: 'Không đứng dưới dây; nắm tay Mẹ Gấu, nhờ Mẹ Gấu chọn đường tránh xa dây.',
        safeFeedback: 'Đúng! Gió lớn thì tránh khu vực dưới đường dây.',
        unsafeChoices: [
          {
            text: 'Đứng xem dây đu đưa cho vui.',
            feedback: 'Không đứng xem dưới dây. Đi tránh cùng người lớn.',
          },
          {
            text: 'Chạy một mình cắt ngang dưới dây cho mau.',
            feedback: 'Không chạy một mình dưới dây. Đi cùng Mẹ Gấu hướng khác.',
          },
        ],
      },
      {
        id: 'dien-g4-l2-s3',
        hazard: 'mưa to gần trạm điện',
        prompt:
          'Mưa to, lối tắt về nhà đi sát hàng rào trạm điện. Bố đang cầm ô. Em làm gì?',
        safeText: 'Nhờ bố đi đường khác, không đứng sát hàng rào trạm khi mưa.',
        safeFeedback: 'Tốt! Mưa bão tránh xa trạm điện.',
        unsafeChoices: [
          {
            text: 'Chui sát rào cho đỡ ướt.',
            feedback: 'Không lại gần trạm. Đi đường khác với bố.',
          },
          {
            text: 'Tựa ô vào hàng rào trạm nghỉ mưa.',
            feedback: 'Không đứng sát trạm. Tránh xa cùng người lớn.',
          },
        ],
      },
      {
        id: 'dien-g4-l2-s4',
        hazard: 'bạn rủ đứng dưới mái gần dây',
        prompt:
          'Mưa đột ngột, bạn rủ đứng trú dưới mái hiên có dây điện thấp phía trước. Người lớn ở cách vài bước. Em chọn cách nào?',
        safeText: 'Không trú sát dây; gọi người lớn chọn chỗ trú xa dây điện.',
        safeFeedback: 'Hay! Chỗ trú cũng cần tránh dây điện.',
        unsafeChoices: [
          {
            text: 'Đứng sát dây cho khô nhanh.',
            feedback: 'Không đứng sát dây. Nhờ người lớn chọn chỗ khác.',
          },
          {
            text: 'Giữ dây đẩy sang để có chỗ đứng.',
            feedback: 'Không đẩy hay chạm dây. Tránh xa.',
          },
        ],
      },
      {
        id: 'dien-g4-l2-s5',
        hazard: 'xe điện ngập nước trên đường',
        prompt:
          'Sau mưa, em thấy xe máy đổ gần vũng nước có dây điện thấp phía trên. Có chú hàng xóm gần đó. Em làm gì?',
        safeText: 'Không lại gần hiện trường; đứng thật xa; báo chú hàng xóm hoặc người lớn.',
        safeFeedback: 'Đúng rồi! Ngập + dây → tránh xa và báo người lớn.',
        unsafeChoices: [
          {
            text: 'Lại đỡ xe giúp chú.',
            feedback: 'Không lại gần. Báo người lớn xử lý.',
          },
          {
            text: 'Lội vào vũng kéo dây sang một bên.',
            feedback: 'Không chạm dây. Đứng xa và báo người lớn.',
          },
        ],
      },
    ],
  },

  {
    id: 'dien-g4-l3',
    moduleId: 'dien',
    gradeBand: '4',
    title: 'Dây điện đứt / rơi xuống đất',
    objective: 'Thấy dây đứt/rơi: đứng thật xa, không nhặt, ngăn bạn lại gần, báo người lớn.',
    teacherPrompt:
      'Với trẻ: “đứng thật xa” + báo người lớn. Không dạy tự cắt điện hay đo khoảng cách bằng bước chân như kỹ thuật.',
    situations: [
      {
        id: 'dien-g4-l3-s1',
        hazard: 'dây nằm trên hè sau mưa',
        prompt:
          'Sau mưa, em thấy sợi dây nằm trên hè trông giống dây điện. Người lớn cách vài nhà. Em làm gì?',
        safeText: 'Đứng thật xa, không nhặt; gọi người lớn đến báo.',
        safeFeedback: 'Giỏi! Dây lạ trên đất → tránh xa và báo người lớn.',
        unsafeChoices: [
          {
            text: 'Nhặt dây gọn vào lề cho sạch đường.',
            feedback: 'Không nhặt. Đứng xa và gọi người lớn.',
          },
          {
            text: 'Đá dây sang rãnh cho khuất.',
            feedback: 'Không đá hay chạm dây. Báo người lớn.',
          },
        ],
      },
      {
        id: 'dien-g4-l3-s2',
        hazard: 'bạn định lại gần dây đứt',
        prompt:
          'Em và bạn thấy dây đứt rơi gần gốc cây. Bạn muốn lại xem. Có cô bảo vệ trường gần cổng. Em chọn gì?',
        safeText: 'Nhắc bạn dừng, cùng đứng thật xa, gọi cô bảo vệ.',
        safeFeedback: 'Đúng! Ngăn bạn lại gần bằng lời và báo người lớn.',
        unsafeChoices: [
          {
            text: 'Nắm tay kéo bạn ra sát dây cho “an toàn hơn”.',
            feedback: 'Không lại gần dây. Nhắc bằng lời từ xa và gọi người lớn.',
          },
          {
            text: 'Cùng lại gần chụp ảnh rồi mới báo.',
            feedback: 'Không lại gần. Báo người lớn trước, đứng xa.',
          },
        ],
      },
      {
        id: 'dien-g4-l3-s3',
        hazard: 'dây đứt có tia lửa',
        prompt:
          'Trên đường, em thấy dây đứt và có tia lửa nhỏ. Bố đang đi phía sau em. Em làm gì?',
        safeText: 'Lùi thật xa, không chạy về phía dây; gọi bố nhờ báo hỗ trợ.',
        safeFeedback: 'Tốt! Tránh xa hiện trường và nhờ người lớn gọi giúp.',
        unsafeChoices: [
          {
            text: 'Lấy cành cây gạt dây sang.',
            feedback: 'Không gạt dây. Đứng xa và báo bố.',
          },
          {
            text: 'Chạy đến tủ điện gần đó cắt cầu dao.',
            feedback: 'Không tự cắt điện. Tránh xa và nhờ người lớn.',
          },
        ],
      },
      {
        id: 'dien-g4-l3-s4',
        hazard: 'thú cưng chạy về phía dây',
        prompt:
          'Dây điện đứt nằm ngoài sân. Chó nhà chạy về phía đó. Mẹ Gấu đang trong nhà. Em chọn cách nào?',
        safeText: 'Không đuổi theo sát dây; gọi Mẹ Gấu ngay để mẹ giữ chó và xử lý.',
        safeFeedback: 'Hay! Không đuổi theo vào gần dây — gọi người lớn.',
        unsafeChoices: [
          {
            text: 'Chạy theo kéo cổ chó sát dây.',
            feedback: 'Không lại gần dây. Gọi mẹ giúp.',
          },
          {
            text: 'Ném dép đuổi chó gần chỗ dây.',
            feedback: 'Không lại gần hiện trường. Báo mẹ ngay.',
          },
        ],
      },
      {
        id: 'dien-g4-l3-s5',
        hazard: 'dây đứt chắn lối đi bộ',
        prompt:
          'Dây đứt chắn ngang lối đi bộ quen. Em cần về nhà, chú hàng xóm đứng ở cửa. Em làm gì?',
        safeText: 'Không bước qua dây; đứng xa; nhờ chú hàng xóm và tìm đường khác cùng người lớn.',
        safeFeedback: 'Đúng rồi! Không vượt qua dây đứt — báo người lớn.',
        unsafeChoices: [
          {
            text: 'Nhảy qua dây cho về nhà nhanh.',
            feedback: 'Không nhảy qua dây. Đứng xa và nhờ người lớn.',
          },
          {
            text: 'Dùng dép kéo dây sang một bên rồi đi.',
            feedback: 'Không kéo dây. Báo người lớn, đi đường khác.',
          },
        ],
      },
    ],
  },

  {
    id: 'dien-g4-l4',
    moduleId: 'dien',
    gradeBand: '4',
    title: 'Cây đổ / cành chạm dây',
    objective: 'Không lại gần hiện trường cây chạm dây; không “giúp kéo cây”; báo người lớn.',
    teacherPrompt:
      'Sau bão: cây/cành chạm dây là hiện trường nguy hiểm — trẻ chỉ tránh xa và báo cáo.',
    situations: [
      {
        id: 'dien-g4-l4-s1',
        hazard: 'cành đè lên dây ven đường',
        prompt:
          'Sau gió lớn, em thấy cành cây đè lên dây điện ven đường. Người lớn đang tới gần. Em làm gì?',
        safeText: 'Đứng xa hiện trường; không lại kéo cành; báo người lớn.',
        safeFeedback: 'Giỏi! Không “giúp kéo cây” khi cây chạm dây.',
        unsafeChoices: [
          {
            text: 'Kéo cành ra cho dây thẳng lại.',
            feedback: 'Không kéo cây/dây. Tránh xa và báo người lớn.',
          },
          {
            text: 'Trèo lên cành xem dây có đứt không.',
            feedback: 'Không lại gần. Báo người lớn từ chỗ xa.',
          },
        ],
      },
      {
        id: 'dien-g4-l4-s2',
        hazard: 'bạn rủ kéo cây đổ',
        prompt:
          'Cây nhỏ đổ gần cột điện. Bạn rủ cùng kéo cây “cho thông đường”. Có cô chú đi đường. Em chọn gì?',
        safeText: 'Từ chối kéo; nhắc bạn tránh xa; nhờ người lớn đi đường báo giúp.',
        safeFeedback: 'Đúng! Không tự xử lý cây gần điện.',
        unsafeChoices: [
          {
            text: 'Cùng kéo thật nhanh rồi chạy.',
            feedback: 'Không kéo. Đứng xa và báo người lớn.',
          },
          {
            text: 'Dùng dao cắt cành gần dây.',
            feedback: 'Không cắt gần dây điện. Báo người lớn.',
          },
        ],
      },
      {
        id: 'dien-g4-l4-s3',
        hazard: 'lá ướt chạm dây thấp',
        prompt:
          'Cành lá ướt đung đưa chạm dây thấp trong hẻm. Em đi cùng Mẹ Gấu. Em làm gì?',
        safeText: 'Không với tay vào cành; đi vòng xa cùng Mẹ Gấu; báo Mẹ Gấu nhờ hỗ trợ nếu cần.',
        safeFeedback: 'Tốt! Đi vòng tránh, không chạm cành gần dây.',
        unsafeChoices: [
          {
            text: 'Bẻ cành ướt cho khỏi chạm dây.',
            feedback: 'Không bẻ cành gần dây. Đi tránh cùng Mẹ Gấu.',
          },
          {
            text: 'Đứng dưới cành xem lá có chạm thật.',
            feedback: 'Không đứng sát. Tránh xa với người lớn.',
          },
        ],
      },
      {
        id: 'dien-g4-l4-s4',
        hazard: 'cây nghiêng gần trạm điện',
        prompt:
          'Em thấy cây nghiêng về phía hàng rào trạm điện. Bạn muốn lại xem. Em chọn cách nào?',
        safeText: 'Nhắc bạn không lại gần; cả hai đứng xa; tìm người lớn báo.',
        safeFeedback: 'Hay! Hiện trường cây–trạm → tránh xa và báo cáo.',
        unsafeChoices: [
          {
            text: 'Lại gần đo xem cây nghiêng bao nhiêu.',
            feedback: 'Không lại gần. Báo người lớn.',
          },
          {
            text: 'Dùng dây buộc cây vào rào trạm.',
            feedback: 'Không buộc gì vào trạm/cây. Tránh xa.',
          },
        ],
      },
      {
        id: 'dien-g4-l4-s5',
        hazard: 'người lớn chưa biết hiện trường',
        prompt:
          'Trên đường đến trường, em đi cùng bố thấy cành lớn chạm dây sau mưa đêm. Em làm gì?',
        safeText: 'Chỉ từ xa cho bố thấy; không tiến gần; nhờ bố quyết định đường khác và báo cáo.',
        safeFeedback: 'Đúng rồi! Báo người lớn từ khoảng cách an toàn.',
        unsafeChoices: [
          {
            text: 'Chạy vào sát gốc cây xem kỹ rồi kể bố.',
            feedback: 'Không vào sát. Chỉ từ xa và nhờ bố.',
          },
          {
            text: 'Tự gọi số điện lực bằng điện thoại bố lấy trong túi.',
            feedback: 'Nhờ bố/người lớn liên hệ; em không tự xử lý hiện trường.',
          },
        ],
      },
    ],
  },

  {
    id: 'dien-g4-l5',
    moduleId: 'dien',
    gradeBand: '4',
    title: 'Ở nhà khi mưa bão (vai trò trẻ)',
    objective: 'Ở cạnh người lớn; không nghịch ổ/thiết bị; báo nếu nước mưa gần ổ thấp.',
    teacherPrompt:
      'Vai trò trẻ trong nhà khi bão: ở cạnh người lớn, không nghịch điện, báo khi thấy nước gần ổ.',
    situations: [
      {
        id: 'dien-g4-l5-s1',
        hazard: 'nước mưa gần ổ thấp',
        prompt:
          'Nước mưa tràn sát ổ cắm thấp gần cửa. Bố mẹ đang trong nhà. Em làm gì?',
        safeText: 'Không chạm ổ hay nước gần ổ; gọi người lớn ngay.',
        safeFeedback: 'Giỏi! Nước gần ổ → không chạm, báo người lớn.',
        unsafeChoices: [
          {
            text: 'Lấy khăn lau nước sát ổ một mình.',
            feedback: 'Không lại gần ổ có nước. Gọi bố mẹ.',
          },
          {
            text: 'Tự tắt aptomat rồi mới lau.',
            feedback: 'Không tự cắt điện. Báo người lớn xử lý.',
          },
        ],
      },
      {
        id: 'dien-g4-l5-s2',
        hazard: 'nghịch ổ khi mất điện',
        prompt:
          'Mất điện lúc mưa to, bạn trong nhà rủ tháo ổ “xem bên trong”. Người lớn ở phòng khách. Em chọn gì?',
        safeText: 'Nhắc bạn không tháo ổ; ở cạnh người lớn; báo nếu bạn vẫn nghịch.',
        safeFeedback: 'Đúng! Mưa bão càng không nghịch ổ/thiết bị.',
        unsafeChoices: [
          {
            text: 'Cùng tháo ổ vì đang mất điện nên “không sao”.',
            feedback: 'Vẫn nguy hiểm. Không tháo ổ — báo người lớn.',
          },
          {
            text: 'Dùng đèn pin soi sát vào lỗ ổ.',
            feedback: 'Không soi hay chọc ổ. Ở cạnh người lớn.',
          },
        ],
      },
      {
        id: 'dien-g4-l5-s3',
        hazard: 'sạc điện thoại gần cửa sổ mưa',
        prompt:
          'Điện thoại đang sạc gần cửa sổ, mưa tạt vào. Mẹ Gấu đang nấu ăn. Em làm gì?',
        safeText: 'Không tự rút phích nếu tay ướt hoặc không chắc; gọi Mẹ Gấu giúp dời chỗ sạc.',
        safeFeedback: 'Tốt! Nhờ người lớn khi mưa gần chỗ sạc.',
        unsafeChoices: [
          {
            text: 'Tay ướt vẫn rút phích cho nhanh.',
            feedback: 'Không rút khi tay ướt. Gọi mẹ giúp.',
          },
          {
            text: 'Hất nước trên máy rồi tiếp tục sạc.',
            feedback: 'Báo Mẹ Gấu kiểm tra; không tự xử lý thiết bị ướt.',
          },
        ],
      },
      {
        id: 'dien-g4-l5-s4',
        hazard: 'chạy ra sân xem bão',
        prompt:
          'Gió bão mạnh, em muốn chạy ra sân xem cây đu đưa gần dây điện. Người lớn bảo ở trong. Em chọn cách nào?',
        safeText: 'Ở trong nhà cạnh người lớn; không ra sân gần dây khi bão.',
        safeFeedback: 'Hay! Mưa bão ở trong với người lớn, tránh dây ngoài trời.',
        unsafeChoices: [
          {
            text: 'Ra sát hàng rào xem dây có đứt không.',
            feedback: 'Không ra gần dây khi bão. Ở trong nhà.',
          },
          {
            text: 'Đứng ngoài hiên quay clip dây đu đưa.',
            feedback: 'Không đứng gần hiện trường. Ở cạnh người lớn trong nhà.',
          },
        ],
      },
      {
        id: 'dien-g4-l5-s5',
        hazard: 'quạt bị tạt mưa',
        prompt:
          'Quạt điện gần cửa bị mưa tạt ướt. Em và bố cùng thấy. Em làm gì?',
        safeText: 'Không chạm quạt; để bố/người lớn xử lý; đứng xa.',
        safeFeedback: 'Đúng rồi! Thiết bị ướt → không chạm, nhờ người lớn.',
        unsafeChoices: [
          {
            text: 'Rút phích quạt rồi lau cánh quạt.',
            feedback: 'Không tự rút/lau thiết bị ướt. Để bố làm.',
          },
          {
            text: 'Bật quạt cho khô nhanh.',
            feedback: 'Không bật thiết bị vừa ướt. Nhờ người lớn.',
          },
        ],
      },
    ],
  },

  // ─── Lớp 5 — hành lang lưới, nhắc bạn, lan tỏa đúng ───
  {
    id: 'dien-g5-l1',
    moduleId: 'dien',
    gradeBand: '5',
    title: 'Không thả diều gần đường dây',
    objective: 'Hiểu nguy cơ diều/dây điều gần lưới; chọn sân trống xa dây, có người lớn.',
    teacherPrompt:
      'Thảo luận chọn chỗ thả diều: sân trống, xa đường dây, luôn có người lớn kèm.',
    situations: [
      {
        id: 'dien-g5-l1-s1',
        hazard: 'thả diều gần đường dây ven đê',
        prompt:
          'Bạn rủ thả diều gần đường dây ven đê vì gió mạnh. Người lớn đi cùng nhóm. Em làm gì?',
        safeText: 'Từ chối chỗ gần dây; nhờ người lớn chọn sân trống xa đường dây.',
        safeFeedback: 'Giỏi! Diều cần chỗ xa dây điện và có người lớn.',
        unsafeChoices: [
          {
            text: 'Thả gần dây vì gió ở đó mạnh hơn.',
            feedback: 'Không thả gần dây. Đổi chỗ xa hơn với người lớn.',
          },
          {
            text: 'Thả thấp thôi, vẫn đứng dưới dây.',
            feedback: 'Vẫn cần xa đường dây. Chọn sân trống khác.',
          },
        ],
      },
      {
        id: 'dien-g5-l1-s2',
        hazard: 'dây diều vướng hướng đường điện',
        prompt:
          'Khi thả, dây diều bay lệch về phía đường điện. Người lớn đứng gần em. Em chọn gì?',
        safeText: 'Báo người lớn ngay; không cố kéo về phía dây; nghe hướng dẫn hạ diều chỗ an toàn.',
        safeFeedback: 'Đúng! Báo người lớn, không kéo diều về phía lưới.',
        unsafeChoices: [
          {
            text: 'Giật mạnh dây để diều lướt qua dưới đường điện.',
            feedback: 'Không kéo về phía dây. Nhờ người lớn.',
          },
          {
            text: 'Chạy theo sát dưới đường dây để giữ diều.',
            feedback: 'Không chạy dưới dây. Báo người lớn ngay.',
          },
        ],
      },
      {
        id: 'dien-g5-l1-s3',
        hazard: 'diều mắc lên dây điện',
        prompt:
          'Diều mắc lên dây điện. Các bạn muốn ném dép lấy xuống. Có chú đi xe máy gần đó. Em làm gì?',
        safeText: 'Nhắc mọi người không ném/với; đứng xa; nhờ chú hoặc tìm người lớn báo.',
        safeFeedback: 'Tốt! Diều mắc dây → tránh xa, báo người lớn.',
        unsafeChoices: [
          {
            text: 'Ném dép hoặc đá lên làm diều rơi.',
            feedback: 'Không ném vật lên dây. Báo người lớn.',
          },
          {
            text: 'Trèo cột lấy diều.',
            feedback: 'Không trèo. Đứng xa và nhờ người lớn.',
          },
        ],
      },
      {
        id: 'dien-g5-l1-s4',
        hazard: 'dây điều bằng kim loại',
        prompt:
          'Bạn mang dây điều có đoạn kim loại, muốn thả gần khu có đường dây. Em và cô phụ trách ngoại khóa ở đó. Em chọn cách nào?',
        safeText: 'Nhắc bạn không thả gần đường dây; hỏi cô chọn chỗ xa và dụng cụ phù hợp.',
        safeFeedback: 'Hay! Hỏi người lớn trước khi thả, tránh gần lưới.',
        unsafeChoices: [
          {
            text: 'Bảo bạn thả thử một vòng rồi tính.',
            feedback: 'Không thử gần dây. Nhờ cô chọn chỗ an toàn.',
          },
          {
            text: 'Giữ dây kim loại giúp bạn cho chắc tay.',
            feedback: 'Không tiếp tục ở gần lưới. Đổi chỗ với cô.',
          },
        ],
      },
      {
        id: 'dien-g5-l1-s5',
        hazard: 'chọn chỗ thả diều đúng',
        prompt:
          'Nhóm cần chọn chỗ thả diều: A gần cột điện, B sân trống xa dây có người lớn. Em chọn gì?',
        safeText: 'Chọn sân trống xa dây điện và luôn có người lớn kèm.',
        safeFeedback: 'Đúng rồi! Xa dây + có người lớn là lựa chọn an toàn.',
        unsafeChoices: [
          {
            text: 'Chọn gần cột vì ít người qua lại.',
            feedback: 'Gần cột/dây không an toàn. Chọn sân trống xa dây.',
          },
          {
            text: 'Thả một mình ở sân trống, không cần người lớn.',
            feedback: 'Vẫn cần người lớn kèm khi thả diều.',
          },
        ],
      },
    ],
  },

  {
    id: 'dien-g5-l2',
    moduleId: 'dien',
    gradeBand: '5',
    title: 'Không trèo cột / leo cây gần dây',
    objective: 'Từ chối thử thách nguy hiểm; báo người lớn nếu thấy bạn trèo cột/cây gần dây.',
    teacherPrompt:
      'Nhấn kỹ năng từ chối + báo cáo bình tĩnh; không dạy “cứu bạn” bằng cách leo theo.',
    situations: [
      {
        id: 'dien-g5-l2-s1',
        hazard: 'rủ trèo cột lấy bóng',
        prompt:
          'Bóng bay lên gần cột điện. Bạn rủ trèo cột lấy bóng. Có người lớn ở cuối sân. Em làm gì?',
        safeText: 'Từ chối trèo; nhắc bạn xuống ý định đó; chạy gọi người lớn giúp.',
        safeFeedback: 'Giỏi! Không trèo cột điện — nhờ người lớn.',
        unsafeChoices: [
          {
            text: 'Trèo trước lấy bóng cho bạn.',
            feedback: 'Không trèo cột. Gọi người lớn.',
          },
          {
            text: 'Đứng dưới chỉ chỗ chân đạp cho bạn trèo.',
            feedback: 'Không hỗ trợ trèo. Nhắc dừng và báo người lớn.',
          },
        ],
      },
      {
        id: 'dien-g5-l2-s2',
        hazard: 'leo cây có dây phía trên',
        prompt:
          'Cây có cành gần đường dây. Bạn thách leo cao. Em và thầy tổng phụ trách gần cổng. Em chọn gì?',
        safeText: 'Từ chối; nhắc bạn không leo cây gần dây; báo thầy.',
        safeFeedback: 'Đúng! Leo cây gần dây rất nguy hiểm — báo thầy.',
        unsafeChoices: [
          {
            text: 'Leo thấp hơn bạn một chút cho đỡ “gần dây”.',
            feedback: 'Không leo cây gần dây. Báo thầy.',
          },
          {
            text: 'Quay clip bạn leo rồi mới gọi thầy.',
            feedback: 'Không đứng xem sát. Nhắc dừng và gọi thầy ngay.',
          },
        ],
      },
      {
        id: 'dien-g5-l2-s3',
        hazard: 'bạn đã leo lên cao',
        prompt:
          'Bạn đã leo lên cột điện thấp. Em ở dưới đất, cô bảo vệ đang ở phòng trực. Em làm gì?',
        safeText: 'Không leo theo; gọi to nhắc bạn giữ yên, không với thêm; chạy gọi cô bảo vệ.',
        safeFeedback: 'Tốt! Không leo theo cứu — gọi người lớn ngay.',
        unsafeChoices: [
          {
            text: 'Leo theo kéo bạn xuống bằng tay.',
            feedback: 'Không leo theo hay kéo. Gọi người lớn.',
          },
          {
            text: 'Tung dây lên để bạn bám xuống.',
            feedback: 'Không thêm dây gần cột điện. Gọi cô bảo vệ.',
          },
        ],
      },
      {
        id: 'dien-g5-l2-s4',
        hazard: 'thử thách nhóm trên mạng',
        prompt:
          'Nhóm chat rủ làm thử thách “chạm cột điện rồi chạy”. Em đang ở nhà với bố mẹ. Em chọn cách nào?',
        safeText: 'Từ chối thử thách; không rủ thêm bạn; nói với bố mẹ hoặc thầy cô nếu bị thúc ép.',
        safeFeedback: 'Hay! Từ chối thử thách nguy hiểm và nhờ người lớn.',
        unsafeChoices: [
          {
            text: 'Làm một lần cho nhóm thôi.',
            feedback: 'Không làm thử thách chạm cột điện. Từ chối.',
          },
          {
            text: 'Bảo bạn khác làm, mình quay video.',
            feedback: 'Không khuyến khích. Nhắc dừng và báo người lớn.',
          },
        ],
      },
      {
        id: 'dien-g5-l2-s5',
        hazard: 'thang dựa gần dây',
        prompt:
          'Công nhân để thang gần khu vực có dây; bạn rủ trèo thang xem. Người lớn đứng cách đó. Em làm gì?',
        safeText: 'Không trèo thang gần dây; nhắc bạn tránh; báo người lớn nếu bạn vẫn lại gần.',
        safeFeedback: 'Đúng rồi! Không trèo thang gần đường dây.',
        unsafeChoices: [
          {
            text: 'Trèo vài bậc cho biết cảm giác.',
            feedback: 'Không trèo. Tránh xa và báo người lớn.',
          },
          {
            text: 'Giữ chân thang cho bạn leo.',
            feedback: 'Không hỗ trợ leo gần dây. Nhắc dừng.',
          },
        ],
      },
    ],
  },

  {
    id: 'dien-g5-l3',
    moduleId: 'dien',
    gradeBand: '5',
    title: 'Trạm biến áp & biển cấm',
    objective: 'Nhận khu vực cấm; không chui rào / không lại gần; báo người lớn khi thấy bất thường.',
    teacherPrompt:
      'Ôn nhận diện biển cấm / hàng rào trạm: không vào xem, không chụp sát, báo người lớn nếu cửa mở.',
    situations: [
      {
        id: 'dien-g5-l3-s1',
        hazard: 'cổng trạm hơi mở',
        prompt:
          'Cổng trạm biến áp hơi mở. Bạn muốn vào xem bên trong. Có chú bảo vệ khu phố gần đó. Em làm gì?',
        safeText: 'Không vào; nhắc bạn đứng xa; báo chú bảo vệ hoặc người lớn.',
        safeFeedback: 'Giỏi! Cổng mở cũng không vào — báo người lớn.',
        unsafeChoices: [
          {
            text: 'Vào xem nhanh rồi ra.',
            feedback: 'Không vào trạm. Báo người lớn từ bên ngoài.',
          },
          {
            text: 'Đứng trong ngưỡng cửa chụp ảnh.',
            feedback: 'Không lại gần. Đứng xa và báo cáo.',
          },
        ],
      },
      {
        id: 'dien-g5-l3-s2',
        hazard: 'biển cấm bị bỏ qua',
        prompt:
          'Có biển cấm lại gần. Bạn bảo biển cũ nên không cần để ý. Em và cô đang đi tham quan khu phố. Em chọn gì?',
        safeText: 'Nhắc bạn biển cấm vẫn phải tuân thủ; đứng xa; báo cô nếu cần.',
        safeFeedback: 'Đúng! Thấy biển cấm thì không lại gần.',
        unsafeChoices: [
          {
            text: 'Bước qua biển để đọc chữ phía sau hàng rào.',
            feedback: 'Không vượt biển cấm. Đứng xa.',
          },
          {
            text: 'Tựa vào hàng rào đọc biển cho rõ.',
            feedback: 'Không áp sát hàng rào trạm. Đọc từ xa với cô.',
          },
        ],
      },
      {
        id: 'dien-g5-l3-s3',
        hazard: 'chui lỗ thủng hàng rào',
        prompt:
          'Hàng rào trạm có lỗ thủng. Bạn rủ chui vào nhặt bóng. Em làm gì?',
        safeText: 'Từ chối chui rào; nhắc bạn không vào; tìm người lớn báo và nhờ lấy bóng nếu cần.',
        safeFeedback: 'Tốt! Không chui rào vào khu vực trạm.',
        unsafeChoices: [
          {
            text: 'Chui vào lấy bóng rồi ra ngay.',
            feedback: 'Không chui vào. Báo người lớn.',
          },
          {
            text: 'Đứng ngoài xô bóng bằng cây vào trong rào.',
            feedback: 'Không đưa vật vào khu trạm. Nhờ người lớn.',
          },
        ],
      },
      {
        id: 'dien-g5-l3-s4',
        hazard: 'ném đá lên mái trạm',
        prompt:
          'Có bạn ném đá thử lên mái khu vực gần trạm. Người lớn ở phía đường. Em chọn cách nào?',
        safeText: 'Nhắc bạn dừng ngay; không tham gia; báo người lớn.',
        safeFeedback: 'Hay! Không ném đồ vào khu vực điện — báo người lớn.',
        unsafeChoices: [
          {
            text: 'Ném theo cho vui.',
            feedback: 'Không ném. Nhắc dừng và báo người lớn.',
          },
          {
            text: 'Nhặt đá của bạn giấu đi sát hàng rào.',
            feedback: 'Không lại sát hàng rào. Báo từ khoảng cách an toàn.',
          },
        ],
      },
      {
        id: 'dien-g5-l3-s5',
        hazard: 'nghe tiếng lạ trong trạm',
        prompt:
          'Em đi ngang ngoài hàng rào, nghe tiếng ù lạ từ phía trạm. Không thấy nhân viên. Em làm gì?',
        safeText: 'Không lại gần nghe rõ hơn; đi tìm người lớn hoặc bảo vệ báo lại.',
        safeFeedback: 'Đúng rồi! Nghe lạ cũng chỉ báo cáo, không tiếp cận.',
        unsafeChoices: [
          {
            text: 'Áp tai vào hàng rào nghe cho rõ.',
            feedback: 'Không áp sát. Đi báo người lớn.',
          },
          {
            text: 'Mở cổng xem có sự cố không.',
            feedback: 'Không mở cổng trạm. Báo người lớn.',
          },
        ],
      },
    ],
  },

  {
    id: 'dien-g5-l4',
    moduleId: 'dien',
    gradeBand: '5',
    title: 'Khi thấy sự cố điện ngoài đường',
    objective:
      'Giữ khoảng cách, cảnh báo bạn bình tĩnh, nhờ người lớn gọi trợ giúp — không tiếp cận, không quay clip sát hiện trường.',
    teacherPrompt:
      'Kịch bản sự cố: đứng xa + lời nhắc bình tĩnh + nhờ người lớn gọi hỗ trợ. Không dạy trẻ gọi tổng đài thay người lớn như nhiệm vụ chính.',
    situations: [
      {
        id: 'dien-g5-l4-s1',
        hazard: 'dây đứt tóe lửa ngoài đường',
        prompt:
          'Em thấy dây đứt tóe lửa trên đường. Có vài bạn muốn lại gần xem. Người lớn ở quán gần đó. Em làm gì?',
        safeText: 'Nhắc bạn đứng thật xa bằng lời bình tĩnh; nhờ người lớn gọi hỗ trợ.',
        safeFeedback: 'Giỏi! Giữ khoảng cách và nhờ người lớn gọi giúp.',
        unsafeChoices: [
          {
            text: 'Lại gần quay clip cho rõ lửa.',
            feedback: 'Không lại gần quay clip. Đứng xa và báo người lớn.',
          },
          {
            text: 'Lấy đất ném vào chỗ tóe lửa.',
            feedback: 'Không tiếp cận hiện trường. Nhờ người lớn.',
          },
        ],
      },
      {
        id: 'dien-g5-l4-s2',
        hazard: 'xe tông cột điện',
        prompt:
          'Có tiếng va chạm, cột điện nghiêng, dây căng. Đám đông tụ lại. Em đi cùng Mẹ Gấu. Em chọn gì?',
        safeText: 'Ở cạnh Mẹ Gấu, đứng xa hiện trường; không chen vào; nhờ Mẹ Gấu quyết định báo cáo.',
        safeFeedback: 'Đúng! Không chen sát hiện trường sự cố điện.',
        unsafeChoices: [
          {
            text: 'Chen vào gần cột xem dây có đứt.',
            feedback: 'Không chen gần. Đứng xa với mẹ.',
          },
          {
            text: 'Giúp kéo nạn nhân ra nếu có người ngồi trong xe.',
            feedback: 'Không tự kéo người trong sự cố điện. Nhờ người lớn xử lý.',
          },
        ],
      },
      {
        id: 'dien-g5-l4-s3',
        hazard: 'bạn livestream sát dây đứt',
        prompt:
          'Bạn bật điện thoại livestream sát chỗ dây đứt. Em làm gì?',
        safeText: 'Nhắc bạn lùi xa và tắt hướng máy vào hiện trường; cùng gọi người lớn.',
        safeFeedback: 'Tốt! Không livestream sát sự cố — tránh xa và báo người lớn.',
        unsafeChoices: [
          {
            text: 'Đứng cạnh vào khung hình cho đông view.',
            feedback: 'Không lại gần. Nhắc bạn lùi và báo người lớn.',
          },
          {
            text: 'Giữ điện thoại giúp bạn quay gần hơn.',
            feedback: 'Không hỗ trợ lại gần. Đứng xa.',
          },
        ],
      },
      {
        id: 'dien-g5-l4-s4',
        hazard: 'hướng dẫn người đi đường',
        prompt:
          'Dây đứt chắn một phần đường. Người lạ hỏi em có nên đi qua không. Có chú bảo vệ gần đó. Em chọn cách nào?',
        safeText: 'Khuyên đứng xa, không đi qua dây; chỉ họ tới chỗ chú bảo vệ/người lớn.',
        safeFeedback: 'Hay! Cảnh báo bằng lời và đưa họ tới người lớn.',
        unsafeChoices: [
          {
            text: 'Dẫn họ bước qua khe dây.',
            feedback: 'Không dẫn ai qua dây đứt. Nhờ người lớn.',
          },
          {
            text: 'Tự đứng giữa đường điều tiết xe.',
            feedback: 'Không tự điều tiết hiện trường. Báo người lớn.',
          },
        ],
      },
      {
        id: 'dien-g5-l4-s5',
        hazard: 'muốn “cắt điện” giúp',
        prompt:
          'Bạn bảo em cùng tìm tủ điện gần đó để cắt aptomat cho “an toàn”. Em làm gì?',
        safeText: 'Từ chối; nhắc không tự cắt điện; đứng xa hiện trường; nhờ người lớn gọi hỗ trợ.',
        safeFeedback: 'Đúng rồi! Trẻ không cắt cầu dao/aptomat — nhờ người lớn.',
        unsafeChoices: [
          {
            text: 'Cùng mở tủ cắt aptomat cho nhanh.',
            feedback: 'Không tự cắt điện. Báo người lớn / điện lực qua người lớn.',
          },
          {
            text: 'Dùng cây khô gạt dây cho đứt hẳn.',
            feedback: 'Không chạm hay gạt dây. Tránh xa và báo cáo.',
          },
        ],
      },
    ],
  },

  {
    id: 'dien-g5-l5',
    moduleId: 'dien',
    gradeBand: '5',
    title: 'Em nhắc bạn dùng điện an toàn',
    objective:
      'Chia sẻ thông điệp tích cực (ổ, tay khô, báo người lớn); không làm xấu hổ bạn; không tự “xử lý hộ”.',
    teacherPrompt:
      'Luyện cách nhắc bạn nhẹ nhàng + gọi người lớn; tránh chế giễu hay tự sửa hộ.',
    situations: [
      {
        id: 'dien-g5-l5-s1',
        hazard: 'bạn chọc ổ bằng kẹp tóc',
        prompt:
          'Bạn chuẩn bị chọc ổ bằng kẹp tóc. Cô đang ở cuối lớp. Em làm gì?',
        safeText: 'Nhắc nhẹ bạn dừng; không chọc ổ; gọi cô giúp.',
        safeFeedback: 'Giỏi! Nhắc nhẹ và báo cô — không tự xử lý hộ.',
        unsafeChoices: [
          {
            text: 'Giật kẹp sát ổ khỏi tay bạn.',
            feedback: 'Nhắc từ khoảng cách an toàn và gọi cô, không giật sát ổ.',
          },
          {
            text: 'Nói to chế bạn trước cả lớp.',
            feedback: 'Nhắc nhẹ, không làm xấu hổ. Gọi cô giúp.',
          },
        ],
      },
      {
        id: 'dien-g5-l5-s2',
        hazard: 'bạn tay ướt định bật quạt',
        prompt:
          'Bạn vừa rửa tay xong, chưa lau khô, định bật quạt lớp. Em chọn gì?',
        safeText: 'Nhắc bạn lau khô tay hoặc nhờ cô bật; không để bạn chạm công tắc khi tay ướt.',
        safeFeedback: 'Đúng! Nhắc tay khô / nhờ người lớn — nói nhẹ nhàng.',
        unsafeChoices: [
          {
            text: 'Bật hộ bạn dù tay mình cũng hơi ướt.',
            feedback: 'Không thay bạn khi tay ướt. Nhờ cô hoặc chờ khô tay.',
          },
          {
            text: 'Cười bảo bạn “giật một cái mới nhớ”.',
            feedback: 'Không đùa nguy hiểm. Nhắc nhẹ và báo cô nếu cần.',
          },
        ],
      },
      {
        id: 'dien-g5-l5-s3',
        hazard: 'bạn kéo dây đứt trong sân',
        prompt:
          'Ngoài sân trường, bạn định nhặt sợi dây trông như dây điện. Thầy trực sân ở xa. Em làm gì?',
        safeText: 'Nhắc bạn đứng xa, không nhặt; cùng gọi thầy.',
        safeFeedback: 'Tốt! Nhắc bạn tránh xa và báo thầy.',
        unsafeChoices: [
          {
            text: 'Nhặt hộ bạn rồi mang đưa thầy.',
            feedback: 'Không nhặt dây. Gọi thầy từ chỗ xa.',
          },
          {
            text: 'Đá dây ra xa rồi mới gọi thầy.',
            feedback: 'Không đá dây. Đứng xa và gọi thầy.',
          },
        ],
      },
      {
        id: 'dien-g5-l5-s4',
        hazard: 'chia sẻ thông điệp đúng',
        prompt:
          'Cô nhờ nhóm nhắc lại cách dùng điện an toàn trước lớp. Em nên nhấn điều gì?',
        safeText:
          'Nhấn: không chọc ổ, tay khô, không nghịch dây, thấy lạ thì tránh xa và báo người lớn.',
        safeFeedback: 'Hay! Thông điệp rõ, tích cực, không hù dọa.',
        unsafeChoices: [
          {
            text: 'Kể chi tiết tai nạn nặng cho bạn sợ.',
            feedback: 'Không hù dọa. Nói ngắn: tránh xa và báo người lớn.',
          },
          {
            text: 'Dạy bạn cách tự mở tủ cắt aptomat khi có sự cố.',
            feedback: 'Không dạy trẻ tự cắt điện. Nhờ người lớn.',
          },
        ],
      },
      {
        id: 'dien-g5-l5-s5',
        hazard: 'bạn xấu hổ khi bị nhắc',
        prompt:
          'Em vừa nhắc bạn không chen sát ổ sạc. Bạn đỏ mặt muốn bỏ đi. Cô đứng gần. Em chọn cách nào?',
        safeText: 'Nói nhẹ: mình nhắc vì muốn bạn an toàn; nhờ cô sắp chỗ sạc nếu cần.',
        safeFeedback: 'Đúng rồi! Nhắc tích cực, không làm bạn thêm xấu hổ.',
        unsafeChoices: [
          {
            text: 'Nói to trước mọi người bạn vừa làm sai.',
            feedback: 'Nhắc riêng/nhẹ. Không làm xấu hổ bạn.',
          },
          {
            text: 'Tự rút hết phích trong ổ “cho xong chuyện”.',
            feedback: 'Không tự xử lý hộ. Nhờ cô sắp xếp.',
          },
        ],
      },
    ],
  },
];
