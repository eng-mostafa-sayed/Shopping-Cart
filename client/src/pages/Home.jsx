import React, { Fragment } from "react";
import Products from "../components/Products/Products";
import Filter from "../components/Filter/Filter";
import Cart from "../components/Cart/Cart";
import "../css/Home.css";
const Home = () => {
  return (
    <Fragment>
      <div className="wrapper">
        <Filter />
        <Products />
      </div>
      <Cart />
    </Fragment>
  );
};

export default Home;
