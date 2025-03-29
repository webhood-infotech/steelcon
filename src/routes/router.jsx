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
import ManageTeam from "@/pages/ManageTeam";
import AddNewDepartament from "@/pages/ManageDepartment/AddNewDepartment";
import AddNewManagers from "@/pages/ManageManagers/AddNewManagers";
import AddNewTeamMember from "@/pages/ManageTeam/AddNewTeamMember";
import DepartmentDesignation from "@/pages/DepartmentDesignation";
import ManageAttendence from "@/pages/Attendence/ManagerAttendence";
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
      <ProtectedRoute>
        <DeafultLayout>
          <ManageDepartment />
        </DeafultLayout>
      </ProtectedRoute>
    ),
  },
  {
    path: "/manage-managers",
    element: (
      <ProtectedRoute>
        <DeafultLayout>
          <MangeManagers />
        </DeafultLayout>
      </ProtectedRoute>
    ),
  },
  {
    path: "/manage-team",
    element: (
      <ProtectedRoute>
        <DeafultLayout>
          <ManageTeam />
        </DeafultLayout>
      </ProtectedRoute>
    ),
  },
  // {
  //   path: "/add-new-managers",
  //   element: (
  //     <ProtectedRoute>
  //       <DeafultLayout>
  //         <AddNewManagers />
  //       </DeafultLayout>
  //     </ProtectedRoute>
  //   ),
  // },
  // {
  //   path: "/add-new-team-member",
  //   element: (
  //     <DeafultLayout>
  //       <AddNewTeamMember />
  //     </DeafultLayout>
  //   ),
  // },
  {
    path: "/department-designation",
    element: (
      <ProtectedRoute>
        <DeafultLayout>
          <DepartmentDesignation />
        </DeafultLayout>
      </ProtectedRoute>
    ),
  },
  {
    path: "/manager-attendance",
    element: (
      <DeafultLayout>
        <ManageAttendence />
      </DeafultLayout>
    ),
  },
]);

export default router;
