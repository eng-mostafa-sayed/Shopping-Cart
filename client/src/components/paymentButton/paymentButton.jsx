import axios from "axios";
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getCart } from "../../store/actions/cart";
import { useNavigate } from "react-router-dom";

const PaymentButton = (props) => {
  let navigate = useNavigate();
  useEffect(() => {
    props.getCart();
  }, []);

  return (
    <>
      <button> Checkout & pay</button>
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
