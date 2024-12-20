import { useParams } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useUpdateUser } from "../hooks/useUpdateUser";
import { useState } from "react";

export default function UserPage() {
  const { isim } = useParams();
  const { user, setUser } = useAuth(); // setUser artık kullanılabilir
  const { updateUser, error, loading } = useUpdateUser();

  const [formData, setFormData] = useState({
    isim: user?.isim || "",
    email: user?.email || "",
    fotograf: user?.fotograf || "", // Sadece 'fotograf' alanını kullanıyoruz
  });

  if (!user || user.isim !== isim) {
    return <div>Unauthorized Access</div>;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleUpdate = async () => {
    const updatedUser = await updateUser(formData);
    if (updatedUser) {
      setUser(updatedUser); // Kullanıcı bilgilerini güncelle
    }
  };

  return (
    <div className="w-2/3 h-full flex flex-col gap-10 p-10 items-center justify-center  ">
      <div className="w-full flex items-center justify-between gap-10">
        <h1 className="w-full text-2xl font-bold">Welcome, {user.isim}!</h1>
        <button onClick={handleUpdate} disabled={loading} className="">
          {loading ? "Updating..." : "Update"}
        </button>
      </div>
      {error && <p className="text-red-500">{error}</p>}
      <div className="w-full flex flex-col gap-5">
        <div className="w-full flex items-center justify-between gap-10">
          <label>Name:</label>
          <input
            name="isim"
            value={formData.isim}
            onChange={handleChange}
            className="border rounded p-2  w-[700px]"
          />
        </div>
        <div className="w-full flex items-center justify-between gap-10">
          <label className="">Email:</label>
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="border rounded p-2  w-[700px]"
          />
        </div>
        <div className="w-full flex items-center justify-between gap-10">
          <label className="border text-nowrap">Photo URL:</label>
          <input
            name="fotograf" // 'foto' yerine 'fotograf' kullanılıyor
            value={formData.fotograf}
            onChange={handleChange}
            className="border rounded p-2 w-[700px]"
          />
        </div>
      </div>
    </div>
  );
}
