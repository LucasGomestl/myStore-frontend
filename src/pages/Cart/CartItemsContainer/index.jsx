import React from "react";
import CartItems from "./CartItems";
import { StyledCartItemsContainer, Title } from "./styles";

const CartItemsContainer = () => {
  return (
    <StyledCartItemsContainer>
      <Title>My Cart</Title>
      <CartItems />
    </StyledCartItemsContainer>
  );
};

export default CartItemsContainer;
