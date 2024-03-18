import { configureStore } from "@reduxjs/toolkit";
import agencySlice from "./features/agencySlice";
import { userSlice } from "./features/userSlice";


const store = configureStore({
  reducer: {
    // Client: clientsReducer,
    agency: agencySlice ,
    User: userSlice,
    // Cars: carsReducer,
  },
});

export default store;
