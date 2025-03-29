import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Plus, Trash2 } from "lucide-react";
import { Pencil } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import EditDepartment from "../ManageDepartment/EditDepartment";
import AddNewDepartament from "../ManageDepartment/AddNewDepartment";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import avatarImg from "../../assets/sidebarImages/Avatar.png";
import DeleteDepartment from "../ManageDepartment/DeleteDepartment";
import AddNewTeamMember from "./AddNewTeamMember";
const ManageTeam = () => {
  const [departments, setDepartments] = useState([
    {
      id: "1",
      name: "Maintenance",
      imageSrc: avatarImg,
      department: "L8 8HQ",
      JoiningDate: "9/18/16",
      reportTo: "Vinayak",
      NumberOfTeam: "4",
      CurrentCTC: "Rs 40,000",
    },
    {
      id: "3",
      name: "Manning",
      imageSrc: avatarImg,
      department: "Maintenance",
      JoiningDate: "9/23/16",
      reportTo: "Vinayak",
      NumberOfTeam: "5",
      CurrentCTC: "Rs 40,000",
    },
    {
      id: "4",
      name: "IT",
      imageSrc: avatarImg,
      department: "Maintenance",
      JoiningDate: "10/28/12",
      reportTo: "Vinayak",
      NumberOfTeam: "1",
      CurrentCTC: "Rs 40,000",
    },
    {
      id: "4",
      name: "IT",
      imageSrc: avatarImg,

      department: "Maintenance",
      JoiningDate: "6/21/19",
      reportTo: "Vinayak",
      NumberOfTeam: "4",
      CurrentCTC: "Rs 1000",
    },
    {
      id: "5",
      name: "Manning",
      imageSrc: avatarImg,
      department: "Operations",
      JoiningDate: "9/4/12",
      reportTo: "Vinayak",
      NumberOfTeam: "1",
      CurrentCTC: "Rs 40,000",
    },
    {
      id: "5",
      name: "Operations",
      imageSrc: avatarImg,
      department: "Engineering",
      JoiningDate: "5/27/15",
      reportTo: "Vinayak",
      NumberOfTeam: "0",
      CurrentCTC: "2000",
    },
    {
      id: "5",
      name: "HSEQ",
      imageSrc: avatarImg,
      department: "IT",
      JoiningDate: "5/27/15",
      reportTo: "Vinayak",
      NumberOfTeam: "1",
      CurrentCTC: "2000",
    },
    {
      id: "5",
      name: "Human Resources",
      imageSrc: avatarImg,
      department: "Human Resources",
      JoiningDate: "10/6/13",
      reportTo: "Vinayak",
      NumberOfTeam: "3",
      CurrentCTC: "40000",
    },
    {
      id: "5",
      name: "HSEQ",
      imageSrc: avatarImg,
      department: "Human Resources",
      JoiningDate: "8/15/17",
      reportTo: "Vinayak",
      NumberOfTeam: "2",
      CurrentCTC: "37000",
    },
    {
      id: "5",
      name: "Engineering",
      imageSrc: avatarImg,
      department: "HSEQ",
      JoiningDate: "5/30/14",
      reportTo: "Vinayak",
      NumberOfTeam: "5",
      CurrentCTC: "37000",
    },
  ]);
  const [searchQuery, setSearchQuery] = useState("");
  const [openAddNewTeam, setOpenAddNewTeam] = useState(false);
  const filteredDepartments = departments.filter(
    (department) =>
      department.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      department.code.toLowerCase().includes(searchQuery.toLowerCase())
  );
  // const handleDelete = (id) => {
  //   setDepartments(departments.filter((dept) => dept.id !== id));
  // };
  if (openAddNewTeam) {
    return <AddNewTeamMember />;
  }
  return (
    <div className="container mx-auto mt-8 px-3">
      <div className="flex items-center justify-between mb-11">
        <h1 className="text-3xl font-semibold text-[#101828] tracking-tight">
          Manage Employees
        </h1>
        <div className="flex items-center gap-4">
          <div className="relative">
            <Input
              type="search"
              placeholder="Search"
              className="w-[320px] pl-10 border border-[#D0D5DD] placeholder:font-normal placeholder:text-base placeholder:text-[#667085] "
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <Button
            onClick={() => setOpenAddNewTeam(true)}
            className="gap-2 bg-[#305679] py-4 font-semibold  text-white text-sm"
          >
            <Plus className="w-4" />
            Add New
          </Button>
        </div>
      </div>
      <div className="rounded-md  border-b border-[#EAECF0]">
        <Table>
          <TableHeader className="bg-[#F4F6F9] ">
            <TableRow className="">
              <TableHead className="w-[358px] py-3 pl-5 text-xs text-[#475467] font-medium ">
                Team Member Name
              </TableHead>
              <TableHead className="w-[163  px] py-3 text-start text-xs text-[#475467] font-medium ">
                Department
              </TableHead>
              <TableHead className="w-[120px] py-3 text-start text-xs text-[#475467] font-medium ">
                Joining Date
              </TableHead>
              <TableHead className="w-[164px] py-3 text-start text-xs text-[#475467] font-medium ">
                Report to
              </TableHead>

              <TableHead className="w-[136px] py-3 text-start text-xs text-[#475467] font-medium ">
                Current CTC
              </TableHead>
              <TableHead className=" w-[123px] text-center py-3 pr-5 text-xs text-[#475467] font-medium ">
                Action Items
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredDepartments.map((department) => (
              <TableRow key={department.id}>
                <TableCell className="flex gap-4 items-center w-[358px] py-6 pl-5 text-sm font-medium  text-[#101828]">
                  <Avatar>
                    <AvatarImage src={department.imageSrc} alt="@shadcn" />
                    {/* <AvatarFallback>CN</AvatarFallback> */}
                  </Avatar>{" "}
                  {department.name}
                </TableCell>
                <TableCell className="w-[163px] py-6 text-start text-sm font-normal text-[#475467]">
                  {department.department}
                </TableCell>
                <TableCell className="w-[120px] py-6 text-start text-sm font-normal text-[#475467]">
                  {department.JoiningDate}
                </TableCell>
                <TableCell className="flex gap-4 items-center w-[164px] py-6 text-start text-sm font-normal text-[#475467]">
                  <Avatar>
                    <AvatarImage src={department.imageSrc} alt="@shadcn" />
                  </Avatar>
                  {department.reportTo}
                </TableCell>
                <TableCell className="w-[136px] py-6 text-start text-sm font-normal text-[#475467]">
                  {department.CurrentCTC}
                </TableCell>
                <TableCell className="w-[123px] text-right pr-5">
                  <div className="flex justify-center gap-1">
                    <Dialog>
                      <DialogTrigger>
                        <Button
                          variant="ghost"
                          size="icon"
                          // onClick={() => handleDelete(department.id)}
                        >
                          <Trash2 className="h-3 w-3" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="bg-white w-[400px] rounded-2xl p-6">
                        <DeleteDepartment />
                      </DialogContent>
                    </Dialog>
                    <Dialog>
                      <DialogTrigger>
                        <Button variant="ghost" size="icon">
                          <Pencil className="h-3 w-3" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="bg-white w-[400px] rounded-2xl p-6">
                        <EditDepartment
                          departmentCode={department.department}
                        />
                      </DialogContent>
                    </Dialog>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default ManageTeam;
