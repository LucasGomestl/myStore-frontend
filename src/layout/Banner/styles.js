import styled from "styled-components";
import { mobile } from "../../App/globalStyle";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
  padding: 0px !important;
`;
export const StyledBanner = styled.img`
  width: 100%;
  height: 100%;
  margin-top: 143px;
  background-attachment: fixed;
  @media (max-width: ${mobile}) {
    margin-top: 102px;
  }
`;
