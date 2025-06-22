import React from "react";
import Carousel from "react-bootstrap/Carousel";
// Import local images
import firstSlide from "../assets/Wwd.jpg";
import secondSlide from "../assets/Intermediates.jpg";
import thirdSlide from "../assets/Api.jpg";
import "./CarouselFade.css"; // Import the custom CSS file

function CarouselFade() {
  return (
    <Carousel fade className="custom-carousel">
      <Carousel.Item>
        <img src={firstSlide} alt="First slide" className="carousel-image" />

        <Carousel.Caption className="text-dark caption-bg">

          <h3 className="font-weight-bold">What we do</h3>
          <p className="font-weight-bold">
            We make high-quality APIs and intermediates, which are the backbone
            of the pharmaceutical industry.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img src={secondSlide} alt="Second slide" className="carousel-image" />

        <Carousel.Caption className="text-dark caption-bg">

          <h3 className="font-weight-bold">Intermediates</h3>
          <p className="font-weight-bold">
            Pharmaceutical intermediates play a crucial role in the production
            of life-saving medications.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img src={thirdSlide} alt="Third slide" className="carousel-image" />

        <Carousel.Caption className="text-dark caption-bg">

          <h3 className="font-weight-bold">
            Active Pharmaceutical Ingredients
          </h3>
          <p className="font-weight-bold">
            Active substances that provide pharmacological activity in
            medications
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFade;
