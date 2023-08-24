// actions/productActions.js
import { getProducts } from "../api";
import {
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
} from "./actionTypes";

const fetchProductsRequest = () => {
  return { type: FETCH_PRODUCTS_REQUEST };
};

const fetchProductsSuccess = (products) => {
  return { type: FETCH_PRODUCTS_SUCCESS, payload: products };
};

const fetchProductsFailure = (error) => {
  return { type: FETCH_PRODUCTS_FAILURE, error: error };
};

export const fetchProducts = () => {
  return (dispatch) => {
    dispatch(fetchProductsRequest()); // İstek başladığında isteği belirten aksiyon
    getProducts()
      .then((data) => {
        dispatch(fetchProductsSuccess(data)); // Başarılı sonuç aksiyonu
      })
      .catch((error) => {
        dispatch(fetchProductsFailure(error)); // Hata durumu aksiyonu
      });
  };
};

// Diğer eylemleri burada güncelleyebilirsiniz
