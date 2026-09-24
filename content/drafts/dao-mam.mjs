// Module dao-mam — ATGT mầm non (Bé Gấu An Toàn). Draft chưa duyệt chuyên gia.
// Thử nghiệm nội bộ; chưa Bộ / chuyên gia / giáo viên phê duyệt cho game.
// Nhân vật: Bé Gấu + Mẹ Gấu. Người lớn luôn có trong bối cảnh; game chỉ ôn, không thay giám sát thật.

export const LESSONS = [
  {
    id: 'dao-mam-l1',
    moduleId: 'dao-mam',
    gradeBand: 'mam-3-4',
    title: 'Nắm tay & vỉa hè',
    objective:
      'Nắm tay người lớn khi đi bộ; đi trên vỉa hè hoặc chỗ người lớn chỉ; không chạy ra lòng đường.',
    teacherPrompt:
      'Cùng Bé Gấu: khi ra cửa, em nắm tay ai? Em đi ở chỗ nào — vỉa hè hay lòng đường?',
    parentNote:
      'Mẹ Gấu (người lớn) luôn nắm tay và chọn đường đi thật khi ra ngoài. Buổi chơi chỉ luyện lại quy tắc, chưa được chuyên gia duyệt; không thay giám sát. Ứng dụng không thu thông tin cá nhân của bé.',
    situations: [
      {
        id: 'dao-mam-l1-s1',
        hazard: 'ra cửa nhà không nắm tay',
        prompt:
          'Mẹ Gấu và Bé Gấu vừa mở cửa ra sân. Bé Gấu muốn chạy trước ra cổng. Bé Gấu làm gì?',
        safeText: 'Chạy lại nắm tay Mẹ Gấu, đi cạnh mẹ ra cổng.',
        safeFeedback: 'Tốt! Bé Gấu nắm tay Mẹ Gấu trước khi đi.',
        unsafeChoices: [
          {
            text: 'Chạy thẳng ra cổng một mình.',
            feedback: 'Ra ngoài phải nắm tay người lớn. Quay lại với Mẹ Gấu nhé.',
          },
          {
            text: 'Đi xa Mẹ Gấu vì sân nhà quen thuộc.',
            feedback: 'Dù ở sân vẫn nắm tay Mẹ Gấu khi mẹ dắt đi.',
          },
        ],
      },
      {
        id: 'dao-mam-l1-s2',
        hazard: 'đi xuống lòng đường',
        prompt:
          'Mẹ Gấu và Bé Gấu đi trên vỉa hè. Bé Gấu thấy chiếc lá đẹp ở giữa lòng đường. Bé Gấu làm gì?',
        safeText: 'Ở trên vỉa hè với Mẹ Gấu; nhờ mẹ lấy giúp nếu cần.',
        safeFeedback: 'Giỏi! Bé Gấu ở vỉa hè và nhờ Mẹ Gấu.',
        unsafeChoices: [
          {
            text: 'Buông tay chạy xuống lòng đường lấy lá.',
            feedback: 'Không xuống lòng đường. Ở vỉa hè và nhờ mẹ.',
          },
          {
            text: 'Đứng sát mép vỉa hè cúi xuống với tay.',
            feedback: 'Mép vỉa hè vẫn nguy hiểm. Nhờ Mẹ Gấu lấy giúp.',
          },
        ],
      },
      {
        id: 'dao-mam-l1-s3',
        hazard: 'bạn rủ thả tay chạy',
        prompt:
          'Mẹ Gấu đang nắm tay Bé Gấu trên vỉa hè. Bạn nhỏ rủ “thả tay chạy đua”. Bé Gấu làm gì?',
        safeText: 'Giữ nắm tay Mẹ Gấu, nói với mẹ; không thả tay để chạy.',
        safeFeedback: 'Đúng rồi! Bé Gấu vẫn nắm tay Mẹ Gấu.',
        unsafeChoices: [
          {
            text: 'Thả tay chạy cùng bạn.',
            feedback: 'Không thả tay khi đi đường. Nắm Mẹ Gấu nhé.',
          },
          {
            text: 'Nắm tay bạn thay vì Mẹ Gấu.',
            feedback: 'Đi đường nắm tay người lớn đang dắt em.',
          },
        ],
      },
      {
        id: 'dao-mam-l1-s4',
        hazard: 'vỉa hè có vật cản',
        prompt:
          'Trên vỉa hè có thùng rác chắn một phần. Mẹ Gấu và Bé Gấu đang đi. Bé Gấu làm gì?',
        safeText: 'Đi chậm cạnh Mẹ Gấu; làm theo mẹ chọn chỗ an toàn qua.',
        safeFeedback: 'Hay! Bé Gấu đi cùng Mẹ Gấu qua chỗ chật.',
        unsafeChoices: [
          {
            text: 'Tự trèo qua thùng, buông tay mẹ.',
            feedback: 'Không trèo một mình. Đi theo Mẹ Gấu chỉ.',
          },
          {
            text: 'Xuống lòng đường cho dễ đi.',
            feedback: 'Không xuống lòng đường. Ở với mẹ trên vỉa hè.',
          },
        ],
      },
      {
        id: 'dao-mam-l1-s5',
        hazard: 'gần lề đường có xe',
        prompt:
          'Mẹ Gấu và Bé Gấu đi sát lề, có xe máy đi qua. Bé Gấu muốn nhìn xe. Bé Gấu làm gì?',
        safeText: 'Nắm tay Mẹ Gấu, đứng trong chỗ mẹ chỉ, nhìn từ xa.',
        safeFeedback: 'Tốt lắm! Bé Gấu nắm tay và ở chỗ an toàn với mẹ.',
        unsafeChoices: [
          {
            text: 'Buông tay chạy ra sát xe để nhìn.',
            feedback: 'Xe đi nhanh. Nắm Mẹ Gấu và đứng xa.',
          },
          {
            text: 'Đứng giữa lòng đường vẫy tay xe.',
            feedback: 'Không đứng lòng đường. Ở vỉa hè với mẹ.',
          },
        ],
      },
    ],
  },

  {
    id: 'dao-mam-l2',
    moduleId: 'dao-mam',
    gradeBand: 'mam-3-4',
    title: 'Ba màu đèn',
    objective:
      'Đèn đỏ dừng, đèn vàng chờ, đèn xanh đi cùng người lớn; không tự sang đường.',
    teacherPrompt:
      'Cùng bé nhìn đèn: đỏ — vàng — xanh nghĩa là gì? Chỉ qua đường khi Mẹ Gấu (người lớn) nói được.',
    parentNote:
      'Luôn dắt tay bé ở lề đường; đèn xanh vẫn cần nhìn xe và quyết định của người lớn. Game là buổi diễn tập, chưa chuyên gia duyệt. Không thu thông tin cá nhân.',
    situations: [
      {
        id: 'dao-mam-l2-s1',
        hazard: 'đèn đỏ cho người đi bộ',
        prompt:
          'Mẹ Gấu và Bé Gấu đứng ở lề, đèn dành cho người đi bộ đang đỏ. Bé Gấu làm gì?',
        safeText: 'Dừng lại, nắm tay Mẹ Gấu, chờ đến khi mẹ nói được qua.',
        safeFeedback: 'Đúng! Bé Gấu dừng ở đèn đỏ cùng mẹ.',
        unsafeChoices: [
          {
            text: 'Kéo Mẹ Gấu bước qua vì đường vắng.',
            feedback: 'Đèn đỏ thì dừng. Chờ Mẹ Gấu nhé.',
          },
          {
            text: 'Chạy theo bạn vừa băng qua.',
            feedback: 'Không theo bạn khi đèn đỏ. Ở cạnh mẹ.',
          },
        ],
      },
      {
        id: 'dao-mam-l2-s2',
        hazard: 'đèn vàng — chờ thêm',
        prompt:
          'Mẹ Gấu và Bé Gấu đang đợi sang đường. Đèn chuyển sang màu vàng. Bé Gấu làm gì?',
        safeText: 'Đứng yên nắm tay Mẹ Gấu; đèn vàng là lúc chờ, chưa tự bước xuống.',
        safeFeedback: 'Giỏi! Đèn vàng — Bé Gấu chờ cùng Mẹ Gấu.',
        unsafeChoices: [
          {
            text: 'Chạy nhanh qua trước khi đèn đổi đỏ.',
            feedback: 'Đèn vàng không phải lúc chạy. Chờ mẹ.',
          },
          {
            text: 'Buông tay bước xuống vì vàng “gần xanh”.',
            feedback: 'Vàng là chờ. Nắm tay Mẹ Gấu đến khi mẹ dẫn qua.',
          },
        ],
      },
      {
        id: 'dao-mam-l2-s3',
        hazard: 'đèn xanh nhưng chưa được mẹ dẫn',
        prompt:
          'Đèn cho người đi bộ đã xanh. Mẹ Gấu vẫn đang nhìn hai bên đường. Bé Gấu làm gì?',
        safeText: 'Nắm tay Mẹ Gấu, đợi mẹ bước rồi đi cùng mẹ.',
        safeFeedback: 'Tốt! Bé Gấu đi khi Mẹ Gấu dẫn, dù đèn đã xanh.',
        unsafeChoices: [
          {
            text: 'Chạy qua ngay vì đèn xanh.',
            feedback: 'Đèn xanh vẫn cần mẹ dẫn. Đi cùng mẹ.',
          },
          {
            text: 'Thả tay chạy trước mẹ một đoạn.',
            feedback: 'Không thả tay. Sang đường sát cạnh Mẹ Gấu.',
          },
        ],
      },
      {
        id: 'dao-mam-l2-s4',
        hazard: 'đèn vàng khi đang gần lề',
        prompt:
          'Bé Gấu và Mẹ Gấu vừa tới lề đường, đèn đang vàng. Bé Gấu muốn bước xuống. Bé Gấu làm gì?',
        safeText: 'Dừng trên lề, nắm tay mẹ; coi đèn vàng là “chờ cùng mẹ”.',
        safeFeedback: 'Hay quá! Bé Gấu hiểu vàng là chờ với Mẹ Gấu.',
        unsafeChoices: [
          {
            text: 'Bước xuống vì sắp xanh.',
            feedback: 'Vàng là chờ trên lề. Làm theo Mẹ Gấu.',
          },
          {
            text: 'Đứng giữa đường vì vàng “không phải đỏ”.',
            feedback: 'Ở trên lề an toàn. Chờ mẹ dẫn qua.',
          },
        ],
      },
      {
        id: 'dao-mam-l2-s5',
        hazard: 'bạn vẫy khi đèn đỏ',
        prompt:
          'Đèn đỏ, Mẹ Gấu và Bé Gấu đang đợi. Bạn ở bên kia đường vẫy gọi. Bé Gấu làm gì?',
        safeText: 'Vẫy lại từ chỗ an toàn; nắm Mẹ Gấu, chờ đèn và mẹ cho qua.',
        safeFeedback: 'Đúng rồi! Bé Gấu không tự sang khi đèn đỏ.',
        unsafeChoices: [
          {
            text: 'Chạy sang vì bạn gọi.',
            feedback: 'Không sang khi đèn đỏ. Ở với Mẹ Gấu.',
          },
          {
            text: 'Bước xuống lề một chút để vẫy rõ hơn.',
            feedback: 'Ở trên lề an toàn. Chờ mẹ cùng qua.',
          },
        ],
      },
    ],
  },

  {
    id: 'dao-mam-l3',
    moduleId: 'dao-mam',
    gradeBand: 'mam-3-4',
    title: 'Xe máy',
    objective:
      'Đội mũ bảo hiểm do người lớn cài; ngồi yên giữa người lớn; không đứng trên yên xe.',
    teacherPrompt:
      'Khi lên xe máy với Mẹ Gấu: mũ ở đâu? Em ngồi thế nào? Em có đứng trên xe không?',
    parentNote:
      'Chỉ cho bé lên xe khi người lớn lái và đã cài mũ đúng; game không thay quy định thật. Nội dung draft, chưa chuyên gia duyệt. Ứng dụng không thu thông tin cá nhân.',
    situations: [
      {
        id: 'dao-mam-l3-s1',
        hazard: 'không đội mũ bảo hiểm',
        prompt:
          'Mẹ Gấu chuẩn bị chở Bé Gấu trên xe máy. Mẹ cầm mũ bảo hiểm cho bé. Bé Gấu làm gì?',
        safeText: 'Để Mẹ Gấu cài mũ vừa đầu, ngồi yên chờ mẹ xong.',
        safeFeedback: 'Tốt! Bé Gấu đội mũ cùng Mẹ Gấu trước khi đi.',
        unsafeChoices: [
          {
            text: 'Leo lên xe trước, không đội mũ.',
            feedback: 'Phải đội mũ trước. Nhờ Mẹ Gấu cài giúp.',
          },
          {
            text: 'Cầm mũ trên tay cho nhẹ.',
            feedback: 'Mũ phải được cài đúng. Để mẹ cài giúp em.',
          },
        ],
      },
      {
        id: 'dao-mam-l3-s2',
        hazard: 'ngồi không yên khi xe chạy',
        prompt:
          'Bé Gấu đang ngồi giữa Mẹ Gấu trên xe máy, xe vừa chạy. Bé Gấu muốn đứng lên nhìn. Bé Gấu làm gì?',
        safeText: 'Ngồi yên, hai tay vịn Mẹ Gấu như mẹ dặn.',
        safeFeedback: 'Giỏi! Bé Gấu ngồi yên an toàn trên xe.',
        unsafeChoices: [
          {
            text: 'Đứng lên trên yên để nhìn xa.',
            feedback: 'Không đứng trên xe. Ngồi yên với Mẹ Gấu.',
          },
          {
            text: 'Nghiêng người sang bên trái phải cho vui.',
            feedback: 'Xe đang chạy; ngồi yên và vịn mẹ.',
          },
        ],
      },
      {
        id: 'dao-mam-l3-s3',
        hazard: 'tuột mũ khi đi',
        prompt:
          'Xe đang chạy, mũ Bé Gấu hơi lệch. Mẹ Gấu nói sẽ dừng xe an toàn. Bé Gấu làm gì?',
        safeText: 'Ngồi yên; chờ Mẹ Gấu dừng rồi nhờ mẹ chỉnh mũ.',
        safeFeedback: 'Đúng! Bé Gấu chờ mẹ dừng an toàn.',
        unsafeChoices: [
          {
            text: 'Tự tuột mũ và cài lại khi xe đang chạy.',
            feedback: 'Không sửa mũ lúc xe chạy. Chờ mẹ dừng.',
          },
          {
            text: 'Tháo mũ vì nóng.',
            feedback: 'Giữ mũ đến khi mẹ dừng nơi an toàn.',
          },
        ],
      },
      {
        id: 'dao-mam-l3-s4',
        hazard: 'muốn đứng trên yên khi dừng đèn',
        prompt:
          'Mẹ Gấu và Bé Gấu dừng đèn đỏ trên xe. Bé Gấu muốn đứng trên yên phía sau. Bé Gấu làm gì?',
        safeText: 'Ngồi yên trên xe; chờ Mẹ Gấu báo xuống xe ở chỗ an toàn.',
        safeFeedback: 'Hay! Bé Gấu không đứng trên yên xe.',
        unsafeChoices: [
          {
            text: 'Đứng lên yên sau vì xe đang dừng.',
            feedback: 'Dù dừng vẫn không đứng trên xe. Ngồi yên nhé.',
          },
          {
            text: 'Trèo xuống đất một mình giữa đường.',
            feedback: 'Không xuống giữa đường. Ở trên xe với mẹ.',
          },
        ],
      },
      {
        id: 'dao-mam-l3-s5',
        hazard: 'bạn rủ không đội mũ',
        prompt:
          'Mẹ Gấu và Bé Gấu sắp lên xe. Bạn nhỏ nói “không cần mũ cho nhanh”. Bé Gấu làm gì?',
        safeText: 'Vẫn đội mũ theo Mẹ Gấu; nói với mẹ nếu em lo.',
        safeFeedback: 'Tốt lắm! Bé Gấu vẫn đội mũ cùng mẹ.',
        unsafeChoices: [
          {
            text: 'Bỏ mũ theo bạn.',
            feedback: 'Luôn đội mũ khi mẹ cho lên xe.',
          },
          {
            text: 'Leo lên xe bạn trước khi mẹ cài mũ.',
            feedback: 'Chờ Mẹ Gấu cài mũ xong rồi mới lên.',
          },
        ],
      },
    ],
  },

  {
    id: 'dao-mam-l4',
    moduleId: 'dao-mam',
    gradeBand: 'mam-5-6',
    title: 'Bóng & đồ chơi',
    objective:
      'Chơi bóng và đồ chơi trong khu an toàn; nếu đồ lăn về phía đường thì nhờ người lớn.',
    teacherPrompt:
      'Bóng của em thường chơi ở đâu? Nếu bóng lăn ra gần đường, em làm gì với Mẹ Gấu?',
    parentNote:
      'Chọn sân hoặc khu vui chơi có rào, người lớn ở gần; không để bé tự chạy ra đường lấy đồ. Game chỉ ôn, chưa chuyên gia duyệt; không thu PII.',
    situations: [
      {
        id: 'dao-mam-l4-s1',
        hazard: 'bóng lăn về phía đường',
        prompt:
          'Mẹ Gấu và Bé Gấu chơi bóng trong sân trường. Bóng lăn về phía cổng gần đường. Bé Gấu làm gì?',
        safeText: 'Dừng chạy; báo Mẹ Gấu; nhờ mẹ lấy bóng giúp.',
        safeFeedback: 'Đúng! Bé Gấu nhờ Mẹ Gấu, không tự ra đường.',
        unsafeChoices: [
          {
            text: 'Chạy theo bóng ra sát đường.',
            feedback: 'Không chạy ra đường. Gọi Mẹ Gấu lấy giúp.',
          },
          {
            text: 'Nhờ bạn nhỏ chạy ra lấy.',
            feedback: 'Nhờ người lớn, không nhờ bạn chạy ra đường.',
          },
        ],
      },
      {
        id: 'dao-mam-l4-s2',
        hazard: 'đá bóng ra ngoài khu chơi',
        prompt:
          'Trong khu vui chơi có hàng rào. Mẹ Gấu ngồi gần. Bé Gấu muốn đá bóng thật mạnh ra phía đường. Bé Gấu làm gì?',
        safeText: 'Đá nhẹ trong khu chơi, giữ bóng cạnh Mẹ Gấu.',
        safeFeedback: 'Tốt! Bé Gấu chơi trong khu an toàn với mẹ.',
        unsafeChoices: [
          {
            text: 'Đá mạnh cho bóng bay qua rào.',
            feedback: 'Chơi nhẹ trong sân. Giữ bóng khỏi đường.',
          },
          {
            text: 'Leo rào đuổi theo bóng.',
            feedback: 'Không leo rào. Nhờ Mẹ Gấu nếu bóng ra ngoài.',
          },
        ],
      },
      {
        id: 'dao-mam-l4-s3',
        hazard: 'đồ chơi bay về phía xe',
        prompt:
          'Bé Gấu và Mẹ Gấu ở công viên. Con diều giấy tuột bay về phía lối xe đi. Bé Gấu làm gì?',
        safeText: 'Đứng yên cạnh Mẹ Gấu; nhờ mẹ cùng xem và lấy giúp nếu cần.',
        safeFeedback: 'Giỏi! Bé Gấu ở với mẹ, không chạy theo diều ra đường.',
        unsafeChoices: [
          {
            text: 'Chạy theo diều ra lối xe.',
            feedback: 'Không chạy ra chỗ xe. Ở cạnh Mẹ Gấu.',
          },
          {
            text: 'Chạy giữa bãi cỏ không nhìn xe.',
            feedback: 'Dừng lại với mẹ. Nhờ người lớn giúp.',
          },
        ],
      },
      {
        id: 'dao-mam-l4-s4',
        hazard: 'bạn ném bóng ra ngoài sân',
        prompt:
          'Mẹ Gấu đang trông Bé Gấu chơi trong sân nhà. Bạn ném bóng vọt ra cổng. Bé Gấu làm gì?',
        safeText: 'Báo Mẹ Gấu; chờ mẹ lấy bóng, không tự mở cổng chạy ra.',
        safeFeedback: 'Hay! Bé Gấu báo mẹ thay vì tự chạy ra.',
        unsafeChoices: [
          {
            text: 'Mở cổng chạy ra lấy bóng.',
            feedback: 'Không tự ra ngoài. Nhờ Mẹ Gấu.',
          },
          {
            text: 'Đứng sát cổng nhìn ra đường chờ bóng.',
            feedback: 'Lùi vào sân an toàn. Báo mẹ lấy giúp.',
          },
        ],
      },
      {
        id: 'dao-mam-l4-s5',
        hazard: 'xe đi qua khi đang chơi gần lề',
        prompt:
          'Mẹ Gấu và Bé Gấu chơi bóng gần vỉa hè trong khu được phép. Có xe đi qua. Bé Gấu làm gì?',
        safeText: 'Cầm bóng, đứng vào trong chỗ Mẹ Gấu chỉ, chờ xe qua.',
        safeFeedback: 'Tốt lắm! Bé Gấu vào trong và ở cạnh mẹ.',
        unsafeChoices: [
          {
            text: 'Đuổi theo bóng lăn sát lề khi có xe.',
            feedback: 'Dừng chơi, vào trong với Mẹ Gấu.',
          },
          {
            text: 'Ném bóng ra đường cho xe đỡ đi.',
            feedback: 'Không ném đồ ra đường. Giữ bóng trong khu chơi.',
          },
        ],
      },
    ],
  },

  {
    id: 'dao-mam-l5',
    moduleId: 'dao-mam',
    gradeBand: 'mam-5-6',
    title: 'Trong ô tô',
    objective:
      'Ngồi đúng ghế, thắt dây an toàn theo người lớn; nếu bị khóa quên trong xe: bấm còi liên tục và đập cửa kính gọi giúp.',
    teacherPrompt:
      'Trong ô tô với Mẹ Gấu: em ngồi ghế nào? Dây an toàn ai cài? Nếu em một mình trong xe, em làm gì?',
    parentNote:
      'Luôn không để bé một mình trong ô tô; buổi chơi chỉ luyện còi và gọi giúp, không dạy tự thoát nguy hiểm khác. Draft chưa chuyên gia duyệt; không thu thông tin cá nhân.',
    situations: [
      {
        id: 'dao-mam-l5-s1',
        hazard: 'không ngồi đúng ghế',
        prompt:
          'Mẹ Gấu và Bé Gấu sắp lên ô tô. Mẹ chỉ ghế có ghế boost và dây an toàn cho bé. Bé Gấu làm gì?',
        safeText: 'Ngồi đúng ghế Mẹ Gấu chỉ; để mẹ cài dây an toàn.',
        safeFeedback: 'Đúng! Bé Gấu ngồi đúng chỗ và cài dây cùng mẹ.',
        unsafeChoices: [
          {
            text: 'Ngồi ghế trước vì nhìn rõ hơn.',
            feedback: 'Ngồi ghế mẹ chọn cho bé. Làm theo Mẹ Gấu.',
          },
          {
            text: 'Đứng giữa hai ghế trước khi xe chạy.',
            feedback: 'Ngồi yên ghế em; không đứng trong xe.',
          },
        ],
      },
      {
        id: 'dao-mam-l5-s2',
        hazard: 'tháo dây khi xe đang chạy',
        prompt:
          'Xe đang chạy, Mẹ Gấu lái. Bé Gấu muốn tháo dây an toàn lấy đồ chơi dưới ghế. Bé Gấu làm gì?',
        safeText: 'Giữ dây đã cài; nhờ Mẹ Gấu dừng xe an toàn rồi mới lấy.',
        safeFeedback: 'Tốt! Bé Gấu giữ dây và nhờ mẹ dừng.',
        unsafeChoices: [
          {
            text: 'Tháo dây và cúi xuống lấy đồ.',
            feedback: 'Xe chạy phải giữ dây. Chờ mẹ dừng.',
          },
          {
            text: 'Mở cửa một chút cho thoáng.',
            feedback: 'Không mở cửa khi xe chạy. Ở yên ghế em.',
          },
        ],
      },
      {
        id: 'dao-mam-l5-s3',
        hazard: 'bị quên trong xe khóa',
        prompt:
          'Mẹ Gấu vô tình khóa xe, Bé Gấu còn ngồi trong xe một mình ở chỗ đỗ an toàn. Bé Gấu làm gì?',
        safeText: 'Bấm còi liên tục và đập tay lên cửa kính gọi người giúp; chờ người lớn.',
        safeFeedback: 'Giỏi! Bé Gấu gọi giúp bằng còi và cửa kính.',
        unsafeChoices: [
          {
            text: 'Im lặng ngồi chơi chờ mẹ quay lại.',
            feedback: 'Gọi giúp: bấm còi và đập cửa kính nhẹ.',
          },
          {
            text: 'Tự mở nắp capô hoặc móc dây lạ.',
            feedback: 'Chỉ bấm còi và gọi qua cửa kính; chờ người lớn.',
          },
        ],
      },
      {
        id: 'dao-mam-l5-s4',
        hazard: 'nóng trong xe khi bị khóa',
        prompt:
          'Bé Gấu một mình trong xe đã khóa, Mẹ Gấu đang quay lại từ xa. Trong xe hơi nóng. Bé Gấu làm gì?',
        safeText: 'Bấm còi liên tục, đập cửa kính gọi; ngồi yên ghế chờ người lớn mở.',
        safeFeedback: 'Đúng rồi! Bé Gấu gọi giúp và chờ người lớn.',
        unsafeChoices: [
          {
            text: 'Tự thử nhấn nút lạ dưới vô-lăng.',
            feedback: 'Dùng còi và gọi qua kính; chờ Mẹ Gấu hoặc người lớn.',
          },
          {
            text: 'Trèo sang ghế lái bấm mọi nút.',
            feedback: 'Ở ghế em; bấm còi và gọi giúp, không tự làm thêm.',
          },
        ],
      },
      {
        id: 'dao-mam-l5-s5',
        hazard: 'muốn mở cửa khi xe đang chạy',
        prompt:
          'Mẹ Gấu và Bé Gấu trên ô tô đang chạy chậm. Bé Gấu muốn mở cửa nhìn ra. Bé Gấu làm gì?',
        safeText: 'Không mở cửa; ngồi yên với dây an toàn, nhìn qua kính an toàn.',
        safeFeedback: 'Hay! Bé Gấu ngồi yên và nhìn qua kính cùng mẹ.',
        unsafeChoices: [
          {
            text: 'Kéo tay mở cửa một khe.',
            feedback: 'Xe chạy không mở cửa. Ngồi yên ghế em.',
          },
          {
            text: 'Tháo dây đứng lên cửa sổ.',
            feedback: 'Giữ dây, ngồi yên. Nhờ Mẹ Gấu khi cần dừng.',
          },
        ],
      },
    ],
  },
];
