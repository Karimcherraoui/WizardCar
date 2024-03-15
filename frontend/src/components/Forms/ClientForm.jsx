import { Flex, Select } from "@chakra-ui/react";
import { useState } from "react";






export const ClientForm = () => {

    const [localSettings, setLocalSettings] = useState({});


    const handleChange = (e) => {
        const { name, value } = e.target;
        setLocalSettings({ ...localSettings, [name]: value });
      };

    return(
        <form
        //   onSubmit={handleSubmit}
        className="my-10 w-[60%] mx-auto"
      >
        <Flex
          flexDirection={"column"}
          borderRadius={"lg"}
          shadow={"md"}
          padding={10}
        >
          <Flex justify={"center"}>
            <div className="mb-4  mx-10 w-[50%]">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                First Name
              </label>
              <input
                name="first_name"
                className="shadow-md appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="First Name"
                value={"test test" || ""}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4  mx-10 w-[50%]">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Last Name
              </label>
              <input
                className="shadow-md  appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="last_name"
                placeholder="Owner Lastname"
                value={"test owner lastname" || ""}
                onChange={handleChange}
              />
            </div>
          </Flex>

          <Flex justify={"center"}>
            <div className="mb-4  mx-10 w-[50%]">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Email
              </label>
              <input
                name="email"
                className="shadow-md appearance-none border rounded w-full  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Email"
                value={"test@gmai.com" || ""}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4  mx-10 w-[50%]">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Genre
              </label>
              <Select>
                <option value="homme">Homme</option>
                <option value="femme">Femme</option>
              </Select>
            </div>
          </Flex>

          <Flex justify={"center"}>
            <div className="mb-4  mx-10 w-[50%]">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                N° Passport / Carte d’identité
              </label>
              <input
                className="shadow-md  appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="cin"
                placeholder="CIN"
                value={"test cin" || ""}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4  mx-10 w-[50%]">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Telephone
              </label>
              <input
                className="shadow-md  appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="telephone"
                placeholder="Numero de Telephone"
                value={"+212" || ""}
                onChange={handleChange}
              />
            </div>
          </Flex>

          <Flex justify={"center"}>
            <div className="mb-4  mx-10 w-[50%]">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                N° Permis de conduire{" "}
              </label>
              <input
                className="shadow-md  appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="num_permis"
                placeholder="Num_permis"
                value={"H8902" || ""}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4  mx-10 w-[50%]">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Date expiration permis
              </label>
              <input
                className="shadow-md  appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="date_exp_permis"
                placeholder="Date d'expiration"
                value={"12-10-2025" || ""}
                onChange={handleChange}
              />
            </div>
          </Flex>

          <Flex justify={"center"}>
            <div className="mb-4  mx-10 w-[50%]">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Nationalite
              </label>
              <input
                className="shadow-md  appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="Nationalite"
                placeholder="Nationalite"
                value={"Morocco" || ""}
                onChange={handleChange}
              />
            </div>

            <div className="mb-4  mx-10 w-[50%]">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Adresse
              </label>
              <input
                className="shadow-md  appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="Adresse"
                placeholder="Adresse"
                value={"12 lux rabat" || ""}
                onChange={handleChange}
              />
            </div>
          </Flex>

          <Flex justify={"center"}>
            <div className="mb-4  mx-10 w-[50%]">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Region
              </label>
              <input
                className="shadow-md  appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="region"
                placeholder="Region"
                value={"Marrakech-Safi" || ""}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4  mx-10 w-[50%]">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Ville
              </label>
              <input
                className="shadow-md  appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="Ville"
                placeholder="Ville"
                value={"Safi" || ""}
                onChange={handleChange}
              />
            </div>
          </Flex>

          <div className="mx-10">
            <button
              className="bg-blue-500 mt-2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Update
            </button>
          </div>
        </Flex>
      </form>
    )




}