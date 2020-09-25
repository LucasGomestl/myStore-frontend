import React from "react";

import {
  StyledResponsibleMenu,
  MenuHeader,
  MenuItems,
  MenuItem,
  StyledLink,
} from "./styles";

import ToggleButton from "../ToggleButton";

import Logo from "../Logo";

const ResponsibleMenu = () => {
  const closeMenu = () => {
    const overlay = document.querySelector(".overlay");
    const menu = document.querySelector(".menu");

    menu.classList.remove("open");
    overlay.classList.remove("open");
  };
  return (
    <StyledResponsibleMenu className="menu">
      <MenuHeader>
        <Logo />
        <ToggleButton />
      </MenuHeader>
      <MenuItems onClick={closeMenu}>
        <MenuItem>
          <StyledLink to="/products/men's clothing">Men's Clothing</StyledLink>
        </MenuItem>
        <MenuItem>
          <StyledLink to="/products/men's shoes">Men's Shoes</StyledLink>
        </MenuItem>
        <MenuItem>
          <StyledLink to="/products/men's watches">Men's Watches</StyledLink>
        </MenuItem>
        <MenuItem>
          <StyledLink to="/products/women's clothing">
            Women's Clothing
          </StyledLink>
        </MenuItem>
        <MenuItem>
          <StyledLink to="/products/women's shoes">Women's Shoes</StyledLink>
        </MenuItem>
        <MenuItem>
          <StyledLink to="/products/women's watches">
            Women's Watches
          </StyledLink>
        </MenuItem>
      </MenuItems>
    </StyledResponsibleMenu>
  );
};

export default ResponsibleMenu;
