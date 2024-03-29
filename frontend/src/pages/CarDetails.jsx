import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import Helmet from "../components/Helmet/Helmet";
import {
  Button,
  Center,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import Booking from "../components/UI/Booking";
import { useDispatch, useSelector } from "react-redux";
import { fetchCar } from "../features/carsSlice";

const CarDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {

    if (id) {
      dispatch(fetchCar(id));
    }
  }, [dispatch, id]);

  const car = useSelector((state) => state.car.selectedCar);
  const loggedIn = localStorage.getItem("User");
  const [showModal, setShowModal] = useState(false);
  const [reserveBtn, setReserveBtn] = useState(false);

  const handleReserveBtn = () => {
    if (!loggedIn) {
      setShowModal(true);
    } else {
      setReserveBtn(!reserveBtn);
    }
  };

  return (
    <Helmet title={car?.brand + " " + car?.model}>
      <section className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mt-14">
          <div>
            <img
              src={car?.image}
              alt=""
              className="w-full shadow-lg border p-10 rounded-md"
            />
          </div>

          <div className="car__info">
            <h2 className="section__title font-bold">
              {car?.brand + " " + car?.model}
            </h2>

            <div className=" mb-4 mt-3">
              <h6 className="rent__price font-bold text-xl text-right text-green-600">
                {car?.price} DH / Jour
              </h6>
            </div>

            <p className="section__description w-[80%]">{car?.description}</p>

            <div className=" grid grid-cols-3 items-center justify-between mt-10 mb-4 gap-8 ">
              <span className="flex items-center gap-1 flex-col text-[#696969]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#0000e5"
                    d="m5 11l1.5-4.5h11L19 11m-1.5 5a1.5 1.5 0 0 1-1.5-1.5a1.5 1.5 0 0 1 1.5-1.5a1.5 1.5 0 0 1 1.5 1.5a1.5 1.5 0 0 1-1.5 1.5m-11 0A1.5 1.5 0 0 1 5 14.5A1.5 1.5 0 0 1 6.5 13A1.5 1.5 0 0 1 8 14.5A1.5 1.5 0 0 1 6.5 16M18.92 6c-.2-.58-.76-1-1.42-1h-11c-.66 0-1.22.42-1.42 1L3 12v8a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1h12v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-8z"
                  />
                </svg>{" "}
                {car?.type}
              </span>
              <span className="flex items-center gap-1  flex-col text-[#696969]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill="#0000e5"
                    d="M10 2a2 2 0 0 0-.5 3.937V9.5a.5.5 0 0 0 1 0V5.937A2 2 0 0 0 10 2M3 5a1 1 0 0 1 2 0v4a.5.5 0 0 0 .5.5H8a.5.5 0 0 0 0-1H6V5a2 2 0 1 0-4 0v11a2 2 0 1 0 4 0v-3.5h2V16a2 2 0 1 0 4 0v-3h4.5a1.5 1.5 0 0 0 1.5-1.5V5a2 2 0 1 0-4 0v3.5h-2a.5.5 0 0 0 0 1h2.5A.5.5 0 0 0 15 9V5a1 1 0 1 1 2 0v6.5a.5.5 0 0 1-.5.5h-5a.5.5 0 0 0-.5.5V16a1 1 0 1 1-2 0v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4a1 1 0 1 1-2 0z"
                  />
                </svg>{" "}
                {car?.transmission}
              </span>
              <span className="flex items-center gap-1 font text-[#696969]  flex-col">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#0000e5"
                    d="M18 10a1 1 0 0 1-1-1a1 1 0 0 1 1-1a1 1 0 0 1 1 1a1 1 0 0 1-1 1m-6 0H6V5h6m7.77 2.23l.01-.01l-3.72-3.72L15 4.56l2.11 2.11C16.17 7 15.5 7.93 15.5 9a2.5 2.5 0 0 0 2.5 2.5c.36 0 .69-.08 1-.21v7.21a1 1 0 0 1-1 1a1 1 0 0 1-1-1V14a2 2 0 0 0-2-2h-1V5a2 2 0 0 0-2-2H6c-1.11 0-2 .89-2 2v16h10v-7.5h1.5v5A2.5 2.5 0 0 0 18 21a2.5 2.5 0 0 0 2.5-2.5V9c0-.69-.28-1.32-.73-1.77"
                  />
                </svg>{" "}
                {car?.fuel}
              </span>

              <span className="flex items-center gap-1 flex-col text-[#696969]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 2048 2048"
                >
                  <path
                    fill="#0000e5"
                    d="M2048 128v1792H0V128h384V0h128v128h1024V0h128v128zM128 256v256h1792V256h-256v128h-128V256H512v128H384V256zm1792 1536V640H128v1152zm-512-896v640h-128v-486q-27 14-62 26t-66 12V960q12 0 31-6t39-15t36-21t22-21v-1zm-384 192q0 39-11 70t-31 58t-44 51t-51 46t-51 46t-47 49h235v128H640v-36q0-19-1-38t4-38t10-36q11-27 33-53t50-53t55-51t51-49t39-47t15-47q0-27-19-45t-45-19q-23 0-40 14t-23 37l-125-26q6-33 23-61t44-48t57-32t64-12q40 0 75 15t61 41t41 61t15 75"
                  />
                </svg>
                {car?.year}
              </span>
              <span className="flex items-center gap-1  flex-col text-[#696969]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#0000e5"
                    d="M416 480c-35.29 0-64-29.11-64-64.88c0-33.29 28.67-65.4 44.08-82.64c1.87-2.1 3.49-3.91 4.68-5.31a19.94 19.94 0 0 1 30.55 0c1.13 1.31 2.63 3 4.36 4.93c15.5 17.3 44.33 49.51 44.33 83.05c0 35.74-28.71 64.85-64 64.85m-17.77-203.36L166.89 47.22a52.1 52.1 0 0 0-73.6 0l-4.51 4.51a53.2 53.2 0 0 0-15.89 37.33A51.66 51.66 0 0 0 88.14 126l41.51 41.5L45 252a44.52 44.52 0 0 0-13 32a42.81 42.81 0 0 0 13.5 30.84l131.24 126a44 44 0 0 0 61.08-.18l124.11-120.28a15.6 15.6 0 0 1 8.23-4.29a69.21 69.21 0 0 1 11.93-.86h.3a22.53 22.53 0 0 0 15.84-38.59M152.29 144.85l-41.53-41.52a20 20 0 0 1 0-28.34l5.16-5.15a20.07 20.07 0 0 1 28.39 0L186 111.21Z"
                  />
                </svg>
                {car?.color}
              </span>
              <span className="flex items-center gap-1 font text-[#696969]  flex-col">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#0000e5"
                    d="M19 15h-2v-2h2m1 7v2h-4v-2h1v-2h-1v-2h3v4m-.08-15a1.5 1.5 0 0 0-1.42-1h-11a1.5 1.5 0 0 0-1.42 1L3 11v8a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1h5a7 7 0 0 1 7-7a6.84 6.84 0 0 1 3 .68V11M6.5 15A1.5 1.5 0 1 1 8 13.5A1.5 1.5 0 0 1 6.5 15M5 10l1.5-4.5h11L19 10Z"
                  />
                </svg>
                {car?.plateNumber}
              </span>
            </div>
          </div>
        </div>

        <Center>
          <Button
            marginTop={8}
            marginBottom={20}
            bgColor={"black"}
            _hover={{
              bgColor: "white",
              color: "black",
              border: "2px solid black",
            }}
            textColor={"white"}
            paddingY={8}
            fontSize={30}
            width={"50%"}
            onClick={handleReserveBtn}
          >
            Réservez maintenant
          </Button>
        </Center>

        {reserveBtn && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 shadow-xl mb-40">
            <div className="col-span-1 md:col-span-2">
              <div className="booking-info mt-5 shadow-md rounded-md">
                <h5 className="mb-12 font-bold text-center text-blue-400">
                  Informations de Réservation{" "}
                </h5>
                {car?.disponibility === "disponible"}
                <Booking />
              </div>
            </div>
          </div>
        )}

        <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Login Required</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              Vous devez être connecté pour réserver une voiture. Voulez-vous
              vous connecter maintenant ?{" "}
            </ModalBody>
            <ModalFooter>
              <Button
                colorScheme="blue"
                mr={3}
                onClick={() => {
                  window.location.href = "/login";
                }}
              >
                Log In
              </Button>
              <Button onClick={() => setShowModal(false)}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </section>
    </Helmet>
  );
};

export default CarDetails;
