import React from "react";
import HeroSection from "../components/Nyheder/HeroSection";
import Footer from "../layout/Footer/Footer";
import Header from "../layout/Header/Header";
import PageHeader from "../layout/PageHeader/PageHeader";

const Nyheder = () => {
  return (
    <div>
      <Header />
      <PageHeader name="Nyheder" />
      <HeroSection />
      <Footer />
    </div>
  );
};

export default Nyheder;
