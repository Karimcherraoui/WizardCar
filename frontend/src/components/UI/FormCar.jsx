import React from "react";

export default function FormCar() {



const handleSubmit = (e) => {
  e.preventDefault();
  console.log("form submitted");
}

  return (
    <>
      <section className="max-w-4xl p-6 mx-auto bg-indigo-600 rounded-md shadow-md dark:bg-gray-800 ">
        <h1 className="text-xl font-bold text-white capitalize dark:text-white">
          Add new car
        </h1>
        <form 
          onSubmit={handleSubmit}
        >
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label className="text-white dark:text-gray-200" htmlFor="brand">
                Brand Name
              </label>
              <input
                name="brand"
                id="brand"
                type="text"
                className="block w-full px-4 py-2 text-black bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label className="text-white dark:text-gray-200" htmlFor="model">
                Model
              </label>
              <input
                name="model"
                id="model"
                type="text"
                className="block w-full px-4 py-2    text-black bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label className="text-white dark:text-gray-200" htmlFor="year">
                Year
              </label>
              <input
              name="year"
                id="year"
                type="text"
                className="block w-full px-4 py-2    text-black bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label className="text-white dark:text-gray-200" htmlFor="price">
                Price
              </label>
              <input
                name="price"
                id="price"
                type="price"
                className="block w-full px-4 py-2    text-black bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label className="text-white dark:text-gray-200" htmlFor="color">
                Color
              </label>
              <input
                name="color"
                id="color"
                type="text"
                className="block w-full px-4 py-2    text-black bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label className="text-white dark:text-gray-200" htmlFor="fuel">
                Fuel
              </label>
              <select name="fuel" className="block w-full px-4 py-2    text-black bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
                <option>Essence</option>
                <option>Diesel</option>
                <option>Electric</option>
              </select>
            </div>
            <div>
              <label className="text-white dark:text-gray-200" htmlFor="type">
                Type
              </label>
              <select name="type" className="block w-full px-4 py-2    text-black bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
                <option>Citadine</option>
                <option>Berline</option>
                <option>SUV</option>
                <option>Utilitaire</option>
              </select>
            </div>
            <div>
              <label
                className="text-white dark:text-gray-200"
                htmlFor="transmission"
              >
                Transmission
              </label>
              <select name="transmission" className="block w-full px-4 py-2    text-black bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
                <option>Manuelle</option>
                <option>Automatique</option>
              </select>
            </div>
            <div>
              <label
                className="text-white dark:text-gray-200"
                htmlFor="plateNumber"
              >
                Plate Number
              </label>
              <input
              name="plateNumber"
                id="plateNumber"
                type="text"
                className="block w-full px-4 py-2    text-black bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              ></input>
            </div>

            <div>
              <label
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                htmlFor="file_input"
              >
                Upload image
              </label>
              <input
                className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                aria-describedby="file_input_help"
                id="file_input"
                type="file"
              />
              <p
                className="mt-1 text-sm text-gray-500 dark:text-gray-300"
                id="file_input_help"
              >
                SVG, PNG, JPG or GIF (MAX. 800x400px).
              </p>
            </div>

            <div>
              <label
                className="text-white dark:text-gray-200"
                htmlFor="description"
              >
                Description
              </label>
              <textarea
                id="description"
                type="text"
                className="block w-full px-4 py-2    text-black bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              ></textarea>
            </div>
      
          </div>

          <div className="flex justify-end mt-6">
            <button className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-green-500 rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600">
              Save
            </button>
          </div>
        </form>
      </section>
    </>
  );
}
