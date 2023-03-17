import React from "react";
import ContactForm from "../components/Kontakt/ContactForm";
import GoogleMap from "../components/Kontakt/GoogleMap";
import Footer from "../layout/Footer/Footer";
import Header from "../layout/Header/Header";
import PageHeader from "../layout/PageHeader/PageHeader";

const Kontakt = () => {
  return (
    <div>
      <Header />
      <PageHeader name="Kontakt" />
      <GoogleMap />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Kontakt;
