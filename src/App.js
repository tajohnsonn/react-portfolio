import React from "react";
import Fade from "react-reveal/Fade";
import { Parallax } from "react-parallax";
import Container from "react-bootstrap/Container";

// components start here

import MyNavBar from "./components/my-navbar/mynavbar.component";
import MyCarousel from "./components/my-carousel/my-carousel.component";
import TitleMessage from "./components/title-message/title-message.component";
import ScrollDown from "./components/scroll-down/scroll-down.component";
import About from "./pages/about/about.components";
import Skills from "./pages/skills/skills.components";
import ProjectTimeline from "./components/projects-timeline /projects-timeline.components";
import Contact from "./pages/contact-form/contact-form.component";
import Footer from "./components/footer/footer.component";
import Marketing from "./pages/sk-emails/sk-emails.component";

import "./App.css";

const App = () => {
  return (
    <div className="App" style={{ position: "relative" }}>
      <MyNavBar />
      <ScrollDown />
      <MyCarousel />
      <TitleMessage />
      {/* about me */}
      <div>
        <Parallax
          blur={{ min: -30, max: 30 }}
          bgImage={require("./assets/img/background/background.jpg")}
          bgImageAlt=""
          strength={-900}
        >
          <div>
            {/* this container structure is what centers the content and keeps everything in line */}
            <Container className="container-box rounded">
              <Fade duration={500}>
                <About />
              </Fade>
            </Container>
          </div>
        </Parallax>
      </div>
      {/* skills begin here */}
      <div>
        <Container className="container-box rounded">
          <Fade duration={500}>
            <Skills />
          </Fade>
        </Container>
      </div>
      {/* projects begin here */}
      <div>
        <Container className="container-box rounded">
          <Fade duration={500}>
            <ProjectTimeline />
          </Fade>
        </Container>
      </div>
      {/* projects begin here */}
      <div>
        <Container className="container-box rounded">
          <Fade duration={500}>
            <Marketing />
          </Fade>
        </Container>
      </div>
      {/* contact page begins here */}
      <div>
        <Container className="container-box rounded">
          <Fade duration={500}>
            <Contact />
          </Fade>
        </Container>
      </div>
      {/* footer begins here */}
      <hr />
      <Footer />
    </div>
  );
};

export default App;
