import AboutMe from "./AboutMe";
import BlogList from "./BlogList";

export default function BlogMain() {
  return (
    <div className="w-full flex  items-start justify-center gap-10 p-24">
      <div className="w-4/12">
        {" "}
        <AboutMe></AboutMe>
      </div>
      <div className="w-8/12">
        {" "}
        <BlogList></BlogList>
      </div>
    </div>
  );
}
