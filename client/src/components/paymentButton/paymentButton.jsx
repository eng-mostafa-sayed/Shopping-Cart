import axios from "axios";
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getCart } from "../../store/actions/cart";

const PaymentButton = (props) => {
  useEffect(() => {
    props.getCart();
  }, []);
  const handleCheckOut = () => {
    console.log(props.cartItems);
  };
  return (
    <>
      <button onClick={() => handleCheckOut()}> Checkout</button>
    </>
  );
};

export default connect(
  (state) => {
    return {
      cartItems: state.cart.cartItems,
    };
  },
  { getCart }
)(PaymentButton);
