import { useNavigate } from "react-router-dom"; // Yönlendirme için import
import { CiSearch } from "react-icons/ci";
import { TiThMenuOutline } from "react-icons/ti";

export default function Navbar() {
  const navigate = useNavigate(); // Yönlendirme hook'u
  const handleLogInLink = () => {
    navigate("/logIn");
  };
  return (
    <div className="w-full p-10">
      <div className="w-full flex items-center justify-between bg-white rounded-full h-24 shadow-l border overflow-hidden px-10">
        <div className="flex items-center justify-center gap-2">
          <div>
            <CiSearch className="size-5" />
          </div>
          <div>Quick Search...</div>
        </div>
        <div className="w-44 h-24 bg-contain bg-no-repeat bg-center bg-[url(https://themes.estudiopatagon.com/wordpress/zento-personal/wp-content/uploads/2024/03/logo-zento-personal-1.png)] "></div>
        <div className="flex items-center justify-center gap-2">
          <div>
            <button className=" p-2 px-4 ">Subscribe</button>
          </div>
          <div>
            <button onClick={handleLogInLink} className=" p-2 px-4 ">
              Log-In
            </button>
          </div>

          <div>
            <TiThMenuOutline className="size-5" />
          </div>
        </div>
      </div>
    </div>
  );
}
