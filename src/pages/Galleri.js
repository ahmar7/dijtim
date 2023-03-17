import React from "react";
import GalleryImages from "../components/Galleri/GalleryImages";
import Footer from "../layout/Footer/Footer";
import Header from "../layout/Header/Header";
import PageHeader from "../layout/PageHeader/PageHeader";

const Galleri = () => {
  return (
    <div>
      <Header />
      <PageHeader name="Galleri" />
      <GalleryImages />
      <Footer />
    </div>
  );
};

export default Galleri;
