import styled from "styled-components";

export const Main = styled.main`
  grid-template-rows: max-content max-content;
  margin: 185px 0;
`;

export const Title = styled.h2`
  margin-bottom: 20px;
  text-transform: capitalize;
  grid-row: 1;
  font-size: 24px;
`;

export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 365px));
  grid-gap: 20px;
  grid-row-gap: 65px;
`;
