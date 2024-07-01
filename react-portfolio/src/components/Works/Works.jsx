import React, { useContext } from "react";
import { themeContext } from "../../Context";
import { img } from "../../img";
import "./Works.css";
import { motion } from "framer-motion";

const Works = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="works">
      {/* left side */}
      <div className="awesome">
        <span style={{ color: darkMode ? "white" : "" }}>
          Works for All these
        </span>
        <span>Brands & Clients</span>
        <span>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus
          aperiam,
          <br /> est sint eligendi enim eaque fuga aspernatur
          <br /> est repudiandae nesciunt nulla.
          <br /> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus
          aperiam
        </span>
        <button className="button s-button">Hire me</button>
        <div className="blur s-blur" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right side */}
      <div className="w-right">
        <motion.div
          initial={{ rotate: 90 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          {" "}
          <div className="w-secCircle">
            <img src={img.Upwork} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={img.Fiverr} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={img.Amazon} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={img.Shopify} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={img.Facebook} alt="" />
          </div>
        </motion.div>
        {/* background circle */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
