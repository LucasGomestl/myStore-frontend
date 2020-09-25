import React from "react";

import { StyledMenu, MenuItems, MenuItem, StyledLink } from "./styles";

const Menu = () => {
  return (
    <>
      <StyledMenu data-testid="menu">
        <MenuItems>
          <MenuItem>
            <StyledLink to="/products/men's clothing">
              Men's Clothing
            </StyledLink>
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
      </StyledMenu>
    </>
  );
};

export default Menu;
