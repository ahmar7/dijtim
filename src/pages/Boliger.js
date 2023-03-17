import React from "react";
import BoligerCards from "../components/Boliger/BoligerCards";
import Footer from "../layout/Footer/Footer";
import Header from "../layout/Header/Header";
import PageHeader from "../layout/PageHeader/PageHeader";

const Boliger = () => {
  return (
    <div>
      <Header />
      <PageHeader name="Alle boliger" />
      <BoligerCards />
      <Footer />
    </div>
  );
};

export default Boliger;
