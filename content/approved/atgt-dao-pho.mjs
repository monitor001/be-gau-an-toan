// Module Dạo phố (ATGT) — Bé Gấu An Toàn
// Học liệu bổ trợ — chưa chuyên gia duyệt; không thu PII.

export const LESSONS = [
  {
    "id": "dao-pho-g1-l1",
    "moduleId": "dao-pho",
    "gradeBand": "1",
    "title": "Đường em tới trường",
    "objective": "Nhận biết nguy cơ trên đường đến trường và chọn lối đi theo hướng dẫn người lớn.",
    "teacherPrompt": "Trên tuyến đường của em, người lớn sẽ dẫn em đi ở đâu?",
    "situations": [
      {
        "id": "dao-pho-g1-l1-s1",
        "hazard": "đường có xe chạy gần lối đi bộ",
        "prompt": "Trên đường tới trường, Bé Gấu thấy lối đi bộ và một đoạn đường có xe đang chạy. Bé Gấu làm gì?",
        "safeText": "Đi cạnh Mẹ Gấu trên lối đi bộ mà Mẹ Gấu chọn.",
        "safeFeedback": "Đúng rồi! Bé Gấu đi cạnh Mẹ Gấu và theo lối an toàn.",
        "unsafeChoices": [
          {
            "text": "Tách khỏi Mẹ Gấu để đi tắt.",
            "feedback": "Bé Gấu chưa tự tách khỏi Mẹ Gấu; cùng chọn lối an toàn nhé."
          },
          {
            "text": "Mải nhìn đồ chơi bên kia đường.",
            "feedback": "Mình chú ý đường đi và người lớn đang dẫn nhé."
          }
        ]
      },
      {
        "id": "dao-pho-g1-l1-s2",
        "hazard": "vỉa hè bị chặn bởi công trình",
        "prompt": "Em đang đi với người lớn, nhưng vỉa hè có một đoạn bị chắn bởi công trình đang sửa. Em làm gì?",
        "safeText": "Nhờ người lớn chỉ cho lối đi bộ an toàn khác và đi theo họ.",
        "safeFeedback": "Tốt! Em hỏi người lớn và đi theo đường an toàn mới nhé.",
        "unsafeChoices": [
          {
            "text": "Nhảy qua rào chắn để giữ lối.",
            "feedback": "Phải đi cùng người lớn, không tự qua chướng ngại."
          },
          {
            "text": "Đi sát rào chắn rồi quay về.",
            "feedback": "Em cần đi bên lối an toàn với người lớn, không đứng sát rào."
          }
        ]
      },
      {
        "id": "dao-pho-g1-l1-s3",
        "hazard": "xe máy chạy ngoài lề vỉa hè",
        "prompt": "Bé Gấu và người lớn đang đi trên vỉa hè, một chiếc xe máy chạy nhanh sát vào lề. Bé Gấu làm gì?",
        "safeText": "Dừng lại gần người lớn, nhờ họ quan sát và đi tiếp khi an toàn.",
        "safeFeedback": "Đúng! Bé Gấu ở cạnh người lớn và chờ đến khi an toàn rồi đi.",
        "unsafeChoices": [
          {
            "text": "Nhảy qua đường để nhanh hết chỗ xe.",
            "feedback": "Bé Gấu không nhảy xuống đường; nắm chặt tay người lớn và chờ."
          },
          {
            "text": "Quay ngược lại với xe.",
            "feedback": "Bé Gấu giữ nguyên hướng đi cùng người lớn, không quay ngược."
          }
        ]
      },
      {
        "id": "dao-pho-g1-l1-s4",
        "hazard": "cửa hàng trên đường hút sự chú ý",
        "prompt": "Đi trên vỉa hè, Bé Gấu thấy một cửa hàng đang bán đồ chơi mới. Em muốn nhìn nhưng đang gần đường. Bé Gấu làm gì?",
        "safeText": "Giữ tay người lớn, đi thẳng đến nơi an toàn rồi mới nhìn cửa hàng với họ.",
        "safeFeedback": "Giỏi! Bé Gấu đi đến chỗ an toàn, sau đó cùng người lớn quay lại xem nhé.",
        "unsafeChoices": [
          {
            "text": "Nhảy xuống lòng đường để nhìn gần hơn.",
            "feedback": "Em không xuống đường chỉ để xem đồ; ở với người lớn."
          },
          {
            "text": "Đi sang lối qua đường một mình để đến cửa hàng.",
            "feedback": "Bé Gấu không đi một mình; qua đường cần người lớn."
          }
        ]
      },
      {
        "id": "dao-pho-g1-l1-s5",
        "hazard": "đèn tín hiệu chưa cho phép qua",
        "prompt": "Bé Gấu và người lớn đang đứng ở lối qua đường, đèn cho người đi bộ vẫn còn đỏ. Đi bộ qua giờ này, Bé Gấu làm gì?",
        "safeText": "Ở cạnh người lớn, đợi đèn xanh cho người đi bộ rồi cùng qua.",
        "safeFeedback": "Tốt lắm! Bé Gấu đợi tín hiệu phù hợp cùng người lớn.",
        "unsafeChoices": [
          {
            "text": "Chạy qua ngay khi có ít xe.",
            "feedback": "Bé Gấu không chạy qua dù xe ít; vẫn cần đèn cho phép."
          },
          {
            "text": "Đi theo người lớn đã đi trước.",
            "feedback": "Bé Gấu ở cùng người lớn và đi khi họ ra hiệu."
          }
        ]
      }
    ]
  },
  {
    "id": "dao-pho-g1-l2",
    "moduleId": "dao-pho",
    "gradeBand": "1",
    "title": "Đèn tín hiệu giao thông",
    "objective": "Nhận biết tín hiệu đèn cơ bản; chờ cùng người lớn trước khi sang đường.",
    "teacherPrompt": "Tín hiệu nào cho em biết nên dừng và chờ?",
    "situations": [
      {
        "id": "dao-pho-g1-l2-s1",
        "hazard": "đèn đỏ dành cho người đi bộ",
        "prompt": "Đèn dành cho người đi bộ đang đỏ. Mẹ Gấu và Bé Gấu nên làm gì?",
        "safeText": "Dừng ở nơi chờ an toàn, nắm tay Mẹ Gấu và đợi tín hiệu phù hợp.",
        "safeFeedback": "Tốt lắm! Bé Gấu dừng và chờ cùng Mẹ Gấu.",
        "unsafeChoices": [
          {
            "text": "Nghĩ rằng đường vắng thì đèn không quan trọng.",
            "feedback": "Mình vẫn làm theo tín hiệu và chờ Mẹ Gấu hướng dẫn."
          },
          {
            "text": "Đi theo bạn mà không hỏi Mẹ Gấu.",
            "feedback": "Bé Gấu ở cạnh Mẹ Gấu và cùng chờ nhé."
          }
        ]
      },
      {
        "id": "dao-pho-g1-l2-s2",
        "hazard": "đèn xanh nhưng xe vẫn chưa dừng",
        "prompt": "Đèn cho phép người đi bộ đã xanh, nhưng vài xe vẫn đang tới gần. Bé Gấu với người lớn làm gì?",
        "safeText": "Nhờ người lớn quan sát, đợi xe dừng hẳn rồi cùng đi khi an toàn.",
        "safeFeedback": "Đúng! Người lớn kiểm tra xe rồi dẫn Bé Gấu qua khi đã an toàn.",
        "unsafeChoices": [
          {
            "text": "Đi ngay vì đèn đã cho phép.",
            "feedback": "Bé Gấu không đi ngay; phải đợi xe dừng và người lớn ra hiệu."
          },
          {
            "text": "Nhảy nhanh qua trước xe.",
            "feedback": "Bé Gấu không đuổi theo xe; đứng chờ với người lớn."
          }
        ]
      },
      {
        "id": "dao-pho-g1-l2-s3",
        "hazard": "đèn người đi bộ bị hỏng không bật",
        "prompt": "Bé Gấu và người lớn đến lối qua đường, nhưng đèn cho người đi bộ không sáng. Bé Gấu làm gì?",
        "safeText": "Ở cạnh người lớn, nhờ họ quan sát cả hai phía và dẫn Bé Gấu qua khi an toàn.",
        "safeFeedback": "Tốt! Người lớn giúp Bé Gấu quan sát và quyết định lúc an toàn.",
        "unsafeChoices": [
          {
            "text": "Tự đi vì không có đèn nào.",
            "feedback": "Không có đèn không có nghĩa là có thể tự đi; vẫn cần người lớn."
          },
          {
            "text": "Ra đến lối trung tâm để xem có xe không.",
            "feedback": "Bé Gấu đứng gần người lớn; không tự ra giữa đường."
          }
        ]
      },
      {
        "id": "dao-pho-g1-l2-s4",
        "hazard": "xe buýt đang dừng ở lối qua đường",
        "prompt": "Xe buýt đang dừng ở chỗ lối qua đường. Bé Gấu cùng người lớn làm gì?",
        "safeText": "Chờ xe buýt khởi hành, nhờ người lớn chọn hướng đi an toàn khác hoặc chờ đến khi đường trống.",
        "safeFeedback": "Giỏi! Bé Gấu đợi xe buýt đi và nhờ người lớn chọn lối an toàn.",
        "unsafeChoices": [
          {
            "text": "Vượt qua trước xe buýt.",
            "feedback": "Bé Gấu không vượt trước xe lớn; đợi người lớn hướng dẫn."
          },
          {
            "text": "Nhảy qua khe giữa xe buýt và vỉa hè.",
            "feedback": "Em không nhảy qua khe; ở cạnh người lớn và chờ."
          }
        ]
      },
      {
        "id": "dao-pho-g1-l2-s5",
        "hazard": "bạn cùng đợi nảy tính vượt đèn đỏ",
        "prompt": "Bé Gấu đang đợi đèn xanh với người lớn. Một bạn cùng lứa tuổi nảy tính chạy qua khi đèn còn đỏ. Bé Gấu làm gì?",
        "safeText": "Ở cạnh người lớn, không làm theo bạn; cùng chờ tín hiệu phù hợp.",
        "safeFeedback": "Đúng! Bé Gấu ở với người lớn và đợi đến khi được phép qua.",
        "unsafeChoices": [
          {
            "text": "Theo bạn chạy qua nhanh.",
            "feedback": "Bé Gấu không theo bạn khi chưa có tín hiệu; vẫn ở cạnh người lớn."
          },
          {
            "text": "Gọi bạn đừng đi nhưng rồi cũng đi theo.",
            "feedback": "Bé Gấu giữ nguyên đứng với người lớn, không đi khi chưa đến lúc."
          }
        ]
      }
    ]
  },
  {
    "id": "dao-pho-g1-l3",
    "moduleId": "dao-pho",
    "gradeBand": "1",
    "title": "Đi bộ trên đường an toàn",
    "objective": "Đi cùng người lớn, chú ý lối đi bộ và tránh mải chơi khi đang đi.",
    "teacherPrompt": "Khi đi bộ trên đường, Bé Gấu nên ở cạnh ai và nhìn chỗ nào?",
    "situations": [
      {
        "id": "dao-pho-g1-l3-s1",
        "hazard": "bạn gọi từ phía lòng đường",
        "prompt": "Bé Gấu đang đi với Mẹ Gấu nhưng nghe bạn gọi từ phía lòng đường. Bé Gấu nên làm gì?",
        "safeText": "Ở cạnh Mẹ Gấu, tiếp tục đi theo lối người lớn hướng dẫn.",
        "safeFeedback": "Chính xác! Bé Gấu không rời người lớn giữa đường đi.",
        "unsafeChoices": [
          {
            "text": "Chạy đến chỗ bạn ngay.",
            "feedback": "Mình không chạy ra đường; Mẹ Gấu sẽ giúp Bé Gấu gặp bạn an toàn."
          },
          {
            "text": "Vừa đi vừa nhìn màn hình.",
            "feedback": "Mắt nhìn đường và đi cạnh Mẹ Gấu nhé."
          }
        ]
      },
      {
        "id": "dao-pho-g1-l3-s2",
        "hazard": "đồ chơi rơi ra gần đường",
        "prompt": "Bé Gấu đang đi với người lớn, chiếc đồ chơi của em rơi xuống gần lòng đường. Bé Gấu làm gì?",
        "safeText": "Nhờ người lớn giúp nhặt đồ, không tự xuống lòng đường.",
        "safeFeedback": "Tốt! Bé Gấu nhờ người lớn và không tự xuống đường.",
        "unsafeChoices": [
          {
            "text": "Cúi xuống lòng đường để nhặt ngay.",
            "feedback": "Bé Gấu không xuống đường một mình; nhờ người lớn giúp."
          },
          {
            "text": "Chạy theo đồ cho nhanh.",
            "feedback": "Bé Gấu giữ yên và nhờ người lớn; không chạy theo đồ ra đường."
          }
        ]
      },
      {
        "id": "dao-pho-g1-l3-s3",
        "hazard": "tai nghe khi đi bộ trên đường",
        "prompt": "Bé Gấu muốn nghe nhạc khi đi bộ cùng người lớn trên đường. Em làm gì?",
        "safeText": "Không đeo tai nghe khi đang đi trên đường; chú ý người lớn và xe cộ.",
        "safeFeedback": "Đúng! Bé Gấu chú ý đường và người lớn, không đeo tai nghe khi đi.",
        "unsafeChoices": [
          {
            "text": "Đeo cả hai tai nghe để nghe rõ.",
            "feedback": "Em không được đeo tai nghe khi đi đường; phải lắng nghe người lớn."
          },
          {
            "text": "Đeo một tai để nghe nhạc, một tai để nghe người lớn.",
            "feedback": "Bé Gấu không dùng tai nghe khi đang đi trên đường; hãy tập trung đường."
          }
        ]
      },
      {
        "id": "dao-pho-g1-l3-s4",
        "hazard": "đoạn đường bị che khuất",
        "prompt": "Bé Gấu và người lớn đi đến một đoạn đường bị cây xanh che khuất tầm nhìn. Bé Gấu làm gì?",
        "safeText": "Nắm chặt tay người lớn, đi chậm và nhờ họ quan sát trước khi qua.",
        "safeFeedback": "Tốt! Bé Gấu nhờ người lớn quan sát nơi che khuất trước khi đi.",
        "unsafeChoices": [
          {
            "text": "Chạy nhanh qua đoạn che để khỏi bị kẹt.",
            "feedback": "Bé Gấu không chạy qua; nhờ người lớn kiểm tra và dẫn."
          },
          {
            "text": "Để người lớn đứng sang một bên để quan sát.",
            "feedback": "Bé Gấu ở gần người lớn; không để người lớn chỉ riêng một mình."
          }
        ]
      },
      {
        "id": "dao-pho-g1-l3-s5",
        "hazard": "lối đi bộ có chướng ngại vật",
        "prompt": "Trên lối đi bộ có một chiếc xe đạp đẩy ngang đường. Bé Gấu với người lớn làm gì?",
        "safeText": "Nhờ người lớn chỉ lối đi quanh vật cản an toàn, đi cùng họ.",
        "safeFeedback": "Giỏi! Bé Gấu nhờ người lớn chọn lối đi an toàn qua chướng ngại.",
        "unsafeChoices": [
          {
            "text": "Nhảy qua xe đạp ngay trên lối đi.",
            "feedback": "Bé Gấu không nhảy qua vật cản; nhờ người lớn hướng dẫn."
          },
          {
            "text": "Rời lối đi bộ sang lòng đường để qua.",
            "feedback": "Bé Gấu không xuống lòng đường; nhờ người lớn chỉ lối an toàn."
          }
        ]
      }
    ]
  },
  {
    "id": "dao-pho-g1-l4",
    "moduleId": "dao-pho",
    "gradeBand": "1",
    "title": "Ngồi an toàn trên các phương tiện giao thông",
    "objective": "Lên, xuống và ngồi trên phương tiện theo hướng dẫn người lớn; giữ tay chân trong xe.",
    "teacherPrompt": "Ai sẽ giúp em lên, xuống xe đưa đón an toàn?",
    "situations": [
      {
        "id": "dao-pho-g1-l4-s1",
        "hazard": "xe đang di chuyển khi lên",
        "prompt": "Xe đưa đón đã đến. Khi nào Bé Gấu lên xe và ngồi như thế nào?",
        "safeText": "Chờ xe dừng hẳn, lên cùng người lớn rồi ngồi đúng chỗ.",
        "safeFeedback": "Đúng rồi! Bé Gấu chờ xe dừng và làm theo người lớn.",
        "unsafeChoices": [
          {
            "text": "Lên khi xe còn đang lăn bánh.",
            "feedback": "Mình chờ xe dừng hẳn rồi mới lên nhé."
          },
          {
            "text": "Thò đầu ra ngoài cửa sổ để nhìn.",
            "feedback": "Tay chân và đầu luôn ở trong xe."
          }
        ]
      },
      {
        "id": "dao-pho-g1-l4-s2",
        "hazard": "không có chỗ ngồi rõ ràng trong xe",
        "prompt": "Xe đưa đón đã dừng, nhưng bên trong không thấy chỗ ngồi rõ ràng cho Bé Gấu. Bé Gấu làm gì?",
        "safeText": "Nhờ người lớn chỉ chỗ ngồi an toàn và ngồi đúng nơi họ hướng dẫn.",
        "safeFeedback": "Tốt! Bé Gấu nhờ người lớn và ngồi đúng vị trí an toàn.",
        "unsafeChoices": [
          {
            "text": "Ngồi tùy tiện ở bất cứ chỗ nào trong xe.",
            "feedback": "Bé Gấu ngồi đúng nơi người lớn chỉ, không tùy tiện."
          },
          {
            "text": "Đứng dựng trong xe vì không có ghế.",
            "feedback": "Bé Gấu ngồi yên; nếu không có ghế, nhờ người lớn tìm chỗ."
          }
        ]
      },
      {
        "id": "dao-pho-g1-l4-s3",
        "hazard": "cổng xe đang mở khi xe chưa dừng",
        "prompt": "Bé Gấu muốn xuống xe nhưng cổng xe vẫn đang mở khi xe chưa hoàn toàn dừng. Bé Gấu làm gì?",
        "safeText": "Chờ xe dừng hẳn, nhờ người lớn mở cửa và hướng dẫn xuống.",
        "safeFeedback": "Đúng! Bé Gấu đợi xe dừng và làm theo người lớn khi xuống.",
        "unsafeChoices": [
          {
            "text": "Tự mở cửa và nhảy xuống trước.",
            "feedback": "Bé Gấu không tự xuống; đợi xe dừng và nhờ người lớn."
          },
          {
            "text": "Đứng ở cửa sổ để nhanh hơn.",
            "feedback": "Bé Gấu đợi xe dừng hẳn và làm theo hướng dẫn của người lớn."
          }
        ]
      },
      {
        "id": "dao-pho-g1-l4-s4",
        "hazard": "xe đang rẽ khi có Bé Gấu ngồi",
        "prompt": "Bé Gấu đang ngồi trong xe, xe đang rẽ góc. Bé Gấu làm gì để an toàn?",
        "safeText": "Ngồi yên, nắm đúng chỗ, không thò tay ra ngoài và nghe người lớn.",
        "safeFeedback": "Tốt! Bé Gấu ngồi yên, không chạm ra ngoài và nghe người lớn.",
        "unsafeChoices": [
          {
            "text": "Thò đầu ra ngoài cửa sổ để xem đường.",
            "feedback": "Bé Gấu không thò ra ngoài; giữ đầu và tay trong xe."
          },
          {
            "text": "Đứng lên vì sợ xe rẽ sẽ va.",
            "feedback": "Bé Gấu ngồi yên và nghe người lớn; không đứng lên trong xe đang chạy."
          }
        ]
      },
      {
        "id": "dao-pho-g1-l4-s5",
        "hazard": "xe đang xuống dốc hoặc đường không bằng phẳng",
        "prompt": "Xe đưa đón đang đi xuống dốc, Bé Gấu cảm thấy có chút võng. Bé Gấu làm gì?",
        "safeText": "Ngồi lại, nắm chặt người lớn hoặc tay vịn, nghe họ hướng dẫn.",
        "safeFeedback": "Đúng! Bé Gấu ngồi yên, nắm chắc và nghe người lớn.",
        "unsafeChoices": [
          {
            "text": "Cố đứng lên để xem đường rõ.",
            "feedback": "Bé Gấu không đứng lên; ngồi yên và nghe người lớn."
          },
          {
            "text": "Nhảy xuống xe vì cảm thấy không thoải mái.",
            "feedback": "Bé Gấu không nhảy xuống; đợi xe dừng và nghe người lớn."
          }
        ]
      }
    ]
  },
  {
    "id": "dao-pho-g1-l5",
    "moduleId": "dao-pho",
    "gradeBand": "1",
    "title": "Nhớ đội mũ bảo hiểm",
    "objective": "Hiểu rằng trẻ và người lái đều cần đội mũ bảo hiểm đúng cách khi đi xe máy.",
    "teacherPrompt": "Cùng người lớn kiểm tra mũ và quai trước mỗi chuyến đi.",
    "situations": [
      {
        "id": "dao-pho-g1-l5-s1",
        "hazard": "chưa đội mũ bảo hiểm",
        "prompt": "Mẹ Gấu chuẩn bị chở Bé Gấu bằng xe máy. Bé Gấu và Mẹ Gấu cần làm gì trước khi xe chạy?",
        "safeText": "Cả hai đội mũ vừa đầu và cài quai đúng cách.",
        "safeFeedback": "Giỏi lắm! Mẹ Gấu kiểm tra mũ và quai cho cả hai.",
        "unsafeChoices": [
          {
            "text": "Chỉ mẹ đội mũ.",
            "feedback": "Bé Gấu cũng cần đội mũ bảo hiểm khi ngồi trên xe máy."
          },
          {
            "text": "Đội mũ nhưng để quai chưa cài.",
            "feedback": "Nhờ mẹ cài và kiểm tra quai trước khi đi."
          }
        ]
      },
      {
        "id": "dao-pho-g1-l5-s2",
        "hazard": "mũ bảo hiểm hơi quá lớn",
        "prompt": "Bé Gấu có một chiếc mũ bảo hiểm, nhưng khi đội lên hơi quá lớn, bị lệch xuống. Bé Gấu làm gì?",
        "safeText": "Nhờ người lớn kiểm tra độ hợp, đừng đi với mũ quá lớn; chọn mũ vừa hơn phù hợp.",
        "safeFeedback": "Tốt! Bé Gấu nhờ người lớn kiểm tra mũ và chọn mũ vừa đầu.",
        "unsafeChoices": [
          {
            "text": "Vẫn đội mũ đó và đi bằng cách siết chặt.",
            "feedback": "Bé Gấu không đi với mũ quá lớn; nhờ người lớn chọn mũ phù hợp."
          },
          {
            "text": "Đội mũ nhưng không quai.",
            "feedback": "Bé Gấu cần cả đội mũ và cài quai đúng cách."
          }
        ]
      },
      {
        "id": "dao-pho-g1-l5-s3",
        "hazard": "quai mũ bị lệch và không chắc",
        "prompt": "Bé Gấu đội mũ bảo hiểm nhưng quai bị lệch một bên, không chặt. Bé Gấu làm gì?",
        "safeText": "Nhờ người lớn giúp chỉnh quai, cài đúng cách trước khi đi.",
        "safeFeedback": "Đúng! Bé Gấu nhờ người lớn chỉnh quai và kiểm tra trước khi đi.",
        "unsafeChoices": [
          {
            "text": "Đi với quai lệch vì mũ vẫn đỡ đầu.",
            "feedback": "Bé Gấu không đi với quai lệch; cần cài đúng trước khi đi."
          },
          {
            "text": "Siết chặt quai bằng mình mà không hỏi người lớn.",
            "feedback": "Bé Gấu nhờ người lớn giúp; không tự điều chỉnh quai."
          }
        ]
      },
      {
        "id": "dao-pho-g1-l5-s4",
        "hazard": "mũ bảo hiểm có dấu hiệu hư hỏng",
        "prompt": "Bé Gấu nhìn vào mũ bảo hiểm và thấy có vẻ nứt trên vỏ mũ. Bé Gấu làm gì?",
        "safeText": "Nhờ người lớn kiểm tra mũ, báo họ có vết nứt, đợi thay mũ mới trước khi đi.",
        "safeFeedback": "Tốt! Bé Gấu báo người lớn và không đi với mũ hỏng.",
        "unsafeChoices": [
          {
            "text": "Che vết nứt bằng băng dính và tiếp tục đi.",
            "feedback": "Bé Gấu không đi với mũ hỏng; nhờ người lớn thay mới."
          },
          {
            "text": "Không nói cho người lớn, tiếp tục dùng.",
            "feedback": "Bé Gấu phải báo người lớn để thay mũ mới an toàn."
          }
        ]
      },
      {
        "id": "dao-pho-g1-l5-s5",
        "hazard": "quên quai mũ khi rời khỏi nhà",
        "prompt": "Bé Gấu đội mũ bảo hiểm nhưng ra khỏi nhà rồi mới nhớ quên cài quai. Bé Gấu làm gì?",
        "safeText": "Trở lại và cài quai đúng cách trước khi đi, hoặc nhờ người lớn kiểm tra.",
        "safeFeedback": "Đúng! Bé Gấu trở lại cài quai trước khi đi; an toàn là hàng đầu.",
        "unsafeChoices": [
          {
            "text": "Tiếp tục đi vì đã có mũ trên đầu.",
            "feedback": "Bé Gấu không đi khi quai chưa cài; dừng lại và nhờ người lớn cài đúng."
          },
          {
            "text": "Chỉ cài quai khi đã trong xe.",
            "feedback": "Bé Gấu cài quai trước khi xuất phát, không đợi trong xe."
          }
        ]
      }
    ]
  },
  {
    "id": "dao-pho-g2-l1",
    "moduleId": "dao-pho",
    "gradeBand": "2",
    "title": "Những nơi vui chơi an toàn",
    "objective": "Chọn khu vui chơi tách khỏi dòng xe và có người lớn trông nom.",
    "teacherPrompt": "Ở gần nhà em có nơi vui chơi nào cách xa xe cộ?",
    "situations": [
      {
        "id": "dao-pho-g2-l1-s1",
        "hazard": "Khu vực có xe đang ra vào",
        "prompt": "Bé Gấu muốn chơi bóng. Nơi nào phù hợp để chơi cùng bạn?",
        "safeText": "Sân chơi có rào/tách khỏi đường và người lớn biết Bé Gấu ở đó.",
        "safeFeedback": "Đúng rồi! Mình chơi ở nơi dành cho vui chơi, có người lớn trông nom.",
        "unsafeChoices": [
          {
            "text": "Lề đường nơi xe ra vào.",
            "feedback": "Lối xe chạy không phải sân chơi; hỏi người lớn chọn chỗ khác."
          },
          {
            "text": "Bãi đỗ xe đang có xe di chuyển.",
            "feedback": "Mình tránh khu vực xe ra vào và tìm sân chơi an toàn."
          }
        ]
      },
      {
        "id": "dao-pho-g2-l1-s2",
        "hazard": "Bóng lăn ra ngoài lề đường",
        "prompt": "Bé Gấu và bạn chơi trong sân có rào. Bóng lăn ra phía đường có xe chạy. Hai bạn làm gì?",
        "safeText": "Nhờ bạn lớn ở sân đợi, không chạy ra đường; hỏi người lớn chọn chỗ chơi khác.",
        "safeFeedback": "Mình chơi ở nơi tách khỏi xe, nhờ người lớn hỗ trợ nhé.",
        "unsafeChoices": [
          {
            "text": "Chạy theo bóng ra đường thật nhanh.",
            "feedback": "Mình không chạy ra đường; hãy ở trong khu vực an toàn."
          },
          {
            "text": "Người bạn tự đi lấy bóng một mình.",
            "feedback": "Mỗi người cần ở trong khu vực an toàn và hỏi người lớn."
          }
        ]
      },
      {
        "id": "dao-pho-g2-l1-s3",
        "hazard": "Xe đang di chuyển quanh bãi đỗ xe",
        "prompt": "Bé Gấu muốn chơi với bạn ở bãi đỗ xe nhà. Xe đang vào ra. Bé Gấu chọn chỗ nào?",
        "safeText": "Chọn sân chơi ở xa khu vực xe ra vào, có người lớn biết Bé Gấu ở đó.",
        "safeFeedback": "Tốt lắm! Bé Gấu chơi ở nơi tách khỏi dòng xe và có người lớn trông nom.",
        "unsafeChoices": [
          {
            "text": "Còn nên chơi giữa các xe đang di chuyển.",
            "feedback": "Mình tránh nơi có xe ra vào; người lớn sẽ chọn chỗ khác nhé."
          },
          {
            "text": "Chỉ cần nhìn xem có xe nào tới thì quay về.",
            "feedback": "Mình chọn nơi xa khỏi dòng xe và có người lớn trông nom."
          }
        ]
      },
      {
        "id": "dao-pho-g2-l1-s4",
        "hazard": "Không có người lớn ở gần",
        "prompt": "Bé Gấu đến khu vực có xe cộ chạy qua. Không có người lớn ngay đó. Bé Gấu làm gì?",
        "safeText": "Đứng ở nơi an toàn, tránh xa dòng xe, và gọi người lớn đến giữ Bé Gấu.",
        "safeFeedback": "Bé Gấu ở xa dòng xe và nhờ người lớn hỗ trợ, không tự đi đến nơi có xe.",
        "unsafeChoices": [
          {
            "text": "Tìm chỗ chơi ngay giữa đường.",
            "feedback": "Mình không vào khu vực xe chạy; hãy ở nơi an toàn và gọi người lớn."
          },
          {
            "text": "Và cùng bạn chạy ngang qua đường.",
            "feedback": "Mình chờ người lớn và ở xa dòng xe trước khi chơi."
          }
        ]
      },
      {
        "id": "dao-pho-g2-l1-s5",
        "hazard": "Lối đi bộ bị xe cản",
        "prompt": "Bé Gấu đến nơi dự định chơi, nhưng có xe đang đỗ chắn lối. Bé Gấu làm gì?",
        "safeText": "Nhờ người lớn giúp tìm cách khác hoặc đợi xe rời, không tự ý qua lại xe.",
        "safeFeedback": "Mình nhờ người lớn hỗ trợ, không tự đi qua khu vực có xe cản.",
        "unsafeChoices": [
          {
            "text": "Nhảy qua xe đang đỗ để đến chỗ chơi nhanh.",
            "feedback": "Mình không leo qua xe; hãy nhờ người lớn chọn lối khác nhé."
          },
          {
            "text": "Đợi xe rời nhưng đứng ngay cạnh bánh xe.",
            "feedback": "Mình đứng xa xe và nhờ người lớn hỗ trợ chọn cách an toàn."
          }
        ]
      }
    ]
  },
  {
    "id": "dao-pho-g2-l2",
    "moduleId": "dao-pho",
    "gradeBand": "2",
    "title": "Đi bộ qua đường an toàn",
    "objective": "Chờ người lớn, dùng lối dành cho người đi bộ và tuân theo tín hiệu.",
    "teacherPrompt": "Nếu chưa nhìn thấy lối sang đường, em sẽ hỏi ai?",
    "situations": [
      {
        "id": "dao-pho-g2-l2-s1",
        "hazard": "Đi qua đường không dùng lối dành cho người đi bộ",
        "prompt": "Bé Gấu và mẹ cần sang đường ở nơi có vạch và đèn. Bé Gấu làm gì?",
        "safeText": "Nắm tay mẹ, chờ tín hiệu phù hợp rồi qua đúng lối cùng Mẹ Gấu.",
        "safeFeedback": "Tốt lắm! Bé Gấu dùng đúng lối và chờ cùng Mẹ Gấu.",
        "unsafeChoices": [
          {
            "text": "Bước xuống khi đèn chưa cho phép.",
            "feedback": "Mình chờ tín hiệu phù hợp ở cạnh Mẹ Gấu."
          },
          {
            "text": "Đi theo xe đang rẽ.",
            "feedback": "Bé Gấu không đi theo xe; hãy đợi Mẹ Gấu dẫn qua."
          }
        ]
      },
      {
        "id": "dao-pho-g2-l2-s2",
        "hazard": "Đường này không có vạch sang đường",
        "prompt": "Bé Gấu cùng Mẹ Gấu đi qua một đường nhỏ không có vạch sang đường. Bé Gấu và Mẹ Gấu làm gì?",
        "safeText": "Nắm tay mẹ, mẹ tìm chỗ rộng, quan sát cả hai bên, ra hiệu rồi cùng nhau qua.",
        "safeFeedback": "Mẹ quan sát, ra hiệu và dẫn Bé Gấu qua đúng cách nhé.",
        "unsafeChoices": [
          {
            "text": "Bé Gấu tự chọn lúc rồi chạy qua một mình.",
            "feedback": "Bé Gấu không tự qua; hãy nắm tay Mẹ Gấu và làm theo hướng dẫn."
          },
          {
            "text": "Đi đúng hướng xe đang tới để xe dừng.",
            "feedback": "Mình đi cùng Mẹ Gấu, mẹ quan sát cả hai bên rồi dẫn qua."
          }
        ]
      },
      {
        "id": "dao-pho-g2-l2-s3",
        "hazard": "Đèn cho người đi bộ đang đỏ",
        "prompt": "Bé Gấu và mẹ đến chỗ sang đường có đèn dành cho người đi bộ đang đỏ. Bé Gấu làm gì?",
        "safeText": "Dừng ở lề đường an toàn, nắm tay Mẹ Gấu, đợi đèn cho phép rồi cùng Mẹ Gấu qua.",
        "safeFeedback": "Tốt lắm! Bé Gấu chờ đèn và làm theo Mẹ Gấu ở nơi an toàn.",
        "unsafeChoices": [
          {
            "text": "Bước xuống khi đèn còn đỏ vì đường có vẻ vắng.",
            "feedback": "Mình vẫn chờ đèn đỏ và làm theo Mẹ Gấu; không tự bước xuống."
          },
          {
            "text": "Đi theo bạn đang băng qua khi đèn đỏ.",
            "feedback": "Bé Gấu dừng lại và chờ cùng Mẹ Gấu đến khi có tín hiệu phù hợp."
          }
        ]
      },
      {
        "id": "dao-pho-g2-l2-s4",
        "hazard": "Đường nhiều làn qua cầu người đi bộ",
        "prompt": "Bé Gấu cùng Mẹ Gấu cần sang đường có cầu đi bộ tầng trên. Bé Gấu chọn cách nào?",
        "safeText": "Theo mẹ ở lối đi bộ, không đi cùng xe, và đi đúng từng lối tầng.",
        "safeFeedback": "Bé Gấu đi cùng Mẹ Gấu trên lối dành cho người đi bộ, không xuống đường.",
        "unsafeChoices": [
          {
            "text": "Xuống cuối cầu để sang nhanh hơn.",
            "feedback": "Mình đi theo lối dành cho người đi bộ cùng Mẹ Gấu, không xuống đường."
          },
          {
            "text": "Đợi bạn khác rồi đi cùng họ thoải mái.",
            "feedback": "Bé Gấu nắm tay Mẹ Gấu, đi đúng lối dành cho người đi bộ và nghe Mẹ Gấu hướng dẫn."
          }
        ]
      },
      {
        "id": "dao-pho-g2-l2-s5",
        "hazard": "Đi cùng người lớn với vật nhạy",
        "prompt": "Bé Gấu đang đi cùng Mẹ Gấu nhưng Mẹ Gấu đang đeo máy nghe điện. Bé Gấu làm gì?",
        "safeText": "Nhắc mẹ chú ý đường, đi chậm và giữ sát người lớn; không tách ra giữa đường.",
        "safeFeedback": "Bé Gấu nhắc mẹ chú ý, đi sát người lớn và không rời giữa đường.",
        "unsafeChoices": [
          {
            "text": "Bé Gấu đi nhanh phía trước vì biết đường.",
            "feedback": "Bé Gấu ở cạnh Mẹ Gấu, nhắc mẹ chú ý đường và không đi trước."
          },
          {
            "text": "Bé Gấu nhìn điện thoại để lấy tên đường.",
            "feedback": "Bé Gấu chú ý đường, nắm tay Mẹ Gấu và nghe Mẹ Gấu hướng dẫn."
          }
        ]
      }
    ]
  },
  {
    "id": "dao-pho-g2-l3",
    "moduleId": "dao-pho",
    "gradeBand": "2",
    "title": "Lên, xuống xe đạp, xe máy an toàn",
    "objective": "Chỉ lên xuống khi xe đã dừng ở vị trí an toàn và có người lớn hỗ trợ.",
    "teacherPrompt": "Vì sao cần chờ xe dừng hẳn trước khi xuống?",
    "situations": [
      {
        "id": "dao-pho-g2-l3-s1",
        "hazard": "Xuất phát khi xe chưa dừng hoàn toàn",
        "prompt": "Mẹ dừng xe ở nơi an toàn để đón Bé Gấu. Khi nào Bé Gấu xuống xe?",
        "safeText": "Chờ mẹ báo xe đã dừng hẳn, quan sát và nhờ Mẹ Gấu hỗ trợ.",
        "safeFeedback": "Chính xác! Bé Gấu chờ xe dừng và làm theo Mẹ Gấu.",
        "unsafeChoices": [
          {
            "text": "Nhảy xuống khi xe còn di chuyển.",
            "feedback": "Mình không xuống khi xe chạy; chờ Mẹ Gấu giúp nhé."
          },
          {
            "text": "Xuống ngay phía có xe đang đi sát.",
            "feedback": "Mẹ Gấu sẽ chọn vị trí an toàn rồi giúp Bé Gấu xuống."
          }
        ]
      },
      {
        "id": "dao-pho-g2-l3-s2",
        "hazard": "Xe máy dừng để đón Bé Gấu",
        "prompt": "Mẹ dừng xe máy để Bé Gấu lên xe. Bé Gấu làm gì để lên xe an toàn?",
        "safeText": "Chờ mẹ báo xe đã dừng hẳn, nhờ Mẹ Gấu hỗ trợ, rồi lên xe đúng chỗ với tay có nắm.",
        "safeFeedback": "Bé Gấu chờ xe dừng hoàn toàn và nhờ Mẹ Gấu hỗ trợ để lên xe an toàn.",
        "unsafeChoices": [
          {
            "text": "Lên xe ngay khi Mẹ Gấu đang chờ đèn tín hiệu xanh.",
            "feedback": "Bé Gấu cần chờ xe dừng hẳn và mẹ hỗ trợ; không mấp mô."
          },
          {
            "text": "Ngồi phía trước tay lái để nhìn rõ.",
            "feedback": "Bé Gấu ngồi đúng chỗ phía sau và nghe Mẹ Gấu hướng dẫn, tay nắm chắc."
          }
        ]
      },
      {
        "id": "dao-pho-g2-l3-s3",
        "hazard": "Xuất phát từ bãi đỗ xe",
        "prompt": "Bé Gấu cùng Mẹ Gấu ở bãi đỗ xe. Xe máy đang được khởi động. Bé Gấu làm gì khi mẹ nói chuyện?",
        "safeText": "Chú ý khoảng không, chờ Mẹ Gấu đảm bảo an toàn rồi nhờ Mẹ Gấu hỗ trợ lên xe.",
        "safeFeedback": "Bé Gấu chờ Mẹ Gấu đảm bảo an toàn và nhờ hỗ trợ; không tự ý tiếp xúc xe.",
        "unsafeChoices": [
          {
            "text": "Ngồi trên xe ngay khi mẹ thì thầm.",
            "feedback": "Bé Gấu chờ Mẹ Gấu hướng dẫn, xe đã dừng hoàn toàn và mẹ bảo đảm xe đã sẵn sàng."
          },
          {
            "text": "Đứng xung quanh xe khi Mẹ Gấu đang làm việc.",
            "feedback": "Bé Gấu ở ngay nơi an toàn, chờ Mẹ Gấu hỗ trợ và không tự ý tiếp xúc xe."
          }
        ]
      },
      {
        "id": "dao-pho-g2-l3-s4",
        "hazard": "Jerry xuống xe bên đường xe cộ",
        "prompt": "Mẹ muốn dừng xe máy để Bé Gấu xuống gần đường có xe chạy. Bé Gấu làm gì?",
        "safeText": "Chờ Mẹ Gấu chọn nơi an toàn, nhờ Mẹ Gấu hỗ trợ, xuống đúng chỗ và đứng xa nhất có thể.",
        "safeFeedback": "Bé Gấu chờ Mẹ Gấu chọn nơi an toàn và hỗ trợ; không xuống khi xe đang chuyển động.",
        "unsafeChoices": [
          {
            "text": "Xuống ngay khi mẹ ra hiệu nhưng xe vẫn đang lăn.",
            "feedback": "Bé Gấu không xuống khi xe đang di chuyển; chờ Mẹ Gấu hỗ trợ và xe dừng hẳn."
          },
          {
            "text": "Đứng ngay cạnh bánh xe khi xe vẫn đang di chuyển.",
            "feedback": "Bé Gấu đứng nơi an toàn, chờ Mẹ Gấu chọn vị trí và hỗ trợ để xuống xe an toàn."
          }
        ]
      },
      {
        "id": "dao-pho-g2-l3-s5",
        "hazard": "Đạp xe đạp khi có người đến gần",
        "prompt": "Bé Gấu và mẹ đến bãi đỗ xe đạp. Xe đạp đang đứng. Bé Gấu làm gì khi mẹ bảo nhau?",
        "safeText": "Chờ Mẹ Gấu kiểm tra xe đã dừng, nhờ hỗ trợ, rồi lên xe đúng chỗ với tay nắm.",
        "safeFeedback": "Mét chờ xe dừng hoàn toàn, nhờ Mẹ Gấu hỗ trợ và lên xe đúng chỗ.",
        "unsafeChoices": [
          {
            "text": "Cho xe chạy rồi nhảy lên khi xe vận chuyển.",
            "feedback": "Bé Gấu không lên khi xe đang chuyển động; chờ Mẹ Gấu hỗ trợ."
          },
          {
            "text": "Ngồi thiên về phía tay lái để điều khiển.",
            "feedback": "Bé Gấu ngồi đúng chỗ, nắm tay chắc, và nghe Mẹ Gấu hướng dẫn."
          }
        ]
      }
    ]
  },
  {
    "id": "dao-pho-g2-l4",
    "moduleId": "dao-pho",
    "gradeBand": "2",
    "title": "Biển báo hiệu giao thông đường bộ",
    "objective": "Nhận ra biển báo là thông tin cần quan sát và hỏi người lớn khi chưa hiểu.",
    "teacherPrompt": "Em biết biển báo nào quanh trường? Hãy cùng người lớn xác nhận ý nghĩa.",
    "situations": [
      {
        "id": "dao-pho-g2-l4-s1",
        "hazard": "Tự ý đoán ý nghĩa biển báo không rõ",
        "prompt": "Bé Gấu thấy một biển báo mới trên đường. Bé Gấu nên làm gì?",
        "safeText": "Quan sát từ nơi an toàn, hỏi Mẹ Gấu ý nghĩa và làm theo hướng dẫn.",
        "safeFeedback": "Đúng rồi! Biển báo giúp mọi người biết quy định/cảnh báo.",
        "unsafeChoices": [
          {
            "text": "Đoán rằng biển nào cũng cho phép qua đường.",
            "feedback": "Biển báo có nhiều ý nghĩa; mình không tự đoán nhé."
          },
          {
            "text": "Đến sát lòng đường để nhìn rõ hơn.",
            "feedback": "Bé Gấu đứng cạnh Mẹ Gấu ở nơi an toàn rồi cùng quan sát."
          }
        ]
      },
      {
        "id": "dao-pho-g2-l4-s2",
        "hazard": "Biển báo mới lạ",
        "prompt": "Bé Gấu thấy biển báo lạ trên đường. Bé Gấu làm gì?",
        "safeText": "Quan sát từ nơi an toàn, nhờ Mẹ Gấu giải thích ý nghĩa, và làm theo hướng dẫn.",
        "safeFeedback": "Bé Gấu đứng cạnh Mẹ Gấu ở nơi an toàn, quan sát và hỏi Mẹ Gấu về biển báo.",
        "unsafeChoices": [
          {
            "text": "Đứng ngay cạnh biển mới để xem rõ.",
            "feedback": "Bé Gấu đứng ở nơi an toàn và hỏi người lớn; không tự ý đến gần biển."
          },
          {
            "text": "Đoán rằng biển là cho phép qua đường.",
            "feedback": "Bé Gấu không đoán; hãy nhờ người lớn giải thích ý nghĩa biển báo."
          }
        ]
      },
      {
        "id": "dao-pho-g2-l4-s3",
        "hazard": "Biển báo con đường tạm thời",
        "prompt": "Bé Gấu thấy biển báo chỉ dẫn một phần đường tạm thời. Bé Gấu làm gì?",
        "safeText": "Quan sát biển từ nơi an toàn, nhờ Mẹ Gấu giải thích, và làm theo hướng dẫn.",
        "safeFeedback": "Bé Gấu đứng cạnh Mẹ Gấu, quan sát biển và hỏi Mẹ Gấu trước khi đi.",
        "unsafeChoices": [
          {
            "text": "Cứ đi như thường vì biển chỉ là tạm thời.",
            "feedback": "Bé Gấu vẫn quan sát biển và làm theo hướng dẫn của người lớn."
          },
          {
            "text": "Không cần quan tâm biển tạm thời.",
            "feedback": "Bé Gấu chú ý biển báo, nhờ người lớn giải thích và làm theo hướng dẫn."
          }
        ]
      },
      {
        "id": "dao-pho-g2-l4-s4",
        "hazard": "Biển báo trẻ em gần trường",
        "prompt": "Bé Gấu thấy biển báo có hình trẻ em trước trường. Bé Gấu làm gì?",
        "safeText": "Nhớ rằng nơi này có thể có trẻ em; đi cùng người lớn, quan sát và làm theo hướng dẫn.",
        "safeFeedback": "Bé Gấu đi cùng người lớn, chú ý và làm theo hướng dẫn ở khu vực trường.",
        "unsafeChoices": [
          {
            "text": "Tự chạy nhanh qua vì biển báo trẻ em.",
            "feedback": "Bé Gấu vẫn đi cùng người lớn, quan sát và làm theo hướng dẫn."
          },
          {
            "text": "Che biển để bạn không phải nhìn.",
            "feedback": "Bé Gấu giữ biển nhìn rõ và nhắc người lớn nếu có vật che."
          }
        ]
      },
      {
        "id": "dao-pho-g2-l4-s5",
        "hazard": "Biển báo giữa đường và đường phụ",
        "prompt": "Bé Gấu đến nơi có biển báo giữa đường chính và đường nhỏ. Bé Gấu làm gì?",
        "safeText": "Quan sát biển từ nơi an toàn, nhờ người lớn giải thích ý nghĩa, và làm theo hướng dẫn.",
        "safeFeedback": "Bé Gấu đứng cạnh người lớn, quan sát biển và hỏi ý nghĩa trước khi đi.",
        "unsafeChoices": [
          {
            "text": "Chỉ cần nhìn kỹ biển rồi tự đi.",
            "feedback": "Bé Gấu vẫn nhờ người lớn giải thích và làm theo hướng dẫn."
          },
          {
            "text": "Đứng ngay giữa đường để đọc biển rõ hơn.",
            "feedback": "Bé Gấu ở nơi an toàn, quan sát biển và nhờ người lớn hỗ trợ."
          }
        ]
      }
    ]
  },
  {
    "id": "dao-pho-g2-l5",
    "moduleId": "dao-pho",
    "gradeBand": "2",
    "title": "Chọn và đội mũ bảo hiểm đúng cách",
    "objective": "Chọn mũ vừa đầu, đạt chuẩn và cài quai đúng cách với sự trợ giúp của người lớn.",
    "teacherPrompt": "Người lớn có thể giúp kiểm tra mũ vừa và quai đã cài chưa như thế nào?",
    "situations": [
      {
        "id": "dao-pho-g2-l5-s1",
        "hazard": "Mũ không vừa đầu hoặc quai chưa chắc",
        "prompt": "Bé Gấu thử mũ trước chuyến xe máy cùng Mẹ Gấu. Bé Gấu làm gì?",
        "safeText": "Nhờ Mẹ Gấu kiểm tra mũ vừa đầu và cài quai chắc trước khi đi.",
        "safeFeedback": "Tốt lắm! Bé Gấu nhờ Mẹ Gấu kiểm tra mũ vừa đầu và quai chắc.",
        "unsafeChoices": [
          {
            "text": "Chọn mũ rộng vì trông đẹp.",
            "feedback": "Mũ cần vừa đầu; nhờ Mẹ Gấu chọn giúp, không chỉ vì đẹp."
          },
          {
            "text": "Cài quai lỏng để dễ tháo.",
            "feedback": "Quai cần cài chắc; nhờ Mẹ Gấu chỉnh giúp."
          }
        ]
      },
      {
        "id": "dao-pho-g2-l5-s2",
        "hazard": "Mũ vừa đầu nhưng quai mỏng",
        "prompt": "Bé Gấu chọn mũ vừa đầu. Mẹ Gấu kiểm tra thấy quai mỏng. Bé Gấu làm gì?",
        "safeText": "Nhờ mẹ chỉnh quai cho vừa chắc và kiểm tra lại trước khi đi.",
        "safeFeedback": "Bé Gấu nhờ Mẹ Gấu chỉnh quai và kiểm tra lại trước khi lên xe nhé.",
        "unsafeChoices": [
          {
            "text": "Cài quai rất chặt để không rơi.",
            "feedback": "Bé Gấu nhờ Mẹ Gấu chỉnh vừa chắc; không tự cài quá chặt."
          },
          {
            "text": "Để quai lỏng để dễ tháo nhanh.",
            "feedback": "Bé Gấu cần quai vừa chắc; nhờ Mẹ Gấu kiểm tra và chỉnh giúp."
          }
        ]
      },
      {
        "id": "dao-pho-g2-l5-s3",
        "hazard": "Mũ cũ chưa biết đạt chuẩn",
        "prompt": "Bé Gấu dùng mũ cũ của bạn. Mẹ không biết có đạt chuẩn không. Bé Gấu làm gì?",
        "safeText": "Nhờ người lớn kiểm tra xem mũ có đạt chuẩn và còn tốt không trước khi đội.",
        "safeFeedback": "Bé Gấu nhờ người lớn kiểm tra mũ đạt chuẩn và còn tốt trước khi đi xe.",
        "unsafeChoices": [
          {
            "text": "Đội luôn vì màu đẹp và vừa head.",
            "feedback": "Bé Gấu cần mũ đạt chuẩn và còn tốt; nhờ người lớn kiểm tra."
          },
          {
            "text": "Mặc trang phục đẹp thay vì đội mũ.",
            "feedback": "Bé Gấu đội mũ bảo hiểm đạt chuẩn và nhờ người lớn kiểm tra trước."
          }
        ]
      },
      {
        "id": "dao-pho-g2-l5-s4",
        "hazard": "Mũ hơi rộng và rơi xuống mái tóc",
        "prompt": "Bé Gấu đội mũ nhưng mũ hơi rộng, dễ rơi xuống tóc khi di chuyển. Bé Gấu làm gì?",
        "safeText": "Nhờ người lớn giúp chọn mũ vừa đầu hơn hoặc chỉnh lại cho vừa và chắc.",
        "safeFeedback": "Bé Gấu nhờ người lớn giúp chọn mũ vừa hơn hoặc chỉnh lại cho vừa và chắc.",
        "unsafeChoices": [
          {
            "text": "Để mũ rơi xuống tóc vì không muốn khó chịu.",
            "feedback": "Bé Gấu cần mũ vừa đầu và chắc; nhờ người lớn giúp chọn hoặc chỉnh."
          },
          {
            "text": "Thử đeo mũ bằng dây quanh cằm để giữ.",
            "feedback": "Bé Gấu nhờ người lớn giúp chỉnh mũ vừa đầu và cài quai đúng cách."
          }
        ]
      },
      {
        "id": "dao-pho-g2-l5-s5",
        "hazard": "Mũ có vết nứt nhỏ trên vỏ",
        "prompt": "Bé Gấu thấy mũ bảo hiểm có vết nứt nhỏ trên vỏ bọc. Bé Gấu làm gì?",
        "safeText": "Nhờ người lớn kiểm tra xem mũ còn an toàn và đạt chuẩn không, không đội khi có vết nứt nghiêm trọng.",
        "safeFeedback": "Bé Gấu nhờ người lớn kiểm tra mũ; nếu có vết nứt nghiêm trọng, chọn mũ khác.",
        "unsafeChoices": [
          {
            "text": "Vẫn đội vì vết nứt nhỏ không sao.",
            "feedback": "Bé Gấu cần mũ còn tốt và đạt chuẩn; nhờ người lớn kiểm tra kỹ."
          },
          {
            "text": "Thay mũ bằng mũ cũ của người khác không biết nguồn gốc.",
            "feedback": "Bé Gấu nhờ người lớn kiểm tra mũ có đạt chuẩn, chọn mũ phù hợp."
          }
        ]
      }
    ]
  },
  {
    "id": "dao-pho-g3-l1",
    "moduleId": "dao-pho",
    "gradeBand": "3",
    "title": "Cổng trường an toàn giao thông",
    "objective": "Chờ đón ở khu vực được hướng dẫn, không tụ tập hoặc chạy ra luồng xe.",
    "teacherPrompt": "Nhà trường có thể chỉ điểm đón học sinh an toàn ở đâu?",
    "situations": [
      {
        "id": "dao-pho-g3-l1-s1",
        "hazard": "đông xe tại cổng trường khi tan học",
        "prompt": "Tan học, cổng trường đông xe. Bé Gấu chờ người thân ở đâu?",
        "safeText": "Ở điểm chờ theo hướng dẫn của trường, cạnh giáo viên/người lớn.",
        "safeFeedback": "Đúng rồi! Bé Gấu chờ ở chỗ được hướng dẫn.",
        "unsafeChoices": [
          {
            "text": "Chen ra giữa luồng xe để tìm mẹ.",
            "feedback": "Mình không bước vào dòng xe; nhờ giáo viên giúp tìm mẹ."
          },
          {
            "text": "Đứng khuất sau xe đang lùi.",
            "feedback": "Bé Gấu đứng nơi nhìn thấy được và làm theo người lớn."
          }
        ]
      },
      {
        "id": "dao-pho-g3-l1-s2",
        "hazard": "chạy ra giữa dòng xe để tìm người thân",
        "prompt": "Tan học, Bé Gấu không thấy mẹ ngay. Có nhiều xe đang đi ra vào cổng trường. Bé Gấu làm gì?",
        "safeText": "Ở điểm chờ được trường chỉ, gần giáo viên hoặc người lớn, và nhờ người lớn giúp tìm mẹ.",
        "safeFeedback": "Đúng rồi! Bé Gấu ở chỗ an toàn và nhờ người lớn giúp tìm mẹ.",
        "unsafeChoices": [
          {
            "text": "Chen mình vào giữa xe để tìm mẹ nhanh.",
            "feedback": "Bé Gấu không chen vào dòng xe; ở lại chỗ được chỉ và nhờ người lớn."
          },
          {
            "text": "Đứng sau xe đang lùi để không bị giáo viên nhìn thấy.",
            "feedback": "Bé Gấu đứng nơi giáo viên nhìn thấy được và làm theo hướng dẫn của họ."
          }
        ]
      },
      {
        "id": "dao-pho-g3-l1-s3",
        "hazard": "tụ tập nhóm bạn ngay nơi xe ra vào",
        "prompt": "Bé Gấu và bạn cùng tan học, tụ tập trò chuyện ngay trước cổng nơi có nhiều xe đón học sinh. Hai bạn làm gì?",
        "safeText": "Nhờ giáo viên hoặc người lớn nhắc nhở, chuyển đến khu vực chờ an toàn cùng bạn.",
        "safeFeedback": "Tốt lắm! Hai bạn dời đến chỗ an toàn và làm theo người lớn.",
        "unsafeChoices": [
          {
            "text": "Chỉ chơi thêm chút nữa rồi chuyển đến chỗ khác.",
            "feedback": "Bé Gấu không trì hoãn; cứ rời đến chỗ an toàn ngay với bạn."
          },
          {
            "text": "Chạy lại phía xe để bắt xe sớm hơn.",
            "feedback": "Bé Gấu đứng chờ ở chỗ được chỉ định, không chạy ra phía xe."
          }
        ]
      },
      {
        "id": "dao-pho-g3-l1-s4",
        "hazard": "người thân đón bằng xe máy từ phía lối khác",
        "prompt": "Mẹ Bé Gấu đón bằng xe máy từ một lối khác cổng trường, Bé Gấu thấy mẹ nhưng đường giữa có xe đang đi. Bé Gấu làm gì?",
        "safeText": "Ở tại điểm chờ an toàn, giơ tay hoặc gọi to để mẹ chú ý, đợi mẹ dừng xe và người lớn chỉ cách tiếp cận an toàn.",
        "safeFeedback": "Đúng! Bé Gấu ở chỗ an toàn, báo Mẹ Gấu và đợi mẹ dừng xe trước khi đến.",
        "unsafeChoices": [
          {
            "text": "Chạy qua đường ngay khi thấy mẹ để lên xe nhanh.",
            "feedback": "Bé Gấu không chạy qua đường; ở lại chỗ an toàn và đợi mẹ dừng xe."
          },
          {
            "text": "Tự đi đến phía xe máy của mẹ.",
            "feedback": "Bé Gấu ở lại chỗ được chỉ và nhờ người lớn hướng dẫn cách gặp mẹ an toàn."
          }
        ]
      },
      {
        "id": "dao-pho-g3-l1-s5",
        "hazard": "xe buýt trường dừng ngay tại cổng",
        "prompt": "Xe buýt trường chờ học sinh đang dừng ở gần cổng, nhiều chân xe ra vào. Bé Gấu làm gì khi ra về?",
        "safeText": "Giữ khoảng cách với xe buýt, đi theo người lớn hoặc giáo viên qua lối được chỉ, không đứng sát bánh xe.",
        "safeFeedback": "Tốt! Bé Gấu tránh xa xe buýt và đi cùng người lớn qua lối an toàn.",
        "unsafeChoices": [
          {
            "text": "Quan sát từ sát bánh xe buýt đang lăn.",
            "feedback": "Bé Gấu đứng xa xe buýt và làm theo hướng dẫn của người lớn."
          },
          {
            "text": "Nhảy lên xe buýt vì Mẹ Gấu đang chờ ở trên xe.",
            "feedback": "Bé Gấu ở chỗ được chỉ và không lên xe trừ khi người lớn hướng dẫn."
          }
        ]
      }
    ]
  },
  {
    "id": "dao-pho-g3-l2",
    "moduleId": "dao-pho",
    "gradeBand": "3",
    "title": "Biển báo hiệu giao thông đường bộ",
    "objective": "Nhận biết nhóm/ý nghĩa biển báo thông dụng và không tự ý bỏ qua chỉ dẫn.",
    "teacherPrompt": "Biển này đang cảnh báo hay chỉ dẫn? Em sẽ xác nhận với ai?",
    "situations": [
      {
        "id": "dao-pho-g3-l2-s1",
        "hazard": "chưa hiểu ý nghĩa biển báo trước cổng trường",
        "prompt": "Biển báo trước cổng trường nhắc mọi người chú ý trẻ em. Bé Gấu nên làm gì?",
        "safeText": "Đi với người lớn, quan sát và làm theo chỉ dẫn tại khu vực trường.",
        "safeFeedback": "Chính xác! Biển báo nhắc chú ý; người lớn giúp Bé Gấu chọn cách đi.",
        "unsafeChoices": [
          {
            "text": "Xem biển như tín hiệu cho phép băng qua.",
            "feedback": "Biển cảnh báo không thay tín hiệu qua đường."
          },
          {
            "text": "Che biển để bạn khỏi phải nhìn.",
            "feedback": "Mình giữ biển báo nhìn rõ và nhắc người lớn nếu bị che."
          }
        ]
      },
      {
        "id": "dao-pho-g3-l2-s2",
        "hazard": "biển báo hình người đi bộ với đèn xanh",
        "prompt": "Bé Gấu thấy một biển báo mới có hình người đi bộ đang bật đèn xanh ở gần trường. Bé Gấu làm gì?",
        "safeText": "Đứng cạnh người lớn, hỏi ý nghĩa biển và làm theo hướng dẫn; không tự đoán.",
        "safeFeedback": "Tốt lắm! Bé Gấu hỏi người lớn và làm theo chỉ dẫn sau khi họ giải thích.",
        "unsafeChoices": [
          {
            "text": "Cho rằng đây là biển cho phép Bé Gấu qua đường một mình.",
            "feedback": "Biển báo cần người lớn giải thích; Bé Gấu không tự qua mà không hỏi."
          },
          {
            "text": "Che biển bằng tay để bạn khác không nhìn.",
            "feedback": "Bé Gấu giữ biển nhìn rõ và nhắc người lớn nếu có vật che khuất."
          }
        ]
      },
      {
        "id": "dao-pho-g3-l2-s3",
        "hazard": "biển báo giới hạn tốc độ 30 gần trường",
        "prompt": "Bé Gấu thấy biển báo có số 30 với hình đồng hồ gần trường. Bé Gấu làm gì với biển này?",
        "safeText": "Nhờ người lớn giải thích, hiểu đây là biển giới hạn tốc độ, và đi cùng người lớn theo hướng dẫn.",
        "safeFeedback": "Tốt lắm! Bé Gấu hỏi người lớn và làm theo hướng dẫn ở khu vực có biển này.",
        "unsafeChoices": [
          {
            "text": "Tự đoán là biển cho phép chạy nhanh.",
            "feedback": "Bé Gấu không đoán; nhờ người lớn giải thích ý nghĩa của biển."
          },
          {
            "text": "Che biển để không cho người khác nhìn.",
            "feedback": "Bé Gấu giữ biển được nhìn thấy và nhắc người lớn nếu có vật che."
          }
        ]
      },
      {
        "id": "dao-pho-g3-l2-s4",
        "hazard": "biển báo cấm đỗ xe trước lối vào trường",
        "prompt": "Bé Gấu thấy biển báo cấm đỗ xe ngay trước lối vào trường. Bé Gấu hiểu thế nào?",
        "safeText": "Đứng cạnh người lớn, hỏi ý nghĩa và tuân theo hướng dẫn; không đứng hoặc đỗ ở khu vực đó.",
        "safeFeedback": "Đúng rồi! Bé Gấu hỏi người lớn và làm theo chỉ dẫn về khu vực cấm đỗ.",
        "unsafeChoices": [
          {
            "text": "Cho rằng đây là chỗ Bé Gấu có thể đứng chờ Mẹ Gấu.",
            "feedback": "Bé Gấu không đứng ở khu vực cấm; hỏi người lớn chỗ nào được phép."
          },
          {
            "text": "Đứng ngay tại biển để đọc kỹ hơn.",
            "feedback": "Bé Gấu nhắc người lớn và giữ biển được nhìn rõ cho mọi người."
          }
        ]
      },
      {
        "id": "dao-pho-g3-l2-s5",
        "hazard": "biển báo nguy hiểm ở chiều ngược",
        "prompt": "Bé Gấu đi cùng người lớn về chiều, thấy một biển báo màu vàng hình tam giác cảnh báo quanh trường. Bé Gấu làm gì?",
        "safeText": "Quan sát từ nơi an toàn, hỏi người lớn ý nghĩa và làm theo hướng dẫn của họ.",
        "safeFeedback": "Chính xác! Bé Gấu hỏi người lớn và làm theo hướng dẫn về biển cảnh báo.",
        "unsafeChoices": [
          {
            "text": "Cho rằng biển vàng nghĩa là có thể qua đường tự do.",
            "feedback": "Bé Gấu không tự đoán; hỏi người lớn trước khi làm bất cứ điều gì."
          },
          {
            "text": "Đứng sát biển để đọc kỹ hơn.",
            "feedback": "Bé Gấu đứng cạnh người lớn ở nơi an toàn và hỏi ý nghĩa biển."
          }
        ]
      }
    ]
  },
  {
    "id": "dao-pho-g3-l3",
    "moduleId": "dao-pho",
    "gradeBand": "3",
    "title": "Đi bộ tại những nơi đường giao nhau",
    "objective": "Dừng chờ người lớn và tín hiệu ở giao lộ; tuyệt đối không vượt rào chắn đường sắt.",
    "teacherPrompt": "Nếu rào chắn đang đóng, em cần đứng chờ ở đâu cùng người lớn?",
    "situations": [
      {
        "id": "dao-pho-g3-l3-s1",
        "hazard": "chưa biết cách đợi an toàn ở nơi giao nhau",
        "prompt": "Bé Gấu và mẹ đến chỗ giao nhau với đường sắt. Rào chắn đang hạ. Bé Gấu và Mẹ Gấu làm gì?",
        "safeText": "Dừng ở nơi chờ an toàn, không vượt rào và đợi người lớn hướng dẫn.",
        "safeFeedback": "Đúng rồi! Rào chắn đóng nghĩa là phải chờ.",
        "unsafeChoices": [
          {
            "text": "Vượt qua vì tàu còn xa.",
            "feedback": "Không ai băng qua khi rào chắn đang hạ/đóng."
          },
          {
            "text": "Đi theo người khác chui qua rào.",
            "feedback": "Bé Gấu ở cạnh Mẹ Gấu và chờ rào mở, người lớn xác nhận an toàn."
          }
        ]
      },
      {
        "id": "dao-pho-g3-l3-s2",
        "hazard": "đèn tín hiệu cho phép đi nhưng xe vẫn qua",
        "prompt": "Bé Gấu và mẹ đến lối sang có đèn, đèn cho phép đi đã sáng nhưng Bé Gấu và Mẹ Gấu thấy xe vẫn đang chạy qua. Bé Gấu làm gì?",
        "safeText": "Nhờ mẹ quan sát, đợi xe qua hẳn rồi cùng qua khi người lớn xác nhận an toàn.",
        "safeFeedback": "Tốt! Bé Gấu đợi xe qua và làm theo Mẹ Gấu khi họ xác nhận an toàn.",
        "unsafeChoices": [
          {
            "text": "Đi ngay vì đèn đã cho phép.",
            "feedback": "Bé Gấu không đi ngay; đợi Mẹ Gấu kiểm tra và xác nhận xe đã qua."
          },
          {
            "text": "Chạy nhanh qua trước khi đèn đổi.",
            "feedback": "Bé Gấu ở lại cạnh Mẹ Gấu và chờ đến khi mẹ ra hiệu an toàn."
          }
        ]
      },
      {
        "id": "dao-pho-g3-l3-s3",
        "hazard": "nơi giao nhau không có vạch sang đường",
        "prompt": "Bé Gấu cùng Mẹ Gấu đi đến một nơi giao nhau không có vạch hoặc đèn sang đường. Bé Gấu làm gì?",
        "safeText": "Nhờ mẹ tìm nơi rộng, quan sát cả hai phía, ra hiệu rồi cùng nhau qua khi an toàn.",
        "safeFeedback": "Đúng rồi! Bé Gấu nhờ Mẹ Gấu quan sát và dẫn qua khi đã an toàn.",
        "unsafeChoices": [
          {
            "text": "Tự chọn lúc rồi chạy qua một mình.",
            "feedback": "Bé Gấu không tự qua; nắm tay Mẹ Gấu và làm theo hướng dẫn."
          },
          {
            "text": "Đi theo nhóm bạn đang cùng nhau qua.",
            "feedback": "Bé Gấu ở cạnh Mẹ Gấu và chờ Mẹ Gấu ra hiệu trước khi đi."
          }
        ]
      },
      {
        "id": "dao-pho-g3-l3-s4",
        "hazard": "đèn xanh nhưng có xe rẽ phải",
        "prompt": "Bé Gấu và mẹ ở lối sang, đèn xanh cho phép đi nhưng có xe đang rẽ phải vào lối đó. Bé Gấu làm gì?",
        "safeText": "Nhờ mẹ quan sát xe rẽ, đợi xe qua hoặc dừng, rồi cùng qua khi mẹ xác nhận an toàn.",
        "safeFeedback": "Tốt lắm! Bé Gấu quan sát xe rẽ và đợi mẹ xác nhận an toàn trước khi qua.",
        "unsafeChoices": [
          {
            "text": "Đi ngay vì đèn xanh đã cho phép.",
            "feedback": "Bé Gấu không đi ngay; đợi Mẹ Gấu kiểm tra xe rẽ và xác nhận."
          },
          {
            "text": "Ra trước đầu xe để mọi người nhìn thấy.",
            "feedback": "Bé Gấu ở cạnh Mẹ Gấu và chờ đợi mẹ ra hiệu khi nào an toàn."
          }
        ]
      },
      {
        "id": "dao-pho-g3-l3-s5",
        "hazard": "lối qua đường có cầu đi bộ",
        "prompt": "Bé Gấu cùng Mẹ Gấu cần sang đường qua một cầu đi bộ ở nơi giao nhau đông. Bé Gấu làm gì?",
        "safeText": "Giữ tay mẹ, đi chậm trên cầu, không chạy trên cầu, nghe người lớn hướng dẫn.",
        "safeFeedback": "Đúng! Bé Gấu nắm tay Mẹ Gấu, đi chậm và làm theo hướng dẫn trên cầu.",
        "unsafeChoices": [
          {
            "text": "Chạy trên cầu để nhanh đến đích.",
            "feedback": "Bé Gấu không chạy trên cầu; đi chậm và nắm tay Mẹ Gấu."
          },
          {
            "text": "Để mẹ đi trước, Bé Gấu đi sau một mình.",
            "feedback": "Bé Gấu ở cạnh Mẹ Gấu và đi cùng họ trên cầu, không đi riêng."
          }
        ]
      }
    ]
  },
  {
    "id": "dao-pho-g3-l4",
    "moduleId": "dao-pho",
    "gradeBand": "3",
    "title": "Tham gia giao thông an toàn trên các phương tiện giao thông công cộng",
    "objective": "Chờ xe dừng, lên xuống trật tự, ngồi/đứng đúng vị trí và nghe người lớn.",
    "teacherPrompt": "Khi đi xe buýt hoặc thuyền cùng gia đình, em cần làm theo ai?",
    "situations": [
      {
        "id": "dao-pho-g3-l4-s1",
        "hazard": "xuất phát khi xe chưa dừng hoàn toàn",
        "prompt": "Trên xe buýt, bạn rủ Bé Gấu thò tay ra ngoài cửa sổ. Bé Gấu nên trả lời sao?",
        "safeText": "Không thò tay/đầu ra; ngồi đúng chỗ và báo người lớn nếu cần.",
        "safeFeedback": "Tốt lắm! Mọi người giữ tay chân bên trong xe.",
        "unsafeChoices": [
          {
            "text": "Thử thò ra một chút cho mát.",
            "feedback": "Mình không đưa tay hay đầu ra ngoài xe."
          },
          {
            "text": "Đứng lên khi xe đang chạy.",
            "feedback": "Bé Gấu ngồi yên và làm theo hướng dẫn của người lớn."
          }
        ]
      },
      {
        "id": "dao-pho-g3-l4-s2",
        "hazard": "xe buýt rẽ góc thật nhanh sau khi lên",
        "prompt": "Bé Gấu vừa lên xe buýt cùng gia đình, xe bỗng rẽ góc thật nhanh. Bé Gấu làm gì để an toàn?",
        "safeText": "Ngồi yên, nắm chắc tay vịn, không thò tay/đầu ra ngoài và nghe người lớn hướng dẫn.",
        "safeFeedback": "Tốt lắm! Bé Gấu ngồi yên, nắm chắc và giữ tay chân trong xe buýt.",
        "unsafeChoices": [
          {
            "text": "Đứng dậy để xem xe đang rẽ về đâu.",
            "feedback": "Bé Gấu ngồi yên và làm theo hướng dẫn của người lớn; không đứng lên."
          },
          {
            "text": "Thò tay ra ngoài cửa sổ để cảm nhận không khí.",
            "feedback": "Bé Gấu không đưa tay ra ngoài; giữ tay chân bên trong xe."
          }
        ]
      },
      {
        "id": "dao-pho-g3-l4-s3",
        "hazard": "người lớn trên xe buýt mời Bé Gấu ngồi ghế phụ",
        "prompt": "Trên xe buýt, một người lớn quen ở ghế trước mời Bé Gấu ngồi ghế phụ. Bé Gấu làm gì?",
        "safeText": "Ở cạnh người lớn trong gia đình, nhờ họ quyết định và không tự ngồi ghế phụ nếu chưa được cho phép.",
        "safeFeedback": "Đúng rồi! Bé Gấu ở cạnh người lớn trong gia đình và làm theo hướng dẫn của họ.",
        "unsafeChoices": [
          {
            "text": "Ngồi ghế phụ vì người lớn mời.",
            "feedback": "Bé Gấu hỏi người lớn trong gia đình trước khi ngồi ghế phụ."
          },
          {
            "text": "Từ chối và đứng lên khi xe đang di chuyển.",
            "feedback": "Bé Gấu ngồi yên cùng người lớn, không đứng lên khi xe đang chạy."
          }
        ]
      },
      {
        "id": "dao-pho-g3-l4-s4",
        "hazard": "xe buýt đang dừng nhưng khóa an toàn vẫn mở khi xe chưa dừng hẳn",
        "prompt": "Bé Gấu cùng gia đình đứng đợi xe buýt, khóa an toàn vẫn mở khi xe chưa dừng hẳn. Bé Gấu làm gì?",
        "safeText": "Chờ xe dừng hẳn, nhờ người lớn khóa an toàn và hướng dẫn lên xe đúng chỗ.",
        "safeFeedback": "Tốt! Bé Gấu đợi xe dừng và làm theo hướng dẫn của người lớn khi lên xe.",
        "unsafeChoices": [
          {
            "text": "Tìm cách lên xe buýt ngay khi thấy khóa mở.",
            "feedback": "Bé Gấu không lên khi xe chưa dừng; đợi người lớn hướng dẫn."
          },
          {
            "text": "Đứng gần bánh xe để nhanh lên hơn.",
            "feedback": "Bé Gấu đứng xa bánh xe và đợi người lớn chỉ cách lên xe an toàn."
          }
        ]
      },
      {
        "id": "dao-pho-g3-l4-s5",
        "hazard": "xe buýt sắp tới điểm dừng, bạn cùng gia đình muốn nhảy xuống trước",
        "prompt": "Trên xe buýt, bạn cùng gia đình muốn nhảy xuống trước khi xe dừng hoàn toàn để nhanh đến cổng trường. Bé Gấu làm gì?",
        "safeText": "Nhắc bạn ở yên cho đến khi xe dừng hẳn, làm theo hướng dẫn của người lớn và xuống trật tự.",
        "safeFeedback": "Chính xác! Bé Gấu nhắc bạn đợi xe dừng và làm theo hướng dẫn của người lớn.",
        "unsafeChoices": [
          {
            "text": "Nhảy xuống cùng bạn trước khi xe dừng.",
            "feedback": "Bé Gấu không nhảy xuống trước; đợi xe dừng và làm theo người lớn."
          },
          {
            "text": "Cất tiếng gọi để người lái xe dừng sớm.",
            "feedback": "Bé Gấu nhắc bạn quan trọng: đợi xe dừng hẳn và làm theo hướng dẫn."
          }
        ]
      }
    ]
  },
  {
    "id": "dao-pho-g3-l5",
    "moduleId": "dao-pho",
    "gradeBand": "3",
    "title": "Làm quen với xe đạp",
    "objective": "Nhận ra các bộ phận cơ bản và kiểm tra xe với người lớn trước khi đi.",
    "teacherPrompt": "Ngoài phanh, người lớn có thể cùng em kiểm tra bộ phận nào?",
    "situations": [
      {
        "id": "dao-pho-g3-l5-s1",
        "hazard": "chưa biết kiểm tra xe đạp với người lớn",
        "prompt": "Trước khi đạp xe ở nơi được người lớn cho phép, phanh có vẻ lỏng. Bé Gấu làm gì?",
        "safeText": "Báo người lớn, chưa đi cho đến khi xe được kiểm tra/sửa an toàn.",
        "safeFeedback": "Chính xác! Xe cần được người lớn kiểm tra trước khi sử dụng.",
        "unsafeChoices": [
          {
            "text": "Vẫn đi thật chậm để thử.",
            "feedback": "Không thử xe có phanh bất thường; nhờ người lớn xem giúp."
          },
          {
            "text": "Nhờ bạn nhỏ kéo phanh hộ.",
            "feedback": "Việc kiểm tra/sửa xe cần người lớn hỗ trợ."
          }
        ]
      },
      {
        "id": "dao-pho-g3-l5-s2",
        "hazard": "lốp xe bị xẻ thủng nhỏ",
        "prompt": "Trước khi đạp xe cùng người lớn, Bé Gấu thấy lốp xe bị xẻ thủng nhỏ. Bé Gấu làm gì?",
        "safeText": "Báo ngay cho người lớn, không đạp cho đến khi người lớn kiểm tra và sửa chữa hoặc thay lốp.",
        "safeFeedback": "Đúng rồi! Bé Gấu báo người lớn và đợi họ kiểm tra xe trước khi đạp.",
        "unsafeChoices": [
          {
            "text": "Vẫn đạp chậm vì chỉ là nhỏ thôi.",
            "feedback": "Bé Gấu không đạp với lốp xẻ; nhờ người lớn kiểm tra và sửa."
          },
          {
            "text": "Nhờ bạn cùng lứa giúp sửa thủng nhỏ.",
            "feedback": "Việc kiểm tra/sửa xe đạp cần người lớn; Bé Gấu đợi họ hỗ trợ."
          }
        ]
      },
      {
        "id": "dao-pho-g3-l5-s3",
        "hazard": "dây xe bị lỏng, khả năng đứt",
        "prompt": "Bé Gấu kiểm tra xe với người lớn, thấy dây xe bị lỏng và có thể đứt khi đạp mạnh. Bé Gấu làm gì?",
        "safeText": "Báo người lớn, đợi họ chỉnh lại hoặc thay dây mới trước khi đạp xe.",
        "safeFeedback": "Tốt lắm! Bé Gấu báo người lớn và đợi họ kiểm tra/sửa dây trước khi đạp.",
        "unsafeChoices": [
          {
            "text": "Đạp nhẹ nhàng để tránh dây đứt.",
            "feedback": "Bé Gấu không đạp khi dây lỏng; nhờ người lớn xử lý."
          },
          {
            "text": "Tự cố chặt dây bằng tay.",
            "feedback": "Việc chỉnh dây cần người lớn; Bé Gấu báo và đợi hỗ trợ."
          }
        ]
      },
      {
        "id": "dao-pho-g3-l5-s4",
        "hazard": "xe có tiếng kêu lạ khi lái",
        "prompt": "Bé Gấu chuẩn bị đạp xe ở nơi được người lớn cho phép, nhưng nghe tiếng kêu lạ khi lái xe. Bé Gấu làm gì?",
        "safeText": "Dừng lại, báo người lớn nghe tiếng kêu, đợi họ kiểm tra nguồn gốc âm thanh trước khi tiếp tục.",
        "safeFeedback": "Đúng! Bé Gấu dừng lại, báo người lớn và đợi họ kiểm tra xe.",
        "unsafeChoices": [
          {
            "text": "Vẫn đạp vì tiếng kêu không sao.",
            "feedback": "Bé Gấu không bỏ qua tiếng lạ; báo người lớn kiểm tra."
          },
          {
            "text": "Nhờ người bạn lớn hơn kiểm tra hộ.",
            "feedback": "Bé Gấu cần người lớn kiểm tra; nhờ họ nghe tiếng kêu và xử lý."
          }
        ]
      },
      {
        "id": "dao-pho-g3-l5-s5",
        "hazard": "ghế xe bị thấp quá, không vừa người",
        "prompt": "Bé Gấu ngồi lên xe đạp cùng người lớn, thấy ghế quá thấp khiến khó đạp. Bé Gấu làm gì?",
        "safeText": "Báo người lớn, nhờ họ chỉnh độ cao của ghế cho vừa trước khi đạp.",
        "safeFeedback": "Tốt! Bé Gấu báo người lớn và nhờ họ chỉnh ghế cho vừa trước khi đạp.",
        "unsafeChoices": [
          {
            "text": "Vẫn đạp mà không chỉnh, vì không khó lắm.",
            "feedback": "Bé Gấu không đạp khi ghế không vừa; nhờ người lớn chỉnh."
          },
          {
            "text": "Tự chỉnh ghế bằng tay mà không hỏi.",
            "feedback": "Việc chỉnh ghế cần người lớn; Bé Gấu báo và đợi hỗ trợ."
          }
        ]
      }
    ]
  },
  {
    "id": "dao-pho-g4-l1",
    "moduleId": "dao-pho",
    "gradeBand": "4",
    "title": "Điều khiển xe đạp an toàn",
    "objective": "Dừng và nhờ người lớn kiểm tra khi xe/phanh không bảo đảm; chỉ luyện ở nơi được phép.",
    "teacherPrompt": "Ở nơi an toàn, ai giúp em kiểm tra xe trước khi luyện?",
    "situations": [
      {
        "id": "dao-pho-g4-l1-s1",
        "hazard": "phanh xe đạp không hoạt động tốt",
        "prompt": "Bé Gấu chuẩn bị đi xe nhưng phanh không ăn. Cách an toàn nhất là gì?",
        "safeText": "Dừng lại, báo người lớn và chỉ đi khi xe được kiểm tra an toàn.",
        "safeFeedback": "Đúng rồi! Không sử dụng xe có bộ phận an toàn bất thường.",
        "unsafeChoices": [
          {
            "text": "Đi nhanh để khỏi phải phanh.",
            "feedback": "Tốc độ không sửa được phanh; Bé Gấu cần dừng và báo Mẹ Gấu."
          },
          {
            "text": "Thử phanh trên đường có xe.",
            "feedback": "Chỉ kiểm tra ở nơi an toàn với người lớn hỗ trợ."
          }
        ]
      },
      {
        "id": "dao-pho-g4-l1-s2",
        "hazard": "lốp xe quá cũ, bánh xe trơn",
        "prompt": "Bé Gấu định đi xe nhưng thấy hai lốp xe có vẻ cũ và trơn. Bé Gấu làm gì?",
        "safeText": "Nhờ người lớn kiểm tra kỹ lốp, thay mới nếu cần trước khi đi.",
        "safeFeedback": "Tốt! Bé Gấu nhờ người lớn kiểm tra và thay thế nếu cần.",
        "unsafeChoices": [
          {
            "text": "Vẫn đi vì xe vẫn có thể chạy được.",
            "feedback": "Bé Gấu không đi với lốp cũ; nhờ người lớn thay mới."
          },
          {
            "text": "Đi chậm để giảm rủi ro.",
            "feedback": "Bé Gấu không đi với lốp trơn; hãy đợi người lớn kiểm tra."
          }
        ]
      },
      {
        "id": "dao-pho-g4-l1-s3",
        "hazard": "ghế ngồi cao quá, Bé Gấu chưa đến mức tựa bình thoải",
        "prompt": "Bé Gấu ngồi xe đạp, chân chạm đất nhưng ghế hơi cao, Bé Gấu không thể tựa đều. Bé Gấu làm gì?",
        "safeText": "Nhờ người lớn điều chỉnh chiều cao ghế cho vừa, đến khi ngả người thoải mái.",
        "safeFeedback": "Đúng! Bé Gấu nhờ người lớn chỉnh ghế cho vừa vặn trước khi lái.",
        "unsafeChoices": [
          {
            "text": "Vẫn ngồi và cố gắng điều chỉnh khi đang chạy.",
            "feedback": "Bé Gấu không tự chỉnh khi đang đi; nhờ người lớn chỉnh trước."
          },
          {
            "text": "Thả chân xuống đất mỗi lần dừng.",
            "feedback": "Ghế cao khiến khó điều khiển; nhờ người lớn thay đổi trước."
          }
        ]
      },
      {
        "id": "dao-pho-g4-l1-s4",
        "hazard": "xe đạp có tiếng kêu lạ khi lái",
        "prompt": "Khi Bé Gấu đạp xe, xe phát ra tiếng kêu lạ từ khâu xích. Bé Gấu làm gì?",
        "safeText": "Dừng xe, báo người lớn và đợi họ kiểm tra khâu xích trước khi tiếp tục.",
        "safeFeedback": "Tốt! Bé Gấu dừng lại và nhờ người lớn xem xét tiếng kêu lạ.",
        "unsafeChoices": [
          {
            "text": "Vẫn đi và thử nghe xem có sao không.",
            "feedback": "Bé Gấu không tự thử; nhờ người lớn kiểm tra ngay."
          },
          {
            "text": "Tăng tốc để tiếng kêu nhanh mất.",
            "feedback": "Bé Gấu không tăng tốc với khâu có vấn đề; hãy dừng lại."
          }
        ]
      },
      {
        "id": "dao-pho-g4-l1-s5",
        "hazard": "không có nơi được phép luyện xe ở gần nhà",
        "prompt": "Bé Gấu muốn luyện xe đạp nhưng quanh nhà không có nơi dành cho xe đạp. Bé Gấu làm gì?",
        "safeText": "Nhờ người lớn chọn nơi được phép và an toàn để luyện tập theo sự giám sát.",
        "safeFeedback": "Đúng! Bé Gấu không tự lựa chọn nơi không rõ; nhờ người lớn chỉ đường an toàn.",
        "unsafeChoices": [
          {
            "text": "Luyện ở cuối ngõ không có biển báo.",
            "feedback": "Bé Gấu không tự chọn nơi không rõ; hỏi người lớn chọn chỗ."
          },
          {
            "text": "Vào làng hay đường phố không có người lớn.",
            "feedback": "Bé Gấu không đi một mình vào nơi không biết; nhờ người lớn."
          }
        ]
      }
    ]
  },
  {
    "id": "dao-pho-g4-l2",
    "moduleId": "dao-pho",
    "gradeBand": "4",
    "title": "Hiệu lệnh của người điều khiển giao thông",
    "objective": "Nhận biết hiệu lệnh người điều khiển giao thông và chờ người lớn khi hiệu lệnh khác đèn.",
    "teacherPrompt": "Nếu em chưa hiểu hiệu lệnh, em có thể nhờ ai giải thích?",
    "situations": [
      {
        "id": "dao-pho-g4-l2-s1",
        "hazard": "đèn xanh nhưng người điều khiển ra hiệu dừng",
        "prompt": "Đèn đang xanh nhưng người điều khiển giao thông ra hiệu dừng. Bé Gấu đi cùng Mẹ Gấu làm gì?",
        "safeText": "Dừng ở nơi an toàn và làm theo hiệu lệnh của người điều khiển.",
        "safeFeedback": "Chính xác! Khi hiệu lệnh khác đèn/biển, cần tuân theo người điều khiển.",
        "unsafeChoices": [
          {
            "text": "Chỉ nhìn đèn xanh rồi đi.",
            "feedback": "Bé Gấu dừng lại và nghe người điều khiển cùng Mẹ Gấu."
          },
          {
            "text": "Chạy theo nhóm đang đi.",
            "feedback": "Không đi theo đám đông; chờ Mẹ Gấu và làm theo hiệu lệnh."
          }
        ]
      },
      {
        "id": "dao-pho-g4-l2-s2",
        "hazard": "người điều khiển chỉ tay và ra hiệu khác đèn",
        "prompt": "Đèn đang xanh nhưng người điều khiển giao thông cầm tay chỉ tay và tạo hiệu lệnh khác. Bé Gấu đi cùng người lớn làm gì?",
        "safeText": "Dừng lại ở nơi an toàn, làm theo hiệu lệnh của người điều khiển, không đi tiếp.",
        "safeFeedback": "Chính xác! Bé Gấu dừng lại và làm theo người điều khiển, không chỉ nhìn đèn.",
        "unsafeChoices": [
          {
            "text": "Vẫn đi vì đèn đã cho phép.",
            "feedback": "Bé Gấu không đi khi có hiệu lệnh khác; đứng chờ cùng người lớn."
          },
          {
            "text": "Nhìn đèn xanh rồi đi nhanh.",
            "feedback": "Bé Gấu dừng lại và nghe người điều khiển; đèn không phải là tất cả."
          }
        ]
      },
      {
        "id": "dao-pho-g4-l2-s3",
        "hazard": "người điều khiển đang hướng dẫn một nhóm người",
        "prompt": "Người điều khiển giao thông đang hướng dẫn cho một nhóm người đi bộ. Bé Gấu với mẹ chưa biết họ đang làm gì. Bé Gấu làm gì?",
        "safeText": "Ở nơi an toàn, nhờ người lớn quan sát và làm theo hướng dẫn của người điều khiển.",
        "safeFeedback": "Tốt! Bé Gấu ở cùng người lớn và đợi hiệu lệnh rõ ràng.",
        "unsafeChoices": [
          {
            "text": "Đi qua ngay khi chưa có chỉ thị rõ ràng.",
            "feedback": "Bé Gấu không đi một mình; chờ người lớn hướng dẫn."
          },
          {
            "text": "Tự chụp ảnh với người điều khiển.",
            "feedback": "Bé Gấu không chủ ý làm phiền; ở cạnh người lớn và làm theo hướng dẫn."
          }
        ]
      },
      {
        "id": "dao-pho-g4-l2-s4",
        "hazard": "người điều khiển làm hiệu lệnh ngược với biển báo",
        "prompt": "Biển báo cho phép rẽ, nhưng người điều khiển giao thông lại ra hiệu dừng. Bé Gấu cùng người lớn làm gì?",
        "safeText": "Dừng lại, làm theo hiệu lệnh của người điều khiển và nhờ người lớn giải thích khi có cơ hội.",
        "safeFeedback": "Đúng! Bé Gấu tin và làm theo người điều khiển, không chỉ dựa vào biển báo.",
        "unsafeChoices": [
          {
            "text": "Chỉ nghe biển báo rồi rẽ.",
            "feedback": "Bé Gấu không rẽ theo biển khi có hiệu lệnh khác; dừng lại."
          },
          {
            "text": "Rẽ luôn vì biển cho phép, không cần dừng.",
            "feedback": "Bé Gấu dừng theo hiệu lệnh người điều khiển trước."
          }
        ]
      },
      {
        "id": "dao-pho-g4-l2-s5",
        "hazard": "bạn hiểu lầm hiệu lệnh khi đèn xanh",
        "prompt": "Bé Gấu thấy một bạn nhỏ tin rằng chỉ cần đèn xanh là được đi, dù người điều khiển đang ngừng. Bé Gấu làm gì?",
        "safeText": "Nhắc bạn ấy đến người lớn và chỉ đi khi người lớn và hiệu lệnh cho phép.",
        "safeFeedback": "Giỏi! Bé Gấu nhắc bạn và ở cạnh người lớn, không đi khi chưa được phép.",
        "unsafeChoices": [
          {
            "text": "Kêu bạn đi nhanh vì sợ bị kẹt.",
            "feedback": "Bé Gấu không ép bạn đi; nhờ người lớn hướng dẫn."
          },
          {
            "text": "Đi theo bạn mà không hỏi.",
            "feedback": "Bé Gấu ở với người lớn và không đi theo bạn khi chưa rõ."
          }
        ]
      }
    ]
  },
  {
    "id": "dao-pho-g4-l3",
    "moduleId": "dao-pho",
    "gradeBand": "4",
    "title": "Hậu quả của tai nạn giao thông",
    "objective": "Hiểu tai nạn có thể gây thương tích và ảnh hưởng gia đình/cộng đồng; chọn cách phòng tránh không hù dọa.",
    "teacherPrompt": "Một việc an toàn nhỏ nào giúp bảo vệ em và những người xung quanh?",
    "situations": [
      {
        "id": "dao-pho-g4-l3-s1",
        "hazard": "bạn nói tai nạn chỉ làm mọi người đến muộn",
        "prompt": "Bạn nói tai nạn giao thông “chỉ làm mọi người đến muộn”. Bé Gấu nên nhớ điều gì?",
        "safeText": "Tai nạn có thể làm người bị thương và ảnh hưởng nhiều người; tuân thủ an toàn giúp phòng tránh.",
        "safeFeedback": "Đúng rồi. Ta nói về hậu quả bằng sự tôn trọng và tập trung vào cách phòng tránh.",
        "unsafeChoices": [
          {
            "text": "Tai nạn không ảnh hưởng ai nếu xe nhỏ.",
            "feedback": "Mọi người đều cần được bảo vệ; không nên xem nhẹ nguy cơ."
          },
          {
            "text": "Kể lại hình ảnh đáng sợ để làm bạn sợ.",
            "feedback": "Mình không dùng hình ảnh gây sợ; hãy nói cách giữ an toàn."
          }
        ]
      },
      {
        "id": "dao-pho-g4-l3-s2",
        "hazard": "bạn quên cài dây an toàn trên xe",
        "prompt": "Trên xe cùng người lớn, bạn muốn không cài dây an toàn vì đi gần. Bé Gấu làm gì?",
        "safeText": "Nhắc bạn cài dây cùng người lớn và chỉ đi khi đã được kiểm tra an toàn.",
        "safeFeedback": "Đúng! Bé Gấu nhắc bạn và làm theo người lớn về dây an toàn.",
        "unsafeChoices": [
          {
            "text": "Cười và cũng không cài dây.",
            "feedback": "Bé Gấu không bắt chước; hãy nhắc bạn và nhờ người lớn."
          },
          {
            "text": "Kể chuyện đáng sợ về tai nạn.",
            "feedback": "Không dùng hình ảnh gây sợ; hãy nói cách giữ an toàn."
          }
        ]
      },
      {
        "id": "dao-pho-g4-l3-s3",
        "hazard": "tai nạn làm giao thông xung quanh bị tắc nghẽn",
        "prompt": "Một tai nạn nhỏ đã khiến giao thông xung quanh bị tắc và người lớn vội vã. Bé Gấu suy nghĩ thế nào?",
        "safeText": "Tai nạn gây ảnh hưởng cả cộng đồng, nên tuân thủ quy tắc giúp phòng tránh từ trước.",
        "safeFeedback": "Đúng! Bé Gấu hiểu tai nạn không chỉ ảnh hưởng cá nhân, mà cả mọi người xung quanh.",
        "unsafeChoices": [
          {
            "text": "Tắc đường là chuyện bình thường, chẳng sao.",
            "feedback": "Bé Gấu không coi thường; hãy nhớ tuân thủ để giảm tai nạn."
          },
          {
            "text": "Kể chuyện tai nạn cho bạn nghe để vui.",
            "feedback": "Bé Gấu không kể để tạo sự sợ; hãy chỉ chú ý cách phòng tránh."
          }
        ]
      },
      {
        "id": "dao-pho-g4-l3-s4",
        "hazard": "bạn nghĩ chỉ cần chú ý là không cần tuân thủ",
        "prompt": "Bạn nói: \"Chỉ cần nhìn kỹ là được, không cần nghe người điều khiển.\" Bé Gấu trả lời sao?",
        "safeText": "Phải cả nhìn kỹ và làm theo người điều khiển, vì tai nạn vẫn có thể xảy ra nếu chỉ tự ý quyết định.",
        "safeFeedback": "Chính xác! Bé Gấu nhắc bạn tuân thủ đầy đủ, không chỉ dựa vào bản thân.",
        "unsafeChoices": [
          {
            "text": "Đồng ý vì nhìn kỹ đã đủ rồi.",
            "feedback": "Bé Gấu không đồng ý; phải cả làm theo người lớn hướng dẫn."
          },
          {
            "text": "Khiến bạn lo sợ để việc nghe lời.",
            "feedback": "Bé Gấu không dùng lời sợ; hãy giải thích cách an toàn thật dễ hiểu."
          }
        ]
      },
      {
        "id": "dao-pho-g4-l3-s5",
        "hazard": "người lớn bị tai nạn vì không giữ khoảng cách",
        "prompt": "Bé Gấu nghe người lớn trong gia đình kể về việc họ gần như bị tai nạn vì không giữ khoảng cách. Bé Gấu nên làm gì?",
        "safeText": "Lắng nghe và nhớ tuân thủ các quy tắc an toàn, đặc biệt là giữ khoảng cách và chú ý người khác.",
        "safeFeedback": "Tốt lắm! Bé Gấu học từ kinh nghiệm và giữ cả mình lẫn người khác an toàn.",
        "unsafeChoices": [
          {
            "text": "Thấy việc đó chỉ là trùng hợp, không quan tâm.",
            "feedback": "Bé Gấu không coi thường; hãy nhớ tôn trọng quy tắc."
          },
          {
            "text": "Tự cho rằng mình sẽ không bao giờ gặp.",
            "feedback": "Bé Gấu ghi nhớ và luôn cẩn thận, không tự cho là an toàn hoàn toàn."
          }
        ]
      }
    ]
  },
  {
    "id": "dao-pho-g4-l4",
    "moduleId": "dao-pho",
    "gradeBand": "4",
    "title": "Dự đoán để phòng tránh tai nạn giao thông đường bộ",
    "objective": "Nhận ra tầm nhìn bị che khuất và dừng ở nơi an toàn, nhờ người lớn chọn cách xử lý.",
    "teacherPrompt": "Những vật nào quanh trường có thể che khuất tầm nhìn?",
    "situations": [
      {
        "id": "dao-pho-g4-l4-s1",
        "hazard": "tầm nhìn bị che khuất ở lối qua đường",
        "prompt": "Xe tải đang che khuất góc nhìn ở lối qua đường. Bé Gấu đi cùng Mẹ Gấu nên làm gì?",
        "safeText": "Dừng ở vị trí an toàn, báo Mẹ Gấu và chờ Mẹ Gấu chọn nơi quan sát rõ hơn.",
        "safeFeedback": "Tốt lắm! Không bước ra từ sau vật cản; người lớn giúp chọn cách an toàn.",
        "unsafeChoices": [
          {
            "text": "Thò người ra khỏi xe tải để nhìn.",
            "feedback": "Mình không tiến sát xe; đứng cạnh Mẹ Gấu ở nơi nhìn thấy được."
          },
          {
            "text": "Chạy qua thật nhanh khi không nhìn rõ.",
            "feedback": "Khi tầm nhìn bị che, hãy dừng và hỏi người lớn."
          }
        ]
      },
      {
        "id": "dao-pho-g4-l4-s2",
        "hazard": "xe tải đỗ che khuất góc nhìn",
        "prompt": "Xe tải đang đỗ che khuất tầm nhìn nơi lối qua đường. Bé Gấu đi cùng người lớn nên làm gì?",
        "safeText": "Dừng ở vị trí an toàn, báo người lớn và chờ Mẹ Gấu chọn nơi có thể quan sát rõ hơn.",
        "safeFeedback": "Tốt lắm! Bé Gấu không bước ra từ sau xe tải; người lớn giúp chọn nơi an toàn.",
        "unsafeChoices": [
          {
            "text": "Thò người ra phía trước xe tải để nhìn.",
            "feedback": "Bé Gấu không tiến ra sát xe; đứng cạnh người lớn ở nơi nhìn thấy được."
          },
          {
            "text": "Chạy qua nhanh khi không rõ xe có ở không.",
            "feedback": "Khi tầm nhìn bị che, hãy dừng và hỏi người lớn."
          }
        ]
      },
      {
        "id": "dao-pho-g4-l4-s3",
        "hazard": "cây xanh dài che khuất đường giao nhau",
        "prompt": "Bé Gấu và người lớn đến góc đường mà cây xanh che khuất tầm nhìn. Bé Gấu làm gì?",
        "safeText": "Dừng lại, nhờ người lớn chọn góc quan sát rõ hơn và đi cùng họ khi họ bảo an toàn.",
        "safeFeedback": "Đúng rồi! Bé Gấu nhờ người lớn chỉ chỗ nhìn rõ trước khi đi.",
        "unsafeChoices": [
          {
            "text": "Đi ngay vì chỉ có xe cộ ít.",
            "feedback": "Bé Gấu không đi khi tầm nhìn bị che; chờ người lớn xác nhận."
          },
          {
            "text": "Những cây để tạo khoảng trống.",
            "feedback": "Bé Gấu không tự ý xử lý vật cản; nhờ người lớn giúp."
          }
        ]
      },
      {
        "id": "dao-pho-g4-l4-s4",
        "hazard": "tường nhà che khuất khi rẽ góc",
        "prompt": "Bé Gấu đi đến góc nơi tường nhà che mất tầm nhìn vào ngõ. Bé Gấu làm gì cùng người lớn?",
        "safeText": "Dừng tại chỗ an toàn, nhờ người lớn quan sát từ góc tốt hơn và chỉ điểm đi tiếp.",
        "safeFeedback": "Tốt! Bé Gấu không tự ý qua; nhờ người lớn tìm chỗ nhìn rõ.",
        "unsafeChoices": [
          {
            "text": "Đi chậm qua góc vì tin không có xe.",
            "feedback": "Bé Gấu không tự đoán; đứng cạnh người lớn và chờ hướng dẫn."
          },
          {
            "text": "Tựa vào tường để nghe có xe không.",
            "feedback": "Bé Gấu không dựa vào ngõ; nhờ người lớn chọn nơi rõ hơn."
          }
        ]
      },
      {
        "id": "dao-pho-g4-l4-s5",
        "hazard": "xe máy đang đỗ che khuất đường ở gần trường",
        "prompt": "Bé Gấu đến một nơi có xe máy đỗ che khuất đường giao nhau gần trường. Bé Gấu làm gì?",
        "safeText": "Dừng ở nơi an toàn, nhờ người lớn dẫn đến góc nhìn rõ hơn và đi cùng họ.",
        "safeFeedback": "Đúng! Bé Gấu không tự đi ra từ khuất; nhờ người lớn giúp.",
        "unsafeChoices": [
          {
            "text": "Nhảy nhón từ sau xe đến khi hết ngõ.",
            "feedback": "Bé Gấu không tự ra từ sau xe; đứng cạnh người lớn."
          },
          {
            "text": "Kêu bạn cùng đi qua nhanh.",
            "feedback": "Bé Gấu không tập trung vào tốc độ; nhờ người lớn xử lý."
          }
        ]
      }
    ]
  },
  {
    "id": "dao-pho-g4-l5",
    "moduleId": "dao-pho",
    "gradeBand": "4",
    "title": "An toàn giao thông đường thủy",
    "objective": "Mặc áo phao đúng cách, lên phương tiện có người lớn và làm theo người vận hành.",
    "teacherPrompt": "Ai sẽ kiểm tra áo phao và hướng dẫn em khi đi thuyền?",
    "situations": [
      {
        "id": "dao-pho-g4-l5-s1",
        "hazard": "sắp đi thuyền cùng gia đình",
        "prompt": "Bé Gấu sắp đi thuyền cùng gia đình. Trước khi thuyền rời bến, Bé Gấu làm gì?",
        "safeText": "Mặc áo phao vừa người, ngồi yên và nghe người lớn/người vận hành.",
        "safeFeedback": "Đúng rồi! Bé Gấu mặc áo phao và làm theo hướng dẫn.",
        "unsafeChoices": [
          {
            "text": "Bỏ áo phao vì Bé Gấu biết bơi.",
            "feedback": "Biết bơi không thay cho áo phao; Bé Gấu mặc áo và nghe người lớn."
          },
          {
            "text": "Đứng lên đổi chỗ khi thuyền chạy.",
            "feedback": "Bé Gấu ngồi đúng vị trí, không đùa nghịch trên thuyền."
          }
        ]
      },
      {
        "id": "dao-pho-g4-l5-s2",
        "hazard": "áo phao chưa được cài đúng cách",
        "prompt": "Trước khi lên thuyền, Bé Gấu mặc áo phao nhưng chưa cài chin đúng cách. Bé Gấu làm gì?",
        "safeText": "Nhờ người lớn kiểm tra và cài chin áo phao cho chặt trước khi lên thuyền.",
        "safeFeedback": "Đúng rồi! Bé Gấu nhờ người lớn giúp cài đúng cách để phòng tránh nguy hiểm.",
        "unsafeChoices": [
          {
            "text": "Tự cài chin mà không cần người lớn.",
            "feedback": "Bé Gấu không tự làm; nhờ người lớn kiểm tra và cài."
          },
          {
            "text": "Mặc áo phao và đi ngay vì sẵn sàng.",
            "feedback": "Bé Gấu đợi người lớn kiểm tra chin trước khi lên thuyền."
          }
        ]
      },
      {
        "id": "dao-pho-g4-l5-s3",
        "hazard": "không có người lớn giám sát khi lên thuyền",
        "prompt": "Bé Gấu muốn lên thuyền nhưng người lớn chưa ở bên cạnh. Bé Gấu làm gì?",
        "safeText": "Chờ người lớn đến và làm theo hướng dẫn của họ trước khi lên thuyền.",
        "safeFeedback": "Tốt lắm! Bé Gấu không tự lên khi chưa có người lớn; hãy đợi họ.",
        "unsafeChoices": [
          {
            "text": "Tự lên thuyền một mình vì không muốn chậm.",
            "feedback": "Bé Gấu không đi một mình; hãy đợi người lớn đến."
          },
          {
            "text": "Ngồi trên bè ngoài bến một mình.",
            "feedback": "Bé Gấu không tự tách khỏi người lớn; hãy ở bên họ."
          }
        ]
      },
      {
        "id": "dao-pho-g4-l5-s4",
        "hazard": "thuyền đã rời bến, Bé Gấu đứng dậy đi lại",
        "prompt": "Khi thuyền đang chạy, Bé Gấu muốn đứng dậy tìm chỗ ngồi khác. Bé Gấu làm gì?",
        "safeText": "Ở yên nơi ngồi, không đứng dậy khi thuyền đang di chuyển và nghe người vận hành.",
        "safeFeedback": "Đúng rồi! Bé Gấu ngồi yên và làm theo hướng dẫn của người vận hành.",
        "unsafeChoices": [
          {
            "text": "Đứng lên vì muốn nhìn cảnh đẹp hơn.",
            "feedback": "Bé Gấu không đứng lên khi thuyền chạy; hãy ngồi yên."
          },
          {
            "text": "Chạy quanh thuyền để thỏa thích.",
            "feedback": "Bé Gấu không chạy trên thuyền; hãy ngồi đúng chỗ."
          }
        ]
      },
      {
        "id": "dao-pho-g4-l5-s5",
        "hazard": "bạn muốn đứng dậy và chơi đùa trên thuyền",
        "prompt": "Bạn trên thuyền muốn đứng dậy và chơi đùa khi thuyền vẫn đang chạy. Bé Gấu làm gì?",
        "safeText": "Nhắc bạn ngồi yên, ở cùng người lớn và làm theo hướng dẫn của người vận hành.",
        "safeFeedback": "Giỏi! Bé Gấu nhắc bạn và giữ yên cho đến khi thuyền dừng.",
        "unsafeChoices": [
          {
            "text": "Cùng đứng dậy vì thấy vui.",
            "feedback": "Bé Gấu không làm theo; hãy nhắc bạn ngồi yên và nghe người lớn."
          },
          {
            "text": "Kêu bạn đứng lên cùng mình.",
            "feedback": "Bé Gấu không mời; hãy nhớ an toàn và ngồi yên."
          }
        ]
      }
    ]
  },
  {
    "id": "dao-pho-g5-l1",
    "moduleId": "dao-pho",
    "gradeBand": "5",
    "title": "Điều khiển xe đạp chuyển hướng an toàn",
    "objective": "Tập nhận biết chuyển hướng cần chậm lại, quan sát và báo hiệu trong bài tập có người lớn giám sát.",
    "teacherPrompt": "Trong bài tập giả lập, bước nào cần làm trước khi chuyển hướng?",
    "situations": [
      {
        "id": "dao-pho-g5-l1-s1",
        "hazard": "Rẽ đột ngột không quan sát",
        "prompt": "Trong sa hình ở sân trường có người lớn hướng dẫn, Bé Gấu cần rẽ. Bé Gấu làm gì trước?",
        "safeText": "Giảm tốc/dừng theo bài tập, quan sát, ra hiệu theo hướng dẫn rồi chỉ rẽ khi an toàn.",
        "safeFeedback": "Đúng rồi! Bé Gấu luyện kỹ năng theo hướng dẫn, không rẽ bất ngờ.",
        "unsafeChoices": [
          {
            "text": "Rẽ ngay mà không quan sát.",
            "feedback": "Bé Gấu chỉ thực hiện bài tập khi đã quan sát và được hướng dẫn."
          },
          {
            "text": "Rẽ đột ngột để theo bạn.",
            "feedback": "Không rẽ theo bạn; làm đúng quy trình người lớn hướng dẫn."
          }
        ]
      },
      {
        "id": "dao-pho-g5-l1-s2",
        "hazard": "Rẽ khi có xe đang tới",
        "prompt": "Bé Gấu đang luyện xe đạp ở nơi người lớn cho phép. Đến đoạn đường có xe đang đi, Bé Gấu muốn rẽ trái. Bé Gấu làm gì trước khi rẽ?",
        "safeText": "Dừng cạnh lề, quan sát xe đang tới, chờ xe xa và nhờ người lớn xác nhận an toàn rồi ra hiệu tay và rẽ.",
        "safeFeedback": "Đúng rồi! Bé Gấu không rẽ giữa dòng xe; chờ khoảng trống an toàn và làm theo hướng dẫn người lớn.",
        "unsafeChoices": [
          {
            "text": "Rẽ ngay khi thấy có khoảng trống.",
            "feedback": "Bé Gấu cần chờ xe xa đủ và nhờ người lớn xác nhận an toàn."
          },
          {
            "text": "Qua ngang hai bánh xe đối diện.",
            "feedback": "Không qua ngang xe đang tới; đợi người lớn chỉ cách an toàn."
          }
        ]
      },
      {
        "id": "dao-pho-g5-l1-s3",
        "hazard": "Chọn lối rẽ không rõ ràng",
        "prompt": "Trong bài tập, người lớn cho Bé Gấu chọn giữa hai lối: một lối có vạch kẻ đường rõ, một lối mờ và khó nhìn. Bé Gấu chọn lối nào an toàn hơn?",
        "safeText": "Chọn lối có vạch rõ ràng, quan sát kỹ và làm theo hướng dẫn của người lớn.",
        "safeFeedback": "Hay lắm! Bé Gấu chọn lối rõ ràng, dễ nhìn và làm theo hướng dẫn người lớn.",
        "unsafeChoices": [
          {
            "text": "Đi vào lối có vạch mờ, khó nhận.",
            "feedback": "Lối mờ dễ gây nhầm lẫn; chọn lối có vạch rõ ràng."
          },
          {
            "text": "Theo bạn đi trước khi người lớn chỉ.",
            "feedback": "Bé Gấu đi cùng người lớn và làm theo hướng dẫn, không đi trước."
          }
        ]
      },
      {
        "id": "dao-pho-g5-l1-s4",
        "hazard": "Quên mất bước báo hiệu",
        "prompt": "Bé Gấu vừa học xong bài tập rẽ xe. Để làm đúng, Bé Gấu cần nhớ những bước nào theo thứ tự?",
        "safeText": "Giảm tốc — quan sát — ra hiệu tay — rẽ khi an toàn. Thực hiện đúng thứ tự và làm chậm rãi.",
        "safeFeedback": "Giỏi lắm! Bé Gấu nhớ đủ bước và làm đúng thứ tự theo hướng dẫn người lớn.",
        "unsafeChoices": [
          {
            "text": "Chỉ nhớ bước cuối cùng là rẽ.",
            "feedback": "Cần đủ bước: giảm tốc, quan sát, báo hiệu rồi mới rẽ."
          },
          {
            "text": "Rẽ theo bạn mà không báo hiệu.",
            "feedback": "Bé Gấu cần ra hiệu và làm theo hướng dẫn, không rẽ theo bạn."
          }
        ]
      },
      {
        "id": "dao-pho-g5-l1-s5",
        "hazard": "Mất tập trung khi rẽ",
        "prompt": "Bé Gấu đang luyện rẽ và vừa bắt đầu nói chuyện với bạn bên cạnh. Bé Gấu nên làm gì?",
        "safeText": "Dừng lại cùng người lớn, tập trung thực hiện bài tập trước — trò chuyện khi đã hoàn thành và được người lớn cho phép.",
        "safeFeedback": "Tốt! Bé Gấu tập trung thực hiện trước, trò chuyện sau khi người lớn cho phép.",
        "unsafeChoices": [
          {
            "text": "Vừa rẽ vừa nói chuyện với bạn.",
            "feedback": "Bé Gấu tập trung bài tập trước; trò chuyện sau khi done."
          },
          {
            "text": "Rẽ theo bạn mà không nhìn quanh.",
            "feedback": "Không rẽ theo bạn; quan sát và làm theo hướng dẫn người lớn."
          }
        ]
      }
    ]
  },
  {
    "id": "dao-pho-g5-l2",
    "moduleId": "dao-pho",
    "gradeBand": "5",
    "title": "Phòng tránh tai nạn giao thông nơi tầm nhìn bị che khuất",
    "objective": "Dự đoán nguy cơ ở góc khuất, không đi ra từ sau xe/vật cản và chờ người lớn.",
    "teacherPrompt": "Em có thể nhận ra góc khuất nào trên đường đến trường?",
    "situations": [
      {
        "id": "dao-pho-g5-l2-s1",
        "hazard": "Bước ra từ sau xe đỗ",
        "prompt": "Một xe đỗ che khuất lối sang đường. Bé Gấu làm gì cùng người lớn?",
        "safeText": "Dừng ở chỗ an toàn, không bước ra từ sau xe; nhờ người lớn chọn lối nhìn rõ.",
        "safeFeedback": "Chính xác! Bé Gấu tránh vùng khuất tầm nhìn và nhờ người lớn.",
        "unsafeChoices": [
          {
            "text": "Đi ra trước đầu xe để nhìn.",
            "feedback": "Bé Gấu không tiến ra trước xe; đứng ở nơi an toàn cùng Mẹ Gấu."
          },
          {
            "text": "Chạy qua vì xe đang đỗ.",
            "feedback": "Xe đỗ vẫn có thể che khuất; hãy chờ người lớn."
          }
        ]
      },
      {
        "id": "dao-pho-g5-l2-s2",
        "hazard": "Vượt qua sau xe tải đỗ",
        "prompt": "Xe tải đỗ che khuất góc đường. Bé Gấu muốn sang đường cùng người lớn. Bé Gấu làm gì?",
        "safeText": "Dừng xa xe, không bước ra từ sau xe; nhờ người lớn chọn vị trí dừng an toàn để quan sát rõ hơn.",
        "safeFeedback": "Chính xác! Bé Gấu đứng chờ ở chỗ an toàn và nhờ người lớn giúp.",
        "unsafeChoices": [
          {
            "text": "Đứng ngay sau xe và nhảy ra.",
            "feedback": "Không đứng sau xe đỗ; tìm chỗ an toàn và nhờ người lớn."
          },
          {
            "text": "Qua từ cạnh sau xe khi thấy có chỗ.",
            "feedback": "Không qua từ sau xe đỗ; đợi người lớn chọn cách an toàn."
          }
        ]
      },
      {
        "id": "dao-pho-g5-l2-s3",
        "hazard": "Che khuất từ cây xanh",
        "prompt": "Ngõ nhỏ có cây xanh che khuất tầm nhìn khi sang đường. Bé Gấu bước đến đó với người lớn. Bé Gấu làm gì?",
        "safeText": "Đứng cạnh người lớn ở chỗ có thể nhìn rõ cả hai phía, chờ người lớn chỉ cách an toàn.",
        "safeFeedback": "Hay lắm! Bé Gấu đứng cạnh người lớn và quan sát theo hướng dẫn.",
        "unsafeChoices": [
          {
            "text": "Đứng ngay góc khuất, che khuất.",
            "feedback": "Không đứng ngay góc khuất; tìm chỗ nhìn rõ hai phía."
          },
          {
            "text": "Theo bạn đi trước khi người lớn nhắc.",
            "feedback": "Bé Gấu đi cùng người lớn và làm theo hướng dẫn."
          }
        ]
      },
      {
        "id": "dao-pho-g5-l2-s4",
        "hazard": "Che khuất từ công trình/bẫy",
        "prompt": "Bé Gấu đi cùng người lớn qua phố nhỏ, có một công trình nhỏ che khuất lối qua đường. Bé Gấu làm gì?",
        "safeText": "Dừng trước công trình, người lớn nhẹ nhàng chỉ lối an toàn và Bé Gấu làm theo hướng dẫn.",
        "safeFeedback": "Tốt! Bé Gấu không vượt qua khuất tầm nhìn; nhờ người lớn giúp chọn lối.",
        "unsafeChoices": [
          {
            "text": "Vượt qua từ phía che khuất.",
            "feedback": "Không đi khi tầm nhìn bị che; nhờ người lớn chọn lối khác."
          },
          {
            "text": "Đứng sau công trình để ngắm.",
            "feedback": "Bé Gấu đứng trước công trình, vừa mắt và làm theo người lớn."
          }
        ]
      },
      {
        "id": "dao-pho-g5-l2-s5",
        "hazard": "Xe đang lùi đỗ che khuất",
        "prompt": "Xe tải đang lùi ra khỏi bãi đỗ, che khuất góc nhìn của Bé Gấu. Bé Gấu ở cùng Mẹ Gấu. Bé Gấu làm gì?",
        "safeText": "Dừng lại chỗ an toàn, không tiến lại cạnh xe lùi; nhờ Mẹ Gấu tránh khu vực đó và dẫn đi nơi khác.",
        "safeFeedback": "Đúng rồi! Bé Gấu không đứng cạnh xe lùi; Mẹ Gấu sẽ dẫn đi nơi an toàn.",
        "unsafeChoices": [
          {
            "text": "Theo xe lùi để xem kỹ hơn.",
            "feedback": "Không theo xe lùi; giữ khoảng cách an toàn với người lớn."
          },
          {
            "text": "Đứng ngay sau xe khi nó đang lùi.",
            "feedback": "Bé Gấu không đứng sau xe lùi; người lớn sẽ dẫn điplace khác."
          }
        ]
      }
    ]
  },
  {
    "id": "dao-pho-g5-l3",
    "moduleId": "dao-pho",
    "gradeBand": "5",
    "title": "Tham gia giao thông đường hàng không an toàn",
    "objective": "Đi cùng người lớn, làm theo nhân viên và quy định an toàn trên máy bay.",
    "teacherPrompt": "Khi đi máy bay, em cần nghe hướng dẫn của những ai?",
    "situations": [
      {
        "id": "dao-pho-g5-l3-s1",
        "hazard": "Tự tách khỏi người lớn ở sân bay",
        "prompt": "Ở sân bay, Bé Gấu muốn chạy đi xem máy bay một mình. Bé Gấu nên làm gì?",
        "safeText": "Ở cạnh người lớn, đi theo hướng dẫn của nhân viên và ngồi cài dây an toàn khi được yêu cầu.",
        "safeFeedback": "Đúng rồi! Bé Gấu không tự tách khỏi người lớn và làm theo hướng dẫn.",
        "unsafeChoices": [
          {
            "text": "Tự đi qua cửa hạn chế để xem gần hơn.",
            "feedback": "Bé Gấu chỉ đi nơi được phép cùng người lớn."
          },
          {
            "text": "Đứng lên đi lại khi máy bay đang cất/hạ cánh.",
            "feedback": "Bé Gấu ngồi đúng chỗ, cài dây và nghe hướng dẫn của tiếp viên."
          }
        ]
      },
      {
        "id": "dao-pho-g5-l3-s2",
        "hazard": "Xem máy bay gần cửa cất hành",
        "prompt": "Bé Gấu đang ở sân bay cùng bố/mẹ. Bé Gấu muốn tự đi gần cửa cất hành để xem máy bay cất cánh. Bé Gấu làm gì?",
        "safeText": "Ở cạnh người lớn, hỏi xem có được đi gần hơn không và chỉ đi nơi được phép cùng người lớn.",
        "safeFeedback": "Hay lắm! Bé Gấu ở cạnh người lớn và hỏi trước khi đi gần hơn.",
        "unsafeChoices": [
          {
            "text": "Tự đi vào khu vực cất cánh.",
            "feedback": "Bé Gấu không tự đi vào khu vực hạn chế; hỏi người lớn trước."
          },
          {
            "text": "Len qua hàng rào một mình để xem máy bay.",
            "feedback": "Bé Gấu ở cạnh người lớn; không tự len qua hàng rào."
          }
        ]
      },
      {
        "id": "dao-pho-g5-l3-s3",
        "hazard": "Đứng dậy khi máy bay cất/hạ cánh",
        "prompt": "Máy bay đang cất cánh, Bé Gấu muốn đứng dậy đi lại trong máy bay. Bé Gấu làm gì?",
        "safeText": "Ngồi yên đúng chỗ, cài dây an toàn và làm theo hướng dẫn của tiếp viên.",
        "safeFeedback": "Đúng rồi! Bé Gấu ngồi cố định và làm theo hướng dẫn của tiếp viên.",
        "unsafeChoices": [
          {
            "text": "Đứng dậy đi lại trong lúc cất cánh.",
            "feedback": "Bé Gấu ngồi yên và cài dây cho đến khi tiếp viên cho phép."
          },
          {
            "text": "Bé Gấu đứng lên để xem cửa kính.",
            "feedback": "Bé Gấu ngồi đúng chỗ và nghe hướng dẫn của tiếp viên."
          }
        ]
      },
      {
        "id": "dao-pho-g5-l3-s4",
        "hazard": "Rời chỗ khi có âm thanh bất thường",
        "prompt": "Bé Gấu nghe thấy một âm thanh gì đó trong máy bay. Bé Gấu lo ngại và muốn đi tìm bố/mẹ ngay. Bé Gấu làm gì?",
        "safeText": "Ở yên chỗ, nhấc tay gọi bố/mẹ hoặc tiếp viên gần nhất; làm theo hướng dẫn của nhân viên.",
        "safeFeedback": "Tốt! Bé Gấu ở yên và báo người lớn/giúp đỡ đúng cách.",
        "unsafeChoices": [
          {
            "text": "Tự đi tìm người lớn khi máy bay đang di chuyển.",
            "feedback": "Bé Gấu ở yên chỗ và nhờ nhân viên/người lớn gần nhất giúp."
          },
          {
            "text": "Bé Gấu quay lại hàng ghế cạnh.",
            "feedback": "Bé Gấu ở yên và nhấc tay gọi người lớn hoặc tiếp viên gần nhất."
          }
        ]
      },
      {
        "id": "dao-pho-g5-l3-s5",
        "hazard": "Ra ngoài khi đáp xuống",
        "prompt": "Máy bay vừa hạ cánh, Bé Gấu muốn đi ra phía cửa sổ để xem đường băng. Bé Gấu làm gì?",
        "safeText": "Ngồi yên, cài dây an toàn và xem theo hướng dẫn của tiếp viên; không đứng dậy hay ra ngoài khi chưa được cho phép.",
        "safeFeedback": "Hay lắm! Bé Gấu ngồi yên và làm theo hướng dẫn của tiếp viên.",
        "unsafeChoices": [
          {
            "text": "Tự mở cửa và ra ngoài nhìn.",
            "feedback": "Bé Gấu không mở cửa hay ra ngoài; làm theo hướng dẫn của tiếp viên."
          },
          {
            "text": "Bé Gấu đứng dậy ngay khi máy bay hạ cánh.",
            "feedback": "Bé Gấu ngồi yên cho đến khi máy bay dừng và tiếp viên cho phép."
          }
        ]
      }
    ]
  },
  {
    "id": "dao-pho-g5-l4",
    "moduleId": "dao-pho",
    "gradeBand": "5",
    "title": "Ứng xử khi gặp sự cố giao thông",
    "objective": "Giữ khoảng cách với hiện trường, tìm người lớn và để người lớn gọi hỗ trợ; không tự tiếp cận.",
    "teacherPrompt": "Người lớn nào ở trường/gia đình em có thể tìm khi cần trợ giúp?",
    "situations": [
      {
        "id": "dao-pho-g5-l4-s1",
        "hazard": "Tiến gần hiện trường sự cố",
        "prompt": "Bé Gấu nhìn thấy một va chạm giao thông từ xa khi đang ở cùng cô giáo. Bé Gấu làm gì?",
        "safeText": "Ở cùng cô tại nơi an toàn, báo cô và để người lớn gọi trợ giúp.",
        "safeFeedback": "Tốt lắm! Bé Gấu không chạy vào nơi nguy hiểm; người lớn xử lý tiếp.",
        "unsafeChoices": [
          {
            "text": "Chạy ra giữa đường xem có ai bị thương.",
            "feedback": "Bé Gấu giữ khoảng cách và ở cạnh cô giáo."
          },
          {
            "text": "Tự quay/chia sẻ hình ảnh người gặp nạn.",
            "feedback": "Không quay/chia sẻ; báo người lớn để tôn trọng và giúp đúng cách."
          }
        ]
      },
      {
        "id": "dao-pho-g5-l4-s2",
        "hazard": "Xem va chạm từ xa",
        "prompt": "Bé Gấu đang đi cùng cô giáo và thấy một va chạm xe từ xa. Bé Gấu làm gì?",
        "safeText": "Ở cùng cô tại chỗ an toàn, báo cô và để người lớn gọi trợ giúp.",
        "safeFeedback": "Tốt lắm! Bé Gấu không vào khu vực nguy hiểm; cô sẽ xử lý tiếp.",
        "unsafeChoices": [
          {
            "text": "Vào giữa đường để xem closer.",
            "feedback": "Bé Gấu giữ khoảng cách an toàn và ở cùng cô giáo."
          },
          {
            "text": "Quay lại lớp mà không báo cô.",
            "feedback": "Bé Gấu báo cô trước khi làm gì khác."
          }
        ]
      },
      {
        "id": "dao-pho-g5-l4-s3",
        "hazard": "Tự vào hiện trường tai nạn",
        "prompt": "Bé Gấu thấy tai nạn giao thông gần cổng trường. Bé Gấu muốn chạy ra xem. Bé Gấu làm gì?",
        "safeText": "Ở lại chỗ an toàn, nhờ cô/trưởng phòng hướng dẫn và không tự vào hiện trường.",
        "safeFeedback": "Đúng rồi! Bé Gấu không vào khu vực nguy hiểm; nhờ người lớn hỗ trợ.",
        "unsafeChoices": [
          {
            "text": "Vào ngay giữa hiện trường tai nạn.",
            "feedback": "Bé Gấu không vào hiện trường; giữ khoảng cách và nhờ người lớn."
          },
          {
            "text": "Tự gọi xe cứu hộ một mình.",
            "feedback": "Bé Gấu ở lại và nhờ người lớn gọi hỗ trợ."
          }
        ]
      },
      {
        "id": "dao-pho-g5-l4-s4",
        "hazard": "Quay/chụp hình sự cố",
        "prompt": "Bé Gấu xem tai nạn giao thông từ xa. Bạn yêu cầu Bé Gấu quay video và đăng lên mạng. Bé Gấu làm gì?",
        "safeText": "Không quay hay chia sẻ hình ảnh người gặp nạn; báo người lớn và tôn trọng người khác.",
        "safeFeedback": "Hay lắm! Bé Gấu không quay hay chia sẻ; nhờ người lớn giúp đúng cách.",
        "unsafeChoices": [
          {
            "text": "Quay video và đăng lên mạng ngay.",
            "feedback": "Bé Gấu không quay/chia sẻ; báo người lớn để tôn trọng nạn nhân."
          },
          {
            "text": "Xem rồi quay lại lớp không nói gì.",
            "feedback": "Bé Gấu báo người lớn trước khi rời khỏi hiện trường."
          }
        ]
      },
      {
        "id": "dao-pho-g5-l4-s5",
        "hazard": "Cảnh báo sự cố đường sắt",
        "prompt": "Bé Gấu đang chờ xe buýt cùng người lớn, nghe thấy tiếng báo choking của đường sắt. Bé Gấu làm gì?",
        "safeText": "Ở yên, lắng nghe hướng dẫn của người lớn và nhân viên; không tự ý qua đường ray.",
        "safeFeedback": "Tốt! Bé Gấu lắng nghe và làm theo hướng dẫn của người lớn/nhân viên.",
        "unsafeChoices": [
          {
            "text": "Qua đường ray khi nghe tiếng báo.",
            "feedback": "Bé Gấu chờ hướng dẫn của người lớn/nhân viên; không tự qua."
          },
          {
            "text": "Đứng cạnh đường ray để nghe.",
            "feedback": "Bé Gấu tránh xa đường ray và làm theo hướng dẫn."
          }
        ]
      }
    ]
  },
  {
    "id": "dao-pho-g5-l5",
    "moduleId": "dao-pho",
    "gradeBand": "5",
    "title": "Em làm tuyên truyền viên an toàn giao thông",
    "objective": "Chia sẻ một thông điệp đúng, tích cực trong lớp cùng giáo viên; không tự điều tiết giao thông.",
    "teacherPrompt": "Em muốn chia sẻ thông điệp ATGT nào với lớp, cùng giáo viên?",
    "situations": [
      {
        "id": "dao-pho-g5-l5-s1",
        "hazard": "Tự điều tiết giao thông",
        "prompt": "Lớp Bé Gấu làm áp phích ATGT. Thông điệp nào phù hợp để chia sẻ?",
        "safeText": "“Đi cùng người lớn, chờ đúng tín hiệu và qua đường ở nơi phù hợp.”",
        "safeFeedback": "Hay lắm! Thông điệp ngắn, tích cực và làm theo được cùng người lớn.",
        "unsafeChoices": [
          {
            "text": "“Em sẽ tự đứng giữa đường nhắc xe dừng.”",
            "feedback": "Bé Gấu không điều tiết xe; hãy chia sẻ áp phích cùng giáo viên."
          },
          {
            "text": "“Ai đi sai thì quay phim, đăng lên mạng.”",
            "feedback": "Mình không quay hay làm xấu hổ người khác; hãy nhắc nhau tử tế."
          }
        ]
      },
      {
        "id": "dao-pho-g5-l5-s2",
        "hazard": "Tự đứng giữa đường nhắc xe",
        "prompt": "Lớp Bé Gấu làm dự án ATGT. Một bạn muốn đứng giữa đường để nhắc mọi người dừng. Bé Gấu nói gì với bạn?",
        "safeText": "Không tự đứng giữa đường; hãy chia sẻ thông điệp an toàn với giáo viên và người lớn.",
        "safeFeedback": "Đúng rồi! Bé Gấu không tự điều tiết giao thông; chia sẻ với giáo viên để tìm cách an toàn.",
        "unsafeChoices": [
          {
            "text": "Đồng ý đứng giữa đường.",
            "feedback": "Bé Gấu không đứng giữa đường; nhờ người lớn giúp."
          },
          {
            "text": "Tự ý ra hiệu đèn dùng tay.",
            "feedback": "Không tự ra hiệu; làm theo giáo viên hoặc người lớn hỗ trợ."
          }
        ]
      },
      {
        "id": "dao-pho-g5-l5-s3",
        "hazard": "Truyền thông không kiểm chứng",
        "prompt": "Bé Gấu muốn viết thông điệp cho lớp. Có một thông tin trên mạng chưa rõ nguồn gốc. Bé Gấu làm gì?",
        "safeText": "Kiểm tra thông tin với giáo viên/người lớn, dùng nguồn chính thống trước khi chia sẻ.",
        "safeFeedback": "Hay lắm! Bé Gấu kiểm tra thông tin với người lớn trước khi dùng.",
        "unsafeChoices": [
          {
            "text": "Dùng thông tin mạng chưa kiểm tra.",
            "feedback": "Bé Gấu kiểm tra nguồn với giáo viên trước khi chia sẻ."
          },
          {
            "text": "Viết thông điệp theo cảm tính.",
            "feedback": "Bé Gấu hỏi giáo viên để xác nhận thông tin trước."
          }
        ]
      },
      {
        "id": "dao-pho-g5-l5-s4",
        "hazard": "Làm xấu hổ người khác",
        "prompt": "Bé Gấu thấy một bạn nào đó quên ghi nhớ luật an toàn. Bé Gấu muốn trưng dụng hình ảnh để răn đe. Bé Gấu làm gì?",
        "safeText": "Không quay hay truyền hình ảnh người khác; nhắc nhẹ và tích cực cùng giáo viên.",
        "safeFeedback": "Tốt! Bé Gấu nhắc nhở tử tế, không làm xấu hổ người khác.",
        "unsafeChoices": [
          {
            "text": "Quay ảnh bạn và đăng lên mạng.",
            "feedback": "Bé Gấu không quay/chia sẻ hình ảnh; nhắc nhở tích cực."
          },
          {
            "text": "Công khai bạn trước lớp.",
            "feedback": "Bé Gấu nhắc nhở tử tế và tìm giáo viên hỗ trợ."
          }
        ]
      },
      {
        "id": "dao-pho-g5-l5-s5",
        "hazard": "Tổ chức chiến dịch không xin phép",
        "prompt": "Bé Gấu muốn tổ chức một chiến dịch ATGT nhỏ cho lớp. Mà chưa có sự cho phép của giáo viên. Bé Gấu làm gì?",
        "safeText": "Gặp giáo viên đề xuất ý tưởng, làm theo kế hoạch có sự cho phép và hướng dẫn của giáo viên.",
        "safeFeedback": "Đúng rồi! Bé Gấu đề xuất với giáo viên và làm theo kế hoạch được cho phép.",
        "unsafeChoices": [
          {
            "text": "Tổ chức ngay không cần hỏi ai.",
            "feedback": "Bé Gấu hỏi giáo viên trước khi tổ chức bất cứ hoạt động gì."
          },
          {
            "text": "Tự ý làm theo ý thích của mình.",
            "feedback": "Bé Gấu tìm giáo viên để được hướng dẫn và cho phép."
          }
        ]
      }
    ]
  }
];
