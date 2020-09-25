import * as types from "./actionTypes";
export const INITIAL_STATE = {
  listsByCategory: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.GET_PRODUCT_LIST_BY_CATEGORY:
      return { ...state, listsByCategory: action.payload };
    default:
      return { ...state };
  }
};
