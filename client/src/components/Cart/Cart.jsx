import React, { useState } from "react";
import "../../css/Cart/Cart.css";
import Checkout from "../CheckoutForm/Checkout";
import Bounce from "react-reveal/Bounce";
import Modal from "react-modal";
import { connect } from "react-redux";
import { removeCart } from "../../store/actions/cart";
import OrderModal from "./OrderModal";
function Cart(props) {
  const [showForm, setShowForm] = useState(false);
  const [order, setOrder] = useState(false);
  const [value, setValue] = useState("");

  const submitOrder = (e) => {
    e.preventDefault();
    const order = {
      name: value.name,
      email: value.email,
    };
    setOrder(order);
  };

  const closeModal = () => {
    setOrder(false);
  };

  const handleChange = (e) => {
    setValue((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="cart-wrapper">
      <div className="cart-title">
        {" "}
        {props.cartItems.length === 0 ? (
          "Cart Empty"
        ) : (
          <p>There is {props.cartItems.length} products in cart</p>
        )}{" "}
      </div>
      {/* Modal */}
      <OrderModal
        cartItems={props.cartItems}
        closeModal={closeModal}
        order={order}
      />
      <Bounce bottom cascade>
        <div className="cart-items">
          {props.cartItems.map((item) => (
            <div className="cart-item" key={item.id}>
              <img src={item.imageUrl} alt="" />
              <div className="cart-info">
                <div>
                  <p> title {item.title} </p>
                  <p> qty: {item.qty} </p>
                  <p> price: ${item.price} </p>
                </div>
                <button onClick={() => props.removeCart(item)}>Remove</button>
              </div>
            </div>
          ))}
        </div>
      </Bounce>
      {props.cartItems.length !== 0 && (
        <div className="cart-footer">
          <div className="total">
            Total : $
            {props.cartItems.reduce((acc, p) => {
              return acc + p.price;
            }, 0)}{" "}
          </div>
          <button onClick={() => setShowForm(true)}> select products </button>
        </div>
      )}

      {/* Checkout Form  */}
      <Checkout
        showForm={showForm}
        submitOrder={submitOrder}
        setShowForm={setShowForm}
        handleChange={handleChange}
      />
    </div>
  );
}

export default connect(
  (state) => {
    return {
      cartItems: state.cart.cartItems,
    };
  },
  { removeCart }
)(Cart);
