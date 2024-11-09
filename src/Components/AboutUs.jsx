import React from 'react';
import Contactform from './Contactform';
import './AboutUs.css';
import Footer from './Footer';

function AboutUs() {
  return (
    <div className="about-us">
      <div className="hero-image">
        <h1 style={{ color: 'white' }}>Innovation in Healthcare</h1>
      </div>

      <section className="leadership" style={{display:'flex',flexDirection:'column'}} >
        <h2 style={{ color: 'white' ,textAlign:'left'}}>Our Leadership</h2>
        <div className="leader-cards" style={{display:'flex',flexDirection:'row',justifyContent:'center'}}>
          <div className="leader-card">
            <img src="md1.jpg" alt="Dr. John Doe" />
            <div className="leader-info">
              <h3>Dr. John Doe</h3>
              <p>Managing Director</p>
              <p>With a deep understanding of the pharmaceutical industry, Dr. Doe brings a wealth of experience and strategic vision to Bhagiratha Enterprises. His leadership has been instrumental in driving innovation and ensuring the highest standards of quality.</p>
            </div>
          </div>
          <div className="leader-card">
            <img src="md2.jpg" alt="Dr. Jane Smith" />
            <div className="leader-info">
              <h3>Dr. Jane Smith</h3>
              <p>Co-Managing Director</p>
              <p>Dr. Smith is a renowned expert in clinical research and drug development. Her passion for patient care and scientific excellence has significantly contributed to the success of Bhagiratha Enterprises.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="company-info">
        <div className="company-details">
          <h2 style={{color:'cadetblue'}}>About Bhagiratha Enterprises</h2>
          <p>Bhagiratha Enterprises has been a leader in the pharmaceutical industry for over 20 years. Our mission is to provide innovative healthcare solutions that improve the quality of life for people around the world.</p>
          <p>We are committed to:</p>
          <ul>
            <li>Research and Development</li>
            <li>Patient Care</li>
            <li>Ethical Business Practices</li>
          </ul>
        </div>
        <div className="company-history">
          <h2 style={{color:'cadetblue'}}>Our History</h2>
          <p>Founded in 2000, Bhagiratha Enterprises started as a small family business and has grown into a multinational corporation. Our commitment to quality and innovation has been the cornerstone of our success.</p>
          <p>Key milestones in our journey:</p>
          <ul>
            <li>2000: Company Founded</li>
            <li>2005: First International Expansion</li>
            <li>2010: Launch of Flagship Product</li>
            <li>2015: Acquisition of Leading Pharmaceutical Company</li>
            <li>2020: Global Recognition for Innovation</li>
          </ul>
        </div>
      </section>

      <Contactform />

      <Footer />
    </div>
  );
}

export default AboutUs;