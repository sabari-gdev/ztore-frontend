import React from "react";
import { MdVisibility, MdVisibilityOff, MdArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";

const SignupForm = () => {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const [passwordVisible, setPasswordVisible] = React.useState(false);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md bg-white rounded-md p-4">
        <h1 className="font-bold text-2xl">Create Account</h1>
        <p>Please fill your details to create an account</p>

        <div className="pt-4 sm:mx-auto sm:w-full sm:max-w-md">
          <form className="space-y-4">
            <div>
              <label
                className="block text-sm font-medium text-gray-500"
                htmlFor="first-name"
              >
                First Name
              </label>
              <input
                className="mt-1 sm:text-sm appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-300 focus:outline-none focus:ring-blue-500"
                name="first-name"
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="John"
                required
                type="text"
                value={firstName}
              />
            </div>

            <div>
              <label
                className="block text-sm font-medium text-gray-500"
                htmlFor="last-name"
              >
                Last Name
              </label>
              <input
                className="mt-1 sm:text-sm appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-300 focus:outline-none focus:ring-blue-500"
                name="last-name"
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Doe"
                required
                type="text"
                value={lastName}
              />
            </div>

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

            <div>
              <button
                className="flex justify-center items-center h-[40px] w-full bg-blue-700 py-2 text-sm font-medium text-white rounded-md hover:bg-blue-500"
                type="submit"
              >
                Create Account
              </button>
            </div>

            <div className="flex justify-center items-center space-x-1 text-sm">
              <p>Already registered? </p>
              <Link
                className="flex items-center text-sm font-bold text-blue-700 hover:text-blue-600"
                to={"/login"}
              >
                Login
                <MdArrowOutward size={24} />
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
