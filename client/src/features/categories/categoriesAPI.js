import api from "../../services/api";

const API_URL = "/categories";

export const getAllCategories = async () => {
  const response = await api.get(API_URL);
  return response.data;
};

export const getCategoryById = async (id) => {
  const response = await api.get(`${API_URL}/${id}`);
  return response.data;
};

export const deleteCategoryById = async (id) => {
  const response = await api.delete(`${API_URL}/${id}`);
  return response.data;
};

export const updateCategoryById = async (id, categoryData) => {
  const response = await api.patch(`${API_URL}/${id}`, categoryData);
  return response.data;
};
