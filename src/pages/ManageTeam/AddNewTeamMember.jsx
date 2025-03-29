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

const AddNewTeamMember = ({ setShowAddNewEmployee }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    profileImg: "",
    personalEmail: "",
    personalMobile: "",
    emergencyContact: { name: "", mobile: "" },
    workDays: "",
    paidLeaves: "",
    sickLeaves: "",
    isHR: false,
    resignDeduction: "",
    joiningDate: "",
    designation: "",
    department: "",
    teamManager: "",
    reportTo: "",
    deptEmail: "",
    workEmail: "",
    password: "Temp@1234",
    bank: {
      accName: "",
      bankName: "",
      accNumber: "",
      ifsc: "",
      branch: "",
      cancelledCheque: "",
    },
    salary: {
      ctc: "",
      autoTDS: true,
      basicDA: "",
      hra: "",
      conveyance: "",
      other: "",
      arrears: "0",
      profTax: "",
      pf: "",
      tds: "",
      advance: "0",
      totalDeductions: "",
      netPay: "",
      bonus: "",
      gratuity: "",
    },
    aadharNo: "",
    panNo: "",
    uan: "",
    esicNo: "",
    documents: {
      passportPhoto: "",
      aadhar: "",
      addressProof: "",
      panCard: "",
      qualification: "",
      resume: "",
      otherDocs: "",
    },
    remarks: "",
  });

  const [profileImage, setProfileImage] = useState("");
  const [errors, setErrors] = useState({});
  // Handle input changes
  const handleChange = (e, nestedField = null) => {
    const { name, value } = e.target;
    if (nestedField) {
      setFormData((prev) => ({
        ...prev,
        [nestedField]: {
          ...prev[nestedField],
          [name]: value,
        },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  // Handle file uploads
  const handleFileUpload = (e, fieldName, nestedField = null) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        // const fileData = event.target.result;
        const fileData =
          "https://gratisography.com/wp-content/uploads/2025/03/gratisography-cruising-cat-800x525.jpg";

        if (nestedField) {
          setFormData((prev) => ({
            ...prev,
            [nestedField]: {
              ...prev[nestedField],
              [fieldName]: fileData,
            },
          }));
        } else {
          setFormData((prev) => ({
            ...prev,
            [fieldName]: fileData,
          }));
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="container mx-auto mt-8 px-3">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-semibold text-[#101828] tracking-tight">
          Add New Employee
        </h1>
        <div className="flex items-center gap-4">
          <Button
            className="gap-2 bg-white py-4 font-semibold border border-[#D0D5DD] text-[#344054] text-sm hover:bg-[#344054] hover:text-white"
            onClick={() => {
              setFormData({ ...formData });
              setShowAddNewEmployee(false);
            }}
          >
            Cancel
          </Button>
          <Button className="gap-2 bg-[#305679] py-4 font-semibold text-white text-sm">
            Submit
          </Button>
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
                  // defaultValue=""
                  value={formData.firstName}
                  onChange={handleChange}
                  className="border border-[#D0D5DD] py-2.5 px-3.5  placeholder:text-[#667085] placeholder:text-base placeholder:font-normal"
                />
                {errors.firstName && (
                  <p className="text-red-500 text-xs">{errors.firstName}</p>
                )}
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
                  name="middleName"
                  value={formData.middleName}
                  onChange={handleChange}
                  placeholder="Enter middle name"
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
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Enter"
                  className="border border-[#D0D5DD] py-2.5 px-3.5  placeholder:text-[#667085] placeholder:text-base placeholder:font-normal"
                />
                {errors.lastName && (
                  <p className="text-red-500 text-xs">{errors.lastName}</p>
                )}
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor="profileImage"
                  className="text-sm text-medium text-[#344054]"
                >
                  Photograph
                </Label>
                <div className="border rounded-md flex flex-col items-center justify-center p-6 h-[100px] relative">
                  {formData.profileImg ? (
                    <div className="relative w-full h-full">
                      <img
                        src={formData.profileImg}
                        alt="Profile"
                        className="object-contain w-full h-full"
                      />
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute top-0 right-0"
                        onClick={() =>
                          setFormData((prev) => ({ ...prev, profileImg: "" }))
                        }
                      >
                        ×
                      </Button>
                    </div>
                  ) : (
                    <>
                      <Upload className="h-6 w-6 text-muted-foreground mb-2" />
                      <div className="flex flex-col gap-1">
                        <div className="flex gap-1 items-center">
                          <div className="text-sm font-medium">
                            Click to upload
                          </div>
                          <div className="text-xs font-normal text-[#475467]">
                            or drag and drop
                          </div>
                        </div>
                        <div className="text-normal text-center text-sm text-[#475467]">
                          svg / .png / .jpg / .gif / .heic
                        </div>
                      </div>
                      <input
                        type="file"
                        id="profileImage"
                        className="absolute inset-0 opacity-0 cursor-pointer"
                        onChange={(e) => handleFileUpload(e, "profileImg")}
                        accept=".svg,.png,.jpg,.jpeg,.gif,.heic"
                      />
                    </>
                  )}
                </div>
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor="personalEmail"
                  className="text-sm text-medium text-[#344054]"
                >
                  Personal Email
                </Label>
                <Input
                  id="personalEmail"
                  name="personalEmail"
                  value={formData.personalEmail}
                  onChange={handleChange}
                  placeholder="Enter"
                  className="border border-[#D0D5DD] py-2.5 px-3.5  placeholder:text-[#667085] placeholder:text-base placeholder:font-normal"
                />
                {errors.personalEmail && (
                  <p className="text-red-500 text-xs">{errors.personalEmail}</p>
                )}
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor="personalMobile"
                  id="personalMobile"
                  name="personalMobile"
                  value={formData.personalMobile}
                  onChange={handleChange}
                  placeholder="Enter"
                  className="text-sm text-medium text-[#344054]"
                >
                  Personal Mobile No.
                </Label>
                <Input
                  id="mobile"
                  placeholder="Enter"
                  className="border border-[#D0D5DD] py-2.5 px-3.5  placeholder:text-[#667085] placeholder:text-base placeholder:font-normal"
                />
                {errors.personalMobile && (
                  <p className="text-red-500 text-xs">
                    {errors.personalMobile}
                  </p>
                )}
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
                  name="name"
                  value={formData.emergencyContact.name}
                  onChange={(e) => handleChange(e, "emergencyContact")}
                  placeholder="Enter"
                  className="border border-[#D0D5DD] py-2.5 px-3.5  placeholder:text-[#667085] placeholder:text-base placeholder:font-normal"
                />
                {errors.emergencyContactName && (
                  <p className="text-red-500 text-xs">
                    {errors.emergencyContactName}
                  </p>
                )}
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor="emergencyMobile"
                  className="text-sm text-medium text-[#344054]"
                >
                  Emergency Contact No.
                </Label>
                <Input
                  id="emergencyMobile"
                  name="mobile"
                  value={formData.emergencyContact.mobile}
                  onChange={(e) => handleChange(e, "emergencyContact")}
                  placeholder="Enter"
                  className="border border-[#D0D5DD] py-2.5 px-3.5  placeholder:text-[#667085] placeholder:text-base placeholder:font-normal"
                />
                {errors.emergencyContactMobile && (
                  <p className="text-red-500 text-xs">
                    {errors.emergencyContactMobile}
                  </p>
                )}
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
                  htmlFor="joiningDate"
                  className="text-[#344054] font-medium font-sm"
                >
                  Joining Date
                </Label>
                <Input
                  id="joiningDate"
                  name="joiningDate"
                  type="date"
                  value={formData.joiningDate}
                  onChange={handleChange}
                />
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor="lastName"
                  className="text-sm text-medium text-[#344054]"
                >
                  Designation
                </Label>
                <select
                  id="designation"
                  className="w-full border border-[#D0D5DD] py-2.5 px-3.5  text-[#667085] text-base font-normal shadow focus:shadow rounded-md "
                >
                  <option value="">Software Engineer</option>
                  <option value="Engineering"> AI Engineering</option>
                  <option value="Engineering"> MLA Engineering</option>
                  <option value="Marketing"> Product Marketing Manager</option>
                  <option value="Sales">Technical Project Manager</option>
                  <option value="HR">Data Analytics Manager</option>
                  <option value="Sales">Human Resources Manager</option>
                  <option value="Sales">Quality Assurance Supervisor</option>
                  <option value="Sales">Research Associate</option>
                  <option value="Sales">Financial Analyst</option>
                </select>
                {errors.designation && (
                  <p className="text-red-500 text-xs">{errors.designation}</p>
                )}
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor="profileImage"
                  className="text-sm text-medium text-[#344054]"
                >
                  Department
                </Label>
                <select
                  id="department"
                  className="w-full border border-[#D0D5DD] py-2.5 px-3.5  text-[#667085] text-base font-normal shadow focus:shadow rounded-md "
                >
                  <option value="">Software Engineer</option>
                  <option value="Engineering"> Marketing</option>
                  <option value="Engineering"> Sales</option>
                  <option value="Marketing">Operations</option>
                  <option value="Sales">Research & Development </option>
                  <option value="HR">Customer Service</option>
                  <option value="Sales">Legal</option>
                  <option value="Sales">Quality Assurance</option>
                  <option value="Sales">Business Development</option>
                  <option value="Sales">Product Management</option>
                </select>
                {errors.department && (
                  <p className="text-red-500 text-xs">{errors.department}</p>
                )}
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor="reportToManager"
                  className="text-sm text-medium text-[#344054]"
                >
                  Report to Manager
                </Label>
                <select
                  id="reportToManager"
                  className="w-full border border-[#D0D5DD] py-2.5 px-3.5  text-[#667085] text-base font-normal shadow focus:shadow rounded-md "
                >
                  <option value="">Ram</option>
                  <option value="Engineering">Guy Hawkins</option>
                  <option value="Engineering"> Marvin McKinney</option>
                  <option value="Marketing">Albert Flores</option>
                  <option value="Sales">Darlene Robertson</option>
                  <option value="HR">Darlene Robertson</option>
                  <option value="Sales">Eleanor Pena</option>
                </select>
                {errors.teamManager && (
                  <p className="text-red-500 text-xs">
                    {errors.reporttomanager}
                  </p>
                )}
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor="mobile"
                  className="text-sm text-medium text-[#344054]"
                >
                  Department Email
                </Label>
                <Input
                  id="mobile"
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
                      <div className="flex flex-col gap-1">
                        <div className="flex gap-1 items-center">
                          <div className="text-sm font-medium">
                            Click to upload
                          </div>
                          <div className="text-xs font-normal text-[#475467]">
                            or drag and drop
                          </div>
                        </div>
                        <div className="text-normal text-center text-sm text-[#475467]">
                          svg / .png / .jpg / .gif / .heic
                        </div>
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
                      <div className="flex flex-col gap-1">
                        <div className="flex gap-1 items-center">
                          <div className="text-sm font-medium">
                            Click to upload
                          </div>
                          <div className="text-xs font-normal text-[#475467]">
                            or drag and drop
                          </div>
                        </div>
                        <div className="text-normal text-center text-sm text-[#475467]">
                          svg / .png / .jpg / .gif / .heic
                        </div>
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
                      <div className="flex flex-col gap-1">
                        <div className="flex gap-1 items-center">
                          <div className="text-sm font-medium">
                            Click to upload
                          </div>
                          <div className="text-xs font-normal text-[#475467]">
                            or drag and drop
                          </div>
                        </div>
                        <div className="text-normal text-center text-sm text-[#475467]">
                          svg / .png / .jpg / .gif / .heic
                        </div>
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
                      <div className="flex flex-col gap-1">
                        <div className="flex gap-1 items-center">
                          <div className="text-sm font-medium">
                            Click to upload
                          </div>
                          <div className="text-xs font-normal text-[#475467]">
                            or drag and drop
                          </div>
                        </div>
                        <div className="text-normal text-center text-sm text-[#475467]">
                          svg / .png / .jpg / .gif / .heic
                        </div>
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
                      <div className="flex flex-col gap-1">
                        <div className="flex gap-1 items-center">
                          <div className="text-sm font-medium">
                            Click to upload
                          </div>
                          <div className="text-xs font-normal text-[#475467]">
                            or drag and drop
                          </div>
                        </div>
                        <div className="text-normal text-center text-sm text-[#475467]">
                          svg / .png / .jpg / .gif / .heic
                        </div>
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
                      <div className="flex flex-col gap-1">
                        <div className="flex gap-1 items-center">
                          <div className="text-sm font-medium">
                            Click to upload
                          </div>
                          <div className="text-xs font-normal text-[#475467]">
                            or drag and drop
                          </div>
                        </div>
                        <div className="text-normal text-center text-sm text-[#475467]">
                          svg / .png / .jpg / .gif / .heic
                        </div>
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
                      <div className="flex flex-col gap-1">
                        <div className="flex gap-1 items-center">
                          <div className="text-sm font-medium">
                            Click to upload
                          </div>
                          <div className="text-xs font-normal text-[#475467]">
                            or drag and drop
                          </div>
                        </div>
                        <div className="text-normal text-center text-sm text-[#475467]">
                          svg / .png / .jpg / .gif / .heic
                        </div>
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
                      <div className="flex flex-col gap-1">
                        <div className="flex gap-1 items-center">
                          <div className="text-sm font-medium">
                            Click to upload
                          </div>
                          <div className="text-xs font-normal text-[#475467]">
                            or drag and drop
                          </div>
                        </div>
                        <div className="text-normal text-center text-sm text-[#475467]">
                          svg / .png / .jpg / .gif / .heic
                        </div>
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
