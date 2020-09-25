import React from "react";
import Header from "../../layout/Header";
import Footer from "../../layout/Footer";

import CartItemsContainer from "./CartItemsContainer";
import OrderSummary from "./OrderSummary";
import { Main } from "./styles";

const Cart = () => {
  return (
    <>
      <Header />
      <Main>
        <CartItemsContainer />
        <OrderSummary />
      </Main>
      <Footer />
    </>
  );
};

export default Cart;
