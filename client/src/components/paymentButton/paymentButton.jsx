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
    const list_data = [
      cartItems.map(
        (e) =>
          `{price_data:{currency:"usd",product_data:{name:/'${e.title}/'},unit_amount:${e.price}}},quantity:${e.qty}`
      ),
    ];
    console.log(list_data);
    const res = axios
      .post("http://localhost:5000/api/strip/create-checkout-session", {
        list_data,
      })
      .then((response) => {
        if (response.data.url) {
          console.log(response.data.url);
          window.location.href = response.data.url;
        }
      });
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
