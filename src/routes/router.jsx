// src/routes/router.js
import CheckEmail from "@/pages/Auth/CheckEmail";
import CreatePassword from "@/pages/Auth/CreatePassword";
import ForgotPassword from "@/pages/Auth/ForgotPassword";
import Login from "@/pages/Auth/Login";
import ResetPassword from "@/pages/Auth/ResetPassword";
import SetPassword from "@/pages/Auth/SetPassword";

import React from "react";
import { createBrowserRouter } from "react-router-dom";
import ProtectedRoute from "./protectRoutes";
import Dashboard from "@/pages/Dashbord";
import DeafultLayout from "@/pages/DeafultLayout";
import ManageDepartment from "@/pages/ManageDepartment";
import MangeManagers from "@/pages/ManageManagers";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <DeafultLayout>
          <Dashboard />
        </DeafultLayout>
      </ProtectedRoute>
    ),
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
  {
    path: "/manage-department",
    element: (
      <DeafultLayout>
        <ManageDepartment />
      </DeafultLayout>
    ),
  },
  {
    path: "/manage-managers",
    element: (
      <DeafultLayout>
        <MangeManagers />
      </DeafultLayout>
    ),
  },
]);

export default router;
