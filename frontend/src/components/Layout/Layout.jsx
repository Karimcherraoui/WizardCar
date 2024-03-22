import React from "react";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Routers from "../../routers/Routers";

import Login from "../../pages/Login";
import Register from "../../pages/Register";
import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import Home from "../../pages/Home";
import About from "../../pages/About";
import CarListing from "../../pages/CarListing";
import CarDetails from "../../pages/CarDetails";
import Blog from "../../pages/Blog";
import BlogDetails from "../../pages/BlogDetails";
import NotFound from "../../pages/NotFound";
import Contact from "../../pages/Contact";

import DashboardAgency from "../../pages/AgenceDashboard";
import Client from "../../pages/ClientDashboard";
import Agence from "../../pages/AgenceDashboard";
import PrivateRouteAgence from "../../routers/PrivateRouteAgence";
import PrivateRouteClient from "../../routers/PrivateRouteClient";

const WithHeader = () => {
  return (
    <>
      <Header />
      <div><Outlet/></div>
      <Footer />
    </>
  );
};

const Layout = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route element={<WithHeader/>}>
        <Route
          path="/home"
          element={
            <>
              <Home />
            </>
          }
        />
        <Route path="/" element={<Navigate to="/home" />} />
        <Route
          path="/about"
          element={
            <>
              <About />
            </>
          }
        />
        <Route
          path="/cars"
          element={
            <>
              <CarListing />
            </>
          }
        />
        <Route
          path="/cars/:slug"
          element={
            <>
              <CarDetails />
            </>
          }
        />
        <Route
          path="/blogs"
          element={
            <>
              <Blog />
            </>
          }
        />
        <Route path="/blogs/:slug" element={<BlogDetails />} />
        <Route
          path="/contact"
          element={
            <>
              <Contact />
            </>
          }
        />
        <Route
          path="/client"
          element={
            <>
              <PrivateRouteClient>
                <Client />
              </PrivateRouteClient>
            </>
          }
        />
        <Route
          path="/agence"
          element={
            <PrivateRouteAgence>
              <Agence />
            </PrivateRouteAgence>
          }
        />
        <Route path="/dashboard" element={<DashboardAgency />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Layout;
