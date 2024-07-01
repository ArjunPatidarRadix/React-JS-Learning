import React from "react";
import { img } from "../../img";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Github from "@iconscout/react-unicons/icons/uil-github";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <img src={img.Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>arjun@gmail.com</span>
        <div className="f-icons">
          <Insta color="white" size="3rem" />
          <Facebook color="white" size="3rem" />
          <Github color="white" size="3rem" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
