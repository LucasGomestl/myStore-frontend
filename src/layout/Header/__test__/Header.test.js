import React from "react";
import { BrowserRouter } from "react-router-dom";
import { render, getNodeText } from "../../../test-utils";
import Header from "../index";

describe("Header component tests", () => {
  it("Should render the Header with deafult initial state", () => {
    const { getByTestId, queryAllByTestId } = render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    expect(getByTestId("title")).toBeInTheDocument();
    expect(queryAllByTestId("cartItemsQuantity")).toEqual([]);
  });

  it("Should render Header with custom intial state", () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
      {
        initialState: {
          cart: {
            cart: [
              { id: 1, quantity: 2 },
              { id: 2, quantity: 3 },
            ],
          },
        },
      }
    );
    const text = getNodeText(getByTestId("cartItemsQuantity"));
    expect(text).toEqual("5");
  });
});
