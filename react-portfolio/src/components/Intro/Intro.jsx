import React, { useContext } from "react";
import { themeContext } from "../../Context";
import { img } from "../../img";
import FloatingDiv from "../FloatingDiv/FloatingDiv";
import "./Intro.css";
import { motion } from "framer-motion";

const Intro = () => {
  const transition = { duration: 2, type: "spring" };

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span style={{ color: darkMode ? "white" : "" }}>Hy! I Am</span>
          <span>Jarvis</span>
          <span>
            Frontend Developer with high level of experience in web designing
            and development, producting the Quality work
          </span>
        </div>
        <button className="button i-button">Hire me</button>
        <div className="i-icons">
          <img src={img.GithubIcon} alt={"GitHub"} />
          <img src={img.LinkedIn} alt={"LinkedIn"} />
          <img src={img.Instagram} alt={"Instagram"} />
        </div>
      </div>
      <div className="i-right">
        <img src={img.Vector1} alt="" />
        <img src={img.Vector2} alt="" />
        <img src={img.Boy} alt="" />
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={img.Glassesimoji}
          alt=""
        />
        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          style={{ top: "-4%", left: "68%" }}
          className="floating-div"
        >
          <FloatingDiv image={img.Crown} txt1="Mobile" txt2="Developer" />
        </motion.div>
        <motion.div
          initial={{ top: "18rem", left: "9rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          className="floating-div"
          // style={{ top: "18rem", left: "0rem" }}
        >
          <FloatingDiv image={img.ThumbUp} txt1="Best Design" txt2="Award" />
        </motion.div>
        {/* Blur div */}
        <div className="blur" style={{ background: "rgb(238 210 255" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
