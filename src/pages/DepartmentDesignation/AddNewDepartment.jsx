import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
const AddNewDepartment = () => {
  return (
    <>
      <div>
        <div className="flex flex-col gap-5">
          <div className="text-lg font-semibold text-[#101828]">
            Add New Department
          </div>
          <div className="flex flex-col gap-[16px]">
            <div className="grid w-full max-w-sm items-center gap-2">
              <Label
                htmlFor="email"
                className="text-sm text-medium text-[#344054]"
              >
                Email
              </Label>
              <Input
                type="email"
                id="email"
                placeholder="Email"
                className=" border border-[#D0D5DD] py-2.5 px-3.5   placeholder:text-[#667085] placeholder:text-base placeholder:font-normal shadow focus:shadow"
              />
            </div>
            <div className="grid w-full max-w-sm items-center gap-2">
              <Label
                htmlFor="code"
                className="text-sm text-medium text-[#344054]"
              >
                Code
              </Label>
              <Input
                type="code"
                id="code"
                placeholder="code"
                className="border border-[#D0D5DD] py-2.5 px-3.5  placeholder:text-[#667085] placeholder:text-base placeholder:font-normal"
              />
            </div>
          </div>
          <div className="flex justify-end gap-3 mt-5">
            <div className=" cursor-pointer py-2.5 px-4.5 border border-[#D0D5DD] rounded-lg font-semibold text-base text-[#344054] bg-white">
              Cancel
            </div>
            <div className=" cursor-pointer py-2.5 px-4.5 border border-[#305679] rounded-lg font-semibold text-base text-white bg-[#305679]">
              Submit
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddNewDepartment;
