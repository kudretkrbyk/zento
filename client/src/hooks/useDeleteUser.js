import { useMutation } from "@tanstack/react-query";
import axios from "axios";

export const useDeleteUser = () => {
  const mutation = useMutation({
    mutationFn: async (userId) => {
      const response = await axios.delete(
        `http://localhost:5000/api/users/${userId}`,
        { withCredentials: true }
      );
      return response.data;
    },
  });

  return mutation;
};
