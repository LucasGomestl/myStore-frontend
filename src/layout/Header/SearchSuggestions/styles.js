import styled from "styled-components";
import { Link } from "react-router-dom";
import { mobile, tablet } from "../../../App/globalStyle";

export const StyledSearchSuggestions = styled.div`
  position: absolute;
  top: 62px;
  display: none;
  grid-template-columns: minmax(300px, 923px);
  grid-area: "search-suggestions";
  grid-column-start: 2;
  grid-column-end: 2;
  justify-content: center;
  align-content: start;
  width: 100%;
  @media(max-width: ${tablet}){
    font-size: 13px
  }
  @media (max-width: ${mobile}) {
    top: 87px;
    grid-column: 1/-1;
  }
`;

export const Suggestions = styled.ul`
  display: flex;
  flex-direction: column;
  background-color: white;
  width: 100%;
  height: 100%;
  align-items: center;
  a {
    color: #575757;
  }
`;

export const SuggestionLink = styled(Link)`
  width: 100%;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const SuggestionItem = styled.ul`
  display: flex;
  padding-left: 15px;
  border-bottom: 1px solid #575757;
  height: 55px;
  width: 100%;
  align-items: center;
  box-sizing: border-box;
  text-transform: capitalize;
  cursor: pointer;
`;
