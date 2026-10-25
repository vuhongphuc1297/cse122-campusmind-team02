/* ==========================================================================
   🌿 CAMPUSMIND — API & STORAGE ADAPTER
   BTL-02: Điều Phối Hỗ Trợ Sức Khỏe Tinh Thần Sinh Viên (CSE122)
   Khoa Công nghệ Thông tin — Trường Đại học Thủy Lợi (TLU)
   ========================================================================== */

const CampusAPI = (() => {
  // Service endpoints
  const getServices = () => CampusData.getServices();
  const getServiceById = (id) => CampusData.getServices().find(s => s.id === id);
  const saveService = (svc) => CampusData.saveService(svc);
  const deleteService = (id) => CampusData.deleteService(id);
  const toggleServiceArchive = (id) => CampusData.toggleServiceStatus(id);

  // Counselor endpoints
  const getCounselors = () => CampusData.getCounselors();
  const getCounselorById = (id) => CampusData.getCounselors().find(c => c.id === id);

  // Appointment endpoints
  const getAppointments = () => CampusData.getAppointments();
  const getAppointmentById = (id) => CampusData.getAppointments().find(a => a.id === id);
  const createAppointment = (apt) => CampusData.saveAppointment(apt);
  const updateAppointmentStatus = (id, status, extra) => CampusData.updateAppointmentStatus(id, status, extra);

  // Resource endpoints
  const getResources = () => CampusData.getResources();
  const getResourceById = (id) => CampusData.getResources().find(r => r.id === id);

  // User endpoints
  const getUsers = () => CampusData.getUsers();
  const getUserById = (id) => CampusData.getUsers().find(u => u.id === id);
  const updateUserRole = (id, role) => CampusData.updateUserRole(id, role);
  const toggleUserLock = (id) => CampusData.toggleUserLock(id);

  // AI recommendations & screening
  const runNavigatorQuiz = (answers) => CampusAI.runSupportNavigator(answers);
  const getResourceRecommendations = (text, category) => CampusAI.recommendResources(text, category);
  const generateSessionSummary = (noteText, counselorName) => CampusAI.summarizeSessionNote(noteText, counselorName);

  return {
    getServices,
    getServiceById,
    saveService,
    deleteService,
    toggleServiceArchive,
    getCounselors,
    getCounselorById,
    getAppointments,
    getAppointmentById,
    createAppointment,
    updateAppointmentStatus,
    getResources,
    getResourceById,
    getUsers,
    getUserById,
    updateUserRole,
    toggleUserLock,
    runNavigatorQuiz,
    getResourceRecommendations,
    generateSessionSummary
  };
})();
