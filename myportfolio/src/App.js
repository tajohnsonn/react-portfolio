import React from "react";

// components
import MyNavBar from "./components/my-navbar/mynavbar.component";
import MyCarousel from "./components/my-carousel/my-carousel.component";

import "./App.css";

const App = () => {
  return (
    <div>
      <MyNavBar />
      <MyCarousel />
      My Portfolio
    </div>
  );
};

export default App;
