import React from "react";
import { Link } from "react-router-dom";
import arrow from "../../../assets/icon/arrow.png";
import key from "../../../assets/images/Featured icon.png";
const ForgotPassword = () => {
  return (
    <div className="flex h-screen items-center justify-center p-4">
      <div className="min-w-[360px] p-6 ">
        <div className="flex flex-col items-center gap-[24px]">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#EDF2F8] ">
            <img src={key} alt="key" />
          </div>
          <div className="flex flex-col gap-[12px] ">
            <h2 className="text-3xl font-semibold text-center text-[#101828]">
              Forgot password?
            </h2>
            <p className="text-base font-normal text-[#475467] ">
              No worries, we’ll send you reset instructions.
            </p>
          </div>
        </div>
        <div className="mt-8 flex flex-col gap-[24px]">
          <div className="flex flex-col gap-[6px]">
            <label className="text-sm font-medium text-[#344054]">Email</label>
            <input
              type="text"
              placeholder="Enter your email"
              className="w-full p-2 border rounded-md border-[#D0D5DD] placeholder-[#667085]"
            />
          </div>
          <button className="cursor-pointer w-full bg-[#305679] text-base text-white py-2.5 font-semibold rounded-lg">
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

export default ForgotPassword;
