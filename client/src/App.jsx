import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Main from "./Components/Pages/Main";
import BlogDetail from "./Pages/BlogDetail";
import LogIn from "./Components/Pages/LogIn";
import SignUp from "./Components/Pages/SignUp";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/logIn" element={<LogIn />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/blogs/:id" element={<BlogDetail />} />
        </Routes>
      </Layout>
    </Router>
  );
}

function Layout({ children }) {
  const location = useLocation();

  // Navbar ve Footer'ın görünmeyeceği rotalar
  const hiddenRoutes = ["/logIn", "/signUp"];

  const shouldHide = hiddenRoutes.includes(location.pathname);

  return (
    <>
      {!shouldHide && <Navbar />}
      {children}
      {!shouldHide && <Footer />}
    </>
  );
}

export default App;
