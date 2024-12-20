import { useQuery } from "@tanstack/react-query";
import axios from "axios";

// Custom Hook: Kullanıcıları getirme
export const useGetUsers = () => {
  const fetchUsers = async () => {
    const { data } = await axios.get("http://localhost:5000/api/users", {
      withCredentials: true,
    });
    return data; // API'den dönen kullanıcı verileri
  };

  const { data, error, isLoading, isError } = useQuery({
    queryKey: ["users"], // Cache için key
    queryFn: fetchUsers, // Veri getiren fonksiyon
  });

  return { users: data, error, isLoading, isError };
};
