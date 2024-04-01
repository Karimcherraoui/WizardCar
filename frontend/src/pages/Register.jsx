import React, { useEffect, useState } from "react";
import flech from "../assets/all-images/flechWhite.png";
import car from "../assets/all-images/route.jpg";
import RegisterClient from "../components/UI/RegisterClient";
import RegisterAgency from "../components/UI/RegisterAgency";
import { ToastContainer } from "react-toastify";
import { useNavigate } from "react-router";


export default function Register() {
  const [isClient, setIsClient] = useState(true);
  const navigation = useNavigate();
  useEffect(() => {
    const loggedIn = localStorage.getItem("User");
    if (loggedIn) {
      navigation("/");
    }
  }
  , [navigation]);

  const triggerRegister = () => {
    setIsClient(!isClient);
  };
  return (
    <div className="h-screen">
      <div
        className="min-h-screen flex flex-col justify-center items-center pt-10 pb-20"
        style={{
          backgroundImage: `url(${car})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="flex ml-10 text-[30px] absolute top-0 left-0">
          <img src={flech} alt="flech" className="w-12 h-12 mr-1 text-white" />
          <a href="/" className="font-bold text-white no-underline ">
            Back
          </a>
        </div>
        <button
          className="text-black mb-10 bg-white py-2 px-8 rounded"
          onClick={triggerRegister}
        >
          {isClient ? "Register as Agency" : "Register as Client"}
        </button>
        {isClient ? <RegisterClient /> : <RegisterAgency />}
      </div>
        <ToastContainer />
    </div>
  );
}
