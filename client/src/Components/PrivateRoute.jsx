import { useAuth } from "../context/AuthContext";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  if (loading) {
    return <div>Loading...</div>; // Yükleme ekranı göster
  }

  if (!user) {
    return <div>Lütfen giriş yapınız</div>; // Giriş yapılmadıysa logIn sayfasına yönlendir
  }

  return children; // Giriş yapıldıysa içeriği göster
};

export default PrivateRoute;
