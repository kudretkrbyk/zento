import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Main from "./Components/Pages/Main";
import BlogDetail from "./Pages/BlogDetail";

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/blogs/:id" element={<BlogDetail />} />
      </Routes>
      <Footer></Footer>
    </Router>
  );
}

export default App;
