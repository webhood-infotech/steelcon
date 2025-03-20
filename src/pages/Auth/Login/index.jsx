import React, { useState } from "react";
import loginImge from "../../../assets/images/image-login.jpg";
import { Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUser } from "@/redux/authSlice";
const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [apiError, setApiError] = useState("");
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = "Username/Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 4) {
      newErrors.password = "Password must be at least 4 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setApiError("");

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      const response = await axios.post(
        "https://steelconbackend.vercel.app/api/route/auth-post",
        {
          email: formData.email,
          password: formData.password,
        }
      );
      setIsLoading(false);
      dispatch(setUser(response?.data));
      if (response.data) {
        if (response.data.token) {
          localStorage.setItem("token", response.data.token);

          if (formData.rememberMe) {
            localStorage.setItem("userEmail", formData.email);
          } else {
            localStorage.removeItem("userEmail");
          }
        }
        if (response.data.isFirstUser === true) {
          navigate("/createpassword");
        } else {
          navigate("/");
        }
      }
    } catch (error) {
      setIsLoading(false);
      const errorMessage =
        error?.response?.data?.err ||
        "An error occurred. Please try again later.";
      setApiError(errorMessage);
    }
  };

  return (
    <div className="max-w-[1280px] mx-auto mt-7 px-20">
      <div className="flex justify-center gap-[128px]">
        <div className="max-w-[576px] flex justify-center items-center">
          <form
            onSubmit={handleSubmit}
            className="min-w-[360px] h-fit flex flex-col gap-[26px]"
          >
            <div className="flex flex-col gap-[12px]">
              <h2 className="text-3xl font-semibold">Welcome back</h2>
              <p className="text-gray-600 text-base font-normal">
                Welcome back! Please enter your details.
              </p>
            </div>
            <div className="flex flex-col gap-[20px]">
              {apiError && (
                <div className="p-3 bg-red-100 border border-red-400 text-red-700 rounded">
                  {apiError}
                </div>
              )}
              <div className="flex flex-col gap-[6px]">
                <label className="text-sm font-medium text-[#344054]">
                  Username/Email
                </label>
                <input
                  type="text"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full p-2 border rounded-md ${
                    errors.email ? "border-red-500" : "border-[#D0D5DD]"
                  }`}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                )}
              </div>
              <div className="flex flex-col gap-[6px]">
                <label className="text-sm font-medium text-[#344054]">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className={`w-full p-2 border rounded-md ${
                    errors.password ? "border-red-500" : "border-[#D0D5DD]"
                  }`}
                />
                {errors.password && (
                  <p className="text-red-500 text-xs mt-1">{errors.password}</p>
                )}
              </div>
              <div className="flex justify-between items-center">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="remember"
                    checked={formData.rememberMe}
                    onChange={handleChange}
                    className="mr-1 mt-0.5 h-[15px] w-[16px] rounded-lg border-[#D0D5DD]"
                  />
                  <span className="text-sm font-medium text-[#344054]">
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
              <button
                type="submit"
                disabled={isLoading}
                className="cursor-pointer w-full bg-[#305679] text-base text-white p-2 font-semibold rounded"
              >
                {isLoading ? "Signing in..." : "Sign in"}
              </button>
            </div>
          </form>
        </div>
        <div className="w-[576px] flex justify-center items-center">
          <div className="relative w-[100%]">
            <img
              src={loginImge}
              alt="Testimonial"
              className=" w-[100%] object-cover h-[645px] "
            />
            <div class="absolute backdrop-blur-[24px] bottom-0 left-0 w-full bg-white/30 bg-opacity-50 text-white px-[28px] py-[20px]">
              <p class="text-3xl text-white font-semibold leading-[34px]">
                “Untitled has saved us thousands of hours of work. We’re able to
                spin up projects and features faster.”
              </p>
              <div class="flex items-start justify-between mt-[28px]">
                <p class="font-semibold text-4xl text-white">Alisa Hester</p>
                <span class="flex gap-1 ">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} className="fill-current" />
                  ))}
                </span>
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
