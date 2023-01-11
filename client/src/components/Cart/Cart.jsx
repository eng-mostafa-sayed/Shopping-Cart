import React from "react";
import "../../css/Cart/Cart.css";
const Cart = (props) => {
  return (
    <div className="cart-wrapper">
      <div className="cart-title">
        {props.itemsLength == 0
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
    </div>
  );
};

export default Cart;
