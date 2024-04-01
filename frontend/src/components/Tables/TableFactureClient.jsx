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
import {
  fetchInvoices,
  fetchInvoicesClient,
  updateInvoice,
} from "../../features/invoicesSlice";

export const TableFactureClient = () => {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.client.profile);
  const reservations = useSelector((state) => state.invoice.invoicesClient);
  console.log(reservations);
  const clientId = profile?.client._id;
  useEffect(() => {
    dispatch(fetchInvoicesClient(clientId));
  }, [dispatch]);

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
              Nom d'agence
            </th>
            <th scope="col" className="px-6 py-3">
              Total prix
            </th>
            <th scope="col" className="px-6 py-3">
              Tele Client
            </th>
            <th scope="col" className="px-6 py-3">
              Date de récupération
            </th>
            <th scope="col" className="px-6 py-3">
              Date retour
            </th>

            <th scope="col" className="px-6 py-3">
              Status
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
              <td className="px-6 py-4"> {reservation.idAgence.agencyName}</td>
              <td className="px-6 py-4">{reservation.totalPrice} Dh</td>
              <td className="px-6 py-4">{reservation.idAgence.phone}</td>
              <td className="px-6 py-4">{reservation.pickupDate}</td>
              <td className="px-6 py-4">{reservation.returnDate}</td>

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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
