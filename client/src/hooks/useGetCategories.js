import { useQuery } from "@tanstack/react-query";
import axios from "axios";

// Custom Hook: Blog verilerini getirme
export const useGetCategories = () => {
  // Fetch fonksiyonu
  const fetchCategories = async () => {
    const { data } = await axios.get("http://localhost:5000/api/categories");
    return data;
  };

  // React Query ile veriyi çekiyoruz
  const { data, error, isLoading, isError } = useQuery({
    queryKey: ["categories"], // Önbellek için key
    queryFn: fetchCategories, // Veri getiren fonksiyon
  });

  return { blogs: data, error, isLoading, isError };
};
