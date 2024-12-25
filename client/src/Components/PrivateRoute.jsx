import PropTypes from "prop-types";
import { useSelector } from "react-redux";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useSelector((state) => state.auth);

  if (loading) {
    return <div>Loading...</div>; // Yükleme ekranı göster
  }

  if (!user) {
    return <div>Lütfen giriş yapınız</div>; // Giriş yapılmadıysa logIn sayfasına yönlendir
  }

  return children; // Giriş yapıldıysa içeriği göster
};
// PropTypes ile children doğrulaması
PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired, // children bir React node olmalı
};
export default PrivateRoute;
