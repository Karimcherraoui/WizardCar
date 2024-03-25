import React from "react";
import car from "../assets/all-images/rolce.jpg";
import flech from "../assets/all-images/flech.png";
import { useDispatch } from "react-redux";
import { signin } from "../features/authSlice";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    const form = { ...formData };
    dispatch(signin({ form, navigate: navigation}));
  };

  return (
    <div className="h-screen md:flex w-full">
      <div
        className="md:w-full bg-cover bg-center shadow-md"
        style={{
          backgroundImage: `url(${car})`,
        }}
      ></div>
      <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12 w-full">
        <div className="flex ml-10 ">
          <img src={flech} alt="flech" className="w-6 h-6 mr-1" />
          <a href="/" className="font-bold text-black no-underline">
            Back
          </a>
        </div>
        <div className="relative py-3 sm:max-w-xl sm:mx-auto w-full">
          <div className="absolute inset-0 bg-gradient-to-r w-full from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
          <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
            <button></button>
            <div className="max-w-md mx-auto">
              <div>
                <h1 className="text-2xl font-semibold text-center">LOGIN</h1>
              </div>
              <div className="divide-y divide-gray-200">
                <form
                  onSubmit={handleSubmit}
                  className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7"
                >
                  <div className="relative">
                    <input
                      onChange={handleChange}
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
                      onChange={handleChange}
                      autocomplete="off"
                      id="password"
                      name="password"
                      type="password"
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                      placeholder="Password"
                    />
                    <label
                      htmlFor="password"
                      className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      Password
                    </label>
                  </div>
                  <div className="relative text-center mt-10 ">
                    <button
                      type="submit"
                      className="bg-blue-500 text-white rounded-md px-2 py-1"
                    >
                      Connect
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
