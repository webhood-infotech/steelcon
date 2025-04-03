import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import React from "react";
const ProtectedRoute = ({ children }) => {
  const isLoggedIn = useSelector((state) => state.auth.isAuthenticated);
  return isLoggedIn ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
