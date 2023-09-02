import axios from "axios";
import {
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
} from "./actionTypes";

const API_URL = "/api/products";

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
    axios
      .get(API_URL)
      .then((response) => {
        dispatch(fetchProductsSuccess(response.data)); // Başarılı sonuç aksiyonu
      })
      .catch((error) => {
        dispatch(fetchProductsFailure(error)); // Hata durumu aksiyonu
      });
  };
};

// // Diğer eylemleri burada güncelleyebilirsiniz
// const createProductRequest = () => {
//   return { type: CREATE_PRODUCT_REQUEST };
// };

// const createProductSuccess = (product) => {
//   return { type: CREATE_PRODUCT_SUCCESS, payload: product };
// };

// const createProductFailure = (error) => {
//   return { type: CREATE_PRODUCT_FAILURE, error: error };
// };

// export const createProduct = (productData) => {
//   return (dispatch) => {
//     dispatch(createProductRequest()); // İstek başladığında isteği belirten aksiyon
//     axios
//       .post(API_URL, productData, {
//         headers: {
//           "Content-Type": "application/json",
//         },
//       })
//       .then((response) => {
//         dispatch(createProductSuccess(response.data)); // Başarılı sonuç aksiyonu
//       })
//       .catch((error) => {
//         dispatch(createProductFailure(error)); // Hata durumu aksiyonu
//       });
//   };
// };