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
    color: grey;
    text-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
    font-weight: 100;
    letter-spacing: 20px;
    .main {
      font-size: 60px;
    }
    .subtitle {
      font-size: 80px;
      letter-spacing: 5em;
      margin-top: 30px;
    }
  }
`;

const TitleMessage = () => (
  <MyTitleMessage>
    <div className="title-Message">
      <div className="heading">
        <div className="main text-center mb-3">
          Hey there,
          <br />
          <span>
            <strong> I am Taylor J.</strong>
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
              delay: 60
            }}
          />
        </div>
      </div>
    </div>
  </MyTitleMessage>
);

export default TitleMessage;
