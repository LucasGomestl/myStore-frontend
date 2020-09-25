import React, { useEffect } from "react";
import { useDispatch, useSelector, connect } from "react-redux";
import ProductList from "../../components/ProductList";
import { StyledProductLists, ListContainer, Title } from "./styles";

import { getProductListsByCategory } from "./actions";

const ProductLists = () => {
  const dispatch = useDispatch();

  const lists = useSelector((state) => state.productList.listsByCategory) || [];

  const categories = React.useMemo(
    () => [
      "men's clothing",
      "women's clothing",
      "men's shoes",
      "women's shoes",
      "men's watches",
      "women's watches",
    ],
    []
  );

  useEffect(() => {
    dispatch(getProductListsByCategory(categories));
  }, [dispatch, categories]);

  return (
    <>
      <StyledProductLists>
        {lists.map((list, index) => (
          <ListContainer key={index} data-testid="listContainer">
            <Title>{categories[index]}</Title>
            <ProductList list={list} />
          </ListContainer>
        ))}
      </StyledProductLists>
    </>
  );
};

const mapStateToProps = (state) => {
  return { listsByCategory: state.productList };
};

export default connect(mapStateToProps)(ProductLists);
