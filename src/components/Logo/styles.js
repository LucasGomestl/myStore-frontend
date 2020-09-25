import styled from "styled-components";

export const StyledLogo = styled.h1`
  grid-area: logo;
  font-size: 36px;
  color: white;
  margin-right: 15px;
  span {
    color: var(--secondary-color);
    margin-left: -5px;
  }

  @media (max-width: 1000px) {
    font-size: 23px;
  }
`;
