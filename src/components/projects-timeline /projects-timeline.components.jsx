import React from "react";
import { Timeline, Events, UrlButton, ImageEvent } from "@merc/react-timeline";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import Image1 from "../../assets/img/projects/download-1.png";

// project imports
import LocalEats from "../../assets/img/projects/LocalEats.png";
import FiveStarEats from "../../assets/img/projects/StarRecipes.png";
import WorkDay from "../../assets/img/projects/WorkdayApp.png";
import WorkoutTracker from "../../assets/img/projects/WorkoutTracker.png";
import BudgetTracker from "../../assets/img/projects/BudgetTracker.png";
import SneakerFreakers from "../../assets/img/projects/SneakerFreakers.png";
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
                      EXPAND FOR PROJECT DETAILS &nbsp;
                      <i class="fas fa-angle-down"></i>
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> This is a application for
                        people who love food! This app uses Google Maps and
                        Zomato API’s, Bootstrap and Skeleton frameworks, HTML,
                        and CSS5.
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
                        <ul className="list-styles pt-1">
                          <li>HTML</li>
                          <li>CSS</li>
                          <li>Javascript</li>
                        </ul>
                        <hr />
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

          {/* workday project starts here */}

          <ImageEvent
            date="08/2020"
            className="text-center"
            text="WORK DAY SCHEDULER"
            src={WorkDay}
            alt="Work Day Tracker"
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
                      EXPAND FOR PROJECT DETAILS &nbsp;
                      <i class="fas fa-angle-down"></i>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> Stay organized with this
                        fun pink themed work day scheduler.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Save events for each hour of the work day</li>
                          <li>
                            Highlights current hour with a different color
                          </li>
                          <li>Shows current date</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul className="list-styles pt-1">
                          <li>HTML</li>
                          <li>CSS</li>
                          <li>Javascript</li>
                        </ul>
                        <hr />
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://tajohnsonn.github.io/dayPlanner/"
                  target="_blank"
                >
                  LIVE DEMO
                </UrlButton>
                <UrlButton
                  href="https://github.com/tajohnsonn/dayPlanner"
                  target="_blank"
                >
                  REPOSITORY
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          {/* 5 Star Eats Project */}
          <ImageEvent
            date="09/2020"
            className="text-center"
            text="5 STAR EATS"
            src={FiveStarEats}
            alt="5 Star Eats"
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
                      EXPAND FOR PROJECT DETAILS &nbsp;
                      <i class="fas fa-angle-down"></i>
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <hr />
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
                        <strong>Technology Used</strong>
                        <ul className="list-styles pt-1">
                          <li>HTML</li>
                          <li>CSS</li>
                          <li>Javascript</li>
                          <li>Bulma</li>
                          <li>Zurb Foundation</li>
                          <li>EmailJS</li>
                          <li>EDAMAM</li>
                        </ul>
                        <hr />
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

          {/* workout tracker project starts here */}

          <ImageEvent
            date="10/2020"
            className="text-center"
            text="WORKOUT TRACKER"
            src={WorkoutTracker}
            alt="Workout Tracker"
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
                      EXPAND FOR PROJECT DETAILS &nbsp;
                      <i class="fas fa-angle-down"></i>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>User Story:</strong> I want to be able to view
                        create and track daily workouts. I want to be able to
                        log multiple exercises in a workout on a given day.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Add exercises to a previous workout plan.</li>
                          <li>Add new exercises to a new workout plan.</li>
                          <li>
                            View the combined weight of multiple exercises on
                            the stats page.
                          </li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul className="list-styles pt-1">
                          <li>HTML</li>
                          <li>CSS</li>
                          <li>Javascript</li>
                          <li>MongoDB</li>
                          <li>Express.js</li>
                        </ul>
                        <hr />
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://blooming-spire-19184.herokuapp.com/?id=5f9b5ca0373da30017012e2f"
                  target="_blank"
                >
                  LIVE DEMO
                </UrlButton>
                <UrlButton
                  href="https://github.com/tajohnsonn/workoutTracker"
                  target="_blank"
                >
                  REPOSITORY
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          {/* budget tracker tracker project starts here */}

          <ImageEvent
            date="10/2020"
            className="text-center"
            text="BUDGET TRACKER"
            src={BudgetTracker}
            alt="Budget Tracker"
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
                      EXPAND FOR PROJECT DETAILS &nbsp;
                      <i class="fas fa-angle-down"></i>
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>User Story:</strong>The user will be able to add
                        expenses and deposits to their budget with or without a
                        connection. When entering transactions offline, they
                        should populate the total when brought back online.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Enter deposits offline</li>
                          <li>Enter expenses offline</li>
                          <li>
                            Offline entries are added to tracker once the
                            application is online.
                          </li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul className="list-styles pt-1">
                          <li>NodeJS</li>
                          <li>Express</li>
                          <li>MongoDB</li>
                          <li>Mongoose</li>
                        </ul>
                        <hr />
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://frozen-tundra-49156.herokuapp.com/"
                  target="_blank"
                >
                  LIVE DEMO
                </UrlButton>
                <UrlButton
                  href="https://github.com/tajohnsonn/budgetTracker"
                  target="_blank"
                >
                  REPOSITORY
                </UrlButton>
              </div>
            </div>
          </ImageEvent>
          {/* sneaker freakers project starts here */}

          <ImageEvent
            date="12/2020"
            className="text-center"
            text="SNEAKER FREAKERS"
            src={SneakerFreakers}
            alt="Sneaker Freakers"
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
                      EXPAND FOR PROJECT DETAILS &nbsp;
                      <i class="fas fa-angle-down"></i>
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>User Story:</strong>Sneaker Freakers is a React
                        Library based interactive application, that allows users
                        to search for sneakers by brand, through a third party
                        API.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Search for sneaker by brand name</li>
                          <li>Note Page</li>
                          <li>Curated Team Written Blog Posts</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul className="list-styles pt-1">
                          <li>Axios</li>
                          <li>Bycrypt</li>
                          <li>Dotenv</li>
                          <li>Express</li>
                          <li>JSONWebToken</li>
                          <li>Mongoose</li>
                          <li>MaterialUI</li>
                          <li>Bootstrap</li>
                          <li>Jquery</li>
                          <li>React Bootstrap</li>
                          <li>Slate</li>
                        </ul>
                        <hr />
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://secret-beyond-86832.herokuapp.com/home"
                  target="_blank"
                >
                  LIVE DEMO
                </UrlButton>
                <UrlButton
                  href="https://github.com/sophiaorlando/Project3"
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
