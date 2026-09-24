// Module khac-choi — Động vật & vui chơi an toàn (draft nội dung)
// Thử nghiệm phụ Bé Gấu An Toàn. Chưa được chuyên gia / giáo viên phê duyệt cho game. Không thu PII.
// Ranh giới: không mô tả thương tích; thú lạ chỉ đến gần khi người lớn/chủ đồng ý; sân chơi cần cô/phụ huynh giám sát.
// Game chỉ ôn quy tắc — người lớn vẫn là lá chắn chính.

export const LESSONS = [
  {
    id: 'khac-choi-l1',
    moduleId: 'khac-choi',
    gradeBand: 'mam-3-4',
    title: 'Thú lạ',
    objective:
      'Gặp chó mèo không quen: đứng xa, không trêu; hỏi người lớn trước khi vuốt hoặc cho ăn.',
    teacherPrompt:
      'Cùng bé nhìn từ xa: chó mèo lạ có thể sợ hoặc giật mình. Nhắc: chỉ đến gần khi có người lớn và chủ thú đồng ý.',
    parentNote:
      'Luôn giám sát khi bé gần động vật, kể cả thú nhỏ. Dạy bé đứng xa và hỏi trước — game chỉ luyện tập, không thay việc bạn quan sát ngoài đời thật.',
    situations: [
      {
        id: 'khac-choi-l1-s1',
        hazard: 'chó lạ đang sủa gần vỉa hè',
        prompt:
          'Bé Gấu đi cùng mẹ, thấy một con chó lạ đang sủa gần vỉa hè. Bạn muốn chạy lại “nghịch”. Mẹ đang nắm tay Bé Gấu. Bé Gấu làm gì?',
        safeText: 'Ở bên mẹ, đứng xa chó; hỏi mẹ trước khi làm gì thêm.',
        safeFeedback: 'Tốt! Bé Gấu ở cạnh mẹ và không tự chạy lại gần chó lạ.',
        unsafeChoices: [
          {
            text: 'Buông tay mẹ chạy lại vuốt chó.',
            feedback: 'Chó lạ có thể sợ. Ở cạnh mẹ và đứng xa nhé.',
          },
          {
            text: 'Hô “huh” để trêu chó cho vui.',
            feedback: 'Không trêu chó lạ. Giữ khoảng cách và hỏi mẹ.',
          },
        ],
      },
      {
        id: 'khac-choi-l1-s2',
        hazard: 'mèo lạ nằm trên hàng rào',
        prompt:
          'Trên đường về, Bé Gấu thấy mèo lạ nằm trên hàng rào. Bé Gấu muốn với tay vuốt. Cô giáo đang đi cùng lớp gần đó. Bé Gấu làm gì?',
        safeText: 'Đứng xa, không với tay; hỏi cô hoặc người lớn đi cùng trước.',
        safeFeedback: 'Giỏi! Bé Gấu không tự vuốt mèo lạ và đã nhờ người lớn.',
        unsafeChoices: [
          {
            text: 'Nhón chân với tay vuốt lưng mèo.',
            feedback: 'Mèo lạ có thể cào. Đứng xa và hỏi cô trước.',
          },
          {
            text: 'Rú lớn để mèo giật mình chạy.',
            feedback: 'Không làm mèo sợ. Giữ yên và hỏi người lớn.',
          },
        ],
      },
      {
        id: 'khac-choi-l1-s3',
        hazard: 'cho ăn chó lạ bằng tay',
        prompt:
          'Bạn có miếng bánh và bảo Bé Gấu đưa cho chó lạ đang ngồi gần. Bố Bé Gấu đang đứng cách vài bước. Bé Gấu làm gì?',
        safeText: 'Không tự đưa bánh; hỏi bố và đứng xa chó.',
        safeFeedback: 'Đúng! Cho thú ăn cần người lớn và chủ thú đồng ý.',
        unsafeChoices: [
          {
            text: 'Giơ bánh ra để chó liếm tay.',
            feedback: 'Không cho chó lạ ăn từ tay. Hỏi bố trước.',
          },
          {
            text: 'Ném bánh xuống sát chó rồi đứng cạnh xem.',
            feedback: 'Vẫn nên hỏi người lớn. Đứng xa khi chưa được phép.',
          },
        ],
      },
      {
        id: 'khac-choi-l1-s4',
        hazard: 'chó không dây xích chạy tới',
        prompt:
          'Một con chó không thấy chủ chạy về phía Bé Gấu. Cô đang dắt các bạn ở sân trường. Bé Gấu làm gì?',
        safeText: 'Đứng yên bên cô, tay trong túi hoặc ôm ngực; nhìn cô và làm theo lời cô.',
        safeFeedback: 'Hay lắm! Bé Gấu đứng yên cạnh cô thay vì chạy hoặc la hét.',
        unsafeChoices: [
          {
            text: 'Chạy vòng quanh để tránh chó.',
            feedback: 'Chạy có thể làm chó đuổi theo. Đứng yên cạnh cô.',
          },
          {
            text: 'Quát lớn và đuổi chó bằng tay.',
            feedback: 'Không đuổi chó một mình. Làm theo cô hướng dẫn.',
          },
        ],
      },
      {
        id: 'khac-choi-l1-s5',
        hazard: 'bầy mèo con trong hẻm',
        prompt:
          'Bé Gấu thấy mèo con trong hẻm nhỏ. Em muốn nhặt một con lên ôm. Mẹ đang chờ ở đầu hẻm. Bé Gấu làm gì?',
        safeText: 'Không nhặt mèo con; quay lại mẹ và kể mẹ nghe.',
        safeFeedback: 'Tốt! Mèo con cần mẹ mèo; Bé Gấu đã báo người lớn.',
        unsafeChoices: [
          {
            text: 'Nhẹ tay nhặt mèo con lên ôm.',
            feedback: 'Không nhặt mèo lạ. Quay về mẹ và kể chuyện.',
          },
          {
            text: 'Rủ bạn vào hẻm chơi với mèo con.',
            feedback: 'Hẻm và mèo lạ chưa chắc an toàn. Ở gần mẹ.',
          },
        ],
      },
    ],
  },

  {
    id: 'khac-choi-l2',
    moduleId: 'khac-choi',
    gradeBand: 'mam-3-4',
    title: 'Thú nhà người khác',
    objective:
      'Sang nhà bạn: xin phép chủ thú hoặc người lớn trước khi chạm, mở chuồng hoặc đuổi chơi.',
    teacherPrompt:
      'Khi sang nhà bạn, em hỏi ai trước khi vuốt chó mèo của nhà bạn? Nhắc: không kéo đuôi, không mở chuồng một mình.',
    parentNote:
      'Trước khi sang nhà có thú cưng, bạn có thể hỏi chủ nhà cách giới thiệu bé với thú. Ngồi cùng con khi chơi game — nhắc xin phép trước khi chạm.',
    situations: [
      {
        id: 'khac-choi-l2-s1',
        hazard: 'mở chuồng chim/chó một mình',
        prompt:
          'Bé Gấu sang chơi nhà bạn. Trong phòng có chuồng chim. Bé Gấu muốn mở cửa chuồng xem. Mẹ bạn đang nấu ăn trong bếp. Bé Gấu làm gì?',
        safeText: 'Không mở chuồng; đi gọi mẹ bạn hoặc người lớn trong nhà.',
        safeFeedback: 'Giỏi! Chuồng thú do người lớn mở, Bé Gấu đã đi gọi.',
        unsafeChoices: [
          {
            text: 'Mở khóa chuồng cho chim bay ra chơi.',
            feedback: 'Không tự mở chuồng. Gọi mẹ bạn giúp.',
          },
          {
            text: 'Nhờ bạn nhỏ mở chuồng vì bạn quen.',
            feedback: 'Hai bé không tự mở. Cần người lớn trong nhà.',
          },
        ],
      },
      {
        id: 'khac-choi-l2-s2',
        hazard: 'kéo đuôi mèo nhà bạn',
        prompt:
          'Mèo nhà bạn đi ngang qua. Bạn rủ Bé Gấu nắm đuôi mèo kéo nhẹ “cho vui”. Cô của bạn đang ngồi phòng khách. Bé Gấu làm gì?',
        safeText: 'Nói không với bạn; để mèo đi; hỏi cô xem được vuốt mèo không.',
        safeFeedback: 'Đúng! Không kéo đuôi; Bé Gấu hỏi người lớn trước khi vuốt.',
        unsafeChoices: [
          {
            text: 'Nắm đuôi mèo kéo theo bạn.',
            feedback: 'Mèo đau và có thể cào. Để mèo yên và hỏi cô.',
          },
          {
            text: 'Ôm chặt mèo không cho chạy.',
            feedback: 'Không giữ mèo ép. Xin phép cô rồi vuốt nhẹ nếu được.',
          },
        ],
      },
      {
        id: 'khac-choi-l2-s3',
        hazard: 'đuổi chó nhà bạn chạy quanh sân',
        prompt:
          'Chó nhà bạn đang nằm nghỉ. Bạn muốn Bé Gấu cùng chạy đuổi chó quanh sân. Bố bạn ở ngoài sân. Bé Gấu làm gì?',
        safeText: 'Không đuổi chó; hỏi bố bạn xem được chơi với chó thế nào.',
        safeFeedback: 'Tốt! Chơi với chó nhà người khác cần chủ và người lớn hướng dẫn.',
        unsafeChoices: [
          {
            text: 'Cầm gậy giả vờ đuổi chó cho khỏi buồn.',
            feedback: 'Chó có thể sợ hoặc giật. Hỏi bố bạn cách chơi an toàn.',
          },
          {
            text: 'Ném bóng vào chó để nó chạy.',
            feedback: 'Không ném vào chó. Nhờ người lớn giới thiệu cách chơi.',
          },
        ],
      },
      {
        id: 'khac-choi-l2-s4',
        hazard: 'cho thú ăn đồ bạn tự lấy',
        prompt:
          'Bé Gấu thấy hũ thức ăn chó trên kệ. Em muốn múc cho chó nhà bạn ăn. Mẹ bạn đang dọn phòng gần đó. Bé Gấu làm gì?',
        safeText: 'Không tự múc thức ăn; hỏi mẹ bạn cho ăn đúng cách.',
        safeFeedback: 'Hay! Chỉ người lớn/chủ thú quyết định cho ăn gì.',
        unsafeChoices: [
          {
            text: 'Múc đầy bát và đưa chó ăn ngay.',
            feedback: 'Chó ăn quá hoặc sai đồ có thể ốm. Hỏi mẹ bạn.',
          },
          {
            text: 'Cho chó ăn bánh kẹo của Bé Gấu.',
            feedback: 'Bánh kẹo không phải thức ăn chó. Hỏi người lớn.',
          },
        ],
      },
      {
        id: 'khac-choi-l2-s5',
        hazard: 'mở cổng sân để chó chạy ra',
        prompt:
          'Chó nhà bạn gõ cửa sân muốn ra ngoài. Bạn bảo Bé Gấu mở then cổng giúp. Không thấy người lớn. Bé Gấu làm gì?',
        safeText: 'Không mở cổng; tìm mẹ bạn hoặc người lớn trong nhà.',
        safeFeedback: 'Giỏi! Cổng và chó cần người lớn quyết định.',
        unsafeChoices: [
          {
            text: 'Mở cổng để chó chạy ra đường chơi.',
            feedback: 'Chó ra đường rất nguy hiểm. Gọi người lớn.',
          },
          {
            text: 'Dắt chó ra ngoài một mình không báo ai.',
            feedback: 'Không tự dắt chó ra ngoài. Nhờ mẹ bạn.',
          },
        ],
      },
    ],
  },

  {
    id: 'khac-choi-l3',
    moduleId: 'khac-choi',
    gradeBand: 'mam-3-4',
    title: 'Xếp hàng cầu trượt',
    objective:
      'Ở cầu trượt: xếp hàng, chờ tới lượt, leo đúng cách; không xô bạn hoặc đẩy từ trên.',
    teacherPrompt:
      'Khi chơi cầu trượt, em đứng ở đâu? Chờ lượt thế nào? Nhắc: không leo ngược chiều, không đẩy bạn từ mép trên.',
    parentNote:
      'Sân chơi nên có người lớn quan sát. Nói với con: chờ lượt và giữ tay khi leo cầu thang — game giúp ôn quy tắc, bạn vẫn nhắc khi đi chơi thật.',
    situations: [
      {
        id: 'khac-choi-l3-s1',
        hazard: 'xô bạn để lên trước',
        prompt:
          'Nhiều bạn đang xếp hàng cầu trượt. Bé Gấu muốn lên nhanh. Cô đang đứng cạnh cầu trượt. Bé Gấu làm gì?',
        safeText: 'Xếp cuối hàng, chờ lượt; giữ tay vịn khi leo.',
        safeFeedback: 'Tốt! Bé Gấu xếp hàng và chờ lượt như cô dạy.',
        unsafeChoices: [
          {
            text: 'Lách qua chen lên trước bạn.',
            feedback: 'Không chen hàng. Xếp cuối và chờ lượt.',
          },
          {
            text: 'Xô nhẹ bạn để nhường chỗ.',
            feedback: 'Không xô bạn. Chờ lượt mình.',
          },
        ],
      },
      {
        id: 'khac-choi-l3-s2',
        hazard: 'leo ngược chiều cầu trượt',
        prompt:
          'Bạn rủ Bé Gấu leo từ ống trượt lên trên “cho nhanh”. Cô đang nhìn các bạn chơi. Bé Gấu làm gì?',
        safeText: 'Leo cầu thang bên cạnh; không leo ngược ống trượt.',
        safeFeedback: 'Đúng! Lên đúng chỗ leo, an toàn hơn.',
        unsafeChoices: [
          {
            text: 'Leo ngược trong ống trượt.',
            feedback: 'Có bạn trượt xuống sẽ đụng. Dùng cầu thang leo.',
          },
          {
            text: 'Kéo bạn leo cùng trong ống.',
            feedback: 'Không leo ngược ống. Làm theo cô hướng dẫn.',
          },
        ],
      },
      {
        id: 'khac-choi-l3-s3',
        hazard: 'đẩy bạn từ mép trên cầu trượt',
        prompt:
          'Bé Gấu đã lên tới mép trên. Bạn phía sau giục “trượt đi”. Cô vừa bảo chờ bạn trước trượt xong. Bé Gấu làm gì?',
        safeText: 'Chờ bạn phía trước trượt hết; ngồi yên, hai tay giữ mép; không đẩy ai.',
        safeFeedback: 'Giỏi! Bé Gấu chờ lượt và không đẩy từ trên.',
        unsafeChoices: [
          {
            text: 'Đẩy nhẹ bạn phía trước cho nhanh.',
            feedback: 'Không đẩy từ trên cầu trượt. Chờ bạn trượt xong.',
          },
          {
            text: 'Trượt hai người cùng lúc cho vui.',
            feedback: 'Một lượt một bạn. Chờ cô báo lượt mình.',
          },
        ],
      },
      {
        id: 'khac-choi-l3-s4',
        hazard: 'đứng giữa đường trượt',
        prompt:
          'Bé Gấu trượt xong, muốn đứng ngay dưới chân cầu chờ bạn. Cô huýt sáo nhắc nhảy ra xa. Bé Gấu làm gì?',
        safeText: 'Bước sang một bên, ra xa chân cầu; chờ lượt leo lại.',
        safeFeedback: 'Hay! Nhường chỗ cho bạn trượt xuống an toàn.',
        unsafeChoices: [
          {
            text: 'Đứng sát chân cầu vẫy tay với bạn trên.',
            feedback: 'Đứng sát chân cầu dễ va phải bạn trượt. Bước ra xa.',
          },
          {
            text: 'Chạy ngược lên cầu thang ngay khi vừa trượt xong.',
            feedback: 'Ra xa trước, rồi xếp hàng leo lại.',
          },
        ],
      },
      {
        id: 'khac-choi-l3-s5',
        hazard: 'chen lên khi chưa tới lượt',
        prompt:
          'Bé Gấu vừa trượt xong một lượt. Em muốn leo lại ngay không xếp hàng. Một bạn nhỏ đang chờ lượt đầu tiên. Cô đang quan sát. Bé Gấu làm gì?',
        safeText: 'Xếp lại cuối hàng; nhường bạn nhỏ đang chờ lượt.',
        safeFeedback: 'Tốt lắm! Bé Gấu xếp hàng và nhường bạn.',
        unsafeChoices: [
          {
            text: 'Leo thẳng lên vì “mình quen rồi”.',
            feedback: 'Vẫn phải xếp hàng. Chờ lượt như mọi bạn.',
          },
          {
            text: 'Nhờ bạn nhỏ nhường vì mình lớn hơn.',
            feedback: 'Không chen lượt. Xếp hàng và chờ.',
          },
        ],
      },
    ],
  },

  {
    id: 'khac-choi-l4',
    moduleId: 'khac-choi',
    gradeBand: 'mam-5-6',
    title: 'Xích đu và cầu đu',
    objective:
      'Quanh xích đu: đứng ngoài vùng đu; không chạy cắt ngang; đẩy nhẹ có báo hiệu khi bạn ngồi trên ghế.',
    teacherPrompt:
      'Vẽ vòng tròn tưởng tượng quanh xích đu: em đứng ở đâu khi bạn đang đu? Nhắc: không đứng phía trước ghế, không đẩy quá mạnh.',
    parentNote:
      'Khi đưa con ra sân có xích đu, bạn đứng canh vùng quanh ghế đu. Game nhắc “đứng ngoài vòng đu” — ngoài đời bạn vẫn nhắc và can thiệp nếu các bé chạy sát.',
    situations: [
      {
        id: 'khac-choi-l4-s1',
        hazard: 'chạy cắt ngang trước xích đu',
        prompt:
          'Bạn đang đu xích đu cao. Bé Gấu muốn chạy nhanh qua để đến cầu trượt. Cô đang ở giữa sân. Bé Gấu làm gì?',
        safeText: 'Dừng lại, đợi xích đu lùi xa; đi vòng quanh ngoài vùng đu.',
        safeFeedback: 'Đúng! Bé Gấu đợi và đi ngoài vùng xích đu.',
        unsafeChoices: [
          {
            text: 'Chạy thật nhanh cắt ngang trước ghế đu.',
            feedback: 'Ghế đu có thể va vào người. Đợi và đi vòng.',
          },
          {
            text: 'Cúi đầu chạy sát dưới xích đu.',
            feedback: 'Vẫn nguy hiểm. Đứng ngoài vùng đu.',
          },
        ],
      },
      {
        id: 'khac-choi-l4-s2',
        hazard: 'đẩy xích đu quá mạnh',
        prompt:
          'Bạn nhỏ ngồi trên xích đu, nhờ Bé Gấu đẩy. Bạn muốn “đu cao thật cao”. Cô ở gần. Bé Gấu làm gì?',
        safeText: 'Đẩy nhẹ từng cái; hỏi cô hoặc bạn có muốn dừng không.',
        safeFeedback: 'Giỏi! Đẩy nhẹ và lắng nghe bạn trên ghế.',
        unsafeChoices: [
          {
            text: 'Đẩy mạnh liên tục cho bạn bay lên.',
            feedback: 'Đẩy mạnh dễ làm bạn sợ hoặc tuột tay. Đẩy nhẹ.',
          },
          {
            text: 'Đẩy rồi buông tay chạy đi chơi chỗ khác.',
            feedback: 'Đẩy xích đu cần quan sát bạn. Đẩy nhẹ và ở gần.',
          },
        ],
      },
      {
        id: 'khac-choi-l4-s3',
        hazard: 'đứng trên ghế xích đu',
        prompt:
          'Bạn rủ Bé Gấu leo lên ghế xích đu đứng “làm acrobat”. Không có cô gần đó. Bé Gấu làm gì?',
        safeText: 'Không đứng trên ghế; ngồi yên hoặc tìm cô trước khi chơi.',
        safeFeedback: 'Tốt! Ghế xích đu chỉ để ngồi đu, Bé Gấu không đứng lên.',
        unsafeChoices: [
          {
            text: 'Đứng trên ghế và nắm dây đu.',
            feedback: 'Đứng trên ghế dễ ngã. Chỉ ngồi khi có người lớn cho phép.',
          },
          {
            text: 'Quỳ một chân trên ghế cho thử thách.',
            feedback: 'Không thử đứng/quỳ trên ghế. Ngồi an toàn hoặc gọi cô.',
          },
        ],
      },
      {
        id: 'khac-choi-l4-s4',
        hazard: 'chạy sát phía trước bạn đu',
        prompt:
          'Hai bạn đang đu cầu song song. Bé Gấu muốn chạy đuổi theo ngay phía trước ghế bạn. Một cô trông sân đang nhìn. Bé Gấu làm gì?',
        safeText: 'Dừng ở ngoài vùng đu; vẫy tay chào bạn từ xa.',
        safeFeedback: 'Hay! Bé Gấu chơi từ ngoài vùng, không chạy sát ghế.',
        unsafeChoices: [
          {
            text: 'Chạy theo sát mặt trước ghế bạn.',
            feedback: 'Ghế đu có thể đập vào người. Đứng xa.',
          },
          {
            text: 'Nhảy qua dây xích đu đang đu.',
            feedback: 'Không nhảy qua dây đang đu. Đi vòng ngoài.',
          },
        ],
      },
      {
        id: 'khac-choi-l4-s5',
        hazard: 'nhiều bạn chen quanh xích đu',
        prompt:
          'Nhiều bạn chen sát quanh xích đu đang quay. Cô bảo “lùi ra vòng an toàn”. Bé Gấu đang đứng trong đám. Bé Gấu làm gì?',
        safeText: 'Lùi ra ngoài vòng an toàn; chờ cô báo được vào chơi.',
        safeFeedback: 'Đúng rồi! Bé Gấu lùi ra và nghe cô.',
        unsafeChoices: [
          {
            text: 'Ở lại chen giữa để giữ chỗ đu.',
            feedback: 'Chen sát dễ va chạm. Lùi ra vòng an toàn.',
          },
          {
            text: 'Nắm dây xích đu đang chuyển động.',
            feedback: 'Không nắm dây khi đu đang chạy. Lùi ra và chờ lượt.',
          },
        ],
      },
    ],
  },

  {
    id: 'khac-choi-l5',
    moduleId: 'khac-choi',
    gradeBand: 'mam-5-6',
    title: 'Không xô đẩy',
    objective:
      'Chơi nhẹ nhàng, không xô bạn; nếu bị đẩy hoặc thấy bạn xô nhau thì báo cô hoặc người lớn.',
    teacherPrompt:
      'Khi chơi đông, em giữ tay và cơ thể thế nào? Nếu bạn xô em, em nói với ai? Nhắc: không xô lại, không xô ở cầu thang.',
    parentNote:
      'Dạy con nói “đừng đẩy” và tìm cô khi cần — bạn lắng nghe khi con kể sau giờ chơi. Game không xử lý xung đột thật; người lớn vẫn can thiệp tại sân trường.',
    situations: [
      {
        id: 'khac-choi-l5-s1',
        hazard: 'xô bạn trên cầu thang sân chơi',
        prompt:
          'Bé Gấu và bạn đang xuống cầu thang sân chơi. Bạn xô nhẹ để vượt lên. Cô đang dắt bạn khác ở dưới. Bé Gấu làm gì?',
        safeText: 'Giữ tay vịn, đi từng bước; nói “đừng đẩy” và báo cô.',
        safeFeedback: 'Tốt! Bé Gấu giữ an toàn trên cầu thang và báo cô.',
        unsafeChoices: [
          {
            text: 'Xô lại bạn để giữ vị trí.',
            feedback: 'Trên cầu thang không xô nhau. Báo cô giúp.',
          },
          {
            text: 'Chạy nhanh xuống tránh bạn.',
            feedback: 'Không chạy trên cầu thang. Đi chậm và gọi cô.',
          },
        ],
      },
      {
        id: 'khac-choi-l5-s2',
        hazard: 'tranh đồ chơi đẩy bạn',
        prompt:
          'Hai bạn cùng muốn cầm một chiếc xe đồ chơi. Bạn nắm xe và đẩy tay Bé Gấu. Cô ở gần bục hoa. Bé Gấu làm gì?',
        safeText: 'Buông tay khỏi tranh giành; nói “mình chờ lượt”; gọi cô chia sẻ.',
        safeFeedback: 'Giỏi! Bé Gấu không đẩy lại và nhờ cô giúp.',
        unsafeChoices: [
          {
            text: 'Giật mạnh xe và đẩy bạn ngã.',
            feedback: 'Không giật đẩy. Gọi cô chia đồ chơi.',
          },
          {
            text: 'Cầm xe chạy đi không nói gì.',
            feedback: 'Chạy tranh giành dễ va. Nhờ cô sắp lượt chơi.',
          },
        ],
      },
      {
        id: 'khac-choi-l5-s3',
        hazard: 'bị bạn xô trong trò chơi đuổi bắt',
        prompt:
          'Lớp chơi đuổi bắt. Một bạn xô Bé Gấu để “bắt nhanh”. Cô vừa nhắc chơi nhẹ. Bé Gấu làm gì?',
        safeText: 'Dừng lại, nói “đừng đẩy”; giơ tay báo cô.',
        safeFeedback: 'Đúng! Bé Gấu nhắc bạn và báo cô như đã học.',
        unsafeChoices: [
          {
            text: 'Xô mạnh lại bạn cho đền.',
            feedback: 'Không xô trả. Báo cô để cô nhắc cả lớp.',
          },
          {
            text: 'Khóc to nhưng vẫn chạy xô bạn khác.',
            feedback: 'Tìm cô nói chuyện; không tiếp tục xô trong lúc chơi.',
          },
        ],
      },
      {
        id: 'khac-choi-l5-s4',
        hazard: 'chen lấy bóng đẩy bạn ngã',
        prompt:
          'Quả bóng lăn vào góc sân. Hai bạn cùng chạy tới. Bạn đẩy vai Bé Gấu để lấy trước. Cô trông sân quay lại. Bé Gấu làm gì?',
        safeText: 'Dừng chạy; giơ tay báo cô; chờ cô nhắc lấy bóng an toàn.',
        safeFeedback: 'Hay! Bé Gấu dừng tranh và nhờ cô.',
        unsafeChoices: [
          {
            text: 'Lao nhanh và đẩy bạn ra.',
            feedback: 'Không đẩy để lấy bóng. Gọi cô giúp.',
          },
          {
            text: 'Ngồi xuống giữ bóng bằng tay chân.',
            feedback: 'Không vướng chân bạn. Chờ cô hướng dẫn.',
          },
        ],
      },
      {
        id: 'khac-choi-l5-s5',
        hazard: 'nhóm bạn xô nhau vòng tròn',
        prompt:
          'Một nhóm bạn xô nhau vòng tròn “cho vui”. Bé Gấu bị chen vào giữa và mất thăng bằng. Cô đang đi tới. Bé Gấu làm gì?',
        safeText: 'Bước ra ngoài vòng; giơ tay báo cô; không xô lại.',
        safeFeedback: 'Tốt lắm! Bé Gấu ra ngoài an toàn và báo cô.',
        unsafeChoices: [
          {
            text: 'Xô mạnh vào nhóm cho bằng chuyện.',
            feedback: 'Không xô vào đám đông. Bước ra và gọi cô.',
          },
          {
            text: 'Đứng giữa im lặng vì ngại nói.',
            feedback: 'Giơ tay báo cô khi thấy không an toàn.',
          },
        ],
      },
    ],
  },
];

// STATUS: OK — 5/5 lessons, 25/25 situations (module khac-choi draft)
