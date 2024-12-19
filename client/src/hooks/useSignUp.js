import { useState } from "react";
import axios from "axios";

export const useSignUp = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const signUp = async (userData) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post(
        "http://localhost:5000/api/register",
        userData
      );
      setLoading(false);
      return response.data; // Başarılı yanıt döndür
    } catch (err) {
      setLoading(false);
      setError(err.response?.data?.message || "Kayıt işlemi başarısız");
    }
  };

  return { signUp, loading, error };
};
