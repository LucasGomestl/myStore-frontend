import React, { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector, connect } from "react-redux";
import axios from "axios";

import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
import ProductList from "../../components/ProductList";
import Loading from "../../components/Loading";
import Icon from "../../components/Icon";

import { formatter, discountCalc } from "../../utils";

import { addProductToCart } from "../Cart/actions";
import { getProductListsByCategory } from "../../layout/ProductListsByCategory/actions";

import {
  Main,
  StyledProduct,
  ProductImage,
  Title,
  ProductInfo,
  Description,
  PricesContainer,
  OldPrice,
  Price,
  Button,
} from "./styles";

const Product = () => {
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart.cart) || [];
  const lists = useSelector((state) => state.productList.listsByCategory) || [];

  const { id } = useParams();

  async function getProduct(id) {
    const request = await axios.get("http://localhost:9001/products/" + id);
    setProduct(request.data);
  }

  const getRecommendedList = useCallback(() => {
    dispatch(getProductListsByCategory([product.category]));
  }, [dispatch, product.category]);

  useEffect(() => {
    getProduct(id);
    getRecommendedList();
  }, [id, getRecommendedList]);

  setTimeout(function () {
    setIsLoading(false);
  }, 1300);
  return (
    <>
      <Header />
      <Main>
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <StyledProduct>
              <ProductImage src={product.image} />
              <ProductInfo>
                <Title data-testid="productTitle">{product.title}</Title>
                {product.discount > 0 ? (
                  <>
                    <PricesContainer>
                      <OldPrice>{formatter.format(product.price)}</OldPrice>
                      <Price>
                        {formatter.format(
                          discountCalc(product.price, product.discount)
                        )}
                      </Price>
                    </PricesContainer>
                  </>
                ) : (
                  <Price>{formatter.format(product.price)}</Price>
                )}

                <Button
                  icon="shopping-cart"
                  onClick={() => dispatch(addProductToCart(product, cart))}
                >
                  <span>Add to Cart</span>
                  <Icon icon="shopping-cart" />
                </Button>

                <Description>{product.description}</Description>
              </ProductInfo>
            </StyledProduct>
            <Title>Recommended</Title>
            {lists.map((list, index) => (
              <ProductList list={list} key={index} filter={product._id} />
            ))}
          </>
        )}
      </Main>
      <Footer />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
    listsByCategory: state.productList,
  };
};
export default connect(mapStateToProps)(Product);
