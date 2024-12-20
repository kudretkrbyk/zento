import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Main from "./Pages/Main";
import BlogDetail from "./Pages/BlogDetail";
import LogIn from "./Pages/LogIn";
import SignUp from "./Pages/SignUp";
import UserPage from "./Pages/UserPage";
import AdminUserPage from "./Pages/AdminUserPage";
import { AuthProvider } from "./context/AuthContext";
import PrivateRoute from "./Components/PrivateRoute";
import RoleBasedRoute from "./Components/RoleBasedRoute";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/logIn" element={<LogIn />} />
            <Route path="/signUp" element={<SignUp />} />
            <Route
              path="/blogs/:id"
              element={
                <PrivateRoute>
                  <BlogDetail />
                </PrivateRoute>
              }
            />
            <Route
              path="/user/:isim"
              element={
                <PrivateRoute>
                  <UserPage />
                </PrivateRoute>
              }
            />
            <Route
              path="/adminPage"
              element={
                <RoleBasedRoute allowedRoles={["admin"]}>
                  <AdminUserPage />
                </RoleBasedRoute>
              }
            />
          </Routes>
        </Layout>
      </Router>
    </AuthProvider>
  );
}

function Layout({ children }) {
  const location = useLocation();

  // Navbar ve Footer'ın görünmeyeceği rotalar
  const hiddenRoutes = ["/logIn", "/signUp"];

  const shouldHide = hiddenRoutes.includes(location.pathname);

  return (
    <div>
      {!shouldHide && <Navbar />}
      {children}
      {!shouldHide && <Footer />}
    </div>
  );
}

export default App;
