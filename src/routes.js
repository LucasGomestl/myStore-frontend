import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Product from "./pages/Product";
import Products from "./pages/Products";
import Offers from "./pages/Offers";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/cart" component={Cart} />
        <Route path="/product/:id" component={Product} />
        <Route path="/products/:category" component={Products} />
        <Route path="/offers/:category" component={Offers} />
        <Route path="/offers/" component={Offers} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
