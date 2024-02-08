import React from "react";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import ava01 from "../../assets/all-images/ava-1.jpg";
import ava02 from "../../assets/all-images/ava-2.jpg";
import ava03 from "../../assets/all-images/ava-3.jpg";
import "../../styles/our-member.css";


const OUR_MEMBERS = [
  {
    name: "Jhon Doe",
    experience: "5 years of experience",
    fbUrl: "#",
    instUrl: "#",
    twitUrl: "#",
    linkedinUrl: "#",
    imgUrl: ava01,
  },
  {
    name: "David Lisa",
    experience: "5 years of experience",
    fbUrl: "#",
    instUrl: "#",
    twitUrl: "#",
    linkedinUrl: "#",
    imgUrl: ava02,
  },
  {
    name: "Hilton King",
    experience: "5 years of experience",
    fbUrl: "#",
    instUrl: "#",
    twitUrl: "#",
    linkedinUrl: "#",
    imgUrl: ava03,
  },
  {
    name: "Jhon Doe",
    experience: "5 years of experience",
    fbUrl: "#",
    instUrl: "#",
    twitUrl: "#",
    linkedinUrl: "#",
    imgUrl: ava01,
  },
];

const OurMembers = () => {
  return (
    <>
      {OUR_MEMBERS.map((item, index) => (
        <Col lg="3" md="3" sm="4" xs="6" key={index} className="mb-4">
          <div className="single__member bg-white p-4 rounded-md">
            <div className="single__member-img relative">
              <img src={item.imgUrl} alt={item.name} className="w-full rounded" />

              <div className="single__member-social absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300">
                <Link to={item.fbUrl} className="mr-2">
                  <i className="ri-facebook-line text-blue-500"></i>
                </Link>
                <Link to={item.twitUrl} className="mr-2">
                  <i className="ri-twitter-line text-blue-500"></i>
                </Link>
                <Link to={item.linkedinUrl} className="mr-2">
                  <i className="ri-linkedin-line text-blue-500"></i>
                </Link>
                <Link to={item.instUrl}>
                  <i className="ri-instagram-line text-blue-500"></i>
                </Link>
              </div>
            </div>

            <h6 className="text-center mb-0 mt-3">{item.name}</h6>
            <p className="section__description text-center">
              {item.experience}
            </p>
          </div>
        </Col>
      ))}
    </>
  );
};

export default OurMembers;
