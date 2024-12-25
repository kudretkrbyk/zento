import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getAllBlogs,
  getBlogById,
  deleteBlogById,
  updateBlogById,
} from "./blogsAPI";

export const fetchBlogs = createAsyncThunk(
  "blogs/fetchAll",
  async (_, thunkAPI) => {
    try {
      return await getAllBlogs();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const fetchBlogById = createAsyncThunk(
  "blogs/fetchById",
  async (id, thunkAPI) => {
    try {
      return await getBlogById(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const removeBlogById = createAsyncThunk(
  "blogs/removeById",
  async (id, thunkAPI) => {
    try {
      return await deleteBlogById(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const updateBlog = createAsyncThunk(
  "blogs/updateById",
  async ({ id, data }, thunkAPI) => {
    try {
      return await updateBlogById(id, data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const blogsSlice = createSlice({
  name: "blogs",
  initialState: {
    blogs: [],
    blog: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogs.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBlogs.fulfilled, (state, action) => {
        state.loading = false;
        state.blogs = action.payload;
        console.log("blog slice", state.blogs);
      })
      .addCase(fetchBlogs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchBlogById.fulfilled, (state, action) => {
        state.blog = action.payload;
      })
      .addCase(removeBlogById.fulfilled, (state, action) => {
        state.blogs = state.blogs.filter((blog) => blog.id !== action.meta.arg);
      })
      .addCase(updateBlog.fulfilled, (state, action) => {
        const updatedBlog = action.payload;
        state.blogs = state.blogs.map((blog) =>
          blog.id === updatedBlog.id ? updatedBlog : blog
        );
      });
  },
});

export default blogsSlice.reducer;
