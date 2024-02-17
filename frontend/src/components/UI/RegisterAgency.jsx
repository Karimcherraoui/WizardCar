import React from "react";

export default function RegisterAgency() {
  return (
    <div className="relative sm:max-w-xl sm:mx-auto w-full ">
      <div className="absolute inset-0 bg-gradient-to-r w-full from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
      <div className="relative  bg-white shadow-lg sm:rounded-3xl sm:py-10">
        <div className="max-w-md mx-auto">
          <div>
            <h1 className="text-2xl font-semibold text-center">REGISTER</h1>
          </div>
          <div className=" divide-gray-200">
            <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
              <div className="relative">
                <input
                  autocomplete="off"
                  id="Name"
                  name="Name"
                  type="text"
                  className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                  placeholder="Name"
                />
                <label
                  htmlFor="Name"
                  className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                >
                  Agency Name
                </label>
              </div>

              <div className="relative">
                <input
                  autocomplete="off"
                  id=" Address"
                  name=" Address"
                  type="text"
                  className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                  placeholder="Address"
                />
                <label
                  htmlFor=" Address"
                  className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                >
                  Address
                </label>
              </div>

              <div className="relative">
                <input
                  autocomplete="off"
                  id="email"
                  name="email"
                  type="text"
                  className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                  placeholder="Email address"
                />
                <label
                  htmlFor="email"
                  className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                >
                  Email
                </label>
              </div>

              <div className="relative">
                <input
                  autocomplete="off"
                  id="password"
                  name="password"
                  type="password"
                  className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                  placeholder="password"
                />
                <label
                  htmlFor="password"
                  className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                >
                  Password
                </label>
              </div>

              <div className="relative">
                <input
                  autocomplete="off"
                  id="phone"
                  name="phone"
                  type="text"
                  className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                  placeholder="Phone Number"
                />
                <label
                  htmlFor="phone"
                  className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                >
                  Phone Number
                </label>
              </div>

              <div className="relative"></div>
            </div>

            
              <div className="relative text-center  ">
                <button className="bg-green-500 text-white rounded-md px-4 py-2 mt-10">
                Create Account
                </button>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
