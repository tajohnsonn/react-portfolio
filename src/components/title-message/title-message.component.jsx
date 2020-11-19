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
    text-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
    font-weight: 100;
    letter-spacing: 10px;
    .main {
      font-size: 60px;
    }
    .subtitle {
      font-size: 50px;
      letter-spacing: 3px;
      color: blue !important;
      margin-top: 55px;
    }
  }
`;

const TitleMessage = () => (
  <MyTitleMessage>
    <div className="title-Message">
      <div className="heading">
        <div className="main text-center mb-3">
          Hi, I am
          <br />
          <span>
            <strong>Taylor A Johnson</strong>
          </span>
        </div>
        <div className="subtitle">
          <Typewriter
            options={{
              strings: [
                "Web Developer",
                "Creative",
                "Sr. Content Curator",
                "Student"
              ],
              autoStart: true,
              loop: true,
              delay: 50
            }}
          />
        </div>
      </div>
    </div>
  </MyTitleMessage>
);

export default TitleMessage;
