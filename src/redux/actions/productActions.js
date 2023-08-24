// productActions.js
import {
  GET_PRODUCTS,
  CREATE_PRODUCT,
  UPDATE_PRODUCT,
  DELETE_PRODUCT,
} from "./actionTypes";

export const getProducts = () => {
  return {
    type: GET_PRODUCTS,
    // ...
  };
};

// Diğer action'lar da benzer şekilde tanımlanabilir
