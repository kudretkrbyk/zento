import { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Kullanıcı bilgileri
  const [loading, setLoading] = useState(true); // Yükleme durumu

  // Başlangıçta token kontrolü yap
  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/auth", {
          withCredentials: true,
        });
        console.log("AuthContext - response.data.user:", response.data.user);
        setUser(response.data.user); // Kullanıcı bilgilerini ayarlamaya çalışıyoruz
      } catch (error) {
        console.error("AuthContext - Hata:", error);
        setUser(null); // Kullanıcı yoksa null ayarla
      } finally {
        setLoading(false); // Yükleme tamamlandı
      }
    };
    checkAuthStatus();
    console.log("AuthContext - user state:", user); // setUser sonrası user kontrolü
  }, []);

  // Kullanıcı giriş fonksiyonu
  const logIn = async (email, password) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/login",
        { email, password },
        { withCredentials: true } // HttpOnly cookie ayarı
      );
      setUser(response.data.user); // Kullanıcı bilgilerini güncelle
      return true;
    } catch (error) {
      console.error("Login failed:", error);
      return false;
    }
  };

  // Kullanıcı çıkış fonksiyonu
  const logOut = async () => {
    try {
      await axios.post(
        "http://localhost:5000/api/logout",
        {},
        {
          withCredentials: true,
        }
      );
      setUser(null); // Kullanıcıyı kaldır
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, setUser, logIn, logOut, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook: AuthContext'i kullanımı kolaylaştırır
export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthContext;
