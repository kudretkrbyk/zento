import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getAllUsers,
  getUserById,
  deleteUserById,
  updateUserById,
} from "./usersAPI";

// Tüm kullanıcıları getir
export const fetchUsers = createAsyncThunk(
  "users/fetchAll",
  async (_, thunkAPI) => {
    try {
      return await getAllUsers();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

// Belirli bir kullanıcıyı getir
export const fetchUserById = createAsyncThunk(
  "users/fetchById",
  async (id, thunkAPI) => {
    try {
      return await getUserById(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

// Kullanıcıyı sil
export const removeUserById = createAsyncThunk(
  "users/removeById",
  async (id, thunkAPI) => {
    try {
      return await deleteUserById(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

// Kullanıcıyı güncelle
export const updateUser = createAsyncThunk(
  "users/updateById",
  async ({ id, userData }, thunkAPI) => {
    try {
      return await updateUserById(id, userData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

// Redux slice
const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [], // Tüm kullanıcılar
    user: null, // Seçili kullanıcı
    loading: false,
    error: null,
  },
  reducers: {}, // Eğer ekstra reducers tanımlanacaksa buraya eklenir
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchUserById.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(removeUserById.fulfilled, (state, action) => {
        state.users = state.users.filter((user) => user.id !== action.meta.arg);
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        const updatedUser = action.payload;
        state.users = state.users.map((user) =>
          user.id === updatedUser.id ? updatedUser : user
        );
      });
  },
});

export default usersSlice.reducer;
