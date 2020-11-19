import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import "./contact-form.styles.css";

const Contact = () => {
  return (
    <div id="contact">
      <h1 className="pt-3 text-center font-details-b pb-3">LET'S CHAT</h1>
      <Jumbotron className="contact-jumbotron">
        <Row>
          <Col className="d-flex justify-content-center flex-wrap">
            {/* contact by email */}
            <div className="m-2">
              <a
                href="tajohnsonn@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline-danger" title="tajohnsonn@gmail.com">
                  <i className="fas fa-envelope-square"></i> Email
                </Button>
              </a>
            </div>
            {/* Contact by linkedin */}
            <div className="m-2">
              <a
                href="https://www.linkedin.com/in/tajohnsonn/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline-primary" title="LinkenIn">
                  <i className="fab fa-linkedin"></i> LinkedIn
                </Button>
              </a>
            </div>
            {/* contact through github */}
            <div className="m-2">
              <a
                href="https://github.com/tajohnsonn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline-dark" title="My other projects">
                  <i className="fab fa-github-square"></i> GitHub
                </Button>
              </a>
            </div>
          </Col>
        </Row>
      </Jumbotron>
    </div>
  );
};

export default Contact;
