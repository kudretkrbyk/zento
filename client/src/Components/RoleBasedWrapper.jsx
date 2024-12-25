import PropTypes from "prop-types";
import { useSelector } from "react-redux";
const RoleBasedWrapper = ({ children, allowedRoles }) => {
  const { user, loading } = useSelector((state) => state.auth);

  if (loading) {
    return <div>Loading...</div>; // Bekleme durumu
  }

  if (!user || !allowedRoles.includes(user.rol ? "admin" : "user")) {
    return <div>Yetkisiz eşirim</div>;
  }

  return children;
};
// PropTypes ile children doğrulaması
RoleBasedWrapper.propTypes = {
  children: PropTypes.node.isRequired, // children bir React node olmalı
  allowedRoles: PropTypes.node.isRequired, // children bir React node olmalı
};

export default RoleBasedWrapper;
