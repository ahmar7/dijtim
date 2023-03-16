import React from "react";
import Demo from "../components/Home/Demo.js";
import HeroSection from "../components/Home/HeroSection.js";
import News from "../components/Home/News.js";
import PropertyCards from "../components/Home/propertyCards.js";
import Footer from "../layout/Footer/Footer.js";
import Header from "../layout/Header/Header";

const Home = () => {
  return (
    <div className="home-page">
      <Header />
      {/* <HeroSection />
      <PropertyCards />
      <Demo />
      <News />
      <Footer /> */}
    </div>
  );
};

export default Home;
