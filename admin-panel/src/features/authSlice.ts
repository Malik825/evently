import {
  createSlice,
  createAsyncThunk,
  type PayloadAction,
} from "@reduxjs/toolkit";
import axios from "axios";

// Types
interface AdminState {
  token: string | null;
  adminId: string | null;
  loading: boolean;
  loginStatus: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: AdminState = {
  token: null,
  adminId: null,
  loading: false,
  loginStatus: "idle",
  error: null,
};

// Async thunk
export const loginAdmin = createAsyncThunk(
  "auth/loginAdmin",
  async (credentials: { email: string; password: string }, thunkAPI) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        credentials
      );
      return response.data; // Expected to be { token: string, adminId: string }
    } catch (err: any) {
      return thunkAPI.rejectWithValue(
        err.response?.data?.message || "Login failed"
      );
    }
  }
);

// Slice
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout(state) {
      state.token = null;
      state.adminId = null;
      state.loading = false;
      state.loginStatus = "idle";
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAdmin.pending, (state) => {
        state.loading = true;
        state.loginStatus = "loading";
        state.error = null;
      })
      .addCase(
        loginAdmin.fulfilled,
        (state, action: PayloadAction<{ token: string; adminId: string }>) => {
          state.loading = false;
          state.loginStatus = "succeeded";
          state.token = action.payload.token;
          state.adminId = action.payload.adminId;
        }
      )
      .addCase(loginAdmin.rejected, (state, action) => {
        state.loading = false;
        state.loginStatus = "failed";
        state.error = action.payload as string;
      });
  },
});

// Export actions and reducer
export const { logout } = authSlice.actions;
export default authSlice.reducer;
