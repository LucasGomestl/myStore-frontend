import React from "react";
import ProductCard from "../ProductCard";
import Carousel from "react-multi-carousel";
import { StyledProductList } from "./styles";
import "react-multi-carousel/lib/styles.css";

const ProductList = ({ list, filter }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 600 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 1,
    },
  };

  return (
    <StyledProductList>
      <Carousel
        responsive={responsive}
        infinite
        sliderClass="carousel"
        itemClass="item"
      >
        {list.map((product, index) =>
          product._id !== filter ? (
            <ProductCard key={index} product={product} />
          ) : null
        )}
      </Carousel>
    </StyledProductList>
  );
};

export default ProductList;
