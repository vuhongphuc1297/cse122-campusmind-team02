/* ==========================================================================
   🌿 CAMPUSMIND — COMMON UI MODULES & FLOATING DEMO CONTROLLER
   BTL-02: Điều Phối Hỗ Trợ Sức Khỏe Tinh Thần Sinh Viên (CSE122)
   Trường Đại học Thủy Lợi (TLU)
   ========================================================================== */

const CampusCommon = (() => {
  // --- DYNAMIC PATH RESOLVER (Supports root index.html & pages/*.html) ---
  function getPaths() {
    const isInPages = window.location.pathname.replace(/\\/g, '/').includes('/pages/');
    return {
      root: isInPages ? '../' : './',
      pages: isInPages ? './' : 'pages/'
    };
  }

  function jumpToScreen(filename) {
    const p = getPaths();
    if (filename === 'index.html' || filename === 'showcase.html') {
      window.location.href = p.root + filename;
    } else {
      window.location.href = p.pages + filename;
    }
  }


  // Auto initialize on DOM ready
  document.addEventListener('DOMContentLoaded', () => {
    initLucideIcons();
    renderFloatingDemoToolbar();
    setupStateSimulator();
    setupKeyboardAccessibility();
    setupCrossTabSync();
  });

  // --- XSS PROTECTION HELPER (VP-02 Immunity) ---
  function escapeHTML(str) {
    if (str === null || str === undefined) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  // --- KEYBOARD ACCESSIBILITY (A11y Esc Key to close modal/drawer) ---
  function setupKeyboardAccessibility() {
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' || e.key === 'Esc') {
        const openOverlays = document.querySelectorAll('.modal-backdrop:not(.hidden), .drawer-backdrop:not(.hidden)');
        if (openOverlays.length > 0) {
          openOverlays.forEach(overlay => overlay.classList.add('hidden'));
          showToast('Đã đóng cửa sổ (phím Esc)', 'info');
        }
      }
    });
  }

  // --- REAL-TIME CROSS-TAB SYNC (Bonus +0.50đ) ---
  function setupCrossTabSync() {
    window.addEventListener('storage', (e) => {
      if (e.key && e.key.startsWith('campusmind_')) {
        // Automatically re-render active list if present on current page
        if (typeof renderAppointmentsList === 'function') renderAppointmentsList();
        if (typeof renderQueueList === 'function') renderQueueList();
        if (typeof renderAdminServicesTable === 'function') renderAdminServicesTable();
        if (typeof renderUsersTable === 'function') renderUsersTable();
        if (typeof renderServicesList === 'function') renderServicesList();
        if (typeof renderAuditLogs === 'function') renderAuditLogs();
        showToast('Dữ liệu đã được đồng bộ thời gian thực từ tab khác!', 'info');
      }
    });
  }

  // --- EXPORT DATA HELPER (Bonus / Live Mod D4) ---
  function exportToCSV(filename, rows) {
    if (!rows || !rows.length) {
      showToast('Không có dữ liệu để xuất', 'error');
      return;
    }
    const separator = ',';
    const keys = Object.keys(rows[0]);
    const csvContent =
      keys.join(separator) +
      '\n' +
      rows.map(row => {
        return keys.map(k => {
          let cell = row[k] === null || row[k] === undefined ? '' : row[k];
          cell = cell instanceof Date
            ? cell.toLocaleString()
            : cell.toString().replace(/"/g, '""');
          if (cell.search(/("|,|\n)/g) >= 0) {
            cell = `"${cell}"`;
          }
          return cell;
        }).join(separator);
      }).join('\n');

    const blob = new Blob(['\uFEFF' + csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.setAttribute('download', filename);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showToast(`Đã xuất tệp ${filename} thành công!`, 'success');
  }

  function initLucideIcons() {
    if (window.lucide && typeof window.lucide.createIcons === 'function') {
      window.lucide.createIcons();
    }
  }

  // --- HEADER BUILDER ---
  function renderHeader(activeKey = '') {
    const headerEl = document.getElementById('campusmind-header');
    if (!headerEl) return;
    const p = getPaths();

    const user = CampusAuth.getUser();
    const isGuest = user.role === 'guest';
    const isStudent = user.role === 'student';
    const isCounselor = user.role === 'counselor';
    const isAdmin = user.role === 'admin';

    let navHtml = '';

    if (isGuest) {
      navHtml = `
        <a href="${p.root}index.html" class="px-3 py-1.5 rounded-lg text-xs font-semibold ${activeKey === 'home' ? 'bg-sage-tint text-sage-deep' : 'hover:bg-sage-tint/40 text-ink/80'}">Trang chủ</a>
        <a href="${p.pages}visitor-service-directory.html" class="px-3 py-1.5 rounded-lg text-xs font-semibold ${activeKey === 'services' ? 'bg-sage-tint text-sage-deep' : 'hover:bg-sage-tint/40 text-ink/80'}">Dịch vụ & AI-1</a>
        <a href="${p.pages}visitor-resource-library.html" class="px-3 py-1.5 rounded-lg text-xs font-semibold ${activeKey === 'resources' ? 'bg-sage-tint text-sage-deep' : 'hover:bg-sage-tint/40 text-ink/80'}">Tài nguyên AI-2</a>
        <a href="${p.pages}visitor-counselor-detail.html" class="px-3 py-1.5 rounded-lg text-xs font-semibold ${activeKey === 'counselor' ? 'bg-sage-tint text-sage-deep' : 'hover:bg-sage-tint/40 text-ink/80'}">Chuyên viên</a>
      `;
    } else if (isStudent) {
      navHtml = `
        <a href="${p.pages}student-dashboard.html" class="px-3 py-1.5 rounded-lg text-xs font-semibold ${activeKey === 'dashboard' ? 'bg-sage-tint text-sage-deep' : 'hover:bg-sage-tint/40 text-ink/80'}">Bảng điều khiển</a>
        <a href="${p.pages}student-booking.html" class="px-3 py-1.5 rounded-lg text-xs font-semibold ${activeKey === 'booking' ? 'bg-sage-tint text-sage-deep' : 'hover:bg-sage-tint/40 text-ink/80'}">Đặt lịch hẹn</a>
        <a href="${p.pages}student-appointments.html" class="px-3 py-1.5 rounded-lg text-xs font-semibold ${activeKey === 'appointments' ? 'bg-sage-tint text-sage-deep' : 'hover:bg-sage-tint/40 text-ink/80'}">Lịch hẹn của tôi</a>
        <a href="visitor-service-directory.html" class="px-3 py-1.5 rounded-lg text-xs font-semibold ${activeKey === 'services' ? 'bg-sage-tint text-sage-deep' : 'hover:bg-sage-tint/40 text-ink/80'}">Danh mục dịch vụ</a>
        <a href="visitor-resource-library.html" class="px-3 py-1.5 rounded-lg text-xs font-semibold ${activeKey === 'resources' ? 'bg-sage-tint text-sage-deep' : 'hover:bg-sage-tint/40 text-ink/80'}">Thư viện bài tập</a>
      `;
    } else if (isCounselor) {
      navHtml = `
        <a href="${p.pages}counselor-appointment-queue.html" class="px-3 py-1.5 rounded-lg text-xs font-semibold ${activeKey === 'queue' ? 'bg-sage-tint text-sage-deep' : 'hover:bg-sage-tint/40 text-ink/80'}">Hàng chờ duyệt ca</a>
        <a href="${p.pages}counselor-schedule.html" class="px-3 py-1.5 rounded-lg text-xs font-semibold ${activeKey === 'schedule' ? 'bg-sage-tint text-sage-deep' : 'hover:bg-sage-tint/40 text-ink/80'}">Lịch làm việc tuần</a>
        <a href="${p.pages}counselor-session-note.html" class="px-3 py-1.5 rounded-lg text-xs font-semibold ${activeKey === 'note' ? 'bg-sage-tint text-sage-deep' : 'hover:bg-sage-tint/40 text-ink/80'}">Ghi chú & Trợ lý AI-3</a>
      `;
    } else if (isAdmin) {
      navHtml = `
        <a href="${p.pages}admin-dashboard.html" class="px-3 py-1.5 rounded-lg text-xs font-semibold ${activeKey === 'admin-dashboard' ? 'bg-sage-tint text-sage-deep' : 'hover:bg-sage-tint/40 text-ink/80'}">Bảng vận hành</a>
        <a href="${p.pages}admin-service-management.html" class="px-3 py-1.5 rounded-lg text-xs font-semibold ${activeKey === 'admin-services' ? 'bg-sage-tint text-sage-deep' : 'hover:bg-sage-tint/40 text-ink/80'}">Quản lý dịch vụ CRUD</a>
        <a href="${p.pages}admin-user-management.html" class="px-3 py-1.5 rounded-lg text-xs font-semibold ${activeKey === 'admin-users' ? 'bg-sage-tint text-sage-deep' : 'hover:bg-sage-tint/40 text-ink/80'}">Người dùng & Phân quyền</a>
      `;
    }

    // Role badge & user pill
    let userPillHtml = '';
    if (isGuest) {
      userPillHtml = `
        <a href="${p.pages}login.html" class="text-xs font-semibold text-ink/80 hover:text-sage-deep px-3 py-1.5">Đăng nhập</a>
        <a href="student-booking.html" class="bg-sage hover:bg-sage-deep text-white px-3.5 py-1.5 rounded-xl text-xs font-bold shadow-sm transition-all flex items-center gap-1.5">
          <i data-lucide="calendar-plus" class="w-3.5 h-3.5"></i>
          <span>Đặt lịch ngay</span>
        </a>
      `;
    } else {
      userPillHtml = `
        <a href="${p.pages}profile.html" class="flex items-center gap-2 pl-2 pr-3 py-1 rounded-full border border-card-border hover:border-sage bg-white transition-all shadow-sm">
          <img src="${user.avatar}" alt="${user.name}" class="w-6 h-6 rounded-full object-cover">
          <div class="text-left hidden sm:block">
            <span class="text-xs font-bold text-ink block leading-tight">${user.name}</span>
            <span class="text-[10px] text-sage font-medium">${user.roleName}</span>
          </div>
        </a>
      `;
    }

    headerEl.innerHTML = `
      <div class="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <!-- Logo Brand -->
        <a href="${p.root}index.html" class="flex items-center gap-3">
          <div class="w-9 h-9 rounded-xl bg-sage-deep text-white flex items-center justify-center shadow-sm">
            <i data-lucide="heart-handshake" class="w-5 h-5 text-emerald-300"></i>
          </div>
          <div>
            <span class="font-serif font-bold text-lg tracking-tight text-ink block leading-none">CampusMind</span>
            <span class="text-[10px] uppercase tracking-wider text-sage font-semibold">TLU Student Wellbeing</span>
          </div>
        </a>

        <!-- Desktop Navigation -->
        <nav class="hidden md:flex items-center space-x-1">
          ${navHtml}
        </nav>

        <!-- Right User Actions -->
        <div class="flex items-center gap-2">
          ${userPillHtml}
        </div>
      </div>
    `;

    initLucideIcons();
  }

  // --- CRISIS BANNER ---
  function renderEmergencyBanner() {
    const bannerEl = document.getElementById('crisis-banner');
    if (!bannerEl) return;

    bannerEl.innerHTML = `
      <div class="bg-amber-50 border-b border-amber-200 text-amber-900 px-4 py-2 text-xs">
        <div class="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div class="flex items-center gap-2">
            <span class="w-2 h-2 rounded-full bg-clay-alert animate-ping"></span>
            <span class="font-bold text-clay-alert">⚠️ Đang trong cơn khủng hoảng tâm lý cấp bách?</span>
            <span class="hidden sm:inline text-ink/70">Đừng đối mặt một mình, hãy kết nối ngay với chúng tôi.</span>
          </div>
          <div class="flex items-center gap-3 font-semibold text-xs">
            <a href="tel:19006012" class="hover:underline flex items-center gap-1 text-sage-deep font-bold">
              <i data-lucide="phone-call" class="w-3.5 h-3.5 text-sage"></i>
              Hotline 24/7: 1900 6012
            </a>
            <span class="text-amber-300">|</span>
            <span class="text-ink/80 flex items-center gap-1">
              <i data-lucide="map-pin" class="w-3.5 h-3.5 text-sage"></i>
              Phòng P.204 Nhà A1 (TLU)
            </span>
          </div>
        </div>
      </div>
    `;
    initLucideIcons();
  }

  // --- FOOTER BUILDER ---
  function renderFooter() {
    const footerEl = document.getElementById('campusmind-footer');
    if (!footerEl) return;
    const p = getPaths();

    footerEl.innerHTML = `
      <footer class="bg-white border-t border-card-border mt-16 text-xs text-ink/70">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div class="space-y-3 md:col-span-1">
            <div class="flex items-center gap-2">
              <div class="w-7 h-7 rounded-lg bg-sage-deep text-white flex items-center justify-center">
                <i data-lucide="heart-handshake" class="w-4 h-4 text-emerald-300"></i>
              </div>
              <span class="font-serif font-bold text-base text-ink">CampusMind</span>
            </div>
            <p class="text-[11px] leading-relaxed">
              Hệ thống điều phối hỗ trợ sức khỏe tinh thần sinh viên. Phát triển bởi Nhóm 02 · Học phần Phát triển ứng dụng Web cơ bản (CSE122).
            </p>
            <p class="text-[11px] font-semibold text-sage">
              Trường Đại học Thủy Lợi (TLU)
            </p>
          </div>

          <div>
            <h4 class="font-bold text-ink uppercase tracking-wider text-[11px] mb-3">Dịch vụ trọng tâm</h4>
            <ul class="space-y-2 text-[11px]">
              <li><a href="${p.pages}visitor-service-directory.html" class="hover:text-sage">Tư vấn tâm lý cá nhân 1-1</a></li>
              <li><a href="visitor-service-directory.html" class="hover:text-sage">Workshop điều hòa cảm xúc nhóm</a></li>
              <li><a href="visitor-service-directory.html" class="hover:text-sage">Cẩm nang vệ sinh giấc ngủ</a></li>
              <li><a href="${p.pages}student-booking.html" class="hover:text-sage">Đặt lịch tư vấn trực tuyến</a></li>
            </ul>
          </div>

          <div>
            <h4 class="font-bold text-ink uppercase tracking-wider text-[11px] mb-3">Trải nghiệm AI</h4>
            <ul class="space-y-2 text-[11px]">
              <li><a href="visitor-service-directory.html" class="hover:text-amber-ai flex items-center gap-1"><span>✦ AI-1 Support Navigator</span></a></li>
              <li><a href="${p.pages}visitor-resource-library.html" class="hover:text-amber-ai flex items-center gap-1"><span>✦ AI-2 Resource Recommender</span></a></li>
              <li><a href="${p.pages}counselor-session-note.html" class="hover:text-amber-ai flex items-center gap-1"><span>✦ AI-3 Counselor Summary</span></a></li>
              <li><a href="${p.root}showcase.html" class="hover:text-sage font-semibold">Bảng kiểm kê 24 Mockups</a></li>
            </ul>
          </div>

          <div>
            <h4 class="font-bold text-ink uppercase tracking-wider text-[11px] mb-3">Liên hệ hỗ trợ</h4>
            <p class="text-[11px] mb-1">📍 Phòng Tham vấn: P.204 Nhà A1, 175 Tây Sơn, Đống Đa, Hà Nội</p>
            <p class="text-[11px] mb-1">📞 Hotline 24/7: 1900 6012 | 024.3852.204</p>
            <p class="text-[11px]">📧 Email: wellbeing@tlu.edu.vn</p>
          </div>
        </div>

        <div class="border-t border-card-border/60 py-4 text-center text-[11px] text-ink/50 bg-paper/50">
          CampusMind © 2026 · Khoa Công nghệ Thông tin · BTL-02 CSE122 Web Application
        </div>
      </footer>
    `;
    initLucideIcons();
  }

  // --- FLOATING DEMO CONTROLLER TOOLBAR ---
  function renderFloatingDemoToolbar() {
    let toolbarEl = document.getElementById('campusmind-demo-dock');
    if (toolbarEl) return;
    const p = getPaths();

    toolbarEl = document.createElement('div');
    toolbarEl.id = 'campusmind-demo-dock';
    toolbarEl.className = 'demo-toolbar';

    const currentUser = CampusAuth.getUser();
    const currentFile = CampusAuth.getCurrentFileName();

    toolbarEl.innerHTML = `
      <div class="flex items-center gap-1.5 font-bold text-amber-300">
        <i data-lucide="sliders-horizontal" class="w-3.5 h-3.5"></i>
        <span class="hidden sm:inline">BTL-02 DEMO:</span>
      </div>

      <!-- Quick Role Switch -->
      <div class="flex items-center gap-1">
        <label for="demo-role-select" class="text-white/70 hidden md:inline">Đóng vai:</label>
        <select id="demo-role-select" onchange="CampusAuth.switchRole(this.value)">
          <option value="guest" ${currentUser.role === 'guest' ? 'selected' : ''}>👤 Khách (Guest)</option>
          <option value="student" ${currentUser.role === 'student' ? 'selected' : ''}>🎓 Sinh viên (Vũ Hồng Phúc)</option>
          <option value="counselor" ${currentUser.role === 'counselor' ? 'selected' : ''}>🧑‍⚕️ Chuyên viên (TS. Minh Hà)</option>
          <option value="admin" ${currentUser.role === 'admin' ? 'selected' : ''}>🛡️ Quản trị viên (Admin Đức)</option>
        </select>
      </div>

      <!-- Quick Screen Jump -->
      <div class="flex items-center gap-1 border-l border-white/20 pl-2">
        <label for="demo-screen-select" class="text-white/70 hidden lg:inline">Màn hình:</label>
        <select id="demo-screen-select" onchange="CampusCommon.jumpToScreen(this.value)">
          <optgroup label="Khách & Giới thiệu">
            <option value="index.html" ${currentFile === 'index.html' ? 'selected' : ''}>01. Trang chủ giới thiệu</option>
            <option value="visitor-service-directory.html" ${currentFile === 'visitor-service-directory.html' ? 'selected' : ''}>02. Danh bạ dịch vụ & AI-1</option>
            <option value="visitor-resource-library.html" ${currentFile === 'visitor-resource-library.html' ? 'selected' : ''}>08. Thư viện tài nguyên & AI-2</option>
            <option value="visitor-counselor-detail.html" ${currentFile === 'visitor-counselor-detail.html' ? 'selected' : ''}>09. Hồ sơ TS. Nguyễn Minh Hà</option>
          </optgroup>
          <optgroup label="Sinh viên">
            <option value="student-dashboard.html" ${currentFile === 'student-dashboard.html' ? 'selected' : ''}>10. Bảng điều khiển sinh viên</option>
            <option value="student-booking.html" ${currentFile === 'student-booking.html' ? 'selected' : ''}>12. Đặt lịch tư vấn (Wizard 4 bước)</option>
            <option value="student-appointments.html" ${currentFile === 'student-appointments.html' ? 'selected' : ''}>14. Quản lý lịch hẹn & Drawer</option>
          </optgroup>
          <optgroup label="Chuyên viên">
            <option value="counselor-appointment-queue.html" ${currentFile === 'counselor-appointment-queue.html' ? 'selected' : ''}>19. Hàng chờ duyệt ca tư vấn</option>
            <option value="counselor-schedule.html" ${currentFile === 'counselor-schedule.html' ? 'selected' : ''}>18. Quản lý lịch làm việc</option>
            <option value="counselor-session-note.html" ${currentFile === 'counselor-session-note.html' ? 'selected' : ''}>20. Ghi chú ca tư vấn & Trợ lý AI-3</option>
          </optgroup>
          <optgroup label="Quản trị viên & Phân quyền">
            <option value="admin-dashboard.html" ${currentFile === 'admin-dashboard.html' ? 'selected' : ''}>21. Bảng vận hành toàn trường</option>
            <option value="admin-service-management.html" ${currentFile === 'admin-service-management.html' ? 'selected' : ''}>22. CRUD Quản lý dịch vụ</option>
            <option value="admin-user-management.html" ${currentFile === 'admin-user-management.html' ? 'selected' : ''}>23. Quản lý người dùng & RBAC</option>
          </optgroup>
          <optgroup label="Hệ thống & Lỗi">
            <option value="login.html" ${currentFile === 'login.html' ? 'selected' : ''}>24. Đăng nhập & 1-Click Role Switch</option>
            <option value="register.html" ${currentFile === 'register.html' ? 'selected' : ''}>Đăng ký tài khoản</option>
            <option value="profile.html" ${currentFile === 'profile.html' ? 'selected' : ''}>Hồ sơ cá nhân & Cài đặt</option>
            <option value="403.html" ${currentFile === '403.html' ? 'selected' : ''}>Trang lỗi 403 Forbidden</option>
            <option value="404.html" ${currentFile === '404.html' ? 'selected' : ''}>Trang lỗi 404 Not Found</option>
            <option value="showcase.html" ${currentFile === 'showcase.html' ? 'selected' : ''}>Showcase Hub (3 Viewports)</option>
          </optgroup>
        </select>
      </div>

      <!-- Reset Data Button -->
      <button onclick="CampusCommon.resetDataWithConfirm()" title="Khôi phục dữ liệu mẫu ban đầu" class="hover:text-amber-300 text-white/80 p-1 transition-colors">
        <i data-lucide="rotate-ccw" class="w-3.5 h-3.5"></i>
      </button>

      <!-- Showcase Link -->
      <a href="${p.root}showcase.html" title="Mở Showcase Hub kiểm thử Responsive" class="hover:text-emerald-300 text-white/90 p-1 transition-colors flex items-center gap-1 font-semibold">
        <i data-lucide="layout-grid" class="w-3.5 h-3.5"></i>
        <span class="hidden xl:inline">Showcase</span>
      </a>

      <!-- Collapse Toggle -->
      <button onclick="document.getElementById('campusmind-demo-dock').classList.toggle('collapsed')" class="hover:text-white text-white/60 p-0.5 ml-1">
        <i data-lucide="chevrons-down" class="w-3.5 h-3.5"></i>
      </button>
    `;

    document.body.appendChild(toolbarEl);
    initLucideIcons();
  }

  function resetDataWithConfirm() {
    if (confirm('Bạn có muốn khôi phục lại toàn bộ cơ sở dữ liệu giả lập về trạng thái mặc định (12 dịch vụ, 6 lịch hẹn, 4 chuyên viên, 12 tài nguyên)?')) {
      CampusData.resetToDefault();
      showToast('Đã khôi phục dữ liệu gốc thành công!', 'success');
      setTimeout(() => window.location.reload(), 400);
    }
  }

  // --- STATE SIMULATOR (Loading Skeleton, Empty, Error) ---
  function setupStateSimulator() {
    // Allows toggling mock state via query parameter or test controls
    const urlParams = new URLSearchParams(window.location.search);
    const mockState = urlParams.get('state'); // 'loading', 'empty', 'error'
    if (mockState) {
      setTimeout(() => applyMockState(mockState), 100);
    }
  }

  function applyMockState(state) {
    const mainEl = document.querySelector('main');
    if (!mainEl) return;

    if (state === 'loading') {
      showToast('Đang mô phỏng trạng thái tải dữ liệu (Skeleton Loading)', 'info');
      const containers = mainEl.querySelectorAll('.interactive-card, tbody, .grid');
      containers.forEach(c => {
        c.classList.add('skeleton');
        c.style.minHeight = '140px';
      });
    } else if (state === 'empty') {
      showToast('Đang mô phỏng trạng thái rỗng (Empty State)', 'info');
      const dataContainers = mainEl.querySelectorAll('tbody, #services-grid, #appointments-list, #resources-grid');
      dataContainers.forEach(c => {
        c.innerHTML = `
          <div class="col-span-full py-16 text-center bg-white rounded-2xl border border-card-border p-8">
            <div class="w-16 h-16 rounded-full bg-paper flex items-center justify-center mx-auto mb-4 text-ink/40">
              <i data-lucide="inbox" class="w-8 h-8"></i>
            </div>
            <h3 class="font-serif font-bold text-lg text-ink mb-1">Chưa có dữ liệu nào được ghi nhận</h3>
            <p class="text-xs text-ink/60 max-w-sm mx-auto mb-5">Danh sách hiện đang trống hoặc không tìm thấy kết quả phù hợp với bộ lọc hiện tại.</p>
            <a href="javascript:window.location.reload()" class="btn-primary text-xs">
              <i data-lucide="refresh-cw" class="w-3.5 h-3.5"></i>
              <span>Tải lại dữ liệu</span>
            </a>
          </div>
        `;
      });
      initLucideIcons();
    } else if (state === 'error') {
      showToast('Đang mô phỏng trạng thái lỗi mạng (Error State)', 'error');
      const errorBox = document.createElement('div');
      errorBox.className = 'max-w-6xl mx-auto px-4 my-6';
      errorBox.innerHTML = `
        <div class="bg-red-50 border border-clay-alert/30 rounded-2xl p-6 text-center text-clay-alert">
          <div class="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mx-auto mb-3">
            <i data-lucide="wifi-off" class="w-6 h-6 text-clay-alert"></i>
          </div>
          <h4 class="font-serif font-bold text-base mb-1">Không thể kết nối đến máy chủ dữ liệu</h4>
          <p class="text-xs text-ink/70 mb-4">Đã xảy ra gián đoạn đường truyền hoặc phiên làm việc của bạn đã hết hạn. Vui lòng thử lại.</p>
          <button onclick="window.location.reload()" class="btn-secondary text-xs">
            <i data-lucide="rotate-cw" class="w-3.5 h-3.5"></i>
            <span>Thử kết nối lại ngay</span>
          </button>
        </div>
      `;
      mainEl.prepend(errorBox);
      initLucideIcons();
    }
  }

  // --- TOAST NOTIFICATIONS ---
  function showToast(message, type = 'info') {
    let container = document.getElementById('toast-container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'toast-container';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = `toast-item toast-${type}`;

    let iconName = 'info';
    if (type === 'success') iconName = 'check-circle-2';
    else if (type === 'error') iconName = 'alert-triangle';

    toast.innerHTML = `
      <i data-lucide="${iconName}" class="w-4 h-4 shrink-0 text-sage"></i>
      <div class="flex-1 text-xs leading-normal">${message}</div>
      <button onclick="this.parentElement.remove()" class="text-ink/40 hover:text-ink">
        <i data-lucide="x" class="w-3.5 h-3.5"></i>
      </button>
    `;

    container.appendChild(toast);
    initLucideIcons();

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      setTimeout(() => toast.remove(), 300);
    }, 3500);
  }

  return {
    getPaths,
    jumpToScreen,
    renderHeader,
    renderEmergencyBanner,
    renderFooter,
    renderFloatingDemoToolbar,
    showToast,
    resetDataWithConfirm,
    applyMockState,
    escapeHTML,
    exportToCSV
  };
})();
