import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api", // Backend API URL
  withCredentials: true, // Çerez tabanlı oturum yönetimi
});

// Hata yönetimi
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API Error:", error.response?.data?.message || error.message);
    return Promise.reject(error);
  }
);

export default api;
