import React from "react";
import "./Home.css";
import logo from "../img/logo.jpg";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-img">
        <img src={logo} alt="" />
      </div>
    </div>
  );
};

export default Home;
