import Navbar from "./Components/Navbar";
import AboutMe from "./Components/AboutMe";
import TrendingTopics from "./Components/TrendingTopics";

function App() {
  return (
    <div className="bg-[#fff4f5] w-full h-full">
      <Navbar></Navbar>
      <AboutMe></AboutMe>
      <TrendingTopics></TrendingTopics>
    </div>
  );
}

export default App;
