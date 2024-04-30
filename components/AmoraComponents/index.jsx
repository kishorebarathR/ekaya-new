import React from "react";

import Header from "../Shared/Header";
import Footer from "../Shared/Footer";
import AmoraBanner from "../AmoraComponents/AmoraBanner"
import AmoraPage from "../AmoraComponents/AmoraPage"
import Highlights from "../AmoraComponents/Highlights"
import Form from "../HomeComponents/Form";
// import Carousel from "../AmoraComponents/Carousel"

const index = () => {
  return (
    <>
      <Header />
      <AmoraBanner />
      <AmoraPage/>
      {/* <Carousel/> */}
      <Highlights/>
      <Form />
      <Footer />
    </>
  );
};

export default index;
