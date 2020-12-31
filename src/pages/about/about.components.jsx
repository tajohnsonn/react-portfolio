import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Profile from "../../assets/img/profile/portfolio-image-about-me.jpeg";

import "./about.styles.css";

const About = () => {
  return (
    <div id="about">
      <div className="about">
        <h1 className="pt-3 text-center font-details pb-3">ABOUT ME</h1>
        <Container>
          <Row className="pt-3 pb-5 align-items-center">
            <Col xs={12} md={6}>
              <Row className="justify-content-center mb-2 mr-2 ">
                <Image
                  className="profile justify-content-end"
                  alt="profile"
                  src={Profile}
                  thumbnail
                  fluid
                />
              </Row>
            </Col>
            <Col xs={12} md={6}>
              <Row className=" align-items-start p-2 my-details rounded">
                <p>
                  {" "}
                  <center>
                    {" "}
                    Innovative Sr. Content Curator and Front End Web Developer
                    with a background in Marketing and fast paced environments.{" "}
                    <br />
                    <br />
                    Passionate about front-end web development and developing
                    clean user-friendly applications. <br /> <br />
                    Known among colleagues to be dependable, curious, and detail
                    oriented.
                  </center>
                </p>
                {/* social buttons start here */}
                <Col className="d-flex justify-content-center flex-wrap">
                  <div>
                    <a href="#contact">
                      <Button className="m-2" variant="outline-secondary">
                        Let's Chat!
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://docs.google.com/document/d/1H2UxpnoQl9tiEpCZfoClkgybHaxk_Bu3vPuqi_xgj7s/edit?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="m-2" variant="outline-secondary">
                        My Resume
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://github.com/tajohnsonn"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="m-2" variant="outline-secondary">
                        GitHub
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://www.linkedin.com/in/tajohnsonn/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="m-2" variant="outline-secondary">
                        LinkedIn
                      </Button>
                    </a>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default About;
