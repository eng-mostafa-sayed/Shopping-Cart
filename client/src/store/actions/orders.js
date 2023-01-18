import { CLEAR_CART, CLEAR_ORDER, CREATE_ORDER, FETCH_ORDERS } from "./types";

export const createOrder = (order) => {
  return (dispatch) => {
    fetch("https://shopping-cart-oryj.onrender.com/api/orders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(order),
    })
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: CREATE_ORDER, data: { order: data } });
      });
    localStorage.clear("cartItems");
    dispatch({ type: CLEAR_CART });
  };
};

export const clearOrder = (order) => {
  return (dispatch) => {
    dispatch({ type: CLEAR_ORDER });
  };
};

export const fetchOrders = () => {
  return (dispatch) => {
    fetch("https://shopping-cart-oryj.onrender.com/api/orders")
      .then((response) => response.json())
      .then((data) => {
        dispatch({
          type: FETCH_ORDERS,
          data: { orders: data },
        });
      });
  };
};
