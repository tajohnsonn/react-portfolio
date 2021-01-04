import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardUp,
  MDBCardTitle,
  MDBCardText,
  MDBAvatar,
  MDBFlippingCard
} from "mdbreact";

import "./sk-emails.styles.css";

// email imports
import Reciepts from "../../assets/img/emails/reciepts.jpeg";
import UltaBeauty from "../../assets/img/emails/ulta.png";
import CyberMonday from "../../assets/img/emails/bf.jpeg";

const Emails = () => {
  return (
    <div className="pt-3 pb-3 " id="marketing">
      <MDBContainer>
        <h1 className="pt-3 text-center font-details-b pb-3">
          MARKETING EMAILS
        </h1>
        <br />
        <p className="email-description">
          {" "}
          Collaborated with design team and account managers to create marketing
          webviews and emails using HTML5 and CSS.
        </p>

        <MDBRow>
          <MDBCol md="4">
            <MDBCard style={{ width: "22rem" }}>
              <MDBCardImage
                className="img-fluid "
                id="email-img"
                src={Reciepts}
                waves
                alt="SK Reciepts Webview"
              />
            </MDBCard>
          </MDBCol>

          <MDBCol md="4">
            <MDBCard style={{ width: "22rem" }}>
              <MDBCardImage
                className="img-fluid"
                id="email-img"
                src={CyberMonday}
                waves
                alt="Cyber Monday Webview"
              />
            </MDBCard>
          </MDBCol>

          <MDBCol md="4">
            <MDBCard style={{ width: "22rem" }}>
              <MDBCardImage
                className="img-fluid"
                id="email-img"
                src={UltaBeauty}
                waves
                alt="Ulta Beauty Webview"
              />
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
};

export default Emails;
