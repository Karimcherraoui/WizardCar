import React from "react";
import Slider from "react-slick";
import { Container } from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/hero-slider.css";


const HeroSlider = () => {
  const settings = {
    fade: true,
    speed: 2000,
    autoplaySpeed: 3000,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
  };

  const sliderItems = [
    {
      className: "slider__item-01",
      heading: "Reserve Now and Get 50% Off",
      subheading: "For Rent $70 Per Day",
    },
    {
      className: "slider__item-02",
      heading: "Reserve Now and Get 50% Off",
      subheading: "For Rent $70 Per Day",
    },
    {
      className: "slider__item-03",
      heading: "Reserve Now and Get 50% Off",
      subheading: "For Rent $70 Per Day",
    },
  ];

  return (
    <Slider {...settings} className="hero__slider">
      {sliderItems.map((item, index) => (
        <div key={index} className={`slider__item ${item.className} mt-0`}>
          <Container>
            <div className="slider__content">
              <h4 className="text-light mb-3">{item.subheading}</h4>
              <h1 className="text-light mb-4">{item.heading}</h1>

              <button className="btn reserve__btn mt-4">
                <Link to="/cars">Reserve Now</Link>
              </button>
            </div>
          </Container>
        </div>
      ))}
    </Slider>
  );
};

export default HeroSlider;
