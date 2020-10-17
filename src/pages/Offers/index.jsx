import React, { useState, useEffect } from "react";
import axios from "axios";

import { useParams } from "react-router-dom";

import { Main, Title, ProductsContainer } from "./style";
import {API_URL} from '../../config'

import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
import ProductCard from "../../components/ProductCard";

const Offers = () => {
  const [products, setProducts] = useState([]);
  const { category } = useParams();

  async function getProducts(category) {
    let request;
    if (category) {
      request = await axios.get(API_URL + "/offers/" + category);
    } else {
      request = await axios.get(API_URL + "/offers/");
    }
    setProducts(request.data);
  }

  useEffect(() => {
    getProducts(category);
  }, [category]);
  return (
    <>
      <Header />
      <Main>
        <Title>
          {products[0] && category
            ? products[0].category + " Offers"
            : "Offers"}
        </Title>

        <ProductsContainer>
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </ProductsContainer>
      </Main>
      <Footer />
    </>
  );
};

export default Offers;
