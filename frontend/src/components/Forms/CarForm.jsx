import { Flex } from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addCar } from "../../features/carsSlice";
import axios from "axios";

export default function CarForm() {
  const [carForm, setCarForm] = useState({});
  const [panding, setPanding] = useState(false);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCarForm({ ...carForm, [name]: value });
  };
  const handleImage = async (e) => {
    const { name, files } = e.target;
    const formData = new FormData();
    formData.append("image", files[0]);
    setPanding(true);
    const {data:imageData} = await axios.post("http://localhost:3005/upload", formData);
    setCarForm({ ...carForm, [name]: imageData.url });
    setPanding(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addCar({ form: carForm }));
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
              Marque
            </label>
            <input
              name="brand"
              className="shadow-md appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Marque"
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
              name="model"
              placeholder="Model"
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
              name="year"
              className="shadow-md appearance-none border rounded w-full  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Annee"
              onChange={handleChange}
            />
          </div>
          <div className="mb-4  mx-10 w-[50%]">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Couleur
            </label>
            <input
              name="color"
              className="shadow-md appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Couleur"
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
              name="price"
              className="shadow-md appearance-none border rounded w-full  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Prix"
              onChange={handleChange}
            />
          </div>
          <div className="mb-4  mx-10 w-[50%]">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Carburant
            </label>
            <input
              name="fuel"
              className="shadow-md appearance-none border rounded w-full  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Carburant"
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
              name="transmission"
              className="shadow-md appearance-none border rounded w-full  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Transmission"
              onChange={handleChange}
            />
          </div>
          <div className="mb-4  mx-10 w-[50%]">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Type
            </label>
            <input
              name="type"
              className="shadow-md appearance-none border rounded w-full  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Type"
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
              name="plateNumber"
              className="shadow-md appearance-none border rounded w-full  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Matricule"
              onChange={handleChange}
            />
          </div>
          <div className="mb-4  mx-10 w-[50%]">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Numero de chassis
            </label>
            <input
              name="chassisNumber"
              className="shadow-md appearance-none border rounded w-full  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Chassis Number"
              onChange={handleChange}
            />
          </div>
        </Flex>

        <Flex justify={"center"}>

        <div className="mb-4  mx-10 w-[50%]">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Description
            </label>
            <textarea
              name="description"
              className="shadow-md appearance-none border rounded w-full  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Description"
              onChange={handleChange}
            />
          </div>


          <div className="mb-4  mx-10 w-[50%]">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Image Voiture
            </label>
            <input
              name="image"
              className="shadow-md appearance-none border rounded w-full  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="file"
              onChange={handleImage}
            />
          </div>

        </Flex>
        <div className="mx-10">
          <button
            className="bg-blue-500 mt-2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            disabled={panding}
          >
            Ajouter
          </button>
        </div>
      </Flex>
    </form>
  );
}
