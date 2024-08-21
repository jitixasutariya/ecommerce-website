import React from "react";
import HeroSection from "../Componets/HeroSection/HeroSection";
import HomeImg from "../Assets/shopping.jpg"; // Import the home image
import Services from "../Componets/Services/Services";
import Trusted from "../Componets/Trusted";

const Home = () => {
  const data = {
    name: "Ecommerce Store",
  };
  return (
    <div className="home">
      <HeroSection myData={data} imgSrc={HomeImg} /> {/* Pass the home image */}
      <Services />
      <Trusted />
    </div>
  );
};

export default Home;
