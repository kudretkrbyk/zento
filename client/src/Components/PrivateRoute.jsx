import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  if (loading) {
    return <div>Loading...</div>; // Yükleme ekranı göster
  }

  if (!user) {
    return <Navigate to="/logIn" />; // Giriş yapılmadıysa logIn sayfasına yönlendir
  }

  return children; // Giriş yapıldıysa içeriği göster
};

export default PrivateRoute;
