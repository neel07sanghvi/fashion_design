import React, { useEffect, useState, useRef } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
    console.log("export");
  };
  useEffect(() => {
    changeNavbarColor();
    window.addEventListener("scroll", changeNavbarColor);
  });

  return <div className={colorChange ? "nav-active" : "nav"}>Navbar</div>;
};

export default Navbar;
