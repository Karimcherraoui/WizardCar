import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import CarListing from "../pages/CarListing";
import CarDetails from "../pages/CarDetails";
import Blog from "../pages/Blog";
import BlogDetails from "../pages/BlogDetails";
import NotFound from "../pages/NotFound";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Register from "../pages/Register";
import DashboardAgency from "../pages/DashboardAgency";
const Routers = () => {
  return (
    <Routes>
      <Route
        path="/home"
        element={
          <>
            <Header />
            <Home />
            <Footer />
          </>
        }
      />

      <Route path="/" element={<Navigate to="/home" />} />

      <Route
        path="/about"
        element={
          <>
            <Header />
            <About />
            <Footer />
          </>
        }
      />
      <Route
        path="/cars"
        element={
          <>
            <Header />
            <CarListing />
            <Footer />
          </>
        }
      />

      <Route
        path="/cars/:slug"
        element={
          <>
            <Header />
            <CarDetails />
            <Footer />
          </>
        }
      />
      <Route
        path="/blogs"
        element={
          <>
            <Header />
            <Blog />
            <Footer />
          </>
        }
      />
      <Route path="/blogs/:slug" element={<BlogDetails />} />
      <Route
        path="/contact"
        element={
          <>
            <Header />
            <Contact />
            <Footer />
          </>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<DashboardAgency />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Routers;
