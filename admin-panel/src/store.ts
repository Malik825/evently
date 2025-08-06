import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/authSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

// ✅ These must be exported
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
