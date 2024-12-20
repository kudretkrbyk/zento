import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

// Custom Hook: Kullanıcı silme
export const useDeleteUser = () => {
  const queryClient = useQueryClient(); // Cache'i güncellemek için kullanılır

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:5000/api/users/${id}`, {
      withCredentials: true,
    });
  };

  const { mutate, isLoading, error } = useMutation(deleteUser, {
    // Silme işlemi başarılı olduğunda cache'i güncelle
    onSuccess: () => {
      queryClient.invalidateQueries(["users"]); // "users" query'sini yenile
    },
  });

  return { deleteUser: mutate, isLoading, error };
};
