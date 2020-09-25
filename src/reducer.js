import { combineReducers } from "redux";
import ProductListReducer from "./layout/ProductListsByCategory/reducer";
import CartReducer from "./pages/Cart/reducer";
const rootReducer = combineReducers({
  productList: ProductListReducer,
  cart: CartReducer,
});

export default rootReducer;
