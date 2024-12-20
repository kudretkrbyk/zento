import { useState } from "react";
import axios from "axios";

export const useUpdateUser = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const updateUser = async (updatedData) => {
    setLoading(true);
    setError(null);
    console.log("use update user", updatedData);
    try {
      const response = await axios.patch(
        "http://localhost:5000/api/updateUser",
        updatedData,
        { withCredentials: true }
      );
      return response.data.user; // Güncellenen kullanıcı bilgilerini döndür
    } catch (err) {
      setError(err.response?.data?.message || "Bir hata oluştu");
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { updateUser, error, loading };
};
