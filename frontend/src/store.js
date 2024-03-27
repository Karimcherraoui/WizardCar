import { configureStore } from "@reduxjs/toolkit";
import agencyReducer from "./features/agencySlice";
import clientReducer from "./features/clientSlice";
import userReducer from "./features/userSlice";
import carReducer from "./features/carsSlice";



const store = configureStore({
  reducer: {
    client: clientReducer,
    agency: agencyReducer ,
    user: userReducer,
    car: carReducer,
  },
});

export default store;
