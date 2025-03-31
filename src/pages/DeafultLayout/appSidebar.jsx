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

// This is sample data.
const data = {
  user: {
    name: "Olivia Rhye",
    email: "olivia@untitledui.com",
    image: "/src/assets/sidebarImages/Avatar.png",
    // avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "/",
      image: "/src/assets/sidebarImages/Icon(1).png",
      isActive: true,
    },

    {
      title: "Manage Department",
      url: "/manage-department",
      image: "/src/assets/sidebarImages/Icon (2).png",
    },
    {
      title: " Department Designation",
      url: "/department-designation",
      image: "/src/assets/sidebarImages/Icon (2).png",
    },
    {
      title: "Manage Managers",
      url: "/manage-managers",
      image: "/src/assets/sidebarImages/layers-three-01 (3).png",
    },
    {
      title: "Manage Team",
      url: "/manage-team",
      image: "/src/assets/sidebarImages/Icon (3).png",
    },
    {
      title: "Attendance",
      url: "/manage-attendance",
      image: "/src/assets/sidebarImages/Icon (4).png",
    },
    {
      title: "Leave Application",
      url: "#",
      image: "/src/assets/sidebarImages/Icon (9).png",
    },
    {
      title: "Payout Details",
      url: "#",
      image: "/src/assets/sidebarImages/Icon (5).png",
    },
    {
      title: "Discipline Action",
      url: "#",
      image: "/src/assets/sidebarImages/Icon (10).png",
      icon: Settings2,
    },
    {
      title: "Offer Letter",
      image: "/src/assets/sidebarImages/Icon (8).png",
    },
    {
      title: "Announcement",
      image: "/src/assets/sidebarImages/Icon (11).png",
      icon: Settings2,
    },
    {
      title: "Training Module",
      image: "/src/assets/sidebarImages/Icon (12).png",
      icon: Settings2,
    },
    {
      title: "Company Policies",
      image: "/src/assets/sidebarImages/Icon (7).png",
      icon: Settings2,
    },
  ],
  navSupportSetting: [
    {
      title: "Support Request",
      url: "#",
      image: "/src/assets/sidebarImages/life-buoy-01.png",
      isActive: true,
    },
    {
      title: "Settings",
      url: "#",
      image: "/src/assets/sidebarImages/settings-01 (1).png",
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
