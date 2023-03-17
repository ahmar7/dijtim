import React from "react";
import HeroSection from "../components/Maeglere/HeroSection";
import Footer from "../layout/Footer/Footer";
import Header from "../layout/Header/Header";
import PageHeader from "../layout/PageHeader/PageHeader";

const Maeglere = () => {
  return (
    <div>
      <Header />
      <PageHeader name="Vores maeglere" />
      <HeroSection />
      <Footer />
    </div>
  );
};

export default Maeglere;
