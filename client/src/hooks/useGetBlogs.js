import { useQuery } from "@tanstack/react-query";
import axios from "axios";

// Custom Hook: Blog verilerini getirme
export const useGetBlogs = () => {
  // Fetch fonksiyonu
  const fetchBlogs = async () => {
    const { data } = await axios.get("http://localhost:5000/api/blogs");
    return data;
  };

  // React Query ile veriyi çekiyoruz
  const { data, error, isLoading, isError } = useQuery({
    queryKey: ["blogs"], // Önbellek için key
    queryFn: fetchBlogs, // Veri getiren fonksiyon
  });

  return { blogs: data, error, isLoading, isError };
};
