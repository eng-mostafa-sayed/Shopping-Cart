import { FETCH_PRODUCTS } from "./types";
import axios from "axios";
export const fetchProducts = () => {
  return async (dispatch) => {
    const res = await axios.get("http://localhost:5000/api/products");
    dispatch({
      type: FETCH_PRODUCTS,
      data: res.data,
    });
    console.log("response");
    console.log(res.data);
    // fetch("/api/products")
    //   .then((res) => res.json())
    //   .then((data) => {
    //     dispatch({
    //       type: FETCH_PRODUCTS,
    //       data: data,
    //     });
    //   });
  };
};
