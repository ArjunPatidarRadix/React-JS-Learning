import React, { useContext } from "react";
import "./Services.css";
import { img } from "../../img";
import Card from "../Card/Card";
import Resume from "./resume.pdf";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";

const Services = () => {
  const transition = { duration: 1, type: "spring" };

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="services" id="Services">
      {/* left side */}
      <div className="awesome">
        <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
        <span>Services</span>
        <span>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus
          aperiam, <br /> est sint eligendi enim eaque fuga aspernatur
          repudiandae nesciunt nulla.
        </span>
        <a href={Resume} download={true}>
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right side */}
      <div className="cards">
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
          // style={{ left: "14rem" }}
        >
          <Card
            emoji={img.HeartEmoji}
            heading="Design"
            detail="Figma, Sketch, Photoshop, Adobe, Adobe xd"
          />
        </motion.div>
        {/* second card */}
        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
        >
          <Card
            emoji={img.HeartEmoji}
            heading="Design"
            detail="Figma, Sketch, Photoshop, Adobe, Adobe xd"
          />
        </motion.div>
        <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
          // style={{ top: "19rem", left: "12rem" }}
        >
          <Card
            emoji={img.Humble}
            heading="UI/UX"
            detail="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis,"
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
