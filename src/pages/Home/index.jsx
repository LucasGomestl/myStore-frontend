import React from "react";
import Header from "../../layout/Header";
import ProductListsByCategory from "../../layout/ProductListsByCategory";
import Banner from "../../layout/Banner";
import Footer from "../../layout/Footer";

import { Main } from "./styles";
const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <Main>
        <ProductListsByCategory />
      </Main>
      <Footer />
    </>
  );
};

export default Home;
