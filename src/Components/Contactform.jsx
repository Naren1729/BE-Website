import React from "react";
import "./Contactform.css"; // Import the CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';   
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Contactform = () => {
  return (
    <section className="section1">
      <div className="container1">
        <div className="contactInfo1">
          <div>
            <h2>Contact Info</h2>
            <ul class="info">
              <li>
                <span>
                  <FontAwesomeIcon className="my-icon" icon={faMapMarkerAlt} />
                </span>
                <span>
                  Athens, Gr
                  <br />
                  11472
                </span>
              </li>
              <li>
                <span>
                  <FontAwesomeIcon className="my-icon" icon={faEnvelope} />
                </span>
                <span>
                  <a href="mailto:nassosanagn@gmail.com">
                    nassosanagn@gmail.com
                  </a>
                </span>
              </li>
              <li>
                <span>
                  <FontAwesomeIcon className="my-icon" icon={faPhone} />
                </span>
                <span>
                  702-279-3488
                </span>
              </li>
              <li>
                <span>
                  <FontAwesomeIcon className="my-icon" icon={faLinkedinIn} />
                </span>
                <span>
                  linkedin address
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="contactForm1">
          <h2>Send a Message</h2>
          <div className="formBox">
            <div className="inputBox w50">
              <input type="text" required />
              <span>First Name</span>
            </div>
            <div className="inputBox w50">
              <input type="text" required />
              <span>Last Name</span>
            </div>
            <div className="inputBox w50">
              <input type="email" required />
              <span>Email Address</span>
            </div>
            <div className="inputBox w50">
              <input type="text" required />
              <span>Mobile Number</span>
            </div>
            <div className="inputBox w100">
              <textarea required></textarea>
              <span>Write your message here...</span>
            </div>
            <div className="inputBox w100">
              <input type="submit" value="Send" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contactform;
