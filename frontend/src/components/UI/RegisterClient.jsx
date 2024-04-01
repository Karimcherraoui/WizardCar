import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signupClient } from "../../features/authSlice";
import { useNavigate } from "react-router";

export default function RegisterClient() {
  const [localSettings, setLocalSettings] = useState({
    role: "client",
  });
  const dispatch = useDispatch();
  const navigation = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLocalSettings({ ...localSettings, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = { ...localSettings };
    dispatch(signupClient({ form, navigate: navigation }));
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
                    autoComplete="off"
                    id="firstName"
                    name="firstName"
                    type="text"
                    className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                    placeholder="firstName"
                  />
                  <label
                    htmlFor="firstName"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Prenom
                  </label>
                </div>

                <div className="relative">
                  <input
                    onChange={handleChange}
                    autoComplete="off"
                    id="lastName"
                    name="lastName"
                    type="text"
                    className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                    placeholder="Email address"
                  />
                  <label
                    htmlFor="lastName"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Nom
                  </label>
                </div>
              </div>

              <div className="flex gap-20">
                <div className="relative ">
                  <input
                  data-cy="cin-user"
                    onChange={handleChange}
                    autoComplete="off"
                    id="cin"
                    name="cin"
                    type="text"
                    className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                    placeholder="N° Passport / CIN"
                  />
                  <label
                    htmlFor="cin"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    N° Passport / CIN
                  </label>
                </div>

                <div className="relative">
                  <input
                    onChange={handleChange}
                    autoComplete="off"
                    id=" num_permis"
                    name="licenseNumber"
                    type="text"
                    className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                    placeholder="N° Permis"
                  />
                  <label
                    htmlFor="licenseNumber"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    N° Permis
                  </label>
                </div>
              </div>

              <div className="flex gap-20">
                <div className="relative w-full">
                  <select
                  data-cy="genre"
                    onChange={handleChange}
                    autoComplete="off"
                    id="genre"
                    name="genre"
                    type="text"
                    className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                    placeholder="genre"
                  >
                    <option value="homme">Homme</option>
                    <option value="femme">Femme</option>
                  </select>
                </div>

                <div className="relative w-full">
                  <input
                    onChange={handleChange}
                    autoComplete="off"
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
                  data-cy="password"
                    onChange={handleChange}
                    autoComplete="off"
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
                  data-cy="confirmPassword"
                    onChange={handleChange}
                    autoComplete="off"
                    id="passwordConfirmation"
                    name="confirmPassword"
                    type="password"
                    className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                    placeholder="Password Confirmation"
                  />
                  <label
                    htmlFor="confirmPassword"
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
                    autoComplete="off"
                    id="expiration"
                    name="expiration"
                    type="text"
                    className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                    placeholder="Expiration Permis"
                  />
                  <label
                    htmlFor="expiration"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Expiration Permis
                  </label>
                </div>

                <div className="relative">
                  <input
                    onChange={handleChange}
                    autoComplete="off"
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
              </div>
              <div className="flex gap-20">
                <div className="relative">
                  <input
                    onChange={handleChange}
                    autoComplete="off"
                    id="nationalite"
                    name="country"
                    type="text"
                    className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                    placeholder="Nationalite"
                  />
                  <label
                    htmlFor="country"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Nationalite
                  </label>
                </div>

                <div className="relative">
                  <input
                    onChange={handleChange}
                    autoComplete="off"
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
                    autoComplete="off"
                    id="ville"
                    name="city"
                    type="text"
                    className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                    placeholder="Ville"
                  />
                  <label
                    htmlFor="city"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Ville
                  </label>
                </div>

                <div className="relative">
                  <input
                    onChange={handleChange}
                    autoComplete="off"
                    id="adresse"
                    name="address"
                    type="text"
                    className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                    placeholder="Adresse"
                  />
                  <label
                    htmlFor="address"
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
                    autoComplete="off"
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
