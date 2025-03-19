import React from "react";
import mail from "../../../assets/images/checkemail.png";
import { Link } from "react-router-dom";
import arrow from "../../../assets/icon/arrow.png";
const CheckEmail = () => {
  return (
    <div className="flex h-screen items-center justify-center p-4">
      <div className="w-[360px] ">
        <div className="flex flex-col items-center gap-[24px]">
          <div className="flex h-[56px] w-[56px] items-center justify-center rounded-full bg-[#DBE6F0]  backdrop-blur-md">
            <img src={mail} alt="email" />
          </div>
          <div className="flex flex-col gap-[12px] ">
            <h2 className="text-3xl font-semibold text-center text-[#101828]">
              Check your email
            </h2>
            <p className="text-base text-center font-normal text-[#475467] ">
              We sent a password reset link to olivia@untitledui.com
            </p>
          </div>
        </div>
        <div className="mt-3">
          <div className="  text-base text-[#475467] text-center font-bold">
            Open gmail account to reset your password
          </div>
        </div>
        <div className="flex items-center justify-center mt-4 gap-1">
          <p className="font-sm font-normal">Didn’t receive the email?</p>
          <Link className="font-sm font-semibold text-[#213B54] hover:underline">
            Click to resend
          </Link>
        </div>
        <div className="mt-5 flex gap-2 items-center justify-center">
          <img src={arrow} className="w-[12px] h-[12px] mt-1" alt="arrow" />
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

export default CheckEmail;
