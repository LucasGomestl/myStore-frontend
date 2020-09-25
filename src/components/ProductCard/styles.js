import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledProductCard = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: relative;
  max-width: 100%;
  height: 408px;
  border: 1px solid white;
  padding: 1px;
  border-radius: 5px;
  transition: all 0.5s;
  margin: 0 10px;
  background-color: white;
  font-family: roboto;
`;

export const StyledLink = styled(Link)`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
`;

export const ProductImage = styled.img`
  max-width: 100%;
  max-height: 230px;
  justify-self: center;
  margin-bottom: 20px;
`;

export const Title = styled.h3`
  font-size: 16px;
  margin-bottom: 10px;
  font-weight: 400;
  font-size: 17px;
  color: #767474;
  text-transform: capitalize;
`;

export const DiscountLabel = styled.div`
  width: 43px;
  height: 43px;
  position: absolute;
  right: 15px;
  top: 0px;
  background-color: #099f3c;
  color: white;
  font-size: 15px;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  span {
    font-size: 10px;
  }
`;

export const PricesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100px;
  justify-self: flex-start;
`;

export const Price = styled.span`
  margin-bottom: 15px;
  font-weight: bold;
  font-size: 18px;
  justify-self: flex-start;
`;

export const OldPrice = styled.span`
  font-size: 14px;
  font-weight: bold;
  text-decoration: line-through;
`;

export const AddToCartButton = styled.button`
  background-color: var(--secondary-color);
  justify-self: center;
  width: 100%;
  min-height: 45px;
  border: 0px;
  border-radius: 5px;
  padding: 10px;
  color: white;
  transition: background-color 0.3s;
  font-size: 15px;
  cursor: pointer;
  &:hover {
    background-color: var(--light-secondary-color);
  }
  &:focus {
    outline: 0;
  }
`;
