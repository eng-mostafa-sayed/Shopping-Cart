import React from "react";
import "../../css/CheckoutForm/Checkout.css";
import Input from "../Input/Input";
import Zoom from "react-reveal/Zoom";

import { connect } from "react-redux";
import { getCart } from "../../store/actions/cart";

import { words } from "../../words";
import PaymentButton from "../paymentButton/paymentButton";

function Checkout(props) {
  return (
    <>
      {props.showForm && (
        <div className="checkout-form">
          <span className="close-icon" onClick={() => props.setShowForm(false)}>
            {" "}
            &times;{" "}
          </span>
          <Zoom left>
            <form onSubmit={props.submitOrder}>
              <Input
                label="Name"
                type="text"
                name="name"
                onChange={props.handleChange}
              />
              <Input
                label="Email"
                type="email"
                onChange={props.handleChange}
                name="email"
              />
              <Input
                label="phone"
                type="txt"
                onChange={props.handleChange}
                name="phone"
              />
              <Input
                label="address"
                type="txt"
                onChange={props.handleChange}
                name="address"
              />{" "}
              {props.value.email &&
                props.value.name &&
                props.value.phone &&
                props.value.address && (
                  <div>
                    <PaymentButton />
                  </div>
                )}
            </form>
          </Zoom>
        </div>
      )}
    </>
  );
}

export default connect(
  (state) => {
    return {
      products: state.cart.getCart,
    };
  },
  { getCart }
)(Checkout);
