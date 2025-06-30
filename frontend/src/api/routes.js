// Centralized API endpoints for easy management
const API_BASE = process.env.REACT_APP_BACKEND_URL;

const routes = {
  createNote: () => `${API_BASE}/notes/create`,
  getAllNotes: () => `${API_BASE}/notes/get-all`,
  connectCall: () => `${API_BASE}/call/connect`,
};

export default routes;
