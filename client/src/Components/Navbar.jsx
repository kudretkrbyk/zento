import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { TiThMenuOutline } from "react-icons/ti";

export default function Navbar() {
  const { user, logOut } = useAuth(); // AuthContext'ten user ve logOut'u al
  const navigate = useNavigate();

  const handleLogInLink = () => {
    navigate("/logIn");
  };
  const handleUserPageLink = () => {
    console.log("fonk");
    console.log(user);
    if (user && user.isim) {
      console.log("if");
      navigate(`/user/${user.isim}`); // Kullanıcının kendi sayfasına yönlendirme
    }
  };

  const handleLogOut = async () => {
    await logOut(); // Kullanıcı çıkışı
    navigate("/"); // Çıkış sonrası ana sayfaya yönlendirme
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
            <button onClick={handleLogOut} className=" p-2 px-4 ">
              Subscribe
            </button>
          </div>
          <div>
            {user ? ( // Kullanıcı giriş yapmışsa
              <img
                className="w-10 h-10 rounded-full hover:cursor-pointer"
                src={user.foto}
                alt="User Avatar"
                onClick={handleUserPageLink} // Fotoğrafa tıklayınca yönlendirme
              />
            ) : (
              // <button onClick={handleLogOut} className=" p-2 px-4 ">
              //   Log-Out
              // </button>
              // Kullanıcı giriş yapmamışsa
              <button onClick={handleLogInLink} className=" p-2 px-4 ">
                Log-In
              </button>
            )}
          </div>
          <div>
            <TiThMenuOutline className="size-5" />
          </div>
        </div>
      </div>
    </div>
  );
}
