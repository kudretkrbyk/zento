import LetsConnect from "../Components/LetsConnect";
import TrendingTopics from "../Components/TrendingTopics";
import BlogMain from "../Components/BlogMain";
import JoinToCommunity from "../Components/JoinToCommunity";

export default function Main() {
  return (
    <div>
      <LetsConnect></LetsConnect>
      <TrendingTopics></TrendingTopics>
      <BlogMain></BlogMain>
      <JoinToCommunity></JoinToCommunity>
    </div>
  );
}
