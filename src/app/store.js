import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../redux/authSlice";
import loadingReducer from "../redux/loadingSlice";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    loading: loadingReducer,
  },
});
