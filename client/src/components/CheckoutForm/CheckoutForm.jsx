import React from "react";
import "../../css/CheckoutForm/CheckoutForm.css";
import Input from "../Input/Input";
import Zoom from "react-reveal/Zoom";

const CheckoutForm = (props) => {
  return (
    <>
      {props.showForm && (
        <div className="checkout-form">
          <span className="close-icon" onClick={() => props.setShowForm(false)}>
            &times;
          </span>
          <Zoom>
            <form onSubmit={props.submitOrder}>
              <Input
                label="Name"
                type="text"
                name="name"
                handelChange={props.handelChange}
              />
              <Input
                label="Email"
                type="email"
                name="email"
                handelChange={props.handelChange}
              />
              <div>
                <button type="submit">checkout</button>
              </div>
            </form>
          </Zoom>
        </div>
      )}
    </>
  );
};

export default CheckoutForm;
