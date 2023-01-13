import React, { useState } from "react";
import "../../css/Cart/Cart.css";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
const Cart = (props) => {
  const [showForm, setShowForm] = useState(false);
  const [value, setValue] = useState("");

  const submitOrder = (e) => {
    e.preventDefault();
    const order = {
      name: value.name,
      email: value.email,
    };
    console.log(order);
  };

  const handelChange = (e) => {
    setValue((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <div className="cart-wrapper">
      <div className="cart-title">
        {props.itemsLength === 0
          ? `cart empty`
          : `There is ${props.itemsLength}` +
            `${props.itemsLength > 1 ? " products" : " product"}`}
      </div>
      <div className="cart-items">
        {props.cartItems.map((item) => (
          <div className="cart-item" key={item.id}>
            <img src={item.imageUrl} alt={item.title} />
            <div className="cart-info">
              <p>title: {item.title}</p>
              <p>qty: {item.qty ? item.qty : 0}</p>
              <p>price/item: {item.price}$</p>
            </div>
            <button onClick={() => props.removeFromCart(item)}>Remove</button>
          </div>
        ))}
      </div>
      {props.cartItems.Length !== 0 && (
        <div className="cart-footer">
          <div className="total">
            total price : $
            {props.cartItems.reduce((acc, p) => {
              if (p.qty === 1) return acc + p.price;
              else {
                return acc + p.price * p.qty;
              }
            }, 0)}
          </div>
          <button
            onClick={() => {
              setShowForm(true);
              console.log("lol");
            }}
          >
            select product
          </button>
        </div>
      )}
      {/*checkout form */}
      <CheckoutForm
        showForm={showForm}
        setShowForm={setShowForm}
        value={value}
        setValue={setValue}
        submitOrder={submitOrder}
        handelChange={handelChange}
      />
    </div>
  );
};

export default Cart;
