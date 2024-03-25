import { Flex, Select } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateClient } from "../../features/clientSlice";

export const ClientForm = () => {
  const [infoClient, setInfoClient] = useState({});

  const dispatch = useDispatch();
  const profileClient = useSelector((state) => state.client.profile);

  const handleChangeClient = (e) => {
    const { name, value } = e.target;
    setInfoClient({ ...infoClient, [name]: value });
  };

  useEffect(() => {
    if (profileClient) {
      setInfoClient(profileClient?.client);
    }
  }, [profileClient]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = { ...infoClient };
    dispatch(updateClient(form));
    window.location.reload(false);
  };

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
              First Name
            </label>
            <input
              name="firstName"
              className="shadow-md appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="First Name"
              value={infoClient?.firstName || ""}
              onChange={handleChangeClient}
            />
          </div>
          <div className="mb-4  mx-10 w-[50%]">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Last Name
            </label>
            <input
              className="shadow-md  appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="lastName"
              placeholder="Owner Lastname"
              value={infoClient?.lastName || ""}
              onChange={handleChangeClient}
            />
          </div>
        </Flex>

        <Flex justify={"center"}>
          <div className="mb-4  mx-10 w-[50%]">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Genre
            </label>
            <Select
              name="genre"
              value={infoClient?.genre || ""}
              onChange={handleChangeClient}
            >
              <option name="genre" onChange={handleChangeClient} value="homme">
                Homme
              </option>
              <option name="genre" onChange={handleChangeClient} value="femme">
                Femme
              </option>
            </Select>
          </div>
          <div className="mb-4  mx-10 w-[50%]">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              N° Passport / Carte d’identité
            </label>
            <input
              className="shadow-md  appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="cin"
              placeholder="CIN"
              value={infoClient?.cin || ""}
              onChange={handleChangeClient}
            />
          </div>
        </Flex>

        <Flex justify={"center"}>
          <div className="mb-4  mx-10 w-[50%]">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Telephone
            </label>
            <input
              className="shadow-md  appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="phone"
              placeholder="Numero de Telephone"
              value={infoClient?.phone || ""}
              // onChange={handleChangeUser}
            />
          </div>
          <div className="mb-4  mx-10 w-[50%]">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              N° Permis de conduire{" "}
            </label>
            <input
              className="shadow-md  appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="licenseNumber"
              placeholder="Num_permis"
              value={infoClient?.licenseNumber || ""}
              onChange={handleChangeClient}
            />
          </div>
        </Flex>

        <Flex justify={"center"}>
          <div className="mb-4  mx-10 w-[50%]">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Date expiration permis
            </label>
            <input
              className="shadow-md  appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="expiration"
              placeholder="Date d'expiration"
              value={infoClient?.expiration || ""}
              onChange={handleChangeClient}
            />
          </div>
          <div className="mb-4  mx-10 w-[50%]">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Nationalite
            </label>
            <input
              className="shadow-md  appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="country"
              placeholder="Nationalite"
              value={infoClient?.country || ""}
              onChange={handleChangeClient}
            />
          </div>
        </Flex>

        <Flex justify={"center"}>
          <div className="mb-4  mx-10 w-[50%]">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Adresse
            </label>
            <input
              className="shadow-md  appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="address"
              placeholder="Adresse"
              value={infoClient?.address || ""}
              onChange={handleChangeClient}
            />
          </div>
          <div className="mb-4  mx-10 w-[50%]">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Region
            </label>
            <input
              className="shadow-md  appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="region"
              placeholder="Region"
              value={infoClient?.region || ""}
              onChange={handleChangeClient}
            />
          </div>
        </Flex>

        <Flex justify={"center"}>
          <div className="mb-4  mx-10 w-[50%]">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Ville
            </label>
            <input
              className="shadow-md  appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="city"
              placeholder="Ville"
              value={infoClient?.city || ""}
              onChange={handleChangeClient}
            />
          </div>
          <div className="mb-4  mx-10 w-[50%]">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Zip Code
            </label>
            <input
              name="zipCode"
              className="shadow-md appearance-none border rounded w-full  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Zip Code"
              value={infoClient?.zipCode || ""}
              // onChange={handleChange}
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
