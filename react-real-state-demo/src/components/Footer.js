import React from "react";

const Footer = () => {
  let footerStyle = {
    top: "10vh",
    width: "100%",
    position: "relative",
    borderTop: "15px solid red",
  };
  return (
    <footer className="bg-dark text-light py-3" style={footerStyle}>
      <p className="text-center">Copyright &copy; home.com</p>
    </footer>
  );
};

export default Footer;
