// Mock authService
export const authService = {
  getAll: async () => {
    return Promise.resolve({ success: true, data: [] });
  },
  getById: async (id) => {
    return Promise.resolve({ success: true, data: {} });
  },
  create: async (data) => {
    return Promise.resolve({ success: true, data: { ...data, id: Date.now() } });
  },
  update: async (id, data) => {
    return Promise.resolve({ success: true, data: { id, ...data } });
  },
  delete: async (id) => {
    return Promise.resolve({ success: true, message: "Deleted successfully" });
  }
};

export default authService;
