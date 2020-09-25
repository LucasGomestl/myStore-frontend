import React, { useEffect, useState } from "react";
import axios from "axios";

import { useParams } from "react-router-dom";

import { Main, Title, ProductsContainer } from "./styles";
import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
import ProductCard from "../../components/ProductCard";

const Products = () => {
  const [products, setProducts] = useState([]);
  const { category } = useParams();

  async function getProducts(category) {
    const request = await axios.get(
      "http://localhost:9001/products/category/" + category
    );
    setProducts(request.data);
  }

  useEffect(() => {
    getProducts(category);
  }, [category]);
  return (
    <>
      <Header />
      <Main>
        <Title>{products[0] ? products[0].category : ""}</Title>

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

export default Products;
