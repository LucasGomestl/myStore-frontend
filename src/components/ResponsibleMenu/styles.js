import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledResponsibleMenu = styled.nav`
  position: fixed;
  display: inline-flex;
  flex-direction: column;
  left: -265px;
  top: 0px;
  width: 265px;
  height: 1000px;
  z-index: 3;
  background-color: white;
  transition: left 0.5s;
`;

export const StyledLink = styled(Link)`
  width: 100%;
`;

export const MenuHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 30px;
  padding-left: 20px;
  height: 62px;
  background: #1e1d1f;
  color: white;
  svg {
    font-size: 25px;
    cursor: pointer;
  }
`;

export const MenuItems = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  a {
    color: #575757;
  }
`;

export const MenuItem = styled.li`
  display: flex;
  border-bottom: 1px solid #575757;
  height: 55px;
  width: 100%;
  padding-left: 20px;
  align-items: center;
  box-sizing: border-box;
`;
