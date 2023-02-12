import { CLEAR_CART, CLEAR_ORDER, CREATE_ORDER, FETCH_ORDERS } from "./types";

export const createOrder = (order) => {
  return (dispatch) => {
    fetch("http://localhost:5000/api/orders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(order),
    })
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: CREATE_ORDER, data: { order: data } });
      });

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
    fetch("http://localhost:5000/api/orders")
      .then((response) => response.json())
      .then((data) => {
        dispatch({
          type: FETCH_ORDERS,
          data: { orders: data },
        });
      });
  };
};
