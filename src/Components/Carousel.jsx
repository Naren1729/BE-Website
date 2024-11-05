import React from "react";
import Carousel from "react-bootstrap/Carousel";
// Import local images
import firstSlide from "./logo.png";
import secondSlide from "./logo1.png";
import thirdSlide from "./logo.png";
import "./CarouselFade.css"; // Import the custom CSS file

function CarouselFade() {
  return (
    <Carousel fade className="custom-carousel">
      <Carousel.Item>
        <img src={firstSlide} alt="First slide" className="carousel-image" />
        <Carousel.Caption className="text-dark">
          <h3 className="font-weight-bold">First slide label</h3>
          <p className="font-weight-bold">
            Nulla vitae elit libero, a pharetra augue mollis interdum.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img src={secondSlide} alt="Second slide" className="carousel-image" />
        <Carousel.Caption className="text-dark">
          <h3 className="font-weight-bold">Second slide label</h3>
          <p className="font-weight-bold">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img src={thirdSlide} alt="Third slide" className="carousel-image" />
        <Carousel.Caption className="text-dark">
          <h3 className="font-weight-bold">Third slide label</h3>
          <p className="font-weight-bold">
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFade;
