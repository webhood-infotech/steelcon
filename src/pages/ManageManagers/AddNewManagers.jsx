import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import { Plus, Upload, User } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import EditDepartment from "../ManageDepartment/EditDepartment";
import AddNewDepartament from "../ManageDepartment/AddNewDepartament";

const AddNewManagers = () => {
  const [managers, setManagers] = useState([
    { id: "1", name: "Maintenance", code: "L8 8HQ" },
    { id: "2", name: "Human Resources", code: "CM7 5EY" },
    { id: "3", name: "Manning", code: "CH66 2RD" },
    { id: "4", name: "IT", code: "LL14 1ER" },
    { id: "5", name: "Manning", code: "NE39 1JU" },
    { id: "6", name: "Operations", code: "HG4 2TE" },
    { id: "7", name: "HSEQ", code: "ME1 1YL" },
    { id: "8", name: "Human Resources", code: "SN10 2RP" },
    { id: "9", name: "HSEQ", code: "KT17 9NL" },
    { id: "10", name: "Engineering", code: "BT78 4RH" },
  ]);

  const [searchQuery, setSearchQuery] = useState("");
  const filteredDepartments = managers.filter(
    (department) =>
      department.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      department.code.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const [profileImage, setProfileImage] = useState("");

  // const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const file = e.target.files?.[0];
  //   if (file) {
  //     const reader = new FileReader();
  //     reader.onload = (e) => {
  //       setProfileImage(e.target?.result as string);
  //     };
  //     reader.readAsDataURL(file);
  //   }
  // };

  return (
    <div className="container mx-auto mt-8 px-3">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-semibold text-[#101828] tracking-tight">
          Add New Manager
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
              <AddNewDepartament />
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <div className="w-full flex justify-between ">
        <div className=" min-w-[280px] flex flex-col gap-1">
          <h2 className="text-sm font-medium text-[#344054]">Personal info</h2>
          <p className="text-xs font-normal text-[#475467]">
            Fill in the following details
          </p>
        </div>
        <Card className="border-0 shadow-sm w-full">
          <CardContent className="py-1 px-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label
                  htmlFor="firstName"
                  className="text-sm text-medium text-[#344054]"
                >
                  First name
                </Label>
                <Input
                  id="firstName"
                  placeholder="Enter your First Name"
                  defaultValue="Olivia"
                  className="border border-[#D0D5DD] py-2.5 px-3.5  placeholder:text-[#667085] placeholder:text-base placeholder:font-normal"
                />
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor="middleName"
                  className="text-sm text-medium text-[#344054]"
                >
                  Middle Name
                </Label>
                <Input
                  id="middleName"
                  placeholder="Enter your Middle Name"
                  defaultValue="Rhye"
                  className="border border-[#D0D5DD] py-2.5 px-3.5  placeholder:text-[#667085] placeholder:text-base placeholder:font-normal"
                />
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor="lastName"
                  className="text-sm text-medium text-[#344054]"
                >
                  Last name
                </Label>
                <Input
                  id="lastName"
                  placeholder="Enter your Last Name"
                  defaultValue="Rhye"
                  className="border border-[#D0D5DD] py-2.5 px-3.5  placeholder:text-[#667085] placeholder:text-base placeholder:font-normal"
                />
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor="profileImage"
                  className="text-sm text-medium text-[#344054]"
                >
                  Profile Image
                </Label>
                <div className="border rounded-md flex flex-col items-center justify-center p-6 h-[100px] relative">
                  {profileImage ? (
                    <div className="relative w-full h-full">
                      <img
                        src={profileImage}
                        alt="Profile"
                        className="object-contain w-full h-full"
                      />
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute top-0 right-0"
                        onClick={() => setProfileImage(null)}
                      >
                        ×
                      </Button>
                    </div>
                  ) : (
                    <>
                      <Upload className="h-6 w-6 text-muted-foreground mb-2" />
                      <div className="text-sm font-medium">Click to upload</div>
                      <div className="text-xs text-muted-foreground">
                        or drag and drop
                      </div>
                      <div className="text-xs text-muted-foreground mt-1">
                        svg / png / jpg / gif / heic
                      </div>
                      <input
                        type="file"
                        id="profileImage"
                        className="absolute inset-0 opacity-0 cursor-pointer"
                        // onChange={handleImageUpload}
                        accept=".svg,.png,.jpg,.jpeg,.gif,.heic"
                      />
                    </>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="email"
                  className="text-sm text-medium text-[#344054]"
                >
                  Personal Email
                </Label>
                <Input
                  id="email"
                  placeholder="Enter"
                  className="border border-[#D0D5DD] py-2.5 px-3.5  placeholder:text-[#667085] placeholder:text-base placeholder:font-normal"
                />
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor="mobile"
                  className="text-sm text-medium text-[#344054]"
                >
                  Personal Mobile No.
                </Label>
                <Input
                  id="mobile"
                  placeholder="Enter"
                  className="border border-[#D0D5DD] py-2.5 px-3.5  placeholder:text-[#667085] placeholder:text-base placeholder:font-normal"
                />
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="emergencyName"
                  className="text-sm text-medium text-[#344054]"
                >
                  Emergency Contact Name
                </Label>
                <Input
                  id="emergencyName"
                  placeholder="Enter"
                  className="border border-[#D0D5DD] py-2.5 px-3.5  placeholder:text-[#667085] placeholder:text-base placeholder:font-normal"
                />
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor="emergencyNo"
                  className="text-sm text-medium text-[#344054]"
                >
                  Emergency Contact No.
                </Label>
                <Input
                  id="emergencyNo"
                  placeholder="Enter"
                  className="border border-[#D0D5DD] py-2.5 px-3.5  placeholder:text-[#667085] placeholder:text-base placeholder:font-normal"
                />
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="workDays"
                  className="text-sm text-medium text-[#344054]"
                >
                  Work Days
                </Label>
                <Input
                  id="workDays"
                  placeholder="Enter"
                  className="border border-[#D0D5DD] py-2.5 px-3.5  placeholder:text-[#667085] placeholder:text-base placeholder:font-normal"
                />
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor="paidLeaves"
                  className="text-sm text-medium text-[#344054]"
                >
                  Paid Leaves
                </Label>
                <div className="flex items-center">
                  <Input
                    id="paidLeaves"
                    placeholder="Enter"
                    className=" flex-1 border border-[#D0D5DD] py-2.5 px-3.5 rounded-l-md rounded-r-none placeholder:text-[#667085] placeholder:text-base placeholder:font-normal"
                  />
                  <div className="bg-white border font-semibold text-base rounded-r-md px-3 py-1.5 ">
                    Days
                  </div>
                </div>
              </div>

              {/* Sixth row */}
              <div className="space-y-2">
                <Label
                  htmlFor="sickLeaves"
                  className="text-sm text-medium text-[#344054]"
                >
                  Sick Leaves
                </Label>
                <div className="flex items-center ">
                  <Input
                    id="sickLeaves"
                    defaultValue="1.5"
                    className=" flex-1 border border-[#D0D5DD] py-2.5 px-3.5 rounded-l-md rounded-r-none placeholder:text-[#667085] placeholder:text-base placeholder:font-normal"
                  />
                  <div className="bg-white border font-semibold text-base rounded-r-md px-3 py-1.5 ">
                    Days
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <Label className="text-sm text-medium text-[#344054]">
                  Authorise as an HR
                </Label>
                <RadioGroup
                  defaultValue="yes"
                  className="flex items-center space-x-18 pt-2"
                >
                  <div className="flex  items-center space-x-2 ">
                    <RadioGroupItem value="yes" id="hr-yes" />
                    <Label
                      htmlFor="hr-yes"
                      className="cursor-pointer text-sm font-normal text-[#667085]"
                    >
                      Yes
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="hr-no" />
                    <Label
                      htmlFor="hr-no"
                      className="cursor-pointer text-sm font-normal text-[#667085]"
                    >
                      No
                    </Label>
                  </div>
                </RadioGroup>
              </div>
              <div className="space-y-3 col-span-2 max-w-[339px]">
                <Label
                  htmlFor="deduction"
                  className="text-sm text-medium text-[#344054]"
                >
                  Enter deduction amount during resignation
                </Label>
                <div className="flex items-center">
                  <Select defaultValue="inr">
                    <SelectTrigger className="w-24 rounded-l-md rounded-r-none border border-[#D0D5DD] border-r-0 py-2.5 px-3">
                      <SelectValue placeholder="Currency" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="inr">INR</SelectItem>
                      <SelectItem value="usd">USD</SelectItem>
                      <SelectItem value="eur">EUR</SelectItem>
                      <SelectItem value="gbp">GBP</SelectItem>
                    </SelectContent>
                  </Select>
                  <Input
                    id="deduction"
                    placeholder="Enter"
                    className="flex-1 border border-[#D0D5DD] border-l-0  py-2.5 px-3.5 rounded-l-none rounded-r-md placeholder:text-[#667085] placeholder:text-base placeholder:font-normal"
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AddNewManagers;
