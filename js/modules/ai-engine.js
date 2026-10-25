/* ==========================================================================
   🤖 CAMPUSMIND — 3 SIMULATED AI ENGINES (HUMAN-IN-THE-LOOP & EXPLAINABLE)
   BTL-02: Điều Phối Hỗ Trợ Sức Khỏe Tinh Thần Sinh Viên (CSE122)
   Đáp ứng chuẩn 5 bước: Nhập -> Đang xử lý -> Kết quả -> Giải thích -> Người dùng kiểm soát
   ========================================================================== */

const CampusAI = (() => {

  // --- AI-1: SUPPORT NAVIGATOR ---
  const AI1_QUESTIONS = [
    {
      id: 1,
      title: 'Chủ đề bạn đang cảm thấy bận tâm hoặc quá tải nhất gần đây?',
      subtitle: 'Chọn 1 khía cạnh bạn mong muốn nhận được sự trợ giúp nhất',
      options: [
        { id: 'exam', text: 'Áp lực thi cử, bài tập & đồ án học tập dồn dập', category: 'personal', counselor: 'TS. Nguyễn Minh Hà' },
        { id: 'anxiety', text: 'Cảm giác lo âu bồn chồn, căng thẳng khó gọi tên', category: 'personal', counselor: 'TS. Nguyễn Minh Hà' },
        { id: 'sleep', text: 'Mất ngủ, khó vào giấc hoặc kiệt sức thể chất kéo dài', category: 'sleep', counselor: 'TS. Nguyễn Minh Hà' },
        { id: 'relationship', text: 'Bất đồng quan điểm với bạn bè, bạn cùng phòng hoặc gia đình', category: 'relationship', counselor: 'ThS. Đỗ Thu Thảo' }
      ]
    },
    {
      id: 2,
      title: 'Mức độ ảnh hưởng của tình trạng này đến sinh hoạt thường ngày của bạn?',
      subtitle: 'Giúp AI đánh giá mức độ cấp thiết để đưa ra định hướng thích hợp',
      options: [
        { id: 'mild', text: 'Mới xuất hiện trong tuần, đôi lúc gây xao nhãng học tập', severity: 'mild' },
        { id: 'moderate', text: 'Kéo dài trên 2 tuần, khiến bạn chán nản và giảm sút kết quả', severity: 'moderate' },
        { id: 'severe', text: 'Nghiêm trọng, bạn cảm thấy bế tắc hoàn toàn và không muốn gặp ai', severity: 'severe' },
        { id: 'crisis', text: 'Khủng hoảng, có dấu hiệu kiệt quệ tinh thần hoặc suy nghĩ tiêu cực', severity: 'crisis' }
      ]
    },
    {
      id: 3,
      title: 'Hình thức tiếp cận và tương tác bạn cảm thấy thoải mái nhất?',
      subtitle: 'Tôn trọng không gian an toàn và tính cách cá nhân của bạn',
      options: [
        { id: 'one_on_one', text: 'Trò chuyện riêng tư 1-1 với chuyên gia tâm lý trong phòng kín', format: 'personal' },
        { id: 'group_workshop', text: 'Tham gia workshop nhóm nhỏ 8-12 bạn cùng hoàn cảnh', format: 'workshop' },
        { id: 'self_practice', text: 'Tự xem cẩm nang và thực hành các bài tập thư giãn cá nhân', format: 'resource' },
        { id: 'online_chat', text: 'Tư vấn trực tuyến qua video có bảo mật để linh hoạt địa điểm', format: 'online' }
      ]
    },
    {
      id: 4,
      title: 'Khoảng thời gian bạn có thể sắp xếp tham gia hỗ trợ?',
      subtitle: 'Giúp chuyên viên khớp khung giờ làm việc khả dụng',
      options: [
        { id: 'weekdays_morning', text: 'Các buổi sáng trong tuần (08:30 - 11:30)', time: 'morning' },
        { id: 'weekdays_afternoon', text: 'Các buổi chiều trong tuần (14:00 - 16:30)', time: 'afternoon' },
        { id: 'saturday', text: 'Sáng Thứ Bảy cuối tuần', time: 'saturday' },
        { id: 'flexible', text: 'Linh hoạt theo khung giờ trống của chuyên viên', time: 'flexible' }
      ]
    }
  ];

  // Evaluate AI-1 Quiz
  function evaluateNavigator(answers, forceFailure = false) {
    return new Promise((resolve) => {
      // Simulate 1.0s processing time
      setTimeout(() => {
        // Fallback / Exception handling
        if (forceFailure || answers[2] === 'crisis') {
          resolve({
            success: false,
            isCrisis: answers[2] === 'crisis',
            title: answers[2] === 'crisis' ? 'CẢNH BÁO: PHÁT HIỆN DẤU HIỆU KHỦNG HOẢNG CẤP BÁCH' : 'KHÔNG THỂ XÁC ĐỊNH KHUYẾN NGHỊ RÕ RÀNG',
            message: answers[2] === 'crisis' 
              ? 'Hệ thống nhận thấy bạn đang trải qua cảm giác bế tắc hoặc khủng hoảng nghiêm trọng. Vì sự an toàn tuyệt đối, AI tự động chuyển hướng bạn đến đội ngũ chuyên viên trực tiếp ngay lập tức.'
              : 'Các câu trả lời của bạn thể hiện nhu cầu đồng thời ở nhiều khía cạnh khác nhau. Để đảm bảo an toàn, hệ thống chuyển hướng bạn sang hỗ trợ thủ công hoặc liên hệ đường dây nóng chuyên viên trực tiếp.',
            hotline: '1900 6012 (Miễn phí 24/7)',
            room: 'Phòng Tham vấn P.204 Nhà A1, ĐH Thủy Lợi',
            fallbackActions: [
              { text: 'Gọi đường dây nóng khẩn cấp', action: 'hotline', primary: true },
              { text: 'Tự duyệt 12 dịch vụ thủ công', action: 'manual', primary: false }
            ]
          });
          return;
        }

        // Normal Smart Match
        let recServiceId = 'SRV-01';
        let recServiceName = 'Tư vấn tâm lý cá nhân 1-1';
        let recCounselor = 'TS. Nguyễn Minh Hà';
        let recReason1 = 'Bạn đã bày tỏ nhu cầu được lắng nghe riêng tư để giải tỏa áp lực thi cử và lo âu học tập.';

        if (answers[1] === 'sleep') {
          recServiceId = 'SRV-03';
          recServiceName = 'Vệ sinh giấc ngủ & Thư giãn sâu';
          recReason1 = 'Bạn gặp trở ngại về giấc ngủ và kiệt sức thể chất kéo dài trước mùa thi.';
        } else if (answers[3] === 'group_workshop') {
          recServiceId = 'SRV-02';
          recServiceName = 'Workshop Điều hòa cảm xúc nhóm nhỏ';
          recCounselor = 'ThS. Lê Hoàng Long';
          recReason1 = 'Bạn yêu thích hình thức tương tác nhóm để cùng chia sẻ và rèn luyện kỹ năng cảm xúc.';
        } else if (answers[1] === 'relationship') {
          recServiceId = 'SRV-06';
          recServiceName = 'Tham vấn mâu thuẫn mối quan hệ & Bạn bè';
          recCounselor = 'ThS. Đỗ Thu Thảo';
          recReason1 = 'Bạn đang bận tâm về bất đồng quan điểm và mâu thuẫn trong các mối quan hệ học đường.';
        }

        resolve({
          success: true,
          serviceId: recServiceId,
          serviceName: recServiceName,
          counselorName: recCounselor,
          duration: '45 phút',
          location: 'Phòng P.204 Nhà A1, ĐH Thủy Lợi',
          matchScore: 98,
          confidence: 'Rất cao (★★★★★)',
          summary: `Dựa trên phân tích 4 câu hỏi trắc nghiệm, hình thức "${recServiceName}" là lựa chọn tối ưu nhất để giải tỏa cảm xúc của bạn.`,
          explainability: [
            recReason1,
            'Thời lượng 45 phút hoàn toàn phù hợp với lịch học bạn đã lựa chọn trong tuần.',
            `Chuyên gia phụ trách (${recCounselor}) có chuyên môn sâu về lĩnh vực bạn đang đối mặt.`
          ],
          ethicsNotice: 'Khuyến nghị mang tính điều phối hỗ trợ học đường, không thay thế chẩn đoán y khoa chuyên sâu.',
          suggestedActions: [
            { text: 'Chấp nhận & Đặt lịch ngay →', action: 'accept', primary: true },
            { text: 'Làm lại trắc nghiệm', action: 'retry', primary: false }
          ]
        });
      }, 1000);
    });
  }

  // --- AI-2: RESOURCE RECOMMENDER ---
  function recommendResources(keywordOrCategory = 'all') {
    const all = CampusData.getResources();
    const query = (keywordOrCategory || '').toLowerCase();

    let matched = all.filter(r => {
      if (query === 'all' || !query) return true;
      return r.category.toLowerCase().includes(query) ||
             r.title.toLowerCase().includes(query) ||
             r.description.toLowerCase().includes(query);
    });

    if (matched.length === 0) matched = all.slice(0, 3);

    return {
      success: true,
      reason: query !== 'all' 
        ? `Đề xuất thông minh dựa trên từ khóa "${keywordOrCategory}" và lịch sử tìm kiếm tài nguyên của bạn.`
        : 'Đề xuất các bài tập thư giãn được đánh giá hiệu quả cao nhất tuần này tại TLU.',
      items: matched.slice(0, 4)
    };
  }

  // --- AI-3: COUNSELOR SUMMARY ASSISTANT ---
  function generateSessionSummary(rawNotes, forceFail = false) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const wordCount = (rawNotes || '').trim().split(/\s+/).filter(Boolean).length;

        // Failure handling (e.g., notes too short < 25 words or toggle on)
        if (forceFail || wordCount < 25) {
          resolve({
            success: false,
            error: 'GHI CHÚ CHƯA ĐỦ ĐỘ DÀI LÂM SÀNG',
            message: `Ghi chép hiện tại chỉ có ${wordCount} từ (yêu cầu tối thiểu 25 từ). AI từ chối trích xuất để tránh sai lệch thông tin bảo mật của sinh viên. Vui lòng bổ sung thêm thông tin diễn biến buổi tham vấn.`,
            suggestion: 'Bạn có thể tiếp tục gõ tay hoặc bổ sung: biểu hiện cảm xúc, kỹ thuật đã hướng dẫn và cam kết của sinh viên.'
          });
          return;
        }

        // Success Simulation
        resolve({
          success: true,
          wordCount,
          processingTime: '1.2s',
          summary3Sentences: [
            'Sinh viên biểu hiện căng thẳng và lo âu rõ rệt do áp lực mâu thuẫn đồ án học tập và mất ngủ kéo dài 3 đêm liên tiếp.',
            'Chuyên viên đã hướng dẫn thực hành kỹ thuật thở 4-7-8 tại chỗ, giúp sinh viên nhận diện các suy nghĩ thảm họa hóa và hạ thấp nhịp tim.',
            'Sinh viên tiếp thu tích cực, tinh thần ổn định hơn và đồng thuận với kế hoạch chia nhỏ deadline công việc.'
          ],
          actionPlan3Items: [
            { actor: 'Sinh viên', task: 'Thực hành thở 4-7-8 đều đặn 2 lần/ngày (sáng và trước khi đi ngủ)', deadline: 'Hàng ngày' },
            { actor: 'Sinh viên', task: 'Chủ động họp nhóm làm đồ án để phân chia lại ranh giới công việc', deadline: 'Trước Thứ Sáu' },
            { actor: 'Chuyên viên', task: 'Tái khám đánh giá chỉ số lo âu và giấc ngủ sau 7 ngày', deadline: '30/10/2026' }
          ],
          ethicsNote: 'Biên bản đã được mã hóa theo tiêu chuẩn bảo mật dữ liệu y tế học đường TLU. Chuyên viên có toàn quyền chỉnh sửa trước khi lưu chính thức.'
        });
      }, 1100);
    });
  }

  return {
    AI1_QUESTIONS,
    evaluateNavigator,
    recommendResources,
    generateSessionSummary
  };
})();
