import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const RoleBasedWrapper = ({
  children,
  allowedRoles,
  redirectTo = "/logIn",
}) => {
  const { user, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>; // Bekleme durumu
  }

  if (!user || !allowedRoles.includes(user.rol ? "admin" : "user")) {
    return <Navigate to={redirectTo} replace />;
  }

  return children;
};

export default RoleBasedWrapper;
