import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Slide from "../../assets/img/carousel/slide.jpeg";
import Slide1 from "../../assets/img/carousel/slide2.jpg";
import Slide2 from "../../assets/img/carousel/slide-fill.jpg";
import Slide4 from "../../assets/img/carousel/slide-2021.jpeg";
import ScrollDown from "../scroll-down/scroll-down.component";

import "./my-carousel.styles.css";

const MyCarousel = () => {
  return (
    <div id="home">
      <Carousel controls={false} indicators interval={5000} pause={false}>
        <Carousel.Item>
          <img
            className="d-block w-100 custom-img"
            src={Slide4}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 custom-img"
            src={Slide1}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 custom-img"
            src={Slide2}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
      <ScrollDown />
    </div>
  );
};

export default MyCarousel;
