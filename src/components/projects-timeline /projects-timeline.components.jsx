import React from "react";
import { Timeline, Events, UrlButton, ImageEvent } from "@merc/react-timeline";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";

// project imports
import LocalEats from "../../assets/img/projects/LocalEats.png";

// my skill imports
import HTML5 from "../../assets/img/skills/html.svg";
import CSS3 from "../../assets/img/skills/css.svg";
import SASS from "../../assets/img/skills/sass.svg";
import BOOTSTRAP from "../../assets/img/skills/bootstrap.svg";
import REACT from "../../assets/img/skills/react.svg";
import REACT_BOOTSTRAP from "../../assets/img/skills/react-bootstrap.svg";
// backend imports
import NODE_JS from "../../assets/img/skills/nodejs.svg";
// DB imports
import MONGODB from "../../assets/img/skills/mongodb.svg";
// version control imports
import GIT from "../../assets/img/skills/git.svg";
// hosting imports
import HEROKU from "../../assets/img/skills/heroku.svg";
import GITHUB_PAGES from "../../assets/img/skills/github.svg";
// programming lang. imports
import JAVASCRIPT from "../../assets/img/skills/javascript.svg";
import TYPESCRIPT from "../../assets/img/skills/typescript.svg";

import "./projects-timeline.style.css";

const ProjectTimeline = () => {
  return (
    <div id="project">
      <h1 className="pt-3 text-center font-details-b pb-3">PROJECTS</h1>
      <Timeline>
        <Events>
          <ImageEvent
            date="02/2020"
            className="text-center"
            text="LOCAL EATS"
            src={LocalEats}
            alt="Local Eats"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> This is a app people who
                        love food!
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Find Restraunts Nearby</li>
                          <li>Caliber</li>
                          <li>Average Cost for 2</li>
                          <li>Phone Number</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={HTML5}
                                alt="HTML 5"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={CSS3}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              CSS3
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={JAVASCRIPT}
                                alt="Javascript"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Javascript
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://elliotfouts.github.io/local-eats/"
                  target="_blank"
                >
                  LIVE DEMO
                </UrlButton>
                <UrlButton
                  href="https://github.com/elliotfouts/local-eats"
                  target="_blank"
                >
                  REPOSITORY
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          <ImageEvent
            date="09/2020"
            className="text-center"
            text="5 STAR EATS"
            src={LocalEats}
            alt="Local Eats"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>User Story:</strong> I’m stuck in a pandemic and
                        I don’t know what to cook. I need an app that will
                        provide me with recipes I can make with what I have.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Search Repice By Ingredient</li>
                          <li>Send Recipe To A Friend</li>
                          <li>Revisit Past Search History</li>
                          <li>Health Filters</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={HTML5}
                                alt="HTML 5"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={CSS3}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              CSS3
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={JAVASCRIPT}
                                alt="Javascript"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Javascript
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://tajohnsonn.github.io/5StarRecipes/"
                  target="_blank"
                >
                  LIVE DEMO
                </UrlButton>
                <UrlButton
                  href="https://github.com/tajohnsonn/5StarRecipes"
                  target="_blank"
                >
                  REPOSITORY
                </UrlButton>
              </div>
            </div>
          </ImageEvent>
        </Events>
      </Timeline>
    </div>
  );
};
export default ProjectTimeline;
