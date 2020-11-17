import React from "react";

// components
import MyNavBar from "./components/my-navbar/mynavbar.component";
import MyCarousel from "./components/my-carousel/my-carousel.component";
import TitleMessage from "./components/title-message/title-message.component";
import ScrollDown from "./components/scroll-down/scroll-down.component";
import About from "./pages/about/about.components";
import "./App.css";

const App = () => {
  return (
    <div>
      <MyNavBar />
      <MyCarousel />
      <TitleMessage />
      {/* about me */}
      <About />
    </div>
  );
};

export default App;
