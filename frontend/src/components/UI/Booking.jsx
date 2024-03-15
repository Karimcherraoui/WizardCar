// import { useDispatch, useSelector } from "react-redux";
// import { useEffect, useState } from "react";
// import { fetchClients } from "../../features/clientSlice";
// import Select from "react-select";
// import { fetchCars } from "../../features/carsSlice";
// import { createInvoice } from "../../features/invoicesSlice";

import { Select } from "@chakra-ui/react";

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
  const clients = [
    {
      id: 1,
      firstname: "John",
      surname: "Doe",
    },
    {
      id: 2,
      firstname: "Jane",
      surname: "jbdl",
    },
  ];
  const cars = [
    {
      id: 1,
      brand: "Toyota",
      carType: "Corolla",
    },
    {
      id: 2,
      brand: "Honda",
      carType: "Civic",
    },
  ];

  //   const dispatch = useDispatch();

  //   useEffect(() => {
  //     dispatch(fetchClients());
  //     dispatch(fetchCars());
  //     dispatch(fetchSettings());
  //   }, [dispatch]);

  //   const { isOpen, onOpen, onClose } = useDisclosure();

  //   const [factureForm, setFactureForm] = useState({
  //     paidStatus: false,
  //   });
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
  //   const handleChange = (e) => {
  //     let { name, value } = e.target;
  //     if (e.target.type === "number") value = Number(value);
  //     if (e.target.type === "checkbox") value = e.target.checked;
  //     setFactureForm({ ...factureForm, [name]: value });
  //   };

  return (
    // cin: { type: String, required: true, unique: true },
    // numeroPermis: { type: String, required: true, unique: true },
    // country: { type: String, required: true },

    <>
      <form>
        <div className="flex flex-row justify-between ">
          <div className="mb-3 w-[50%] mx-10">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              {/* {t("informations.labels.ownerName")} */}
              Owner Name
            </label>
            <input
              name="owner_name"
              className="shadow-md appearance-none border rounded w-full py-3 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              // placeholder={t("informations.labels.ownerName")}
              placeholder="Owner Name"
              value={"test owner name" || ""}
              // onChange={handleChange}
            />
          </div>
          <div className="mb-3 w-[50%] mx-10">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              {/* {t("informations.labels.ownerLastname")} */}
              Owner Lastname
            </label>
            <input
              className="shadow-md appearance-none border rounded w-full py-3 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="owner_lastname"
              // placeholder={t("informations.labels.ownerLastname")}
              placeholder="Owner Lastname"
              value={"test owner lastname" || ""}
              // onChange={handleChange}
            />
          </div>
        </div>

        <div className="flex flex-row justify-between ">
          <div className="mb-3 w-[50%] mx-10">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              {/* {t("informations.labels.ownerName")} */}
              CIN
            </label>
            <input
              name="cin"
              className="shadow-md appearance-none border rounded w-full py-3 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              // placeholder={t("informations.labels.ownerName")}
              placeholder="CIN"
              value={"CIN Number" || ""}
              // onChange={handleChange}
            />
          </div>
          <div className="mb-3 w-[50%] mx-10">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              {/* {t("informations.labels.ownerLastname")} */}
              Numero de Permi
            </label>
            <input
              className="shadow-md appearance-none border rounded w-full py-3 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="numero_permis"
              // placeholder={t("informations.labels.ownerLastname")}
              placeholder="Owner Lastname"
              value={"test owner lastname" || ""}
              // onChange={handleChange}
            />
          </div>
        </div>

        <div className="flex flex-row justify-between  ">
          <div className="mb-3 w-[50%] mx-10">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              {/* {t("facture.labels.date")} */}
              Date
            </label>
            <input
              className="shadow-md  appearance-none border rounded w-full py-3 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="date"
              placeholder="Date"
              name="date"
              //   onChange={handleChange}
            />
          </div>
          <div className="mb-3 w-[50%] mx-10">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              {/* {t("facture.labels.dueDate")} */}
              Due Date
            </label>
            <input
              className="shadow-md appearance-none border rounded w-full py-3 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="date"
              placeholder="Due Date"
              name="dueDate"
              //   onChange={handleChange}
            />
          </div>
        </div>

        <div className="flex flex-row justify-between  ">
          <div className="mb-3 w-[50%] mx-10">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              {/* {t("facture.labels.amount")} */}
              Pickup Preference
            </label>
            <Select
              // options={pickUp?.map((client) => ({
              //   value: client.id,
              //   label: client.firstname + " " + client.surname,
              // }))}

              name="client"
              size={"lg"}
              className="shadow-md appearance-none border rounded px-20 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              //   onChange={(value) =>
              //     setFactureForm({ ...factureForm, client_id: value.value })
              //   }
            >
              <option value="on-site">On-site</option>
              <option value="delivery">Delivery</option>
            </Select>
          </div>
          <div className="mb-3 w-[50%] mx-10">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              {/* {t("facture.labels.amount")} */}
              Payment Method
            </label>
            <Select
              options={clients?.map((client) => ({
                value: client.id,
                label: client.firstname + " " + client.surname,
              }))}
              name="client"
              size={"lg"}
              className="shadow-md appearance-none border rounded px-20 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              //   onChange={(value) =>
              //     setFactureForm({ ...factureForm, client_id: value.value })
              //   }
            />
          </div>
        </div>

        <div className="flex flex-row justify-between  ">
          <div className="mb-3 w-full mx-10">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              {/* {t("informations.labels.ownerLastname")} */}
              Numero de Permi
            </label>
            <input
              className="shadow-md appearance-none border rounded w-full py-3 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="numero_permis"
              // placeholder={t("informations.labels.ownerLastname")}
              placeholder="Owner Lastname"
              value={"test owner lastname" || ""}
              // onChange={handleChange}
            />
          </div>

          <div className="mb-3 w-full mx-10">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              {/* {t("facture.labels.memo")} */}
              Message
            </label>
            <textarea
              rows="2"
              className="shadow-md appearance-none border rounded w-full py-3 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              //   placeholder={t("facture.labels.memo")}
              placeholder="Message"
              name="message"
              //   onChange={handleChange}
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
