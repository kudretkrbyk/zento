import Navbar from "./Components/Navbar";
import LetsConnect from "./Components/LetsConnect";
import TrendingTopics from "./Components/TrendingTopics";
import Footer from "./Components/Footer";
import BlogMain from "./Components/BlogMain";

function App() {
  return (
    <div className="bg-[#fff4f5] w-full h-full">
      <Navbar></Navbar>
      <LetsConnect></LetsConnect>
      <TrendingTopics></TrendingTopics>
      <BlogMain></BlogMain>
      <Footer></Footer>
    </div>
  );
}

export default App;
