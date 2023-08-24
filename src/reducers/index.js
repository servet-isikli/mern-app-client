// reducers/index.js
import { combineReducers } from "redux";
import productReducer from "./productReducer"; // Örnek olarak bir reducer

const rootReducer = combineReducers({
  products: productReducer,
  // Diğer reducer'ları da buraya ekleyebilirsiniz
});

export default rootReducer;
