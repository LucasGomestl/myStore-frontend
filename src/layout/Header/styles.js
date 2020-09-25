import styled from "styled-components";
import { mobile, tablet } from "../../App/globalStyle";

export const MainBar = styled.div`
  display: grid;
  grid-template-columns: max-content 1fr max-content;
  grid-template-rows: max-content max-content;
  grid-template-areas:
    "logo search-input cart-icon"
    "search-suggestions search-suggestions search-suggestions";
  align-items: center;
  justify-items: center;
  margin: 0 8vw;
  position: relative;
`;

export const Overlay = styled.div`
  display: none;
  position: fixed;
  background: rgba(0, 0, 0, 0.7);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 2;
`;

export const MenuContainer = styled.div`
  margin-top: 26px;
`;

export const InputContainer = styled.div`
  grid-area: search-input;
  display: grid;
  grid-template-columns: minmax(300px, 923px) max-content;
  align-items: center;
  justify-content: center;
  margin-bottom: 3px;

  svg {
    margin-left: -51px;
    font-size: 30px;
    color: #bdbdbd;
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 60px;
  border-radius: 5px;
  font-size: 23px;
  padding-left: 15px;
  color: grey;
  outline: none;
  border: none;
  box-sizing: border-box;
`;

export const IconsContainer = styled.div`
  grid-area: cart-icon;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 16px;
  position: relative;
  svg {
    font-size: 30px;
    margin-left: 20px;
  }
`;

export const CartItemsQuantity = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  border-radius: 50%;
  background-color: red;
  width: 22px;
  height: 22px;
  position: absolute;
  right: -5px;
  top: 8px;
  color: white;
  font-size: 13px;
`;

export const StyledHeader = styled.header`
  display: grid;
  grid-template-columns: 1fr;
  justify-content: space-between;
  position: fixed;
  top: 0px;
  width: 100%;
  padding: 25px 0 0 0 !important;
  background: var(--primary-color);
  color: white;
  z-index: 2;
  @media (max-width: ${tablet}) {
    ${IconsContainer} svg {
      font-size: 23px;
    }

    ${SearchInput} {
      height: 50px;
    }

    ${MenuContainer} li {
      font-size: 16px;
    }
  }

  @media (max-width: ${mobile}) {
    ${MenuContainer} {
      display: none;
    }
    #menu-icon {
      display: block;
    }
    ${MainBar} {
      grid-template-columns: repeat(3, min-content);
      grid-template-rows: repeat(2, min-content);
      grid-template-areas:
        "menu-icon        logo       cart-icon"
        "search-input search-input search-input";
      justify-items: center;
      justify-content: space-between;
      margin: 0px;
    }

    ${IconsContainer} {
      width: 23px;
      svg {
        margin: 0px;
      }
    }

    ${SearchInput} {
      margin-top: 10px;
      border-radius: 0px;
      border-bottom: solid 0.5px lightgrey;
    }

    ${InputContainer} {
      svg {
        margin-top: 8px;
        border-left: solid 0.5px lightgrey;
        padding-left: 10px;
        height: 50px;
      }
    }
  }
`;
