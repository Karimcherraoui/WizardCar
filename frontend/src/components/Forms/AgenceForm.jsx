import { Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateAgency } from "../../features/agencySlice";

export const AgenceForm = () => {
  const [localSettings, setLocalSettings] = useState({});
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.agency.profile);

  console.log(profile);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLocalSettings({ ...localSettings, [name]: value });
  };

  useEffect(() => {
    if (profile) {
      setLocalSettings(profile.agency);
    }
  }, [profile]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = { ...localSettings };
    dispatch(updateAgency(form));
    window.location.reload(false);
  };

  if (!profile) {
    return <div>Loading...</div>;
  }
  return (
    <form onSubmit={handleSubmit} className="my-10 w-[60%] mx-auto">
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
              name="agencyName"
              className="shadow-md appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="agence_name"
              value={localSettings.agencyName || ""}
              onChange={handleChange}
            />
          </div>

          <div className="mb-4  mx-10 w-[50%]">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Agence Website
            </label>
            <input
              name="website"
              className="shadow-md appearance-none border rounded w-full  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Owner Website"
              value={localSettings.website}
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
              name="ownerLastName"
              className="shadow-md appearance-none border rounded w-full  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Owner Lastname"
              value={localSettings.ownerLastName || ""}
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
              name="ownerName"
              placeholder="Owner Name"
              value={localSettings.ownerName || ""}
              onChange={handleChange}
            />
          </div>
        </Flex>

        <Flex justify={"center"}>
          <div className="mb-4  mx-10 w-[50%]">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Phone
            </label>
            <input
              name="phone"
              className="shadow-md appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Numero de telephone"
              value={localSettings.phone || ""}
              onChange={handleChange}
            />
          </div>

          <div className="mb-4  mx-10 w-[50%]">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Adresse
            </label>
            <input
              name="address"
              className="shadow-md appearance-none border rounded w-full  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Street"
              value={localSettings.address || ""}
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
              value={localSettings.city || ""}
              onChange={handleChange}
            />
          </div>

          <div className="mb-4  mx-10 w-[50%]">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Region
            </label>
            <input
              name="region"
              className="shadow-md appearance-none border rounded w-full  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Region"
              value={localSettings.region || ""}
              onChange={handleChange}
            />
          </div>
        </Flex>

        <Flex justify={"center"}>
          <div className="mb-4  mx-10 w-[50%]">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Zip Code
            </label>
            <input
              name="zipCode"
              className="shadow-md appearance-none border rounded w-full  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Zip Code"
              value={localSettings.zipCode || ""}
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
              value={localSettings.country || ""}
              onChange={handleChange}
            />
          </div>
        </Flex>

        <Flex justify={"center"}>
          <div className="mb-4  mx-10 w-[50%]">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Numéro de TVA
            </label>
            <input
              name="numberTva"
              className="shadow-md appearance-none border rounded w-full  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="VAT Number"
              value={localSettings.numberTva || ""}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4  mx-10 w-[50%]">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Banque
            </label>
            <input
              name="bankName"
              className="shadow-md appearance-none border rounded w-full  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Bank Name"
              value={localSettings.bankName || ""}
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
              name="rib"
              className="shadow-md appearance-none border rounded w-full  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Bank Account Number"
              value={localSettings.rib || ""}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4  mx-10 w-[50%]">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              IBAN
            </label>
            <input
              name="iban"
              className="shadow-md appearance-none border rounded w-full  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="IBAN "
              value={localSettings.iban || ""}
              onChange={handleChange}
            />
          </div>
        </Flex>
        <Flex justify={"center"}>
          <div className="mb-4  mx-10 w-full">
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
