import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    _id: null,
    name: null,
    email: null,
    resetPasswordToken: null,
    isFirstUser: true,
    username: null,
  },
  token: localStorage.getItem("token") || null,
  isAuthenticated: !!localStorage.getItem("token"),
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
    },
    setToken: (state, action) => {
      state.token = action.payload;
      localStorage.setItem("token", action.payload);
      state.isAuthenticated = !!action.payload;
    },
    clearAuth: (state) => {
      state.user = {
        _id: null,
        name: null,
        email: null,
        resetPasswordToken: null,
        isFirstUser: false,
      };
      state.token = null;
      state.isAuthenticated = false;
      localStorage.removeItem("token");
    },
  },
});
export const { setUser, setToken, clearAuth } = authSlice.actions;
export default authSlice.reducer;
