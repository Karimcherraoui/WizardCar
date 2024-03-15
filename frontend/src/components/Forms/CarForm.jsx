import { Flex } from "@chakra-ui/react";
import { useState } from "react";

export default function CarForm() {
  const [localSettings, setLocalSettings] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLocalSettings({ ...localSettings, [name]: value });
  };

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
              Marque
            </label>
            <input
              name="Marque"
              className="shadow-md appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Marque"
              value={"Tesla" || ""}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4  mx-10 w-[50%]">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Model
            </label>
            <input
              className="shadow-md  appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="Model"
              placeholder="Model"
              value={"Model" || ""}
              onChange={handleChange}
            />
          </div>
        </Flex>

        <Flex justify={"center"}>
          <div className="mb-4  mx-10 w-[50%]">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Annee
            </label>
            <input
              name="Annee"
              className="shadow-md appearance-none border rounded w-full  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Annee"
              value={"2022" || ""}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4  mx-10 w-[50%]">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Couleur
            </label>
            <input
              name="Couleur"
              className="shadow-md appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Couleur"
              value={"Red" || ""}
              onChange={handleChange}
            />
          </div>
        </Flex>

        <Flex justify={"center"}>
          <div className="mb-4  mx-10 w-[50%]">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Prix
            </label>
            <input
              name="Prix"
              className="shadow-md appearance-none border rounded w-full  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Prix"
              value={"1000" || ""}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4  mx-10 w-[50%]">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Carburant
            </label>
            <input
              name="Carburant"
              className="shadow-md appearance-none border rounded w-full  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Carburant"
              value={"Electric" || ""}
              onChange={handleChange}
            />
          </div>
        </Flex>

        <Flex justify={"center"}>
          <div className="mb-4  mx-10 w-[50%]">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Transmission
            </label>
            <input
              name="Transmission"
              className="shadow-md appearance-none border rounded w-full  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Transmission"
              value={"Automatic" || ""}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4  mx-10 w-[50%]">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Type
            </label>
            <input
              name="Type"
              className="shadow-md appearance-none border rounded w-full  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Type"
              value={"Type" || ""}
              onChange={handleChange}
            />
          </div>
        </Flex>

        <Flex justify={"center"}>
          <div className="mb-4  mx-10 w-[50%]">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Matricule
            </label>
            <input
              name="Matricule"
              className="shadow-md appearance-none border rounded w-full  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Matricule"
              value={"Matricule" || ""}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4  mx-10 w-[50%]">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Disponibilite
            </label>
            <input
              name="Disponibilite"
              className="shadow-md appearance-none border rounded w-full  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Disponibilite"
              value={"Disponibilite" || ""}
              onChange={handleChange}
            />
          </div>
        </Flex>

        <Flex justify={"center"}>
          <div className="mb-4  mx-10 w-[50%]">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Numero de chassis
            </label>
            <input
              name="Chassis_number"
              className="shadow-md appearance-none border rounded w-full  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Chassis Number"
              value={"gs87hjd807s" || ""}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4  mx-10 w-[50%]">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Image Voiture
            </label>
            <input
              name="Car_image"
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
            Ajouter
          </button>
        </div>
      </Flex>
    </form>
  );
}
