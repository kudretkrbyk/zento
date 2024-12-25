import AdminUserPage from "./AdminUserPage";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { updateUser } from "../features/users/usersSlice";

import RoleBasedWrapper from "../Components/RoleBasedWrapper";

export default function UserPage() {
  const { isim } = useParams();
  const dispatch = useDispatch();
  const { user, loading, error } = useSelector((state) => state.auth);
  console.log("user page user:", user);

  const [formData, setFormData] = useState({
    isim: "",
    email: "",
    fotograf: "",
  });

  useEffect(() => {
    if (user) {
      setFormData({
        isim: user.isim || "",
        email: user.email || "",
        fotograf: user.fotograf || "",
      });
    }
  }, [user]);

  if (!user || user.isim !== isim) {
    return <div>Unauthorized Access</div>;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleUpdate = async () => {
    console.log("formData:", formData, "user id:", user.id);
    const resultAction = await dispatch(
      updateUser({ id: user.id, userData: formData })
    );

    if (updateUser.fulfilled.match(resultAction)) {
      console.log("User updated successfully:", resultAction.payload);
    } else {
      console.error("Update failed:", resultAction.payload);
    }
  };

  return (
    <div className="w-2/3 h-full flex flex-col gap-10 p-10 items-center justify-center">
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
            name="fotograf"
            value={formData.fotograf}
            onChange={handleChange}
            className="border rounded p-2 w-[700px]"
          />
        </div>
        <div className="w-full flex items-center justify-between">
          <span>Profile Picture:</span>
          <img className="w-20 h-20" src={formData.fotograf} alt="Profile" />
        </div>
      </div>
      {user.rol === true && (
        <RoleBasedWrapper allowedRoles={["admin"]}>
          <AdminUserPage />
        </RoleBasedWrapper>
      )}
    </div>
  );
}
