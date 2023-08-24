// src/redux/actions/productActions.js
import { getProducts } from "../api";

export const fetchProducts = () => {
  return async (dispatch) => {
    try {
      const products = await getProducts();
      dispatch({ type: "SET_PRODUCTS", payload: products });
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
};
