// Module An toàn nước — draft nội dung (writer)
// Thử nghiệm phụ cùng họ Bé Gấu. Chưa được Bộ GD&ĐT / Bộ Y tế / giáo viên / chuyên gia phê duyệt cho game.
// Biên soạn mới bám research/an-toan-nuoc.md; không sao chép nguyên văn tài liệu.
// Đáp án an toàn = nhận biết / tránh / gọi hoặc đi cùng người lớn. Không dạy cứu đuối trực tiếp.

export const LESSONS = [
  {
    id: 'nuoc-l1',
    moduleId: 'nuoc',
    gradeBand: '1-3',
    title: 'Nước trong nhà của em',
    objective:
      'Nhận ra nguồn nước gần nhà (bồn tắm, chum, vại, xô, giếng, bể); không tắm một mình; gọi người lớn khi thấy nắp hở hoặc chỗ chưa an toàn.',
    teacherPrompt:
      'Cùng bé quan sát quanh nhà: chỗ nào có nước? Nhắc bé chỉ gọi hoặc chờ người lớn, không tự mở nắp hay tắm một mình.',
    situations: [
      {
        id: 'nuoc-l1-s1',
        hazard: 'tắm bồn một mình',
        prompt:
          'Bé Gấu muốn tắm trong bồn. Bố mẹ đang bận ở phòng bên. Bé Gấu làm gì?',
        safeText: 'Chờ bố mẹ hoặc người lớn đến cùng rồi mới tắm.',
        safeFeedback: 'Tốt! Bé Gấu chờ người lớn. Tắm cùng người lớn an toàn hơn.',
        unsafeChoices: [
          {
            text: 'Tự vào bồn tắm vì nước không sâu.',
            feedback: 'Bé Gấu không tắm một mình. Hãy chờ người lớn nhé.',
          },
          {
            text: 'Khóa cửa nhà tắm rồi tự tắm cho nhanh.',
            feedback: 'Không khóa cửa và tự tắm. Gọi người lớn trước.',
          },
        ],
      },
      {
        id: 'nuoc-l1-s2',
        hazard: 'nắp chum nước mở',
        prompt:
          'Ở sân nhà có chum nước. Nắp chum đang mở. Bạn rủ Bé Gấu cúi xuống nhìn. Người lớn đang ở gần. Bé Gấu làm gì?',
        safeText: 'Không cúi vào chum. Gọi người lớn đến đậy nắp lại.',
        safeFeedback: 'Giỏi! Bé Gấu không cúi vào chum và đã gọi người lớn.',
        unsafeChoices: [
          {
            text: 'Cúi sát miệng chum để nhìn nước.',
            feedback: 'Không cúi vào chum. Gọi người lớn đậy nắp giúp em.',
          },
          {
            text: 'Tự đẩy nắp chum cho kín.',
            feedback: 'Nắp chum có thể nặng. Nhờ người lớn đậy giúp nhé.',
          },
        ],
      },
      {
        id: 'nuoc-l1-s3',
        hazard: 'xô nước đầy trên sàn',
        prompt:
          'Mẹ để một xô nước đầy trên sàn nhà tắm. Bé Gấu muốn lấy đồ chơi gần xô. Người lớn ở phòng khách. Bé Gấu làm gì?',
        safeText: 'Gọi mẹ đến cùng. Không tự đến sát xô nước đầy.',
        safeFeedback: 'Đúng! Bé Gấu gọi người lớn trước khi lấy đồ gần nước.',
        unsafeChoices: [
          {
            text: 'Tự bước sát xô để lấy đồ chơi.',
            feedback: 'Xô nước đầy dễ đổ. Hãy gọi người lớn giúp.',
          },
          {
            text: 'Kéo xô sang chỗ khác rồi lấy đồ.',
            feedback: 'Bé Gấu không tự kéo xô nước. Nhờ người lớn nhé.',
          },
        ],
      },
      {
        id: 'nuoc-l1-s4',
        hazard: 'cửa nhà tắm / bể chứa chưa an toàn',
        prompt:
          'Bé Gấu thấy cửa nhà tắm mở và bể chứa nước trong nhà không có nắp. Bố đang làm việc gần đó. Bé Gấu làm gì?',
        safeText: 'Báo bố ngay. Ở lại chỗ khô, không lại gần bể.',
        safeFeedback: 'Tốt lắm! Bé Gấu báo người lớn khi thấy chỗ nước chưa an toàn.',
        unsafeChoices: [
          {
            text: 'Tự leo lên bể để xem bên trong.',
            feedback: 'Không leo lên bể. Hãy báo người lớn ngay.',
          },
          {
            text: 'Đóng cửa nhà tắm rồi tự chơi gần bể.',
            feedback: 'Chơi gần bể chưa an toàn. Gọi bố giúp em.',
          },
        ],
      },
      {
        id: 'nuoc-l1-s5',
        hazard: 'giếng hoặc bể cá trong sân',
        prompt:
          'Ở sân nhà có miệng giếng đã đậy và một bể cá. Bạn muốn Bé Gấu lại gần xem cá một mình. Cô đang trong bếp. Bé Gấu làm gì?',
        safeText: 'Ở lại chỗ khô. Gọi cô đi cùng nếu muốn xem cá.',
        safeFeedback: 'Hay quá! Bé Gấu không lại gần một mình và đã gọi người lớn.',
        unsafeChoices: [
          {
            text: 'Chạy ra sát bể cá xem một mình.',
            feedback: 'Không lại gần bể một mình. Hãy gọi cô đi cùng.',
          },
          {
            text: 'Mở nắp giếng một chút để nhìn xuống.',
            feedback: 'Không mở nắp giếng. Ở xa và gọi người lớn.',
          },
        ],
      },
    ],
  },

  {
    id: 'nuoc-l2',
    moduleId: 'nuoc',
    gradeBand: '1-3',
    title: 'Ao, hồ, sông gần nhà',
    objective:
      'Không chơi sát bờ ao, hồ, sông, suối; không xuống nước khi không có người lớn; chọn chỗ chơi khô hoặc có rào chắn.',
    teacherPrompt:
      'Hỏi bé: gần nhà có ao, hồ, kênh không? Nhắc: chỉ đi gần nước khi có người lớn; thấy biển cảnh báo thì không lại gần.',
    situations: [
      {
        id: 'nuoc-l2-s1',
        hazard: 'bạn rủ ra bờ ao không có người lớn',
        prompt:
          'Bạn rủ Bé Gấu ra bờ ao “câu cá chơi”. Không có người lớn đi cùng. Bé Gấu làm gì?',
        safeText: 'Từ chối. Ở lại chỗ khô an toàn hoặc gọi người lớn.',
        safeFeedback: 'Đúng! Bé Gấu không ra bờ ao khi chưa có người lớn.',
        unsafeChoices: [
          {
            text: 'Đi theo bạn ra sát bờ ao.',
            feedback: 'Không ra sát bờ khi chưa có người lớn. Hãy ở chỗ khô.',
          },
          {
            text: 'Đứng xa một chút rồi tự đi gần dần.',
            feedback: 'Dù đứng xa vẫn chưa đủ. Chỉ đi khi có người lớn.',
          },
        ],
      },
      {
        id: 'nuoc-l2-s2',
        hazard: 'biển cảnh báo nước sâu',
        prompt:
          'Gần hồ có biển báo “Nguy hiểm – nước sâu”. Bạn muốn Bé Gấu lại gần nhìn. Người lớn đang đứng phía sau. Bé Gấu làm gì?',
        safeText: 'Không đi gần. Báo người lớn và ở lại chỗ an toàn.',
        safeFeedback: 'Giỏi! Bé Gấu đọc biển báo, không lại gần và đã báo người lớn.',
        unsafeChoices: [
          {
            text: 'Lại gần biển báo để đọc cho rõ hơn.',
            feedback: 'Thấy biển cảnh báo thì ở xa. Báo người lớn giúp em.',
          },
          {
            text: 'Bước sát mép hồ xem nước có sâu không.',
            feedback: 'Không sát mép hồ. Ở chỗ khô với người lớn.',
          },
        ],
      },
      {
        id: 'nuoc-l2-s3',
        hazard: 'bờ đất mềm dễ sạt',
        prompt:
          'Bé Gấu đi dạo với chú gần sông. Bờ đất nhìn mềm và trơn. Bạn muốn Bé Gấu đứng sát mép nhìn cá. Bé Gấu làm gì?',
        safeText: 'Ở xa mép bờ. Nắm tay chú và chọn chỗ chơi khô.',
        safeFeedback: 'Tốt! Bé Gấu ở xa bờ mềm và đi cùng người lớn.',
        unsafeChoices: [
          {
            text: 'Đứng sát mép cho nhìn rõ cá.',
            feedback: 'Bờ mềm dễ sạt. Hãy đứng xa và nắm tay người lớn.',
          },
          {
            text: 'Ngồi xuống mép bờ cho chắc hơn.',
            feedback: 'Không ngồi sát mép. Chọn chỗ khô với chú nhé.',
          },
        ],
      },
      {
        id: 'nuoc-l2-s4',
        hazard: 'kênh mương bẩn / nước đục',
        prompt:
          'Trên đường về nhà với bà, Bé Gấu thấy kênh nước đục. Bạn rủ “lội chơi một chút”. Bé Gấu làm gì?',
        safeText: 'Không lội. Đi tiếp chỗ khô cùng bà.',
        safeFeedback: 'Đúng rồi! Nước đục cũng không đùa. Bé Gấu đi cùng bà.',
        unsafeChoices: [
          {
            text: 'Cởi dép lội thử vì nước trông nông.',
            feedback: 'Không lội kênh dù nước trông nông. Đi cùng bà.',
          },
          {
            text: 'Ném đá xuống kênh rồi đứng sát bờ xem.',
            feedback: 'Không đứng sát bờ kênh. Ở chỗ khô với người lớn.',
          },
        ],
      },
      {
        id: 'nuoc-l2-s5',
        hazard: 'chỗ chơi gần rào chắn nước',
        prompt:
          'Gần hồ có hàng rào. Phía trong rào là nước. Bạn muốn Bé Gấu chui qua khe rào xem. Cô giáo đang ở gần. Bé Gấu làm gì?',
        safeText: 'Không chui qua rào. Ở ngoài chỗ chơi khô và báo cô.',
        safeFeedback: 'Hay! Bé Gấu tôn trọng rào chắn và ở chỗ an toàn với cô.',
        unsafeChoices: [
          {
            text: 'Chui qua khe rào để nhìn gần nước.',
            feedback: 'Rào chắn để bảo vệ. Không chui qua. Báo cô giúp em.',
          },
          {
            text: 'Trèo lên rào cho cao để nhìn xa.',
            feedback: 'Không trèo rào. Chơi ngoài chỗ khô với người lớn.',
          },
        ],
      },
    ],
  },

  {
    id: 'nuoc-l3',
    moduleId: 'nuoc',
    gradeBand: '1-3',
    title: 'Ở bể bơi cùng người lớn',
    objective:
      'Chỉ xuống bể khi có người lớn giám sát; làm theo nội quy; đi bộ quanh thành bể; không đẩy bạn xuống nước.',
    teacherPrompt:
      'Trước khi vào bể, cùng bé đọc nội quy đơn giản: chờ người lớn, không chạy, không đẩy. Nhắc cứu hộ trên bờ không thay việc chờ người lớn của mình.',
    situations: [
      {
        id: 'nuoc-l3-s1',
        hazard: 'xuống bể khi người lớn chưa giám sát',
        prompt:
          'Bé Gấu đã mặc đồ bơi. Bố mẹ chưa tới chỗ đứng giám sát sát bể. Bạn đã xuống nước. Bé Gấu làm gì?',
        safeText: 'Chờ bố mẹ tới chỗ giám sát rồi mới xuống bể cùng họ.',
        safeFeedback: 'Tốt! Bé Gấu chờ người lớn. Có cứu hộ cũng vẫn cần người lớn của em.',
        unsafeChoices: [
          {
            text: 'Xuống theo bạn vì thấy có người cứu hộ.',
            feedback: 'Cứu hộ không thay bố mẹ. Hãy chờ người lớn của em.',
          },
          {
            text: 'Ngồi mép bể nhúng chân trước khi bố mẹ tới.',
            feedback: 'Chưa xuống hoặc nhúng chân khi người lớn chưa giám sát.',
          },
        ],
      },
      {
        id: 'nuoc-l3-s2',
        hazard: 'chạy quanh thành bể ướt',
        prompt:
          'Thành bể đang ướt. Bạn rủ Bé Gấu chạy đua quanh bể. Cô đang đứng gần. Bé Gấu làm gì?',
        safeText: 'Đi bộ chậm. Nhắc bạn đi bộ hoặc gọi cô giúp.',
        safeFeedback: 'Giỏi! Bé Gấu đi bộ trên thành bể ướt và nhờ người lớn.',
        unsafeChoices: [
          {
            text: 'Chạy theo bạn cho vui.',
            feedback: 'Thành bể ướt dễ trượt. Hãy đi bộ và gọi cô.',
          },
          {
            text: 'Nhảy lò cò gần mép bể.',
            feedback: 'Không nhảy gần mép. Đi bộ với người lớn nhé.',
          },
        ],
      },
      {
        id: 'nuoc-l3-s3',
        hazard: 'đùa đẩy bạn xuống nước',
        prompt:
          'Ở bể bơi, bạn muốn “đùa” đẩy một bạn khác xuống nước. Bố đang đứng gần Bé Gấu. Bé Gấu làm gì?',
        safeText: 'Không đẩy. Nói không làm vậy và báo bố ngay.',
        safeFeedback: 'Đúng! Bé Gấu không đẩy bạn và đã báo người lớn.',
        unsafeChoices: [
          {
            text: 'Đẩy nhẹ xem bạn có cười không.',
            feedback: 'Không đẩy ai xuống nước. Báo người lớn giúp.',
          },
          {
            text: 'Cười theo rồi đứng xem bạn đẩy.',
            feedback: 'Không đứng xem. Hãy nói không và gọi bố.',
          },
        ],
      },
      {
        id: 'nuoc-l3-s4',
        hazard: 'vùng nước sâu / nội quy khu vực',
        prompt:
          'Bể có biển “khu vực nước sâu – chỉ người lớn”. Bạn rủ Bé Gấu bơi sang đó. Mẹ Gấu đang ở khu nông. Bé Gấu làm gì?',
        safeText: 'Ở lại khu nông với mẹ. Không sang khu nước sâu.',
        safeFeedback: 'Hay quá! Bé Gấu làm theo biển báo và ở cùng Mẹ Gấu.',
        unsafeChoices: [
          {
            text: 'Bơi sang khu sâu vì đã biết bơi một đoạn.',
            feedback: 'Biết bơi một đoạn vẫn chưa đủ. Ở khu nông với mẹ.',
          },
          {
            text: 'Bám thành bể lần dần sang khu sâu.',
            feedback: 'Không lần sang khu sâu. Chơi với mẹ ở chỗ được phép.',
          },
        ],
      },
      {
        id: 'nuoc-l3-s5',
        hazard: 'hết giờ hoặc còi nội quy',
        prompt:
          'Còi báo hết giờ chơi nước. Bạn muốn Bé Gấu “ở thêm một phút”. Người hướng dẫn đang gọi mọi người lên. Bé Gấu làm gì?',
        safeText: 'Lên bờ ngay theo hướng dẫn và đứng cạnh người lớn của mình.',
        safeFeedback: 'Tốt! Bé Gấu nghe nội quy và lên bờ cùng người lớn.',
        unsafeChoices: [
          {
            text: 'Nán lại dưới nước thêm một lúc.',
            feedback: 'Khi có còi hết giờ, lên bờ ngay với người lớn.',
          },
          {
            text: 'Lặn xuống để bạn đỡ thấy.',
            feedback: 'Không trốn dưới nước. Hãy lên bờ theo hướng dẫn.',
          },
        ],
      },
    ],
  },

  {
    id: 'nuoc-l4',
    moduleId: 'nuoc',
    gradeBand: '3-5',
    title: 'Biển, đò và áo phao',
    objective:
      'Chỉ tắm hoặc đi đò nơi được phép, có người lớn; mặc áo phao phù hợp; ngồi yên trên thuyền; không xuống nước khi sóng lớn hoặc có biển cấm.',
    teacherPrompt:
      'Cùng bé nhắc: áo phao giữ nguyên khi đi đò; chỉ chơi nước ở khu được phép; thời tiết xấu thì ở trên bờ với người lớn.',
    situations: [
      {
        id: 'nuoc-l4-s1',
        hazard: 'tháo áo phao trên đò vì nóng',
        prompt:
          'Trên đò, Bé Gấu đã mặc áo phao. Bạn tháo áo phao vì “nóng” và rủ Bé Gấu tháo theo. Chú tài công và bố đang trên đò. Bé Gấu làm gì?',
        safeText: 'Giữ áo phao. Nhờ bố chỉnh cho thoải mái hơn nếu cần.',
        safeFeedback: 'Đúng! Bé Gấu giữ áo phao và nhờ người lớn chỉnh giúp.',
        unsafeChoices: [
          {
            text: 'Tháo áo phao như bạn vì trời nóng.',
            feedback: 'Trên đò vẫn mặc áo phao. Nhờ bố chỉnh giúp em.',
          },
          {
            text: 'Nới lỏng hết dây áo phao rồi bỏ qua một bên.',
            feedback: 'Không tháo hoặc bỏ áo phao. Giữ đúng và nhờ người lớn.',
          },
        ],
      },
      {
        id: 'nuoc-l4-s2',
        hazard: 'biển có cờ / biển cấm tắm',
        prompt:
          'Ở bãi biển có biển “Cấm tắm” và cờ cảnh báo. Bạn rủ Bé Gấu ra xa hơn vì “sóng đẹp”. Mẹ Gấu đang đứng cạnh. Bé Gấu làm gì?',
        safeText: 'Ở lại khu được phép với mẹ. Không ra chỗ có biển cấm.',
        safeFeedback: 'Giỏi! Bé Gấu tôn trọng biển báo và ở cùng người lớn.',
        unsafeChoices: [
          {
            text: 'Chạy ra xa hơn một chút cho vui.',
            feedback: 'Thấy biển cấm thì không ra. Ở với mẹ ở chỗ được phép.',
          },
          {
            text: 'Đứng sát mép sóng chỗ có biển cấm để chụp ảnh.',
            feedback: 'Không đứng chỗ bị cấm. Chọn khu an toàn với mẹ.',
          },
        ],
      },
      {
        id: 'nuoc-l4-s3',
        hazard: 'sóng lớn / thời tiết xấu',
        prompt:
          'Gió to, sóng lớn hơn lúc sáng. Bạn vẫn muốn xuống nước. Bố đang xem biển. Bé Gấu làm gì?',
        safeText: 'Không xuống nước. Ở trên bờ cùng bố và hỏi bố có nên chờ không.',
        safeFeedback: 'Tốt! Khi sóng lớn, Bé Gấu ở trên bờ với người lớn.',
        unsafeChoices: [
          {
            text: 'Xuống nước thử vì sáng nay đã tắm được.',
            feedback: 'Thời tiết đổi thì không xuống. Ở trên bờ với bố.',
          },
          {
            text: 'Đứng ngập tới gối xem sóng có mạnh không.',
            feedback: 'Không thử sóng một mình. Hỏi bố và ở chỗ khô.',
          },
        ],
      },
      {
        id: 'nuoc-l4-s4',
        hazard: 'chạy nhảy trên thuyền / đò',
        prompt:
          'Đò đang chạy. Bạn muốn Bé Gấu đứng dậy chạy từ mũi xuống đuôi đò. Cô đang ngồi cạnh Bé Gấu. Bé Gấu làm gì?',
        safeText: 'Ngồi yên cạnh cô. Không chạy nhảy trên đò.',
        safeFeedback: 'Hay! Bé Gấu ngồi yên với người lớn khi đò đang chạy.',
        unsafeChoices: [
          {
            text: 'Đứng dậy chạy theo bạn trên đò.',
            feedback: 'Trên đò phải ngồi yên. Ở cạnh cô nhé.',
          },
          {
            text: 'Ngồi lên thành đò cho nhìn xa hơn.',
            feedback: 'Không ngồi lên thành đò. Ngồi đúng chỗ với người lớn.',
          },
        ],
      },
      {
        id: 'nuoc-l4-s5',
        hazard: 'áo phao chưa vừa hoặc chưa mặc trước khi lên đò',
        prompt:
          'Trước khi lên đò, người lớn đưa áo phao cho Bé Gấu. Áo hơi rộng. Bạn nói “lên đò rồi mặc cũng được”. Bé Gấu làm gì?',
        safeText: 'Mặc áo phao trước khi lên đò. Nhờ người lớn chỉnh dây cho vừa.',
        safeFeedback: 'Đúng! Bé Gấu mặc áo phao trước và nhờ người lớn chỉnh vừa.',
        unsafeChoices: [
          {
            text: 'Lên đò trước, mặc áo phao sau.',
            feedback: 'Mặc áo phao trước khi lên đò. Nhờ người lớn giúp.',
          },
          {
            text: 'Không mặc vì áo rộng, cầm theo cho đỡ nặng.',
            feedback: 'Cầm áo phao chưa đủ. Hãy mặc và nhờ chỉnh cho vừa.',
          },
        ],
      },
    ],
  },

  {
    id: 'nuoc-l5',
    moduleId: 'nuoc',
    gradeBand: '3-5',
    title: 'Khi mưa lũ và khi cần gọi người lớn',
    objective:
      'Không chơi vùng ngập; không “khám phá” nước đục; thấy nguy hiểm thì hô gọi / tìm người lớn và ở trên bờ — không nhảy xuống nước.',
    teacherPrompt:
      'Nhấn mạnh: đường ngập không phải chỗ chơi. Nếu thấy ai gặp nạn dưới nước, trẻ hô to “Cứu với!”, ở trên bờ và chạy gọi người lớn — không nhảy xuống, không tự kéo.',
    situations: [
      {
        id: 'nuoc-l5-s1',
        hazard: 'đường ngập sau mưa',
        prompt:
          'Sau mưa, đường trước nhà ngập nước. Bạn rủ Bé Gấu lội chơi. Bà đang ở trong nhà. Bé Gấu làm gì?',
        safeText: 'Ở trong nhà hoặc chỗ cao với bà. Không lội đường ngập.',
        safeFeedback: 'Tốt! Bé Gấu không chơi vùng ngập và ở cùng người lớn.',
        unsafeChoices: [
          {
            text: 'Lội ra đường chơi vì nước trông nông.',
            feedback: 'Đường ngập có thể có hố. Ở chỗ cao với bà nhé.',
          },
          {
            text: 'Cởi dép chạy qua đoạn ngập cho nhanh.',
            feedback: 'Không chạy qua chỗ ngập. Ở nhà với người lớn.',
          },
        ],
      },
      {
        id: 'nuoc-l5-s2',
        hazard: 'nước đục che khuất hố',
        prompt:
          'Gần cổng có vũng nước đục sau bão. Bạn muốn Bé Gấu “dò xem sâu không”. Chú đang đứng trong sân. Bé Gấu làm gì?',
        safeText: 'Không dò nước đục. Ở chỗ khô và báo chú.',
        safeFeedback: 'Giỏi! Bé Gấu không khám phá nước đục và đã báo người lớn.',
        unsafeChoices: [
          {
            text: 'Thọc chân vào vũng để thử độ sâu.',
            feedback: 'Nước đục có thể che hố. Không thử — báo chú.',
          },
          {
            text: 'Ném gạch xuống rồi bước theo xem.',
            feedback: 'Không bước vào nước đục. Ở chỗ khô với chú.',
          },
        ],
      },
      {
        id: 'nuoc-l5-s3',
        hazard: 'thấy người gặp nạn dưới nước — gọi người lớn',
        prompt:
          'Gần bờ sông, Bé Gấu thấy ai đó đang gặp khó trong nước. Bố mẹ không đứng sát Bé Gấu nhưng có người lớn gần đó. Bé Gấu làm gì?',
        safeText: 'Ở trên bờ. Hô to “Cứu với!” rồi chạy gọi người lớn giúp. Không nhảy xuống, không tự kéo.',
        safeFeedback:
          'Đúng! Bé Gấu hô “Cứu với!”, ở trên bờ và gọi người lớn — không tự xuống nước.',
        unsafeChoices: [
          {
            text: 'Nhảy xuống nước để kéo người đó lên.',
            feedback: 'Không nhảy xuống. Hô “Cứu với!” và gọi người lớn từ trên bờ.',
          },
          {
            text: 'Lặng lẽ chạy đi tìm đồ chơi khác.',
            feedback: 'Hô to “Cứu với!” ngay và gọi người lớn. Đừng bỏ đi im lặng.',
          },
        ],
      },
      {
        id: 'nuoc-l5-s4',
        hazard: 'bạn rủ “cứu” bằng cách xuống nước',
        prompt:
          'Bạn thấy quả bóng trôi gần bờ kênh và muốn Bé Gấu cùng xuống lấy. Cô đang ở gần cổng trường. Bé Gấu làm gì?',
        safeText: 'Không xuống kênh. Gọi cô giúp. Ở lại chỗ khô trên bờ.',
        safeFeedback: 'Hay! Bé Gấu không xuống nước lấy bóng và đã gọi cô.',
        unsafeChoices: [
          {
            text: 'Xuống kênh lấy bóng cho bạn.',
            feedback: 'Không xuống kênh. Gọi cô giúp từ trên bờ.',
          },
          {
            text: 'Cầm cây dài tự với bóng một mình.',
            feedback: 'Không tự với đồ dưới nước. Gọi người lớn giúp em.',
          },
        ],
      },
      {
        id: 'nuoc-l5-s5',
        hazard: 'lũ dâng / cần lên chỗ cao',
        prompt:
          'Mưa lớn, nước dâng gần sân. Người lớn trong nhà bảo mọi người lên chỗ cao. Bạn muốn Bé Gấu ra cổng xem nước. Bé Gấu làm gì?',
        safeText: 'Ở trong nhà, lên chỗ cao theo người lớn. Không ra cổng xem nước.',
        safeFeedback: 'Đúng! Bé Gấu nghe người lớn và ở chỗ cao an toàn.',
        unsafeChoices: [
          {
            text: 'Ra cổng đứng xem nước dâng.',
            feedback: 'Không ra xem nước dâng. Ở chỗ cao với người lớn.',
          },
          {
            text: 'Ra ngoài nhặt đồ bị nước cuốn gần cổng.',
            feedback: 'Không ra ngoài lúc nước dâng. Ở trong với người lớn.',
          },
        ],
      },
    ],
  },
];
