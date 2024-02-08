import React from "react";
import Slider from "react-slick";
import "../../styles/testimonial.css";
import ava01 from "../../assets/all-images/ava-1.jpg";
import ava02 from "../../assets/all-images/ava-2.jpg";
import ava03 from "../../assets/all-images/ava-3.jpg";
import ava04 from "../../assets/all-images/ava-4.jpg";

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings} className="testimonial-slider">
      <div className="testimonial-item">
        <p className="testimonial-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
          magni explicabo molestias recusandae repudiandae, dolor, sapiente
          placeat ab, animi eum minima nulla facere aliquam aut vitae quo
          pariatur voluptate odit?
        </p>
        <div className="testimonial-author">
          <img src={ava01} alt="" className="testimonial-avatar" />
          <div className="testimonial-info">
            <h6 className="testimonial-name">Jhon Doe</h6>
            <p className="testimonial-role">Customer</p>
          </div>
        </div>
      </div>

      {/* Repeat similar structures for other testimonials */}
    </Slider>
  );
};

export default Testimonial;
