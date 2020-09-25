import styled from "styled-components";

export const StyledItem = styled.article`
  display: grid;
  grid-template-columns: minmax(380px, 550px) 1fr;
  margin-bottom: 20px;
  position: relative;
  &::after {
    content: "";
    width: 95%;
    border: 1px solid lightgrey;
    position: absolute;
    bottom: 0px;
    left: 2.5%;
  }
  @media (max-width: 860px) {
    grid-template-columns: 1fr;
  }
`;

export const ProductInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 550px;
  height: 180px;
  margin-right: 15px;
  > div {
    overflow: hidden;

    > div {
      display: flex;
      flex-direction: column;

      > span {
        margin-bottom: 10px;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        font-size: 14px;
      }
    }
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  min-width: 120px;
  max-width: 120px;
  height: 130px;
  margin-right: 25px;
`;

export const ProductImage = styled.img`
  object-fit: contain;
`;

export const ProductTitle = styled.h2`
  font-size: 13px;
  margin-bottom: 20px;
  text-transform: capitalize;
`;

export const ProductDescription = styled.span`
  color: grey;
`;

export const ProductActions = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 20px;
`;
export const Price = styled.div`
  font-size: 15px;
  margin-bottom: 5px;
  font-weight: bold;
`;

export const MultipliedPrice = styled.div`
  width: 80px;
  text-align: center;
`;

export const RemoveFromCart = styled.div`
  cursor: pointer;
`;
