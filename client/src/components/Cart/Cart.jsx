import React, { useState } from "react";
import "../../css/Cart/Cart.css";
import Checkout from "../CheckoutForm/Checkout";
import Bounce from "react-reveal/Bounce";
import { connect } from "react-redux";
import { removeCart } from "../../store/actions/cart";
import { getCart } from "../../store/actions/cart";

import OrderModal from "./OrderModal";
import { createOrder, clearOrder } from "../../store/actions/orders";
import { words } from "../../words";
import axios from "axios";

function Cart(props) {
  const [showForm, setShowForm] = useState(false);
  const [value, setValue] = useState("");

  const submitOrder = (e) => {
    const cartItems = props.cartItems;

    axios
      .post(
        "https://shopping-cart-oryj.onrender.com/api/strip/create-checkout-session",
        {
          cartItems,
        }
      )
      .then((response) => {
        if (response.data.url) {
          console.log(response.data.url);
          window.location.href = response.data.url;
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
    const total = props.cartItems.reduce(
      (acc, item) => acc + item.price * item.qty,
      0
    );

    e.preventDefault();
    const order = {
      name: value.name,
      email: value.email,
      products: props.cartItems,
      subTotal: total,
      total: total,
      shipping: { address: value.address },
      phone: value.phone,
    };
    console.log(order.products);
    props.createOrder(order);
  };

  const closeModal = () => {
    props.clearOrder();
    setShowForm(false);
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
        {props.cartItems.length === 0
          ? `cart empty`
          : `${words.cartHeader} ${
              props.cartItems.length > 1 ? "are " : "is "
            } ${props.cartItems.length}` +
            `${props.cartItems.length > 1 ? " products" : " product"} ${
              words.cartHeaderEnd
            }`}
      </div>
      {/* Modal */}
      <OrderModal
        cartItems={props.cartItems}
        order={props.order}
        closeModal={closeModal}
      />
      <Bounce bottom cascade>
        <div className="cart-items">
          {props.cartItems.map((item) => (
            <div className="cart-item" key={item.id}>
              <img src={item.imageUrl} alt="" />
              <div className="cart-info">
                <div>
                  <p>
                    {" "}
                    {words.cartTitle} : {item.title}{" "}
                  </p>
                  <p>
                    {words.cartQty}: {item.qty}{" "}
                  </p>
                  <p>
                    {" "}
                    {words.cartPrice}: ${item.price}{" "}
                  </p>
                </div>
                <button onClick={() => props.removeCart(item)}>
                  {words.removeBtn}
                </button>
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
              return acc + p.price * p.qty;
            }, 0)}{" "}
          </div>
          <button onClick={() => setShowForm(true)}>
            {" "}
            {words.selectProducts}
          </button>
        </div>
      )}

      {/* Checkout Form  */}
      <Checkout
        showForm={showForm}
        submitOrder={submitOrder}
        setShowForm={setShowForm}
        handleChange={handleChange}
        value={value}
      />
    </div>
  );
}

export default connect(
  (state) => {
    return {
      order: state.order.order,
      cartItems: state.cart.cartItems,
    };
  },
  { removeCart, createOrder, clearOrder, getCart }
)(Cart);
