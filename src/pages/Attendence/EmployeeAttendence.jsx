import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Eye } from "lucide-react";

export default function EmployeeAttendence() {
  const employees = [
    {
      id: 1,
      name: "Arlene McCoy",
      avatar: "/placeholder.svg?height=40&width=40",
      presentDays: 20,
      workingDays: 26,
      department: "HSEQ",
      reportTo: "Rajesh",
    },
    {
      id: 2,
      name: "Esther Howard",
      avatar: "/placeholder.svg?height=40&width=40",
      presentDays: 20,
      workingDays: 26,
      department: "Manning",
      reportTo: "Rajesh",
    },
    {
      id: 3,
      name: "Jacob Jones",
      avatar: "/placeholder.svg?height=40&width=40",
      presentDays: 20,
      workingDays: 26,
      department: "Maintenance",
      reportTo: "Rajesh",
    },
   
    
   
  ];
  return (
    <div className="w-full">
      <div className="w-full">
        <div className="border-b border-[#EAECF0] flex py-3 px-4 bg-gray-50 text-sm font-medium text-gray-500">
          <div className="w-[349px] text-[#475467]">Team Member Name</div>
          <div className="w-[289px] text-[#475467]">
            Attendance ( Present days / Working days)
          </div>
          <div className="w-[163px] text-[#475467]">Department</div>
          <div className="w-[163px] text-[#475467]">Report to</div>
          <div className="w-[100px] text-right text-[#475467]">
            Action Items
          </div>
        </div>

        <div className="divide-y">
          {employees?.map((employee) => (
            <div key={employee.id} className="flex py-4 px-4 items-center">
              <div className="flex items-center gap-3 w-[349px]">
                <Avatar className="h-10 w-10 border">
                  <AvatarImage src={employee?.avatar} alt={employee.name} />
                  <AvatarFallback>{employee?.name?.charAt(0)}</AvatarFallback>
                </Avatar>
                <span className="text-sm font-medium text-[#101828]">
                  {employee.name}
                </span>
              </div>

              <div className="w-[289px] flex items-center gap-4">
                <div className="relative w-[196px] h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="absolute top-0 left-0 h-full bg-[#305679] rounded-full"
                    style={{
                      width: `${
                        (employee.presentDays / employee.workingDays) * 100
                      }%`,
                    }}
                  />
                </div>
                <span className="text-sm font-medium text-[#101828] whitespace-nowrap">
                  {employee.presentDays}/{employee.workingDays}
                </span>
              </div>

              <div className="w-[163px]">
                <span className="text-sm font-normal text-[#101828]">
                  {employee.department}
                </span>
              </div>

              <div className="w-[163px] flex items-center">
                <Avatar className="h-8 w-8 mr-2">
                  <AvatarImage
                    src="/placeholder.svg?height=40&width=40"
                    alt={employee.reportTo}
                  />
                  <AvatarFallback>
                    {employee?.reportTo?.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <span className="text-sm font-normal text-[#101828]">
                  {employee.reportTo}
                </span>
              </div>
              <div className="w-[100px] text-center">
                <button className="text-gray-400 hover:text-gray-600">
                  <Eye className="h-5 w-5 ml-auto" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
