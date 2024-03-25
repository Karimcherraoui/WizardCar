import { useSelector } from "react-redux";

export const TableCars = () => {
  // const dispatch = useDispatch();
  const profile = useSelector((state) => state.agency.profile);
  const cars = profile?.agency.cars;
  console.log(cars);

  return (
    <div class="relative overflow-x-auto sm:rounded-lg   rounded-lg shadow-lg my-10 mx-24">
      <table class="w-full text-sm text-left rtl:text-right text-gray-500">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 ">
          <tr>
            <th scope="col" class="px-6 py-3">
              Car
            </th>
            <th scope="col" class="px-6 py-3">
              Fuel
            </th>
            <th scope="col" class="px-6 py-3">
            Plaque
            </th>
            <th scope="col" class="px-6 py-3">
            Prix
            </th>
            <th scope="col" class="px-6 py-3">
            disponibilite
            </th>
            <th scope="col" class="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {cars?.map((car) => (
            <tr class="odd:bg-white  even:bg-gray-50 border-b ">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
              >
                {car.brand + " " + car.model}
              </th>
              <td class="px-6 py-4">{car.fuel}</td>
              <td class="px-6 py-4">{car.plateNumber}</td>
              <td class="px-6 py-4">{car.price + " DH"}</td>
              {
                (car.disponibility)==="Disponible" ? (
              <td class="px-6 py-4 font-bold text-green-700">{car.disponibility}</td> 
              ) : (
                  <td class="px-6 py-4">Non Disponible</td>
                )
              }
              {/* <td class="px-6 py-4">{car.disponibility}</td> */}
              <td class="px-6 py-4">
                <a href="#" class="font-medium text-blue-600  hover:underline">
                  Edit
                </a>
              </td>
            </tr>
          ))}
          {/* <tr class="odd:bg-white  even:bg-gray-50  border-b ">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
              >
                Microsoft Surface Pro
              </th>
              <td class="px-6 py-4">White</td>
              <td class="px-6 py-4">Laptop PC</td>
              <td class="px-6 py-4">$1999</td>
              <td class="px-6 py-4">
                <a
                  href="#"
                  class="font-medium text-blue-600  hover:underline"
                >
                  Edit
                </a>
              </td>
            </tr>
            <tr class="odd:bg-white  even:bg-gray-50  border-b dar">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
              >
                Magic Mouse 2
              </th>
              <td class="px-6 py-4">Black</td>
              <td class="px-6 py-4">Accessories</td>
              <td class="px-6 py-4">$99</td>
              <td class="px-6 py-4">
                <a
                  href="#"
                  class="font-medium text-blue-600 hover:underline"
                >
                  Edit
                </a>
              </td>
            </tr>
            <tr class="odd:bg-white  even:bg-gray-50  border-b ">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
              >
                Google Pixel Phone
              </th>
              <td class="px-6 py-4">Gray</td>
              <td class="px-6 py-4">Phone</td>
              <td class="px-6 py-4">$799</td>
              <td class="px-6 py-4">
                <a
                  href="#"
                  class="font-medium text-blue-600  hover:underline"
                >
                  Edit
                </a>
              </td>
            </tr>
            <tr>
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
              >
                Apple Watch 5
              </th>
              <td class="px-6 py-4">Red</td>
              <td class="px-6 py-4">Wearables</td>
              <td class="px-6 py-4">$999</td>
              <td class="px-6 py-4">
                <a
                  href="#"
                  class="font-medium text-blue-600  hover:underline"
                >
                  Edit
                </a>
              </td>
            </tr> */}
        </tbody>
      </table>
    </div>
  );
};
