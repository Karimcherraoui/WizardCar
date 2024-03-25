import { Button, Flex } from "@chakra-ui/react";
import { useState } from "react";
import { TableFacture } from "../components/Tables/TableFacture";
import { AgenceForm } from "../components/Forms/AgenceForm";
import CarForm from "../components/Forms/CarForm";
import { TableCars } from "../components/Tables/TableCars";


const AgenceDashboard = () => {

  const [switchForm, setSwitchForm] = useState("informations");

  return (
    <>
      <Flex gap={10} justify={"center"} marginTop={12}>
        <Button
          bgColor={switchForm === "informations" ? "white" : "black"}
          color={switchForm === "informations" ? "black" : "white"}
          _hover={{
            bgColor: "white",
            color: "black",
            border: "2px solid black",
          }}
          border={switchForm === "informations" ? "2px solid black" : "none"}
          onClick={() => setSwitchForm("informations")}
        >
          informations
        </Button>
        <Button
          bgColor={switchForm === "reservations" ? "white" : "black"}
          color={switchForm === "reservations" ? "black" : "white"}
          border={switchForm === "reservations" ? "2px solid black" : "none"}
          _hover={{
            bgColor: "white",
            color: "black",
            border: "2px solid black",
          }}
          onClick={() => setSwitchForm("reservations")}
        >
          Reservations
        </Button>
        <Button
          bgColor={switchForm === "listeCars" ? "white" : "black"}
          color={switchForm === "listeCars" ? "black" : "white"}
          border={switchForm === "listeCars" ? "2px solid black" : "none"}
          _hover={{
            bgColor: "white",
            color: "black",
            border: "2px solid black",
          }}

          onClick={() => setSwitchForm("listeCars")}
        >
liste Cars        </Button>
        <Button
          bgColor={switchForm === "addCar" ? "white" : "black"}
          color={switchForm === "addCar" ? "black" : "white"}
          border={switchForm === "addCar" ? "2px solid black" : "none"}
          _hover={{
            bgColor: "white",
            color: "black",
            border: "2px solid black",
          }}

          onClick={() => setSwitchForm("addCar")}
        >
          Add New Car
        </Button>
      </Flex>
      {switchForm === "addCar" ? (
        <CarForm />
      ) 
      :
      switchForm === "reservations" ? 
      (
        <TableFacture />
      )
      :
        switchForm === "listeCars" ? 
        (
          <TableCars />
      )
       : 
       (
        <AgenceForm />
      )
      
      }
    </>
  );
}

export default AgenceDashboard;