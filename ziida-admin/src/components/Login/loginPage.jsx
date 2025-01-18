import React from "react";
import { useNavigate } from "react-router-dom";

// icons
import { FaGoogle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";

const loginPage = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/register");
  };
  

  return (
    <div className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center min-h-screen bg-white">
      <div className="flex bg-white rounded-2xl shadow-2xl w-2/3 max-w-4xl sm:w-full">
        {/* Login Section  */}
        <div className="w-3/5 p-5 ">
          <div className="text-left font-bold">
            <span className="text-primary">Company</span>Name
          </div>
          <div className="py-10">
            <h2 className="font-semibold text-3xl text-primary">
              Sign in to Account
            </h2>
            <div className="border-2 w-10 border-primary inline-block mb-2"></div>
          </div>
          {/* icons sections */}
          <div className="flex justify-center gap-3 my-[-20px] text-lg">
            <a
              href="#"
              className="p-2 rounded-full border-2 border-gray-100 hover:bg-primary hover:text-white hover:border-primary"
            >
              <FaGoogle />
            </a>
            <a
              href="#"
              className="p-2 rounded-full border-2 border-gray-100  hover:bg-primary hover:text-white hover:border-primary"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="p-2 rounded-full border-2 border-gray-100  hover:bg-primary hover:text-white hover:border-primary"
            >
              <FaLinkedinIn />
            </a>
          </div>
          {/* icons sections */}
          <p className="my-10 text-[12px] text-slate-500">
            or use your email account:
          </p>
          <div className="flex flex-col items-center">
            <div className="bg-gray-100 w-64 p-2 items-center flex mb-3">
              <FaEnvelope className="text-gray-400 mr-2" />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-64 bg-slate-100 outline-none"
              />
            </div>
            <div className="bg-gray-100 w-64 p-2 items-center flex mb-3">
              <RiLockPasswordFill className="text-gray-400 mr-2" />
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="w-64 bg-slate-100 outline-none"
              />
            </div>
            <div className="justify-between flex w-64 mb-5 text-xs text-gray-400">
              <label htmlFor="">
                <input type="checkbox" name="Remember" id="" /> Remember me
              </label>
              <a href="#" className="text-primary">
                Forgot Password?
              </a>
            </div>
            <a href="/sidebar"
              className="mb-12 mt-3 border-2 text-primary border-primary rounded-full px-12 py-2 inline-block hover:bg-primary hover:text-white transition-all font-semibold"
            >
              Sign in
            </a>
          </div>
        </div>

        <div className="bg-gradient-to-br from-primary to-secondary w-2/5 text-white rounded-tr-2xl rounded-br-2xl py-36 PX-12">
          <h2 className="text-3xl font-bold mb-2 sm:hidden lg:block">
            Hello, Friend!
          </h2>
          <div className="md:hidden border-2 w-10 border-white inline-block mb-2"></div>
          <p className="mb-10 px-7 sm:hidden lg:block">
            Fill up personal information and start journey with us.
          </p>

          <button
            onClick={handleNavigate}
            className="md:align-text-top  border-2 border-white rounded-full px-12 py-2 inline-block hover:bg-white hover:text-primary transition-all font-semibold"
          >
            Sign Up
          </button>
        </div>
      </div>

      {/* Register Section  */}
    </div>
  );
};

export default loginPage;
