// import { useDispatch, useSelector } from "react-redux";
// import { useEffect, useState } from "react";
// import { fetchClients } from "../../features/clientSlice";
// import Select from "react-select";
// import { fetchCars } from "../../features/carsSlice";
// import { createInvoice } from "../../features/invoicesSlice";

import { Input, Select } from "@chakra-ui/react";
import { useState } from "react";

// import {
//   Modal,
//   ModalOverlay,
//   ModalContent,
//   ModalHeader,
//   ModalFooter,
//   ModalBody,
//   ModalCloseButton,
//   Button,
//   useDisclosure,
// } from "@chakra-ui/react";
// import PdfFacture from "../facturePDF/PdfFacture";
// import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
// import { fetchSettings } from "../../features/settingSlice";
// import { useTranslation } from "react-i18next";

export default function Booking() {
  //   const dispatch = useDispatch();

  //   useEffect(() => {
  //     dispatch(fetchClients());
  //     dispatch(fetchCars());
  //     dispatch(fetchSettings());
  //   }, [dispatch]);

  //   const { isOpen, onOpen, onClose } = useDisclosure();

  const [factureForm, setFactureForm] = useState({});
  //   const clients = useSelector((state) => state.Clients.clients);
  //   const cars = useSelector((state) => state.Cars.cars);
  //   const settings = useSelector((state) => state.Settings.settings);
  //   const [invoice, setInvoice] = useState(null);

  //   const handleCreate = (e) => {
  //     e.preventDefault();
  //     console.log(factureForm);
  //     dispatch(createInvoice(factureForm)).then((action) => {
  //       const invoice = action.payload.invoice;
  //       setInvoice(invoice);
  //       onOpen();
  //     });

  //   };
  //   const { t } = useTranslation();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFactureForm({ ...factureForm, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(factureForm);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-row justify-between  ">
          <div className="mb-3 w-[50%] mx-10">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Date de Reservation
            </label>
            <input
              className="shadow-md  appearance-none border rounded w-full py-3 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="date"
              placeholder="Date"
              name="pickupDate"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3 w-[50%] mx-10">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Date Retour
            </label>
            <input
              className="shadow-md appearance-none border rounded w-full py-3 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="date"
              placeholder="Due Date"
              name="returnDate"
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="flex flex-row justify-between  ">
          <div className="mb-3 w-[50%] mx-10">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Reservation methode
            </label>
            <Select
              name="pickUpType"
              size={"lg"}
              placeholder=" "
              className="shadow-md appearance-none border rounded px-20 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onChange={handleChange}
            >
              <option value="OnSite">Sur place</option>
              <option value="Delivery">Livraison</option>
            </Select>
          </div>
          {/* <div className="mb-3 w-[50%] mx-10">
            <label className="block text-gray-700 text-sm font-bold mb-2">

            Adresse
            </label>
            <input
              className="shadow-md  appearance-none border rounded w-full py-3 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Adresse"
              name="pickUpLocation"
              //   onChange={handleChange}
            />
          </div> */}
          <div className="mb-3 w-[50%] mx-10">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Payment Method
            </label>
            <Select
              name="client"
              size={"lg"}
              placeholder=" "
              className="shadow-md appearance-none border rounded px-20 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onChange={handleChange}
            >
              <option value="Cod">paiement à la livraison</option>
              <option value="BankTransfer">Virement bancaire</option>
            </Select>
          </div>
        </div>

        <div className="flex flex-row justify-between w-[50%]  ">
          <div className="mb-3 w-full mx-10">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Message
            </label>
            <textarea
              rows="2"
              className="shadow-md appearance-none border rounded w-full py-3 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Message"
              name="message"
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="mx-10">
          <button
            className="bg-blue-500 mt-2 mb-6 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Order Now !
          </button>
        </div>
      </form>
      {/* <Modal
        isOpen={isOpen}
        onClose={onClose}
        size={"xl"}
        scrollBehavior="inside"
        isCentered
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Facture Overview</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {invoice && settings && (
              <PDFViewer className="h-[48rem] w-full" showToolbar={false}>
                <PdfFacture invoice={invoice} settings={settings} />
              </PDFViewer>
            )}
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            {invoice && settings && (
              <PDFDownloadLink
                document={<PdfFacture invoice={invoice} settings={settings} />}
                fileName="facture.pdf"
              >
                {({ blob, url, loading, error }) =>
                  loading ? "Loading document..." : "Download now!"
                }
              </PDFDownloadLink>
            )}
          </ModalFooter>
        </ModalContent>
      </Modal> */}
    </>
  );
}
