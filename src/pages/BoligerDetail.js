import React from "react";
import HeroSection from "../components/BoligerDetail/HeroSection";
import Footer from "../layout/Footer/Footer";
import Header from "../layout/Header/Header";
import PageHeader from "../layout/PageHeader/PageHeader";

const BoligerDetail = () => {
  return (
    <div>
      <Header />
      <PageHeader />
      <HeroSection />
      <Footer />
    </div>
  );
};

export default BoligerDetail;
