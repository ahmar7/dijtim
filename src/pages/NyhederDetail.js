import React from "react";
import HeroSection from "../components/NyhederDetail/HeroSection";
import Footer from "../layout/Footer/Footer";
import Header from "../layout/Header/Header";
import PageHeader from "../layout/PageHeader/PageHeader";

const NyhederDetail = () => {
  return (
    <div>
      <Header />
      <PageHeader name="Sidste nyt" />
      <HeroSection />
      <Footer />
    </div>
  );
};

export default NyhederDetail;
