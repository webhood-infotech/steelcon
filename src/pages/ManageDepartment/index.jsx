import { useEffect, useState } from "react";
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
import { Edit3Icon, Plus } from "lucide-react";
import { Eye } from "lucide-react";
import { Trash2 } from "lucide-react";
import { Pencil } from "lucide-react";
import AddNewDepartament from "./AddNewDepartment";
import DeleteDepartment from "./DeleteDepartment";
import EditDepartment from "./EditDepartment";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import axios from "axios";
const ManageDepartment = () => {
  const [departments, setDepartments] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    getAllDepartments();
  }, []);

  const getAllDepartments = async () => {
    // fetch all departments
    try {
      const response = await axios(
        "https://steelconbackend.vercel.app/api/admin/departments"
      );
      setDepartments(response.data?.data);

      console.log(response.data.data);
    } catch (err) {
      console.error(err, "=====================");
    }
  };
  const filteredDepartments = departments.filter(
    (department) =>
      department.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      department.code?.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <div className="container mx-auto mt-8 px-3">
      <div className="flex items-center justify-between mb-11">
        <h1 className="text-3xl font-semibold text-[#101828] tracking-tight">
          Manage Department
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
          <Dialog>
            <DialogTrigger>
              <Button className="gap-2 bg-[#305679] py-4 font-semibold  text-white text-sm">
                <Plus className="w-4" />
                Add New
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-white  w-[400px] rounded-2xl p-6">
              <AddNewDepartament getAllDepartments={getAllDepartments} />
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <div className="rounded-md  border-b border-[#EAECF0]">
        <Table>
          <TableHeader className="bg-[#F4F6F9] ">
            <TableRow className="">
              <TableHead className=" w-[784px] py-3 pl-5 text-xs text-[#475467] font-medium ">
                Name
              </TableHead>
              <TableHead className="w-[120px] py-3 text-start text-xs text-[#475467] font-medium ">
                Code
              </TableHead>
              <TableHead className=" w-[160px] text-center py-3 pr-5 text-xs text-[#475467] font-medium ">
                Action Items
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredDepartments.map((department) => (
              <TableRow key={department?._id}>
                <TableCell className=" w-[784px] py-6 pl-5 text-sm font-medium  text-[#101828]">
                  {department.name}
                </TableCell>
                <TableCell className="w-[120px] py-6 text-start text-sm font-normal text-[#475467]">
                  {department.code}
                </TableCell>
                <TableCell className="w-[120px] text-right pr-5">
                  <div className="flex justify-end gap-1">
                    <Button variant="ghost" size="icon">
                      <Eye className="h-3 w-3" />
                    </Button>
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
                        <DeleteDepartment
                          departmentId={department?._id}
                          getAllDepartments={getAllDepartments}
                        />
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
                          departmentCode={department.code}
                          departmentId={department?._id}
                          getAllDepartments={getAllDepartments}
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

export default ManageDepartment;
