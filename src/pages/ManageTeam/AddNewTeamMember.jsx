import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import { Plus, Upload, User } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import EditDepartment from "../ManageDepartment/EditDepartment";
import AddNewDepartament from "../ManageDepartment/AddNewDepartment";

const AddNewTeamMember = () => {
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
          Add New Employee
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
      <div className="w-full flex justify-between mb-5 ">
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
                  Photograph
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
                <Label className="text-sm text-medium text-[#344054]">
                  Authorise as an Manpower requester
                </Label>
                <RadioGroup
                  defaultValue="yes"
                  className="flex items-center space-x-18 pt-2"
                >
                  <div className="flex  items-center space-x-2 ">
                    <RadioGroupItem
                      value="yes"
                      id="hr-yes"
                      className=" border-[#305679] text-[#305679] focus:ring-[#305679]"
                    />
                    <Label
                      htmlFor="hr-yes"
                      className="cursor-pointer text-sm font-normal text-[#667085]"
                    >
                      Yes
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem
                      value="no"
                      id="hr-no"
                      className=" border-[#305679] text-[#305679] focus:ring-[#305679]"
                    />
                    <Label
                      htmlFor="hr-no"
                      className="cursor-pointer text-sm font-normal text-[#667085]"
                    >
                      No
                    </Label>
                  </div>
                </RadioGroup>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="border border-b-[rgb(234_236_240_/_10%)]"></div>
      <div className="w-full flex justify-between my-5">
        <div className=" min-w-[280px] flex flex-col gap-1">
          <h2 className="text-sm font-medium text-[#344054]">
            Company Details
          </h2>
          <p className="text-xs font-normal text-[#475467]">
            Update your company details
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
                  Employee ID No
                </Label>
                <Input
                  id="firstName"
                  placeholder="Enter your First Name"
                  defaultValue="Olivia"
                  className="border border-[#D0D5 DD] py-2.5 px-3.5  placeholder:text-[#667085] placeholder:text-base placeholder:font-normal"
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
                  Report to (If applicable)
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
                  Department Email
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
                  Work Email (If applicable)
                </Label>
                <Input
                  id="emergencyNo"
                  placeholder="Enter"
                  className="border border-[#D0D5DD] py-2.5 px-3.5  placeholder:text-[#667085] placeholder:text-base placeholder:font-normal"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="border border-b-[rgb(234_236_240_/_10%)]"></div>
      <div className="w-full flex justify-between my-5 ">
        <div className=" min-w-[280px] flex flex-col gap-1">
          <h2 className="text-sm font-medium text-[#344054]">Salary Details</h2>
          <p className="text-xs font-normal text-[#475467]">
            Update your salary details
          </p>
        </div>
        <Card className="border-0 shadow-sm w-full">
          <CardContent className="py-1 px-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label
                  htmlFor="Total CTC"
                  className="text-sm text-medium text-[#344054]"
                >
                  Total CTC
                </Label>
                <Input
                  id="Total CTC"
                  placeholder="Enter"
                  // defaultValue="Olivia"
                  className="border border-[#D0D5DD] py-2.5 px-3.5  placeholder:text-[#667085] placeholder:text-base placeholder:font-normal"
                />
              </div>
              <div className="space-y-2">
                <Label className="text-sm text-medium text-[#344054]">
                  Auto-TDS
                </Label>
                <RadioGroup
                  defaultValue="yes"
                  className="flex items-center space-x-28 pt-2"
                >
                  <div className="flex  items-center space-x-2 ">
                    <RadioGroupItem
                      value="yes"
                      id="hr-yes"
                      className=" border-[#305679] text-[#305679] focus:ring-[#305679]"
                    />
                    <Label
                      htmlFor="hr-yes"
                      className="cursor-pointer text-sm font-normal text-[#667085]"
                    >
                      Yes
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem
                      value="no"
                      id="hr-no"
                      className=" border-[#305679] text-[#305679] focus:ring-[#305679]"
                    />
                    <Label
                      htmlFor="hr-no"
                      className="cursor-pointer text-sm font-normal text-[#667085]"
                    >
                      No
                    </Label>
                  </div>
                </RadioGroup>
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor="Basic+DA"
                  className="text-sm text-medium text-[#344054]"
                >
                  Basic+DA
                </Label>
                <Input
                  id="Basic+DA"
                  placeholder="Enter"
                  // defaultValue="Rhye"
                  className="border border-[#D0D5DD] py-2.5 px-3.5  placeholder:text-[#667085] placeholder:text-base placeholder:font-normal"
                />
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor="House Rent Allowance"
                  className="text-sm text-medium text-[#344054]"
                >
                  House Rent Allowance
                </Label>
                <Input
                  id="House Rent Allowance"
                  placeholder="Enter"
                  // defaultValue="Rhye"
                  className="border border-[#D0D5DD] py-2.5 px-3.5  placeholder:text-[#667085] placeholder:text-base placeholder:font-normal"
                />
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor="TPT / Conveyances"
                  className="text-sm text-medium text-[#344054]"
                >
                  TPT / Conveyance
                </Label>
                <Input
                  id="TPT / Conveyance"
                  placeholder="Enter"
                  className="border border-[#D0D5DD] py-2.5 px-3.5  placeholder:text-[#667085] placeholder:text-base placeholder:font-normal"
                />
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor="Other"
                  className="text-sm text-medium text-[#344054]"
                >
                  Other
                </Label>
                <Input
                  id="Other"
                  placeholder="Enter"
                  className="border border-[#D0D5DD] py-2.5 px-3.5  placeholder:text-[#667085] placeholder:text-base placeholder:font-normal"
                />
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor="Arrear Salary"
                  className="text-sm text-medium text-[#344054]"
                >
                  Arrear Salary
                </Label>
                <Input
                  id="Arrear Salary"
                  placeholder="Enter"
                  className="border border-[#D0D5DD] py-2.5 px-3.5  placeholder:text-[#667085] placeholder:text-base placeholder:font-normal"
                />
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor="Professional Tax"
                  className="text-sm text-medium text-[#344054]"
                >
                  Professional Tax
                </Label>
                <Input
                  id="Professional Tax"
                  placeholder="Enter"
                  className="border border-[#D0D5DD] py-2.5 px-3.5  placeholder:text-[#667085] placeholder:text-base placeholder:font-normal"
                />
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="Provident Fund"
                  className="text-sm text-medium text-[#344054]"
                >
                  Provident Fund
                </Label>
                <Input
                  id="Provident Fund"
                  placeholder="Enter"
                  className="border border-[#D0D5DD] py-2.5 px-3.5  placeholder:text-[#667085] placeholder:text-base placeholder:font-normal"
                />
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor="TDS"
                  className="text-sm text-medium text-[#344054]"
                >
                  TDS
                </Label>
                <div className="flex items-center">
                  <Input
                    id="TDS"
                    placeholder="Enter"
                    className=" flex-1 border border-[#D0D5DD] py-2.5 px-3.5  placeholder:text-[#667085] placeholder:text-base placeholder:font-normal"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor="Advance"
                  className="text-sm text-medium text-[#344054]"
                >
                  Advance
                </Label>
                <div className="flex items-center ">
                  <Input
                    id="Advance"
                    defaultValue="1.5"
                    className=" flex-1 border border-[#D0D5DD] py-2.5 px-3.5  placeholder:text-[#667085] placeholder:text-base placeholder:font-normal"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor="Total Deductions"
                  className="text-sm text-medium text-[#344054]"
                >
                  Total Deductions
                </Label>
                <Input
                  id="Total Deductions"
                  placeholder="Enter"
                  className="border border-[#D0D5DD] py-2.5 px-3.5  placeholder:text-[#667085] placeholder:text-base placeholder:font-normal"
                />
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor="Net Amount"
                  className="text-sm text-medium text-[#344054]"
                >
                  Net Amount
                </Label>
                <Input
                  id="Net Amount"
                  placeholder="Enter"
                  className="border border-[#D0D5DD] py-2.5 px-3.5  placeholder:text-[#667085] placeholder:text-base placeholder:font-normal"
                />
              </div>
              <div className="space-y-3  min-w-[339px] ">
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
              <div className="space-y-2">
                <Label
                  htmlFor="Bonus ( Variable Pay )"
                  className="text-sm text-medium text-[#344054]"
                >
                  Bonus ( Variable Pay )
                </Label>
                <Input
                  id="Bonus ( Variable Pay )"
                  placeholder="Enter"
                  className="border border-[#D0D5DD] py-2.5 px-3.5  placeholder:text-[#667085] placeholder:text-base placeholder:font-normal"
                />
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor="Gratuity"
                  className="text-sm text-medium text-[#344054]"
                >
                  Gratuity
                </Label>
                <Input
                  id="Gratuity"
                  placeholder="Enter"
                  className="border border-[#D0D5DD] py-2.5 px-3.5  placeholder:text-[#667085] placeholder:text-base placeholder:font-normal"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="w-full flex justify-between mt-5 ">
        <div className=" min-w-[280px] flex flex-col gap-1">
          <h2 className="text-sm font-medium text-[#344054]">
            Banking Details
          </h2>
          <p className="text-xs font-normal text-[#475467]">
            Update your finance details
          </p>
        </div>
        <Card className="border-0 shadow-sm w-full">
          <CardContent className="py-1 px-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label
                  htmlFor="Account Name"
                  className="text-sm text-medium text-[#344054]"
                >
                  Account Name
                </Label>
                <Input
                  type="text"
                  id="Account Name"
                  placeholder="Enter your Account Name"
                  defaultValue="Olivia"
                  className="border border-[#D0D5DD] py-2.5 px-3.5  placeholder:text-[#667085] placeholder:text-base placeholder:font-normal"
                />
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor="Bank Name"
                  className="text-sm text-medium text-[#344054]"
                >
                  Bank Name
                </Label>
                <Input
                  id="Bank Name"
                  placeholder="State Bank of India"
                  defaultValue="Rhye"
                  className="border border-[#D0D5DD] py-2.5 px-3.5  placeholder:text-[#667085] placeholder:text-base placeholder:font-normal"
                />
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor="accountNumber"
                  className="text-sm text-medium text-[#344054]"
                >
                  Account Number
                </Label>
                <Input
                  id="accountNumber"
                  type="number"
                  placeholder="xxxxxxxxxxxx"
                  className="border border-[#D0D5DD] py-2.5 px-3.5 placeholder:text-[#667085] placeholder:text-base placeholder:font-normal appearance-none"
                />
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor="IFSC"
                  className="text-sm text-medium text-[#344054]"
                >
                  IFSC
                </Label>
                <Input
                  id="IFSC"
                  type="IFSC"
                  placeholder="xxxxxxxxxxxx"
                  className="border border-[#D0D5DD] py-2.5 px-3.5 placeholder:text-[#667085] placeholder:text-base placeholder:font-normal appearance-none"
                />
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="Branch Name"
                  className="text-sm text-medium text-[#344054]"
                >
                  Branch Name
                </Label>
                <Input
                  id="Branch Name"
                  type="Branch Name"
                  placeholder="Enter Branch Name"
                  className="border border-[#D0D5DD] py-2.5 px-3.5  placeholder:text-[#667085] placeholder:text-base placeholder:font-normal"
                />
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor="Cancelled Cheque"
                  className="text-sm text-medium text-[#344054]"
                >
                  Cancelled Cheque
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
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="border border-b-[rgb(234_236_240_/_10%)]"></div>
      <div className="w-full flex justify-between my-5 ">
        <div className=" min-w-[280px] flex flex-col gap-1">
          <h2 className="text-sm font-medium text-[#344054]">
            Identification Details
          </h2>
          <p className="text-xs font-normal text-[#475467]">
            Update your personal identification details
          </p>
        </div>
        <Card className="border-0 shadow-sm w-full">
          <CardContent className="py-1 px-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label
                  htmlFor="Aadhar Card Number"
                  className="text-sm text-medium text-[#344054]"
                >
                  Aadhar Card Number
                </Label>
                <Input
                  id="Aadhar Card Number"
                  placeholder="Enter"
                  // defaultValue="Olivia"
                  className="border border-[#D0D5DD] py-2.5 px-3.5  placeholder:text-[#667085] placeholder:text-base placeholder:font-normal"
                />
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor="PAN"
                  className="text-sm text-medium text-[#344054]"
                >
                  PAN
                </Label>
                <Input
                  id="PAN"
                  placeholder="Enter"
                  // defaultValue="Rhye"
                  className="border border-[#D0D5DD] py-2.5 px-3.5  placeholder:text-[#667085] placeholder:text-base placeholder:font-normal"
                />
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor="Provident Fund (UAN)"
                  className="text-sm text-medium text-[#344054]"
                >
                  Provident Fund (UAN)
                </Label>
                <Input
                  id="Provident Fund (UAN)"
                  placeholder="Enter"
                  // defaultValue="Rhye"
                  className="border border-[#D0D5DD] py-2.5 px-3.5  placeholder:text-[#667085] placeholder:text-base placeholder:font-normal"
                />
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor="ESIC No."
                  className="text-sm text-medium text-[#344054]"
                >
                  ESIC No.
                </Label>
                <Input
                  id="ESIC No."
                  placeholder="Enter"
                  className="border border-[#D0D5DD] py-2.5 px-3.5  placeholder:text-[#667085] placeholder:text-base placeholder:font-normal"
                />
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor="Passport Size Photograph (File Attachment)"
                  className="text-sm text-medium text-[#344054]"
                >
                  Passport Size Photograph (File Attachment)
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
                  htmlFor="Proof of Identity – Aadhar (File Attachment)"
                  className="text-sm text-medium text-[#344054]"
                >
                  Proof of Identity – Aadhar (File Attachment)
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
                  htmlFor="Proof of Permanent or Current Address – Passport / Driving License / Voter ID / Ration Card / Utility Bill / Rental Agreement Copy"
                  className="text-sm text-medium text-[#344054]"
                >
                  Proof of Permanent or Current Address – Passport / Driving
                  License / Voter ID / Ration Card / Utility Bill / Rental
                  Agreement Copy
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
                  htmlFor="PAN"
                  className="text-sm text-medium text-[#344054]"
                >
                  PAN
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
                  htmlFor="Proof of Qualification – Latest Consolidated Mark Statements / Degree Certificate / Any relevant course certificate or Diploma"
                  className="text-sm text-medium text-[#344054]"
                >
                  Proof of Qualification – Latest Consolidated Mark Statements /
                  Degree Certificate / Any relevant course certificate or
                  Diploma
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
                  htmlFor="Copy of Latest CV / Resume"
                  className="text-sm text-medium text-[#344054]"
                >
                  Copy of Latest CV / Resume
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
                  htmlFor="Other Relevant Documents"
                  className="text-sm text-medium text-[#344054]"
                >
                  Other Relevant Documents
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
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="w-full flex justify-between my-5 ">
        <div className="min-w-[280px] flex flex-col gap-1">
          <label className="text-sm font-medium text-[#344054]">
            Any Additional Information /Remarks
          </label>
          <p className="text-sm font-normal text-[#475467]">
            Fill in the following details
          </p>
        </div>
        <div className="border rounded-lg p-5 w-full shadow-sm">
          <label className="text-sm font-medium text-[#344054]">Remarks</label>
          <textarea
            className="mt-2 w-full h-38 border rounded-md p-3  text-gray-800"
            placeholder="Enter"
          />
        </div>
      </div>
    </div>
  );
};
export default AddNewTeamMember;
