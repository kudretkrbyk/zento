import Navbar from "./Components/Navbar";
import AboutMe from "./Components/AboutMe";
import TrendingTopics from "./Components/TrendingTopics";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="bg-[#fff4f5] w-full h-full">
      <Navbar></Navbar>
      <AboutMe></AboutMe>
      <TrendingTopics></TrendingTopics>
      <Footer></Footer>
    </div>
  );
}

export default App;
