import React from "react";
import { useDispatch, useSelector, connect } from "react-redux";
import {
  StyledProductCard,
  ProductImage,
  AddToCartButton,
  Title,
  Price,
  OldPrice,
  PricesContainer,
  StyledLink,
  DiscountLabel,
} from "./styles";

import { addProductToCart } from "../../pages/Cart/actions";
import { formatter, discountCalc } from "../../utils";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart) || [];
  return (
    <StyledProductCard>
      <StyledLink to={"/product/" + product._id}>
        {product.discount > 0 ? (
          <DiscountLabel>
            {product.discount}%<span>OFF</span>
          </DiscountLabel>
        ) : (
          ""
        )}
        <ProductImage src={product.image} alt="product" />
        <Title>{product.title}</Title>
        {product.discount > 0 ? (
          <>
            <PricesContainer>
              <Price>
                {formatter.format(
                  discountCalc(product.price, product.discount)
                )}
              </Price>
              <OldPrice>{formatter.format(product.price)}</OldPrice>
            </PricesContainer>
          </>
        ) : (
          <Price>{formatter.format(product.price)}</Price>
        )}
      </StyledLink>
      <AddToCartButton
        onClick={() => dispatch(addProductToCart(product, cart))}
      >
        Add To Cart
      </AddToCartButton>
    </StyledProductCard>
  );
};

const mapStateToProps = (state) => {
  return { cart: state.cart };
};
export default connect(mapStateToProps)(ProductCard);
