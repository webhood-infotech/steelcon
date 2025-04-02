import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const LeaveApplication = () => {
  const leaveRequests = [
    {
      id: "245634634",
      name: "Arlene McCoy",
      avatar: "/placeholder.svg?height=40&width=40",
      reason: "Sick Leave",
      from: "16 Jan 2024",
      to: "24 Jan 2024",
      days: 4,
    },
    {
      id: "245634634",
      name: "Esther Howard",
      avatar: "/placeholder.svg?height=40&width=40",
      reason: "Function at home",
      from: "16 Jan 2024",
      to: "24 Jan 2024",
      days: 5,
    },
    {
      id: "245634634",
      name: "Jacob Jones",
      avatar: "/placeholder.svg?height=40&width=40",
      reason: "Sick Leave",
      from: "16 Jan 2024",
      to: "24 Jan 2024",
      days: 1,
    },
    {
      id: "245634634",
      name: "Guy Hawkins",
      avatar: "/placeholder.svg?height=40&width=40",
      reason: "Function at home",
      from: "16 Jan 2024",
      to: "24 Jan 2024",
      days: 4,
    },
    {
      id: "245634634",
      name: "Marvin McKinney",
      avatar: "/placeholder.svg?height=40&width=40",
      reason: "Sick Leave",
      from: "16 Jan 2024",
      to: "24 Jan 2024",
      days: 1,
    },
    {
      id: "245634634",
      name: "Albert Flores",
      avatar: "/placeholder.svg?height=40&width=40",
      reason: "Function at home",
      from: "16 Jan 2024",
      to: "24 Jan 2024",
      days: 0,
    },
    {
      id: "245634634",
      name: "Guy Hawkins",
      avatar: "/placeholder.svg?height=40&width=40",
      reason: "Sick Leave",
      from: "16 Jan 2024",
      to: "24 Jan 2024",
      days: 1,
    },
    {
      id: "245634634",
      name: "Darlene Robertson",
      avatar: "/placeholder.svg?height=40&width=40",
      reason: "Sick Leave",
      from: "16 Jan 2024",
      to: "24 Jan 2024",
      days: 3,
    },
    {
      id: "245634634",
      name: "Cameron Williamson",
      avatar: "/placeholder.svg?height=40&width=40",
      reason: "Function at home",
      from: "16 Jan 2024",
      to: "24 Jan 2024",
      days: 2,
    },
    {
      id: "245634634",
      name: "Eleanor Pena",
      avatar: "/placeholder.svg?height=40&width=40",
      reason: "Function at home",
      from: "16 Jan 2024",
      to: "24 Jan 2024",
      days: 5,
    },
  ];
  return (
    <div className="w-full mt-8 px-3">
      <h1 className="text-3xl font-semibold text-[#101828] mb-6">
        Manage Leaves
      </h1>
      <div className="mt-11 overflow-hidden bg-white">
        {/* Table Header */}
        <div className="grid grid-cols-6 bg-gray-50 border-b py-3 px-4 text-sm font-medium text-gray-500">
          <div className="col-span-1">Employee Name</div>
          <div className="col-span-1">Reason</div>
          <div className="col-span-1">From</div>
          <div className="col-span-1">To</div>
          <div className="col-span-1">Number of Days</div>
          <div className="col-span-1">Action Items</div>
        </div>

        {/* Table Body */}
        <div className="divide-y">
          {leaveRequests.map((request, index) => (
            <div
              key={index}
              className="grid grid-cols-6 py-4 px-4 items-center"
            >
              <div className="col-span-1 flex items-center gap-3">
                <Avatar className="h-10 w-10 border">
                  <AvatarImage src={request.avatar} alt={request.name} />
                  <AvatarFallback>{request.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-[#101828]">
                    {request.name}
                  </span>
                  <span className="text-xs text-gray-500">ID {request.id}</span>
                </div>
              </div>

              <div className="col-span-1 text-sm text-[#101828]">
                {request.reason}
              </div>

              <div className="col-span-1 text-sm text-[#101828]">
                {request.from}
              </div>

              <div className="col-span-1 text-sm text-[#101828]">
                {request.to}
              </div>

              <div className="col-span-1 text-sm text-[#101828]">
                {request.days}
              </div>

              <div className="col-span-1 flex space-x-2">
                <button className="px-3 py-1 text-sm text-green-600 hover:bg-green-50 rounded">
                  Accept
                </button>
                <button className="px-3 py-1 text-sm text-red-600 hover:bg-red-50 rounded">
                  Reject
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeaveApplication;
