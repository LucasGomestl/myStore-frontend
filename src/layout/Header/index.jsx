import React, { useState, useEffect } from "react";
import { useSelector, connect } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";

import {
  StyledHeader,
  IconsContainer,
  CartItemsQuantity,
  InputContainer,
  SearchInput,
  MainBar,
  MenuContainer,
  Overlay,
} from "./styles";

import Logo from "../../components/Logo";
import Icon from "../../components/Icon";
import Menu from "../../components/Menu";
import ResponsibleMenu from "../../components/ResponsibleMenu";
import ToggleButton from "../../components/ToggleButton";
import SearchSuggestions from "./SearchSuggestions";

const Header = () => {
  const [suggestions, setSuggestions] = useState([]);
  const cart = useSelector((state) => state.cart.cart) || [];

  async function searchProduct(product = "") {
    if (product.trim() !== "") {
      const request = await axios.get(
        "http://localhost:9001/products/name/" + product
      );
      setSuggestions(request.data);
    }
  }

  const displaySuggestions = (product) => {
    const suggestionsElement = document.querySelector(".suggestions");
    if (product.trim() !== "") {
      suggestionsElement.classList.add("show-suggestions");
    } else {
      suggestionsElement.classList.remove("show-suggestions");
    }
  };

  useEffect(() => {
    const suggestionsElement = document.querySelector(".suggestions");
    document.addEventListener("click", function (e) {
      suggestionsElement.classList.remove("show-suggestions");
    });
  });

  return (
    <>
      <StyledHeader>
        <MainBar>
          <Link to="/">
            <Logo />
          </Link>

          <ToggleButton />

          <InputContainer>
            <SearchInput
              type="text"
              placeholder="What are you looking for?"
              onChange={(e) => [
                searchProduct(e.target.value),
                displaySuggestions(e.target.value),
              ]}
            />
            <Icon icon="search" color="grey" />
          </InputContainer>

          <SearchSuggestions productSuggestions={suggestions} />

          <IconsContainer>
            <Icon icon="shopping-cart" link="/cart" color="white" />
            {cart[0] ? (
              <Link to="/cart">
                <CartItemsQuantity>
                  <div data-testid="cartItemsQuantity">
                    {cart.reduce((count, current) => {
                      return count + current.quantity;
                    }, 0)}
                  </div>
                </CartItemsQuantity>
              </Link>
            ) : (
              <div></div>
            )}
          </IconsContainer>
        </MainBar>

        <MenuContainer>
          <Menu />
        </MenuContainer>

        <Overlay className="overlay">
          <ResponsibleMenu />
        </Overlay>
      </StyledHeader>
    </>
  );
};

const mapStateToProps = (state) => {
  return { cart: state.cart };
};
export default connect(mapStateToProps)(Header);
