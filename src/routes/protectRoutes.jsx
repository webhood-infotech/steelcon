import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import React from "react";
const ProtectedRoute = ({ children }) => {
  const isLoggedIn = useSelector((state) => state.auth.user.isAuthenticated);
  console.log("isAuthenticated", isLoggedIn);

  return isLoggedIn ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
