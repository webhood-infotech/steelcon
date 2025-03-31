import * as React from "react";
import logo from "../../assets/images/logo.png";

import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { NavMain } from "./navMain";
import { NavUser } from "./navUser";
import { NavSupportSetting } from "./navSupportSetting";
import { Link } from "react-router-dom";
import avatar from "../../assets/sidebarImages/Avatar.png";
import dashboardIcon from "../../../src/assets/sidebarImages/dashboardicon.png";
import Department from "../../assets/sidebarImages/manageDepartment.png";
import magaer from "../../assets/sidebarImages/manageManager.png";
import manageTeam from "../../assets/sidebarImages/ManageTeam.png";
import Attendence from "../../assets/sidebarImages/manageAttendence.png";
import Application from "../../assets/sidebarImages/LeaveApplication.png";
import payout from "../../assets/sidebarImages/PayoutDeatail.png";
import Action from "../../assets/sidebarImages/DisciplineAction.png";
import offer from "../../assets/sidebarImages/offerletter.png";
import trainning from "../../assets/sidebarImages/TrainingModule.png";
import Announcement from "../../assets/sidebarImages/Announcement.png";
import companyPolicie from "../../assets/sidebarImages/CompanyPolicies.png";
import support from "../../assets/sidebarImages/supportRequest.png";
import setting from "../../assets/sidebarImages/setting.png";
const data = {
  user: {
    name: "Olivia Rhye",
    email: "olivia@untitledui.com",
    image: avatar,
    // avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "/",
      image: dashboardIcon,
      isActive: true,
    },
    {
      title: "Manage Department",
      url: "/manage-department",
      image: Department,
    },
    {
      title: " Department Designation",
      url: "/department-designation",
      image: Department,
    },
    {
      title: "Manage Managers",
      url: "/manage-managers",
      image: magaer,
    },
    {
      title: "Manage Team",
      url: "/manage-team",
      image: manageTeam,
    },
    {
      title: "Attendance",
      url: "/manage-attendance",
      image: Attendence,
    },
    {
      title: "Leave Application",
      url: "#",
      image: Application,
    },
    {
      title: "Payout Details",
      url: "#",
      image: payout,
    },
    {
      title: "Discipline Action",
      url: "#",
      image: Action,
      icon: Settings2,
    },
    {
      title: "Offer Letter",
      image: offer,
    },
    {
      title: "Announcement",
      image: Announcement,
      icon: Settings2,
    },
    {
      title: "Training Module",
      image: trainning,
      icon: Settings2,
    },
    {
      title: "Company Policies",
      image: companyPolicie,
      icon: Settings2,
    },
  ],
  navSupportSetting: [
    {
      title: "Support Request",
      url: "#",
      image: support,
      isActive: true,
    },
    {
      title: "Settings",
      url: "#",
      image: setting,
      isActive: true,
    },
  ],
};
export function AppSidebar({ ...props }) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader className="pl-6">
        <Link to="/">
          <img
            src={logo}
            alt="Company Logo"
            className="h-[48px] w-[133px] object-contain mt-8"
          />
        </Link>
      </SidebarHeader>
      <SidebarContent className="pl-2 mt-0 pt-0 thin-scrollbar overflow-y-scroll">
        <NavMain items={data.navMain} />
        <NavSupportSetting items={data.navSupportSetting} />
      </SidebarContent>
      <SidebarFooter className="px-4">
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}

