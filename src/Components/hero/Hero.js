import React from "react";
import "./hero.css";
import Darkarrow from "../../assets/dark-arrow.png";
export default function Hero() {
  return (
    <div className="hero container" id="Hero">
      <div className="hero-text">
        <h1>We ensure better education for growing world </h1>
        <p>Our cutting-edge curriculum is designedto empower students with the knowledge,skills,ans experiences needed to excel in the dynamic fied of education</p>
        <button className="btn">Learn More <img src={Darkarrow} alt="" /></button>
      </div>
    </div>
  );
}
