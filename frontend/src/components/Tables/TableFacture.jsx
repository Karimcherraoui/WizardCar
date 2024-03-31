import {
  Flex,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchInvoices, updateInvoice } from "../../features/invoicesSlice";

export const TableFacture = () => {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.agency.profile);
  const reservations = useSelector((state) => state.invoice.invoices);
  const agenceId = profile?.agency._id;

  const [actionData, setActionData] = useState({ id: null, status: null });

  useEffect(() => {
    dispatch(fetchInvoices(agenceId));
  }, [dispatch]);

  const handleAction = (id, status) => {
    console.log("testckixk",id, status);
    setActionData( id, status );
    dispatch(updateInvoice({ id, status } ));
  };

  return (
    <div className="relative overflow-x-auto sm:rounded-lg   rounded-lg shadow-lg my-10 mx-24">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
          <tr>
            <th scope="col" className="px-6 py-3">
              Nom de Voiture
            </th>
            <th scope="col" className="px-6 py-3">
              Numero de Plaque
            </th>
            <th scope="col" className="px-6 py-3">
              Nom de Client
            </th>
            <th scope="col" className="px-6 py-3">
              Total prix
            </th>
            <th scope="col" className="px-6 py-3">
              Tele Client
            </th>

            <th scope="col" className="px-6 py-3">
              Status
            </th>

            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {reservations.reservations?.map((reservation) => (
            <tr
              key={reservation._id}
              className="odd:bg-white  even:bg-gray-50 border-b "
            >
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
              >
                {reservation.idCar.brand + " " + reservation.idCar.model}
              </th>
              <td className="px-6 py-4">{reservation.idCar.plateNumber}</td>
              <td className="px-6 py-4">
                {" "}
                {reservation.idClient.firstName +
                  " " +
                  reservation.idClient.lastName}
              </td>
              <td className="px-6 py-4">{reservation.totalPrice} Dh</td>
              <td className="px-6 py-4">{reservation.idClient.phone}</td>
              <td
                className={`px-6 py-4 font-bold ${
                  reservation.status === "En attente"
                    ? "text-blue-500"
                    : reservation.status === "Confirmée"
                    ? "text-green-500"
                    : reservation.status === "Annulée"
                    ? "text-red-500"
                    : ""
                }`}
              >
                {reservation.status}
              </td>

              <td className="px-6 py-4">
                <div className="flex flex-row gap-2">
                  <button
                    onClick={() => handleAction(reservation._id, "Confirmée")}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="2rem"
                      height="2rem"
                      viewBox="0 0 48 48"
                    >
                      <path
                        fill="#d1c4e9"
                        d="M38 7H10c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h28c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2m0 12H10c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h28c1.1 0 2-.9 2-2v-6c0-1.1-.9-2-2-2m0 12H10c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h28c1.1 0 2-.9 2-2v-6c0-1.1-.9-2-2-2"
                      />
                      <circle cx="38" cy="38" r="10" fill="#43a047" />
                      <path
                        fill="#dcedc8"
                        d="M42.5 33.3L36.8 39l-2.7-2.7l-2.1 2.2l4.8 4.8l7.8-7.8z"
                      />
                    </svg>
                  </button>
                  <button
                    onClick={() => handleAction(reservation._id, "Annulée")}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="2rem"
                      height="2rem"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="red"
                        d="m8.4 17l3.6-3.6l3.6 3.6l1.4-1.4l-3.6-3.6L17 8.4L15.6 7L12 10.6L8.4 7L7 8.4l3.6 3.6L7 15.6zm3.6 5q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22"
                      />
                    </svg>
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
