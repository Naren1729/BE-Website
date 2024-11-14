import React from "react";
import CarouselFade from "./Carousel";
import Why from "./Why";
import Contactform from "./Contactform";
import Carousel1 from "./Carousel1";
import Footer from "./Footer";
import "./HomePage.css";

function HomePage() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignContent: "center",
      }}
    >
      <h1 className="heading">
        "Dedicated to healing, inspired by science, driven by compassion."
      </h1>
      {/* <CarouselFade /> */}
      <Carousel1 />
      <Why />
      <Contactform />
      <Footer />
    </div>
  );
}

export default HomePage;
