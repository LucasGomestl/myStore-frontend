import React from "react";
import {
  Suggestions,
  StyledSearchSuggestions,
  SuggestionLink,
  SuggestionItem,
} from "./styles";

const SearchSuggestions = ({ productSuggestions }) => {
  return (
    <StyledSearchSuggestions className="suggestions">
      <Suggestions>
        {productSuggestions.map((productSuggestion) => (
          <SuggestionItem key={productSuggestion._id}>
            <SuggestionLink to={"/product/" + productSuggestion._id}>
              {productSuggestion.title}
            </SuggestionLink>
          </SuggestionItem>
        ))}
      </Suggestions>
    </StyledSearchSuggestions>
  );
};

export default SearchSuggestions;
