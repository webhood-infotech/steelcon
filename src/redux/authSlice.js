import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    _id: null,
    name: null,
    email: null,
    resetPasswordToken: null,
    isFirstUser: false,
    username: null,
    isAuthenticated: !!localStorage.getItem("token"),
  },
  token: localStorage.getItem("token") || null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { _id, email, username, isFirstUser, resetPasswordToken } =
        action.payload;
      state.user = {
        ...state.user,
        _id,
        email,
        username,
        isFirstUser,
        resetPasswordToken,
      };
      state.isAuthenticated = true;
    },
    setToken: (state, action) => {
      state.token = action.payload;
      localStorage.setItem("token", action.payload);
    },
    clearAuth: (state) => {
      state.user = {
        _id: null,
        name: null,
        email: null,
        resetPasswordToken: null,
        isFirstUser: false,
        isAuthenticated: false,
      };
      state.token = null;
      localStorage.removeItem("token");
    },
  },
});
export const { setUser, setToken, clearAuth } = authSlice.actions;
export default authSlice.reducer;
