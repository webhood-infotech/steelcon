import React from "react";
import key from "../../../assets/images/Featured icon.png";
import arrow from "../../../assets/icon/arrow.png";
import { Link } from "react-router-dom";

const SetPassword = () => {
  return (
    <div className="flex h-screen items-center justify-center p-4">
      <div className="max-w-[360px] p-6 ">
        <div className="flex flex-col items-center gap-[24px]">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#DBE6F0]  backdrop-blur-md">
            <img src={key} alt="key" />
          </div>
          <div className="flex flex-col gap-[12px] ">
            <h2 className="text-3xl font-semibold text-center text-[#101828]">
              Set new password
            </h2>
            <p className="text-base text-center font-normal text-[#475467] ">
              Your new password must be different to previously used passwords.
            </p>
          </div>
        </div>
        <div className="mt-8 flex flex-col gap-[24px]">
          <div className="flex flex-col gap-[20px]">
            <div className="flex flex-col gap-[6px]">
              <label className="text-sm font-medium text-[#344054]">
                Password
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full p-2 border rounded-md border-[#D0D5DD] placeholder-[#667085]"
              />
              <p
                className="text-sm font-normal text-[#475467] 
"
              >
                Must be at least 8 characters.
              </p>
            </div>
            <div className="flex flex-col gap-[6px]">
              <label className="text-sm font-medium text-[#344054]">
                Confirm Password
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full p-2 border rounded-md border-[#D0D5DD] placeholder-[#667085]"
              />
            </div>
          </div>

          <button className="w-full bg-[#305679] text-base text-white py-2.5 font-semibold rounded-lg">
            Reset password
          </button>
        </div>
        <div className="mt-8 flex gap-2 items-center justify-center">
          <img src={arrow} className="w-[12px] h-[12px]" alt="arrow" />
          <Link
            to="/login"
            className="text-sm text-[#475467] font-semibold hover:underline"
          >
            Back to log in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SetPassword;
