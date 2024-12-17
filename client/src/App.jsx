import Navbar from "./Components/Navbar";
import AboutMe from "./Components/AboutMe";
import TrendingTopics from "./Components/TrendingTopics";
import Footer from "./Components/Footer";
import BlogList from "./Components/BlogList";

function App() {
  return (
    <div className="bg-[#fff4f5] w-full h-full">
      <Navbar></Navbar>
      <AboutMe></AboutMe>
      <TrendingTopics></TrendingTopics>
      <Footer></Footer>
      <BlogList></BlogList>
    </div>
  );
}

export default App;
