import api from "../../services/api";

const API_URL = "/blogs";

export const getAllBlogs = async () => {
  const response = await api.get(API_URL);
  return response.data;
};

export const getBlogById = async (id) => {
  const response = await api.get(`${API_URL}/${id}`);
  return response.data;
};

export const deleteBlogById = async (id) => {
  const response = await api.delete(`${API_URL}/${id}`);
  return response.data;
};

export const updateBlogById = async (id, categoryData) => {
  const response = await api.patch(`${API_URL}/${id}`, categoryData);
  return response.data;
};
