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
  const handleCheckOut = () => {
    console.log(props.cartItems);
    const cartItems = props.cartItems;

    // axios
    //   .post("http://localhost:5000/api/strip/create-checkout-session", {
    //     cartItems,
    //   })
    //   .then((response) => {
    //     if (response.data.url) {
    //       console.log(response.data.url);
    //       window.location.href = response.data.url;
    //     }
    //   })
    //   .catch((error) => {
    //     console.log(error.message);
    //   });
  };
  return (
    <>
      <button onClick={() => handleCheckOut()}> Checkout & pay</button>
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
