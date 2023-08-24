// store.js
import { createStore } from "redux";
import rootReducer from "./reducers"; // Bu, reducer'larınızın toplandığı bir dosya olmalı

const store = createStore(rootReducer);

export default store;
