import api from "../../services/api";

// API URL'yi merkezi bir değişkende tut
const API_URL = "users";

// Tüm kullanıcıları getir
export const getAllUsers = async () => {
  const response = await api.get(API_URL);
  return response.data;
};

// Belirli bir kullanıcıyı getir
export const getUserById = async (id) => {
  const response = await api.get(`${API_URL}/${id}`);
  return response.data;
};

// Kullanıcıyı sil
export const deleteUserById = async (id) => {
  const response = await api.delete(`${API_URL}/${id}`);
  return response.data;
};

// Kullanıcıyı güncelle
export const updateUserById = async (id, userData) => {
  const response = await api.patch(`${API_URL}/${id}`, userData);
  return response.data;
};

// Yeni kullanıcı oluştur (signUp)
export const signUpUser = async (userData) => {
  const response = await api.post("/register", userData);
  return response.data;
};
