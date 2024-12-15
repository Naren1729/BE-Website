import React from "react";
import "./Footer.css";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";

export default function Footer() {
  return (
    <MDBFooter className="text-center text-lg-start text-muted Footer">
      <section className="footer-section">
        <MDBContainer className="text-center text-md-start mt-4">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4 text-center">
              <h6
                className="text-uppercase fw-bold mb-4"
                style={{ color: "#113366" }}
              >
                <MDBIcon color="#113366" icon="gem" className="me-3" />
                Bhagiradha Enterprises
              </h6>
              <p style={{ color: "black" }}>
                Bhagiradha Enterprises is a trusted manufacturer of Active
                Pharmaceutical Intermediates (APIs) and specialty chemicals,
                delivering innovative solutions across multiple industries.
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6
                className="text-uppercase fw-bold mb-4 #113366"
                style={{ color: "#113366" }}
              >
                Useful links
              </h6>
              <p style={{ color: "black" }}>
                <a href="#!" className="text-reset">
                  Home
                </a>
              </p>
              <p style={{ color: "black" }}>
                <a href="#!" className="text-reset">
                  About Us
                </a>
              </p>
              <p style={{ color: "black" }}>
                <a href="#!" className="text-reset">
                  Contact us
                </a>
              </p>
              {/* <p style={{color:'black'}}>
                <a href="#!" className="text-reset">
                  Help
                </a>
              </p> */}
            </MDBCol>

            <MDBCol
              md="4"
              lg="3"
              xl="3"
              className="mx-left mb-md-0 mb-4 text-center"
            >
              <h6
                className="text-uppercase fw-bold mb-4 #113366"
                style={{ color: "#113366" }}
              >
                Contact
              </h6>
              <p style={{ color: "black" }}>
                <MDBIcon color="secondary" icon="home" className="me-3" />
                Hyderabad, Telangana, INDIA
              </p>
              <p style={{ color: "black" }}>
                <MDBIcon color="secondary" icon="envelope" className="me-3" />
                info@example.com
              </p>
              <p style={{ color: "black" }}>
                <MDBIcon color="secondary" icon="phone" className="me-3" /> + 91
                7386016731
              </p>
              <p style={{ color: "black" }}>
                <MDBIcon color="secondary" icon="print" className="me-3" /> + 91
                9866673923
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    </MDBFooter>
  );
}
