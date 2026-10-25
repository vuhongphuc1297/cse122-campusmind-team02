/* ==========================================================================
   🔑 CAMPUSMIND — RBAC (ROLE-BASED ACCESS CONTROL) & SESSION CONTROLLER
   BTL-02: Điều Phối Hỗ Trợ Sức Khỏe Tinh Thần Sinh Viên (CSE122)
   Trường Đại học Thủy Lợi (TLU)
   4 Vai trò: Khách (Guest), Sinh viên (Student), Chuyên viên (Counselor), Quản trị viên (Admin)
   ========================================================================== */

const CampusAuth = (() => {

  // Role permissions map
  const PERMISSIONS = {
    guest: [
      'index.html',
      'visitor-service-directory.html',
      'visitor-resource-library.html',
      'visitor-counselor-detail.html',
      'login.html',
      'register.html',
      'showcase.html',
      '404.html',
      '403.html'
    ],
    student: [
      'index.html',
      'visitor-service-directory.html',
      'visitor-resource-library.html',
      'visitor-counselor-detail.html',
      'student-dashboard.html',
      'student-booking.html',
      'student-appointments.html',
      'profile.html',
      'login.html',
      'register.html',
      'showcase.html',
      '404.html',
      '403.html'
    ],
    counselor: [
      'index.html',
      'visitor-service-directory.html',
      'visitor-resource-library.html',
      'visitor-counselor-detail.html',
      'counselor-schedule.html',
      'counselor-appointment-queue.html',
      'counselor-session-note.html',
      'profile.html',
      'login.html',
      'register.html',
      'showcase.html',
      '404.html',
      '403.html'
    ],
    admin: [
      // Admin has access to all pages
      '*'
    ]
  };

  // Get current logged-in user
  function getUser() {
    return CampusData.getCurrentUser();
  }

  // Switch role with 1 click
  function switchRole(role, redirectTarget = null) {
    const newUser = CampusData.setCurrentUser(role);
    CampusCommon.showToast(`Đã chuyển sang vai trò: ${newUser.roleName} (${newUser.name})`, 'info');

    const isInPages = window.location.pathname.replace(/\\/g, '/').includes('/pages/');
    const p = {
      root: isInPages ? '../' : './',
      pages: isInPages ? './' : 'pages/'
    };

    // Auto redirect logic
    if (redirectTarget) {
      window.location.href = redirectTarget;
      return;
    }

    // Default landing per role
    let target = p.root + 'index.html';
    if (role === 'student') target = p.pages + 'student-dashboard.html';
    else if (role === 'counselor') target = p.pages + 'counselor-appointment-queue.html';
    else if (role === 'admin') target = p.pages + 'admin-dashboard.html';
    else if (role === 'guest') target = p.pages + 'visitor-service-directory.html';

    // If currently on page not allowed for new role, redirect
    const currentFile = getCurrentFileName();
    if (!canAccess(role, currentFile)) {
      window.location.href = target;
    } else {
      window.location.reload();
    }
  }

  function getCurrentFileName() {
    const path = window.location.pathname;
    const file = path.substring(path.lastIndexOf('/') + 1) || 'index.html';
    return file;
  }

  function canAccess(role, fileName) {
    if (role === 'admin') return true;
    const allowed = PERMISSIONS[role] || [];
    return allowed.includes(fileName);
  }

  // Check RBAC guard on page load
  function enforceGuard() {
    const user = getUser();
    const currentFile = getCurrentFileName();

    // Exceptions that anyone can visit
    if (currentFile === 'login.html' || currentFile === 'register.html' || currentFile === '404.html' || currentFile === '403.html' || currentFile === 'showcase.html') {
      return true;
    }

    if (!canAccess(user.role, currentFile)) {
      console.warn(`[RBAC] Access denied for role '${user.role}' to '${currentFile}'. Redirecting to 403.html.`);
      const isInPages = window.location.pathname.replace(/\\/g, '/').includes('/pages/');
      const prefix = isInPages ? '' : 'pages/';
      window.location.href = prefix + '403.html';
      return false;
    }
    return true;
  }

  return {
    getUser,
    switchRole,
    canAccess,
    enforceGuard,
    getCurrentFileName
  };
})();
