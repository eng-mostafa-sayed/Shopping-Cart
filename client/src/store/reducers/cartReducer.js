import { ADD_CART, CLEAR_CART, REMOVE_CART, GET_CART } from "../actions/types";

export const cartReducer = (
  state = { cartItems: JSON.parse(localStorage.getItem("cartItems")) || [] },
  action
) => {
  switch (action.type) {
    case GET_CART:
      return { cartItems: action.data.cartItems };
    case ADD_CART:
      return { cartItems: action.data.cartItems };
    case REMOVE_CART:
      return { cartItems: action.data.cartItems };
    case CLEAR_CART:
      return { ...state, products: [] };
    default:
      return state;
  }
};
