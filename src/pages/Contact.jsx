import React from "react";
import { Link } from "react-router-dom";
import { Form, FormGroup, Input } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";

import "../styles/contact.css";

const socialLinks = [
  {
    url: "#",
    icon: "ri-facebook-line",
  },
  {
    url: "#",
    icon: "ri-instagram-line",
  },
  {
    url: "#",
    icon: "ri-linkedin-line",
  },
  {
    url: "#",
    icon: "ri-twitter-line",
  },
];

const Contact = () => {
  return (
    <Helmet title="Contact">
      <CommonSection title="Contact" />
      <section className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="col-span-1">
            <h6 className="font-bold mb-4">Get In Touch</h6>
            <Form>
              <FormGroup className="mb-4">
                <Input placeholder="Your Name" type="text" />
              </FormGroup>
              <FormGroup className="mb-4">
                <Input placeholder="Email" type="email" />
              </FormGroup>
              <FormGroup className="mb-4">
                <textarea
                  rows="5"
                  placeholder="Message"
                  className="w-full p-2 border"
                ></textarea>
              </FormGroup>

              <button
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                type="submit"
              >
                Send Message
              </button>
            </Form>
          </div>

          <div className="col-span-1">
            <div className="font-bold mb-4">Contact Information</div>
            <p className="mb-2">14 Av. Zerktouni, Safi, Maroc</p>
            <div className="flex items-center gap-2 mb-2">
              <div className="text-sm">Phone:</div>
              <p className="mb-0">+212789065426</p>
            </div>

            <div className="flex items-center gap-2 mb-2">
              <div className="text-sm">Email:</div>
              <p className="mb-0">example@gmail.com</p>
            </div>

            <div className="font-bold mt-4">Follow Us</div>
            <div className="flex items-center gap-4 mt-2">
              {socialLinks.map((item, index) => (
                <Link
                  to={item.url}
                  key={index}
                  className="text-blue-500 hover:text-blue-600"
                >
                  <i className={item.icon}></i>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Helmet>
  );
};

export default Contact;
