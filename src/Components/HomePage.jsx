import React from "react";
import CarouselFade from "./Carousel";
import Why from "./Why";
import Footer from "./Footer";
import "./HomePage.css";
import AboutUs from "./AboutUs";
import {Link} from "react-router-dom";

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
      <Why />
      <AboutUs/>
      <div className="quote-card">
        <p className="quote-a">Thinking how to know more about us..</p>
        <Link to="/contact" className="contact-button">
          Contact Us
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
