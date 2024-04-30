import React from "react";
import './About.css'
import about from "../../assets/about.png";
import play from "../../assets/play-icon.png";
export default function About() {
  return (
    <div className="about" id="About">
      <div className="left-about">
        <img src={about} alt="" className="about-image" />
        <img src={play} alt="" className="about-play" />
      </div>
      <div className="right-about">
      <div><h3>About University</h3></div>
      <div><h2>Nurturing Tomorrow's Leaders Today</h2></div>
      <div><p>
        Embark on a transformative educational journey with our university's
        comprehensive education programs. Our cutting-edge curriculum is
        designed to empower students with the knowledge, skills, and experiences
        needed to excel in the dynamic field of education.
      </p></div>
      <div><p>
        With a focus on innovation, hands-on learning, and personalized
        mentorship, our programs prepare aspiring educators to make a meaningful
        impact in classrooms, schools, and communities.
      </p></div>
      <div><p>
        Whether you aspire to become a teacher, administrator, counselor, or
        educational leader, our diverse range of programs offers the perfect
        pathway to achieve your goals and unlock your full potential in shaping
        the future of education.
      </p></div>
      </div>
    </div>
  );
}
