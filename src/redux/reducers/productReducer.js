// reducers/productReducer.js
const initialState = {
  products: [],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      // Durumu güncelleyerek ürünleri alma işlemini gerçekleştir
      return {
        ...state,
        products: action.payload,
      };
    // Diğer case'ler burada olabilir
    default:
      return state;
  }
};

export default productReducer;
