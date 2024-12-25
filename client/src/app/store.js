import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "../features/users/usersSlice";
import categoriesReducer from "../features/categories/categoriesSlice";
import blogsReducer from "../features/blogs/blogsSlice";

export const store = configureStore({
  reducer: {
    users: usersReducer, // User slice burada tanımlanıyor
    categories: categoriesReducer,
    blogs: blogsReducer,
  },
});

export default store;
