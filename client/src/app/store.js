import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "../features/users/usersSlice";
import categoriesReducer from "../features/categories/categoriesSlice";
import blogsReducer from "../features/blogs/blogsSlice";
import authReducer from "../features/auth/authSlice";

export const store = configureStore({
  reducer: {
    users: usersReducer,
    categories: categoriesReducer,
    blogs: blogsReducer,
    auth: authReducer,
  },
});

export default store;
