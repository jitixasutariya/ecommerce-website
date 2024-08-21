import React from "react";
import HeroSection from "../Componets/HeroSection/HeroSection";
import AboutImg from "../Assets/about.jpg"; // Import the about image

const About = () => {
  const data = {
    name: "About Us",
  };
  return (
    <div>
      <HeroSection myData={data} imgSrc={AboutImg} />{" "}
      {/* Pass the about image */}
    </div>
  );
};

export default About;
