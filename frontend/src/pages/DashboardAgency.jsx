import React, { useState } from "react";
import "../styles/dashboard.css";
import ReservedCar from "../components/UI/ReservedCar";
import FormCar from "../components/UI/FormCar";
import flech from "../assets/all-images/flechWhite.png";

export default function DashboardAgency() {
  const [isAddCar, setIsAddCar] = useState(false);

  const handleForms = () => {
    console.log("clicked");
    setIsAddCar(!isAddCar);
  };
  return (
    <div
      className=" dark:bg-gray-900 dark:text-white text-black h-screen flex overflow-hidden text-sm"
      style={{
        background:
          "linear-gradient(112.1deg, rgb(32, 38, 57) 11.4%, rgb(63, 76, 119) 70.2%)",
      }}
    >
      <div className="flex-grow overflow-hidden h-full flex flex-col">
        <div className="flex-grow flex overflow-x-hidden">
          <div className="xl:w-72 w-48 flex-shrink-0 border-r border-gray-300 dark:border-gray-800 h-full overflow-y-auto lg:block hidden p-5">
            <div className="text-xs text-gray-400 tracking-wider">Cars</div>
            <div className="relative mt-2">
              <input
                type="text"
                className="pl-8 h-9 bg-transparent border border-gray-300 dark:border-gray-700 dark:text-white w-full rounded-md text-sm"
                placeholder="Search"
              />
              <svg
                viewBox="0 0 24 24"
                className="w-4 absolute text-gray-400 top-1/2 transform translate-x-0.5 -translate-y-1/2 left-2"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </div>
            <div className="space-y-4 mt-3">
              <button className="bg-white p-3 w-full flex flex-col rounded-md dark:bg-gray-800 shadow">
                <div className="flex xl:flex-row flex-col items-center font-medium text-blackdark:text-white pb-2 mb-2 xl:border-b border-gray-300 border-opacity-75 dark:border-gray-700 w-full">
                  <img
                    src="https://images.unsplash.com/photo-1507120878965-54b2d3939100?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=99fbace66d1bfa48c9c6dc8afcac3aab"
                    className="w-7 h-7 mr-2 rounded-full"
                    alt="profile"
                  />
                  Ronald Richards
                </div>
                <div className="flex items-center w-full">
                  <div className="text-xs py-1 px-2 leading-none dark:bg-gray-900 bg-green-100 text-green-600 rounded-md">
                    Sales
                  </div>
                  <div className="ml-auto text-xs text-gray-400">$0.00</div>
                </div>
              </button>
            </div>
          </div>
          <div className="flex-grow  overflow-y-auto bg-gray-200">
            <div
              className="sm:px-7 sm:pt-7 px-4 pt-4 flex flex-col w-full border-b border-gray-300 dark:bg-gray-900 dark:text-white dark:border-gray-800 sticky top-0"
              style={{
                background:
                  "linear-gradient(112.1deg, rgb(32, 38, 57) 11.4%, rgb(63, 76, 119) 70.2%)",
              }}
            >
              <div className="flex justify-between ">
                <div className="flex ml-10 ">
                  <img src={flech} alt="flech" className="w-6 h-6 mr-1" />
                  <a href="/" className="font-bold text-white no-underline">
                    Back
                  </a>
                </div>
                <div className="text-right">
                  <div className="text-xs text-gray-400 dark:text-gray-400">
                    Account balance:
                  </div>
                  <div className="text-white dark:text-white">$2,794.00</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 sm:mt-7 mt-4">
                <button
                  className="px-3 border-b-2 border-transparent text-white no-underline dark:text-gray-400 pb-1.5"
                  onClick={handleForms}
                >
                  Activities
                </button>
                <button
                  className="px-3 border-b-2 border-transparent text-white no-underline dark:text-gray-400 pb-1.5"
                  onClick={handleForms}
                >
                  New Car
                </button>
              </div>
            </div>
            <div className="sm:p-7 p-4 bg-gray-200 h-screen">
              {isAddCar ? <FormCar /> : <ReservedCar />}

              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
