import React from "react";
import { BrowserRouter } from "react-router-dom";
import Cart from "../index";
import CartItems from "../CartItemsContainer/CartItems";
import OrderSummary from "../OrderSummary";
import { render, cleanup, getNodeText } from "../../../test-utils";
import * as types from "../actionTypes";
import * as actions from "../actions";

afterEach(cleanup);
describe("Cart actions tests", () => {
  it("Should create an action to add a produnct on cart", () => {
    const cart = [];
    const product = { id: 1, quantity: 0 };
    const expectedAction = {
      type: types.UPDATE_CART,
      payload: [{ id: 1, quantity: 1 }],
    };
    expect(actions.addProductToCart(product, cart)).toEqual(expectedAction);
  });

  it("Should create an action to remove a produnct from cart", () => {
    const product = { id: 1, quantity: 1 };
    const cart = [product];
    const expectedAction = {
      type: types.UPDATE_CART,
      payload: [],
    };
    expect(actions.removeProductFromCart(product.id, cart)).toEqual(
      expectedAction
    );
  });

  it("Should should update the product quantity on cart", () => {
    const product = { id: 1, quantity: 1 };
    const cart = [product];
    const quantity = 3;

    const expectedAction = {
      type: types.UPDATE_CART,
      payload: [{ id: 1, quantity: 3 }],
    };

    expect(actions.addProductToCart(product, cart, quantity)).toEqual(
      expectedAction
    );
  });
});

describe("Cart component tests", () => {
  it("Should render cart", () => {
    const { container } = render(
      <BrowserRouter>
        <Cart />
      </BrowserRouter>
    );

    expect(container.firstChild).toBeInTheDocument();
  });
});

describe("CartItemsContainer component tests", () => {
  it("Should render CartItems with default initial state", () => {
    const { queryAllByTestId } = render(
      <BrowserRouter>
        <CartItems />
      </BrowserRouter>
    );
    expect(queryAllByTestId("cartItem")).toHaveLength(0);
  });

  it("Should render CartItems with custom initial state", () => {
    const { queryAllByTestId } = render(
      <BrowserRouter>
        <CartItems />
      </BrowserRouter>,
      {
        initialState: {
          cart: { cart: [{ id: 1 }, { id: 2 }] },
        },
      }
    );
    expect(queryAllByTestId("cartItem")).toHaveLength(2);
  });
});

describe("OrderSummary component tests", () => {
  it("Should render OrderSummary with default initial state", () => {
    const { getByTestId } = render(<OrderSummary />);
    const price = getNodeText(getByTestId("totalPrice"));
    expect(price).toEqual("$0.00");
  });

  it("Should render OrderSummary with default initial state", () => {
    const { getByTestId } = render(<OrderSummary />, {
      initialState: {
        cart: {
          cart: [
            { id: 1, price: 25, quantity: 1 },
            { id: 2, price: 5, quantity: 2 },
          ],
        },
      },
    });
    const price = getNodeText(getByTestId("totalPrice"));
    expect(price).toEqual("$35.00");
  });
});
