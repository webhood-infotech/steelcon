// src/routes/router.js
import CheckEmail from "@/pages/Auth/CheckEmail";
import CreatePassword from "@/pages/Auth/CreatePassword";
import ForgotPassword from "@/pages/Auth/ForgotPassword";
import Login from "@/pages/Auth/Login";
import ResetPassword from "@/pages/Auth/ResetPassword";
import SetPassword from "@/pages/Auth/SetPassword";
import Dashboard from "@/pages/DashBoard";
import React from "react";
import { createBrowserRouter } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/forgotpassword",
    element: <ForgotPassword />,
  },
  {
    path: "/createpassword",
    element: <CreatePassword />,
  },
  {
    path: "/checkemail",
    element: <CheckEmail />,
  },
  {
    path: "/resetpassword",
    element: <ResetPassword />,
  },
  {
    path: "/setpassword",
    element: <SetPassword />,
  },
  // {
  //   path: "/dashboard",
  //   element: <Dashboard />,
  // },
]);

export default router;
