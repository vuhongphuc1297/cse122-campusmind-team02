/* ==========================================================================
   🌿 CAMPUSMIND — MAIN BOOTSTRAPPER & SYSTEM COORDINATOR
   BTL-02: Điều Phối Hỗ Trợ Sức Khỏe Tinh Thần Sinh Viên (CSE122)
   Khoa Công nghệ Thông tin — Trường Đại học Thủy Lợi (TLU)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize Lucide Icons across all rendered markup
  if (typeof lucide !== 'undefined' && typeof lucide.createIcons === 'function') {
    lucide.createIcons();
  }

  // 2. Log system startup banner
  console.log('%c🌿 CampusMind Wellbeing System%c — Team 02 · TLU CSE122', 
    'background: #2F6F5E; color: white; padding: 4px 8px; border-radius: 4px; font-weight: bold;',
    'color: #2F6F5E; font-weight: bold;');
});
