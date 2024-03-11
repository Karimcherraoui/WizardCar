import React from "react";

export default function ReservedCar() {
  return (
    <>
      <div className="flex w-full items-center mb-7">
        <button className="inline-flex mr-3 items-center h-8 pl-2.5 pr-2 rounded-md shadow text-gray-700 dark:text-gray-400 dark:border-gray-800 border border-gray-300 leading-none py-0">
          <svg
            viewBox="0 0 24 24"
            className="w-4 mr-2 text-gray-400 dark:text-black"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="16" y1="2" x2="16" y2="6"></line>
            <line x1="8" y1="2" x2="8" y2="6"></line>
            <line x1="3" y1="10" x2="21" y2="10"></line>
          </svg>
          Last 30 days
          <svg
            viewBox="0 0 24 24"
            className="w-4 ml-1.5 text-gray-400 dark:text-black"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </button>
        <button className="inline-flex items-center h-8 pl-2.5 pr-2 rounded-md shadow text-gray-700 dark:text-gray-400 dark:border-gray-800 border border-gray-300 leading-none py-0">
          Filter by
          <svg
            viewBox="0 0 24 24"
            className="w-4 ml-1.5 text-gray-400 dark:text-black"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </button>
        <div className="ml-auto text-gray-500 text-xs sm:inline-flex hidden items-center">
          <span className="mr-3">Page 2 of 4</span>
          <button className="inline-flex mr-2 items-center h-8 w-8 justify-center text-gray-400 rounded-md shadow border border-gray-300 dark:border-gray-800 leading-none py-0">
            <svg
              className="w-4"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
          <button className="inline-flex items-center h-8 w-8 justify-center text-gray-400 rounded-md shadow border border-gray-300 dark:border-gray-800 leading-none py-0">
            <svg
              className="w-4"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>
      </div>
      <table className="w-full text-left">
        <thead>
          <tr className="text-gray-400">
            <th className="font-normal px-3 pt-0 pb-3 border-b border-gray-300  ">
              Type
            </th>
            <th className="font-normal px-3 pt-0 pb-3 border-b border-gray-300  ">
              Where
            </th>
            <th className="font-normal px-3 pt-0 pb-3 border-b border-gray-300   hidden md:table-cell">
              Description
            </th>
            <th className="font-normal px-3 pt-0 pb-3 border-b border-gray-300  ">
              Amount
            </th>
            <th className="font-normal px-3 pt-0 pb-3 border-b border-gray-300   sm:text-gray-400 text-gray-200">
              Date
            </th>
          </tr>
        </thead>
        <tbody className="text-black dark:text-gray-100">
          <tr>
            <td className="sm:p-3 py-2 px-1 border-b border-gray-300  ">
              <div className="flex items-center">
                <svg
                  viewBox="0 0 24 24"
                  className="w-4 mr-5 text-green-500"
                  stroke="currentColor"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <polyline points="19 12 12 19 5 12"></polyline>
                </svg>
                Income
              </div>
            </td>
            <td className="sm:p-3 py-2 px-1 border-b border-gray-300  ">
              <div className="flex items-center">
                <img
                  className="w-7 h-7 mr-2.5 border border-gray-300   rounded-full"
                  src="https://images.unsplash.com/photo-1521587765099-8835e7201186?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
                  alt="profile"
                />
                James Smith
              </div>
            </td>
            <td className="sm:p-3 py-2 px-1 border-b border-gray-300   md:table-cell hidden">
              Invoice No: 37401
            </td>
            <td className="sm:p-3 py-2 px-1 border-b border-gray-300   text-green-500">
              + $60.00
            </td>
            <td className="sm:p-3 py-2 px-1 border-b border-gray-300  ">
              <div className="flex items-center">
                <div className="sm:flex hidden flex-col">
                  13.11.2020
                  <div className="text-gray-400 text-xs">09:45 AM</div>
                </div>
                <button className="w-8 h-8 inline-flex items-center justify-center text-gray-400 ml-auto">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-5"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="1"></circle>
                    <circle cx="19" cy="12" r="1"></circle>
                    <circle cx="5" cy="12" r="1"></circle>
                  </svg>
                </button>
              </div>
            </td>
          </tr>
          <tr>
            <td className="sm:p-3 py-2 px-1 border-b border-gray-300  ">
              <div className="flex items-center">
                <svg
                  viewBox="0 0 24 24"
                  className="w-4 mr-5 text-gray-400"
                  stroke="currentColor"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
                  <line x1="1" y1="10" x2="23" y2="10"></line>
                </svg>
                Card
              </div>
            </td>
            <td className="sm:p-3 py-2 px-1 border-b border-gray-300  ">
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-7 h-7 p-1.5 mr-2.5 rounded-lg border border-gray-300  "
                >
                  <g fill="#f44336">
                    <path d="M211.563 26.133c-1.971-2.993-5.313-4.796-8.896-4.8h-192C4.776 21.333 0 26.109 0 32v448c-.001 5.07 3.566 9.439 8.533 10.453.702.141 1.417.213 2.133.213 4.255.015 8.111-2.5 9.813-6.4l192-448c1.43-3.315 1.085-7.128-.916-10.133zM265.877 187.989c-1.632-4.021-5.537-6.653-9.877-6.656-4.293-.001-8.169 2.571-9.835 6.528l-85.333 202.667c-2.286 5.43.263 11.684 5.692 13.97 1.311.552 2.72.836 4.142.836h77.931l29.419 78.421c1.564 4.158 5.541 6.912 9.984 6.912h85.333c5.891-.004 10.664-4.782 10.66-10.673-.001-1.373-.267-2.732-.783-4.004L265.877 187.989zM501.333 21.333h-192c-5.891-.021-10.683 4.738-10.704 10.629-.005 1.481.298 2.947.89 4.304l192 448c1.702 3.9 5.559 6.415 9.813 6.4.716-.001 1.431-.072 2.133-.213 4.967-1.014 8.534-5.384 8.533-10.453V32c.002-5.891-4.774-10.667-10.665-10.667z" />
                  </g>
                </svg>
                Adobe
              </div>
            </td>
            <td className="sm:p-3 py-2 px-1 border-b border-gray-300   md:table-cell hidden">
              Product purchased
            </td>
            <td className="sm:p-3 py-2 px-1 border-b border-gray-300   text-red-500">
              - $49.99
            </td>
            <td className="sm:p-3 py-2 px-1 border-b border-gray-300  ">
              <div className="flex items-center">
                <div className="sm:flex hidden flex-col">
                  10.03.2020
                  <div className="text-gray-400 text-xs">10:29 AM</div>
                </div>
                <button className="w-8 h-8 inline-flex items-center justify-center text-gray-400 ml-auto">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-5"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="1"></circle>
                    <circle cx="19" cy="12" r="1"></circle>
                    <circle cx="5" cy="12" r="1"></circle>
                  </svg>
                </button>
              </div>
            </td>
          </tr>
          <tr>
            <td className="sm:p-3 py-2 px-1 border-b border-gray-300  ">
              <div className="flex items-center">
                <svg
                  viewBox="0 0 24 24"
                  className="w-4 mr-5 text-gray-400"
                  stroke="currentColor"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
                  <line x1="1" y1="10" x2="23" y2="10"></line>
                </svg>
                Card
              </div>
            </td>
            <td className="sm:p-3 py-2 px-1 border-b border-gray-300  ">
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 427.652 427.652"
                  className="w-7 h-7 p-1.5 mr-2.5 rounded-lg border border-gray-300  "
                >
                  <path
                    fill="#00d95f"
                    d="M213.826 0C95.733 0 0 95.733 0 213.826s95.733 213.826 213.826 213.826 213.826-95.733 213.826-213.826S331.919 0 213.826 0zm93.06 310.32c-2.719 4.652-7.612 7.246-12.638 7.247-2.506 0-5.044-.645-7.364-2-38.425-22.456-82.815-26.065-113.295-25.138-33.763 1.027-58.523 7.692-58.769 7.76-7.783 2.126-15.826-2.454-17.961-10.236-2.134-7.781 2.43-15.819 10.209-17.962 1.116-.307 27.76-7.544 64.811-8.766 21.824-.72 42.834.801 62.438 4.52 24.83 4.71 47.48 12.978 67.322 24.574 6.973 4.074 9.321 13.03 5.247 20.001zm27.184-56.459c-3.22 5.511-9.016 8.583-14.97 8.584-2.968 0-5.975-.763-8.723-2.369-45.514-26.6-98.097-30.873-134.2-29.776-39.994 1.217-69.323 9.112-69.614 9.192-9.217 2.515-18.746-2.906-21.275-12.124-2.528-9.218 2.879-18.738 12.093-21.277 1.322-.364 32.882-8.937 76.77-10.384 25.853-.852 50.739.949 73.96 5.354 29.412 5.58 56.241 15.373 79.744 29.108 8.26 4.826 11.042 15.434 6.215 23.692zm16.711-51.335c-3.641 0-7.329-.936-10.7-2.906-108.207-63.238-248.572-25.643-249.977-25.255-11.313 3.117-23.008-3.527-26.124-14.839-3.117-11.312 3.527-23.008 14.839-26.124 1.621-.447 40.333-10.962 94.166-12.737 31.713-1.044 62.237 1.164 90.72 6.567 36.077 6.844 68.987 18.856 97.815 35.704 10.13 5.92 13.543 18.931 7.623 29.061-3.95 6.76-11.059 10.529-18.362 10.529z"
                  />
                </svg>
                Spotify
              </div>
            </td>
            <td className="sm:p-3 py-2 px-1 border-b border-gray-300   md:table-cell hidden">
              Subscription renewal
            </td>
            <td className="sm:p-3 py-2 px-1 border-b border-gray-300   text-red-500">
              - $5.99
            </td>
            <td className="sm:p-3 py-2 px-1 border-b border-gray-300  ">
              <div className="flex items-center">
                <div className="sm:flex hidden flex-col">
                  02.04.2020
                  <div className="text-gray-400 text-xs">10:29 AM</div>
                </div>
                <button className="w-8 h-8 inline-flex items-center justify-center text-gray-400 ml-auto">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-5"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="1"></circle>
                    <circle cx="19" cy="12" r="1"></circle>
                    <circle cx="5" cy="12" r="1"></circle>
                  </svg>
                </button>
              </div>
            </td>
          </tr>
          <tr>
            <td className="sm:p-3 py-2 px-1 border-b border-gray-300  ">
              <div className="flex items-center">
                <svg
                  viewBox="0 0 24 24"
                  className="w-4 mr-5 text-gray-400"
                  stroke="currentColor"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
                  <line x1="1" y1="10" x2="23" y2="10"></line>
                </svg>
                Card
              </div>
            </td>
            <td className="sm:p-3 py-2 px-1 border-b border-gray-300  ">
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="2.17 0.44 251.04 259.97"
                  className="w-7 h-7 p-1.5 mr-2.5 rounded-lg border border-gray-300  "
                >
                  <g fill="none" fillRule="evenodd">
                    <path
                      fill="#f90"
                      fillRule="nonzero"
                      d="M221.5 210.32C116.27 260.41 50.96 218.5 9.15 193.05c-2.59-1.6-6.98.38-3.17 4.76 13.93 16.89 59.57 57.6 119.15 57.6 59.63 0 95.1-32.54 99.53-38.21 4.4-5.63 1.3-8.73-3.16-6.88zM251.06 194c-2.83-3.68-17.19-4.36-26.22-3.25-9.05 1.07-22.64 6.6-21.46 9.93.61 1.24 1.85.68 8.06.12 6.24-.62 23.7-2.82 27.34 1.93 3.66 4.8-5.57 27.61-7.25 31.3-1.63 3.67.62 4.62 3.68 2.17 3.01-2.45 8.47-8.8 12.14-17.77 3.64-9.03 5.85-21.63 3.7-24.43z"
                    />
                    <path
                      fill="#000"
                      d="M150.74 108.13c0 13.14.34 24.1-6.3 35.77-5.37 9.49-13.86 15.32-23.35 15.32-12.95 0-20.5-9.86-20.5-24.43 0-28.75 25.77-33.97 50.15-33.97zm34.02 82.22a7.04 7.04 0 01-7.97.8c-11.2-9.3-13.19-13.61-19.36-22.48-18.5 18.88-31.6 24.52-55.6 24.52-28.37 0-50.48-17.5-50.48-52.56 0-27.38 14.85-46.02 35.96-55.13 18.32-8.06 43.89-9.49 63.43-11.72v-4.36c0-8.02.62-17.5-4.08-24.43-4.12-6.22-12-8.78-18.93-8.78-12.85 0-24.33 6.6-27.13 20.26-.57 3.03-2.8 6.02-5.84 6.16l-32.73-3.5c-2.75-.62-5.79-2.85-5.03-7.08C64.54 12.4 100.36.44 132.43.44c16.42 0 37.86 4.36 50.81 16.8 16.42 15.32 14.85 35.76 14.85 58.01v52.57c0 15.8 6.55 22.72 12.71 31.26 2.19 3.04 2.66 6.7-.1 8.97a1425.8 1425.8 0 00-25.85 22.4l-.1-.1"
                    />
                    <path
                      fill="#f90"
                      fillRule="nonzero"
                      d="M221.5 210.32C116.27 260.41 50.96 218.5 9.15 193.05c-2.59-1.6-6.98.38-3.17 4.76 13.93 16.89 59.57 57.6 119.15 57.6 59.63 0 95.1-32.54 99.53-38.21 4.4-5.63 1.3-8.73-3.16-6.88zM251.06 194c-2.83-3.68-17.19-4.36-26.22-3.25-9.05 1.07-22.64 6.6-21.46 9.93.61 1.24 1.85.68 8.06.12 6.24-.62 23.7-2.82 27.34 1.93 3.66 4.8-5.57 27.61-7.25 31.3-1.63 3.67.62 4.62 3.68 2.17 3.01-2.45 8.47-8.8 12.14-17.77 3.64-9.03 5.85-21.63 3.7-24.43z"
                    />
                    <path
                      fill="#000"
                      d="M150.74 108.13c0 13.14.34 24.1-6.3 35.77-5.37 9.49-13.86 15.32-23.35 15.32-12.95 0-20.5-9.86-20.5-24.43 0-28.75 25.77-33.97 50.15-33.97zm34.02 82.22a7.04 7.04 0 01-7.97.8c-11.2-9.3-13.19-13.61-19.36-22.48-18.5 18.88-31.6 24.52-55.6 24.52-28.37 0-50.48-17.5-50.48-52.56 0-27.38 14.85-46.02 35.96-55.13 18.32-8.06 43.89-9.49 63.43-11.72v-4.36c0-8.02.62-17.5-4.08-24.43-4.12-6.22-12-8.78-18.93-8.78-12.85 0-24.33 6.6-27.13 20.26-.57 3.03-2.8 6.02-5.84 6.16l-32.73-3.5c-2.75-.62-5.79-2.85-5.03-7.08C64.54 12.4 100.36.44 132.43.44c16.42 0 37.86 4.36 50.81 16.8 16.42 15.32 14.85 35.76 14.85 58.01v52.57c0 15.8 6.55 22.72 12.71 31.26 2.19 3.04 2.66 6.7-.1 8.97a1425.8 1425.8 0 00-25.85 22.4l-.1-.1"
                    />
                  </g>
                </svg>
                Amazon
              </div>
            </td>
            <td className="sm:p-3 py-2 px-1 border-b border-gray-300   md:table-cell hidden">
              PlayStation 5
            </td>
            <td className="sm:p-3 py-2 px-1 border-b border-gray-300   text-red-500">
              - $399.99
            </td>
            <td className="sm:p-3 py-2 px-1 border-b border-gray-300  ">
              <div className="flex items-center">
                <div className="sm:flex hidden flex-col">
                  08.09.2020
                  <div className="text-gray-400 text-xs">11:00 AM</div>
                </div>
                <button className="w-8 h-8 inline-flex items-center justify-center text-gray-400 ml-auto">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-5"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="1"></circle>
                    <circle cx="19" cy="12" r="1"></circle>
                    <circle cx="5" cy="12" r="1"></circle>
                  </svg>
                </button>
              </div>
            </td>
          </tr>
          <tr>
            <td className="sm:p-3 py-2 px-1 border-b border-gray-300  ">
              <div className="flex items-center">
                <svg
                  viewBox="0 0 24 24"
                  className="w-4 mr-5 text-green-500"
                  stroke="currentColor"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <polyline points="19 12 12 19 5 12"></polyline>
                </svg>
                Income
              </div>
            </td>
            <td className="sm:p-3 py-2 px-1 border-b border-gray-300  ">
              <div className="flex items-center">
                <img
                  className="w-7 h-7 mr-2.5 border border-gray-300   rounded-full"
                  src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
                  alt="profile"
                />
                Jane Cooper
              </div>
            </td>
            <td className="sm:p-3 py-2 px-1 border-b border-gray-300   md:table-cell hidden">
              Invoice No: 12993
            </td>
            <td className="sm:p-3 py-2 px-1 border-b border-gray-300   text-green-500">
              + $24.00
            </td>
            <td className="sm:p-3 py-2 px-1 border-b border-gray-300  ">
              <div className="flex items-center">
                <div className="sm:flex hidden flex-col">
                  01.04.2020
                  <div className="text-gray-400 text-xs">09:45 AM</div>
                </div>
                <button className="w-8 h-8 inline-flex items-center justify-center text-gray-400 ml-auto">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-5"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="1"></circle>
                    <circle cx="19" cy="12" r="1"></circle>
                    <circle cx="5" cy="12" r="1"></circle>
                  </svg>
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      <div className="flex w-full mt-5 space-x-2 justify-end">
        <button className="inline-flex items-center h-8 w-8 justify-center text-gray-400 rounded-md shadow border border-gray-300 dark:border-gray-800 leading-none">
          <svg
            className="w-4"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>
        <button className="inline-flex items-center h-8 w-8 justify-center text-gray-500 rounded-md shadow border border-gray-300 dark:border-gray-800 leading-none">
          1
        </button>
        <button className="inline-flex items-center h-8 w-8 justify-center text-gray-500 rounded-md shadow border border-gray-300 dark:border-gray-800 bg-gray-100 dark:bg-gray-800 dark:text-white leading-none">
          2
        </button>
        <button className="inline-flex items-center h-8 w-8 justify-center text-gray-500 rounded-md shadow border border-gray-300 dark:border-gray-800 leading-none">
          3
        </button>
        <button className="inline-flex items-center h-8 w-8 justify-center text-gray-500 rounded-md shadow border border-gray-300 dark:border-gray-800 leading-none">
          4
        </button>
        <button className="inline-flex items-center h-8 w-8 justify-center text-gray-400 rounded-md shadow border border-gray-300 dark:border-gray-800 leading-none">
          <svg
            className="w-4"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </div>
    </>
  );
}
