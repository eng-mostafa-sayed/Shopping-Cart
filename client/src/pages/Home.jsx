import React, { Fragment } from "react";
import Products from "../components/Products/Products";
import Filter from "../components/Filter/Filter";
import Cart from "../components/Cart/Cart";

const Home = () => {
  return (
    <Fragment>
      <div className="wrapper">
        <Products />
        <Filter />
      </div>
      <Cart />
    </Fragment>
  );
};

export default Home;
