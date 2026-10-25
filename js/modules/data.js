/* ==========================================================================
   🌿 CAMPUSMIND — CENTRAL LOCALSTORAGE DATABASE & SEED DATA
   BTL-02: Điều Phối Hỗ Trợ Sức Khỏe Tinh Thần Sinh Viên (CSE122)
   Trường Đại học Thủy Lợi (TLU)
   ========================================================================== */

const CampusData = (() => {
  const STORAGE_KEYS = {
    SERVICES: 'campusmind_services',
    COUNSELORS: 'campusmind_counselors',
    APPOINTMENTS: 'campusmind_appointments',
    RESOURCES: 'campusmind_resources',
    USERS: 'campusmind_users',
    AUDIT_LOGS: 'campusmind_audit_logs',
    CURRENT_USER: 'campusmind_current_user',
    INITIALIZED: 'campusmind_initialized_v3'
  };

  // 1. Initial Seed Services (12 services)
  const SEED_SERVICES = [
    {
      id: 'SRV-01',
      title: 'Tư vấn tâm lý cá nhân 1-1',
      category: 'personal',
      categoryName: 'Tư vấn cá nhân',
      duration: '45 phút',
      location: 'Phòng P.204 Nhà A1 (Hoặc Online Zoom)',
      counselorId: 'CSL-01',
      counselorName: 'TS. Nguyễn Minh Hà',
      description: 'Buổi trò chuyện riêng tư, bảo mật tuyệt đối nhằm tháo gỡ áp lực thi cử, lo âu kéo dài và hỗ trợ định hướng vượt qua khủng hoảng.',
      status: 'active',
      isPopular: true
    },
    {
      id: 'SRV-02',
      title: 'Workshop Điều hòa cảm xúc nhóm nhỏ',
      category: 'workshop',
      categoryName: 'Workshop nhóm',
      duration: '90 phút',
      location: 'Hội trường Tầng 3 Thư viện TLU',
      counselorId: 'CSL-02',
      counselorName: 'ThS. Lê Hoàng Long',
      description: 'Rèn luyện kỹ năng nhận diện cảm xúc, giải tỏa stress qua hoạt động tương tác nhóm 8-12 sinh viên dưới sự điều phối chuyên môn.',
      status: 'active',
      isPopular: true
    },
    {
      id: 'SRV-03',
      title: 'Vệ sinh giấc ngủ & Thư giãn sâu',
      category: 'sleep',
      categoryName: 'Giấc ngủ & Thư giãn',
      duration: '45 phút',
      location: 'Phòng Tư vấn P.206 Nhà A1',
      counselorId: 'CSL-01',
      counselorName: 'TS. Nguyễn Minh Hà',
      description: 'Hướng dẫn chuỗi bài tập thở, kỹ thuật thả lỏng cơ bắp và thiết lập chu kỳ sinh học giúp cải thiện tình trạng mất ngủ trước mùa thi.',
      status: 'active',
      isPopular: false
    },
    {
      id: 'SRV-04',
      title: 'Thích nghi tâm lý cho sinh viên năm nhất',
      category: 'study',
      categoryName: 'Hỗ trợ học tập',
      duration: '60 phút',
      location: 'Phòng P.205 Nhà A1',
      counselorId: 'CSL-03',
      counselorName: 'ThS. Đỗ Thu Thảo',
      description: 'Đồng hành cùng tân sinh viên vượt qua cảm giác cô đơn xa nhà, bỡ ngỡ phương pháp tự học đại học và xung đột phòng trọ.',
      status: 'active',
      isPopular: true
    },
    {
      id: 'SRV-05',
      title: 'Quản lý thời gian & Giảm tải trì hoãn đồ án',
      category: 'study',
      categoryName: 'Hỗ trợ học tập',
      duration: '45 phút',
      location: 'Phòng P.204 Nhà A1',
      counselorId: 'CSL-02',
      counselorName: 'ThS. Lê Hoàng Long',
      description: 'Ứng dụng ma trận Eisenhower và kỹ thuật Pomodoro có điều chỉnh tâm lý để vượt qua chứng sợ bắt đầu và tê liệt deadline.',
      status: 'active',
      isPopular: false
    },
    {
      id: 'SRV-06',
      title: 'Tham vấn mâu thuẫn mối quan hệ & Bạn bè',
      category: 'relationship',
      categoryName: 'Mối quan hệ',
      duration: '60 phút',
      location: 'Phòng P.205 Nhà A1',
      counselorId: 'CSL-03',
      counselorName: 'ThS. Đỗ Thu Thảo',
      description: 'Hỗ trợ sinh viên kỹ năng giao tiếp bất bạo động, thiết lập ranh giới lành mạnh trong tình bạn, tình yêu và gia đình.',
      status: 'active',
      isPopular: false
    },
    {
      id: 'SRV-07',
      title: 'Tư vấn hỗ trợ tâm lý khẩn cấp 24/7',
      category: 'crisis',
      categoryName: 'Hỗ trợ khẩn cấp',
      duration: 'Trực tiếp 24/7',
      location: 'Đường dây nóng 1900 6012 & P. Y tế TLU',
      counselorId: 'CSL-04',
      counselorName: 'PGS.TS. Trần Quốc Tuấn',
      description: 'Can thiệp nhanh cho các trường hợp sinh viên có ý nghĩ tự hoại hoặc rơi vào trạng thái hoảng loạn nghiêm trọng.',
      status: 'active',
      isPopular: true
    },
    {
      id: 'SRV-08',
      title: 'Tập huấn kỹ năng Mindful Walking tại khuôn viên',
      category: 'workshop',
      categoryName: 'Workshop nhóm',
      duration: '60 phút',
      location: 'Công viên Vườn hoa TLU Cơ sở 175 Tây Sơn',
      counselorId: 'CSL-02',
      counselorName: 'ThS. Lê Hoàng Long',
      description: 'Buổi thiền hành ngoài trời kết hợp hít thở sâu, giúp tái tạo năng lượng tinh thần sau những giờ học máy tính căng thẳng.',
      status: 'active',
      isPopular: false
    },
    {
      id: 'SRV-09',
      title: 'Đánh giá mức độ kiệt sức (Burnout Screener)',
      category: 'personal',
      categoryName: 'Tư vấn cá nhân',
      duration: '30 phút',
      location: 'Trực tuyến có bảo mật',
      counselorId: 'CSL-01',
      counselorName: 'TS. Nguyễn Minh Hà',
      description: 'Thực hiện bảng khảo sát lâm sàng MBI và phân tích cá nhân hóa mức độ cạn kiệt năng lượng học tập của sinh viên năm cuối.',
      status: 'active',
      isPopular: false
    },
    {
      id: 'SRV-10',
      title: 'Chuyên đề: Vượt qua áp lực hoàn hảo (Perfectionism)',
      category: 'workshop',
      categoryName: 'Workshop nhóm',
      duration: '90 phút',
      location: 'Hội trường P.302 Thư viện TLU',
      counselorId: 'CSL-03',
      counselorName: 'ThS. Đỗ Thu Thảo',
      description: 'Học cách chấp nhận sự chưa hoàn hảo, giảm gánh nặng điểm số xuất sắc và xây dựng lòng trắc ẩn với chính bản thân.',
      status: 'active',
      isPopular: false
    },
    {
      id: 'SRV-11',
      title: 'Tham vấn phục hồi sau chia tay & Mất mát',
      category: 'relationship',
      categoryName: 'Mối quan hệ',
      duration: '50 phút',
      location: 'Phòng P.205 Nhà A1',
      counselorId: 'CSL-03',
      counselorName: 'ThS. Đỗ Thu Thảo',
      description: 'Không gian an toàn lắng nghe và hướng dẫn vượt qua các giai đoạn đau buồn, chữa lành tổn thương tình cảm thời sinh viên.',
      status: 'archived',
      isPopular: false
    },
    {
      id: 'SRV-12',
      title: 'Tập huấn Sơ cứu tâm lý (Psychological First Aid)',
      category: 'workshop',
      categoryName: 'Workshop nhóm',
      duration: '120 phút',
      location: 'Phòng Hội đồng Nhà K1 TLU',
      counselorId: 'CSL-04',
      counselorName: 'PGS.TS. Trần Quốc Tuấn',
      description: 'Trang bị cho ban cán sự lớp và câu lạc bộ kỹ năng nhận biết bạn bè gặp bất ổn tâm lý để kết nối hỗ trợ kịp thời.',
      status: 'active',
      isPopular: true
    }
  ];

  // 2. Counselors
  const SEED_COUNSELORS = [
    {
      id: 'CSL-01',
      name: 'TS. Nguyễn Minh Hà',
      title: 'Tiến sĩ Tâm lý học Lâm sàng',
      role: 'Chuyên viên cao cấp & Điều phối viên Wellbeing',
      room: 'Phòng P.204 Nhà A1 (Trường ĐH Thủy Lợi)',
      email: 'ha.minh@tlu.edu.vn',
      phone: '024.3852.204',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=240',
      bio: 'Hơn 12 năm kinh nghiệm trong tư vấn tâm lý học đường, chuyên sâu về can thiệp lo âu thi cử, trầm cảm nhẹ và liệu pháp nhận thức hành vi (CBT).',
      specialties: ['Áp lực học tập & Thi cử', 'Rối loạn lo âu', 'Khủng hoảng hiện sinh', 'Vệ sinh giấc ngủ'],
      rating: 4.95,
      totalSessions: 420,
      availableDays: ['Thứ 2', 'Thứ 3', 'Thứ 5', 'Thứ 6']
    },
    {
      id: 'CSL-02',
      name: 'ThS. Lê Hoàng Long',
      title: 'Thạc sĩ Tâm lý học Giáo dục',
      role: 'Chuyên viên Tham vấn & Điều hành Workshop',
      room: 'Phòng P.206 Nhà A1 (Trường ĐH Thủy Lợi)',
      email: 'long.le@tlu.edu.vn',
      phone: '024.3852.206',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=240',
      bio: 'Chuyên gia huấn luyện chánh niệm (Mindfulness) và phát triển kỹ năng tự điều hòa cảm xúc nhóm, từng công tác tại nhiều dự án sức khỏe tâm thần trẻ.',
      specialties: ['Quản trị cảm xúc nhóm', 'Quản lý stress & Deadline', 'Kỹ thuật chánh niệm', 'Xung đột phòng trọ'],
      rating: 4.88,
      totalSessions: 310,
      availableDays: ['Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 7']
    },
    {
      id: 'CSL-03',
      name: 'ThS. Đỗ Thu Thảo',
      title: 'Thạc sĩ Công tác Xã hội & Tham vấn Tâm lý',
      role: 'Chuyên viên Hỗ trợ Sinh viên Năm nhất',
      room: 'Phòng P.205 Nhà A1 (Trường ĐH Thủy Lợi)',
      email: 'thao.do@tlu.edu.vn',
      phone: '024.3852.205',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=240',
      bio: 'Tận tâm, thấu cảm, chuyên hỗ trợ sinh viên vượt qua rào cản giao tiếp, khủng hoảng mối quan hệ bạn bè, gia đình và thích nghi văn hóa học đường.',
      specialties: ['Thích nghi năm nhất', 'Mối quan hệ & Tình cảm', 'Giao tiếp bất bạo động', 'Áp lực gia đình'],
      rating: 4.92,
      totalSessions: 265,
      availableDays: ['Thứ 2', 'Thứ 4', 'Thứ 6']
    },
    {
      id: 'CSL-04',
      name: 'PGS.TS. Trần Quốc Tuấn',
      title: 'Phó Giáo sư, Bác sĩ Chuyên khoa Tâm thần',
      role: 'Cố vấn chuyên môn & Can thiệp khẩn cấp TLU',
      room: 'Phòng Tham vấn Y tế Nhà K1 TLU',
      email: 'tuan.tran@tlu.edu.vn',
      phone: '024.3852.999',
      avatar: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=240',
      bio: 'Cố vấn trưởng ban hỗ trợ tâm lý trường, chỉ đạo các ca can thiệp khủng hoảng khẩn cấp và kết nối mạng lưới bệnh viện tâm thần tuyến trung ương.',
      specialties: ['Can thiệp khủng hoảng SOS', 'Rối loạn trầm cảm nặng', 'Sơ cứu tâm lý', 'Hội chẩn y khoa'],
      rating: 4.98,
      totalSessions: 540,
      availableDays: ['Thứ 2', 'Thứ 5']
    }
  ];

  // 3. Appointments
  const SEED_APPOINTMENTS = [
    {
      id: 'APT-1042',
      serviceId: 'SRV-01',
      serviceName: 'Tư vấn tâm lý cá nhân 1-1',
      studentId: '2551060661',
      studentName: 'Vũ Hồng Phúc',
      studentClass: 'K64 - Công nghệ Thông tin',
      studentPhone: '0987.654.321',
      studentEmail: 'vuphucpa@gmail.com',
      counselorId: 'CSL-01',
      counselorName: 'TS. Nguyễn Minh Hà',
      date: '2026-10-23',
      dateDisplay: 'Thứ Năm, 23/10/2026',
      timeSlot: '14:00 - 14:45',
      type: 'in-person',
      typeDisplay: 'Trực tiếp tại phòng P.204 Nhà A1',
      status: 'confirmed',
      statusDisplay: 'Đã xác nhận',
      reason: 'Tuần tới nộp đồ án tốt nghiệp nhưng gặp áp lực mâu thuẫn nhóm làm việc, mất ngủ 3 đêm liên tiếp và cảm giác lo âu nghẹt thở.',
      isAnonymous: false,
      aiSummary: 'Sinh viên Phúc gặp áp lực thi cử và mâu thuẫn nhóm làm đồ án dẫn đến mất ngủ. Đã được hướng dẫn bài tập thở 4-7-8 xoa dịu lo âu tại chỗ và lập kế hoạch chia nhỏ nhiệm vụ.',
      aiActionPlan: [
        'Sinh viên thực hành kỹ thuật thở 4-7-8 ít nhất 2 lần/ngày (sáng và trước khi ngủ).',
        'Họp nhóm đồ án vào Thứ Sáu để phân chia lại ranh giới công việc minh bạch.',
        'Tái khám đánh giá tiến trình sau 7 ngày (30/10/2026).'
      ],
      createdAt: '2026-10-20T09:30:00Z'
    },
    {
      id: 'APT-1043',
      serviceId: 'SRV-02',
      serviceName: 'Workshop Điều hòa cảm xúc nhóm nhỏ',
      studentId: '2551060661',
      studentName: 'Vũ Hồng Phúc',
      studentClass: 'K64 - Công nghệ Thông tin',
      studentPhone: '0987.654.321',
      studentEmail: 'vuphucpa@gmail.com',
      counselorId: 'CSL-02',
      counselorName: 'ThS. Lê Hoàng Long',
      date: '2026-10-27',
      dateDisplay: 'Thứ Ba, 27/10/2026',
      timeSlot: '09:00 - 10:30',
      type: 'in-person',
      typeDisplay: 'Hội trường Thư viện TLU',
      status: 'pending',
      statusDisplay: 'Đang chờ duyệt',
      reason: 'Mong muốn học cách kiểm soát sự nóng giận và học kỹ năng giao tiếp tập thể để cải thiện mối quan hệ bạn bè.',
      isAnonymous: false,
      createdAt: '2026-10-21T14:15:00Z'
    },
    {
      id: 'APT-1040',
      serviceId: 'SRV-03',
      serviceName: 'Vệ sinh giấc ngủ & Thư giãn sâu',
      studentId: '2551060661',
      studentName: 'Vũ Hồng Phúc',
      studentClass: 'K64 - Công nghệ Thông tin',
      studentPhone: '0987.654.321',
      studentEmail: 'vuphucpa@gmail.com',
      counselorId: 'CSL-01',
      counselorName: 'TS. Nguyễn Minh Hà',
      date: '2026-10-15',
      dateDisplay: 'Thứ Năm, 15/10/2026',
      timeSlot: '15:00 - 15:45',
      type: 'in-person',
      typeDisplay: 'Phòng P.204 Nhà A1',
      status: 'completed',
      statusDisplay: 'Đã hoàn thành',
      reason: 'Khó vào giấc ngủ ban đêm, thường xuyên thức tới 3 giờ sáng và cảm thấy kiệt sức vào ban ngày.',
      isAnonymous: false,
      counselorNotes: 'Đã hoàn thành buổi đánh giá ban đầu. Sinh viên có dấu hiệu rối loạn nhịp thức ngủ nhẹ do lướt điện thoại muộn. Đã cam kết thực hiện vệ sinh giấc ngủ.',
      createdAt: '2026-10-10T10:00:00Z'
    },
    {
      id: 'APT-1038',
      serviceId: 'SRV-01',
      serviceName: 'Tư vấn tâm lý cá nhân 1-1',
      studentId: '2551060661',
      studentName: 'Vũ Hồng Phúc',
      studentClass: 'K64 - Công nghệ Thông tin',
      studentPhone: '0987.654.321',
      studentEmail: 'vuphucpa@gmail.com',
      counselorId: 'CSL-01',
      counselorName: 'TS. Nguyễn Minh Hà',
      date: '2026-09-28',
      dateDisplay: 'Thứ Hai, 28/09/2026',
      timeSlot: '08:30 - 09:15',
      type: 'online',
      typeDisplay: 'Tư vấn Trực tuyến (MS Teams)',
      status: 'cancelled',
      statusDisplay: 'Đã hủy',
      reason: 'Trùng lịch thi kiểm tra giữa kỳ đột xuất môn Giải tích 2.',
      isAnonymous: false,
      createdAt: '2026-09-25T08:20:00Z'
    },
    {
      id: 'APT-1044',
      serviceId: 'SRV-04',
      serviceName: 'Thích nghi tâm lý cho sinh viên năm nhất',
      studentId: '2451069901',
      studentName: 'Hoàng Minh Châu',
      studentClass: 'K66 - Kỹ thuật Tài nguyên Nước',
      studentPhone: '0912.345.678',
      studentEmail: 'chau.hoang@tlu.edu.vn',
      counselorId: 'CSL-03',
      counselorName: 'ThS. Đỗ Thu Thảo',
      date: '2026-10-24',
      dateDisplay: 'Thứ Sáu, 24/10/2026',
      timeSlot: '10:00 - 11:00',
      type: 'in-person',
      typeDisplay: 'Phòng P.205 Nhà A1',
      status: 'pending',
      statusDisplay: 'Đang chờ duyệt',
      reason: 'Tân sinh viên từ Hà Tĩnh ra Hà Nội, cảm thấy lạc lõng và không thể hòa nhập được với các bạn cùng phòng ký túc xá.',
      isAnonymous: false,
      createdAt: '2026-10-22T16:00:00Z'
    },
    {
      id: 'APT-1045',
      serviceId: 'SRV-01',
      serviceName: 'Tư vấn tâm lý cá nhân 1-1',
      studentId: '2351067788',
      studentName: 'Trần Vũ Hoàng',
      studentClass: 'K65 - Kỹ thuật Phần mềm',
      studentPhone: '0978.112.233',
      studentEmail: 'hoang.tran@tlu.edu.vn',
      counselorId: 'CSL-01',
      counselorName: 'TS. Nguyễn Minh Hà',
      date: '2026-10-24',
      dateDisplay: 'Thứ Sáu, 24/10/2026',
      timeSlot: '15:00 - 15:45',
      type: 'in-person',
      typeDisplay: 'Phòng P.204 Nhà A1',
      status: 'pending',
      statusDisplay: 'Đang chờ duyệt',
      reason: 'Lo lắng kéo dài về điểm rèn luyện và nguy cơ bị cảnh cáo học tập, không dám tâm sự cùng gia đình.',
      isAnonymous: false,
      createdAt: '2026-10-23T08:00:00Z'
    }
  ];

  // 4. Wellbeing Resources (12 resources)
  const SEED_RESOURCES = [
    {
      id: 'RES-01',
      title: 'Kỹ thuật thở 4-7-8: Xoa dịu cơn hoảng loạn tức thì',
      category: 'anxiety',
      categoryName: 'Lo âu & Căng thẳng',
      readTime: '4 phút đọc · Bài tập 5 phút',
      format: 'interactive',
      formatDisplay: 'Bài tập tương tác',
      author: 'TS. Nguyễn Minh Hà',
      views: 1240,
      description: 'Phương pháp điều hòa thần kinh giao cảm dựa trên bằng chứng khoa học, giúp hạ nhịp tim và giảm cảm giác bồn chồn trong vòng 120 giây.',
      badgeAi: '✦ AI-2 Đề xuất hàng đầu',
      steps: [
        'Ngồi thẳng lưng, đặt đầu lưỡi chạm vào vòm họng ngay sau răng cửa trên.',
        'Thở ra hoàn toàn bằng miệng tạo thành tiếng thở dài nhẹ.',
        'Hít vào thật êm qua mũi đếm thầm từ 1 đến 4.',
        'Giữ hơi thở lại trong vòng 7 giây.',
        'Thở ra từ từ qua miệng trong vòng 8 giây.',
        'Lặp lại chu kỳ trên đủ 4 lần.'
      ]
    },
    {
      id: 'RES-02',
      title: 'Kỹ thuật Neo 5-4-3-2-1 kích hoạt ngũ quan',
      category: 'mindfulness',
      categoryName: 'Chánh niệm & Thư giãn',
      readTime: '5 phút đọc · Thực hành tại chỗ',
      format: 'article',
      formatDisplay: 'Cẩm nang thực hành',
      author: 'ThS. Lê Hoàng Long',
      views: 980,
      description: 'Kỹ thuật định tâm hiệu quả nhất khi tâm trí bị cuốn vào những viễn cảnh tiêu cực hoặc lo sợ về kết quả thi cử tương lai.',
      badgeAi: '✦ Bài tập phổ biến',
      steps: [
        '5 thứ bạn có thể nhìn thấy xung quanh lúc này.',
        '4 thứ bạn có thể chạm vào (áo, bàn, mặt ghế...).',
        '3 âm thanh bạn nghe thấy trong phòng.',
        '2 mùi hương bạn ngửi thấy.',
        '1 vị bạn cảm nhận trong miệng.'
      ]
    },
    {
      id: 'RES-03',
      title: 'Vệ sinh giấc ngủ: 7 thói quen cứu cánh mùa ôn thi',
      category: 'sleep',
      categoryName: 'Giấc ngủ',
      readTime: '6 phút đọc',
      format: 'article',
      formatDisplay: 'Bài viết chuyên môn',
      author: 'TS. Nguyễn Minh Hà',
      views: 820,
      description: 'Nguyên tắc cắt ánh sáng xanh sau 23h, cách điều chỉnh nhiệt độ phòng và mẹo viết nhật ký lo âu trước khi đặt lưng xuống giường.',
      badgeAi: null
    },
    {
      id: 'RES-04',
      title: 'Vượt qua hiện tượng Kẻ giả mạo (Imposter Syndrome)',
      category: 'study',
      categoryName: 'Học tập & Tự tin',
      readTime: '7 phút đọc',
      format: 'article',
      formatDisplay: 'Tâm lý học đường',
      author: 'ThS. Đỗ Thu Thảo',
      views: 1450,
      description: 'Dành cho sinh viên luôn nghĩ mình chỉ may mắn đạt điểm cao và sợ hãi một ngày người khác phát hiện mình kém cỏi.',
      badgeAi: '✦ Đọc nhiều nhất'
    },
    {
      id: 'RES-05',
      title: 'Audio thư giãn: Quét toàn thân giải phóng căng thẳng',
      category: 'mindfulness',
      categoryName: 'Chánh niệm & Thư giãn',
      readTime: '12 phút audio',
      format: 'audio',
      formatDisplay: 'File âm thanh hướng dẫn',
      author: 'ThS. Lê Hoàng Long',
      views: 670,
      description: 'Bản ghi âm giọng nói êm dịu kết hợp tiếng mưa rơi nhẹ, dẫn dắt từng vùng cơ thể thả lỏng từ đỉnh đầu đến gót chân.',
      badgeAi: null
    },
    {
      id: 'RES-06',
      title: 'Thiết lập ranh giới khi làm bài tập nhóm (Teamwork Healthy)',
      category: 'relationship',
      categoryName: 'Mối quan hệ',
      readTime: '5 phút đọc',
      format: 'article',
      formatDisplay: 'Kỹ năng xã hội',
      author: 'ThS. Đỗ Thu Thảo',
      views: 1120,
      description: 'Cách từ chối gánh việc thay bạn lười biếng mà không gây vỡ trận quan hệ, và kỹ thuật phản hồi đóng góp mang tính xây dựng.',
      badgeAi: null
    }
  ];

  // 5. System Users (RBAC)
  const SEED_USERS = [
    {
      id: 'USR-01',
      username: 'student',
      code: '2551060661',
      name: 'Vũ Hồng Phúc',
      email: 'vuphucpa@gmail.com',
      role: 'student',
      roleName: 'Sinh viên',
      faculty: 'Khoa Công nghệ Thông tin (K64)',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=240',
      status: 'active',
      joinedDate: '2024-09-15',
      phone: '0987.654.321'
    },
    {
      id: 'USR-02',
      username: 'counselor',
      code: 'CSL-004',
      name: 'TS. Nguyễn Minh Hà',
      email: 'ha.minh@tlu.edu.vn',
      role: 'counselor',
      roleName: 'Chuyên viên tư vấn',
      faculty: 'Phòng Tư vấn Tâm lý Học đường TLU',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=240',
      status: 'active',
      joinedDate: '2022-01-10',
      phone: '024.3852.204'
    },
    {
      id: 'USR-03',
      username: 'admin',
      code: 'ADM-001',
      name: 'Nguyễn Minh Đức (Admin)',
      email: 'admin@tlu.edu.vn',
      role: 'admin',
      roleName: 'Quản trị viên',
      faculty: 'Ban Quản trị Hệ thống Wellbeing & CTSV',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=240',
      status: 'active',
      joinedDate: '2021-08-01',
      phone: '024.3852.100'
    },
    {
      id: 'USR-04',
      username: 'guest',
      code: 'GUEST-00',
      name: 'Khách vãng lai (Chưa đăng nhập)',
      email: 'guest@campusmind.tlu.edu.vn',
      role: 'guest',
      roleName: 'Khách',
      faculty: 'Chưa xác định',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=240',
      status: 'active',
      joinedDate: '2026-10-25',
      phone: 'N/A'
    },
    {
      id: 'USR-05',
      username: 'nam.tran',
      code: '2151069988',
      name: 'Trần Văn Nam',
      email: 'nam.tran@tlu.edu.vn',
      role: 'student',
      roleName: 'Sinh viên',
      faculty: 'Khoa Kinh tế & Quản lý (K63)',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=240',
      status: 'suspended',
      joinedDate: '2023-08-20',
      phone: '0912.888.999'
    }
  ];

  // 6. Audit Logs
  const SEED_AUDIT_LOGS = [
    { time: '14:42', text: 'TS. Hà đã lưu tóm tắt ca APT-1042 kết hợp AI-3', user: 'TS. Minh Hà', type: 'counselor' },
    { time: '14:15', text: 'SV. Vũ Hồng Phúc gửi yêu cầu đặt lịch mới #APT-1043', user: 'Vũ Hồng Phúc', type: 'student' },
    { time: '11:30', text: 'Admin cập nhật trạng thái hoạt động dịch vụ SRV-01', user: 'Admin', type: 'admin' },
    { time: '09:10', text: 'Hệ thống tự động kích hoạt email nhắc lịch trước 24h', user: 'System Bot', type: 'system' },
    { time: '08:00', text: 'Sao lưu cơ sở dữ liệu định kỳ hoàn tất an toàn', user: 'System Bot', type: 'system' }
  ];

  // Initialize LocalStorage if empty
  function init() {
    if (!localStorage.getItem(STORAGE_KEYS.INITIALIZED)) {
      resetToDefault();
    }
  }

  function resetToDefault() {
    localStorage.setItem(STORAGE_KEYS.SERVICES, JSON.stringify(SEED_SERVICES));
    localStorage.setItem(STORAGE_KEYS.COUNSELORS, JSON.stringify(SEED_COUNSELORS));
    localStorage.setItem(STORAGE_KEYS.APPOINTMENTS, JSON.stringify(SEED_APPOINTMENTS));
    localStorage.setItem(STORAGE_KEYS.RESOURCES, JSON.stringify(SEED_RESOURCES));
    localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify(SEED_USERS));
    localStorage.setItem(STORAGE_KEYS.AUDIT_LOGS, JSON.stringify(SEED_AUDIT_LOGS));
    localStorage.setItem(STORAGE_KEYS.CURRENT_USER, JSON.stringify(SEED_USERS[0])); // Default student
    localStorage.setItem(STORAGE_KEYS.INITIALIZED, 'true');
    console.log('🌿 CampusMind LocalStorage Seed Data Initialized Successfully.');
  }

  // --- CRUD Services ---
  function getServices() {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.SERVICES) || '[]');
  }
  function saveService(service) {
    const list = getServices();
    const index = list.findIndex(s => s.id === service.id);
    if (index >= 0) {
      list[index] = { ...list[index], ...service };
    } else {
      list.unshift(service);
    }
    localStorage.setItem(STORAGE_KEYS.SERVICES, JSON.stringify(list));
    addAuditLog(`Đã ${index >= 0 ? 'cập nhật' : 'thêm mới'} dịch vụ: ${service.title}`, 'admin');
    return list;
  }
  function deleteService(id) {
    let list = getServices();
    const item = list.find(s => s.id === id);
    list = list.filter(s => s.id !== id);
    localStorage.setItem(STORAGE_KEYS.SERVICES, JSON.stringify(list));
    if (item) addAuditLog(`Đã xóa dịch vụ ${item.title} (${id})`, 'admin');
    return list;
  }
  function toggleServiceStatus(id) {
    const list = getServices();
    const item = list.find(s => s.id === id);
    if (item) {
      item.status = item.status === 'active' ? 'archived' : 'active';
      localStorage.setItem(STORAGE_KEYS.SERVICES, JSON.stringify(list));
      addAuditLog(`Đã chuyển trạng thái dịch vụ ${item.title} sang ${item.status}`, 'admin');
    }
    return list;
  }

  // --- CRUD Appointments ---
  function getAppointments() {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.APPOINTMENTS) || '[]');
  }
  function saveAppointment(apt) {
    const list = getAppointments();
    const index = list.findIndex(a => a.id === apt.id);
    if (index >= 0) {
      list[index] = { ...list[index], ...apt };
    } else {
      list.unshift(apt);
    }
    localStorage.setItem(STORAGE_KEYS.APPOINTMENTS, JSON.stringify(list));
    addAuditLog(`Lịch hẹn ${apt.id} được ${index >= 0 ? 'cập nhật' : 'khởi tạo'} (${apt.status})`, 'appointment');
    return list;
  }
  function updateAppointmentStatus(id, newStatus, reason = '') {
    const list = getAppointments();
    const apt = list.find(a => a.id === id);
    if (apt) {
      apt.status = newStatus;
      if (newStatus === 'confirmed') apt.statusDisplay = 'Đã xác nhận';
      if (newStatus === 'cancelled') apt.statusDisplay = 'Đã hủy';
      if (newStatus === 'completed') apt.statusDisplay = 'Đã hoàn thành';
      if (reason) apt.statusNote = reason;
      localStorage.setItem(STORAGE_KEYS.APPOINTMENTS, JSON.stringify(list));
      addAuditLog(`Lịch hẹn ${id} chuyển trạng thái sang "${apt.statusDisplay}"`, 'counselor');
    }
    return list;
  }

  // --- Counselors & Resources & Users ---
  function getCounselors() {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.COUNSELORS) || '[]');
  }
  function getResources() {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.RESOURCES) || '[]');
  }
  function getUsers() {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.USERS) || '[]');
  }
  function saveUser(user) {
    const list = getUsers();
    const index = list.findIndex(u => u.id === user.id);
    if (index >= 0) {
      list[index] = { ...list[index], ...user };
    } else {
      list.unshift(user);
    }
    localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify(list));
    addAuditLog(`Quản trị viên đã cập nhật người dùng: ${user.name} (${user.role})`, 'admin');
    return list;
  }
  function toggleUserLock(id) {
    const list = getUsers();
    const user = list.find(u => u.id === id);
    if (user) {
      user.status = user.status === 'active' ? 'suspended' : 'active';
      localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify(list));
      addAuditLog(`Admin đã ${user.status === 'active' ? 'mở khóa' : 'tạm khóa'} tài khoản ${user.name}`, 'admin');
    }
    return list;
  }

  // --- Audit Logs ---
  function getAuditLogs() {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.AUDIT_LOGS) || '[]');
  }
  function addAuditLog(text, type = 'system') {
    const logs = getAuditLogs();
    const now = new Date();
    const timeStr = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
    logs.unshift({ time: timeStr, text, type });
    if (logs.length > 50) logs.pop();
    localStorage.setItem(STORAGE_KEYS.AUDIT_LOGS, JSON.stringify(logs));
  }

  // --- Current Active User (RBAC Session) ---
  function getCurrentUser() {
    const saved = localStorage.getItem(STORAGE_KEYS.CURRENT_USER);
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { }
    }
    return SEED_USERS[0]; // Default student
  }
  function setCurrentUser(roleOrUsername) {
    const users = getUsers();
    let found = users.find(u => u.role === roleOrUsername || u.username === roleOrUsername || u.code === roleOrUsername);
    if (!found) {
      if (roleOrUsername === 'guest') {
        found = SEED_USERS.find(u => u.role === 'guest');
      } else {
        found = users[0];
      }
    }
    localStorage.setItem(STORAGE_KEYS.CURRENT_USER, JSON.stringify(found));
    addAuditLog(`Đăng nhập phiên làm việc vai trò: ${found.roleName} (${found.name})`, 'auth');
    return found;
  }

  // Auto initialize immediately
  init();

  return {
    init,
    resetToDefault,
    getServices,
    saveService,
    deleteService,
    toggleServiceStatus,
    getAppointments,
    saveAppointment,
    updateAppointmentStatus,
    getCounselors,
    getResources,
    getUsers,
    saveUser,
    toggleUserLock,
    getAuditLogs,
    addAuditLog,
    getCurrentUser,
    setCurrentUser
  };
})();
