import React from "react";
import "./Contactform.css"; // Import the CSS file

const Contactform = () => {
  return (
    <section className="section1">
      <div className="container1">
        <div className="contactInfo1">
          <div>
            <h2>Contact Info</h2>
            <ul className="info">
              <li>
                <span>
                  <img src="/images/location.png" alt="location" />
                </span>
                <span>
                  184 Ippokratous Street
                  <br />
                  Athens, Gr
                  <br />
                  11472
                </span>
              </li>
              <li>
                <span>
                  <img src="/images/mail.png" alt="mail" />
                </span>
                <span>
                  <a href="mailto:nassosanagn@gmail.com">
                    nassosanagn@gmail.com
                  </a>
                </span>
              </li>
              <li>
                <span>
                  <img src="/images/call.png" alt="phone" />
                </span>
                <span>702-279-3488</span>
              </li>
            </ul>
          </div>

          <ul className="sci">
            <li>
              <a href="">
                <img src="/images/1.png" alt="Facebook" />
              </a>
            </li>
            <li>
              <a href="">
                <img src="/images/3.png" alt="Instagram" />
              </a>
            </li>
            <li>
              <a href="">
                <img src="/images/2.png" alt="Twitter" />
              </a>
            </li>
            <li>
              <a href="">
                <img src="/images/5.png" alt="LinkedIn" />
              </a>
            </li>
          </ul>
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
