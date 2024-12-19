import { useParams } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function UserPage() {
  const { isim } = useParams(); // URL'deki :name parametresini al
  const { user } = useAuth();

  if (!user || user.isim !== isim) {
    return <div>Unauthorized Access</div>; // Kullanıcı izni yoksa hata mesajı
  }

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold">Welcome, {user.name}!</h1>
      <p>Email: {user.email}</p>
      <p>Role: {user.role}</p>
      <img
        src={user.foto}
        alt="User Avatar"
        className="w-32 h-32 rounded-full"
      />
    </div>
  );
}
