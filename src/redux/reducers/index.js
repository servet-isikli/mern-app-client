// src/redux//reducers/index.js
import { combineReducers } from "redux";
import productReducer from "./reducers/productReducer";
import userReducer from "./reducers/userReducer"; // Örnek olarak kullanıcı reducer'ını ekleyin

const rootReducer = combineReducers({
  products: productReducer,
  users: userReducer, // Örnek olarak kullanıcı reducer'ını ekleyin
  // Diğer reducer'ları da burada ekleyebilirsiniz
});

export default rootReducer;
