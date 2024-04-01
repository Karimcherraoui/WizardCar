import { Button, Flex } from "@chakra-ui/react";
import { useState } from "react";
import { ClientForm } from "../components/Forms/ClientForm";
import { TableFacture } from "../components/Tables/TableFacture";
import { TableFactureClient } from "../components/Tables/TableFactureClient";

const ClientDashboard = () => {
  const [switchForm, setSwitchForm] = useState(true);

  return (
    <>
      <Flex gap={10} justify={"center"} marginTop={12}>
        <Button
          bgColor={switchForm ? "white" : "black"}
          color={switchForm ? "black" : "white"}
          border={switchForm ? "2px solid black" : "none"}
          _hover={{
            bgColor: "white",
            color: "black",
            border: "2px solid black",
          }}
          onClick={() => setSwitchForm(true)}
        >
          informations
        </Button>
        <Button
          bgColor={!switchForm ? "white" : "black"}
          color={!switchForm ? "black" : "white"}
          border={!switchForm ? "2px solid black" : "none"}
          _hover={{
            bgColor: "white",
            color: "black",
            border: "2px solid black",
          }}
          onClick={() => setSwitchForm(false)}
        >
          Reservations
        </Button>
      </Flex>
      {switchForm ? <ClientForm /> : <TableFactureClient />}
    </>
  );
};

export default ClientDashboard;
