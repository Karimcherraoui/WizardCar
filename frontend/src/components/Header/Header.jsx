import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  Avatar,
  Button,
  Center,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";

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
  const profile = useSelector((state) => state.agency.profile);
  const user = localStorage.getItem("User");
  const role = user ? JSON.parse(user).role : null;
const navigate = useNavigate();
if (!profile) {
  return <div>Loading...</div>;
}

  return (
    <header className="header">
      {/* ========== main navigation =========== */}

      <div className="main__navbar bg-gray-800 py-4 px-4">
        <div className="flex justify-between items-center">
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

          <div className="navigation">
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

          {user ? (
            <div className="flex items-center ">
              <span className="text-white font-bold mx-3">{profile.agency.agencyName}</span>

              <Menu>
                <MenuButton
                  as={Button}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}
                >
                  <Avatar
                    size={"sm"}
                    src={
                      "https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                    }
                  />
                </MenuButton>
                <MenuList alignItems={"center"}>
                  <br />
                  <Center>
                    <Avatar
                      size={"2xl"}
                      src={
                        "https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                      }
                    />
                  </Center>
                  <br />
                  <Center>
                    <p>Username</p>
                  </Center>
                  <Center>
                    <p className="text-gray-400">Test@test.com</p>
                  </Center>

                  <MenuDivider />
                  {role === "client" ? (
                    <>
                      <MenuItem  onClick={() => navigate("/client")}>Profile</MenuItem>
                      <MenuItem>Mes Factures</MenuItem>
                    </>
                  ) : (
                    <>
                      <MenuItem className="">Ajouter Voiture</MenuItem>
                      <MenuItem onClick={() => navigate("/agence")}>
                        Profile
                      </MenuItem>
                      <MenuItem>Mes Voitures</MenuItem>
                      <MenuItem>Mes Commandes</MenuItem>
                    </>
                  )}
                  <MenuItem
                    onClick={() => {
                      localStorage.removeItem("User");
                      window.location.reload();
                    }}
                  >
                    Logout
                  </MenuItem>
                </MenuList>
              </Menu>
              {/* </Flex> */}
            </div>
          ) : (
            <div className="header__top__right flex gap-3">
              <Link to="/login" className="flex items-center gap-1 text-white">
                <i className="ri-login-circle-line text-white "></i> Login
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
