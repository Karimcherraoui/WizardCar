import { configureStore } from "@reduxjs/toolkit";
import agencyReducer from "./features/agencySlice";
import clientReducer from "./features/clientSlice";
import userReducer from "./features/userSlice";
import carReducer from "./features/carsSlice";
import invoiceReducer from "./features/invoicesSlice";



const store = configureStore({
  reducer: {
    client: clientReducer,
    agency: agencyReducer ,
    user: userReducer,
    invoice: invoiceReducer,
    car: carReducer,
  },
});

export default store;
