import { Button, Flex } from "@chakra-ui/react";
import { useState } from "react";
import { ClientForm } from "../Forms/ClientForm";
import { TableFacture } from "../Tables/TableFacture";

// import { useDispatch, useSelector } from "react-redux";
// import { fetchSettings, updateSettings } from "../../features/settingSlice";
// import { useTranslation } from "react-i18next";

export default function InformationsClient() {
  //   const dispatch = useDispatch();
  //   const settings = useSelector((state) => state.Settings.settings);
  //   const { t } = useTranslation();

  //   useEffect(() => {
  //     dispatch(fetchSettings());
  //   }, []);

  //   useEffect(() => {
  //     setLocalSettings(settings);
  //   }, [settings]);

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     dispatch(updateSettings(localSettings));
  //   };

  const [switchForm, setSwitchForm] = useState(true);

  return (
    <>
      <Flex gap={10} justify={"center"} marginTop={12}>
        <Button
          bgColor={switchForm ? "white" : "black"}
          color={switchForm  ? "black" : "white"}
          border={switchForm  ? "2px solid black" : "none"}
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
          bgColor={!switchForm   ? "white" : "black"}
          color={!switchForm   ? "black" : "white"}
          border={!switchForm   ? "2px solid black" : "none"}
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
      {switchForm ? <ClientForm /> : <TableFacture />}
    </>
  );
}
