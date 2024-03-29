// import { useDispatch, useSelector } from "react-redux";
// import { useEffect, useState } from "react";
// import { fetchClients } from "../../features/clientSlice";
// import Select from "react-select";
// import { fetchCars } from "../../features/carsSlice";
// import { createInvoice } from "../../features/invoicesSlice";

import { Divider, Input, Select } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { profileClient } from "../../features/clientSlice";
import { useParams } from "react-router-dom";
import { createInvoice } from "../../features/invoicesSlice";

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

const calculateDays = (pickupDate, returnDate) => {
  const [pickupYear, pickupMonth, pickupDay] = pickupDate
    .split("-")
    .map(Number);
  const [returnYear, returnMonth, returnDay] = returnDate
    .split("-")
    .map(Number);

  const pickupDateCar = new Date(pickupYear, pickupMonth - 1, pickupDay);
  const returnDateCar = new Date(returnYear, returnMonth - 1, returnDay);

  const differenceInTime = returnDateCar.getTime() - pickupDateCar.getTime();
  const differenceInDays = differenceInTime / (1000 * 3600 * 24);
  return differenceInDays;
};
export default function Booking() {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(profileClient());
  }, [dispatch]);


  //   const { isOpen, onOpen, onClose } = useDisclosure();

  const clients = useSelector((state) => state.client.profile);
  const clientId = clients.client._id;
  const car = useSelector((state) => state.car.selectedCar);
  const carPrice = car.price;
  const carAgence = car.idAgency;



  // const cars = useSelector((state) => state.Cars.cars);
  // const settings = useSelector((state) => state.Settings.settings);
  // const [invoice, setInvoice] = useState(null);

  // const handleCreate = (e) => {
  //   e.preventDefault();
  //   console.log(factureForm);
  //   dispatch(createInvoice(factureForm)).then((action) => {
  //     const invoice = action.payload.invoice;
  //     setInvoice(invoice);
  //     onOpen();
  //   });

  // };

  const [factureForm, setFactureForm] = useState({
    idCar: id,
    idClient: clientId,
    idAgence: car?.idAgency._id,
  });

  const [livraison, setLivraison] = useState(null);
  const [paiment, setPaiment] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (
      name === "pickupDate" &&
      value < new Date().toISOString().split("T")[0]
    ) {
      alert("vous pouvez pas choisir une date inferieur a la date actuelle");
      return;
    }
    if (name === "returnDate" && value < pickupDate) {
      alert("vous pouvez pas choisir une date inferieur a la date de reservation");
      return; 
    }
    setFactureForm({ ...factureForm, [name]: value });
    if (name === "pickupDate") {
      setPickupDate(value);
    }
    if (name === "returnDate") {
      setReturnDate(value);
    }
    if (name === "pickUpType") {
      setLivraison(value === "Delivery");
    }
    if (name === "paymentMethod") {
      setPaiment(value === "BankTransfer");
    }
 
  };

  const [pickupDate, setPickupDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const days = calculateDays(pickupDate, returnDate);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = { ...factureForm };
    dispatch(createInvoice(form));
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

          <div className="mb-3 w-[50%] mx-10">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Payment Method
            </label>
            <Select
              name="paymentMethod"
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

        <div className="flex flex-row justify-between w-full  ">
          {livraison && (
            <div className="mb-3 w-[50%] mx-10">
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
            </div>
          )}
          <div className="mb-3 w-[50%] mx-10">
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
        {factureForm.pickupDate && factureForm.returnDate && (
          <>
            <Divider />
            <div className="flex flex-row justify-between  ">
              <div className="flex flex-col  w-[40%] items-center">
                <h6 className="mb-4 text-center text-orange-500 ml-12">
                  Montant a payer
                </h6>
                <div className="flex justify-between  items-center gap-4 mb-2 w-full">
                  <span className=" text-gray-400 text-md ml-14">
                    Prix / Jour :
                  </span>
                  <span className=" text-sm">{carPrice} DH</span>
                </div>
                <div className="flex justify-between  items-center gap-4 mb-2 w-full">
                  <span className=" text-gray-400 text-md ml-14">
                    Periode :
                  </span>
                  <span className="text-sm ">{days.toFixed(0)} Jour</span>
                </div>
                <div className="flex justify-between  items-center gap-4 mb-2 w-full">
                  <span className="text-xl font-bold underline ml-14">
                    Total Prix :
                  </span>
                  <span className="text-sm">
                    {(days * carPrice).toFixed(2)} DH
                  </span>
                </div>
              </div>
              {paiment && (
                <div className="flex flex-col  w-[40%] items-center">
                  <h6 className="mb-4 text-center text-orange-500 mr-20">
                    Information de Banque
                  </h6>
                  <div className="flex justify-between  items-center gap-4 mb-2 w-full">
                    <span className=" text-md text-gray-400 ">
                      Nom d'agence :
                    </span>
                    <span className=" mr-20">{carAgence.agencyName}</span>
                  </div>
                  <div className="flex justify-between  items-center gap-4 mb-2 w-full">
                    <span className=" text-md text-gray-400 ">Phone :</span>
                    <span className=" mr-20">{carAgence.phone}</span>
                  </div>
                  <div className="flex justify-between  items-center gap-4 mb-2 w-full">
                    <span className=" text-md text-gray-400 ">IBAN :</span>
                    <span className=" mr-20">{carAgence.iban}</span>
                  </div>
                  <div className="flex justify-between  items-center gap-4 mb-2 w-full">
                    <span className=" text-md text-gray-400 ">RIB:</span>
                    <span className=" mr-20">{carAgence.rib}</span>
                  </div>
                </div>
              )}
            </div>
            <Divider />
          </>
        )}

        <div className="mx-10 flex justify-end">
          <button
            className="bg-blue-500 mt-2 mb-6 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Commandez maintenant !
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
