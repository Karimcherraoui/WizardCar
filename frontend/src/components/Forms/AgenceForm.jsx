import { Flex, Select } from "@chakra-ui/react";
import { useState } from "react";

export const AgenceForm = () => {
  const [localSettings, setLocalSettings] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLocalSettings({ ...localSettings, [name]: value });
  };

  // company_name         String
  // owner_name           String
  // owner_lastname       String
  // vat_number           String
  // street               String
  // zip_code             String
  // city                 String
  // country              String
  // owner_email          String
  // owner_phone          String
  // owner_website        String
  // bank_name            String
  // bank_account_number  String
  
  return (
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
              Nom d'agence
            </label>
            <input
              name="agence_name"
              className="shadow-md appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="agence_name"
              value={"Wizard car" || ""}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4  mx-10 w-[50%]">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Proprietaire Prenom
            </label>
            <input
              className="shadow-md  appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="owner_name"
              placeholder="Owner Name"
              value={"test owner" || ""}
              onChange={handleChange}
            />
          </div>
        </Flex>

        <Flex justify={"center"}>
          <div className="mb-4  mx-10 w-[50%]">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Proprietaire Nom
            </label>
            <input
              name="owner_lastname"
              className="shadow-md appearance-none border rounded w-full  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Owner Lastname"
              value={"test owner lastname" || ""}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4  mx-10 w-[50%]">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Numéro de TVA
            </label>
            <input
              name="vat_number"
              className="shadow-md appearance-none border rounded w-full  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="VAT Number"
              value={"test vat number" || ""}
              onChange={handleChange}
            />
          </div>
        </Flex>

        <Flex justify={"center"}>
          <div className="mb-4  mx-10 w-[50%]">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Adresse
            </label>
            <input
              name="street"
              className="shadow-md appearance-none border rounded w-full  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Street"
              value={"test street" || ""}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4  mx-10 w-[50%]">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Zip Code
            </label>
            <input
              name="zip_code"
              className="shadow-md appearance-none border rounded w-full  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Zip Code"
              value={"test zip code" || ""}
              onChange={handleChange}
            />
          </div>
        </Flex>

        <Flex justify={"center"}>
          <div className="mb-4  mx-10 w-[50%]">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Ville
            </label>
            <input
              name="city"
              className="shadow-md appearance-none border rounded w-full  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="City"
              value={"test city" || ""}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4  mx-10 w-[50%]">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Pays
            </label>
            <input
              name="country"
              className="shadow-md appearance-none border rounded w-full  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Country"
              value={"test country" || ""}
              onChange={handleChange}
            />
          </div>
        </Flex>

        <Flex justify={"center"}>
          <div className="mb-4  mx-10 w-[50%]">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Proprietaire Email
            </label>
            <input
              name="owner_email"
              className="shadow-md appearance-none border rounded w-full  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Owner Email"
              value={"test email" || ""}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4  mx-10 w-[50%]">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Proprietaire Telephone
            </label>
            <input
              name="owner_phone"
              className="shadow-md appearance-none border rounded w-full  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Owner Phone"
              value={"test phone" || ""}
              onChange={handleChange}
            />
          </div>
        </Flex>

        <Flex justify={"center"}>
          <div className="mb-4  mx-10 w-[50%]">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Agence Website
            </label>
            <input
              name="owner_website"
              className="shadow-md appearance-none border rounded w-full  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Owner Website"
              value={"test website" || ""}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4  mx-10 w-[50%]">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Banque
            </label>
            <input
              name="bank_name"
              className="shadow-md appearance-none border rounded w-full  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Bank Name"
              value={"test bank name" || ""}
              onChange={handleChange}
            />
          </div>
        </Flex>

        <Flex justify={"center"}>
          <div className="mb-4  mx-10 w-[50%]">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Numero de compte
            </label>
            <input
              name="bank_account_number"
              className="shadow-md appearance-none border rounded w-full  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Bank Account Number"
              value={"test bank account number" || ""}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4  mx-10 w-[50%]">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Agence Logo
            </label>
            <input
              name="logo"
              className="shadow-md appearance-none border rounded w-full  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="file"
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
  );
};
