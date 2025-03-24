import React, { useState } from "react";
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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Edit, Trash2, User } from "lucide-react";
import { cn } from "@/lib/utils";

const initialManagers = [
  {
    name: "Arlene McCoy",
    department: "HSEQ",
    joiningDate: "9/18/16",
    numberOfTeam: 4,
    currentCTC: "Rs 40,000",
  },
  {
    name: "Esther Howard",
    department: "Manning",
    joiningDate: "9/23/16",
    numberOfTeam: 5,
    currentCTC: "Rs 40,000",
  },
  {
    name: "Jacob Jones",
    department: "Maintenance",
    joiningDate: "10/28/12",
    numberOfTeam: 1,
    currentCTC: "Rs 40,000",
  },
  {
    name: "Guy Hawkins",
    department: "Maintenance",
    joiningDate: "6/21/19",
    numberOfTeam: 4,
    currentCTC: "Rs 1000",
  },
];

const ManageManagers = () => {
  const [managers, setManagers] = useState(initialManagers);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredManagers = managers.filter(
    (manager) =>
      manager.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      manager.department.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getAvatarColor = (name) => {
    const nameHash = name
      .split("")
      .reduce((acc, char) => char.charCodeAt(0) + acc, 0);
    const colors = [
      "bg-red-500",
      "bg-yellow-500",
      "bg-green-500",
      "bg-blue-500",
      "bg-indigo-500",
      "bg-purple-500",
      "bg-pink-500",
    ];
    return colors[nameHash % colors.length];
  };

  return (
    <div className="p-4 md:p-6">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-4 md:mb-6">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4 md:mb-0">
          Manage Managers
        </h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <Input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full md:w-64"
          />
          <Button>+ Add New</Button>
        </div>
      </div>

      <div className="border rounded-md shadow-sm">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px] md:w-[120px]">Name</TableHead>
              <TableHead>Department</TableHead>
              <TableHead>Joining Date</TableHead>
              <TableHead>Number of Team</TableHead>
              <TableHead>Current CTC</TableHead>
              <TableHead className="text-right">Action Items</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredManagers.map((manager, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium flex items-center gap-2">
                  <Avatar className="h-8 w-8">
                    <AvatarImage
                      src={`https://source.unsplash.com/random/50x50/?portrait&${index}`}
                    />
                    <AvatarFallback
                      className={cn(
                        getAvatarColor(manager.name),
                        "text-white font-semibold"
                      )}
                    >
                      {manager.name.substring(0, 2).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  {manager.name}
                </TableCell>
                <TableCell>{manager.department}</TableCell>
                <TableCell>{manager.joiningDate}</TableCell>
                <TableCell>{manager.numberOfTeam}</TableCell>
                <TableCell>{manager.currentCTC}</TableCell>
                <TableCell className="text-right space-x-2">
                  <Button variant="outline" size="icon">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button variant="destructive" size="icon">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default ManageManagers;
