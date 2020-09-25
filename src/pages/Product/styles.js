import styled from "styled-components";

export const Main = styled.main`
  margin: 180px 0;
`;

export const StyledProduct = styled.section`
  display: grid;
  grid-template-columns: minmax(300px, 600px) minmax(200px, 330px);
  grid-gap: 5vw;
  justify-content: center;
  justify-items: center;
  align-items: center;
  margin-left: 40px;
  margin-bottom: 80px;
  @media (max-width: 890px) {
    grid-template-columns: 1fr;
    margin-left: 0px;
  }
`;

export const ProductImage = styled.img`
  max-height: 600px;
`;

export const Title = styled.h2`
  font-size: 18px;
  margin-bottom: 20px;
  text-transform: capitalize;
`;

export const PricesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100px;
  justify-self: flex-start;
`;
export const OldPrice = styled.span`
  font-size: 16px;
  text-decoration: line-through;
`;

export const Price = styled.span`
  font-size: 20px;
  margin-top: 10px;
`;

export const Description = styled.span`
  color: grey;
`;
export const ProductInfo = styled.div`
  width: 100%;
  height: max-content;
  padding-top: 20px;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  margin-top: 15px;
  margin-bottom: 25px;
  padding: 10px;
  background-color: #43c5e9;
  border: 0px;
  color: white;
  font-size: 15px;
  border-radius: 5px;
  cursor: pointer;
  > span {
    margin: 10px;
  }
  &:focus {
    outline: 0;
  }
`;
