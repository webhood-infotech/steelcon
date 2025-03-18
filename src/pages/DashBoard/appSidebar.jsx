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
      url: "#",
      image: "/src/assets/sidebarImages/Icon (1).png",
      isActive: true,
      items: [
        {
          title: "Overview",
          url: "#",
        },
        {
          title: "Notifications",
          url: "#",
        },
        {
          title: "Analytics",
          url: "#",
        },
        {
          title: "Report",
          url: "#",
        },
      ],
    },
    {
      title: "View Policies",
      url: "#",
      image: "/src/assets/sidebarImages/Icon (8).png",
      items: [
        {
          title: "Genesis",
          url: "#",
        },
        {
          title: "Explorer",
          url: "#",
        },
        {
          title: "Quantum",
          url: "#",
        },
      ],
    },
    {
      title: "Manage Department",
      url: "#",
      image: "/src/assets/sidebarImages/Icon (2).png",
      items: [
        {
          title: "Introduction",
          url: "#",
        },
        {
          title: "Get Started",
          url: "#",
        },
        {
          title: "Tutorials",
          url: "#",
        },
        {
          title: "Changelog",
          url: "#",
        },
      ],
    },
    {
      title: "Manage Managers",
      url: "#",
      image: "/src/assets/sidebarImages/layers-three-01 (3).png",
      items: [
        {
          title: "General",
          url: "#",
        },
        {
          title: "Team",
          url: "#",
        },
        {
          title: "Billing",
          url: "#",
        },
        {
          title: "Limits",
          url: "#",
        },
      ],
    },
    {
      title: "Manage Team",
      url: "#",
      image: "/src/assets/sidebarImages/Icon (3).png",
      items: [
        {
          title: "General",
          url: "#",
        },
        {
          title: "Team",
          url: "#",
        },
        {
          title: "Billing",
          url: "#",
        },
        {
          title: "Limits",
          url: "#",
        },
      ],
    },
    {
      title: "Attendance",
      url: "#",
      image: "/src/assets/sidebarImages/Icon (4).png",
      items: [
        {
          title: "General",
          url: "#",
        },
        {
          title: "Team",
          url: "#",
        },
        {
          title: "Billing",
          url: "#",
        },
        {
          title: "Limits",
          url: "#",
        },
      ],
    },
    {
      title: "Leave Application",
      url: "#",
      image: "/src/assets/sidebarImages/Icon (9).png",
      items: [
        {
          title: "General",
          url: "#",
        },
        {
          title: "Team",
          url: "#",
        },
        {
          title: "Billing",
          url: "#",
        },
        {
          title: "Limits",
          url: "#",
        },
      ],
    },
    {
      title: "Payout Details",
      url: "#",
      image: "/src/assets/sidebarImages/Icon (5).png",
      items: [
        {
          title: "General",
          url: "#",
        },
        {
          title: "Team",
          url: "#",
        },
        {
          title: "Billing",
          url: "#",
        },
        {
          title: "Limits",
          url: "#",
        },
      ],
    },
    {
      title: "Discipline Action",
      url: "#",
      image: "/src/assets/sidebarImages/Icon (10).png",
      icon: Settings2,
      items: [
        {
          title: "General",
          url: "#",
        },
        {
          title: "Team",
          url: "#",
        },
        {
          title: "Billing",
          url: "#",
        },
        {
          title: "Limits",
          url: "#",
        },
      ],
    },
    {
      title: "Offer Letter",
      image: "/src/assets/sidebarImages/Icon (8).png",
      items: [
        {
          title: "General",
          url: "#",
        },
        {
          title: "Team",
          url: "#",
        },
        {
          title: "Billing",
          url: "#",
        },
        {
          title: "Limits",
          url: "#",
        },
      ],
    },
    {
      title: "Announcement",
      image: "/src/assets/sidebarImages/Icon (11).png",
      icon: Settings2,
      items: [
        {
          title: "General",
          url: "#",
        },
        {
          title: "Team",
          url: "#",
        },
        {
          title: "Billing",
          url: "#",
        },
        {
          title: "Limits",
          url: "#",
        },
      ],
    },
    {
      title: "Training Module",
      image: "/src/assets/sidebarImages/Icon (12).png",
      icon: Settings2,
      items: [
        {
          title: "General",
          url: "#",
        },
        {
          title: "Team",
          url: "#",
        },
        {
          title: "Billing",
          url: "#",
        },
        {
          title: "Limits",
          url: "#",
        },
      ],
    },
    {
      title: "Company Policies",
      image: "/src/assets/sidebarImages/Icon (7).png",
      icon: Settings2,
      items: [
        {
          title: "General",
          url: "#",
        },
        {
          title: "Team",
          url: "#",
        },
        {
          title: "Billing",
          url: "#",
        },
        {
          title: "Limits",
          url: "#",
        },
      ],
    },
  ],
  navSupportSetting: [
    {
      title: "Support Request",
      url: "#",
      image: "/src/assets/sidebarImages/life-buoy-01.png",
      isActive: true,
      items: [
        {
          title: "Overview",
          url: "#",
        },
        {
          title: "Notifications",
          url: "#",
        },
        {
          title: "Analytics",
          url: "#",
        },
        {
          title: "Report",
          url: "#",
        },
      ],
    },
    {
      title: "Settings",
      url: "#",
      image: "/src/assets/sidebarImages/settings-01 (1).png",
      isActive: true,
      items: [
        {
          title: "Overview",
          url: "#",
        },
        {
          title: "Notifications",
          url: "#",
        },
        {
          title: "Analytics",
          url: "#",
        },
        {
          title: "Report",
          url: "#",
        },
      ],
    },
  ],
};
export function AppSidebar({ ...props }) {
  return (
    <Sidebar className="w-xs" collapsible="icon" {...props}>
      <SidebarHeader className="pl-6">
        <img
          src={logo}
          alt="Company Logo"
          className="h-[48px] w-[133px] object-contain mt-8"
        />
      </SidebarHeader>
      <SidebarContent className="pl-2 mt-0 pt-0">
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
