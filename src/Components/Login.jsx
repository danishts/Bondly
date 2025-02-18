import React from "react";
import { useNavigate } from "react-router-dom"; // Import navigate

import Vec from "/src/assets/Vec.png";
import Gd from "/src/assets/gd.png"; // New image added
import Bondly from "/src/assets/Bondly.png";

const Login = () => {
  const navigate = useNavigate(); // Declare navigate hook

  const handleLoginClick = () => {
    // After clicking login, navigate to the dashboard
    navigate("/dashboard");
  };

  return (
    <div className="flex h-screen">
      {/* First Div (2/3 width) - Images and Text (Visible only on desktop) */}
      <img
        src={Vec}
        alt="Vector Image"
        className="absolute hidden md:block w-[70%] h-[70%] "
      />
      <div className="hidden md:flex w-2/3 flex-col justify-center items-center relative">
        <div className="relative flex flex-col items-center text-center">
          {/* Smaller image and moved down */}
          <img src={Gd} alt="GD Image" className="w-56 h-72 " />
          <h2 className="text-3xl font-bold mt-8 text-gray-800">
            WELCOME TO BONLY
          </h2>
          <p className="text-gray-600 text-lg mt-2 w-3/4">
            Discover a new way of experiencing innovation
          </p>
        </div>
      </div>

      {/* Second Div (1/3 width) - Login Form (Visible on all screens) */}
      <div className="w-full md:w-1/3 flex items-center md:mt-0">
        <div className="w-full md:w-96 p-4 absolute object-cover bg-gray-50 h-auto md:h-[650px] border-0 rounded-3xl">
          <div className="flex flex-col items-center p-4">
            <img src={Bondly} alt="icon" className="mb-4 rounded-3xl" />

            {/* Heading */}
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              Login to Bondly Admin
            </h2>

            {/* Subheading */}
            <p className="text-lg text-gray-600 mb-6">
              Enter your credentials to login
            </p>

            {/* Email and input field */}
            <div className="w-full mb-4">
              <label htmlFor="email" className="block text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-2 mt-2 bg-[#f5f4f8] px-4 rounded-xl"
                placeholder="Enter your email"
              />
            </div>

            {/* Password and input field */}
            <div className="w-full mb-4">
              <label htmlFor="password" className="block text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full p-2 mt-2 bg-[#f5f4f8] rounded-xl px-4"
                placeholder="*************"
              />
            </div>

            {/* Login button */}
            <button
              className="w-full md:w-80 bg-[#005E46] text-white py-2 rounded-lg mt-4 hover:bg-blue-600"
              onClick={handleLoginClick} // Call handleLoginClick on click
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
