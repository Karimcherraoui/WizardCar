import { useSelector } from "react-redux";

export const TableCars = () => {
  // const dispatch = useDispatch();
  const profile = useSelector((state) => state.agency.profile);
  const cars = profile?.agency.cars;


  return (
    <div className="relative overflow-x-auto sm:rounded-lg   rounded-lg shadow-lg my-10 mx-24">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
          <tr>
            <th scope="col" className="px-6 py-3">
              Car
            </th>
            <th scope="col" className="px-6 py-3">
              Fuel
            </th>
            <th scope="col" className="px-6 py-3">
            Plaque
            </th>
            <th scope="col" className="px-6 py-3">
            Prix
            </th>
            <th scope="col" className="px-6 py-3">
            disponibilite
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {cars?.map((car) => (
            <tr key={car?._id} className="odd:bg-white  even:bg-gray-50 border-b ">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
              >
                {car.brand + " " + car.model}
              </th>
              <td className="px-6 py-4">{car.fuel}</td>
              <td className="px-6 py-4">{car.plateNumber}</td>
              <td className="px-6 py-4">{car.price + " DH"}</td>
              {
                (car.disponibility)==="Disponible" ? (
              <td className="px-6 py-4 font-bold text-green-700">{car.disponibility}</td> 
              ) : (
                  <td className="px-6 py-4">Non Disponible</td>
                )
              }
              {/* <td className="px-6 py-4">{car.disponibility}</td> */}
              <td className="px-6 py-4">
                <a href="#" className="font-medium text-blue-600  hover:underline">
                  Edit
                </a>
              </td>
            </tr>
          ))}
        
        </tbody>
      </table>
    </div>
  );
};
