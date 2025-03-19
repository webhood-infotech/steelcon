import React, { useState } from "react";
import key from "../../../assets/images/Featured icon.png";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
// import arrow from "../../../assets/icon/arrow.png";
// import { Link } from "react-router-dom";

const ConfirmPassword = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    general: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {username} = useSelector((state) => state.auth.user);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear specific error when user starts typing in that field
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  // Validate username
  const validateUsername = (username) => {
    if (!username.trim()) {
      return "Username is required";
    }

    if (username.trim().length < 3) {
      return "Username must be at least 3 characters";
    }

    if (!/^[a-zA-Z0-9_]+$/.test(username)) {
      return "Username can only contain letters, numbers, and underscores";
    }

    return "";
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Reset all errors
    const newErrors = {
      username: "",
      password: "",
      confirmPassword: "",
      general: "",
    };

    // Validation for username
    newErrors.username = validateUsername(formData.username);

    // Password validation
    if (formData.password.length < 4) {
      newErrors.password = "Password must be at least 4 characters";
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    // Check if there are any errors
    if (newErrors.username || newErrors.password || newErrors.confirmPassword) {
      setErrors(newErrors);
      return;
    }

    setErrors(newErrors);
    setLoading(true);
    try {
      const response = await fetch(
        "https://steelconbackend.vercel.app/api/route/register-put",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userId: "67d0ec4f77ec10853c822c3f",
            userName: formData.username,
            newPassword: formData.confirmPassword,
          }),
        }
      );
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Registration failed");
      }
      // Handle successful registration
      console.log("Registration successful:", data);
      navigate("/");
      // You might want to redirect or show a success message here
    } catch (err) {
      setErrors((prev) => ({
        ...prev,
        general: err.message || "Something went wrong",
      }));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex h-screen items-center justify-center p-4">
      <div className="w-[360px] ">
        <div className="flex flex-col items-center gap-[24px]">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#DBE6F0]  backdrop-blur-md">
            <img src={key} alt="key" />
          </div>
          <div className="flex flex-col gap-[12px] ">
            <h2 className="text-3xl font-semibold text-center text-[#101828]">
              Create your password
            </h2>
            <p className="text-base text-center font-normal text-[#475467] ">
              Set a secure password to protect your account
            </p>
          </div>
        </div>

        {/* General Error display */}
        {errors.general && (
          <div className="mt-4 p-3 bg-red-50 border border-red-200 text-red-600 rounded-md">
            {errors.general}
          </div>
        )}

        <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-[24px]">
          <div className="flex flex-col gap-[20px]">
            <div className="flex flex-col gap-[6px]">
              <label className="text-sm font-medium text-[#344054]">
                Username
              </label>
              <input
                type="text"
                name="username"
                value={formData.username || username}
                onChange={handleChange}
                placeholder="Enter your username"
                className={`w-full p-2 border rounded-md ${
                  errors.username ? "border-red-500" : "border-[#D0D5DD]"
                } placeholder-[#667085]`}
              />
              {errors.username && (
                <p className="text-sm font-normal text-red-500">
                  {errors.username}
                </p>
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
                } placeholder-[#667085]`}
              />
              {errors.password ? (
                <p className="text-sm font-normal text-red-500">
                  {errors.password}
                </p>
              ) : (
                <p className="text-sm font-normal text-[#475467]">
                  Must be at least 4 characters.
                </p>
              )}
            </div>
            <div className="flex flex-col gap-[6px]">
              <label className="text-sm font-medium text-[#344054]">
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="••••••••"
                className={`w-full p-2 border rounded-md ${
                  errors.confirmPassword ? "border-red-500" : "border-[#D0D5DD]"
                } placeholder-[#667085]`}
              />
              {errors.confirmPassword && (
                <p className="text-sm font-normal text-red-500">
                  {errors.confirmPassword}
                </p>
              )}
            </div>
          </div>
          <button
            type="submit"
            disabled={loading}
            className={`cursor-pointer w-full bg-[#305679] text-base text-white py-2.5 font-semibold rounded-lg ${
              loading ? "opacity-70 cursor-not-allowed" : "hover:bg-[#264668]"
            }`}
          >
            {loading ? "Registering..." : "Continue"}
          </button>
        </form>
        {/* <div className="mt-8 flex gap-2 items-center justify-center">
          <img src={arrow} className="w-[12px] h-[12px]" alt="arrow" />
          <Link
            to="/login"
            className="text-sm text-[#475467] font-semibold hover:underline"
          >
            Back to log in
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default ConfirmPassword;
