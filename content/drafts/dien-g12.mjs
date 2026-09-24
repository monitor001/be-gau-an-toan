// Draft nội dung An toàn điện — lớp 1–2 (module dien)
// Bám ma trận research/an-toan-dien.md §3.1–3.2 + khuyến cáo EVN (ý tưởng, paraphrase).
// Chưa được EVN / Bộ GD&ĐT / giáo viên / chuyên gia duyệt. Không thu PII.
// Ranh giới: không tự sửa điện; không chạm dây đứt/hở; báo người lớn; không hù dọa.

export const LESSONS = [
  // ─── Lớp 1 ───
  {
    id: 'dien-g1-l1',
    moduleId: 'dien',
    gradeBand: '1',
    title: 'Ổ cắm không phải đồ chơi',
    objective: 'Nhận ra ổ cắm; không chọc ngón tay hay que vào ổ; gọi người lớn khi tò mò.',
    teacherPrompt:
      'Cùng trẻ chỉ ổ cắm trong nhà/lớp từ xa. Nhắc: ổ không phải đồ chơi; muốn biết gì thì hỏi người lớn.',
    situations: [
      {
        id: 'dien-g1-l1-s1',
        hazard: 'chọc que vào lỗ ổ điện',
        prompt:
          'Bé Gấu đang ở nhà với mẹ. Bé thấy lỗ ổ điện trên tường và muốn chọc que vào để “xem có gì”. Bé làm gì?',
        safeText: 'Đứng xa ổ điện, không chọc gì vào, và nhờ Mẹ Gấu che hoặc gắn nắp ổ.',
        safeFeedback: 'Giỏi! Ổ điện không phải đồ chơi. Bé đứng xa và nhờ người lớn giúp.',
        unsafeChoices: [
          {
            text: 'Chọc que vào lỗ ổ để xem.',
            feedback: 'Không chọc gì vào ổ. Hãy đứng xa và gọi Mẹ Gấu.',
          },
          {
            text: 'Đút ngón tay vào lỗ ổ.',
            feedback: 'Không đưa tay vào ổ. Nhờ mẹ giúp nhé.',
          },
        ],
      },
      {
        id: 'dien-g1-l1-s2',
        hazard: 'tò mò nhìn sát ổ tường',
        prompt:
          'Bé Gấu và bố đang ngồi phòng khách. Bé muốn lại gần sát ổ tường để nhìn cho rõ. Bé làm gì?',
        safeText: 'Ở cạnh bố, chỉ tay từ xa và hỏi bố về ổ điện.',
        safeFeedback: 'Đúng rồi! Bé hỏi người lớn và không áp sát ổ.',
        unsafeChoices: [
          {
            text: 'Áp mặt sát lỗ ổ để nhìn.',
            feedback: 'Không áp sát ổ. Hỏi bố từ chỗ an toàn.',
          },
          {
            text: 'Tự tháo nắp ổ để xem bên trong.',
            feedback: 'Bé không tự tháo ổ. Chỉ nhờ người lớn.',
          },
        ],
      },
      {
        id: 'dien-g1-l1-s3',
        hazard: 'bạn rủ chọc ổ bằng bút',
        prompt:
          'Ở nhà bạn, có người lớn trong phòng. Bạn rủ Bé Gấu lấy bút chọc vào ổ “cho vui”. Bé làm gì?',
        safeText: 'Nói không, đứng xa ổ, và gọi người lớn trong phòng.',
        safeFeedback: 'Tốt! Bé không làm theo trò nguy hiểm và gọi người lớn.',
        unsafeChoices: [
          {
            text: 'Cùng bạn chọc bút vào ổ.',
            feedback: 'Không chọc ổ dù bạn rủ. Gọi người lớn ngay.',
          },
          {
            text: 'Cười xem bạn làm rồi mới gọi người lớn.',
            feedback: 'Đừng để bạn chọc ổ. Nhắc dừng và gọi người lớn ngay.',
          },
        ],
      },
      {
        id: 'dien-g1-l1-s4',
        hazard: 'muốn “thử” lỗ ổ còn trống',
        prompt:
          'Ổ điện có một lỗ còn trống. Bé Gấu muốn biết lỗ đó dùng để làm gì. Bố đang gần đó. Bé làm gì?',
        safeText: 'Không chạm lỗ trống; hỏi bố và nhờ bố giải thích.',
        safeFeedback: 'Hay lắm! Bé hỏi bố thay vì tự thử.',
        unsafeChoices: [
          {
            text: 'Đút đồ chơi nhỏ vào lỗ trống.',
            feedback: 'Không nhét gì vào ổ. Hỏi bố nhé.',
          },
          {
            text: 'Sờ vào lỗ trống bằng tay.',
            feedback: 'Không sờ lỗ ổ. Đứng xa và hỏi người lớn.',
          },
        ],
      },
      {
        id: 'dien-g1-l1-s5',
        hazard: 'ổ thấp ngang tầm trẻ',
        prompt:
          'Bé Gấu thấy ổ điện thấp gần sàn, ngang tầm tay bé. Mẹ Gấu đang trong phòng. Bé làm gì?',
        safeText: 'Không nghịch ổ; nói với mẹ và nhờ Mẹ Gấu trông hoặc che ổ.',
        safeFeedback: 'Đúng! Bé báo Mẹ Gấu thay vì nghịch ổ thấp.',
        unsafeChoices: [
          {
            text: 'Chơi “cắm rút” gần ổ thấp.',
            feedback: 'Ổ không phải đồ chơi. Báo mẹ giúp.',
          },
          {
            text: 'Tự dán giấy che ổ một mình.',
            feedback: 'Bé không tự sửa hay che ổ. Nhờ mẹ làm.',
          },
        ],
      },
    ],
  },

  {
    id: 'dien-g1-l2',
    moduleId: 'dien',
    gradeBand: '1',
    title: 'Dây điện không phải để kéo chơi',
    objective: 'Không kéo/giật dây điện; không dùng dây làm đồ chơi; nhờ người lớn dọn dây.',
    teacherPrompt:
      'Quan sát dây trên sàn (nếu có). Nhắc trẻ: dây không phải dây nhảy hay đồ kéo chơi; thấy dây ngang lối thì tránh và báo người lớn.',
    situations: [
      {
        id: 'dien-g1-l2-s1',
        hazard: 'dây kéo dài nằm giữa sàn',
        prompt:
          'Bé Gấu đang chơi trong phòng với mẹ. Một sợi dây điện kéo dài nằm giữa sàn. Bé làm gì?',
        safeText: 'Đi vòng tránh dây, không kéo dây, và nhờ Mẹ Gấu dọn giúp.',
        safeFeedback: 'Giỏi! Bé tránh dây và nhờ Mẹ Gấu dọn.',
        unsafeChoices: [
          {
            text: 'Kéo dây như đang kéo đồ chơi.',
            feedback: 'Không kéo dây điện. Nhờ mẹ dọn nhé.',
          },
          {
            text: 'Nhảy qua dây cho vui.',
            feedback: 'Đi vòng cẩn thận và gọi Mẹ Gấu, không nhảy qua dây.',
          },
        ],
      },
      {
        id: 'dien-g1-l2-s2',
        hazard: 'dùng dây làm dây nhảy',
        prompt:
          'Bạn muốn lấy dây sạc làm “dây nhảy”. Có người lớn gần đó. Bé Gấu làm gì?',
        safeText: 'Nói không, không lấy dây làm đồ chơi, và tìm người lớn.',
        safeFeedback: 'Đúng! Dây điện không phải đồ chơi. Bé gọi người lớn.',
        unsafeChoices: [
          {
            text: 'Cùng bạn nhảy bằng dây sạc.',
            feedback: 'Không dùng dây điện để chơi. Gọi người lớn.',
          },
          {
            text: 'Giật dây ra khỏi ổ để lấy chơi.',
            feedback: 'Không giật dây. Để người lớn xử lý.',
          },
        ],
      },
      {
        id: 'dien-g1-l2-s3',
        hazard: 'kéo dây quạt cho gần chỗ chơi',
        prompt:
          'Bé Gấu muốn quạt gần chỗ đang ngồi. Dây quạt còn xa. Bố đang ở phòng. Bé làm gì?',
        safeText: 'Không kéo dây quạt; nhờ bố giúp đặt quạt đúng chỗ.',
        safeFeedback: 'Tốt! Bé nhờ bố, không tự kéo dây.',
        unsafeChoices: [
          {
            text: 'Tự kéo mạnh dây quạt lại gần.',
            feedback: 'Không kéo dây thiết bị. Nhờ bố giúp.',
          },
          {
            text: 'Giật phích rồi kéo quạt một mình.',
            feedback: 'Bé không tự rút phích hay kéo quạt. Gọi bố.',
          },
        ],
      },
      {
        id: 'dien-g1-l2-s4',
        hazard: 'dây rối dưới chân',
        prompt:
          'Dưới chân bàn có dây rối. Bé Gấu suýt vấp khi đi với cô. Bé làm gì?',
        safeText: 'Đứng lại, đi vòng chỗ khác, và nói với cô để cô dọn dây.',
        safeFeedback: 'Hay! Bé tránh dây rối và báo cô.',
        unsafeChoices: [
          {
            text: 'Lôi dây ra cho thẳng một mình.',
            feedback: 'Không tự lôi dây. Báo cô giúp.',
          },
          {
            text: 'Giẫm lên dây rồi đi tiếp.',
            feedback: 'Đừng giẫm dây. Đi vòng và gọi cô.',
          },
        ],
      },
      {
        id: 'dien-g1-l2-s5',
        hazard: 'kéo đuôi dây đang cắm',
        prompt:
          'Bé Gấu thấy đuôi dây đèn đang cắm trên tường. Bé muốn kéo nhẹ xem sao. Mẹ ở gần. Bé làm gì?',
        safeText: 'Không kéo dây đang cắm; đứng xa và hỏi Mẹ Gấu.',
        safeFeedback: 'Đúng rồi! Bé không kéo dây đang cắm điện.',
        unsafeChoices: [
          {
            text: 'Kéo đuôi dây cho vui.',
            feedback: 'Không kéo dây đang cắm. Hỏi mẹ nhé.',
          },
          {
            text: 'Quấn dây quanh tay để chơi.',
            feedback: 'Dây không phải đồ chơi. Để mẹ trông.',
          },
        ],
      },
    ],
  },

  {
    id: 'dien-g1-l3',
    moduleId: 'dien',
    gradeBand: '1',
    title: 'Tay khô rồi mới gần thiết bị',
    objective: 'Hiểu tay ướt gần điện thì nguy hiểm; lau khô và nhờ người lớn bật thiết bị.',
    teacherPrompt:
      'Sau khi trẻ rửa tay, nhắc: lau khô rồi mới nhờ người lớn bật quạt/đèn. Không để trẻ tự thao tác khi tay còn ướt.',
    situations: [
      {
        id: 'dien-g1-l3-s1',
        hazard: 'tay ướt muốn bật quạt',
        prompt:
          'Bé Gấu vừa rửa tay xong, tay còn ướt. Bé muốn bật quạt. Mẹ Gấu đang trong phòng. Bé làm gì?',
        safeText: 'Lau khô tay, rồi nhờ Mẹ Gấu bật quạt giúp.',
        safeFeedback: 'Giỏi! Tay khô và nhờ Mẹ Gấu bật quạt.',
        unsafeChoices: [
          {
            text: 'Bật quạt ngay khi tay còn ướt.',
            feedback: 'Tay ướt chưa gần công tắc. Lau khô và nhờ Mẹ Gấu.',
          },
          {
            text: 'Lau tay lên áo rồi tự bật ngay.',
            feedback: 'Hãy lau khô kỹ và nhờ người lớn bật giúp.',
          },
        ],
      },
      {
        id: 'dien-g1-l3-s2',
        hazard: 'tay ướt gần ổ cắm',
        prompt:
          'Bé Gấu vừa chơi nước, tay còn ướt, muốn lại gần ổ để nhìn sạc điện thoại. Bố ở gần. Bé làm gì?',
        safeText: 'Đứng xa ổ, lau khô tay, và nhờ bố nếu cần dùng máy.',
        safeFeedback: 'Đúng! Bé đứng xa ổ khi tay còn ướt.',
        unsafeChoices: [
          {
            text: 'Sờ gần ổ khi tay còn ướt.',
            feedback: 'Tay ướt thì đứng xa ổ. Lau khô và gọi bố.',
          },
          {
            text: 'Rút sạc bằng tay ướt.',
            feedback: 'Không rút sạc khi tay ướt. Nhờ bố.',
          },
        ],
      },
      {
        id: 'dien-g1-l3-s3',
        hazard: 'sau mưa muốn mở đèn',
        prompt:
          'Sau cơn mưa, Bé Gấu về nhà với mẹ, tay và áo hơi ướt. Bé muốn tự mở đèn phòng. Bé làm gì?',
        safeText: 'Để mẹ mở đèn; bé lau khô tay và đứng cạnh Mẹ Gấu.',
        safeFeedback: 'Tốt! Bé để người lớn mở đèn khi còn ướt.',
        unsafeChoices: [
          {
            text: 'Tự ấn công tắc khi tay còn ướt.',
            feedback: 'Khi còn ướt, nhờ Mẹ Gấu mở đèn giúp.',
          },
          {
            text: 'Dùng khăn ướt lau công tắc rồi bật.',
            feedback: 'Không lau công tắc bằng khăn ướt. Nhờ mẹ.',
          },
        ],
      },
      {
        id: 'dien-g1-l3-s4',
        hazard: 'uống nước gần máy tính đang cắm',
        prompt:
          'Bé Gấu cầm cốc nước gần bàn có máy tính đang cắm điện. Cô đang ngồi cạnh. Bé làm gì?',
        safeText: 'Đặt cốc xa máy và ổ điện; nhờ cô chọn chỗ uống an toàn.',
        safeFeedback: 'Hay! Bé để nước xa chỗ có điện.',
        unsafeChoices: [
          {
            text: 'Để cốc ngay cạnh bàn phím đang dùng.',
            feedback: 'Nước cần xa máy và ổ. Nhờ cô giúp.',
          },
          {
            text: 'Uống xong rồi đặt cốc lên dây điện.',
            feedback: 'Không đặt gì lên dây. Để xa và hỏi cô.',
          },
        ],
      },
      {
        id: 'dien-g1-l3-s5',
        hazard: 'tay dính kem muốn bật đèn',
        prompt:
          'Tay Bé Gấu còn dính kem ướt. Bé muốn bật đèn bàn học. Bố ở gần. Bé làm gì?',
        safeText: 'Rửa và lau khô tay, rồi nhờ bố bật đèn.',
        safeFeedback: 'Đúng rồi! Tay sạch khô rồi mới nhờ bố.',
        unsafeChoices: [
          {
            text: 'Bật đèn luôn bằng tay dính kem.',
            feedback: 'Lau sạch khô tay và nhờ bố bật giúp.',
          },
          {
            text: 'Quẹt tay lên công tắc cho sạch.',
            feedback: 'Không quẹt tay bẩn lên công tắc. Nhờ bố.',
          },
        ],
      },
    ],
  },

  {
    id: 'dien-g1-l4',
    moduleId: 'dien',
    gradeBand: '1',
    title: 'Ở nhà cùng người lớn khi dùng điện',
    objective: 'Không tự rút phích / tự bật thiết bị khi chưa được phép; luôn nhờ người lớn.',
    teacherPrompt:
      'Thảo luận ngắn: những việc chỉ người lớn làm (rút sạc, bật quạt, cắm phích). Trẻ xin phép và nhờ giúp.',
    situations: [
      {
        id: 'dien-g1-l4-s1',
        hazard: 'tự rút sạc điện thoại',
        prompt:
          'Điện thoại đang sạc. Bé Gấu muốn rút phích một mình. Mẹ Gấu đang ở phòng bên. Bé làm gì?',
        safeText: 'Gọi mẹ và nhờ Mẹ Gấu rút sạc giúp.',
        safeFeedback: 'Giỏi! Bé nhờ Mẹ Gấu, không tự rút phích.',
        unsafeChoices: [
          {
            text: 'Tự rút phích sạc.',
            feedback: 'Chưa được phép thì nhờ Mẹ Gấu rút giúp.',
          },
          {
            text: 'Giật dây sạc cho nhanh.',
            feedback: 'Không giật dây. Gọi mẹ nhé.',
          },
        ],
      },
      {
        id: 'dien-g1-l4-s2',
        hazard: 'tự bật tivi khi chưa được phép',
        prompt:
          'Bé Gấu muốn xem hoạt hình. Tivi đang tắt. Bố đang nấu ăn gần đó. Bé làm gì?',
        safeText: 'Hỏi bố và nhờ bố bật tivi nếu được phép.',
        safeFeedback: 'Đúng! Bé xin phép và nhờ bố.',
        unsafeChoices: [
          {
            text: 'Tự bật tivi rồi mới nói bố.',
            feedback: 'Hãy hỏi bố trước, đừng tự bật.',
          },
          {
            text: 'Tự cắm thêm dây rồi bật.',
            feedback: 'Bé không tự cắm dây. Nhờ bố giúp.',
          },
        ],
      },
      {
        id: 'dien-g1-l4-s3',
        hazard: 'muốn dùng máy xay một mình',
        prompt:
          'Bé Gấu thấy máy xay trên bàn bếp đang cắm điện. Mẹ ở gần. Bé muốn “thử nút”. Bé làm gì?',
        safeText: 'Không chạm máy; đứng cạnh Mẹ Gấu và hỏi Mẹ Gấu.',
        safeFeedback: 'Tốt! Thiết bị nhà bếp để người lớn dùng.',
        unsafeChoices: [
          {
            text: 'Tự nhấn nút máy xay xem sao.',
            feedback: 'Không tự dùng máy nhà bếp. Hỏi mẹ.',
          },
          {
            text: 'Rút phích máy để chơi nút.',
            feedback: 'Không rút phích chơi. Để mẹ trông.',
          },
        ],
      },
      {
        id: 'dien-g1-l4-s4',
        hazard: 'muốn sạc máy tính bảng một mình',
        prompt:
          'Pin máy tính bảng yếu. Bé Gấu muốn tự cắm sạc. Cô đang ngồi bàn làm việc. Bé làm gì?',
        safeText: 'Đưa máy và dây sạc cho cô, nhờ cô cắm giúp.',
        safeFeedback: 'Hay! Bé nhờ cô cắm sạc.',
        unsafeChoices: [
          {
            text: 'Tự cắm sạc vào ổ.',
            feedback: 'Nhờ cô cắm giúp, đừng tự cắm.',
          },
          {
            text: 'Cắm thử nhiều lỗ ổ cho đến khi được.',
            feedback: 'Không thử lung tung. Nhờ cô một lần đúng chỗ.',
          },
        ],
      },
      {
        id: 'dien-g1-l4-s5',
        hazard: 'muốn tắt đèn phòng một mình lúc tối',
        prompt:
          'Đến giờ ngủ, đèn phòng còn sáng. Bé Gấu muốn tắt đèn. Bố đang ngoài hành lang. Bé làm gì?',
        safeText: 'Gọi bố vào và nhờ bố tắt đèn cùng bé.',
        safeFeedback: 'Đúng rồi! Bé gọi bố, không tự tắt lúc tối một mình.',
        unsafeChoices: [
          {
            text: 'Tắt đèn rồi đi tìm bố trong bóng tối.',
            feedback: 'Gọi bố trước; cùng bố tắt đèn.',
          },
          {
            text: 'Rút phích đèn cho tắt nhanh.',
            feedback: 'Không rút phích. Nhờ bố tắt công tắc.',
          },
        ],
      },
    ],
  },

  {
    id: 'dien-g1-l5',
    moduleId: 'dien',
    gradeBand: '1',
    title: 'Thấy lạ thì gọi người lớn',
    objective: 'Nhận ra dây trông khác / ổ nóng bất thường → báo người lớn, không chạm.',
    teacherPrompt:
      'Nhắc trẻ: thấy dây sờn, ổ nóng, mùi lạ gần thiết bị thì chỉ từ xa và gọi người lớn — không sờ.',
    situations: [
      {
        id: 'dien-g1-l5-s1',
        hazard: 'dây bị sờn gần chân bàn',
        prompt:
          'Bé Gấu thấy đoạn dây gần chân bàn trông sờn, khác ngày thường. Mẹ Gấu đang trong nhà. Bé làm gì?',
        safeText: 'Không chạm dây; chỉ tay từ xa và gọi Mẹ Gấu ngay.',
        safeFeedback: 'Giỏi! Bé báo Mẹ Gấu, không sờ dây lạ.',
        unsafeChoices: [
          {
            text: 'Sờ dây sờn xem có sao không.',
            feedback: 'Không chạm dây trông lạ. Gọi mẹ.',
          },
          {
            text: 'Lấy băng dính tự quấn lại.',
            feedback: 'Bé không tự sửa dây. Báo mẹ giúp.',
          },
        ],
      },
      {
        id: 'dien-g1-l5-s2',
        hazard: 'ổ điện nóng bất thường',
        prompt:
          'Bé Gấu đi ngang ổ đang cắm sạc, cảm thấy hơi nóng lạ. Bố ở phòng bên. Bé làm gì?',
        safeText: 'Đứng xa ổ, không chạm, và gọi bố ngay.',
        safeFeedback: 'Đúng! Bé tránh xa và gọi bố.',
        unsafeChoices: [
          {
            text: 'Đặt tay lên ổ để xem nóng thế nào.',
            feedback: 'Không sờ ổ nóng. Gọi bố ngay.',
          },
          {
            text: 'Tự rút hết phích đang cắm.',
            feedback: 'Đừng tự rút. Gọi bố xử lý.',
          },
        ],
      },
      {
        id: 'dien-g1-l5-s3',
        hazard: 'nghe tiếng lạ từ ổ',
        prompt:
          'Gần ổ tường có tiếng lạ nhỏ. Bé Gấu và cô đang trong phòng. Bé làm gì?',
        safeText: 'Không lại gần ổ; nói với cô ngay.',
        safeFeedback: 'Tốt! Bé báo cô khi thấy/ nghe điều lạ.',
        unsafeChoices: [
          {
            text: 'Lại gần áp tai vào ổ để nghe rõ.',
            feedback: 'Không áp sát ổ. Gọi cô ngay.',
          },
          {
            text: 'Tự gõ ổ xem còn kêu không.',
            feedback: 'Không gõ ổ. Báo cô giúp.',
          },
        ],
      },
      {
        id: 'dien-g1-l5-s4',
        hazard: 'phích cắm trông lệch',
        prompt:
          'Phích cắm quạt trông lệch khỏi ổ. Bé Gấu muốn chỉnh. Mẹ ở gần. Bé làm gì?',
        safeText: 'Không chỉnh phích; gọi Mẹ Gấu đến xem.',
        safeFeedback: 'Hay! Bé nhờ Mẹ Gấu, không tự chỉnh phích.',
        unsafeChoices: [
          {
            text: 'Tự ấn phích cho thẳng.',
            feedback: 'Không tự ấn phích. Gọi mẹ.',
          },
          {
            text: 'Rút phích rồi cắm lại một mình.',
            feedback: 'Để mẹ rút và kiểm tra giúp.',
          },
        ],
      },
      {
        id: 'dien-g1-l5-s5',
        hazard: 'mùi lạ gần thiết bị điện',
        prompt:
          'Bé Gấu ngửi thấy mùi lạ gần góc có nhiều dây điện. Bố đang ở nhà. Bé làm gì?',
        safeText: 'Đi ra xa góc đó và gọi bố ngay.',
        safeFeedback: 'Đúng rồi! Bé tránh xa và báo bố.',
        unsafeChoices: [
          {
            text: 'Lại gần để tìm xem mùi từ đâu.',
            feedback: 'Đừng lại gần. Gọi bố ngay.',
          },
          {
            text: 'Tự mở tủ điện xem bên trong.',
            feedback: 'Bé không mở tủ điện. Báo bố.',
          },
        ],
      },
    ],
  },

  // ─── Lớp 2 ───
  {
    id: 'dien-g2-l1',
    moduleId: 'dien',
    gradeBand: '2',
    title: 'Đồ chơi và ổ điện',
    objective: 'Đồ chơi rơi gần/vào thiết bị điện → không tự lấy; báo người lớn.',
    teacherPrompt:
      'Nhắc: đồ chơi gần tivi, ổ, dây đang cắm thì không thò tay lấy; gọi người lớn nhặt giúp.',
    situations: [
      {
        id: 'dien-g2-l1-s1',
        hazard: 'xe đồ chơi kẹt sau tivi đang cắm điện',
        prompt:
          'Xe đồ chơi của Bé Gấu lăn kẹt sau tivi đang cắm điện. Mẹ ở phòng khách. Bé làm gì?',
        safeText: 'Không thò tay vào sau tivi; gọi Mẹ Gấu lấy giúp.',
        safeFeedback: 'Giỏi! Bé không tự lấy đồ sau thiết bị đang cắm điện.',
        unsafeChoices: [
          {
            text: 'Thò tay vào sau tivi lấy xe.',
            feedback: 'Nguy hiểm khi thiết bị đang cắm. Gọi mẹ.',
          },
          {
            text: 'Kéo dây tivi sang một bên để lấy xe.',
            feedback: 'Không kéo dây. Nhờ mẹ giúp.',
          },
        ],
      },
      {
        id: 'dien-g2-l1-s2',
        hazard: 'bóng bay vướng gần ổ tường',
        prompt:
          'Bóng bay của Bé Gấu vướng gần ổ tường có phích đang cắm. Bố ở gần. Bé làm gì?',
        safeText: 'Đứng xa ổ; nhờ bố gỡ bóng giúp.',
        safeFeedback: 'Đúng! Bé nhờ bố, không tự gỡ gần ổ.',
        unsafeChoices: [
          {
            text: 'Tự kéo bóng sát ổ để gỡ.',
            feedback: 'Đừng sát ổ. Gọi bố gỡ giúp.',
          },
          {
            text: 'Dùng kéo cắt dây bóng gần ổ.',
            feedback: 'Không dùng kéo gần ổ. Nhờ bố.',
          },
        ],
      },
      {
        id: 'dien-g2-l1-s3',
        hazard: 'viên bi lăn dưới ghế gần dây điện',
        prompt:
          'Viên bi lăn dưới ghế, gần đám dây điện. Cô đang trong phòng. Bé Gấu làm gì?',
        safeText: 'Không chui dưới ghế lấy bi; nói với cô để cô lấy giúp.',
        safeFeedback: 'Tốt! Bé báo cô thay vì chui gần dây.',
        unsafeChoices: [
          {
            text: 'Chui xuống lấy bi cạnh dây.',
            feedback: 'Không chui gần dây. Gọi cô.',
          },
          {
            text: 'Lôi dây sang để lấy bi cho dễ.',
            feedback: 'Không lôi dây. Nhờ cô giúp.',
          },
        ],
      },
      {
        id: 'dien-g2-l1-s4',
        hazard: 'gấu bông rơi lên ổ nhiều phích',
        prompt:
          'Gấu bông rơi lên cụm ổ có nhiều phích đang cắm. Bé Gấu muốn lấy lại. Mẹ ở gần. Bé làm gì?',
        safeText: 'Không nhấc gấu trên ổ; gọi Mẹ Gấu lấy giúp.',
        safeFeedback: 'Hay! Bé để mẹ lấy đồ trên ổ đang dùng.',
        unsafeChoices: [
          {
            text: 'Giật gấu lên khỏi ổ một mình.',
            feedback: 'Có thể kéo nhầm phích. Gọi mẹ.',
          },
          {
            text: 'Rút vài phích cho chỗ trống rồi lấy.',
            feedback: 'Không tự rút phích. Nhờ mẹ.',
          },
        ],
      },
      {
        id: 'dien-g2-l1-s5',
        hazard: 'đồ chơi kim loại gần lỗ ổ',
        prompt:
          'Bé Gấu cầm kẹp tóc kim loại, muốn “thử” gần lỗ ổ. Bố đang ngồi cạnh. Bé làm gì?',
        safeText: 'Cất kẹp tóc, không đưa gần ổ, và nói với bố.',
        safeFeedback: 'Đúng rồi! Không đưa đồ kim loại gần ổ.',
        unsafeChoices: [
          {
            text: 'Chọc kẹp tóc vào lỗ ổ xem sao.',
            feedback: 'Không chọc gì vào ổ. Nói bố ngay.',
          },
          {
            text: 'Để kẹp tóc dựa sát mặt ổ.',
            feedback: 'Đồ kim loại cần xa ổ. Cất đi và hỏi bố.',
          },
        ],
      },
    ],
  },

  {
    id: 'dien-g2-l2',
    moduleId: 'dien',
    gradeBand: '2',
    title: 'Nước và điện không đi cùng',
    objective: 'Thiết bị rơi vào chậu/bồn nước → không chạm; báo người lớn ngay.',
    teacherPrompt:
      'Bám ý EVN: thiết bị/điện thoại rơi vào nước → trẻ không với tay; gọi người lớn. Không dạy cắt điện như nhiệm vụ trẻ.',
    situations: [
      {
        id: 'dien-g2-l2-s1',
        hazard: 'điện thoại đang sạc rơi xuống chậu nước',
        prompt:
          'Điện thoại đang sạc rơi xuống chậu nước. Bé Gấu đứng cạnh. Mẹ ở phòng bên. Bé làm gì?',
        safeText: 'Không với tay vào chậu; gọi Mẹ Gấu ngay.',
        safeFeedback: 'Giỏi! Bé không chạm và gọi Mẹ Gấu ngay.',
        unsafeChoices: [
          {
            text: 'Với tay vào nước lấy điện thoại.',
            feedback: 'Không chạm. Gọi mẹ ngay.',
          },
          {
            text: 'Tự rút sạc rồi mới vớt máy.',
            feedback: 'Đừng tự rút khi máy đang trong nước. Gọi mẹ.',
          },
        ],
      },
      {
        id: 'dien-g2-l2-s2',
        hazard: 'máy tính bảng gần bồn rửa',
        prompt:
          'Máy tính bảng để sát mép bồn rửa có nước. Bé Gấu muốn lấy máy. Bố ở gần. Bé làm gì?',
        safeText: 'Không với qua bồn; nhờ bố lấy máy và để xa nước.',
        safeFeedback: 'Đúng! Bé nhờ bố, không với qua chỗ nước.',
        unsafeChoices: [
          {
            text: 'Với qua bồn lấy máy một mình.',
            feedback: 'Dễ làm máy rơi nước. Nhờ bố.',
          },
          {
            text: 'Xịt nước rửa cho máy sạch rồi lấy.',
            feedback: 'Không đưa nước tới máy. Gọi bố.',
          },
        ],
      },
      {
        id: 'dien-g2-l2-s3',
        hazard: 'đèn bàn gần cốc nước đổ',
        prompt:
          'Cốc nước đổ gần chân đèn bàn đang cắm điện. Cô đang trong lớp góc khác. Bé Gấu làm gì?',
        safeText: 'Không lau gần đèn; tránh xa và gọi cô ngay.',
        safeFeedback: 'Tốt! Bé tránh xa và báo cô.',
        unsafeChoices: [
          {
            text: 'Dùng khăn lau sát chân đèn đang cắm.',
            feedback: 'Nước gần điện thì gọi cô, đừng tự lau sát đèn.',
          },
          {
            text: 'Nhấc đèn đang cắm để lau sàn.',
            feedback: 'Không nhấc thiết bị đang cắm. Gọi cô.',
          },
        ],
      },
      {
        id: 'dien-g2-l2-s4',
        hazard: 'sạc để gần thau nước mưa',
        prompt:
          'Ngoài hành lang có thau hứng nước mưa. Cạnh đó có cục sạc. Mẹ ở trong nhà. Bé Gấu làm gì?',
        safeText: 'Không đụng sạc gần nước; vào gọi Mẹ Gấu ra xem.',
        safeFeedback: 'Hay! Bé báo Mẹ Gấu, không đụng sạc gần nước.',
        unsafeChoices: [
          {
            text: 'Nhặt sạc lên dù tay hơi ướt mưa.',
            feedback: 'Tay ướt + sạc gần nước: gọi Mẹ Gấu, đừng nhặt.',
          },
          {
            text: 'Đẩy thau nước bằng sạc.',
            feedback: 'Không dùng sạc đẩy thau. Gọi mẹ.',
          },
        ],
      },
      {
        id: 'dien-g2-l2-s5',
        hazard: 'bạn định vớt tai nghe trong chậu',
        prompt:
          'Tai nghe rơi vào chậu nước. Bạn định thọc tay vớt. Có người lớn gần cửa. Bé Gấu làm gì?',
        safeText: 'Nhắc bạn dừng, không ai thọc tay, và gọi người lớn.',
        safeFeedback: 'Đúng rồi! Bé nhắc bạn và gọi người lớn.',
        unsafeChoices: [
          {
            text: 'Cùng bạn thọc tay vớt cho nhanh.',
            feedback: 'Không thọc tay vào nước lấy đồ điện. Gọi người lớn.',
          },
          {
            text: 'Để bạn vớt, mình đứng xem.',
            feedback: 'Nhắc bạn dừng và gọi người lớn ngay.',
          },
        ],
      },
    ],
  },

  {
    id: 'dien-g2-l3',
    moduleId: 'dien',
    gradeBand: '2',
    title: 'Không nghịch phích và ổ',
    objective: 'Không tháo, không cắm lung tung; từ chối trò “thử cắm”; nhờ người lớn.',
    teacherPrompt:
      'Luyện câu từ chối nhẹ: “Không nghịch ổ nhé, mình gọi Mẹ Gấu/cô.” Người lớn quan sát khi trẻ chơi gần góc điện.',
    situations: [
      {
        id: 'dien-g2-l3-s1',
        hazard: 'bạn rủ thử cắm đồ lạ vào ổ',
        prompt:
          'Bạn rủ Bé Gấu “thử cắm cái này vào ổ xem sao”. Mẹ Gấu đang trong nhà. Bé làm gì?',
        safeText: 'Từ chối, không cắm, và tìm mẹ ngay.',
        safeFeedback: 'Giỏi! Bé nói không và gọi Mẹ Gấu.',
        unsafeChoices: [
          {
            text: 'Cùng bạn cắm thử cho biết.',
            feedback: 'Không cắm lung tung. Gọi mẹ.',
          },
          {
            text: 'Để bạn cắm, mình canh cửa.',
            feedback: 'Đừng để bạn nghịch ổ. Gọi mẹ ngay.',
          },
        ],
      },
      {
        id: 'dien-g2-l3-s2',
        hazard: 'muốn tháo phích ra xem',
        prompt:
          'Bé Gấu tò mò muốn tháo vỏ phích cắm xem bên trong. Bố ở gần. Bé làm gì?',
        safeText: 'Không tháo phích; hỏi bố và để bố giữ đồ điện.',
        safeFeedback: 'Đúng! Bé không tháo phích.',
        unsafeChoices: [
          {
            text: 'Dùng tay tháo vỏ phích.',
            feedback: 'Không tháo phích. Hỏi bố nhé.',
          },
          {
            text: 'Dùng kéo tách phích ra.',
            feedback: 'Không dùng kéo với phích. Gọi bố.',
          },
        ],
      },
      {
        id: 'dien-g2-l3-s3',
        hazard: 'cắm nhiều phích vào một ổ',
        prompt:
          'Bé Gấu muốn cắm thêm nhiều phích vào một ổ cho “đủ chỗ”. Cô đang đứng gần. Bé làm gì?',
        safeText: 'Không tự cắm thêm; hỏi cô trước.',
        safeFeedback: 'Tốt! Bé hỏi cô, không tự cắm thêm.',
        unsafeChoices: [
          {
            text: 'Nhét thật nhiều phích vào một ổ.',
            feedback: 'Không nhét nhiều phích. Hỏi cô.',
          },
          {
            text: 'Tháo phích khác ra rồi cắm đồ của mình.',
            feedback: 'Không tự tháo phích người khác. Nhờ cô.',
          },
        ],
      },
      {
        id: 'dien-g2-l3-s4',
        hazard: 'phích lỏng muốn tự ấn',
        prompt:
          'Phích quạt hơi lỏng. Bé Gấu muốn ấn mạnh cho chắc. Mẹ ở phòng bên. Bé làm gì?',
        safeText: 'Không ấn phích; gọi Mẹ Gấu đến xem.',
        safeFeedback: 'Hay! Bé gọi Mẹ Gấu khi phích trông không ổn.',
        unsafeChoices: [
          {
            text: 'Ấn mạnh phích bằng tay.',
            feedback: 'Đừng tự ấn. Gọi mẹ.',
          },
          {
            text: 'Đá nhẹ phích cho vào sâu.',
            feedback: 'Không đá phích. Báo mẹ giúp.',
          },
        ],
      },
      {
        id: 'dien-g2-l3-s5',
        hazard: 'đổi ổ cắm cho vui',
        prompt:
          'Bé Gấu muốn rút sạc ở ổ này cắm sang ổ kia “cho vui”. Bố đang làm việc. Bé làm gì?',
        safeText: 'Không rút–cắm chơi; để nguyên và hỏi bố nếu cần sạc.',
        safeFeedback: 'Đúng rồi! Không nghịch rút–cắm cho vui.',
        unsafeChoices: [
          {
            text: 'Rút rồi cắm sang ổ khác liên tục.',
            feedback: 'Không nghịch rút–cắm. Hỏi bố.',
          },
          {
            text: 'Rút sạc rồi để phích treo trên ổ.',
            feedback: 'Để nguyên hoặc nhờ bố. Đừng nghịch phích.',
          },
        ],
      },
    ],
  },

  {
    id: 'dien-g2-l4',
    moduleId: 'dien',
    gradeBand: '2',
    title: 'Quạt, đèn, máy tính — dùng đúng cách',
    objective: 'Chỉ dùng thiết bị khi người lớn cho phép và hướng dẫn; không kéo dây hay tự sửa.',
    teacherPrompt:
      'Cho phép rõ ràng: trẻ được nhờ người lớn bật/tắt; không kéo quạt, không tháo lưới quạt, không tự cắm máy.',
    situations: [
      {
        id: 'dien-g2-l4-s1',
        hazard: 'kéo dây quạt cho gần giường',
        prompt:
          'Bé Gấu muốn quạt gần giường hơn. Dây còn ngắn. Mẹ ở nhà. Bé làm gì?',
        safeText: 'Không kéo dây quạt; nhờ Mẹ Gấu đặt quạt giúp.',
        safeFeedback: 'Giỏi! Bé nhờ Mẹ Gấu, không kéo dây quạt.',
        unsafeChoices: [
          {
            text: 'Kéo mạnh dây quạt về phía giường.',
            feedback: 'Không kéo dây. Nhờ mẹ đặt quạt.',
          },
          {
            text: 'Bế quạt đang chạy sang giường.',
            feedback: 'Không bế quạt đang chạy. Gọi mẹ.',
          },
        ],
      },
      {
        id: 'dien-g2-l4-s2',
        hazard: 'thò tay vào lưới quạt',
        prompt:
          'Quạt đang quay. Bé Gấu muốn lấy tờ giấy gần lưới quạt. Bố ở gần. Bé làm gì?',
        safeText: 'Không thò tay gần lưới quạt; nhờ bố tắt quạt rồi lấy giúp.',
        safeFeedback: 'Đúng! Bé không thò tay gần quạt đang chạy.',
        unsafeChoices: [
          {
            text: 'Thò tay vào gần lưới lấy giấy.',
            feedback: 'Nguy hiểm. Nhờ bố tắt quạt giúp.',
          },
          {
            text: 'Tự tắt quạt rồi thọc tay vào cánh.',
            feedback: 'Không thọc tay vào quạt. Để bố lấy giúp.',
          },
        ],
      },
      {
        id: 'dien-g2-l4-s3',
        hazard: 'tự đổi bóng đèn',
        prompt:
          'Đèn học tối. Bé Gấu muốn tự xoáy bóng đèn mới. Cô đang ở cửa. Bé làm gì?',
        safeText: 'Không đụng bóng đèn; gọi cô thay giúp.',
        safeFeedback: 'Tốt! Đổi bóng đèn là việc của người lớn.',
        unsafeChoices: [
          {
            text: 'Tự đứng ghế xoáy bóng đèn.',
            feedback: 'Bé không tự đổi bóng. Gọi cô.',
          },
          {
            text: 'Rút phích đèn rồi tự tháo bóng.',
            feedback: 'Vẫn nhờ cô, đừng tự tháo.',
          },
        ],
      },
      {
        id: 'dien-g2-l4-s4',
        hazard: 'muốn tự mở máy tính lớp',
        prompt:
          'Giờ học máy tính chưa bắt đầu. Bé Gấu muốn tự bật máy. Cô chưa cho phép. Bé làm gì?',
        safeText: 'Ngồi chờ; chỉ bật khi cô hướng dẫn.',
        safeFeedback: 'Hay! Bé chờ cô hướng dẫn mới dùng máy.',
        unsafeChoices: [
          {
            text: 'Tự bật máy trước cho nhanh.',
            feedback: 'Chờ cô cho phép và hướng dẫn.',
          },
          {
            text: 'Cắm thêm ổ kéo dưới bàn một mình.',
            feedback: 'Không tự cắm ổ kéo. Nhờ cô.',
          },
        ],
      },
      {
        id: 'dien-g2-l4-s5',
        hazard: 'dây sạc máy rối muốn tự gỡ',
        prompt:
          'Dây sạc máy tính rối dưới chân. Bé Gấu muốn gỡ cho thẳng. Mẹ ngồi cạnh. Bé làm gì?',
        safeText: 'Không kéo rối dây; nhờ Mẹ Gấu gỡ và sắp xếp giúp.',
        safeFeedback: 'Đúng rồi! Bé nhờ Mẹ Gấu gỡ dây rối.',
        unsafeChoices: [
          {
            text: 'Giật mạnh hai đầu dây cho hết rối.',
            feedback: 'Giật dây dễ hỏng và nguy hiểm. Nhờ mẹ.',
          },
          {
            text: 'Cắn đầu dây cho đứt phần rối.',
            feedback: 'Không làm hỏng dây. Gọi mẹ giúp.',
          },
        ],
      },
    ],
  },

  {
    id: 'dien-g2-l5',
    moduleId: 'dien',
    gradeBand: '2',
    title: '“5 không” nhớ nhanh',
    objective:
      'Ôn ý EVN: không chạm dây đứt/hở; không chọc ổ; không tay ướt; không dùng/rút khi chưa phép; không lấy điện làm đồ chơi.',
    teacherPrompt:
      'Ôn nhanh 5 ý (paraphrase EVN). Mỗi tình huống chọn hành vi đúng: tránh + báo người lớn. Không bắt trẻ nhớ số tổng đài.',
    situations: [
      {
        id: 'dien-g2-l5-s1',
        hazard: 'thấy dây trông đứt/hở',
        prompt:
          'Bé Gấu thấy một đoạn dây trông hở lõi, khác dây bình thường. Bố ở nhà. Bé nhớ “không chạm dây đứt/hở”. Bé làm gì?',
        safeText: 'Đứng thật xa, không chạm, và gọi bố ngay.',
        safeFeedback: 'Giỏi! Không chạm dây đứt/hở — gọi người lớn.',
        unsafeChoices: [
          {
            text: 'Nhặt dây lên xem chỗ hở.',
            feedback: 'Không chạm. Gọi bố ngay.',
          },
          {
            text: 'Lấy băng keo tự dán chỗ hở.',
            feedback: 'Bé không tự sửa dây. Báo bố.',
          },
        ],
      },
      {
        id: 'dien-g2-l5-s2',
        hazard: 'muốn chọc ổ bằng que',
        prompt:
          'Bé Gấu nhớ “không chọc ổ”. Bạn đưa que và rủ chọc lỗ ổ. Mẹ ở gần. Bé làm gì?',
        safeText: 'Nói không chọc ổ, bỏ que ra, và gọi Mẹ Gấu.',
        safeFeedback: 'Đúng! Không chọc ổ — Bé gọi Mẹ Gấu.',
        unsafeChoices: [
          {
            text: 'Chọc một cái cho bạn xem.',
            feedback: 'Không chọc ổ dù một cái. Gọi mẹ.',
          },
          {
            text: 'Cầm que đứng sát ổ mà không chọc.',
            feedback: 'Bỏ que, đứng xa ổ, gọi Mẹ Gấu.',
          },
        ],
      },
      {
        id: 'dien-g2-l5-s3',
        hazard: 'tay ướt gần công tắc',
        prompt:
          'Tay Bé Gấu còn ướt sau khi rửa. Bé nhớ “không gần điện khi tay ướt”. Cô ở cửa lớp. Bé làm gì?',
        safeText: 'Lau khô tay; nhờ cô bật đèn/quạt nếu cần.',
        safeFeedback: 'Tốt! Tay khô và nhờ người lớn.',
        unsafeChoices: [
          {
            text: 'Bật công tắc ngay bằng tay ướt.',
            feedback: 'Lau khô và nhờ cô giúp.',
          },
          {
            text: 'Chạy thẳng tới ổ tường khi tay ướt.',
            feedback: 'Tay ướt thì đứng xa ổ. Lau khô trước.',
          },
        ],
      },
      {
        id: 'dien-g2-l5-s4',
        hazard: 'muốn rút thiết bị khi chưa được phép',
        prompt:
          'Bé Gấu nhớ “không dùng/rút thiết bị khi chưa được phép”. Bé muốn rút sạc máy của bố. Bố đang phòng bên. Bé làm gì?',
        safeText: 'Không rút; gọi bố và hỏi bố giúp.',
        safeFeedback: 'Hay! Bé xin phép và nhờ bố.',
        unsafeChoices: [
          {
            text: 'Rút sạc rồi mới nói bố.',
            feedback: 'Hỏi bố trước, đừng tự rút.',
          },
          {
            text: 'Giật dây sạc cho nhanh.',
            feedback: 'Không giật dây. Gọi bố.',
          },
        ],
      },
      {
        id: 'dien-g2-l5-s5',
        hazard: 'lấy dây điện làm đồ chơi',
        prompt:
          'Bạn muốn lấy dây kéo dài làm “dây kéo thi”. Bé Gấu nhớ “không lấy điện làm đồ chơi”. Có người lớn gần sân. Bé làm gì?',
        safeText: 'Từ chối, không lấy dây chơi, và tìm người lớn.',
        safeFeedback: 'Đúng rồi! Dây điện không phải đồ chơi — Bé gọi người lớn.',
        unsafeChoices: [
          {
            text: 'Cùng bạn kéo dây điện thi chạy.',
            feedback: 'Không dùng dây điện để chơi. Gọi người lớn.',
          },
          {
            text: 'Cho bạn mượn dây nhưng mình không chơi.',
            feedback: 'Đừng để ai lấy dây chơi. Nhắc dừng và gọi người lớn.',
          },
        ],
      },
    ],
  },
];
