import PropTypes from "prop-types";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./app/store"; // Redux Store
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Main from "./Pages/Main";
import BlogDetail from "./Pages/BlogDetail";
import LogIn from "./Pages/LogIn";
import SignUp from "./Pages/SignUp";
import UserPage from "./Pages/UserPage";
import AdminUserPage from "./Pages/AdminUserPage";

import PrivateRoute from "./Components/PrivateRoute";

import RoleBasedWrapper from "./Components/RoleBasedWrapper";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Layout>
          <Routes>
            <Route path="/*" element={<Main />} />
            <Route path="/Home" element={<Main />} />
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
              path="/admin"
              element={
                <RoleBasedWrapper allowedRoles={["admin"]}>
                  <AdminUserPage />
                </RoleBasedWrapper>
              }
            />
          </Routes>
        </Layout>
      </Router>
    </Provider>
  );
}

// Layout bileşeni
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

// PropTypes ile children doğrulaması
Layout.propTypes = {
  children: PropTypes.node.isRequired, // children bir React node olmalı
};

export default App;
