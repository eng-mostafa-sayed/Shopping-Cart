import React from "react";

const CheckoutSuccess = () => {
  return (
    <div style={{ width: "750px", margin: "auto", paddingTop: "10vh" }}>
      <h1 style={{ color: "green", textAlign: "center" }}>
        Thanks for your order!
      </h1>
      <p>
        We appreciate your business! If you have any questions, please email
        <a href="mailto:orders@example.com"> orders@example.com</a>.
      </p>
    </div>
  );
};

export default CheckoutSuccess;
