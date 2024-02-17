import React from "react";
import { Link } from "react-router-dom";
import "../../styles/footer.css";

const quickLinks = [
  {
    path: "/about",
    display: "About",
  },
  {
    path: "#",
    display: "Privacy Policy",
  },
  {
    path: "/cars",
    display: "Car Listing",
  },
  {
    path: "/blogs",
    display: "Blog",
  },
  {
    path: "/contact",
    display: "Contact",
  },
];

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="footer bg-gray-900 text-white">
      <div className="container mx-auto py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="col-span-1">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-white no-underline">
                <Link to="/home" className="flex items-center gap-2">
                  <i className="ri-car-line "></i>
                  <span>WizardCar</span>
                </Link>
              </h1>
            </div>
          </div>

          <div className="col-span-1">
            <div className="mb-8">
              <h5 className="footer__link-title">Quick Links</h5>
              <ul>
                {quickLinks.map((item, index) => (
                  <li key={index} className="mt-3 ">
                    <Link className="link" to={item.path}>
                      {item.display}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="col-span-1">
            <div className="mb-8">
              <h5 className="footer__link-title mb-4">Head Office</h5>
              <p className="office__info">14 Av. Zerktouni, Safi, Maroc</p>
              <p className="office__info">Phone: +212 123 123 123</p>
              <p className="office__info">Email: cherraoui.karim96@gmail.com</p>
              <p className="office__info">Office Time: 10am - 7pm</p>
            </div>
          </div>

          <div className="col-span-1">
            <div className="mb-8">
              <h5 className="footer__link-title">Newsletter</h5>
              <p className="text-sm mb-4">Subscribe our newsletter</p>
              <div className="newsletter flex items-center">
                <input
                  type="email"
                  placeholder="Email"
                  className="py-2 px-3 border rounded-l"
                />
                <span className="bg-blue-500 py-2 px-3 rounded-r">
                  <i className="ri-send-plane-line"></i>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center pt-8">
          <p className="text-sm flex items-center justify-center gap-1">
            <i className="ri-copyright-line"></i>Copyright {year}, Developed by
            Cherraoui Karim. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
