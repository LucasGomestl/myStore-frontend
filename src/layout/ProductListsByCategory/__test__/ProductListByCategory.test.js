import React from "react";
import { render, cleanup } from "../../../test-utils";
import ProductListsByCategory from "../index";
import * as types from "../actionTypes";
import * as actions from "../actions";

import promise from "redux-promise";
import configureStore from "redux-mock-store";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";

afterEach(cleanup);

describe("ProdctListsByCategory Actions", () => {
  beforeEach(() => store.clearActions);
  const middleweares = [promise];
  const mockStore = configureStore(middleweares);
  const mock = new MockAdapter(axios);
  const store = mockStore({});

  it("Should create an action to get Product Lists", () => {
    const categories = ["women clothing", "men clothing", "electronics"];
    categories.map((category) =>
      mock
        .onGet("https://fakestoreapi.com/products/category/" + category + "")
        .reply(200, [{ category }])
    );

    store.dispatch(actions.getProductListsByCategory(categories)).then(() => {
      const expectedAction = [
        {
          type: types.GET_PRODUCT_LIST_BY_CATEGORY,
          payload: [
            [{ category: "women clothing" }],
            [{ category: "men clothing" }],
            [{ category: "electronics" }],
          ],
        },
      ];
      expect(store.getActions()).toEqual(expectedAction);
    });
  });
});

describe("ProductListByCategory component Tests", () => {
  it("Should render ProductListsByCategory with default initial state", () => {
    const { queryByTestId } = render(<ProductListsByCategory />);
    expect(queryByTestId("listContainer")).not.toBeInTheDocument();
  });
  it("Should render ProductListsByCategory with custom initial state", () => {
    const { queryByTestId } = render(<ProductListsByCategory />, {
      initialState: {
        productList: { listsByCategory: [[[{ id: 1, category: "test" }]]] },
      },
    });
    expect(queryByTestId("listContainer")).toBeInTheDocument();
  });
});
