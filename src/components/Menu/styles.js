import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledMenu = styled.nav`
  display: flex;
  height: 54px;
  background-color: #f3f3f3;
  padding: 0 15vw;
`;

export const MenuItems = styled.ul`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 0 3vw;
  a {
    color: grey;
  }
`;

export const StyledLink = styled(Link)`
  width: 100%;
`;

export const MenuItem = styled.li`
  &:not(:last-child) {
    margin-right: 20px;
  }
`;
