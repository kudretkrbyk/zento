import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const RoleBasedRoute = ({ children, allowedRoles }) => {
  const { user, loading } = useAuth();
  console.log("RoleBasedRoute user:", user);

  if (loading) {
    return <div>Loading...</div>; // Bekleme durumu
  }

  if (!user || !allowedRoles.includes(user.rol ? "admin" : "user")) {
    return <Navigate to="/logIn" replace />;
  }

  return children;
};

export default RoleBasedRoute;
