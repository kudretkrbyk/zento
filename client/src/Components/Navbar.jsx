import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { TiThMenuOutline } from "react-icons/ti";
import { logOut } from "../features/auth/authSlice";

export default function Navbar() {
  const { user, loading } = useSelector((state) => state.auth); // Redux'tan kullanıcı bilgileri
  const dispatch = useDispatch(); // Redux Dispatch
  const navigate = useNavigate();

  const handleLogInLink = () => {
    navigate("/logIn");
  };

  const handleMainLink = () => {
    navigate("/");
  };

  const handleUserPageLink = () => {
    if (user && user.isim) {
      navigate(`/user/${user.isim}`); // Kullanıcının kendi sayfasına yönlendirme
    }
  };

  const handleLogOut = async () => {
    await dispatch(logOut()); // Redux Thunk ile çıkış işlemi
    navigate("/Home"); // Çıkış sonrası ana sayfaya yönlendirme
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
        <div
          onClick={handleMainLink}
          className="w-44 h-24 bg-contain bg-no-repeat bg-center bg-[url(https://themes.estudiopatagon.com/wordpress/zento-personal/wp-content/uploads/2024/03/logo-zento-personal-1.png)] hover:cursor-pointer "
        ></div>
        <div className="flex items-center justify-center gap-2">
          <div>
            <button className=" p-2 px-4 ">Subscribe</button>
          </div>
          <div>
            {user ? ( // Kullanıcı giriş yapmışsa
              <div className="w-full hover:cursor-pointer group">
                <img
                  className="w-10 h-10 rounded-full"
                  src={user.fotograf}
                  alt="User Avatar"
                />
                <div className="hidden group-hover:flex absolute top-24 right-10 bg-white shadow-xl rounded-md flex-col gap-10 p-10">
                  <button onClick={handleLogOut}>Log-Out</button>
                  <button onClick={handleUserPageLink}>Profile</button>
                </div>
              </div>
            ) : (
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
