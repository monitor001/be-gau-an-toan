// Draft — module khac-chay + khac-nga (A+B). Chưa duyệt chuyên gia.
// Ranh giới: không tự chữa cháy; không quay lại nhà cháy; 114 chỉ qua người lớn;
// không trèo lan can; không hù dọa / máu.

export const LESSONS = [
  // ——— Module A: Phòng cháy & nhiệt nhà bếp ———
  {
    id: 'khac-chay-l1',
    moduleId: 'khac-chay',
    gradeBand: '1-2',
    title: 'Nóng và xa',
    objective: 'Nhận đồ nóng (nồi, phích, bếp); chọn đứng xa / nhờ người lớn; không kéo cán nồi.',
    teacherPrompt: 'Ở nhà em, những đồ nào đang nóng mà em cần đứng xa và nhờ người lớn?',
    situations: [
      {
        id: 'khac-chay-l1-s1',
        hazard: 'nồi đang sôi trên bếp',
        prompt: 'Bé Gấu đứng cạnh Mẹ Gấu trong bếp, thấy nồi đang sôi và cán nồi thò ra ngoài. Bé Gấu làm gì?',
        safeText: 'Đứng xa bếp, không kéo cán nồi, ở cạnh Mẹ Gấu.',
        safeFeedback: 'Tốt! Đứng xa chỗ nóng và ở cùng người lớn nhé.',
        unsafeChoices: [
          { text: 'Kéo cán nồi cho ngay ngắn.', feedback: 'Không kéo cán nồi; để người lớn chỉnh giúp.' },
          { text: 'Đứng sát bếp để xem nước sôi.', feedback: 'Chỗ nấu nóng; đứng xa và cùng Mẹ Gấu quan sát.' },
        ],
      },
      {
        id: 'khac-chay-l1-s2',
        hazard: 'phích nước vừa đun',
        prompt: 'Trên bàn có phích nước vừa đun xong, hơi nóng còn bốc lên. Bé Gấu muốn lấy nước. Bé Gấu làm gì?',
        safeText: 'Nhờ người lớn rót giúp và đứng cách xa phích.',
        safeFeedback: 'Đúng rồi! Người lớn rót, Bé Gấu đứng xa chỗ nóng.',
        unsafeChoices: [
          { text: 'Tự mở nắp phích để xem.', feedback: 'Phích nóng; không tự mở, nhờ người lớn.' },
          { text: 'Cầm phích bằng hai tay mang đi.', feedback: 'Không bê phích nóng; để người lớn làm.' },
        ],
      },
      {
        id: 'khac-chay-l1-s3',
        hazard: 'bếp vừa tắt nhưng vẫn nóng',
        prompt: 'Mẹ vừa tắt bếp, mặt bếp vẫn còn ấm. Bé Gấu muốn chạm tay thử. Bé Gấu làm gì?',
        safeText: 'Không chạm; hỏi Mẹ Gấu và đứng xa cho đến khi mẹ nói đã nguội.',
        safeFeedback: 'Giỏi! Không chạm chỗ còn nóng; hỏi người lớn trước.',
        unsafeChoices: [
          { text: 'Chạm nhanh một chút để thử.', feedback: 'Không thử bằng tay; chờ Mẹ Gấu xác nhận.' },
          { text: 'Đặt đồ chơi lên mặt bếp.', feedback: 'Không đặt gì lên bếp; để khu vực đó trống.' },
        ],
      },
      {
        id: 'khac-chay-l1-s4',
        hazard: 'cốc trà nóng trên bàn thấp',
        prompt: 'Ông để cốc trà nóng trên bàn thấp gần chỗ Bé Gấu chơi. Bé Gấu làm gì?',
        safeText: 'Không chạm cốc; báo ông hoặc mẹ để họ để chỗ an toàn hơn.',
        safeFeedback: 'Tốt! Báo người lớn, không tự sờ đồ nóng.',
        unsafeChoices: [
          { text: 'Nhấc cốc sang chỗ khác một mình.', feedback: 'Cốc nóng dễ đổ; nhờ người lớn chuyển.' },
          { text: 'Thổi vào cốc rồi uống thử.', feedback: 'Không uống đồ nóng của người lớn khi chưa được phép.' },
        ],
      },
      {
        id: 'khac-chay-l1-s5',
        hazard: 'Mẹ Gấu đang chiên đồ ăn',
        prompt: 'Mẹ Gấu đang chiên đồ trên chảo, dầu nóng sủi. Bé Gấu muốn đứng gần xem. Bé Gấu làm gì?',
        safeText: 'Đứng cách xa chỗ chiên, xem từ chỗ mẹ chỉ.',
        safeFeedback: 'Đúng! Đứng xa khi người lớn đang nấu nóng.',
        unsafeChoices: [
          { text: 'Đứng sát chảo để nhìn rõ.', feedback: 'Chỗ chiên nóng; đứng xa theo Mẹ Gấu chỉ.' },
          { text: 'Với tay lấy miếng ăn trong chảo.', feedback: 'Không với tay vào chỗ đang nấu; chờ Mẹ Gấu đưa.' },
        ],
      },
    ],
  },

  {
    id: 'khac-chay-l2',
    moduleId: 'khac-chay',
    gradeBand: '1-3',
    title: 'Không nghịch lửa',
    objective: 'Thấy diêm/bật lửa → không cầm; báo người lớn cất; không “thử lửa”.',
    teacherPrompt: 'Nếu em thấy diêm hoặc bật lửa để lung tung, em sẽ nói với ai?',
    situations: [
      {
        id: 'khac-chay-l2-s1',
        hazard: 'hộp diêm trên bàn thấp',
        prompt: 'Bé Gấu thấy hộp diêm để trên bàn thấp trong phòng khách. Không có người lớn trong tầm mắt. Bé Gấu làm gì?',
        safeText: 'Không cầm; đi tìm người lớn tin cậy để họ cất.',
        safeFeedback: 'Tốt! Không nghịch diêm; báo người lớn cất giúp.',
        unsafeChoices: [
          { text: 'Mở hộp xem thử vài que.', feedback: 'Không mở diêm; tìm người lớn ngay.' },
          { text: 'Cất diêm vào túi đồ chơi.', feedback: 'Không tự cất vào chỗ chơi; nhờ người lớn.' },
        ],
      },
      {
        id: 'khac-chay-l2-s2',
        hazard: 'bật lửa cạnh bếp',
        prompt: 'Trong bếp có bật lửa để cạnh bếp. Bạn muốn “bật thử một cái”. Bé Gấu làm gì?',
        safeText: 'Nhắc bạn không bật; cùng gọi người lớn đến cất.',
        safeFeedback: 'Giỏi! Không thử lửa; gọi người lớn giúp.',
        unsafeChoices: [
          { text: 'Bật một cái rồi tắt ngay.', feedback: 'Không thử bật lửa; để người lớn quản lý.' },
          { text: 'Giấu bật lửa dưới gối cho vui.', feedback: 'Không giấu; đưa việc cất cho người lớn.' },
        ],
      },
      {
        id: 'khac-chay-l2-s3',
        hazard: 'nến sinh nhật chưa được phép',
        prompt: 'Trên bàn có bánh sinh nhật và que diêm. Người lớn chưa về bàn. Bạn rủ thắp nến trước. Bé Gấu làm gì?',
        safeText: 'Chờ người lớn về rồi nhờ họ thắp; không tự dùng diêm.',
        safeFeedback: 'Đúng! Việc có lửa chỉ người lớn làm.',
        unsafeChoices: [
          { text: 'Tự thắp nến cho nhanh.', feedback: 'Không tự thắp; chờ người lớn.' },
          { text: 'Cho bạn thắp còn mình đứng xem.', feedback: 'Cũng không để bạn tự thắp; cùng chờ người lớn.' },
        ],
      },
      {
        id: 'khac-chay-l2-s4',
        hazard: 'tro nhang còn ấm',
        prompt: 'Góc thờ có lư hương, tro còn ấm. Bé Gấu tò mò muốn sờ. Bé Gấu làm gì?',
        safeText: 'Không sờ; đứng xa và hỏi người lớn nếu cần biết gì.',
        safeFeedback: 'Tốt! Chỗ thờ có thể còn nóng; hỏi người lớn, không sờ.',
        unsafeChoices: [
          { text: 'Chọc que vào tro cho vui.', feedback: 'Không nghịch chỗ thờ/tro; để người lớn chăm.' },
          { text: 'Thổi mạnh vào lư hương.', feedback: 'Không thổi; đứng xa và nhờ người lớn.' },
        ],
      },
      {
        id: 'khac-chay-l2-s5',
        hazard: 'bạn định “thử lửa” ngoài sân',
        prompt: 'Ngoài sân nhỏ, bạn lấy được que diêm và muốn thử lửa. Bé Gấu làm gì?',
        safeText: 'Nhắc dừng lại và gọi ngay người lớn tin cậy.',
        safeFeedback: 'Đúng rồi! Không thử lửa; gọi người lớn.',
        unsafeChoices: [
          { text: 'Cùng thử một que rồi thôi.', feedback: 'Không thử dù chỉ một que; gọi người lớn.' },
          { text: 'Quay lưng bỏ đi không nói gì.', feedback: 'Nên nhắc bạn dừng và gọi người lớn giúp.' },
        ],
      },
    ],
  },

  {
    id: 'khac-chay-l3',
    moduleId: 'khac-chay',
    gradeBand: '2-4',
    title: 'Khi thấy khói',
    objective: 'Hô “Cháy!” khi thấy khói/lửa; báo người lớn gần nhất; đi theo lối thoát đã tập; không trốn gầm giường/tủ.',
    teacherPrompt: 'Khi thấy khói hoặc lửa, em hô gì trước rồi làm theo ai?',
    situations: [
      {
        id: 'khac-chay-l3-s1',
        hazard: 'ngửi thấy mùi khói nhẹ trong nhà',
        prompt: 'Bé Gấu đang ở phòng ngủ với bà, ngửi thấy mùi khói nhẹ từ phía bếp. Bé Gấu làm gì?',
        safeText: 'Hô to “Cháy!” rồi nói với bà và làm theo bà dẫn ra ngoài.',
        safeFeedback: 'Tốt! Hô “Cháy!”, báo người lớn và làm theo họ.',
        unsafeChoices: [
          { text: 'Tự chạy vào bếp xem có cháy không.', feedback: 'Không tự vào chỗ nghi ngờ; hô “Cháy!” và báo bà.' },
          { text: 'Im lặng nằm lại cho hết mùi.', feedback: 'Hô “Cháy!” và báo người lớn ngay khi thấy/ngửi khói.' },
        ],
      },
      {
        id: 'khac-chay-l3-s2',
        hazard: 'thấy khói mỏng ở hành lang',
        prompt: 'Bé Gấu và Mẹ Gấu đang ở phòng khách, thấy khói mỏng ở hành lang. Bé Gấu làm gì?',
        safeText: 'Hô “Cháy!”, nắm tay Mẹ Gấu, đi theo lối Mẹ Gấu chọn.',
        safeFeedback: 'Đúng! Hô to, ở với người lớn và đi theo lối họ chọn.',
        unsafeChoices: [
          { text: 'Chạy một mình xuống cầu thang xem.', feedback: 'Không tách khỏi người lớn; hô “Cháy!” và đi cùng họ.' },
          { text: 'Lấy nước tưới vào chỗ có khói.', feedback: 'Không tự chữa cháy; hô “Cháy!” và theo người lớn.' },
        ],
      },
      {
        id: 'khac-chay-l3-s3',
        hazard: 'muốn trốn dưới gầm giường khi có báo cháy',
        prompt: 'Trong buổi tập thoát nạn ở nhà với bố, chuông tập kêu. Bạn rủ chui xuống gầm giường. Bé Gấu làm gì?',
        safeText: 'Không trốn; đi theo lối thoát đã tập cùng bố.',
        safeFeedback: 'Giỏi! Không trốn gầm giường; theo lối đã tập với người lớn.',
        unsafeChoices: [
          { text: 'Chui xuống gầm giường cho “an toàn”.', feedback: 'Không trốn dưới giường/tủ; theo lối thoát với người lớn.' },
          { text: 'Nấp trong tủ quần áo.', feedback: 'Không nấp trong tủ; ra theo lối người lớn chỉ.' },
        ],
      },
      {
        id: 'khac-chay-l3-s4',
        hazard: 'tập thoát nạn ở trường với cô',
        prompt: 'Ở lớp, chuông tập cháy kêu. Cô bảo xếp hàng ra sân. Bạn rủ chui xuống gầm bàn. Bé Gấu làm gì?',
        safeText: 'Hô “Cháy!” nếu cần, nắm tay/đi theo cô ra sân theo lối đã tập — không trốn gầm bàn.',
        safeFeedback: 'Giỏi! Theo cô ra ngoài; không trốn dưới bàn/tủ.',
        unsafeChoices: [
          { text: 'Chui xuống gầm bàn cho “an toàn”.', feedback: 'Không trốn; đi theo cô ra sân.' },
          { text: 'Chạy một mình về phía cổng khác.', feedback: 'Đi cùng cô theo lối lớp đã tập.' },
        ],
      },
      {
        id: 'khac-chay-l3-s5',
        hazard: 'thấy khói và muốn “tự xử”',
        prompt: 'Bé Gấu thấy khói nhẹ gần góc bếp, trên kệ có bình chữa cháy. Bố đang ở phòng bên. Bé Gấu làm gì?',
        safeText: 'Gọi bố ngay; không tự dùng bình chữa cháy.',
        safeFeedback: 'Đúng! Báo người lớn; trẻ không tự chữa cháy.',
        unsafeChoices: [
          { text: 'Tự cầm bình chữa cháy xịt thử.', feedback: 'Không tự chữa cháy; gọi người lớn.' },
          { text: 'Đập cửa sổ cho khói thoát.', feedback: 'Không tự xử lý hiện trường; tìm người lớn.' },
        ],
      },
    ],
  },

  {
    id: 'khac-chay-l4',
    moduleId: 'khac-chay',
    gradeBand: '3-5',
    title: 'Sau khi ra ngoài',
    objective: 'Không quay lại nhà; tập trung điểm hẹn với người lớn; nhắc người lớn gọi 114 (cứu hỏa) hoặc 111 (bảo vệ trẻ em) nếu cần — trẻ không tự gọi.',
    teacherPrompt: 'Điểm hẹn an toàn ngoài nhà của gia đình em là đâu? Ai sẽ gọi 114 hoặc 111 khi cần?',
    situations: [
      {
        id: 'khac-chay-l4-s1',
        hazard: 'muốn quay lại lấy đồ khi đã ra ngoài',
        prompt: 'Gia đình đã ra ngoài vì có khói trong nhà. Bé Gấu nhớ quên cặp sách. Bé Gấu làm gì?',
        safeText: 'Ở điểm hẹn với người lớn; không quay lại nhà.',
        safeFeedback: 'Đúng! Không quay lại nhà khi đã ra ngoài; ở với người lớn.',
        unsafeChoices: [
          { text: 'Chạy vào lấy cặp thật nhanh.', feedback: 'Không quay lại nhà; đồ có thể lấy sau khi người lớn nói an toàn.' },
          { text: 'Nhờ bạn vào lấy hộ.', feedback: 'Không để ai quay lại; mọi người ở điểm hẹn.' },
        ],
      },
      {
        id: 'khac-chay-l4-s2',
        hazard: 'tách khỏi điểm hẹn',
        prompt: 'Sau khi ra sân chung cư, mẹ chỉ điểm hẹn dưới gốc cây. Bạn rủ sang cổng bên kia xem. Bé Gấu làm gì?',
        safeText: 'Ở lại điểm hẹn với mẹ hoặc người lớn đang trông.',
        safeFeedback: 'Tốt! Tập trung điểm hẹn, không tách khỏi người lớn.',
        unsafeChoices: [
          { text: 'Theo bạn sang cổng khác.', feedback: 'Ở điểm hẹn đã hẹn với người lớn.' },
          { text: 'Quay lên cầu thang xem nhà thế nào.', feedback: 'Không quay lại phía nhà; ở ngoài với người lớn.' },
        ],
      },
      {
        id: 'khac-chay-l4-s3',
        hazard: 'nhắc người lớn gọi 114 hoặc 111',
        prompt: 'Đã ra ngoài, vẫn còn khói từ phía căn hộ. Mẹ Gấu đang gọi hàng xóm. Bé Gấu có thể làm gì?',
        safeText: 'Nhắc mẹ: “Mẹ ơi, có cần gọi 114 không?”, rồi ở cạnh Mẹ Gấu.',
        safeFeedback: 'Giỏi! Nhắc người lớn về 114; không tự gọi.',
        unsafeChoices: [
          { text: 'Tự lấy điện thoại gọi 114 một mình.', feedback: 'Gọi 114 qua người lớn; Bé Gấu ở cạnh và nhắc họ.' },
          { text: 'Chạy vào nhà xem cháy lớn chưa.', feedback: 'Không quay lại; ở ngoài với người lớn.' },
        ],
      },
      {
        id: 'khac-chay-l4-s4',
        hazard: 'thấy thú cưng còn trong nhà',
        prompt: 'Đã ra ngoài, Bé Gấu nhớ mèo còn trong nhà và muốn vào đón. Bé Gấu làm gì?',
        safeText: 'Nói với người lớn; không tự quay lại nhà.',
        safeFeedback: 'Đúng! Báo người lớn; trẻ không quay lại nhà.',
        unsafeChoices: [
          { text: 'Lẻn vào đón mèo thật nhanh.', feedback: 'Không quay lại nhà; để người lớn / lực lượng cứu hộ quyết định.' },
          { text: 'Mở cửa cho mèo rồi đứng chờ trong nhà.', feedback: 'Ở ngoài điểm hẹn; không vào lại.' },
        ],
      },
      {
        id: 'khac-chay-l4-s5',
        hazard: 'nhắc số 111 qua người lớn (không gọi đùa)',
        prompt: 'Ở lớp, cô nhắc các số cần nhớ: 114 cứu hỏa và 111 bảo vệ trẻ em. Bạn rủ gọi 111 “cho vui”. Bé Gấu làm gì?',
        safeText: 'Nhắc bạn: chỉ người lớn mới gọi 111 hoặc 114 khi thật sự cần; mình nhớ số để nhắc bố mẹ/cô.',
        safeFeedback: 'Tốt! Nhớ số để nhắc người lớn; không gọi đùa.',
        unsafeChoices: [
          { text: 'Gọi thử 111 rồi cúp máy.', feedback: 'Không gọi đùa 111; để người lớn gọi khi cần.' },
          { text: 'Gọi 114 nhiều lần cho vui.', feedback: 'Không đùa với số khẩn cấp.' },
        ],
      },
    ],
  },

  {
    id: 'khac-chay-l5',
    moduleId: 'khac-chay',
    gradeBand: '3-5',
    title: 'Giúp việc nhà an toàn',
    objective: 'Giúp việc nhẹ chỉ khi người lớn giao; không bê canh nóng một mình.',
    teacherPrompt: 'Việc nhà nào người lớn cho phép em làm một mình, việc nào cần đứng cạnh họ?',
    situations: [
      {
        id: 'khac-chay-l5-s1',
        hazard: 'bê nồi canh nóng',
        prompt: 'Mẹ nhờ Bé Gấu “giúp bê nồi canh” từ bếp ra bàn. Nồi còn bốc hơi. Bé Gấu làm gì?',
        safeText: 'Nói mình chưa bê đồ nóng được; nhờ Mẹ Gấu bê hoặc đợi nguội theo Mẹ Gấu.',
        safeFeedback: 'Đúng! Không bê canh nóng một mình.',
        unsafeChoices: [
          { text: 'Bê nồi bằng khăn thật nhanh.', feedback: 'Đồ nóng để người lớn bê; chọn việc nhẹ hơn.' },
          { text: 'Kéo nồi trên mặt bàn tới chỗ ngồi.', feedback: 'Không kéo nồi nóng; để mẹ chuyển.' },
        ],
      },
      {
        id: 'khac-chay-l5-s2',
        hazard: 'mang đĩa đã nguội',
        prompt: 'Bố giao Bé Gấu mang đĩa nguội từ bàn vào bồn. Bé Gấu làm gì?',
        safeText: 'Mang đĩa nguội theo hướng dẫn bố, đi chậm, không chạy.',
        safeFeedback: 'Tốt! Việc nhẹ đã được giao thì làm cẩn thận cùng người lớn.',
        unsafeChoices: [
          { text: 'Xếp thêm bát canh nóng lên chồng đĩa.', feedback: 'Chỉ làm đúng việc được giao; không thêm đồ nóng.' },
          { text: 'Chạy cho nhanh để xong sớm.', feedback: 'Đi chậm; không chạy khi đang cầm đồ.' },
        ],
      },
      {
        id: 'khac-chay-l5-s3',
        hazard: 'lấy đồ trong lò vừa tắt',
        prompt: 'Lò nướng vừa tắt, bánh còn trong lò. Bé Gấu muốn lấy bánh ra giúp mẹ. Bé Gấu làm gì?',
        safeText: 'Không mở lò; chờ Mẹ Gấu lấy bằng dụng cụ phù hợp.',
        safeFeedback: 'Giỏi! Chỗ lò còn nóng; để người lớn lấy.',
        unsafeChoices: [
          { text: 'Mở cửa lò và lấy bằng tay.', feedback: 'Không chạm vào lò/bánh nóng; nhờ Mẹ Gấu.' },
          { text: 'Dùng khăn mỏng kéo khay ra.', feedback: 'Để người lớn dùng dụng cụ đúng; không tự lấy.' },
        ],
      },
      {
        id: 'khac-chay-l5-s4',
        hazard: 'rót nước sôi pha mì',
        prompt: 'Bé Gấu muốn tự pha mì bằng nước sôi trong ấm. Bé Gấu làm gì?',
        safeText: 'Nhờ người lớn rót nước sôi; mình chuẩn bị tô/đũa ở chỗ an toàn.',
        safeFeedback: 'Đúng! Nước sôi do người lớn rót.',
        unsafeChoices: [
          { text: 'Tự nghiêng ấm nước sôi vào tô.', feedback: 'Không tự rót nước sôi; nhờ người lớn.' },
          { text: 'Bế ấm đi ra bàn ăn.', feedback: 'Không bê ấm nóng; để người lớn mang.' },
        ],
      },
      {
        id: 'khac-chay-l5-s5',
        hazard: 'lau gần bếp đang nấu',
        prompt: 'Bé Gấu muốn giúp lau sàn gần chỗ Mẹ Gấu đang nấu. Bé Gấu làm gì?',
        safeText: 'Hỏi mẹ chỗ được lau; tránh sát bếp đang nóng.',
        safeFeedback: 'Tốt! Chỉ giúp ở chỗ người lớn cho phép, xa nguồn nóng.',
        unsafeChoices: [
          { text: 'Lau sát chân bếp cho sạch nhanh.', feedback: 'Tránh sát bếp đang nấu; hỏi Mẹ Gấu chỗ an toàn.' },
          { text: 'Vói tay qua mặt bếp để lấy khăn.', feedback: 'Không với tay qua chỗ nóng; đi vòng theo Mẹ Gấu chỉ.' },
        ],
      },
    ],
  },

  // ——— Module B: Té ngã — ban công / cửa sổ / cầu thang ———
  {
    id: 'khac-nga-l1',
    moduleId: 'khac-nga',
    gradeBand: '1-2',
    title: 'Lan can không phải chỗ ngồi',
    objective: 'Không ngồi/trèo lan can ban công; chơi trong nhà khi cửa ban công mở chỉ cùng người lớn.',
    teacherPrompt: 'Khi cửa ban công mở, em chơi ở đâu và cần ai ở cạnh?',
    situations: [
      {
        id: 'khac-nga-l1-s1',
        hazard: 'muốn ngồi lên lan can ban công',
        prompt: 'Cửa ban công đang mở, Bé Gấu muốn ngồi lên lan can cho “cao”. Mẹ đứng gần. Bé Gấu làm gì?',
        safeText: 'Không ngồi lan can; đứng trong nhà cạnh Mẹ Gấu.',
        safeFeedback: 'Tốt! Lan can không phải chỗ ngồi.',
        unsafeChoices: [
          { text: 'Ngồi lên lan can một chút.', feedback: 'Không ngồi lan can; chơi trong nhà với người lớn.' },
          { text: 'Trèo chân lên thanh ngang lan can.', feedback: 'Không trèo lan can; ở sàn nhà với mẹ.' },
        ],
      },
      {
        id: 'khac-nga-l1-s2',
        hazard: 'đồ chơi rơi gần mép ban công',
        prompt: 'Bóng lăn sát mép ban công phía trong lan can. Bé Gấu làm gì?',
        safeText: 'Không nhoài người; nhờ Mẹ Gấu lấy giúp.',
        safeFeedback: 'Đúng! Không nhoài ra mép; nhờ người lớn.',
        unsafeChoices: [
          { text: 'Nhoài người qua lan can lấy bóng.', feedback: 'Không nhoài qua lan can; gọi Mẹ Gấu.' },
          { text: 'Trèo lên lan can để với bóng.', feedback: 'Không trèo; để người lớn lấy.' },
        ],
      },
      {
        id: 'khac-nga-l1-s3',
        hazard: 'bạn ngồi trên lan can',
        prompt: 'Bạn ngồi trên lan can ban công nhà bạn. Bé Gấu sang chơi cùng người lớn. Bé Gấu làm gì?',
        safeText: 'Nhắc bạn xuống; gọi người lớn đang ở gần.',
        safeFeedback: 'Giỏi! Nhắc bạn và gọi người lớn, không trèo theo.',
        unsafeChoices: [
          { text: 'Ngồi cạnh bạn cho vui.', feedback: 'Không ngồi lan can; gọi người lớn.' },
          { text: 'Đẩy nhẹ bạn cho “thử thách”.', feedback: 'Không đùa trên lan can; gọi người lớn ngay.' },
        ],
      },
      {
        id: 'khac-nga-l1-s4',
        hazard: 'cửa ban công mở khi chơi một mình trong phòng',
        prompt: 'Bé Gấu đang chơi trong phòng, cửa ban công mở, người lớn ra ngoài một lát. Bé Gấu làm gì?',
        safeText: 'Chơi xa cửa ban công; gọi người lớn về đóng cửa hoặc đứng cạnh.',
        safeFeedback: 'Tốt! Không lại gần cửa mở một mình; gọi người lớn.',
        unsafeChoices: [
          { text: 'Ra sát lan can nhìn xuống.', feedback: 'Không ra sát lan can một mình; gọi người lớn.' },
          { text: 'Đóng cửa bằng cách leo lên ghế sát cửa.', feedback: 'Không kê ghế sát cửa; gọi người lớn giúp.' },
        ],
      },
      {
        id: 'khac-nga-l1-s5',
        hazard: 'chụp ảnh trên lan can',
        prompt: 'Có người lớn muốn chụp ảnh Bé Gấu “đứng trên lan can cho đẹp”. Bé Gấu làm gì?',
        safeText: 'Từ chối đứng trên lan can; nhờ chụp ở chỗ an toàn trong nhà.',
        safeFeedback: 'Đúng! Không đứng/trèo lan can dù để chụp ảnh.',
        unsafeChoices: [
          { text: 'Đứng lên lan can một chân.', feedback: 'Không đứng trên lan can; chọn chỗ an toàn.' },
          { text: 'Ngồi trên lan can cười với máy ảnh.', feedback: 'Lan can không phải chỗ ngồi; ở trong với người lớn.' },
        ],
      },
    ],
  },

  {
    id: 'khac-nga-l2',
    moduleId: 'khac-nga',
    gradeBand: '1-3',
    title: 'Cửa sổ và ghế',
    objective: 'Không kê ghế sát cửa sổ để nhìn xuống; báo người lớn nếu cửa sổ mở thấp.',
    teacherPrompt: 'Cửa sổ nhà em khi mở thấp thì em cần làm gì?',
    situations: [
      {
        id: 'khac-nga-l2-s1',
        hazard: 'kê ghế sát cửa sổ để nhìn xuống',
        prompt: 'Bé Gấu muốn nhìn đường dưới cửa sổ tầng cao. Có ghế gần đó. Bé Gấu làm gì?',
        safeText: 'Không kê ghế sát cửa sổ; nhờ người lớn nếu muốn nhìn.',
        safeFeedback: 'Tốt! Không kê ghế sát mép cửa sổ.',
        unsafeChoices: [
          { text: 'Kê ghế sát cửa sổ rồi đứng lên.', feedback: 'Không kê/đứng ghế sát cửa sổ; nhờ người lớn.' },
          { text: 'Quỳ trên ghế tựa cửa sổ nhìn xuống.', feedback: 'Không leo gần cửa sổ; ở chỗ an toàn với người lớn.' },
        ],
      },
      {
        id: 'khac-nga-l2-s2',
        hazard: 'cửa sổ mở thấp',
        prompt: 'Cửa sổ phòng mở thấp, gần sàn. Không có người lớn trong phòng. Bé Gấu làm gì?',
        safeText: 'Không lại gần; đi gọi người lớn để họ chỉnh cửa.',
        safeFeedback: 'Đúng! Báo người lớn khi cửa sổ mở thấp.',
        unsafeChoices: [
          { text: 'Tựa người ra ngoài để hóng gió.', feedback: 'Không nhoài cửa sổ; gọi người lớn.' },
          { text: 'Tự kéo cửa sổ bằng cách leo lên bệ cửa.', feedback: 'Không leo bệ cửa; nhờ người lớn.' },
        ],
      },
      {
        id: 'khac-nga-l2-s3',
        hazard: 'đồ chơi trên bệ cửa sổ',
        prompt: 'Xe đồ chơi để trên bệ cửa sổ đang mở. Bé Gấu muốn lấy. Bé Gấu làm gì?',
        safeText: 'Không leo lên bệ cửa; nhờ người lớn lấy giúp.',
        safeFeedback: 'Giỏi! Không leo bệ cửa sổ; nhờ người lớn.',
        unsafeChoices: [
          { text: 'Trèo lên bệ cửa lấy xe.', feedback: 'Không trèo bệ cửa; gọi người lớn.' },
          { text: 'Kéo ghế lại sát cửa để với lấy.', feedback: 'Không kê ghế sát cửa sổ.' },
        ],
      },
      {
        id: 'khac-nga-l2-s4',
        hazard: 'lưới cửa sổ trông yếu',
        prompt: 'Bé Gấu thấy lưới/chấn song cửa sổ bị lỏng. Bé Gấu làm gì?',
        safeText: 'Không đẩy/thử lưới; báo ngay người lớn.',
        safeFeedback: 'Tốt! Báo người lớn kiểm tra, không tự thử.',
        unsafeChoices: [
          { text: 'Đẩy lưới xem còn chắc không.', feedback: 'Không thử đẩy; báo người lớn.' },
          { text: 'Chui đầu ra ngoài qua chỗ lỏng.', feedback: 'Không thò người ra cửa sổ; gọi người lớn.' },
        ],
      },
      {
        id: 'khac-nga-l2-s5',
        hazard: 'bạn đứng trên bàn gần cửa sổ',
        prompt: 'Bạn kéo bàn sát cửa sổ rồi đứng lên “cho cao”. Bé Gấu làm gì?',
        safeText: 'Nhắc bạn xuống; gọi người lớn.',
        safeFeedback: 'Đúng! Không đứng trên bàn sát cửa sổ; gọi người lớn.',
        unsafeChoices: [
          { text: 'Cũng leo lên bàn cạnh bạn.', feedback: 'Không leo theo; nhắc dừng và gọi người lớn.' },
          { text: 'Đẩy bàn sát hơn cho dễ nhìn.', feedback: 'Không kê đồ sát cửa sổ; gọi người lớn.' },
        ],
      },
    ],
  },

  {
    id: 'khac-nga-l3',
    moduleId: 'khac-nga',
    gradeBand: '2-4',
    title: 'Cầu thang an toàn',
    objective: 'Đi từng bậc, nắm tay vịn; không xô đẩy; trẻ nhỏ chờ người lớn.',
    teacherPrompt: 'Khi đi cầu thang ở nhà hoặc trường, em nắm gì và đi thế nào?',
    situations: [
      {
        id: 'khac-nga-l3-s1',
        hazard: 'chạy xuống cầu thang',
        prompt: 'Bé Gấu vội xuống cầu thang nhà, bạn phía sau cũng chạy. Bé Gấu làm gì?',
        safeText: 'Đi từng bậc, nắm tay vịn; nhắc bạn không chạy; gọi người lớn nếu bạn vẫn chạy.',
        safeFeedback: 'Tốt! Đi chậm, nắm tay vịn và nhờ người lớn khi bạn vẫn chạy.',
        unsafeChoices: [
          { text: 'Chạy nhảy từng bậc cho nhanh.', feedback: 'Không chạy trên cầu thang; đi từng bậc và gọi người lớn nếu cần.' },
          { text: 'Trượt tay vịn từ trên xuống.', feedback: 'Không trượt tay vịn; nắm và bước từng bậc.' },
        ],
      },
      {
        id: 'khac-nga-l3-s2',
        hazard: 'xô đẩy trên cầu thang',
        prompt: 'Trên cầu thang chung cư, bạn đùa xô nhẹ phía trước. Bé Gấu làm gì?',
        safeText: 'Nhắc không xô đẩy; nắm tay vịn và báo người lớn nếu cần.',
        safeFeedback: 'Đúng! Không xô đẩy trên cầu thang.',
        unsafeChoices: [
          { text: 'Xô lại cho vui.', feedback: 'Không xô đẩy; đi an toàn và nhắc bạn.' },
          { text: 'Chạy vượt lên bỏ bạn lại.', feedback: 'Đi đều, nắm tay vịn; không chạy đua trên thang.' },
        ],
      },
      {
        id: 'khac-nga-l3-s3',
        hazard: 'em nhỏ chưa có người lớn',
        prompt: 'Em nhỏ muốn lên cầu thang một mình. Bé Gấu đang đứng gần. Bé Gấu làm gì?',
        safeText: 'Giữ em dừng lại ở chân thang; gọi người lớn đến dẫn.',
        safeFeedback: 'Giỏi! Trẻ nhỏ chờ người lớn khi lên xuống thang.',
        unsafeChoices: [
          { text: 'Cõng em chạy lên thang.', feedback: 'Không tự đưa em lên thang; gọi người lớn.' },
          { text: 'Để em tự bò lên từng bậc.', feedback: 'Gọi người lớn; không để em nhỏ đi thang một mình.' },
        ],
      },
      {
        id: 'khac-nga-l3-s4',
        hazard: 'tay xách đồ che tầm nhìn trên thang',
        prompt: 'Bé Gấu xách hộp đồ chơi to, muốn lên cầu thang. Bé Gấu làm gì?',
        safeText: 'Nhờ người lớn mang hộp hoặc đi cùng; một tay nắm tay vịn.',
        safeFeedback: 'Tốt! Không để đồ che lối; nhờ người lớn và nắm tay vịn.',
        unsafeChoices: [
          { text: 'Ôm hộp bằng hai tay rồi chạy lên.', feedback: 'Cần một tay nắm vịn; nhờ người lớn giúp mang.' },
          { text: 'Đá hộp xuống dưới cho nhẹ người.', feedback: 'Không đá đồ trên thang; nhờ người lớn.' },
        ],
      },
      {
        id: 'khac-nga-l3-s5',
        hazard: 'trèo phía ngoài tay vịn',
        prompt: 'Bạn trèo phía ngoài tay vịn cầu thang cho “ngầu”. Bé Gấu làm gì?',
        safeText: 'Nhắc bạn xuống đúng mặt thang; gọi người lớn.',
        safeFeedback: 'Đúng! Không trèo ngoài tay vịn; gọi người lớn.',
        unsafeChoices: [
          { text: 'Trèo theo cho bằng bạn.', feedback: 'Không trèo ngoài tay vịn; nhắc dừng và gọi người lớn.' },
          { text: 'Cười cổ vũ bạn trèo tiếp.', feedback: 'Không cổ vũ; nhắc xuống và tìm người lớn.' },
        ],
      },
    ],
  },

  {
    id: 'khac-nga-l4',
    moduleId: 'khac-nga',
    gradeBand: '2-4',
    title: 'Sàn ướt và đồ vương',
    objective: 'Thấy sàn ướt hoặc đồ chắn lối → báo người lớn; không chạy lao.',
    teacherPrompt: 'Khi sàn nhà ướt hoặc có đồ chắn lối, em sẽ nói với ai?',
    situations: [
      {
        id: 'khac-nga-l4-s1',
        hazard: 'sàn nhà vừa lau còn ướt',
        prompt: 'Bé Gấu thấy sàn phòng khách bóng nước vừa lau. Bé Gấu muốn sang bên kia. Bé Gấu làm gì?',
        safeText: 'Đi chậm hoặc đi đường khô; báo người lớn sàn còn ướt.',
        safeFeedback: 'Tốt! Không chạy trên sàn ướt; báo người lớn.',
        unsafeChoices: [
          { text: 'Chạy lao qua cho mau khô chân.', feedback: 'Không chạy trên sàn ướt; đi chậm hoặc chờ.' },
          { text: 'Trượt chân cố ý cho vui.', feedback: 'Không đùa trượt trên sàn ướt.' },
        ],
      },
      {
        id: 'khac-nga-l4-s2',
        hazard: 'nước đổ gần cầu thang',
        prompt: 'Có vũng nước gần chân cầu thang. Bé Gấu làm gì?',
        safeText: 'Không bước lên vũng nước; báo người lớn lau hoặc rào tạm.',
        safeFeedback: 'Đúng! Báo người lớn khi thấy nước gần thang.',
        unsafeChoices: [
          { text: 'Nhảy qua vũng nước lên thang.', feedback: 'Không nhảy gần thang; báo người lớn trước.' },
          { text: 'Lấy khăn tự lau rồi chạy lên.', feedback: 'Có thể nhắc người lớn; không tự xử rồi chạy lên thang.' },
        ],
      },
      {
        id: 'khac-nga-l4-s3',
        hazard: 'đồ chơi chắn lối đi',
        prompt: 'Hành lang có xe đẩy và hộp đồ chắn lối. Bé Gấu đang đi với bà. Bé Gấu làm gì?',
        safeText: 'Dừng lại, báo bà để họ dọn hoặc chỉ lối khác.',
        safeFeedback: 'Giỏi! Báo người lớn khi lối bị chắn.',
        unsafeChoices: [
          { text: 'Trèo qua đống đồ cho nhanh.', feedback: 'Không trèo qua đồ chắn lối; nhờ người lớn.' },
          { text: 'Đá đồ sang một bên rồi chạy.', feedback: 'Không đá đồ; báo người lớn dọn.' },
        ],
      },
      {
        id: 'khac-nga-l4-s4',
        hazard: 'thảm bị nhăn trên sàn',
        prompt: 'Thảm trải sàn bị nhăn thành gờ. Bé Gấu làm gì?',
        safeText: 'Đi tránh gờ; nhờ người lớn trải lại thảm.',
        safeFeedback: 'Tốt! Báo người lớn chỉnh thảm, không chạy qua gờ.',
        unsafeChoices: [
          { text: 'Chạy nhanh qua chỗ nhăn.', feedback: 'Đi chậm tránh gờ; nhờ người lớn chỉnh.' },
          { text: 'Kéo mạnh thảm một mình cho phẳng.', feedback: 'Nhờ người lớn; kéo mạnh có thể vướng chân.' },
        ],
      },
      {
        id: 'khac-nga-l4-s5',
        hazard: 'bạn chạy trong nhà khi sàn ướt',
        prompt: 'Sàn còn ướt, bạn rủ đuổi bắt trong nhà. Bé Gấu làm gì?',
        safeText: 'Nhắc bạn dừng chạy; chọn chỗ khô hoặc báo người lớn.',
        safeFeedback: 'Đúng! Không chạy đuổi trên sàn ướt.',
        unsafeChoices: [
          { text: 'Chạy đuổi theo bạn.', feedback: 'Không chạy trên sàn ướt; nhắc dừng.' },
          { text: 'Té giả bộ cho bạn cười.', feedback: 'Không đùa té; chơi chỗ an toàn khi sàn khô.' },
        ],
      },
    ],
  },

  {
    id: 'khac-nga-l5',
    moduleId: 'khac-nga',
    gradeBand: '3-5',
    title: 'Chơi đúng chỗ',
    objective: 'Chọn chỗ chơi trong nhà/sân được phép; không lên mái / giếng trời / lô gia không có người lớn.',
    teacherPrompt: 'Những chỗ nào ở nhà được phép chơi, chỗ nào cần có người lớn?',
    situations: [
      {
        id: 'khac-nga-l5-s1',
        hazard: 'muốn lên mái nhà chơi',
        prompt: 'Bạn rủ lên mái nhà xem máy bay. Không có người lớn đi cùng. Bé Gấu làm gì?',
        safeText: 'Từ chối; chọn chỗ chơi được phép ở dưới và báo người lớn.',
        safeFeedback: 'Tốt! Không lên mái không có người lớn.',
        unsafeChoices: [
          { text: 'Lén lên mái một lúc rồi xuống.', feedback: 'Không lên mái; chơi chỗ được phép với người lớn biết.' },
          { text: 'Đứng ở miệng cầu thang mái nhìn ra.', feedback: 'Không lại gần lối lên mái một mình; báo người lớn.' },
        ],
      },
      {
        id: 'khac-nga-l5-s2',
        hazard: 'lô gia không có người lớn',
        prompt: 'Lô gia/ban công nhỏ cửa mở, không có người lớn. Bạn muốn ra đó đá bóng. Bé Gấu làm gì?',
        safeText: 'Không ra lô gia một mình; gọi người lớn hoặc chơi trong nhà.',
        safeFeedback: 'Đúng! Không chơi ở lô gia khi không có người lớn.',
        unsafeChoices: [
          { text: 'Ra đá bóng nhẹ gần lan can.', feedback: 'Không chơi bóng gần lan can; gọi người lớn.' },
          { text: 'Ngồi trên lan can lô gia xem bạn chơi.', feedback: 'Không ngồi lan can; ở trong với người lớn.' },
        ],
      },
      {
        id: 'khac-nga-l5-s3',
        hazard: 'giếng trời / khoảng trống giữa nhà',
        prompt: 'Trong nhà có khoảng giếng trời, bạn muốn trèo thành nhìn xuống. Bé Gấu làm gì?',
        safeText: 'Nhắc không trèo; báo người lớn và chơi chỗ phẳng được phép.',
        safeFeedback: 'Giỏi! Không trèo mép giếng trời; báo người lớn.',
        unsafeChoices: [
          { text: 'Trèo thành giếng trời cho cao.', feedback: 'Không trèo mép giếng trời; chọn chỗ chơi an toàn.' },
          { text: 'Ngồi dang chân trên thành để “thử can đảm”.', feedback: 'Không thử can đảm ở mép cao; gọi người lớn.' },
        ],
      },
      {
        id: 'khac-nga-l5-s4',
        hazard: 'sân thượng khi người lớn bận',
        prompt: 'Người lớn đang nấu, cửa sân thượng mở. Bé Gấu muốn ra phơi đồ giúp. Bé Gấu làm gì?',
        safeText: 'Hỏi người lớn trước; chỉ ra khi họ đồng ý và đi cùng hoặc đứng cạnh.',
        safeFeedback: 'Tốt! Sân thượng cần người lớn cho phép và giám sát.',
        unsafeChoices: [
          { text: 'Ra sân thượng một mình cho xong việc.', feedback: 'Không ra sân thượng một mình; hỏi và đi cùng người lớn.' },
          { text: 'Trèo lên thành sân thượng lấy dây phơi.', feedback: 'Không trèo thành; nhờ người lớn lấy đồ cao.' },
        ],
      },
      {
        id: 'khac-nga-l5-s5',
        hazard: 'chọn chỗ chơi trong nhà được phép',
        prompt: 'Bé Gấu muốn chơi đuổi bắt. Có phòng khách trống (được phép) và hành lang gần cầu thang. Bà đang ở nhà. Bé Gấu làm gì?',
        safeText: 'Hỏi bà rồi chọn phòng khách được phép; tránh đuổi bắt gần cầu thang/mép cao.',
        safeFeedback: 'Đúng! Chơi đúng chỗ người lớn cho phép, xa cầu thang và mép cao.',
        unsafeChoices: [
          { text: 'Đuổi bắt trên cầu thang cho thêm vui.', feedback: 'Không đuổi bắt trên cầu thang.' },
          { text: 'Chạy ra ban công rồi chạy vào.', feedback: 'Không lấy ban công làm đường chạy; chơi trong chỗ được phép.' },
        ],
      },
    ],
  },
];
