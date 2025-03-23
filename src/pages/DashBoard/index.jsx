import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { AppSidebar } from "./appSidebar";
import DashboardHeader from "../DashbordOverview/DashboardHeader";
import OverviewCard from "../DashbordOverview/OverviewCard";
export default function Dashboard() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="bg-gray-100 w-full container">
        <DashboardHeader />
        <OverviewCard />
      </SidebarInset>
    </SidebarProvider>
  );
}
