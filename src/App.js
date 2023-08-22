import React from "react";
import Home from "./pages/Home";
import ProductDetailPage from "./pages/ProductDetailPage";
import AddProduct from "./pages/AddProduct";
import EditProduct from "./pages/EditProduct";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product/:id" element={<ProductDetailPage />} />
      <Route path="/add" element={<AddProduct />} />
      <Route path="/edit/:id" element={<EditProduct />} />
    </Routes>
  );
};

export default App;
