import api from "../../services/api";

// Kullanıcı giriş işlemi
export const logInAPI = async (email, password) => {
  const response = await api.post("/login", { email, password });
  return response.data; // API'den dönen kullanıcı bilgisi
};

// Kullanıcı çıkış işlemi
export const logOutAPI = async () => {
  await api.post("/logout");
};

// Kullanıcı bilgilerini kontrol et
export const getAuthStatusAPI = async () => {
  const response = await api.get("/auth");
  return response.data; // Kullanıcı bilgisi
};
