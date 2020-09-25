import styled from "styled-components";
import { mobile } from "../../App/globalStyle";

export const StyledToggleButton = styled.div`
  grid-area: menu-icon;
  display: none;
  cursor: pointer;
  font-size: 23px;
  @media (max-width: ${mobile}) {
    display: block;
  }
`;
