import React from "react";
import Home from "./pages/Home";
import ProductDetailPage from "./pages/ProductDetailPage";
import CreateProductPage from "./pages/CreateProductPage";
import UpdateProductPage from "./pages/UpdateProductPage";
import { Route, Routes } from "react-router-dom";
import ProductGet from "./components/ProductGet";

import ProductDetail from "./components/ProductDetail";
import ProductCreate from "./components/ProductCreate";
import ProductUpdate from "./components/ProductUpdate";
import ProductDelete from "./components/ProductDelete";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />{" "}
      <Route path="/create" element={<CreateProductPage />} />
      <Route path="/update/:productId" element={<UpdateProductPage />} />
      <Route path="/detail/:productId" element={<ProductDetailPage />} />
      <Route path="/delete/:productId" element={<ProductDelete />} />

      <Route path="/1" element={<ProductGet />} />
      <Route path="/2/:productId" element={<ProductDetail />} />
      <Route path="/3" element={<ProductCreate />} />
      <Route path="/4/:productId" element={<ProductUpdate />} />
      <Route path="/5/:productId" element={<ProductDelete />} />
    </Routes>
  );
};

export default App;
