import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signupAgency } from "../../features/authSlice";

export default function RegisterAgency() {
  const [localSettings, setLocalSettings] = useState({
    role: "agency",
  });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLocalSettings({ ...localSettings, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = { ...localSettings };
    dispatch(signupAgency({ form }));
  };
  return (
    <div className="relative sm:max-w-xl sm:mx-auto w-full ">
      <div className="absolute inset-0 bg-gradient-to-r w-full from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
      <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-10">
        <div className="max-w-md mx-auto">
          <div>
            <h1 className="text-2xl font-semibold text-center">REGISTER</h1>
          </div>
          <div className="divide-y divide-gray-200">
            <form
              onSubmit={handleSubmit}
              className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7"
            >
              <div className="flex gap-20">
                <div className="relative">
                  <input
                    onChange={handleChange}
                    autocomplete="off"
                    id="campany_Name"
                    name="agencyName"
                    type="text"
                    className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                    placeholder="Nom d'agence"
                  />
                  <label
                    htmlFor="campany_Name"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Nom d'agence
                  </label>
                </div>

                <div className="relative">
                  <input
                    onChange={handleChange}
                    autocomplete="off"
                    id="adress"
                    name="address"
                    type="text"
                    className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                    placeholder="Adresse"
                  />
                  <label
                    htmlFor="Adress"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Adresse
                  </label>
                </div>
              </div>

              <div className="flex gap-20">
                <div className="relative ">
                  <input
                    onChange={handleChange}
                    autocomplete="off"
                    id="owner_name"
                    name="ownerName"
                    type="text"
                    className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                    placeholder="Nom Proprietaire"
                  />
                  <label
                    htmlFor="owner_name"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Prenom Proprietaire
                  </label>
                </div>

                <div className="relative">
                  <input
                    onChange={handleChange}
                    autocomplete="off"
                    id="owner_lastname"
                    name="ownerLastName"
                    type="text"
                    className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                    placeholder="Nom Proprietaire"
                  />
                  <label
                    htmlFor="owner_lastname"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Nom Proprietaire
                  </label>
                </div>
              </div>

              <div className="flex gap-20">
                <div className="relative">
                  <input
                    onChange={handleChange}
                    autocomplete="off"
                    id="phone"
                    name="phone"
                    type="text"
                    className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                    placeholder="Numéro de téléphone"
                  />
                  <label
                    htmlFor="owner_lastname"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Numéro de téléphone
                  </label>
                </div>

                <div className="relative ">
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
              </div>

              <div className="flex gap-20">
                <div className="relative">
                  <input
                    onChange={handleChange}
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
                    Mot de passe
                  </label>
                </div>
                <div className="relative">
                  <input
                    onChange={handleChange}
                    autocomplete="off"
                    id="confirm"
                    name="confirmPassword"
                    type="password"
                    className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                    placeholder="password"
                  />
                  <label
                    htmlFor="password"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Confirmation
                  </label>
                </div>
              </div>

              <div className="flex gap-20">
                <div className="relative">
                  <input
                    onChange={handleChange}
                    autocomplete="off"
                    id="ville"
                    name="city"
                    type="text"
                    className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                    placeholder="Ville"
                  />
                  <label
                    htmlFor="vile"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Ville
                  </label>
                </div>
                <div className="relative">
                  <input
                    onChange={handleChange}
                    autocomplete="off"
                    id="nationalite"
                    name="country"
                    type="text"
                    className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                    placeholder="Nationalite"
                  />
                  <label
                    htmlFor="nationalite"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Nationalite
                  </label>
                </div>
              </div>
              <div className="flex gap-20">
            
                <div className="relative">
                  <input
                    onChange={handleChange}
                    autocomplete="off"
                    id="zip"
                    name="zipCode"
                    type="text"
                    className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                    placeholder="Zip Code"
                  />
                  <label
                    htmlFor="zipCode"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Zip Code
                  </label>
                </div>

                <div className="relative">
                  <input
                    onChange={handleChange}
                    autocomplete="off"
                    id="region"
                    name="region"
                    type="text"
                    className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                    placeholder="Region"
                  />
                  <label
                    htmlFor="region"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Region
                  </label>
                </div>
              </div>

              <div className="flex gap-20">
            
                <div className="relative">
                  <input
                    onChange={handleChange}
                    autocomplete="off"
                    id="tva"
                    name="numberTva"
                    type="text"
                    className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                    placeholder="Numero de TVA"
                  />
                  <label
                    htmlFor="numberTva"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Numero de TVA
                  </label>
                </div>
                <div className="relative">
                  <input
                    onChange={handleChange}
                    autocomplete="off"
                    id="site"
                    name="website"
                    type="text"
                    className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                    placeholder="WebSite"
                  />
                  <label
                    htmlFor="website"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    WebSite
                  </label>
                </div>
              </div>

              <div className="flex gap-20">
             
                <div className="relative">
                  <input
                    onChange={handleChange}
                    autocomplete="off"
                    id="rib"
                    name="rib"
                    type="text"
                    className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                    placeholder="RIB"
                  />
                  <label
                    htmlFor="rib"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    RIB
                  </label>
                </div>

                <div className="relative">
                  <input
                    onChange={handleChange}
                    autocomplete="off"
                    id="bank"
                    name="bankName"
                    type="text"
                    className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                    placeholder="Nom de la banque"
                  />
                  <label
                    htmlFor="bankName"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Nom de la banque
                  </label>
                </div>
              </div>

              <div className="flex gap-20">
                <div className="relative w-full">
                  <input
                    onChange={handleChange}
                    autocomplete="off"
                    id="iban"
                    name="iban"
                    type="text"
                    className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                    placeholder="Iban"
                  />
                  <label
                    htmlFor="iban"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Iban
                  </label>
                </div>
              </div>

              <div className="flex gap-20">
                <div className="w-full">
                  <label
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    htmlFor="file_input"
                  >
                    Upload Logo
                  </label>
                  <input
                    name="logo"
                    onChange={handleChange}
                    className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                    aria-describedby="file_input_help"
                    id="file_input"
                    type="file"
                  />
                </div>
              </div>

              <div className="relative text-center  ">
                <button
                  type="submit"
                  className="bg-green-500 text-white rounded-md px-4 py-2 mt-4"
                >
                  Create Account
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
