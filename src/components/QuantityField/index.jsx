import React from "react";
import { useDispatch } from "react-redux";
import { QuantityContainer, Quantity, QuantityNav, Button } from "./styles";
import {
  addProductToCart,
  removeProductFromCart,
} from "../../pages/Cart/actions";

const QuantityField = ({ product, quantity, cart }) => {
  const dispatch = useDispatch();

  return (
    <QuantityContainer>
      <Quantity
        type="number"
        value={quantity}
        onChange={(e) => {
          if (e.target.value > -1 && e.target.value < 100)
            dispatch(addProductToCart(product, cart, e.target.value));
        }}
      />
      <QuantityNav>
        <Button
          onClick={() => {
            if (quantity < 99) dispatch(addProductToCart(product, cart));
          }}
        >
          +
        </Button>
        <Button
          onClick={() => {
            if (quantity > -1)
              dispatch(removeProductFromCart(product._id, cart));
          }}
        >
          -
        </Button>
      </QuantityNav>
    </QuantityContainer>
  );
};

export default QuantityField;
