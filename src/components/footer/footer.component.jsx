import React from "react";
import "./footer.styles.css";
import logo from "../../assets/img/profile/LOGO-DESIGN.gif";

const Footer = () => {
  return (
    <div>
      <div className="py-2 text-center footer-style">
        {/* {" "}
        Coded by Taylor J. 2020{" "} */}{" "}
        <img
          src={logo}
          alt="created by Taylor J. logo"
          className="bottomLogo"
        />
      </div>
    </div>
  );
};

export default Footer;
