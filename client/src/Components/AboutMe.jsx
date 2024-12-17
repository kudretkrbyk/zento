import { IoFlashSharp } from "react-icons/io5";

export default function AboutMe() {
  return (
    <div className="w-full flex flex-col items-start justify-center gap-10  ">
      <div className="flex items-center justify-center ">
        <IoFlashSharp className="size-5 text-[#ff6480]" />
        <span> About Me</span>
      </div>
      <div className="w-full bg-white rounded flex flex-col p-5 gap-10 ">
        <div className="flex items-center justify-start gap-5 ">
          <img
            className="rounded-full w-24 h-24"
            src="https://themes.estudiopatagon.com/wordpress/zento-personal/wp-content/uploads/2024/03/about-personal.webp"
          ></img>
          <div className="flex flex-col">
            <span> Jonathan Doe </span>
            <span>Founder & Editor</span>
          </div>
        </div>
        <div>
          Hello! My name is Jonathan Doe!, Actively writing articles for this
          website. I really like tutorials and illustrations, so stay alert for
          my next tutorials.
        </div>
        <div className="flex items-center justify-center gap-10">
          <div>Twitter</div>
          <div>Facebook</div>
          <div>Website</div>
        </div>
      </div>
    </div>
  );
}
