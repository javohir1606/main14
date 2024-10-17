import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { Home } from "../pages/home/home";
import React from "react";
import Slider from "react-slick";

export const SimpleSlider = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  
  // Slayderdagi elementlar
  const slides = [1, 2, 3, 4, 5, 6];

  return (
    <Slider {...settings}>
      {slides.map((slide, index) => (
        <div key={index}>
          <Home />
        </div>
      ))}
    </Slider>
  );
}
