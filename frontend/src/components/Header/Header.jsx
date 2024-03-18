import React, { useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import "../../styles/header.css";

const navLinks = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/about",
    display: "About",
  },
  {
    path: "/cars",
    display: "Cars",
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

const Header = () => {
  const menuRef = useRef(null);

  const toggleMenu = () => menuRef.current.classList.toggle("menu__active");

  return (
    <header className="header">
      {/* ============ header top ============ */}
      {/* <div className="header__top py-2 px-4">
        <div className="flex justify-between items-center">
          <div className="header__top__left">
            <span>Need Help ?</span>
            <span className="header__top__help">
              <i className="ri-phone-fill"></i> +212 123 456 789
            </span>
          </div>

          <div className="header__top__right flex gap-3">
            <Link to="/login"  className="flex items-center gap-1">
              <i className="ri-login-circle-line"></i> Login
            </Link>

            <Link to="/register" className="flex items-center gap-1">
              <i className="ri-user-line"></i> Register
            </Link>
          </div>
        </div>
      </div> */}

      {/* =============== header middle =========== */}
      {/* <div className="header__middle bg-gray-100 py-4 px-4">
        <div className="flex justify-between items-center">
          <div className="logo">
            <h1>
              <Link to="/home" className="flex items-center gap-2">
                <i className="ri-car-line"></i>
                <span>WizardCar</span>
              </Link>
            </h1>
          </div>

          <div className="header__location flex items-center gap-2">
            <span>
              <i className="ri-earth-line"></i>
            </span>
            <div className="header__location-content">
              <h4>Morroco</h4>
              <h6>Youcode, Safi</h6>
            </div>
          </div>

          <div className="header__location flex items-center gap-2">
            <span>
              <i className="ri-time-line"></i>
            </span>
            <div className="header__location-content">
              <h4>Sunday to Friday</h4>
              <h6>10am - 7pm</h6>
            </div>
          </div>

          <div className="flex items-center">
            <button className="header__btn btn">
              <Link to="/contact">
                <i className="ri-phone-line"></i> Request a call
              </Link>
            </button>
          </div>
        </div>
      </div> */}

      {/* ========== main navigation =========== */}

      <div className="main__navbar bg-gray-800 py-4 px-4">
        <div className="flex justify-between items-center">
          <span className="mobile__menu text-white">
            <i className="ri-menu-line" onClick={toggleMenu}></i>
          </span>

          <div className="logo">
            <h1>
              <Link to="/home" className="flex items-center gap-2">
                <i className="ri-car-line text-red-600"></i>
                <span className="text-white">
                  <span className="text-yellow-400">Wizard</span>Car
                </span>
              </Link>
            </h1>
          </div>

          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <div className="menu flex gap-4">
              {navLinks.map((item, index) => (
                <NavLink
                  to={item.path}
                  className={(navClass) =>
                    navClass.isActive
                      ? "nav__active nav__item text-white"
                      : "nav__item text-white"
                  }
                  key={index}
                >
                  {item.display}
                </NavLink>
              ))}
            </div>
          </div>

          <div className="nav__right flex items-center">
            <div className="search__box">
              <input
                type="text"
                placeholder="Search"
                className="bg-gray-700 text-white py-1 px-2 rounded"
              />
              <span>
                <i className="ri-search-line"></i>
              </span>
            </div>
          </div>

          <div className="header__top__right flex gap-3">
            <Link to="/login" className="flex items-center gap-1">
              <i className="ri-login-circle-line"></i> Login
            </Link>

            <Link to="/register" className="flex items-center gap-1">
              <i className="ri-user-line"></i> Register
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
