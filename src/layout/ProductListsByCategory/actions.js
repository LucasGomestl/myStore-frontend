import * as types from "./actionTypes";

import axios from "axios";

export async function getProductListsByCategory(categories) {
  const request = categories.map(async (category) => {
    return await axios
      .get("http://localhost:9001/products/category/" + category + "")
      .then((res, err) => res.data);
  });

  const lists = await Promise.all(request).then((promise) => promise);

  return {
    type: types.GET_PRODUCT_LIST_BY_CATEGORY,
    payload: lists,
  };
}
