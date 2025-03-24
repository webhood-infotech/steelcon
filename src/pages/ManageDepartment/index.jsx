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
import { Plus } from "lucide-react";
import { Eye } from "lucide-react";
import { Trash2 } from "lucide-react";
import { Pencil } from "lucide-react";
import AddNewDepartament from "./AddNewDepartament";
const ManageDepartment = () => {
  const [departments, setDepartments] = useState([
    { id: "1", name: "Maintenance", code: "L8 8HQ" },
    { id: "2", name: "Human Resources", code: "CM7 5EY" },
    { id: "3", name: "Manning", code: "CH66 2RD" },
    { id: "4", name: "IT", code: "LL14 1ER" },
    { id: "5", name: "Manning", code: "NE39 1JU" },
    { id: "5", name: "Operations", code: "HG4 2TE" },
    { id: "5", name: "HSEQ", code: "ME1 1YL" },
    { id: "5", name: "Human Resources", code: "SN10 2RP" },
    { id: "5", name: "HSEQ", code: "KT17 9NL" },
    { id: "5", name: "Engineering", code: "BT78 4RH" },
  ]);
  const [searchQuery, setSearchQuery] = useState("");
  const filteredDepartments = departments.filter(
    (department) =>
      department.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      department.code.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const handleDelete = (id) => {
    setDepartments(departments.filter((dept) => dept.id !== id));
  };
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
          <Button className="gap-2 bg-[#305679] py-4 font-semibold  text-white text-sm">
            <Plus className="w-4" />
            Add New
          </Button>
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
              <TableRow key={department.id}>
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
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleDelete(department.id)}
                    >
                      <Trash2 className="h-3 w-3" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Pencil className="h-3 w-3" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <AddNewDepartament />
    </div>
  );
};

export default ManageDepartment;
