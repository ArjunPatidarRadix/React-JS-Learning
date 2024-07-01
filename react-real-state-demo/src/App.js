import React, { useRef, useState } from "react";
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import GlobalStyle from "./GlobalStyles";
import Hero from "./components/Hero";
import { SliderData } from "./data/SliderData";
import Dropdown from "./components/Dropdown";
import InfoSection from "./components/InfoSection";
import ContactUs from "./components/ContactUs";
import { InfoData } from "./data/InfoData";
import Footer from "./components/Footer";
import About from "./components/About";
function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const ref = useRef(null);
  const handleClick = () => {
    console.log("handleClick clicked");
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <GlobalStyle />
      <NavBar toggle={toggle} menuClick={handleClick} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Hero slides={SliderData} />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <InfoSection {...InfoData} />
            </>
          }
        ></Route>
        <Route
          exact
          path="/contact"
          element={<ContactUs innerref={ref} />}
        ></Route>
        <Route exact path="/about" element={<About />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
