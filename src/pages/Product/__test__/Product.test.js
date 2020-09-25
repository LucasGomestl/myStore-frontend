import React from "react";
import { Router, Route } from "react-router-dom";
import axios from "axios";
import Product from "../index";

import { render, act } from "../../../test-utils";
import { createMemoryHistory } from "history";

describe("Product Tests", () => {
  const history = createMemoryHistory({ initialEntries: ["/product/1"] });

  const getProduct = jest
    .spyOn(axios, "get")
    .mockResolvedValueOnce({ data: { id: 1, category: "men clothing" } });
  const getLists = jest.spyOn(axios, "get");

  it("Should render Product", async () => {
    await act(async () => {
      render(
        <Router history={history}>
          <Route path="/product/:id">
            <Product />
          </Route>
        </Router>
      );
    });
    expect(getProduct).toBeCalledWith("https://fakestoreapi.com/products/1");
    expect(getLists).toBeCalledWith(
      "https://fakestoreapi.com/products/category/men clothing"
    );

    getProduct.mockRestore();
    getLists.mockRestore();
  });
});
