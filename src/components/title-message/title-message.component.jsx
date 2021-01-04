import React from "react";
import Typewriter from "typewriter-effect";
import styled from "styled-components";

const MyTitleMessage = styled.h1`
  position: absolute;
  width: 100%;
  top: 22rem;
  z-index: 1;
  margin-top: -122px;
  text-align: center;
  strong {
    font-size: 1.4em;
  }
  div {
    color: black;
    text-shadow: 0px 2px 10px rgba(3, 0, 0, 0.2);
    letter-spacing: 15px;
    .main {
      font-size: 45px;
      margin-top: 0px;
    }
    .subtitle {
      font-size: 40px;
      letter-spacing: 5em;
      margin-top: 30px;
      .heading {
        margin-top: 5px;
      }
    }
  }
`;

const TitleMessage = () => (
  <MyTitleMessage>
    <div className="title-Message">
      <div className="heading">
        <div className="main text-center mb-3">
          Hello World,
          <br />
          <span>
            <strong> I am Taylor J.</strong>
          </span>
        </div>
        <div className="subtitle">
          <Typewriter
            options={{
              strings: [
                "Full-Stack Web Developer",
                "Creative",
                "Sr. Content Curator",
                "Strategist",
                "Student"
              ],
              autoStart: true,
              loop: true,
              delay: 100
            }}
          />
        </div>
      </div>
    </div>
  </MyTitleMessage>
);

export default TitleMessage;
