import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const PrivateRoute = ({ children }) => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/logIn" />; // Giriş yapılmadıysa logIn sayfasına yönlendir
  }

  return children; // Giriş yapıldıysa içeriği göster
};

export default PrivateRoute;
