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
    console.log(id);
    if (id) {
      dispatch(fetchCar(id));
    }
  }, [dispatch, id]);

  const car = useSelector((state) => state.car.selectedCar);

  console.log(car);

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
              className="w-full shadow-sm p-10 rounded-md"
            />
          </div>

          <div className="car__info">
            <h2 className="section__title">{car?.brand + " " + car?.model}</h2>

            <div className="flex items-center gap-5 mb-4 mt-3">
              <h6 className="rent__price font-bold text-xl">
                {car.price} Dh / Day
              </h6>
            </div>

            <p className="section__description">{car.description}</p>

            <div className=" flex items-center justify-between mt-3 mb-4 gap-2">
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
              {car.type}
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
              {car.transmission}
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
              {car.fuel}
            </span>
          </div>



          <div className=" flex items-center justify-between mt-3 mb-4 gap-2">
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
              {car.type}
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
              {car.transmission}
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
              {car.fuel}
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
            Reserve Now
          </Button>
        </Center>

        {reserveBtn && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5 shadow-xl mb-40">
            <div className="col-span-1 md:col-span-2">
              <div className="booking-info mt-5 shadow-md rounded-md">
                <h5 className="mb-12 font-bold text-center text-blue-400">
                  Booking Information
                </h5>
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
