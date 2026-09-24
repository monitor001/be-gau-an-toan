// DRAFT NHẠY CẢM — cần parent/GV đọc trước khi approved.
// Module khac-than — An toàn cơ thể / phòng chống xâm hại (mầm non).
// Thử nghiệm phụ Bé Gấu An Toàn. Chưa chuyên gia duyệt. Không thu PII.
// Ranh giới: không mô tả xâm hại chi tiết; không máu; không gọi tên hành vi tình dục;
// không minh họa chạm vùng riêng trong prompt; dùng “vùng đồ bơi” = riêng tư.
// Quy tắc 3 bước: nói “Không!” → chạy tới chỗ đông / cô / bố mẹ → kể ngay.

export const LESSONS = [
  {
    id: 'khac-than-l1',
    moduleId: 'khac-than',
    gradeBand: 'mam-3-4',
    title: 'Tên bộ phận',
    objective:
      'Gọi đúng tên trung tính các bộ phận cơ thể (đầu, tay, chân, bụng, vùng đồ bơi); không xấu hổ khi nói với bố mẹ hoặc cô.',
    teacherPrompt:
      'Cùng bé luyện tên bình thường, không biệt danh xấu. Nhắc: vùng đồ bơi cũng có tên riêng như các chỗ khác; bố mẹ/cô luôn sẵn sàng nghe.',
    parentNote:
      'Người lớn là lá chắn chính; đây chỉ là luyện tập bình tĩnh cùng con. Nội dung chưa được chuyên gia phê duyệt — hãy dừng game, đọc từng câu và trò chuyện với con. Game không thay giám sát của người lớn.',
    situations: [
      {
        id: 'khac-than-l1-s1',
        hazard: 'biệt danh xấu cho bộ phận',
        prompt:
          'Bạn chơi cùng Bé Gấu và gọi bụng bằng tên lạ cho vui. Cô đang ở gần trong lớp. Bé Gấu làm gì?',
        safeText: 'Nói với bạn: “Mình gọi là bụng.”; nếu bạn còn trêu thì kể cô nghe.',
        safeFeedback: 'Tốt! Bé Gấu dùng tên đúng và nhờ người lớn tin cậy khi cần.',
        unsafeChoices: [
          {
            text: 'Cười theo và gọi tên lạ giống bạn.',
            feedback: 'Mình dùng tên thật, bình thường. Không cần tên trêu.',
          },
          {
            text: 'Im lặng, không nói gì với ai.',
            feedback: 'Có thể nói với cô hoặc bố mẹ; kể ra không có lỗi.',
          },
        ],
      },
      {
        id: 'khac-than-l1-s2',
        hazard: 'xấu hổ không nói với cô',
        prompt:
          'Cô hỏi Bé Gấu: “Hôm nay tay có đau không?” Bé Gấu thấy ngại nói “vùng đồ bơi” hơi đau. Bố mẹ hay đón Bé Gấu sau giờ học. Bé Gấu làm gì?',
        safeText: 'Nói nhẹ với cô hoặc chờ bố mẹ: tay và vùng đồ bơi hơi đau để người lớn giúp.',
        safeFeedback: 'Giỏi! Nói đúng tên giúp người lớn chăm sóc em.',
        unsafeChoices: [
          {
            text: 'Lắc đầu và giấu vì xấu hổ.',
            feedback: 'Không cần xấu hổ; bố mẹ và cô luôn muốn nghe em.',
          },
          {
            text: 'Chỉ chỉ tay, không nói chỗ nào đau.',
            feedback: 'Có thể nói tên bộ phận; người lớn sẽ hiểu và giúp.',
          },
        ],
      },
      {
        id: 'khac-than-l1-s3',
        hazard: 'tắm cùng người lớn chăm sóc',
        prompt:
          'Tối nay Mẹ Gấu tắm cho Bé Gấu và nhắc: “Mẹ rửa lưng, bụng và vùng đồ bơi để sạch.” Bé Gấu làm gì?',
        safeText: 'Đứng yên cạnh mẹ; nói nhẹ nếu chỗ nào khó chịu; mẹ là người lớn chăm sóc em.',
        safeFeedback: 'Đúng rồi! Khi tắm, bố mẹ chăm sóc vùng đồ bơi là việc bình thường.',
        unsafeChoices: [
          {
            text: 'Giật mình và không cho mẹ biết chỗ nào đang rửa.',
            feedback: 'Có thể hỏi mẹ và nói tên bộ phận; mẹ đang chăm sóc em.',
          },
          {
            text: 'Tự rửa vùng đồ bơi một mình trong bồn không có người lớn.',
            feedback: 'Lúc nhỏ, tắm và rửa cùng người lớn tin cậy an toàn hơn.',
          },
        ],
      },
      {
        id: 'khac-than-l1-s4',
        hazard: 'sách tranh về cơ thể',
        prompt:
          'Bố mẹ mở sách tranh cơ thể và hỏi: “Đây là đầu, đây là tay, đây là vùng đồ bơi.” Bé Gấu làm gì?',
        safeText: 'Lặp theo bố mẹ từng tên; hỏi thêm nếu chưa rõ.',
        safeFeedback: 'Hay lắm! Học tên đúng giúp em nói rõ khi cần người lớn.',
        unsafeChoices: [
          {
            text: 'Che sách vì ngại, không nhìn.',
            feedback: 'Tên cơ thể là bình thường; cùng bố mẹ học nhé.',
          },
          {
            text: 'Đổi tên vùng đồ bơi thành từ trêu cho vui.',
            feedback: 'Giữ tên trung tính như bố mẹ dạy; không dùng từ trêu.',
          },
        ],
      },
      {
        id: 'khac-than-l1-s5',
        hazard: 'bạn hỏi tên bộ phận',
        prompt:
          'Bạn hỏi Bé Gấu: “Chỗ mặc quần áo bơi gọi là gì?” Cô đang ngồi gần góc lớp. Bé Gấu làm gì?',
        safeText: 'Trả lời: “Vùng đồ bơi — chỗ riêng.”; nếu bạn cười trêu thì kể cô.',
        safeFeedback: 'Tốt! Bé Gấu biết tên và nhờ người lớn khi bạn trêu.',
        unsafeChoices: [
          {
            text: 'Nói từ trêu bạn bảo vì sợ bị cười.',
            feedback: 'Dùng tên bố mẹ/cô dạy; kể người lớn nếu bị trêu.',
          },
          {
            text: 'Chạy đi không trả lời và khóc một mình.',
            feedback: 'Có thể nói với cô; cô sẽ giúp em và bạn hiểu.',
          },
        ],
      },
    ],
  },

  {
    id: 'khac-than-l2',
    moduleId: 'khac-than',
    gradeBand: 'mam-3-4',
    title: 'Vùng đồ bơi',
    objective:
      'Vùng đồ bơi là riêng tư; không ai được nhìn hay chạm vào đó nếu không phải người lớn tin cậy đang chăm sóc (như tắm cùng bố mẹ).',
    teacherPrompt:
      'Giải thích nhẹ: vùng đồ bơi = chỗ quần áo bơi che; chỉ bố mẹ/cô chăm sóc khi tắm hoặc thay quần áo. Ai khác muốn nhìn/chạm → nói Không và tìm người lớn.',
    parentNote:
      'Người lớn là lá chắn chính; đây chỉ là luyện tập bình tĩnh cùng con. Nội dung chưa được chuyên gia phê duyệt — hãy dừng game, đọc từng câu và trò chuyện với con. Game không thay giám sát của người lớn.',
    situations: [
      {
        id: 'khac-than-l2-s1',
        hazard: 'ai đó muốn nhìn vùng đồ bơi',
        prompt:
          'Một người lớn lạ trong sân chơi bảo Bé Gấu: “Cho cô xem vùng đồ bơi một chút.” Bố mẹ đang mua nước gần đó. Bé Gấu làm gì?',
        safeText: 'Lùi lại, nói to “Không!” và chạy tới bố mẹ ngay.',
        safeFeedback: 'Giỏi! Vùng đồ bơi là riêng tư; Bé Gấu đã tìm người lớn tin cậy.',
        unsafeChoices: [
          {
            text: 'Đứng yên vì người đó là người lớn.',
            feedback: 'Người lạ không được nhìn vùng đồ bơi. Chạy tới bố mẹ.',
          },
          {
            text: 'Làm theo vì sợ bị mắng.',
            feedback: 'Nói Không là đúng; kể bố mẹ không có lỗi.',
          },
        ],
      },
      {
        id: 'khac-than-l2-s2',
        hazard: 'trò “so sánh” vùng riêng',
        prompt:
          'Bạn lớn rủ Bé Gấu vào góc khuất: “Mình so vùng đồ bơi cho vui, đừng kể ai.” Cô giám sát đang ở sân chơi. Bé Gấu làm gì?',
        safeText: 'Nói “Không!” và chạy ra chỗ cô hoặc bạn thân có người lớn.',
        safeFeedback: 'Đúng rồi! Vùng đồ bơi không phải trò chơi; tìm cô là việc nên làm.',
        unsafeChoices: [
          {
            text: 'Theo bạn vì muốn chơi cùng.',
            feedback: 'Không so hay khoe vùng đồ bơi. Ở chỗ có cô.',
          },
          {
            text: 'Đồng ý nếu bạn hứa giữ bí mật.',
            feedback: 'Bí mật về vùng đồ bơi không ổn; kể cô hoặc bố mẹ.',
          },
        ],
      },
      {
        id: 'khac-than-l2-s3',
        hazard: 'người lạ hứa quà để xem',
        prompt:
          'Người lạ đưa kẹo và bảo: “Ăn xong cho chú xem vùng đồ bơi nhé.” Mẹ Gấu đang xếp hàng gần đó. Bé Gấu làm gì?',
        safeText: 'Không nhận kẹo; nói “Không!” và nắm tay mẹ ngay.',
        safeFeedback: 'Tốt lắm! Quà không đổi lấy vùng riêng; mẹ là chỗ an toàn.',
        unsafeChoices: [
          {
            text: 'Nhận kẹo rồi mới tìm mẹ.',
            feedback: 'Không nhận quà từ người lạ; chạy tới mẹ trước.',
          },
          {
            text: 'Lùi xa nhưng im lặng, không kể mẹ.',
            feedback: 'Hãy kể mẹ ngay; kể ra con không có lỗi.',
          },
        ],
      },
      {
        id: 'khac-than-l2-s4',
        hazard: 'thay quần áo cùng cô',
        prompt:
          'Sau giờ tập thể dục, cô bảo Bé Gấu vào phòng thay đồ cùng cô vì quần ướt. Cô là cô giáo lớp mầm. Bé Gấu làm gì?',
        safeText: 'Thay đồ cùng cô trong phòng có cửa mở; nói nếu cần giúp cài nút.',
        safeFeedback: 'Đúng! Cô giáo tin cậy chăm sóc khi thay quần áo là bình thường.',
        unsafeChoices: [
          {
            text: 'Tự thay một mình trong phòng kho tối, không gọi cô.',
            feedback: 'Nhờ cô hoặc người lớn tin cậy khi quần ướt; không ở chỗ tối một mình.',
          },
          {
            text: 'Để bạn lạ giúp thay vì cô.',
            feedback: 'Chỉ người lớn tin cậy (bố mẹ, cô) giúp thay đồ.',
          },
        ],
      },
      {
        id: 'khac-than-l2-s5',
        hazard: 'bị đòi chạm vùng đồ bơi',
        prompt:
          'Trong lớp, một bạn lớn nắm tay Bé Gấu và rủ trò “vui” với vùng đồ bơi — chỗ riêng. Cô đang dọn đồ gần cửa. Bé Gấu làm gì?',
        safeText: 'Giật tay lại, hô to “Không!” và chạy tới cô kể ngay.',
        safeFeedback: 'Hay quá! Không ai được chạm vùng đồ bơi trừ khi bố mẹ/cô đang chăm sóc.',
        unsafeChoices: [
          {
            text: 'Đứng im vì sợ bạn giận.',
            feedback: 'Nói Không và tìm cô; đó là quyền của em.',
          },
          {
            text: 'Hứa giữ bí mật nếu bạn dừng lại.',
            feedback: 'Bí mật về chạm không ổn; kể cô ngay.',
          },
        ],
      },
    ],
  },

  {
    id: 'khac-than-l3',
    moduleId: 'khac-than',
    gradeBand: 'mam-5-6',
    title: 'Nói Không',
    objective:
      'Khi cảm thấy không an toàn, nói to “Không!”; không giữ bí mật về chạm hoặc lời rủ khuất.',
    teacherPrompt:
      'Luyện hô “Không!” to, rõ (có thể đóng vai nhẹ). Nhắc: Không không có nghĩa là bất lịch sự — đó là cách bảo vệ cơ thể.',
    parentNote:
      'Người lớn là lá chắn chính; đây chỉ là luyện tập bình tĩnh cùng con. Nội dung chưa được chuyên gia phê duyệt — hãy dừng game, đọc từng câu và trò chuyện với con. Game không thay giám sát của người lớn.',
    situations: [
      {
        id: 'khac-than-l3-s1',
        hazard: 'bị kéo tay vào chỗ khuất',
        prompt:
          'Một người lớn lạ nắm tay Bé Gấu và kéo vào góc hành lang ít người. Bố đang ở quầy gần đó. Bé Gấu làm gì?',
        safeText: 'Hô to “Không!”; giật tay; chạy thẳng tới bố.',
        safeFeedback: 'Giỏi! Nói Không to và tìm bố mẹ là bước đúng.',
        unsafeChoices: [
          {
            text: 'Đi theo vì tay bị nắm chặt.',
            feedback: 'Cố hô Không và chạy về phía bố mẹ hoặc chỗ đông người.',
          },
          {
            text: 'Khóc nhỏ, không nói gì.',
            feedback: 'Hãy hô Không to; người xung quanh và bố mẹ sẽ giúp.',
          },
        ],
      },
      {
        id: 'khac-than-l3-s2',
        hazard: 'đòi giữ bí mật về chạm',
        prompt:
          'Người lớn quen biết gia đình làm Bé Gấu không vui và bảo: “Đừng kể bố mẹ, giữ bí mật nhé.” Mẹ Gấu đang nấu ăn trong bếp. Bé Gấu làm gì?',
        safeText: 'Nói “Không, con sẽ kể mẹ!” và chạy vào bếp kể mẹ ngay.',
        safeFeedback: 'Đúng rồi! Bí mật về chạm không ổn; kể mẹ không có lỗi.',
        unsafeChoices: [
          {
            text: 'Gật đầu giữ bí mật vì quen người đó.',
            feedback: 'Dù quen hay lạ, chạm không được phép thì phải kể bố mẹ.',
          },
          {
            text: 'Im lặng đến tối mới nói.',
            feedback: 'Kể ngay người lớn tin cậy; không cần chờ.',
          },
        ],
      },
      {
        id: 'khac-than-l3-s3',
        hazard: 'trò “đi xem đồ bí mật”',
        prompt:
          'Bạn rủ Bé Gấu: “Vào phòng kho xem đồ bí mật, không ai biết.” Cô đang ở lớp bên cạnh. Bé Gấu làm gì?',
        safeText: 'Nói “Không!”; ở lại lớp; kể cô nếu bạn cứ rủ.',
        safeFeedback: 'Tốt! Không vào chỗ khuất một mình; ở nơi có cô.',
        unsafeChoices: [
          {
            text: 'Theo bạn vào phòng kho cho vui.',
            feedback: 'Không đi chỗ khuất; nói Không và ở chỗ có người lớn.',
          },
          {
            text: 'Theo nếu bạn hứa không kể cô.',
            feedback: 'Bí mật đi chỗ khuất không ổn; kể cô.',
          },
        ],
      },
      {
        id: 'khac-than-l3-s4',
        hazard: 'người lớn lạ dặt im',
        prompt:
          'Người lớn lạ vừa nói chuyện không vui với Bé Gấu và bảo: “Im đi, đừng la.” Cô trực ở cổng trường gần đó. Bé Gấu làm gì?',
        safeText: 'Hô “Không!” hoặc gọi “Cô ơi!”; chạy tới cô trực.',
        safeFeedback: 'Hay lắm! La gọi người lớn tin cậy là việc nên làm.',
        unsafeChoices: [
          {
            text: 'Im lặng và đứng sợ một chỗ.',
            feedback: 'Gọi cô hoặc bố mẹ to; không cần im khi không an toàn.',
          },
          {
            text: 'Khóc nhỏ trong góc, không gọi ai.',
            feedback: 'Chạy tới cô trực; họ sẽ giúp em.',
          },
        ],
      },
      {
        id: 'khac-than-l3-s5',
        hazard: 'bị ép hứa không nói Không',
        prompt:
          'Bạn lớn bảo: “Nếu mày nói Không với tao thì tao không chơi.” Cô đang quan sát sân chơi. Bé Gấu cảm thấy không vui. Bé Gấu làm gì?',
        safeText: 'Vẫn nói “Không!” khi không muốn; đi chơi chỗ có cô hoặc bạn khác.',
        safeFeedback: 'Đúng! Nói Không để bảo vệ mình; cô luôn sẵn sàng giúp.',
        unsafeChoices: [
          {
            text: 'Nuốt lời, làm theo bạn sợ mất bạn.',
            feedback: 'Cơ thể của em quan trọng; nói Không và tìm cô nếu cần.',
          },
          {
            text: 'La mắng bạn to thay vì tìm cô.',
            feedback: 'Nói Không rõ ràng; nếu vẫn lo, kể cô giúp hai bạn.',
          },
        ],
      },
    ],
  },

  {
    id: 'khac-than-l4',
    moduleId: 'khac-than',
    gradeBand: 'mam-5-6',
    title: 'Chạy đi',
    objective:
      'Sau khi nói Không, chạy tới chỗ đông người, cô giáo, bố mẹ hoặc người lớn tin cậy; không theo vào phòng riêng hay chỗ khuất.',
    teacherPrompt:
      'Luyện “chạy tới” — chỉ ra trên sơ đồ lớp/nhà: cửa cô, bố mẹ, quầy bảo vệ, sân đông. Không dọa; nhấn mạnh chạy là bình thường khi không an toàn.',
    parentNote:
      'Người lớn là lá chắn chính; đây chỉ là luyện tập bình tĩnh cùng con. Nội dung chưa được chuyên gia phê duyệt — hãy dừng game, đọc từng câu và trò chuyện với con. Game không thay giám sát của người lớn.',
    situations: [
      {
        id: 'khac-than-l4-s1',
        hazard: 'rủ vào phòng riêng',
        prompt:
          'Người lớn lạ bảo: “Vào phòng này xem quà, nhanh lên.” Sân trước trường đông phụ huynh đón con. Bé Gấu làm gì?',
        safeText: 'Nói “Không!”; quay lại chạy ra sân đông, tìm bố mẹ hoặc cô.',
        safeFeedback: 'Giỏi! Không vào phòng riêng với người lạ; chỗ đông an toàn hơn.',
        unsafeChoices: [
          {
            text: 'Bước vào phòng vì tò mò quà.',
            feedback: 'Không vào phòng riêng; chạy về chỗ có bố mẹ hoặc cô.',
          },
          {
            text: 'Đứng ngoài cửa chờ xem.',
            feedback: 'Lùi xa và chạy tới người lớn tin cậy ngay.',
          },
        ],
      },
      {
        id: 'khac-than-l4-s2',
        hazard: 'theo người lạ ra bãi xe',
        prompt:
          'Người lạ nói: “Bố mẹ bảo chú đón, đi ra xe.” Bé Gấu không thấy bố mẹ. Cô giám sát đang ở cổng trường. Bé Gấu làm gì?',
        safeText: 'Không theo; chạy ngược lại cổng, nắm tay cô giám sát.',
        safeFeedback: 'Đúng rồi! Chỉ đi với bố mẹ hoặc người lớn đã hẹn sẵn với cô.',
        unsafeChoices: [
          {
            text: 'Theo người lạ vì nghe tên bố mẹ.',
            feedback: 'Không theo; hỏi cô hoặc chờ đúng chỗ đón.',
          },
          {
            text: 'Đi một mình tìm bố mẹ không nói với cô.',
            feedback: 'Ở cổng với cô; cô giúp gọi bố mẹ.',
          },
        ],
      },
      {
        id: 'khac-than-l4-s3',
        hazard: 'bị kéo ra góc sân',
        prompt:
          'Bạn lớn kéo Bé Gấu ra góc sân xa cô: “Chơi trò này đi.” Bé Gấu thấy không vui. Cô đang ở giữa sân. Bé Gấu làm gì?',
        safeText: 'Thả tay, chạy thẳng về phía cô và đứng cạnh cô.',
        safeFeedback: 'Tốt! Chạy tới cô khi không muốn ở góc khuất.',
        unsafeChoices: [
          {
            text: 'Theo bạn vì sợ bạn mạnh hơn.',
            feedback: 'Chạy về cô; cô sẽ giúp em.',
          },
          {
            text: 'Ngồi khóc ở góc, không chạy đi.',
            feedback: 'Đứng dậy chạy tới cô; đó là việc nên làm.',
          },
        ],
      },
      {
        id: 'khac-than-l4-s4',
        hazard: 'mời vào nhà không có người lớn nhà',
        prompt:
          'Hàng xóm quen mặt rủ: “Sang nhà chú chơi, bố mẹ chưa về cũng được.” Mẹ Gấu đang trồng cây sân trước nhà mình. Bé Gấu làm gì?',
        safeText: 'Nói “Con ở nhà mẹ”; không sang; kể mẹ ngay.',
        safeFeedback: 'Hay lắm! Chỉ sang nhà người khác khi bố mẹ đồng ý và biết.',
        unsafeChoices: [
          {
            text: 'Sang nhà hàng xóm vì quen mặt.',
            feedback: 'Ở cạnh mẹ; kể mẹ trước khi sang nhà ai.',
          },
          {
            text: 'Đồng ý nhưng không kể mẹ.',
            feedback: 'Luôn kể bố mẹ khi có lời rủ lạ.',
          },
        ],
      },
      {
        id: 'khac-than-l4-s5',
        hazard: 'chỗ vắng trong siêu thị',
        prompt:
          'Trong siêu thị, một người lạ bảo Bé Gấu đi theo vào lối kho vắng “lấy kẹo”. Bố mẹ đang ở quầy thanh toán gần đó. Bé Gấu làm gì?',
        safeText: 'Nói “Không!”; chạy ngược ra quầy, nắm tay bố mẹ.',
        safeFeedback: 'Đúng! Chỗ đông và bố mẹ là nơi an toàn; không theo vào kho vắng.',
        unsafeChoices: [
          {
            text: 'Đi theo vì muốn kẹo.',
            feedback: 'Không theo người lạ; chạy tìm bố mẹ.',
          },
          {
            text: 'Đứng giữa lối đi, không chạy.',
            feedback: 'Chạy thẳng tới bố mẹ hoặc nhân viên quầy.',
          },
        ],
      },
    ],
  },

  {
    id: 'khac-than-l5',
    moduleId: 'khac-than',
    gradeBand: 'mam-5-6',
    title: 'Kể ngay',
    objective:
      'Kể ngay bố mẹ, cô hoặc người lớn tin cậy khi cảm thấy không an toàn; kể ra thì con không có lỗi; không giữ bí mật về chạm.',
    teacherPrompt:
      'Nhấn: kể sớm giúp người lớn bảo vệ em. Luyện câu mở đầu: “Mẹ ơi / Cô ơi, có chuyện con muốn kể.” Không trách con khi kể.',
    parentNote:
      'Người lớn là lá chắn chính; đây chỉ là luyện tập bình tĩnh cùng con. Nội dung chưa được chuyên gia phê duyệt — hãy dừng game, đọc từng câu và trò chuyện với con. Game không thay giám sát của người lớn.',
    situations: [
      {
        id: 'khac-than-l5-s1',
        hazard: 'bí mật “chỉ mình biết”',
        prompt:
          'Bạn bảo: “Chuyện hôm qua chỉ hai mình biết, đừng kể cô.” Bé Gấu cảm thấy lo. Bố mẹ thường hỏi chuyện trường lúc tối. Bé Gấu làm gì?',
        safeText: 'Kể bố mẹ hoặc cô: có lời rủ / chạm / bí mật làm con không vui.',
        safeFeedback: 'Giỏi! Kể ra con không có lỗi; bố mẹ và cô sẽ lắng nghe.',
        unsafeChoices: [
          {
            text: 'Giữ bí mật vì đã hứa bạn.',
            feedback: 'Bí mật làm con lo thì nên kể người lớn tin cậy.',
          },
          {
            text: 'Chờ nhiều ngày mới nói.',
            feedback: 'Kể sớm giúp người lớn bảo vệ em.',
          },
        ],
      },
      {
        id: 'khac-than-l5-s2',
        hazard: 'người lớn lạ dặt im',
        prompt:
          'Sau giờ học, người lớn lạ nói chuyện không vui và bảo Bé Gấu “đừng kể ai”. Cô vẫn ở lớp. Bé Gấu làm gì?',
        safeText: 'Vào lớp kể cô ngay; chờ bố mẹ đón và kể lại.',
        safeFeedback: 'Đúng rồi! Kể cô và bố mẹ — đó không phải lỗi của con.',
        unsafeChoices: [
          {
            text: 'Im vì sợ bị mắng.',
            feedback: 'Người lớn tin cậy không mắng vì con kể; họ sẽ giúp.',
          },
          {
            text: 'Chỉ kể bạn, không kể cô.',
            feedback: 'Kể cô hoặc bố mẹ trước; họ biết cách giúp.',
          },
        ],
      },
      {
        id: 'khac-than-l5-s3',
        hazard: 'xấu hổ sau khi nói Không',
        prompt:
          'Bé Gấu đã hô “Không!” với người lạ và chạy tới mẹ. Mẹ đang bế em. Bé Gấu lo mẹ giận. Bé Gấu làm gì?',
        safeText: 'Kể mẹ chuyện vừa xảy ra; nhớ: kể ra con không có lỗi.',
        safeFeedback: 'Tốt lắm! Mẹ muốn nghe để bảo vệ em.',
        unsafeChoices: [
          {
            text: 'Không kể, sợ mẹ la.',
            feedback: 'Mẹ sẽ nghe và giúp; kể là việc đúng.',
          },
          {
            text: 'Nói dối là mình đùa.',
            feedback: 'Kể thật giúp mẹ giữ em an toàn.',
          },
        ],
      },
      {
        id: 'khac-than-l5-s4',
        hazard: 'bạn bảo đừng mách',
        prompt:
          'Lúc chơi, bạn làm Bé Gấu không vui ở vùng đồ bơi và bảo: “Đừng mách cô.” Cô đang ở bàn giáo viên. Bé Gấu làm gì?',
        safeText: 'Kể cô ngay: bạn làm không vui ở vùng đồ bơi và dặt giữ bí mật.',
        safeFeedback: 'Hay quá! Bí mật về chạm không ổn; cô sẽ giúp cả hai bạn.',
        unsafeChoices: [
          {
            text: 'Im lặng vì sợ mất bạn.',
            feedback: 'Kể cô không có lỗi; cơ thể em cần được bảo vệ.',
          },
          {
            text: 'Chờ về nhà mới kể, không kể cô.',
            feedback: 'Kể cô ngay ở trường; cô có thể giúp liền.',
          },
        ],
      },
      {
        id: 'khac-than-l5-s5',
        hazard: 'không chắc chuyện có “xấu” không',
        prompt:
          'Hôm nay có người lớn nói chuyện làm Bé Gấu khó chịu; con không chắc có phải chuyện xấu không. Bố đang đọc sách trong phòng khách. Bé Gấu làm gì?',
        safeText: 'Tới cạnh bố: “Bố ơi, con muốn kể chuyện hôm nay.”',
        safeFeedback: 'Đúng! Kể cả khi chưa chắc; bố mẹ giúp con hiểu và an toàn.',
        unsafeChoices: [
          {
            text: 'Giữ trong lòng vì sợ làm bố lo.',
            feedback: 'Bố muốn nghe; kể giúp cả nhà giữ em an toàn.',
          },
          {
            text: 'Chỉ vẽ tranh, không nói miệng.',
            feedback: 'Có thể kể bằng lời hoặc nhờ bố hỏi từng câu; quan trọng là kể.',
          },
        ],
      },
    ],
  },
];
