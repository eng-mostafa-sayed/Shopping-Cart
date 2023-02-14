import React from "react";
import "../css/Checkout-success.css";
const CheckoutSuccess = () => {
  return (
    <div className="success-wrapper">
      <h1 className="success-header">Thanks for your order!</h1>
      <p>
        We appreciate your business! If you have any questions, please email
        <a href="mailto:orders@example.com"> orders@example.com</a>.
      </p>
    </div>
  );
};

export default CheckoutSuccess;
