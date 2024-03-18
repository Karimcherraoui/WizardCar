import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "remixicon/fonts/remixicon.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { BrowserRouter as Router } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

import store from "./store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>

    <Provider store={store}>
    <ChakraProvider>
    <Router>
      <App />
    </Router>
    </ChakraProvider>
    </Provider>

  </React.StrictMode>
);
