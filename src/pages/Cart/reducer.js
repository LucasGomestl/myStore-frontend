import * as types from "./actionTypes";

export const INITIAL_STATE = {
  cart: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.UPDATE_CART:
      return { ...state, cart: action.payload };
    default:
      return { ...state };
  }
};
