import React from "react";
import loginImge from "../../../assets/image-login.jpg";

const Login = () => {
  return (
    <div className="max-w-[1410px] h-screen py-24 px-20">
      <div className="mx-auto flex justify-center max-w-[1280px]">
        <div className="w-[576px] flex justify-center items-center">
          <div className="py-[195px] px-[108px]">
            <div className="flex flex-col gap-[26px]">
              <div className="flex flex-col gap-[12px]">
                <h2 className="text-3xl font-semibold">Welcome back</h2>
                <p className="text-gray-600 text-base font-normal">
                  Welcome back! Please enter your details.
                </p>
              </div>
              <div className="flex flex-col gap-[20px]">
                <div className="flex flex-col gap-[6px]">
                  <label className="text-sm font-medium text-[#344054]">
                    Username/Email
                  </label>
                  <input
                    type="text"
                    placeholder="Enter"
                    className="w-full p-2 border rounded border-[#D0D5DD]"
                  />
                </div>
                <div className="flex flex-col gap-[6px]">
                  <label className="text-sm font-medium text-[#344054]">
                    Password
                  </label>
                  <input
                    type="password"
                    placeholder="••••••••"
                    className="w-full p-2 border rounded border-[#D0D5DD]"
                  />
                </div>
                <div className="flex justify-between items-center">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-1" />
                    <span className="text-sm font-normal text-[#344054]">
                      Remember for 30 days
                    </span>
                  </label>
                  <a
                    href="/forgotpassword"
                    className="font-semibold text-sm text-[#213B54]"
                  >
                    Forgot password
                  </a>
                </div>

                <button className="w-full bg-[#305679] text-base text-white p-2 font-semibold rounded">
                  Sign in
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[576px] flex justify-center items-center">
          <div className="relative ">
            <img src={loginImge} alt="Testimonial" className=" " />
            <div class="absolute backdrop-blur-[24px] bottom-0 left-0 w-full bg-white/30 bg-opacity-50 text-white p-[32px]">
              <p class="text-3xl text-white font-semibold leading-[38px]">
                “Untitled has saved us thousands of hours of work. We’re able to
                spin up projects and features faster.”
              </p>
              <div class="flex items-start justify-between mt-[32px]">
                <p class="font-semibold text-4xl text-white">Alisa Hester</p>
                <span class="text-white">★★★★★</span>
              </div>
              <div className="flex items-center justify-between mt-[16px]">
                <div className="flex flex-col items-start gap-[4px]">
                  <p class="text-lg font-semibold">Product Manager,Hourglass</p>
                  <p className="text-base font-medium">Web Design Agency</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
