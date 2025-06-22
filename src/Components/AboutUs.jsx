import React from "react";
import Contactform from "./Contactform";
import "./AboutUs.css";
import Footer from "./Footer";

function AboutUs() {
  return (
    <div className="about-us">
      <section
        className="company-info"
        style={{ display: "flex", alignSelf: "left" }}
      >
        <div className="company-details">
          <h2>About Bhagiratha Enterprises</h2>
          {/* <p className="about-p">
            Bhagiratha Enterprises has been a leader in the pharmaceutical
            industry for over 20 years. Our mission is to provide innovative
            healthcare solutions that improve the quality of life for people
            around the world.
          </p>
          <p className="about-p">We are committed to:</p> */}
          <p className="about-p">
            For over 10 years we have supplied high-quality Active
            Pharmaceutical Intermediates and specialty chemicals across
            healthcare, agriculture and veterinary sectors. Our facilities are
            equipped for both small and bulk production with a focus on
            precision and reliability.
          </p>
          <p className="about-p">
            Sustainability is central to our approach. We follow eco-friendly
            practices and strict global standards to deliver innovative
            solutions that create value for our partners and communities.
          </p>
          {/* <ul className="about-p">
            <li>Research and Development</li>
            <li>Patient Care</li>
            <li>Ethical Business Practices</li>
          </ul> */}
        </div>
        <div className="company-history">
          <h2>Our History</h2>
          <p className="about-p">
            Our journey began in 2014 with the establishment of Bhagiradha
            Enterprises, driven by a vision to provide high-quality Active
            Pharmaceutical Intermediates (APIs) and specialty chemicals to
            industries worldwide. Since then, we have grown into a trusted
            partner for clients across healthcare, agriculture, veterinary
            sciences, and electronic chemicals. With a steadfast commitment to
            innovation, precision, and sustainability, we have built a strong
            foundation rooted in expertise, cutting-edge technology, and
            customer satisfaction. Over the years, Bhagiradha Enterprises has
            evolved, embracing challenges and expanding our capabilities to meet
            the ever-changing demands of a dynamic global market.
          </p>
          {/* <p className="about-p">Key milestones in our journey:</p>
          <ul className="about-p">
            <li>2000: Company Founded</li>
            <li>2005: First International Expansion</li>
            <li>2010: Launch of Flagship Product</li>
            <li>2015: Acquisition of Leading Pharmaceutical Company</li>
            <li>2020: Global Recognition for Innovation</li>
          </ul> */}
        </div>
      </section>
      <section
        className="leadership"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <h2 style={{ textAlign: "center" }}>Our Leadership</h2>
        <div
          className="leader-cards"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <div
            className="leader-cards"
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <div className="leader-card">
              <img src="md1.jpg" alt="Dr. John Doe" />
              <div className="leader-info">
                <h3>Dr. John Doe</h3>
                <p>Managing Director</p>
                <p>
                  With a deep understanding of the pharmaceutical industry, Dr.
                  Doe brings a wealth of experience and strategic vision to
                  Bhagiratha Enterprises...
                </p>
              </div>
            </div>
            <div className="leader-card">
              <img src="md2.jpg" alt="Dr. Jane Smith" />
              <div className="leader-info">
                <h3>Dr. Jane Smith</h3>
                <p>Co-Managing Director</p>
                <p>
                  Dr. Smith is a renowned expert in clinical research and drug
                  development. Her passion for patient care and scientific
                  excellence has significantly contributed to the success of
                  Bhagiratha Enterprises.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;
