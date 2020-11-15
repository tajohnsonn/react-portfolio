import React from "react";

// components
import MyNavBar from "./components/my-navbar/mynavbar.component";
import MyCarousel from "./components/my-carousel/my-carousel.component";
import TitleMessage from "./components/title-message/title-message.component";
import ScrollDown from "./components/scroll-down/scroll-down.component";

import "./App.css";

const App = () => {
  return (
    <div>
      <MyNavBar />
      <MyCarousel />
      <TitleMessage />
      <TitleMessage />
      <ScrollDown />
    </div>
  );
};

export default App;
