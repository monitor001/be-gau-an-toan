// Module khac-lac — Người lạ & khi bị lạc (draft)
// Bé Gấu An Toàn — track mầm non 3–6. Chưa chuyên gia duyệt. Không thu PII trong app.
// Ranh giới: không hù dọa, không máu; người lớn tin cậy là lá chắn chính; game chỉ luyện tập.

export const LESSONS = [
  {
    id: 'khac-lac-l1',
    moduleId: 'khac-lac',
    gradeBand: 'mam-3-4',
    title: 'Không đi theo',
    objective:
      'Ở sát bố mẹ, cô giáo hoặc người lớn tin cậy; không đi theo người lạ dù có lời rủ hay lý do “mẹ nhờ đón”.',
    teacherPrompt:
      'Cùng bé luyện câu: “Con ở với mẹ/cô.” Nhắc: chỉ đi cùng người lớn đã quen và mẹ/cô đồng ý trước.',
    parentNote:
      'Người lớn luôn giám sát và nắm tay bé ở chỗ đông người; game chỉ giúp bé ôn câu từ chối, không thay việc trông coi. Nội dung chưa được chuyên gia phê duyệt. Ứng dụng không hỏi tên thật, số điện thoại hay địa chỉ nhà của bé.',
    situations: [
      {
        id: 'khac-lac-l1-s1',
        hazard: 'người lạ rủ đi chơi',
        prompt:
          'Bé Gấu và Mẹ Gấu đang đi chợ. Một người lạ mỉm cười rủ: “Theo cô đi xem chó con nhé!” Mẹ Gấu đang chọn rau cách vài bước. Bé Gấu làm gì?',
        safeText: 'Ở lại sát Mẹ Gấu, nói to: “Con ở với mẹ.” Không đi theo người lạ.',
        safeFeedback: 'Giỏi! Bé Gấu ở với mẹ và không đi theo người lạ.',
        unsafeChoices: [
          {
            text: 'Đi theo người lạ vì muốn xem chó con.',
            feedback: 'Không đi theo người lạ. Quay lại sát Mẹ Gấu ngay.',
          },
          {
            text: 'Đi một đoạn rồi quay lại tìm mẹ.',
            feedback: 'Không rời mẹ dù chỉ một đoạn. Ở chỗ mẹ thấy được.',
          },
        ],
      },
      {
        id: 'khac-lac-l1-s2',
        hazard: '“mẹ nhờ đón”',
        prompt:
          'Ở cổng trường, cô giáo đang dắt các bạn vào lớp. Một người lạ nói với Bé Gấu: “Mẹ con nhờ cô đón về.” Bé Gấu chưa thấy mẹ. Cô giáo ở gần. Bé Gấu làm gì?',
        safeText: 'Đi tìm cô giáo ngay, nói chuyện đó với cô; chờ mẹ đến đúng giờ hẹn.',
        safeFeedback: 'Đúng rồi! Bé Gấu báo cô và chờ mẹ, không tin lời người lạ.',
        unsafeChoices: [
          {
            text: 'Đi theo người lạ vì họ nói mẹ đã nhờ.',
            feedback: 'Mẹ không bảo trước thì không đi. Hãy nói với cô giáo.',
          },
          {
            text: 'Im lặng đi theo cho nhanh về nhà.',
            feedback: 'Không im lặng đi theo. Luôn báo cô hoặc người lớn tin cậy.',
          },
        ],
      },
      {
        id: 'khac-lac-l1-s3',
        hazard: 'xe lạ mở cửa mời lên',
        prompt:
          'Mẹ Gấu đang cầm túi ở bãi xe. Một xe lạ mở cửa và nói: “Lên xe, cô đưa về nhà.” Bé Gấu đứng cạnh mẹ. Bé Gấu làm gì?',
        safeText: 'Nắm tay Mẹ Gấu, đứng xa xe lạ; nhờ mẹ nói không với người đó.',
        safeFeedback: 'Tốt! Bé Gấu ở với mẹ và không lên xe người lạ.',
        unsafeChoices: [
          {
            text: 'Lên xe vì nghe lời rủ nhẹ nhàng.',
            feedback: 'Không lên xe lạ. Chỉ đi xe khi mẹ hoặc người lớn quen dắt.',
          },
          {
            text: 'Đứng gần cửa xe để nhìn bên trong.',
            feedback: 'Đứng xa xe lạ, nắm tay mẹ; không leo lên xe.',
          },
        ],
      },
      {
        id: 'khac-lac-l1-s4',
        hazard: 'người lạ rủ vào hẻm / chỗ vắng',
        prompt:
          'Bé Gấu và bố đang đi dạo công viên. Một người lạ chỉ vào hẻm cây: “Vào đó có kẹo miễn phí.” Bố đang buộc dây giày. Bé Gấu làm gì?',
        safeText: 'Ở cạnh bố, nói bố nghe; không vào hẻm hay chỗ vắng với người lạ.',
        safeFeedback: 'Hay lắm! Bé Gấu ở với bố và không đi theo lời rủ.',
        unsafeChoices: [
          {
            text: 'Chạy nhanh vào hẻm trước khi bố đứng dậy.',
            feedback: 'Không vào chỗ vắng. Chờ bố và đi cùng bố.',
          },
          {
            text: 'Đi theo người lạ một chút rồi gọi bố.',
            feedback: 'Không rời bố để theo người lạ. Ở sát bố nhé.',
          },
        ],
      },
      {
        id: 'khac-lac-l1-s5',
        hazard: 'bạn đi theo người lạ',
        prompt:
          'Ở sân chơi, bạn rủ Bé Gấu đi theo một người lớn lạ “mua kem”. Cô giáo đang trông lớp gần đó. Bé Gấu làm gì?',
        safeText: 'Không đi theo; vẫn chơi trong khu cô trông, báo cô về lời rủ của bạn.',
        safeFeedback: 'Đúng! Bé Gấu ở khu an toàn và báo cô, không đi theo người lạ.',
        unsafeChoices: [
          {
            text: 'Đi theo bạn và người lạ để được kem.',
            feedback: 'Kem từ người lạ không lấy. Ở lại và nói với cô.',
          },
          {
            text: 'Đứng xa nhìn bạn đi, rồi chạy theo sau.',
            feedback: 'Không chạy theo ra khỏi khu cô trông. Báo cô giúp bạn.',
          },
        ],
      },
    ],
  },

  {
    id: 'khac-lac-l2',
    moduleId: 'khac-lac',
    gradeBand: 'mam-3-4',
    title: 'Không nhận quà',
    objective:
      'Cảm ơn lịch sự nhưng không nhận bánh kẹo, đồ chơi, tiền hay quà “bí mật” từ người lạ; tìm người lớn tin cậy.',
    teacherPrompt:
      'Luyện câu: “Cảm ơn, con không lấy.” Nhắc: quà chỉ nhận khi mẹ/cô đồng ý và biết trước.',
    parentNote:
      'Phụ huynh dạy bé từ chối quà từ người không quen và luôn kể lại cho người lớn; game chỉ mô phỏng. Chưa có duyệt chuyên gia. App không lưu thông tin cá nhân của trẻ.',
    situations: [
      {
        id: 'khac-lac-l2-s1',
        hazard: 'bánh kẹo từ người lạ',
        prompt:
          'Bé Gấu và mẹ đang xếp hàng ngoài cửa hàng. Người lạ đưa gói kẹo: “Ăn thử đi cháu!” Mẹ đang xem hóa đơn. Bé Gấu làm gì?',
        safeText: 'Lắc đầu, nói: “Cảm ơn, con không lấy.”; nắm tay mẹ và báo mẹ nghe.',
        safeFeedback: 'Giỏi! Bé Gấu cảm ơn, không lấy kẹo và đã báo mẹ.',
        unsafeChoices: [
          {
            text: 'Nhận kẹo và ăn ngay vì thấy ngon.',
            feedback: 'Không ăn đồ người lạ đưa. Cảm ơn và ở với mẹ.',
          },
          {
            text: 'Cất kẹo vào túi để ăn sau một mình.',
            feedback: 'Không cất quà lạ. Báo mẹ và để mẹ quyết định.',
          },
        ],
      },
      {
        id: 'khac-lac-l2-s2',
        hazard: 'đồ chơi hấp dẫn',
        prompt:
          'Trong công viên, người lạ đưa Bé Gấu một xe hơi nhỏ: “Cô tặng cháu, đừng nói với mẹ.” Bố đang ngồi ghế gần đó. Bé Gấu làm gì?',
        safeText: 'Không cầm đồ chơi; đi tới bố, kể hết chuyện người lạ vừa nói.',
        safeFeedback: 'Tốt! Bé Gấu không giữ quà lạ và đã kể với bố.',
        unsafeChoices: [
          {
            text: 'Nhận xe hơi và giấu vì được bảo “bí mật”.',
            feedback: 'Quà bí mật từ người lạ không nhận. Kể ngay với bố mẹ.',
          },
          {
            text: 'Cầm chơi một lúc rồi mới trả lại.',
            feedback: 'Không cầm quà lạ. Đưa tay ra lùi và tìm bố.',
          },
        ],
      },
      {
        id: 'khac-lac-l2-s3',
        hazard: 'tiền / lì xì',
        prompt:
          'Bé Gấu và cô giáo đang đi tham quan. Người lạ nhét tờ tiền vào tay Bé Gấu: “Mua kem nhé!” Cô đang dắt các bạn phía trước. Bé Gấu làm gì?',
        safeText: 'Không giữ tiền; chạy theo cô, đưa tiền cho cô và kể chuyện.',
        safeFeedback: 'Đúng rồi! Bé Gấu không giữ tiền lạ và đã báo cô.',
        unsafeChoices: [
          {
            text: 'Cất tiền vào túi để mua kem một mình.',
            feedback: 'Tiền từ người lạ không giữ. Đưa cô và kể lại.',
          },
          {
            text: 'Trả tiền rồi im lặng vì sợ cô mắng.',
            feedback: 'Không im lặng. Cô cần biết để giúp em an toàn.',
          },
        ],
      },
      {
        id: 'khac-lac-l2-s4',
        hazard: 'quà “chỉ mình em biết”',
        prompt:
          'Người lạ thì thầm với Bé Gấu: “Cô có quà đẹp, đừng kể ai.” Mẹ Gấu đang nói chuyện với hàng xóm cách vài bước. Bé Gấu làm gì?',
        safeText: 'Lùi lại, nói to với Mẹ Gấu: “Mẹ ơi, người này muốn cho con quà!”',
        safeFeedback: 'Hay lắm! Bé Gấu không giữ bí mật với người lạ và đã gọi mẹ.',
        unsafeChoices: [
          {
            text: 'Nhận quà và hứa không kể với ai.',
            feedback: 'Bí mật với người lạ là không an toàn. Luôn kể mẹ cô.',
          },
          {
            text: 'Lắc đầu nhưng đứng im, không gọi mẹ.',
            feedback: 'Hãy gọi mẹ to và rõ. Người lớn cần biết ngay.',
          },
        ],
      },
      {
        id: 'khac-lac-l2-s5',
        hazard: 'kem / nước ngọt miễn phí',
        prompt:
          'Có người lạ cầm ly nước ngọt mời Bé Gấu: “Uống đi, không mất tiền.” Ông nội đang đứng cạnh quầy nước. Bé Gấu làm gì?',
        safeText: 'Nói “Cảm ơn, con không uống.”; nắm tay ông và hỏi ông nếu muốn uống nước.',
        safeFeedback: 'Giỏi! Bé Gấu từ chối lịch sự và ở với người lớn quen.',
        unsafeChoices: [
          {
            text: 'Uống thử một ngụm vì trông mát.',
            feedback: 'Không uống đồ người lạ mời. Chỉ uống khi ông mẹ cho.',
          },
          {
            text: 'Nhận ly mang đi chơi xa ông.',
            feedback: 'Không mang đồ lạ đi xa người lớn. Ở sát ông nhé.',
          },
        ],
      },
    ],
  },

  {
    id: 'khac-lac-l3',
    moduleId: 'khac-lac',
    gradeBand: 'mam-3-4',
    title: 'Thuộc tên mình',
    objective:
      'Biết nói tên mình và tên bố/mẹ với người lớn tin cậy khi cần; không đọc số điện thoại cho người lạ (số chỉ luyện offline với bố mẹ).',
    teacherPrompt:
      'Luyện ngoài đời: “Con là …, bố/mẹ con là …” với cô bảo vệ, nhân viên quầy thông tin khi có người lớn đi cùng. App không nhập số điện thoại.',
    parentNote:
      'Bố mẹ dạy tên gọi và tên phụ huynh ở nhà; khi lạc, bé nói với người lớn tin cậy (cô bán hàng, bảo vệ) chứ không khoe với người lạ. Game không thu số điện thoại hay địa chỉ. Nội dung chưa chuyên gia duyệt.',
    situations: [
      {
        id: 'khac-lac-l3-s1',
        hazard: 'cô bảo vệ hỏi tên khi thấy bé lạc một mình',
        prompt:
          'Bé Gấu lỡ xa mẹ trong siêu thị. Chú bảo vệ đến hỏi nhẹ: “Cháu tên gì?” Mẹ vẫn chưa thấy. Bé Gấu làm gì?',
        safeText: 'Nói rõ tên mình và tên mẹ; đứng yên chờ chú bảo vệ gọi loa hoặc đưa tới quầy thông tin.',
        safeFeedback: 'Đúng! Bé Gấu nói tên với người giúp an toàn và đứng chờ.',
        unsafeChoices: [
          {
            text: 'Im lặng vì ngại nói với người lớn.',
            feedback: 'Với bảo vệ / quầy thông tin, hãy nói tên để tìm mẹ.',
          },
          {
            text: 'Chạy lung tung tìm mẹ, không trả lời.',
            feedback: 'Đứng yên và nói tên với người giúp; không chạy loạn.',
          },
        ],
      },
      {
        id: 'khac-lac-l3-s2',
        hazard: 'người lạ hỏi tên và địa chỉ nhà',
        prompt:
          'Người lạ cúi xuống hỏi Bé Gấu: “Cháu tên gì, nhà ở đâu?” Mẹ Gấu đang chọn hàng ở kệ bên cạnh. Bé Gấu làm gì?',
        safeText: 'Không nói địa chỉ nhà; quay sang Mẹ Gấu và nói: “Mẹ ơi, người này hỏi con.”',
        safeFeedback: 'Tốt! Bé Gấu không khoe địa chỉ với người lạ và đã gọi mẹ.',
        unsafeChoices: [
          {
            text: 'Nói hết tên và đường nhà vì thấy người ta thân thiện.',
            feedback: 'Địa chỉ nhà chỉ kể với mẹ cô hoặc người giúp an toàn khi thật lạc.',
          },
          {
            text: 'Chỉ nói tên, không gọi mẹ.',
            feedback: 'Khi người lạ hỏi, hãy ở sát mẹ và báo mẹ ngay.',
          },
        ],
      },
      {
        id: 'khac-lac-l3-s3',
        hazard: 'người lạ hỏi số điện thoại',
        prompt:
          'Người lạ nói: “Cháu đọc số điện thoại mẹ cho cô gọi nhé.” Bố đang đứng sau quầy nước gần đó. Bé Gấu làm gì?',
        safeText: 'Không đọc số; đi tới bố và nhờ bố nói chuyện với người đó.',
        safeFeedback: 'Giỏi! Số điện thoại không nói với người lạ; nhờ bố mẹ giúp.',
        unsafeChoices: [
          {
            text: 'Đọc số mẹ vì nghĩ họ sẽ gọi giúp.',
            feedback: 'Không đọc số cho người lạ. Chỉ bố mẹ hoặc người giúp an toàn biết.',
          },
          {
            text: 'Bảo “con không nhớ” rồi đi theo người lạ tìm mẹ.',
            feedback: 'Không đi theo. Tìm bố mẹ hoặc quầy thông tin / bảo vệ.',
          },
        ],
      },
      {
        id: 'khac-lac-l3-s4',
        hazard: 'bạn rủ “đọc số cho vui”',
        prompt:
          'Bạn muốn Bé Gấu đọc to số điện thoại mẹ “cho vui” trước mặt người lạ vừa đến gần. Cô giáo đang trông sân chơi. Bé Gấu làm gì?',
        safeText: 'Nói không với bạn; không đọc số; báo cô nếu người lạ vẫn nghe.',
        safeFeedback: 'Hay lắm! Số điện thoại là bí mật gia đình, không đọc cho vui.',
        unsafeChoices: [
          {
            text: 'Đọc số vì bạn thách.',
            feedback: 'Số mẹ không đọc trước người lạ. Từ chối và chơi tiếp gần cô.',
          },
          {
            text: 'Thì thầm số cho bạn nghe.',
            feedback: 'Không chia sẻ số điện thoại ở chỗ đông. Chỉ luyện với bố mẹ ở nhà.',
          },
        ],
      },
      {
        id: 'khac-lac-l3-s5',
        hazard: 'quên tên khi lo lắng',
        prompt:
          'Bé Gấu hơi lạc mẹ ở hội chợ. Cô bán hàng quen ở gian hàng gần đó hỏi: “Cháu tên gì, mẹ cháu tên gì?” Bé Gấu làm gì?',
        safeText: 'Hít thở chậm, nói tên mình và tên mẹ với cô bán hàng; đứng yên chờ cô gọi mẹ.',
        safeFeedback: 'Đúng rồi! Nói tên với người quen ở quầy hàng giúp tìm mẹ nhanh hơn.',
        unsafeChoices: [
          {
            text: 'Khóc và chạy đi vì quên hết tên.',
            feedback: 'Cố bình tĩnh, nói tên với cô quen; không chạy lung tung.',
          },
          {
            text: 'Chỉ gật đầu, không nói gì.',
            feedback: 'Hãy nói to tên mình và tên mẹ với người giúp an toàn.',
          },
        ],
      },
    ],
  },

  {
    id: 'khac-lac-l4',
    moduleId: 'khac-lac',
    gradeBand: 'mam-5-6',
    title: 'Đứng yên khi lạc',
    objective:
      'Khi lỡ xa người lớn tin cậy: đứng yên chỗ vừa mất, không chạy lung tung, không theo đám đông lạ, không chạy ra đường.',
    teacherPrompt:
      'Thống nhất “điểm hẹn” khi đi chợ/hội: nếu lạc, đứng yên chỗ cuối thấy mẹ/cô. Luyện hít thở chậm trước khi chơi tình huống.',
    parentNote:
      'Người lớn nắm tay và hẹn chỗ gặp lại trước khi vào chỗ đông; game giúp bé nhớ quy tắc đứng yên. Không thay việc trông bé. Chưa chuyên gia duyệt; app không thu thông tin cá nhân.',
    situations: [
      {
        id: 'khac-lac-l4-s1',
        hazard: 'lạc trong siêu thị — chạy lung tung',
        prompt:
          'Bé Gấu không thấy Mẹ Gấu giữa siêu thị đông người. Mẹ vừa ở kệ sữa cách vài bước. Bé Gấu làm gì?',
        safeText: 'Đứng yên tại chỗ, không chạy; gọi “Mẹ ơi!” to và nhìn quanh tìm mẹ.',
        safeFeedback: 'Tốt! Đứng yên giúp mẹ tìm thấy Bé Gấu nhanh hơn.',
        unsafeChoices: [
          {
            text: 'Chạy nhanh sang nhiều kệ để tìm mẹ.',
            feedback: 'Chạy lung tung dễ xa hơn. Đứng yên và gọi mẹ.',
          },
          {
            text: 'Trốn vào góc kệ để trò chơi.',
            feedback: 'Không trốn. Ở chỗ cao, dễ thấy và gọi mẹ.',
          },
        ],
      },
      {
        id: 'khac-lac-l4-s2',
        hazard: 'theo đám đông lạ',
        prompt:
          'Bé Gấu lạc cô giáo ở lễ hội. Một đám người đi nhanh, bạn rủ “theo đám đó chắc gặp cô.” Bé Gấu làm gì?',
        safeText: 'Không theo đám lạ; đứng yên ở chỗ cao, gọi “Cô ơi!” và chờ cô quay lại điểm hẹn.',
        safeFeedback: 'Giỏi! Bé Gấu ở chỗ hẹn và gọi cô, không theo đám đông.',
        unsafeChoices: [
          {
            text: 'Chạy theo đám đông vì sợ một mình.',
            feedback: 'Đám người lạ không phải chỗ an toàn. Đứng yên và gọi cô.',
          },
          {
            text: 'Đi theo bạn ra cổng hội chợ.',
            feedback: 'Không ra cổng một mình. Ở điểm hẹn với cô.',
          },
        ],
      },
      {
        id: 'khac-lac-l4-s3',
        hazard: 'khóc chạy ra đường',
        prompt:
          'Bé Gấu không thấy bố ở chợ Tết, rất muốn khóc và chạy ra mép đường nhìn xe. Người bán hàng quen ở sạp gần đó. Bé Gấu làm gì?',
        safeText: 'Ở lại trong khu chợ, không ra đường; nhờ cô bán hàng quen gọi bố hoặc đưa tới quầy loa.',
        safeFeedback: 'Đúng! Ở trong khu an toàn, không chạy ra đường.',
        unsafeChoices: [
          {
            text: 'Chạy ra vỉa hè gọi bố vì sợ.',
            feedback: 'Đường xe cộ nguy hiểm. Ở trong chợ và nhờ người quen giúp.',
          },
          {
            text: 'Ngồi khóc giữa lối đi, che mặt không nhìn ai.',
            feedback: 'Nhìn quanh và nhờ cô quen; đứng chỗ dễ thấy.',
          },
        ],
      },
      {
        id: 'khac-lac-l4-s4',
        hazard: 'theo người lạ “đi tìm mẹ”',
        prompt:
          'Bé Gấu lạc mẹ ở công viên. Người lạ nói: “Cô biết mẹ cháu, đi theo cô.” Cô bảo vệ đang đứng gần cổng. Bé Gấu làm gì?',
        safeText: 'Không đi theo người lạ; đi bộ tới chú bảo vệ, nói “Con lạc mẹ” và đứng yên chờ.',
        safeFeedback: 'Hay lắm! Bé Gấu chọn người giúp an toàn và không đi theo lạ.',
        unsafeChoices: [
          {
            text: 'Nắm tay người lạ vì tin họ biết mẹ.',
            feedback: 'Không nắm tay người lạ. Tìm bảo vệ hoặc quầy thông tin.',
          },
          {
            text: 'Chạy theo sau người lạ một đoạn.',
            feedback: 'Đứng yên và gọi bảo vệ; không đi theo người không quen.',
          },
        ],
      },
      {
        id: 'khac-lac-l4-s5',
        hazard: 'lạc trên xe buýt / điểm đông',
        prompt:
          'Bé Gấu và mẹ xuống xe buýt, mẹ lỡ không kịp xuống. Xe đã đi. Chú tài xế và hành khách đang ở trong xe. Bé Gấu làm gì?',
        safeText: 'Nói to với chú tài xế hoặc cô soát vé; ngồi yên trên xe, không tự xuống giữa đường.',
        safeFeedback: 'Tốt! Bé Gấu báo người lớn trên xe và chờ đúng cách.',
        unsafeChoices: [
          {
            text: 'Tự mở cửa xe nhảy xuống giữa đường đuổi mẹ.',
            feedback: 'Không tự xuống xe giữa đường. Nói tài xế giúp gọi mẹ.',
          },
          {
            text: 'Khóc và chạy lên trước xe buýt.',
            feedback: 'Ở an toàn trong xe; nhờ tài xế dừng đúng bến và liên lạc người lớn.',
          },
        ],
      },
    ],
  },

  {
    id: 'khac-lac-l5',
    moduleId: 'khac-lac',
    gradeBand: 'mam-5-6',
    title: 'Người giúp an toàn',
    objective:
      'Khi cần giúp: nhờ cô bán hàng, chú bảo vệ, mẹ đang bế em bé; không đi theo người lạ “chỉ đường”, không lên xe lạ.',
    teacherPrompt:
      'Chỉ qua người lớn: ai là “người giúp an toàn” ở trường, siêu thị, công viên? Không dạy bé đi một mình xa với người lạ.',
    parentNote:
      'Phụ huynh chỉ cho bé nhận áo/blouse nhân viên, quầy thông tin, bảo vệ — luôn có người lớn đi cùng khi luyện ngoài đời. Game là thử tình huống, chưa duyệt chuyên gia. Không thu PII trong app.',
    situations: [
      {
        id: 'khac-lac-l5-s1',
        hazard: 'nhờ cô bán hàng',
        prompt:
          'Bé Gấu lạc mẹ trong siêu thị. Thấy quầy bánh có cô bán hàng đội tạp dề tên cửa hàng. Bé Gấu làm gì?',
        safeText: 'Đi tới quầy, nói: “Con lạc mẹ.”; nhờ cô gọi loa hoặc đưa con tới quầy thông tin.',
        safeFeedback: 'Giỏi! Cô bán hàng là người giúp an toàn trong siêu thị.',
        unsafeChoices: [
          {
            text: 'Đi theo khách lạ vì họ cũng đang tìm đường.',
            feedback: 'Không theo khách lạ. Tới quầy có nhân viên.',
          },
          {
            text: 'Ngồi dưới kệ ăn bánh, không hỏi ai.',
            feedback: 'Hãy nói với cô bán hàng để tìm mẹ nhanh.',
          },
        ],
      },
      {
        id: 'khac-lac-l5-s2',
        hazard: 'nhờ chú bảo vệ',
        prompt:
          'Bé Gấu lạc bố ở trung tâm thương mại. Thấy chú bảo vệ đội mũ ở cửa chính. Bé Gấu làm gì?',
        safeText: 'Đi tới chú bảo vệ, nói rõ con lạc bố; đứng cạnh chú chờ, không chạy ra cửa một mình.',
        safeFeedback: 'Đúng rồi! Bảo vệ giúp bé liên lạc và giữ an toàn.',
        unsafeChoices: [
          {
            text: 'Chạy ra ngoài đường tìm bố.',
            feedback: 'Ở trong tòa nhà và nhờ bảo vệ. Không ra đường một mình.',
          },
          {
            text: 'Theo người lạ “cũng đi tìm bố”.',
            feedback: 'Chỉ nhờ bảo vệ hoặc quầy thông tin, không theo người lạ.',
          },
        ],
      },
      {
        id: 'khac-lac-l5-s3',
        hazard: 'nhờ mẹ đang bế em bé',
        prompt:
          'Bé Gấu lạc cô giáo ở sân trường ngày hội. Thấy một mẹ đang bế em bé, đội thẻ phụ huynh. Bé Gấu làm gì?',
        safeText: 'Lịch sự hỏi: “Cô giúp con gọi cô giáo được không?”; đứng gần, không đi xa với người khác.',
        safeFeedback: 'Tốt! Nhờ phụ huynh có thẻ hoặc cô giáo gần đó là lựa chọn an toàn.',
        unsafeChoices: [
          {
            text: 'Nắm tay người lạ vì họ cũng mặc áo đẹp.',
            feedback: 'Chọn người có thẻ phụ huynh / nhân viên / cô giáo, không nắm tay lạ.',
          },
          {
            text: 'Khóc và chạy vào đám đông xa.',
            feedback: 'Đứng gần mẹ bế em và nhờ gọi cô; không chạy xa.',
          },
        ],
      },
      {
        id: 'khac-lac-l5-s4',
        hazard: 'người lạ “chỉ đường” dắt đi',
        prompt:
          'Bé Gấu lạc mẹ ở công viên. Người lạ nói: “Cô chỉ đường, đi theo cô.” Có quầy nước có nhân viên đội mũ gần đó. Bé Gấu làm gì?',
        safeText: 'Cảm ơn nhưng không đi theo; tới quầy nhân viên, nói con lạc mẹ và nhờ gọi loa.',
        safeFeedback: 'Hay lắm! Bé Gấu không đi theo chỉ đường của người lạ.',
        unsafeChoices: [
          {
            text: 'Đi theo người lạ vì họ nói biết đường.',
            feedback: 'Chỉ đường của người lạ không theo. Tới quầy nhân viên.',
          },
          {
            text: 'Đi theo một đoạn rồi quay lại nếu sợ.',
            feedback: 'Không đi cùng người lạ dù một đoạn. Ở quầy nhân viên.',
          },
        ],
      },
      {
        id: 'khac-lac-l5-s5',
        hazard: 'mời lên xe “đưa tìm mẹ”',
        prompt:
          'Bé Gấu lạc mẹ ở bãi xe siêu thị. Người lạ mở cửa xe: “Lên xe, cô đưa tìm mẹ.” Nhân viên siêu thị đang đẩy xe hàng gần đó. Bé Gấu làm gì?',
        safeText: 'Không lên xe; đi tới nhân viên siêu thị, nói con lạc mẹ và đứng cạnh họ chờ.',
        safeFeedback: 'Giỏi! Không lên xe lạ; nhờ nhân viên có áo tên cửa hàng.',
        unsafeChoices: [
          {
            text: 'Lên xe vì muốn gặp mẹ nhanh.',
            feedback: 'Không bao giờ lên xe người lạ. Nhờ nhân viên / bảo vệ.',
          },
          {
            text: 'Ngồi vào ghế phụ “chỉ một phút” chờ mẹ.',
            feedback: 'Không lên xe lạ dù chỉ một phút. Tới chỗ nhân viên có áo tên cửa hàng.',
          },
        ],
      },
    ],
  },
];
