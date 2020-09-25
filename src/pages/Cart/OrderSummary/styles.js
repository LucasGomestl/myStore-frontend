import styled from "styled-components";

export const StyledOrderSummary = styled.div`
  height: 150px;
  width: 100%;
  display: grid;
  align-content: space-between;
`;

export const Title = styled.h2`
  font-size: 17px;
`;

export const TotalPriceContainer = styled.div`
  & > div {
    display: flex;
    font-size: 20px;
    justify-content: space-between;

    margin-bottom: 20px;
  }
`;

export const CheckoutButton = styled.button`
  margin: 0 auto;
  background-color: #43c5e9;
  border-radius: 5px;
  color: white;
  border: 0px;
  padding: 8px;
  font-size: 20px;
  width: 100%;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;
