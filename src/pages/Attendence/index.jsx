import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Eye } from "lucide-react";
import EmployeeAttendence from "./EmployeeAttendence";
import MangerAttendence from "./MangerAttendence";
import { useState } from "react";

export default function ManageAttendance() {
  const [showFilter, setShowFilter] = useState(false);
  return (
    <div className="w-full mx-auto px-3 mt-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-semibold mb-4 text-[#101828]">
          Manage Attendance
        </h1>
        {showFilter && (
          <div className="flex">
            <button className="px-4 py-2 border rounded-l-lg bg-white text-sm">
              Current Month
            </button>
            <button className="px-4 py-2 border-t border-b border-r text-sm">
              Last Month
            </button>
            <button className="px-4 py-2 border-t border-b border-r text-sm">
              Last 3 Months
            </button>
            <button className="px-4 py-2 border rounded-r-lg text-sm">
              Last Year
            </button>
          </div>
        )}
      </div>
      <Tabs defaultValue="manager" className="w-full ">
        <TabsList className=" w-full grid grid-cols-6 md:grid-cols-8 lg:grid-cols-12 mb-6 rounded-none h-auto p-0 bg-white border-b-1">
          <TabsTrigger
            value="manager"
            onClick={() => setShowFilter(false)}
            className="rounded-none bg-white data-[state=active]:border-b-3 data-[state=active]:border-b-stone-950 data-[state=active]:shadow-none py-2 font-semibold text-[#475467]"
          >
            Manager
          </TabsTrigger>
          <TabsTrigger
            onClick={() => setShowFilter(true)}
            value="employee"
            className="rounded-none bg-white data-[state=active]:border-b-3 data-[state=active]:border-b-stone-950 data-[state=active]:shadow-none py-2"
          >
            Employee
          </TabsTrigger>
        </TabsList>
        <TabsContent value="manager" className="mt-0">
          <MangerAttendence />
        </TabsContent>
        <TabsContent value="employee">
          <EmployeeAttendence />
        </TabsContent>
      </Tabs>
    </div>
  );
}
