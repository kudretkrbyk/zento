import { IoFlashSharp } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoFacebook } from "react-icons/io5";
import { BiWorld } from "react-icons/bi";

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
          <div className="flex items-center justify-center gap-2">
            <FaXTwitter className="size-5" />
            Twitter
          </div>
          <div className="flex items-center justify-center gap-2">
            <IoLogoFacebook className="text-blue-500 size-5" />
            Facebook
          </div>
          <div className="flex items-center justify-center gap-2">
            <BiWorld className="size-5" />
            Website
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start justify-center gap-5">
        <div className="flex items-center justify-start gap-4">
          {" "}
          <IoFlashSharp className="size-5 text-[#ff6480]" />
          <span>Tag Cloud</span>
        </div>
        <div className="w-full grid grid-cols-3 gap-2">
          <div className="w-full flex items-center gap-5 hover:gap-2 duration-300 group">
            <div className="bg-yellow-500 rounded-full w-3 h-3 group-hover:w-6 duration-300"></div>
            <span>Health</span>
          </div>{" "}
          <div className=" w-full flex items-center gap-5 hover:gap-2 duration-300 group">
            <div className="bg-yellow-500 rounded-full w-3 h-3 group-hover:w-6 duration-300"></div>
            <span>Inspiration</span>
          </div>{" "}
          <div className="flex items-center gap-5 hover:gap-2 duration-300 group">
            <div className="bg-yellow-500 rounded-full w-3 h-3 group-hover:w-6 duration-300"></div>
            <span>Lifestyle</span>
          </div>{" "}
          <div className="flex items-center gap-5 hover:gap-2 duration-300 group">
            <div className="bg-yellow-500 rounded-full w-3 h-3 group-hover:w-6 duration-300"></div>
            <span>Music</span>
          </div>{" "}
          <div className="flex items-center gap-5 hover:gap-2 duration-300 group">
            <div className="bg-yellow-500 rounded-full w-3 h-3 group-hover:w-6 duration-300"></div>
            <span>Technology</span>
          </div>{" "}
          <div className="flex items-center gap-5 hover:gap-2 duration-300 group">
            <div className="bg-yellow-500 rounded-full w-3 h-3 group-hover:w-6 duration-300"></div>
            <span>Travel</span>
          </div>
          <div className="flex items-center gap-5 hover:gap-2 duration-300 group">
            <div className="bg-yellow-500 rounded-full w-3 h-3 group-hover:w-6 duration-300"></div>
            <span>Video</span>
          </div>
        </div>
      </div>
    </div>
  );
}
