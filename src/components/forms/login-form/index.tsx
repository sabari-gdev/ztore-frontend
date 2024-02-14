import React from "react";

import { MdArrowOutward, MdVisibility, MdVisibilityOff } from "react-icons/md";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const [passwordVisible, setPasswordVisible] = React.useState(false);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md bg-white rounded-md p-4">
        <h1 className="font-bold text-2xl">Login</h1>
        <p>Hi, Welcome back 👋🏻</p>

        <div className="pt-4 sm:mx-auto sm:w-full sm:max-w-md">
          <form className="space-y-4">
            <div>
              <label
                className="block text-sm font-medium text-gray-500"
                htmlFor="email"
              >
                Email Address
              </label>
              <input
                className="mt-1 sm:text-sm appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-300 focus:outline-none focus:ring-blue-500"
                name="name"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="E.g. johndoe@gmail.com"
                required
                type="email"
                value={email}
              />
            </div>

            <div>
              <label
                className="block text-sm font-medium text-gray-500"
                htmlFor="password"
              >
                Password
              </label>
              <div className="relative flex items-center">
                <input
                  className="mt-1 sm:text-sm appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                  type={passwordVisible ? "text" : "password"}
                  value={password}
                />
                {passwordVisible ? (
                  <MdVisibility
                    className="absolute right-2 cursor-pointer"
                    onClick={() => setPasswordVisible(false)}
                    size={20}
                  />
                ) : (
                  <MdVisibilityOff
                    className="absolute right-2 cursor-pointer"
                    onClick={() => setPasswordVisible(true)}
                    size={20}
                  />
                )}
              </div>
            </div>

            <div className="flex justify-end">
              <Link
                className="text-sm font-bold text-blue-700 hover:text-blue-500"
                to={"/forgot-password"}
              >
                Forgot Password?
              </Link>
            </div>

            <div>
              <button
                className="flex justify-center items-center h-[40px] w-full bg-blue-700 py-2 text-sm font-medium text-white rounded-md hover:bg-blue-500"
                type="submit"
              >
                Login
              </button>
            </div>

            <div className="flex items-center space-x-1 text-sm">
              <p>Not yet registered? </p>
              <Link
                className="flex items-center text-sm font-bold text-blue-700 hover:text-blue-600"
                to={"/signup"}
              >
                Create Account
                <MdArrowOutward size={24} />
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
