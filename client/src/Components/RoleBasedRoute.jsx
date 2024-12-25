import { Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const RoleBasedRoute = ({ children, allowedRoles }) => {
  const dispatch = useDispatch();
  const { user, loading, error } = useSelector((state) => state.auth);

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
