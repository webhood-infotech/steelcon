import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Eye } from "lucide-react"
import { Badge } from "@/components/ui/badge"

// interface Employee {
//   id: number
//   name: string
//   avatar: string
//   presentDays: number
//   workingDays: number
//   department: string
// }

export default function ManageAttendence() {
  const employees= [
    {
      id: 1,
      name: "Arlene McCoy",
      avatar: "/placeholder.svg?height=40&width=40",
      presentDays: 20,
      workingDays: 26,
      department: "HSEQ",
    },
    {
      id: 2,
      name: "Esther Howard",
      avatar: "/placeholder.svg?height=40&width=40",
      presentDays: 20,
      workingDays: 26,
      department: "Manning",
    },
    {
      id: 3,
      name: "Jacob Jones",
      avatar: "/placeholder.svg?height=40&width=40",
      presentDays: 20,
      workingDays: 26,
      department: "Maintenance",
    },
    {
      id: 4,
      name: "Guy Hawkins",
      avatar: "/placeholder.svg?height=40&width=40",
      presentDays: 20,
      workingDays: 26,
      department: "Maintenance",
    },
    {
      id: 5,
      name: "Marvin McKinney",
      avatar: "/placeholder.svg?height=40&width=40",
      presentDays: 20,
      workingDays: 26,
      department: "Operations",
    },
    {
      id: 6,
      name: "Albert Flores",
      avatar: "/placeholder.svg?height=40&width=40",
      presentDays: 20,
      workingDays: 26,
      department: "Engineering",
    },
    {
      id: 7,
      name: "Guy Hawkins",
      avatar: "/placeholder.svg?height=40&width=40",
      presentDays: 20,
      workingDays: 26,
      department: "IT",
    },
    {
      id: 8,
      name: "Darlene Robertson",
      avatar: "/placeholder.svg?height=40&width=40",
      presentDays: 20,
      workingDays: 26,
      department: "Human Resources",
    },
    {
      id: 9,
      name: "Cameron Williamson",
      avatar: "/placeholder.svg?height=40&width=40",
      presentDays: 20,
      workingDays: 26,
      department: "Human Resources",
    },
    {
      id: 10,
      name: "Eleanor Pena",
      avatar: "/placeholder.svg?height=40&width=40",
      presentDays: 20,
      workingDays: 26,
      department: "HSEQ",
    },
  ]

  return (
    <div className="w-full max-w-5xl mx-auto p-6 bg-white rounded-lg shadow-sm">
      <h1 className="text-2xl font-bold mb-6">Manage Attendance</h1>

      <Tabs defaultValue="manager" className="w-full">
        <TabsList className="w-full max-w-[200px] grid grid-cols-2 mb-6 border-b rounded-none h-auto p-0">
          <TabsTrigger
            value="manager"
            className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-blue-600 data-[state=active]:shadow-none py-2"
          >
            Manager
          </TabsTrigger>
          <TabsTrigger
            value="employee"
            className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-blue-600 data-[state=active]:shadow-none py-2"
          >
            Employee
          </TabsTrigger>
        </TabsList>

        <TabsContent value="manager" className="mt-0">
          <div className="w-full">
            <div className="grid grid-cols-4 gap-4 py-4 px-4 bg-gray-50 rounded-t-lg text-sm font-medium text-gray-500">
              <div>Name</div>
              <div className="col-span-2">Attendance ( Present days / Working days)</div>
              <div className="flex justify-between">
                <span>Department</span>
                <span>Action Items</span>
              </div>
            </div>

            <div className="divide-y">
              {employees.map((employee) => (
                <div key={employee.id} className="grid grid-cols-4 gap-4 py-4 px-4 items-center">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-10 w-10 border">
                      <AvatarImage src={employee.avatar} alt={employee.name} />
                      <AvatarFallback>{employee.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <span className="font-medium">{employee.name}</span>
                  </div>

                  <div className="col-span-2 flex items-center gap-4">
                    <div className="relative w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="absolute top-0 left-0 h-full bg-blue-600 rounded-full"
                        style={{ width: `${(employee.presentDays / employee.workingDays) * 100}%` }}
                      />
                    </div>

                    {employee.name === "Arlene McCoy" && (
                      <Badge className="bg-blue-600 text-white rounded-full h-6 w-6 flex items-center justify-center p-0 text-xs">
                        6/6
                      </Badge>
                    )}

                    <span className="text-sm text-gray-600">
                      {employee.presentDays}/{employee.workingDays}
                    </span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">{employee.department}</span>
                    <button className="text-gray-400 hover:text-gray-600">
                      <Eye className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="employee">
          <div className="flex items-center justify-center h-40 border rounded-lg">
            <p className="text-gray-500">Employee view content would go here</p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

