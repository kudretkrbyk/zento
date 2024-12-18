import Navbar from "./Components/Navbar";
import LetsConnect from "./Components/LetsConnect";
import TrendingTopics from "./Components/TrendingTopics";
import Footer from "./Components/Footer";
import BlogMain from "./Components/BlogMain";
import JoinToCommunity from "./Components/JoinToCommunity";

function App() {
  return (
    <div className="bg-[#fff4f5] w-full h-full">
      <Navbar></Navbar>
      <LetsConnect></LetsConnect>
      <TrendingTopics></TrendingTopics>
      <BlogMain></BlogMain> <JoinToCommunity></JoinToCommunity>
      <Footer></Footer>
    </div>
  );
}

export default App;
