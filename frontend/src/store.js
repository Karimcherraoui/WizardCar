import { configureStore } from "@reduxjs/toolkit";
import agencyReducer from "./features/agencySlice";
import clientReducer from "./features/clientSlice";
import userReducer from "./features/userSlice";



const store = configureStore({
  reducer: {
    client: clientReducer,
    agency: agencyReducer ,
    user: userReducer,
    // Cars: carsReducer,
  },
});

export default store;
