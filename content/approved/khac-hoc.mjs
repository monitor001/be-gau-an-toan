// Module khac-hoc — Phòng hóc sặc (draft nội dung)
// Thử nghiệm phụ Bé Gấu An Toàn. Chưa chuyên gia / GV duyệt. Không thu PII.
// Ranh giới: nhận biết / thói quen an toàn / gọi người lớn. Không dạy Heimlich, đập lưng, hay móc sâu miệng cho trẻ tự làm.

export const LESSONS = [
  {
    id: 'khac-hoc-l1',
    moduleId: 'khac-hoc',
    gradeBand: 'mam-3-4',
    title: 'Ngồi ăn',
    objective:
      'Ngồi ngay ngắn khi ăn; không đứng, chạy, nằm hay cười đùa khi miệng còn đồ ăn; ăn ở chỗ có người lớn gần.',
    teacherPrompt:
      'Cùng trẻ luyện “ngồi ghế, chân chạm sàn” trước bữa. Nhắc: ăn xong mới chạy chơi; miệng đầy thì im lặng nhai.',
    parentNote:
      'Ngồi cạnh con khi ăn, nhắc ngồi thẳng và nhai chậm. Cắt thức ăn nhỏ vừa miệng. Game chỉ ôn thói quen; người lớn vẫn trông bữa ăn thật.',
    situations: [
      {
        id: 'khac-hoc-l1-s1',
        hazard: 'đứng ăn',
        prompt:
          'Giờ ăn phụ, Mẹ Gấu để bát cháo trên bàn. Bé Gấu muốn cầm bát đi chơi vừa ăn. Mẹ Gấu đang ngồi cạnh. Bé Gấu làm gì?',
        safeText: 'Ngồi xuống ghế cạnh Mẹ Gấu, đặt bát trên bàn rồi mới ăn.',
        safeFeedback: 'Tốt! Bé Gấu ngồi ngay ngắn và ăn cùng Mẹ Gấu.',
        unsafeChoices: [
          {
            text: 'Cầm bát đi quanh phòng vừa ăn.',
            feedback: 'Không đi vừa ăn. Ngồi xuống bàn với Mẹ Gấu nhé.',
          },
          {
            text: 'Đứng cạnh bàn, cúi xuống húp nhanh.',
            feedback: 'Ăn phải ngồi. Hãy ngồi ghế rồi ăn từ từ.',
          },
        ],
      },
      {
        id: 'khac-hoc-l1-s2',
        hazard: 'vừa chạy vừa nhai',
        prompt:
          'Bé Gấu vừa cắn miếng bánh mì, bạn rủ chạy ra sân. Cô giáo đang trông lớp. Bé Gấu làm gì?',
        safeText: 'Ngồi lại, nhai kỹ và nuốt xong rồi mới chạy chơi.',
        safeFeedback: 'Giỏi! Bé Gấu nhai xong mới chạy, an toàn hơn.',
        unsafeChoices: [
          {
            text: 'Chạy theo bạn, miệng vẫn còn bánh.',
            feedback: 'Miệng còn đồ ăn thì không chạy. Ngồi nhai xong đã.',
          },
          {
            text: 'Nhét nhanh phần còn lại rồi chạy luôn.',
            feedback: 'Không nuốt vội để chạy. Nhai kỹ rồi mới đi chơi.',
          },
        ],
      },
      {
        id: 'khac-hoc-l1-s3',
        hazard: 'nằm ăn',
        prompt:
          'Sau giờ ngủ, Bé Gấu nằm trên thảm, bà đưa hộp sữa chua. Bé Gấu muốn nằm uống cho thoải. Bà đang ngồi gần. Bé Gấu làm gì?',
        safeText: 'Ngồi dậy cạnh bà, đặt hộp trên bàn nhỏ rồi ăn.',
        safeFeedback: 'Đúng rồi! Bé Gấu ngồi ăn, không nằm.',
        unsafeChoices: [
          {
            text: 'Nằm ngửa vừa ăn sữa chua.',
            feedback: 'Không nằm khi ăn. Ngồi dậy cùng bà nhé.',
          },
          {
            text: 'Nằm sấp, cắn từng muỗng trên thảm.',
            feedback: 'Ăn phải ngồi thẳng. Bà giúp em ngồi lên ghế.',
          },
        ],
      },
      {
        id: 'khac-hoc-l1-s4',
        hazard: 'cười đùa miệng đầy',
        prompt:
          'Cả lớp đang ăn trưa. Bạn kể chuyện buồn cười, Bé Gấu miệng còn đầy cơm. Cô giáo ngồi cùng bàn. Bé Gấu làm gì?',
        safeText: 'Im lặng nhai kỹ, nuốt xong rồi mới cười hoặc nói.',
        safeFeedback: 'Hay lắm! Bé Gấu nhai xong mới cười chuyện với bạn.',
        unsafeChoices: [
          {
            text: 'Cười to ngay khi miệng còn đầy cơm.',
            feedback: 'Miệng đầy thì nhai yên. Nuốt xong hãy cười nhé.',
          },
          {
            text: 'Nói to đáp lại bạn khi chưa nuốt hết.',
            feedback: 'Chưa nuốt thì không nói to. Nhai chậm rồi trả lời.',
          },
        ],
      },
      {
        id: 'khac-hoc-l1-s5',
        hazard: 'lấy đồ ăn khi đang chạy',
        prompt:
          'Em bé đang ngồi ghế ăn bánh. Bé Gấu chạy qua, thấy bánh ngon và muốn cầm một miếng. Mẹ Gấu đang ở bếp gần đó. Bé Gấu làm gì?',
        safeText: 'Dừng lại, không lấy bánh của em; gọi Mẹ Gấu nếu em cũng muốn ăn.',
        safeFeedback: 'Tốt! Bé Gấu dừng chạy và nhờ Mẹ Gấu khi muốn ăn.',
        unsafeChoices: [
          {
            text: 'Chạy lại lấy miếng bánh rồi chạy tiếp.',
            feedback: 'Không chạy vừa cầm đồ ăn. Dừng lại và hỏi Mẹ Gấu.',
          },
          {
            text: 'Đưa bánh cho em bé rồi tự cầm thêm một miếng chạy đi.',
            feedback: 'Không lấy đồ ăn khi đang chạy. Ngồi ăn cùng người lớn.',
          },
        ],
      },
    ],
  },

  {
    id: 'khac-hoc-l2',
    moduleId: 'khac-hoc',
    gradeBand: 'mam-3-4',
    title: 'Nhai kỹ',
    objective:
      'Nhai chậm, nuốt xong mới nói hoặc chạy; không nuốt vội, không nhét nhiều, không ăn miếng quá to hay kẹo cứng khi đang chạy.',
    teacherPrompt:
      'Mô phỏng “nhai ba lần rồi nuốt”. Nhắc: miếng nhỏ do người lớn cắt; kẹo cứng chỉ khi ngồi yên.',
    parentNote:
      'Cắt thức ăn nhỏ, mềm phù hợp tuổi; nhắc nhai chậm, không vừa ăn vừa chạy. Kẹo cứng, hạt chỉ khi ngồi và có người lớn trông. Game không thay giám sát bữa ăn.',
    situations: [
      {
        id: 'khac-hoc-l2-s1',
        hazard: 'nuốt vội',
        prompt:
          'Mẹ Gấu mời Bé Gấu ăn cơm vì sắp đi chơi công viên. Bé Gấu muốn nuốt nhanh cho xong. Mẹ Gấu ngồi cạnh. Bé Gấu làm gì?',
        safeText: 'Nhai từng miếng chậm, nuốt hết rồi mới đứng dậy.',
        safeFeedback: 'Giỏi! Bé Gấu nhai kỹ, không nuốt vội.',
        unsafeChoices: [
          {
            text: 'Nuốt gần hết miếng cơm một lần cho nhanh.',
            feedback: 'Không nuốt vội. Nhai nhỏ từng miếng với Mẹ Gấu.',
          },
          {
            text: 'Uống nhiều nước để đẩy cơm xuống cho nhanh.',
            feedback: 'Nuốt chậm an toàn hơn. Nhai kỹ trước khi uống nước.',
          },
        ],
      },
      {
        id: 'khac-hoc-l2-s2',
        hazard: 'miếng quá to',
        prompt:
          'Bà đưa Bé Gấu miếng táo cắt to hơn miệng. Bé Gấu muốn cắn cả miếng. Bà đang ngồi đối diện. Bé Gấu làm gì?',
        safeText: 'Đưa miếng táo cho bà hoặc nhờ bà cắt nhỏ hơn rồi mới ăn.',
        safeFeedback: 'Đúng! Miếng vừa miệng mới ăn; Bé Gấu nhờ bà giúp.',
        unsafeChoices: [
          {
            text: 'Nhét cả miếng táo vào miệng.',
            feedback: 'Miếng to dễ nguy hiểm. Nhờ bà cắt nhỏ hơn nhé.',
          },
          {
            text: 'Cắn một nửa miếng to rồi nuốt vội phần còn lại.',
            feedback: 'Hãy để bà cắt nhỏ. Nhai từng miếng vừa miệng.',
          },
        ],
      },
      {
        id: 'khac-hoc-l2-s3',
        hazard: 'nhét nhiều đồ ăn',
        prompt:
          'Giờ ăn vui, bạn rủ “ai ăn nhiều nhất”. Bé Gấu muốn nhét hai miếng bánh vào miệng. Cô giáo đang trông bàn. Bé Gấu làm gì?',
        safeText: 'Ăn từng miếng một, nhai kỹ; không thi nhét nhiều.',
        safeFeedback: 'Tốt! Bé Gấu ăn từ từ, một miếng một lần.',
        unsafeChoices: [
          {
            text: 'Nhét hai miếng bánh cùng lúc.',
            feedback: 'Không nhét nhiều. Một miếng, nhai xong mới lấy tiếp.',
          },
          {
            text: 'Giấu thêm bánh trong má để thi với bạn.',
            feedback: 'Không nhét thêm trong miệng. Ăn chậm cùng cô nhé.',
          },
        ],
      },
      {
        id: 'khac-hoc-l2-s4',
        hazard: 'vừa ăn vừa nói to',
        prompt:
          'Bé Gấu đang ăn phở với bố, bố hỏi chuyện trường. Miệng Bé Gấu còn mì. Bé Gấu làm gì?',
        safeText: 'Nuốt hết miếng mì, lau miệng nhẹ rồi mới trả lời bố.',
        safeFeedback: 'Hay! Bé Gấu nuốt xong mới nói với bố.',
        unsafeChoices: [
          {
            text: 'Trả lời to ngay khi miệng còn mì.',
            feedback: 'Nuốt xong hãy nói. Bố chờ Bé Gấu nhai kỹ.',
          },
          {
            text: 'Vừa nhai vừa kể chuyện dài cho bố nghe.',
            feedback: 'Kể chuyện sau khi nuốt. Nhai yên một lúc nhé.',
          },
        ],
      },
      {
        id: 'khac-hoc-l2-s5',
        hazard: 'kẹo cứng vừa cầm vừa chạy',
        prompt:
          'Mẹ Gấu cho Bé Gấu viên kẹo cứng. Bạn rủ chạy đuổi nhau ngoài sân. Mẹ Gấu đứng cửa trông. Bé Gấu làm gì?',
        safeText: 'Ngồi cạnh Mẹ Gấu hoặc bàn, nhai kẹo xong rồi mới chạy chơi.',
        safeFeedback: 'Đúng rồi! Kẹo cứng ăn khi ngồi yên; xong mới chạy.',
        unsafeChoices: [
          {
            text: 'Cầm kẹo chạy theo bạn.',
            feedback: 'Không chạy khi miệng còn kẹo cứng. Ngồi nhai xong đã.',
          },
          {
            text: 'Đút kẹo vào má rồi chạy cho vui.',
            feedback: 'Kẹo cứng phải ngồi nhai. Để Mẹ Gấu trông khi em ăn.',
          },
        ],
      },
    ],
  },

  {
    id: 'khac-hoc-l3',
    moduleId: 'khac-hoc',
    gradeBand: 'mam-3-4',
    title: 'Đồ nhỏ không vào miệng',
    objective:
      'Hạt, đồng xu, viên bi, nắp chai, nút áo… không đưa vào miệng; để vào hộp hoặc đưa cô / người lớn.',
    teacherPrompt:
      'Chuẩn bị hộp “đồ nhỏ” trên bàn. Cùng trẻ gom đồ lạ vào hộp và đưa cô; không coi đó là đồ ăn hay đồ chơi miệng.',
    parentNote:
      'Cất đồ nhỏ (hạt, pin, nút, xu) cao hoặc khóa; có hộp riêng khi chơi. Nhắc “không bỏ vào miệng”. Game chỉ luyện thói quen; người lớn dọn và trông khi chơi.',
    situations: [
      {
        id: 'khac-hoc-l3-s1',
        hazard: 'hạt',
        prompt:
          'Lớp làm vườn mini, trên bàn có hạt giống nhỏ. Bé Gấu tò mò hạt tròn. Cô giáo ở gần. Bé Gấu làm gì?',
        safeText: 'Đặt hạt vào hộp rồi đưa cô cất — hạt không phải đồ ăn.',
        safeFeedback: 'Giỏi! Hạt không phải đồ ăn; Bé Gấu đưa cô cất.',
        unsafeChoices: [
          {
            text: 'Thử nếm một hạt xem có ngọt không.',
            feedback: 'Hạt không ăn. Cho vào hộp và đưa cô nhé.',
          },
          {
            text: 'Giấu vài hạt trong tay để chơi “ăn giả”.',
            feedback: 'Không chơi đưa hạt vào miệng. Gom vào hộp cho cô.',
          },
        ],
      },
      {
        id: 'khac-hoc-l3-s2',
        hazard: 'đồng xu',
        prompt:
          'Bé Gấu thấy đồng xu lăn dưới ghế sofa. Em muốn cầm chơi và thử đút vào miệng. Mẹ Gấu đang dọn phòng gần đó. Bé Gấu làm gì?',
        safeText: 'Cầm xu đưa ngay Mẹ Gấu cất — xu không phải kẹo.',
        safeFeedback: 'Tốt! Xu không phải kẹo; Bé Gấu đưa mẹ cất.',
        unsafeChoices: [
          {
            text: 'Đút xu vào miệng rồi lấy ra cho vui.',
            feedback: 'Đồng xu không vào miệng. Đưa Mẹ Gấu ngay.',
          },
          {
            text: 'Nuốt thử một xu vì trông nhỏ.',
            feedback: 'Không nuốt đồ lạ. Gọi Mẹ Gấu giúp em.',
          },
        ],
      },
      {
        id: 'khac-hoc-l3-s3',
        hazard: 'viên bi',
        prompt:
          'Bạn và Bé Gấu chơi bi trên thảm. Bạn thi “ai ngậm nhiều bi hơn”. Cô giáo đang ngồi cạnh. Bé Gấu làm gì?',
        safeText: 'Giữ bi trên sàn hoặc trong túi; chơi bằng tay và nói với bạn: “Không ngậm bi.”',
        safeFeedback: 'Đúng! Bi chơi bằng tay, không bỏ vào miệng.',
        unsafeChoices: [
          {
            text: 'Ngậm vài viên bi cho vui.',
            feedback: 'Bi không vào miệng. Chơi bằng tay trên thảm.',
          },
          {
            text: 'Nhét bi vào má để thi với bạn.',
            feedback: 'Không nhét bi vào miệng. Báo cô nếu bạn rủ thử.',
          },
        ],
      },
      {
        id: 'khac-hoc-l3-s4',
        hazard: 'nắp chai',
        prompt:
          'Sau bữa, trên bàn còn nắp nhựa chai nước. Bé Gấu muốn cắn nắp như đồ chơi. Bố đang rửa bát gần đó. Bé Gấu làm gì?',
        safeText: 'Đưa nắp cho bố hoặc bỏ vào thùng rác — nắp không phải đồ chơi miệng.',
        safeFeedback: 'Hay! Nắp chai không phải đồ chơi miệng; Bé Gấu đưa bố.',
        unsafeChoices: [
          {
            text: 'Ngậm nắp chai và lắc đầu cho vui.',
            feedback: 'Nắp chai không vào miệng. Đưa bố cất giúp.',
          },
          {
            text: 'Trượt nắp vào cổ áo để “đeo”.',
            feedback: 'Nắp nhỏ dễ nuốt nhầm. Cho bố vào thùng rác hoặc hộp.',
          },
        ],
      },
      {
        id: 'khac-hoc-l3-s5',
        hazard: 'nút áo',
        prompt:
          'Bé Gấu may đồ chơi vải, có nút nhựa rơi xuống thảm. Em muốn thử nút có vị gì. Cô giáo đang hướng dẫn lớp. Bé Gấu làm gì?',
        safeText: 'Nhặt nút bỏ vào hộp “đồ nhỏ” rồi đưa cô — nút không thử bằng miệng.',
        safeFeedback: 'Tốt lắm! Nút nhỏ vào hộp; cô cất giúp lớp.',
        unsafeChoices: [
          {
            text: 'Ngậm nút một lúc rồi nhổ ra.',
            feedback: 'Nút không thử bằng miệng. Cho vào hộp đưa cô.',
          },
          {
            text: 'Đeo nút như kẹo vào dây chuyền đồ chơi rồi cắn.',
            feedback: 'Nút không phải kẹo. Gom vào hộp và báo cô.',
          },
        ],
      },
    ],
  },

  {
    id: 'khac-hoc-l4',
    moduleId: 'khac-hoc',
    gradeBand: 'mam-5-6',
    title: 'Mũi và tai',
    objective:
      'Không nhét hạt, pin hay đồ lạ vào mũi, tai; không đút tăm bông sâu hay que soi; muốn “thử” thì đưa đồ cho người lớn.',
    teacherPrompt:
      'Dùng tranh hoặc búp bê: “mũi tai chỉ lau ngoài”. Nếu trẻ nói đã nhét đồ — báo người lớn ngay, không tự móc.',
    parentNote:
      'Không để trẻ tự nhét đồ vào mũi/tai; tăm bông chỉ lau ngoài vành tai (người lớn làm). Pin, hạt cất kín. Nếu nghi có dị vật — đưa trẻ tới cơ sở y tế / người lớn xử lý, không tự móc sâu.',
    situations: [
      {
        id: 'khac-hoc-l4-s1',
        hazard: 'nhét hạt vào mũi',
        prompt:
          'Bé Gấu chơi nến đậu, thấy hạt tròn. Bạn rủ “thử nhét một hạt vào mũi”. Cô giáo ở gần. Bé Gấu làm gì?',
        safeText: 'Để hạt trong hộp và báo cô ngay — mũi không nhét hạt.',
        safeFeedback: 'Đúng! Không nhét hạt vào mũi; Bé Gấu báo cô.',
        unsafeChoices: [
          {
            text: 'Nhét một hạt vào mũi cho vui rồi thổi ra.',
            feedback: 'Không nhét gì vào mũi. Đưa hạt cho cô cất.',
          },
          {
            text: 'Thử hạt bên mũi bạn xem sao.',
            feedback: 'Không thử với bạn. Cả hai để hạt trong hộp và gọi cô.',
          },
        ],
      },
      {
        id: 'khac-hoc-l4-s2',
        hazard: 'tăm bông sâu tai',
        prompt:
          'Trong tủ nhà tắm có tăm bông. Bé Gấu muốn tự đút sâu vào tai vì thấy mẹ làm. Mẹ Gấu đang ở cửa phòng tắm. Bé Gấu làm gì?',
        safeText: 'Nhờ Mẹ Gấu lau tai phía ngoài nếu cần — tai không tự đút sâu.',
        safeFeedback: 'Tốt! Tai do Mẹ Gấu chăm; Bé Gấu không tự đút sâu.',
        unsafeChoices: [
          {
            text: 'Đút tăm bông thật sâu vào tai.',
            feedback: 'Không đút sâu tai. Nhờ Mẹ Gấu giúp em.',
          },
          {
            text: 'Dùng que tăm ăn thay tăm bông đút tai.',
            feedback: 'Que không đút tai. Gọi Mẹ Gấu nếu tai khó chịu.',
          },
        ],
      },
      {
        id: 'khac-hoc-l4-s3',
        hazard: 'viên pin',
        prompt:
          'Đồ chơi hết pin, Bé Gấu thấy viên pin tròn nhỏ trên sàn. Em muốn xem pin có vào mũi được không. Bố đang sửa đồ chơi bên cạnh. Bé Gấu làm gì?',
        safeText: 'Cầm pin đưa bố ngay — pin không đưa vào mũi hay miệng.',
        safeFeedback: 'Giỏi! Pin nguy hiểm; Bé Gấu đưa bố cất.',
        unsafeChoices: [
          {
            text: 'Thử nhét pin vào mũi một chút.',
            feedback: 'Pin không nhét mũi. Đưa bố ngay lập tức.',
          },
          {
            text: 'Cất pin vào hộp đồ chơi để chơi sau.',
            feedback: 'Pin đưa người lớn cất kín, không để trong hộp chơi.',
          },
        ],
      },
      {
        id: 'khac-hoc-l4-s4',
        hazard: 'hạt vào tai',
        prompt:
          'Ngoài sân, gió thổi hạt cát nhỏ vào tai Bé Gấu, tai hơi khó chịu. Cô giáo đang dẫn lớp về. Bé Gấu làm gì?',
        safeText: 'Nói với cô để cô báo người lớn giúp — tai không tự móc sâu.',
        safeFeedback: 'Hay! Bé Gấu báo cô, không tự móc sâu tai.',
        unsafeChoices: [
          {
            text: 'Dùng ngón tay móc sâu trong tai.',
            feedback: 'Không móc tai. Nói cô để người lớn xem giúp.',
          },
          {
            text: 'Nhờ bạn thổi mạnh vào tai.',
            feedback: 'Không thổi hay móc tai. Báo cô ngay.',
          },
        ],
      },
      {
        id: 'khac-hoc-l4-s5',
        hazard: 'tự soi mũi bằng que',
        prompt:
          'Bé Gấu thấy que xiên đồ ăn nhọn trên bàn. Em muốn đút que vào mũi “soi cho biết”. Mẹ Gấu đang nấu ăn gần đó. Bé Gấu làm gì?',
        safeText: 'Đặt que xuống bàn và nói với Mẹ Gấu — mũi không soi bằng que.',
        safeFeedback: 'Đúng rồi! Mũi không soi bằng que; Bé Gấu báo mẹ.',
        unsafeChoices: [
          {
            text: 'Đút que nhọn vào mũi thật nhẹ.',
            feedback: 'Que không đưa vào mũi. Gọi Mẹ Gấu nếu mũi khó chịu.',
          },
          {
            text: 'Dùng bút chì thay que để soi.',
            feedback: 'Không đút bút hay que vào mũi. Nhờ người lớn giúp.',
          },
        ],
      },
    ],
  },

  {
    id: 'khac-hoc-l5',
    moduleId: 'khac-hoc',
    gradeBand: 'mam-5-6',
    title: 'Khi bạn ho sặc',
    objective:
      'Thấy bạn ho sặc, khó thở hoặc không nói được → gọi người lớn to, rõ; không tự “chữa”, không đổ nước ùng, không móc sâu miệng, không bỏ chạy hay giữ bí mật.',
    teacherPrompt:
      'Luyện câu: “Cô ơi / Mẹ ơi, bạn bị sặc!” — giọng to, đi tìm người lớn gần nhất. Nhấn mạnh: việc cứu do người lớn, trẻ chỉ báo.',
    parentNote:
      'Game không dạy Heimlich, đập lưng hay móc sâu miệng — chỉ dạy gọi người lớn ngay. Người lớn học sơ cứu hóc sặc ở khóa chính thống. Cắt đồ ăn nhỏ và trông khi trẻ ăn vẫn là cách phòng tốt nhất.',
    situations: [
      {
        id: 'khac-hoc-l5-s1',
        hazard: 'tự xử khi bạn sặc',
        prompt:
          'Bạn ngồi cạnh Bé Gấu đang ăn nhẹ, bạn sặc, mặt đỏ, không nói được. Cô giáo ở cuối lớp. Bé Gấu làm gì?',
        safeText: 'Chạy đến cô, gọi to: “Cô ơi, bạn bị sặc!”',
        safeFeedback: 'Tốt! Bé Gấu gọi cô ngay; cô và người lớn sẽ giúp bạn.',
        unsafeChoices: [
          {
            text: 'Tự đập lưng bạn thật mạnh.',
            feedback: 'Trẻ không tự “chữa sặc”. Gọi cô hoặc người lớn ngay.',
          },
          {
            text: 'Tự ôm bụng bạn và ấn mạnh.',
            feedback: 'Không tự làm thế. Hô to gọi người lớn giúp bạn.',
          },
        ],
      },
      {
        id: 'khac-hoc-l5-s2',
        hazard: 'đổ nước ùng',
        prompt:
          'Em bé nhà hàng xóm ho sặc, miệng em đỏ. Dì hàng xóm hoảng. Bé Gấu thấy bình nước trên bàn. Bé Gấu làm gì?',
        safeText: 'Gọi to dì hoặc Mẹ Gấu; không tự đổ nước vào miệng em.',
        safeFeedback: 'Đúng! Báo người lớn; họ biết cách giúp em bé.',
        unsafeChoices: [
          {
            text: 'Đổ nước vào miệng em cho hết sặc.',
            feedback: 'Không tự đổ nước. Gọi người lớn ngay lập tức.',
          },
          {
            text: 'Tự vỗ lưng em thật mạnh rồi bỏ đi.',
            feedback: 'Không tự “chữa” bằng vỗ lưng. Gọi dì hoặc Mẹ Gấu giúp.',
          },
        ],
      },
      {
        id: 'khac-hoc-l5-s3',
        hazard: 'móc sâu miệng',
        prompt:
          'Bạn chơi cùng Bé Gấu nói “nghẹn kẹo”, tay chỉ cổ. Cô giáo đang dẫn nhóm khác ở sân. Bé Gấu làm gì?',
        safeText: 'Chạy gọi cô to; ở cạnh bạn, không đút tay sâu vào miệng bạn.',
        safeFeedback: 'Giỏi! Gọi cô và không móc sâu miệng bạn.',
        unsafeChoices: [
          {
            text: 'Luồn ngón tay sâu vào miệng bạn móc kẹo.',
            feedback: 'Không móc sâu miệng bạn. Gọi cô ngay.',
          },
          {
            text: 'Dùng thìa nhỏ móc trong miệng bạn.',
            feedback: 'Không đút gì sâu miệng. Tìm cô hoặc người lớn.',
          },
        ],
      },
      {
        id: 'khac-hoc-l5-s4',
        hazard: 'bỏ chạy cười',
        prompt:
          'Bạn vừa ho sặc rồi ho khan, mặt vẫn đỏ. Vài bạn cười và chạy đi chơi. Cô giáo chưa thấy. Bé Gấu làm gì?',
        safeText: 'Không chạy theo; ở cạnh bạn và gọi cô to.',
        safeFeedback: 'Hay lắm! Bé Gấu ở lại và gọi cô giúp bạn.',
        unsafeChoices: [
          {
            text: 'Chạy theo bạn khác vì sợ bị la.',
            feedback: 'Bạn vẫn cần giúp. Gọi cô, đừng bỏ chạy.',
          },
          {
            text: 'Cười theo vì nghĩ bạn giả vờ.',
            feedback: 'Ho sặc cần người lớn. Gọi cô ngay, không cười.',
          },
        ],
      },
      {
        id: 'khac-hoc-l5-s5',
        hazard: 'giữ bí mật',
        prompt:
          'Bạn nói với Bé Gấu: “Mình sặc kẹo nhưng đừng mách cô.” Bạn vẫn ho khó. Cô giáo ở trong lớp. Bé Gấu làm gì?',
        safeText: 'Vẫn báo cô ngay; an toàn quan trọng hơn giữ bí mật.',
        safeFeedback: 'Đúng rồi! Bé Gấu báo cô để bạn được giúp.',
        unsafeChoices: [
          {
            text: 'Giữ bí mật vì bạn nhờ.',
            feedback: 'Khi bạn sặc phải báo người lớn. Gọi cô nhé.',
          },
          {
            text: 'Đợi thêm xem bạn có hết ho không.',
            feedback: 'Không chờ. Báo cô ngay khi bạn khó thở hoặc sặc.',
          },
        ],
      },
    ],
  },
];
