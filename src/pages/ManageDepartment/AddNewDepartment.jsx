import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import axios from "axios";
import { DialogClose } from "@/components/ui/dialog";

const AddNewDepartment = ({ getAllDepartments, closeAddNewDialog }) => {
  const [departmentName, setDepartmentName] = useState("");
  const [departmentCode, setDepartmentCode] = useState("");
  const [errors, setErrors] = useState({ name: "", code: "" });
  const [loading, setLoading] = useState(false);

  const validateInputs = () => {
    let newErrors = { name: "", code: "" };
    let isValid = true;

    if (!departmentName.trim()) {
      newErrors.name = "Department name is required";
      isValid = false;
    }

    if (!departmentCode.trim()) {
      newErrors.code = "Department code is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async () => {
    if (!validateInputs()) return;

    try {
      setLoading(true);
      const response = await axios.post(
        "https://steelconbackend.vercel.app/api/admin/departments",
        {
          name: departmentName,
          code: departmentCode,
        }
      );

      // Reset form
      setDepartmentName("");
      setDepartmentCode("");
      setErrors({ name: "", code: "" });
      closeAddNewDialog();
      getAllDepartments();
      setLoading(false);
      console.log(response.data);
    } catch (err) {
      console.error("Error submitting department:", err);
      setLoading(false);
    }
  };
  return (
    <div>
      <div className="flex flex-col gap-5">
        <div className="text-lg font-semibold text-[#101828]">
          Add New Department
        </div>
        <div className="flex flex-col gap-[16px]">
          <div className="grid w-full max-w-sm items-center gap-2">
            <Label
              htmlFor="name"
              className="text-sm font-medium text-[#344054]"
            >
              Name
            </Label>
            <Input
              onChange={(e) => setDepartmentName(e.target.value)}
              value={departmentName}
              type="text"
              id="name"
              placeholder="Department Name"
              className="border border-[#D0D5DD] py-2.5 px-3.5 placeholder:text-[#667085] placeholder:text-base placeholder:font-normal shadow focus:shadow"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          <div className="grid w-full max-w-sm items-center gap-2">
            <Label
              htmlFor="code"
              className="text-sm font-medium text-[#344054]"
            >
              Code
            </Label>
            <Input
              onChange={(e) => setDepartmentCode(e.target.value)}
              value={departmentCode}
              type="text"
              id="code"
              placeholder="Department Code"
              className="border border-[#D0D5DD] py-2.5 px-3.5 placeholder:text-[#667085] placeholder:text-base placeholder:font-normal"
            />
            {errors.code && (
              <p className="text-red-500 text-sm mt-1">{errors.code}</p>
            )}
          </div>
        </div>
        <div className="flex justify-end gap-3 mt-5">
          <DialogClose asChild>
            <button className="cursor-pointer py-2.5 px-4 border border-[#D0D5DD] rounded-lg font-semibold text-base text-[#344054] bg-white">
              Cancel
            </button>
          </DialogClose>
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="cursor-pointer py-2.5 px-4 border border-[#305679] rounded-lg font-semibold text-base text-white bg-[#305679]"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddNewDepartment;
